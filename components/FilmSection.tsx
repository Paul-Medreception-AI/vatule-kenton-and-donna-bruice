"use client";

import { useRef, useState } from "react";
import Image from "next/image";

/**
 * Click-to-play film section.
 *
 * Nothing but the poster loads until the guest asks for it, so the film costs
 * no bandwidth on first paint.
 *
 * Source, in order of preference:
 *   1. Vimeo  — NEXT_PUBLIC_FILM_VIMEO_ID (+ _HASH for unlisted videos)
 *   2. YouTube — NEXT_PUBLIC_FILM_YOUTUBE_ID
 *   3. A self-hosted file at /video/vatule-loop.mp4
 *
 * The Vimeo hash is the `h=` parameter Vimeo appends to unlisted videos. It is
 * not a secret — it appears in the public share URL and in the page's
 * og:video:url — but the embed returns 401 without it.
 */
const VIMEO_ID = process.env.NEXT_PUBLIC_FILM_VIMEO_ID;
const VIMEO_HASH = process.env.NEXT_PUBLIC_FILM_VIMEO_HASH;
const YOUTUBE_ID = process.env.NEXT_PUBLIC_FILM_YOUTUBE_ID;

function vimeoSrc() {
  const q = new URLSearchParams({
    autoplay: "1",
    byline: "0",
    portrait: "0",
    title: "0",
    dnt: "1",
  });
  if (VIMEO_HASH) q.set("h", VIMEO_HASH);
  return `https://player.vimeo.com/video/${VIMEO_ID}?${q.toString()}`;
}

export default function FilmSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const start = () => {
    setPlaying(true);
    // Self-hosted path only: nudge playback once React swaps the node in.
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}));
  };

  return (
    <section className="bg-[var(--color-ink-deep)] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[var(--color-brass-light)]">
            The film
          </p>
          <h2 className="mt-7 font-display text-3xl font-light text-white sm:text-4xl md:text-[2.75rem]">
            See the estate in motion
          </h2>
          <div className="mx-auto mt-8 h-px w-12 bg-[var(--color-brass-light)]" />
        </div>

        <div className="relative mt-14 h-[300px] w-full overflow-hidden sm:h-[460px] lg:h-[560px]">
          {!playing && (
            <button
              type="button"
              onClick={start}
              aria-label="Play the Vatulé film"
              className="group absolute inset-0 z-10 h-full w-full cursor-pointer"
            >
              <Image
                src="/images/film-poster.jpg"
                alt="Vatulé, the estate at Punta Mita"
                fill
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-[rgba(13,26,32,0.35)] transition-colors duration-500 group-hover:bg-[rgba(13,26,32,0.2)]" />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 backdrop-blur-sm transition-all duration-500 group-hover:border-white group-hover:bg-white/10 sm:h-24 sm:w-24">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-1 h-7 w-7 text-white sm:h-8 sm:w-8"
                  >
                    <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.79-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
                  </svg>
                </span>
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white">
                  Watch the film
                </span>
              </span>
            </button>
          )}

          {playing && VIMEO_ID && (
            <iframe
              src={vimeoSrc()}
              title="Vatulé — the film"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          )}

          {playing && !VIMEO_ID && YOUTUBE_ID && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Vatulé — the film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          )}

          {playing && !VIMEO_ID && !YOUTUBE_ID && (
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              poster="/images/film-poster.jpg"
              className="h-full w-full bg-black object-cover"
            >
              <source src="/video/vatule-loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
