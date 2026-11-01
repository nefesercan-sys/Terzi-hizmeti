// ============================================================
// lib/area-profiles.ts — bölge sayfaları için DOĞRULANABİLİR genel coğrafi bilgi + metin şablonları (tr/en/ru/de)
// Kurallar: yalnızca ilçe/mahalle ilişkisi, bölgenin genel karakteri (sahil / otel bölgesi / konut) ve yakın semtler.
// Mesafe, dakika, rakam, belirli otel ilişkisi YOK. Aynı bilgiyi birden fazla cümle yapısıyla veren şablonlar,
// slug'a göre deterministik seçilir (sayfalar birbirinin kopyası olmasın).
// ============================================================
import type { Lang } from '@/lib/seo-data';

export type AreaType = 'ilce_sahil' | 'ilce_merkez' | 'mah_sahil' | 'mah_konut' | 'otel_lara' | 'otel_golf' | 'otel_antik' | 'otel_orman' | 'dis';
export interface AreaProfile { type: AreaType; parent?: 'konyaalti' | 'muratpasa' | 'kemer' | 'serik' | 'manavgat' | 'aksu'; near: string[] }

export const AREA_PROFILES: Record<string, AreaProfile> = {
  konyaalti: { type: 'ilce_sahil', near: ['hurma', 'liman', 'sarisu', 'arapsuyu', 'altinkum', 'uncali', 'gursu'] },
  muratpasa: { type: 'ilce_merkez', near: ['meltem', 'sirinyali', 'fener', 'guzeloba', 'lara'] },
  hurma: { type: 'mah_konut', parent: 'konyaalti', near: ['liman', 'sarisu', 'uncali', 'gursu'] },
  liman: { type: 'mah_sahil', parent: 'konyaalti', near: ['hurma', 'sarisu', 'uncali'] },
  gursu: { type: 'mah_konut', parent: 'konyaalti', near: ['uncali', 'hurma', 'uluc'] },
  uncali: { type: 'mah_konut', parent: 'konyaalti', near: ['hurma', 'gursu', 'sarisu'] },
  sarisu: { type: 'mah_sahil', parent: 'konyaalti', near: ['hurma', 'liman', 'arapsuyu'] },
  meltem: { type: 'mah_sahil', parent: 'muratpasa', near: ['sirinyali', 'fener', 'muratpasa'] },
  fener: { type: 'mah_konut', parent: 'muratpasa', near: ['sirinyali', 'meltem', 'guzeloba'] },
  sirinyali: { type: 'mah_konut', parent: 'muratpasa', near: ['meltem', 'fener', 'muratpasa'] },
  lara: { type: 'otel_lara', parent: 'muratpasa', near: ['guzeloba', 'kundu', 'fener'] },
  guzeloba: { type: 'otel_lara', parent: 'muratpasa', near: ['lara', 'fener', 'kundu'] },
  kundu: { type: 'otel_lara', parent: 'aksu', near: ['lara', 'guzeloba'] },
  arapsuyu: { type: 'mah_sahil', parent: 'konyaalti', near: ['altinkum', 'sarisu', 'siteler'] },
  toros: { type: 'mah_konut', parent: 'konyaalti', near: ['hurma', 'uncali', 'siteler'] },
  ogretmenevleri: { type: 'mah_konut', parent: 'konyaalti', near: ['siteler', 'toros', 'hurma'] },
  kepez: { type: 'dis', near: ['muratpasa', 'dosemealti', 'aksu'] },
  aksu: { type: 'dis', near: ['kundu', 'lara', 'kepez'] },
  dosemealti: { type: 'dis', near: ['kepez', 'konyaalti'] },
  belek: { type: 'otel_golf', parent: 'serik', near: ['side', 'aksu', 'lara'] },
  side: { type: 'otel_antik', parent: 'manavgat', near: ['belek', 'kemer'] },
  kemer: { type: 'otel_orman', near: ['beldibi', 'goynuk', 'konyaalti'] },
  beldibi: { type: 'otel_orman', parent: 'kemer', near: ['goynuk', 'kemer', 'konyaalti'] },
  goynuk: { type: 'otel_orman', parent: 'kemer', near: ['kemer', 'beldibi'] },
  uluc: { type: 'mah_konut', parent: 'konyaalti', near: ['gursu', 'hurma', 'siteler'] },
  siteler: { type: 'mah_konut', parent: 'konyaalti', near: ['ogretmenevleri', 'uluc', 'altinkum'] },
  altinkum: { type: 'mah_sahil', parent: 'konyaalti', near: ['arapsuyu', 'siteler', 'liman'] },
};

type L4 = Record<Lang, string>;
const PARENT: Record<string, L4> = {
  konyaalti: { tr: "Konyaaltı", en: 'Konyaaltı', ru: 'Коньяалты', de: 'Konyaaltı' },
  muratpasa: { tr: 'Muratpaşa', en: 'Muratpaşa', ru: 'Муратпаша', de: 'Muratpaşa' },
  kemer: { tr: 'Kemer', en: 'Kemer', ru: 'Кемер', de: 'Kemer' },
  serik: { tr: 'Serik', en: 'Serik', ru: 'Серик', de: 'Serik' },
  manavgat: { tr: 'Manavgat', en: 'Manavgat', ru: 'Манавгат', de: 'Manavgat' },
  aksu: { tr: 'Aksu', en: 'Aksu', ru: 'Аксу', de: 'Aksu' },
};
const TYPE_TXT: Record<AreaType, L4> = {
  ilce_sahil: { tr: 'Antalya\'nın batı sahilindeki ilçe', en: "the district on Antalya's western coast", ru: 'район на западном побережье Антальи', de: 'der Bezirk an Antalyas Westküste' },
  ilce_merkez: { tr: 'şehir merkezini ve sahil boyunca uzanan mahalleleri kapsayan merkez ilçe', en: 'the central district that covers the city centre and neighbourhoods along the coast', ru: 'центральный район, включающий центр города и прибрежные кварталы', de: 'der zentrale Bezirk mit Stadtzentrum und Vierteln entlang der Küste' },
  mah_sahil: { tr: 'sahil hattına yakın bir mahalle', en: 'a neighbourhood close to the coast', ru: 'квартал недалеко от побережья', de: 'ein Viertel nahe der Küste' },
  mah_konut: { tr: 'apartman ve sitelerin ağırlıkta olduğu yerleşik bir mahalle', en: 'a residential neighbourhood of apartment blocks and housing estates', ru: 'жилой квартал с многоэтажками и жилыми комплексами', de: 'ein Wohnviertel mit Apartmenthäusern und Wohnanlagen' },
  otel_lara: { tr: 'Antalya\'nın doğusunda, sahil boyunca otellerin sıralandığı tatil bölgesi', en: "a holiday area east of Antalya with hotels lined along the coast", ru: 'курортная зона к востоку от Антальи с отелями вдоль побережья', de: 'ein Urlaubsgebiet östlich von Antalya mit Hotels entlang der Küste' },
  otel_golf: { tr: 'golf sahaları ve büyük resort otelleriyle bilinen tatil bölgesi', en: 'a holiday area known for golf courses and large resort hotels', ru: 'курортная зона, известная гольф-полями и большими курортными отелями', de: 'ein Urlaubsgebiet mit Golfplätzen und großen Resorthotels' },
  otel_antik: { tr: 'antik kentin yanında sahil otellerinin bulunduğu tarihi tatil beldesi', en: 'a historic holiday town where an ancient city sits beside beach hotels', ru: 'исторический курортный городок, где рядом с античным городом стоят пляжные отели', de: 'ein historischer Urlaubsort, wo eine antike Stadt neben Strandhotels liegt' },
  otel_orman: { tr: 'dağlarla denizin yan yana olduğu, otel ağırlıklı tatil bölgesi', en: 'a hotel-centred holiday area where mountains meet the sea', ru: 'отельная курортная зона, где горы встречаются с морем', de: 'ein von Hotels geprägtes Urlaubsgebiet, wo Berge und Meer aufeinandertreffen' },
  dis: { tr: 'Antalya merkezinin dışında, geniş bir yerleşim alanı', en: 'a large residential area outside the Antalya city centre', ru: 'крупный жилой район за пределами центра Антальи', de: 'ein großes Wohngebiet außerhalb des Antalyaer Zentrums' },
};

const hash = (s: string) => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
export const pickVariant = (slug: string, n: number, salt = '') => hash(slug + salt) % n;
const join = (lang: Lang, xs: string[]) => {
  if (xs.length <= 1) return xs.join('');
  const and = { tr: 've', en: 'and', ru: 'и', de: 'und' }[lang];
  return `${xs.slice(0, -1).join(', ')} ${and} ${xs[xs.length - 1]}`;
};

export interface NameLookup { name: (slug: string, lang: Lang) => string | undefined }

/** Bölgeyi tanıtan 2–3 cümle (ilişki + karakter + yakın semtler). 3 farklı cümle yapısı, slug'a göre seçilir. */
export function areaIntro(lang: Lang, slug: string, n: string, lk: NameLookup): string {
  const p = AREA_PROFILES[slug];
  if (!p) return '';
  const type = TYPE_TXT[p.type][lang];
  const parent = p.parent ? PARENT[p.parent][lang] : '';
  const near = join(lang, p.near.map((s) => lk.name(s, lang)).filter(Boolean) as string[]);
  const v = pickVariant(slug, 3);
  if (lang === 'tr') {
    const rel = parent ? `${n}, ${parent} ilçesine bağlı; ${type}.` : `${n}: ${type}.`;
    return [
      `${rel} Çevresindeki semtler arasında ${near} yer alır.`,
      `${n}${parent ? `, idari olarak ${parent} sınırları içindedir` : ''}; ${type}. Yakın semtler: ${near}.`,
      `${near} ile aynı çevrede bulunan ${n}${parent ? `, ${parent} ilçesinin bir parçasıdır` : ''}; ${type}.`,
    ][v];
  }
  if (lang === 'en') {
    return [
      `${n}${parent ? ` belongs to ${parent}` : ''} and is ${type}. Nearby areas include ${near}.`,
      `${parent ? `Administratively part of ${parent}, ` : ''}${n} is ${type}. Close neighbours: ${near}.`,
      `Alongside ${near}, ${n} is ${type}${parent ? ` within ${parent}` : ''}.`,
    ][v];
  }
  if (lang === 'ru') {
    return [
      `${n}${parent ? ` относится к району ${parent}` : ''} — это ${type}. Рядом находятся: ${near}.`,
      `${parent ? `Административно ${n} входит в ${parent}: ` : `${n} — `}${type}. Ближайшие места: ${near}.`,
      `Вместе с такими местами, как ${near}, ${n} — это ${type}${parent ? ` (${parent})` : ''}.`,
    ][v];
  }
  return [
    `${n}${parent ? ` gehört zu ${parent}` : ''} und ist ${type}. In der Nähe liegen ${near}.`,
    `${parent ? `Verwaltungsmäßig zu ${parent} gehörend, ist ` : 'Hier ist '}${n} ${type}. Nachbarn: ${near}.`,
    `Neben ${near} gehört ${n} zu den Orten ${parent ? `im Bereich ${parent}` : 'der Region'} – ${type}.`,
  ][v];
}

/** Bu bölgede tipik ihtiyaçlar: tür havuzundan slug'a göre 3 madde. Rakam/vaat yok. */
const NEEDS: Record<'konut' | 'sahil' | 'otel' | 'dis', L4[]> = {
  konut: [
    { tr: 'İş ve okul günleri için pantolon, gömlek ve etek boyu ayarı', en: 'Trouser, shirt and skirt length adjustments for work and school days', ru: 'Подгонка длины брюк, рубашек и юбок для работы и учёбы', de: 'Länge von Hosen, Hemden und Röcken für Arbeit und Schule anpassen' },
    { tr: 'Sezon değişiminde dolaptan çıkan montların ve ceketlerin kontrolü', en: 'Checking coats and jackets that come out of the wardrobe at the change of season', ru: 'Проверка курток и пальто при смене сезона', de: 'Mäntel und Jacken beim Saisonwechsel prüfen und anpassen' },
    { tr: 'Kilo değişimi sonrası bel ve beden ayarı', en: 'Waist and size adjustments after a change in weight', ru: 'Подгонка талии и размера после изменения веса', de: 'Bund und Größe nach einer Gewichtsveränderung anpassen' },
    { tr: 'Çocuk okul kıyafetlerinde paça ve kol ayarı', en: 'Hem and sleeve adjustments on children\'s school clothes', ru: 'Подгонка низа и рукавов на детской школьной одежде', de: 'Saum und Ärmel bei Schulkleidung der Kinder anpassen' },
    { tr: 'Davet ve düğün öncesi elbise ve takım tadilatı', en: 'Dress and suit alterations before invitations and weddings', ru: 'Подгонка платьев и костюмов перед приглашениями и свадьбами', de: 'Kleider und Anzüge vor Einladungen und Hochzeiten ändern' },
    { tr: 'Bozulan fermuar gibi küçük onarımlar', en: 'Small repairs such as broken zippers', ru: 'Мелкий ремонт: сломанные молнии', de: 'Kleine Reparaturen wie defekte Reißverschlüsse' },
  ],
  sahil: [
    { tr: 'Yazlık kıyafetlerde — şort, keten pantolon, elbise — boy ve bel ayarı', en: 'Length and waist adjustments on summer clothes such as shorts, linen trousers and dresses', ru: 'Подгонка длины и талии летней одежды: шорты, льняные брюки, платья', de: 'Länge und Bund bei Sommerkleidung wie Shorts, Leinenhosen und Kleidern anpassen' },
    { tr: 'Sahil yürüyüşü ve akşam yemeği için son dakika elbise ayarı', en: 'Last-minute dress fixes for a seaside walk or an evening out', ru: 'Срочная подгонка платья для прогулки по набережной или вечернего выхода', de: 'Kurzfristige Kleideranpassung für den Strandspaziergang oder den Abend' },
    { tr: 'Deniz ve güneşten yıpranan kıyafetlerde dikiş ve fermuar onarımı', en: 'Seam and zipper repairs on clothes worn out by sun and sea', ru: 'Ремонт швов и молний на одежде, пострадавшей от солнца и моря', de: 'Nähte und Reißverschlüsse an von Sonne und Meer beanspruchter Kleidung reparieren' },
    { tr: 'Kot pantolon paçası ve bel daraltma', en: 'Jeans hemming and waist taking-in', ru: 'Подшив джинсов и ушивание в талии', de: 'Jeans kürzen und Bund enger machen' },
    { tr: 'Tatilde alınan hazır giyimin beden düzeltmesi', en: 'Fit corrections on ready-to-wear bought on holiday', ru: 'Подгонка готовой одежды, купленной в отпуске', de: 'Passform-Korrekturen an im Urlaub gekaufter Konfektionskleidung' },
    { tr: 'Keten ve pamuklu yazlık giysilerin ölçüye göre dikimi', en: 'Made-to-measure summer clothes in linen and cotton', ru: 'Пошив летней одежды из льна и хлопка по меркам', de: 'Maßanfertigung von Sommerkleidung aus Leinen und Baumwolle' },
  ],
  otel: [
    { tr: 'Valizde buruşan ya da dar gelen kıyafetin tatil sırasında ayarlanması', en: 'Adjusting clothes that got creased in the suitcase or turned out too tight during the holiday', ru: 'Подгонка одежды, которая помялась в чемодане или оказалась тесной во время отпуска', de: 'Kleidung anpassen, die im Koffer zerknittert ist oder im Urlaub zu eng wurde' },
    { tr: 'Akşam yemeği, gala ya da düğün için son dakika abiye ve takım ayarı', en: 'Last-minute evening-dress and suit fixes for a dinner, gala or wedding', ru: 'Срочная подгонка вечернего платья и костюма для ужина, гала или свадьбы', de: 'Kurzfristige Anpassung von Abendkleid und Anzug für Dinner, Gala oder Hochzeit' },
    { tr: 'Tatilde alınan kıyafetin paça, bel ve kol ayarı', en: 'Hem, waist and sleeve adjustments on clothes bought during the holiday', ru: 'Подгонка низа, талии и рукавов одежды, купленной в отпуске', de: 'Saum, Bund und Ärmel bei im Urlaub gekaufter Kleidung anpassen' },
    { tr: 'Yırtılan ya da sökülen kıyafette hızlı onarım', en: 'Quick repairs of torn or unpicked garments', ru: 'Быстрый ремонт порванной или распоровшейся одежды', de: 'Schnelle Reparatur bei gerissener oder aufgegangener Kleidung' },
    { tr: 'Çocuk ve aile kıyafetlerinde küçük ayarlar', en: 'Small adjustments to children\'s and family clothing', ru: 'Небольшая подгонка детской и семейной одежды', de: 'Kleine Anpassungen bei Kinder- und Familienkleidung' },
    { tr: 'Keten ve pamukla ölçüye göre yazlık dikim', en: 'Made-to-measure summer sewing in linen and cotton', ru: 'Пошив летней одежды по меркам из льна и хлопка', de: 'Maßgeschneiderte Sommerkleidung aus Leinen und Baumwolle' },
  ],
  dis: [
    { tr: 'Gün içinde uğrayamayanlar için adrese randevulu alım-teslim', en: 'Pick-up and delivery by appointment for those who cannot drop by during the day', ru: 'Забор и доставка по записи для тех, кто не может зайти днём', de: 'Abholung und Lieferung nach Absprache für alle, die tagsüber nicht vorbeikommen können' },
    { tr: 'Paça, bel ve kol ayarı gibi günlük tadilatlar', en: 'Everyday alterations such as hem, waist and sleeve adjustments', ru: 'Повседневная подгонка: низ, талия, рукава', de: 'Alltägliche Änderungen wie Saum, Bund und Ärmel' },
    { tr: 'Fermuar değişimi ve söküklerin onarımı', en: 'Zipper replacement and mending of open seams', ru: 'Замена молний и ремонт распоровшихся швов', de: 'Reißverschluss wechseln und aufgegangene Nähte reparieren' },
    { tr: 'Özel gün için elbise ve takım tadilatı', en: 'Dress and suit alterations for special occasions', ru: 'Подгонка платьев и костюмов к особому случаю', de: 'Kleider und Anzüge für besondere Anlässe ändern' },
  ],
};
const needsGroup = (t: AreaType): 'konut' | 'sahil' | 'otel' | 'dis' =>
  t === 'mah_konut' ? 'konut' : (t === 'mah_sahil' || t === 'ilce_sahil') ? 'sahil' : t === 'dis' ? 'dis' : t === 'ilce_merkez' ? 'konut' : 'otel';

export function areaNeeds(lang: Lang, slug: string): string[] {
  const p = AREA_PROFILES[slug];
  if (!p) return [];
  const pool = NEEDS[needsGroup(p.type)];
  const start = pickVariant(slug, pool.length, 'needs');
  const step = 1 + pickVariant(slug, 2, 'step');
  return [0, 1, 2].map((i) => pool[(start + i * step) % pool.length][lang]);
}

export const NEEDS_H: Record<Lang, (n: string) => string> = {
  tr: (n) => `${n} çevresinden en çok gelen işler`,
  en: (n) => `Jobs we typically see from ${n}`,
  ru: (n) => `С какими задачами к нам обращаются из района ${n}`,
  de: (n) => `Typische Aufträge aus ${n}`,
};
export const NEARBY_H: Record<Lang, string> = { tr: 'Yakın semtler', en: 'Nearby areas', ru: 'Рядом', de: 'In der Umgebung' };
