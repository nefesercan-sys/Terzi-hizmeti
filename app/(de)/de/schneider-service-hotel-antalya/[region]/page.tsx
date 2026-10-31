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
const BASE_PATH = '/de/schneider-service-hotel-antalya';

export const dynamicParams = false;

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

// DÜZELTME (2026-09-26): params Next.js 16'da bir Promise'dir. Önceki kod bunu
// senkron bir obje gibi ({ region: string }) işleyip await etmeden destructure
// ediyordu — bu yüzden `region` her zaman undefined geliyor, `bulOtelBolgesi`
// null dönüyor, generateMetadata BOŞ metadata üretiyor (title/canonical/hreflang
// yok) ve sayfa notFound() çağırarak 404 veriyordu. Bu, 11 otel bölgesi
// sayfasının (Belek, Lara, Kemer, Side, vb.) hiçbirinin indekslenmemesinin
// doğrudan sebebiydi. TR/EN eşdeğerleri zaten doğru (Promise<{region}>) kullanıyordu.
export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) return {};

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const title = `Schneider im Hotel ${r.name}, Antalya | Abholung & Lieferung`;
  const desc = fitDesc(`Urlaub in ${r.name}? Wir holen Kleidung im Hotel ab, ändern sie in Konyaaltı und bringen sie zurück. Täglich 08:00–23:00, Lieferung je nach Gebiet.`);
  const ogImage = `${SITE}/terzi-can-hero.jpg`;

  return {
    metadataBase: new URL(SITE),
    title: { absolute: title },
    description: desc,
    keywords: fitKeywords([`Schneider Hotel ${r.name}`, `Änderungsschneiderei ${r.name}`, `Hose kürzen ${r.name}`, `Reißverschluss reparieren ${r.name}`, 'Schneider Antalya Urlaub', 'Kleidung ändern lassen Antalya Hotel']),
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
        'en': `${SITE}/en/hotel-tailor-antalya/${r.slug}`,
        'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya/${r.slug}`,
        'de': url,
        ...zoneAlt(r.slug),
        'x-default': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
      },
    },
    openGraph: { title, description: desc, url, type: 'website', locale: 'de_DE', siteName: 'Terzi Can Antalya', images: [{ url: ogImage, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description: desc, images: [ogImage] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  };
}

// Promise kaldırıldı, standart obje yapısına geçildi
export default async function OtelBolgeDePage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) notFound();

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const jsonLd = regionJsonLd('de', r.slug, r.name, url, SITE, BUSINESS_ID);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OtelBolgeSayfasi lang="de" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} />
    </>
  );
}
