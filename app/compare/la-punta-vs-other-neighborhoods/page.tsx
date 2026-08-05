import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La Punta Estates vs Other Punta Mita Neighborhoods | Vatule',
  description: 'Comprehensive comparison of La Punta Estates and other Punta Mita neighborhoods. Understand location advantages, amenities, investment potential, and lifestyle differences.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light leading-tight mb-6">
            La Punta Estates vs Other Punta Mita Neighborhoods: Location Matters
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A comprehensive analysis to help you choose the right Punta Mita location for your investment and lifestyle goals
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-12 text-center">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-6 border-r border-white/20">Feature</div>
              <div className="p-6 border-r border-white/20">La Punta Estates</div>
              <div className="p-6">Other Punta Mita Areas</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-gray-50">Beach Access</div>
              <div className="p-6 border-l border-[var(--color-border)]">Direct beachfront location with private access to pristine white sand beaches</div>
              <div className="p-6 border-l border-[var(--color-border)]">Varies; some require shuttle or significant walk to beach areas</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-gray-50/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-gray-50">Resort Proximity</div>
              <div className="p-6 border-l border-[var(--color-border)]">Walking distance to Four Seasons and St. Regis resort amenities</div>
              <div className="p-6 border-l border-[var(--color-border)]">Often requires golf cart or vehicle transport to resort facilities</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-gray-50">Privacy Level</div>
              <div className="p-6 border-l border-[var(--color-border)]">Exclusive gated community with limited density and maximum privacy</div>
              <div className="p-6 border-l border-[var(--color-border)]">Higher density in some areas; privacy varies by specific location</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-gray-50/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-gray-50">Ocean Views</div>
              <div className="p-6 border-l border-[var(--color-border)]">Panoramic Pacific Ocean vistas from elevated hillside lots</div>
              <div className="p-6 border-l border-[var(--color-border)]">Limited views in many locations; premium lots command higher prices</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-gray-50">Investment Potential</div>
              <div className="p-6 border-l border-[var(--color-border)]">Strong appreciation due to scarcity and prime beachfront position</div>
              <div className="p-6 border-l border-[var(--color-border)]">Moderate appreciation; dependent on specific micro-location</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-gray-50/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-gray-50">Rental Income</div>
              <div className="p-6 border-l border-[var(--color-border)]">Premium nightly rates; high occupancy from luxury travelers</div>
              <div className="p-6 border-l border-[var(--color-border)]">Lower rates; may require more aggressive marketing</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-gray-50">Development Quality</div>
              <div className="p-6 border-l border-[var(--color-border)]">Ultra-luxury finishes, world-class architecture, sustainable design</div>
              <div className="p-6 border-l border-[var(--color-border)]">Quality varies significantly; due diligence essential</div>
            </div>

            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-gray-50">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Discerning buyers seeking premier location, privacy, and investment security</div>
              <div className="p-6 border-l border-[var(--color-border)]">Budget-conscious buyers or those prioritizing golf course proximity</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-6">
              La Punta Estates: The Premier Choice
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              La Punta Estates represents the pinnacle of Punta Mita real estate, combining an unparalleled beachfront location with world-class design and exclusive amenities. Located at the westernmost point of the Punta Mita peninsula, this boutique development offers direct access to some of Mexico's most beautiful beaches, complemented by panoramic Pacific Ocean views that extend to the Marietas Islands.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              The location advantage cannot be overstated. Residents enjoy immediate proximity to both the Four Seasons and St. Regis resorts, accessing their restaurants, spas, and beach clubs within a leisurely walk. This proximity translates to both lifestyle convenience and investment value, as rental guests consistently rate location as their top priority when selecting luxury accommodations in Punta Mita.
            </p>
            <p className="text-lg text-[var(--color-muted)]">
              From an investment perspective, La Punta Estates benefits from genuine scarcity. With limited remaining inventory and no possibility of future beachfront development in this area, property values have demonstrated consistent appreciation. Owners report occupancy rates exceeding 70% during high season, with nightly rates commanding 30-50% premiums over comparable properties in less desirable locations.
            </p>
          </div>

          <div className="mb-16 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-6">
              Other Punta Mita Neighborhoods: Understanding the Alternatives
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              Punta Mita encompasses several distinct neighborhoods, each with unique characteristics. Areas like Ranchos Estates and Kupuri Estates offer golf course frontage and mountain views, appealing to buyers who prioritize proximity to the two championship golf courses designed by Jack Nicklaus. These neighborhoods typically feature larger lot sizes and can offer excellent value for buyers seeking space over beachfront access.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4">
              Hacienda de Mita and Las Marietas neighborhoods provide more affordable entry points into the Punta Mita community, though they require golf cart transportation to reach beaches and resort amenities. While these areas have seen steady appreciation, they lack the immediate beach access and resort proximity that drive premium rental rates and accelerated value growth.
            </p>
            <p className="text-lg text-[var(--color-muted)]">
              The Porta Fortuna area, while offering ocean views, sits further from the main resort hub and experiences less consistent rental demand. Buyers in these neighborhoods often purchase for personal use rather than investment income, accepting trade-offs in location for lower purchase prices or specific amenities like equestrian facilities or larger homesites.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 shadow-lg animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-8 text-center">
              How to Decide: Your Decision Framework
            </h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose La Punta Estates if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You prioritize beachfront access and want to walk directly to pristine beaches</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Investment appreciation and rental income potential are key factors in your decision</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Walking distance to Four Seasons and St. Regis amenities matters to your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You value exclusive privacy and low-density development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Unobstructed ocean views and dramatic sunsets are non-negotiable</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You're seeking a property that will appeal to high-end rental guests</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consider Other Neighborhoods if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Golf course frontage is more important to you than beach access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You prefer larger lot sizes and are comfortable using golf carts for transportation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Budget constraints make beachfront properties less accessible</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You're purchasing primarily for personal use rather than rental investment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Specific amenities like equestrian facilities or tennis centers are priorities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between">
                What is the typical price difference between La Punta Estates and other Punta Mita neighborhoods?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                La Punta Estates properties typically command a 40-60% premium over comparable properties in non-beachfront Punta Mita neighborhoods. This premium reflects the beachfront location, resort proximity, ocean views, and superior investment potential. Current pricing in La Punta Estates ranges from $2.5M to $8M+ depending on size and specific location, while similar-sized properties in areas like Ranchos Estates or Las Marietas might range from $1.5M to $4M. However, historical data shows La Punta properties appreciate faster, often recovering the initial premium within 5-7 years while generating higher rental income during ownership.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between">
                Can properties in other neighborhoods achieve similar rental income to La Punta Estates?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                While well-managed properties in other neighborhoods can generate solid rental income, they typically achieve 25-40% lower nightly rates and occupancy percentages compared to La Punta Estates. Luxury travelers consistently prioritize beachfront access and resort proximity when selecting Punta Mita rentals, allowing La Punta properties to command $1,500-$3,500+ per night during peak season versus $800-$2,000 for non-beachfront locations. Additionally, La Punta properties maintain stronger shoulder season demand, extending the profitable rental window beyond just Christmas and Easter weeks.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between">
                How does beach access work in different Punta Mita neighborhoods?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                La Punta Estates offers direct, walk-out beach access from properties, with private beach areas just steps from residences. Other neighborhoods typically require a 5-15 minute golf cart ride to designated beach clubs or public beach access points. Some areas like Ranchos Estates and Kupuri rely on the Beach Club at the Four Seasons or the residents' beach club near Punta Mita Resort, necessitating advance reservations during high season. While all Punta Mita residents have beach access rights, the convenience factor of La Punta's immediate beachfront location significantly enhances daily living experience and rental guest satisfaction.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between">
                Are HOA fees and maintenance costs higher in La Punta Estates?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                HOA fees in La Punta Estates are moderately higher than some other Punta Mita neighborhoods, typically ranging from $800-$1,500 monthly depending on property size, compared to $400-$900 in areas like Las Marietas. However, La Punta fees include enhanced services like beach maintenance, superior landscaping, and more comprehensive security. Property maintenance costs are comparable across all Punta Mita neighborhoods, though beachfront properties may require slightly more attention to salt air exposure. Importantly, higher rental income in La Punta typically more than offsets any additional HOA expenses, resulting in superior net returns.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between">
                What should I prioritize if I plan to live in the property full-time versus use it as a vacation rental?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                For full-time residence, the decision depends on your lifestyle priorities. If you value daily beach walks, spontaneous ocean swims, and walkable access to resort dining and spas, La Punta Estates provides unmatched convenience. If you're an avid golfer who prioritizes course access over beach proximity, golf-adjacent neighborhoods like Ranchos Estates might suit you better. For vacation rental investors, La Punta Estates is the clear winner—location is the number one factor driving rental rates and occupancy. The beachfront convenience and resort proximity that guests demand translates directly to higher income and better long-term appreciation. Even if you plan mixed personal use and rentals, La Punta's superior rental performance subsidizes your ownership costs more effectively than other locations.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-6">
            Ready to Explore Your Options?
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-8">
            Kenton and Donna Bruice offer personalized consultations to help you understand which Punta Mita neighborhood aligns with your investment goals and lifestyle preferences.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </main>
  )
}