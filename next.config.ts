// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // enable modern formats
  },
};

export default nextConfig;
