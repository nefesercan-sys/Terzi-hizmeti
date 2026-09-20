import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS = 'https://maps.app.goo.gl/QEgSkRoA8Nz8H62g8';
const BASE_PATH = '/ru/vyezdnoy-portnoy-antalya';

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) return {};
  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const title = `Портной в отеле ${r.name} Анталья — Выездной портной | Terzi Can`;
  const desc = `Выездной портной в ваш отель в районе ${r.name}, Анталья. Пошив, подгонка, ремонт, глажка и химчистка с доставкой в номер. ${r.travelTime.ru}. Говорим по-русски.`;
  return {
    metadataBase: new URL(SITE),
    title, description: desc,
    keywords: [`портной ${r.name}`, `отель ${r.name} портной`, 'выездной портной Анталья', 'русскоговорящий портной Анталья', `${r.name} химчистка`],
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
        'en': `${SITE}/en/hotel-tailor-antalya/${r.slug}`,
        'ru': url,
        'de': `${SITE}/de/schneider-service-hotel-antalya/${r.slug}`,
        'x-default': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
      },
    },
    openGraph: { title, description: desc, url, type: 'website', locale: 'ru_RU' },
    robots: { index: true, follow: true },
  };
}

export default async function OtelBolgeRuPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) notFound();

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: `Портной в отеле ${r.name} — выездной портной`,
        provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: `${SITE}/antalya-terzi` },
        areaServed: { '@type': 'Place', name: r.name }, url },
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: `Вы приезжаете в отели ${r.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Да, выездной портной Terzi Can приезжает в каждый отель района ${r.name}. Напишите название отеля в WhatsApp: +90 531 898 64 18.` } },
      ] },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OtelBolgeSayfasi lang="ru" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} />
    </>
  );
}
