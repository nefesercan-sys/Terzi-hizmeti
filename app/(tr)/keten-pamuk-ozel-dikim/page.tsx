import type { Metadata } from 'next';
import KetenPamukOzelDikim, { KETEN_PAMUK_T } from '@/components/KetenPamukOzelDikim';

// DÜZELTME: Bu dosya daha önce components/KetenPamukOzelDikim.tsx'in birebir kopyasıydı ve
// hiç metadata içermiyordu (başlık/açıklama/canonical yoktu). Artık bileşeni kullanır.
const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/keten-pamuk-ozel-dikim`;
const EN_URL   = `${SITE}/en/linen-cotton-tailoring`;
const RU_URL   = `${SITE}/ru/poshiv-lyon-hlopok`;
const DE_URL   = `${SITE}/de/leinen-baumwolle-schneiderei`;
const PHONE    = '+90 531 898 64 18';
const OG       = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: 'Keten Pamuk Özel Dikim, Kalıp, Seri Üretim | Terzi Can' },
  description: 'Keten ve pamuk giyim: bay, bayan, çocuk özel dikim, model ve kalıp çıkarma, numune, seri ve fason üretim. Avrupa ve Rusya\'ya gönderim. ☎ ' + PHONE,
  keywords: ['keten özel dikim antalya', 'pamuk özel dikim', 'keten elbise diktirmek', 'keten gömlek dikim', 'bay keten giyim dikimi', 'bayan keten elbise modelleri', 'keten pamuk model ve kalıp çıkarma', 'keten giyim numune çalışması', 'keten pamuk seri üretim', 'keten giyim seri imalat', 'pamuk giyim seri imalat', 'keten giyim fason üretim', 'pamuk giyim fason dikim', 'özel ve seri keten üretimi', 'Avrupa ve Rusya\'ya keten giyim gönderimi', 'keten pamuk giyim imalatı antalya',
    'bay bayan keten elbise', 'keten pantolon özel dikim', 'keten ceket özel dikim', 'keten şort dikimi', 'keten etek dikimi', 'pamuk gömlek özel dikim',
    'doğal kumaş özel dikim', 'doğal kumaş giyim üretimi', 'kişiye özel keten elbise', 'tek adet ve seri adet dikim',
    'keten giyim kargo', 'keten giyim yurt dışı gönderim', 'keten pamuk giyim yurt içi gönderim'],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { tr: PAGE_URL, en: EN_URL, ru: RU_URL, de: DE_URL, 'x-default': PAGE_URL },
  },
  openGraph: {
    title: 'Keten & Pamuk Giyim: Özel Dikim, Kalıp, Seri Üretim — Terzi Can',
    description: 'doğal keten ve pamuk: bay, bayan, çocuk modelleri; özel dikim, model ve kalıp, seri ve fason üretim; Avrupa ve Rusya\'ya gönderim.',
    url: PAGE_URL, siteName: 'Terzi Can', locale: 'tr_TR', alternateLocale: ['en_US', 'ru_RU', 'de_DE'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Keten pamuk özel dikim — Terzi Can Antalya' }],
  },
  twitter: { card: 'summary_large_image', title: 'Keten & Pamuk Özel Dikim — Antalya', description: 'Ölçüne özel dikim, adrese teslim.', images: [OG] },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL, name: 'Keten & Pamuk Özel Dikim Antalya', inLanguage: 'tr' },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      name: 'Keten & Pamuk Özel Dikim', serviceType: 'Özel dikim',
      provider: { '@id': `${SITE}#business` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Antalya' },
      description: 'doğal keten ve pamuk kumaşlarla ölçüye özel dikim; otele ve adrese teslim.',
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#production`,
      name: 'Keten & Pamuk Giyim Seri ve Fason Üretim', serviceType: 'Giyim üretimi (model, kalıp, numune, seri ve fason üretim)',
      provider: { '@id': `${SITE}#business` },
      areaServed: [
        { '@type': 'Country', name: 'Türkiye' },
        { '@type': 'Place', name: 'Avrupa' },
        { '@type': 'Country', name: 'Rusya' },
      ],
      description: 'Bay, bayan ve çocuk keten ve pamuk giyim: model ve kalıp çıkarma, numune, seri ve fason üretim; Avrupa, Rusya ve diğer ülkelere gönderim. Adet ve fiyat proje bazında.',
      url: `${PAGE_URL}#seri-uretim`,
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
