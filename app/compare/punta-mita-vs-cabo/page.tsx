import Link from 'next/link'

export const metadata = {
  title: 'Punta Mita vs Cabo: Comparing Mexico\'s Premier Pacific Destinations | Vatule',
  description: 'Comparing Punta Mita and Cabo San Lucas - location, atmosphere, activities, accommodations, and which Mexican Pacific destination is right for your luxury retreat.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>›</span>
            <span className="text-white">Comparison</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light leading-tight">
            Punta Mita vs Cabo: Comparing Mexico's Premier Pacific Destinations
          </h1>
          <p className="text-xl mt-6 text-white/90 max-w-3xl mx-auto">
            Two world-class destinations on Mexico's Pacific coast—understanding the differences to choose your perfect luxury retreat location
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-4 text-[var(--color-ink)]">
            Side-by-Side Comparison
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12 text-lg">
            Key differences between these two premier Mexican Pacific destinations
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="py-4 px-6 font-semibold">Category</div>
              <div className="py-4 px-6 font-semibold border-l border-white/20">Punta Mita</div>
              <div className="py-4 px-6 font-semibold border-l border-white/20">Cabo San Lucas</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Location</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Riviera Nayarit, north of Puerto Vallarta</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Southern tip of Baja California Peninsula</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Atmosphere</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Secluded, tranquil, exclusive peninsula with pristine nature</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Vibrant, energetic, bustling resort town with nightlife</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Access</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">45-minute drive from Puerto Vallarta International Airport</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">20 minutes from Los Cabos International Airport</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Beach Experience</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Calm, swimmable beaches with gentle waves. Ideal for water activities</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Dramatic coastline, many beaches unsafe for swimming due to strong currents</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Climate</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Tropical, more humid. Rainy season June-October</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Desert climate, dry and arid. Minimal rainfall year-round</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Accommodation Style</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Ultra-luxury resorts, private villas, golf community estates</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Wide range from budget to luxury, all-inclusive resorts dominant</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Activities</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Golf, surfing, paddleboarding, snorkeling, yoga, spa retreats</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Sport fishing, ATV tours, zip-lining, parasailing, nightlife, shopping</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Dining Scene</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Exclusive resort dining, intimate beachfront restaurants, farm-to-table focus</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Extensive variety, celebrity chef restaurants, casual beach clubs, lively bars</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Crowd Level</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Low-density, private, minimal crowds even in high season</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">High tourist volume, especially during winter and spring break</div>
            </div>

            <div className="grid grid-cols-3">
              <div className="py-5 px-6 font-medium text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Relaxation, privacy, wellness retreats, romantic getaways, families seeking tranquility</div>
              <div className="py-5 px-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Adventure seekers, party atmosphere, sport fishing enthusiasts, active nightlife</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-16 text-[var(--color-ink)]">
            Detailed Insights
          </h2>

          <div className="space-y-12">
            <div className="animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-4 text-[var(--color-ink)]">
                Why Choose Punta Mita?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Punta Mita offers an exclusive, tranquil escape on a gated peninsula where luxury meets nature. With championship golf courses designed by Jack Nicklaus, calm swimmable beaches, and world-class resorts like the Four Seasons and St. Regis, it's ideal for travelers seeking privacy and sophistication.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The atmosphere is deliberately low-key—no mega-resorts or party scene. Instead, you'll find pristine beaches, exceptional surfing, paddleboarding in protected bays, and a genuine connection to Mexican coastal culture. Perfect for wellness retreats, romantic getaways, and families wanting quality time together without distractions.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-4 text-[var(--color-ink)]">
                Why Choose Cabo?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Cabo San Lucas thrives on energy and variety. With its iconic arch at Land's End, vibrant marina, extensive restaurant scene, and legendary sport fishing, Cabo attracts visitors seeking adventure and entertainment. The desert landscape creates a dramatically different aesthetic from tropical Punta Mita.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Cabo excels in options—from budget-friendly to ultra-luxury, all-inclusive resorts to boutique hotels, quiet San José del Cabo to party-central Cabo San Lucas. The variety of activities is unmatched: ATV desert tours, zip-lining, parasailing, whale watching, championship golf, and nightlife that rivals any major resort destination.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-4 text-[var(--color-ink)]">
                The Beach Experience
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                This is perhaps the most significant difference. Punta Mita's beaches are calm, swimmable, and ideal for families with children. The protected bays provide excellent conditions for paddleboarding, kayaking, and snorkeling. The water is warm and inviting nearly year-round.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Cabo's dramatic Pacific coastline is stunning but often unsafe for swimming due to strong currents and undertow. Many beaches are for viewing only. Medano Beach is the main swimmable option. The powerful waves attract surfers but require caution. The tradeoff is spectacular coastal scenery—those towering rock formations and crashing waves create an unforgettable backdrop.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-4 text-[var(--color-ink)]">
                Climate Considerations
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Punta Mita has a tropical climate with higher humidity and a defined rainy season from June through October. Afternoon showers are common during summer months, though they rarely last long. The lush vegetation and abundant birdlife are direct results of this moisture.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Cabo's desert climate means minimal rainfall year-round, lower humidity, and consistently sunny days. The dry landscape and cactus-dotted hills create a completely different visual experience. Summer temperatures can be intense, but the low humidity makes it more comfortable than you might expect.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-4 text-[var(--color-ink)]">
                Access and Getting Around
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Cabo wins for convenience—just 20 minutes from Los Cabos International Airport to most hotels. Punta Mita requires a 45-minute drive from Puerto Vallarta's airport, though the journey along the coast is scenic and the extra travel time contributes to the feeling of escape.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                In Cabo, you'll likely want a rental car or use taxis/Uber to explore the corridor between San José and Cabo San Lucas. Punta Mita is more self-contained—most visitors stay within their resort or villa and arrange specific excursions. The gated community design means less spontaneous exploration but enhanced security and exclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-12 text-[var(--color-ink)]">
            Making Your Decision
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-up">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-4 text-[var(--color-primary)]">
              Choose Punta Mita If You Want:
            </h3>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Calm, swimmable beaches safe for families and water activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Privacy, exclusivity, and low-density tourism</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Wellness-focused environment with top-tier spas and yoga</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Tropical setting with lush vegetation and diverse wildlife</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Championship golf in a serene, uncrowded setting</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Authentic Mexican culture and cuisine without tourist crowds</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>A truly relaxing, disconnected experience</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-up">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-4 text-[var(--color-primary)]">
              Choose Cabo If You Want:
            </h3>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Maximum activity variety—fishing, ATVs, zip-lining, parasailing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Vibrant nightlife, bars, and entertainment options</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Extensive restaurant scene with celebrity chef establishments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Dramatic desert and ocean scenery with iconic landmarks</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>World-class sport fishing opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>More accommodation options across all price ranges</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-primary)] mr-3 mt-1">✓</span>
                <span>Shorter airport transfer and easier access</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-6 text-[var(--color-ink)]">
            Experience Punta Mita's Tranquility
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
            If exclusivity, swimmable beaches, and genuine relaxation appeal to you, discover how Vatule can create your perfect Punta Mita retreat.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-dark)] transition-colors"
          >
            Plan Your Punta Mita Experience
          </Link>
        </div>
      </section>
    </main>
  )
}