import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/wheekai-portfolio" : "",
  assetPrefix: isProd ? "/wheekai-portfolio/" : "",
};

export default nextConfig;
