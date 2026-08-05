import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "The Estate",
  description:
    "Vatulé is a beachfront estate in La Punta Estates, Punta Mita — named for the Bruice family's three children and built for the way families actually gather.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vatulé"
        title="A family home, built for gathering"
        intro="Named after Donna and Kenton Bruice's three children — Valen, Tulah and Leighton."
        image="/images/estate-portrait.jpg"
        alt="Vatulé's oceanfront elevation seen from the lawn"
      />

      {/* Opening statement */}
      <section className="px-6 py-24 sm:py-32">
        <div className="reveal mx-auto max-w-3xl">
          <p className="eyebrow">Luxury at its best</p>
          <div className="rule mt-7" />
          <p className="mt-9 font-display text-2xl font-light leading-relaxed text-[var(--color-ink)] sm:text-[1.75rem]">
            Vatulé is a beachfront property in the exclusive gated community of
            La Punta Estates, sitting on the same latitude as Hawaii — which
            gives it near-perfect weather all year.
          </p>
          <div className="mt-10 space-y-6 text-base leading-loose text-[var(--color-muted)]">
            <p>
              It is the ideal property for a family gathering, a friends&rsquo;
              getaway, a golf trip, or a corporate retreat. The villa was
              designed to merge inside and out seamlessly, and the views are
              breathtaking in every direction — ocean, mountains and golf
              course. Fresh ocean breezes and natural light move through the
              house all day.
            </p>
            <p>
              The interior is understated: several lounge areas in designer
              furnishings, stained wood, and neutral, relaxing textures. Raw
              exposed beams and stone run throughout. Palapa roofing and swaying
              palms provide shade and shelter from the sun.
            </p>
          </div>
        </div>
      </section>

      {/* Interior */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="img-frame reveal relative h-[420px] w-full sm:h-[560px]">
            <Image
              src="/images/great-room.jpg"
              alt="The great room at Vatulé, open to the terrace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">The kitchen &amp; table</p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl">
              Three meals a day, however you want them
            </h2>
            <div className="rule mt-8" />
            <p className="mt-8 text-base leading-loose text-[var(--color-muted)]">
              A five-star gourmet kitchen comes with your private chef, server
              and bartender, who will look after you and your guests throughout
              your stay. Three daily meals are enjoyed in either of the two
              formal dining rooms — one seats twenty, the other twelve — or
              alfresco, overlooking the pool and the ocean.
            </p>
            <p className="mt-6 text-base leading-loose text-[var(--color-muted)]">
              In the evening, settle into the media room for a film. During the
              day, the infinity pool, hot tub and sun loungers. After dinner,
              the fire pit and the sunset.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/grounds-palms.jpg"
          alt="Palms and lawn on the grounds at Vatulé"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(13,26,32,0.78)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center text-white sm:py-36">
          <p className="reveal font-display text-3xl font-light leading-snug sm:text-4xl">
            &ldquo;The ideal place to connect with loved ones, in the safest
            possible environment.&rdquo;
          </p>
          <div className="mx-auto mt-9 h-px w-12 bg-[var(--color-brass-light)]" />
          <p className="mt-7 text-[0.7rem] uppercase tracking-[0.28em] text-white/50">
            Donna &amp; Kenton Bruice
          </p>
        </div>
      </section>

      {/* Getting around */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal order-2 lg:order-1">
            <p className="eyebrow">Getting around</p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl">
              Two golf carts and a fleet of bicycles
            </h2>
            <div className="rule mt-8" />
            <p className="mt-8 text-base leading-loose text-[var(--color-muted)]">
              The estate provides two six-seater golf carts and bicycles for
              adults and children — everything you need for the short ride to
              the tennis courts, the golf courses and the beach clubs, all
              inside the resort&rsquo;s gates.
            </p>
            <p className="mt-6 text-base leading-loose text-[var(--color-muted)]">
              Further afield, take a day trip into Puerto Vallarta, an hour down
              the coast, for the boutiques and the Malecón — or forty minutes to
              Sayulita for its restaurants and shops.
            </p>
            <Link
              href="/location"
              className="mt-10 inline-block border-b border-[var(--color-brass)] pb-1 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-brass)] transition-colors hover:text-[var(--color-brass-dark)]"
            >
              Explore the Location
            </Link>
          </div>
          <div className="img-frame reveal relative order-1 h-[420px] w-full sm:h-[560px] lg:order-2">
            <Image
              src="/images/estate-grounds.jpg"
              alt="The grounds and buildings of Vatulé"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-sand)] px-6 py-24 text-center sm:py-28">
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
