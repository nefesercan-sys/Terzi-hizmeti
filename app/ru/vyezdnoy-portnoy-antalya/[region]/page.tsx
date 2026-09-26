import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS = 'https://maps.app.goo.gl/QEgSkRoA8Nz8H62g8';
const BASE_PATH = '/ru/vyezdnoy-portnoy-antalya';

export const dynamicParams = false;

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

// DÜZELTME (2026-09-26): params Next.js 16'da Promise'dir; await edilmeden
// destructure edilirse region undefined kalır ve tüm bölge sayfaları 404 verir
// (bkz. DE eşdeğerindeki aynı bug için detaylı açıklama).
export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) return {};

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const title = `VIP Ателье и Портной в ${r.name} | Доставка в отель`;
  const desc = `Срочный ремонт и подгонка одежды во время отпуска. Ателье Terzi Can предлагает профессиональные услуги портного с выездом в отели ${r.name}. Пишите в WhatsApp!`;
  const ogImage = `${SITE}/terzi-can-hero.jpg`;

  return {
    metadataBase: new URL(SITE),
    title,
    description: desc,
    keywords: [`VIP Ателье ${r.name}`, `выездной портной ${r.name}`, `ремонт одежды отель ${r.name}`, 'портной Анталия'],
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
    openGraph: { title, description: desc, url, type: 'website', locale: 'ru_RU', siteName: 'Terzi Can Antalya', images: [{ url: ogImage, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description: desc, images: [ogImage] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  };
}

// Next.js 14 için düzeltilmiş params yapısı
export default async function OtelBolgeRuPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) notFound();

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  
  const seoContent = {
    h1: `Профессиональные услуги портного для гостей отелей в ${r.name}`,
    h2: `Быстрый ремонт и подгонка одежды без выезда из отеля`,
    body1: `Отдыхаете в ${r.name} и вам нужно срочно укоротить купленные брюки, подогнать вечернее платье по фигуре или починить сломанную молнию? Ателье Terzi Can решит эту проблему быстро и качественно.`,
    body2: `Мы специализируемся на ремонте, подгонке и пошиве одежды любой сложности. Мы предлагаем VIP-услугу выездного портного для гостей, проживающих в отелях ${r.name}.`
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `VIP Выездной Портной ${r.name}`,
        serviceType: 'Clothing Alterations & Mobile Tailoring',
        provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: `${SITE}/antalya-terzi`, image: `${SITE}/terzi-can-hero.jpg` },
        areaServed: { '@type': 'Place', name: `${r.name}, Antalya` },
        description: seoContent.body2,
        url,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Как работает забор одежды из отеля в ${r.name}?`,
            acceptedAnswer: { '@type': 'Answer', text: `Напишите нам в WhatsApp. Наш курьер заберет вещь прямо с ресепшена вашего отеля в ${r.name} и вернет после ремонта.` },
          },
          {
            '@type': 'Question',
            name: `Сколько времени занимает работа?`,
            acceptedAnswer: { '@type': 'Answer', text: `Наши мастера выполнят заказ за 24–48 часов с бесплатной доставкой в ваш отель в ${r.name}.` },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OtelBolgeSayfasi lang="ru" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} seoContent={seoContent} />
    </>
  );
}
