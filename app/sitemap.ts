import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vatule.com'
  const now = new Date()

  const corePages = [
    { url: base, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/conditions`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/team`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/insurance`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/new-patients`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/telehealth`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/reviews`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/sms-terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ].map(p => ({ ...p, lastModified: now }))

  const servicePages = [
    { url: `${base}/services/luxury-accommodations`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/outdoor-entertainment-spaces`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/full-service-staff`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/resort-access-amenities`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/multi-family-gatherings`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/corporate-retreats`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const conditionPages = [
  ]

  const blogPages = [
    { url: `${base}/blog/the-ultimate-guide-to-planning-a-multi-family-vacation-in-pu`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/why-punta-mita-is-mexico-s-premier-luxury-destination`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/5-reasons-to-choose-a-private-villa-over-a-resort-hotel`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/maximizing-your-punta-mita-golf-experience-bahia-vs-pacifico`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-to-expect-when-you-stay-at-an-ultra-luxury-villa`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/punta-mita-beach-clubs-guide-st-regis-residents-club-kupuri`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/best-time-to-visit-punta-mita-a-season-by-season-guide`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/planning-a-corporate-retreat-in-punta-mita-what-you-need-to-`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-magic-of-la-punta-why-this-location-is-special`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/luxury-villa-staffing-understanding-what-s-included-in-your-`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/day-trips-from-punta-mita-exploring-the-riviera-nayarit`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/creating-unforgettable-multi-generational-travel-experiences`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-luxury-villa-rental-costs-and-fees-in-mexico`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/outdoor-entertainment-spaces-designing-the-perfect-villa-exp`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/golf-cart-living-navigating-punta-mita-resort-like-a-local`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/why-pacific-sunsets-in-punta-mita-are-truly-unmatched`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/luxury-villa-amenities-that-actually-matter-beyond-the-marke`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-art-of-slow-travel-embracing-villa-life-in-punta-mita`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/water-sports-and-ocean-activities-in-punta-mita`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/hosting-milestone-celebrations-at-a-private-villa`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-sets-gated-resort-communities-apart-in-mexico`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/concierge-services-in-luxury-rentals-how-to-make-the-most-of`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-evolution-of-punta-mita-from-fishing-village-to-world-cl`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/infinity-pools-and-ocean-views-the-psychology-of-luxury-desi`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/private-chef-experiences-elevating-your-villa-stay`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/group-travel-logistics-coordinating-arrivals-and-departures`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-benefits-of-extended-stays-at-luxury-villas`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/wellness-and-relaxation-activities-in-punta-mita`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/sustainable-luxury-environmental-responsibility-in-high-end-`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/photography-tips-capturing-your-punta-mita-villa-experience`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-mexican-hospitality-culture-in-luxury-service`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/weather-patterns-and-microclimate-punta-mita-s-year-round-ap`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-hidden-costs-of-all-inclusive-resorts-vs-private-villa-r`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/architectural-excellence-what-makes-a-villa-truly-exceptiona`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/creating-technology-free-zones-for-digital-detox-vacations`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-psychology-of-vacation-why-location-and-setting-matter`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/comparing-mexico-s-luxury-destinations-why-punta-mita-stands`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/investment-perspective-understanding-luxury-villa-rental-mar`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-social-dynamics-of-group-vacations-in-shared-spaces`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/future-of-luxury-travel-trends-shaping-villa-experiences`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const comparePages = [
    { url: `${base}/compare/private-villa-vs-all-inclusive-resort`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/punta-mita-vs-cabo`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/villa-vs-hotel-rooms`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/la-punta-vs-other-neighborhoods`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/winter-vs-summer-punta-mita`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const locationPages = [
    { url: `${base}/locations/punta-mita-nayarit`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/puerto-vallarta-jalisco`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/sayulita-nayarit`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/riviera-nayarit`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const priorRecoveryPages = [
    { url: `${base}/`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/rooms`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/rates`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/privacy-in-punta-mita`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/amenities`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/about-vatule`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/contact`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/gallery`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations.kml`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  return [...corePages, ...servicePages, ...conditionPages, ...blogPages, ...comparePages, ...locationPages, ...priorRecoveryPages]
}