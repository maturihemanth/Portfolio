import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export required for GitHub Pages
  output: "export",

  // Must match your repo name: github.com/maturihemanth/Portfolio
  basePath: "/Portfolio",

  // Image optimisation doesn't work in static export
  images: { unoptimized: true },

  // Trailing slashes so all routes resolve correctly on Pages
  trailingSlash: true,
};

export default nextConfig;
