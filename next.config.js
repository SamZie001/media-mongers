// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  serverRuntimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  },
  publicRuntimeConfig: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
