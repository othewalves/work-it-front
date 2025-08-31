import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "5000",
      //   pathname: "/files/**",
      // },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "/**", // permite todas as imagens do Cloudinary
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
