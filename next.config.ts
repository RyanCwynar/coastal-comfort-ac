import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/coastal-comfort-ac",
  assetPrefix: "/coastal-comfort-ac/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
