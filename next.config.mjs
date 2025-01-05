/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
  },
  experimental: {
    reactMode: 'concurrent', // Optional: Enables concurrent mode (if necessary)
  },
  webpack(config) {
    // You can further customize webpack if required, but avoid handling SSR-specific issues through Webpack
    return config;
  },
  // Enabling Client-Side Rendering for some components (if needed)
  reactStrictMode: true, // Enables React Strict Mode
  poweredByHeader: false, // Disable Next.js header if desired for security
};

export default nextConfig;
