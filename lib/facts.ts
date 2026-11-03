// ============================================================
// lib/facts.ts — İŞLETME KURALLARI İÇİN TEK KAYNAK (fiyat, saat, servis)
// Sitedeki metinler bu değerlerle çelişmemeli. Süreler: lib/delivery.ts.
// Sahibin kararları (Ekim 2026):
//   • Eve ve otele alım-teslim TÜM hizmet bölgelerinde ücretsiz.
//   • Gelinlik DİKİMİ yapılmaz (gelinlik/abiye TADİLATI yapılır).
//   • Abiye/gelinlik TADİLATI (boy, bel, korse/kapama, kuyruk, elbise tadilatı) için SABİT FİYAT YAZILMAZ: BY_PHOTO_OR_JOB ("fotoğrafa veya işin detayına göre"). Eski sabit fiyatlar kaldırıldı (Kasım 2026).
//   • Gelinlik/abiye tadilatı süresi: WEDDING_TIME ("aynı gün veya duruma göre 1–2 gün"). Paça/bel/tamir "aynı gün" kuralı (lib/delivery.ts) değişmez.
//   • Fiyatlara KDV DAHİL DEĞİLDİR (VAT_NOT_INCLUDED).
//   • Otellerle ortaklık YOKTUR; Antalya'daki tüm otellere hizmet verilir (HOTEL_NOTE).
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

/** Abiye/gelinlik tadilatı için fiyat yerine kullanılacak ifade (sahip kararı, Kasım 2026): sabit fiyat yazılmaz. */
export const BY_PHOTO_OR_JOB = {
  tr: 'fotoğrafa veya işin detayına göre',
  en: 'by photo or job details',
  ru: 'по фото или по деталям работы',
  de: 'nach Foto oder Arbeitsaufwand',
  es: 'según la foto o los detalles del trabajo',
  fr: 'selon la photo ou les détails du travail',
  pl: 'według zdjęcia lub zakresu prac',
  uk: 'за фото або за деталями роботи',
  nl: 'op basis van foto of details van het werk',
  ar: 'حسب الصورة أو تفاصيل العمل',
} as const;
export const byPhotoOrJobCap = (l: ByPhotoLang): string => { const t: string = BY_PHOTO_OR_JOB[l]; return t.charAt(0).toLocaleUpperCase(l === 'tr' ? 'tr' : l) + t.slice(1); };

/** Gelinlik/abiye tadilatı süresi (sahip kararı, Kasım 2026). */
export const WEDDING_TIME = {
  tr: 'aynı gün veya duruma göre 1–2 gün',
  en: 'same day or 1–2 days depending on the job',
  ru: 'в тот же день или за 1–2 дня в зависимости от работы',
  de: 'am selben Tag oder je nach Aufwand in 1–2 Tagen',
  es: 'el mismo día o en 1–2 días según el trabajo',
  fr: 'le jour même ou en 1 à 2 jours selon le travail',
  pl: 'tego samego dnia lub w 1–2 dni, zależnie od pracy',
  uk: 'того ж дня або за 1–2 дні, залежно від роботи',
  nl: 'dezelfde dag of binnen 1–2 dagen, afhankelijk van het werk',
  ar: 'في اليوم نفسه أو خلال يوم إلى يومين حسب العمل',
} as const;

/** Otel bölge/liste sayfalarında gösterilecek not: ortaklık yok, tüm otellere hizmet. */
export const HOTEL_NOTE = {
  tr: "Bu otellerle ortaklığımız yoktur; Antalya'daki tüm otellere hizmet veriyoruz.",
  en: 'We have no partnership with these hotels; we serve all hotels in Antalya.',
  ru: 'У нас нет партнёрских отношений с этими отелями; мы обслуживаем все отели Анталии.',
  de: 'Wir haben keine Partnerschaft mit diesen Hotels; wir bedienen alle Hotels in Antalya.',
  es: 'No tenemos ningún acuerdo de colaboración con estos hoteles; atendemos todos los hoteles de Antalya.',
  fr: "Nous n'avons aucun partenariat avec ces hôtels ; nous servons tous les hôtels d'Antalya.",
  pl: 'Nie mamy partnerstwa z tymi hotelami; obsługujemy wszystkie hotele w Antalyi.',
  uk: 'Ми не є партнерами цих готелів; обслуговуємо всі готелі Анталії.',
  nl: 'We hebben geen samenwerking met deze hotels; we bedienen alle hotels in Antalya.',
  ar: 'لا توجد شراكة بيننا وبين هذه الفنادق؛ نخدم جميع الفنادق في أنطاليا.',
} as const;

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

/** Ödeme ve KDV notu (sahip kararı, Kasım 2026): tüm para birimleriyle ödeme (nakit/kart); fiyatlara KDV dahil değildir. */
export const PAYMENT_NOTE = {
  tr: 'Ödeme tüm para birimleriyle yapılabilir (nakit veya kart). Fiyatlara KDV dahil değildir.',
  en: 'Payment in any currency, cash or card. Prices do not include VAT.',
  ru: 'Оплата в любой валюте, наличными или картой. В цены НДС не включён.',
  de: 'Zahlung in jeder Währung, bar oder mit Karte. Die Preise verstehen sich ohne MwSt.',
  es: 'Se puede pagar en cualquier moneda, en efectivo o con tarjeta. Los precios no incluyen IVA.',
  fr: 'Paiement dans toutes les devises, en espèces ou par carte. Les prix s’entendent hors TVA.',
  pl: 'Płatność w dowolnej walucie, gotówką lub kartą. Ceny nie zawierają VAT.',
  uk: 'Оплата в будь-якій валюті, готівкою або карткою. Ціни не включають ПДВ.',
  nl: 'Betalen kan in elke valuta, contant of met kaart. Prijzen zijn exclusief btw.',
  ar: 'يمكن الدفع بأي عملة، نقدًا أو بالبطاقة. الأسعار لا تشمل ضريبة القيمة المضافة.',
} as const;
