"use server";

import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

// Deliver to both the branded Workspace address and the owners' personal
// inbox, so an inquiry can never be lost to a mail-routing change.
const TO = ["info@vatule.com", "vatulepm@gmail.com"];

const FROM = process.env.INQUIRY_FROM || "Vatulé <inquiries@vatule.com>";

// Vercel functions run on Lambda, where AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY
// / AWS_REGION are reserved by the runtime and cannot be set as project env
// vars. Use our own names and pass the credentials to the client explicitly.
const REGION = process.env.SES_REGION || "us-east-1";
const ACCESS_KEY_ID = process.env.SES_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.SES_SECRET_ACCESS_KEY;

function s(v: FormDataEntryValue | null) {
  return typeof v === "string" ? v.trim() : "";
}

function esc(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Strip CR/LF so a hostile value can't inject extra headers.
function hdr(v: string) {
  return v.replace(/[\r\n]+/g, " ").slice(0, 320);
}

export type InquiryState = { ok: boolean; message: string } | null;

const FALLBACK =
  "Please email info@vatule.com or call +1 (970) 456-3115 and we will look after you directly.";

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  // Honeypot — bots fill hidden fields, humans don't.
  if (s(formData.get("company"))) {
    return { ok: true, message: "Thank you — your inquiry has been received." };
  }

  const first = s(formData.get("firstName"));
  const last = s(formData.get("lastName"));
  const email = s(formData.get("email"));
  const phone = s(formData.get("phone"));
  const checkIn = s(formData.get("checkIn"));
  const checkOut = s(formData.get("checkOut"));
  const adults = s(formData.get("adults"));
  const children = s(formData.get("children"));
  const comments = s(formData.get("comments"));

  if (!first || !email) {
    return { ok: false, message: "Please provide your name and email." };
  }

  const name = [first, last].filter(Boolean).join(" ");
  const dates =
    checkIn && checkOut ? `${checkIn} → ${checkOut}` : checkIn || "Not specified";
  const party =
    [adults && `${adults} adults`, children && `${children} youth`]
      .filter(Boolean)
      .join(", ") || "Not specified";

  if (!ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
    console.error("SES credentials missing; inquiry not emailed", {
      name,
      email,
      dates,
    });
    return { ok: false, message: `We could not send your inquiry. ${FALLBACK}` };
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Dates", dates],
    ["Party", party],
  ];

  const html = `
    <div style="font-family:Georgia,serif;color:#16262e">
      <h2 style="font-weight:400">New Vatulé booking inquiry</h2>
      <table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="color:#6f7b80"><strong>${k}</strong></td><td>${esc(
                v
              )}</td></tr>`
          )
          .join("")}
        <tr><td style="color:#6f7b80" valign="top"><strong>Comments</strong></td><td>${
          esc(comments).replace(/\n/g, "<br>") || "—"
        }</td></tr>
      </table>
    </div>`;

  const text = [
    "New Vatulé booking inquiry",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    `Comments: ${comments || "—"}`,
  ].join("\n");

  try {
    const ses = new SESv2Client({
      region: REGION,
      credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
      },
    });

    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: FROM,
        Destination: { ToAddresses: TO },
        // Replying to the notification replies straight to the guest.
        ReplyToAddresses: [hdr(email)],
        Content: {
          Simple: {
            Subject: {
              Data: hdr(`Vatulé inquiry — ${name} — ${dates}`),
              Charset: "UTF-8",
            },
            Body: {
              Html: { Data: html, Charset: "UTF-8" },
              Text: { Data: text, Charset: "UTF-8" },
            },
          },
        },
      })
    );
  } catch (error) {
    console.error("Failed to send Vatulé inquiry via SES", error);
    return {
      ok: false,
      message: `Something went wrong sending your inquiry. ${FALLBACK}`,
    };
  }

  return {
    ok: true,
    message:
      "Thank you — your inquiry has been received. We will reply personally within 24 hours.",
  };
}
