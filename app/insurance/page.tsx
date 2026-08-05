import Link from 'next/link'

export default function InsurancePage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light mb-6">
            Insurance & Billing
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transparent pricing and billing information
          </p>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">
            Accepted Insurance Plans
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Aetna
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              BlueCross BlueShield
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Cigna
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              United Healthcare
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Humana
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Medicare
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Medicaid
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Tricare
            </div>
          </div>
          <p className="text-center mt-8 text-[var(--color-muted)]">
            Don't see your insurance provider? Contact us to verify coverage and discuss your options.
          </p>
        </div>
      </section>

      {/* Billing Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">
            How Billing Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Step 1 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                Verify Coverage
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Before your appointment, we verify your insurance benefits and confirm your coverage, co-pay amounts, and deductible status.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                Service Provided
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                You receive the care you need. At this time, you may be responsible for your co-payment or co-insurance amount based on your plan.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                Claim Submitted
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We submit a claim to your insurance company with detailed documentation. They review and process the claim according to your benefits.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                You Pay Remainder
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                After insurance processes your claim, you receive an Explanation of Benefits (EOB) and a bill for any remaining balance not covered by insurance.
              </p>
            </div>

          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
              Understanding Your Costs
            </h3>
            <div className="space-y-4 text-[var(--color-muted)]">
              <p>
                <strong className="text-[var(--color-ink)]">Co-payment:</strong> A fixed amount you pay for covered services, usually due at the time of service.
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Deductible:</strong> The amount you must pay out-of-pocket before your insurance begins to pay for covered services.
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Co-insurance:</strong> Your share of costs for covered services, calculated as a percentage of the allowed amount.
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Explanation of Benefits (EOB):</strong> A statement from your insurance company explaining what costs were covered and what you owe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Section */}
      <section className="py-24 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up border border-[var(--color-border)]">
          <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold mb-6 text-[var(--color-ink)]">
            Self-Pay Options
          </h3>
          <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
            <p>
              We understand that not everyone has insurance coverage. We offer flexible payment options for self-pay patients to ensure access to quality care.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Sliding Scale Fees</h4>
                <p>
                  Our sliding scale program adjusts fees based on your income and family size, ensuring care remains affordable for everyone in our community.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Payment Plans</h4>
                <p>
                  We offer flexible payment plans that allow you to spread costs over time with manageable monthly installments, no credit check required.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Good Faith Estimate</h4>
                <p>
                  Under the No Surprises Act, uninsured and self-pay patients have the right to receive a Good Faith Estimate of expected charges before receiving services. We provide transparent cost information upfront so you can make informed decisions about your care.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
              <p className="text-sm">
                <strong className="text-[var(--color-ink)]">Your Rights Under the No Surprises Act:</strong> You have the right to receive a Good Faith Estimate explaining how much your medical care will cost. If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">
            Billing Questions
          </h2>
          <div className="space-y-4">
            
            <details className="bg-white rounded-xl border border-[var(--color-border)] animate-fade-up group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors list-none flex justify-between items-center">
                <span>When is payment due for services?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Co-payments are due at the time of service. For patients with deductibles or co-insurance, we will bill you after your insurance processes the claim and issues an Explanation of Benefits (EOB). Full payment is expected within 30 days of receiving your statement.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[var(--color-border)] animate-fade-up group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors list-none flex justify-between items-center">
                <span>What if my insurance denies the claim?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                If your insurance denies a claim, we will work with you to understand the reason and file an appeal if appropriate. We'll notify you of any denied claims and discuss your options, including payment plans if you become responsible for the full cost.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[var(--color-border)] animate-fade-up group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors list-none flex justify-between items-center">
                <span>Do you accept credit cards or offer financing?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, we accept all major credit cards, debit cards, cash, and checks. For larger balances, we offer in-house payment plans with flexible terms. We also work with third-party healthcare financing companies that offer longer-term payment options with competitive rates.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[var(--color-border)] animate-fade-up group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors list-none flex justify-between items-center">
                <span>How do I request an itemized bill?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                You can request an itemized bill at any time by contacting our billing department. We'll provide a detailed breakdown of all charges, procedure codes, and dates of service. This can be helpful for insurance appeals, health savings account reimbursement, or personal records.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[var(--color-border)] animate-fade-up group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors list-none flex justify-between items-center">
                <span>What happens if I can't pay my bill?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                We understand that unexpected medical costs can create financial hardship. Please contact our billing department as soon as possible if you're having difficulty paying. We offer payment plans, sliding scale adjustments, and can connect you with financial assistance programs. We want to work with you to find a solution that keeps your account in good standing.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-ink)] to-[var(--color-dark)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-6">
            Questions About Billing or Insurance?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Our billing team is here to help you understand your coverage and payment options.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
          >
            Contact Billing Department
          </Link>
        </div>
      </section>

    </main>
  )
}