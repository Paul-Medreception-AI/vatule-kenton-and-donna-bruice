import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery, { type Photo } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of Vatulé — the 72-foot infinity pool, the palapa great room, five king suites, the youth bunk house, the kitchen and the Pacific.",
  alternates: { canonical: "/gallery" },
};

const CATEGORIES = [
  "Views",
  "Pool & Outdoors",
  "Living & Dining",
  "Kitchen",
  "Suites",
];

/**
 * Captions describe what is actually in each frame. Several of the source
 * filenames from the old site were wrong (two bedrooms were named for outdoor
 * spaces, an aerial was named "great room"), so do not trust the filename.
 */
const PHOTOS: Photo[] = [
  // ── Views ──────────────────────────────────────────────────
  {
    src: "/images/view-surf.jpg",
    alt: "The infinity pool and deck at sunset, looking across the lawn and fairway to the surf break",
    cat: "Views",
  },
  {
    src: "/images/view-sunset.jpg",
    alt: "Sunset across the lawn and golf fairway to the open Pacific",
    cat: "Views",
  },
  {
    src: "/images/view-pacific.jpg",
    alt: "The pool's infinity edge, with the ocean and shorebreak beyond",
    cat: "Views",
  },
  {
    src: "/images/pool-marietas.jpg",
    alt: "The pool deck at dusk, the Marietas Islands on the horizon",
    cat: "Views",
  },
  {
    src: "/images/aerial.jpg",
    alt: "Vatulé seen from over the water, the golf fairway and reef in front",
    cat: "Views",
  },
  {
    src: "/images/aerial-golf.jpg",
    alt: "Twilight aerial of the estate — palapa great room, loggia, pool and lawn",
    cat: "Views",
  },
  {
    src: "/images/great-room.jpg",
    alt: "Twilight aerial from the ocean side, the Sierra Madre on the horizon",
    cat: "Views",
  },
  {
    src: "/images/estate-portrait.jpg",
    alt: "Aerial of the main house and pool terrace",
    cat: "Views",
  },
  {
    src: "/images/estate-grounds.jpg",
    alt: "The guest pavilions and entry walks, the main palapa behind",
    cat: "Views",
  },
  {
    src: "/images/guest-exterior.jpg",
    alt: "The guest pavilion wing at golden hour",
    cat: "Views",
  },

  // ── Pool & Outdoors ────────────────────────────────────────
  {
    src: "/images/hero-pool-sunset.jpg",
    alt: "The 72-foot lap pool at sunset, its infinity edge spilling toward the lawn",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/pool-twilight.jpg",
    alt: "The pool at blue hour, looking toward the great-room palapa",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/pool-lounge.jpg",
    alt: "The covered beachfront lounge with its linear fire table, facing the surf break",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/poolside.jpg",
    alt: "Teak club chairs around a drum table on the lawn-edge deck",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/terrace.jpg",
    alt: "The ocean-front loggia at twilight — fire-pit lounge, dining table and grill",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/terrace-alt.jpg",
    alt: "The loggia and pool deck at sunset, the fire-pit table lit",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/daybed-palapa.jpg",
    alt: "The thatched daybed palapa at the edge of the lawn",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/detail-two.jpg",
    alt: "The beachfront palapa sheltering its carved-wood daybed",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/detail-one.jpg",
    alt: "Across the lawn to the infinity pool, loungers and pergola-shaded terrace",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/detail-three.jpg",
    alt: "The daybed palapa at sunset, the sun going down over open water",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/firepit.jpg",
    alt: "The pool terrace at golden hour — loungers, outdoor kitchen loggia and pergola",
    cat: "Pool & Outdoors",
  },
  {
    src: "/images/property-dusk.jpg",
    alt: "The ocean terrace at golden hour, the lawn falling away to the rocky shore",
    cat: "Pool & Outdoors",
  },

  // ── Living & Dining ────────────────────────────────────────
  {
    src: "/images/living-palapa.jpg",
    alt: "The great room beneath the main palapa, looking toward the kitchen end",
    cat: "Living & Dining",
  },
  {
    src: "/images/living-twilight.jpg",
    alt: "The great room from the opposite end, its cream sofas and sisal rug",
    cat: "Living & Dining",
  },
  {
    src: "/images/dining-formal.jpg",
    alt: "The great room dining area — two long tables under the palapa, the ocean framed beyond",
    cat: "Living & Dining",
  },
  {
    src: "/images/living-room.jpg",
    alt: "The formal dining room, seating twelve beneath a sunburst chandelier",
    cat: "Living & Dining",
  },
  {
    src: "/images/media-room.jpg",
    alt: "The media room in the stone-walled pavilion",
    cat: "Living & Dining",
  },
  {
    src: "/images/interior-detail.jpg",
    alt: "The sitting room's fieldstone wall, opening to the ocean-side terrace",
    cat: "Living & Dining",
  },

  // ── Kitchen ────────────────────────────────────────────────
  {
    src: "/images/kitchen.jpg",
    alt: "The kitchen — marble counters, brass lanterns and a patterned cement-tile floor",
    cat: "Kitchen",
  },
  {
    src: "/images/kitchen-view.jpg",
    alt: "The kitchen's range wall and rattan bistro stools",
    cat: "Kitchen",
  },
  {
    src: "/images/kitchen-view-2.jpg",
    alt: "The kitchen island, with folding windows onto a planted courtyard",
    cat: "Kitchen",
  },

  // ── Suites ─────────────────────────────────────────────────
  {
    src: "/images/suite-primary.jpg",
    alt: "The primary bedroom, opening to the lounger terrace and the ocean",
    cat: "Suites",
  },
  {
    src: "/images/suite-two.jpg",
    alt: "An upper guest suite, its balcony overlooking the palapa and the Pacific",
    cat: "Suites",
  },
  {
    src: "/images/suite-three.jpg",
    alt: "A guest suite with bleached-oak four-poster, opening to a private terrace",
    cat: "Suites",
  },
  {
    src: "/images/suite-four.jpg",
    alt: "A guest suite at twilight, the pool and sunset ocean beyond",
    cat: "Suites",
  },
  {
    src: "/images/suite-five.jpg",
    alt: "A guest suite opening to its own stone terrace",
    cat: "Suites",
  },
  {
    src: "/images/outdoor-dining.jpg",
    alt: "A guest suite with a whitewashed four-poster and an upper balcony over the ocean",
    cat: "Suites",
  },
  {
    src: "/images/bunk-house.jpg",
    alt: "The youth bunk house, built-in twin bunks along both walls, doors open to a palm garden",
    cat: "Suites",
  },
  {
    src: "/images/bath.jpg",
    alt: "The primary bath, with a freestanding tub and an indoor-outdoor rain shower",
    cat: "Suites",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Look around"
        image="/images/living-palapa.jpg"
        alt="The great room at Vatulé beneath its palapa roof"
      />

      <section className="px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Gallery photos={PHOTOS} categories={CATEGORIES} />
        </div>
      </section>

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
