import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Other Medical Near Punta Mita, NA | Vatule - Kenton and Donna Bruice',
  description: 'Expert Other Medical care serving Punta Mita and surrounding NA communities. Schedule your appointment today with Vatule - Kenton and Donna Bruice.',
  openGraph: {
    title: 'Other Medical Near Punta Mita, NA | Vatule - Kenton and Donna Bruice',
    description: 'Expert Other Medical care serving Punta Mita and surrounding NA communities.',
    url: 'https://vatule.com/locations/punta-mita-nayarit',
    siteName: 'Vatule - Kenton and Donna Bruice',
    locale: 'en_US',
    type: 'website',
  }
}

export default function PuntaMitaLocation() {
  return (
    <main className="min-h-screen">
      
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="mb-8 text-sm opacity-90">
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:opacity-70 transition-opacity">Locations</Link>
            <span className="mx-2">›</span>
            <span>Punta Mita, NA</span>
          </nav>
          
          <h1 className="font-serif text-5xl font-light mb-6 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Other Medical Near Punta Mita, NA
          </h1>
          
          <p className="text-xl mb-10 max-w-3xl opacity-95 animate-fade-up">
            Serving patients from Punta Mita and surrounding NA communities. Expert psychiatric care is closer than you think.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 animate-fade-up"
          >
            Schedule in Punta Mita
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-8 text-[var(--color-ink)] animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Serving the Punta Mita Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed">
            <p className="animate-fade-up">
              Located conveniently for Punta Mita residents, our practice provides comprehensive psychiatric care without the long commute. We understand that finding quality mental health services in the NA area can be challenging, which is why patients throughout the region trust Vatule - Kenton and Donna Bruice for compassionate, evidence-based treatment. Whether you're dealing with anxiety, depression, ADHD, or other mental health concerns, our team is here to help you achieve lasting wellness.
            </p>
            
            <p className="animate-fade-up">
              Many Punta Mita patients choose us because of our personalized approach to care and flexible appointment options. We know your time is valuable, so we've streamlined our scheduling process and offer telehealth appointments for those who prefer to meet virtually. Our goal is to make expert psychiatric care accessible and convenient for everyone in the Punta Mita community and beyond.
            </p>
          </div>
          
          <div className="mt-12 bg-[var(--color-light)] rounded-2xl h-64 flex flex-col items-center justify-center text-[var(--color-muted)] animate-fade-up">
            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-lg font-medium">Convenient Access from Punta Mita</p>
            <p className="text-sm mt-2">Serving NA and surrounding communities</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Services Available to Punta Mita Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-8 h-8 mb-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Comprehensive Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Thorough psychiatric assessments to understand your unique needs and develop personalized treatment plans.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-8 h-8 mb-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Expert psychiatric medication services with ongoing monitoring and adjustment for optimal results.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-8 h-8 mb-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Convenient virtual appointments from the comfort of your Punta Mita home with the same quality care.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              Can't Make the Drive? We Offer Telehealth
            </h2>
            
            <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
              <p>
                For Punta Mita residents who prefer the convenience of virtual care, we offer comprehensive telehealth services. Our secure video appointments allow you to meet with our experienced psychiatric providers from anywhere—whether you're at home, traveling, or simply prefer not to commute.
              </p>
              
              <p>
                Telehealth appointments offer the same quality care as in-person visits, and most insurance plans cover virtual psychiatric services. We'll handle the verification and help you understand your benefits. Getting started is simple: just request a telehealth appointment when you schedule, and we'll send you everything you need to connect securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                How far is your practice from Punta Mita?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently located to serve Punta Mita residents. The exact distance depends on your specific location within Punta Mita, but most patients find us easily accessible. We also offer telehealth appointments if you prefer not to travel.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                What are the best directions from Punta Mita?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                When you schedule your appointment, our team will provide detailed directions from Punta Mita to our office. We're located in an accessible area with clear signage. If you have any trouble finding us, please call our office and we'll be happy to guide you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Do you offer telehealth for Punta Mita patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer secure telehealth appointments for patients throughout the Punta Mita area. Virtual visits are perfect for follow-up appointments, medication management, and ongoing therapy. Most insurance plans cover telehealth services, and our team will verify your benefits before your first appointment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-md transition-shadow animate-fade-up">
              <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Is parking available for Punta Mita patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide convenient parking for all our patients. Our facility is fully accessible, with accommodations for patients with mobility needs. When you arrive, you'll find clear signage directing you to patient parking and our entrance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-6 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Get Expert Care from Punta Mita
          </h2>
          <p className="text-xl mb-10 opacity-95 animate-fade-up">
            Schedule your appointment today and discover compassionate psychiatric care close to home.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg font-medium transition-all hover:scale-105 animate-fade-up"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>

    </main>
  )
}