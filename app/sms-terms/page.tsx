export default function SMSTermsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-bold mb-6">SMS Terms</h1>
          <p className="text-lg opacity-90">
            SMS Program Terms and Conditions
          </p>
        </div>
        
        <div className="bg-[var(--color-light)] border border-[var(--color-border)] rounded-2xl p-6 max-w-xl mx-auto mt-8 text-[var(--color-ink)]">
          <p className="font-medium mb-2">Text STOP to unsubscribe</p>
          <p className="font-medium mb-2">Text HELP for help</p>
          <p className="font-medium mb-2">Msg &amp; data rates may apply</p>
          <p className="font-medium">Frequency varies</p>
        </div>
      </section>

      <section className="bg-white max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Program Description</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Vatule - Kenton and Donna Bruice operates an SMS messaging program to communicate important updates, 
              appointment reminders, health information, and promotional content to subscribers who have explicitly 
              opted in to receive such messages.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Opt-In</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              By opting in to our SMS program, you expressly consent to receive automated text messages from 
              Vatule - Kenton and Donna Bruice at the mobile number provided. Opt-in methods include:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] leading-relaxed space-y-2 ml-4">
              <li>Completing an online form with SMS consent</li>
              <li>Texting a keyword to our designated short code or phone number</li>
              <li>Providing written consent at our location</li>
              <li>Verbal consent confirmed via SMS confirmation</li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              Consent is not a condition of purchase. Standard message and data rates may apply.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Message Frequency</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Message frequency varies based on your interaction with our services. You may receive up to 4 messages 
              per month. During periods of increased activity or urgent communications, message frequency may increase.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Message and Data Rates</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Standard message and data rates may apply for each message sent or received as determined by your 
              mobile carrier. Please contact your mobile carrier for details regarding your specific plan and any 
              applicable charges.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Opt-Out Instructions</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              You may opt out of receiving SMS messages at any time. To unsubscribe:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] leading-relaxed space-y-2 ml-4">
              <li>Reply STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to any message</li>
              <li>Contact us directly using the information provided below</li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              After opting out, you will receive one final confirmation message. You may continue to receive messages 
              briefly while your opt-out request is processed.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Help Information</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              For assistance with our SMS program, reply HELP to any message or contact us at:
            </p>
            <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl p-6">
              <p className="text-[var(--color-ink)] font-medium">Vatule - Kenton and Donna Bruice</p>
              <p className="text-[var(--color-muted)] mt-2">Website: vatule.com</p>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Supported Carriers</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our SMS program is supported by major carriers including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-4 text-center">
                <p className="text-[var(--color-ink)] font-medium">AT&amp;T</p>
              </div>
              <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-4 text-center">
                <p className="text-[var(--color-ink)] font-medium">Verizon</p>
              </div>
              <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-4 text-center">
                <p className="text-[var(--color-ink)] font-medium">T-Mobile</p>
              </div>
              <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-4 text-center">
                <p className="text-[var(--color-ink)] font-medium">Sprint</p>
              </div>
              <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-4 text-center">
                <p className="text-[var(--color-ink)] font-medium">Boost Mobile</p>
              </div>
              <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-4 text-center">
                <p className="text-[var(--color-ink)] font-medium">US Cellular</p>
              </div>
            </div>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4 text-sm">
              Carrier coverage not available in all areas. Delivery of messages is subject to carrier network availability.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Privacy Policy</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We respect your privacy. Your mobile phone number and any information you provide will be used in 
              accordance with our Privacy Policy. We do not sell, rent, or share your mobile number with third 
              parties for their marketing purposes without your explicit consent. For complete details, please 
              review our Privacy Policy on our website.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Terms Modifications</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We reserve the right to modify these SMS Terms at any time. Changes will be effective immediately 
              upon posting to our website. Your continued participation in the SMS program following any changes 
              constitutes acceptance of those changes.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-ink)] mb-4">Contact Information</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              If you have questions about our SMS program or these terms:
            </p>
            <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl p-6">
              <p className="text-[var(--color-ink)] font-bold text-lg mb-2">Vatule - Kenton and Donna Bruice</p>
              <p className="text-[var(--color-muted)]">Website: vatule.com</p>
              <p className="text-[var(--color-muted)] mt-4 text-sm">
                Reply HELP to any SMS message for immediate assistance
              </p>
            </div>
          </div>

          <div className="animate-fade-up border-t border-[var(--color-border)] pt-8">
            <p className="text-[var(--color-muted)] text-sm text-center">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}