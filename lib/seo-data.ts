// ============================================================
// terzihizmeti.com.tr — lib/seo-data.ts
// Bölge × hizmet arama sorguları için TEK veri kaynağı (TR/EN/RU/DE).
// Kurallar:
//  - Sadece doğrulanmış bilgi: tek atölye (Hurma, Konyaaltı), 2006'dan beri, her gün 08:00–23:00,
//    otellere ücretsiz servis, teslim süreleri lib/delivery.ts'ten (acil 1–2 saat / normal ertesi gün / özel dikim modele ve adede göre), gelinlik ₺800+, abiye ₺800+.
//  - Mesafe/dakika, puan, müşteri sayısı, sahte vaat YOK.
//  - Yeni bölge/hizmet eklemek için sadece bu dosyaya satır ekle; sayfalar, sitemap ve iç linkler otomatik oluşur.
// ============================================================

import { DELIVERY } from '@/lib/delivery';

export type Lang = 'tr' | 'en' | 'ru' | 'de';
export const LANGS: Lang[] = ['tr', 'en', 'ru', 'de'];
type L4<T = string> = Record<Lang, T>;

export const SITE = 'https://terzihizmeti.com.tr';
export const PHONE = '+90 531 898 64 18';
export const PHONE_TEL = '+905318986418';
export const BUSINESS_ID = `${SITE}#business`;
export const MAPS = 'https://www.google.com/maps?cid=6436895271281342624';
export const LAST_UPDATE = '2026-11-01';

// ── BÖLGE STRATEJİSİ (tek ayar noktası) ─────────────────────
// Türkçe sayfalar yalnızca atölyeye (Konyaaltı/Hurma) yakın bölgelerde aramaya açık; uzak bölgelerin Türkçe sayfaları
// noindex olur, sitemap'ten, iç linklerden ve hreflang'dan çıkar. Yabancı dil (EN/RU/DE) sayfaları TÜM bölgelerde açıktır.
// Bir bölgeyi Türkçede açmak/kapatmak için bu listeyi değiştirmek yeterli.
export const TR_NEAR_SLUGS = ['konyaalti', 'hurma', 'liman', 'gursu', 'uluc', 'altinkum', 'ogretmenevleri', 'arapsuyu', 'siteler', 'uncali', 'sarisu', 'meltem', 'muratpasa', 'fener', 'sirinyali', 'toros'];
/** Otellere alım-teslim TÜM hizmet bölgelerinde ücretsizdir (sahibinin kararı). */
export const HOTEL_SERVICE_FREE = true;
/** Otel dışı (ev) adreslerde ücretsiz alım-teslim yalnızca bu mahallelerde (TEK kaynak); diğerleri WhatsApp'tan sorulur. */
export const FREE_SERVICE_SLUGS = ['konyaalti', 'hurma', 'sarisu', 'liman', 'uncali', 'altinkum', 'ogretmenevleri', 'siteler', 'arapsuyu', 'gursu', 'uluc', 'meltem'];
export const isFreeService = (slug: string): boolean => FREE_SERVICE_SLUGS.includes(slug);
export const isTrNear = (slug: string): boolean => TR_NEAR_SLUGS.includes(slug);
// ── Türkçe yakın bölge sayfaları için ek anahtar kelime katmanı ─────────────────────────────
// Konyaaltı: sahil mahalleleri + günlük arama kalıpları. Diğer yakın bölgeler: dönüşümlü 6 terim (sayfalar birbirinin kopyası olmasın).
// Uzak bölge adı geçmez. Yeni sayfa açılmaz; yalnızca mevcut sayfanın anahtar kelimelerine eklenir.
const TR_TERMS = ['kot paçası kısaltma', 'şort kısaltma', 'pantolon daraltma', 'etek kısaltma', 'etek daraltma', 'elbise daraltma', 'elbise kısaltma',
  'fermuar değişimi', 'beden ayarlama', 'ölçüye göre özel dikim', 'bay bayan elbise dikimi', 'abiye tamiri', 'abiye tadilatı', 'ceket tadilatı',
  'mont tamiri', 'mont kısaltma', 'gömlek daraltma', 'bel daraltma', 'yakınımda terzi', 'tamir tadilat'];
export function trExtraKeywords(slug: string, name: string): string[] {
  if (slug === 'konyaalti') {
    const places = ['Hurma', 'Liman', 'Uncalı', 'Sarısu', 'Gürsu', 'Altınkum', 'Uluç'];
    const core = ['terzi', 'tamir tadilat', 'özel dikim', 'abiye tamiri', 'fermuar değişimi', 'paça kısaltma', 'bel daraltma', 'bay bayan elbise dikimi'];
    return [...places.flatMap((p) => core.map((c) => `${p} ${c}`)), 'Konyaaltı sahil terzi', 'Konyaaltı ölçüye göre özel dikim', 'Konyaaltı beden ayarlama',
      'Konyaaltı kot paçası kısaltma', 'Konyaaltı mont ceket gömlek tadilatı', 'Konyaaltı şort pantolon etek kısaltma'];
  }
  let h = 0; for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return [0, 3, 7, 11, 13, 17].map((k) => `${name} ${TR_TERMS[(h + k) % TR_TERMS.length]}`);
}
/** Bu dil + bölge sayfası aramaya açık mı? */
export const isIndexable = (lang: Lang, slug: string): boolean => lang !== 'tr' || isTrNear(slug);

// ── URL şeması ──────────────────────────────────────────────
export const DISTRICT_BASE: L4 = {
  tr: '/antalya-terzi', en: '/en/tailor-antalya', ru: '/ru/portnoy-antalya', de: '/de/schneider-antalya',
};
export const SERVICE_BASE: L4 = {
  tr: '/terzi-hizmetleri', en: '/en/tailor-services', ru: '/ru/uslugi-portnogo', de: '/de/schneider-leistungen',
};
export const HUB_MAIN: L4 = {
  tr: '/antalya-terzi', en: '/en/tailor-service-antalya', ru: '/ru/uslugi-portnogo-antalya', de: '/de/schneiderservice-antalya',
};
export const HOTEL_BASE: L4 = {
  tr: '/otele-gelen-terzi-antalya', en: '/en/hotel-tailor-antalya', ru: '/ru/vyezdnoy-portnoy-antalya', de: '/de/schneider-service-hotel-antalya',
};

// ── Bölgeler ────────────────────────────────────────────────
export type Kind = 'central' | 'resort' | 'outer';
export interface District {
  slug: string;
  kind: Kind;
  name: L4;
  loc: L4;            // "…'da" gibi yer-durum kalıbı (TR: ek dahil, RU: önek dahil, EN/DE: "in X")
  alias: string[];    // ASCII/yazım varyantları (anahtar kelime)
  trHref?: string;    // Türkçede kendi özel sayfası varsa (ör. /hurma-terzi); genel bölge rotası bu slug için açılmaz
  hotelSlug?: string; // OTEL_BOLGELERI'nde karşılığı varsa
}

export const DISTRICTS: District[] = [
  { slug: 'muratpasa', kind: 'central', name: { tr: 'Muratpaşa', en: 'Muratpaşa', ru: 'Муратпаша', de: 'Muratpaşa' },
    loc: { tr: "Muratpaşa'da", en: 'in Muratpaşa', ru: 'в Муратпаше', de: 'in Muratpaşa' }, alias: ['Muratpasa'] },
  { slug: 'konyaalti', kind: 'central', name: { tr: 'Konyaaltı', en: 'Konyaaltı', ru: 'Коньяалты', de: 'Konyaaltı' },
    loc: { tr: "Konyaaltı'nda", en: 'in Konyaaltı', ru: 'в Коньяалты', de: 'in Konyaaltı' }, alias: ['Konyaalti', 'Konyaalti Antalya'] },
  { slug: 'hurma', kind: 'central', name: { tr: 'Hurma', en: 'Hurma', ru: 'Хурма', de: 'Hurma' },
    loc: { tr: "Hurma'da", en: 'in Hurma', ru: 'в Хурме', de: 'in Hurma' }, alias: ['Hurma Konyaaltı', 'Hurma Mahallesi'], trHref: '/hurma-terzi' },
  { slug: 'liman', kind: 'central', name: { tr: 'Liman', en: 'Liman', ru: 'Лиман', de: 'Liman' },
    loc: { tr: "Liman'da", en: 'in Liman', ru: 'в Лимане', de: 'in Liman' }, alias: ['Liman Mahallesi', 'Liman Konyaaltı'], trHref: '/liman-terzi' },
  { slug: 'gursu', kind: 'central', name: { tr: 'Gürsu', en: 'Gürsu', ru: 'Гюрсу', de: 'Gürsu' },
    loc: { tr: "Gürsu'da", en: 'in Gürsu', ru: 'в Гюрсу', de: 'in Gürsu' }, alias: ['Gursu', 'Gürsu Mahallesi'], trHref: '/gursu-terzi' },
  { slug: 'uncali', kind: 'central', name: { tr: 'Uncalı', en: 'Uncalı', ru: 'Унджалы', de: 'Uncalı' },
    loc: { tr: "Uncalı'da", en: 'in Uncalı', ru: 'в Унджалы', de: 'in Uncalı' }, alias: ['Uncali', 'Uncalı Mahallesi'], trHref: '/uncali-terzi' },
  { slug: 'sarisu', kind: 'central', name: { tr: 'Sarısu', en: 'Sarısu', ru: 'Сарысу', de: 'Sarısu' },
    loc: { tr: "Sarısu'da", en: 'in Sarısu', ru: 'в Сарысу', de: 'in Sarısu' }, alias: ['Sarisu', 'Sarısu Mahallesi'], trHref: '/sarisu-terzi' },
  { slug: 'meltem', kind: 'central', name: { tr: 'Meltem', en: 'Meltem', ru: 'Мельтем', de: 'Meltem' },
    loc: { tr: "Meltem'de", en: 'in Meltem', ru: 'в Мельтеме', de: 'in Meltem' }, alias: [] },
  { slug: 'fener', kind: 'central', name: { tr: 'Fener', en: 'Fener', ru: 'Фенер', de: 'Fener' },
    loc: { tr: "Fener'de", en: 'in Fener', ru: 'в Фенере', de: 'in Fener' }, alias: ['Fener Mahallesi'] },
  { slug: 'sirinyali', kind: 'central', name: { tr: 'Şirinyalı', en: 'Şirinyalı', ru: 'Ширинъялы', de: 'Şirinyalı' },
    loc: { tr: "Şirinyalı'da", en: 'in Şirinyalı', ru: 'в Ширинъялы', de: 'in Şirinyalı' }, alias: ['Sirinyali', 'Şirinyali'] },
  { slug: 'lara', kind: 'resort', hotelSlug: 'lara', name: { tr: 'Lara', en: 'Lara', ru: 'Лара', de: 'Lara' },
    loc: { tr: "Lara'da", en: 'in Lara', ru: 'в Ларе', de: 'in Lara' }, alias: ['Lara Plajı'] },
  { slug: 'guzeloba', kind: 'resort', hotelSlug: 'guzeloba', name: { tr: 'Güzeloba', en: 'Güzeloba', ru: 'Гюзельоба', de: 'Güzeloba' },
    loc: { tr: "Güzeloba'da", en: 'in Güzeloba', ru: 'в Гюзельобе', de: 'in Güzeloba' }, alias: ['Guzeloba', 'Güzel Oba'] },
  { slug: 'kundu', kind: 'resort', hotelSlug: 'kundu', name: { tr: 'Kundu', en: 'Kundu', ru: 'Кунду', de: 'Kundu' },
    loc: { tr: "Kundu'da", en: 'in Kundu', ru: 'в Кунду', de: 'in Kundu' }, alias: [] },
  { slug: 'arapsuyu', kind: 'central', name: { tr: 'Arapsuyu', en: 'Arapsuyu', ru: 'Арапсую', de: 'Arapsuyu' },
    loc: { tr: "Arapsuyu'nda", en: 'in Arapsuyu', ru: 'в Арапсую', de: 'in Arapsuyu' }, alias: [] },
  { slug: 'toros', kind: 'central', name: { tr: 'Toros Mahallesi', en: 'Toros', ru: 'Торос', de: 'Toros' },
    loc: { tr: "Toros Mahallesi'nde", en: 'in Toros', ru: 'в районе Торос', de: 'in Toros' }, alias: ['Toros Mahallesi Konyaaltı'] },
  { slug: 'ogretmenevleri', kind: 'central', name: { tr: 'Öğretmenevleri', en: 'Öğretmenevleri', ru: 'Огретменевлери', de: 'Öğretmenevleri' },
    loc: { tr: "Öğretmenevleri'nde", en: 'in Öğretmenevleri', ru: 'в Огретменевлери', de: 'in Öğretmenevleri' }, alias: ['Ogretmenevleri'] },
  { slug: 'kepez', kind: 'central', name: { tr: 'Kepez', en: 'Kepez', ru: 'Кепез', de: 'Kepez' },
    loc: { tr: "Kepez'de", en: 'in Kepez', ru: 'в Кепезе', de: 'in Kepez' }, alias: [] },
  { slug: 'aksu', kind: 'outer', name: { tr: 'Aksu', en: 'Aksu', ru: 'Аксу', de: 'Aksu' },
    loc: { tr: "Aksu'da", en: 'in Aksu', ru: 'в Аксу', de: 'in Aksu' }, alias: [] },
  { slug: 'dosemealti', kind: 'outer', name: { tr: 'Döşemealtı', en: 'Döşemealtı', ru: 'Дёшемеалты', de: 'Döşemealtı' },
    loc: { tr: "Döşemealtı'nda", en: 'in Döşemealtı', ru: 'в Дёшемеалты', de: 'in Döşemealtı' }, alias: ['Dosemealti'] },
  { slug: 'belek', kind: 'resort', hotelSlug: 'belek', name: { tr: 'Belek', en: 'Belek', ru: 'Белек', de: 'Belek' },
    loc: { tr: "Belek'te", en: 'in Belek', ru: 'в Белеке', de: 'in Belek' }, alias: [] },
  { slug: 'side', kind: 'resort', hotelSlug: 'side', name: { tr: 'Side', en: 'Side', ru: 'Сиде', de: 'Side' },
    loc: { tr: "Side'de", en: 'in Side', ru: 'в Сиде', de: 'in Side' }, alias: ['Manavgat Side'] },
  { slug: 'kemer', kind: 'resort', hotelSlug: 'kemer', name: { tr: 'Kemer', en: 'Kemer', ru: 'Кемер', de: 'Kemer' },
    loc: { tr: "Kemer'de", en: 'in Kemer', ru: 'в Кемере', de: 'in Kemer' }, alias: [] },
  { slug: 'beldibi', kind: 'resort', name: { tr: 'Beldibi', en: 'Beldibi', ru: 'Бельдиби', de: 'Beldibi' },
    loc: { tr: "Beldibi'nde", en: 'in Beldibi', ru: 'в Бельдиби', de: 'in Beldibi' }, alias: [] },
  { slug: 'goynuk', kind: 'resort', name: { tr: 'Göynük', en: 'Göynük', ru: 'Гёйнюк', de: 'Göynük' },
    loc: { tr: "Göynük'te", en: 'in Göynük', ru: 'в Гёйнюке', de: 'in Göynük' }, alias: ['Goynuk'] },
  { slug: 'uluc', kind: 'central', name: { tr: 'Uluç', en: 'Uluç', ru: 'Улуч', de: 'Uluç' },
    loc: { tr: "Uluç'ta", en: 'in Uluç', ru: 'в Улуче', de: 'in Uluç' }, alias: ['Uluc', 'Uluç Konyaaltı'] },
  { slug: 'siteler', kind: 'central', name: { tr: 'Siteler', en: 'Siteler', ru: 'Ситлер', de: 'Siteler' },
    loc: { tr: "Siteler'de", en: 'in Siteler', ru: 'в Ситлере', de: 'in Siteler' }, alias: ['Siteler Antalya', 'Siteler Konyaaltı'] },
  { slug: 'altinkum', kind: 'central', name: { tr: 'Altınkum', en: 'Altınkum', ru: 'Алтынкум', de: 'Altınkum' },
    loc: { tr: "Altınkum'da", en: 'in Altınkum', ru: 'в Алтынкуме', de: 'in Altınkum' }, alias: ['Altinkum', 'Altınkum Konyaaltı', 'Altinkum Antalya'] },
];

// Zaten kendi sayfası olan Konyaaltı mahalleleri (yalnızca iç link için)
// Eski tek tek mahalle linkleri artık DISTRICTS içinde (hurma, liman, gursu, uncali, sarisu); tekrar link çıkmasın diye boş.
export const MAHALLE_PAGES: { href: string; name: L4 }[] = [];

// ── Hizmetler ───────────────────────────────────────────────
export type TimeKey = 'same' | 'next' | 'three' | 'none';
export interface Service {
  id: string;
  icon: string;
  slug: L4;
  name: L4;
  q: L4;              // "{loc} {q}" şeklinde sorgu üretmek için ad öbeği
  intro: L4;
  vars: L4<string[]>; // aynı niyetin farklı yazılışları (başlık/açıklama/anahtar kelime)
  time: TimeKey;
  priceFrom?: number; // ₺ — yalnızca sitede zaten yayınlanan başlangıç fiyatları
  priceText?: L4;     // fiyat birden fazla kaleme bölünüyorsa serbest metin
  timeText?: L4;      // süre için özel metin (varsa time yerine)
  extra?: { href: string; label: L4 };
}

export const SERVICES: Service[] = [
  {
    id: 'paca', icon: '📏', time: 'same', priceFrom: 200,
    slug: { tr: 'pantolon-paca-kisaltma', en: 'trouser-hemming', ru: 'podshiv-bryuk', de: 'hosen-kuerzen' },
    name: { tr: 'Pantolon Paça Kısaltma', en: 'Trouser Hemming', ru: 'Подшив брюк', de: 'Hosen kürzen' },
    q: { tr: 'paça kısaltma', en: 'trouser hemming', ru: 'подшив брюк', de: 'Hosen kürzen' },
    intro: {
      tr: 'Pantolon, takım pantolonu ve etek paçası için boyu üzerinizde işaretleyip Konyaaltı atölyemizde kısaltıyoruz. Normal işte ertesi gün, acil işte 1–2 saatte teslim edilir; tatilde ya da yoğun bir haftada vaktiniz kısıtlıysa uygundur.',
      en: 'Trousers, suit trousers or a skirt too long? We mark the length on you and hem it in our Konyaaltı workshop, with next-day delivery (urgent jobs 1–2 hours), which suits a holiday or a tight week.',
      ru: 'Брюки, брюки от костюма или юбка длинноваты? Отмечаем длину на вас и подшиваем в нашей мастерской в Коньяалты, на следующий день (срочно — за 1–2 часа) — удобно в отпуске или в плотном графике.',
      de: 'Hose, Anzughose oder Rock zu lang? Wir stecken die Länge an Ihnen ab und kürzen in unserer Werkstatt in Konyaaltı, am nächsten Tag fertig (eilig in 1–2 Stunden) – praktisch im Urlaub oder bei knapper Zeit.',
    },
    vars: {
      tr: ['pantolon paça kısaltma', 'etek boy kısaltma', 'etek kısaltma', 'etek daraltma', 'paça kısaltma terzi', 'kumaş pantolon boy kısaltma', 'pantolon boyu kısaltma', 'paça tadilatı', 'yakınımdaki terzi paça kısaltma', 'acil paça kısaltma'],
      en: ['trouser hemming', 'skirt hemming', 'shorten skirt', 'shorten trousers', 'pants hemming near me', 'trouser length alteration', 'hem pants tailor', 'urgent trouser hemming'],
      ru: ['подшить брюки', 'укоротить юбку', 'подшить юбку', 'укоротить брюки', 'подшив брюк срочно', 'ателье подшить брюки рядом', 'укорочение брюк', 'подшив низа брюк'],
      de: ['Hose kürzen', 'Rock kürzen', 'Rock enger machen', 'Hosen kürzen lassen', 'Hosensaum kürzen', 'Änderungsschneiderei Hose kürzen', 'Hose kürzen in der Nähe', 'Hosenlänge ändern'],
    },
  },
  {
    id: 'kot', icon: '👖', time: 'same', priceFrom: 200,
    slug: { tr: 'kot-pantolon-paca-kisaltma', en: 'jeans-hemming', ru: 'podshiv-dzhinsov', de: 'jeans-kuerzen' },
    name: { tr: 'Kot Pantolon Daraltma ve Kısaltma', en: 'Jeans Hemming & Taking In', ru: 'Подшив и ушивание джинсов', de: 'Jeans kürzen und enger machen' },
    q: { tr: 'kot pantolon kısaltma', en: 'jeans hemming', ru: 'подшив джинсов', de: 'Jeans kürzen' },
    intro: {
      tr: 'Kalın kot kumaşa uygun makine ve iplikle kot paçasını kısaltır, bacak genişliğini daraltırız. Paça boyu ve genişlik ölçünüze göre ayarlanır.',
      en: 'Jeans too long or too wide? We shorten the hem and taper the legs using machines and thread built for heavy denim, adjusting length and width to your measurements.',
      ru: 'Джинсы длинны или широки? Укорачиваем низ и сужаем штанины на машине и нитках для плотного денима, длину и ширину подгоняем по вашим меркам.',
      de: 'Jeans zu lang oder zu weit? Wir kürzen den Saum und verengen die Beine mit Maschinen und Garn für dicken Denim, Länge und Weite richten sich nach Ihren Maßen.',
    },
    vars: {
      tr: ['kot pantolon paça kısaltma', 'kot pantolon daraltma', 'kot pantolon kısaltma', 'kot paçası kısaltma', 'jean paça kısaltma terzi', 'kot bel daraltma'],
      en: ['jeans hemming', 'shorten jeans', 'taper jeans tailor', 'jeans length alteration', 'jeans alteration near me', 'take in jeans waist'],
      ru: ['подшить джинсы', 'укоротить джинсы', 'ушить джинсы', 'подшив джинсов с сохранением низа', 'ателье джинсы подшить', 'ушивание джинсов в талии'],
      de: ['Jeans kürzen', 'Jeans enger machen', 'Jeans kürzen lassen', 'Jeans Bund enger machen', 'Jeans Änderung Schneider', 'Jeans Hosenbein enger'],
    },
  },
  {
    id: 'bel', icon: '🪡', time: 'same', priceFrom: 200,
    slug: { tr: 'bel-daraltma', en: 'waist-taking-in', ru: 'ushivanie-v-talii', de: 'taille-enger-machen' },
    name: { tr: 'Bel Daraltma ve Genişletme', en: 'Waist Taking-in & Letting-out', ru: 'Ушивание и расширение в талии', de: 'Taille enger und weiter machen' },
    q: { tr: 'bel daraltma', en: 'waist alteration', ru: 'ушивание в талии', de: 'Taille enger machen' },
    intro: {
      tr: 'Bel size büyük ya da dar geldiğinde pantolon, etek, elbise ve ceketin belini daraltır veya genişletiriz. Ölçüyü provada birlikte belirleriz.',
      en: 'When the waist is too loose or too tight, we take in or let out trousers, skirts, dresses and jackets. We settle the size together with you at a fitting.',
      ru: 'Если талия велика или мала, ушиваем или расширяем брюки, юбки, платья и пиджаки. Размер определяем вместе с вами на примерке.',
      de: 'Sitzt die Taille zu locker oder zu eng, machen wir Hosen, Röcke, Kleider und Sakkos enger oder weiter. Das Maß legen wir gemeinsam bei der Anprobe fest.',
    },
    vars: {
      tr: ['bel daraltma', 'pantolon bel daraltma', 'elbise bel daraltma', 'bel genişletme terzi', 'beden küçültme terzi', 'kıyafet daraltma', 'etek bel daraltma'],
      en: ['waist alteration', 'take in waist', 'take in trousers waist', 'dress taking in', 'clothes too big alteration', 'let out waist tailor'],
      ru: ['ушить в талии', 'ушить брюки', 'ушить платье', 'ателье ушить одежду', 'расширить в талии', 'уменьшить размер одежды'],
      de: ['Taille enger machen', 'Hose enger machen', 'Kleid enger machen', 'Kleidung enger machen lassen', 'Bund weiter machen', 'Änderungsschneiderei Taille'],
    },
  },
  {
    id: 'fermuar', icon: '🔧', time: 'same', priceFrom: 300,
    slug: { tr: 'fermuar-degisimi-tamiri', en: 'zipper-repair-replacement', ru: 'zamena-molnii', de: 'reissverschluss-wechseln' },
    name: { tr: 'Fermuar Değişimi ve Tamiri', en: 'Zipper Repair & Replacement', ru: 'Замена и ремонт молнии', de: 'Reißverschluss wechseln und reparieren' },
    q: { tr: 'fermuar değişimi', en: 'zipper replacement', ru: 'замена молнии', de: 'Reißverschluss wechseln' },
    intro: {
      tr: 'Bozulan ya da takılan fermuarı pantolon, etek, elbise, mont, çanta ve ceketlerde tamir eder veya yenisiyle değiştiririz. Yeni fermuar kıyafetin rengine ve kumaş ağırlığına göre seçilir.',
      en: 'A broken or stuck zipper on trousers, skirts, dresses, coats, jackets or bags is repaired or replaced. The new zipper is chosen to match the garment\'s colour and fabric weight.',
      ru: 'Сломанную или заедающую молнию на брюках, юбках, платьях, куртках, пиджаках и сумках ремонтируем или меняем. Новую молнию подбираем под цвет и плотность ткани.',
      de: 'Einen defekten oder klemmenden Reißverschluss an Hosen, Röcken, Kleidern, Jacken, Sakkos und Taschen reparieren oder ersetzen wir. Der neue passt zu Farbe und Stoffstärke.',
    },
    vars: {
      tr: ['fermuar değişimi', 'fermuar tamiri', 'fermuar değiştirme terzi', 'pantolon fermuar tamiri', 'mont fermuar değişimi', 'elbise fermuarı değişimi', 'çanta fermuar tamiri'],
      en: ['zipper repair', 'zipper replacement', 'replace zipper tailor', 'trouser zipper repair', 'jacket zipper replacement', 'dress zipper repair near me'],
      ru: ['замена молнии', 'ремонт молнии', 'заменить молнию на куртке', 'замена молнии на брюках', 'ремонт молнии на платье', 'ателье замена молнии'],
      de: ['Reißverschluss wechseln', 'Reißverschluss reparieren', 'Reißverschluss Jacke wechseln', 'Reißverschluss Hose reparieren', 'Reißverschluss Kleid wechseln', 'Reißverschluss Reparatur Schneider'],
    },
  },
  {
    id: 'elbise-dikim', icon: '👗', time: 'three', priceFrom: 800,
    slug: { tr: 'elbise-dikimi', en: 'custom-dress-making', ru: 'poshiv-platya', de: 'kleid-naehen-lassen' },
    name: { tr: 'Elbise Dikimi (Ölçüye Göre)', en: 'Custom Dress Making', ru: 'Пошив платьев на заказ', de: 'Kleid nach Maß nähen' },
    q: { tr: 'elbise dikimi', en: 'custom dress making', ru: 'пошив платья', de: 'Kleid nähen lassen' },
    intro: {
      tr: 'Ölçünüze göre elbise dikiyoruz: günlük, keten, gece ve abiye modelleri. Keten ve pamuk gibi yazlık kumaşlarda model ve ölçüyü sizinle birlikte belirleriz.',
      en: 'We sew dresses to your measurements: everyday, linen, evening and formal styles. For summer fabrics such as linen and cotton, the design and size are agreed with you.',
      ru: 'Шьём платья по вашим меркам: повседневные, льняные, вечерние и нарядные. Для летних тканей, таких как лён и хлопок, фасон и размер согласуем с вами.',
      de: 'Wir nähen Kleider nach Ihren Maßen: Alltags-, Leinen-, Abend- und festliche Modelle. Bei Sommerstoffen wie Leinen und Baumwolle legen wir Schnitt und Größe gemeinsam fest.',
    },
    extra: { href: '/keten-pamuk-ozel-dikim', label: { tr: 'Keten ve pamuk özel dikim', en: 'Linen & cotton tailoring', ru: 'Пошив из льна и хлопка', de: 'Leinen & Baumwolle Schneiderei' } },
    vars: {
      tr: ['elbise dikimi', 'ölçüye göre elbise dikimi', 'elbise diktirme', 'keten elbise dikimi', 'gece kıyafeti dikimi', 'bayan kıyafet dikimi', 'bay bayan kıyafet dikimi'],
      en: ['custom dress making', 'dress made to measure', 'get a dress sewn', 'linen dress tailor', 'evening dress tailor', 'women clothing tailor'],
      ru: ['пошив платья на заказ', 'пошив платья по меркам', 'заказать платье в ателье', 'пошив льняного платья', 'пошив вечернего платья', 'ателье женской одежды'],
      de: ['Kleid nach Maß', 'Kleid nähen lassen', 'Maßschneiderei Kleid', 'Leinenkleid nähen lassen', 'Abendkleid nähen lassen', 'Damenschneiderei'],
    },
  },
  {
    id: 'ozel-dikim', icon: '✂️', time: 'three',
    slug: { tr: 'ozel-dikim-antalya', en: 'custom-tailoring-made-to-measure', ru: 'poshiv-na-zakaz', de: 'massanfertigung-schneider' },
    name: { tr: 'Özel Dikim (Ölçüye Göre)', en: 'Custom Tailoring (Made to Measure)', ru: 'Индивидуальный пошив на заказ', de: 'Maßanfertigung (Schneider nach Maß)' },
    q: { tr: 'özel dikim', en: 'custom tailoring', ru: 'индивидуальный пошив', de: 'Maßanfertigung' },
    intro: {
      tr: 'Ölçünüze göre özel dikim: elbise, gömlek, pantolon, etek ve diğer giysiler. Model, kumaş ve ölçü birlikte belirlenir; süre ve fiyat işe göre WhatsApp\'tan netleşir.',
      en: 'Custom tailoring made to your measurements: dresses, shirts, trousers, skirts and other garments. Style, fabric and size are decided together; timing and price are confirmed on WhatsApp.',
      ru: 'Индивидуальный пошив по вашим меркам: платья, рубашки, брюки, юбки и другая одежда. Модель, ткань и размер выбираем вместе; срок и цену уточняем в WhatsApp.',
      de: 'Maßanfertigung nach Ihren Maßen: Kleider, Hemden, Hosen, Röcke und weitere Kleidung. Schnitt, Stoff und Größe legen wir gemeinsam fest; Dauer und Preis klären wir per WhatsApp.',
    },
    vars: {
      tr: ['özel dikim', 'özel dikim terzi', 'ölçüye göre dikim', 'ısmarlama dikim', 'özel terzi', 'kıyafet diktirme'],
      en: ['custom tailoring', 'made to measure clothing', 'bespoke tailor', 'custom clothing tailor', 'get clothes made'],
      ru: ['индивидуальный пошив', 'пошив одежды на заказ', 'пошив по меркам', 'ателье пошив одежды', 'заказать пошив одежды'],
      de: ['Maßanfertigung', 'Schneider nach Maß', 'Kleidung nähen lassen', 'Maßschneiderei', 'Änderungsschneiderei und Maßanfertigung'],
    },
  },
  {
    id: 'elbise-tamir', icon: '🧵', time: 'next',
    slug: { tr: 'elbise-tamiri-tadilati', en: 'dress-repair-alteration', ru: 'remont-i-pereshiv-platya', de: 'kleid-aendern-reparieren' },
    name: { tr: 'Elbise Tamiri ve Tadilatı', en: 'Dress Repair & Alteration', ru: 'Ремонт и переделка платьев', de: 'Kleider ändern und reparieren' },
    q: { tr: 'elbise tamiri ve tadilatı', en: 'clothing repair and alterations', ru: 'ремонт и переделка одежды', de: 'Kleidung ändern und reparieren' },
    intro: {
      tr: 'Elbiselerde daraltma, kısaltma, askı ve kol ayarı, sökük dikimi ve onarım yaparız. Günlük elbise de olsa özel gün elbisesi de olsa ölçü, üzerinizde provayla alınır.',
      en: 'Dresses: we take in, shorten, adjust straps and sleeves, close open seams and repair damage, whether everyday or occasion wear, with measurements taken at a fitting.',
      ru: 'Платья: ушиваем, укорачиваем, подгоняем бретели и рукава, зашиваем распоротые швы и чиним повреждения — будь то повседневное или праздничное, мерки снимаем на примерке.',
      de: 'Kleider: Wir machen sie enger, kürzen, passen Träger und Ärmel an, schließen aufgegangene Nähte und reparieren Schäden – ob Alltags- oder Festkleid, gemessen wird bei der Anprobe.',
    },
    vars: {
      tr: ['tamir tadilat', 'söküğü dikme', 'yırtık tamiri', 'kıyafet tamiri', 'bay bayan tamir tadilat', 'elbise tamiri', 'elbise tadilatı', 'elbise daraltma', 'elbise kısaltma', 'elbise tamiri terzi', 'kıyafet tadilatı', 'her türlü kıyafet tadilatı'],
      en: ['clothing repair', 'mend torn clothes', 'sewing repair men and women', 'dress alteration', 'dress repair', 'dress tailor near me', 'shorten dress', 'take in dress', 'clothing alterations'],
      ru: ['ремонт и переделка одежды', 'зашить дырку на одежде', 'зашить порванную одежду', 'ремонт одежды мужской и женской', 'переделка платья', 'ремонт платья', 'ушить платье', 'укоротить платье', 'ателье по ремонту одежды', 'подгонка платья по фигуре'],
      de: ['Kleidung ändern lassen', 'Kleidung reparieren', 'Riss nähen lassen', 'Loch flicken Schneider', 'Kleid ändern', 'Kleid reparieren', 'Kleid kürzen', 'Kleid enger machen', 'Änderungsschneiderei Kleid', 'Kleidung ändern lassen'],
    },
  },
  {
    id: 'gelinlik-abiye', icon: '👰', time: 'none',
    slug: { tr: 'gelinlik-abiye-tadilati', en: 'wedding-evening-dress-alteration', ru: 'podgonka-svadebnogo-vechernego-platya', de: 'brautkleid-abendkleid-aendern' },
    name: { tr: 'Abiye ve Gelinlik Tadilatı', en: 'Evening & Wedding Dress Alteration', ru: 'Подгонка вечерних и свадебных платьев', de: 'Abendkleid und Brautkleid ändern' },
    q: { tr: 'abiye ve gelinlik tadilatı', en: 'evening dress alteration', ru: 'подгонка вечернего платья', de: 'Abendkleid ändern' },
    priceText: {
      tr: 'Abiye tadilatı ₺800\'den, gelinlik tadilatı ₺800\'den başlar.',
      en: 'Evening dress and wedding dress alterations; the price is confirmed on WhatsApp from a photo.',
      ru: 'Подгонка вечерних и свадебных платьев; цена уточняется в WhatsApp по фото.',
      de: 'Abendkleid- und Brautkleid-Änderung; der Preis wird per WhatsApp anhand eines Fotos bestätigt.',
    },
    timeText: {
      tr: 'Abiye tadilatı ertesi gün teslim edilir; gelinlikte süre işlemin kapsamına göre WhatsApp\'ta netleştirilir.',
      en: 'Evening dress alterations are ready the next day; for wedding dresses the time depends on the work and is confirmed on WhatsApp.',
      ru: 'Вечерние платья готовы на следующий день; для свадебных платьев срок зависит от объёма работы и уточняется в WhatsApp.',
      de: 'Abendkleid-Änderungen sind am nächsten Tag fertig; beim Brautkleid hängt die Dauer vom Umfang ab und wird per WhatsApp geklärt.',
    },
    intro: {
      tr: 'Abiye ve gelinlikte daraltma, boy, korse ve askı ayarı gibi hassas işleri provalı yaparız. Antalya\'da otelde kalan gelin ve davetliler için otele servis imkânı vardır.',
      en: 'Delicate work on wedding and evening gowns — taking in, length, corset and strap adjustment — is done with fittings. Hotel service is available for brides and guests staying in Antalya.',
      ru: 'Деликатные работы со свадебными и вечерними платьями — ушивание, длина, корсет и бретели — выполняем с примерками. Для невест и гостей, остановившихся в отелях Анталии, возможен выезд в отель.',
      de: 'Heikle Arbeiten an Brautkleid und Abendkleid – Enger machen, Länge, Korsett und Träger – erledigen wir mit Anprobe. Für Bräute und Gäste in Antalya-Hotels ist ein Hotelservice möglich.',
    },
    extra: { href: '/antalya-gelinlik-tadilati', label: { tr: 'Gelinlik tadilatı sayfası', en: 'Wedding dress page (Turkish)', ru: 'Страница о свадебных платьях (тур.)', de: 'Brautkleid-Seite (türkisch)' } },
    vars: {
      tr: ['abiye tadilatı', 'abiye elbise daraltma', 'gece elbisesi tadilat', 'abiye tamiri', 'gelinlik tadilatı', 'gelinlik daraltma', 'gelinlik boy ayarı'],
      en: ['evening dress alteration', 'evening gown alteration', 'prom dress alteration', 'formal dress tailor', 'wedding dress alteration', 'bridal gown alterations'],
      ru: ['подгонка вечернего платья', 'ушить вечернее платье', 'переделка вечернего платья', 'подгонка свадебного платья', 'ушить свадебное платье', 'ателье свадебные платья'],
      de: ['Abendkleid ändern', 'Abendkleid kürzen', 'Festliches Kleid ändern', 'Brautkleid ändern', 'Brautkleid enger machen', 'Brautkleid Änderungsschneiderei'],
    },
  },
  {
    id: 'abiye', icon: '👗', time: 'next', priceFrom: 800, priceText: {
      tr: 'Abiye tadilatı ₺800\'den başlar.', en: 'Evening dress alterations; the price is confirmed on WhatsApp from a photo.',
      ru: 'Подгонка вечерних платьев; цена уточняется в WhatsApp по фото.', de: 'Abendkleid-Änderung; der Preis wird per WhatsApp anhand eines Fotos bestätigt.',
    },
    slug: { tr: 'abiye-tadilati-gece-kiyafetleri', en: 'evening-dress-alteration-formal-wear', ru: 'podgonka-vechernih-platev-narjadov', de: 'abendkleid-festmode-aendern' },
    name: { tr: 'Abiye Tadilatı, Gece Kıyafetleri ve Özel Kıyafetler', en: 'Evening Dress, Formal & Special-Occasion Wear Alteration', ru: 'Подгонка вечерних платьев и нарядов для особых случаев', de: 'Abendkleid, Festmode und besondere Kleidung ändern' },
    q: { tr: 'abiye tadilatı', en: 'evening dress alteration', ru: 'подгонка вечернего платья', de: 'Abendkleid ändern' },
    intro: {
      tr: 'Abiye, gece kıyafeti ve özel gün kıyafetlerinde daraltma, genişletme, boy kısaltma, askı, fermuar ve astar ayarı yaparız; ölçü kıyafet üzerinizdeyken alınır, gerekirse prova yapılır. Normal işte ertesi gün, acil işte 1–2 saatte teslim edilir.',
      en: 'For evening dresses, formal wear and special-occasion outfits we take in, let out, shorten, adjust straps and zippers and fix linings; we measure while you wear the garment and do a fitting when needed. Normal jobs are ready the next day, urgent ones in 1–2 hours.',
      ru: 'Вечерние платья, нарядная одежда и наряды для особых случаев: ушиваем, расширяем, укорачиваем, подгоняем бретели, молнии и подкладку; мерки снимаем, пока вещь на вас, при необходимости делаем примерку. Обычные работы готовы на следующий день, срочные — за 1–2 часа.',
      de: 'Bei Abendkleidern, Festmode und Kleidung für besondere Anlässe machen wir enger oder weiter, kürzen, passen Träger, Reißverschluss und Futter an; wir messen am getragenen Kleidungsstück und machen bei Bedarf eine Anprobe. Normale Arbeiten sind am nächsten Tag fertig, eilige in 1–2 Stunden.',
    },
    extra: { href: '/antalya-gelinlik-tadilati', label: { tr: 'Gelinlik tadilatı sayfası', en: 'Wedding dress page (Turkish)', ru: 'Страница о свадебных платьях (тур.)', de: 'Brautkleid-Seite (türkisch)' } },
    vars: {
      tr: ['abiye tadilatı', 'abiye elbise daraltma', 'abiye boy kısaltma', 'gece kıyafeti tadilatı', 'gece elbisesi daraltma', 'özel gün kıyafeti tadilatı', 'abiye tamiri', 'abiye elbise tadilat terzi'],
      en: ['evening dress alteration', 'evening gown tailor', 'formal dress alteration', 'special occasion dress alteration', 'shorten evening dress', 'take in evening dress', 'cocktail dress alteration'],
      ru: ['подгонка вечернего платья', 'ушить вечернее платье', 'укоротить вечернее платье', 'нарядное платье подгонка', 'ателье вечерние платья', 'переделка вечернего платья'],
      de: ['Abendkleid ändern', 'Abendkleid enger machen', 'Abendkleid kürzen', 'Festliches Kleid ändern', 'Cocktailkleid ändern', 'Festmode Änderungsschneiderei'],
    },
  },
  {
    id: 'pantolon', icon: '👖', time: 'same', priceText: {
      tr: 'Paça kısaltma ve bel daraltma ₺200\'den başlar.', en: 'Price by photo on WhatsApp.', ru: 'Цена по фото в WhatsApp.', de: 'Preis per Foto über WhatsApp.',
    },
    slug: { tr: 'pantolon-tadilati', en: 'trouser-alteration', ru: 'podgonka-bryuk', de: 'hose-aendern' },
    name: { tr: 'Pantolon Tadilatı', en: 'Trouser Alteration', ru: 'Подгонка брюк', de: 'Hosen ändern' },
    q: { tr: 'pantolon tadilatı', en: 'trouser alteration', ru: 'подгонка брюк', de: 'Hose ändern' },
    intro: {
      tr: 'Kumaş pantolon, takım pantolonu ve kotta paça kısaltma, bel daraltma ve genişletme, dar kesim (daraltma), fermuar değişimi ve söküklerin tamiri yapılır. Pantolon ayakta, giyeceğiniz ayakkabıyla denenir; normal işte ertesi gün, acil işte 1–2 saatte teslim edilir.',
      en: 'For dress trousers, suit trousers and jeans: hemming, taking in or letting out the waist, slimming the legs, zipper replacement and mending seams. Trousers are tried on standing, with the shoes you will wear; normal jobs are ready the next day, urgent ones in 1–2 hours.',
      ru: 'Классические, костюмные брюки и джинсы: подшив, ушивание и расширение в поясе, сужение штанин, замена молнии и ремонт швов. Брюки примеряют стоя, в обуви, с которой вы их будете носить; обычные работы готовы на следующий день, срочные — за 1–2 часа.',
      de: 'Stoffhosen, Anzughosen und Jeans: Kürzen, Bund enger oder weiter machen, Beine schmaler machen, Reißverschluss wechseln und Nähte reparieren. Die Hose wird im Stehen mit den Schuhen anprobiert, die Sie tragen werden; normale Arbeiten sind am nächsten Tag fertig, eilige in 1–2 Stunden.',
    },
    extra: { href: '/konyaalti-paca-kisaltma', label: { tr: 'Paça kısaltma sayfası', en: 'Hemming page (Turkish)', ru: 'Страница о подшиве брюк (тур.)', de: 'Seite zum Kürzen (türkisch)' } },
    vars: {
      tr: ['pantolon tadilatı', 'pantolon daraltma', 'pantolon paça kısaltma', 'pantolon bel daraltma', 'pantolon bel genişletme', 'kumaş pantolon tadilatı', 'takım pantolon tadilatı', 'pantolon fermuar değişimi'],
      en: ['trouser alteration', 'pants alteration', 'taper trousers', 'take in trousers', 'trouser waist alteration', 'suit trousers alteration', 'pants tailor near me'],
      ru: ['подгонка брюк', 'ушить брюки', 'сузить брюки', 'ушить брюки в поясе', 'подгонка костюмных брюк', 'ателье брюки'],
      de: ['Hose ändern', 'Hose enger machen', 'Hose Bund enger machen', 'Hose schmaler machen', 'Anzughose ändern', 'Hose Änderung Schneider'],
    },
  },
  {
    id: 'kol', icon: '🧥', time: 'next', priceText: {
      tr: 'Gömlek kol boyu kısaltma ₺200, ceket kol boyu kısaltma ₺600, deri ceket kol boyu kısaltma ₺600–800.', en: 'Price by photo on WhatsApp.', ru: 'Цена по фото в WhatsApp.', de: 'Preis per Foto über WhatsApp.',
    },
    slug: { tr: 'kol-boyu-kisaltma', en: 'sleeve-shortening', ru: 'ukorochenie-rukavov', de: 'aermel-kuerzen' },
    name: { tr: 'Kol Boyu Kısaltma', en: 'Sleeve Shortening', ru: 'Укорочение рукавов', de: 'Ärmel kürzen' },
    q: { tr: 'kol boyu kısaltma', en: 'sleeve shortening', ru: 'укорочение рукавов', de: 'Ärmel kürzen' },
    intro: {
      tr: 'Ceket, mont, palto, gömlek, kazak ve elbisede kol boyu kısaltma yapılır. Kol boyu, giysi üzerinizdeyken ve kolunuz doğal duruşundayken işaretlenir. Kol boyu kısaltma ücreti: gömlek ₺200, ceket ₺600, deri ceket ₺600–800. Normal işte ertesi gün, acil işte 1–2 saatte teslim edilir.',
      en: 'Sleeves are shortened on jackets, coats, shirts, sweaters and dresses. The length is marked while you wear the garment with your arm in a natural position. Normal jobs are ready the next day, urgent ones in 1–2 hours.',
      ru: 'Рукава укорачиваем у пиджаков, курток, пальто, рубашек, свитеров и платьев. Длину отмечают, пока вещь на вас и рука в естественном положении. Обычные работы готовы на следующий день, срочные — за 1–2 часа.',
      de: 'Ärmel werden bei Sakkos, Jacken, Mänteln, Hemden, Pullovern und Kleidern gekürzt. Die Länge wird am getragenen Kleidungsstück bei natürlicher Armhaltung markiert. Normale Arbeiten sind am nächsten Tag fertig, eilige in 1–2 Stunden.',
    },
    extra: { href: '/antalya-terzi', label: { tr: 'Antalya terzi sayfası', en: 'Antalya tailor page (Turkish)', ru: 'Страница портного в Анталье (тур.)', de: 'Schneider-Seite Antalya (türkisch)' } },
    vars: {
      tr: ['kol boyu kısaltma', 'kol kısaltma', 'ceket kol kısaltma', 'mont kol kısaltma', 'gömlek kol kısaltma', 'palto kol kısaltma', 'kazak kol kısaltma', 'kol boyu ayarlama'],
      en: ['sleeve shortening', 'shorten sleeves', 'jacket sleeve shortening', 'coat sleeve shortening', 'shirt sleeve shortening', 'sleeve length alteration'],
      ru: ['укорочение рукавов', 'укоротить рукава', 'укоротить рукава пиджака', 'укоротить рукава куртки', 'укоротить рукава рубашки', 'подгонка длины рукава'],
      de: ['Ärmel kürzen', 'Ärmellänge ändern', 'Sakko Ärmel kürzen', 'Mantel Ärmel kürzen', 'Hemd Ärmel kürzen', 'Ärmel kürzen Schneider'],
    },
  },
  {
    id: 'takim', icon: '🤵', time: 'next',
    slug: { tr: 'takim-elbise-ceket-tadilati', en: 'suit-jacket-alteration', ru: 'podgonka-kostyuma-pidzhaka', de: 'anzug-sakko-aendern' },
    name: { tr: 'Takım Elbise ve Ceket Tadilatı', en: 'Suit & Jacket Alteration', ru: 'Подгонка костюма и пиджака', de: 'Anzug und Sakko ändern' },
    q: { tr: 'takım elbise tadilatı', en: 'suit alteration', ru: 'подгонка костюма', de: 'Anzug ändern' },
    intro: {
      tr: 'Takım elbise ve ceketlerde daraltma, kısaltma, kol boyu ve omuz düzeltmesi yaparız. Ceket ve pantolon birlikte provaya alınır; bay ve bayan kesimler için geçerlidir.',
      en: 'Suits and jackets: we take in, shorten and correct sleeve length and shoulders. Jacket and trousers are fitted together, for men\'s and women\'s cuts.',
      ru: 'Костюмы и пиджаки: ушиваем, укорачиваем, правим длину рукавов и плечи. Пиджак и брюки примеряем вместе, для мужских и женских фасонов.',
      de: 'Anzüge und Sakkos: Wir machen sie enger, kürzen und korrigieren Ärmellänge und Schultern. Sakko und Hose werden zusammen anprobiert, für Herren- und Damenschnitte.',
    },
    vars: {
      tr: ['takım elbise tadilatı', 'ceket daraltma', 'ceket kısaltma', 'ceket kol kısaltma', 'takım elbise daraltma', 'blazer ceket tadilat', 'bay bayan ceket tadilatı'],
      en: ['suit alteration', 'jacket alteration', 'tailor suit near me', 'take in jacket', 'shorten jacket sleeves', 'blazer alteration'],
      ru: ['подгонка костюма', 'ушить пиджак', 'укоротить рукава пиджака', 'ателье мужские костюмы', 'переделка пиджака', 'ушить костюм'],
      de: ['Anzug ändern', 'Sakko ändern', 'Sakko enger machen', 'Sakkoärmel kürzen', 'Anzug Änderung Schneider', 'Blazer ändern lassen'],
    },
  },
  {
    id: 'mont', icon: '🧥', time: 'next',
    slug: { tr: 'mont-palto-tadilati', en: 'coat-jacket-alteration', ru: 'podgonka-kurtki-palto', de: 'mantel-jacke-aendern' },
    name: { tr: 'Mont ve Palto Tadilatı', en: 'Coat & Jacket Alteration', ru: 'Подгонка курток и пальто', de: 'Mantel und Jacke ändern' },
    q: { tr: 'mont tadilatı', en: 'coat alteration', ru: 'подгонка куртки', de: 'Mantel ändern' },
    intro: {
      tr: 'Mont, kaban ve paltoda daraltma, kısaltma, kol ve fermuar işleri yaparız. Astarlı ve kalın kumaşlar için bu işe uygun makine ve iplik kullanırız.',
      en: 'Coats and padded jackets: we take in, shorten and handle sleeve and zipper work, using machines and thread suited to lined, thick fabrics.',
      ru: 'Куртки, пальто и пуховики: ушиваем, укорачиваем, работаем с рукавами и молниями на машинах и нитках, подходящих для подкладки и плотных тканей.',
      de: 'Mäntel und Steppjacken: Wir machen sie enger, kürzen und erledigen Ärmel- und Reißverschlussarbeiten mit Maschinen und Garn für gefütterte, dicke Stoffe.',
    },
    vars: {
      tr: ['mont tadilatı', 'mont daraltma', 'mont kısaltma', 'palto tadilatı', 'kaban daraltma', 'mont kol kısaltma', 'mont tamiri'],
      en: ['coat alteration', 'jacket repair', 'shorten coat sleeves', 'take in coat', 'winter jacket alteration', 'coat tailor near me'],
      ru: ['подгонка куртки', 'ушить куртку', 'укоротить рукава пальто', 'ремонт куртки', 'переделка пальто', 'ателье куртки'],
      de: ['Mantel ändern', 'Jacke enger machen', 'Mantelärmel kürzen', 'Jacke reparieren', 'Wintermantel ändern', 'Mantel Änderung Schneider'],
    },
  },
  {
    id: 'gomlek', icon: '👔', time: 'next',
    slug: { tr: 'gomlek-daraltma-kisaltma', en: 'shirt-alteration', ru: 'podgonka-rubashki', de: 'hemd-aendern' },
    name: { tr: 'Gömlek Daraltma ve Kısaltma', en: 'Shirt Alteration', ru: 'Подгонка рубашек', de: 'Hemd ändern' },
    q: { tr: 'gömlek daraltma', en: 'shirt alteration', ru: 'подгонка рубашки', de: 'Hemd enger machen' },
    intro: {
      tr: 'Gömleklerde yan daraltma, kol boyu ve etek boyu kısaltma yaparız. Erkek ve kadın gömleklerinde ölçü, gömlek üzerinizdeyken alınır.',
      en: 'Shirts: side taking-in and shortening of sleeves and hems, for men\'s and women\'s shirts, measured while you wear them.',
      ru: 'Рубашки: ушивание по бокам, укорочение рукавов и низа — мужские и женские, мерки снимаем, пока рубашка на вас.',
      de: 'Hemden: seitliches Enger machen sowie Ärmel und Saum kürzen, für Herren- und Damenhemden, gemessen am getragenen Hemd.',
    },
    vars: {
      tr: ['gömlek daraltma', 'gömlek kısaltma', 'gömlek kol kısaltma', 'gömlek tadilatı', 'gömlek yan daraltma', 'gömlek boy kısaltma'],
      en: ['shirt alteration', 'take in shirt', 'shorten shirt sleeves', 'tailor shirt near me', 'shirt hemming', 'slim fit shirt alteration'],
      ru: ['подгонка рубашки', 'ушить рубашку', 'укоротить рукава рубашки', 'ателье рубашки', 'подшив рубашки', 'ушивание рубашки по бокам'],
      de: ['Hemd enger machen', 'Hemd kürzen', 'Hemdärmel kürzen', 'Hemd ändern lassen', 'Hemd Änderung Schneider', 'Hemd Seitennähte enger'],
    },
  },
  {
    id: 'deri', icon: '🧤', time: 'none',
    slug: { tr: 'deri-ceket-pantolon-tadilati', en: 'leather-jacket-alteration', ru: 'remont-kozhanoy-odezhdy', de: 'lederjacke-lederhose-aendern' },
    name: { tr: 'Deri Ceket ve Deri Pantolon Tadilatı', en: 'Leather Jacket & Leather Trousers Alteration', ru: 'Ремонт и подгонка кожаной одежды', de: 'Lederjacke und Lederhose ändern' },
    q: { tr: 'deri ceket tadilatı', en: 'leather jacket alteration', ru: 'ремонт кожаной куртки', de: 'Lederjacke ändern' },
    intro: {
      tr: 'Deri ceket ve deri pantolonda daraltma, kısaltma ve onarımdan önce fotoğraf isteriz. Deri cinsi görüldükten sonra yapılabilecek işlem ve fiyat netleşir.',
      en: 'For leather jackets and trousers we ask for a photo before any taking-in, shortening or repair; once we see the type of leather, the possible work and price are confirmed.',
      ru: 'Для кожаных курток и брюк перед ушиванием, укорочением или ремонтом просим фото; когда видим тип кожи, уточняем возможные работы и цену.',
      de: 'Bei Lederjacken und Lederhosen bitten wir vor Enger machen, Kürzen oder Reparatur um ein Foto; sobald wir die Lederart sehen, stehen mögliche Arbeiten und Preis fest.',
    },
    vars: {
      tr: ['deri ceket tadilatı', 'deri ceket daraltma', 'deri pantolon tadilatı', 'deri ceket kol kısaltma', 'deri ceket tamiri', 'deri mont terzi'],
      en: ['leather jacket alteration', 'leather jacket repair', 'leather trousers alteration', 'shorten leather jacket sleeves', 'leather tailor Antalya', 'take in leather jacket'],
      ru: ['ремонт кожаной куртки', 'подгонка кожаной куртки', 'ушить кожаную куртку', 'укоротить рукава кожаной куртки', 'ремонт кожаных брюк', 'ателье кожа'],
      de: ['Lederjacke ändern', 'Lederjacke enger machen', 'Lederhose ändern', 'Lederjacke Ärmel kürzen', 'Lederjacke reparieren', 'Lederschneider'],
    },
  },
  {
    id: 'tisort', icon: '👕', time: 'next',
    slug: { tr: 'tisort-sort-tadilati', en: 'tshirt-shorts-alteration', ru: 'podgonka-futbolok-shortov', de: 'tshirt-shorts-aendern' },
    name: { tr: 'Tişört ve Şort Tadilatı', en: 'T-shirt & Shorts Alteration', ru: 'Подгонка футболок и шортов', de: 'T-Shirt und Shorts ändern' },
    q: { tr: 'tişört şort tadilatı', en: 'shorts alteration', ru: 'подгонка шортов', de: 'Shorts ändern' },
    intro: {
      tr: 'Tişört daraltma ve kısaltma, şort boyu ve bel ayarı gibi küçük işleri yaparız. Fotoğrafı WhatsApp\'tan gönderin, fiyatı oradan hemen bildirelim.',
      en: 'Small jobs such as taking in or shortening T-shirts and adjusting shorts length and waist. Send a photo on WhatsApp and we will quote straight away.',
      ru: 'Небольшие работы: ушить или укоротить футболку, подогнать длину и талию шорт. Пришлите фото в WhatsApp — сразу назовём цену.',
      de: 'Kleine Arbeiten wie T-Shirts enger machen oder kürzen und Shorts in Länge und Bund anpassen. Schicken Sie ein Foto per WhatsApp, wir nennen sofort den Preis.',
    },
    vars: {
      tr: ['tişört daraltma', 'tişört kısaltma', 'şort kısaltma', 'şort bel daraltma', 'şort tadilatı', 'tişört tadilatı'],
      en: ['t-shirt alteration', 'shorts alteration', 'shorten shorts', 'take in t-shirt', 'shorts waist alteration', 'summer clothes alteration'],
      ru: ['подгонка футболки', 'подшить шорты', 'ушить футболку', 'ушить шорты в поясе', 'переделка шортов', 'ателье летняя одежда'],
      de: ['T-Shirt enger machen', 'Shorts kürzen', 'T-Shirt kürzen', 'Shorts Bund enger machen', 'Shorts ändern', 'Sommerkleidung ändern'],
    },
  },
  {
    id: 'etek', icon: '👗', time: 'next',
    slug: { tr: 'etek-kisaltma-daraltma', en: 'skirt-hemming-alteration', ru: 'podgonka-yubki', de: 'rock-kuerzen-aendern' },
    name: { tr: 'Etek Kısaltma ve Daraltma', en: 'Skirt Hemming & Alteration', ru: 'Подгонка и укорачивание юбок', de: 'Rock kürzen und ändern' },
    q: { tr: 'etek kısaltma', en: 'skirt hemming', ru: 'подшить юбку', de: 'Rock kürzen' },
    intro: {
      tr: 'Etek boyu kısaltma, bel daraltma ve genişletme, astar ve fermuar onarımı yapıyoruz. Fotoğraf gönderin, fiyatı WhatsApp\'tan söyleyelim.',
      en: 'We shorten skirts, take in or let out the waist, and repair linings and zippers. Send a photo and we will quote on WhatsApp.',
      ru: 'Укорачиваем юбки, ушиваем и расширяем пояс, чиним подкладку и молнии. Пришлите фото — назовём цену в WhatsApp.',
      de: 'Wir kürzen Röcke, machen den Bund enger oder weiter und reparieren Futter und Reißverschlüsse. Foto senden, Preis per WhatsApp.',
    },
    vars: {
      tr: ['etek kısaltma', 'etek daraltma', 'etek tadilatı', 'etek bel daraltma', 'etek fermuar değişimi', 'etek boyu kısaltma'],
      en: ['skirt hemming', 'shorten skirt', 'skirt alteration', 'take in skirt waist', 'skirt zipper replacement'],
      ru: ['подшить юбку', 'укоротить юбку', 'подгонка юбки', 'ушить юбку в поясе', 'замена молнии на юбке'],
      de: ['Rock kürzen', 'Rock enger machen', 'Rock ändern', 'Rockbund ändern', 'Reißverschluss Rock wechseln'],
    },
  },
  {
    id: 'gece-kiyafeti', icon: '✨', time: 'three',
    slug: { tr: 'gece-kiyafeti-dikimi-tadilati', en: 'evening-wear-making-alteration', ru: 'vechernyaya-odezhda-poshiv-podgonka', de: 'abendmode-naehen-aendern' },
    name: { tr: 'Gece Kıyafeti Dikimi ve Tadilatı', en: 'Evening Wear Making & Alteration', ru: 'Пошив и подгонка вечерней одежды', de: 'Abendmode nähen und ändern' },
    q: { tr: 'gece kıyafeti', en: 'evening wear tailor', ru: 'вечерняя одежда', de: 'Abendmode' },
    intro: {
      tr: 'Gece kıyafeti ve abiye için ölçüye göre dikim, daraltma, kısaltma ve fermuar değişimi yapıyoruz. Model ve kumaş birlikte belirlenir; süre ve fiyat işe göre WhatsApp\'tan netleşir.',
      en: 'We make evening outfits to measure and alter them: taking in, shortening and zipper replacement. Style and fabric are agreed together; timing and price are confirmed on WhatsApp.',
      ru: 'Шьём вечерние наряды по меркам и подгоняем готовые: ушиваем, укорачиваем, меняем молнии. Модель и ткань выбираем вместе; срок и цену уточняем в WhatsApp.',
      de: 'Wir nähen Abendmode nach Maß und ändern sie: enger machen, kürzen, Reißverschluss wechseln. Schnitt und Stoff legen wir gemeinsam fest; Dauer und Preis klären wir per WhatsApp.',
    },
    vars: {
      tr: ['gece kıyafeti dikimi', 'gece kıyafeti tadilatı', 'gece elbisesi daraltma', 'gece elbisesi kısaltma', 'abiye dikimi', 'abiye tadilatı'],
      en: ['evening wear tailor', 'evening dress alteration', 'evening outfit made to measure', 'shorten evening dress', 'take in evening dress'],
      ru: ['пошив вечернего платья', 'подгонка вечернего платья', 'ушить вечернее платье', 'укоротить вечернее платье', 'вечерний наряд на заказ'],
      de: ['Abendkleid ändern', 'Abendmode nähen lassen', 'Abendkleid kürzen', 'Abendkleid enger machen', 'Abendmode nach Maß'],
    },
  },
  {
    id: 'kiyafet-tamiri', icon: '🪡', time: 'next',
    slug: { tr: 'kiyafet-tamiri-onarimi', en: 'clothing-repair-mending', ru: 'remont-odezhdy', de: 'kleidung-reparieren' },
    name: { tr: 'Kıyafet Tamiri ve Onarımı', en: 'Clothing Repair & Mending', ru: 'Ремонт одежды', de: 'Kleidung reparieren' },
    q: { tr: 'kıyafet tamiri', en: 'clothing repair', ru: 'ремонт одежды', de: 'Kleidung reparieren' },
    intro: {
      tr: 'Söküklerin dikilmesi, yırtık onarımı, düğme ve fermuar değişimi, astar tamiri: pantolon, gömlek, etek, elbise, mont ve kotta kıyafet tamiri yapıyoruz. Fotoğraf gönderin, fiyatı söyleyelim.',
      en: 'Open seams, tears, buttons, zippers and linings: we repair trousers, shirts, skirts, dresses, coats and jeans. Send a photo and we will quote on WhatsApp.',
      ru: 'Распоровшиеся швы, разрывы, пуговицы, молнии и подкладка: ремонтируем брюки, рубашки, юбки, платья, куртки и джинсы. Пришлите фото — назовём цену в WhatsApp.',
      de: 'Aufgegangene Nähte, Risse, Knöpfe, Reißverschlüsse und Futter: Wir reparieren Hosen, Hemden, Röcke, Kleider, Mäntel und Jeans. Foto senden, Preis per WhatsApp.',
    },
    vars: {
      tr: ['kıyafet tamiri', 'kıyafet onarımı', 'elbise onarımı', 'pantolon tamiri', 'gömlek tamiri', 'kot tamiri', 'mont tamiri', 'söküğü dikme'],
      en: ['clothing repair', 'clothes mending', 'dress repair', 'trouser repair', 'shirt repair', 'jeans repair', 'coat repair'],
      ru: ['ремонт одежды', 'починка одежды', 'ремонт платья', 'ремонт брюк', 'ремонт рубашки', 'ремонт джинсов', 'ремонт куртки'],
      de: ['Kleidung reparieren', 'Kleiderreparatur', 'Kleid reparieren', 'Hose reparieren', 'Hemd reparieren', 'Jeans reparieren', 'Mantel reparieren'],
    },
  },
  {
    id: 'beden', icon: '📐', time: 'next',
    slug: { tr: 'olcuye-gore-beden-ayarlama', en: 'size-adjustment-tailor', ru: 'podgonka-odezhdy-po-figure', de: 'kleidung-anpassen-nach-mass' },
    name: { tr: 'Ölçüye Göre Beden Ayarlama', en: 'Fit Adjustment to Your Measurements', ru: 'Подгонка одежды по фигуре', de: 'Kleidung auf Ihre Maße anpassen' },
    q: { tr: 'beden ayarlama', en: 'size adjustment', ru: 'подгонка по фигуре', de: 'Kleidung anpassen' },
    intro: {
      tr: 'Bay ve bayan kıyafetlerini ölçünüze göre ayarlarız: daraltma, genişletme, kısaltma, uzatma, omuz ve kol düzeltme. Dikişin temiz olmasına ve teslim gününe uymaya önem veririz.',
      en: 'Men\'s and women\'s clothing is fitted to your measurements: taking in, letting out, shortening, lengthening, shoulder and sleeve correction. We care about clean stitching and sticking to the delivery day.',
      ru: 'Мужскую и женскую одежду подгоняем по вашим меркам: ушивание, расширение, укорочение, удлинение, правка плеч и рукавов. Для нас важны аккуратный шов и соблюдение срока.',
      de: 'Herren- und Damenkleidung passen wir Ihren Maßen an: enger und weiter machen, kürzen, verlängern, Schultern und Ärmel korrigieren. Uns sind saubere Nähte und der zugesagte Liefertermin wichtig.',
    },
    vars: {
      tr: ['beden ayarlama terzi', 'ölçüye göre kıyafet ayarlama', 'kıyafet daraltma kısaltma', 'bay bayan kıyafet tadilatı', 'terzi tadilat', 'dikiş tamir terzi', 'giysi tadilatı'],
      en: ['clothing alterations Antalya', 'tailor near me', 'alterations shop', 'fit clothes to measurements', 'men and women clothing alteration', 'seamstress Antalya'],
      ru: ['ателье по ремонту одежды', 'портной рядом со мной', 'подгонка одежды по фигуре', 'мужская и женская одежда переделка', 'срочный ремонт одежды', 'швея Анталья'],
      de: ['Änderungsschneiderei', 'Schneider in der Nähe', 'Kleidung anpassen lassen', 'Herren- und Damenkleidung ändern', 'Schneiderei Antalya', 'Änderungsservice Kleidung'],
    },
  },
];

// ── Yardımcılar ─────────────────────────────────────────────
export const districtUrl = (lang: Lang, d: District) => (lang === 'tr' && d.trHref ? d.trHref : `${DISTRICT_BASE[lang]}/${d.slug}`);
export const serviceUrl = (lang: Lang, s: Service) => `${SERVICE_BASE[lang]}/${s.slug[lang]}`;
export const abs = (p: string) => `${SITE}${p}`;
export const findDistrict = (slug: string) => DISTRICTS.find((d) => d.slug === slug);
export const findServiceBySlug = (lang: Lang, slug: string) => SERVICES.find((s) => s.slug[lang] === slug);

/** "{yer} {hizmet}" sorgusu (dile göre sözdizimi) */
export function query(lang: Lang, d: District, s: Service): string {
  if (lang === 'tr') return `${d.loc.tr} ${s.q.tr}`;
  if (lang === 'ru') return `${s.q.ru} ${d.loc.ru}`;
  return `${s.q[lang]} ${d.loc[lang]}`;
}

export const TIME_TEXT: Record<TimeKey, L4> = {
  same: { tr: `${DELIVERY.tr.normalShort}; acilde 1–2 saat`, en: `${DELIVERY.en.normalShort}; urgent 1–2 hours`, ru: `${DELIVERY.ru.normalShort}; срочно 1–2 часа`, de: `${DELIVERY.de.normalShort}; eilig 1–2 Stunden` },
  next: { tr: `${DELIVERY.tr.normalShort}; acilde 1–2 saat`, en: `${DELIVERY.en.normalShort}; urgent 1–2 hours`, ru: `${DELIVERY.ru.normalShort}; срочно 1–2 часа`, de: `${DELIVERY.de.normalShort}; eilig 1–2 Stunden` },
  three: { tr: DELIVERY.tr.customShort, en: DELIVERY.en.customShort, ru: DELIVERY.ru.customShort, de: DELIVERY.de.customShort },
  none: { tr: 'Süre işe göre WhatsApp\'ta netleşir', en: 'Time confirmed on WhatsApp depending on the work', ru: 'Срок уточняется в WhatsApp в зависимости от работы', de: 'Dauer wird per WhatsApp je nach Arbeit geklärt' },
};
export const timeOf = (lang: Lang, s: Service) => (s.timeText ? s.timeText[lang] : TIME_TEXT[s.time][lang]);
export const priceOf = (lang: Lang, s: Service) =>
  s.priceText ? s.priceText[lang] : s.priceFrom && lang === 'tr' ? `₺${s.priceFrom}'den başlar` : null; // yabancı dil sayfalarında fiyat yazılmaz
