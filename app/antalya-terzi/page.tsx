import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter, Syne } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter', display: 'swap' });
const syne  = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap' });

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/antalya-terzi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, terzi ve tekstil atölyesi hizmetleriniz hakkında bilgi almak istiyorum.');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const BIZ       = 'Konyaaltı Terzi - Terzi Dikim Tamir Tadilat';
const TODAY     = new Date().toISOString().split('T')[0];
const OG        = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  // DÜZELTME: Başlık İngilizce ifadeyle başlıyordu ("Konyaaltı Tailor
  // Service") — bu sayfanın hedeflediği asıl arama niyeti Türkçe
  // ("Hurma terzi", "Konyaaltı terzi"). Başlık Türkçe anahtar kelimelerle
  // başlayacak şekilde yeniden yazıldı.
  title: 'Hurma, Liman, Sarısu Terzi — Konyaaltı',
  description:
    "Konyaaltı Hurma, Liman, Sarısu, Uncalı, Gürsu mahallelerinde terzi ve dikiş atölyesi. Kıyafet dikimi, üniforma üretimi, fason imalat. ☎ " + PHONE,
  keywords: [
    'Hurma terzi Konyaaltı', 'Liman terzi Konyaaltı', 'Sarısu terzi Konyaaltı',
    'Uncalı terzi', 'Gürsu terzi', 'Öğretmenevleri terzi', 'Ahatlı terzi', 'Toros terzi',
    'Konyaaltı dikiş atölyesi', 'Konyaaltı tekstil atölyesi',
    'Konyaaltı tailor service', 'Antalya tailor', 'tailor service Antalya',
    'dikim tasarım atölyesi Antalya', 'fason imalat Antalya', 'fason üretim Konyaaltı',
    'bay kıyafet dikimi Antalya', 'bayan kıyafet dikimi Antalya', 'çocuk kıyafet dikimi Antalya',
    'üniforma üretimi Antalya', 'terzi Antalya', 'terzi dikim tamir tadilat Antalya',
    'paça kısaltma fiyatı Konyaaltı', 'bel daraltma fiyatı Antalya',
    'fermuar değişimi fiyatı Antalya', 'ütü fiyatı Antalya', 'kuru temizleme fiyatı Konyaaltı',
    'Muratpaşa terzi', 'Kepez terzi', 'Lara terzi', 'Alanya terzi', 'Manavgat terzi',
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
    title: 'Hurma, Liman, Sarısu Terzi — Konyaaltı',
    description: 'Hurma, Liman, Sarısu, Uncalı, Gürsu mahalleleri öncelikli. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR',
    alternateLocale: ['en_US'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Konyaaltı Tailor Service', type: 'image/png' }],
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
  verification: { google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Konyaaltı Tailor Service — Terzi, Dikim Atölyesi, Fason İmalat',
      description: 'Konyaaltı mahalleleri öncelikli terzi ve dikiş atölyesi.',
      inLanguage: 'tr',
      isPartOf: { '@id': `${SITE}#website` },
      about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      datePublished: '2026-08-01',
      dateModified: TODAY,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-desc', '#seo-intro', '#faq'] },
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
      ].map((n) => ({ '@type': 'Place', name: n })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Dikim, Tasarım ve Fason İmalat Hizmetleri',
        itemListElement: [
          { '@type': 'Offer', name: 'Erkek Gömlek Dikimi', price: '350', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Erkek Gömlek Dikimi' } },
          { '@type': 'Offer', name: 'Kadın Elbise Dikimi', price: '600', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Kadın Elbise Dikimi' } },
          { '@type': 'Offer', name: 'Fermuar Değişimi', price: '200', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Fermuar Değişimi' } },
          { '@type': 'Offer', name: 'Paça Kısaltma', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Paça Kısaltma' } },
          { '@type': 'Offer', name: 'Bel Daraltma', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Bel Daraltma' } },
          { '@type': 'Offer', name: 'Gelinlik & Abiye Tadilatı', price: '400', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Gelinlik ve Abiye Tadilatı' } },
          { '@type': 'Offer', name: 'Ütü Hizmeti', price: '80', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Profesyonel Ütü' } },
          { '@type': 'Offer', name: 'Kuru Temizleme', price: '300', priceCurrency: 'TRY', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Kuru Temizleme' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Konyaaltı Hurma, Liman, Sarısu mahallelerine terzi hizmeti var mı?', acceptedAnswer: { '@type': 'Answer', text: `Evet, atölyemiz bu mahallelere en yakın konumda. Hurma, Liman ve Sarısu'ya ücretsiz adrese gelen servis sağlıyoruz. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Bay, bayan ve çocuk kıyafeti dikimi yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, erkek, kadın ve çocuk kıyafetlerinin tamamında özel ölçü dikim hizmeti veriyoruz.' } },
        { '@type': 'Question', name: 'Üniforma üretimi ve toplu sipariş alıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, otel, restoran, okul, güvenlik ve sağlık sektörü için üniforma tasarımı ve toplu üretimi yapıyoruz.' } },
        { '@type': 'Question', name: 'Fason imalat için minimum sipariş adedi var mı?', acceptedAnswer: { '@type': 'Answer', text: "Fason imalat siparişleri proje bazında değerlendirilir. WhatsApp'tan detaylı bilgi alabilirsiniz." } },
      ],
    },
  ],
};

interface Neighborhood {
  name: string;
  tag: string;
  note: string;
  priority: boolean;
}

const NEIGHBORHOODS: Neighborhood[] = [
  { name: 'Hurma', tag: 'Öncelikli', note: 'Atölyeye en yakın — ücretsiz adrese servis', priority: true },
  { name: 'Liman', tag: 'Öncelikli', note: 'Ücretsiz adrese servis, aynı gün randevu', priority: true },
  { name: 'Sarısu', tag: 'Öncelikli', note: 'Ücretsiz adrese servis', priority: true },
  { name: 'Uncalı', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
  { name: 'Gürsu', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
  { name: 'Öğretmenevleri', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
  { name: 'Ahatlı', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
  { name: 'Toros', tag: 'Yakın', note: 'Randevulu adrese gelen servis', priority: false },
];

const OTHER_DISTRICTS: string[] = [
  'Muratpaşa', 'Kepez', 'Döşemealtı', 'Aksu', 'Lara', 'Serik', 'Kemer', 'Alanya', 'Manavgat',
];

interface WorkshopService {
  icon: string;
  tr: string;
  en: string;
  desc: string;
  items: string[];
}

const WORKSHOP_SERVICES: WorkshopService[] = [
  { icon: '👔', tr: 'Bay Kıyafet Dikimi', en: "Men's Tailoring", desc: 'Erkek gömlek, pantolon, ceket, takım elbise. Ölçüye özel dikim ve tasarım.', items: ['Gömlek', 'Pantolon', 'Ceket', 'Takım Elbise', 'Damatlık'] },
  { icon: '👗', tr: 'Bayan Kıyafet Dikimi', en: "Women's Tailoring", desc: 'Kadın elbise, bluz, etek, abiye. Kişiye özel model ve ölçü.', items: ['Elbise', 'Bluz', 'Etek', 'Abiye', 'Gelinlik'] },
  { icon: '🧸', tr: 'Çocuk Kıyafeti Dikimi', en: "Children's Clothing", desc: 'Çocuk ve bebek kıyafeti, okul kıyafeti, özel gün dikimi.', items: ['Okul Kıyafeti', 'Günlük Giyim', 'Özel Gün', 'Bebek Kıyafeti'] },
  { icon: '🏨', tr: 'Üniforma Üretimi', en: 'Uniform Manufacturing', desc: 'Otel, restoran, okul, güvenlik, sağlık sektörü için toplu üniforma üretimi.', items: ['Otel', 'Restoran', 'Okul', 'Güvenlik', 'Sağlık'] },
  { icon: '🏭', tr: 'Fason İmalat', en: 'Contract Manufacturing', desc: 'Marka ve işletmeler için numune dikimi, kalıp çıkarma, seri üretim.', items: ['Numune Dikimi', 'Kalıp Çıkarma', 'Seri Üretim', 'Toplu Sipariş'] },
  { icon: '✏️', tr: 'Dikim Tasarım Atölyesi', en: 'Design Workshop', desc: 'Sıfırdan model tasarımı, prototip dikimi, kumaş danışmanlığı.', items: ['Model Tasarımı', 'Prototip', 'Kumaş Danışmanlığı'] },
];

type Lang = 'tr' | 'en' | 'ru';
const LANGS: Lang[] = ['tr', 'en', 'ru'];

interface LangLabel {
  name: string;
  flag: string;
  note: string;
}

const LANG_LABELS: Record<Lang, LangLabel> = {
  tr: { name: 'Türkçe', flag: '🇹🇷', note: 'Fiyatlar başlangıç fiyatıdır, kumaş ve işçilik durumuna göre değişebilir. KDV dahildir.' },
  en: { name: 'English', flag: '🇬🇧', note: 'Prices are starting prices and may vary depending on fabric and workmanship. VAT included.' },
  ru: { name: 'Русский', flag: '🇷🇺', note: 'Цены указаны от, могут меняться в зависимости от ткани и сложности работы. НДС включён.' },
};

interface RepairCategory {
  icon: string;
  title: string;
  keyword: string;
  desc: string;
  rows: [string, string][];
}

const REPAIR_CATEGORIES: Record<Lang, RepairCategory[]> = {
  tr: [
    { icon: '✂️', title: 'Dikim Hizmetleri', keyword: 'terzi dikim Antalya · özel ölçü dikim Konyaaltı',
      desc: 'Sıfırdan kıyafet dikimi. Bay, bayan, çocuk — ölçünüze özel tasarım ve üretim.',
      rows: [['Erkek Gömlek Dikimi', '₺350+'], ['Erkek Pantolon Dikimi', '₺400+'], ['Kadın Elbise Dikimi', '₺600+'], ['Abiye / Özel Gün Dikimi', '₺900+'], ['Çocuk Kıyafeti Dikimi', '₺250+']] },
    { icon: '🔧', title: 'Tamir Hizmetleri', keyword: 'kıyafet tamiri Antalya · fermuar tamiri Konyaaltı',
      desc: 'Yırtık, sökük, fermuar, düğme — günlük giyimde en sık ihtiyaç duyulan onarımlar.',
      rows: [['Fermuar Değişimi (Pantolon/Kot)', '₺200+'], ['Fermuar Değişimi (Mont/Ceket)', '₺300+'], ['Yırtık / Sökük Onarımı', '₺150+'], ['Düğme, Kopça, Fitil Tamiri', '₺60+'], ['Astar Değişimi', '₺300+']] },
    { icon: '📏', title: 'Tadilat Hizmetleri', keyword: 'paça kısaltma Antalya · bel daraltma Konyaaltı',
      desc: 'Kıyafetinizi vücudunuza tam oturtan hassas ölçü ayarları.',
      rows: [['Paça Kısaltma (Pantolon/Kot/Etek)', '₺150+'], ['Bel Daraltma', '₺150+'], ['Kol Kısaltma', '₺200+'], ['Elbise / Ceket Daraltma', '₺200+'], ['Gelinlik & Abiye Tadilatı', '₺400+']] },
    { icon: '🧺', title: 'Ütü & Kuru Temizleme', keyword: 'ütü hizmeti Antalya · kuru temizleme Konyaaltı',
      desc: 'Profesyonel buharlı ütü ve kuru temizleme. Otel ve adreslerden alım-teslimat.',
      rows: [['Ütü (adet)', '₺80+'], ['Kuru Temizleme (Elbise)', '₺300+'], ['Kuru Temizleme (Mont/Kaban)', '₺500+'], ['Çamaşır & Ütü (kg)', '₺80+/kg']] },
  ],
  en: [
    { icon: '✂️', title: 'Tailoring Services', keyword: 'tailor Antalya · custom-fit sewing Konyaaltı',
      desc: 'Made-from-scratch garments. Men, women, children — designed and sewn to your exact measurements.',
      rows: [["Men's Shirt Tailoring", '₺350+'], ["Men's Trousers Tailoring", '₺400+'], ["Women's Dress Making", '₺600+'], ['Evening Gown / Special Occasion', '₺900+'], ["Children's Clothing", '₺250+']] },
    { icon: '🔧', title: 'Repair Services', keyword: 'clothing repair Antalya · zipper repair Konyaaltı',
      desc: 'Tears, seams, zippers, buttons — the everyday fixes clothing needs most.',
      rows: [['Zipper Replacement (Trousers/Jeans)', '₺200+'], ['Zipper Replacement (Coat/Jacket)', '₺300+'], ['Tear / Seam Repair', '₺150+'], ['Button, Hook, Snap Repair', '₺60+'], ['Lining Replacement', '₺300+']] },
    { icon: '📏', title: 'Alterations', keyword: 'hemming Antalya · waist taking in Konyaaltı',
      desc: 'Precise fit adjustments so your clothing sits exactly right on your body.',
      rows: [['Hemming (Trousers/Jeans/Skirt)', '₺150+'], ['Waist Taking In', '₺150+'], ['Sleeve Shortening', '₺200+'], ['Dress / Jacket Taking In', '₺200+'], ['Wedding & Evening Dress Alterations', '₺400+']] },
    { icon: '🧺', title: 'Ironing & Dry Cleaning', keyword: 'ironing service Antalya · dry cleaning Konyaaltı',
      desc: 'Professional steam ironing and dry cleaning.',
      rows: [['Ironing (per item)', '₺80+'], ['Dry Cleaning (Dress)', '₺300+'], ['Dry Cleaning (Coat)', '₺500+'], ['Laundry & Ironing (per kg)', '₺80+/kg']] },
  ],
  ru: [
    { icon: '✂️', title: 'Пошив одежды', keyword: 'портной Анталья · пошив по меркам Коньяалты',
      desc: 'Пошив одежды с нуля. Мужская, женская, детская — по индивидуальным меркам.',
      rows: [['Пошив мужской рубашки', '₺350+'], ['Пошив мужских брюк', '₺400+'], ['Пошив женского платья', '₺600+'], ['Вечернее / праздничное платье', '₺900+'], ['Пошив детской одежды', '₺250+']] },
    { icon: '🔧', title: 'Ремонт одежды', keyword: 'ремонт одежды Анталья · ремонт молнии Коньяалты',
      desc: 'Разрывы, швы, молнии, пуговицы — самый частый ремонт повседневной одежды.',
      rows: [['Замена молнии (брюки/джинсы)', '₺200+'], ['Замена молнии (пальто/куртка)', '₺300+'], ['Ремонт разрыва / шва', '₺150+'], ['Ремонт пуговиц, крючков, кнопок', '₺60+'], ['Замена подкладки', '₺300+']] },
    { icon: '📏', title: 'Подгонка одежды', keyword: 'укорачивание брюк Анталья · заужение талии Коньяалты',
      desc: 'Точная подгонка по фигуре — чтобы одежда сидела идеально.',
      rows: [['Укорачивание (брюки/джинсы/юбка)', '₺150+'], ['Заужение талии', '₺150+'], ['Укорачивание рукавов', '₺200+'], ['Заужение платья / пиджака', '₺200+'], ['Подгонка свадебного/вечернего платья', '₺400+']] },
    { icon: '🧺', title: 'Глажка и химчистка', keyword: 'глажка Анталья · химчистка Коньяалты',
      desc: 'Профессиональная паровая глажка и химчистка.',
      rows: [['Глажка (за вещь)', '₺80+'], ['Химчистка (платье)', '₺300+'], ['Химчистка (пальто)', '₺500+'], ['Стирка и глажка (за кг)', '₺80+/кг']] },
  ],
};

const FAQS: [string, string][] = [
  ['Hurma, Liman, Sarısu mahallelerine ücretsiz servis var mı?', 'Evet, atölyemize en yakın bu üç mahalleye ücretsiz adrese gelen terzi servisi sağlıyoruz.'],
  ["Uncalı, Gürsu, Öğretmenevleri, Ahatlı, Toros'a hizmet var mı?", 'Evet, bu mahallelere randevulu adrese gelen servis veriyoruz.'],
  ['Bay, bayan, çocuk kıyafeti dikiyor musunuz?', 'Evet, erkek, kadın ve çocuk kıyafetlerinde özel ölçü dikim hizmeti sunuyoruz.'],
  ['Üniforma üretimi ve toplu sipariş alıyor musunuz?', 'Evet, otel, okul, restoran ve kurumlar için üniforma tasarımı ve toplu üretim yapıyoruz.'],
  ['Fason imalat yapıyor musunuz?', 'Evet, markalar ve işletmeler için numune dikimi, kalıp çıkarma ve seri üretim hizmeti veriyoruz.'],
  ['Diğer Antalya ilçelerine hizmet var mı?', "Evet, Muratpaşa, Kepez, Lara, Alanya, Manavgat dahil tüm Antalya'ya kargo veya randevulu servisle ulaşıyoruz."],
];

const PROCESS_STEPS: [string, string, string][] = [
  ['01', 'Mahallenizi Belirtin', "WhatsApp'tan bulunduğunuz mahalleyi ve ihtiyacınızı yazın."],
  ['02', 'Ölçü & Tasarım', 'Adresinizde ölçü alınır veya atölyede tasarım detayları belirlenir.'],
  ['03', 'Dikim / Üretim', 'Tekli dikim ya da toplu üniforma/fason üretimi atölyede tamamlanır.'],
  ['04', 'Teslimat', 'Öncelikli mahallelere ücretsiz, diğer bölgelere randevulu teslim.'],
];

export default function KonyaaltiTailorServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <a href="#main-content" className="skip-link">İçeriğe geç</a>

      <div className={`${inter.variable} ${syne.variable}`} style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: 'var(--font-inter), system-ui, sans-serif', lineHeight: 1.6, minHeight: '100vh' }}>

        <nav className="nav" aria-label="Ana site navigasyonu">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Ana Sayfa</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">
            WHATSAPP <span aria-hidden="true">→</span>
          </a>
        </nav>

        <header className="hero">
          <div className="hero-bg" aria-hidden="true">
            <Image
              src="/terzi-can-hero.jpg"
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 15%', filter: 'brightness(.32) saturate(.75)' }}
            />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📍 Hurma · Liman · Sarısu · Uncalı · Gürsu Öncelikli</span>
            <span className="hero-eng">Konyaaltı Tailor Service</span>
            <h1 id="hero-h">
              Konyaaltı&apos;da Terzi, <span className="accent">Dikim Atölyesi</span><br />
              ve Fason İmalat Merkezi
            </h1>
            <p className="hero-desc" id="hero-desc">
              Hurma, Liman, Sarısu, Uncalı, Gürsu, Öğretmenevleri, Ahatlı ve Toros
              mahallelerine en yakın atölyemizden — bay, bayan ve çocuk kıyafet dikimi,
              üniforma üretimi, fason imalat ve özel tasarım hizmeti. Antalya&apos;nın
              tüm ilçelerine de ulaşıyoruz.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span aria-hidden="true">💬</span> Mahallenizi Söyleyin <span aria-hidden="true">→</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">
                <span aria-hidden="true">📞</span> {PHONE}
              </a>
            </div>
          </div>
        </header>

        <main id="main-content">
          <div className="seo-intro-wrap">
            <p className="seo-intro" id="seo-intro">
              <strong style={{ color: '#C9A96E' }}>Konyaaltı Tailor Service</strong> — Hurma, Liman, Sarısu,
              Uncalı, Gürsu, Öğretmenevleri, Ahatlı ve Toros mahallelerine hizmet veren terzi ve
              dikiş atölyesi. Bay kıyafet dikimi, bayan kıyafet dikimi, çocuk kıyafeti, üniforma
              üretimi, fason imalat ve kişiye özel tasarım. Antalya&apos;nın Muratpaşa, Kepez, Lara,
              Alanya, Manavgat dahil tüm ilçelerine terzi hizmeti sağlıyoruz.
            </p>
          </div>

          <section className="sec" aria-labelledby="nb-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">📍 Konyaaltı Mahalleleri</span>
                <h2 className="sec-h" id="nb-h">Size En Yakın Mahalleden Başlıyoruz</h2>
                <p className="sec-sub">Atölyemize en yakın mahallelere öncelikli ve hızlı hizmet veriyoruz.</p>
              </div>
              <ul className="nb-grid" aria-label="Öncelikli hizmet mahalleleri">
                {NEIGHBORHOODS.map((n: Neighborhood) => (
                  <li key={n.name} className={`nb-card${n.priority ? ' priority' : ''}`}>
                    <div className="nb-top">
                      <span className="nb-name">{n.name}</span>
                      <span className={`nb-tag ${n.priority ? 'oncelikli' : 'yakin'}`}>{n.tag}</span>
                    </div>
                    <div className="nb-note">{n.note}</div>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', marginTop: '1rem', marginBottom: '.4rem' }}>
                Ayrıca Antalya&apos;nın şu ilçelerine de hizmet veriyoruz:
              </p>
              <ul className="other-districts" aria-label="Ek hizmet ilçeleri">
                {OTHER_DISTRICTS.map((d: string) => (<li key={d} className="od-chip">{d}</li>))}
              </ul>
            </div>
          </section>

          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="workshop" aria-labelledby="wk-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">Dikim &amp; Tasarım Atölyesi</span>
                <h2 className="sec-h" id="wk-h">Bay, Bayan, Çocuk Kıyafeti · Üniforma · Fason İmalat</h2>
                <p className="sec-sub">Kişiye özel dikimden toplu üniforma üretimine, tam kapasiteli tekstil atölyesi.</p>
              </div>
              <div className="wk-grid">
                {WORKSHOP_SERVICES.map((s: WorkshopService) => (
                  <article className="wk-card" key={s.tr}>
                    <div className="wk-icon" aria-hidden="true">{s.icon}</div>
                    <h3 className="wk-tr">{s.tr}</h3>
                    <span className="wk-en">{s.en}</span>
                    <p className="wk-desc">{s.desc}</p>
                    <ul className="wk-items" aria-label={`${s.tr} kapsamı`}>
                      {s.items.map((i: string) => <li key={i} className="wk-item">{i}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a href={WA('Merhaba, dikim/üniforma/fason imalat hakkında teklif almak istiyorum.')}
                  target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span aria-hidden="true">💬</span> Teklif Alın <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          <section className="sec" id="fiyatlar" aria-labelledby="price-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">₺ Şeffaf Fiyatlar 2026 · Prices · Цены</span>
                <h2 className="sec-h" id="price-h">Dikim, Tamir, Tadilat ve Ütü Hizmetleri</h2>
                <p className="sec-sub">Antalya Konyaaltı terzi fiyatları — Türkçe, İngilizce ve Rusça. Kesin fiyat için WhatsApp&apos;tan fotoğraf gönderin.</p>
              </div>

              {LANGS.map((lang: Lang) => (
                <div key={lang} style={{ marginBottom: lang !== 'ru' ? '3rem' : 0 }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem', fontFamily: 'var(--font-syne)', fontSize: '1.05rem', fontWeight: 700, color: '#C9A96E' }}>
                    <span aria-hidden="true">{LANG_LABELS[lang].flag}</span>
                    {LANG_LABELS[lang].name}
                    <span style={{ flex: 1, height: 1, background: 'rgba(201,169,110,.15)' }} aria-hidden="true" />
                  </h3>
                  <div className="price-grid">
                    {REPAIR_CATEGORIES[lang].map((cat: RepairCategory) => (
                      <article className="price-card" key={cat.title}>
                        <div className="price-head">
                          <span className="price-icon" aria-hidden="true">{cat.icon}</span>
                          <div><h4 className="price-tr">{cat.title}</h4><span className="price-kw">{cat.keyword}</span></div>
                        </div>
                        <p className="price-desc">{cat.desc}</p>
                        <table className="price-table" aria-label={`${cat.title} — ${LANG_LABELS[lang].name}`}>
                          <caption className="visually-hidden">{cat.title} fiyat listesi</caption>
                          <thead>
                            <tr>
                              <th scope="col" className="visually-hidden">Hizmet</th>
                              <th scope="col" className="visually-hidden">Fiyat</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cat.rows.map((row: [string, string]) => (<tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td></tr>))}
                          </tbody>
                        </table>
                      </article>
                    ))}
                  </div>
                  <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1rem', fontStyle: 'italic' }}>{LANG_LABELS[lang].note}</p>
                </div>
              ))}

              <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
                <a href={WA('Merhaba, dikim/tamir/tadilat/ütü fiyatlarını öğrenmek istiyorum. / I would like to know the prices. / Хочу узнать цены.')}
                  target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span aria-hidden="true">📲</span> Fiyat Sor · Get a Quote · Узнать цену
                </a>
              </div>
            </div>
          </section>

          <section className="sec" aria-labelledby="proc-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">Süreç</span>
                <h2 className="sec-h" id="proc-h">Nasıl Çalışıyoruz?</h2>
              </div>
              <ol className="step-grid" aria-label="Hizmet süreci adımları">
                {PROCESS_STEPS.map((step: [string, string, string]) => (
                  <li key={step[0]}>
                    <span className="step-n" aria-hidden="true">{step[0]}</span>
                    <div className="step-t">{step[1]}</div>
                    <div className="step-d">{step[2]}</div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="detail-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">🔍 Detaylı Hizmet Sayfaları</span>
                <h2 className="sec-h" id="detail-h">Aradığınız Hizmeti Doğrudan Bulun</h2>
                <p className="sec-sub">En çok talep edilen hizmetler için detaylı fiyat ve süreç bilgisi.</p>
              </div>
              <div className="wk-grid">
                <a href="/konyaalti-fermuar-tamiri" className="wk-card" style={{ display: 'block' }}>
                  <div className="wk-icon" aria-hidden="true">🔧</div>
                  <h3 className="wk-tr">Fermuar Tamiri Konyaaltı</h3>
                  <span className="wk-en">Zipper Repair</span>
                  <p className="wk-desc">Pantolon, mont, ceket, çanta fermuarı — aynı gün teslim, ₺200&apos;den.</p>
                  <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör <span aria-hidden="true">→</span></span>
                </a>
                <a href="/konyaalti-paca-kisaltma" className="wk-card" style={{ display: 'block' }}>
                  <div className="wk-icon" aria-hidden="true">📏</div>
                  <h3 className="wk-tr">Paça Kısaltma Konyaaltı</h3>
                  <span className="wk-en">Hemming</span>
                  <p className="wk-desc">Pantolon, kot, etek kısaltma — aynı gün teslim, ₺150&apos;den.</p>
                  <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör <span aria-hidden="true">→</span></span>
                </a>
                <a href="/antalya-gelinlik-tadilati" className="wk-card" style={{ display: 'block' }}>
                  <div className="wk-icon" aria-hidden="true">💍</div>
                  <h3 className="wk-tr">Gelinlik Tadilatı Antalya</h3>
                  <span className="wk-en">Wedding Dress Alterations</span>
                  <p className="wk-desc">Hassas daraltma, boy ayarı, korse onarımı — ₺400&apos;den.</p>
                  <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör <span aria-hidden="true">→</span></span>
                </a>
              </div>
            </div>
          </section>

          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="faq" aria-labelledby="faq-h">
            <div className="ctr" style={{ maxWidth: 740 }}>
              <div className="sec-head">
                <span className="eyebrow">SSS</span>
                <h2 className="sec-h" id="faq-h">Sık Sorulan Sorular</h2>
              </div>
              {FAQS.map((item: [string, string]) => (
                <details key={item[0]} className="faq-item">
                  <summary className="faq-q">{item[0]}</summary>
                  <p className="faq-a">{item[1]}</p>
                </details>
              ))}
            </div>
          </section>
        </main>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h">Konyaaltı&apos;nın Her Mahallesinden<br />Terzi Can&apos;a Ulaşın</h2>
          <p className="cta-sub">Bay, bayan, çocuk kıyafeti, üniforma veya fason imalat — mahallenizi söyleyin.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">
              <span aria-hidden="true">💬</span> WhatsApp&apos;tan Yazın
            </a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              <span aria-hidden="true">📍</span> Google Haritalar
            </a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Konyaaltı Tailor Service · {PHONE}</div>
          <nav className="foot-links" aria-label="Alt bilgi bağlantıları">
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
