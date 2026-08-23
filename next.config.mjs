/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ],
      },
    ];
  },
};

export default nextConfig;
