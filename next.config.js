/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.pngwing.com'],
  },
  experimental: {
    appDir: true
  },
}

module.exports = nextConfig
