import type { Metadata } from 'next';

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const SITE      = 'https://www.terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/antalya-terzi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, terzi ve tekstil atölyesi hizmetleriniz hakkında bilgi almak istiyorum.');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const BIZ       = 'Konyaaltı Terzi - Terzi Dikim Tamir Tadilat';
const TODAY     = new Date().toISOString().split('T')[0];
const OG        = `${SITE}/terzi-can-hero.png`;

// ─── METADATA ─────────────────────────────────────────────────────────────────
// Bu sayfa ana sayfadan bilinçli olarak farklı kurgulandı: dikiş atölyesi +
// fason imalat + üniforma + Konyaaltı mahalle öncelikli yapı + TR/EN başlık.
// Ana sayfa "Konyaaltı merkezli genel terzi" derken, bu sayfa "Antalya geneli
// tekstil atölyesi ve toplu üretim" niyetini hedefliyor — farklı arama amacı.
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Konyaaltı Tailor Service — Antalya Terzi, Dikim Atölyesi, Fason İmalat',
  description:
    'Konyaaltı Hurma, Liman, Sarısu, Uncalı, Gürsu, Öğretmenevleri, Ahatlı, Toros mahallelerinde terzi ve dikiş atölyesi. Bay, bayan, çocuk kıyafet dikimi, üniforma üretimi, fason imalat. Antalya\'nın tüm ilçelerine hizmet. ☎ ' + PHONE,
  keywords: [
    // Konyaaltı mahalle öncelikli
    'Hurma terzi Konyaaltı', 'Liman terzi Konyaaltı', 'Sarısu terzi Konyaaltı',
    'Uncalı terzi', 'Gürsu terzi', 'Öğretmenevleri terzi', 'Ahatlı terzi', 'Toros terzi',
    'Konyaaltı dikiş atölyesi', 'Konyaaltı tekstil atölyesi',
    // Tailor / EN
    'Konyaaltı tailor service', 'Antalya tailor', 'tailor service Antalya',
    'dress design workshop Antalya', 'custom tailoring Antalya', 'uniform manufacturer Antalya',
    // Atölye / tasarım / fason
    'dikim tasarım atölyesi Antalya', 'fason imalat Antalya', 'fason üretim Konyaaltı',
    'toplu üretim tekstil Antalya', 'numune dikim Antalya', 'kalıp çıkarma Antalya',
    // Bay/bayan/çocuk
    'bay kıyafet dikimi Antalya', 'bayan kıyafet dikimi Antalya', 'çocuk kıyafet dikimi Antalya',
    'erkek terzi Konyaaltı', 'kadın terzi Konyaaltı', 'çocuk terzi Antalya',
    // Üniforma
    'üniforma üretimi Antalya', 'okul üniforma dikimi', 'otel üniforma Antalya',
    'iş kıyafeti dikimi Antalya', 'kurumsal kıyafet üretimi',
    // Genel terzi
    'terzi Antalya', 'terzi dikim tamir tadilat Antalya', 'Antalya terzi ilçeler',
    'tüm Antalya terzi hizmeti', "Antalya'nın her ilçesine terzi",
    // Dikim / Tamir / Tadilat / Ütü — fiyat odaklı
    'dikim fiyatları Antalya 2026', 'tamir fiyatları Antalya', 'tadilat fiyatları Antalya',
    'paça kısaltma fiyatı Konyaaltı', 'bel daraltma fiyatı Antalya',
    'fermuar değişimi fiyatı Antalya', 'ütü fiyatı Antalya', 'kuru temizleme fiyatı Konyaaltı',
    'kıyafet tamiri Antalya', 'elbise tadilatı fiyatı', 'gelinlik tadilatı fiyatı Antalya',
    // İlçeler
    'Muratpaşa terzi', 'Kepez terzi', 'Lara terzi', 'Alanya terzi', 'Manavgat terzi',
    'Döşemealtı terzi', 'Serik terzi', 'Kemer terzi',
    // Diğer diller
    'портной Анталья Коньяалты', 'Schneider Antalya Konyaaltı',
  ],
  authors: [{ name: BIZ, url: SITE }],
  creator: BIZ,
  publisher: 'SwapHubs',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Konyaaltı Tailor Service — Terzi, Dikim Atölyesi, Fason İmalat',
    description: 'Hurma, Liman, Sarısu, Uncalı, Gürsu mahalleleri öncelikli. Bay, bayan, çocuk kıyafet dikimi, üniforma, fason imalat. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Konyaaltı Tailor Service — Terzi ve Dikiş Atölyesi', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konyaaltı Tailor Service — Terzi & Dikim Atölyesi',
    description: 'Hurma, Liman, Sarısu mahalleleri öncelikli terzi ve tekstil atölyesi hizmeti.',
    images: [OG],
  },
  other: {
    'geo.region': 'TR-07', 'geo.placename': 'Konyaaltı, Antalya',
    'geo.position': '36.8841;30.6980', 'ICBM': '36.8841, 30.6980',
    'contact': PHONE,
  },
  verification: {
    google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ',
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Konyaaltı Tailor Service — Terzi, Dikim Atölyesi, Fason İmalat',
      description: 'Konyaaltı mahalleleri öncelikli terzi ve dikiş atölyesi. Bay, bayan, çocuk kıyafet dikimi, üniforma üretimi, fason imalat. Antalya\'nın tüm ilçelerine hizmet.',
      inLanguage: 'tr',
      isPartOf: { '@id': `${SITE}#website` },
      about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      datePublished: '2026-08-01',
      dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Konyaaltı Tailor Service', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Terzi, Dikim Atölyesi, Fason İmalat ve Üniforma Üretimi',
      provider: { '@id': `${SITE}#business` },
      areaServed: [
        'Hurma, Konyaaltı', 'Liman, Konyaaltı', 'Sarısu, Konyaaltı', 'Uncalı, Konyaaltı',
        'Gürsu, Konyaaltı', 'Öğretmenevleri, Konyaaltı', 'Ahatlı, Konyaaltı', 'Toros, Konyaaltı',
        'Konyaaltı', 'Muratpaşa', 'Kepez', 'Döşemealtı', 'Aksu', 'Serik',
        'Lara', 'Alanya', 'Manavgat', 'Kemer', 'Antalya',
      ].map(n => ({ '@type': 'Place', name: n })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Dikim, Tasarım ve Fason İmalat Hizmetleri',
        itemListElement: [
          { '@type': 'Offer', name: 'Bay Kıyafet Dikimi', itemOffered: { '@type': 'Service', name: 'Erkek gömlek, pantolon, ceket, takım elbise dikimi', description: 'Ölçüye özel erkek kıyafet tasarımı ve dikimi.' } },
          { '@type': 'Offer', name: 'Bayan Kıyafet Dikimi', itemOffered: { '@type': 'Service', name: 'Kadın elbise, bluz, etek, abiye dikimi', description: 'Ölçüye özel kadın kıyafeti tasarım ve dikim.' } },
          { '@type': 'Offer', name: 'Çocuk Kıyafeti Dikimi', itemOffered: { '@type': 'Service', name: 'Çocuk ve bebek kıyafeti dikimi', description: 'Okul kıyafeti, günlük giyim, özel gün kıyafeti.' } },
          { '@type': 'Offer', name: 'Üniforma Üretimi', itemOffered: { '@type': 'Service', name: 'Kurumsal ve okul üniforma üretimi', description: 'Otel, restoran, okul, güvenlik, sağlık sektörü üniforma tasarımı ve toplu üretimi.' } },
          { '@type': 'Offer', name: 'Fason İmalat', itemOffered: { '@type': 'Service', name: 'Fason tekstil üretimi ve toplu imalat', description: 'Marka ve işletmeler için numune dikimi, kalıp çıkarma, seri üretim.' } },
          { '@type': 'Offer', name: 'Dikim Tasarım Atölyesi', itemOffered: { '@type': 'Service', name: 'Özel tasarım ve model geliştirme', description: 'Sıfırdan model tasarımı, prototip dikimi, kumaş danışmanlığı.' } },
          // Dikim · Tamir · Tadilat · Ütü — fiyatlı hizmetler
          { '@type': 'Offer', name: 'Erkek Gömlek Dikimi', price: '350', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Erkek Gömlek Dikimi' } },
          { '@type': 'Offer', name: 'Kadın Elbise Dikimi', price: '600', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Kadın Elbise Dikimi' } },
          { '@type': 'Offer', name: 'Fermuar Değişimi', price: '200', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Fermuar Değişimi — Pantolon, Mont, Ceket' } },
          { '@type': 'Offer', name: 'Paça Kısaltma', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Paça Kısaltma — Pantolon, Kot, Etek' } },
          { '@type': 'Offer', name: 'Bel Daraltma', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Bel Daraltma' } },
          { '@type': 'Offer', name: 'Gelinlik & Abiye Tadilatı', price: '400', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Gelinlik ve Abiye Tadilatı' } },
          { '@type': 'Offer', name: 'Ütü Hizmeti', price: '80', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Profesyonel Ütü (adet)' } },
          { '@type': 'Offer', name: 'Kuru Temizleme', price: '300', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Kuru Temizleme (Elbise)' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Konyaaltı Hurma, Liman, Sarısu mahallelerine terzi hizmeti var mı?', acceptedAnswer: { '@type': 'Answer', text: `Evet, atölyemiz bu mahallelere en yakın konumda. Hurma, Liman ve Sarısu'ya ücretsiz adrese gelen servis sağlıyoruz. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Uncalı, Gürsu, Öğretmenevleri, Ahatlı, Toros mahallelerine hizmet veriyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, Konyaaltı\'nın tüm mahallelerine — Uncalı, Gürsu, Öğretmenevleri, Ahatlı, Toros dahil — randevulu adrese gelen terzi servisi veriyoruz.' } },
        { '@type': 'Question', name: 'Bay, bayan ve çocuk kıyafeti dikimi yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, erkek, kadın ve çocuk kıyafetlerinin tamamında özel ölçü dikim hizmeti veriyoruz. Gömlek, pantolon, elbise, ceket, okul kıyafeti dahil.' } },
        { '@type': 'Question', name: 'Üniforma üretimi ve toplu sipariş alıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, otel, restoran, okul, güvenlik ve sağlık sektörü için üniforma tasarımı ve toplu üretimi yapıyoruz. Fason imalat da mevcuttur.' } },
        { '@type': 'Question', name: 'Fason imalat için minimum sipariş adedi var mı?', acceptedAnswer: { '@type': 'Answer', text: 'Fason imalat siparişleri proje bazında değerlendirilir. Numune dikimi, kalıp çıkarma ve seri üretim için WhatsApp\'tan detaylı bilgi alabilirsiniz.' } },
        { '@type': 'Question', name: 'Dikim tasarım atölyesi hizmeti nedir?', acceptedAnswer: { '@type': 'Answer', text: 'Sıfırdan kıyafet tasarımı, model geliştirme, prototip dikimi ve kumaş danışmanlığı sunuyoruz. Kendi tasarımınızı hayata geçirmek için bize ulaşabilirsiniz.' } },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const NEIGHBORHOODS = [
  { name: 'Hurma', tag: 'Öncelikli', note: 'Atölyeye en yakın — ücretsiz adrese servis', priority: true },
  { name: 'Liman', tag: 'Öncelikli', note: 'Ücretsiz adrese servis, aynı gün randevu', priority: true },
  { name: 'Sarısu', tag: 'Öncelikli', note: 'Ücretsiz adrese servis', priority: true },
  { name: 'Uncalı', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
  { name: 'Gürsu', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
  { name: 'Öğretmenevleri', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
  { name: 'Ahatlı', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
  { name: 'Toros', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
];

const OTHER_DISTRICTS = [
  'Muratpaşa', 'Kepez', 'Döşemealtı', 'Aksu', 'Lara', 'Serik', 'Kemer', 'Alanya', 'Manavgat',
];

const WORKSHOP_SERVICES = [
  {
    icon: '👔', tr: 'Bay Kıyafet Dikimi', en: "Men's Tailoring",
    desc: 'Erkek gömlek, pantolon, ceket, takım elbise. Ölçüye özel dikim ve tasarım.',
    items: ['Gömlek', 'Pantolon', 'Ceket', 'Takım Elbise', 'Damatlık'],
  },
  {
    icon: '👗', tr: 'Bayan Kıyafet Dikimi', en: "Women's Tailoring",
    desc: 'Kadın elbise, bluz, etek, abiye. Kişiye özel model ve ölçü.',
    items: ['Elbise', 'Bluz', 'Etek', 'Abiye', 'Gelinlik'],
  },
  {
    icon: '🧸', tr: 'Çocuk Kıyafeti Dikimi', en: "Children's Clothing",
    desc: 'Çocuk ve bebek kıyafeti, okul kıyafeti, özel gün dikimi.',
    items: ['Okul Kıyafeti', 'Günlük Giyim', 'Özel Gün', 'Bebek Kıyafeti'],
  },
  {
    icon: '🏨', tr: 'Üniforma Üretimi', en: 'Uniform Manufacturing',
    desc: 'Otel, restoran, okul, güvenlik, sağlık sektörü için toplu üniforma üretimi.',
    items: ['Otel', 'Restoran', 'Okul', 'Güvenlik', 'Sağlık'],
  },
  {
    icon: '🏭', tr: 'Fason İmalat', en: 'Contract Manufacturing',
    desc: 'Marka ve işletmeler için numune dikimi, kalıp çıkarma, seri üretim.',
    items: ['Numune Dikimi', 'Kalıp Çıkarma', 'Seri Üretim', 'Toplu Sipariş'],
  },
  {
    icon: '✏️', tr: 'Dikim Tasarım Atölyesi', en: 'Design Workshop',
    desc: 'Sıfırdan model tasarımı, prototip dikimi, kumaş danışmanlığı.',
    items: ['Model Tasarımı', 'Prototip', 'Kumaş Danışmanlığı'],
  },
];

// ─── DİKİM · TAMİR · TADİLAT · ÜTÜ — fiyat listesi (TR / EN / RU) ─────────────
// Üç dilde başlık + açıklama + hizmet adları. Fiyat değerleri ortak (₺),
// para birimi etiketleri dile göre kısa notla belirtiliyor.
type Lang = 'tr' | 'en' | 'ru';

const LANG_LABELS: Record<Lang, { name: string; flag: string; note: string }> = {
  tr: { name: 'Türkçe', flag: '🇹🇷', note: 'Fiyatlar başlangıç fiyatıdır, kumaş ve işçilik durumuna göre değişebilir. KDV dahildir.' },
  en: { name: 'English', flag: '🇬🇧', note: 'Prices are starting prices and may vary depending on fabric and workmanship. VAT included.' },
  ru: { name: 'Русский', flag: '🇷🇺', note: 'Цены указаны от, могут меняться в зависимости от ткани и сложности работы. НДС включён.' },
};

const REPAIR_CATEGORIES: Record<Lang, {
  icon: string; title: string; keyword: string; desc: string; rows: [string, string][];
}[]> = {
  tr: [
    {
      icon: '✂️', title: 'Dikim Hizmetleri',
      keyword: 'terzi dikim Antalya · özel ölçü dikim Konyaaltı',
      desc: 'Sıfırdan kıyafet dikimi. Bay, bayan, çocuk — ölçünüze özel tasarım ve üretim.',
      rows: [
        ['Erkek Gömlek Dikimi', '₺350+'],
        ['Erkek Pantolon Dikimi', '₺400+'],
        ['Kadın Elbise Dikimi', '₺600+'],
        ['Abiye / Özel Gün Dikimi', '₺900+'],
        ['Çocuk Kıyafeti Dikimi', '₺250+'],
      ],
    },
    {
      icon: '🔧', title: 'Tamir Hizmetleri',
      keyword: 'kıyafet tamiri Antalya · fermuar tamiri Konyaaltı',
      desc: 'Yırtık, sökük, fermuar, düğme — günlük giyimde en sık ihtiyaç duyulan onarımlar.',
      rows: [
        ['Fermuar Değişimi (Pantolon/Kot)', '₺200+'],
        ['Fermuar Değişimi (Mont/Ceket)', '₺300+'],
        ['Yırtık / Sökük Onarımı', '₺150+'],
        ['Düğme, Kopça, Fitil Tamiri', '₺60+'],
        ['Astar Değişimi', '₺300+'],
      ],
    },
    {
      icon: '📏', title: 'Tadilat Hizmetleri',
      keyword: 'paça kısaltma Antalya · bel daraltma Konyaaltı',
      desc: 'Kıyafetinizi vücudunuza tam oturtan hassas ölçü ayarları.',
      rows: [
        ['Paça Kısaltma (Pantolon/Kot/Etek)', '₺150+'],
        ['Bel Daraltma', '₺150+'],
        ['Kol Kısaltma', '₺200+'],
        ['Elbise / Ceket Daraltma', '₺200+'],
        ['Gelinlik & Abiye Tadilatı', '₺400+'],
      ],
    },
    {
      icon: '🧺', title: 'Ütü & Kuru Temizleme',
      keyword: 'ütü hizmeti Antalya · kuru temizleme Konyaaltı',
      desc: 'Profesyonel buharlı ütü ve kuru temizleme. Otel ve adreslerden alım-teslimat.',
      rows: [
        ['Ütü (adet)', '₺80+'],
        ['Kuru Temizleme (Elbise)', '₺300+'],
        ['Kuru Temizleme (Mont/Kaban)', '₺500+'],
        ['Çamaşır & Ütü (kg)', '₺80+/kg'],
      ],
    },
  ],
  en: [
    {
      icon: '✂️', title: 'Tailoring Services',
      keyword: 'tailor Antalya · custom-fit sewing Konyaaltı',
      desc: 'Made-from-scratch garments. Men, women, children — designed and sewn to your exact measurements.',
      rows: [
        ["Men's Shirt Tailoring", '₺350+'],
        ["Men's Trousers Tailoring", '₺400+'],
        ["Women's Dress Making", '₺600+'],
        ['Evening Gown / Special Occasion', '₺900+'],
        ["Children's Clothing", '₺250+'],
      ],
    },
    {
      icon: '🔧', title: 'Repair Services',
      keyword: 'clothing repair Antalya · zipper repair Konyaaltı',
      desc: 'Tears, seams, zippers, buttons — the everyday fixes clothing needs most.',
      rows: [
        ['Zipper Replacement (Trousers/Jeans)', '₺200+'],
        ['Zipper Replacement (Coat/Jacket)', '₺300+'],
        ['Tear / Seam Repair', '₺150+'],
        ['Button, Hook, Snap Repair', '₺60+'],
        ['Lining Replacement', '₺300+'],
      ],
    },
    {
      icon: '📏', title: 'Alterations',
      keyword: 'hemming Antalya · waist taking in Konyaaltı',
      desc: 'Precise fit adjustments so your clothing sits exactly right on your body.',
      rows: [
        ['Hemming (Trousers/Jeans/Skirt)', '₺150+'],
        ['Waist Taking In', '₺150+'],
        ['Sleeve Shortening', '₺200+'],
        ['Dress / Jacket Taking In', '₺200+'],
        ['Wedding & Evening Dress Alterations', '₺400+'],
      ],
    },
    {
      icon: '🧺', title: 'Ironing & Dry Cleaning',
      keyword: 'ironing service Antalya · dry cleaning Konyaaltı',
      desc: 'Professional steam ironing and dry cleaning. Pickup and delivery from hotels and addresses.',
      rows: [
        ['Ironing (per item)', '₺80+'],
        ['Dry Cleaning (Dress)', '₺300+'],
        ['Dry Cleaning (Coat)', '₺500+'],
        ['Laundry & Ironing (per kg)', '₺80+/kg'],
      ],
    },
  ],
  ru: [
    {
      icon: '✂️', title: 'Пошив одежды',
      keyword: 'портной Анталья · пошив по меркам Коньяалты',
      desc: 'Пошив одежды с нуля. Мужская, женская, детская — по индивидуальным меркам.',
      rows: [
        ['Пошив мужской рубашки', '₺350+'],
        ['Пошив мужских брюк', '₺400+'],
        ['Пошив женского платья', '₺600+'],
        ['Вечернее / праздничное платье', '₺900+'],
        ['Пошив детской одежды', '₺250+'],
      ],
    },
    {
      icon: '🔧', title: 'Ремонт одежды',
      keyword: 'ремонт одежды Анталья · ремонт молнии Коньяалты',
      desc: 'Разрывы, швы, молнии, пуговицы — самый частый ремонт повседневной одежды.',
      rows: [
        ['Замена молнии (брюки/джинсы)', '₺200+'],
        ['Замена молнии (пальто/куртка)', '₺300+'],
        ['Ремонт разрыва / шва', '₺150+'],
        ['Ремонт пуговиц, крючков, кнопок', '₺60+'],
        ['Замена подкладки', '₺300+'],
      ],
    },
    {
      icon: '📏', title: 'Подгонка одежды',
      keyword: 'укорачивание брюк Анталья · заужение талии Коньяалты',
      desc: 'Точная подгонка по фигуре — чтобы одежда сидела идеально.',
      rows: [
        ['Укорачивание (брюки/джинсы/юбка)', '₺150+'],
        ['Заужение талии', '₺150+'],
        ['Укорачивание рукавов', '₺200+'],
        ['Заужение платья / пиджака', '₺200+'],
        ['Подгонка свадебного/вечернего платья', '₺400+'],
      ],
    },
    {
      icon: '🧺', title: 'Глажка и химчистка',
      keyword: 'глажка Анталья · химчистка Коньяалты',
      desc: 'Профессиональная паровая глажка и химчистка. Забор и доставка из отеля или по адресу.',
      rows: [
        ['Глажка (за вещь)', '₺80+'],
        ['Химчистка (платье)', '₺300+'],
        ['Химчистка (пальто)', '₺500+'],
        ['Стирка и глажка (за кг)', '₺80+/кг'],
      ],
    },
  ],
};



const FAQS: [string, string][] = [
  ['Hurma, Liman, Sarısu mahallelerine ücretsiz servis var mı?', 'Evet, atölyemize en yakın bu üç mahalleye ücretsiz adrese gelen terzi servisi sağlıyoruz.'],
  ['Uncalı, Gürsu, Öğretmenevleri, Ahatlı, Toros\'a hizmet var mı?', 'Evet, bu mahallelere randevulu adrese gelen servis veriyoruz.'],
  ['Bay, bayan, çocuk kıyafeti dikiyor musunuz?', 'Evet, erkek, kadın ve çocuk kıyafetlerinde özel ölçü dikim hizmeti sunuyoruz.'],
  ['Üniforma üretimi ve toplu sipariş alıyor musunuz?', 'Evet, otel, okul, restoran ve kurumlar için üniforma tasarımı ve toplu üretim yapıyoruz.'],
  ['Fason imalat yapıyor musunuz?', 'Evet, markalar ve işletmeler için numune dikimi, kalıp çıkarma ve seri üretim hizmeti veriyoruz.'],
  ['Diğer Antalya ilçelerine hizmet var mı?', 'Evet, Muratpaşa, Kepez, Lara, Alanya, Manavgat dahil tüm Antalya\'ya kargo veya randevulu servisle ulaşıyoruz.'],
];

export default function KonyaaltiTailorServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", lineHeight: 1.6, minHeight: '100vh' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Syne:wght@700;800&display=swap');
          *{box-sizing:border-box;margin:0;padding:0}
          .ff{font-family:'Syne',sans-serif}
          a{color:inherit;text-decoration:none}

          .nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:rgba(30,51,41,.94);backdrop-filter:blur(12px);border-bottom:1px solid rgba(201,169,110,.15)}
          .nav-logo{font-family:'Syne',sans-serif;font-size:1rem;font-weight:800;color:#fff;letter-spacing:.04em;display:flex;align-items:center;gap:8px}
          .nav-dot{width:8px;height:8px;border-radius:50%;background:#C9A96E}
          .nav-wa{display:inline-flex;align-items:center;gap:8px;background:#C9A96E;color:#1E3329;font-weight:800;font-size:.8rem;padding:9px 16px;border-radius:4px}
          .nav-home{font-size:.78rem;color:rgba(255,255,255,.55)}

          .hero{padding:8rem 1.5rem 3rem;position:relative;overflow:hidden;background:linear-gradient(160deg,#1E3329 0%,#2C4A3E 100%)}
          .hero-bg{position:absolute;inset:0;z-index:0}
          .hero-bg-img{width:100%;height:100%;object-fit:cover;object-position:center 15%;filter:brightness(.32) saturate(.75)}
          .hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(30,51,41,.94) 0%,rgba(30,51,41,.72) 55%,rgba(30,51,41,.4) 100%)}
          .hero-content{position:relative;z-index:2;max-width:920px;margin:0 auto}
          .hero-tag{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(201,169,110,.5);color:#C9A96E;font-size:.63rem;letter-spacing:.14em;text-transform:uppercase;font-weight:700;padding:6px 14px;border-radius:2px;margin-bottom:1.4rem}
          .hero-eng{font-family:'Syne',sans-serif;font-size:.85rem;font-weight:700;color:rgba(201,169,110,.85);letter-spacing:.06em;margin-bottom:.6rem;display:block}
          .hero h1{font-family:'Syne',sans-serif;font-size:clamp(2rem,6.4vw,3.8rem);font-weight:800;line-height:1.08;letter-spacing:-.02em;margin-bottom:1rem}
          .hero h1 .accent{color:#C9A96E}
          .hero-desc{font-size:.98rem;color:rgba(255,255,255,.72);max-width:660px;line-height:1.8;margin-bottom:1.6rem}
          .hero-btns{display:flex;gap:12px;flex-wrap:wrap}
          .btn-primary{display:inline-flex;align-items:center;gap:10px;background:#C9A96E;color:#1E3329;font-weight:800;font-size:.86rem;padding:13px 22px;border-radius:4px;transition:all .2s}
          .btn-primary:hover{background:#B8955A;transform:translateY(-2px)}
          .btn-secondary{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);color:#fff;font-weight:600;font-size:.86rem;padding:13px 20px;border-radius:4px;border:1px solid rgba(255,255,255,.15)}

          .sec{padding:4rem 1.5rem}
          .ctr{max-width:1000px;margin:0 auto}
          .eyebrow{font-size:.63rem;letter-spacing:.18em;text-transform:uppercase;color:#C9A96E;font-weight:700;display:block;margin-bottom:.7rem}
          .sec-h{font-family:'Syne',sans-serif;font-size:clamp(1.5rem,3.4vw,2.3rem);font-weight:800;line-height:1.18;margin-bottom:.5rem;color:#fff}
          .sec-sub{font-size:.86rem;color:rgba(255,255,255,.55);max-width:600px;line-height:1.7}
          .sec-head{margin-bottom:2.2rem}

          /* MAHALLE ÖNCELİKLİ GRID */
          .nb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px}
          .nb-card{background:rgba(255,255,255,.04);border:1px solid rgba(201,169,110,.14);border-radius:8px;padding:16px 18px;transition:border-color .2s}
          .nb-card.priority{background:rgba(201,169,110,.1);border-color:rgba(201,169,110,.4)}
          .nb-card:hover{border-color:rgba(201,169,110,.5)}
          .nb-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:.4rem}
          .nb-name{font-size:1rem;font-weight:700;color:#fff}
          .nb-tag{font-size:.58rem;text-transform:uppercase;letter-spacing:.06em;font-weight:700;padding:2px 8px;border-radius:20px}
          .nb-tag.oncelikli{background:rgba(201,169,110,.25);color:#C9A96E}
          .nb-tag.yakin{background:rgba(143,168,140,.2);color:#8FA88C}
          .nb-note{font-size:.76rem;color:rgba(255,255,255,.5);line-height:1.5}

          .other-districts{display:flex;flex-wrap:wrap;gap:8px;margin-top:1.4rem}
          .od-chip{font-size:.78rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.65);padding:6px 14px;border-radius:20px}

          /* ATÖLYE HİZMETLERİ */
          .wk-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px}
          .wk-card{background:rgba(255,255,255,.03);border:1px solid rgba(201,169,110,.12);border-radius:10px;padding:1.6rem;transition:border-color .2s}
          .wk-card:hover{border-color:rgba(201,169,110,.35)}
          .wk-icon{font-size:1.7rem;margin-bottom:.7rem}
          .wk-tr{font-weight:700;font-size:1.02rem;color:#fff;margin-bottom:.15rem}
          .wk-en{font-size:.7rem;color:#C9A96E;font-weight:600;letter-spacing:.03em;margin-bottom:.7rem;display:block}
          .wk-desc{font-size:.82rem;color:rgba(255,255,255,.6);line-height:1.6;margin-bottom:.9rem}
          .wk-items{display:flex;flex-wrap:wrap;gap:6px}
          .wk-item{font-size:.68rem;background:rgba(201,169,110,.1);color:#C9A96E;padding:3px 10px;border-radius:20px}

          .step-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.8rem}
          .step-n{font-family:'Syne',sans-serif;font-size:2rem;font-weight:800;color:rgba(201,169,110,.2);line-height:1;margin-bottom:.4rem}
          .step-t{font-weight:700;font-size:.9rem;color:#fff;margin-bottom:.4rem}
          .step-d{font-size:.78rem;color:rgba(255,255,255,.55);line-height:1.6}

          /* FİYAT TABLOLARI — Dikim · Tamir · Tadilat · Ütü */
          .price-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:16px}
          .price-card{background:rgba(255,255,255,.03);border:1px solid rgba(201,169,110,.14);border-radius:10px;padding:1.5rem 1.6rem;transition:border-color .2s}
          .price-card:hover{border-color:rgba(201,169,110,.4)}
          .price-head{display:flex;align-items:flex-start;gap:12px;margin-bottom:.9rem}
          .price-icon{font-size:1.5rem;flex-shrink:0;margin-top:2px}
          .price-tr{font-weight:800;font-size:1.05rem;color:#fff;line-height:1.2}
          .price-en{font-size:.68rem;color:#C9A96E;font-weight:600;letter-spacing:.03em;display:block;margin-top:.1rem}
          .price-kw{font-size:.66rem;color:rgba(255,255,255,.35);font-style:italic;margin-top:.3rem;display:block}
          .price-desc{font-size:.8rem;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:1rem}
          .price-table{width:100%;border-collapse:collapse}
          .price-table tr{border-bottom:1px solid rgba(255,255,255,.06)}
          .price-table tr:last-child{border-bottom:none}
          .price-table td{padding:.55rem 0;font-size:.82rem}
          .price-table td:first-child{color:rgba(255,255,255,.75)}
          .price-table td:last-child{color:#C9A96E;font-weight:700;text-align:right;white-space:nowrap}

          .faq-item{border-bottom:1px solid rgba(201,169,110,.12);padding:1.1rem 0}
          .faq-q{font-weight:700;font-size:.9rem;color:#fff;margin-bottom:.4rem}
          .faq-a{font-size:.8rem;color:rgba(255,255,255,.55);line-height:1.6}

          .cta-final{background:linear-gradient(135deg,#2C4A3E 0%,#1E3329 100%);color:#fff;padding:3.5rem 1.5rem;text-align:center;border-top:1px solid rgba(201,169,110,.15)}
          .cta-h{font-family:'Syne',sans-serif;font-size:clamp(1.5rem,3.2vw,2.1rem);font-weight:800;margin-bottom:.6rem}
          .cta-sub{font-size:.88rem;color:rgba(255,255,255,.75);margin-bottom:1.6rem}
          .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
          .btn-white{display:inline-flex;align-items:center;gap:10px;background:#C9A96E;color:#1E3329;font-weight:800;font-size:.86rem;padding:13px 22px;border-radius:4px}
          .btn-outline-white{display:inline-flex;align-items:center;gap:10px;background:transparent;color:#fff;font-weight:700;font-size:.86rem;padding:13px 22px;border-radius:4px;border:2px solid rgba(255,255,255,.4)}

          footer{background:#152720;border-top:1px solid rgba(201,169,110,.12);padding:1.8rem 1.5rem;text-align:center;font-size:.72rem;color:rgba(255,255,255,.4)}
          .foot-links{display:flex;justify-content:center;gap:1.1rem;flex-wrap:wrap;margin-top:.6rem}
          .foot-links a{color:rgba(255,255,255,.4)}

          .float{position:fixed;bottom:20px;right:16px;z-index:99;display:flex;flex-direction:column;gap:10px}
          .fbtn{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem;box-shadow:0 4px 14px rgba(0,0,0,.4)}
          .fbtn-call{background:#2C4A3E;color:#fff;border:1px solid rgba(201,169,110,.3)}
          .fbtn-wa{background:#25D366;color:#fff}
        `}</style>

        <div className="float">
          <a href={`tel:${PHONE_TEL}`} className="fbtn fbtn-call" aria-label="Ara">📞</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="fbtn fbtn-wa" aria-label="WhatsApp">💬</a>
        </div>

        <nav className="nav" aria-label="Ana navigasyon">
          <div className="nav-logo">
            <span className="nav-dot" aria-hidden="true" />
            TERZİ CAN
          </div>
          <a href="/" className="nav-home">← Ana Sayfa</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP →</a>
        </nav>

        {/* HERO */}
        <section className="hero" aria-labelledby="hero-h">
          <div className="hero-bg" aria-hidden="true">
            <img src="/terzi-can-hero.png" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📍 Hurma · Liman · Sarısu · Uncalı · Gürsu Öncelikli</span>
            <span className="hero-eng">Konyaaltı Tailor Service</span>
            <h1 id="hero-h">
              Konyaaltı'da Terzi, <span className="accent">Dikim Atölyesi</span><br />
              ve Fason İmalat Merkezi
            </h1>
            <p className="hero-desc" id="hero-desc">
              Hurma, Liman, Sarısu, Uncalı, Gürsu, Öğretmenevleri, Ahatlı ve Toros
              mahallelerine en yakın atölyemizden — bay, bayan ve çocuk kıyafet dikimi,
              üniforma üretimi, fason imalat ve özel tasarım hizmeti. Antalya'nın
              tüm ilçelerine de ulaşıyoruz.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                💬 Mahallenizi Söyleyin →
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        {/* SEO INTRO */}
        <div style={{ background: 'rgba(0,0,0,.15)', padding: '1.8rem 1.5rem', borderBottom: '1px solid rgba(201,169,110,.1)' }}>
          <p style={{ maxWidth: 920, margin: '0 auto', fontSize: '.82rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.9, textAlign: 'center' }}>
            <strong style={{ color: '#C9A96E' }}>Konyaaltı Tailor Service</strong> — Hurma, Liman, Sarısu,
            Uncalı, Gürsu, Öğretmenevleri, Ahatlı ve Toros mahallelerine hizmet veren terzi ve
            dikiş atölyesi. Bay kıyafet dikimi, bayan kıyafet dikimi, çocuk kıyafeti, üniforma
            üretimi, fason imalat ve kişiye özel tasarım. Antalya'nın Muratpaşa, Kepez, Lara,
            Alanya, Manavgat dahil tüm ilçelerine terzi hizmeti sağlıyoruz.
          </p>
        </div>

        {/* MAHALLELER — Konyaaltı öncelikli */}
        <section className="sec" aria-labelledby="nb-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">📍 Konyaaltı Mahalleleri</span>
              <h2 className="sec-h ff" id="nb-h">Size En Yakın Mahalleden Başlıyoruz</h2>
              <p className="sec-sub">
                Atölyemize en yakın mahallelere öncelikli ve hızlı hizmet veriyoruz.
              </p>
            </div>
            <div className="nb-grid">
              {NEIGHBORHOODS.map(n => (
                <div key={n.name} className={`nb-card${n.priority ? ' priority' : ''}`}>
                  <div className="nb-top">
                    <span className="nb-name">{n.name}</span>
                    <span className={`nb-tag ${n.priority ? 'oncelikli' : 'yakin'}`}>{n.tag}</span>
                  </div>
                  <div className="nb-note">{n.note}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', marginTop: '1rem', marginBottom: '.4rem' }}>
              Ayrıca Antalya'nın şu ilçelerine de hizmet veriyoruz:
            </p>
            <div className="other-districts">
              {OTHER_DISTRICTS.map(d => (
                <span key={d} className="od-chip">{d}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ATÖLYE HİZMETLERİ */}
        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="workshop" aria-labelledby="wk-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Dikim & Tasarım Atölyesi</span>
              <h2 className="sec-h ff" id="wk-h">Bay, Bayan, Çocuk Kıyafeti · Üniforma · Fason İmalat</h2>
              <p className="sec-sub">
                Kişiye özel dikimden toplu üniforma üretimine, tam kapasiteli tekstil atölyesi.
              </p>
            </div>
            <div className="wk-grid">
              {WORKSHOP_SERVICES.map(s => (
                <div className="wk-card" key={s.tr}>
                  <div className="wk-icon">{s.icon}</div>
                  <div className="wk-tr">{s.tr}</div>
                  <span className="wk-en">{s.en}</span>
                  <p className="wk-desc">{s.desc}</p>
                  <div className="wk-items">
                    {s.items.map(i => <span key={i} className="wk-item">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a href={WA('Merhaba, dikim/üniforma/fason imalat hakkında teklif almak istiyorum.')}
                target="_blank" rel="noopener noreferrer" className="btn-primary">
                💬 Teklif Alın →
              </a>
            </div>
          </div>
        </section>

        {/* DİKİM · TAMİR · TADİLAT · ÜTÜ — fiyat listesi (TR / EN / RU) */}
        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Şeffaf Fiyatlar 2026 · Prices · Цены</span>
              <h2 className="sec-h ff" id="price-h">
                Dikim, Tamir, Tadilat ve Ütü Hizmetleri
              </h2>
              <p className="sec-sub">
                Antalya Konyaaltı terzi fiyatları — Türkçe, İngilizce ve Rusça.
                Kesin fiyat için WhatsApp'tan fotoğraf gönderin.
              </p>
            </div>

            {(Object.keys(REPAIR_CATEGORIES) as Lang[]).map(lang => (
              <div key={lang} style={{ marginBottom: lang !== 'ru' ? '3rem' : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{LANG_LABELS[lang].flag}</span>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#C9A96E' }}>
                    {LANG_LABELS[lang].name}
                  </h3>
                  <span style={{ flex: 1, height: 1, background: 'rgba(201,169,110,.15)' }} />
                </div>

                <div className="price-grid">
                  {REPAIR_CATEGORIES[lang].map(cat => (
                    <div className="price-card" key={cat.title}>
                      <div className="price-head">
                        <span className="price-icon" aria-hidden="true">{cat.icon}</span>
                        <div>
                          <div className="price-tr">{cat.title}</div>
                          <span className="price-kw">{cat.keyword}</span>
                        </div>
                      </div>
                      <p className="price-desc">{cat.desc}</p>
                      <table className="price-table" aria-label={`${cat.title} — ${LANG_LABELS[lang].name}`}>
                        <tbody>
                          {cat.rows.map(([name, price]) => (
                            <tr key={name}>
                              <td>{name}</td>
                              <td>{price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1rem', fontStyle: 'italic' }}>
                  {LANG_LABELS[lang].note}
                </p>
              </div>
            ))}

            <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
              <a href={WA('Merhaba, dikim/tamir/tadilat/ütü fiyatlarını öğrenmek istiyorum. / I would like to know the prices. / Хочу узнать цены.')}
                target="_blank" rel="noopener noreferrer" className="btn-primary">
                📲 Fiyat Sor · Get a Quote · Узнать цену
              </a>
            </div>
          </div>
        </section>

        {/* SÜREÇ */}
        <section className="sec" aria-labelledby="proc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="proc-h">Nasıl Çalışıyoruz?</h2>
            </div>
            <div className="step-grid">
              {([
                ['01', 'Mahallenizi Belirtin', 'WhatsApp\'tan bulunduğunuz mahalleyi ve ihtiyacınızı yazın.'],
                ['02', 'Ölçü & Tasarım', 'Adresinizde ölçü alınır veya atölyede tasarım detayları belirlenir.'],
                ['03', 'Dikim / Üretim', 'Tekli dikim ya da toplu üniforma/fason üretimi atölyede tamamlanır.'],
                ['04', 'Teslimat', 'Öncelikli mahallelere ücretsiz, diğer bölgelere randevulu teslim.'],
              ] as [string, string, string][]).map(([n, t, d]) => (
                <div key={n}>
                  <div className="step-n">{n}</div>
                  <div className="step-t">{t}</div>
                  <div className="step-d">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 740 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Sık Sorulan Sorular</h2>
            </div>
            {FAQS.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Konyaaltı'nın Her Mahallesinden<br />Terzi Can'a Ulaşın</h2>
          <p className="cta-sub">Bay, bayan, çocuk kıyafeti, üniforma veya fason imalat — mahallenizi söyleyin.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Konyaaltı Tailor Service · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer bağlantılar">
            <a href="/">Ana Sayfa</a>
            <a href="https://swaphubs.com/terzi">SwapHubs Terzi</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
          <p style={{ marginTop: '1rem', fontSize: '.62rem', color: 'rgba(255,255,255,.15)', lineHeight: 1.8 }}>
            Konyaaltı Tailor Service — Hurma, Liman, Sarısu, Uncalı, Gürsu, Öğretmenevleri, Ahatlı,
            Toros terzi ve dikiş atölyesi. Bay, bayan, çocuk kıyafeti, üniforma üretimi, fason imalat.
            Antalya tüm ilçeler. {PHONE}
          </p>
        </footer>
      </div>
    </>
  );
}
