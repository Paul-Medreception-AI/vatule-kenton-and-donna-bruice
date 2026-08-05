import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      name: "Luxury Accommodations",
      description: "Five private king suites with Pacific Ocean views and private entrances, plus a youth bunkhouse sleeping 12 with its own media room. All accommodations feature premium furnishings and direct access to outdoor living spaces.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      name: "Outdoor Entertainment Spaces",
      description: "Over 10,000 square feet of covered living space featuring a 72-foot infinity pool, 14-person jacuzzi, and expansive 50-yard lawn. Multiple dining areas, wet bar, grill, and 27 outdoor speakers create the perfect atmosphere for gatherings.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      name: "Full-Service Staff",
      description: "Daily breakfast preparation, evening chef service, and housekeeping included. Professional staff ensures every detail of your stay is managed with the highest level of attention.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      name: "Resort Access & Amenities",
      description: "Exclusive access to Punta Mita's championship Bahia and Pacifico Golf Clubs, tennis and fitness facilities, and three beach clubs including St. Regis and Kupuri. Includes bicycles and a six-seat golf cart for easy navigation.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      name: "Multi-Family Gatherings",
      description: "Designed specifically for large families and groups with accommodations for up to 26 guests across separate suites and a dedicated youth space. Perfect for reunions, celebrations, and multi-generational vacations.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      name: "Corporate Retreats",
      description: "Secluded oceanfront setting with expansive indoor and outdoor spaces ideal for executive gatherings and team retreats. World-class amenities and privacy provide the perfect environment for both work and relaxation.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      )
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Check Availability",
      description: "Contact us to discuss your preferred dates and group size. Our team will provide detailed availability information and nightly rates based on your travel season, with pricing ranging from approximately $7,490 to $21,990 before taxes and fees."
    },
    {
      number: "02",
      title: "Customize Your Experience",
      description: "Work with our concierge to plan your stay, from golf tee times to beach club reservations. We'll arrange any additional services you need, including extra chef meals, special event planning, or activity coordination throughout Punta Mita Resort."
    },
    {
      number: "03",
      title: "Arrive & Relax",
      description: "Our full-service staff greets you upon arrival and handles every detail throughout your stay. From daily breakfast preparation to evening chef service and housekeeping, simply settle in and enjoy your Pacific paradise."
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
          <h1 className="font-serif text-6xl font-light mb-4" style={{fontFamily: 'Cormorant, serif'}}>Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Exceptional experiences crafted for discerning guests seeking unparalleled luxury and service
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-4 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            From luxurious accommodations to world-class amenities, every detail is designed to exceed expectations
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group"
              >
                <div className="flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mt-5 text-center" style={{fontFamily: 'Cormorant, serif'}}>
                  {service.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  {service.description}
                </p>
                <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline text-center">
                  Learn More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-4 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            How It Works
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Your journey to an unforgettable stay begins with these simple steps
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-up">
                <div className="lg:px-8">
                  <div className="font-serif text-7xl text-[var(--color-primary)] opacity-50 mb-4" style={{fontFamily: 'Cormorant, serif'}}>
                    {step.number}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mb-3" style={{fontFamily: 'Cormorant, serif'}}>
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-0 w-px h-32 bg-[var(--color-border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-4" style={{fontFamily: 'Cormorant, serif'}}>
            Ready to Begin?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Contact our team to start planning your extraordinary Vatulé experience
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </main>
  )
}