/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'maps.googleapis.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  // terzihizmeti.com: kisa adresler + geri kalan her sey .com.tr'ye gider
  async redirects() {
    const comHost = [{ type: 'host', value: '(www\\.)?terzihizmeti\\.com' }];
    const kisa = (source, destination) => ({ source, has: comHost, destination, permanent: false });
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.terzihizmeti.com.tr' }],
        destination: 'https://terzihizmeti.com.tr/:path*',
        permanent: true,
      },
      kisa('/en', 'https://terzihizmeti.com.tr/en/linen-cotton-tailoring'),
      kisa('/de', 'https://terzihizmeti.com.tr/de/leinen-baumwolle-schneiderei'),
      kisa('/ru', 'https://terzihizmeti.com.tr/ru/poshiv-lyon-hlopok'),
      kisa('/en/fix', 'https://terzihizmeti.com.tr/en/tourist-clothing-alterations-antalya'),
      kisa('/de/fix', 'https://terzihizmeti.com.tr/de/kleidung-aendern-urlaub-antalya'),
      kisa('/ru/fix', 'https://terzihizmeti.com.tr/ru/podgonka-odezhdy-turistam-antalya'),
      { source: '/:path*', has: comHost, destination: 'https://terzihizmeti.com.tr/:path*', permanent: true },
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
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
