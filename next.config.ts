import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles routing natively — no static export needed
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
