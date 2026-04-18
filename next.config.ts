import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // tells Turbopack your project root is here, not C:\Users\styli
  },
};

export default nextConfig; 