/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // 匹配所有 https 主機
        pathname: '/**', // 匹配所有路徑
      },
    ],
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com']
  },
};

module.exports = nextConfig;
