import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Amenities & Service",
  description:
    "Vatulé is fully staffed — day-long housekeeping, a chef and culinary team, concierge and two six-seater golf carts — with a 72-foot infinity pool, jacuzzi for fourteen and 27 outdoor speakers.",
  alternates: { canonical: "/amenities" },
};

const INDOOR = [
  "Air conditioning in all bedrooms",
  "20-seat and 12-seat formal dining",
  "Media room with large-screen TV",
  "High-speed WiFi throughout the estate",
  "Independent audio in every area (Control 4)",
  "Fully equipped kitchen with breakfast bar",
  "12-seat breakfast table",
  "100% purified water — reverse osmosis, UV and carbon filtration throughout",
  "US standard 110–220v outlets",
];

const OUTDOOR = [
  "Oceanfront position on the Point",
  "72-foot infinity lap pool",
  "Jacuzzi for fourteen, overlooking the ocean",
  "Multiple elevated decks and two rooftop terraces",
  "Direct access to the Bahía (The Cove) surf break",
  "50-yard playing field for lawn games",
  "Alfresco dining, barbecue and wet bar",
  "Daybed palapa and four adjustable poolside umbrellas",
  "Fire pit, sun loungers and lush tropical gardens",
  "27 outdoor speakers across the 1.5-acre property",
];

const STAFF = [
  ["Housekeeping", "Day-long housekeeping throughout your stay."],
  [
    "Chef & culinary team",
    "A chef with his culinary team, including a server and bartender, for breakfast, lunch and dinner.",
  ],
  ["Concierge", "On hand to arrange anything, in fluent English."],
  ["Two golf carts", "Two six-seater golf carts for the estate and resort."],
  ["Bicycles", "Bicycles for adults and children."],
  [
    "Laundry & packing",
    "In-house laundry, with unpacking and packing service on request.",
  ],
];

const RESORT = [
  "Two Jack Nicklaus golf courses",
  "Tennis club",
  "Fitness centre",
  "The Residents Beach Club",
  "Kupuri Beach Club",
  "El Surf Club",
  "The Seabreeze Beach Club at the St. Regis",
];

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Amenities & Service"
        title="Everything, already taken care of"
        intro="Vatulé arrives fully staffed. You bring the people; the rest is handled."
        image="/images/outdoor-lounge.jpg"
        alt="Shaded outdoor living area with wet bar at Vatulé"
      />

      {/* Staff */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Included staff</p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl md:text-[2.75rem]">
              A full house team, included in every stay
            </h2>
            <div className="rule mt-8" />
            <p className="mt-8 text-base leading-loose text-[var(--color-muted)]">
              The estate includes all staff: day-long housekeeping, a chef with
              his culinary team including a server &amp; bartender for breakfast,
              lunch &amp; dinner, concierge, and two six-seater golf carts.
            </p>
          </div>

          <dl className="mt-14 grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {STAFF.map(([t, b]) => (
              <div
                key={t}
                className="reveal border-t border-[var(--color-border)] pt-6"
              >
                <dt className="font-display text-2xl font-light">{t}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {b}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Outdoor feature band */}
      <section className="bg-[var(--color-ink)] px-5 py-24 text-white sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="img-frame reveal relative h-[420px] w-full sm:h-[560px]">
            <Image
              src="/images/daybed-palapa.jpg"
              alt="The daybed palapa beside the infinity pool at Vatulé"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[var(--color-brass-light)]">
              Outdoors
            </p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl">
              The estate outside
            </h2>
            <div className="mt-8 h-px w-12 bg-[var(--color-brass-light)]" />
            <ul className="mt-9 space-y-4">
              {OUTDOOR.map((f) => (
                <li key={f} className="flex gap-4 text-white/70">
                  <span className="mt-[0.6rem] h-px w-5 shrink-0 bg-[var(--color-brass)]" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Indoor */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal order-2 lg:order-1">
            <p className="eyebrow">Indoors</p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl">
              The estate inside
            </h2>
            <div className="rule mt-8" />
            <ul className="mt-9 space-y-4">
              {INDOOR.map((f) => (
                <li key={f} className="flex gap-4 text-[var(--color-muted)]">
                  <span className="mt-[0.6rem] h-px w-5 shrink-0 bg-[var(--color-brass)]" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="img-frame reveal relative order-1 h-[420px] w-full sm:h-[560px] lg:order-2">
            <Image
              src="/images/kitchen.jpg"
              alt="The gourmet kitchen at Vatulé"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Resort access */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-sand)] px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow reveal">Inside the gates</p>
          <h2 className="reveal mt-7 font-display text-3xl font-light sm:text-4xl">
            Punta Mita resort access
          </h2>
          <div className="rule mx-auto mt-8" />
          <p className="reveal mt-8 leading-loose text-[var(--color-muted)]">
            Vatulé sits in La Punta, on the south side of the St. Regis and Four
            Seasons resorts. Guests have access to:
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-4">
            {RESORT.map((r) => (
              <li
                key={r}
                className="reveal border border-[var(--color-stone)] px-5 py-2.5 text-sm text-[var(--color-ink)]"
              >
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs leading-relaxed text-[var(--color-muted)]">
            A nominal access fee is collected by Punta Mita Master
            Condominium&rsquo;s HOA.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 text-center sm:py-28">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-light sm:text-4xl">
            Book your stay at Vatulé
          </h2>
          <div className="rule mx-auto mt-7" />
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
