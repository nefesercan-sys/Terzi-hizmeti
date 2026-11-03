// ============================================================
// lib/facts.ts — İŞLETME KURALLARI İÇİN TEK KAYNAK (fiyat, saat, servis)
// Sitedeki metinler bu değerlerle çelişmemeli. Süreler: lib/delivery.ts.
// Sahibin kararları (Ekim 2026):
//   • Eve ve otele alım-teslim TÜM hizmet bölgelerinde ücretsiz.
//   • Gelinlik DİKİMİ yapılmaz (gelinlik/abiye TADİLATI yapılır).
//   • Yabancı dil sayfalarında fiyat EURO; € fiyatlar sahibin belirlediği turist başlangıç fiyatlarıdır (gerçek kurla çevrilmez; sahip kararı Kasım 2026). TRY_PER_EUR yalnız EUR_OVERRIDE'ı olmayan kalemler içindir.
// ============================================================
export const TRY_PER_EUR = 20;
export const HOURS = { open: '08:00', close: '23:00', text: '08:00–23:00' } as const;
export const FREE_SERVICE = { home: true, hotel: true, everywhere: true } as const;
export const MIN_ORDER_SERIAL: number | null = null; // seri üretimde minimum adet yok

/** Başlangıç fiyatları (₺, "+" = başlayan). DİKİM işlerinin (elbise, abiye, etek, pantolon, çocuk, damatlık/takım, özel dikim) sabit fiyatı YOKTUR (sahip kararı, Kasım 2026): bkz. BY_PHOTO_MODEL. */
export const TRY_FROM = {
  hem: 200, waist: 200, sleeve: 200, dressAdjust: 200,
  zipperPants: 300, zipperCoat: 300, leather: 400,
  eveningWeddingAlter: 800,
} as const;
export type PriceKey = keyof typeof TRY_FROM;

/** Yabancı dil EURO fiyatı; sahibin verdiği EUR listesi varsa o öncelikli, yoksa TRY / kur. */
export const EUR_OVERRIDE: Partial<Record<PriceKey, number>> = {
  hem: 10, waist: 10, sleeve: 10, dressAdjust: 10, zipperPants: 15, zipperCoat: 20,
};
export const eurFrom = (k: PriceKey): number => EUR_OVERRIDE[k] ?? Math.round(TRY_FROM[k] / TRY_PER_EUR);
const group = (n: number, sep: string) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
export const tryText = (k: PriceKey): string => '₺' + (TRY_FROM[k] >= 10000 ? group(TRY_FROM[k], '.') : String(TRY_FROM[k])) + '+';
export const eurText = (k: PriceKey): string => '€' + eurFrom(k) + '+';

/** Dikim işleri için fiyat yerine kullanılacak ifade (sahip kararı): sabit dikim fiyatı yazılmaz. */
export const BY_PHOTO_MODEL = {
  tr: 'fotoğrafa ve istediğiniz modele göre',
  en: 'by photo and the model you want',
  ru: 'по фото и желаемой модели',
  de: 'nach Foto und gewünschtem Modell',
  es: 'según la foto y el modelo que desee',
  fr: 'selon la photo et le modèle souhaité',
  pl: 'według zdjęcia i wybranego modelu',
  uk: 'за фото та бажаною моделлю',
  nl: 'op basis van foto en gewenst model',
  ar: 'حسب الصورة والموديل المطلوب',
} as const;
export type ByPhotoLang = keyof typeof BY_PHOTO_MODEL;
/** Cümle başı için büyük harfle. */
export const byPhotoModelCap = (l: ByPhotoLang): string => { const t: string = BY_PHOTO_MODEL[l]; return t.charAt(0).toLocaleUpperCase(l === 'tr' ? 'tr' : l) + t.slice(1); };
