/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx'],
  rewrites: async function () {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
}

module.exports = nextConfig
