/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["i.gyazo.com", "firebasestorage.googleapis.com"],
  },
  optimizeFonts: true,
};
