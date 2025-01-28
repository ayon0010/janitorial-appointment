/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: true, // Enables font optimization
  compress: true, // Enables built-in compression for Next.js
  images: {
    domains: ['cdn.sanity.io', 'i.ibb.co.com', 'i.ibb.co'], // Allow images from these domains
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Encoding',
          value: 'gzip', // Enable gzip compression
        },
      ],
    },
  ],
  output: 'standalone', // Useful for deployment in serverless environments
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
