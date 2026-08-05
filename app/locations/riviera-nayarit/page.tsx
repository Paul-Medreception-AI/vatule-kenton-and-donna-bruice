import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Riviera Nayarit, NA | Vatule - Kenton and Donna Bruice',
  description: 'Expert Other Medical care serving Riviera Nayarit and surrounding NA communities. Schedule your appointment today with Vatule - Kenton and Donna Bruice.',
  openGraph: {
    title: 'Other Medical Near Riviera Nayarit, NA | Vatule - Kenton and Donna Bruice',
    description: 'Expert Other Medical care serving Riviera Nayarit and surrounding NA communities.',
    type: 'website',
  },
}

export default function RivieraNayaritPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:opacity-80 transition-opacity">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:opacity-80 transition-opacity">Locations</a>
            <span className="mx-2">›</span>
            <span>Riviera Nayarit, NA</span>
          </nav>
          
          <h1 className="font-serif text-5xl font-light mb-6 leading-tight" style={{fontFamily: 'Cormorant'}}>
            Other Medical Near Riviera Nayarit, NA
          </h1>
          
          <p className="text-xl mb-10 max-w-3xl opacity-95">
            Serving patients from Riviera Nayarit and surrounding NA communities. Expert psychiatric care is closer than you think.
          </p>
          
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule in Riviera Nayarit
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-serif text-4xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
            Serving the Riviera Nayarit Area
          </h2>
          
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Located conveniently for Riviera Nayarit residents, our practice provides comprehensive Other Medical services without the long commute to larger metropolitan areas. We understand the importance of accessible, quality psychiatric care, which is why patients from Riviera Nayarit and the surrounding NA region choose our practice for their mental health needs.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed mb-10">
              Whether you're coming from downtown Riviera Nayarit or the neighboring communities, our location offers easy access with ample parking and flexible scheduling options. For those who prefer to avoid travel altogether, we also offer secure telehealth appointments that bring expert care directly to your home.
            </p>
          </div>
          
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)]">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] text-lg">Serving Riviera Nayarit, NA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Services Available to Riviera Nayarit Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Comprehensive assessments to understand your mental health needs and develop personalized treatment plans tailored to Riviera Nayarit patients.
              </p>
              <a href="/services/psychiatric-evaluation" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Expert psychiatric medication oversight with regular monitoring and adjustments to ensure optimal outcomes for our Riviera Nayarit community.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Convenient virtual appointments for Riviera Nayarit residents who prefer to receive quality psychiatric care from the comfort of their own home.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto border border-[var(--color-border)] animate-fade-up">
          <h2 className="font-serif text-3xl font-light mb-6 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-[var(--color-ink)] leading-relaxed mb-6 text-center">
            For Riviera Nayarit residents who prefer virtual care or have difficulty traveling to our office, we offer comprehensive telehealth services. Connect with our experienced psychiatric providers from anywhere in NA through secure, HIPAA-compliant video appointments.
          </p>
          <p className="text-[var(--color-ink)] leading-relaxed text-center">
            Most insurance plans cover telehealth visits at the same rate as in-person appointments. Virtual care provides the same quality treatment with added convenience—no commute, no waiting room, and flexible scheduling that fits your life in Riviera Nayarit.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
                How far is your practice from Riviera Nayarit?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently located to serve Riviera Nayarit and the surrounding NA communities. Most patients find the drive straightforward and appreciate having access to specialized Other Medical care without traveling to larger cities. We offer flexible appointment times to accommodate your schedule.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
                What are the best directions from Riviera Nayarit?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Detailed directions will be provided when you schedule your appointment. Our staff is happy to help with navigation questions, and we're located in an easily accessible area with clear signage. GPS directions work reliably, and we'll ensure you have all the information you need for a stress-free visit.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
                Do you offer telehealth for Riviera Nayarit residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer secure telehealth appointments for patients throughout NA, including Riviera Nayarit. Telehealth is ideal for follow-up visits, medication management appointments, and ongoing care. Initial evaluations may be conducted virtually or in-person depending on your needs and preferences.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
                Is parking available for Riviera Nayarit patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide ample free parking for all our patients. Our facility is fully accessible with convenient ground-level access. We've designed our space to be welcoming and easy to navigate, ensuring a comfortable experience from the moment you arrive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-6" style={{fontFamily: 'Cormorant'}}>
            Get Expert Care from Riviera Nayarit
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Schedule your appointment today and experience compassionate, professional Other Medical care close to home.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>

    </main>
  )
}