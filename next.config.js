/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,

  },
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=31536000, stale-while-revalidate',
    },
  ],
  images: {
    domains: ["https://cdn.sanity.io/", "cdn.sanity.io"]
  },
  
}

module.exports = nextConfig;
