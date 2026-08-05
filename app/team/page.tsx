import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Our Team | Vatule - Kenton and Donna Bruice',
  description: 'Meet the dedicated team at Vatulé who ensure every detail of your ultra-luxury oceanfront stay is managed with the highest level of attention and care.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-6xl font-light mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Meet Our Team
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Our dedicated staff ensures every detail of your stay at Vatulé is managed with exceptional care and attention, creating an unforgettable Pacific luxury experience.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Our Providers & Staff
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* TODO(optimize): replace with real provider bios + headshots once supplied */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow animate-fade-up">
              <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="var(--color-primary)" 
                  strokeWidth={1.5} 
                  className="w-20 h-20 opacity-40"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Our Provider Team
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-2">
                  Professional Staff
                </p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  Full provider profiles are coming soon. Please call to learn more about our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Ready to Experience Vatulé?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact our team to discuss availability and begin planning your unforgettable stay at our ultra-luxury oceanfront estate.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}