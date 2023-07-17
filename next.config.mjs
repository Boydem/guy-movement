/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'test'
  },
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
  }
  
  export default nextConfig