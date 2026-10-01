import { NextResponse } from 'next/server';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';

export const dynamic = 'force-dynamic';

const HOST = 'terzihizmeti.com.tr';
const KEY = '61a8b3c9d2f44e5fa8b29c9b1424ef2d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITE = `https://${HOST}`;

// DÜZELTME (2026-10-01): Önceki liste yalnızca 7 URL içeriyordu; sitemap.ts'teki
// onlarca sayfanın çoğu (mahalle sayfaları, otel bölgesi sayfaları, fiyat sayfaları,
// blog, Anavera Tekstil vb.) hiç bildirilmiyordu. Artık sitemap.ts ile birebir
// eşleşiyor. IndexNow tek bir istekte binlerce URL kabul eder, bu yüzden tamamını
// tek seferde göndermenin bir sakıncası yok.
const bolgeListesi: string[] = Array.isArray(OTEL_BOLGELERI)
  ? OTEL_BOLGELERI.map((b: any) => (typeof b === 'string' ? b : b.slug || String(b)))
  : Object.keys(OTEL_BOLGELERI as any);

const otelSayfalari = bolgeListesi.flatMap((slug) => [
  `${SITE}/otele-gelen-terzi-antalya/${slug}`,
  `${SITE}/en/hotel-tailor-antalya/${slug}`,
  `${SITE}/ru/vyezdnoy-portnoy-antalya/${slug}`,
  `${SITE}/de/schneider-service-hotel-antalya/${slug}`,
]);

const sabitSayfalar = [
  SITE,
  `${SITE}/llms.txt`,
  `${SITE}/antalya-terzi`,
  `${SITE}/otele-gelen-terzi-antalya`,
  `${SITE}/hurma-terzi`,
  `${SITE}/liman-terzi`,
  `${SITE}/sarisu-terzi`,
  `${SITE}/uncali-terzi`,
  `${SITE}/gursu-terzi`,
  `${SITE}/keten-pamuk-ozel-dikim`,
  `${SITE}/anavera-tekstil`,
  `${SITE}/en/anavera-tekstil`,
  `${SITE}/de/anavera-tekstil`,
  `${SITE}/ru/anavera-tekstil`,
  `${SITE}/konyaalti-fermuar-tamiri`,
  `${SITE}/konyaalti-paca-kisaltma`,
  `${SITE}/antalya-gelinlik-tadilati`,
  `${SITE}/antalya-terzi-fiyatlari`,
  `${SITE}/en/tailor-prices-antalya`,
  `${SITE}/de/schneider-preise-antalya`,
  `${SITE}/ru/ceny-portnoy-antalya`,
  `${SITE}/antalya-uniforma-imalati`,
  `${SITE}/en/tailor-service-antalya`,
  `${SITE}/ru/uslugi-portnogo-antalya`,
  `${SITE}/de/schneiderservice-antalya`,
  `${SITE}/en/hotel-tailor-antalya`,
  `${SITE}/ru/vyezdnoy-portnoy-antalya`,
  `${SITE}/de/schneider-service-hotel-antalya`,
  `${SITE}/en/linen-cotton-tailoring`,
  `${SITE}/ru/poshiv-lyon-hlopok`,
  `${SITE}/de/leinen-baumwolle-schneiderei`,
  `${SITE}/blog`,
  `${SITE}/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi`,
];

const urlList = [...sabitSayfalar, ...otelSayfalari];

async function sendIndexNowPing() {
  return fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
}

export async function GET() {
  try {
    const response = await sendIndexNowPing();

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { success: false, status: response.status, error: errorText, gonderilenUrlSayisi: urlList.length },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: `terzihizmeti.com.tr — ${urlList.length} sayfa IndexNow'a (Bing, Yandex vb.) bildirildi.`,
      status: response.status,
      gonderilenUrlSayisi: urlList.length,
      not: "IndexNow Google'ı kapsamaz; Google için Search Console'da sitemap gönderip İndekslemeyi İste kullanın.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Ping işlemi başarısız' },
      { status: 500 }
    );
  }
}

export async function POST() {
  return GET();
}
