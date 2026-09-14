import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const BASE_PATH = '/en/tailor-service-antalya-hotels';

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: { region: string } }): Promise<Metadata> {
  const r = bulOtelBolgesi(params.region);
  if (!r) return {};
  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const title = `${r.name} Hotel Tailor Antalya — Mobile Tailor to Your Room | Terzi Can`;
  const desc = `Mobile tailor service to your hotel in ${r.name}, Antalya. Tailoring, alterations, repair, ironing and dry cleaning delivered to your room. ${r.travelTime.en}. English speaking.`;
  return {
    metadataBase: new URL(SITE),
    title, description: desc,
    keywords: [`${r.name} hotel tailor`, `${r.name} tailor Antalya`, 'mobile tailor Antalya', 'English speaking tailor Antalya', `${r.name} alterations`, `${r.name} ironing service`],
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE}/antalya-terzi`,
        'en': url,
        'ru': `${SITE}/ru/uslugi-portnogo-antalya-oteli/${r.slug}`,
        'de': `${SITE}/de/schneiderservice-antalya-hotels/${r.slug}`,
        'x-default': `${SITE}/antalya-terzi`,
      },
    },
    openGraph: { title, description: desc, url, type: 'website', locale: 'en_US' },
    robots: { index: true, follow: true },
  };
}

export default function OtelBolgeEnPage({ params }: { params: { region: string } }) {
  const r = bulOtelBolgesi(params.region);
  if (!r) notFound();

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: `Hotel Tailor ${r.name} — Mobile Tailor Service`,
        provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: `${SITE}/antalya-terzi` },
        areaServed: { '@type': 'Place', name: r.name }, url },
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: `Do you come to hotels in ${r.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Yes, Terzi Can's mobile tailor visits every hotel in ${r.name}. Share your hotel name on WhatsApp: +90 531 898 64 18.` } },
      ] },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OtelBolgeSayfasi lang="en" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} />
    </>
  );
}
