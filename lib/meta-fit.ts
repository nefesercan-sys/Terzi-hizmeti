// Meta etiketi sınırları: title ≤ 60, description ≤ 155 karakter, anahtar kelime ≤ 8.
// Metinler kaynakta bu sınırlara göre yazılır; bu yardımcılar yalnızca şablonla üretilen
// uzun metinlerde son güvence olarak kelime/cümle sınırında kısaltır (kelime ortasında kesmez).
export const META_DESC_MAX = 155;
export const META_TITLE_MAX = 60;
export const META_KW_MAX = 8;

const len = (s: string) => [...s].length;

/** "Terziye sor" çağrısı: açıklamanın başında numaradan önce yazılır (dile göre). */
export const ASK: Record<string, string> = {
  tr: 'Terziye sor', en: 'Ask the tailor', de: 'Schneider fragen', ru: 'Спросите в ателье', es: 'Pregunte al sastre',
  fr: 'Demandez au tailleur', pl: 'Zapytaj krawca', uk: 'Запитайте кравця', nl: 'Vraag de kleermaker', ar: 'اسأل الخياط',
};
const ASK_ALT = Object.values(ASK).join('|');
const PHONE_RE = new RegExp(`(?:(?:${ASK_ALT})\\s*:\\s*)?(?:☎\\s*)?(?:\\+90|0)\\s?531\\s?898\\s?64\\s?18`, 'gu');
/** Açıklamadan telefon numarasını ve "Terziye sor:" çağrısını çıkarır (numara sayfada ve işletme şemasında var). */
export function stripPhone(s: string): string {
  return s
    .replace(PHONE_RE, ' ')
    .replace(/☎/gu, ' ')
    .replace(/(?:\s*·\s*){2,}/gu, ' · ')
    .replace(/^\s*[·:,–-]\s*/u, '')
    .replace(/\s*[·:,–-]\s*$/u, '')
    .replace(/\s{2,}/gu, ' ')
    .replace(/ ([,.;])/gu, '$1')
    .trim();
}

/** Eski adı korunur: numara artık açıklamaya yazılmaz. */
export function phoneFirst(s: string, _lang?: string): string {
  return stripPhone(s);
}

/** Eski adı korunur: açıklamaya numara eklenmez, varsa çıkarılır. */
export function withAsk(desc: string, _lang?: string, _phone?: string): string {
  return stripPhone(desc);
}

export function fitDesc(s: string, max = META_DESC_MAX, lang?: string): string {
  let t = stripPhone(s);
  if (len(t) <= max) return t;
  // 1) sondaki telefon eki çıkarılır (telefon sayfada ve şemada zaten var)
  t = t.replace(/\s*☎.*$/u, '').trim();
  if (len(t) <= max) return t;
  // 2) sondan cümle atılır
  const parts = t.split(/(?<=[.!?])\s+/u);
  while (parts.length > 1 && len(parts.join(' ')) > max) parts.pop();
  t = parts.join(' ');
  if (len(t) <= max) return t;
  // 3) tek uzun cümle: son virgül/kelime sınırında kes
  const cut = [...t].slice(0, max - 1).join('');
  const i = Math.max(cut.lastIndexOf(','), cut.lastIndexOf(';'), cut.lastIndexOf(' '));
  return cut.slice(0, i > 40 ? i : cut.length).replace(/[,;:\s—–-]+$/u, '') + '.';
}

export function fitKeywords(list: string[], max = META_KW_MAX): string[] {
  return Array.from(new Set(list.map((k) => k.trim()).filter(Boolean))).slice(0, max);
}

/** Arama sonucunda görünsün diye (sahip isteği, 26 Kasım 2026): açıklamada fotoğraf/resim bilgisi yoksa
 *  ilk cümleden sonra "Resim gönder, fiyat al." eklenir; sığmazsa sondaki cümleler kısalır. Yalnızca Türkçe sayfalar. */
export const RESIM_FIYAT = 'Resim gönder, fiyat al.';
export function resimFiyat(s: string, max?: number): string {
  const t = stripPhone(s);
  const fitted = fitDesc(t, max);
  if (/fotoğraf|resim/iu.test(fitted)) return fitted; // kısaltılmış hâlde de görünüyorsa dokunma
  const m = t.match(/^[^.!?]{10,95}[.!?](?=\s)/u);
  return fitDesc((m ? `${m[0]} ${RESIM_FIYAT} ${t.slice(m[0].length).trim()}` : `${RESIM_FIYAT} ${t}`).trim(), max);
}
