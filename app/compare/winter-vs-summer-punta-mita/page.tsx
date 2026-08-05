import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Winter vs Summer in Punta Mita: Seasonal Pricing and Experience Differences | Vatule',
  description: 'Compare winter high season vs summer low season in Punta Mita. Discover pricing differences, weather patterns, crowd levels, and which season offers the best value for your luxury retreat.',
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all cursor-pointer">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light leading-tight mb-6">
            Winter vs Summer in Punta Mita: Seasonal Pricing and Experience Differences
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Understanding the trade-offs between high and low season to make the best decision for your luxury retreat
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-center mb-12 text-[var(--color-ink)]">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Factor</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">Winter (High Season)<br/><span className="text-sm font-normal opacity-90">Nov - April</span></div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">Summer (Low Season)<br/><span className="text-sm font-normal opacity-90">May - October</span></div>
            </div>

            {/* Weather */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Weather</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]">
                <div className="text-[var(--color-ink)]">Sunny, dry, 75-85°F</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Perfect beach conditions daily</div>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]">
                <div className="text-[var(--color-ink)]">Warm, humid, 80-95°F</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Afternoon rain showers possible</div>
              </div>
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-white">Accommodation Pricing</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">
                <div className="text-[var(--color-ink)] font-semibold">$800-2,500/night</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Peak luxury pricing</div>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">
                <div className="text-[var(--color-accent)] font-semibold">$400-1,200/night</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">40-50% savings common</div>
              </div>
            </div>

            {/* Crowds */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Crowd Levels</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]">
                <div className="text-[var(--color-ink)]">Bustling & vibrant</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Restaurant reservations needed</div>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]">
                <div className="text-[var(--color-ink)]">Peaceful & private</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Walk-in dining, empty beaches</div>
              </div>
            </div>

            {/* Activities */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-white">Activities Available</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">
                <div className="text-[var(--color-ink)]">All options open</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Peak whale watching season</div>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">
                <div className="text-[var(--color-ink)]">Most available</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Sea turtle nesting season</div>
              </div>
            </div>

            {/* Service Quality */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Service & Attention</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]">
                <div className="text-[var(--color-ink)]">Excellent but busy</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Staff fully engaged</div>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]">
                <div className="text-[var(--color-ink)]">Exceptional & attentive</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Higher staff-to-guest ratio</div>
              </div>
            </div>

            {/* Booking */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-white">Booking Timeline</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">
                <div className="text-[var(--color-ink)]">6-12 months ahead</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Premium properties book early</div>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">
                <div className="text-[var(--color-ink)]">1-3 months sufficient</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Last-minute deals available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Winter Deep Dive */}
          <div className="animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-6">
              Winter in Punta Mita: Peak Season Excellence
            </h2>
            
            <p className="text-lg text-[var(--color-ink)] mb-4 leading-relaxed">
              The winter months from November through April represent Punta Mita at its most glamorous. Temperatures hover in the perfect 75-85°F range with virtually zero rainfall and cloudless skies day after day. This is when the international jet set descends on the region, filling the ultra-luxury resorts and creating a vibrant, cosmopolitan atmosphere along the coastline.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] mb-4 leading-relaxed">
              The Pacific waters are calm and ideal for all water activities, from paddleboarding to deep-sea fishing. December through March is peak whale watching season, when humpback whales migrate to the warm waters of Banderas Bay to give birth. The energy during these months is palpable—restaurants are full, beach clubs buzz with activity, and there's a sense of shared indulgence among guests who've come from around the world.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              However, this excellence comes at a premium. Accommodation rates peak at 2-3 times summer pricing, and properties with the best locations book out 6-12 months in advance. You'll need reservations for top restaurants, and popular activities like yacht charters or golf tee times require advance planning. For those seeking the quintessential luxury Mexican beach experience with perfect weather guaranteed and a lively social scene, winter justifies the investment.
            </p>
          </div>

          {/* Summer Deep Dive */}
          <div className="animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-6">
              Summer in Punta Mita: Authentic Tranquility
            </h2>
            
            <p className="text-lg text-[var(--color-ink)] mb-4 leading-relaxed">
              Summer in Punta Mita reveals a different character entirely—one that many repeat visitors argue is superior for those seeking genuine relaxation. From May through October, the crowds vanish, leaving pristine beaches nearly empty and allowing you to experience the destination in a more intimate, authentic way. Mornings are typically sunny and perfect for beach time, with afternoon showers that cool the air and create dramatic tropical sunsets.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] mb-4 leading-relaxed">
              The humidity is notably higher, and temperatures reach into the low 90s, but ocean breezes and afternoon rain provide natural air conditioning. This is turtle nesting season, offering the magical opportunity to witness baby sea turtles making their way to the ocean at dawn. The lush landscape is at its most verdant, and the pace of life slows to a truly restorative rhythm. Staff at resorts have more time to provide deeply personalized service with far fewer guests to attend to.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              The dramatic reduction in pricing—often 40-50% lower than winter rates—makes summer the season of choice for savvy travelers and locals. You'll dine at the same world-class restaurants, stay in the same luxury villas, and access the same pristine beaches, but with far greater value and tranquility. For couples seeking privacy, wellness-focused travelers, or anyone who finds crowds draining rather than energizing, summer in Punta Mita offers an unparalleled experience.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide Which Season Is Right for You
            </h2>
            
            <div className="space-y-10">
              {/* Choose Winter */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                  Choose Winter If You...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Want guaranteed perfect weather with zero rain risk for important occasions like anniversaries or milestone celebrations
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Prefer a vibrant, social atmosphere with buzzing restaurants and the energy of an international resort scene
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Want to experience whale watching season and see humpback whales in Banderas Bay
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Have flexibility to book 6-12 months in advance and budget isn't your primary constraint
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Are escaping cold northern winters and want maximum temperature contrast
                    </span>
                  </li>
                </ul>
              </div>

              {/* Choose Summer */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  Choose Summer If You...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Value tranquility and privacy over social buzz, preferring empty beaches and intimate dining experiences
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Want 40-50% savings on accommodation without compromising on luxury or location
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Don't mind afternoon rain showers and appreciate dramatic tropical storms and lush green landscapes
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Are coming for wellness, yoga, meditation, or deep rest rather than high-energy activities
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--color-ink)]">
                      Want to witness sea turtle nesting season and experience Punta Mita as locals know it
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            Common Questions About Seasonal Differences
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How much rain should I realistically expect during summer months?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
                Summer rain in Punta Mita is predictable and rarely disruptive. Mornings are typically sunny and perfect for beach activities. Rain usually arrives in the late afternoon or evening, lasting 1-3 hours before clearing to beautiful sunsets. It's warm, tropical rain—not the cold, dreary precipitation that keeps you indoors. Most days you'll still get 6-8 hours of sunshine. August and September are the wettest months, while May and October are transitional with less rain. Many guests find the afternoon showers refreshing and enjoy watching dramatic storms from covered terraces.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Are restaurants and activities still open during summer low season?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
                Yes, the vast majority of restaurants, resorts, and activity providers remain open year-round in Punta Mita. This is not a seasonal destination where everything shuts down—it's a permanent luxury community with year-round residents and services. Some high-end restaurants may reduce their operating days (open 5 days instead of 7), and a few boutique establishments take brief closures for renovations. However, you'll still have access to world-class dining, golf courses, spas, water sports, and all major amenities. The advantage is that everything operates with less crowding and more personalized attention.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What's the humidity difference between winter and summer really like?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
                Winter humidity averages 60-70% with dry, comfortable air that feels perfect for most visitors. Summer humidity rises to 75-85%, which creates a noticeably more tropical feel. You'll perspire more easily, hair tends to behave differently, and the air feels heavier. However, this is coastal humidity with constant ocean breezes, not oppressive inland heat. Most luxury properties have excellent air conditioning, and spending time in the ocean or pool feels more refreshing in summer heat. If you've enjoyed Caribbean destinations in summer, Punta Mita's summer climate is comparable. Those sensitive to humidity should consider winter, while others find summer's tropical atmosphere part of the authentic experience.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can I get last-minute deals in winter if I'm flexible?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
                Last-minute winter deals in Punta Mita are rare but not impossible. The best properties book out 6-12 months in advance during peak winter months (December-March), but occasional cancellations do occur. You'll have better luck in November and April, the shoulder months with excellent weather but slightly less demand. To find winter deals, work with a local vacation rental specialist who knows which properties have unexpected availability. Be flexible on exact dates and specific properties. However, if you have firm dates or want a particular villa, book well in advance. Summer is when flexibility truly pays off with both availability and pricing advantages.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Which season is better for families with children?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
                Winter is generally better for families, primarily because it aligns with school breaks (Christmas, spring break) and offers guaranteed good weather for active kids. Parents appreciate predictable sunshine for planned activities and excursions. The ocean is calmer in winter, which is safer for younger swimmers. That said, summer can be magical for families seeking value and adventure. The afternoon rain pattern works well—beach and pool in the morning, quiet time during afternoon showers, then dinner and evening activities. Summer's sea turtle season is extraordinarily educational and memorable for children. Teens often prefer summer's relaxed vibe over winter's busier atmosphere. If your children are flexible and you want to stretch your vacation budget, summer offers remarkable value.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-6">
            Ready to Plan Your Perfect Punta Mita Experience?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-10 leading-relaxed">
            Whether you choose winter's vibrant energy or summer's tranquil value, we'll help you create an unforgettable luxury retreat tailored to your preferences and timeline.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-5 rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Discuss Your Options
          </a>
        </div>
      </section>

    </main>
  )
}