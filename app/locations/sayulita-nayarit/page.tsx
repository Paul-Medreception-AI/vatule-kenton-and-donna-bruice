import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Sayulita, NA | Vatule - Kenton and Donna Bruice',
  description: 'Serving patients from Sayulita and surrounding NA communities. Expert psychiatric care is closer than you think. Telehealth available.',
  openGraph: {
    title: 'Other Medical Near Sayulita, NA | Vatule - Kenton and Donna Bruice',
    description: 'Serving patients from Sayulita and surrounding NA communities. Expert psychiatric care is closer than you think.',
    url: 'https://vatule.com/locations/sayulita-nayarit',
    siteName: 'Vatule - Kenton and Donna Bruice',
    locale: 'en_US',
    type: 'website',
  }
}

export default function SayulitaLocationPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="mb-8 text-sm opacity-90">
            <a href="/" className="hover:opacity-70 transition-opacity">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:opacity-70 transition-opacity">Locations</a>
            <span className="mx-2">›</span>
            <span>Sayulita, NA</span>
          </nav>
          
          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near Sayulita, NA
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl font-light leading-relaxed">
            Serving patients from Sayulita and surrounding NA communities. Expert psychiatric care is closer than you think.
          </p>
          
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            Schedule in Sayulita
          </a>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Serving the Sayulita Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              While our practice is conveniently located to serve Sayulita residents, we understand that travel can sometimes be challenging. Many of our Sayulita patients appreciate the short commute for comprehensive psychiatric care that meets the highest standards. Whether you're coming from downtown Sayulita or the surrounding NA communities, our accessible location makes getting expert mental health care straightforward and stress-free.
            </p>
            
            <p>
              Patients from Sayulita choose Vatule - Kenton and Donna Bruice because of our specialized approach to psychiatric care, our commitment to personalized treatment plans, and our reputation for compassionate, evidence-based medicine. For those who prefer to minimize travel time or have scheduling constraints, we also offer comprehensive telehealth services that bring the same quality care directly to your home in Sayulita.
            </p>
          </div>

          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)] animate-fade-up">
            <div className="text-center text-[var(--color-muted)]">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-lg">Serving Sayulita, NA and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Services Available to Sayulita Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-['Cormorant',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Comprehensive Evaluations
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough psychiatric assessments tailored to your unique needs, establishing the foundation for effective treatment.
              </p>
              <a href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.106 1.106M5 14.5l-1.757-.146A1.5 1.5 0 001.5 16.107v2.286c0 .83.671 1.5 1.5 1.5h.214M19.8 15.3l1.757-.146a1.5 1.5 0 011.743 1.753v2.286a1.5 1.5 0 01-1.5 1.5h-.214" />
              </svg>
              <h3 className="font-['Cormorant',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychiatric medication management with ongoing monitoring and adjustment for optimal results.
              </p>
              <a href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-['Cormorant',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Telepsychiatry Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual appointments from the comfort of your Sayulita home with the same quality care.
              </p>
              <a href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up border border-[var(--color-border)]">
            <h2 className="font-['Cormorant',serif] text-3xl md:text-4xl font-light mb-6 text-[var(--color-ink)]">
              Can't Make the Drive? We Offer Telehealth
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              For Sayulita residents who prefer to minimize travel or have busy schedules, we provide comprehensive telehealth services that bring expert psychiatric care directly to you. Our secure, HIPAA-compliant video platform allows you to receive the same personalized, compassionate treatment from the comfort of your home.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Most major insurance plans cover telehealth appointments, and many Sayulita patients find virtual visits to be just as effective as in-person sessions. Whether you're managing ongoing treatment or seeking an initial consultation, telehealth makes quality psychiatric care more accessible than ever.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 animate-fade-up hover:shadow-md transition-shadow">
              <h3 className="font-['Cormorant',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                How far is your practice from Sayulita?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently located to serve Sayulita residents with a reasonable commute time. Many patients find the drive worthwhile for specialized psychiatric care, and we also offer telehealth options for those who prefer virtual appointments or have difficulty traveling.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 animate-fade-up hover:shadow-md transition-shadow">
              <h3 className="font-['Cormorant',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                What's the best route from Sayulita to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Patients from Sayulita typically find our location easy to access via major roads and highways. We recommend calling our office for specific directions based on your starting point in the Sayulita area. Our staff can provide detailed driving instructions and discuss the best times to travel to avoid traffic.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 animate-fade-up hover:shadow-md transition-shadow">
              <h3 className="font-['Cormorant',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Do you offer telehealth for Sayulita residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for Sayulita patients. Our secure video platform allows you to receive the same quality psychiatric care from home. Telehealth appointments are covered by most insurance plans and are ideal for follow-up visits, medication management, and ongoing therapy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 animate-fade-up hover:shadow-md transition-shadow">
              <h3 className="font-['Cormorant',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Is parking available for patients coming from Sayulita?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide convenient parking for all our patients, including those traveling from Sayulita. Our facility is designed with accessibility in mind, ensuring a stress-free experience from the moment you arrive. If you have specific accessibility needs, please let us know when scheduling your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Sayulita
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation today and discover compassionate, personalized psychiatric care serving the Sayulita community.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}