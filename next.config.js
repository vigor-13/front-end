/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  async redirects() {
    return [
      {
        source: '/auth/:type((?!register|login\\b)\\b\\w+)',
        destination: '/404',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
