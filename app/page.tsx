import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        <Image 
          src="/images/1-ariel_G-1.jpeg" 
          alt="Vatule - Kenton and Donna Bruice" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark)]/85 to-[var(--color-primary)]/75" />
        <div className="relative max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight leading-tight" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Experience Unparalleled Pacific Luxury at Vatulé
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            The only estate on La Punta with visible sunsets every evening of the year. An ultra-luxury oceanfront villa accommodating up to 26 guests with five king suites, a youth bunkhouse, and over 10,000 square feet of covered living space.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              Book Your Stay
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Located Within Gated Punta Mita Resort</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Full-Service Staff Included</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">72-Foot Infinity Pool & Oceanfront Views</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Access to Championship Golf & Beach Clubs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-center text-[var(--color-ink)] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Discover the exceptional amenities and services that make Vatulé the premier destination for luxury group travel
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10" stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Luxury Accommodations
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Five private king suites with Pacific Ocean views and private entrances, plus a youth bunkhouse sleeping 12 with its own media room. All accommodations feature premium furnishings and direct access to outdoor living spaces.
              </p>
              <div className="text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </div>
            </div>
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10" stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Outdoor Entertainment Spaces
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Over 10,000 square feet of covered living space featuring a 72-foot infinity pool, 14-person jacuzzi, and expansive 50-yard lawn. Multiple dining areas, wet bar, grill, and 27 outdoor speakers create the perfect atmosphere for gatherings.
              </p>
              <div className="text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </div>
            </div>
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10" stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Full-Service Staff
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Daily breakfast preparation, evening chef service, and housekeeping included. Professional staff ensures every detail of your stay is managed with the highest level of attention.
              </p>
              <div className="text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                La Punta's Premier Oceanfront Estate
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Vatulé stands as the crown jewel of La Punta Estates within the ultra-exclusive gated community of Punta Mita Resort. Positioned on the same latitude as Hawaii, this beachfront estate offers near-perfect weather year-round and holds the distinction of being the only property on La Punta with visible Pacific sunsets every evening of the year. The villa's thoughtful design maximizes the stunning ocean vistas while creating intimate spaces for both large gatherings and private moments.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Spanning over 10,000 square feet of covered living space, Vatulé was purpose-built for multi-family gatherings and group experiences. The estate features five luxurious king suites, each with Pacific views and private entrances, alongside a youth bunkhouse that sleeps 12 and includes its own media room. The property's crown jewel is its outdoor entertainment area, featuring a 72-foot infinity pool, a 14-person jacuzzi, rooftop terraces, and an expansive lawn perfect for games and activities. With 27 outdoor speakers providing ambient sound throughout, every corner of the estate is designed for comfort and celebration.
              </p>
              <Link href="/about" className="text-[var(--color-primary)] font-semibold hover:underline">
                Meet Our Team →
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg className="w-20 h-20 opacity-40" stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                01
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Check Availability
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Contact us to discuss your preferred dates and group size. Our team will provide detailed availability information and nightly rates based on your travel season, with pricing ranging from approximately $7,490 to $21,990 before taxes and fees.
              </p>
            </div>
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                02
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Customize Your Experience
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Work with our concierge to plan your stay, from golf tee times to beach club reservations. We'll arrange any additional services you need, including extra chef meals, special event planning, or activity coordination throughout Punta Mita Resort.
              </p>
            </div>
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                03
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Arrive & Relax
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Our full-service staff greets you upon arrival and handles every detail throughout your stay. From daily breakfast preparation to evening chef service and housekeeping, simply settle in and enjoy your Pacific paradise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Ultra-Luxury Oceanfront Estate in Punta Mita Resort
          </h2>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Book Your Stay
          </Link>
        </div>
      </section>
    </main>
  )
}