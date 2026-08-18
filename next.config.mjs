/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'maps.googleapis.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  // ── DÜZELTME: non-www → www 301 redirect ────────────────────────────────
  // Yandex Webmaster doğrulaması www.terzihizmeti.com.tr üzerinden yapıldı,
  // bu nedenle www canonical olmalı. Bu redirect olmadan Google/Yandex aynı
  // içeriği iki farklı URL'de (duplicate content) görebilir ve link gücü
  // ikiye bölünür.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'terzihizmeti.com.tr' }],
        destination: 'https://www.terzihizmeti.com.tr/:path*',
        permanent: true,
      },
    ];
  },
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
