// terzihizmeti.com.tr — Anavera Tekstil B2B sayfaları (numune, seri imalat, kendi marka, yurt dışı gönderim, üretici), 10 dil.
import type { Metadata } from 'next';
import { U_IDS, UL_LIST, type UCopy, type UId, type UL, type UPack } from './uretim-types';
import { U_TR, U_EN, U_DE, U_RU } from './uretim-1';
import { U_ES, U_FR, U_PL } from './uretim-2';
import { U_UK, U_NL, U_AR } from './uretim-3';
import { topicUrl } from './intl-topics';
import { fitDesc } from './meta-fit';
import { OG_DEFAULT } from './turist-keten';

export { U_IDS, UL_LIST };
export type { UId, UL, UCopy };
export const SITE_U = 'https://terzihizmeti.com.tr';

export const UDATA: Record<UL, UPack> = {
  tr: U_TR, en: U_EN, de: U_DE, ru: U_RU, es: U_ES, fr: U_FR, pl: U_PL, uk: U_UK, nl: U_NL, ar: U_AR,
};
export const isUL = (l: string): l is UL => (UL_LIST as string[]).includes(l);
export const SIX_U: UL[] = ['es', 'fr', 'pl', 'uk', 'nl', 'ar'];
export const CORE_U: UL[] = ['tr', 'en', 'de', 'ru'];

export const uUrl = (l: UL, id: UId) => (l === 'tr' ? `/${UDATA.tr[id].slug}` : `/${l}/${UDATA[l][id].slug}`);
export const parseU = (l: UL, slug: string): UId | undefined => U_IDS.find((i) => UDATA[l][i].slug === slug);
/** Anavera Tekstil ana sayfası (geri bağlantı). */
export const ANAVERA_HOME = (l: UL): string => (l === 'tr' ? '/anavera-tekstil' : l === 'en' || l === 'de' || l === 'ru' ? `/${l}/anavera-tekstil` : topicUrl(l, 'tekstil'));
export const uLanguages = (id: UId): Record<string, string> => ({
  ...Object.fromEntries(UL_LIST.map((l) => [l, `${SITE_U}${uUrl(l, id)}`])),
  'x-default': `${SITE_U}${uUrl('en', id)}`,
});
const LOCALE: Record<UL, string> = { tr: 'tr_TR', en: 'en_US', de: 'de_DE', ru: 'ru_RU', es: 'es_ES', fr: 'fr_FR', pl: 'pl_PL', uk: 'uk_UA', nl: 'nl_NL', ar: 'ar_AR' };

export function uMetadata(lang: UL, id: UId): Metadata {
  const c = UDATA[lang][id]; const url = `${SITE_U}${uUrl(lang, id)}`;
  const title = c.title.length + 18 <= 60 ? `${c.title} | Anavera Tekstil` : c.title;
  return {
    metadataBase: new URL(SITE_U), title: { absolute: title }, description: fitDesc(c.desc),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: { canonical: url, languages: uLanguages(id) },
    openGraph: { title, description: fitDesc(c.desc), url, siteName: 'Anavera Tekstil', locale: LOCALE[lang], type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description: fitDesc(c.desc), images: [OG_DEFAULT] },
    other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
  };
}
