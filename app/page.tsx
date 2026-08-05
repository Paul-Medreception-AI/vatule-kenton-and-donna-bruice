import Image from "next/image";
import Link from "next/link";
import FilmSection from "@/components/FilmSection";

const FACTS = [
  { n: "26", label: "Guests" },
  { n: "5", label: "King suites" },
  { n: "72′", label: "Infinity pool" },
  { n: "10,000", label: "Sq ft covered living" },
];

const SUITES = [
  {
    img: "/images/suite-primary.jpg",
    alt: "Primary king suite at Vatulé opening to a Pacific-facing terrace",
    title: "Five King Suites",
    body: "Each with Pacific views, private entrances, Italian linens, en-suite bath and its own sound system.",
  },
  {
    img: "/images/bunk-house.jpg",
    alt: "Vatulé's youth bunk house, custom built-in twin bunks along both walls",
    title: "Youth Bunk House",
    body: "Twelve twin beds, two baths, a second-floor media room with Xbox, and a rooftop terrace with 360° views.",
  },
  {
    img: "/images/living-twilight.jpg",
    alt: "The great room at Vatulé, beneath its palapa roof",
    title: "Two Living Rooms",
    body: "Palapa-roofed, open to the breeze, furnished in stained wood, stone and quiet neutral textures.",
  },
];

const OUTDOOR = [
  "72-foot infinity pool and a jacuzzi that seats 14",
  "Shaded outdoor living and dining with a wet bar and grill",
  "A 50-yard playing field overlooking the 17th fairway",
  "27 outdoor speakers throughout the 1.5-acre property",
  "Daybed palapa and four adjustable poolside umbrellas",
  "Two rooftop terraces, both with Pacific views",
];

const NEARBY: [string, string][] = [
  ["5 min", "St. Regis Beach Club"],
  ["5 min", "Bahía & Pacífico Golf Clubs"],
  ["10 min", "Tennis courts"],
  ["15 min", "Residents Beach Club"],
  ["25 min", "Kupuri Beach Club"],
  ["40 min", "Sayulita town"],
];

const GALLERY_TEASE = [
  { src: "/images/kitchen.jpg", alt: "The kitchen at Vatulé" },
  {
    src: "/images/terrace.jpg",
    alt: "The ocean-front loggia, with fire-pit lounge and grill",
  },
  {
    src: "/images/view-pacific.jpg",
    alt: "The pool's infinity edge, the ocean beyond",
  },
  { src: "/images/dining-formal.jpg", alt: "The great room dining area at Vatulé" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
        <div className="hero-zoom absolute inset-0">
          <Image
            src="/images/hero-pool-sunset.jpg"
            alt="Vatulé's 72-foot infinity pool at golden hour, the Pacific beyond"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/75" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="animate-fade-up max-w-4xl text-center text-white">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-[var(--color-brass-light)]">
              La Punta Estates · Punta Mita
            </p>
            <h1 className="mt-8 font-display text-5xl font-light leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Privacy on the
              <br />
              Pacific Ocean
            </h1>
            <div className="mx-auto mt-9 h-px w-16 bg-[var(--color-brass-light)]" />
            <p className="mx-auto mt-9 max-w-xl text-base font-light leading-relaxed text-white/85 sm:text-lg">
              A fully staffed oceanfront estate for up to 26 — and the only home
              on the Point with visible sunsets every evening of the year.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="w-full bg-white px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-brass)] hover:text-white sm:w-auto"
              >
                Inquire About Dates
              </Link>
              <Link
                href="/gallery"
                className="w-full border border-white/50 px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── The name ─────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] px-6 py-24 sm:py-32">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">The Estate</p>
          <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl md:text-[2.75rem]">
            Named for three children — Valen, Tulah and Leighton
          </h2>
          <div className="rule mx-auto mt-8" />
          <p className="mt-8 text-base leading-loose text-[var(--color-muted)] sm:text-lg">
            Vatulé is Donna and Kenton Bruice&rsquo;s family home on the Pacific,
            built for the way families actually gather. More than 10,000 square
            feet of covered living space opens to the breeze on every side — two
            living rooms, three dining areas, an office, two rooftop terraces,
            and a lawn wide enough for a real game of anything. It is the ideal
            place to connect with the people you love, in the safest possible
            environment.
          </p>
          <Link
            href="/about"
            className="mt-10 inline-block border-b border-[var(--color-brass)] pb-1 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-brass)] transition-colors hover:text-[var(--color-brass-dark)]"
          >
            The Full Story
          </Link>
        </div>
      </section>

      {/* ── Facts ────────────────────────────────────────────── */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-sand)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 py-16 md:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.label} className="reveal text-center">
              <p className="font-display text-4xl font-light text-[var(--color-ink)] sm:text-5xl">
                {f.n}
              </p>
              <p className="mt-3 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sunset claim ─────────────────────────────────────── */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="img-frame reveal relative h-[420px] w-full sm:h-[560px]">
            <Image
              src="/images/view-sunset.jpg"
              alt="Sunset over the Pacific from Vatulé's terrace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">Every evening of the year</p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl md:text-[2.75rem]">
              The only estate on La Punta with sunsets you can actually see
            </h2>
            <div className="rule mt-8" />
            <p className="mt-8 text-base leading-loose text-[var(--color-muted)]">
              Vatulé sits at the Point, elevated above the golf course, facing
              open water. That geometry does two things no neighbouring home can
              claim: it keeps the property private, and it puts the sun on the
              horizon in front of you every single night of the year.
            </p>
            <p className="mt-6 text-base leading-loose text-[var(--color-muted)]">
              The same aspect gives the estate the best surf view — and the
              nearest surf access — in all of the Punta Mita development,
              looking out toward the Marietas Islands.
            </p>
          </div>
        </div>
      </section>

      {/* ── Outdoor entertaining ─────────────────────────────── */}
      <section className="bg-[var(--color-ink)] px-5 py-24 text-white sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal order-2 lg:order-1">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[var(--color-brass-light)]">
              Outdoors
            </p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl md:text-[2.75rem]">
              Designed for entertaining, end to end
            </h2>
            <div className="mt-8 h-px w-12 bg-[var(--color-brass-light)]" />
            <ul className="mt-10 space-y-5">
              {OUTDOOR.map((item) => (
                <li key={item} className="flex gap-4 text-white/70">
                  <span className="mt-[0.6rem] h-px w-5 shrink-0 bg-[var(--color-brass)]" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/amenities"
              className="mt-10 inline-block border-b border-[var(--color-brass-light)] pb-1 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-brass-light)] transition-colors hover:text-white"
            >
              All Amenities &amp; Service
            </Link>
          </div>
          <div className="img-frame reveal relative order-1 h-[420px] w-full sm:h-[560px] lg:order-2">
            <Image
              src="/images/pool-twilight.jpg"
              alt="The infinity pool and shaded outdoor living area at twilight"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Suites ───────────────────────────────────────────── */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Accommodation</p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl md:text-[2.75rem]">
              Room for five families
            </h2>
            <div className="rule mt-8" />
            <p className="mt-8 text-base leading-loose text-[var(--color-muted)]">
              Vatulé sleeps up to 26 — five king suites, all with Pacific Ocean
              views and private entrances, plus a youth bunk house that sleeps
              twelve with its own media room.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {SUITES.map((s) => (
              <article key={s.title} className="reveal">
                <div className="img-frame relative h-80 w-full">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-7 font-display text-2xl font-light">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                  {s.body}
                </p>
              </article>
            ))}
          </div>

          <div className="reveal mt-14">
            <Link
              href="/suites"
              className="inline-block border border-[var(--color-ink)] px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-white"
            >
              Explore Every Suite
            </Link>
          </div>
        </div>
      </section>

      {/* ── Staff ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/dining-formal.jpg"
          alt="Dining at Vatulé"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(13,26,32,0.80)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center text-white sm:py-36">
          <p className="reveal text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[var(--color-brass-light)]">
            Fully staffed
          </p>
          <h2 className="reveal mt-7 font-display text-3xl font-light leading-snug sm:text-4xl md:text-[2.75rem]">
            Everything is included, and everyone is already here
          </h2>
          <div className="mx-auto mt-8 h-px w-12 bg-[var(--color-brass-light)]" />
          <p className="reveal mt-9 text-base leading-loose text-white/75 sm:text-lg">
            The estate includes all staff: day-long housekeeping, a chef with
            his culinary team including a server &amp; bartender for breakfast,
            lunch &amp; dinner, concierge, and two six-seater golf carts.
          </p>
          <p className="reveal mt-6 text-base leading-loose text-white/60">
            Bicycles for adults and children, in-house laundry, and unpacking
            and packing service on request.
          </p>
        </div>
      </section>

      {/* ── Film ─────────────────────────────────────────────── */}
      <FilmSection />

      {/* ── Location ─────────────────────────────────────────── */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="img-frame reveal relative h-[420px] w-full sm:h-[560px]">
            <Image
              src="/images/aerial.jpg"
              alt="Vatulé seen from over the water, the golf fairway and reef in front"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">Inside the gates</p>
            <h2 className="mt-7 font-display text-3xl font-light leading-snug sm:text-4xl md:text-[2.75rem]">
              A golf cart ride from everything
            </h2>
            <div className="rule mt-8" />
            <p className="mt-8 text-base leading-loose text-[var(--color-muted)]">
              Guests have full access to two Jack Nicklaus golf courses, a
              tennis club, a fitness centre and the resort&rsquo;s beach clubs.
            </p>
            <dl className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {NEARBY.map(([time, place]) => (
                <div
                  key={place}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <dt className="text-sm text-[var(--color-ink)]">{place}</dt>
                  <dd className="shrink-0 font-display text-lg text-[var(--color-brass)]">
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href="/location"
              className="mt-10 inline-block border-b border-[var(--color-brass)] pb-1 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-brass)] transition-colors hover:text-[var(--color-brass-dark)]"
            >
              More on the Location
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery tease ────────────────────────────────────── */}
      <section className="bg-[var(--color-sand)] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="mt-6 font-display text-3xl font-light sm:text-4xl">
                Look around
              </h2>
            </div>
            <Link
              href="/gallery"
              className="border-b border-[var(--color-brass)] pb-1 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-brass)] transition-colors hover:text-[var(--color-brass-dark)]"
            >
              View All Photographs
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY_TEASE.map((g) => (
              <Link
                key={g.src}
                href="/gallery"
                className="img-frame reveal relative h-56 w-full sm:h-72"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="px-6 py-24 text-center sm:py-32">
        <div className="reveal mx-auto max-w-2xl">
          <p className="eyebrow">Reservations</p>
          <h2 className="mt-7 font-display text-4xl font-light leading-tight sm:text-5xl">
            Your dream vacation awaits
          </h2>
          <div className="rule mx-auto mt-8" />
          <p className="mt-8 text-base leading-loose text-[var(--color-muted)]">
            Nightly rates run from $7,500 to $22,000 plus 16% VAT, depending on
            the season. We do not charge service or cleaning fees. Tell us your
            dates and we&rsquo;ll reply personally.
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full bg-[var(--color-ink)] px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-[var(--color-brass)] sm:w-auto"
            >
              Inquire Now
            </Link>
            <Link
              href="/rates"
              className="w-full border border-[var(--color-ink)] px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-white sm:w-auto"
            >
              See Seasonal Rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
