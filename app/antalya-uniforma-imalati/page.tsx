// app/antalya-uniforma-imalati/page.tsx
// Antalya geneli üniforma imalatı — otel, restoran, okul, hastane segmentli
// Hedef: "üniforma dikim Antalya", "kurumsal giyim Antalya", "otel personel kıyafeti" vb.

import type { Metadata } from 'next'
import UniformaClient from './UniformaClient'

const SITE       = 'https://terzihizmeti.com.tr'
const PAGE_URL   = `${SITE}/antalya-uniforma-imalati`
const PHONE      = '+90 531 898 64 18'
const PHONE_TEL  = '+905318986418'
const WA_NUM     = '905318986418'
const MAPS       = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9'
const OG         = `${SITE}/og-terzi-can.jpg`
const TODAY      = new Date().toISOString().split('T')[0]

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Antalya Üniforma İmalatı — Otel, Restoran, Okul, Hastane Kurumsal Giyim',
  description:
    'Antalya geneli üniforma dikim ve tasarım firması. Otel personeli, restoran, okul, hastane, güvenlik üniforması. Kurumsal giyim tasarımı, kumaş seçimi, seri imalat, nakış ve logo baskı. Tüm Antalya\'ya hizmet. ☎ ' + PHONE,
  keywords: [
    'üniforma imalatı Antalya', 'üniforma dikim Antalya', 'kurumsal giyim Antalya',
    'otel üniforması Antalya', 'otel personel kıyafeti', 'resepsiyon üniforması',
    'restoran üniforması Antalya', 'garson kıyafeti', 'aşçı üniforması', 'şef ceketi',
    'okul üniforması Antalya', 'okul kıyafeti dikimi', 'öğrenci forması',
    'hastane üniforması Antalya', 'doktor önlüğü', 'hemşire üniforması', 'sağlık personeli kıyafeti',
    'güvenlik üniforması Antalya', 'personel kıyafeti dikimi',
    'toplu üniforma siparişi', 'fason üniforma üretimi', 'seri üniforma imalatı Antalya',
    'üniforma tasarım firması', 'kurumsal kıyafet tasarımı Antalya',
    'nakış logo baskı üniforma', 'üniforma fiyatları 2026',
    'Konyaaltı üniforma', 'Muratpaşa üniforma', 'Lara üniforma', 'Kemer üniforma',
    'Belek üniforma', 'Alanya üniforma', 'Manavgat üniforma', 'Side üniforma',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { 'tr': PAGE_URL, 'x-default': PAGE_URL },
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Terzi Hizmeti',
    title: 'Antalya Üniforma İmalatı — Otel, Restoran, Okul, Hastane',
    description: 'Antalya geneli kurumsal giyim ve üniforma imalatı. Tasarım, kumaş, seri üretim, nakış — tek elden.',
    locale: 'tr_TR',
    images: [{ url: OG, width: 1200, height: 630, alt: 'Antalya Üniforma İmalatı — Terzi Can' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya Üniforma İmalatı — Terzi Can',
    description: 'Otel, restoran, okul, hastane üniforması. Tasarım + seri imalat + nakış. ☎ ' + PHONE,
    images: [OG],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ' },
  other: {
    'geo.region': 'TR-07', 'geo.placename': 'Antalya',
    'geo.position': '36.8851;30.6930', ICBM: '36.8851, 30.6930',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ClothingStore'],
      '@id': `${PAGE_URL}#business`,
      name: 'Terzi Can — Üniforma İmalatı',
      alternateName: ['Terzi Can Kurumsal Giyim', 'Antalya Üniforma Atölyesi'],
      description: 'Antalya genelinde otel, restoran, okul, hastane ve kurumsal işletmeler için üniforma tasarımı, kumaş seçimi, seri imalat, nakış ve logo baskı hizmeti.',
      url: PAGE_URL,
      telephone: PHONE_TEL,
      priceRange: '₺₺',
      currenciesAccepted: 'TRY',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      image: OG,
      hasMap: MAPS,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hurma Mahallesi, Konyaaltı',
        addressLocality: 'Antalya',
        addressRegion: 'Antalya',
        postalCode: '07130',
        addressCountry: 'TR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 36.8851, longitude: 30.6930 },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '09:00', closes: '19:00',
      }],
      areaServed: [
        'Konyaaltı','Muratpaşa','Kepez','Döşemealtı','Aksu',
        'Lara','Belek','Kemer','Alanya','Manavgat','Side','Serik',
      ].map(n => ({ '@type': 'City', name: n })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Üniforma İmalatı Hizmetleri',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Otel Personel Üniforması', description: 'Resepsiyon, kat hizmetleri, üst düzey yönetici kıyafeti tasarım ve imalatı.' }, availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restoran & Mutfak Üniforması', description: 'Garson, şef, aşçı üniforması ve önlük imalatı.' }, availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Okul Üniforması', description: 'Öğrenci forması, spor kıyafeti, okul öncesi üniforma tasarımı.' }, availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hastane & Sağlık Üniforması', description: 'Doktor önlüğü, hemşire forması, sağlık personeli kıyafeti.' }, availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Güvenlik Üniforması', description: 'Güvenlik personeli, vale, teknik ekip kıyafeti.' }, availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nakış & Logo Baskı', description: 'Kurumsal logo nakışı, isim işlemesi, dijital baskı.' }, availability: 'https://schema.org/InStock' },
        ],
      },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '94', bestRating: '5', worstRating: '1' },
      sameAs: [MAPS, `https://wa.me/${WA_NUM}`, SITE],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      name: 'Antalya Üniforma İmalatı — Otel, Restoran, Okul, Hastane',
      url: PAGE_URL,
      isPartOf: { '@type': 'WebSite', '@id': `${SITE}#website`, name: 'Terzi Hizmeti', url: SITE },
      about: { '@id': `${PAGE_URL}#business` },
      dateModified: TODAY,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Üniforma İmalatı', item: PAGE_URL },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Antalya\'da toplu üniforma siparişi verebilir miyim?', acceptedAnswer: { '@type': 'Answer', text: `Evet. Minimum sipariş adedi işletme büyüklüğüne göre değişir — küçük işletmeler için 10 adetten, büyük zincirler için sınırsız üretim kapasitesi. WhatsApp'tan ihtiyacınızı belirtin. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Otel personeli için hangi üniformaları dikiyorsunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Resepsiyon, kat hizmetleri, güvenlik, teknik ekip, animasyon ve yönetici kıyafetleri dahil otel personelinin tüm departmanları için özel tasarım üniforma üretiyoruz.' } },
        { '@type': 'Question', name: 'Okul üniforması siparişi ne kadar sürede teslim edilir?', acceptedAnswer: { '@type': 'Answer', text: 'Sipariş adedine ve tasarım karmaşıklığına göre 2–4 hafta içinde teslim ediyoruz. Sezon başı yoğunluğu için erken sipariş önerilir.' } },
        { '@type': 'Question', name: 'Hastane ve sağlık kuruluşları için üniforma imalatı yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Doktor önlüğü, hemşire forması ve sağlık personeli kıyafetlerini hijyen standartlarına uygun kumaşlarla üretiyoruz.' } },
        { '@type': 'Question', name: 'Logo nakış ve baskı hizmeti dahil mi?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Kurumsal logonuzu nakış veya dijital baskı ile üniformalara işliyoruz. Ayrı bir hizmet olarak da sipariş verilebilir.' } },
        { '@type': 'Question', name: 'Antalya\'nın hangi bölgelerine hizmet veriyorsunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Konyaaltı, Muratpaşa, Kepez, Lara, Belek, Kemer, Alanya, Manavgat, Side dahil tüm Antalya geneline üniforma imalatı ve teslimat hizmeti sunuyoruz.' } },
      ],
    },
  ],
}

export default function UniformaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniformaClient />
    </>
  )
}
