import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { withTwin } from '@/lib/twin';
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
import FiyatLanding from '@/components/FiyatLanding';
import KargoSayfasi, { kargoMetadata } from '@/components/KargoSayfasi';
import { KARGO, parseKargoSlug } from '@/lib/kargo-terzi';
import OlcuRehberiSayfasi, { olcuMetadata } from '@/components/OlcuRehberiSayfasi';
import { OLCU, parseOlcuSlug } from '@/lib/olcu-rehberi';
import OzelSiparisSayfasi, { ozelMetadata } from '@/components/OzelSiparisSayfasi';
import { OZEL, parseOzelSlug } from '@/lib/ozel-siparis';
import { FIYAT, isFiyatSlug, fiyatUrl } from '@/lib/intl-fiyat';
import IletisimLanding from '@/components/IletisimLanding';
import { ILETISIM, isIletisimSlug, iletisimUrl } from '@/lib/intl-iletisim';
import { ILANGS, INTL, isILang } from '@/lib/intl';
import { ZCOPY, ZONE_SLUGS, parseZone, zoneData, zoneSlug, zoneUrl } from '@/lib/intl-zones';
import { zoneSeoTitles } from '@/lib/bolge-hizmet-matrisi-turist';
import { SITE } from '@/lib/seo-data';
import { OG_DEFAULT } from '@/lib/turist-keten';
import { fitDesc, photoPrice, withAsk } from '@/lib/meta-fit';
import { hreflangFiyat, hreflangIletisim, hreflangSvc } from '@/lib/hreflang';
import UretimLanding from '@/components/UretimLanding';
import { UDATA, U_IDS, parseU, uMetadata } from '@/lib/uretim';
import { areaKwDesc, serviceKwDesc } from '@/lib/kw-desc';
// Anahtar kelimeli açıklama yalnız hizmet konularında (tekstil üretimi hariç)
const KW_TOPICS: string[] = ['tamir', 'ozel', 'keten'];

// Yalnızca tanımlı otel bölgesi sayfaları üretilir; diğer iki-segmentli yollar 404 olur.
export const dynamicParams = false;
export function generateStaticParams() {
  return ILANGS.flatMap((lang) => [...U_IDS.map((u) => ({ lang, zone: UDATA[lang][u].slug })), { lang, zone: SVC[lang].slug }, { lang, zone: FIYAT[lang].slug }, { lang, zone: ILETISIM[lang].slug }, { lang, zone: promoSlug(lang) }, { lang, zone: KARGO[lang].slug }, { lang, zone: OZEL[lang].slug }, { lang, zone: OLCU[lang].slug }, ...TOPIC_IDS.map((t) => ({ lang, zone: TOPICS[lang][t].slug })), ...HIZMET_IDS.map((h) => ({ lang, zone: HIZMET[lang][h].slug })), ...ZONE_SLUGS.map((z) => ({ lang, zone: zoneSlug(lang, z) }))]);
}

type P = { params: Promise<{ lang: string; zone: string }> };

async function generateMetadataInner({ params }: P): Promise<Metadata> {
  const { lang, zone: slug } = await params;
  if (!isILang(lang)) return {};
  const uid = parseU(lang, slug);
  if (uid) return uMetadata(lang, uid);
  if (slug === promoSlug(lang)) return buildPromoMetadata(lang);
  if (parseKargoSlug(lang, slug)) return kargoMetadata(lang);
  if (parseOlcuSlug(lang, slug)) return olcuMetadata(lang);
  if (parseOzelSlug(lang, slug)) return ozelMetadata(lang);
  if (isFiyatSlug(lang, slug)) {
    const c = FIYAT[lang]; const url = `${SITE}${fiyatUrl(lang)}`;
    const title = c.title.length + 12 <= 60 ? `${c.title} | Terzi Can` : c.title;
    return {
      metadataBase: new URL(SITE), title: { absolute: title }, description: photoPrice(c.desc, lang),
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      alternates: withTwin({ canonical: url, languages: hreflangFiyat() }),
      openGraph: { title, description: photoPrice(c.desc, lang), url, siteName: 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: photoPrice(c.desc, lang), images: [OG_DEFAULT] },
      other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
    };
  }
  if (isIletisimSlug(lang, slug)) {
    const c = ILETISIM[lang]; const url = `${SITE}${iletisimUrl(lang)}`;
    const title = c.title.length + 12 <= 60 ? `${c.title} | Terzi Can` : c.title;
    return {
      metadataBase: new URL(SITE), title: { absolute: title }, description: photoPrice(c.desc, lang),
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      alternates: withTwin({ canonical: url, languages: hreflangIletisim() }),
      openGraph: { title, description: photoPrice(c.desc, lang), url, siteName: 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: photoPrice(c.desc, lang), images: [OG_DEFAULT] },
      other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
    };
  }
  if (isSvcSlug(lang, slug)) {
    const c = SVC[lang]; const url = `${SITE}${svcUrl(lang)}`;
    const title = c.title.length + 12 <= 60 ? `${c.title} | Terzi Can` : c.title;
    return {
      metadataBase: new URL(SITE), title: { absolute: title }, description: photoPrice(c.desc, lang),
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      alternates: withTwin({ canonical: url, languages: hreflangSvc() }),
      openGraph: { title, description: photoPrice(c.desc, lang), url, siteName: 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: photoPrice(c.desc, lang), images: [OG_DEFAULT] },
      other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
    };
  }
  const hz = parseHizmet(lang, slug);
  if (hz) {
    const c0 = HIZMET[lang][hz]; const c = { ...c0, desc: serviceKwDesc(lang, c0.name, 'a', c0.desc) }; const url = `${SITE}${hizmetUrl(lang, hz)}`;
    const title = c.title.length + 12 <= 60 ? `${c.title} | Terzi Can` : c.title;
    return {
      metadataBase: new URL(SITE), title: { absolute: title }, description: photoPrice(c.desc, lang),
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      alternates: withTwin({ canonical: url, languages: hizmetLanguages(hz) }),
      openGraph: { title, description: photoPrice(c.desc, lang), url, siteName: 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: photoPrice(c.desc, lang), images: [OG_DEFAULT] },
      other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
    };
  }
  const topic = parseTopic(lang, slug);
  if (topic) {
    const c0 = TOPICS[lang][topic]; const c = KW_TOPICS.includes(topic) ? { ...c0, desc: serviceKwDesc(lang, c0.h1, 'a', c0.desc) } : c0; const url = `${SITE}${topicUrl(lang, topic)}`;
    const brand = topic === 'tekstil' ? 'Anavera Tekstil' : 'Terzi Can';
    const title = c.title.length + brand.length + 3 <= 60 ? `${c.title} | ${brand}` : c.title;
    return {
      metadataBase: new URL(SITE), title: { absolute: title }, description: (topic === 'tekstil' ? fitDesc(c.desc) : photoPrice(c.desc, lang)),
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      alternates: withTwin({ canonical: url, languages: topicLanguages(topic) }),
      openGraph: { title, description: (topic === 'tekstil' ? fitDesc(c.desc) : photoPrice(c.desc, lang)), url, siteName: topic === 'tekstil' ? 'Anavera Tekstil' : 'Terzi Can', locale: INTL[lang].locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: (topic === 'tekstil' ? fitDesc(c.desc) : photoPrice(c.desc, lang)), images: [OG_DEFAULT] },
      other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
    };
  }
  const zone = parseZone(lang, slug);
  if (!zone) return {};
  const z = zoneData(lang, zone);
  const zc = ZCOPY[lang];
  const seoT = zone === 'antalya' ? [] : zoneSeoTitles(lang, z.name, ZONE_SLUGS.indexOf(zone)); // bölgeye göre farklı, hizmet kelimeli başlık
  const base = seoT.find((t) => t.length <= 60) ?? zc.title(z.name);
  const title = base.length + 12 <= 60 ? `${base} | Terzi Can` : base;
  // Anahtar kelimeli kalıp (lib/kw-desc.ts); 'antalya' otel ana sayfası da aynı kalıpla
  const description = fitDesc((zone === 'antalya' ? withAsk(zc.desc(z.name), lang).replace(/(Анталія|Antalya|Antalyi|أنطاليا)[,،] \1/u, '$1') : areaKwDesc(lang, z.name, 'a', withAsk(zc.desc(z.name), lang))), undefined, lang);
  const url = `${SITE}${zoneUrl(lang, zone)}`;
  const sfx = zone === 'antalya' ? '' : `/${zone}`; // 'antalya' = otel ana sayfası
  const tr = `${SITE}/otele-gelen-terzi-antalya${sfx}`;
  return {
    metadataBase: new URL(SITE),
    title: { absolute: title },
    description,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: withTwin({
      canonical: url,
      languages: {
        tr, en: `${SITE}/en/hotel-tailor-antalya${sfx}`, ru: `${SITE}/ru/vyezdnoy-portnoy-antalya${sfx}`, de: `${SITE}/de/schneider-service-hotel-antalya${sfx}`,
        ...Object.fromEntries(ILANGS.map((l) => [INTL[l].hreflang, `${SITE}${zoneUrl(l, zone)}`])),
        'x-default': tr,
      },
    }),
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
  if (parseKargoSlug(lang, slug)) return <><KargoSayfasi lang={lang} /><ReviewsBlock lang={lang} schema /></>;
  if (parseOlcuSlug(lang, slug)) return <><OlcuRehberiSayfasi lang={lang} /><ReviewsBlock lang={lang} schema /></>;
  if (parseOzelSlug(lang, slug)) return <><OzelSiparisSayfasi lang={lang} /><ReviewsBlock lang={lang} schema /></>;
  if (isFiyatSlug(lang, slug)) return <><FiyatLanding lang={lang} /><ReviewsBlock lang={lang} schema /></>;
  if (isIletisimSlug(lang, slug)) return <><IletisimLanding lang={lang} /><ReviewsBlock lang={lang} schema /></>;
  if (isSvcSlug(lang, slug)) return <><ServicesLanding lang={lang} /><ReviewsBlock lang={lang} schema /></>;
  const hz = parseHizmet(lang, slug);
  if (hz) return <><TopicLanding lang={lang} hizmet={hz} /><ReviewsBlock lang={lang} schema /></>;
  const topic = parseTopic(lang, slug);
  if (topic) return <><TopicLanding lang={lang} topic={topic} /><ReviewsBlock lang={lang} schema /></>;
  const zone = parseZone(lang, slug);
  if (!zone) notFound();
  return <><ZoneLanding lang={lang} zone={zone} /><ReviewsBlock lang={lang} schema /></>;
}

// Arama sonucunda görünsün diye: bu rotadaki tüm alt şablonlarda açıklamaya o dilde "Fotoğraf gönderin, fiyat alın" (photoPrice; zaten varsa dokunmaz)
export async function generateMetadata(props: P): Promise<Metadata> {
  const m = await generateMetadataInner(props);
  const { lang } = await props.params;
  return typeof m.description === 'string' ? { ...m, description: photoPrice(m.description, lang) } : m;
}
