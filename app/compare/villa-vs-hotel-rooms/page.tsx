import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi-Family Villa vs Separate Hotel Rooms: Cost and Experience Analysis | Vatule',
  description: 'Compare multi-family villas and separate hotel rooms for medical tourism in Fiji. Detailed cost analysis, privacy considerations, and family experience insights.',
}

export default function VillaVsHotelRoomsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="mb-6 text-sm opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Multi-Family Villa vs Separate Hotel Rooms: Cost and Experience Analysis
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Making the right accommodation choice for your family's medical journey in Fiji
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Side-by-Side Comparison
          </h2>

          <div className="overflow-hidden rounded-xl shadow-lg animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Consideration</div>
              <div className="p-6 font-semibold border-l border-white/20">Multi-Family Villa</div>
              <div className="p-6 font-semibold border-l border-white/20">Separate Hotel Rooms</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 bg-white">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-primary)] mb-2">$350-600/night total</p>
                <p className="text-sm text-[var(--color-muted)]">Split among family members, typically $50-100 per person</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-primary)] mb-2">$120-250/room/night</p>
                <p className="text-sm text-[var(--color-muted)]">Multiplied by number of rooms needed, typically $360-750 total</p>
              </div>
            </div>

            {/* Privacy & Space */}
            <div className="grid grid-cols-3 bg-[var(--color-light)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Privacy & Space</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">Private bedrooms + shared living areas</p>
                <p className="text-sm text-[var(--color-muted)]">2,000-4,000 sq ft total, full kitchen, multiple bathrooms</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">Complete privacy in each room</p>
                <p className="text-sm text-[var(--color-muted)]">300-450 sq ft per room, limited common space</p>
              </div>
            </div>

            {/* Family Experience */}
            <div className="grid grid-cols-3 bg-white">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Family Experience</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">Shared meals, living spaces, pool area</p>
                <p className="text-sm text-[var(--color-muted)]">Natural gathering points, cook together, emotional support</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">Meet in hotel common areas or restaurants</p>
                <p className="text-sm text-[var(--color-muted)]">Coordinated meetups, scheduled family time</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-3 bg-[var(--color-light)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Amenities</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">Full kitchen, laundry, private pool, outdoor areas</p>
                <p className="text-sm text-[var(--color-muted)]">Home-like environment, prepare own meals</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">Daily housekeeping, room service, hotel facilities</p>
                <p className="text-sm text-[var(--color-muted)]">Restaurant dining, shared pool, concierge services</p>
              </div>
            </div>

            {/* Meal Costs */}
            <div className="grid grid-cols-3 bg-white">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Meal Costs</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">$15-30/person/day (groceries)</p>
                <p className="text-sm text-[var(--color-muted)]">Cook most meals, occasional dining out</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">$50-100/person/day (restaurants)</p>
                <p className="text-sm text-[var(--color-muted)]">Hotel dining or local restaurants for most meals</p>
              </div>
            </div>

            {/* Flexibility */}
            <div className="grid grid-cols-3 bg-[var(--color-light)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Flexibility</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">Set your own schedule and routines</p>
                <p className="text-sm text-[var(--color-muted)]">Ideal for longer stays, children, special dietary needs</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)] mb-2">Hotel schedules for dining and services</p>
                <p className="text-sm text-[var(--color-muted)]">Less planning required, staff support available</p>
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3 bg-white">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)]">Groups of 4-8+, stays over 5 days, families with children, those wanting togetherness</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)]">Smaller groups (2-4), shorter stays, those valuing independence, business travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Multi-Family Villa */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <h2 className="text-4xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              The Multi-Family Villa Experience
            </h2>
            
            <p className="text-lg text-[var(--color-ink)] mb-6 leading-relaxed">
              Multi-family villas in Fiji offer a home-away-from-home environment that transforms medical travel into a shared family experience. These properties typically feature 3-5 private bedrooms, each with en-suite bathrooms, surrounding spacious common areas including a full kitchen, multiple living spaces, and often a private pool with ocean views.
            </p>

            <p className="text-lg text-[var(--color-ink)] mb-6 leading-relaxed">
              The financial advantage becomes clear with larger groups. A villa costing $500 per night for six family members equals approximately $83 per person, compared to $150-200 per person in separate hotel rooms. Over a typical 7-10 day medical stay, this can mean savings of $3,000-5,000 for the group, money that can be redirected toward treatment costs or extended recovery time.
            </p>

            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Beyond economics, villas provide emotional infrastructure crucial during medical procedures. Family members naturally gather in the kitchen for morning coffee, share meals on the lanai, and maintain normal family rhythms that hotels can't replicate. For patients recovering from procedures, having family nearby—but not in the same room—offers the perfect balance of support and rest. Children have space to play, teenagers can retreat to their own areas, and everyone maintains some normalcy during an inherently stressful time.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-4xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              The Separate Hotel Rooms Approach
            </h2>
            
            <p className="text-lg text-[var(--color-ink)] mb-6 leading-relaxed">
              Separate hotel rooms provide maximum individual privacy and independence, which some families prefer during medical travel. Each family member or couple controls their own space, schedule, and environment. This approach works particularly well for smaller groups (2-4 people), shorter stays (3-5 days), or situations where family members need truly separate schedules due to work or other commitments.
            </p>

            <p className="text-lg text-[var(--color-ink)] mb-6 leading-relaxed">
              Hotels offer conveniences that villas don't: daily housekeeping, room service, 24/7 front desk support, and on-site restaurants. For families unfamiliar with shopping for groceries in a foreign country or uncomfortable with self-catering, these services eliminate stress. Some medical travelers appreciate the hotel's structured environment—someone else handles cleaning, maintenance, and service coordination.
            </p>

            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              The privacy factor shouldn't be underestimated. In separate rooms, recovering patients can rest without feeling they're inconveniencing others, and support family members can maintain their own routines without disturbing the patient. For extended families where relationships might be strained or where personal space is highly valued, separate accommodations can actually reduce stress rather than create it. Some families even choose a hybrid: a hotel room for the patient and companion, with additional family members in a nearby villa.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="text-4xl font-light mb-8 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              How to Decide
            </h2>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Choose a Multi-Family Villa if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You're traveling with 4 or more family members who want to stay together</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Your medical stay will be 5 days or longer</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Children are part of your group and need space to play and maintain routines</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You have special dietary needs that are easier to manage with your own kitchen</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Budget is a primary concern and you can save $3,000-5,000+ on accommodation and meals</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Your family values shared meals and natural togetherness during recovery</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You're comfortable with self-catering and basic household management</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Choose Separate Hotel Rooms if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You're traveling with 2-3 people who value maximum privacy</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Your stay is shorter (3-5 days) and villa setup seems excessive</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You prefer hotel conveniences (housekeeping, room service, concierge)</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Family dynamics require separate spaces to reduce stress</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You're uncomfortable with grocery shopping or cooking in an unfamiliar country</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">The patient needs complete quiet and rest without household activity</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Family members have significantly different schedules or commitments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>What's the real total cost difference for a family of 6 over 7 days?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="mb-4">Villa scenario: $500/night × 7 nights = $3,500 accommodation. Add $25/person/day for groceries × 6 people × 7 days = $1,050. Total: $4,550.</p>
                <p>Hotel scenario: $180/room/night × 3 rooms × 7 nights = $3,780 accommodation. Add $75/person/day for restaurant meals × 6 people × 7 days = $3,150. Total: $6,930.</p>
                <p className="mt-4 font-semibold text-[var(--color-ink)]">Savings with villa: $2,380 (plus more space, privacy, and family togetherness)</p>
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>Can we do a hybrid approach—villa for some, hotel for the patient?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="mb-4">Absolutely, and this is increasingly common. Many families book a hotel room near the clinic for the patient and primary caregiver during the immediate post-procedure period (1-3 days), while extended family stays in a villa a short drive away.</p>
                <p>This provides the patient with quiet recovery space and easy access to medical staff, while extended family enjoys a more economical and comfortable base. After the critical recovery days, everyone can relocate to the villa together. We can help coordinate accommodations in close proximity to make this work seamlessly.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>How difficult is grocery shopping and cooking in Fiji for villa stays?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="mb-4">Much easier than you might think. Fiji has well-stocked supermarkets with familiar brands, fresh produce, and all basics you'd need. Most villa properties provide a "starter pack" of essentials (coffee, tea, basic condiments), and many offer grocery delivery services or pre-stocking before arrival.</p>
                <p>Villas come with full kitchens including cookware, utensils, and appliances. You don't need to be an experienced cook—simple meals work perfectly. Many families enjoy visiting local markets for fresh tropical fruit and seafood as part of the Fiji experience. If cooking feels overwhelming on a particular day, Fiji has excellent takeout and delivery options at a fraction of restaurant prices.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>What about housekeeping and cleaning in a villa versus hotel?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="mb-4">Most Fiji villas include housekeeping service 2-3 times per week as standard (versus daily in hotels). This covers cleaning, fresh linens, and basic tidying. For longer stays or larger groups, you can typically add more frequent service for a modest additional fee ($50-75 per additional cleaning).</p>
                <p>Between cleanings, families handle basic tidying—loading the dishwasher, quick countertop wipes, towel management. This is minimal effort with several adults sharing responsibilities. Some families actually prefer less frequent housekeeping for privacy reasons. If daily housekeeping is important to you (especially during recovery), this is a factor favoring hotels or upgraded villa service packages.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>At what group size does a villa become the clear financial winner?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="mb-4">The breakeven point is typically 4 people over 5+ days when you factor in both accommodation and meals. At 4 people, villas and hotels are roughly equivalent in cost. At 5-6+ people, villas can save $2,000-4,000 over a week-long stay.</p>
                <p className="mb-4">For couples or groups of 2-3, hotels usually make more financial sense unless you're staying 10+ days. However, even at smaller group sizes, some travelers choose villas for the space, amenities, and experience rather than pure cost savings.</p>
                <p>The equation changes dramatically with children: hotels charge per room (requiring multiple rooms for families), while villa pricing is fixed regardless of how many kids you have. A family of 2 adults + 3 children often needs 2 hotel rooms, making the villa significantly cheaper.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="text-4xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Still Deciding What's Right for Your Family?
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-8">
            Every family's situation is unique. Let's discuss your specific needs, group size, and budget to find the perfect accommodation solution for your medical journey.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-all hover:scale-105"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </main>
  )
}