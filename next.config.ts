// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // enable modern formats
  },

  async redirects() {
    return [
      {
        // Non-www → www
        source: "/:path*",
        has: [{ type: "host", value: "krakow-kwiaciarnia.pl" }],
        destination: "https://www.krakow-kwiaciarnia.pl/:path*",
        permanent: true,
      },
      {
        // HTTP → HTTPS
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://www.krakow-kwiaciarnia.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
