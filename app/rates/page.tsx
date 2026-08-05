import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Rates",
  description:
    "Vatulé seasonal nightly rates from $7,500 to $22,000 USD per night plus 16% VAT. We do not charge service or cleaning fees.",
  alternates: { canonical: "/rates" },
};

type Row = {
  season: string;
  rate: string;
  min: string;
  holiday?: boolean;
};

const SEASONS: Row[] = [
  { season: "January* & February", rate: "$8,500", min: "3 nights" },
  { season: "March & April", rate: "$9,500", min: "3–7 nights" },
  { season: "May & June", rate: "$8,500", min: "3 nights" },
  { season: "July, August & September", rate: "$7,500", min: "3 nights" },
  { season: "October, November* & December*", rate: "$8,500", min: "3 nights" },
];

const HOLIDAYS: Row[] = [
  { season: "Thanksgiving", rate: "$14,000", min: "7 nights", holiday: true },
  { season: "Christmas", rate: "$17,000", min: "7 nights", holiday: true },
  { season: "New Year’s Eve", rate: "$22,000", min: "7 nights", holiday: true },
];

const NOTES = [
  "All rates are quoted in US dollars per night, plus 16% VAT.",
  "$650 per day per adult for a group with more than 10 adults; not applicable to youth under 21 years of age.",
  "We do not charge service or cleaning fees.",
  "A nominal access fee is collected by Punta Mita Master Condominium’s HOA.",
  "Rates are subject to change at any point prior to confirmation.",
];

function RateRow({ r }: { r: Row }) {
  return (
    <div className="reveal flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-[var(--color-stone)] py-7">
      <div className="min-w-[14rem] flex-1">
        <p className="font-display text-2xl font-light text-[var(--color-ink)]">
          {r.season}
        </p>
        <p className="mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
          {r.min} minimum
        </p>
      </div>
      <p className="font-display text-3xl font-light text-[var(--color-ink)]">
        {r.rate}
        <span className="ml-2 text-sm text-[var(--color-muted)]">
          USD / night
        </span>
      </p>
    </div>
  );
}

export default function RatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Rates"
        title="Seasonal nightly rates"
        intro="From $7,500 to $22,000 USD per night, plus 16% VAT — for exclusive use of the entire estate, fully staffed."
        image="/images/property-dusk.jpg"
        alt="Vatulé at dusk, seen across the lawn"
      />

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="reveal text-center">
            <p className="eyebrow">By season</p>
            <h2 className="mt-7 font-display text-3xl font-light sm:text-4xl">
              The whole estate, every night
            </h2>
            <div className="rule mx-auto mt-8" />
            <p className="mt-8 leading-loose text-[var(--color-muted)]">
              Every rate below is for exclusive use of the entire estate —
              sleeping up to 26 — with the full staff included.
            </p>
          </div>

          {/* Seasonal */}
          <div className="mt-14 border-t border-[var(--color-stone)]">
            {SEASONS.map((r) => (
              <RateRow key={r.season} r={r} />
            ))}
          </div>

          <p className="reveal mt-6 text-sm text-[var(--color-muted)]">
            * Holiday periods within these months are priced separately, below.
          </p>

          {/* Holidays */}
          <div className="reveal mt-16">
            <p className="eyebrow">Holiday periods</p>
            <div className="rule mt-6" />
          </div>
          <div className="mt-8 border-t border-[var(--color-stone)]">
            {HOLIDAYS.map((r) => (
              <RateRow key={r.season} r={r} />
            ))}
          </div>

          {/* Notes */}
          <div className="reveal mt-16 border border-[var(--color-border)] bg-[var(--color-sand)] p-8 sm:p-10">
            <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
              What to know
            </h3>
            <ul className="mt-7 space-y-4">
              {NOTES.map((n) => (
                <li key={n} className="flex gap-4 text-[var(--color-ink)]">
                  <span className="mt-[0.65rem] h-px w-5 shrink-0 bg-[var(--color-brass)]" />
                  <span className="text-sm leading-relaxed">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-ink)] px-5 py-24 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[var(--color-brass-light)]">
            Included in every rate
          </p>
          <h2 className="reveal mt-7 font-display text-3xl font-light sm:text-4xl">
            The staff, the carts, the whole house
          </h2>
          <div className="mx-auto mt-8 h-px w-12 bg-[var(--color-brass-light)]" />
          <p className="reveal mt-9 text-base leading-loose text-white/75">
            The estate includes all staff: day-long housekeeping, a chef with
            his culinary team including a server &amp; bartender for breakfast,
            lunch &amp; dinner, concierge, and two six-seater golf carts.
          </p>
          <Link
            href="/amenities"
            className="mt-9 inline-block border-b border-[var(--color-brass-light)] pb-1 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-brass-light)] transition-colors hover:text-white"
          >
            See Everything Included
          </Link>
        </div>
      </section>

      <section className="px-6 py-24 text-center sm:py-28">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-light sm:text-4xl">
            Check your dates
          </h2>
          <div className="rule mx-auto mt-7" />
          <p className="mt-8 leading-loose text-[var(--color-muted)]">
            Send us the dates you have in mind and we&rsquo;ll confirm
            availability and the exact quote personally.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-block bg-[var(--color-ink)] px-12 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-[var(--color-brass)]"
          >
            Inquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
