/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['clsx']
  }
}

module.exports = nextConfig
