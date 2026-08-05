import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Punta Mita Beach Clubs Guide: St. Regis, Residents Club & Kupuri | Vatule',
  description: 'Comprehensive guide to Punta Mita\'s exclusive beach clubs including St. Regis Beach Club, Residents Beach Club, and Kupuri Beach Club. Amenities, access, and insider tips.',
  keywords: 'Punta Mita beach clubs, St Regis Beach Club, Residents Beach Club Punta Mita, Kupuri Beach Club, luxury beach access Mexico, Punta Mita amenities',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
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
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Punta Mita Beach Clubs Guide: St. Regis, Residents Club & Kupuri
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>By Dr. Bruice Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            Nestled along the pristine Pacific coast of Mexico's Riviera Nayarit, Punta Mita stands as one of the world's most exclusive resort destinations. Beyond its championship golf courses and luxury estates lies a collection of three exceptional beach clubs, each offering unique experiences that define the art of coastal living. Whether you're a property owner, resort guest, or considering a visit to this remarkable peninsula, understanding these beach clubs is essential to unlocking the full Punta Mita experience.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            This comprehensive guide explores the St. Regis Beach Club, the Residents Beach Club, and Kupuri Beach Club—three distinct venues that cater to different aspects of the Punta Mita lifestyle. From world-class amenities to breathtaking natural settings, we'll help you navigate what makes each beach club special and how to access these coveted coastal retreats.
          </p>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            St. Regis Beach Club: Elegance Meets Ocean
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The St. Regis Beach Club represents the pinnacle of refined beach club experiences in Punta Mita. Located adjacent to the St. Regis Punta Mita Resort, this beach club seamlessly blends the brand's signature luxury with the natural beauty of Banderas Bay.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The beach club features multiple infinity pools that appear to merge with the ocean horizon, private cabanas with dedicated butler service, and a sophisticated restaurant serving both international cuisine and authentic Mexican specialties. The white-sand beach is meticulously maintained, with comfortable loungers positioned to capture the perfect balance of sun and shade throughout the day.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            What sets the St. Regis Beach Club apart is its commitment to personalized service. From the moment you arrive, attentive staff anticipate your needs—whether it's refreshing cold towels, perfectly chilled champagne, or arranging water sports activities. The club offers paddleboarding, kayaking, and snorkeling equipment, with calm waters ideal for all skill levels.
          </p>

          <div className="bg-[var(--color-cream)] rounded-lg p-6 my-8">
            <h3 className="font-serif text-xl text-[var(--color-ink)] mb-4">Access Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>St. Regis Punta Mita Resort guests have complimentary access</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Four Seasons Resort guests can access through inter-resort privileges</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Day passes available for non-resort guests with advance reservation</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Private cabanas can be reserved for an elevated experience</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Residents Beach Club: Community and Casual Sophistication
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The Residents Beach Club serves as the social heart of the Punta Mita community, offering property owners and long-term residents a more relaxed, family-friendly atmosphere while maintaining the area's high standards of quality and service.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This beach club features an expansive pool area, casual dining venues, and a more laid-back ambiance that encourages interaction among the Punta Mita community. The restaurant offers fresh seafood, grilled specialties, and classic beach fare, with both indoor and outdoor seating that takes advantage of the spectacular ocean views.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Families particularly appreciate the Residents Beach Club for its welcoming atmosphere and kid-friendly amenities. The beach area is protected and calm, making it ideal for children to swim and play safely. The club regularly hosts community events, from sunset barbecues to holiday celebrations, fostering a genuine sense of belonging among Punta Mita residents.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
            "The three beach clubs of Punta Mita each offer distinct experiences, from the refined elegance of St. Regis to the community warmth of the Residents Club and the secluded luxury of Kupuri—together creating a comprehensive coastal lifestyle unmatched in Mexico."
          </blockquote>

          <div className="bg-[var(--color-cream)] rounded-lg p-6 my-8">
            <h3 className="font-serif text-xl text-[var(--color-ink)] mb-4">Membership Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Available exclusively to Punta Mita property owners</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Membership typically transfers with property ownership</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Members can bring a limited number of guests</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to community events and special programming</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Kupuri Beach Club: Ultra-Private Sanctuary
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Kupuri Beach Club represents the most exclusive and private beach club experience in Punta Mita. Nestled in a secluded cove with dramatic rock formations, Kupuri offers an intimate escape that feels worlds away from the busier beach areas, despite being just minutes from the main resort corridor.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The architecture at Kupuri blends seamlessly with the natural landscape, featuring organic materials, open-air design, and unobstructed ocean views. The infinity pool seems to float above the sea, while carefully positioned lounging areas provide both sunny and shaded options throughout the day. The restaurant specializes in fresh, locally-sourced cuisine with an emphasis on seafood caught daily from the surrounding waters.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            What makes Kupuri particularly special is its limited capacity—the club intentionally restricts the number of guests to preserve the serene, uncrowded atmosphere. This commitment to exclusivity means you'll often feel as though you have this spectacular stretch of coastline to yourself. The beach at Kupuri features unique tide pools perfect for exploring, and the snorkeling opportunities around the nearby rocks reveal vibrant marine life.
          </p>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Choosing the Right Beach Club for Your Visit
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding which beach club best suits your needs depends on several factors: your accommodation status, the type of experience you seek, and your travel companions. Each club offers distinct advantages that cater to different preferences and occasions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For those staying at the St. Regis or Four Seasons resorts, taking advantage of the St. Regis Beach Club access is essential. The full-service experience, extensive amenities, and pristine facilities make it ideal for those who want every detail managed. It's particularly suitable for couples seeking a romantic day at the beach or anyone who appreciates attentive service and refined surroundings.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Property owners and their guests will find the Residents Beach Club offers the best value for regular visits. The more casual atmosphere encourages repeat visits without the formality of resort settings, and the community aspect adds a social dimension that resort beach clubs can't replicate. Families with children especially benefit from the welcoming environment and kid-appropriate facilities.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Kupuri Beach Club appeals to those seeking absolute privacy and natural beauty. If you're celebrating a special occasion, want uninterrupted relaxation, or simply prefer intimate settings over bustling beach scenes, Kupuri delivers an experience closer to having your own private beach than a traditional beach club visit.
          </p>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Tips for Beach Club Visits
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Maximizing your beach club experience requires some advance planning, especially during peak season (November through April) when Punta Mita welcomes visitors from around the world seeking warm weather escapes.
          </p>

          <div className="bg-[var(--color-cream)] rounded-lg p-6 my-8">
            <h3 className="font-serif text-xl text-[var(--color-ink)] mb-4">Essential Planning Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reserve cabanas and preferred seating at least 48 hours in advance during high season</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Arrive before 11 AM to secure prime beach locations if not pre-reserving</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bring reef-safe sunscreen—Punta Mita's marine ecosystem is protected and precious</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Make lunch reservations if you plan to dine at the beach club restaurant</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Cash tips for beach attendants and servers are customary and appreciated</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)]">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Water shoes can be helpful for rocky entry areas, particularly at Kupuri</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Beyond the Beach: The Complete Punta Mita Experience
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While the beach clubs represent highlights of the Punta Mita experience, they're part of a larger ecosystem of luxury amenities and natural wonders. The two Jack Nicklaus Signature golf courses consistently rank among Mexico's finest, with the Tail of the Whale—a natural island green—offering one of golf's most photographed and challenging par-3 holes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The surrounding waters provide world-class sportfishing, with marlin, sailfish, and dorado plentiful during season. Whale watching from December through March brings opportunities to observe humpback whales in their breeding grounds. The nearby Marietas Islands, a protected national park, offer exceptional snorkeling and the famous Hidden Beach (Playa del Amor), accessible only through a water tunnel.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many visitors to Punta Mita's beach clubs find themselves captivated not just by the facilities, but by the overall lifestyle the peninsula offers—a unique blend of sophisticated amenities, pristine natural beauty, and genuine Mexican warmth that creates lasting memories and often inspires return visits year after year.
          </p>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-12">
            Whether you're planning your first visit to Punta Mita or returning to this exceptional destination, understanding the distinct character of each beach club enhances your experience and helps you make the most of your time in this coastal paradise. From the refined elegance of St. Regis to the community warmth of the Residents Club and the secluded luxury of Kupuri, Punta Mita's beach clubs offer experiences that cater to every preference while maintaining the uncompromising quality that defines this world-class destination.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-2">
                Written by the Vatule - Kenton and Donna Bruice Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Other Medical
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  Complete Guide to Punta Mita Real Estate
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore property options, investment potential, and lifestyle benefits of owning in Punta Mita.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  Top Activities and Excursions in Punta Mita
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  From golf to whale watching, discover the best experiences this coastal paradise offers.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  St. Regis vs Four Seasons Punta Mita: Resort Comparison
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Detailed comparison of Punta Mita's two flagship luxury resorts to help you choose.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}