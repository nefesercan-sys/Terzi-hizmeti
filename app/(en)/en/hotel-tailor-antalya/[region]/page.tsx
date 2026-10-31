import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { zoneAlt } from '@/lib/intl-zones';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';
import { regionJsonLd } from '@/lib/otel-copy';
import { BUSINESS_ID } from '@/lib/seo-data';
import { fitDesc, fitKeywords } from '@/lib/meta-fit';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS = 'https://www.google.com/maps?cid=6436895271281342624';
const BASE_PATH = '/en/hotel-tailor-antalya';

export const dynamicParams = false;

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) return {};

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  // Yeni VIP SEO Başlığı ve Açıklaması (Dinamik)
  const title = `Hotel Tailor in ${r.name}, Antalya | Pick-up & Delivery`;
  const desc = fitDesc(`Staying in ${r.name}? We collect clothes from your hotel, alter them in Konyaaltı and bring them back. Open daily 08:00–23:00.`);
  const ogImage = `${SITE}/terzi-can-hero.jpg`;

  return {
    metadataBase: new URL(SITE),
    title: { absolute: title },
    description: desc,
    keywords: fitKeywords([`tailor near hotels in ${r.name}`, `${r.name} hotel tailor`, `clothing alterations ${r.name}`, `hemming ${r.name} Antalya`, `zipper repair ${r.name}`, 'holiday clothing alterations Antalya', 'hotel pick-up tailor Antalya']),
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
        'en': url,
        'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya/${r.slug}`,
        'de': `${SITE}/de/schneider-service-hotel-antalya/${r.slug}`,
        ...zoneAlt(r.slug),
        'x-default': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
      },
    },
    openGraph: { title, description: desc, url, type: 'website', locale: 'en_US', siteName: 'Terzi Can Antalya', images: [{ url: ogImage, width: 1200, height: 630, alt: `Hotel tailor in ${r.name}` }] },
    twitter: { card: 'summary_large_image', title, description: desc, images: [ogImage] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  };
}

export default async function OtelBolgeEnPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) notFound();

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const jsonLd = regionJsonLd('en', r.slug, r.name, url, SITE, BUSINESS_ID);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OtelBolgeSayfasi lang="en" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} />
    </>
  );
}
