/** @type {import('next').NextConfig} */
const nextConfig = {
  // EKLENDİ: "X-Powered-By: Next.js" başlığını gizler — sunucu yazılımını
  // ifşa etmemek küçük ama gerçek bir güvenlik hijyeni pratiğidir.
  poweredByHeader: false,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'maps.googleapis.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  // ── GERİ ALINDI (2026-08-23) ──────────────────────────────────────────
  // www → non-www redirect'i sıralama düşüşüne sebep oldu: Google'ın
  // şimdiye kadar taradığı ve sıraladığı TÜM URL'ler www'siz (terzihizmeti.com.tr)
  // adresteydi. www'ye zorla yönlendirme eklendiğinde Google bunu "site
  // taşındı" olarak algıladı ve geçiş sürecinde geçici sıralama kaybı oluştu.
  // Kanonik domain www'siz olarak GERİ DÖNDÜRÜLDÜ. Eğer www üzerinden gelen
  // trafik varsa (biri www.terzihizmeti.com.tr yazarsa) onu non-www'e
  // yönlendiriyoruz — yani yön TERSİNE ÇEVRİLDİ.
  //
  // ⚠️ NOT: Yandex Webmaster doğrulaması (public/yandex_...html) www ile
  // yapılmış olabilir. Bu redirect www→non-www yönünde olduğu için Yandex
  // doğrulama dosyası her iki adreste de (www ve non-www) erişilebilir
  // kalacak şekilde public/ klasöründe bırakıldı — silme.
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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // EKLENDİ: HSTS — tarayıcıya bu siteye HER ZAMAN HTTPS üzerinden
          // bağlanmasını söyler, HTTP'ye düşürme (downgrade) saldırılarını
          // engeller. Google, güvenlik sinyali olarak HTTPS'i zaten dikkate
          // alıyor; HSTS bunu güçlendirir.
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        ],
      },
      {
        // EKLENDİ: Next.js'in derlediği statik varlıklar (JS/CSS chunk'ları)
        // dosya adına hash içerir, yani içerik değişmeden asla aynı URL'de
        // farklı içerik gelmez — bu yüzden agresif, uzun süreli cache güvenlidir.
        // Bu, tekrar eden ziyaretlerde sayfa yükleme hızını (Core Web Vitals)
        // doğrudan iyileştirir.
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
