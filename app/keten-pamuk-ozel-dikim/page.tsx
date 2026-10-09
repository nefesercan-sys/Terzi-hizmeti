// app/keten-pamuk-ozel-dikim/page.tsx
// DÜZELTME: Bu dosya daha önce components/KetenPamukOzelDikim.tsx dosyasının birebir kopyasıydı
// (metadata yoktu → canonical ana sayfaya düşüyordu, hreflang karşılığı yoktu, şema yoktu).
// Artık bileşeni kullanan, kendi metadata/hreflang/şemasını basan normal bir sayfa.
import type { Metadata } from 'next';
import KetenPamukOzelDikim, { KETEN_PAMUK_T } from '@/components/KetenPamukOzelDikim';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/keten-pamuk-ozel-dikim`;
const EN_URL   = `${SITE}/en/linen-cotton-tailoring`;
const RU_URL   = `${SITE}/ru/poshiv-lyon-hlopok`;
const DE_URL   = `${SITE}/de/leinen-baumwolle-schneiderei`;
const PHONE    = '+90 531 898 64 18';
const OG       = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: 'Keten ve Pamuk Özel Dikim Antalya | Terzi Can' },
  description:
    'Antalya Konyaaltı’nda %100 keten ve pamuk özel dikim: modeli seçin, ölçünüzü gönderin, otelinize veya adresinize teslim edelim. Toptan numune ve seri imalat. ☎ ' + PHONE,
  keywords: [
    'keten özel dikim Antalya', 'pamuk özel dikim Antalya', 'keten elbise diktirme Antalya',
    'keten gömlek dikimi', 'ölçüye göre keten takım', 'Konyaaltı terzi keten',
    'keten pamuk toptan imalat', 'numune ve seri imalat keten',
  ],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { tr: PAGE_URL, en: EN_URL, ru: RU_URL, de: DE_URL, 'x-default': PAGE_URL },
  },
  openGraph: {
    title: 'Keten ve Pamuk Özel Dikim — Terzi Can Antalya',
    description: '%100 doğal keten ve pamuk, ölçünüze göre dikilir. Otelinize veya adresinize teslim.',
    url: PAGE_URL, siteName: 'Terzi Can', locale: 'tr_TR', type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Keten ve pamuk özel dikim, Terzi Can Antalya' }],
  },
  twitter: { card: 'summary_large_image', title: 'Keten ve Pamuk Özel Dikim — Antalya', description: 'Doğal kumaştan ölçüye göre dikim.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya', contact: PHONE },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL, inLanguage: 'tr',
      name: 'Keten ve Pamuk Özel Dikim Antalya',
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Keten ve Pamuk Özel Dikim', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      name: 'Keten ve Pamuk Özel Dikim', serviceType: 'Özel dikim',
      provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: '+905318986418', url: SITE },
      areaServed: { '@type': 'AdministrativeArea', name: 'Antalya' },
      description: 'Misafirin kendi ölçüsüne göre %100 doğal keten ve pamuk kumaştan özel dikim.',
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`,
      mainEntity: KETEN_PAMUK_T.tr.faq.map(([q, a]: string[]) => ({
        '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KetenPamukOzelDikim lang="tr" />
    </>
  );
}
