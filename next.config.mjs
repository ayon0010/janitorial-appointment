/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io', 'i.ibb.co.com', 'i.ibb.co'], // Allow images from Sanity's CDN
  },
};

export default nextConfig;
