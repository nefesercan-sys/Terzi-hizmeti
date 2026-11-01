import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ZoneLanding from '@/components/ZoneLanding';
import ServicesLanding from '@/components/ServicesLanding';
import TopicLanding from '@/components/TopicLanding';
import { HIZMET, HIZMET_IDS, parseHizmet, hizmetUrl, hizmetLanguages } from '@/lib/intl-hizmet';
import { TOPICS, TOPIC_IDS, parseTopic, topicUrl, topicLanguages } from '@/lib/intl-topics';
import PromosyonTekstilSayfasi from '@/components/PromosyonTekstilSayfasi';
import { buildPromoMetadata } from '@/lib/promosyon-tekstil';
import { promoSlug } from '@/lib/promosyon-paths';
import { SVC, isSvcSlug, svcUrl } from '@/lib/intl-services';
import { ILANGS, INTL, isILang } from '@/lib/intl';
import { ZCOPY, ZONE_SLUGS, parseZone, zoneData, zoneSlug, zoneUrl } from '@/lib/intl-zones';
import { SITE } from '@/lib/seo-data';
import { OG_DEFAULT } from '@/lib/turist-keten';
import { fitDesc } from '@/lib/meta-fit';
import UretimLanding from '@/components/UretimLanding';
import { UDATA, U_IDS, parseU, uMetadata } from '@/lib/uretim';

// Yalnızca tanımlı otel bölgesi sayfaları üretilir; diğer iki-segmentli yollar 404 olur.
export const dynamicParams = false;
export function generateStaticParams() {
  return ILANGS.flatMap((lang) => [...U_IDS.map((u) => ({ lang, zone: UDATA[lang][u].slug })), { lang, zone: SVC[lang].slug }, { lang, zone: promoSlug(lang) }, ...TOPIC_IDS.map((t) => ({ lang, zone: TOPICS[lang][t].slug })), ...HIZMET_IDS.map((h) => ({ lang, zone: HIZMET[lang][h].slug })), ...ZONE_SLUGS.map((z) => ({ lang, zone: zoneSlug(lang, z) }))]);
}

type P = { params: Promise<{ lang: string; zone: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, zone: slug } = await params;
  if (!isILang(lang)) return {};
  const uid = parseU(lang, slug);
  if (uid) return uMetadata(lang, uid);
  if (slug === promoSlug(lang)) return buildPromoMetadata(lang);
  if (isSvcSlug(lang, slug)) {
    const c = SVC[lang]; const url = `${SITE}${svcUrl(lang)}`;
    const title = c.title.length + 12 <= 60 ? `${c.title} | Terzi Can` : c.title;
    return {
      metadataBase: new URL(SITE), title: { absolute: title }, description: fitDesc(c.desc),
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      alternates: { canonical: url, languages: Object.fromEntries(ILANGS.map((l) => [INTL[l].hreflang, `${SITE}${svcUrl(l)}`])) },
      openGraph: { title, description: fitDesc(c.desc), url, siteName: 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: fitDesc(c.desc), images: [OG_DEFAULT] },
      other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
    };
  }
  const hz = parseHizmet(lang, slug);
  if (hz) {
    const c = HIZMET[lang][hz]; const url = `${SITE}${hizmetUrl(lang, hz)}`;
    const title = c.title.length + 12 <= 60 ? `${c.title} | Terzi Can` : c.title;
    return {
      metadataBase: new URL(SITE), title: { absolute: title }, description: fitDesc(c.desc),
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      alternates: { canonical: url, languages: hizmetLanguages(hz) },
      openGraph: { title, description: fitDesc(c.desc), url, siteName: 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: fitDesc(c.desc), images: [OG_DEFAULT] },
      other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
    };
  }
  const topic = parseTopic(lang, slug);
  if (topic) {
    const c = TOPICS[lang][topic]; const url = `${SITE}${topicUrl(lang, topic)}`;
    const brand = topic === 'tekstil' ? 'Anavera Tekstil' : 'Terzi Can';
    const title = c.title.length + brand.length + 3 <= 60 ? `${c.title} | ${brand}` : c.title;
    return {
      metadataBase: new URL(SITE), title: { absolute: title }, description: fitDesc(c.desc),
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      alternates: { canonical: url, languages: topicLanguages(topic) },
      openGraph: { title, description: fitDesc(c.desc), url, siteName: topic === 'tekstil' ? 'Anavera Tekstil' : 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: fitDesc(c.desc), images: [OG_DEFAULT] },
      other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
    };
  }
  const zone = parseZone(lang, slug);
  if (!zone) return {};
  const z = zoneData(lang, zone);
  const zc = ZCOPY[lang];
  const base = zc.title(z.name);
  const title = base.length + 12 <= 60 ? `${base} | Terzi Can` : base;
  const description = fitDesc(zc.desc(z.name));
  const url = `${SITE}${zoneUrl(lang, zone)}`;
  const sfx = zone === 'antalya' ? '' : `/${zone}`; // 'antalya' = otel ana sayfası
  const tr = `${SITE}/otele-gelen-terzi-antalya${sfx}`;
  return {
    metadataBase: new URL(SITE),
    title: { absolute: title },
    description,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: url,
      languages: {
        tr, en: `${SITE}/en/hotel-tailor-antalya${sfx}`, ru: `${SITE}/ru/vyezdnoy-portnoy-antalya${sfx}`, de: `${SITE}/de/schneider-service-hotel-antalya${sfx}`,
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
  const uid = parseU(lang, slug);
  if (uid) return <UretimLanding lang={lang} id={uid} />;
  if (slug === promoSlug(lang)) return <PromosyonTekstilSayfasi lang={lang} />;
  if (isSvcSlug(lang, slug)) return <ServicesLanding lang={lang} />;
  const hz = parseHizmet(lang, slug);
  if (hz) return <TopicLanding lang={lang} hizmet={hz} />;
  const topic = parseTopic(lang, slug);
  if (topic) return <TopicLanding lang={lang} topic={topic} />;
  const zone = parseZone(lang, slug);
  if (!zone) notFound();
  return <ZoneLanding lang={lang} zone={zone} />;
}
