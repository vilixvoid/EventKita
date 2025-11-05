import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "dvgddkosknh6r.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "emak2blogger.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
