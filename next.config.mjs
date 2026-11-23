/** @type {import('next').NextConfig} */
// CSP önce yalnızca raporlama modunda (engellemez); tarayıcı konsolunda ihlaller görüldükten sonra zorunlu hale getirilebilir.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://maps.googleapis.com https://lh3.googleusercontent.com",
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
      // Görseller anahtar kelimeli adlarla yeniden adlandırıldı (23 Kasım 2026): eski adresler 301
      ...Object.entries({"keten-kadin-evde": "antalya-terzi-keten-gomlek-pantolon-ozel-dikim", "keten-blazer-atolye": "antalya-terzi-kadin-keten-takim-dikim", "keten-erkek-gomlek": "antalya-terzi-erkek-keten-gomlek-dikim", "keten-pantolon-katli": "antalya-terzi-keten-pantolon-paca-kisaltma", "erkek-gomlek-atolye": "antalya-terzi-erkek-gomlek-pantolon-tadilat", "kadin-trenckot-atolye": "antalya-terzi-kadin-trenckot-tadilat", "erkek-palto-atolye": "antalya-terzi-erkek-palto-tadilati", "sef-mutfak-uniforma": "antalya-terzi-asci-uniformasi-dikim", "atolye-kesim-masasi": "antalya-terzi-dikis-atolyesi-kalip-kesim", "abiye-elbise-atolye": "antalya-terzi-abiye-elbise-dikim-tadilat", "abiye-askida": "antalya-terzi-abiye-tamiri-tadilati", "erkek-takim-olcu": "antalya-terzi-takim-elbise-olcu-prova", "manken-palto-takim": "antalya-terzi-palto-ceket-ozel-dikim", "manken-bej-ceket": "antalya-terzi-kadin-ceket-dikimi", "pilili-etek": "antalya-terzi-pliseli-etek-kisaltma", "beyaz-gomlek-katli": "antalya-terzi-gomlek-daraltma-kisaltma", "sweatshirt-katli": "antalya-terzi-sweatshirt-tamir-tadilat", "yun-pantolon-metre": "antalya-terzi-kumas-pantolon-tadilat", "palto-yaka-detay": "antalya-terzi-palto-ceket-tamiri", "polar-yelek": "antalya-terzi-yelek-tamiri-fermuar", "eve-gelen-terzi": "antalya-eve-otele-gelen-terzi", "paca-kisaltma": "antalya-terzi-paca-kisaltma", "dikis-makinesi": "antalya-terzi-dikim-tamir-dikis-makinesi", "gelinlik-abiye": "antalya-terzi-gelinlik-tadilati", "hazir-giyim-atolye": "antalya-tekstil-tisort-seri-uretim", "kalip-ve-makas": "antalya-terzi-ozel-dikim-kalip-makas", "bel-daraltma-manken": "antalya-terzi-elbise-bel-daraltma", "uniforma": "antalya-uniforma-dikim-uretim", "bez-canta-atolye": "antalya-baskili-bez-canta-uretim", "fermuar-degisimi": "antalya-terzi-fermuar-degisimi-tamiri"}).map(([eski, yeni]) => ({ source: `/gorseller/${eski}.webp`, destination: `/gorseller/${yeni}.webp`, permanent: true })),
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.terzihizmeti.com.tr' }],
        destination: 'https://terzihizmeti.com.tr/:path*',
        permanent: true,
      },
      // Search Console 404 listesi: eski/hatali otel ve bolge adresleri -> mevcut sayfalar (kalici)
      { source: '/hotel-tailor-antalya', destination: '/en/hotel-tailor-antalya', permanent: true },
      { source: '/hotel-tailor-antalya/:region', destination: '/en/hotel-tailor-antalya/:region', permanent: true },
      { source: '/ru/oytelniy-portnoy-antalya', destination: '/ru/vyezdnoy-portnoy-antalya', permanent: true },
      { source: '/ru/oytelniy-portnoy-antalya/:region', destination: '/ru/vyezdnoy-portnoy-antalya/:region', permanent: true },
      { source: '/ru/uslugi-portnogo-antalya-oteli', destination: '/ru/vyezdnoy-portnoy-antalya', permanent: true },
      { source: '/ru/uslugi-portnogo-antalya-oteli/:region', destination: '/ru/vyezdnoy-portnoy-antalya/:region', permanent: true },
      { source: '/en/tailor-service-antalya-hotels', destination: '/en/hotel-tailor-antalya', permanent: true },
      { source: '/en/tailor-service-antalya-hotels/:region', destination: '/en/hotel-tailor-antalya/:region', permanent: true },
      { source: '/de/schneiderservice-antalya-hotels', destination: '/de/schneider-service-hotel-antalya', permanent: true },
      { source: '/de/schneiderservice-antalya-hotels/:region', destination: '/de/schneider-service-hotel-antalya/:region', permanent: true },
      { source: '/konyaalti-terzi', destination: '/antalya-terzi', permanent: true },
      { source: '/blog/2026-yaz-sezonu-getirillik-tadilati-rehberi', destination: '/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi', permanent: true },
      // Search Console 404 (21 Kasım 2026): yanlış yazılmış adresler → doğru sayfa
      { source: '/ru/poshiv-lyon-khlopok', destination: '/ru/poshiv-lyon-hlopok', permanent: true },
      { source: '/ru/poshiv-lyon-khlopok/:path*', destination: '/ru/poshiv-lyon-hlopok/:path*', permanent: true },
      { source: '/antalya-uniforma-uretimi', destination: '/antalya-uniforma-imalati', permanent: true },
      { source: '/antalya-elbise-daraltma', destination: '/terzi-hizmetleri/elbise-tamiri-tadilati', permanent: true },
      // Search Console 404 (23 Kasım): eski otel bölgesi adres kalıpları → bugünkü otel bölgesi sayfaları; yazım hatalı blog adresi
      { source: '/hotel-tailor-antalya/:region', destination: '/en/hotel-tailor-antalya/:region', permanent: true },
      { source: '/hotel-tailor-antalya', destination: '/en/hotel-tailor-antalya', permanent: true },
      { source: '/en/tailor-service-antalya-hotels/:region', destination: '/en/hotel-tailor-antalya/:region', permanent: true },
      { source: '/en/tailor-service-antalya-hotels', destination: '/en/hotel-tailor-antalya', permanent: true },
      { source: '/ru/oytelniy-portnoy-antalya/:region', destination: '/ru/vyezdnoy-portnoy-antalya/:region', permanent: true },
      { source: '/ru/oytelniy-portnoy-antalya', destination: '/ru/vyezdnoy-portnoy-antalya', permanent: true },
      { source: '/ru/uslugi-portnogo-antalya-oteli/:region', destination: '/ru/vyezdnoy-portnoy-antalya/:region', permanent: true },
      { source: '/ru/uslugi-portnogo-antalya-oteli', destination: '/ru/vyezdnoy-portnoy-antalya', permanent: true },
      { source: '/de/schneiderservice-antalya-hotels/:region', destination: '/de/schneider-service-hotel-antalya/:region', permanent: true },
      { source: '/de/schneiderservice-antalya-hotels', destination: '/de/schneider-service-hotel-antalya', permanent: true },
      { source: '/blog/2026-yaz-sezonu-getirillik-tadilati-rehberi', destination: '/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi', permanent: true },
      // Online terzi servisi: eski adresler -> yeni kisa adresler (kalici)
      { source: '/foto-ile-terzi-kargoyla-antalya', destination: '/online-terzi-servisi', permanent: true },
      { source: '/en/photo-quote-tailor-courier-antalya', destination: '/en/online-tailor-antalya', permanent: true },
      { source: '/ru/portnoy-po-foto-antalya-dostavka', destination: '/ru/onlayn-portnoy-antalya', permanent: true },
      { source: '/de/schneider-per-foto-antalya-paket', destination: '/de/online-schneider-antalya', permanent: true },
      { source: '/es/sastre-por-foto-antalya-mensajeria', destination: '/es/sastre-online-antalya', permanent: true },
      { source: '/fr/couturier-par-photo-antalya-colis', destination: '/fr/couturier-en-ligne-antalya', permanent: true },
      { source: '/pl/krawiec-antalya-wycena-ze-zdjecia', destination: '/pl/krawiec-online-antalya', permanent: true },
      { source: '/uk/kravets-antaliya-tsina-za-foto', destination: '/uk/onlayn-kravets-antaliya', permanent: true },
      { source: '/nl/kleermaker-antalya-prijs-per-foto', destination: '/nl/online-kleermaker-antalya', permanent: true },
      { source: '/ar/khayyat-antalya-bil-sura-wal-shahn', destination: '/ar/khayyat-online-antalya', permanent: true },
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
      // /en, /ru, /de kök adresinde sayfa yok: dilin ana hizmet sayfasına (terzihizmeti.com.tr; .com alan adı için 'kisa' kuralları ayrı)
      { source: '/en', destination: '/en/tailor-service-antalya', permanent: true },
      { source: '/ru', destination: '/ru/uslugi-portnogo-antalya', permanent: true },
      { source: '/de', destination: '/de/schneiderservice-antalya', permanent: true },
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
