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
  // NOT: www isteği 301 ile non-www'ye yönlenir. Yandex doğrulaması non-www
  // üzerinden yapılmalıdır; layout.tsx'teki meta doğrulama kodları yedek olarak durur.
  // public/yandex_...html dosyasını silme.
  // ── terzihizmeti.com (ikinci alan adı) ────────────────────────────────
  // terzihizmeti.com ve www.terzihizmeti.com bu projeye bağlıdır ama içerik
  // yayınlamaz: kısa yönlendirme adresleri + geri kalan her şey .com.tr'ye gider.
  // Sıra önemli: önce kısa adresler, en sonda hepsini yakalayan kural.
  // Kısa adresler geçici (307) yönlendirilir ki hedef sonra değiştirilebilsin.
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
      // Turist kısa adresleri (otel broşürü, QR kod, kartvizit için)
      kisa('/en', 'https://terzihizmeti.com.tr/en/linen-cotton-tailoring'),
      kisa('/de', 'https://terzihizmeti.com.tr/de/leinen-baumwolle-schneiderei'),
      kisa('/ru', 'https://terzihizmeti.com.tr/ru/poshiv-lyon-hlopok'),
      kisa('/en/fix', 'https://terzihizmeti.com.tr/en/tourist-clothing-alterations-antalya'),
      kisa('/de/fix', 'https://terzihizmeti.com.tr/de/kleidung-aendern-urlaub-antalya'),
      kisa('/ru/fix', 'https://terzihizmeti.com.tr/ru/podgonka-odezhdy-turistam-antalya'),
      // Diğer her adres: aynı yolla .com.tr'ye kalıcı yönlendirme
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
          // EKLENDİ: HSTS — tarayıcıya bu siteye HER ZAMAN HTTPS üzerinden
          // bağlanmasını söyler, HTTP'ye düşürme (downgrade) saldırılarını
          // engeller. Google, güvenlik sinyali olarak HTTPS'i zaten dikkate
          // alıyor; HSTS bunu güçlendirir.
          // (preload kaldırıldı: hstspreload.org'a başvurmadan gereksiz.)
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
      {
        // EKLENDİ: Next.js'in derlediği statik varlıklar (JS/CSS chunk'ları)
        // dosya adına hash içerir, yani içerik değişmeden asla aynı URL'de
        // farklı içerik gelmez — bu yüzden agresif, uzun süreli cache güvenlidir.
        // Bu, tekrar eden ziyaretlerde sayfa yükleme hızın
