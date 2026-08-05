import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Evolution of Punta Mita: From Fishing Village to World-Class Resort | Vatule',
  description: 'Discover the remarkable transformation of Punta Mita from a quiet fishing village to one of Mexico\'s most prestigious resort destinations, and what this means for travelers seeking authentic luxury experiences.',
  keywords: 'Punta Mita history, luxury resort development, Mexican Riviera Nayarit, sustainable tourism, luxury travel Mexico, Punta Mita evolution',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Evolution of Punta Mita: From Fishing Village to World-Class Resort
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Vatule Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Nestled on a pristine peninsula where the Pacific Ocean meets the Bay of Banderas, Punta Mita has undergone one of the most remarkable transformations in luxury travel history. What was once a sleepy fishing village, known only to local families and the occasional adventurous traveler, has evolved into one of Mexico's most exclusive resort destinations—yet it has managed to retain the soul and authenticity that made it special in the first place.
            </p>
            <p className="mb-6">
              This evolution offers valuable lessons about sustainable development, community partnership, and the delicate balance between progress and preservation. For travelers seeking meaningful wellness experiences that honor both luxury and local culture, understanding Punta Mita's journey provides important context for making intentional travel choices.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Origins: A Traditional Fishing Community
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For generations, Punta Mita was home to Huichol and Cora indigenous communities, followed by mestizo fishing families who built their lives around the rhythm of the ocean. The peninsula's geography—a dramatic point of land jutting into the Pacific—created ideal conditions for fishing, with nutrient-rich waters supporting abundant marine life.
            </p>
            <p className="mb-6">
              Life in pre-development Punta Mita was simple but deeply connected to nature. Families lived in modest homes, children played on empty beaches, and the community's calendar revolved around fishing seasons and traditional celebrations. The area remained largely undiscovered by tourists, accessible only by rough dirt roads that discouraged all but the most determined visitors.
            </p>
            <p className="mb-6">
              This isolation preserved both the environment and the culture, but it also meant limited economic opportunities and access to healthcare, education, and modern infrastructure. By the 1990s, many young people were leaving in search of opportunities elsewhere, threatening the community's long-term viability.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Vision: Creating Sustainable Luxury
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              In 1999, a bold vision emerged: to develop Punta Mita as a world-class resort destination while preserving its natural beauty and supporting the local community. This wasn't just another real estate project—it was conceived as a 30-year master plan that would balance conservation, community development, and luxury hospitality.
            </p>
            <p className="mb-6">
              The development team worked closely with local families, environmental scientists, and cultural experts to create a framework that would:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Preserve 75% of the peninsula as protected natural areas, including mangroves, beaches, and wildlife corridors</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Guarantee employment and business opportunities for local residents</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Invest in infrastructure, schools, healthcare facilities, and community programs</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Maintain access to beaches and sacred sites for local families</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Implement cutting-edge environmental protections and sustainability practices</span>
              </li>
            </ul>
            <p className="mb-6">
              This approach was revolutionary for its time. Rather than displacing the existing community or treating development as separate from conservation, the Punta Mita model integrated all three priorities from the beginning.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <blockquote className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "True luxury isn't about exclusion—it's about creating experiences that enrich everyone involved, from guests to local communities to the environment itself."
            </blockquote>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Transformation: Infrastructure Meets Nature
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The physical transformation of Punta Mita began in the early 2000s with careful infrastructure development. Roads were paved, but designed to minimize environmental impact. Utilities were installed underground to preserve views. Water treatment facilities were built to protect the ocean and groundwater.
            </p>
            <p className="mb-6">
              In 2002, the Four Seasons Resort opened as the peninsula's anchor property, followed by the St. Regis in 2008. These weren't merely luxury hotels—they were carefully designed to blend with the landscape, using local materials, traditional architectural elements, and extensive landscaping with native plants.
            </p>
            <p className="mb-6">
              Two Jack Nicklaus Signature golf courses were carved into the coastal terrain, including the only natural ocean island green in the world. While golf courses are often criticized for environmental impact, these were designed with extensive environmental safeguards, including recycled water systems and protected wildlife corridors.
            </p>
            <p className="mb-6">
              Residential development followed, with luxury villas and private estates that attracted international buyers while maintaining architectural standards that preserved the area's visual character. Strict building codes limited height, required natural materials, and mandated large preserved areas within each property.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Community Impact: Beyond Economic Development
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The transformation's impact on the local community has been profound and multifaceted. Economically, Punta Mita's development created thousands of jobs—from construction and hospitality to professional services and entrepreneurship. Many families who once relied solely on fishing now have diversified income sources and expanded opportunities.
            </p>
            <p className="mb-6">
              The Fundación Punta de Mita, established by the development group, has invested millions in community programs:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A modern healthcare clinic providing free or low-cost medical care to 8,000+ residents</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Educational programs including scholarships, vocational training, and English language classes</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Youth sports and cultural programs that keep traditions alive while building new skills</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Small business support and microfinance programs for local entrepreneurs</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Environmental education programs teaching sustainable practices</span>
              </li>
            </ul>
            <p className="mb-6">
              Perhaps most importantly, many residents report feeling that their culture and identity have been respected rather than erased. Traditional festivals continue, fishing remains an important livelihood for those who choose it, and the community maintains its social cohesion even as economic opportunities have expanded.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Environmental Stewardship: Protecting Paradise
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Punta Mita's environmental record has been central to its success and reputation. The development has maintained its commitment to preserving 75% of the peninsula, with protected areas including:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Eight miles of pristine beaches with protected nesting sites for sea turtles</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Extensive mangrove forests that filter water and provide wildlife habitat</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Coral reef systems monitored and protected by marine biologists</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Wildlife corridors allowing movement of deer, armadillos, and native bird species</span>
              </li>
            </ul>
            <p className="mb-6">
              Active conservation programs include sea turtle rescue and release initiatives, coral restoration projects, and partnerships with marine research institutions. Water quality is continuously monitored, and waste management systems ensure that development doesn't pollute the ocean or groundwater.
            </p>
            <p className="mb-6">
              These efforts have yielded measurable results: sea turtle populations have increased, coral reefs remain healthy compared to many Mexican coastal areas, and wildlife diversity has been maintained despite development. Punta Mita has become a case study in how luxury development can coexist with environmental protection.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Lessons for Conscious Travel
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Punta Mita's evolution offers important insights for travelers who want their vacation choices to align with their values:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Luxury and sustainability aren't mutually exclusive.</strong> High-end resorts can invest in environmental protection and community development in ways that budget operations cannot.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Long-term thinking matters.</strong> Punta Mita's 30-year master plan allowed for patient, thoughtful development rather than quick extraction of value.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Community partnership is essential.</strong> Development that works with rather than against local residents creates better outcomes for everyone.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Authenticity has value.</strong> Preserving local culture and natural beauty makes destinations more appealing, not less.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Wellness extends beyond the individual.</strong> True well-being includes knowing that your travel choices support healthy communities and ecosystems.</span>
              </li>
            </ul>
            <p className="mb-6">
              When you choose to visit Punta Mita, you're participating in this ongoing story. Your presence supports jobs, funds conservation efforts, and validates the model of sustainable luxury development. You're also experiencing the benefits: pristine nature, authentic cultural experiences, and the peace of mind that comes from traveling responsibly.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The evolution of Punta Mita from fishing village to world-class resort is far from complete. The destination continues to grow and change, always balancing progress with preservation, luxury with authenticity, and economic opportunity with environmental stewardship.
            </p>
            <p className="mb-6">
              For travelers seeking meaningful experiences that nourish body, mind, and spirit while supporting positive change in the world, Punta Mita offers a compelling model. It demonstrates that we don't have to choose between comfort and conscience, between luxury and responsibility.
            </p>
            <p className="mb-6">
              At Vatule, we believe that true wellness encompasses all aspects of our lives—including how and where we travel. Understanding destinations like Punta Mita helps us make informed choices that align with our values and contribute to a healthier, more sustainable world for everyone.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Vatule Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">Board-certified providers specializing in Other Medical</p>
              <p className="text-[var(--color-ink)] leading-relaxed text-sm">
                Our team is dedicated to providing evidence-based insights on wellness, travel, and living your best life. We combine clinical expertise with a deep understanding of the mind-body connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-[16/10] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)]"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Travel & Wellness</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Sustainable Luxury Travel: Making Conscious Choices
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Discover how to align your travel experiences with your values without sacrificing comfort or quality.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="aspect-[16/10] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)]"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Wellness</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Connection Between Nature and Mental Health
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Learn how natural environments support emotional well-being and stress reduction.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="aspect-[16/10] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)]"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Cultural Wellness</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Mexican Healing Traditions and Modern Wellness
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Explore the rich heritage of Mexican wellness practices and their relevance today.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you create wellness experiences that align with your values and goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full hover:bg-[var(--color-accent-dark)] transition-all duration-300 font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}