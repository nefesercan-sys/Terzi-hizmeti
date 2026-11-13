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
/** Açıklamanın sonundaki "☎ numara" ekini başa alır: "Terziye sor: numara · metin" (dil verilmezse "☎ numara · metin"). */
export function phoneFirst(s: string, lang?: string): string {
  const t = s.trim();
  const m = /^([\s\S]*?)\s*☎\s*(\+?\d[\d ]{9,18}\d)\s*\.?$/.exec(t);
  if (!m || !m[1].trim() || m[1].includes('☎')) return t;
  const pre = lang && ASK[lang] ? `${ASK[lang]}:` : '☎';
  return `${pre} ${m[2]} · ${m[1].trim()}`;
}

/** Açıklamada numara yoksa başına "Terziye sor: numara · " ekler (dile göre); zaten varsa dokunmaz. */
export function withAsk(desc: string, lang: string, phone = '+90 531 898 64 18'): string {
  const d = desc.trim();
  if (!ASK[lang] || /\+90 ?531|0531 ?898|☎/.test(d)) return d;
  return `${ASK[lang]}: ${phone} · ${d}`;
}

export function fitDesc(s: string, max = META_DESC_MAX, lang?: string): string {
  let t = phoneFirst(s, lang);
  if (len(t) <= max) return t;
  // 0) numara baştaysa (☎ numara · metin) korunur; yalnızca metin kısmı kısaltılır
  const lead = /^((?:☎|[^\d:·]{3,40}:)\s*\+?\d[\d ]{9,18}\d\s*·\s*)([\s\S]+)$/u.exec(t);
  if (lead) return lead[1] + fitDesc(lead[2], max - len(lead[1]));
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
