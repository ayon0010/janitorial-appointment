/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io', 'i.ibb.co.com', 'i.ibb.co'], // Allow images from Sanity's CDN
  },
};
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
