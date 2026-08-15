import type { Metadata } from 'next';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE_DISPLAY = '+90 531 898 64 18';
const PHONE_TEL = '905318986418';
const WA = (msg: string) => `https://wa.me/${PHONE_TEL}?text=${encodeURIComponent(msg)}`;
const WA_DEFAULT = WA('Merhaba, Terzi Can hizmetleriniz hakkında bilgi almak istiyorum.');
const IG = 'https://instagram.com/tailor_can';
const TG = 'https://t.me/terzican';

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': `${SITE}#website`, name: 'Terzi Can — Antalya Terzi Hizmeti', url: SITE, inLanguage: ['tr', 'ru', 'en'] },
    {
      '@type': ['LocalBusiness', 'ClothingStore'],
      additionalType: ['https://schema.org/SewingService', 'https://schema.org/DryCleaningService'],
      '@id': `${SITE}#business`,
      name: 'Terzi Can',
      alternateName: ['Terzi Hizmeti', 'Портной Цан', 'Tailor Can Antalya'],
      description:
        'Antalya\'da profesyonel terzi hizmeti: dikim, tamir, tadilat. Paça kısaltma, fermuar değişimi, bel daraltma, elbise dikimi, gelinlik ve abiye tadilatı, kuru temizleme ve ütü. Konyaaltı merkezli, tüm Antalya\'ya hizmet.',
      url: SITE,
      telephone: `+${PHONE_TEL}`,
      priceRange: '₺₺',
      currenciesAccepted: 'TRY, EUR, USD, RUB',
      paymentAccepted: 'Cash, Credit Card',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Konyaaltı',
        addressRegion: 'Antalya',
        postalCode: '07070',
        addressCountry: 'TR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 36.8841, longitude: 30.7056 },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00', closes: '19:00',
      }],
      areaServed: ['Antalya', 'Konyaaltı', 'Muratpaşa', 'Kepez', 'Lara', 'Belek', 'Kemer'].map(n => ({ '@type': 'City', name: n })),
      knowsLanguage: ['tr', 'ru', 'en'],
      sameAs: [IG, TG, `https://wa.me/${PHONE_TEL}`],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Terzi Can — Hizmet Kataloğu',
        itemListElement: [
          { '@type': 'Offer', price: '150', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Paça Kısaltma' } },
          { '@type': 'Offer', price: '150', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Bel Daraltma' } },
          { '@type': 'Offer', price: '200', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Fermuar Değişimi' } },
          { '@type': 'Offer', price: '600', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Elbise Dikimi' } },
          { '@type': 'Offer', price: '300', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Kuru Temizleme' } },
        ],
      },
    },
    {
      '@type': 'WebPage', '@id': `${SITE}#webpage`,
      name: 'Terzi Can — Antalya Terzi Hizmeti | Dikim, Tamir, Tadilat 2026',
      url: SITE, inLanguage: 'tr',
      about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${SITE}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${SITE}#breadcrumb`,
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE }],
    },
    {
      '@type': 'FAQPage', '@id': `${SITE}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Antalya terzi hizmeti nasıl alınır?', acceptedAnswer: { '@type': 'Answer', text: `WhatsApp'tan yazın veya arayın: ${PHONE_DISPLAY}. Kıyafetinizin fotoğrafını gönderin, 15 dakika içinde fiyat teklifi alın.` } },
        { '@type': 'Question', name: 'Paça kısaltma fiyatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Paça kısaltma ₺150\'den başlar, aynı gün teslim edilir.' } },
        { '@type': 'Question', name: 'Fermuar değişimi kaç lira?', acceptedAnswer: { '@type': 'Answer', text: 'Fermuar değişimi ₺200\'den başlar, pantolon, mont, ceket için aynı gün işlem yapılır.' } },
        { '@type': 'Question', name: 'Rusça hizmet alabilir miyim?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, Terzi Can (Портной Цан) Rusça ve İngilizce destek sunmaktadır.' } },
        { '@type': 'Question', name: 'Hangi bölgelere hizmet veriyorsunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Konyaaltı merkezli olmak üzere Muratpaşa, Kepez, Lara, Belek ve Kemer dahil tüm Antalya\'ya hizmet veriyoruz.' } },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Antalya Terzi | Terzi Can — Dikim, Tamir, Tadilat Hizmeti 2026',
  description:
    'Antalya terzi hizmeti — Terzi Can. Paça kısaltma ₺150, fermuar değişimi ₺200, bel daraltma, elbise dikimi, gelinlik tadilatı, kuru temizleme. Konyaaltı merkezli, tüm Antalya\'ya hizmet. WhatsApp\'tan hemen yazın. ☎ ' + PHONE_DISPLAY,
  keywords: [
    'Antalya terzi', 'terzi hizmeti Antalya', 'Antalya dikim', 'Antalya tamir tadilat',
    'Konyaaltı terzi', 'paça kısaltma Antalya', 'fermuar değişimi Antalya',
    'bel daraltma Antalya', 'elbise dikimi Antalya', 'kuru temizleme Antalya',
    'terzi çağır Antalya', 'eve gelen terzi Antalya', 'gelinlik tadilatı Antalya',
    'abiye tamiri Antalya', 'kadın terzi Antalya', 'erkek terzi Antalya',
    'tailor Antalya', 'портной Анталья', 'ремонт одежды Анталья', 'ателье Анталья',
  ],
  alternates: { canonical: SITE },
  openGraph: {
    title: 'Terzi Can — Antalya Terzi Hizmeti | Dikim, Tamir, Tadilat',
    description: 'Paça kısaltma ₺150, fermuar değişimi ₺200. Antalya\'nın güvenilir terzisi. WhatsApp\'tan hemen ulaşın.',
    url: SITE, siteName: 'Terzi Can', locale: 'tr_TR', alternateLocale: ['ru_RU', 'en_US'], type: 'website',
    images: [{ url: '/og/terzi-can-hero.jpg', width: 1200, height: 630, alt: 'Terzi Can Antalya — Dikim, Tamir, Tadilat' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terzi Can — Antalya Terzi Hizmeti',
    description: 'Dikim, tamir, tadilat. Paça kısaltma ₺150\'den. WhatsApp\'tan hemen ulaşın.',
    images: ['/og/terzi-can-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: {
    google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ',
  },
  other: {
    'geo.region': 'TR-07',
    'geo.placename': 'Konyaaltı, Antalya',
    'geo.position': '36.8841;30.7056',
    ICBM: '36.8841, 30.7056',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// TASARIM SİSTEMİ — "KESİM ÇİZGİSİ" TEMASI
// Terziliğin görsel diline özgü: dikiş çizgileri, mezür/santimetre motifi,
// kumaş şeritleri, kesim işaretleri. Antrasit + mercan/turuncu aksan.
// ═══════════════════════════════════════════════════════════════════════════
const T = {
  ink: '#15181C',       // ana koyu zemin
  ink2: '#1D2127',       // ikincil koyu
  ink3: '#262B32',       // kart zemin
  paper: '#F6F4EF',      // krem/kağıt zemin (dikiş kağıdı hissi)
  paper2: '#EDEAE0',
  coral: '#FF6B4A',      // ana aksan — iğne ucu turuncu-mercan
  coral2: '#FF8A6B',
  coralDeep: '#E8532F',
  thread: '#2E5C4E',     // ikincil aksan — koyu yeşil (kumaş)
  ivory: '#FFFFFF',
  text: '#2A2E33',
  textMuted: '#6B7178',
  textOnDark: 'rgba(246,244,239,.82)',
  textOnDarkMuted: 'rgba(246,244,239,.5)',
  line: 'rgba(21,24,28,.1)',
  lineDark: 'rgba(246,244,239,.1)',
};

// Dikiş çizgisi ayırıcı — SVG ile tekrarlayan stitch pattern
function StitchLine({ dark = false }: { dark?: boolean }) {
  const color = dark ? T.textOnDarkMuted : T.textMuted;
  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }} aria-hidden="true">
      <svg width="100%" height="20" viewBox="0 0 800 20" preserveAspectRatio="none">
        <line x1="0" y1="10" x2="800" y2="10" stroke={color} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.35" />
      </svg>
    </div>
  );
}

// Mezür (ölçü şeridi) motifi — dekoratif
function TapeMeasure() {
  const marks = Array.from({ length: 40 });
  return (
    <div style={{ display: 'flex', height: '100%', alignItems: 'stretch' }} aria-hidden="true">
      {marks.map((_, i) => (
        <div key={i} style={{ flex: 1, borderRight: `1px solid ${i % 5 === 0 ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.08)'}`, height: i % 5 === 0 ? '100%' : '55%', alignSelf: 'flex-end' }} />
      ))}
    </div>
  );
}

const SERVICES = [
  { num: '01', title: 'Paça Kısaltma', desc: 'Pantolon, etek, kot paça kısaltma — bay ve bayan kıyafetlerinde temiz, görünmez dikiş.', price: '₺150+', time: 'Aynı gün' },
  { num: '02', title: 'Fermuar Değişimi', desc: 'Pantolon, mont, ceket, sweatshirt ve çanta fermuarı değişimi, sıkışan fermuar tamiri.', price: '₺200+', time: 'Aynı gün' },
  { num: '03', title: 'Bel Daraltma', desc: 'Elbise, pantolon ve ceketlerde bel daraltma, vücuda tam oturan ölçü ayarı.', price: '₺150+', time: '24 saat' },
  { num: '04', title: 'Elbise Dikimi', desc: 'Kadın elbisesi, erkek takım elbise, gömlek — ölçünüze özel sıfırdan dikim.', price: '₺600+', time: '3–7 gün' },
  { num: '05', title: 'Gelinlik & Abiye Tadilatı', desc: 'Özel gün kıyafetlerinde hassas daraltma, boy ayarı ve detaylı onarım.', price: '₺400+', time: '24–48 saat' },
  { num: '06', title: 'Kuru Temizleme & Ütü', desc: 'Profesyonel kuru temizleme, buharlı ütü ve pres hizmeti.', price: '₺80+', time: '2–48 saat' },
];

const STEPS = [
  { n: '1', t: 'Yazın', d: 'WhatsApp\'tan fotoğraf gönderin, anında fiyat alın.' },
  { n: '2', t: 'Randevu', d: 'Size uygun gün ve saati birlikte belirleyelim.' },
  { n: '3', t: 'Dikim', d: 'Deneyimli ustalarımız özenle işi tamamlar.' },
  { n: '4', t: 'Teslim', d: 'Kıyafetiniz zamanında, kusursuz teslim edilir.' },
];

const WHY = [
  { t: 'Uzman Ustalık', d: 'Yılların deneyimiyle her kıyafete özenli işçilik ve görünmez dikiş tekniği.' },
  { t: 'Hızlı Teslimat', d: 'Paça kısaltma ve fermuar değişimi gibi işlemler çoğunlukla aynı gün tamamlanır.' },
  { t: 'Çok Dilli İletişim', d: 'Türkçe, Rusça ve İngilizce müşteri desteği.' },
  { t: 'Şeffaf Fiyatlandırma', d: 'Fotoğraf üzerinden anında ve net fiyat teklifi, sürpriz ücret yok.' },
];

const FAQS = [
  ['Antalya terzi hizmeti nasıl alınır?', `WhatsApp'tan yazın veya arayın: ${PHONE_DISPLAY}. Kıyafetinizin fotoğrafını gönderin, 15 dakika içinde fiyat teklifi alın.`],
  ['Paça kısaltma fiyatı ne kadar?', 'Paça kısaltma ₺150\'den başlar, çoğu zaman aynı gün teslim edilir.'],
  ['Fermuar değişimi kaç lira?', 'Fermuar değişimi ₺200\'den başlar; pantolon, mont ve ceket için aynı gün işlem yapılır.'],
  ['Hangi bölgelere hizmet veriyorsunuz?', 'Konyaaltı merkezli olmak üzere Muratpaşa, Kepez, Lara, Belek ve Kemer dahil tüm Antalya\'ya hizmet veriyoruz.'],
  ['Rusça veya İngilizce destek var mı?', 'Evet — Terzi Can (Портной Цан) Türkçe, Rusça ve İngilizce hizmet vermektedir.'],
  ['Gelinlik veya abiye tadilatı yapıyor musunuz?', 'Evet, özel gün kıyafetlerinde hassas daraltma, boy ayarı ve onarım yapıyoruz.'],
];

export default function TerziHizmetiHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main style={{ background: T.paper, color: T.text, fontFamily: "'Inter', system-ui, -apple-system, sans-serif", minHeight: '100vh', overflowX: 'hidden' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          html{scroll-behavior:smooth}
          body{overflow-x:hidden}
          .disp{font-family:'Space Grotesk',system-ui,sans-serif}
        `}</style>

        {/* WhatsApp float button */}
        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geçin"
          style={{ position: 'fixed', bottom: '1.6rem', right: '1.6rem', zIndex: 999, width: '3.5rem', height: '3.5rem', borderRadius: '14px', background: T.coral, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', textDecoration: 'none', boxShadow: '0 8px 28px rgba(255,107,74,.45)' }}>
          💬
        </a>

        {/* NAV */}
        <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(246,244,239,.94)', backdropFilter: 'blur(14px)', borderBottom: `1px solid ${T.line}`, padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="disp" style={{ fontSize: '1.15rem', fontWeight: 700, color: T.ink, letterSpacing: '-.01em', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: T.coral, display: 'inline-block' }} />
            TERZİ CAN
          </div>
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
            style={{ background: T.ink, color: T.paper, padding: '.65rem 1.3rem', borderRadius: '2px', textDecoration: 'none', fontSize: '.76rem', fontWeight: 700, letterSpacing: '.03em', textTransform: 'uppercase' }}>
            WhatsApp →
          </a>
        </nav>

        {/* HERO — H1 */}
        <header style={{ position: 'relative', background: T.ink, padding: '4rem 1.5rem 0', overflow: 'hidden' }}>
          {/* Arka plan dikiş grid deseni */}
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.05 }} aria-hidden="true">
            <pattern id="stitchgrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M0 24 L48 24 M24 0 L24 48" stroke={T.paper} strokeWidth="1" strokeDasharray="3 5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#stitchgrid)" />
          </svg>

          <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
            <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', color: T.coral2, fontSize: '.7rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: '1.6rem' }}>
              <span style={{ width: 24, height: 1, background: T.coral2 }} />
              Antalya · Konyaaltı Terzi Atölyesi
              <span style={{ width: 24, height: 1, background: T.coral2 }} />
            </span>

            <h1 className="disp" style={{ fontSize: 'clamp(2.3rem,7vw,4rem)', fontWeight: 700, color: T.paper, lineHeight: 1.05, marginBottom: '1.3rem', letterSpacing: '-.02em' }}>
              Her Dikiş,<br/>
              <span style={{ color: T.coral }}>Tam Ölçünüze</span>
            </h1>

            <p style={{ fontSize: '1.02rem', color: T.textOnDark, lineHeight: 1.85, maxWidth: '540px', margin: '0 auto 2rem' }}>
              <strong style={{ color: T.paper }}>Terzi Can</strong> — Antalya'nın güvenilir terzi atölyesi.
              Paça kısaltmadan özel gün kıyafeti dikimine, dikim, tamir ve tadilat
              işlerinde profesyonel ve hızlı çözüm.
            </p>

            <div style={{ display: 'flex', gap: '.9rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: T.coral, color: T.ink, padding: '1rem 2rem', borderRadius: '2px', fontWeight: 700, textDecoration: 'none', fontSize: '.88rem' }}>
                WhatsApp'tan Yazın →
              </a>
              <a href="tel:+905318986418"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', border: '1px solid rgba(246,244,239,.25)', color: T.paper, padding: '1rem 1.7rem', borderRadius: '2px', fontWeight: 600, textDecoration: 'none', fontSize: '.88rem' }}>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Mezür şeridi — alt geçiş */}
          <div style={{ height: '2.4rem', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            <TapeMeasure />
          </div>
        </header>

        {/* İSTATİSTİK ŞERİDİ */}
        <section style={{ background: T.ink2, padding: '1.6rem 1.5rem', borderBottom: `1px solid ${T.lineDark}` }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px' }}>
            {[['3', 'Dil Desteği'], ['0–24s', 'Ekspres Teslim'], ['Antalya', 'Tüm Bölgeler'], ['%100', 'Şeffaf Fiyat']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center', padding: '.4rem' }}>
                <div className="disp" style={{ fontSize: '1.15rem', color: T.coral2, fontWeight: 700, marginBottom: 2 }}>{n}</div>
                <div style={{ fontSize: '.62rem', color: T.textOnDarkMuted, textTransform: 'uppercase', letterSpacing: '.08em' }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* GİRİŞ — SEO metni */}
        <section style={{ padding: '3.5rem 1.5rem', background: T.paper }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '.92rem', color: T.textMuted, lineHeight: 1.9 }}>
              <strong style={{ color: T.text }}>Terzi Can</strong>, Antalya'da kıyafet dikimi, tamiri ve
              tadilatı konusunda uzmanlaşmış profesyonel bir terzi atölyesidir. Paça kısaltma, fermuar
              değişimi, bel daraltma gibi günlük tadilat işlerinden; elbise dikimi, gelinlik ve abiye
              tadilatı gibi özel gün kıyafetlerine kadar geniş bir hizmet yelpazesi sunuyoruz. Konyaaltı
              merkezli atölyemiz tüm Antalya'ya hizmet vermektedir.
            </p>
          </div>
        </section>

        <StitchLine />

        {/* HİZMETLER — H2 */}
        <section style={{ padding: '4rem 1.5rem' }} id="hizmetler">
          <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="disp" style={{ fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', color: T.coralDeep, fontWeight: 700 }}>Hizmetlerimiz</span>
              <h2 className="disp" style={{ fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, color: T.text, margin: '.7rem 0 0', letterSpacing: '-.01em' }}>
                Terzilik, Giyim, Dikim ve Tadilat Hizmetleri
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1px', background: T.line, border: `1px solid ${T.line}` }}>
              {SERVICES.map(s => (
                <article key={s.title} style={{ background: T.ivory, padding: '1.8rem 1.5rem' }}>
                  <div className="disp" style={{ fontSize: '.72rem', color: T.coral, fontWeight: 700, marginBottom: '.9rem' }}>{s.num}</div>
                  <h3 className="disp" style={{ fontWeight: 700, fontSize: '1.02rem', color: T.text, marginBottom: '.5rem', letterSpacing: '-.005em' }}>{s.title}</h3>
                  <p style={{ fontSize: '.82rem', color: T.textMuted, lineHeight: 1.65, marginBottom: '1.1rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '.9rem', borderTop: `1px solid ${T.line}` }}>
                    <span className="disp" style={{ fontSize: '.85rem', fontWeight: 700, color: T.coralDeep }}>{s.price}</span>
                    <span style={{ fontSize: '.68rem', color: T.textMuted }}>{s.time}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NASIL ÇALIŞIR — H2 */}
        <section style={{ background: T.ink, padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="disp" style={{ fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', color: T.coral2, fontWeight: 700 }}>Süreç</span>
              <h2 className="disp" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', fontWeight: 700, color: T.paper, margin: '.7rem 0 0', letterSpacing: '-.01em' }}>
                Dört Adımda Terzi Hizmeti
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1px', background: T.lineDark }}>
              {STEPS.map((s, i) => (
                <div key={s.n} style={{ background: T.ink, padding: '1.6rem 1.3rem', position: 'relative' }}>
                  {i < STEPS.length - 1 && (
                    <div style={{ position: 'absolute', top: '2.4rem', right: -1, width: 20, height: 1, background: T.coral, display: 'none' }} className="step-connector" />
                  )}
                  <div className="disp" style={{ width: '2.2rem', height: '2.2rem', borderRadius: '2px', border: `1.5px solid ${T.coral}`, color: T.coral2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.9rem', marginBottom: '.9rem' }}>{s.n}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '.9rem', color: T.paper, marginBottom: '.4rem' }}>{s.t}</h3>
                  <p style={{ fontSize: '.78rem', color: T.textOnDarkMuted, lineHeight: 1.6 }}>{s.d}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2.4rem' }}>
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: T.coral, color: T.ink, padding: '.95rem 2rem', borderRadius: '2px', fontWeight: 700, textDecoration: 'none', fontSize: '.86rem' }}>
                Hemen WhatsApp'tan Yazın →
              </a>
            </div>
          </div>
        </section>

        {/* NEDEN TERZİ CAN — H2 */}
        <section style={{ padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="disp" style={{ fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', color: T.coralDeep, fontWeight: 700 }}>Neden Biz</span>
              <h2 className="disp" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', fontWeight: 700, color: T.text, margin: '.7rem 0 0', letterSpacing: '-.01em' }}>
                Güven, Kalite ve Deneyim
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
              {WHY.map((w) => (
                <div key={w.t} style={{ background: T.ivory, border: `1px solid ${T.line}`, borderLeft: `3px solid ${T.coral}`, padding: '1.5rem' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '.92rem', color: T.text, marginBottom: '.5rem' }}>{w.t}</h3>
                  <p style={{ fontSize: '.8rem', color: T.textMuted, lineHeight: 1.65 }}>{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StitchLine />

        {/* SSS — H2 */}
        <section style={{ background: T.paper2, padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
              <span className="disp" style={{ fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', color: T.coralDeep, fontWeight: 700 }}>SSS</span>
              <h2 className="disp" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', fontWeight: 700, color: T.text, margin: '.7rem 0 0', letterSpacing: '-.01em' }}>
                Sık Sorulan Sorular
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {FAQS.map(([q, a], i) => (
                <details key={q} open={i < 2} style={{ background: T.ivory, border: `1px solid ${T.line}` }}>
                  <summary style={{ padding: '1.1rem 1.3rem', fontWeight: 700, fontSize: '.88rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: T.text }}>
                    {q}
                    <span style={{ color: T.coral, marginLeft: '1rem', flexShrink: 0 }}>+</span>
                  </summary>
                  <div style={{ padding: '0 1.3rem 1.1rem', fontSize: '.82rem', color: T.textMuted, lineHeight: 1.8, borderTop: `1px solid ${T.line}`, marginTop: '.2rem', paddingTop: '.8rem' }}>{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SON CTA */}
        <section style={{ background: T.coral, padding: '3.8rem 1.5rem', textAlign: 'center' }}>
          <h2 className="disp" style={{ fontSize: 'clamp(1.6rem,4vw,2.3rem)', fontWeight: 700, color: T.ink, marginBottom: '.7rem', letterSpacing: '-.01em' }}>
            Kıyafetiniz Bir Mesaj Uzağında
          </h2>
          <p style={{ fontSize: '.92rem', color: 'rgba(21,24,28,.75)', maxWidth: '480px', margin: '0 auto 1.7rem', lineHeight: 1.7 }}>
            WhatsApp'tan yazın, fotoğraf gönderin, anında fiyat teklifi alın.
          </p>
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: T.ink, color: T.paper, padding: '1rem 2.1rem', borderRadius: '2px', fontWeight: 700, textDecoration: 'none', fontSize: '.88rem' }}>
            {PHONE_DISPLAY} — WhatsApp'tan Yazın
          </a>
        </section>

        {/* FOOTER */}
        <footer style={{ background: T.ink, padding: '2.6rem 1.5rem', textAlign: 'center' }}>
          <div className="disp" style={{ fontSize: '1.05rem', color: T.paper, marginBottom: '.6rem', fontWeight: 700 }}>
            TERZİ CAN <span style={{ color: T.coral2, fontWeight: 500 }}>· Портной Цан · Tailor Can</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.1rem', flexWrap: 'wrap' }}>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" style={{ color: T.textOnDarkMuted, textDecoration: 'none', fontSize: '.76rem' }}>WhatsApp</a>
            <a href="tel:+905318986418" style={{ color: T.textOnDarkMuted, textDecoration: 'none', fontSize: '.76rem' }}>{PHONE_DISPLAY}</a>
            <a href={IG} target="_blank" rel="noopener noreferrer" style={{ color: T.textOnDarkMuted, textDecoration: 'none', fontSize: '.76rem' }}>Instagram</a>
            <a href={TG} target="_blank" rel="noopener noreferrer" style={{ color: T.textOnDarkMuted, textDecoration: 'none', fontSize: '.76rem' }}>Telegram</a>
          </div>
          <p style={{ fontSize: '.7rem', color: 'rgba(246,244,239,.28)' }}>
            © {new Date().getFullYear()} Terzi Can · Konyaaltı, Antalya
          </p>
        </footer>
      </main>
    </>
  );
}
