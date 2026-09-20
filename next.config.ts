import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/dez-moscow-site" : "",
  assetPrefix: isProd ? "/dez-moscow-site/" : "",
};

export default nextConfig;
