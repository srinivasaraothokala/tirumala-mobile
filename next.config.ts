import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // ✅ Serve modern formats — AVIF is 50% smaller than WebP, 70% smaller than PNG
    formats: ['image/avif', 'image/webp'],

    // ✅ Cache optimized images for 30 days on Vercel CDN
    minimumCacheTTL: 60 * 60 * 24 * 30,

    // ✅ Only generate sizes you actually use
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [48, 64, 96, 120, 150, 256],
  },

  // ✅ Strict mode for better warnings
  reactStrictMode: true,

  // ✅ Compress all HTML, CSS, JS responses
  compress: true,
};

export default nextConfig;