/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['http://192.168.0.100:3000', 'http://*.192.168.0.100:3000'],
};

export default nextConfig;
