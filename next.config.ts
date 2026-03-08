import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export optimization
  // Images: allow external images if needed in future
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
