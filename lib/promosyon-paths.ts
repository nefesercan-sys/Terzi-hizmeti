// ============================================================
// terzihizmeti.com.tr — lib/promosyon-paths.ts
// "Promosyon / reklam tekstili ve baskılı bez çanta imalatı" sayfasının 10 dildeki yolları ve kısa adları.
// Bilinçli olarak küçük tutuldu: istemci bileşenleri (HizliEylem, IcerikHaritasi) da import eder; metinler lib/promosyon-tekstil.ts'tedir.
// tr/en/de/ru: kendi route grubu (app/(xx)/...); es/fr/pl/uk/nl/ar: app/[lang]/[zone] (hizmetler sayfasıyla aynı mekanizma).
// ============================================================
export type PLang = 'tr' | 'en' | 'de' | 'ru' | 'es' | 'fr' | 'pl' | 'uk' | 'nl' | 'ar';
export const PLANGS: PLang[] = ['tr', 'en', 'de', 'ru', 'es', 'fr', 'pl', 'uk', 'nl', 'ar'];

export const PROMO_PATH: Record<PLang, string> = {
  tr: '/promosyon-tekstil-bez-canta',
  en: '/en/promotional-textiles-tote-bags',
  de: '/de/werbetextilien-stofftaschen',
  ru: '/ru/reklamnyy-tekstil-sumki-shopery',
  es: '/es/textil-promocional-bolsas-tela',
  fr: '/fr/textile-promotionnel-sacs-tissu',
  pl: '/pl/tekstylia-reklamowe-torby-materialowe',
  uk: '/uk/reklamnyi-tekstyl-tkanynni-sumky',
  nl: '/nl/promotietextiel-stoffen-tassen',
  ar: '/ar/mansujat-diaya-haqaib-qumash',
};

/** [lang]/[zone] rotasındaki ikinci segment (yalnızca es/fr/pl/uk/nl/ar). */
export const promoSlug = (l: PLang) => PROMO_PATH[l].split('/')[2] ?? '';
export const isPromoPath = (path: string) => (Object.values(PROMO_PATH) as string[]).includes(path.length > 1 ? path.replace(/\/+$/, '') : path);

/** Sayfanın kısa adı (iç link etiketi, breadcrumb). */
export const PROMO_NAME: Record<PLang, string> = {
  tr: 'Promosyon tekstil ve baskılı bez çanta',
  en: 'Promotional textiles and printed tote bags',
  de: 'Werbetextilien und bedruckte Stofftaschen',
  ru: 'Рекламный текстиль и сумки-шопперы с печатью',
  es: 'Textil promocional y bolsas de tela estampadas',
  fr: 'Textile promotionnel et sacs en tissu imprimés',
  pl: 'Tekstylia reklamowe i torby materiałowe z logo',
  uk: 'Рекламний текстиль і тканинні сумки з друком',
  nl: 'Promotietextiel en bedrukte stoffen tassen',
  ar: 'منسوجات دعائية وحقائب قماش مطبوعة',
};

/** Anavera Tekstil sayfalarına eklenen kısa yönlendirme cümlesi (4 dil). */
export const PROMO_ANAVERA_LINE: Record<'tr' | 'en' | 'de' | 'ru', string> = {
  tr: 'Fuar ve organizasyonlar için logolu ürünler mi arıyorsunuz?',
  en: 'Looking for logo products for fairs and events?',
  de: 'Sie suchen Produkte mit Logo für Messen und Veranstaltungen?',
  ru: 'Нужны изделия с логотипом для выставок и мероприятий?',
};
