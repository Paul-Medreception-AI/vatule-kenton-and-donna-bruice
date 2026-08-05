import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://vatule.com'),
  title: 'Vatule - Kenton and Donna Bruice | Ultra-Luxury Oceanfront Estate in Punta Mita Resort',
  description: 'The only estate on La Punta with visible sunsets every evening of the year. An ultra-luxury oceanfront villa accommodating up to 26 guests with five king suites, a youth bunkhouse, and over 10,000 square feet of covered living space.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'Vatule - Kenton and Donna Bruice | Ultra-Luxury Oceanfront Estate in Punta Mita Resort',
    description: 'The only estate on La Punta with visible sunsets every evening of the year. An ultra-luxury oceanfront villa accommodating up to 26 guests with five king suites, a youth bunkhouse, and over 10,000 square feet of covered living space.',
    url: 'https://vatule.com',
    siteName: 'Vatule - Kenton and Donna Bruice',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vatule - Kenton and Donna Bruice'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)] antialiased">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/">
              <img src="/logo.png" alt="Vatule - Kenton and Donna Bruice" className="h-11 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/accommodations" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Accommodations</a>
              <a href="/amenities" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Amenities</a>
              <a href="/location" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Location</a>
              <a href="/gallery" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Gallery</a>
              <a href="/reservations" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Reservations</a>
              <a href="/contact" className="ml-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">Book Your Stay</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <img src="/logo.png" alt="Vatule - Kenton and Donna Bruice" className="h-11 w-auto mb-4 brightness-0 invert" />
                <p className="text-[var(--color-dark)] text-sm leading-relaxed">Your private oceanfront sanctuary in Punta Mita awaits.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-cormorant)]">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="/accommodations" className="text-[var(--color-dark)] hover:text-white transition-colors text-sm">Accommodations</a></li>
                  <li><a href="/amenities" className="text-[var(--color-dark)] hover:text-white transition-colors text-sm">Amenities</a></li>
                  <li><a href="/location" className="text-[var(--color-dark)] hover:text-white transition-colors text-sm">Location</a></li>
                  <li><a href="/gallery" className="text-[var(--color-dark)] hover:text-white transition-colors text-sm">Gallery</a></li>
                  <li><a href="/reservations" className="text-[var(--color-dark)] hover:text-white transition-colors text-sm">Reservations</a></li>
                  <li><a href="/contact" className="text-[var(--color-dark)] hover:text-white transition-colors text-sm">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-cormorant)]">Contact</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="tel:(970) 456-3115" className="text-[var(--color-dark)] hover:text-white transition-colors text-sm flex items-center gap-2">
                      <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      (970) 456-3115
                    </a>
                  </li>
                  <li>
                    <a href="mailto:vatulepm@gmail.com" className="text-[var(--color-dark)] hover:text-white transition-colors text-sm flex items-center gap-2">
                      <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      vatulepm@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[var(--color-dark)] pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-dark)]">
                <p>&copy; {new Date().getFullYear()} Vatule - Kenton and Donna Bruice. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="/sms-terms" className="hover:text-white transition-colors">SMS Terms</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}