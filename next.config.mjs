/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'iccdsincelejo.com.co' },
      { protocol: 'https', hostname: 'iccdsincelejo.co' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
    ],
  },
}

export default nextConfig
