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
    { '@type': 'WebSite', '@id': `${SITE}#website`, name: 'Terzi Can — Terzi Hizmeti', url: SITE, inLanguage: ['tr', 'ru', 'en'] },
    {
      '@type': ['LocalBusiness', 'ClothingStore'],
      additionalType: ['https://schema.org/SewingService', 'https://schema.org/DryCleaningService'],
      '@id': `${SITE}#business`,
      name: 'Terzi Can',
      alternateName: ['Terzi Hizmeti', 'Портной Цан', 'Tailor Can Antalya'],
      description:
        'Antalya\'da profesyonel terzi hizmeti: dikim, tamir, tadilat. Paça kısaltma, fermuar değişimi, bel daraltma, elbise dikimi, kuru temizleme ve ütü. Konyaaltı merkezli, tüm Antalya\'ya hizmet.',
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
      name: 'Terzi Can — Antalya Terzi Hizmeti | Dikim, Tamir, Tadilat',
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
        { '@type': 'Question', name: 'Rusça hizmet alabilir miyim?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, Terzi Can (Портной Цан) Rusça ve İngilizce destek sunmaktadır.' } },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Antalya Terzi | Terzi Can — Dikim, Tamir, Tadilat Hizmeti 2026',
  description:
    'Antalya terzi hizmeti — Terzi Can. Paça kısaltma ₺150, fermuar değişimi ₺200, bel daraltma, elbise dikimi, kuru temizleme. Konyaaltı merkezli, tüm Antalya\'ya hizmet. WhatsApp\'tan hemen yazın. ☎ ' + PHONE_DISPLAY,
  keywords: [
    'Antalya terzi', 'terzi hizmeti Antalya', 'Antalya dikim', 'Antalya tamir tadilat',
    'Konyaaltı terzi', 'paça kısaltma Antalya', 'fermuar değişimi Antalya',
    'bel daraltma Antalya', 'elbise dikimi Antalya', 'kuru temizleme Antalya',
    'terzi çağır Antalya', 'eve gelen terzi Antalya', 'gelinlik tadilatı Antalya',
    'abiye tamiri Antalya', 'tailor Antalya', 'портной Анталья', 'ремонт одежды Анталья',
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
  other: {
    'geo.region': 'TR-07',
    'geo.placename': 'Konyaaltı, Antalya',
    'geo.position': '36.8841;30.7056',
    ICBM: '36.8841, 30.7056',
  },
};

const D = {
  brown: '#4A2E24', brown2: '#6B4535', brown3: '#8B5E3C',
  gold: '#C9A15A', gold2: '#DFC58A', goldDark: '#A67C3D',
  cream: '#F7F1E8', cream2: '#EFE4D3', cream3: '#E5D5BC',
  ink: '#2B1D15', s: '#6B5D4F', border: 'rgba(74,46,36,.14)',
  white: '#FFFFFF',
};

const SERVICES = [
  { icon: '✂️', title: 'Paça Kısaltma', desc: 'Pantolon, etek, kot paça kısaltma. Bay ve bayan.', price: '₺150+', time: 'Aynı gün' },
  { icon: '🔗', title: 'Fermuar Değişimi', desc: 'Pantolon, mont, ceket, çanta fermuarı değişimi ve tamiri.', price: '₺200+', time: 'Aynı gün' },
  { icon: '📐', title: 'Bel Daraltma', desc: 'Elbise, pantolon, ceket bel daraltma ve ölçü ayarı.', price: '₺150+', time: '24 saat' },
  { icon: '🪡', title: 'Elbise Dikimi', desc: 'Kadın elbise, abiye, gelinlik, erkek takım elbise dikimi.', price: '₺600+', time: '3–7 gün' },
  { icon: '👗', title: 'Gelinlik & Abiye Tadilatı', desc: 'Özel gün kıyafetlerinde hassas daraltma ve boy ayarı.', price: '₺400+', time: '24–48 saat' },
  { icon: '🧺', title: 'Kuru Temizleme & Ütü', desc: 'Profesyonel kuru temizleme, buharlı ütü, pres.', price: '₺80+', time: '2–48 saat' },
];

const STEPS = [
  { n: '01', t: 'WhatsApp\'tan Yazın', d: 'Kıyafetin fotoğrafını gönderin, anında fiyat teklifi alın.' },
  { n: '02', t: 'Randevu Alın', d: 'Size uygun gün ve saati birlikte belirleyelim.' },
  { n: '03', t: 'İşlem Tamamlanır', d: 'Deneyimli ustalarımız kıyafetinizi özenle hazırlar.' },
  { n: '04', t: 'Teslim Alın', d: 'Kıyafetiniz zamanında ve kusursuz teslim edilir.' },
];

const FAQS = [
  ['Antalya terzi hizmeti nasıl alınır?', `WhatsApp'tan yazın veya arayın: ${PHONE_DISPLAY}. Kıyafetinizin fotoğrafını gönderin, 15 dakika içinde fiyat teklifi alın.`],
  ['Paça kısaltma fiyatı ne kadar?', 'Paça kısaltma ₺150\'den başlar, çoğu zaman aynı gün teslim edilir.'],
  ['Hangi bölgelere hizmet veriyorsunuz?', 'Konyaaltı merkezli olmak üzere Muratpaşa, Kepez, Lara, Belek ve Kemer dahil tüm Antalya\'ya hizmet veriyoruz.'],
  ['Rusça veya İngilizce destek var mı?', 'Evet — Terzi Can (Портной Цан) Türkçe, Rusça ve İngilizce hizmet vermektedir.'],
  ['Gelinlik veya abiye tadilatı yapıyor musunuz?', 'Evet, özel gün kıyafetlerinde hassas daraltma, boy ayarı ve onarım yapıyoruz.'],
];

export default function TerziHizmetiHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main style={{ background: D.cream, color: D.ink, fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif", minHeight: '100vh', overflowX: 'hidden' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          html{scroll-behavior:smooth}
          body{overflow-x:hidden}
        `}</style>

        {/* WhatsApp float button */}
        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
          style={{ position: 'fixed', bottom: '1.6rem', right: '1.6rem', zIndex: 999, width: '3.4rem', height: '3.4rem', borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', textDecoration: 'none', boxShadow: '0 6px 24px rgba(37,211,102,.5)' }}
          aria-label="WhatsApp ile iletişime geçin">
          💬
        </a>

        {/* NAV */}
        <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(247,241,232,.96)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${D.border}`, padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontWeight: 700, color: D.brown, letterSpacing: '.01em' }}>
            Terzi <span style={{ color: D.gold }}>Can</span>
          </div>
          <div style={{ display: 'flex', gap: '.6rem', alignItems: 'center' }}>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
              style={{ background: '#25d366', color: '#fff', padding: '.65rem 1.2rem', borderRadius: '3px', textDecoration: 'none', fontSize: '.78rem', fontWeight: 700 }}>
              💬 WhatsApp
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ position: 'relative', padding: '3.5rem 1.5rem 4rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, ${D.brown} 0%, ${D.brown2} 55%, ${D.brown3} 100%)` }} />
          <div style={{ position: 'absolute', top: -80, right: -80, width: 380, height: 380, borderRadius: '50%', background: 'rgba(201,161,90,.08)' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -60, width: 260, height: 260, borderRadius: '50%', background: 'rgba(201,161,90,.06)' }} />

          <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', background: 'rgba(201,161,90,.15)', border: `1px solid rgba(201,161,90,.4)`, color: D.gold2, padding: '.4rem 1.1rem', borderRadius: 999, fontSize: '.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '1.5rem' }}>
              ✦ Antalya · Tamir · Tadilat · Dikim
            </span>

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.1rem,6vw,3.4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1.2rem', letterSpacing: '-.01em' }}>
              Terzi Can<br/>
              <span style={{ color: D.gold2, fontStyle: 'italic', fontWeight: 600, fontSize: '75%' }}>Портной Цан · Tailor Can</span>
            </h1>

            <p style={{ fontSize: '1.02rem', color: 'rgba(255,255,255,.82)', lineHeight: 1.85, maxWidth: '560px', margin: '0 auto 2rem' }}>
              Antalya'nın güvenilir terzisi — <strong style={{ color: D.gold2 }}>dikim, tamir ve tadilat</strong> hizmetlerinde
              yılların deneyimi. Paça kısaltmadan özel gün kıyafeti dikimine, her işi
              özenle ve zamanında tamamlıyoruz.
            </p>

            <div style={{ display: 'flex', gap: '.9rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.2rem' }}>
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: '#25d366', color: '#fff', padding: '1rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none', fontSize: '.9rem', boxShadow: '0 6px 24px rgba(37,211,102,.4)' }}>
                💬 WhatsApp'tan Yazın
              </a>
              <a href="tel:+905318986418"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', border: '1px solid rgba(255,255,255,.3)', color: '#fff', padding: '1rem 1.7rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', fontSize: '.9rem' }}>
                📞 {PHONE_DISPLAY}
              </a>
            </div>

            {/* Sosyal ikonlar */}
            <div style={{ display: 'flex', gap: '.7rem', justifyContent: 'center' }}>
              <a href={IG} target="_blank" rel="noopener noreferrer"
                style={{ width: '2.3rem', height: '2.3rem', borderRadius: '50%', background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '.9rem' }}>
                📷
              </a>
              <a href={TG} target="_blank" rel="noopener noreferrer"
                style={{ width: '2.3rem', height: '2.3rem', borderRadius: '50%', background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '.9rem' }}>
                ✈️
              </a>
            </div>

            {/* Stat şeridi */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(255,255,255,.06)', maxWidth: '600px', margin: '2.5rem auto 0', borderRadius: 8, overflow: 'hidden' }}>
              {[['3 Dil', 'TR · RU · EN'], ['Aynı Gün', 'Hızlı Teslim'], ['Antalya', 'Geneli Hizmet'], ['Güvenilir', 'Deneyimli Usta']].map(([n, l]) => (
                <div key={l} style={{ padding: '1rem .5rem', textAlign: 'center', background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '.9rem', color: D.gold2, fontWeight: 700, marginBottom: 3 }}>{n}</div>
                  <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.45)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GİRİŞ METNİ — SEO */}
        <section style={{ background: D.cream2, padding: '3rem 1.5rem', borderBottom: `1px solid ${D.border}` }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '.9rem', color: D.s, lineHeight: 1.9 }}>
              <strong style={{ color: D.brown }}>Terzi Can</strong>, Antalya'da kıyafet dikimi, tamiri ve
              tadilatı konusunda uzmanlaşmış profesyonel bir terzi atölyesidir. Paça kısaltma, fermuar
              değişimi, bel daraltma gibi günlük tadilat işlerinden; elbise dikimi, gelinlik ve abiye
              tadilatı gibi özel gün kıyafetlerine kadar geniş bir hizmet yelpazesi sunuyoruz. Konyaaltı
              merkezli atölyemiz, tüm Antalya'ya hizmet vermektedir.
            </p>
          </div>
        </section>

        {/* HİZMETLER */}
        <section style={{ padding: '4rem 1.5rem' }} id="hizmetler">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', color: D.gold, fontWeight: 700 }}>✦ Hizmetlerimiz</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem,4vw,2.3rem)', fontWeight: 700, color: D.brown, margin: '.6rem 0 0' }}>
                Terzilik, Giyim, Dikim ve Tadilat Hizmetleri
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '1rem' }}>
              {SERVICES.map(s => (
                <div key={s.title} style={{ background: '#fff', border: `1px solid ${D.border}`, borderRadius: '10px', padding: '1.4rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${D.gold},transparent)` }} />
                  <div style={{ fontSize: '1.5rem', marginBottom: '.6rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '.95rem', color: D.brown, marginBottom: '.4rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '.8rem', color: D.s, lineHeight: 1.6, marginBottom: '.8rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '.78rem', fontWeight: 800, color: D.goldDark }}>{s.price}</span>
                    <span style={{ fontSize: '.68rem', color: D.s }}>⏱ {s.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NASIL ÇALIŞIR */}
        <section style={{ background: D.brown, padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', color: D.gold2, fontWeight: 700 }}>Nasıl Çalışır</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem,3.5vw,2rem)', fontWeight: 700, color: '#fff', margin: '.6rem 0 0' }}>
                4 Adımda Terzi Hizmeti
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem' }}>
              {STEPS.map(s => (
                <div key={s.n} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '10px', padding: '1.3rem' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: D.gold2, fontWeight: 700, marginBottom: '.5rem' }}>{s.n}</div>
                  <div style={{ fontWeight: 700, fontSize: '.88rem', color: '#fff', marginBottom: '.4rem' }}>{s.t}</div>
                  <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.6 }}>{s.d}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2.2rem' }}>
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: '#25d366', color: '#fff', padding: '.9rem 1.9rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none', fontSize: '.86rem' }}>
                💬 Hemen WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </section>

        {/* NEDEN TERZİ CAN */}
        <section style={{ padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', color: D.gold, fontWeight: 700 }}>Neden Biz</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem,3.5vw,2rem)', fontWeight: 700, color: D.brown, margin: '.6rem 0 0' }}>
                Güven, Kalite ve Deneyim
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
              {[
                ['🎯', 'Uzman Ustalık', 'Yılların deneyimiyle her kıyafete özenli işçilik.'],
                ['⚡', 'Hızlı Teslimat', 'Çoğu işlem aynı gün veya 24 saat içinde tamamlanır.'],
                ['🌍', 'Çok Dilli Hizmet', 'Türkçe, Rusça ve İngilizce iletişim desteği.'],
                ['💬', 'Kolay İletişim', 'WhatsApp üzerinden anında fiyat ve randevu.'],
              ].map(([ic, t, d]) => (
                <div key={t} style={{ background: D.cream2, border: `1px solid ${D.border}`, borderRadius: '10px', padding: '1.4rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '.6rem' }}>{ic}</div>
                  <div style={{ fontWeight: 700, fontSize: '.9rem', color: D.brown, marginBottom: '.4rem' }}>{t}</div>
                  <div style={{ fontSize: '.78rem', color: D.s, lineHeight: 1.6 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SSS */}
        <section style={{ background: D.cream2, padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', color: D.gold, fontWeight: 700 }}>SSS</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem,3.5vw,2rem)', fontWeight: 700, color: D.brown, margin: '.6rem 0 0' }}>
                Sık Sorulan Sorular
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              {FAQS.map(([q, a], i) => (
                <details key={q} open={i < 2} style={{ background: '#fff', border: `1px solid ${D.border}`, borderRadius: '10px' }}>
                  <summary style={{ padding: '1rem 1.2rem', fontWeight: 700, fontSize: '.88rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', color: D.brown }}>
                    {q}
                    <span style={{ color: D.gold }}>+</span>
                  </summary>
                  <div style={{ padding: '.2rem 1.2rem 1rem', fontSize: '.82rem', color: D.s, lineHeight: 1.75, borderTop: `1px solid ${D.border}` }}>{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SON CTA */}
        <section style={{ background: `linear-gradient(135deg,${D.gold},${D.goldDark})`, padding: '3.5rem 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', fontWeight: 700, color: '#fff', marginBottom: '.7rem' }}>
            Kıyafetiniz Bir Mesaj Uzağında
          </h2>
          <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.9)', maxWidth: '520px', margin: '0 auto 1.6rem', lineHeight: 1.7 }}>
            WhatsApp'tan yazın, fotoğraf gönderin, anında fiyat teklifi alın.
          </p>
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: '#fff', color: D.goldDark, padding: '.95rem 2rem', borderRadius: '4px', fontWeight: 800, textDecoration: 'none', fontSize: '.88rem' }}>
            💬 {PHONE_DISPLAY} — WhatsApp'tan Yazın
          </a>
        </section>

        {/* FOOTER */}
        <footer style={{ background: D.brown, padding: '2.5rem 1.5rem', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: D.gold2, marginBottom: '.5rem' }}>
            Terzi Can · Портной Цан · Tailor Can
          </div>
          <div style={{ display: 'flex', gap: '.8rem', justifyContent: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none', fontSize: '.78rem' }}>💬 WhatsApp</a>
            <a href="tel:+905318986418" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none', fontSize: '.78rem' }}>📞 {PHONE_DISPLAY}</a>
            <a href={IG} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none', fontSize: '.78rem' }}>📷 Instagram</a>
            <a href={TG} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none', fontSize: '.78rem' }}>✈️ Telegram</a>
          </div>
          <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.3)' }}>
            © {new Date().getFullYear()} Terzi Can · Konyaaltı, Antalya
          </p>
        </footer>
      </main>
    </>
  );
}
