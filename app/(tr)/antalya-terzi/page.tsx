import type { Metadata } from 'next';
import { INTL_ALT } from '@/lib/intl';
import { DELIVERY } from '@/lib/delivery';
import FabricsOrderBlock from '@/components/FabricsOrderBlock';
import ReviewsBlock from '@/components/ReviewsBlock';
import OrnekGorselSeridi from '@/components/OrnekGorselSeridi';
import { businessNode } from '@/lib/business';
import Image from 'next/image';


const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/antalya-terzi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, terzi ve tekstil atölyesi hizmetleriniz hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const BIZ       = 'TERZİ Can Antalya Tailor Service';
const TODAY     = '2026-10-04';
const OG        = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Antalya Terzi · Paça ₺200, Fermuar ₺300 · Her Gün Açık" },
  description: "Antalya'da bay bayan terzi: paça kısaltma ₺200, fermuar ₺300, bel daraltma ₺200. Eve ve otele ücretsiz servis. 08:00–23:00. ☎ " + PHONE,
  keywords: ['Antalya terzi', 'Konyaaltı terzi', 'Hurma terzi', 'Liman terzi', 'Uncalı terzi', 'Gürsu terzi', 'otele gelen terzi Antalya', 'acil terzi Antalya'],
  authors: [{ name: BIZ, url: SITE }],
  creator: BIZ,
  publisher: 'Terzi Hizmeti',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'tr': PAGE_URL,
      'en': `${SITE}/en/tailor-service-antalya`,
      'ru': `${SITE}/ru/uslugi-portnogo-antalya`,
      'de': `${SITE}/de/schneiderservice-antalya`,
      ...INTL_ALT,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: 'Hurma, Liman, Sarısu Terzi — Konyaaltı',
    description: 'Hurma, Liman, Sarısu, Uncalı, Gürsu mahalleleri öncelikli. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR',
    alternateLocale: ['en_US', 'ru_RU', 'de_DE'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Konyaaltı Tailor Service', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konyaaltı Tailor Service — Terzi & Dikim Atölyesi',
    description: 'Hurma, Liman, Sarısu mahalleleri öncelikli terzi ve tekstil atölyesi hizmeti.',
    images: [OG],
  },
  other: {
    'geo.region': 'TR-07', 'geo.placename': 'Konyaaltı, Antalya',
    'geo.position': '36.857466;30.596987', 'ICBM': '36.857466, 30.596987',
    'contact': PHONE,
  },
  verification: { google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ' },
};

const FAQS: [string, string][] = [
  ['Servis ücretsiz mi?', 'Evet. Hizmet verdiğimiz her bölgede eve ve otele alım-teslim ücretsizdir. Adresinizi veya otelinizi WhatsApp üzerinden yazmanız yeterli.'],
  ["Ahatlı, Toros ve diğer Antalya bölgelerine hizmet var mı?", 'Evet. Eve ve otele alım-teslim tüm bölgelerde ücretsizdir; WhatsApp\'tan yazmanız yeterli.'],
  ['Bay, bayan, çocuk kıyafeti dikiyor musunuz?', 'Evet, erkek, kadın ve çocuk kıyafetlerinde özel ölçü dikim hizmeti sunuyoruz.'],
  ['Üniforma üretimi ve toplu sipariş alıyor musunuz?', 'Evet, otel, okul, restoran ve kurumlar için üniforma tasarımı ve toplu üretim yapıyoruz.'],
  ['Fason imalat yapıyor musunuz?', 'Evet, markalar ve işletmeler için numune dikimi, kalıp çıkarma ve seri üretim hizmeti veriyoruz.'],
  ['Muratpaşa, Lara, Belek, Side ve Kemer\'e hizmet var mı?', "Evet. Muratpaşa (Meltem, Şirinyalı, Fener, Güzeloba dahil), Lara, Belek, Side/Manavgat ve Kemer'deki otellere alım-teslimat ücretsizdir."],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
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
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      inLanguage: 'tr',
      mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
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
  { name: 'Liman', tag: 'Öncelikli', note: 'Otellere ücretsiz servis, WhatsApp\'tan randevu', priority: true },
  { name: 'Sarısu', tag: 'Öncelikli', note: 'Ücretsiz adrese servis', priority: true },
  { name: 'Uncalı', tag: 'Yakın', note: 'Ücretsiz adrese servis', priority: false },
  { name: 'Gürsu', tag: 'Yakın', note: 'Ücretsiz adrese servis', priority: false },
  { name: 'Öğretmenevleri', tag: 'Yakın', note: 'Ücretsiz adrese servis', priority: false },
  { name: 'Altınkum', tag: 'Yakın', note: 'Ücretsiz adrese servis', priority: false },
  { name: 'Siteler', tag: 'Yakın', note: 'Ücretsiz adrese servis', priority: false },
  { name: 'Arapsuyu', tag: 'Yakın', note: 'Ücretsiz adrese servis', priority: false },
  { name: 'Ahatlı', tag: 'Yakın', note: 'Ücretsiz adrese servis', priority: false },
  { name: 'Toros', tag: 'Yakın', note: 'Ücretsiz adrese servis', priority: false },
];

const OTHER_DISTRICTS: string[] = [
  'Muratpaşa', 'Kepez', 'Döşemealtı', 'Aksu', 'Lara', 'Güzeloba', 'Serik', 'Belek', 'Kemer', 'Side',
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
  { icon: '👗', tr: 'Bayan Kıyafet Dikimi', en: "Women's Tailoring", desc: 'Kadın elbise, bluz, etek, abiye. Kişiye özel model ve ölçü.', items: ['Elbise', 'Bluz', 'Etek', 'Abiye'] },
  { icon: '🧸', tr: 'Çocuk Kıyafeti Dikimi', en: "Children's Clothing", desc: 'Çocuk ve bebek kıyafeti, okul kıyafeti, özel gün dikimi.', items: ['Okul Kıyafeti', 'Günlük Giyim', 'Özel Gün', 'Bebek Kıyafeti'] },
  { icon: '🏨', tr: 'Üniforma Üretimi', en: 'Uniform Manufacturing', desc: 'Otel, restoran, okul, güvenlik, sağlık sektörü için toplu üniforma üretimi.', items: ['Otel', 'Restoran', 'Okul', 'Güvenlik', 'Sağlık'] },
  { icon: '🏭', tr: 'Fason İmalat', en: 'Contract Manufacturing', desc: 'Marka ve işletmeler için numune dikimi, kalıp çıkarma, seri üretim.', items: ['Numune Dikimi', 'Kalıp Çıkarma', 'Seri Üretim', 'Toplu Sipariş'] },
  { icon: '✏️', tr: 'Dikim Tasarım Atölyesi', en: 'Design Workshop', desc: 'Sıfırdan model tasarımı, prototip dikimi, kumaş danışmanlığı.', items: ['Model Tasarımı', 'Prototip', 'Kumaş Danışmanlığı'] },
];

type Lang = 'tr' | 'en' | 'ru' | 'de';
const LANGS: Lang[] = ['tr', 'en', 'ru', 'de'];

interface LangLabel {
  name: string;
  flag: string;
  note: string;
}

const LANG_LABELS: Record<Lang, LangLabel> = {
  tr: { name: 'Türkçe', flag: '🇹🇷', note: 'Fiyatlar başlangıç fiyatıdır, kumaş ve işçilik durumuna göre değişebilir. KDV dahildir.' },
  en: { name: 'English', flag: '🇬🇧', note: 'Prices are starting prices and may vary depending on fabric and workmanship. VAT included.' },
  ru: { name: 'Русский', flag: '🇷🇺', note: 'Цены указаны от, могут меняться в зависимости от ткани и сложности работы. НДС включён.' },
  de: { name: 'Deutsch', flag: '🇩🇪', note: 'Die Preise sind ab-Preise, können je nach Stoff und Arbeitsaufwand variieren. Inklusive MwSt.' },
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
      rows: [['Etek / Pantolon Dikimi', '₺1000+'], ['Kadın Elbise Dikimi', '₺800+'], ['Damatlık Dikimi', '₺20.000+'], ['Çocuk Kıyafeti Dikimi', '₺1000+']] },
    { icon: '🔧', title: 'Tamir Hizmetleri', keyword: 'kıyafet tamiri Antalya · fermuar tamiri Konyaaltı',
      desc: 'Yırtık, sökük, fermuar — günlük giyimde en sık ihtiyaç duyulan onarımlar.',
      rows: [['Fermuar Değişimi (Pantolon/Kot)', '₺300+'], ['Fermuar Değişimi (Mont/Ceket)', '₺300+']] },
    { icon: '📏', title: 'Tadilat Hizmetleri', keyword: 'paça kısaltma Antalya · bel daraltma Konyaaltı',
      desc: 'Kıyafetinizi vücudunuza tam oturtan hassas ölçü ayarları.',
      rows: [['Paça Kısaltma (Pantolon/Kot/Etek)', '₺200+'], ['Bel Daraltma', '₺200+'], ['Kol Kısaltma', '₺200+'], ['Elbise / Ceket Daraltma', '₺200+'], ['Gelinlik & Abiye Tadilatı', '₺800+']] },
    { icon: '🧺', title: 'Ütü & Kuru Temizleme', keyword: 'ütü hizmeti Antalya · kuru temizleme Konyaaltı',
      desc: 'Profesyonel buharlı ütü ve kuru temizleme. Otel ve adreslerden alım-teslimat.',
      rows: [['Ütü (adet)', 'Fotoğrafa göre'], ['Kuru Temizleme (Elbise)', 'Fotoğrafa göre'], ['Kuru Temizleme (Mont/Kaban)', 'Fotoğrafa göre'], ['Çamaşır & Ütü (kg)', 'Fotoğrafa göre']] },
  ],
  en: [
    { icon: '✂️', title: 'Tailoring Services', keyword: 'tailor Antalya · custom-fit sewing Konyaaltı',
      desc: 'Made-from-scratch garments. Men, women, children — designed and sewn to your exact measurements.',
      rows: [['Skirt / Trousers Tailoring', '€50+'], ["Women's Dress Making", '€40+'], ['Groom Suit', '€1000+'], ["Children's Clothing", '€50+']] },
    { icon: '🔧', title: 'Repair Services', keyword: 'clothing repair Antalya · zipper repair Konyaaltı',
      desc: 'Tears, seams, zippers — the everyday fixes clothing needs most.',
      rows: [['Zipper Replacement (Trousers/Jeans)', '€20+'], ['Zipper Replacement (Coat/Jacket)', '€15+']] },
    { icon: '📏', title: 'Alterations', keyword: 'hemming Antalya · waist taking in Konyaaltı',
      desc: 'Precise fit adjustments so your clothing sits exactly right on your body.',
      rows: [['Hemming (Trousers/Jeans/Skirt)', 'By photo'], ['Waist Taking In', 'By photo'], ['Sleeve Shortening', 'By photo'], ['Dress / Jacket Taking In', 'By photo'], ['Wedding & Evening Dress Alterations', 'By photo']] },
    { icon: '🧺', title: 'Ironing & Dry Cleaning', keyword: 'ironing service Antalya · dry cleaning Konyaaltı',
      desc: 'Professional steam ironing and dry cleaning.',
      rows: [['Ironing (per item)', 'By photo'], ['Dry Cleaning (Dress)', 'By photo'], ['Dry Cleaning (Coat)', 'By photo'], ['Laundry & Ironing (per kg)', 'By photo']] },
  ],
  ru: [
    { icon: '✂️', title: 'Пошив одежды', keyword: 'портной Анталья · пошив по меркам Коньяалты',
      desc: 'Пошив одежды с нуля. Мужская, женская, детская — по индивидуальным меркам.',
      rows: [['Пошив юбки / брюк', '€50+'], ['Пошив женского платья', '€40+'], ['Костюм жениха', '€1000+'], ['Пошив детской одежды', '€50+']] },
    { icon: '🔧', title: 'Ремонт одежды', keyword: 'ремонт одежды Анталья · ремонт молнии Коньяалты',
      desc: 'Разрывы, швы, молнии — самый частый ремонт повседневной одежды.',
      rows: [['Замена молнии (брюки/джинсы)', '€20+'], ['Замена молнии (пальто/куртка)', '€15+']] },
    { icon: '📏', title: 'Подгонка одежды', keyword: 'укорачивание брюк Анталья · заужение талии Коньяалты',
      desc: 'Точная подгонка по фигуре — чтобы одежда сидела идеально.',
      rows: [['Укорачивание (брюки/джинсы/юбка)', 'По фото'], ['Заужение талии', 'По фото'], ['Укорачивание рукавов', 'По фото'], ['Заужение платья / пиджака', 'По фото'], ['Подгонка свадебного/вечернего платья', 'По фото']] },
    { icon: '🧺', title: 'Глажка и химчистка', keyword: 'глажка Анталья · химчистка Коньяалты',
      desc: 'Профессиональная паровая глажка и химчистка.',
      rows: [['Глажка (за вещь)', 'По фото'], ['Химчистка (платье)', 'По фото'], ['Химчистка (пальто)', 'По фото'], ['Стирка и глажка (за кг)', 'По фото']] },
  ],
  de: [
    { icon: '✂️', title: 'Schneiderdienste', keyword: 'Maßschneiderei Antalya · Konyaaltı',
      desc: 'Maßgeschneiderte Kleidung. Herren, Damen, Kinder — exakt nach Ihren Maßen entworfen und genäht.',
      rows: [['Rock / Hose maßgeschneidert', '€50+'], ['Damenkleid maßgeschneidert', '€40+'], ['Herrenanzug (Bräutigam)', '€1000+'], ['Kinderkleidung', '€50+']] },
    { icon: '🔧', title: 'Reparaturdienste', keyword: 'Kleidungsreparatur Antalya · Reißverschluss Konyaaltı',
      desc: 'Risse, Nähte, Reißverschlüsse — die alltäglichen Reparaturen, die Kleidung am meisten braucht.',
      rows: [['Reißverschluss (Hose/Jeans)', '€20+'], ['Reißverschluss (Jacke/Mantel)', '€15+']] },
    { icon: '📏', title: 'Änderungsschneiderei', keyword: 'Hosen kürzen Antalya · Taille Konyaaltı',
      desc: 'Präzise Passformanpassungen, damit Ihre Kleidung genau richtig an Ihrem Körper sitzt.',
      rows: [['Kürzen (Hose/Jeans/Rock)', 'Per Foto'], ['Taille enger machen', 'Per Foto'], ['Ärmel kürzen', 'Per Foto'], ['Kleid / Jacke enger machen', 'Per Foto'], ['Braut- & Abendkleid ändern', 'Per Foto']] },
    { icon: '🧺', title: 'Bügeln & Reinigung', keyword: 'Bügelservice Antalya · Reinigung Konyaaltı',
      desc: 'Professionelles Dampfbügeln und chemische Reinigung. Abholung und Lieferung vom Hotel.',
      rows: [['Bügeln (pro Stück)', 'Per Foto'], ['Chemische Reinigung (Kleid)', 'Per Foto'], ['Chemische Reinigung (Mantel)', 'Per Foto'], ['Waschen & Bügeln (pro kg)', 'Per Foto']] },
  ],
};


const PROCESS_STEPS: [string, string, string][] = [
  ['01', 'Mahallenizi Belirtin', "WhatsApp\'tan bulunduğunuz mahalleyi ve ihtiyacınızı yazın."],
  ['02', 'Ölçü & Tasarım', 'Adresinizde ölçü alınır veya atölyede tasarım detayları belirlenir.'],
  ['03', 'Dikim / Üretim', 'Tekli dikim ya da toplu üniforma/fason üretimi atölyede tamamlanır.'],
  ['04', 'Teslimat', 'Eve ve otele her bölgede ücretsiz.'],
];

export default function KonyaaltiTailorServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <a href="#main-content" className="skip-link">İçeriğe geç</a>

      <div style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: 'var(--font-inter), system-ui, sans-serif', lineHeight: 1.6, minHeight: '100vh' }}>

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
              alt="Terzi Can — Konyaaltı Antalya terzi ve dikiş atölyesi"
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
              Antalya'da terzi arıyorsanız Terzi Can, Konyaaltı Hurma'daki atölyesinden bay, bayan ve çocuk kıyafetlerinde tamir, tadilat ve özel dikim yapar; Hurma, Liman, Sarısu, Uncalı, Gürsu ve çevresine, ayrıca Lara, Belek, Side ve Kemer otellerine hizmet verir. {DELIVERY.tr.urgent} {DELIVERY.tr.normal} Otellere alım-teslim ücretsizdir.
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
              üretimi, fason imalat ve kişiye özel tasarım. Antalya&apos;nın Muratpaşa, Kepez, Lara dahil yakın ilçelerine terzi hizmeti sağlıyoruz.
            </p>
          </div>

          <section className="sec" aria-labelledby="nb-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">📍 Konyaaltı Mahalleleri</span>
                <h2 className="sec-h" id="nb-h">Size En Yakın Mahalleden Başlıyoruz</h2>
                <p className="sec-sub">Tüm bölgelere eve ve otele ücretsiz servis veriyoruz.</p>
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
                <span className="eyebrow">₺ Fiyatlar 2026 · Prices · Цены</span>
                <h2 className="sec-h" id="price-h">Dikim, Tamir, Tadilat ve Ütü Hizmetleri</h2>
                <p className="sec-sub">Antalya Konyaaltı terzi fiyatları — Türkçe, İngilizce, Rusça ve Almanca. Kesin fiyat için WhatsApp&apos;tan fotoğraf gönderin.</p>
              </div>

              {LANGS.map((lang: Lang) => (
                <div key={lang} style={{ marginBottom: lang !== 'de' ? '3rem' : 0 }}>
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
                  <p className="wk-desc">Pantolon, mont, ceket, çanta fermuarı — ertesi gün teslim (acil 1–2 saat), ₺300&apos;den.</p>
                  <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör <span aria-hidden="true">→</span></span>
                </a>
                <a href="/konyaalti-paca-kisaltma" className="wk-card" style={{ display: 'block' }}>
                  <div className="wk-icon" aria-hidden="true">📏</div>
                  <h3 className="wk-tr">Paça Kısaltma Konyaaltı</h3>
                  <span className="wk-en">Hemming</span>
                  <p className="wk-desc">Pantolon, kot, etek kısaltma — ertesi gün teslim (acil 1–2 saat), ₺200&apos;den.</p>
                  <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör <span aria-hidden="true">→</span></span>
                </a>
                <a href="/antalya-gelinlik-tadilati" className="wk-card" style={{ display: 'block' }}>
                  <div className="wk-icon" aria-hidden="true">💍</div>
                  <h3 className="wk-tr">Gelinlik Tadilatı Antalya</h3>
                  <span className="wk-en">Wedding Dress Alterations</span>
                  <p className="wk-desc">Hassas daraltma, boy ayarı, korse onarımı — ₺800&apos;den.</p>
                  <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör <span aria-hidden="true">→</span></span>
                </a>
                <a href="/antalya-uniforma-imalati" className="wk-card" style={{ display: 'block' }}>
                  <div className="wk-icon" aria-hidden="true">🏨</div>
                  <h3 className="wk-tr">Üniforma İmalatı Antalya</h3>
                  <span className="wk-en">Uniform Manufacturing</span>
                  <p className="wk-desc">Otel, restoran, spa personeli için toplu üniforma dikimi ve nakış.</p>
                  <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör <span aria-hidden="true">→</span></span>
                </a>
              </div>
            </div>
          </section>

          <OrnekGorselSeridi konu={'terzi'} lang="tr" anahtarlar={['erkek-takim-olcu', 'erkek-palto-atolye', 'palto-yaka-detay', 'pilili-etek', 'beyaz-gomlek-katli', 'yun-pantolon-metre']} sayfaUrl="https://terzihizmeti.com.tr/antalya-terzi" />

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

        <FabricsOrderBlock lang="tr" />
        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Konyaaltı Tailor Service · {PHONE}</div>
          <nav className="foot-links" aria-label="Alt bilgi bağlantıları">
            <a href="/">Ana Sayfa</a>
            <a href="/otele-gelen-terzi-antalya">Otele Gelen Terzi</a>
            <a href="/en/tailor-service-antalya">English</a>
            <a href="/ru/uslugi-portnogo-antalya">Русский</a>
            <a href="/de/schneiderservice-antalya">Deutsch</a>
            <a href="https://swaphubs.com/terzi">SwapHubs Terzi</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
          <p style={{ marginTop: '1rem', fontSize: '.68rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.8 }}>
            Konyaaltı Tailor Service — Hurma, Liman, Sarısu, Uncalı, Gürsu, Öğretmenevleri, Ahatlı,
            Toros terzi ve dikiş atölyesi. Bay, bayan, çocuk kıyafeti, üniforma üretimi, fason imalat.
            Belek, Lara, Güzeloba, Kemer, Side otel bölgelerine otele gelen terzi servisi. Antalya tüm ilçeler. {PHONE}
          </p>
        </footer>
      </div>
    </>
  );
}
