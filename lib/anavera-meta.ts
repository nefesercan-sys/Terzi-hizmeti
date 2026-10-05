import type { Metadata } from 'next';
import { ANAVERA_URLS, translations, type AnaveraLang } from '@/components/AnaveraTekstilSayfasi';

const SITE    = 'https://terzihizmeti.com.tr';
const OG      = 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop';
const PHONE_E = '+905318986418';

type Copy = { title: string; description: string; ogLocale: string; keywords: string[] };

const COPY: Record<AnaveraLang, Copy> = {
  en: {
    title: 'Clothing Manufacturer in Turkey: Sample to Export | Anavera',
    description: 'Custom garment production in Turkey: design, pattern, trial sample, serial production and export. For startups to large buyers, no minimum order. Get a quote.',
    ogLocale: 'en_US',
    keywords: ['clothing manufacturer Turkey', 'garment manufacturer Turkey', 'private label clothing manufacturer Turkey', 'custom clothing production Turkey', 'apparel sourcing Turkey', 'sample to production garment', 'OEM garment manufacturer Turkey', 'small batch clothing manufacturer Turkey', 'uniform manufacturer Turkey', 'textile sourcing from Turkey', 'fashion startup manufacturer Turkey', 'clothing export Turkey'],
  },
  de: {
    title: 'Bekleidungshersteller Türkei: Muster bis Export | Anavera',
    description: 'Bekleidungsproduktion in der Türkei: Design, Schnittmuster, Probemuster, Serienfertigung und Export. Von Gründern bis Großkunden, keine Mindestmenge. Angebot anfragen.',
    ogLocale: 'de_DE',
    keywords: ['Bekleidungshersteller Türkei', 'Textilhersteller Türkei', 'Private Label Bekleidung Türkei', 'Bekleidung produzieren lassen Türkei', 'Musterfertigung Bekleidung', 'Serienfertigung Bekleidung Türkei', 'Kleinserie Bekleidung Hersteller', 'Berufsbekleidung Hersteller Türkei', 'Textilien aus der Türkei beziehen', 'Start-up Mode Hersteller Türkei', 'Lohnfertigung Bekleidung Türkei'],
  },
  ru: {
    title: 'Производство одежды в Турции: от образца до экспорта | Anavera',
    description: 'Пошив одежды в Турции: дизайн, лекала, пробный образец, серийное производство и экспорт. От стартапов до крупных заказчиков, без минимального заказа. Запросите цену.',
    ogLocale: 'ru_RU',
    keywords: ['производитель одежды Турция', 'пошив одежды в Турции', 'швейная фабрика Турция', 'пошив под частной маркой Турция', 'заказать пошив одежды в Турции', 'производство одежды малыми партиями Турция', 'разработка образцов одежды', 'серийное производство одежды Турция', 'производитель униформы Турция', 'закупка текстиля в Турции', 'производство одежды для стартапа'],
  },
  tr: {
    title: 'Tekstil Üretimi: Numuneden Seri İmalata İhracata | Anavera',
    description: 'Her model giysi için tasarım, kalıp, kumaş temini, numune, seri imalat ve ihracat. Girişimciden büyük ölçekli alıcıya, sipariş sınırı yok. Teklif alın.',
    ogLocale: 'tr_TR',
    keywords: ['hazır giyim üreticisi', 'fason tekstil imalatı', 'özel marka giyim üretimi', 'numune çalışması tekstil', 'seri imalat konfeksiyon', 'kalıp ve numune hazırlama', 'tekstil ihracat firması', 'girişimci giyim üretimi', 'küçük adetli giyim üretimi', 'üniforma üreticisi Türkiye', 'tekstil danışmanlık ve üretim', 'konfeksiyon imalatçısı Antalya'],
  },
};

export function buildAnaveraMetadata(lang: AnaveraLang): Metadata {
  const c = COPY[lang];
  const url = ANAVERA_URLS[lang];
  return {
    metadataBase: new URL(SITE),
    title: { absolute: c.title },
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
      images: [{ url: OG, width: 1200, height: 630, alt: 'Anavera Tekstil' }],
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
        '@type': 'Organization',
        '@id': `${SITE}/anavera-tekstil#business`,
        name: 'Anavera Tekstil',
        alternateName: ['Anavera Textile', 'Анавера Текстиль'],
        description: t.heroDesc,
        url,
        telephone: PHONE_E,
        address: { '@type': 'PostalAddress', addressLocality: 'Antalya', addressRegion: 'Antalya', addressCountry: 'TR' },
        areaServed: ['Turkey', 'European Union', 'Germany', 'United Kingdom', 'Russia'],
        parentOrganization: { '@id': `${SITE}#business` },
        knowsLanguage: ['en', 'de', 'ru', 'tr'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.catTitle,
          itemListElement: [
            ...t.cat.map((c) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: c.title, description: c.desc } })),
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: t.supTitle, description: t.supDesc } },
            ...t.process.filter((_, i) => [3, 4, 6].includes(i)).map((p) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.title, description: p.desc } })),
          ],
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: PHONE_E,
          contactType: 'sales',
          areaServed: ['TR', 'EU', 'DE', 'RU', 'GB'],
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
        mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.title, acceptedAnswer: { '@type': 'Answer', text: f.desc } })),
      },
    ],
  };
}
