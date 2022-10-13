/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = {
  reactStrictMode: true,
  images: {
      domains: ["images.ctfassets.net","flash-coffee.com"],
  },
};
