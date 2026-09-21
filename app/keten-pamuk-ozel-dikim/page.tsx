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
  title: 'Keten & Pamuk Özel Dikim Modelleri · Antalya Konyaaltı',
  description: 'Yabancı misafirler için %100 doğal keten ve pamuk kumaştan özel dikim. Model seçin, ölçünüzü verin, otelinize teslim edelim. ☎ ' + PHONE,
  keywords: [
    'keten özel dikim Antalya', 'pamuk özel dikim Antalya', 'otele gelen terzi keten',
    'doğal kumaş dikim Antalya', 'Konyaaltı keten terzi', 'yabancı misafir özel dikim',
  ],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { 'tr': PAGE_URL, 'en': EN_URL, 'ru': RU_URL, 'de': DE_URL, 'x-default': PAGE_URL },
  },
  openGraph: {
    title: 'Keten & Pamuk Özel Dikim Modelleri | Terzi Can',
    description: '%100 doğal keten ve pamuktan, tam ölçünüze özel dikim. Otelinize teslim.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Keten Pamuk Özel Dikim', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Keten & Pamuk Özel Dikim', description: '%100 doğal kumaştan ölçünüze özel dikim.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya', contact: PHONE },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
   { '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL, name: "Keten & Pamuk Özel Dikim Modelleri" },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      name: 'Keten & Pamuk Özel Dikim', serviceType: 'Custom Tailoring',
      provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: '+905318986418', url: `${SITE}/antalya-terzi` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Antalya' },
      description: '%100 doğal keten ve pamuk kumaştan, misafirin ölçüsüne göre özel dikim hizmeti.',
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`,
      mainEntity: KETEN_PAMUK_T.tr.faq?.map(([q, a]: string[]) => ({
        '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
      })) || [],
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
