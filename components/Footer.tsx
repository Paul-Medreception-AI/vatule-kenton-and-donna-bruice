import Link from "next/link";

const EXPLORE = [
  { href: "/about", label: "The Estate" },
  { href: "/suites", label: "Suites" },
  { href: "/amenities", label: "Amenities & Service" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/rates", label: "Rates" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink-deep)] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/logo-white.webp"
              alt="Vatulé"
              className="h-10 w-auto"
            />
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/55">
              A fully staffed oceanfront estate in La Punta Estates, within the
              gated community of Punta Mita — and the only home on the Point
              with visible sunsets every evening of the year.
            </p>
            <div className="mt-8 h-px w-12 bg-[var(--color-brass)]" />
            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.28em] text-white/35">
              Punta Mita · Nayarit · México
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-brass-light)]">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-brass-light)]">
              Reservations
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="tel:+19704563115"
                  className="font-display text-2xl text-white transition-colors hover:text-[var(--color-brass-light)]"
                >
                  +1 (970) 456-3115
                </a>
                <p className="mt-1 text-xs text-white/40">Call or text</p>
              </li>
              <li>
                <a
                  href="mailto:info@vatule.com"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  info@vatule.com
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-block border border-white/25 px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[var(--color-brass)] hover:bg-[var(--color-brass)]"
            >
              Request Dates
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row">
          <p>© {new Date().getFullYear()} Vatulé. All rights reserved.</p>
          <div className="flex gap-7">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
