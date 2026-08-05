import Link from 'next/link'

export default function BlogPage() {
  const articles = [
    {
      category: "Wellness",
      title: "Planning Your Perfect Punta Mita Vacation",
      excerpt: "Discover insider tips for making the most of your stay at our luxury oceanfront estate, from the best times to visit to must-experience local activities."
    },
    {
      category: "Travel Tips",
      title: "What to Pack for a Luxury Villa Stay in Mexico",
      excerpt: "Essential items and helpful recommendations for your tropical getaway, including beachwear, sun protection, and items to maximize your comfort."
    },
    {
      category: "Local Guide",
      title: "Exploring the Punta Mita Resort Community",
      excerpt: "Navigate the exclusive gated resort with confidence. Learn about the championship golf courses, beach clubs, and world-class dining options available to our guests."
    },
    {
      category: "Family Travel",
      title: "Multi-Generational Vacation Planning Made Easy",
      excerpt: "How to coordinate travel for extended families and create memorable experiences that appeal to every age group, from toddlers to grandparents."
    },
    {
      category: "Activities",
      title: "Water Sports and Ocean Adventures in Punta Mita",
      excerpt: "From surfing and paddleboarding to whale watching and deep-sea fishing, explore the incredible Pacific Ocean activities available steps from your villa."
    },
    {
      category: "Dining",
      title: "The Art of Private Chef Services at Luxury Villas",
      excerpt: "Understanding how our included chef services work and how to customize your culinary experience with authentic Mexican cuisine and international favorites."
    },
    {
      category: "Wellness",
      title: "Creating Your Personal Retreat Experience",
      excerpt: "Transform your villa stay into a restorative wellness retreat with spa services, yoga sessions, and mindfulness practices in a stunning oceanfront setting."
    },
    {
      category: "Events",
      title: "Hosting Memorable Celebrations at Oceanfront Estates",
      excerpt: "Planning guidance for milestone birthdays, anniversaries, and family reunions in a luxury villa setting, including décor ideas and timeline coordination."
    },
    {
      category: "Local Culture",
      title: "Discovering Authentic Mexican Culture Beyond the Resort",
      excerpt: "Venture into nearby towns and villages to experience local markets, traditional cuisine, artisan crafts, and the rich cultural heritage of the region."
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light mb-6">
            Resources & Guest Education
          </h1>
          <p className="text-xl text-white/90 font-light">
            Expert guidance and inspiration to help you plan the perfect luxury oceanfront escape
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 md:p-16 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">Featured Article</span>
              <div className="h-px flex-1 bg-[var(--color-border)]"></div>
            </div>
            
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-6">
              The Complete Guide to Ultra-Luxury Villa Vacations in Punta Mita
            </h2>
            
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Punta Mita has earned its reputation as one of Mexico's most exclusive resort destinations, attracting discerning travelers seeking privacy, luxury, and natural beauty. Within this gated community, oceanfront estates like Vatulé represent the pinnacle of vacation experiences, offering amenities and services that rival the world's finest resorts while maintaining the intimate atmosphere of a private home.
              </p>
              <p>
                Unlike traditional hotel accommodations, a luxury villa vacation provides complete freedom and flexibility for your group. With five private king suites, a dedicated youth bunkhouse, and over 10,000 square feet of living space, families can spread out while still enjoying quality time together. The inclusion of full-service staff—from daily breakfast preparation to evening chef service—means you experience five-star hospitality without sacrificing the comfort and privacy of home.
              </p>
              <p>
                The true magic of Vatulé lies in its unique position as the only estate on La Punta with visible sunsets every evening of the year. This rare Pacific-facing orientation, combined with direct access to championship golf, beach clubs, and world-class dining, creates an unparalleled setting for multi-generational gatherings, corporate retreats, and milestone celebrations. Whether you're planning a family reunion or an executive getaway, understanding what makes luxury villa vacations special helps you maximize every moment of your stay.
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 mt-8 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors font-medium"
            >
              Read More
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {articles.map((article, index) => (
              <article 
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up"
              >
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold block mb-4">
                  {article.category}
                </span>
                
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[var(--color-ink)] mb-4">
                  {article.title}
                </h3>
                
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-6">
            Ready to Experience Vatulé?
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Contact our team to check availability and begin planning your luxury oceanfront escape
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-colors"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </main>
  )
}