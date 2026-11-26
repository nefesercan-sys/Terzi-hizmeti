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
 *  ilk cümleden sonra o dilde "Fotoğraf gönderin, fiyat alın" eklenir; sığmazsa sondaki cümleler kısalır. 10 dil. */
export const RESIM_FIYAT = 'Resim gönder, fiyat al.';
export const PHOTO_PRICE: Record<string, string> = {
  tr: RESIM_FIYAT, en: 'Send a photo, get a price.', ru: 'Пришлите фото — назовём цену.', de: 'Foto senden, Preis erhalten.',
  es: 'Envíe una foto y le damos el precio.', fr: 'Envoyez une photo, recevez un prix.', pl: 'Wyślij zdjęcie, poznaj cenę.',
  uk: 'Надішліть фото — назвемо ціну.', nl: 'Stuur een foto, krijg een prijs.', ar: 'أرسل صورة واحصل على السعر.',
};
const PHOTO_RE: Record<string, RegExp> = {
  tr: /fotoğraf|resim/iu, en: /photo/i, ru: /фото/iu, de: /foto/i, es: /foto/i, fr: /photo/i, pl: /zdję/iu, uk: /фото/iu, nl: /foto/i, ar: /صور/u,
};
export function photoPrice(s: string, lang: string = 'tr', max?: number): string {
  const add = PHOTO_PRICE[lang]; const re = PHOTO_RE[lang];
  const t = stripPhone(s);
  const fitted = fitDesc(t, max, lang);
  if (!add || !re || re.test(fitted)) return fitted; // kısaltılmış hâlde de görünüyorsa dokunma
  const m = t.match(/^[^.!?؟]{10,95}[.!?؟](?=\s)/u);
  const out = fitDesc((m ? `${m[0]} ${add} ${t.slice(m[0].length).trim()}` : `${add} ${t}`).trim(), max, lang);
  if ([...out].length >= [...add].length + 40) return out;
  // ilk cümle çok uzunsa: asıl metin kısaltılır, fotoğraf cümlesi sona eklenir (açıklama yalnızca bu cümleden ibaret kalmasın)
  const lim = (max ?? 155) - [...add].length - 1;
  let base = fitDesc(t, lim, lang);
  if ([...t].length > lim) base = base.replace(/\s+\S{1,2}\.$/u, '.'); // kesildiyse sonda tek başına kalan kısa kelime atılır
  return `${base} ${add}`;
}
/** Eski ad: yalnızca Türkçe. */
export function resimFiyat(s: string, max?: number): string {
  return photoPrice(s, 'tr', max);
}
