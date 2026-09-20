import type { Metadata } from 'next';
import KetenPamukOzelDikim from '@/components/KetenPamukOzelDikim';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/de/leinen-baumwolle-schneiderei`;
const TR_URL   = `${SITE}/keten-pamuk-ozel-dikim`;
const EN_URL   = `${SITE}/en/linen-cotton-tailoring`;
const RU_URL   = `${SITE}/ru/poshiv-lyon-hlopok`;
const PHONE    = '+90 531 898 64 18';
const OG       = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Leinen & Baumwolle Maßschneiderei Modelle · Antalya Konyaaltı',
  description: 'Maßschneiderei aus 100% natürlichem Leinen und Baumwolle für ausländische Gäste. Stil wählen, Maße senden, Lieferung ans Hotel. ☎ ' + PHONE,
  keywords: [
    'Leinen Maßschneiderei Antalya', 'Baumwolle Maßschneiderei Antalya', 'Hotelschneider Leinen',
    'Naturstoff Schneider Antalya', 'Konyaaltı Leinen Schneider', 'Maßanfertigung Antalya',
  ],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { 'tr': TR_URL, 'en': EN_URL, 'ru': RU_URL, 'de': PAGE_URL, 'x-default': TR_URL },
  },
  openGraph: {
    title: 'Leinen & Baumwolle Maßschneiderei | Terzi Can',
    description: '100% natürliches Leinen und Baumwolle, genau nach Ihren Maßen geschneidert. Lieferung ans Hotel.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'de_DE', alternateLocale: ['tr_TR'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Leinen Baumwolle Maßschneiderei', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Leinen & Baumwolle Maßschneiderei', description: 'Maßanfertigung aus 100% Naturstoff, nach Ihren Maßen.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya', contact: PHONE },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL, name: metadata.title, inLanguage: 'de' },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      name: 'Leinen & Baumwolle Maßschneiderei', serviceType: 'Custom Tailoring',
      provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: '+905318986418', url: `${SITE}/antalya-terzi` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Antalya' },
      description: 'Maßschneiderei aus 100% natürlichem Leinen und Baumwolle, nach den eigenen Maßen des Gastes.',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KetenPamukOzelDikim lang="de" />
    </>
  );
}
