/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
  },
};

export default nextConfig;
