import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds for production deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds for production deployment
    ignoreBuildErrors: true,
  },
  images: {
    // Allow external images for better performance
    domains: ['localhost'],
    unoptimized: true,
  },
};

export default nextConfig;
