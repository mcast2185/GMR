/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  projectId: String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID),
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["https://cdn.sanity.io/", "cdn.sanity.io"]
  },
};

module.exports = nextConfig;