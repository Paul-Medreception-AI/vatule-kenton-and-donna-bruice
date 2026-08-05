import Link from 'next/link'

export default function TelehealthPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Telehealth Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Expert psychiatric care from the comfort of your home
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-16 text-[var(--color-ink)]">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                01. Schedule
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Contact us to book your virtual appointment. Choose a time that works best for your schedule with flexible availability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center animate-fade-up transition-all duration-300 delay-75">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                02. Connect
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join your secure video session from any device. Our HIPAA-compliant platform ensures your privacy and confidentiality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center animate-fade-up transition-all duration-300 delay-150">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                03. Get Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive personalized care and treatment recommendations. Follow-up appointments and prescriptions managed seamlessly online.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-10 animate-fade-up">
              <h3 className="font-cormorant text-3xl font-light mb-6 text-[var(--color-ink)]">
                Available via Telehealth
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Initial psychiatric evaluations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Medication management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Follow-up consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Treatment planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Prescription refills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Crisis intervention support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 animate-fade-up transition-all duration-300 delay-75">
              <h3 className="font-cormorant text-3xl font-light mb-6 text-[var(--color-ink)]">
                Requires In-Person Visit
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Physical examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Laboratory tests or diagnostics</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Certain therapeutic procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Emergency psychiatric situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Acute medical assessments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-16 text-[var(--color-ink)]">
            Benefits of Telehealth
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                No Commute
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Save time and eliminate travel stress. Attend appointments from home, work, or anywhere with internet access.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 delay-75">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                Same-Day Availability
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Access care when you need it most. Flexible scheduling often allows for same-day or next-day appointments.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 delay-150">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                Complete Privacy
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive care in the comfort of your own private space. No waiting rooms, no concerns about being seen at a clinic.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 delay-[225ms]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                Any Device
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Connect from your smartphone, tablet, or computer. Our platform works seamlessly across all devices and browsers.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 delay-300">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                Insurance Accepted
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Most insurance plans cover telehealth visits the same as in-person appointments. We accept major providers.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up transition-all duration-300 delay-[375ms]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                HIPAA-Compliant
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your privacy is protected with enterprise-grade encryption and secure, HIPAA-compliant video technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-center mb-12 text-[var(--color-ink)]">
              What You Need for Your Visit
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)] flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Device Requirements
                </h3>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Smartphone, tablet, laptop, or desktop computer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Working camera and microphone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Updated web browser (Chrome, Safari, Firefox, or Edge)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)] flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  Internet Connection
                </h3>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Minimum 3 Mbps download speed recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Stable WiFi or wired connection preferred</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Close unnecessary applications to optimize bandwidth</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)] flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  Private Space
                </h3>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Choose a quiet, private location where you can speak freely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Good lighting so your provider can see you clearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Minimize background noise and distractions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-muted)]">Consider using headphones for better audio quality</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[var(--color-border)] pt-8">
                <h3 className="font-cormorant text-2xl font-light mb-4 text-[var(--color-ink)]">
                  Supported Platforms
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Our telehealth platform works on all major operating systems and devices:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Windows 10+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">macOS 10.14+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">iOS 12+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Android 8+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-light">
            Schedule your telehealth appointment today and experience convenient, professional care from home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-10 py-4 rounded-full text-lg font-light hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
          >
            Schedule Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}