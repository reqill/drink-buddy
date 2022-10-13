/** @type {import('next').NextConfig} */
const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({
  path: `${process.cwd()}/config/env/.env.${process.env.APP_ENV}`,
  public: [
    // TODO: add envs used by user
  ],
  server: [
    // TODO: add envs used on server
  ],
});

module.exports = withConfig({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      // TODO: add other domains when CD is setup
      'localhost',
    ],
  },
});

const withUI = require('next-transpile-modules')(['@drink-buddy/base-ui-components']);
module.exports = withUI();
