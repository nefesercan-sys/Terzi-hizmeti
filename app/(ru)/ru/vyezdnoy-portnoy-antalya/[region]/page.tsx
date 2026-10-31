import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { zoneAlt } from '@/lib/intl-zones';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS = 'https://www.google.com/maps?cid=6436895271281342624';
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
  const title = `Портной в отель — ${r.name}, Анталья: забор и возврат`;
  const desc = `Остановились в районе ${r.name}? Заберём вещи из отеля, подгоним в мастерской в Коньяалты и вернём. Ежедневно 08:00–23:00.`;
  const ogImage = `${SITE}/terzi-can-hero.jpg`;

  return {
    metadataBase: new URL(SITE),
    title: { absolute: title },
    description: desc,
    keywords: [`портной в отель ${r.name}`, `выездной портной ${r.name}`, `подшить брюки ${r.name}`, `ремонт молнии ${r.name}`, 'портной Анталья отель', 'срочный ремонт одежды Анталья'],
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
        'en': `${SITE}/en/hotel-tailor-antalya/${r.slug}`,
        'ru': url,
        'de': `${SITE}/de/schneider-service-hotel-antalya/${r.slug}`,
        ...zoneAlt(r.slug),
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
    h1: `Портной для гостей отелей района ${r.name}: заберём, подгоним, вернём`,
    h2: `Подгонка и ремонт одежды в отпуске — без поездки в город`,
    body1: `Брюки длинны, молния сломалась, платье нужно ушить к ужину? Если вы остановились в районе ${r.name}, пришлите фото в WhatsApp — скажем, что можно сделать и сколько это стоит.`,
    body2: `Мастерская находится в Хурме (Коньяалты) и работает ежедневно с 08:00 до 23:00. Мы забираем вещь из вашего отеля, работаем в мастерской и возвращаем обратно; стоимость забора и доставки в отели зависит от района. Подшив, ушивание и молнии готовы на следующий день.`
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Портной с выездом в отель — ${r.name}`,
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
            name: `Как забрать вещь из отеля в районе ${r.name}?`,
            acceptedAnswer: { '@type': 'Answer', text: `Пришлите в WhatsApp фото вещи и название отеля. Мы согласуем время, заберём вещь в мастерскую и вернём её в ваш отель.` },
          },
          {
            '@type': 'Question',
            name: `Когда я получу вещь обратно?`,
            acceptedAnswer: { '@type': 'Answer', text: `Срочный ремонт и подгонка занимают 1–2 часа, обычные — до следующего дня; при индивидуальном пошиве срок зависит от модели и количества изделий.` },
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
