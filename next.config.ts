/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  typescript: {
    // !! WARN !!
    // This will disable TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // This will disable ESLint errors during build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig