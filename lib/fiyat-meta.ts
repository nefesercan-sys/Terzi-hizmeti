// lib/fiyat-meta.ts — fiyat/SSS sayfaları için merkezi metadata + şema (4 dil)
import type { Metadata } from 'next';
import { FT, FIYAT_URLS, PRICE_ROWS, SITE, PHONE_TEL, type FLang } from '@/components/TerziFiyatlariSayfasi';

const OG = `${SITE}/terzi-can-hero.jpg`;

export function buildFiyatMetadata(lang: FLang): Metadata {
  const T = FT[lang];
  const url = FIYAT_URLS[lang];
  return {
    metadataBase: new URL(SITE),
    title: { absolute: T.metaTitle },
    description: T.metaDesc,
    keywords: T.keywords,
    authors: [{ name: 'Terzi Can', url: SITE }],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: url,
      languages: { tr: FIYAT_URLS.tr, en: FIYAT_URLS.en, de: FIYAT_URLS.de, ru: FIYAT_URLS.ru, 'x-default': FIYAT_URLS.tr },
    },
    openGraph: {
      title: T.ogTitle, description: T.ogDesc, url, siteName: 'Terzi Can',
      locale: T.locale, type: 'website',
      images: [{ url: OG, width: 1024, height: 1024, alt: T.webName }],
    },
    twitter: { card: 'summary_large_image', title: T.ogTitle, description: T.ogDesc, images: [OG] },
    other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
  };
}

export function buildFiyatJsonLd(lang: FLang) {
  const T = FT[lang];
  const url = FIYAT_URLS[lang];
  const today = new Date().toISOString().split('T')[0];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: T.webName, inLanguage: T.htmlLang, dateModified: today,
        breadcrumb: { '@id': `${url}#breadcrumb` },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-desc', '#sss'] },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
          { '@type': 'ListItem', position: 2, name: T.webName, item: url },
        ],
      },
      {
        '@type': 'Service', '@id': `${url}#service`, serviceType: T.serviceType,
        provider: {
          '@type': ['LocalBusiness', 'ClothingStore'], name: 'Terzi Can', telephone: PHONE_TEL, url: SITE,
          address: { '@type': 'PostalAddress', streetAddress: 'Hurma Mahallesi', addressLocality: 'Konyaaltı', addressRegion: 'Antalya', postalCode: '07130', addressCountry: 'TR' },
          openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00', closes: '19:00',
          }],
          availableLanguage: ['tr', 'en', 'ru', 'de'],
        },
        areaServed: ['Konyaaltı', 'Muratpaşa', 'Kepez', 'Lara', 'Antalya'].map((n) => ({ '@type': 'Place', name: n })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog', name: T.catalogName,
          itemListElement: PRICE_ROWS.flatMap((g, i) => g.rows.map((p, j) => ({
            '@type': 'Offer', priceCurrency: 'TRY', price: p.replace(/[^0-9]/g, ''),
            itemOffered: { '@type': 'Service', name: T.priceNames[i][j] },
          }))),
        },
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: T.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };
}
