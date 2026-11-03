// ============================================================
// lib/hreflang.ts — Fiyat ve iletişim sayfaları için BİRLEŞİK 10 dilli hreflang kümesi.
// Daha önce 4 dilli (TR/EN/DE/RU) ve 6 dilli (ES/FR/PL/UK/NL/AR) kümeler ayrıydı ve birbirine bağlanmıyordu.
// Hem sayfa metadata'sı hem sitemap bu dosyadan beslenir (karşılıklılık + x-default tek yerde).
// ============================================================
import { ILANGS, INTL } from '@/lib/intl';
import { fiyatUrl } from '@/lib/intl-fiyat';
import { iletisimUrl } from '@/lib/intl-iletisim';
import { svcUrl } from '@/lib/intl-services';

const SITE = 'https://terzihizmeti.com.tr';
const FIYAT4 = { tr: '/antalya-terzi-fiyatlari', en: '/en/tailor-prices-antalya', de: '/de/schneider-preise-antalya', ru: '/ru/ceny-portnoy-antalya' } as const;
const ILET4 = { tr: '/iletisim', en: '/en/contact-tailor-antalya', de: '/de/kontakt-schneider-antalya', ru: '/ru/kontakty-portnoy-antalya' } as const;

const abs4 = (m: Record<string, string>) => Object.fromEntries(Object.entries(m).map(([l, p]) => [l, `${SITE}${p}`]));
const six = (urlFor: (l: (typeof ILANGS)[number]) => string) => Object.fromEntries(ILANGS.map((l) => [INTL[l].hreflang, `${SITE}${urlFor(l)}`]));

/** Fiyat sayfaları: tr/en/de/ru + es/fr/pl/uk/nl/ar, x-default = TR. */
export const hreflangFiyat = (): Record<string, string> => ({ ...abs4(FIYAT4), ...six(fiyatUrl), 'x-default': `${SITE}${FIYAT4.tr}` });
/** İletişim sayfaları: 10 dil, x-default = TR. */
export const hreflangIletisim = (): Record<string, string> => ({ ...abs4(ILET4), ...six(iletisimUrl), 'x-default': `${SITE}${ILET4.tr}` });
/** Hizmetler & kumaşlar (yalnız 6 dilli kümede): x-default = kümenin ilk üyesi (ES). */
export const hreflangSvc = (): Record<string, string> => { const m = six(svcUrl); return { ...m, 'x-default': m[INTL[ILANGS[0]].hreflang] }; };
