/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // 👈 activa el modo /app que vos estás usando
  },
};

module.exports = nextConfig;
