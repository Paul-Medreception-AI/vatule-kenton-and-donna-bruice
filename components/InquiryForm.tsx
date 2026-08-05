"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendInquiry, type InquiryState } from "@/app/actions/sendInquiry";

const FIELD =
  "w-full border-0 border-b border-[var(--color-border)] bg-transparent px-0 py-3 text-[var(--color-ink)] placeholder:text-[rgba(111,123,128,0.7)] focus:border-[var(--color-brass)] focus:outline-none focus:ring-0 transition-colors";

const LABEL =
  "block text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[var(--color-ink)] px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-[var(--color-brass)] disabled:opacity-60 sm:w-auto sm:px-14"
    >
      {pending ? "Sending…" : "Send Inquiry"}
    </button>
  );
}

export default function InquiryForm() {
  const [state, formAction] = useActionState<InquiryState, FormData>(
    sendInquiry,
    null
  );

  if (state?.ok) {
    return (
      <div className="border border-[rgba(176,141,87,0.4)] bg-white/60 p-10 text-center">
        <div className="mx-auto h-px w-12 bg-[var(--color-brass)]" />
        <p className="mt-6 font-display text-2xl text-[var(--color-ink)]">
          {state.message}
        </p>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          For anything urgent, call or text{" "}
          <a
            href="tel:+19704563115"
            className="text-[var(--color-brass)] underline-offset-4 hover:underline"
          >
            +1 (970) 456-3115
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="firstName">
            First name
          </label>
          <input id="firstName" name="firstName" required className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="lastName">
            Last name
          </label>
          <input id="lastName" name="lastName" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={FIELD}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="checkIn">
            Arrival
          </label>
          <input id="checkIn" name="checkIn" type="date" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="checkOut">
            Departure
          </label>
          <input id="checkOut" name="checkOut" type="date" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="adults">
            Adults
          </label>
          <input
            id="adults"
            name="adults"
            type="number"
            min="1"
            max="26"
            className={FIELD}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="children">
            Youth
          </label>
          <input
            id="children"
            name="children"
            type="number"
            min="0"
            max="26"
            className={FIELD}
          />
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="comments">
          Tell us about your stay
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={4}
          className={`${FIELD} resize-none`}
        />
      </div>

      {state && !state.ok && (
        <p className="text-sm text-red-700">{state.message}</p>
      )}

      <div className="pt-2">
        <Submit />
        <p className="mt-6 text-xs leading-relaxed text-[var(--color-muted)]">
          Your inquiry goes directly to the owners — never to a booking
          platform. We reply personally within 24 hours.
        </p>
      </div>
    </form>
  );
}
