/** @type {import('next').NextConfig} */
const nextConfig = {
  // Harici görsel kaynaklarına izin ver (Maps, WhatsApp vb.)
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'maps.googleapis.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  // www → non-www yönlendirme (canonical için önemli)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.terzihizmeti.com.tr' }],
        destination: 'https://terzihizmeti.com.tr/:path*',
        permanent: true,
      },
    ];
  },
  // Güvenlik başlıkları
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
