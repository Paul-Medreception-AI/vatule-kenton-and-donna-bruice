import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Vatulé sits in La Punta Estates on the Point, inside the gated community of Punta Mita — minutes by golf cart from the golf clubs, tennis and the resort beach clubs.",
  alternates: { canonical: "/location" },
};

const NEARBY: [string, string][] = [
  ["St. Regis Beach Club", "5-minute golf cart ride"],
  ["Bahía & Pacífico Golf Clubs", "5-minute golf cart ride"],
  ["Tennis courts", "10-minute golf cart ride"],
  ["Punta Mita Residents Beach Club", "15-minute golf cart ride"],
  ["Kupuri Beach Club", "25-minute golf cart ride"],
  ["Sayulita town — restaurants & shops", "40-minute drive"],
  ["Puerto Vallarta town", "1-hour drive"],
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Location"
        title="At the Point, inside the gates"
        intro="La Punta Estates, in the heart of the ultra-exclusive gated community of Punta Mita, Nayarit."
        image="/images/aerial-golf.jpg"
        alt="Twilight aerial of Vatulé — palapa great room, loggia, pool and lawn"
      />

      <section className="px-6 py-24 sm:py-32">
        <div className="reveal mx-auto max-w-3xl">
          <p className="eyebrow">The Point</p>
          <div className="rule mt-7" />
          <p className="mt-9 font-display text-2xl font-light leading-relaxed sm:text-[1.75rem]">
            Vatulé is situated in La Punta — &ldquo;The Point&rdquo; — on the
            south side of the St. Regis and Four Seasons resorts.
          </p>
          <div className="mt-10 space-y-6 text-base leading-loose text-[var(--color-muted)]">
            <p>
              The estate overlooks the Pacific with sunset and island views, and
              holds the best surf view and the nearest surf access in all of the
              Punta Mita development, with direct access to the Bahía (The Cove)
              break. Because it is elevated above the golf course, it keeps its
              privacy — and it is the only home here with visible sunsets every
              evening of the year.
            </p>
            <p>
              Punta Mita sits on the same latitude as Hawaii, which gives it
              near-perfect weather through the year, and the whole community is
              gated and patrolled.
            </p>
          </div>
        </div>
      </section>

      {/* Distances */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-sand)] px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="reveal text-center">
            <p className="eyebrow">Nearby</p>
            <h2 className="mt-7 font-display text-3xl font-light sm:text-4xl">
              Points of interest
            </h2>
            <div className="rule mx-auto mt-8" />
          </div>
          <dl className="mt-12 divide-y divide-[var(--color-stone)] border-y border-[var(--color-stone)]">
            {NEARBY.map(([place, time]) => (
              <div
                key={place}
                className="reveal flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-5"
              >
                <dt className="font-display text-xl font-light text-[var(--color-ink)]">
                  {place}
                </dt>
                <dd className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-brass)]">
                  {time}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Resort access */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="img-frame reveal relative h-[420px] w-full sm:h-[560px]">
            <Image
              src="/images/pool-marietas.jpg"
              alt="View toward the Marietas Islands from Vatulé"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">Resort access</p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl">
              Everything inside the gates
            </h2>
            <div className="rule mt-8" />
            <p className="mt-8 text-base leading-loose text-[var(--color-muted)]">
              Guests have full access to two Jack Nicklaus golf courses, a
              tennis club, a fitness centre, the Residents Beach Club, Kupuri
              Beach Club, El Surf Club and the Seabreeze Beach Club at the St.
              Regis.
            </p>
            <p className="mt-6 text-base leading-loose text-[var(--color-muted)]">
              The estate&rsquo;s 50-yard lawn overlooks the 17th fairway —
              Nicklaus&rsquo; favourite hole on the course.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-[var(--color-muted)]">
              A nominal access fee is collected by Punta Mita Master
              Condominium&rsquo;s HOA.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond */}
      <section className="bg-[var(--color-ink)] px-5 py-24 text-white sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="reveal text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[var(--color-brass-light)]">
            Beyond the gates
          </p>
          <h2 className="reveal mt-7 font-display text-3xl font-light sm:text-4xl">
            Sayulita and Puerto Vallarta
          </h2>
          <div className="mx-auto mt-8 h-px w-12 bg-[var(--color-brass-light)]" />
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <div className="reveal text-left">
              <h3 className="font-display text-2xl font-light">Sayulita</h3>
              <p className="mt-4 leading-relaxed text-white/65">
                Forty minutes up the coast — a surf town of restaurants,
                galleries and shops, good for an afternoon and an early dinner.
              </p>
            </div>
            <div className="reveal text-left">
              <h3 className="font-display text-2xl font-light">
                Puerto Vallarta
              </h3>
              <p className="mt-4 leading-relaxed text-white/65">
                An hour down the coast, with boutique shopping and the famous
                Malecón. The airport (PVR) is the arrival point for most guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center sm:py-28">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-light sm:text-4xl">
            Come and see it
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
