/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: `/repo/:repoId*/repoBattle/:oppoId*`,
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },

  experimental: {
    appDir: true,
    reactRoot: true,
    features: {
      reactRefresh: true,
    },
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
