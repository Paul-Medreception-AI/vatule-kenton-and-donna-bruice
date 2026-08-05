import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Suites",
  description:
    "Vatulé sleeps up to 26 across five king suites — all with Pacific Ocean views and private entrances — plus a youth bunk house sleeping twelve with its own media room.",
  alternates: { canonical: "/suites" },
};

const SUITES = [
  {
    n: "01",
    name: "Primary Suite",
    img: "/images/suite-primary.jpg",
    alt: "The primary king suite at Vatulé, opening to a Pacific-facing terrace",
    features: [
      "King bed with Italian linens",
      "Pacific Ocean view",
      "En-suite bath with indoor and outdoor showers",
      "Private terrace",
      "Safe · HD TV · Control 4 sound system",
    ],
  },
  {
    n: "02",
    name: "King Suite Two",
    img: "/images/suite-two.jpg",
    alt: "Second king suite at Vatulé with ocean view and private entrance",
    features: [
      "King bed with Italian linens",
      "Pacific Ocean view",
      "En-suite bath with indoor and outdoor showers",
      "Private terrace",
      "Safe · HD TV · Control 4 sound system",
    ],
  },
  {
    n: "03",
    name: "King Suite Three",
    img: "/images/suite-three.jpg",
    alt: "Third king suite at Vatulé with ocean view",
    features: [
      "King bed with Italian linens",
      "Pacific Ocean view",
      "En-suite bath with indoor and outdoor showers",
      "Private terrace",
      "Safe · HD TV · Control 4 sound system",
    ],
  },
  {
    n: "04",
    name: "King Suite Four",
    img: "/images/suite-four.jpg",
    alt: "Fourth king suite at Vatulé with private balcony",
    features: [
      "King bed with Italian linens",
      "Pacific Ocean view",
      "En-suite bath",
      "Private balcony",
      "Safe · HD TV · Control 4 sound system",
    ],
  },
  {
    n: "05",
    name: "King Suite Five",
    img: "/images/suite-five.jpg",
    alt: "Fifth king suite at Vatulé with private balcony",
    features: [
      "King bed with Italian linens",
      "Pacific Ocean view",
      "En-suite bath",
      "Private balcony",
      "Safe · HD TV · Control 4 sound system",
    ],
  },
  {
    n: "06",
    name: "Youth Bunk House",
    img: "/images/bunk-house.jpg",
    alt: "The youth bunk house at Vatulé with twelve custom built-in twin beds",
    features: [
      "Twelve twin beds",
      "Two bathrooms",
      "Second-floor media room with HD TV and Xbox",
      "Large rooftop terrace with 360° views",
    ],
  },
];

export default function SuitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title="Room for everyone"
        intro="Five king suites, all with Pacific Ocean views and private entrances, plus a youth bunk house that sleeps twelve with its own media room."
        image="/images/suite-four.jpg"
        alt="A king suite at Vatulé at twilight, the pool and sunset ocean beyond"
      />

      <section className="px-6 py-24 sm:py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">Sleeps up to 26</p>
          <div className="rule mx-auto mt-7" />
          <p className="mt-9 font-display text-2xl font-light leading-relaxed sm:text-[1.75rem]">
            Vatulé is designed for five couples and their children — five king
            suites for the adults, and a bunk house of their own for the young.
          </p>
        </div>
      </section>

      {/* Suite list — alternating */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="space-y-24 sm:space-y-32">
            {SUITES.map((s, i) => (
              <article
                key={s.n}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <div
                  className={`img-frame reveal relative h-[380px] w-full sm:h-[520px] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className={`reveal ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="font-display text-5xl font-light text-[var(--color-stone)]">
                    {s.n}
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-light sm:text-4xl">
                    {s.name}
                  </h2>
                  <div className="rule mt-7" />
                  <ul className="mt-8 space-y-4">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-4 text-[var(--color-muted)]"
                      >
                        <span className="mt-[0.6rem] h-px w-5 shrink-0 bg-[var(--color-brass)]" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shared spaces */}
      <section className="mt-24 bg-[var(--color-sand)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Beyond the bedrooms</p>
            <h2 className="mt-7 font-display text-3xl font-light sm:text-4xl">
              Where everyone ends up
            </h2>
            <div className="rule mt-8" />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                img: "/images/media-room.jpg",
                alt: "The media room at Vatulé",
                t: "Media Room",
                b: "A large screen and deep seating for the evening film — with a second media room upstairs in the bunk house.",
              },
              {
                img: "/images/dining-formal.jpg",
                alt: "Formal dining room at Vatulé",
                t: "Three Dining Areas",
                b: "The main dining room seats twenty, the second seats twelve, and the outdoor table seats ten.",
              },
              {
                img: "/images/bath.jpg",
                alt: "En-suite bath at Vatulé",
                t: "Indoor & Outdoor Baths",
                b: "Several suites open to private outdoor showers, screened by tropical planting.",
              },
            ].map((c) => (
              <article key={c.t} className="reveal">
                <div className="img-frame relative h-72 w-full">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-light">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {c.b}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center sm:py-28">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-light sm:text-4xl">
            Bring everyone
          </h2>
          <div className="rule mx-auto mt-7" />
          <p className="mt-8 leading-loose text-[var(--color-muted)]">
            Tell us who&rsquo;s coming and when, and we&rsquo;ll confirm
            availability personally.
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
