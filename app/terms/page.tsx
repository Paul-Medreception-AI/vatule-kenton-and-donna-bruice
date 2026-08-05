import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Vatule - Kenton and Donna Bruice',
  description: 'Terms of Service for Vatule medical services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-lg opacity-90">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--color-muted)] text-lg leading-relaxed">
              Please read these Terms of Service carefully before using the Vatule website or services provided by Kenton and Donna Bruice.
            </p>

            <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">
              1. Acceptance of Terms
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              By accessing or using the Vatule website (vatule.com) and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">
              2. Description of Services
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Vatule provides medical services through Kenton and Donna Bruice. This website describes our services, provides information about our practice, and facilitates communication. The information on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              You should not rely on information on this website as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>

            <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">
              3. Not Emergency Care
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              This website and our services are not intended for emergency medical situations. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately. Do not use this website or contact our practice for emergency medical care.
            </p>

            <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">
              4. No Insurance Billing
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Vatule does not bill insurance companies directly. Services are provided on a fee-for-service basis. Payment is expected at the time of service. You are responsible for submitting claims to your insurance company for reimbursement if applicable. We will provide you with any necessary documentation to support your claim.
            </p>

            <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">
              5. HIPAA Compliance and Privacy
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Vatule is committed to protecting your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA). We maintain physical, electronic, and procedural safeguards to protect your personal health information.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your information. By using our services, you acknowledge that you have read and understood our Privacy Policy and HIPAA Notice of Privacy Practices.
            </p>

            <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">
              6. Limitation of Liability
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              To the fullest extent permitted by law, Vatule and its providers (Kenton and Donna Bruice) shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              The website and all information provided are on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the information provided.
            </p>

            <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">
              7. Governing Law
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the state in which Vatule operates, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our services shall be resolved in the appropriate courts of that jurisdiction.
            </p>

            <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">
              8. Changes to Terms
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website or services after any changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-bold">
              9. Contact Information
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mt-6">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Vatule - Kenton and Donna Bruice</p>
              <p className="text-[var(--color-muted)]">Website: vatule.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}