"use server";

import { Resend } from "resend";

// Deliver to both the branded Workspace address and the owners' personal
// inbox, so an inquiry can never be lost to a mail-routing change.
const TO = ["info@vatule.com", "vatulepm@gmail.com"];

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

export type InquiryState = { ok: boolean; message: string } | null;

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

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM || "Vatulé <inquiries@vatule.com>";

  if (!apiKey) {
    console.error("RESEND_API_KEY missing; inquiry not emailed", {
      name,
      email,
      dates,
    });
    return {
      ok: false,
      message:
        "We could not send your inquiry just now. Please email info@vatule.com or call +1 (970) 456-3115.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to: TO,
      replyTo: email,
      subject: `Vatulé inquiry — ${name} — ${dates}`,
      html: `
        <h2 style="font-family:Georgia,serif">New Vatulé booking inquiry</h2>
        <table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${esc(phone) || "—"}</td></tr>
          <tr><td><strong>Dates</strong></td><td>${esc(dates)}</td></tr>
          <tr><td><strong>Party</strong></td><td>${esc(party)}</td></tr>
          <tr><td valign="top"><strong>Comments</strong></td><td>${
            esc(comments).replace(/\n/g, "<br>") || "—"
          }</td></tr>
        </table>
      `,
    });
  } catch (error) {
    console.error("Failed to send Vatulé inquiry", error);
    return {
      ok: false,
      message:
        "Something went wrong sending your inquiry. Please email info@vatule.com directly.",
    };
  }

  return {
    ok: true,
    message:
      "Thank you — your inquiry has been received. We will reply personally within 24 hours.",
  };
}
