"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/about", label: "The Estate" },
  { href: "/suites", label: "Suites" },
  { href: "/amenities", label: "Amenities & Service" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/rates", label: "Rates" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only the homepage has a full-bleed hero for the nav to float over.
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[rgba(251,248,243,0.95)] backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-gradient-to-b from-black/45 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Vatulé — home" className="relative z-10">
          <img
            src={solid ? "/images/logo.webp" : "/images/logo-white.webp"}
            alt="Vatulé"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                solid
                  ? "text-[var(--color-ink)] hover:text-[var(--color-brass)]"
                  : "text-white/85 hover:text-white"
              } ${pathname === l.href ? "!text-[var(--color-brass)]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`ml-2 border px-6 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
              solid
                ? "border-[var(--color-brass)] text-[var(--color-brass)] hover:bg-[var(--color-brass)] hover:text-white"
                : "border-white/60 text-white hover:bg-white hover:text-[var(--color-ink)]"
            }`}
          >
            Inquire
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            } ${solid || open ? "bg-[var(--color-ink)]" : "bg-white"}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              open ? "opacity-0" : ""
            } ${solid || open ? "bg-[var(--color-ink)]" : "bg-white"}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            } ${solid || open ? "bg-[var(--color-ink)]" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-0 bg-[var(--color-cream)] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-[var(--color-border)] py-4 font-display text-3xl text-[var(--color-ink)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="mt-10 bg-[var(--color-brass)] px-8 py-4 text-center text-xs font-medium uppercase tracking-[0.28em] text-white"
          >
            Inquire
          </Link>
          <a
            href="tel:+19704563115"
            className="mt-6 text-center text-sm tracking-wide text-[var(--color-muted)]"
          >
            +1 (970) 456-3115
          </a>
        </div>
      </div>
    </header>
  );
}
