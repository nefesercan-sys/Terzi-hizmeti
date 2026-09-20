import type { Metadata } from 'next';
import KetenPamukOzelDikim from '@/components/KetenPamukOzelDikim';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/ru/poshiv-lyon-hlopok`;
const TR_URL   = `${SITE}/keten-pamuk-ozel-dikim`;
const EN_URL   = `${SITE}/en/linen-cotton-tailoring`;
const DE_URL   = `${SITE}/de/leinen-baumwolle-schneiderei`;
const PHONE    = '+90 531 898 64 18';
const OG       = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Пошив на заказ из льна и хлопка · Анталья Коньяалты',
  description: 'Пошив на заказ из 100% натурального льна и хлопка для иностранных гостей. Выберите модель, пришлите мерки — доставим в отель. ☎ ' + PHONE,
  keywords: [
    'пошив лён Анталья', 'пошив хлопок Анталья', 'портной в отель лён',
    'натуральная ткань портной Анталья', 'Коньяалты портной лён', 'пошив на заказ Анталья',
  ],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { 'tr': TR_URL, 'en': EN_URL, 'ru': PAGE_URL, 'de': DE_URL, 'x-default': TR_URL },
  },
  openGraph: {
    title: 'Пошив на заказ из льна и хлопка | Terzi Can',
    description: '100% натуральный лён и хлопок, пошив точно по вашим меркам. Доставка в отель.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'ru_RU', alternateLocale: ['tr_TR'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Пошив лён хлопок на заказ', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Пошив из льна и хлопка на заказ', description: 'Пошив из 100% натуральной ткани по вашим меркам.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya', contact: PHONE },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL, name: metadata.title, inLanguage: 'ru' },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      name: 'Пошив на заказ из льна и хлопка', serviceType: 'Custom Tailoring',
      provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: '+905318986418', url: `${SITE}/antalya-terzi` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Antalya' },
      description: 'Пошив на заказ из 100% натурального льна и хлопка, по индивидуальным меркам гостя.',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KetenPamukOzelDikim lang="ru" />
    </>
  );
}
