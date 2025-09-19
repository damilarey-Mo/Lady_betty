import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Silence root inference warning when multiple lockfiles exist
  outputFileTracingRoot: '/Users/mac/Documents/GitHub/lady-betty',
  images: {
    // For fully static export, use unoptimized images to emit plain <img>
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
