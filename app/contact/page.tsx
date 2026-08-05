import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Contact Donna and Kenton Bruice directly about Vatulé. Call or text +1 (970) 456-3115, email info@vatule.com, or send your dates below.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="We look forward to hosting you"
        intro="Send us your dates and we will reply personally — your inquiry comes straight to the owners."
        image="/images/sunset-terrace.jpg"
        alt="The terrace at Vatulé at sunset"
      />

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Direct contact */}
          <aside className="reveal lg:col-span-4">
            <p className="eyebrow">Speak with us</p>
            <div className="rule mt-7" />

            <div className="mt-9 space-y-9">
              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Call or text
                </p>
                <a
                  href="tel:+19704563115"
                  className="mt-2 block font-display text-3xl font-light text-[var(--color-ink)] transition-colors hover:text-[var(--color-brass)]"
                >
                  +1 (970) 456-3115
                </a>
              </div>

              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Email
                </p>
                <a
                  href="mailto:info@vatule.com"
                  className="mt-2 block text-lg text-[var(--color-ink)] transition-colors hover:text-[var(--color-brass)]"
                >
                  info@vatule.com
                </a>
              </div>

              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  The estate
                </p>
                <p className="mt-2 leading-relaxed text-[var(--color-muted)]">
                  La Punta Estates
                  <br />
                  Punta Mita, Nayarit
                  <br />
                  México
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-[var(--color-border)] pt-8">
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Nightly rates run from $7,500 to $22,000 plus 16% VAT, depending on the
                season. We do not charge service or cleaning fees.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="reveal lg:col-span-8">
            <p className="eyebrow">Booking request</p>
            <h2 className="mt-7 font-display text-3xl font-light sm:text-4xl">
              Tell us about your stay
            </h2>
            <div className="rule mt-8" />
            <div className="mt-12">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
