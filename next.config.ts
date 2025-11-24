import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Add the domain for your image source here (e.g., Unsplash, Pexels, etc.)
    // For demonstration, let's assume we are using a placeholder service.
    // **NOTE: You must replace this with the actual domain of your image source.**
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Example source
      },
      {
        protocol: 'https',
        hostname: 'oakstreetevents.com', // Added domain for the new image source
      },{
        protocol: 'https',
        hostname: 'www.redveds.com', // Added domain for the new image source
      },{
        protocol: 'https',
        hostname: 'media.istockphoto.com', // Added domain for the new image source
      }
    ],
  },
};

export default nextConfig;
