/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**'
      }
    ]
  },
  compiler: {
    reactRemoveProperties: { properties: ['^data-testid$'] }
  },
  env: {
    STRAPI_URL: 'http://127.0.0.1:1337'
  }
};

module.exports = nextConfig;
