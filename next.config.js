/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Configure redirects if needed
  async redirects() {
    return [];
  },
  // Configure headers if needed
  async headers() {
    return [];
  },
};

module.exports = nextConfig;