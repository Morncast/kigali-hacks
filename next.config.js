/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['morncast.live'],
  },
}

module.exports = nextConfig
