import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/view-sunset.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(13,26,32,0.75)]" />
      <div className="relative z-10 px-6 text-center text-white">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.36em] text-[var(--color-brass-light)]">
          Page not found
        </p>
        <h1 className="mt-7 font-display text-4xl font-light sm:text-5xl">
          This page has drifted out to sea
        </h1>
        <div className="mx-auto mt-8 h-px w-12 bg-[var(--color-brass-light)]" />
        <p className="mx-auto mt-8 max-w-md leading-relaxed text-white/70">
          The page you were looking for isn&rsquo;t here — but the estate is
          exactly where you left it.
        </p>
        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="w-full bg-white px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-brass)] hover:text-white sm:w-auto"
          >
            Return Home
          </Link>
          <Link
            href="/gallery"
            className="w-full border border-white/50 px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
