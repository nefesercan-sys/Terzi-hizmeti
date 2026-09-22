import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';

const SITE      = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS      = 'https://maps.app.goo.gl/QEgSkRoA8Nz8H62g8';
const BASE_PATH = '/otele-gelen-terzi-antalya';

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) return {};
  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const title = `${r.name} Otel Terzi Hizmeti — Otele Gelen Terzi | Terzi Can`;
  const desc = `${r.name} bölgesindeki otelinize terzi servisi. Dikim, tadilat, tamir, ütü ve kuru temizleme odanıza teslim. ${r.travelTime.tr}. Türkçe, İngilizce, Almanca, Rusça iletişim.`;
  return {
    metadataBase: new URL(SITE),
    title, description: desc,
    keywords: [`${r.name} otel terzi`, `${r.name} terzi`, 'otele gelen terzi Antalya', `${r.name} fermuar tamiri`, `${r.name} ütü hizmeti`],
    alternates: {
      canonical: url,
      languages: {
        'tr': url,
        'en': `${SITE}/en/hotel-tailor-antalya/${r.slug}`,
        'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya/${r.slug}`,
        'de': `${SITE}/de/schneider-service-hotel-antalya/${r.slug}`,
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: `${r.name} Otel Terzi — Otele Gelen Terzi Hizmeti`,
        provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: `${SITE}/antalya-terzi` },
        areaServed: { '@type': 'Place', name: r.name }, url },
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: `${r.name} bölgesindeki otelime terzi gelir mi?`, acceptedAnswer: { '@type': 'Answer', text: `Evet, Terzi Can'ın otele gelen terzisi ${r.name} bölgesindeki her otele ulaşabiliyor. Otel adınızı WhatsApp'tan iletin: +90 531 898 64 18.` } },
      ] },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OtelBolgeSayfasi lang="tr" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} />
    </>
  );
}
