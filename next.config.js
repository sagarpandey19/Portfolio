/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable server-side features
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Enable experimental server actions
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
