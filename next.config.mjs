/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io', 'i.ibb.co.com', 'i.ibb.co', 'img.youtube.com',],
    formats: ['image/avif', 'image/webp'], // Allow images from Sanity's CDN
  },
  // images: {
  //   deviceSizes: [320, 640, 768, 1024, 1280, 1600, 1920],
  //   // No need for imageSizes since you're not using fixed-width images
  //   // // ← Add external image domains here if needed
  // },
  trailingSlash: true,
};
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
