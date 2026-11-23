// Görsel site haritası (Google image sitemap): her görsel, göründüğü sayfa ve sayfa dilinde başlık/açıklamayla.
// Görseller yapay zekâ ile üretilmiş örnek görsellerdir; başlıklarda "örnek görsel" etiketi korunur.
import { GORSELLER, gorselMetin, ALT_EK, ORNEK_ETIKET, type GorselAnahtar } from '@/lib/ornek-gorseller';

const SITE = 'https://terzihizmeti.com.tr';
const SAYFA: Partial<Record<GorselAnahtar, string>> = {"paca-kisaltma": "/konyaalti-paca-kisaltma", "fermuar-degisimi": "/konyaalti-fermuar-tamiri", "dikis-makinesi": "/sokuk-yirtik-onarimi-antalya", "bel-daraltma-manken": "/abiye-tadilati-antalya", "gelinlik-abiye": "/antalya-gelinlik-tadilati", "keten-kadin-evde": "/keten-pamuk-ozel-dikim", "keten-blazer-atolye": "/keten-pamuk-ozel-dikim", "keten-erkek-gomlek": "/keten-pamuk-ozel-dikim", "keten-pantolon-katli": "/kot-pantolon-paca-kisaltma-antalya", "erkek-gomlek-atolye": "/yelek-tamiri-tadilati-antalya", "kadin-trenckot-atolye": "/kot-ceket-mont-tadilati-antalya", "erkek-palto-atolye": "/kaban-palto-tadilati-antalya", "sef-mutfak-uniforma": "/antalya-uniforma-imalati", "atolye-kesim-masasi": "/mayo-tadilati-antalya", "abiye-elbise-atolye": "/abiye-tadilati-antalya", "abiye-askida": "/abiye-tadilati-antalya", "erkek-takim-olcu": "/takim-elbise-tadilati-antalya", "manken-palto-takim": "/kaban-palto-tadilati-antalya", "manken-bej-ceket": "/takim-elbise-tadilati-antalya", "pilili-etek": "/kot-etek-kisaltma-daraltma-antalya", "beyaz-gomlek-katli": "/dugme-dikme-tamiri-antalya", "sweatshirt-katli": "/sokuk-yirtik-onarimi-antalya", "yun-pantolon-metre": "/kot-pantolon-daraltma-antalya", "palto-yaka-detay": "/kaban-palto-tadilati-antalya", "polar-yelek": "/yelek-tamiri-tadilati-antalya", "eve-gelen-terzi": "/otele-gelen-terzi-antalya"};
const EK: [string, string, string][] = [["/antalya-terzi-can-dikim-tamir-tadilat.jpg", "/", "Terzi Can Antalya: terzi dikim, tamir, tadilat"]];
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const dynamic = 'force-static';

export function GET() {
  const bySayfa = new Map<string, string[]>();
  const ekle = (sayfa: string, xml: string) => { if (!bySayfa.has(sayfa)) bySayfa.set(sayfa, []); bySayfa.get(sayfa)!.push(xml); };
  for (const [k, sayfa] of Object.entries(SAYFA) as [GorselAnahtar, string][]) {
    const g = GORSELLER[k]; if (!g) continue;
    const m = gorselMetin(k, 'tr');
    ekle(sayfa, `<image:image><image:loc>${SITE}${g.src}</image:loc><image:title>${esc(m.baslik)}</image:title><image:caption>${esc(`${m.aciklama} ${ALT_EK.tr} (${ORNEK_ETIKET.tr})`)}</image:caption></image:image>`);
  }
  for (const [src, sayfa, baslik] of EK) ekle(sayfa, `<image:image><image:loc>${SITE}${src}</image:loc><image:title>${esc(baslik)}</image:title></image:image>`);
  const body = [...bySayfa].map(([sayfa, imgs]) => `<url><loc>${SITE}${sayfa}</loc>${imgs.join('')}</url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
