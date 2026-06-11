/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'iccdsincelejo.com.co' },
      { protocol: 'https', hostname: 'iccdsincelejo.co' },
    ],
  },
}

export default nextConfig
