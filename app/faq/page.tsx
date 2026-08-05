import Link from 'next/link'

export const metadata = {
  title: 'Frequently Asked Questions | Vatulé - Punta Mita Luxury Villa',
  description: 'Get answers to common questions about booking, amenities, pricing, and what to expect at Vatulé, the premier oceanfront estate in Punta Mita Resort.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6 text-sm opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </div>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-secondary)' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Everything you need to know about booking and experiencing Vatulé, Punta Mita's premier oceanfront estate
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>How many guests can Vatulé accommodate?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Vatulé can comfortably accommodate up to 26 guests across multiple sleeping areas. The estate features five private king suites, each with Pacific Ocean views and private entrances, perfect for couples or families who value privacy. Additionally, we have a dedicated youth bunkhouse that sleeps up to 12 guests with its own media room, making it ideal for children and teenagers. All accommodations are furnished with premium bedding and have direct access to our expansive outdoor living spaces. This configuration makes Vatulé particularly well-suited for multi-generational family gatherings, destination celebrations, and corporate retreats.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What is the nightly rate and what does it include?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Nightly rates at Vatulé range from approximately $7,490 to $21,990 before taxes and fees, depending on your travel dates and season. Your stay includes full-service staff who prepare daily breakfast, provide evening chef service, and handle all housekeeping throughout your visit. The rate also includes access to bicycles and a six-seat golf cart for navigating the Punta Mita Resort, as well as exclusive access to resort amenities including championship golf courses, tennis facilities, and three beach clubs. Additional services such as extra chef meals, special event planning, or concierge arrangements can be customized for your group at additional cost.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What makes Vatulé's location unique within Punta Mita?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Vatulé is the only estate on La Punta where you can witness visible Pacific sunsets every single evening of the year. This exceptional positioning within the gated Punta Mita Resort provides unobstructed oceanfront views while maintaining complete privacy and security. Our location offers direct access to the resort's world-class amenities while providing a secluded retreat setting. The estate sits on expansive grounds featuring a 50-yard lawn and over 10,000 square feet of covered living space, all oriented to maximize those spectacular sunset views. This combination of prime positioning, privacy, and resort access is truly unmatched in the region.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>How far in advance should I book my stay?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We recommend booking 6-12 months in advance, especially for peak season travel (December through April) and holiday periods. Vatulé is a highly sought-after property for multi-family gatherings and special celebrations, so early booking ensures you secure your preferred dates. For last-minute availability, we encourage you to contact us directly as we occasionally have openings due to schedule changes. Once you've identified your desired dates, we can provide immediate availability confirmation and hold your reservation with a deposit. Planning ahead also allows our concierge team more time to arrange special experiences, tee times, and restaurant reservations throughout your stay.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What staff services are included during my stay?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Your stay at Vatulé includes comprehensive full-service staff who manage every aspect of your comfort. Each morning, our team prepares a delicious breakfast for your entire group, accommodating dietary preferences and requests. Evening chef service is also included, with our culinary team creating exceptional dinners using fresh, local ingredients. Daily housekeeping ensures all accommodations and common areas remain immaculate throughout your visit. Our staff is also available to coordinate activities, arrange transportation, and handle any special requests that arise during your stay. This level of attentive service allows you to truly relax and enjoy your time without worrying about any details.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What resort amenities can I access from Vatulé?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                As a Vatulé guest, you have exclusive access to all Punta Mita Resort amenities. This includes the championship Bahia and Pacifico Golf Clubs, both designed by Jack Nicklaus and featuring the famous "Tail of the Whale" ocean island green. Tennis courts, state-of-the-art fitness facilities, and professional instruction are all available. You'll also enjoy access to three premier beach clubs: St. Regis, Four Seasons, and Kupuri Beach Club, each offering exceptional dining, water sports, and beachfront service. Our concierge can arrange tee times, spa appointments, and restaurant reservations throughout the resort. Bicycles and a golf cart are included with your stay for easy navigation around the expansive resort property.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>Is Vatulé suitable for families with young children?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Absolutely! Vatulé is specifically designed for multi-generational family gatherings and is exceptionally well-suited for families with children. The youth bunkhouse provides a dedicated space where kids can sleep together and enjoy their own media room, while parents relax in the separate king suites. The 72-foot infinity pool and 14-person jacuzzi are perfect for family fun, and the expansive 50-yard lawn offers plenty of space for games and activities. Our staff can arrange age-appropriate activities, and the shallow areas of the pool are ideal for younger swimmers. The estate's layout allows children the freedom to explore safely while giving adults their own spaces to relax and unwind.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>Can I host a special event or celebration at Vatulé?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, Vatulé is an extraordinary venue for weddings, anniversaries, milestone birthdays, and other special celebrations. With over 10,000 square feet of covered living space and expansive outdoor areas, we can accommodate intimate gatherings or larger events with additional planning. Our concierge team works closely with preferred local vendors to arrange everything from flowers and photography to entertainment and custom menus. The stunning sunset views provide a breathtaking backdrop for ceremonies and receptions. Whether you're planning a rehearsal dinner, intimate wedding, or milestone celebration, our team ensures every detail is executed flawlessly. Contact us early in your planning process to discuss your vision and explore customization options.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What is your cancellation policy?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Our cancellation policy varies depending on your booking dates and how far in advance you cancel. Generally, cancellations made 90 days or more before arrival receive a full refund minus a processing fee. Cancellations made 60-89 days before arrival typically receive a 50% refund, while cancellations within 60 days of arrival forfeit the full deposit and any payments made. We strongly recommend purchasing travel insurance to protect your investment, especially for large group bookings or travel during uncertain times. Specific terms will be outlined in your booking agreement, and our team is happy to discuss any concerns before you finalize your reservation. We understand that plans sometimes change and will work with you as circumstances allow.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>Is Vatulé suitable for corporate retreats and business gatherings?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Vatulé provides an exceptional setting for executive retreats, board meetings, and team-building experiences. The secluded oceanfront location offers the privacy and focus needed for productive business discussions, while the luxurious amenities create an environment that inspires creativity and strengthens team bonds. Our expansive covered living spaces can be configured for presentations and working sessions, and reliable high-speed internet ensures connectivity when needed. The separate king suites provide each executive with private accommodations, and our full-service staff handles all meals and housekeeping so your team can focus on business objectives. After productive sessions, world-class golf, spa services, and sunset views provide the perfect balance of work and rejuvenation.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What is the closest airport and how do I arrange transportation?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The nearest airport is Puerto Vallarta International Airport (PVR), located approximately 45 minutes from Vatulé. This well-connected airport offers direct flights from many major U.S. cities and international destinations. We can arrange private transportation for your group, ensuring a seamless transfer from the airport to the estate. For larger groups, we coordinate multiple vehicles to accommodate everyone comfortably along with luggage. Our concierge team provides detailed arrival instructions and meets you at the estate to handle check-in and orientation. Many guests appreciate arriving together to begin their vacation experience immediately, and our transportation partners are experienced, professional, and familiar with the resort.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>Are meals included in the rental rate?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Your stay includes daily breakfast preparation and evening chef service, with food and beverage costs additional. Our talented culinary team creates exceptional meals using fresh, local ingredients and can accommodate various dietary preferences and restrictions. The cost for groceries and ingredients is charged separately based on your group's actual consumption, typically managed through a house account. Many guests appreciate this flexibility as it allows them to customize menus to their preferences without paying for meals they don't want. Our chef can prepare everything from casual poolside lunches to elegant multi-course dinners. We can also arrange restaurant reservations throughout Punta Mita Resort if you'd like to experience the area's exceptional dining scene.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What outdoor entertainment features does Vatulé offer?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Vatulé's outdoor spaces are designed for ultimate luxury and entertainment. The centerpiece is our spectacular 72-foot infinity pool that appears to merge with the Pacific Ocean beyond. Adjacent to the pool, a 14-person jacuzzi provides the perfect spot for evening relaxation while watching the sunset. We have multiple outdoor dining areas, including a fully equipped wet bar and grill for casual poolside meals. The sound system features 27 outdoor speakers strategically positioned throughout the property, allowing you to create the perfect ambiance for any occasion. The expansive 50-yard lawn provides space for lawn games, yoga sessions, or simply lounging in the sun. Every element is designed to maximize your enjoyment of Punta Mita's exceptional climate and views.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>Can your concierge arrange activities and excursions?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Our concierge service is available to arrange virtually any activity or excursion you desire throughout your stay. Popular options include deep-sea fishing, whale watching (seasonal), snorkeling and diving trips, surfing lessons, and private yacht charters. We can arrange cultural experiences like tequila tastings, cooking classes, and visits to nearby Puerto Vallarta for shopping and sightseeing. For relaxation, we coordinate spa services at the resort's world-class facilities or arrange for therapists to come to Vatulé for private treatments. Golf enthusiasts can secure tee times at both championship courses, and we'll arrange professional instruction if desired. Simply share your interests and we'll create a customized activity plan that enhances your Punta Mita experience.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What payment methods do you accept?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We accept several payment methods to accommodate your preferences, including major credit cards, wire transfers, and checks for deposits. A deposit is required to secure your reservation, with the balance typically due 60 days before arrival. We'll provide a detailed payment schedule when you book, breaking down the rental rate, estimated taxes and fees, and any additional services you've requested. For extended stays or complex bookings, we can arrange customized payment plans. Any incidental charges during your stay—such as additional food and beverages, extra chef services, or special activities—are typically settled through a house account and reconciled at checkout. We provide transparent, detailed billing so there are no surprises.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>Is internet and WiFi available throughout the property?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, Vatulé features high-speed wireless internet throughout the entire property, including all indoor living spaces, bedrooms, and most outdoor areas. The robust network can handle multiple users simultaneously, making it suitable for business needs, video calls, and streaming entertainment. While we encourage guests to disconnect and enjoy the natural beauty of Punta Mita, we understand that staying connected is sometimes necessary. The youth bunkhouse media room is fully equipped for streaming movies and shows, and all suites have excellent connectivity. Business travelers will find the internet reliable enough for video conferences and file transfers. Our staff can assist with any connectivity questions or technical needs during your stay.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What is the best time of year to visit Vatulé?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Punta Mita enjoys exceptional weather year-round, making any season wonderful for visiting Vatulé. Peak season runs from December through April, offering guaranteed sunshine, warm temperatures, and minimal rainfall—though this period also sees higher rates and requires earlier booking. Summer and fall months (May through November) feature warmer temperatures and occasional afternoon showers, but also offer more availability and value pricing. This is also when you might witness spectacular lightning storms over the ocean from the safety and comfort of the covered terraces. Whale watching season runs from December through March, and the summer months offer excellent fishing. Because Vatulé is the only estate on La Punta with visible sunsets every evening of the year, you're guaranteed spectacular views regardless of when you visit.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>What safety and security measures are in place?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Vatulé is located within the secure, gated Punta Mita Resort, which maintains 24-hour security with controlled access points and regular patrols. The resort's comprehensive security infrastructure ensures a safe environment for all guests. The estate itself features secure entry and our staff is present throughout your stay, providing an additional layer of attentiveness and security. Inside, we maintain high standards for pool safety, with proper fencing and clear depth markings. Our staff is trained in emergency procedures, and we maintain relationships with local medical facilities should any health concerns arise. The peaceful, controlled environment allows families to relax and children to explore safely while parents enjoy peace of mind throughout their vacation.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                <span>How do I get started with booking my stay?</span>
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Getting started is simple—just contact us with your preferred dates, group size, and any special requirements or questions. Our team will respond promptly with availability confirmation, seasonal pricing, and a detailed overview of what's included. We'll answer any questions and provide additional information about the estate, resort amenities, and area attractions. Once you're ready to proceed, we'll send a booking agreement outlining all terms, payment schedules, and policies. After receiving your deposit, your dates are secured and we'll begin planning your experience. Our concierge will then work with you leading up to your arrival to arrange activities, dietary preferences, and any special touches to make your stay unforgettable. We're here to guide you through every step of creating your perfect Punta Mita vacation.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-secondary)' }}>
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our team is here to help you plan your perfect stay at Vatulé. Contact us today to discuss availability, pricing, and how we can customize your experience.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}