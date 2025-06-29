/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      // add other domains as needed
    ],
    remotePatterns: [
      'res.cloudinary.com',
      // add other domains as needed
    ],
  },
}

export default nextConfig