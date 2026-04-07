import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Disable disk cache to prevent filling up drive during dev
    config.cache = false
    return config
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'www.pexels.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
}

export default nextConfig
