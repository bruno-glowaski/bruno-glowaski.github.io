import withBundlerAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: { webpackMemoryOptimizations: true },
};

export default withBundlerAnalyzer({
  enabled: process.env.ANALYZE == "true",
  openAnalyzer: true,
})(nextConfig);
