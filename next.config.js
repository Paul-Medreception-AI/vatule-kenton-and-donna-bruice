/** @type {import("next").NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: '/rooms', destination: '/', permanent: true },
      { source: '/rates', destination: '/', permanent: true },
      { source: '/privacy-in-punta-mita', destination: '/privacy', permanent: true },
      { source: '/amenities', destination: '/', permanent: true },
      { source: '/about-vatule', destination: '/about', permanent: true },
      { source: '/gallery', destination: '/', permanent: true },
      { source: '/locations.kml', destination: '/contact', permanent: true },
    ];
  },
};
module.exports = nextConfig;