import Link from 'next/link'

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            New Guests
          </h1>
          <p className="text-xl text-white/90 font-light">
            Everything you need to know before your first visit to Vatulé
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">
            Your First Visit
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-fade-up text-center">
              <div className="font-cormorant text-7xl font-light text-[var(--color-accent)] mb-4">01</div>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Check Availability</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Contact us to discuss your preferred dates and group size for your oceanfront estate experience
              </p>
            </div>
            <div className="animate-fade-up text-center">
              <div className="font-cormorant text-7xl font-light text-[var(--color-accent)] mb-4">02</div>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Review Details</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We'll provide comprehensive property information, pricing, amenities, and answer all your questions
              </p>
            </div>
            <div className="animate-fade-up text-center">
              <div className="font-cormorant text-7xl font-light text-[var(--color-accent)] mb-4">03</div>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Customize Your Stay</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Work with our concierge to plan activities, golf tee times, beach club access, and special services
              </p>
            </div>
            <div className="animate-fade-up text-center">
              <div className="font-cormorant text-7xl font-light text-[var(--color-accent)] mb-4">04</div>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Arrive & Relax</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our full-service staff greets you upon arrival and manages every detail throughout your stay
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">
            What to Prepare
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Guest List & Details</h3>
                <p className="text-[var(--color-muted)]">Full names and ages of all guests staying at the property for resort access coordination</p>
              </div>
            </div>
            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Travel Documents</h3>
                <p className="text-[var(--color-muted)]">Valid passports for all guests and any required travel visas for entry into Mexico</p>
              </div>
            </div>
            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Dietary Preferences</h3>
                <p className="text-[var(--color-muted)]">Any allergies, restrictions, or preferences for daily breakfast and chef services</p>
              </div>
            </div>
            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Activity Requests</h3>
                <p className="text-[var(--color-muted)]">Golf tee times, beach club reservations, or special excursions you'd like pre-arranged</p>
              </div>
            </div>
            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Emergency Contacts</h3>
                <p className="text-[var(--color-muted)]">Contact information for someone not traveling with your group in case of emergency</p>
              </div>
            </div>
            <div className="flex gap-4 items-start animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Special Occasions</h3>
                <p className="text-[var(--color-muted)]">Let us know about birthdays, anniversaries, or celebrations we can help make memorable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up shadow-lg">
            <h2 className="font-cormorant text-3xl md:text-4xl mb-6 text-[var(--color-ink)]">
              Reservation Agreement
            </h2>
            <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
              A rental agreement will be provided once availability is confirmed. This includes detailed property terms, cancellation policies, and payment schedule.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <p className="text-[var(--color-ink)]"><span className="font-semibold">Rental Agreement:</span> Review and sign property terms and conditions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <p className="text-[var(--color-ink)]"><span className="font-semibold">Payment Schedule:</span> Initial deposit and balance payment timeline</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <p className="text-[var(--color-ink)]"><span className="font-semibold">Guest Information Form:</span> Details for all guests and resort access</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <p className="text-[var(--color-ink)]"><span className="font-semibold">Damage Waiver:</span> Optional protection plan information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-8 text-[var(--color-ink)]">
            Pre-Arrival Planning
          </h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-16">
            Our concierge team will contact you before your arrival to ensure every detail is arranged to your preferences
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Meal Planning</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Coordinate breakfast preferences and evening chef menus, plus recommendations for additional dining experiences at resort restaurants
              </p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Activities & Excursions</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arrange golf tee times at Bahia or Pacifico, beach club access, tennis courts, fishing charters, and local tours throughout Punta Mita
              </p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Transportation & Logistics</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Coordinate airport transfers, provide directions to the property, and arrange any special transportation needs during your stay
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-8 text-[var(--color-ink)]">
            Property Policies
          </h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-16">
            Important information to ensure a smooth and enjoyable stay at Vatulé
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 animate-fade-up shadow-sm">
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Cancellation Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Cancellation terms vary by season and are detailed in your rental agreement. Generally, deposits are non-refundable, and full payment is required 60-90 days prior to arrival.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We strongly recommend travel insurance to protect your investment against unforeseen circumstances.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 animate-fade-up shadow-sm">
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Check-In & Check-Out</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Check-in time is 4:00 PM and check-out is 11:00 AM. Early check-in or late check-out may be available upon request and subject to availability.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our staff will meet you upon arrival to provide a property tour and orientation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 animate-fade-up shadow-sm">
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Guest Capacity</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Vatulé accommodates up to 26 overnight guests. The property includes five king suites and a youth bunkhouse sleeping 12. Additional day guests may be arranged with advance notice.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                All guests must be registered prior to arrival for resort access.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 animate-fade-up shadow-sm">
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-ink)]">Events & Gatherings</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Vatulé is perfect for family reunions, celebrations, and intimate events. Larger gatherings, weddings, or parties require advance approval and may incur additional fees.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Please contact us to discuss special event planning and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-ink)] to-[var(--color-dark)] py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6">
            Ready to Experience Vatulé?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-light">
            Contact our team to check availability and begin planning your unforgettable Pacific escape
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Check Availability
            </Link>
            <Link 
              href="/gallery" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-lg font-medium transition-all duration-200"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}