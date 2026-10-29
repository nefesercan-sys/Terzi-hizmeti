import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ZoneLanding from '@/components/ZoneLanding';
import ServicesLanding from '@/components/ServicesLanding';
import { SVC, isSvcSlug, svcUrl } from '@/lib/intl-services';
import { ILANGS, INTL, isILang } from '@/lib/intl';
import { ZCOPY, ZONE_SLUGS, parseZone, zoneData, zoneSlug, zoneUrl } from '@/lib/intl-zones';
import { SITE } from '@/lib/seo-data';
import { OG_DEFAULT } from '@/lib/turist-keten';

// Yalnızca tanımlı otel bölgesi sayfaları üretilir; diğer iki-segmentli yollar 404 olur.
export const dynamicParams = false;
export function generateStaticParams() {
  return ILANGS.flatMap((lang) => [{ lang, zone: SVC[lang].slug }, ...ZONE_SLUGS.map((z) => ({ lang, zone: zoneSlug(lang, z) }))]);
}

type P = { params: Promise<{ lang: string; zone: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, zone: slug } = await params;
  if (!isILang(lang)) return {};
  if (isSvcSlug(lang, slug)) {
    const c = SVC[lang]; const url = `${SITE}${svcUrl(lang)}`;
    const title = c.title.length + 11 <= 60 ? `${c.title} | Terzi Can` : c.title;
    return {
      metadataBase: new URL(SITE), title: { absolute: title }, description: c.desc,
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      alternates: { canonical: url, languages: Object.fromEntries(ILANGS.map((l) => [INTL[l].hreflang, `${SITE}${svcUrl(l)}`])) },
      openGraph: { title, description: c.desc, url, siteName: 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: c.desc, images: [OG_DEFAULT] },
      other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
    };
  }
  const zone = parseZone(lang, slug);
  if (!zone) return {};
  const z = zoneData(lang, zone);
  const zc = ZCOPY[lang];
  const base = zc.title(z.name);
  const title = base.length + 11 <= 60 ? `${base} | Terzi Can` : base;
  const description = zc.desc(z.name);
  const url = `${SITE}${zoneUrl(lang, zone)}`;
  const tr = `${SITE}/otele-gelen-terzi-antalya/${zone}`;
  return {
    metadataBase: new URL(SITE),
    title: { absolute: title },
    description,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: url,
      languages: {
        tr, en: `${SITE}/en/hotel-tailor-antalya/${zone}`, ru: `${SITE}/ru/vyezdnoy-portnoy-antalya/${zone}`, de: `${SITE}/de/schneider-service-hotel-antalya/${zone}`,
        ...Object.fromEntries(ILANGS.map((l) => [INTL[l].hreflang, `${SITE}${zoneUrl(l, zone)}`])),
        'x-default': tr,
      },
    },
    openGraph: { title, description, url, siteName: 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [OG_DEFAULT] },
    other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
  };
}

export default async function Page({ params }: P) {
  const { lang, zone: slug } = await params;
  if (!isILang(lang)) notFound();
  if (isSvcSlug(lang, slug)) return <ServicesLanding lang={lang} />;
  const zone = parseZone(lang, slug);
  if (!zone) notFound();
  return <ZoneLanding lang={lang} zone={zone} />;
}
