/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // basePath: '/i-music',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/trackPages',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
