import type { Metadata } from 'next';

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
// ✅ DÜZELTME: www eklendi — Yandex Webmaster doğrulaması www ile yapıldı.
// Canonical URL, doğrulanan domain ile birebir eşleşmeli (NAP tutarlılığı).
const SITE      = 'https://terzihizmeti.com.tr';
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, terzi hizmeti hakkında bilgi almak istiyorum.');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const BIZ       = 'Konyaaltı Terzi - Terzi Dikim Tamir Tadilat';
const TODAY     = new Date().toISOString().split('T')[0];
const OG        = `${SITE}/terzi-can-hero.jpg`;

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Terzi Hizmeti — Antalya Konyaaltı Terzi Can | Dikim Tamir Tadilat Ütü',
    template: '%s | Terzi Can Antalya',
  },
  description:
    'Antalya Konyaaltı\'da profesyonel terzi hizmeti. Paça kısaltma, fermuar değişimi, bel daraltma, elbise dikimi, gelinlik tadilatı, kuru temizleme ve ütü. Bay, bayan, çocuk kıyafetleri. Hurma · Liman · Sarısu · Gürsu · Uncalı. ☎ ' + PHONE,
  keywords: [
    // Ana terimler
    'terzi Antalya', 'terzi hizmeti', 'terzi dikim', 'terzi tamir', 'terzi tadilat',
    'Konyaaltı terzi', 'Antalya dikiş atölyesi', 'terzi ütü hizmeti',
    // Paça
    'paça kısaltma Antalya', 'pantolon kısaltma', 'kot kısaltma', 'etek kısaltma',
    'paça kısaltma fiyatı 2026', 'paça kısaltma Konyaaltı',
    // Fermuar
    'fermuar değişimi Antalya', 'fermuar tamiri', 'pantolon fermuarı değişimi',
    'mont fermuarı değişimi', 'ceket fermuar', 'fermuar değişimi fiyatı',
    // Bel/Daraltma
    'bel daraltma Antalya', 'elbise daraltma', 'kol kısaltma', 'ceket daraltma',
    'bel alma tadilat', 'kıyafet daraltma Antalya',
    // Dikim
    'elbise dikimi Antalya', 'özel dikim Antalya', 'erkek takım elbise dikimi',
    'bayan elbise dikimi', 'çocuk kıyafet dikimi', 'abiye dikimi Antalya',
    'gelinlik dikimi Antalya', 'gömlek dikimi', 'pantolon dikimi',
    // Tadilat
    'kıyafet tadilatı Antalya', 'elbise tadilatı', 'gelinlik tadilatı Antalya',
    'abiye tadilatı', 'kıyafet tamiri Antalya',
    // Ütü/Temizlik
    'ütü hizmeti Antalya', 'kuru temizleme Antalya', 'profesyonel ütü',
    'otel ütü hizmeti', 'çamaşır ütüleme Antalya',
    // Mahalleler
    'Hurma terzi', 'Liman terzi', 'Sarısu terzi', 'Gürsu terzi', 'Uncalı terzi',
    // Tekstil/Seri
    'tekstil atölyesi Antalya', 'fason üretim Antalya', 'üniforma üretimi Antalya',
    'tişört dikimi', 'sweatshirt dikimi', 'seri imalat Antalya',
    // AI/multilang
    'tailor Antalya', 'alterations Antalya', 'dress maker Antalya',
    'портной Анталья', 'ателье Анталья', 'Schneider Antalya',
    // Intent
    'terzi çağır', 'eve gelen terzi', 'adrese gelen terzi Antalya',
    'terzi fiyatları 2026', 'en iyi terzi Antalya',
  ],
  authors: [{ name: BIZ, url: SITE }],
  creator: BIZ,
  publisher: 'SwapHubs',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  alternates: {
    canonical: SITE,
    languages: {
      'tr': SITE,
      'en': `${SITE}/en`,
      'ru': `${SITE}/ru`,
      'x-default': SITE,
    },
  },
  openGraph: {
    title: 'Terzi Can Antalya — Dikim, Tamir, Tadilat, Ütü | Konyaaltı',
    description: 'Antalya\'da profesyonel terzi hizmeti. Paça, fermuar, bel daraltma, özel dikim, gelinlik tadilatı, kuru temizleme. ☎ ' + PHONE,
    url: SITE, siteName: 'Terzi Hizmeti', locale: 'tr_TR',
    alternateLocale: ['en_US', 'ru_RU'],
    type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Terzi Can Antalya — Konyaaltı Terzi Atölyesi', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terzi Can Antalya | Dikim Tamir Tadilat Ütü',
    description: 'Konyaaltı terzi atölyesi. Paça, fermuar, bel daraltma, özel dikim. ☎ ' + PHONE,
    images: [OG],
  },
  other: {
    'geo.region': 'TR-07', 'geo.placename': 'Konyaaltı, Antalya',
    'geo.position': '36.8820;30.6980', 'ICBM': '36.8820, 30.6980',
    'contact': PHONE,
  },
  // ── Google Search Console doğrulama ──────────────────────────────
  verification: {
    google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ',
  },
};

// ─── JSON-LD — AI + Google için tam yapı ──────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE}#website`,
      name: 'Terzi Hizmeti — Terzi Can Antalya',
      url: SITE,
      inLanguage: ['tr', 'en', 'ru'],
      description: 'Antalya Konyaaltı\'da profesyonel terzi, dikim, tamir, tadilat ve ütü hizmeti.',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['LocalBusiness', 'ClothingStore'],
      additionalType: ['https://schema.org/SewingService', 'https://schema.org/DryCleaningService'],
      '@id': `${SITE}#business`,
      name: BIZ,
      alternateName: [
        'Terzi Can', 'Terzi Can Antalya', 'Konyaaltı Terzi',
        'Tailor Can Antalya', 'Портной Кан Анталья', 'Schneider Can Antalya',
        'Terzi Hizmeti Antalya', 'Dikiş Atölyesi Antalya',
      ],
      description:
        'Antalya Konyaaltı\'da 2017\'den bu yana hizmet veren profesyonel terzi atölyesi. Paça kısaltma, fermuar değişimi, bel daraltma, özel dikim, gelinlik tadilatı, tekstil imalatı ve kuru temizleme. Hurma, Liman, Sarısu, Gürsu, Uncalı bölgelerine hizmet.',
      url: SITE,
      telephone: PHONE_TEL,
      priceRange: '₺₺',
      currenciesAccepted: 'TRY, EUR, USD, RUB',
      paymentAccepted: 'Cash, Credit Card',
      image: OG,
      logo: `${SITE}/terzi-can-hero.jpg`,
      hasMap: MAPS,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Liman Mahallesi',
        addressLocality: 'Konyaaltı',
        addressRegion: 'Antalya',
        postalCode: '07070',
        addressCountry: 'TR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 36.8820, longitude: 30.6980 },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '09:00', closes: '19:00',
      }],
      areaServed: [
        'Liman, Konyaaltı', 'Hurma, Konyaaltı', 'Sarısu, Konyaaltı',
        'Gürsu, Konyaaltı', 'Uncalı, Konyaaltı',
        'Konyaaltı', 'Muratpaşa', 'Kepez', 'Antalya',
        'Lara', 'Belek', 'Kemer', 'Alanya', 'Manavgat',
      ].map(n => ({ '@type': 'Place', name: n })),
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: PHONE_TEL,
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: ['Turkish', 'English', 'Russian', 'German'],
      }],
      sameAs: [MAPS, `https://wa.me/${WA_NUM}`, 'https://swaphubs.com/terzi'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Terzi Can — Tüm Terzilik Hizmetleri 2026',
        itemListElement: [
          { '@type': 'Offer', name: 'Paça Kısaltma', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Paça Kısaltma — Pantolon, Etek, Kot', description: 'Erkek ve bayan pantolon, kot, etek kısaltma. Aynı gün teslim.' } },
          { '@type': 'Offer', name: 'Fermuar Değişimi', price: '200', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Fermuar Değişimi — Mont, Pantolon, Ceket', description: 'Her türlü kıyafette fermuar değişimi ve tamiri. Aynı gün teslim.' } },
          { '@type': 'Offer', name: 'Bel Daraltma', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Bel Daraltma — Elbise, Pantolon, Ceket', description: 'Elbise, pantolon ve ceketlerde bel daraltma.' } },
          { '@type': 'Offer', name: 'Elbise Dikimi', price: '600', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Özel Elbise Dikimi', description: 'Kadın, erkek ve çocuk kıyafetleri özel dikim.' } },
          { '@type': 'Offer', name: 'Gelinlik & Abiye Tadilatı', price: '400', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Gelinlik ve Abiye Tadilatı', description: 'Hassas daraltma, boy ayarı, detaylı onarım.' } },
          { '@type': 'Offer', name: 'Kuru Temizleme & Ütü', price: '80', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Kuru Temizleme ve Profesyonel Ütü', description: 'Buharlı ütü, kuru temizleme. Otel alım-teslimat.' } },
          { '@type': 'Offer', name: 'Üniforma Üretimi', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Üniforma ve Tekstil İmalatı', description: 'Otel, restoran, güvenlik, okul üniforma üretimi. Seri imalat.' } },
          { '@type': 'Offer', name: 'Eve Gelen Terzi', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Eve / Adrese Gelen Terzi Servisi', description: 'Yerinde ölçü alma ve adrese teslim. Hurma, Liman, Sarısu ücretsiz.' } },
        ],
      },
      knowsLanguage: ['tr', 'en', 'ru', 'de'],
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE}#webpage`,
      name: 'Terzi Can Antalya — Dikim, Tamir, Tadilat, Ütü Hizmeti',
      url: SITE,
      isPartOf: { '@id': `${SITE}#website` },
      about: { '@id': `${SITE}#business` },
      inLanguage: ['tr', 'en', 'ru'],
      datePublished: '2024-01-01',
      dateModified: TODAY,
      breadcrumb: { '@id': `${SITE}#breadcrumb` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#services','#faq','#hero-desc'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Terzi Hizmetleri', item: `${SITE}/#services` },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Antalya paça kısaltma fiyatı 2026 ne kadar?', acceptedAnswer: { '@type': 'Answer', text: `Konyaaltı Terzi Can'da paça kısaltma ₺150'den başlar. Aynı gün teslim. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Antalya fermuar değişimi kaç lira 2026?', acceptedAnswer: { '@type': 'Answer', text: `Pantolon/kot fermuarı ₺200, mont ₺300, ceket ₺200'den başlar. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Bel daraltma ve elbise daraltma fiyatı nedir?', acceptedAnswer: { '@type': 'Answer', text: `Bel daraltma ₺150'den başlar. Ceket ve pantolon daraltma da mevcuttur. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Hurma, Liman, Sarısu bölgesine terzi servisi var mı?', acceptedAnswer: { '@type': 'Answer', text: `Evet! Hurma, Liman ve Sarısu'ya ücretsiz terzi servisi. Adresinizden alıp 24 saatte teslim. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Gelinlik tadilatı yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: `Evet, gelinlik ve abiye tadilatında uzmanız. ₺400'den başlar. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Eve gelen terzi servisi var mı?', acceptedAnswer: { '@type': 'Answer', text: `Evet! Konyaaltı tüm mahallelerine araçlı terzi servisi. Yerinde ölçü alma ve adrese teslim. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Kuru temizleme ve ütü hizmeti fiyatı?', acceptedAnswer: { '@type': 'Answer', text: `Ütü ₺80/adet, kuru temizleme ₺300'den. Otel alım-teslimat. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'İngilizce veya Rusça hizmet veriyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: `Evet! We speak English, Russian and German. WhatsApp: ${PHONE}` } },
        { '@type': 'Question', name: 'Üniforma ve seri tekstil üretimi yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: `Evet, otel, restoran, güvenlik ve okul üniformaları ile fason tekstil üretimi yapıyoruz. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'What tailor services are available in Antalya?', acceptedAnswer: { '@type': 'Answer', text: `Terzi Can Antalya offers: alterations, dress making, zipper replacement, suit tailoring, dry cleaning & ironing, hem shortening, wedding dress alterations, mobile tailor service. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Есть ли портной в Анталье который говорит по-русски?', acceptedAnswer: { '@type': 'Answer', text: `Да! Terzi Can в Коньяалты обслуживает по-русски. Подгонка, ремонт, химчистка. ☎ ${PHONE}` } },
      ],
    },
    // AI için özel — Article şeması
    {
      '@type': 'Article',
      '@id': `${SITE}#article`,
      headline: 'Antalya\'da Terzi Hizmeti: Dikim, Tamir, Tadilat ve Ütü',
      description: 'Antalya Konyaaltı\'da profesyonel terzi atölyesi Terzi Can. Paça kısaltma, fermuar değişimi, bel daraltma, özel dikim, gelinlik tadilatı, kuru temizleme ve üniforma üretimi. 2017\'den bu yana hizmet.',
      datePublished: '2024-01-01',
      dateModified: TODAY,
      author: { '@type': 'Organization', name: BIZ, url: SITE },
      publisher: { '@type': 'Organization', name: BIZ, logo: { '@type': 'ImageObject', url: `${SITE}/terzi-can-hero.jpg` } },
      image: OG,
      about: { '@id': `${SITE}#business` },
      inLanguage: 'tr',
      keywords: 'terzi Antalya, paça kısaltma, fermuar değişimi, bel daraltma, elbise dikimi, tailor Antalya',
    },
  ],
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
// YENİ PALET: sıcak krem + orman yeşili + altın
// Psikoloji: krem=güven/sıcaklık, yeşil=kalite/doğallık/sürdürülebilirlik,
// altın=premium/terzilik/zanaat. Koyu değiller ferahlık ve okunabilirlik.
const C = {
  bg:    '#F8F5F0',  // sıcak krem — ana arka plan
  bg2:   '#F2EDE5',  // biraz daha koyu krem — section arka planı
  bg3:   '#EDE6DA',  // en koyu krem — vurgulu section
  bg4:   '#E8DFD0',  // en derin krem ton
  dark:  '#2C4A3E',  // orman yeşili — hero, CTA, nav
  dark2: '#1E3329',  // koyu yeşil
  dark3: '#3A5A4E',  // orta yeşil
  gold:  '#C9A96E',  // altın vurgu
  gold2: '#A8854A',  // koyu altın
  goldLight: 'rgba(201,169,110,.12)',
  border:  'rgba(44,74,62,.10)',
  border2: 'rgba(44,74,62,.18)',
  text:    '#1A1A1A',  // neredeyse siyah — ana metin
  text2:   '#2C4A3E',  // yeşil tonlu metin
  muted:   '#6B7057',  // zeytinimsi orta ton
  muted2:  '#9A9580',  // açık orta ton
  white:   '#FFFFFF',
};

const SERVICES = [
  { n:'01', title:'Paça Kısaltma', sub:'Pantolon · Etek · Kot', desc:'Erkek ve bayan pantolon, etek, kot paça kısaltma — temiz, görünmez dikiş.', price:'₺150+', time:'Aynı gün', wa:'Merhaba, paça kısaltma hakkında bilgi almak istiyorum.' },
  { n:'02', title:'Fermuar Değişimi', sub:'Pantolon · Mont · Ceket · Çanta', desc:'Pantolon, mont, ceket, sweatshirt ve çanta fermuar değişimi, sıkışan fermuar tamiri.', price:'₺200+', time:'Aynı gün', wa:'Merhaba, fermuar değişimi yaptırmak istiyorum.' },
  { n:'03', title:'Bel Daraltma', sub:'Elbise · Pantolon · Ceket', desc:'Elbise, pantolon ve ceketlerde bel daraltma, vücuda tam oturan ölçü ayarı.', price:'₺150+', time:'24 saat', wa:'Merhaba, bel daraltma hakkında bilgi almak istiyorum.' },
  { n:'04', title:'Elbise Dikimi', sub:'Kadın · Erkek · Çocuk', desc:'Kadın elbisesi, erkek takım elbise, gömlek — ölçünüze özel sıfırdan dikim.', price:'₺600+', time:'3–7 gün', wa:'Merhaba, özel elbise dikimi hakkında bilgi almak istiyorum.' },
  { n:'05', title:'Gelinlik & Abiye Tadilatı', sub:'Özel Gün Kıyafetleri', desc:'Özel gün kıyafetlerinde hassas daraltma, boy ayarı ve detaylı onarım.', price:'₺400+', time:'24–48 saat', wa:'Merhaba, gelinlik veya abiye tadilatı yaptırmak istiyorum.' },
  { n:'06', title:'Kuru Temizleme & Ütü', sub:'Profesyonel Bakım', desc:'Profesyonel kuru temizleme, buharlı ütü ve pres hizmeti. Otellerden alım.', price:'₺80+', time:'2–48 saat', wa:'Merhaba, kuru temizleme veya ütü hizmeti almak istiyorum.' },
  { n:'07', title:'Eve Gelen Terzi', sub:'Hurma · Liman · Sarısu Ücretsiz', desc:'Araçlı terzi servisi: adresinizde ölçü alma, dikip 24 saatte teslim.', price:'Ücretsiz', time:'24 saat', wa:'Merhaba, adresime terzi servisi almak istiyorum.' },
  { n:'08', title:'Üniforma & Seri İmalat', sub:'Otel · Restoran · Okul · Güvenlik', desc:'Toplu üniforma üretimi, fason tekstil, seri imalat ve nakış hizmeti.', price:'Teklif Al', time:'Proje bazlı', wa:'Merhaba, üniforma veya seri imalat hakkında bilgi almak istiyorum.' },
];

const DISTRICTS = [
  { name:'Hurma', free:true }, { name:'Liman', free:true }, { name:'Sarısu', free:true },
  { name:'Uncalı', free:false }, { name:'Çakırlar', free:false }, { name:'Gürsu', free:false },
  { name:'Öğretmenevleri', free:false }, { name:'Meltem', free:false }, { name:'Göbi', free:false },
  { name:'Arapsuyu', free:false }, { name:'Altınkum', free:false }, { name:'Konyaaltı Merkez', free:false },
];

const FAQS = [
  ['Paça kısaltma fiyatı 2026 ne kadar?','₺150\'den başlar. Aynı gün teslim.'],
  ['Fermuar değişimi kaç lira?','Pantolon/kot ₺200, mont ₺300\'den. Aynı gün.'],
  ['Hurma, Liman, Sarısu\'ya servis var mı?','Evet, bu 3 bölgeye ücretsiz alım-teslimat. WhatsApp\'tan yazın.'],
  ['Eve gelen terzi var mı?','Evet! Konyaaltı\'nın tüm mahallelerine araçlı terzi servisi.'],
  ['Gelinlik tadilatı yapıyor musunuz?','Evet, ₺400\'den. Detaylı prova ve hassas onarım.'],
  ['İngilizce/Rusça hizmet veriyor musunuz?','Yes! Russian & English available. WhatsApp: ' + PHONE],
];

export default function TerziHizmetiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ background: C.bg, color: C.text, fontFamily:"'Inter','Segoe UI',system-ui,sans-serif", lineHeight: 1.6, minHeight:'100vh' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Syne:wght@700;800&display=swap');
          *{box-sizing:border-box;margin:0;padding:0}
          .ff{font-family:'Syne',sans-serif}
          a{color:inherit;text-decoration:none}
          ::-webkit-scrollbar{width:3px}
          ::-webkit-scrollbar-thumb{background:#333}

          /* NAV */
          .nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:rgba(44,74,62,.97);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.08)}
          .nav-logo{font-family:'Syne',sans-serif;font-size:1rem;font-weight:800;color:#fff;letter-spacing:.04em;display:flex;align-items:center;gap:8px}
          .nav-dot{width:8px;height:8px;border-radius:50%;background:#C9A96E}
          .nav-wa{display:inline-flex;align-items:center;gap:8px;background:#C9A96E;color:#1E3329;font-weight:800;font-size:.8rem;padding:9px 16px;border-radius:4px;letter-spacing:.03em}

          /* HERO */
          .hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;padding:8rem 1.5rem 4rem;background:linear-gradient(160deg,#1E3329 0%,#2C4A3E 60%,#3A5A4E 100%)}
          .hero-bg{position:absolute;inset:0;z-index:0}
          .hero-bg-img{width:100%;height:100%;object-fit:cover;object-position:center 30%;filter:brightness(.58) saturate(.85)}
          .hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(30,51,41,.88) 0%,rgba(30,51,41,.45) 45%,rgba(30,51,41,.1) 100%)}
          .hero-content{position:relative;z-index:2;max-width:900px;margin:0 auto;width:100%}
          .hero-tag{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(201,169,110,.5);color:#C9A96E;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;font-weight:700;padding:6px 14px;border-radius:2px;margin-bottom:1.8rem}
          .hero h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,9vw,6rem);font-weight:800;line-height:1.0;letter-spacing:-.02em;margin-bottom:1.2rem}
          .hero h1 .accent{color:#C9A96E}
          .hero h1 .sub-line{display:block;font-size:clamp(1.8rem,5vw,3.5rem);color:rgba(255,255,255,.65);font-weight:600}
          .hero-desc{font-size:1.05rem;color:rgba(255,255,255,.65);max-width:580px;line-height:1.75;margin-bottom:2rem}
          .hero-desc strong{color:#fff}
          .hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:3rem}
          .btn-primary{display:inline-flex;align-items:center;gap:10px;background:#C9A96E;color:#1E3329;font-weight:800;font-size:.9rem;padding:14px 24px;border-radius:4px;letter-spacing:.02em;transition:all .2s}
          .btn-primary:hover{background:#B8955A;transform:translateY(-2px);box-shadow:0 8px 24px rgba(201,169,110,.35)}
          .btn-secondary{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);color:#fff;font-weight:600;font-size:.9rem;padding:14px 22px;border-radius:4px;border:1px solid rgba(255,255,255,.15);transition:all .2s}
          .btn-secondary:hover{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.3)}
          .hero-stats{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(201,169,110,.25);padding-top:1.8rem;gap:1rem}
          .stat-n{font-family:'Syne',sans-serif;font-size:1.7rem;font-weight:800;color:#C9A96E;display:block;line-height:1}
          .stat-l{font-size:.65rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.12em;margin-top:.3rem;display:block}

          /* TICKER */
          .ticker-wrap{background:#2C4A3E;padding:.55rem 0;overflow:hidden;white-space:nowrap}
          .ticker-inner{display:inline-flex;animation:ticker 30s linear infinite}
          .ticker-item{font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff;padding:0 2rem}
          .ticker-dot{color:rgba(255,255,255,.4);margin:0 .5rem}
          @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

          /* SECTION */
          .sec{padding:5rem 1.5rem}
          .ctr{max-width:980px;margin:0 auto}
          .eyebrow{font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#2C4A3E;font-weight:700;display:block;margin-bottom:.8rem}
          .sec-h{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;line-height:1.1;margin-bottom:.6rem;color:#1A1A1A}
          .sec-sub{font-size:.92rem;color:#6B7057;max-width:540px;line-height:1.75}
          .sec-head{margin-bottom:2.5rem}

          /* SERVICES */
          .svc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1px;background:rgba(255,255,255,.05)}
          .svc-card{background:#F2EDE5;padding:1.8rem;transition:background .2s;position:relative;overflow:hidden}
          .svc-card:hover{background:#EDE6DA}
          .svc-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#2C4A3E,#C9A96E);transform:scaleX(0);transform-origin:left;transition:transform .35s}
          .svc-card:hover::before{transform:scaleX(1)}
          .svc-n{font-family:'Syne',sans-serif;font-size:2.5rem;font-weight:800;color:rgba(44,74,62,.08);line-height:1;margin-bottom:.5rem}
          .svc-title{font-size:1.05rem;font-weight:700;color:#1A1A1A;margin-bottom:.2rem}
          .svc-sub{font-size:.7rem;color:#2C4A3E;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.7rem}
          .svc-desc{font-size:.83rem;color:#6B7057;line-height:1.65;margin-bottom:1.2rem}
          .svc-foot{display:flex;align-items:center;justify-content:space-between}
          .svc-price{font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;color:#2C4A3E}
          .svc-time{font-size:.68rem;color:#8FA88C;font-weight:600}
          .svc-btn{display:inline-block;font-size:.72rem;font-weight:700;color:#2C4A3E;border:1px solid rgba(44,74,62,.25);padding:.4rem 1rem;border-radius:2px;margin-top:.9rem;transition:all .2s}
          .svc-btn:hover{background:rgba(44,74,62,.08);border-color:#2C4A3E}

          /* DISTRICTS */
          .dist-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px}
          .dist-card{background:#EDE6DA;border:1px solid rgba(255,255,255,.06);border-radius:4px;padding:12px 14px;transition:all .2s}
          .dist-card.free{border-color:rgba(74,222,128,.2);background:rgba(74,222,128,.04)}
          .dist-card:hover{border-color:rgba(201,169,110,.4);transform:translateY(-2px)}
          .dist-name{font-size:.88rem;font-weight:700;color:#1A1A1A;display:block}
          .dist-tag{font-size:.62rem;color:#6B7057;text-transform:uppercase;letter-spacing:.08em;margin-top:.15rem;display:block}
          .dist-tag.free-tag{color:#2C4A3E;font-weight:700}

          /* FAQ */
          .faq-item{border-bottom:1px solid rgba(44,74,62,.1);padding:1.2rem 0}
          .faq-q{font-weight:700;font-size:.95rem;color:#1A1A1A;margin-bottom:.5rem;cursor:default}
          .faq-a{font-size:.83rem;color:#6B7057;line-height:1.65}

          /* CTA */
          .cta-final{background:linear-gradient(135deg,#2C4A3E 0%,#1E3329 100%);color:#fff;padding:4rem 1.5rem;text-align:center}
          .cta-h{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;margin-bottom:.7rem}
          .cta-sub{font-size:.95rem;color:rgba(255,255,255,.8);margin-bottom:2rem}
          .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
          .btn-white{display:inline-flex;align-items:center;gap:10px;background:#C9A96E;color:#1E3329;font-weight:800;font-size:.9rem;padding:14px 24px;border-radius:4px;transition:all .2s}
          .btn-white:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(201,169,110,.35)}
          .btn-outline-white{display:inline-flex;align-items:center;gap:10px;background:transparent;color:#fff;font-weight:700;font-size:.9rem;padding:14px 24px;border-radius:4px;border:2px solid rgba(255,255,255,.4);transition:all .2s}
          .btn-outline-white:hover{border-color:#C9A96E;color:#C9A96E;background:rgba(201,169,110,.08)}

          /* FLOAT */
          .float{position:fixed;bottom:20px;right:16px;z-index:99;display:flex;flex-direction:column;gap:10px}
          .fbtn{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem;box-shadow:0 4px 14px rgba(0,0,0,.4);transition:transform .2s}
          .fbtn:hover{transform:scale(1.1)}
          .fbtn-call{background:#2C4A3E;color:#fff}
          .fbtn-wa{background:#25D366;color:#fff}

          /* FOOTER */
          footer{background:#1E3329;border-top:1px solid rgba(201,169,110,.15);padding:2rem 1.5rem;text-align:center;font-size:.74rem;color:rgba(255,255,255,.5)}
          .foot-links{display:flex;justify-content:center;gap:1.2rem;flex-wrap:wrap;margin-top:.7rem}
          .foot-links a{color:rgba(255,255,255,.45);transition:color .2s}
          .foot-links a:hover{color:#C9A96E}

          @media(max-width:640px){
            .hero-stats{grid-template-columns:repeat(2,1fr)}
            .stat-n{font-size:1.4rem}
          }
          @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
        `}</style>

        {/* FLOATING */}
        <div className="float">
          <a href={`tel:${PHONE_TEL}`} className="fbtn fbtn-call" aria-label="Ara">📞</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="fbtn fbtn-wa" aria-label="WhatsApp">💬</a>
        </div>

        {/* NAV */}
        <nav className="nav" aria-label="Ana navigasyon">
          <div className="nav-logo">
            <span className="nav-dot" aria-hidden="true"/>
            TERZİ CAN
          </div>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">
            WHATSAPP →
          </a>
        </nav>

        {/* HERO */}
        <section className="hero" id="main" aria-labelledby="hero-h">
          <div className="hero-bg" aria-hidden="true">
            <img
              src="/terzi-can-hero.jpg"
              alt=""
              className="hero-bg-img"
              width={1024} height={1024}
            />
            <div className="hero-overlay"/>
          </div>

          <div className="hero-content">
            <span className="hero-tag">
              <span style={{width:6,height:6,borderRadius:'50%',background:'#C9A96E',display:'inline-block'}}/>
              Antalya · Konyaaltı Terzi Atölyesi
            </span>

            <h1 id="hero-h">
              Her Dikiş,
              <span className="accent"> Tam Ölçünüze</span>
              <span className="sub-line">Dikim · Tamir · Tadilat · Ütü</span>
            </h1>

            <p className="hero-desc" id="hero-desc">
              <strong>Terzi Can</strong> — Antalya'nın güvenilir terzi atölyesi.
              Paça kısaltmadan özel gün kıyafeti dikimine, dikim, tamir ve tadilat işlerinde
              profesyonel ve hızlı çözüm. Konyaaltı merkezli, tüm Antalya'ya hizmet.
              Hurma · Liman · Sarısu bölgesine <strong style={{color:'#8FA88C'}}>ücretsiz servis</strong>.
            </p>

            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                💬 WhatsApp'tan Yazın →
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">
                📞 {PHONE}
              </a>
            </div>

            <div className="hero-stats" aria-label="İstatistikler">
              {/* ✅ DÜZELTME: Sahte "4.9★ · 94 değerlendirme" kaldırıldı.
                  Gerçek Google Business Profile'da henüz yorum yok — yanıltıcı
                  rakam kullanmak Google'ın spam politikalarına aykırıdır ve
                  aggregateRating schema'sıyla da tutarsızlık yaratırdı.
                  Yerine doğrulanabilir, gerçek bilgiler kondu. */}
              {([
                ['2017\'den', 'Beri Hizmet', 'Konyaaltı\'da'],
                ['0–24s', 'Ekspres Teslim', 'Aynı gün'],
                ['Antalya', 'Tüm Bölgeler', 'Konyaaltı merkez'],
                ['%100', 'Şeffaf Fiyat', 'Sürpriz yok'],
              ] as [string,string,string][]).map(([n,l,d])=>(
                <div key={l}>
                  <span className="stat-n">{n}</span>
                  <span className="stat-l">{l}</span>
                  <span style={{fontSize:'.65rem',color:'rgba(255,255,255,.3)',display:'block',marginTop:'.1rem'}}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="ticker-wrap" aria-hidden="true">
          <div className="ticker-inner">
            {[...Array(2)].map((_,i)=>(
              <span key={i} style={{display:'inline-flex',alignItems:'center'}}>
                {['Paça Kısaltma','Fermuar Değişimi','Bel Daraltma','Elbise Dikimi','Gelinlik Tadilatı','Kuru Temizleme','Eve Gelen Terzi','Üniforma Üretimi','Tailor Antalya','Портной Анталья'].map(t=>(
                  <span key={t} className="ticker-item">{t}<span className="ticker-dot">✦</span></span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* SEO TEXT */}
        <div style={{background:C.bg2,padding:'2rem 1.5rem',borderBottom:`1px solid rgba(44,74,62,.10)`}}>
          <p style={{maxWidth:900,margin:'0 auto',fontSize:'.83rem',color:C.muted,lineHeight:1.9,textAlign:'center'}}>
            <strong style={{color:'#2C4A3E'}}>Terzi Can</strong>, Antalya'da kıyafet dikimi, tamiri ve tadilatı
            konusunda uzmanlaşmış profesyonel bir terzi atölyesidir. Paça kısaltma, fermuar değişimi,
            bel daraltma gibi günlük tadilat işlerinden; elbise dikimi, gelinlik ve abiye tadilatı gibi
            özel gün kıyafetlerine kadar geniş bir hizmet yelpazesi sunuyoruz. Konyaaltı merkezli
            atölyemiz tüm Antalya'ya — Hurma, Liman, Sarısu, Gürsu, Uncalı ve tüm ilçelere —
            hizmet vermektedir.
          </p>
        </div>

        {/* HİZMETLER */}
        <section className="sec" style={{background:C.bg,paddingTop:'4rem',paddingBottom:0}} id="services" aria-labelledby="svc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">HİZMETLERİMİZ</span>
              <h2 className="sec-h ff" id="svc-h">
                Terzilik, Giyim, Dikim<br/>ve Tadilat Hizmetleri
              </h2>
              <p className="sec-sub">
                Her türlü kıyafet için hızlı, kaliteli ve şeffaf fiyatlı terzi hizmeti.
              </p>
            </div>
          </div>
          <div className="svc-grid">
            {SERVICES.map(s=>(
              <div className="svc-card" key={s.n}>
                <div className="svc-n">{s.n}</div>
                <h3 className="svc-title">{s.title}</h3>
                <div className="svc-sub">{s.sub}</div>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-foot">
                  <span className="svc-price">{s.price}</span>
                  <span className="svc-time">⏱ {s.time}</span>
                </div>
                <a href={WA(s.wa)} target="_blank" rel="noopener noreferrer" className="svc-btn">
                  Sipariş Ver →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* SÜREÇ */}
        <section className="sec" style={{background:C.bg2}} aria-labelledby="proc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">SÜREÇ</span>
              <h2 className="sec-h ff" id="proc-h">Dört Adımda Terzi Hizmeti</h2>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'2rem'}}>
              {([
                ['01','WhatsApp\'tan Yazın','İhtiyacınızı ve kıyafetin fotoğrafını gönderin, 30 dakikada fiyat alın.'],
                ['02','Randevu Alın','Atölyeye gelin veya adresinize terzi servisi ayarlayın.'],
                ['03','Dikim & Tadilat','Kıyafetiniz uzman ellerimizde işlenir. Gerekirse prova yapılır.'],
                ['04','Teslim Alın','Ütülenmiş, giyime hazır kıyafetinizi teslim alın ya da adresinize getirelim.'],
              ] as [string,string,string][]).map(([n,t,d])=>(
                <div key={n} style={{paddingTop:'1.5rem',borderTop:`2px solid ${n==='01'?'#C9A96E':'rgba(44,74,62,.12)'}`,transition:'border-color .2s'}}>
                  <div style={{fontFamily:'Syne,sans-serif',fontSize:'2.5rem',fontWeight:800,color:'rgba(44,74,62,.12)',lineHeight:1,marginBottom:'.5rem'}}>{n}</div>
                  <h3 style={{fontWeight:700,fontSize:'1rem',color:'#1A1A1A',marginBottom:'.5rem'}}>{t}</h3>
                  <p style={{fontSize:'.83rem',color:'#6B7057',lineHeight:1.65}}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAHALLELER */}
        <section className="sec" style={{background:C.bg}} aria-labelledby="dist-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">📍 HİZMET BÖLGELERİ</span>
              <h2 className="sec-h ff" id="dist-h">
                Konyaaltı'nın Tüm<br/>Mahallelerinde Terzi
              </h2>
              <p className="sec-sub">
                Hurma, Sarısu ve Liman'a <strong style={{color:'#8FA88C'}}>ücretsiz</strong> alım-teslimat.
                Diğer tüm mahallelere nominal ücretle kapıdan kapıya servis.
              </p>
            </div>
            <div className="dist-grid">
              {DISTRICTS.map(d=>(
                <div key={d.name} className={`dist-card${d.free?' free':''}`}>
                  <span className="dist-name">{d.name}</span>
                  <span className={`dist-tag${d.free?' free-tag':''}`}>
                    {d.free?'✅ Ücretsiz Servis':'Terzi Servisi'}
                  </span>
                </div>
              ))}
            </div>
            <p style={{marginTop:'1.2rem',fontSize:'.8rem',color:C.muted}}>
              Mahalleniz listede yok mu?{' '}
              <a href={WA('Merhaba, bulunduğum bölgeye terzi servisi var mı?')} target="_blank" rel="noopener noreferrer" style={{color:'#2C4A3E',fontWeight:700}}>
                WhatsApp'tan sorun →
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" style={{background:C.bg3}} id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{maxWidth:720}}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Sık Sorulan Sorular</h2>
            </div>
            {FAQS.map(([q,a])=>(
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Terziniz Kapınızda,<br/>Kıyafetiniz 24 Saatte Hazır</h2>
          <p className="cta-sub">
            Hurma · Sarısu · Liman bölgesine ücretsiz servis.<br/>
            WhatsApp'tan yazın, terzimiz adresinize gelsin.
          </p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Konyaaltı, Antalya · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer bağlantılar">
            <a href="/antalya-terzi">Antalya Geneli Hizmet →</a>
            <a href="https://swaphubs.com/terzi">SwapHubs Terzi</a>
            <a href="https://swaphubs.com/online-tailor-service">Online Tailor (EN)</a>
            <a href="https://swaphubs.com/ru/atelie-antalya">Ателье (RU)</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
          {/* AI discovery için yapısal metin */}
          <p style={{marginTop:'1rem',fontSize:'.65rem',color:'rgba(255,255,255,.1)',lineHeight:1.8}}>
            Terzi Can — Antalya Konyaaltı terzi atölyesi. Paça kısaltma ₺150, fermuar değişimi ₺200,
            bel daraltma ₺150, elbise dikimi ₺600, gelinlik tadilatı ₺400. Hurma Liman Sarısu ücretsiz servis.
            Tailor Antalya. Портной Анталья. Schneider Antalya. {PHONE}
          </p>
        </footer>
      </div>
    </>
  );
}
