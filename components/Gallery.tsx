"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type Photo = { src: string; alt: string; cat: string };

export default function Gallery({
  photos,
  categories,
}: {
  photos: Photo[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const shown =
    active === "All" ? photos : photos.filter((p) => p.cat === active);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + shown.length) % shown.length)),
    [shown.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  const current = index === null ? null : shown[index];

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setActive(c);
              setIndex(null);
            }}
            className={`border px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
              active === c
                ? "border-[var(--color-brass)] bg-[var(--color-brass)] text-white"
                : "border-[var(--color-stone)] text-[var(--color-muted)] hover:border-[var(--color-brass)] hover:text-[var(--color-brass)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View ${p.alt}`}
            className="img-frame group relative h-64 w-full cursor-zoom-in sm:h-72"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-transparent transition-colors duration-500 group-hover:bg-[rgba(13,26,32,0.20)]" />
          </button>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="mt-16 text-center text-[var(--color-muted)]">
          No photographs in this category.
        </p>
      )}

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(13,26,32,0.96)] p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center text-2xl font-light text-white/70 transition-colors hover:text-white"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photograph"
            className="absolute left-3 z-10 flex h-14 w-14 items-center justify-center text-3xl font-light text-white/60 transition-colors hover:text-white sm:left-8"
          >
            ‹
          </button>

          <figure
            className="relative max-h-full w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-5 text-center text-sm text-white/60">
              {current.alt}
              <span className="ml-3 text-white/35">
                {index !== null ? index + 1 : 0} / {shown.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photograph"
            className="absolute right-3 z-10 flex h-14 w-14 items-center justify-center text-3xl font-light text-white/60 transition-colors hover:text-white sm:right-8"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
