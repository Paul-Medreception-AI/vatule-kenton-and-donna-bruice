import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-5xl mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Effective Date: January 2025</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--color-muted)] text-lg mb-8">
              At Vatule, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Who We Are</h2>
            <p className="text-[var(--color-muted)] mb-6">
              Vatule is operated by Kenton and Donna Bruice, providing medical services. Our website is located at vatule.com, and we can be reached through the contact information provided at the end of this policy.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Information We Collect</h2>
            <p className="text-[var(--color-muted)] mb-4">
              When you contact us through our website or express interest in our services, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-muted)] mb-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service interest or inquiry details</li>
            </ul>
            <p className="text-[var(--color-muted)] mb-6">
              <strong>Important:</strong> We do NOT collect Protected Health Information (PHI) through our website. Any PHI is handled exclusively through our secure patient portal in compliance with HIPAA regulations.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">SMS Messaging</h2>
            <p className="text-[var(--color-muted)] mb-4">
              By providing your phone number and opting in to receive text messages from Vatule, you consent to receive informational and appointment-related SMS messages. Please note:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-muted)] mb-6 space-y-2">
              <li>You can opt out at any time by texting <strong>STOP</strong> to unsubscribe</li>
              <li>Message and data rates may apply based on your carrier plan</li>
              <li>Message frequency varies based on your inquiries and appointments</li>
              <li>For complete SMS terms and conditions, please visit our <Link href="/sms-terms" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors underline">SMS Terms page</Link></li>
            </ul>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">How We Use Your Information</h2>
            <p className="text-[var(--color-muted)] mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-muted)] mb-6 space-y-2">
              <li>Respond to your inquiries and provide information about our services</li>
              <li>Schedule and confirm appointments</li>
              <li>Send service updates and important notifications</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Data Security</h2>
            <p className="text-[var(--color-muted)] mb-6">
              We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">HIPAA Notice</h2>
            <p className="text-[var(--color-muted)] mb-6">
              As a medical practice, we are subject to the Health Insurance Portability and Accountability Act (HIPAA). <strong>Protected Health Information (PHI) is only collected, stored, and transmitted through our secure, HIPAA-compliant patient portal.</strong> This website does not collect or transmit PHI. For information about how we handle your medical records and PHI, please request our Notice of Privacy Practices at your appointment or through our secure patient portal.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Third-Party Services</h2>
            <p className="text-[var(--color-muted)] mb-6">
              We may use third-party services to help us operate our website and communicate with you (such as email providers and SMS services). These third parties have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Cookies and Tracking</h2>
            <p className="text-[var(--color-muted)] mb-6">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Your Rights</h2>
            <p className="text-[var(--color-muted)] mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-muted)] mb-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Unsubscribe from SMS messages by texting STOP</li>
            </ul>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Changes to This Policy</h2>
            <p className="text-[var(--color-muted)] mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>

            <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Contact Us</h2>
            <p className="text-[var(--color-muted)] mb-4">
              If you have questions or concerns about this Privacy Policy or how we handle your information, please contact us:
            </p>
            <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mb-6">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Vatule - Kenton and Donna Bruice</p>
              <p className="text-[var(--color-muted)]">Website: vatule.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--color-ink)] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-accent)] transition-colors">
              Terms of Service
            </Link>
            <Link href="/sms-terms" className="hover:text-[var(--color-accent)] transition-colors">
              SMS Terms
            </Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            © {new Date().getFullYear()} Vatule - Kenton and Donna Bruice. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}