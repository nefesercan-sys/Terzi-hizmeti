import type { Metadata } from 'next';
import KetenPamukOzelDikim from '@/components/KetenPamukOzelDikim';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/en/linen-cotton-tailoring`;
const TR_URL   = `${SITE}/keten-pamuk-ozel-dikim`;
const RU_URL   = `${SITE}/ru/poshiv-lyon-hlopok`;
const DE_URL   = `${SITE}/de/leinen-baumwolle-schneiderei`;
const PHONE    = '+90 531 898 64 18';
const OG       = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Linen & Cotton Custom Tailoring Models · Antalya Konyaaltı',
  description: 'Custom tailoring in 100% natural linen and cotton for foreign guests. Pick a style, send your measurements, we deliver to your hotel. ☎ ' + PHONE,
  keywords: [
    'linen custom tailoring Antalya', 'cotton custom tailoring Antalya', 'hotel tailor linen',
    'natural fabric tailor Antalya', 'Konyaaltı linen tailor', 'tourist custom tailoring Antalya',
  ],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { 'tr': TR_URL, 'en': PAGE_URL, 'ru': RU_URL, 'de': DE_URL, 'x-default': TR_URL },
  },
  openGraph: {
    title: 'Linen & Cotton Custom Tailoring Models | Terzi Can',
    description: '100% natural linen and cotton, tailored exactly to your measurements. Delivered to your hotel.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'en_US', alternateLocale: ['tr_TR'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Linen Cotton Custom Tailoring', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Linen & Cotton Custom Tailoring', description: 'Custom-made in 100% natural fabric, to your measurements.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya', contact: PHONE },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL, name: metadata.title, inLanguage: 'en' },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      name: 'Linen & Cotton Custom Tailoring', serviceType: 'Custom Tailoring',
      provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: '+905318986418', url: `${SITE}/antalya-terzi` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Antalya' },
      description: 'Custom tailoring in 100% natural linen and cotton, made to the guest\'s own measurements.',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KetenPamukOzelDikim lang="en" />
    </>
  );
}
