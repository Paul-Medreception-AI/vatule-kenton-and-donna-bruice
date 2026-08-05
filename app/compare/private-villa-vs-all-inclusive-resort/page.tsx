import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Private Villa vs All-Inclusive Resort: Which Luxury Option Is Right for Your Group? | Vatule',
  description: 'Compare private villa rentals and all-inclusive resorts for your group vacation. Discover which luxury accommodation option offers the best value, privacy, flexibility, and experience for your travel needs.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light leading-tight mb-6">
            Private Villa vs All-Inclusive Resort: Which Luxury Option Is Right for Your Group?
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A comprehensive comparison to help you make the best decision for your luxury group vacation
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant',serif] text-4xl font-light text-center text-[var(--color-ink)] mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Feature</div>
              <div className="p-6 font-semibold border-l border-white/20">Private Villa</div>
              <div className="p-6 font-semibold border-l border-white/20">All-Inclusive Resort</div>
            </div>

            {/* Privacy & Exclusivity */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Privacy & Exclusivity</div>
              <div className="p-6 border-l border-[var(--color-border)]">Complete privacy. Entire property for your group only. No strangers, no crowds.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Shared facilities with other guests. Public dining areas, pools, and common spaces.</div>
            </div>

            {/* Flexibility */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-light)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Flexibility</div>
              <div className="p-6 border-l border-[var(--color-border)]">Total freedom. Eat when you want, sleep when you want. Set your own schedule entirely.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Fixed meal times, scheduled activities. Must work around resort programming.</div>
            </div>

            {/* Personalization */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Personalization</div>
              <div className="p-6 border-l border-[var(--color-border)]">Fully customized experience. Private chef caters to dietary needs. Activities tailored to your group.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Standard menus and activities. Limited customization for individual preferences.</div>
            </div>

            {/* Space & Comfort */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-light)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Space & Comfort</div>
              <div className="p-6 border-l border-[var(--color-border)]">Expansive living areas, multiple bedrooms, private pool, outdoor spaces. Room to spread out.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Hotel rooms or suites. Limited private space. Shared recreational facilities.</div>
            </div>

            {/* Service */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Service</div>
              <div className="p-6 border-l border-[var(--color-border)]">Dedicated staff knows your preferences. Personalized attention throughout your stay.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Professional but impersonal service. Staff serves hundreds of guests daily.</div>
            </div>

            {/* Cost Value */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-light)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Cost Value</div>
              <div className="p-6 border-l border-[var(--color-border)]">Better per-person value for groups of 6+. Split the cost, maximize the luxury.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Per-person pricing. Costs multiply quickly for families and groups.</div>
            </div>

            {/* Ideal For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Multi-generational families, special celebrations, groups seeking privacy and authenticity.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Solo travelers, couples preferring structured activities, those wanting no planning responsibility.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Private Villa */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <div className="mb-16">
            <h2 className="font-['Cormorant',serif] text-4xl font-light text-[var(--color-ink)] mb-8">
              The Private Villa Experience
            </h2>
            
            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              A private villa rental offers an unparalleled level of freedom, privacy, and personalization that simply cannot be replicated in a resort setting. When you book a villa like Vatule, you're not just renting accommodation—you're claiming an entire luxury property as your personal retreat. Every space, from the infinity pool overlooking the ocean to the gourmet kitchen and expansive living areas, belongs exclusively to your group.
            </p>

            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              This exclusivity transforms your vacation experience. There are no strangers at breakfast, no need to wake early to reserve poolside loungers, no competing for restaurant reservations. Your days unfold according to your group's natural rhythm. Sleep in late, enjoy a leisurely breakfast prepared by your private chef at whatever hour suits you, spend the afternoon by your private pool, and gather for sunset cocktails on your terrace—all without encountering a single person outside your travel party.
            </p>

            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              The villa model particularly excels for multi-generational family vacations and special celebrations. Grandparents can enjoy quiet morning coffee on the veranda while teenagers sleep in. Parents can supervise children in the private pool without the anxiety of crowded resort facilities. Everyone gathers for family-style meals around a single table, creating bonding moments impossible in a resort restaurant. The dedicated staff—who serve only your group—quickly learn everyone's preferences, from coffee orders to favorite snacks, delivering seamlessly personalized service throughout your stay.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-['Cormorant',serif] text-4xl font-light text-[var(--color-ink)] mb-8">
              The All-Inclusive Resort Option
            </h2>
            
            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              All-inclusive resorts offer a different value proposition: complete convenience with zero planning required. From the moment you arrive, everything is handled. Meals are served at designated times in resort restaurants, activities are scheduled throughout the day, and entertainment is provided each evening. For travelers who prefer structure and want to avoid any vacation logistics, this model has clear appeal.
            </p>

            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              However, this convenience comes with trade-offs. You'll share facilities with hundreds or even thousands of other guests. Popular restaurants require reservations made days in advance. Prime pool locations are claimed by guests who wake at dawn to place towels on chairs. The food, while abundant, follows standardized menus designed to appeal to the broadest possible audience rather than your specific tastes. Activities run on fixed schedules that may not align with your group's preferences or energy levels.
            </p>

            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              For larger groups and families, the all-inclusive model also presents logistical challenges. Your party will likely occupy multiple rooms spread across different buildings or floors. Coordinating meet-up times, managing children across separated spaces, and maintaining group cohesion requires constant communication. The communal nature of resort dining means your group rarely enjoys private meals together—you're typically seated among strangers in bustling dining rooms, making intimate conversation difficult and special moments less memorable.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 shadow-lg animate-fade-up">
            <h2 className="font-['Cormorant',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide: Decision Framework
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Choose Private Villa */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                  Choose a Private Villa if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're traveling with 6+ people (family or friends group)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Privacy and exclusivity are top priorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want complete schedule flexibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're celebrating a special occasion (reunion, milestone birthday, anniversary)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You value authentic local experiences over generic entertainment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have specific dietary needs or culinary preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want dedicated staff attention focused solely on your group</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're seeking better value per person for your group size</span>
                  </li>
                </ul>
              </div>

              {/* Choose All-Inclusive Resort */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                  Choose an All-Inclusive Resort if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're traveling solo or as a couple</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You prefer zero planning or decision-making on vacation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You enjoy structured activities and organized entertainment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Meeting other travelers is part of the appeal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You don't mind fixed meal times and standardized menus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're comfortable in shared, high-traffic environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want access to multiple restaurants and bars in one location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You prefer predictable experiences over personalized ones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant',serif] text-4xl font-light text-center text-[var(--color-ink)] mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>Is a private villa actually more affordable than an all-inclusive resort for groups?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, for groups of 6 or more, a private villa typically offers significantly better value. At a resort, you pay per person—meaning a family of 8 could easily spend $800-1,200+ per night on rooms alone, before food and activities. A luxury villa accommodates your entire group for one nightly rate (often $600-1,000), and includes a private chef, dedicated staff, and exclusive use of all amenities. When you divide the villa cost by the number of guests, the per-person price is usually 30-50% less than comparable resort accommodations, while delivering far superior privacy, space, and personalization.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>What's included in a private villa rental?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                At Vatule, your villa rental includes the entire property (all bedrooms, living areas, pool, and outdoor spaces), a dedicated private chef who prepares three meals daily based on your preferences, daily housekeeping, concierge services for activity planning and reservations, complimentary activities like kayaking and paddleboarding, airport transfers, and a pre-arrival consultation to customize your experience. Essentially, everything except alcohol and off-property excursions is included—and even those can be arranged seamlessly by your dedicated staff.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>Do I need to plan activities and meals at a villa, or is that handled?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                You have complete control over how much planning you want to do. Before arrival, your villa team will consult with you about dietary preferences, meal timing, and activity interests. From there, your private chef designs custom menus (you approve or adjust them), and your concierge arranges any activities you request—from spa treatments to cultural tours to water sports. If you want a fully planned itinerary, they'll create one. If you prefer to wake each day and decide spontaneously, that works too. The staff adapts to your desired level of structure while handling all logistics behind the scenes.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>How does a villa accommodate different dietary needs and preferences within one group?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                This is where private villas truly excel. Your chef prepares meals specifically for your group, accommodating all dietary restrictions and preferences simultaneously. If one family member is vegetarian, another has gluten intolerance, and the kids are picky eaters, the chef creates dishes that satisfy everyone—often preparing variations of the same meal to ensure no one feels excluded. At a resort buffet or restaurant, accommodating diverse dietary needs requires separate orders, substitutions, and often results in some guests feeling their options are limited. At a villa, every meal is designed around your group's collective and individual needs.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>What if we want some structured activities but also flexibility?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                A private villa offers the best of both worlds. You can schedule specific activities on certain days—like a guided snorkeling trip Tuesday morning or a cultural village tour Thursday afternoon—while leaving other days completely open for spontaneous relaxation. Unlike a resort where you must commit to the fixed schedule or miss out, your villa team books activities at times that work for your group and remains flexible to change plans if you decide you'd rather lounge by the pool instead. You create your ideal balance of adventure and relaxation, adjusted in real-time based on how everyone feels.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-['Cormorant',serif] text-4xl font-light text-[var(--color-ink)] mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
            Our team can help you determine whether a private villa or resort best fits your group's needs—and if Vatule is right for you, we'll ensure every detail is perfect.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Discuss Your Options
          </Link>
        </div>
      </section>
    </main>
  )
}