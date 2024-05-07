/** @type {import('next').NextConfig} */
const nextConfig = {
  // use source.unspash.com for images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
