/** @type {import('next').NextConfig} */
// CSP önce yalnızca raporlama modunda (engellemez); tarayıcı konsolunda ihlaller görüldükten sonra zorunlu hale getirilebilir.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.pexels.com https://maps.googleapis.com https://lh3.googleusercontent.com",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me",
].join('; ');

const nextConfig = {
  poweredByHeader: false,
  // Birden çok kök düzen (dil başına <html lang>) için gerekli 404 mekanizması
  experimental: { globalNotFound: true },
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
    const wa = (m) => `https://wa.me/905318986418?text=${encodeURIComponent(m)}`;
    return [
      // Manavgat (Side dahil) hizmet bölgesidir: eski /manavgat adresleri Side bölge sayfalarına gider
      { source: '/antalya-terzi/manavgat', destination: '/otele-gelen-terzi-antalya/side', permanent: true },
      { source: '/en/tailor-antalya/manavgat', destination: '/en/tailor-antalya/side', permanent: true },
      { source: '/ru/portnoy-antalya/manavgat', destination: '/ru/portnoy-antalya/side', permanent: true },
      { source: '/de/schneider-antalya/manavgat', destination: '/de/schneider-antalya/side', permanent: true },
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
      // WhatsApp kisa adresleri (Google profili, Instagram, QR icin) - hazir mesajla acilir
      kisa('/wa', wa('Merhaba, terzi hizmeti hakkında bilgi almak istiyorum.')),
      kisa('/wa/en', wa('Hello, I would like information about your tailoring service in Antalya.')),
      kisa('/wa/de', wa('Hallo, ich möchte Informationen zu Ihrem Schneiderservice in Antalya.')),
      kisa('/wa/ru', wa('Здравствуйте, хочу узнать про ваши услуги портного в Анталье.')),
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
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
          { key: 'Content-Security-Policy-Report-Only', value: csp },
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
