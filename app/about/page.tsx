import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-sm mb-6 text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-6xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            La Punta's Premier Oceanfront Estate
          </h1>
          <p className="text-xl text-white/80 mt-4 leading-relaxed">
            Experience the pinnacle of luxury vacation living in Punta Mita Resort
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text Content */}
            <div className="lg:col-span-3 lg:pr-12">
              <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                Vatulé stands as the crown jewel of La Punta Estates within the ultra-exclusive gated community of Punta Mita Resort. Positioned on the same latitude as Hawaii, this beachfront estate offers near-perfect weather year-round and holds the distinction of being the only property on La Punta with visible Pacific sunsets every evening of the year. The villa's thoughtful design maximizes the stunning ocean vistas while creating intimate spaces for both large gatherings and private moments.
              </p>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                Spanning over 10,000 square feet of covered living space, Vatulé was purpose-built for multi-family gatherings and group experiences. The estate features five luxurious king suites, each with Pacific views and private entrances, alongside a youth bunkhouse that sleeps 12 and includes its own media room. The property's crown jewel is its outdoor entertainment area, featuring a 72-foot infinity pool, a 14-person jacuzzi, rooftop terraces, and an expansive lawn perfect for games and activities. With 27 outdoor speakers providing ambient sound throughout, every corner of the estate is designed for comfort and celebration.
              </p>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                Beyond the villa itself, guests enjoy privileged access to the world-class amenities of Punta Mita Resort. The Bahia and Pacifico championship golf clubs are just a five-minute golf cart ride away, while three exclusive beach clubs including the St. Regis, Residents Beach Club, and Kupuri Beach Club offer pristine Pacific shores and exceptional dining. Full-service staff including breakfast preparation, evening chef service, and housekeeping ensure that every aspect of your stay exceeds expectations, allowing you to focus entirely on creating unforgettable memories with family and friends.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] sticky top-8 animate-fade-up">
                <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Property Distinctions
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Only La Punta estate with visible sunsets year-round</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Located within gated Punta Mita Resort community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Over 10,000 sq ft of covered living space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Accommodates up to 26 guests across six structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">72-foot infinity pool with oceanfront views</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Full-service staff including chef and housekeeping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Access to two championship golf courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Three exclusive beach clubs within the resort</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-light text-center mb-16 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Philosophy 1 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Uncompromising Luxury
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Every element of Vatulé has been carefully curated to provide the highest level of comfort and elegance. From the premium furnishings to the dedicated staff, we believe luxury is found in thoughtful details and exceptional service that anticipates your every need.
              </p>
            </div>

            {/* Philosophy 2 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Multi-Generational Connections
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Vatulé was designed specifically to bring families and groups together in meaningful ways. With separate suites for privacy and expansive common areas for gathering, the estate creates the perfect balance where memories are made and relationships are strengthened across generations.
              </p>
            </div>

            {/* Philosophy 3 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Effortless Experience
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your time at Vatulé should be spent creating memories, not managing logistics. Our full-service staff handles every detail from daily breakfast to evening chef service and housekeeping, allowing you to fully immerse yourself in the beauty and tranquility of Pacific paradise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us today to discuss your stay at Vatulé
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}