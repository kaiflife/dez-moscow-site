import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/dez-moscow-site",
  assetPrefix: "/dez-moscow-site/",
};

export default nextConfig;
