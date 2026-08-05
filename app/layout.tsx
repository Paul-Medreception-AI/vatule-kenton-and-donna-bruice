import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const DESCRIPTION =
  "Vatulé is a fully staffed, ultra-luxury oceanfront estate in La Punta Estates, Punta Mita — sleeping up to 26 across five king suites and a youth bunk house, with a 72-foot infinity pool and Pacific sunsets every evening of the year.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vatule.com"),
  title: {
    default: "Vatulé — Ultra-Luxury Oceanfront Estate in Punta Mita",
    template: "%s | Vatulé",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Vatulé — Ultra-Luxury Oceanfront Estate in Punta Mita",
    description: DESCRIPTION,
    url: "https://vatule.com",
    siteName: "Vatulé",
    images: [
      {
        url: "/images/hero-pool-sunset.jpg",
        width: 1800,
        height: 1198,
        alt: "Vatulé's 72-foot infinity pool at sunset, overlooking the Pacific",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatulé — Ultra-Luxury Oceanfront Estate in Punta Mita",
    description: DESCRIPTION,
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "Vatulé",
  description: DESCRIPTION,
  url: "https://vatule.com",
  image: [
    "https://vatule.com/images/hero-pool-sunset.jpg",
    "https://vatule.com/images/living-twilight.jpg",
    "https://vatule.com/images/suite-primary.jpg",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Punta Mita",
    addressRegion: "Nayarit",
    addressCountry: "MX",
  },
  telephone: "+1-970-456-3115",
  email: "info@vatule.com",
  numberOfRooms: 7,
  occupancy: { "@type": "QuantitativeValue", maxValue: 26 },
  amenityFeature: [
    "72-foot infinity pool",
    "Jacuzzi seating 14",
    "Private chef and culinary team",
    "Daily housekeeping",
    "Concierge",
    "Two six-seater golf carts",
    "Media room",
    "Oceanfront",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-[var(--color-cream)] font-[family-name:var(--font-dm-sans)] text-[var(--color-ink)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
