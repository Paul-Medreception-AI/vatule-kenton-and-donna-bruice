import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery, { type Photo } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of Vatulé — the 72-foot infinity pool, palapa living rooms, king suites, youth bunk house, kitchen and Pacific views.",
  alternates: { canonical: "/gallery" },
};

const CATEGORIES = [
  "Views",
  "Pool & Outdoors",
  "Living & Dining",
  "Kitchen",
  "Suites",
];

const PHOTOS: Photo[] = [
  // Views
  { src: "/images/view-sunset.jpg", alt: "Sunset over the Pacific from Vatulé", cat: "Views" },
  { src: "/images/view-pacific.jpg", alt: "The Pacific Ocean from the estate", cat: "Views" },
  { src: "/images/view-surf.jpg", alt: "Surf view from Vatulé toward the Cove", cat: "Views" },
  { src: "/images/pool-marietas.jpg", alt: "Looking toward the Marietas Islands", cat: "Views" },
  { src: "/images/sunset-terrace.jpg", alt: "The terrace at sunset", cat: "Views" },
  { src: "/images/aerial.jpg", alt: "Aerial view of Vatulé at the Point", cat: "Views" },
  { src: "/images/aerial-golf.jpg", alt: "Aerial view over the golf course and coastline", cat: "Views" },

  // Pool & Outdoors
  { src: "/images/hero-pool-sunset.jpg", alt: "The 72-foot infinity pool at golden hour", cat: "Pool & Outdoors" },
  { src: "/images/pool-golf-pacific.jpg", alt: "The infinity pool with the golf course and Pacific beyond", cat: "Pool & Outdoors" },
  { src: "/images/pool-twilight.jpg", alt: "The infinity pool at twilight", cat: "Pool & Outdoors" },
  { src: "/images/pool-lounge.jpg", alt: "Loungers along the pool deck", cat: "Pool & Outdoors" },
  { src: "/images/poolside.jpg", alt: "Poolside at Vatulé", cat: "Pool & Outdoors" },
  { src: "/images/daybed-palapa.jpg", alt: "The daybed palapa beside the pool", cat: "Pool & Outdoors" },
  { src: "/images/outdoor-lounge.jpg", alt: "Shaded outdoor lounge with wet bar", cat: "Pool & Outdoors" },
  { src: "/images/outdoor-dining.jpg", alt: "Alfresco dining overlooking the pool", cat: "Pool & Outdoors" },
  { src: "/images/firepit.jpg", alt: "The fire pit in the evening", cat: "Pool & Outdoors" },
  { src: "/images/terrace.jpg", alt: "Shaded terrace overlooking the Pacific", cat: "Pool & Outdoors" },
  { src: "/images/terrace-alt.jpg", alt: "Terrace seating at Vatulé", cat: "Pool & Outdoors" },
  { src: "/images/grounds-lawn.jpg", alt: "The 50-yard playing lawn", cat: "Pool & Outdoors" },
  { src: "/images/grounds-palms.jpg", alt: "Palms and gardens on the grounds", cat: "Pool & Outdoors" },
  { src: "/images/property-dusk.jpg", alt: "The estate at dusk", cat: "Pool & Outdoors" },
  { src: "/images/estate-grounds.jpg", alt: "The buildings and grounds of Vatulé", cat: "Pool & Outdoors" },
  { src: "/images/estate-portrait.jpg", alt: "Vatulé's oceanfront elevation", cat: "Pool & Outdoors" },
  { src: "/images/guest-exterior.jpg", alt: "Guest suite exterior and entrance", cat: "Pool & Outdoors" },

  // Living & Dining
  { src: "/images/living-twilight.jpg", alt: "The palapa-roofed living room at twilight", cat: "Living & Dining" },
  { src: "/images/living-room.jpg", alt: "The living room at Vatulé", cat: "Living & Dining" },
  { src: "/images/living-palapa.jpg", alt: "Living room beneath the palapa roof", cat: "Living & Dining" },
  { src: "/images/living-alt.jpg", alt: "A second lounge area", cat: "Living & Dining" },
  { src: "/images/great-room.jpg", alt: "The great room opening to the terrace", cat: "Living & Dining" },
  { src: "/images/seating-area.jpg", alt: "Seating area with ocean outlook", cat: "Living & Dining" },
  { src: "/images/dining.jpg", alt: "Dining at Vatulé", cat: "Living & Dining" },
  { src: "/images/dining-formal.jpg", alt: "The formal dining room", cat: "Living & Dining" },
  { src: "/images/media-room.jpg", alt: "The media room", cat: "Living & Dining" },
  { src: "/images/media-room-alt.jpg", alt: "Media room seating", cat: "Living & Dining" },
  { src: "/images/interior-detail.jpg", alt: "Interior detail at Vatulé", cat: "Living & Dining" },
  { src: "/images/detail-one.jpg", alt: "Interior detail", cat: "Living & Dining" },
  { src: "/images/detail-two.jpg", alt: "Interior detail", cat: "Living & Dining" },
  { src: "/images/detail-three.jpg", alt: "Interior detail", cat: "Living & Dining" },

  // Kitchen
  { src: "/images/kitchen.jpg", alt: "The gourmet kitchen", cat: "Kitchen" },
  { src: "/images/kitchen-view.jpg", alt: "Kitchen with breakfast bar", cat: "Kitchen" },
  { src: "/images/kitchen-view-2.jpg", alt: "The kitchen and breakfast table", cat: "Kitchen" },

  // Suites
  { src: "/images/suite-primary.jpg", alt: "The primary king suite", cat: "Suites" },
  { src: "/images/suite-primary-alt.jpg", alt: "The primary suite opening to its terrace", cat: "Suites" },
  { src: "/images/suite-two.jpg", alt: "King suite two", cat: "Suites" },
  { src: "/images/suite-three.jpg", alt: "King suite three", cat: "Suites" },
  { src: "/images/suite-four.jpg", alt: "King suite four", cat: "Suites" },
  { src: "/images/suite-five.jpg", alt: "King suite five", cat: "Suites" },
  { src: "/images/bunk-house.jpg", alt: "The youth bunk house with twelve twin beds", cat: "Suites" },
  { src: "/images/bath.jpg", alt: "An en-suite bath", cat: "Suites" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Look around"
        image="/images/living-palapa.jpg"
        alt="The living room at Vatulé beneath its palapa roof"
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
