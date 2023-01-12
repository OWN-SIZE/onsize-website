/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['norefund-bucket.s3.ap-northeast-2.amazonaws.com'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
