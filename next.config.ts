import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/thesis',
        destination: 'https://publish.obsidian.md/des-mcdonnell/Cyberpsychology/Thesis/',
      }
    ]
  },
};

export default nextConfig;
