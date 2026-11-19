// ============================================================
// lib/twin.ts — swaphubs.com ile ortak (kopya) sayfalar için canonical + hreflang yönlendirmesi
// Sahibinin kararı (19 Kasım 2026): Türkçede asıl site terzihizmeti.com.tr, İngilizce/Almanca/Rusçada asıl site swaphubs.com.
// Aşağıdaki EN/DE/RU sayfalar swaphubs.com'da aynı içerikle (aynı veri: lib/seo-data.ts) birebir vardır:
//   bölge (29 slug), hizmet (20 slug + hub), otele gelen terzi (hub + 8 bölge), iletişim, SSS.
// Bu sayfalar silinmez; canonical'ı swaphubs'taki karşılığını gösterir ve hreflang kümesi verilmez.
// Diğer tüm sayfaların hreflang kümelerinde bu adresler swaphubs karşılığıyla değiştirilir (karşılıklılık).
// Geri almak için: twinPath() her zaman null döndürsün.
// ============================================================

export const SH_SITE = 'https://swaphubs.com';
const TH_SITE = 'https://terzihizmeti.com.tr';

const DISTRICT_RE = /^\/(en\/tailor-antalya|ru\/portnoy-antalya|de\/schneider-antalya)\/[a-z0-9-]+$/;
const SERVICE_RE = /^\/(en\/tailor-services|ru\/uslugi-portnogo|de\/schneider-leistungen)(\/[a-z0-9-]+)?$/;
// swaphubs'taki otel bölgeleri (lib/otel-bolgeleri.ts): konyaalti orada yok, bu yüzden listede değil
const HOTEL_RE = /^\/(en\/hotel-tailor-antalya|ru\/vyezdnoy-portnoy-antalya|de\/schneider-service-hotel-antalya)(\/(belek|lara|guzeloba|side|kemer|kundu|muratpasa|goynuk))?$/;
const FIXED: Record<string, string> = {
  '/en/contact-tailor-antalya': '/en/contact-tailor-antalya',
  '/de/kontakt-schneider-antalya': '/de/kontakt-schneider-antalya',
  '/ru/kontakty-portnoy-antalya': '/ru/kontakty-portnoy-antalya',
  '/en/tailor-faq-antalya': '/en/tailor-faq-antalya',
  '/de/schneider-faq-antalya': '/de/haeufige-fragen-schneider-antalya',
  '/ru/voprosy-portnoy-antalya': '/ru/chasto-zadavaemye-voprosy-portnoy-antalya',
};

/** terzihizmeti yolu → swaphubs'taki karşılığı (yoksa null). */
export function twinPath(path: string): string | null {
  const p = path.length > 1 ? path.replace(/\/$/, '') : path;
  if (FIXED[p]) return FIXED[p];
  if (DISTRICT_RE.test(p) || SERVICE_RE.test(p) || HOTEL_RE.test(p)) return p;
  return null;
}

/** Tam URL: terzihizmeti adresinin swaphubs karşılığı varsa onu, yoksa aynısını döndürür. */
export function twinUrl(url: string): string {
  if (!url.startsWith(TH_SITE)) return url;
  const t = twinPath(url.slice(TH_SITE.length) || '/');
  return t ? `${SH_SITE}${t}` : url;
}

type Alt = { canonical?: string | URL | null; languages?: Record<string, string> | null; [k: string]: unknown };

/**
 * Metadata/sitemap alternates sarmalayıcısı.
 * - Sayfanın kendisi swaphubs'ta asılsa: yalnız cross-domain canonical (hreflang yok).
 * - Değilse: hreflang kümesindeki kopya adresler swaphubs karşılığıyla değiştirilir.
 */
export function withTwin<T extends Alt | undefined>(alt: T): T {
  if (!alt) return alt;
  const can = typeof alt.canonical === 'string' ? alt.canonical : undefined;
  if (can) {
    const t = twinUrl(can);
    if (t !== can) return { canonical: t } as unknown as T;
  }
  if (alt.languages) {
    const languages = Object.fromEntries(Object.entries(alt.languages).map(([k, v]) => [k, typeof v === 'string' ? twinUrl(v) : v]));
    return { ...alt, languages } as T;
  }
  return alt;
}
