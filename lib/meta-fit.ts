// Meta etiketi sınırları: title ≤ 60, description ≤ 155 karakter, anahtar kelime ≤ 8.
// Metinler kaynakta bu sınırlara göre yazılır; bu yardımcılar yalnızca şablonla üretilen
// uzun metinlerde son güvence olarak kelime/cümle sınırında kısaltır (kelime ortasında kesmez).
export const META_DESC_MAX = 155;
export const META_TITLE_MAX = 60;
export const META_KW_MAX = 8;

const len = (s: string) => [...s].length;

export function fitDesc(s: string, max = META_DESC_MAX): string {
  let t = s.trim();
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
