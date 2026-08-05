import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light mb-6">
            Guest Reviews
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            We invite our guests to share their Vatulé experience with future visitors.
          </p>
        </div>
      </section>

      {/* Invite Section */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-6 font-light">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-10 leading-relaxed">
            Your experience at Vatulé matters to us. If you've recently stayed with us, we would be honored if you'd share your thoughts. Your feedback helps us continue to deliver exceptional oceanfront hospitality and helps future guests understand what makes Vatulé special.
          </p>
          
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
          
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-ink)] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-6">
            Ready to Create Your Own Vatulé Story?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Experience the unparalleled Pacific luxury that our guests treasure. Book your stay at Vatulé today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg w-full sm:w-auto text-center"
            >
              Book Your Stay
            </Link>
            <Link 
              href="/gallery"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[var(--color-ink)] text-white px-8 py-4 text-lg font-medium transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}