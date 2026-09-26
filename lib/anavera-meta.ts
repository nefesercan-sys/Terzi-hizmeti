// lib/anavera-meta.ts
import type { Metadata } from 'next';
import { ANAVERA_URLS, translations, type AnaveraLang } from '@/components/AnaveraTekstilSayfasi';

const SITE  = 'https://terzihizmeti.com.tr';
const OG    = 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop';
const PHONE_E = '+905318986418';

type Copy = { title: string; description: string; ogLocale: string; keywords: string[] };

const COPY: Record<AnaveraLang, Copy> = {
  en: {
    title: 'Anavera Tekstil | Turkish Clothing Manufacturer & Exporter',
    description: 'Turkish menswear & womenswear manufacturer exporting to the EU, UK and CIS. OEM/private label, ISO 9001, MOQ from 300 pcs. Get a B2B quote today.',
    ogLocale: 'en_US',
    keywords: ['Turkish clothing manufacturer', 'clothing manufacturer Turkey', 'garment factory Turkey', 'private label manufacturer Turkey', 'uniform manufacturer Turkey', 'textile exporter Turkey', 'OEM apparel manufacturer Turkey', 'sample development manufacturer Turkey', 'mass production clothing Turkey', 'serial production garment factory', 'production tracking manufacturer', 'menswear womenswear kidswear manufacturer Turkey', 'kidswear manufacturer Turkey'],
  },
  de: {
    title: 'Anavera Tekstil | Bekleidungshersteller aus der Türkei',
    description: 'Türkischer Hersteller für Damen- & Herrenbekleidung, Export in die EU. OEM/Eigenmarke, ISO 9001, ab 300 Stück MOQ. Jetzt B2B-Angebot anfordern.',
    ogLocale: 'de_DE',
    keywords: ['Bekleidungshersteller Türkei', 'Textilhersteller Türkei', 'Konfektionsware Türkei', 'Private Label Hersteller Türkei', 'Berufsbekleidung Hersteller Türkei', 'OEM Bekleidung Türkei', 'Musterentwicklung Hersteller Türkei', 'Serienproduktion Bekleidung Türkei', 'Massenproduktion Textilfabrik Türkei', 'Produktionsverfolgung Hersteller', 'Herren Damen Kinderbekleidung Hersteller Türkei', 'Kinderbekleidung Hersteller Türkei'],
  },
  ru: {
    title: 'Anavera Tekstil | Производитель одежды в Турции',
    description: 'Турецкий производитель мужской и женской одежды, экспорт в ЕС и Россию. OEM/частная марка, ISO 9001, от 300 шт. Запросите B2B-предложение.',
    ogLocale: 'ru_RU',
    keywords: ['производитель одежды Турция', 'швейная фабрика Турция', 'текстильная фабрика Турция', 'пошив под частной маркой Турция', 'производитель униформы Турция', 'OEM одежда Турция', 'разработка образцов производитель Турция', 'серийное производство одежды Турция', 'массовое производство одежды фабрика', 'контроль производства одежды', 'производство мужской женской детской одежды Турция', 'производитель детской одежды Турция'],
  },
  tr: {
    title: 'Anavera Tekstil | Türkiye Tekstil Üretici ve İhracatçısı',
    description: 'Avrupa ve Rusya\'ya ihracat yapan Türk hazır giyim üreticisi. OEM/özel marka, ISO 9001, 300 adetten MOQ. Hemen B2B teklif alın.',
    ogLocale: 'tr_TR',
    keywords: ['Türkiye tekstil üreticisi', 'hazır giyim üreticisi', 'fason tekstil imalatı', 'özel marka giyim üretimi', 'üniforma üreticisi Türkiye', 'ihracat tekstil firması Antalya', 'numune çalışması tekstil üreticisi', 'seri imalat konfeksiyon', 'toplu üretim tekstil fabrikası', 'üretim takibi tekstil', 'erkek kadın çocuk tekstili imalatı', 'çocuk tekstili üreticisi Türkiye'],
  },
};

export function buildAnaveraMetadata(lang: AnaveraLang): Metadata {
  const c = COPY[lang];
  const url = ANAVERA_URLS[lang];
  return {
    metadataBase: new URL(SITE),
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    alternates: {
      canonical: url,
      languages: {
        'en': ANAVERA_URLS.en,
        'de': ANAVERA_URLS.de,
        'ru': ANAVERA_URLS.ru,
        'tr': ANAVERA_URLS.tr,
        'x-default': ANAVERA_URLS.en,
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url, siteName: 'Anavera Tekstil', locale: c.ogLocale, type: 'website',
      images: [{ url: OG, width: 1200, height: 630, alt: 'Anavera Tekstil — Turkish Apparel Manufacturer' }],
    },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: [OG] },
    other: { contact: PHONE_E },
  };
}

export function buildAnaveraJsonLd(lang: AnaveraLang) {
  const t = translations[lang];
  const url = ANAVERA_URLS[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ClothingStore'],
        '@id': `${SITE}/anavera-tekstil#business`,
        name: 'Anavera Tekstil',
        alternateName: ['Anavera Textile', 'Анавера Текстиль'],
        description: t.heroDesc,
        url,
        telephone: PHONE_E,
        image: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg',
        address: { '@type': 'PostalAddress', addressLocality: 'Antalya', addressRegion: 'Antalya', addressCountry: 'TR' },
        areaServed: ['European Union', 'Germany', 'France', 'Italy', 'Netherlands', 'Poland', 'Austria', 'Switzerland', 'United Kingdom', 'Russia'],
        parentOrganization: { '@id': `${SITE}#business` },
        sameAs: [ANAVERA_URLS.en, ANAVERA_URLS.de, ANAVERA_URLS.ru, ANAVERA_URLS.tr, `https://wa.me/${PHONE_E}`],
        knowsLanguage: ['en', 'de', 'ru', 'tr'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Apparel Manufacturing Categories & Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: t.cat1Title, description: t.cat1Desc } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: t.cat2Title, description: t.cat2Desc } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: t.cat3Title, description: t.cat3Desc } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: t.cat4Title, description: t.cat4Desc } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: t.process1Title, description: t.process1Desc } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: t.process3Title, description: t.process3Desc } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: t.process4Title, description: t.process4Desc } },
          ],
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: PHONE_E,
          contactType: 'sales',
          areaServed: ['EU', 'DE', 'RU', 'TR', 'GB'],
          availableLanguage: ['English', 'German', 'Russian', 'Turkish'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Anavera Tekstil', item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: t.faq1Q, acceptedAnswer: { '@type': 'Answer', text: t.faq1A } },
          { '@type': 'Question', name: t.faq2Q, acceptedAnswer: { '@type': 'Answer', text: t.faq2A } },
          { '@type': 'Question', name: t.faq3Q, acceptedAnswer: { '@type': 'Answer', text: t.faq3A } },
          { '@type': 'Question', name: t.faq4Q, acceptedAnswer: { '@type': 'Answer', text: t.faq4A } },
          { '@type': 'Question', name: t.faq5Q, acceptedAnswer: { '@type': 'Answer', text: t.faq5A } },
        ],
      },
    ],
  };
}
