import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Day Trips from Punta Mita: Exploring the Riviera Nayarit | Vatule',
  description: 'Discover the best day trips from Punta Mita along the stunning Riviera Nayarit coast. From hidden beaches to charming villages, explore authentic Mexican culture and natural beauty.',
  keywords: 'Punta Mita day trips, Riviera Nayarit, Sayulita, San Pancho, Islas Marietas, Puerto Vallarta, Mexico travel, beach destinations',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/70 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Travel & Wellness
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Day Trips from Punta Mita: Exploring the Riviera Nayarit
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Vatule Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Punta Mita sits at the northern tip of Banderas Bay, a jewel on Mexico's Pacific coast where luxury meets authentic culture. While the pristine beaches and world-class resorts of Punta Mita offer plenty of reasons to stay put, the surrounding Riviera Nayarit region beckons with hidden treasures waiting to be discovered. From bohemian beach towns to protected marine sanctuaries, the day trip possibilities are as diverse as they are enchanting.
            </p>
            <p className="mb-6">
              Whether you're seeking adventure, cultural immersion, or simply a change of scenery, the Riviera Nayarit delivers experiences that complement the tranquility of Punta Mita perfectly. These carefully curated day trips offer something for every traveler—from families seeking safe, engaging activities to wellness enthusiasts looking to deepen their connection with nature and local culture.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Sayulita: The Bohemian Beach Town
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Just 30 minutes north of Punta Mita, Sayulita has evolved from a sleepy fishing village into one of Mexico's most vibrant beach destinations. The town pulses with creative energy—colorful murals adorn building facades, handmade jewelry glitters in artisan shops, and the scent of fresh tacos mingles with ocean air along the main plaza.
            </p>
            <p className="mb-6">
              Sayulita's gentle beach break makes it perfect for beginner surfers, with numerous surf schools offering lessons and board rentals. The town's compact size means everything is walkable, from the beach to the dozen or so excellent restaurants serving everything from traditional Mexican fare to international fusion cuisine. Don't miss the Friday afternoon farmers market, where local producers sell organic fruits, vegetables, and artisanal products.
            </p>
            <p className="mb-6">
              For wellness seekers, Sayulita offers numerous yoga studios and holistic healing centers. The laid-back atmosphere encourages slowing down and connecting with both the international community and local traditions. Many visitors find that a day in Sayulita provides the perfect balance—active enough to feel adventurous, relaxed enough to feel restorative.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            San Pancho: Authentic Coastal Charm
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While Sayulita attracts the crowds, neighboring San Pancho (San Francisco) retains a quieter, more authentic character. This small town, just 40 minutes from Punta Mita, offers a glimpse into traditional Mexican coastal life alongside a growing community of artists and eco-conscious entrepreneurs.
            </p>
            <p className="mb-6">
              San Pancho's wide, uncrowded beach stretches for miles, ideal for long walks, horseback riding, or simply finding your own private patch of sand. The town center features a beautiful plaza surrounded by palapa-roofed restaurants and cafes, where you can enjoy fresh seafood while watching local families gather in the evening.
            </p>
            <p className="mb-6">
              The EntreAmigos community center offers cultural programs, recycling initiatives, and a glimpse into local sustainability efforts. Visit the butterfly sanctuary, browse galleries featuring local artists, or take a cooking class to learn traditional Nayarit recipes. San Pancho represents the Riviera Nayarit at its most genuine—welcoming, unpretentious, and deeply connected to the environment.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The Riviera Nayarit offers travelers something increasingly rare: authentic experiences that honor local culture while welcoming visitors with genuine warmth."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Islas Marietas: A Protected Marine Paradise
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Perhaps the most spectacular day trip from Punta Mita involves a boat journey to the Islas Marietas National Park, a UNESCO-recognized protected area just off the coast. These uninhabited islands serve as a sanctuary for diverse marine life and seabirds, offering some of the best snorkeling and wildlife viewing in the region.
            </p>
            <p className="mb-6">
              The islands are famous for the "Hidden Beach" (Playa del Amor), a stunning beach hidden within a crater, though access is now strictly limited to preserve the fragile ecosystem. Even without visiting the hidden beach, the islands offer extraordinary opportunities to see blue-footed boobies, manta rays, dolphins, and—during winter months—humpback whales that migrate to these warm waters to breed.
            </p>
            <p className="mb-6">
              Most tours depart from Punta Mita or nearby Corral del Risco, making the boat journey relatively short. The clear waters around the islands teem with tropical fish, sea turtles, and colorful coral formations. Because the area is protected, visitor numbers are carefully controlled, ensuring a more pristine experience. This trip represents ecotourism at its finest—thrilling, educational, and designed to preserve natural beauty for future generations.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Puerto Vallarta: Urban Energy and Cultural Depth
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For those craving urban amenities and cultural attractions, Puerto Vallarta sits just 45 minutes south of Punta Mita. This established resort city offers a completely different energy—bustling markets, art galleries, fine dining, and a picturesque malecón (boardwalk) lined with sculptures and street performers.
            </p>
            <p className="mb-6">
              The Zona Romántica (Romantic Zone) preserves Puerto Vallarta's colonial charm with cobblestone streets, wrought-iron balconies, and the iconic crown-topped Church of Our Lady of Guadalupe. Here you'll find dozens of restaurants, from casual taquerías to upscale establishments serving innovative Mexican cuisine. The neighborhood's Thursday night street market showcases local artisans and creates a festive atmosphere.
            </p>
            <p className="mb-6">
              Cultural activities abound: visit galleries in the thriving art scene, attend performances at the Teatro Vallarta, or explore museums documenting the region's history. For shopping enthusiasts, Puerto Vallarta offers everything from high-end boutiques to traditional markets selling hand-embroidered clothing, Huichol beadwork, and silver jewelry. A day here provides stimulation and variety that complements Punta Mita's serenity.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Planning Your Riviera Nayarit Adventures
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Making the most of day trips from Punta Mita requires some practical planning. Most destinations are easily accessible by rental car, taxi, or organized tour, with each option offering different advantages depending on your comfort level and group size.
            </p>
            
            {/* Tips List */}
            <div className="my-8">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Essential Day Trip Tips:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Start early:</strong> Beat the heat and crowds by departing Punta Mita in the morning, giving yourself maximum time to explore.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Bring cash:</strong> While larger establishments accept cards, many small restaurants, artisans, and transportation options prefer efectivo (cash).</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Pack sun protection:</strong> The tropical sun is intense—bring reef-safe sunscreen, hats, and light covering clothing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Book marine tours in advance:</strong> Trips to Islas Marietas have limited daily permits, so reserve your spot early.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Stay hydrated:</strong> Carry reusable water bottles and refill them regularly, especially during active excursions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Respect local customs:</strong> Learn basic Spanish phrases, dress modestly away from beach areas, and ask permission before photographing people.</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Consider alternating between active adventure days and cultural exploration days to maintain energy throughout your stay. The beauty of the Riviera Nayarit is that each destination offers a distinct character—you can craft an itinerary that matches your interests and energy levels perfectly.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Embracing the Journey
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The Riviera Nayarit region offers something increasingly rare in popular tourist destinations: authentic experiences that honor local culture while welcoming visitors with genuine warmth. Each day trip from Punta Mita opens a window into different aspects of Mexican coastal life—from the traditional rhythms of fishing villages to the vibrant creativity of artist communities, from protected natural wonders to the sophisticated pleasures of established resort towns.
            </p>
            <p className="mb-6">
              These excursions do more than break up your vacation routine. They provide opportunities for connection—with nature, with culture, with local people, and with travel companions. Whether you're watching blue-footed boobies dive into crystalline waters, bargaining for handmade crafts in a bustling market, or savoring fresh fish tacos steps from where they were caught, these experiences create the memories that define meaningful travel.
            </p>
            <p className="mb-6">
              As you plan your Punta Mita getaway, consider balancing resort relaxation with these enriching adventures. The region's treasures lie waiting, each destination offering its own rewards. The question isn't whether to venture beyond Punta Mita, but rather which of these remarkable places to explore first.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 mt-12 border-l-4 border-[var(--color-accent)]">
            <p className="text-[var(--color-ink)] leading-loose text-base">
              <strong>Planning your Riviera Nayarit adventure?</strong> Whether you're seeking wellness-focused experiences, family-friendly activities, or solo exploration, our team at Vatule can help you design the perfect itinerary. We understand that travel is about more than destinations—it's about creating experiences that rejuvenate body and spirit. <a href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors underline">Reach out to discuss how we can support your journey to wellbeing</a>, whether at home or abroad.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-muted)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Vatule Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">Board-certified providers specializing in Other Medical</p>
              <p className="text-[var(--color-ink)] leading-relaxed text-sm">
                Our team at Vatule is dedicated to supporting your health and wellness journey with evidence-based care and compassionate guidance. We believe in treating the whole person, recognizing that wellbeing encompasses physical, mental, and emotional health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Travel & Wellness</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Where to Stay in Punta Mita: Resort Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore the best accommodations in Punta Mita, from luxury resorts to boutique properties, each offering unique wellness amenities.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read More
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Wellness</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Wellness Activities in Riviera Nayarit
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover yoga retreats, spa treatments, and mindfulness experiences that make the Riviera Nayarit a premier wellness destination.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read More
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Travel Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Staying Healthy While Traveling in Mexico
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Essential health tips for travelers, from sun protection to staying hydrated, ensuring your Mexican vacation is safe and enjoyable.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read More
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-3 shadow-lg">
            <span>Contact Us Today</span>
            <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}