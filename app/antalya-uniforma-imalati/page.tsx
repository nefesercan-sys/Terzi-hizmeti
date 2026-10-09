import type { Metadata, Viewport } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { reviewSchema } from '@/lib/reviews';

// ── Mobil / Tarayıcı Yapılandırması ─────────────────────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

const SITE_URL      = 'https://terzihizmeti.com.tr/antalya-uniforma-imalati';
const HOME_URL      = 'https://terzihizmeti.com.tr';
const PHONE         = '+90 531 898 64 18';
const PHONE_E164    = '+905318986418';
const LAST_MODIFIED = '2026-10-01';

const PAGE_TITLE = 'Antalya Üniforma İmalatı & Kurumsal Kıyafet Dikimi';
const PAGE_DESC  =
  'Antalya otel, restoran, hastane, okul ve güvenlik personeli üniforma üretimi. Özel tasarım, nakış & baskı logosu ve seri imalat hizmeti. ☎ ' + PHONE;

// DÜZELTME: /og/terzi-can-uniforma.jpg dosyası yoktu (404). Var olan görsel kullanılıyor.
const OG_IMAGE = `${HOME_URL}/terzi-can-hero.jpg`;

const ANTALYA_ILCELER = [
  'Antalya','Konyaaltı','Muratpaşa','Kepez','Döşemealtı','Aksu',
  'Lara','Belek','Kemer','Alanya','Manavgat','Side','Serik',
  'Kaş','Kalkan','Finike','Kumluca','Gazipaşa','Mahmutlar',
  'Kundu','Boğazkent','Kadriye','Beldibi','Göynük','Tekirova',
].map(name => ({ '@type': 'City', name }));

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Tailor'],
      ...reviewSchema(),
      '@id': `${HOME_URL}/#business`,
      name: 'Terzi Can',
      alternateName: [
        'Antalya Üniforma İmalatı',
        'Antalya Kurumsal Kıyafet Dikimi',
        'Konyaaltı Terzi Can',
      ],
      description:
        'Antalya genelinde otel, restoran, hastane, okul ve güvenlik firmaları için profesyonel üniforma üretimi ve özel tasarım dikiş atölyesi.',
      url: HOME_URL,
      telephone: PHONE_E164,
      priceRange: '$$',
      currenciesAccepted: 'TRY, EUR, USD, RUB',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hurma Mahallesi',
        addressLocality: 'Konyaaltı',
        addressRegion: 'Antalya',
        postalCode: '07130',
        addressCountry: 'TR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 36.857466, longitude: 30.596987 },
      areaServed: ANTALYA_ILCELER,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Antalya Üniforma ve Kurumsal Kıyafet İmalatı Hizmetleri 2026',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Güvenlik Üniforması',
              description: 'Güvenlik personeli, vale, teknik ekip kıyafeti imalatı.',
              areaServed: ANTALYA_ILCELER,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Hastane & Sağlık Üniforması',
              description: 'Doktor önlüğü, hemşire forması, sağlık personeli kıyafeti.',
              areaServed: ANTALYA_ILCELER,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Okul Üniforması',
              description: 'Öğrenci forması, spor kıyafeti, okul öncesi üniforma tasarımı.',
              areaServed: ANTALYA_ILCELER,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Restoran & Mutfak Üniforması',
              description: 'Garson, şef, aşçı üniforması ve önlük imalatı.',
              areaServed: ANTALYA_ILCELER,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Otel Personel Üniforması',
              description: 'Resepsiyon, kat hizmetleri, kat görevlisi, bellboy ve spa kıyafetleri.',
              areaServed: ANTALYA_ILCELER,
            },
          },
        ],
      },
    },

    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}#webpage`,
      name: PAGE_TITLE,
      url: SITE_URL,
      isPartOf: { '@id': `${HOME_URL}/#website` },
      about: { '@id': `${HOME_URL}/#business` },
      description: PAGE_DESC,
      inLanguage: 'tr',
      datePublished: '2024-01-01',
      dateModified: LAST_MODIFIED,
      lastReviewed: LAST_MODIFIED,
      breadcrumb: { '@id': `${SITE_URL}#breadcrumb` },
      mainEntity: { '@id': `${HOME_URL}/#business` },
    },

    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: HOME_URL },
        { '@type': 'ListItem', position: 2, name: 'Antalya Üniforma İmalatı', item: SITE_URL },
      ],
    },

    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Antalya özel tasarım ve logolu üniforma yaptırabilir miyiz?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Evet, otel, restoran, okul, hastane ve güvenlik firmaları için firmanıza özel logo nakışlı veya baskılı üniforma üretimi yapıyoruz. WhatsApp: ${PHONE}`,
          },
        },
        {
          '@type': 'Question',
          name: 'Üniforma imalatında minimum sipariş adedi var mı?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Terzi Can atölyemizde hem az adetli özel siparişler hem de yüksek adetli seri imalatlar için çözüm sunuyoruz. WhatsApp: ${PHONE}`,
          },
        },
      ],
    },
  ],
};

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(HOME_URL),
  title: { absolute: PAGE_TITLE + ' | Terzi Can' },
  description: PAGE_DESC,
  keywords: [
    'Antalya üniforma imalatı','otel personeli kıyafeti Antalya','güvenlik üniforması Antalya',
    'okul forması dikimi Antalya','aşçı kıyafeti Antalya','garson önlüğü Antalya',
    'sağlık personeli forması Antalya','doktor önlüğü dikimi','özel dikim atölyesi Antalya',
    'terzi can Antalya üniforma',
  ],
  authors: [{ name: 'Terzi Can', url: HOME_URL }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: SITE_URL,
    siteName: 'Terzi Can',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1024, height: 1024, alt: 'Antalya Üniforma İmalatı Terzi Can' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
  },
};

export default function UniformaImalatiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Antalya Üniforma İmalatı & Kurumsal Kıyafet Dikimi</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Terzi Can olarak Antalya genelindeki oteller, restoranlar, hastaneler, okullar ve güvenlik şirketleri için yüksek kaliteli kumaşlar ve özelleştirilebilir tasarımlarla profesyonel üniforma imalatı hizmeti sunuyoruz.
        </p>
      <ReviewsBlock lang="tr" />
      </main>
    </>
  );
}
