/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  // reactStrictMode: true,

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "weco",
        mongodb_password: "AHw2QIUN0ll7WDzQ",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "weco",
      mongodb_password: "AHw2QIUN0ll7WDzQ",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

module.exports = nextConfig;
