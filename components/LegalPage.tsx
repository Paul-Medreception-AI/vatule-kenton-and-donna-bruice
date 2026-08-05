import type { ReactNode } from "react";

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-light text-[var(--color-ink)]">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 leading-loose text-[var(--color-muted)]">
        {children}
      </div>
    </section>
  );
}

export default function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-[var(--color-ink)] px-6 pb-16 pt-36 text-center text-white sm:pb-20 sm:pt-44">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.36em] text-[var(--color-brass-light)]">
          Legal
        </p>
        <h1 className="mt-6 font-display text-4xl font-light sm:text-5xl">
          {title}
        </h1>
        <div className="mx-auto mt-7 h-px w-12 bg-[var(--color-brass-light)]" />
        <p className="mt-6 text-sm text-white/50">Last updated {updated}</p>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-loose text-[var(--color-ink)]">
            {intro}
          </p>
          {children}
        </div>
      </section>
    </>
  );
}
