import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { zoneAlt } from '@/lib/intl-zones';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';
import { regionJsonLd } from '@/lib/otel-copy';
import { BUSINESS_ID } from '@/lib/seo-data';
import { fitDesc, fitKeywords } from '@/lib/meta-fit';

const SITE      = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const BASE_PATH = '/otele-gelen-terzi-antalya';

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) return {};
  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const title = `${r.name} Otel Terzisi · Paça ₺200'den, Otelden Alır`;
  const desc = fitDesc(`${r.name} otelinde mi kalıyorsunuz? Paça ₺200'den, fermuar ₺300'den; otelden alıp tadil edip getiriyoruz. Ev adresleri için WhatsApp'tan sorulur. 08:00–23:00.`);
  return {
    metadataBase: new URL(SITE),
    title: { absolute: title }, description: desc,
    keywords: fitKeywords([`${r.name} otel terzi`, `${r.name} terzi`, 'otele gelen terzi Antalya', `${r.name} fermuar tamiri`, `${r.name} paça kısaltma`, `${r.name} otelde terzi`]),
    alternates: {
      canonical: url,
      languages: {
        'tr': url,
        'en': `${SITE}/en/hotel-tailor-antalya/${r.slug}`,
        'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya/${r.slug}`,
        'de': `${SITE}/de/schneider-service-hotel-antalya/${r.slug}`,
        ...zoneAlt(r.slug),
        'x-default': url,
      },
    },
    openGraph: { title, description: desc, url, type: 'website', locale: 'tr_TR' },
    robots: { index: true, follow: true },
  };
}

export default async function OtelBolgeTrPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) notFound();

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const jsonLd = regionJsonLd('tr', r.slug, r.name, url, SITE, BUSINESS_ID);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OtelBolgeSayfasi lang="tr" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} />
    </>
  );
}
