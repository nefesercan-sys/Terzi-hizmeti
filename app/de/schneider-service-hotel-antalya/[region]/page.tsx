import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const BASE_PATH = '/de/schneider-service-hotel-antalya';

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) return {};
  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const title = `Schneider im Hotel ${r.name} Antalya — Mobiler Schneider | Terzi Can`;
  const desc = `Mobiler Schneiderservice zu Ihrem Hotel in ${r.name}, Antalya. Schneiderei, Änderungen, Reparatur, Bügeln und Reinigung, geliefert auf Ihr Zimmer. ${r.travelTime.de}. Wir sprechen Deutsch.`;
  return {
    metadataBase: new URL(SITE),
    title, description: desc,
    keywords: [`Schneider ${r.name}`, `Hotel ${r.name} Schneider`, 'mobiler Schneider Antalya', 'deutschsprachiger Schneider Antalya', `${r.name} Reinigung`],
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
        'en': `${SITE}/en/hotel-tailor-antalya/${r.slug}`,
        'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya/${r.slug}`,
        'de': url,
        'x-default': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
      },
    },
    openGraph: { title, description: desc, url, type: 'website', locale: 'de_DE' },
    robots: { index: true, follow: true },
  };
}

export default async function OtelBolgeDePage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) notFound();

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: `Schneider im Hotel ${r.name} — mobiler Schneiderservice`,
        provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: `${SITE}/antalya-terzi` },
        areaServed: { '@type': 'Place', name: r.name }, url },
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: `Kommen Sie zu Hotels in ${r.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Ja, der mobile Schneider von Terzi Can besucht jedes Hotel in ${r.name}. Teilen Sie Ihren Hotelnamen per WhatsApp mit: +90 531 898 64 18.` } },
      ] },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OtelBolgeSayfasi lang="de" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} />
    </>
  );
}
