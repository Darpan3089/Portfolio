import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Optimize images from external domains if needed
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Experimental: enable view transitions
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
