import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
      <div className="relative z-10 flex h-full items-end pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="animate-fade-up max-w-3xl text-white">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.36em] text-[var(--color-brass-light)]">
              {eyebrow}
            </p>
            <h1 className="mt-6 font-display text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
                {intro}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
