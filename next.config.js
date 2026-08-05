/** @type {import("next").NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // Legacy vatule.com WordPress URLs → their new homes
      { source: "/rooms", destination: "/suites", permanent: true },
      { source: "/about-vatule", destination: "/about", permanent: true },
      { source: "/privacy-in-punta-mita", destination: "/location", permanent: true },
      { source: "/accommodations", destination: "/suites", permanent: true },
      { source: "/reservations", destination: "/contact", permanent: true },
      { source: "/locations.kml", destination: "/contact", permanent: true },

      // Retired autobuild scaffolding
      { source: "/services", destination: "/amenities", permanent: true },
      { source: "/services/:slug", destination: "/amenities", permanent: true },
      { source: "/conditions", destination: "/amenities", permanent: true },
      { source: "/conditions/:slug", destination: "/amenities", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug", destination: "/", permanent: true },
      { source: "/compare/:slug", destination: "/", permanent: true },
      { source: "/locations/:slug", destination: "/location", permanent: true },
      { source: "/team", destination: "/about", permanent: true },
      { source: "/reviews", destination: "/", permanent: true },
      { source: "/faq", destination: "/contact", permanent: true },
      { source: "/insurance", destination: "/rates", permanent: true },
      { source: "/new-patients", destination: "/", permanent: true },
      { source: "/telehealth", destination: "/", permanent: true },
      { source: "/sms-terms", destination: "/terms", permanent: true },
    ];
  },
};
module.exports = nextConfig;
