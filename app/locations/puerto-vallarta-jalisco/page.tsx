import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Other Medical Near Puerto Vallarta, JA | Vatule - Kenton and Donna Bruice',
  description: 'Serving patients from Puerto Vallarta and surrounding JA communities. Expert psychiatric care is closer than you think.',
  openGraph: {
    title: 'Other Medical Near Puerto Vallarta, JA | Vatule - Kenton and Donna Bruice',
    description: 'Serving patients from Puerto Vallarta and surrounding JA communities. Expert psychiatric care is closer than you think.',
    url: 'https://vatule.com/locations/puerto-vallarta-jalisco',
    siteName: 'Vatule - Kenton and Donna Bruice',
    locale: 'en_US',
    type: 'website',
  }
}

export default function PuertoVallartaPage() {
  return (
    <main className="min-h-screen">
      
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-8 opacity-90">
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:opacity-70 transition-opacity">Locations</Link>
            <span>›</span>
            <span>Puerto Vallarta, JA</span>
          </nav>
          
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near Puerto Vallarta, JA
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl opacity-95 leading-relaxed">
            Serving patients from Puerto Vallarta and surrounding JA communities. Expert psychiatric care is closer than you think.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-ink)] px-8 py-4 rounded-full font-medium transition-colors"
          >
            Schedule in Puerto Vallarta
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center">
            Serving the Puerto Vallarta Area
          </h2>
          
          <div className="space-y-6 text-[var(--color-muted)] text-lg leading-relaxed mb-12">
            <p>
              Located conveniently for Puerto Vallarta residents, our practice serves patients throughout Jalisco and the surrounding communities. Whether you're commuting from downtown Puerto Vallarta, the Marina Vallarta district, or nearby areas like Bucerías and Sayulita, quality psychiatric care is within easy reach. Many of our Puerto Vallarta patients find the drive manageable and appreciate the personalized attention and expert treatment they receive.
            </p>
            
            <p>
              Patients from Puerto Vallarta choose our practice because we combine clinical excellence with a deep understanding of the unique needs of our community. We accept most major insurance plans and also offer secure telehealth appointments for those who prefer virtual visits or have difficulty traveling. Our goal is to make expert Other Medical care accessible and convenient for everyone in the Puerto Vallarta area.
            </p>
          </div>
          
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)] animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Serving Puerto Vallarta, JA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Services Available to Puerto Vallarta Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.402 1.402m-14.8-6.269l-1.402 1.402c-1.232 1.232-1.232 3.233 0 4.465l1.402 1.402M5 14.5V12a7.5 7.5 0 0115 0v2.5" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--color-ink)] mb-4">
                Comprehensive Evaluations
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough psychiatric assessments tailored to Puerto Vallarta patients, including diagnostic clarification and treatment planning.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychopharmacology services with ongoing monitoring and adjustment to ensure optimal outcomes for our patients.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual appointments for Puerto Vallarta residents who prefer remote care or have scheduling constraints.
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
          <div className="bg-[var(--color-light)] rounded-2xl p-12 border border-[var(--color-border)] animate-fade-up">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6 text-center">
              Can't Make the Drive? We Offer Telehealth
            </h2>
            
            <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6">
              We understand that travel from Puerto Vallarta isn't always convenient. That's why we offer secure, HIPAA-compliant telehealth appointments for established and new patients throughout Jalisco. Our virtual visits provide the same expert care you'd receive in person, from the comfort of your home or office.
            </p>
            
            <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
              Most major insurance plans cover telehealth services, and our team will verify your benefits before your first appointment. Whether you're managing a busy schedule, facing transportation challenges, or simply prefer the convenience of virtual care, telehealth makes it easier than ever for Puerto Vallarta residents to access quality psychiatric treatment.
            </p>
            
            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-ink)] px-8 py-4 rounded-full font-medium transition-colors"
              >
                Ask About Telehealth
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--color-ink)] mb-4">
                How far is your practice from Puerto Vallarta?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice serves patients throughout the Puerto Vallarta region and surrounding Jalisco communities. Many of our Puerto Vallarta patients find the commute convenient and manageable, especially for the specialized psychiatric care we provide. For those who prefer not to travel, we also offer telehealth appointments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--color-ink)] mb-4">
                What are the best directions from Puerto Vallarta?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Detailed directions and parking information will be provided when you schedule your appointment. Our location is easily accessible from major routes serving Puerto Vallarta and the surrounding area. If you have any questions about getting to our office, our friendly staff is happy to help you plan your visit.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Puerto Vallarta patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer secure telehealth appointments for both new and existing patients from Puerto Vallarta. Our virtual visits are conducted through a HIPAA-compliant platform and are covered by most insurance plans. Telehealth is an excellent option if you have a busy schedule, transportation challenges, or simply prefer the convenience of meeting from home.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--color-ink)] mb-4">
                Is parking available for patients coming from Puerto Vallarta?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide convenient parking for all our patients. Our facility is designed with accessibility in mind, featuring ample parking close to the entrance and accommodations for patients with mobility concerns. Specific parking instructions will be included in your appointment confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Puerto Vallarta
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Quality psychiatric care is closer than you think. Schedule your appointment today.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-ink)] px-10 py-5 rounded-full font-medium text-lg transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </main>
  )
}