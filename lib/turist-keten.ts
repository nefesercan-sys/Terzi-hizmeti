// ============================================================
// terzihizmeti.com.tr — lib/turist-keten.ts
// Antalya'ya gelen turistlere yönelik YABANCI DİL (EN/DE/RU) keten & pamuk özel dikim
// + ekspres tadilat sayfa kümesi için TEK veri kaynağı.
//
// Sayfa kümesi (her dilde):
//   • Hub        : /en/linen-cotton-tailoring | /de/leinen-baumwolle-schneiderei | /ru/poshiv-lyon-hlopok
//   • Ürün sayfa : {hub}/{ürün-slug}  (gömlek, elbise, pantolon, ceket, çocuk)
//   • Ekspres    : turistlerin satın aldığı kıyafetlerin tadilatı (1 gün / acilde birkaç saat)
//
// Kurallar (sitenin diğer dosyalarıyla aynı):
//  - Sadece işletme sahibinin verdiği bilgiler: 2006'dan beri, her gün 08:00–23:00, otel/eve ücretsiz servis,
//    özel dikim genellikle 3 gün, tadilat genellikle 1 gün, acilde çoğunlukla 2–4 saat.
//  - Süre sözleri "genellikle/usually" ile yazılır; kesin gün/saat WhatsApp'ta netleşir (kesin garanti YOK).
//  - Görseller örnek/stil görselidir (müşteri fotoğrafı gibi sunulmaz) — sayfada bu not yer alır.
// ============================================================
import type { Metadata } from 'next';
import { SITE, PHONE_TEL, MAPS, abs } from '@/lib/seo-data';
import { reviewSchema } from '@/lib/reviews';

import {
  TLANGS, TR_HUB, HUB, EXPRESS, PRICES_PAGE, ANAVERA, PRODUCT_IDS,
  hubUrl, productUrl, expressUrl, productSlugs, findProduct, allNewPages,
  type TLang, type ProductId,
} from '@/lib/turist-links';
export {
  TLANGS, TR_HUB, HUB, EXPRESS, PRICES_PAGE, ANAVERA, PRODUCT_IDS,
  hubUrl, productUrl, expressUrl, productSlugs, findProduct, allNewPages,
  type TLang, type ProductId,
};
type L3<T = string> = Record<TLang, T>;

export const OG_DEFAULT = `${SITE}/linen/og-linen-tailor-antalya.jpg`;
export const TURIST_UPDATE = '2026-10-15'; // bu kümenin son içerik güncellemesi (sitemap + dateModified)

// ── Görseller (public/linen/*) ──────────────────────────────
export type ImgKey = 'family' | 'tea' | 'castle' | 'harbourMan' | 'jacketHarbour' | 'jacketKaleici' | 'olive'
  | 'maxi' | 'slit' | 'white' | 'green' | 'kidsCob' | 'kidsGate' | 'kidsBench';

export const IMG: Record<ImgKey, { src: string; w: number; h: number }> = {
  family:        { src: '/linen/linen-family-hadrians-gate-antalya.jpg', w: 1400, h: 764 },
  tea:           { src: '/linen/linen-shirt-man-tea-antalya.jpg', w: 1100, h: 600 },
  castle:        { src: '/linen/linen-shirt-trousers-man-castle-antalya.jpg', w: 720, h: 1290 },
  harbourMan:    { src: '/linen/linen-shirt-man-harbour-antalya.jpg', w: 720, h: 1290 },
  jacketHarbour: { src: '/linen/linen-jacket-couple-harbour-antalya.jpg', w: 720, h: 1290 },
  jacketKaleici: { src: '/linen/linen-jacket-couple-kaleici-antalya.jpg', w: 720, h: 1290 },
  olive:         { src: '/linen/linen-dress-couple-olive-grove.jpg', w: 1100, h: 732 },
  maxi:          { src: '/linen/linen-maxi-dress-hadrians-gate.jpg', w: 938, h: 768 },
  slit:          { src: '/linen/linen-dress-slit-hadrians-gate-antalya.jpg', w: 720, h: 1290 },
  white:         { src: '/linen/linen-dress-white-garden.jpg', w: 760, h: 1018 },
  green:         { src: '/linen/linen-dress-green-workshop-terzi-can.jpg', w: 760, h: 1018 },
  kidsCob:       { src: '/linen/kids-linen-clothing-cobblestone-antalya.jpg', w: 720, h: 1290 },
  kidsGate:      { src: '/linen/kids-linen-clothing-hadrians-gate-antalya.jpg', w: 720, h: 1290 },
  kidsBench:     { src: '/linen/kids-linen-shirt-shorts-kaleici.jpg', w: 938, h: 768 },
};

export const ALT: Record<ImgKey, L3> = {
  family: {
    en: 'Family in linen and cotton clothing at Hadrian\'s Gate, Antalya — style example',
    de: 'Familie in Leinen- und Baumwollkleidung am Hadriantor, Antalya — Stilbeispiel',
    ru: 'Семья в льняной и хлопковой одежде у Ворот Адриана, Анталья — пример модели',
  },
  tea: {
    en: 'Man in a light-blue linen shirt with Turkish tea above Antalya bay — linen shirt style example',
    de: 'Mann im hellblauen Leinenhemd mit türkischem Tee über der Bucht von Antalya — Stilbeispiel Leinenhemd',
    ru: 'Мужчина в голубой льняной рубашке с турецким чаем над бухтой Анталья — пример льняной рубашки',
  },
  castle: {
    en: 'Linen shirt and white linen trousers at the Antalya coast — style example',
    de: 'Leinenhemd und weiße Leinenhose an der Küste von Antalya — Stilbeispiel',
    ru: 'Льняная рубашка и белые льняные брюки на побережье Антальи — пример модели',
  },
  harbourMan: {
    en: 'Beige linen shirt with navy trousers at Antalya harbour — style example',
    de: 'Beiges Leinenhemd mit marineblauer Hose am Hafen von Antalya — Stilbeispiel',
    ru: 'Бежевая льняная рубашка и тёмно-синие брюки в порту Антальи — пример модели',
  },
  jacketHarbour: {
    en: 'Couple in a linen blazer, linen trousers and a linen jumpsuit at Antalya marina — style example',
    de: 'Paar in Leinensakko, Leinenhose und Leinen-Jumpsuit an der Marina von Antalya — Stilbeispiel',
    ru: 'Пара в льняном пиджаке, брюках и комбинезоне в марине Антальи — пример модели',
  },
  jacketKaleici: {
    en: 'Unstructured linen jacket and relaxed linen dress at Kaleiçi viewpoint, Antalya — style example',
    de: 'Leinensakko und lockeres Leinenkleid am Aussichtspunkt in Kaleiçi, Antalya — Stilbeispiel',
    ru: 'Льняной пиджак и свободное льняное платье на смотровой площадке Калеичи, Анталья — пример модели',
  },
  olive: {
    en: 'Couple in a green linen wrap dress and linen shirt among olive trees — style example',
    de: 'Paar in grünem Leinen-Wickelkleid und Leinenhemd zwischen Olivenbäumen — Stilbeispiel',
    ru: 'Пара в зелёном льняном платье с запахом и льняной рубашке среди олив — пример модели',
  },
  maxi: {
    en: 'Brown linen maxi dress with embroidered neckline at Hadrian\'s Gate, Antalya — style example',
    de: 'Braunes Leinen-Maxikleid mit Stickerei am Ausschnitt am Hadriantor, Antalya — Stilbeispiel',
    ru: 'Коричневое льняное макси-платье с вышивкой у Ворот Адриана, Анталья — пример модели',
  },
  slit: {
    en: 'Beige linen maxi dress with a side slit in Antalya Old Town — style example',
    de: 'Beiges Leinen-Maxikleid mit Seitenschlitz in der Altstadt von Antalya — Stilbeispiel',
    ru: 'Бежевое льняное макси-платье с разрезом в старом городе Анталья — пример модели',
  },
  white: {
    en: 'White linen summer dress with thin straps in a garden — style example',
    de: 'Weißes Leinen-Sommerkleid mit dünnen Trägern im Garten — Stilbeispiel',
    ru: 'Белое льняное летнее платье на тонких бретелях в саду — пример модели',
  },
  green: {
    en: 'Olive-green linen dress with pockets on a mannequin in the Terzi Can workshop',
    de: 'Olivgrünes Leinenkleid mit Taschen auf der Puppe in der Werkstatt von Terzi Can',
    ru: 'Оливковое льняное платье с карманами на манекене в ателье Terzi Can',
  },
  kidsCob: {
    en: 'Children in linen clothing on a cobblestone street in Antalya — kids style example',
    de: 'Kinder in Leinenkleidung auf einer Kopfsteinpflasterstraße in Antalya — Stilbeispiel Kinder',
    ru: 'Дети в льняной одежде на брусчатке в Анталье — пример детской модели',
  },
  kidsGate: {
    en: 'Three children in linen shirt, dress and dungarees at Hadrian\'s Gate — kids style example',
    de: 'Drei Kinder in Leinenhemd, Kleid und Latzhose am Hadriantor — Stilbeispiel Kinder',
    ru: 'Трое детей в льняной рубашке, платье и комбинезоне у Ворот Адриана — пример детской модели',
  },
  kidsBench: {
    en: 'Boy in a mustard linen shirt and shorts on a bench in Kaleiçi — kids style example',
    de: 'Junge in senffarbenem Leinenhemd und Shorts auf einer Bank in Kaleiçi — Stilbeispiel Kinder',
    ru: 'Мальчик в горчичной льняной рубашке и шортах на скамейке в Калеичи — пример детской модели',
  },
};

export const PRODUCT_IMGS: Record<ProductId, ImgKey[]> = {
  shirt: ['tea', 'harbourMan', 'castle'],
  dress: ['maxi', 'white', 'slit', 'green'],
  trousers: ['castle', 'harbourMan', 'jacketHarbour'],
  jacket: ['jacketKaleici', 'jacketHarbour', 'olive'],
  kids: ['kidsBench', 'kidsCob', 'kidsGate'],
};
export const PRODUCT_OG: Record<ProductId, string> = {
  shirt: `${SITE}${IMG.tea.src}`, dress: `${SITE}${IMG.maxi.src}`, trousers: OG_DEFAULT, jacket: OG_DEFAULT, kids: `${SITE}${IMG.kidsBench.src}`,
};
export const HUB_GALLERY: ImgKey[] = ['maxi', 'tea', 'kidsCob', 'jacketKaleici', 'white', 'olive'];

// ── Ortak arayüz metinleri ──────────────────────────────────
export interface UiCopy {
  locale: string; htmlLang: string;
  hubName: string; expressName: string; brand: string;
  tag: string;
  glanceH: string;
  glance: { price: string; delivery: string; fabrics: string; measure: string; alter: string; hours: string };
  glanceLabels: { price: string; delivery: string; fabrics: string; measure: string; alter: string; hours: string };
  stepsH: string;
  steps: [string, string][];
  stylesH: string; customH: string; galleryH: string; galleryNote: string;
  faqH: string; relatedH: string; allProducts: string; otherPages: string;
  ctaH: string; ctaSub: string; ctaBtn: string; ctaPhone: string;
  quoteBtn: string; seeMore: string; fromPrice: string;
  priceLink: string; hotelLink: string; b2b: string; b2bLink: string;
  waGeneric: string; waExpress: string;
}

export const UI: L3<UiCopy> = {
  en: {
    locale: 'en_US', htmlLang: 'en', hubName: 'Linen & Cotton Tailoring', expressName: 'Tourist Clothing Alterations', brand: 'Terzi Can',
    tag: 'Terzi Can · Antalya, Konyaaltı · Since 2006',
    glanceH: 'At a glance',
    glanceLabels: { price: 'Price', delivery: 'Delivery', fabrics: 'Fabrics', measure: 'Measurements', alter: 'Alterations', hours: 'Open' },
    glance: {
      price: `Depends on the garment, fabric and design; confirmed on WhatsApp before we start sewing.`,
      delivery: 'Timing depends on the model and number of pieces. Come early in your holiday to be safe; tell us your departure date and we will say what is possible.',
      fabrics: 'Natural linen and cotton fabrics.',
      measure: 'At our Konyaaltı workshop or at your hotel (hotel service is free).',
      alter: 'Clothes you bought here: Ready the next day; urgent jobs take 1–2 hours.',
      hours: 'Every day 08:00–23:00 · message us on WhatsApp in your language.',
    },
    stepsH: 'How it works',
    steps: [
      ['Choose', 'Pick a model from the examples or send a photo of what you like. We help you choose fabric and colour.'],
      ['Measure', 'We take your measurements at our workshop or at your hotel — ideally in the first days of your holiday.'],
      ['Sew', 'Your piece is tailored in our own workshop, to your measurements and your design wishes.'],
      ['Collect', 'Pick it up or have it delivered to your hotel once it is ready. We check the fit with you.'],
    ],
    stylesH: 'What we make', customH: 'Make it yours', galleryH: 'Style examples',
    galleryNote: 'Illustrative style examples — your piece is made to your own measurements and fabric choice.',
    faqH: 'Frequently asked questions', relatedH: 'More from Terzi Can', allProducts: 'All linen & cotton clothing', otherPages: 'Related pages',
    ctaH: 'Make a souvenir you can wear', ctaSub: 'Send a photo or idea on WhatsApp and we will tell you the price and timing.',
    ctaBtn: 'Order on WhatsApp', ctaPhone: 'Phone / WhatsApp',
    quoteBtn: 'Ask for this on WhatsApp', seeMore: 'Details', fromPrice: 'Price on WhatsApp',
    priceLink: 'Alteration price list', hotelLink: 'Tailor to your hotel', b2b: 'Need serial production?', b2bLink: 'Anavera Tekstil — manufacturing & export',
    waGeneric: 'Hello, I am visiting Antalya and would like something made in linen/cotton. Item: ',
    waExpress: 'Hello, I bought clothes in Antalya and need an alteration. I am sending a photo. Is it urgent? ',
  },
  de: {
    locale: 'de_DE', htmlLang: 'de', hubName: 'Leinen & Baumwolle Schneiderei', expressName: 'Kleidung ändern im Urlaub', brand: 'Terzi Can',
    tag: 'Terzi Can · Antalya, Konyaaltı · seit 2006',
    glanceH: 'Auf einen Blick',
    glanceLabels: { price: 'Preis', delivery: 'Lieferzeit', fabrics: 'Stoffe', measure: 'Maßnehmen', alter: 'Änderungen', hours: 'Geöffnet' },
    glance: {
      price: `Je nach Kleidungsstück, Stoff und Design; wird vor dem Nähen per WhatsApp bestätigt.`,
      delivery: 'Die Dauer richtet sich nach Modell und Stückzahl. Am besten gleich zu Urlaubsbeginn kommen; nennen Sie uns Ihr Abreisedatum, dann sagen wir, was möglich ist.',
      fabrics: 'Natürliche Leinen- und Baumwollstoffe.',
      measure: 'In unserer Werkstatt in Konyaaltı oder bei Ihnen im Hotel (Hotelservice kostenlos).',
      alter: 'Hier gekaufte Kleidung: am nächsten Tag; dringende Aufträge in 1–2 Stunden.',
      hours: 'Täglich 08:00–23:00 Uhr · schreiben Sie uns per WhatsApp in Ihrer Sprache.',
    },
    stepsH: 'So läuft es ab — die Dauer richtet sich nach Modell und Stückzahl',
    steps: [
      ['Auswählen', 'Wählen Sie ein Modell aus den Beispielen oder senden Sie ein Foto. Bei Stoff und Farbe beraten wir Sie.'],
      ['Maß nehmen', 'Wir nehmen Maß in unserer Werkstatt oder bei Ihnen im Hotel — am besten in den ersten Urlaubstagen.'],
      ['Nähen', 'Ihr Stück entsteht in unserer eigenen Werkstatt, nach Ihren Maßen und Design-Wünschen.'],
      ['Abholen', 'Abholung oder Lieferung ins Hotel, sobald das Stück fertig ist. Wir prüfen den Sitz gemeinsam mit Ihnen.'],
    ],
    stylesH: 'Was wir anfertigen', customH: 'Ganz nach Ihren Wünschen', galleryH: 'Stilbeispiele',
    galleryNote: 'Beispielbilder zur Inspiration — Ihr Stück wird nach Ihren eigenen Maßen und Ihrer Stoffwahl gefertigt.',
    faqH: 'Häufig gestellte Fragen', relatedH: 'Mehr von Terzi Can', allProducts: 'Alle Leinen- & Baumwollkleidung', otherPages: 'Weitere Seiten',
    ctaH: 'Ein Souvenir zum Anziehen', ctaSub: 'Senden Sie Foto oder Idee per WhatsApp — wir nennen Preis und Zeitplan.',
    ctaBtn: 'Per WhatsApp bestellen', ctaPhone: 'Telefon / WhatsApp',
    quoteBtn: 'Per WhatsApp anfragen', seeMore: 'Details', fromPrice: 'Preis per WhatsApp',
    priceLink: 'Preisliste Änderungen', hotelLink: 'Schneider ins Hotel', b2b: 'Serienfertigung gewünscht?', b2bLink: 'Anavera Tekstil — Fertigung & Export',
    waGeneric: 'Hallo, ich bin in Antalya im Urlaub und möchte etwas aus Leinen/Baumwolle anfertigen lassen. Artikel: ',
    waExpress: 'Hallo, ich habe in Antalya Kleidung gekauft und brauche eine Änderung. Ich sende ein Foto. Ist es eilig? ',
  },
  ru: {
    locale: 'ru_RU', htmlLang: 'ru', hubName: 'Пошив из льна и хлопка', expressName: 'Подгонка одежды туристам', brand: 'Terzi Can',
    tag: 'Terzi Can · Анталья, Коньяалты · с 2006 года',
    glanceH: 'Коротко',
    glanceLabels: { price: 'Цена', delivery: 'Срок', fabrics: 'Ткани', measure: 'Мерки', alter: 'Подгонка', hours: 'Часы работы' },
    glance: {
      price: `Зависит от изделия, ткани и дизайна; уточняем в WhatsApp до начала пошива.`,
      delivery: 'Срок зависит от модели и количества изделий с момента снятия мерок. Лучше прийти в первые дни отпуска; сообщите дату отъезда — скажем, что возможно.',
      fabrics: 'Натуральные ткани: лён и хлопок.',
      measure: 'В нашем ателье в Коньяалты или у вас в отеле (бесплатно в Коньяалты; дальние районы — по расстоянию).',
      alter: 'Купленная здесь одежда: на следующий день; срочные заказы — за 1–2 часа.',
      hours: 'Ежедневно 08:00–23:00 · пишите в WhatsApp на своём языке.',
    },
    stepsH: 'Как это работает — срок зависит от модели и количества изделий',
    steps: [
      ['Выбор', 'Выберите модель из примеров или пришлите фото того, что нравится. Поможем с тканью и цветом.'],
      ['Мерки', 'Снимаем мерки в ателье или у вас в отеле — лучше в первые дни отпуска.'],
      ['Пошив', 'Изделие шьётся в нашем ателье по вашим меркам и пожеланиям к дизайну.'],
      ['Получение', 'Заберите сами или закажите доставку в отель, когда изделие будет готово. Вместе проверяем посадку.'],
    ],
    stylesH: 'Что мы шьём', customH: 'Сделайте это своим', galleryH: 'Примеры моделей',
    galleryNote: 'Иллюстративные примеры стиля — ваше изделие шьётся по вашим меркам и из выбранной вами ткани.',
    faqH: 'Часто задаваемые вопросы', relatedH: 'Ещё от Terzi Can', allProducts: 'Вся одежда из льна и хлопка', otherPages: 'Связанные страницы',
    ctaH: 'Сувенир, который можно носить', ctaSub: 'Пришлите фото или идею в WhatsApp — назовём цену и сроки.',
    ctaBtn: 'Заказать в WhatsApp', ctaPhone: 'Телефон / WhatsApp',
    quoteBtn: 'Узнать в WhatsApp', seeMore: 'Подробнее', fromPrice: 'Цена в WhatsApp',
    priceLink: 'Цены на подгонку и ремонт', hotelLink: 'Портной в отель', b2b: 'Нужно серийное производство?', b2bLink: 'Anavera Tekstil — производство и экспорт',
    waGeneric: 'Здравствуйте, я в отпуске в Анталье, хочу заказать пошив из льна/хлопка. Изделие: ',
    waExpress: 'Здравствуйте, купил(а) одежду в Анталье, нужна подгонка. Отправляю фото. Это срочно? ',
  },
};

// ── Ürün içerikleri ─────────────────────────────────────────
export interface ProductCopy {
  name: string; h1: string; title: string; desc: string; keywords: string[];
  lead: string; styles: string[]; custom: string[]; faq: [string, string][];
}

export const PRODUCTS: Record<ProductId, L3<ProductCopy>> = {
  // ───────────────────────── GÖMLEK ─────────────────────────
  shirt: {
    en: {
      name: 'Linen shirt',
      h1: 'Custom Linen Shirt in Antalya — Made to Measure',
      title: 'Custom Linen Shirt Antalya — Made to Measure',
      desc: `Tailor-made linen or cotton shirts for men and women in Antalya. Your measurements, your fabric, timing depends on the model and number of pieces. Terzi Can, Konyaaltı.`,
      keywords: ['custom linen shirt Antalya', 'tailor made linen shirt Antalya', 'made to measure linen shirt Turkey', 'linen shirt tailor Antalya', 'men linen shirt custom Antalya holiday', 'cotton shirt made to measure Antalya', 'souvenir from Antalya clothing'],
      lead: `A custom linen shirt from Terzi Can is cut to your own measurements in natural linen or cotton and its timing depends on the model and number of pieces. Come to our Konyaaltı workshop or ask us to measure you at your hotel.`,
      styles: ['Classic collar linen shirt for men', 'Short-sleeve resort shirt', 'Relaxed or oversized shirt for women', 'Band-collar (mandarin) shirt', 'Matching shirts for couples, families or a wedding party'],
      custom: ['Sleeve length and roll-up tabs', 'Chest pocket or no pocket', 'Fit: slim, regular or relaxed', 'Colour: sand, white, sky blue, olive and more, depending on the fabrics in stock'],
      faq: [
        ['How fast can I get a custom linen shirt in Antalya?', 'Timing depends on the model and number of pieces. Tell us your departure date on WhatsApp and we will say whether it works; the sooner in your holiday you come, the safer.'],
        ['Is linen a good choice for Antalya\'s summer heat?', 'Yes. Linen is breathable and dries quickly, which is why it is the classic fabric for hot Mediterranean weather. Cotton is a softer, smoother alternative, and we can help you choose.'],
        ['Can you copy a shirt I already own?', 'Send us a photo or bring the shirt. We can use it as a reference for fit and style and make a new one in linen or cotton; we tell you what is possible before we start.'],
        ['Can I order shirts for the whole family or group?', 'Yes. Matching shirts for men, women and children can be made together. Tell us how many pieces and your departure date, and we plan the timing on WhatsApp.'],
        ['How much does a custom linen shirt cost?', `The final price depends on the style, the fabric and any design details, and we confirm it on WhatsApp before sewing.`],
      ],
    },
    de: {
      name: 'Leinenhemd',
      h1: 'Leinenhemd nach Maß in Antalya',
      title: 'Leinenhemd nach Maß Antalya — nach Maß maßgeschneidert',
      desc: `Maßgeschneiderte Leinen- und Baumwollhemden für Damen und Herren in Antalya. Ihre Maße, Ihr Stoff, die Dauer richtet sich nach Modell und Stückzahln fertig. Terzi Can, Konyaaltı.`,
      keywords: ['Leinenhemd nach Maß Antalya', 'Leinenhemd maßgeschneidert Türkei', 'Maßhemd Leinen Antalya Urlaub', 'Schneider Leinenhemd Antalya', 'Baumwollhemd Maßanfertigung Antalya', 'Souvenir Antalya Kleidung'],
      lead: `Ein Leinenhemd nach Maß von Terzi Can wird aus natürlichem Leinen oder Baumwolle nach Ihren eigenen Maßen gefertigt und ist die Dauer richtet sich nach Modell und Stückzahl fertig. Kommen Sie in unsere Werkstatt in Konyaaltı oder lassen Sie sich im Hotel ausmessen.`,
      styles: ['Klassisches Leinenhemd mit Kragen für Herren', 'Kurzarm-Urlaubshemd', 'Lockeres oder oversized Hemd für Damen', 'Hemd mit Stehkragen', 'Passende Hemden für Paare, Familien oder Hochzeitsgesellschaften'],
      custom: ['Ärmellänge und Aufrollriegel', 'Brusttasche oder ohne Tasche', 'Passform: schmal, normal oder locker', 'Farbe: Sand, Weiß, Himmelblau, Oliv und mehr, je nach vorrätigen Stoffen'],
      faq: [
        ['Wie schnell bekomme ich ein Leinenhemd nach Maß in Antalya?', 'Die Dauer richtet sich nach Modell und Stückzahln nach dem Maßnehmen. Nennen Sie uns Ihr Abreisedatum per WhatsApp, dann sagen wir, ob es klappt; je früher im Urlaub, desto sicherer.'],
        ['Ist Leinen für die Sommerhitze in Antalya geeignet?', 'Ja. Leinen ist atmungsaktiv und trocknet schnell — der klassische Stoff für heißes Mittelmeerwetter. Baumwolle ist eine weichere, glattere Alternative; wir beraten Sie gern.'],
        ['Können Sie ein Hemd nacharbeiten, das ich schon besitze?', 'Senden Sie ein Foto oder bringen Sie das Hemd mit. Wir nutzen es als Vorlage für Passform und Stil und fertigen ein neues aus Leinen oder Baumwolle; vorab sagen wir, was möglich ist.'],
        ['Kann ich Hemden für die ganze Familie oder Gruppe bestellen?', 'Ja. Passende Hemden für Herren, Damen und Kinder können zusammen gefertigt werden. Nennen Sie uns Stückzahl und Abreisedatum, den Zeitplan klären wir per WhatsApp.'],
        ['Was kostet ein maßgeschneidertes Leinenhemd?', `Der Endpreis hängt von Schnitt, Stoff und Design-Details ab und wird vor dem Nähen per WhatsApp bestätigt.`],
      ],
    },
    ru: {
      name: 'Льняная рубашка',
      h1: 'Льняная рубашка на заказ в Анталье',
      title: 'Льняная рубашка на заказ в Анталье — пошив на заказ',
      desc: `Пошив льняных и хлопковых рубашек по вашим меркам в Анталье для мужчин и женщин. Срок зависит от модели и количества изделий. Ателье Terzi Can, Коньяалты.`,
      keywords: ['льняная рубашка на заказ Анталья', 'пошив рубашки из льна Анталья', 'мужская льняная рубашка по меркам Турция', 'рубашка из хлопка на заказ Анталья', 'индивидуальный пошив Анталья туристам', 'сувенир из Анталии одежда'],
      lead: `Льняная рубашка на заказ в Terzi Can шьётся по вашим меркам из натурального льна или хлопка и срок зависит от модели и количества изделий. Приходите в наше ателье в Коньяалты или пригласите нас снять мерки в отеле.`,
      styles: ['Классическая мужская льняная рубашка с воротником', 'Летняя рубашка с коротким рукавом', 'Свободная рубашка оверсайз для женщин', 'Рубашка со стойкой', 'Одинаковые рубашки для пар, семьи или свадебной компании'],
      custom: ['Длина рукава и хлястики для подворота', 'Нагрудный карман или без кармана', 'Посадка: облегающая, обычная или свободная', 'Цвет: песочный, белый, голубой, оливковый и другие — в зависимости от наличия ткани'],
      faq: [
        ['Как быстро можно получить льняную рубашку на заказ в Анталье?', 'Срок зависит от модели и количества изделий. Напишите дату отъезда в WhatsApp — скажем, получится ли; чем раньше в отпуске вы придёте, тем надёжнее.'],
        ['Подходит ли лён для жары в Анталье?', 'Да. Лён дышит и быстро сохнет, поэтому это классическая ткань для жаркого средиземноморского лета. Хлопок мягче и глаже — поможем выбрать.'],
        ['Можно сшить копию рубашки, которая у меня уже есть?', 'Пришлите фото или принесите рубашку. Мы используем её как образец посадки и стиля и сошьём новую из льна или хлопка; заранее скажем, что возможно.'],
        ['Можно заказать рубашки для всей семьи или группы?', 'Да. Одинаковые рубашки для мужчин, женщин и детей можно сшить вместе. Напишите количество и дату отъезда — сроки согласуем в WhatsApp.'],
        ['Сколько стоит льняная рубашка на заказ?', `Итоговая цена зависит от модели, ткани и деталей дизайна; подтверждаем её в WhatsApp до начала пошива.`],
      ],
    },
  },

  // ───────────────────────── ELBİSE ─────────────────────────
  dress: {
    en: {
      name: 'Linen dress',
      h1: 'Custom Linen Dress in Antalya — Made to Measure',
      title: 'Custom Linen Dress Antalya — Made to Measure',
      desc: `Tailor-made linen and cotton dresses in Antalya: maxi, midi, wrap and beach dresses to your measurements. Timing depends on the model and number of pieces. Terzi Can.`,
      keywords: ['custom linen dress Antalya', 'made to measure linen dress Turkey', 'tailor made dress Antalya holiday', 'linen maxi dress custom Antalya', 'women linen dress tailor Antalya', 'beach dress made to measure Antalya', 'souvenir from Antalya dress'],
      lead: `A custom linen dress from Terzi Can is designed with you and sewn to your measurements in natural linen or cotton — timing depends on the model and number of pieces. Bring a photo of a dress you like or choose one of our style examples; we adapt it to you.`,
      styles: ['Maxi dress with relaxed fit and tie waist', 'Wrap dress', 'Midi summer dress with thin straps', 'Beach kaftan or cover-up', 'Tunic and long shirt-dress'],
      custom: ['Neckline, straps and sleeves', 'Length: mini, midi or maxi', 'Waist: tie, elastic or fitted', 'Side slit, pockets and details such as embroidery trim, depending on the design'],
      faq: [
        ['Can you make a dress from a photo I send?', 'Yes. Send a photo of the dress you like on WhatsApp. We adapt the cut to your measurements and suggest a suitable linen or cotton fabric; we tell you in advance what is realistic.'],
        ['How long does a custom linen dress take?', 'Timing depends on the model and number of pieces. More detailed designs can need extra time — tell us your departure date so we can confirm the schedule before we start.'],
        ['Can I get my measurements taken at the hotel?', 'Yes. Hotel service is free in every area we serve, so we can measure you at your hotel, or you can visit the workshop in Konyaaltı.'],
        ['Is linen or cotton better for a summer dress?', 'Linen is airy and cool and has the classic crinkled look; cotton is smoother and softer. Both are natural fabrics, and we help you decide by colour and by how you want the dress to fall.'],
        ['What does a custom linen dress cost?', `Depending on length, design and fabric. The price is confirmed on WhatsApp before sewing.`],
      ],
    },
    de: {
      name: 'Leinenkleid',
      h1: 'Leinenkleid nach Maß in Antalya',
      title: 'Leinenkleid nach Maß Antalya — maßgeschneidert',
      desc: `Maßgeschneiderte Leinen- und Baumwollkleider in Antalya: Maxi-, Midi-, Wickel- und Strandkleider nach Ihren Maßen. Die Dauer richtet sich nach Modell und Stückzahl. Terzi Can.`,
      keywords: ['Leinenkleid nach Maß Antalya', 'Kleid maßschneidern lassen Antalya', 'Leinenkleid Maßanfertigung Türkei', 'Maxikleid Leinen Antalya Urlaub', 'Strandkleid nach Maß Antalya', 'Schneiderin Antalya Kleid', 'Souvenir Antalya Kleid'],
      lead: `Ein Leinenkleid nach Maß von Terzi Can wird mit Ihnen entworfen und aus natürlichem Leinen oder Baumwolle nach Ihren Maßen genäht — die Dauer richtet sich nach Modell und Stückzahl fertig. Bringen Sie ein Foto Ihres Wunschkleids mit oder wählen Sie ein Stilbeispiel; wir passen es an Sie an.`,
      styles: ['Maxikleid mit lockerer Passform und Bindegürtel', 'Wickelkleid', 'Midi-Sommerkleid mit dünnen Trägern', 'Strandkaftan oder Überwurf', 'Tunika und langes Hemdblusenkleid'],
      custom: ['Ausschnitt, Träger und Ärmel', 'Länge: mini, midi oder maxi', 'Taille: Bindegürtel, Gummizug oder tailliert', 'Seitenschlitz, Taschen und Details wie Stickerei-Borte, je nach Entwurf'],
      faq: [
        ['Können Sie ein Kleid nach einem Foto von mir nähen?', 'Ja. Senden Sie per WhatsApp ein Foto des gewünschten Kleids. Wir passen den Schnitt Ihren Maßen an und schlagen einen passenden Leinen- oder Baumwollstoff vor; vorab sagen wir, was realistisch ist.'],
        ['Wie lange dauert ein Leinenkleid nach Maß?', 'Die Dauer richtet sich nach Modell und Stückzahl. Aufwendigere Entwürfe können mehr Zeit brauchen — nennen Sie uns Ihr Abreisedatum, dann bestätigen wir den Zeitplan vor Beginn.'],
        ['Kann man bei mir im Hotel Maß nehmen?', 'Ja. Der Hotelservice ist in allen Gebieten, die wir bedienen, kostenlos; wir messen Sie im Hotel aus, oder Sie besuchen die Werkstatt in Konyaaltı.'],
        ['Leinen oder Baumwolle für ein Sommerkleid?', 'Leinen ist luftig und kühl mit dem klassischen Knitterlook; Baumwolle ist glatter und weicher. Beides sind Naturstoffe — wir helfen bei Farbe und Fall des Kleids.'],
        ['Was kostet ein Leinenkleid nach Maß?', `Je nach Länge, Design und Stoff. Der Preis wird vor dem Nähen per WhatsApp bestätigt.`],
      ],
    },
    ru: {
      name: 'Льняное платье',
      h1: 'Льняное платье на заказ в Анталье',
      title: 'Льняное платье на заказ в Анталье — пошив на заказ',
      desc: `Пошив льняных и хлопковых платьев по вашим меркам в Анталье: макси, миди, с запахом, пляжные. Срок зависит от модели и количества изделий. Ателье Terzi Can.`,
      keywords: ['льняное платье на заказ Анталья', 'пошив платья из льна Анталья', 'индивидуальный пошив платья Турция', 'платье макси из льна на заказ', 'пляжное платье на заказ Анталья', 'портной Анталья платье туристам', 'сувенир из Анталии платье'],
      lead: `Льняное платье на заказ в Terzi Can мы разрабатываем вместе с вами и шьём по вашим меркам из натурального льна или хлопка — срок зависит от модели и количества изделий. Принесите фото понравившегося платья или выберите пример из галереи — адаптируем под вашу фигуру.`,
      styles: ['Платье макси свободного кроя с поясом на завязках', 'Платье с запахом', 'Летнее платье миди на тонких бретелях', 'Пляжный кафтан или накидка', 'Туника и длинное платье-рубашка'],
      custom: ['Вырез, бретели и рукава', 'Длина: мини, миди или макси', 'Талия: завязки, резинка или приталенный крой', 'Разрез, карманы и детали, например отделка вышивкой — в зависимости от дизайна'],
      faq: [
        ['Можно сшить платье по фото, которое я пришлю?', 'Да. Пришлите в WhatsApp фото понравившегося платья. Мы адаптируем крой под ваши мерки и предложим подходящую ткань из льна или хлопка; заранее скажем, что реально.'],
        ['Сколько занимает пошив льняного платья на заказ?', 'Срок зависит от модели и количества изделий. Более сложным моделям может потребоваться больше времени — сообщите дату отъезда, и мы подтвердим сроки до начала работы.'],
        ['Можно снять мерки в отеле?', 'Да. Забор и доставка в отели бесплатны во всех районах, которые мы обслуживаем: снимем мерки у вас в отеле, либо приезжайте в ателье в Коньяалты.'],
        ['Что лучше для летнего платья: лён или хлопок?', 'Лён лёгкий и прохладный, с классической «мятой» фактурой; хлопок глаже и мягче. Обе ткани натуральные — поможем выбрать по цвету и желаемой драпировке.'],
        ['Сколько стоит льняное платье на заказ?', `В зависимости от длины, дизайна и ткани. Цену подтверждаем в WhatsApp до начала пошива.`],
      ],
    },
  },

  // ───────────────────────── PANTOLON ─────────────────────────
  trousers: {
    en: {
      name: 'Linen trousers',
      h1: 'Custom Linen Trousers in Antalya — Made to Measure',
      title: 'Custom Linen Trousers Antalya — Made to Measure',
      desc: `Linen and cotton trousers made to your measurements in Antalya: wide-leg, straight, drawstring, shorts and jumpsuits. Timing depends on the model and number of pieces.`,
      keywords: ['custom linen trousers Antalya', 'made to measure linen pants Turkey', 'tailor made trousers Antalya holiday', 'wide leg linen trousers custom', 'linen shorts made to measure Antalya', 'men linen trousers tailor Antalya', 'linen jumpsuit custom Antalya'],
      lead: `Linen trousers from Terzi Can are cut to your waist, hip and leg length in natural linen or cotton — timing depends on the model and number of pieces. The length is set exactly to your height, so no hemming is needed afterwards.`,
      styles: ['Wide-leg linen trousers for women', 'Straight or tapered linen trousers for men', 'Drawstring beach trousers', 'Linen shorts and bermudas', 'Linen jumpsuit'],
      custom: ['Waist: button, zip, elastic or drawstring', 'Leg width and exact length', 'Pockets and pleats', 'Matching shirt or jacket in the same fabric for a complete set'],
      faq: [
        ['How long do custom linen trousers take?', 'Timing depends on the model and number of pieces. Tell us your departure date on WhatsApp and we confirm what is possible.'],
        ['Will the length be exact?', 'Yes. We set the length to your measurements, and we check the fit with you when you collect the trousers.'],
        ['Can you make a matching set?', 'Yes. Trousers can be made together with a shirt or jacket in the same fabric. Tell us the pieces on WhatsApp so we can plan the time.'],
        ['I already bought linen trousers here — can you shorten or take them in?', 'Yes. Hemming and waist alterations are ready the next day, and urgent jobs take 1–2 hours. See our alterations page for details.'],
        ['What do custom linen trousers cost?', `Depending on style and fabric; confirmed on WhatsApp before sewing.`],
      ],
    },
    de: {
      name: 'Leinenhose',
      h1: 'Leinenhose nach Maß in Antalya',
      title: 'Leinenhose nach Maß Antalya — maßgeschneidert',
      desc: `Leinen- und Baumwollhosen nach Ihren Maßen in Antalya: Weitbein, gerade, Kordelzug, Shorts und Jumpsuit. Die Dauer richtet sich nach Modell und Stückzahl. Terzi Can.`,
      keywords: ['Leinenhose nach Maß Antalya', 'Leinenhose maßgeschneidert Türkei', 'Maßhose Antalya Urlaub', 'Weitbeinhose Leinen Maßanfertigung', 'Leinenshorts nach Maß Antalya', 'Herren Leinenhose Schneider Antalya', 'Leinen Jumpsuit nach Maß'],
      lead: `Leinenhosen von Terzi Can werden nach Ihrem Taillen-, Hüft- und Beinmaß aus natürlichem Leinen oder Baumwolle gefertigt — die Dauer richtet sich nach Modell und Stückzahl fertig. Die Länge wird exakt auf Ihre Körpergröße gesetzt; Kürzen ist danach nicht nötig.`,
      styles: ['Weitbein-Leinenhose für Damen', 'Gerade oder verjüngte Leinenhose für Herren', 'Strandhose mit Kordelzug', 'Leinenshorts und Bermudas', 'Leinen-Jumpsuit'],
      custom: ['Bund: Knopf, Reißverschluss, Gummizug oder Kordelzug', 'Beinweite und exakte Länge', 'Taschen und Bundfalten', 'Passendes Hemd oder Sakko aus demselben Stoff für ein komplettes Set'],
      faq: [
        ['Wie lange dauert eine Leinenhose nach Maß?', 'Die Dauer richtet sich nach Modell und Stückzahl. Nennen Sie uns Ihr Abreisedatum per WhatsApp, dann bestätigen wir, was möglich ist.'],
        ['Stimmt die Länge dann genau?', 'Ja. Wir setzen die Länge nach Ihren Maßen und prüfen den Sitz gemeinsam mit Ihnen bei der Abholung.'],
        ['Können Sie ein passendes Set anfertigen?', 'Ja. Hosen können zusammen mit Hemd oder Sakko aus demselben Stoff gefertigt werden. Nennen Sie uns die Teile per WhatsApp, dann planen wir die Zeit.'],
        ['Ich habe hier schon eine Leinenhose gekauft — können Sie sie kürzen oder enger machen?', 'Ja. Kürzen und Bundänderungen sind am nächsten Tag fertig, dringende Aufträge in 1–2 Stunden. Details auf unserer Seite zu Änderungen.'],
        ['Was kostet eine Leinenhose nach Maß?', `Je nach Schnitt und Stoff; per WhatsApp vor dem Nähen bestätigt.`],
      ],
    },
    ru: {
      name: 'Льняные брюки',
      h1: 'Льняные брюки на заказ в Анталье',
      title: 'Льняные брюки на заказ в Анталье — пошив на заказ',
      desc: `Льняные и хлопковые брюки по вашим меркам в Анталье: широкие, прямые, на завязках, шорты и комбинезоны. Срок зависит от модели и количества изделий. Terzi Can.`,
      keywords: ['льняные брюки на заказ Анталья', 'пошив брюк из льна Анталья', 'мужские льняные брюки по меркам Турция', 'широкие льняные брюки на заказ', 'льняные шорты на заказ Анталья', 'льняной комбинезон на заказ', 'индивидуальный пошив Анталья туристам'],
      lead: `Льняные брюки в Terzi Can шьются по вашим меркам — талия, бёдра, длина ноги — из натурального льна или хлопка; срок зависит от модели и количества изделий. Длина сразу выставляется точно по вашему росту, подшивать потом не нужно.`,
      styles: ['Широкие льняные брюки для женщин', 'Прямые или зауженные льняные брюки для мужчин', 'Пляжные брюки на завязках', 'Льняные шорты и бермуды', 'Льняной комбинезон'],
      custom: ['Пояс: пуговица, молния, резинка или завязки', 'Ширина штанин и точная длина', 'Карманы и защипы', 'Рубашка или пиджак из той же ткани — получится полный комплект'],
      faq: [
        ['Сколько занимает пошив льняных брюк на заказ?', 'Срок зависит от модели и количества изделий. Напишите дату отъезда в WhatsApp — подтвердим, что возможно.'],
        ['Длина будет точной?', 'Да. Длину выставляем по вашим меркам и проверяем посадку вместе с вами при получении.'],
        ['Можно сшить комплект?', 'Да. Брюки можно сшить вместе с рубашкой или пиджаком из той же ткани. Напишите в WhatsApp, какие предметы нужны, — спланируем сроки.'],
        ['Я уже купила льняные брюки здесь — можно подшить или ушить?', 'Да. Подшив и ушивание пояса готово на следующий день, срочные заказы — за 1–2 часа. Подробности на странице подгонки одежды.'],
        ['Сколько стоят льняные брюки на заказ?', `В зависимости от модели и ткани; цену подтверждаем в WhatsApp до пошива.`],
      ],
    },
  },

  // ───────────────────────── CEKET / TAKIM ─────────────────────────
  jacket: {
    en: {
      name: 'Linen jacket & suit',
      h1: 'Custom Linen Jacket & Summer Suit in Antalya',
      title: 'Custom Linen Jacket & Summer Suit Antalya — Made to Measure',
      desc: `Linen or linen-cotton blazers and summer suits made to your measurements in Antalya — for weddings, dinners and holidays. Timing depends on the model and number of pieces. Terzi Can.`,
      keywords: ['custom linen jacket Antalya', 'linen suit made to measure Antalya', 'tailor made summer suit Turkey', 'wedding guest linen suit Antalya', 'linen blazer made to measure', 'men linen suit tailor Antalya holiday', 'women linen blazer custom Antalya'],
      lead: `A linen jacket or summer suit from Terzi Can is sewn to your measurements in natural linen or a linen-cotton fabric — timing depends on the model and number of pieces. Jackets have more detail than shirts, so tell us your date early and we will confirm the schedule.`,
      styles: ['Unstructured linen blazer for men', 'Women\'s linen blazer', 'Summer suit: jacket and trousers in matching fabric', 'Linen waistcoat', 'Linen outfit for a wedding or dinner in Antalya'],
      custom: ['Lapel, buttons and pockets', 'Lined or unlined for hot weather', 'Fit: classic or relaxed', 'Matching trousers, shirt or dress in the same fabric'],
      faq: [
        ['Can I have a linen suit made for a wedding in Antalya?', 'Yes. Tell us the date of the event and your departure date on WhatsApp; we confirm whether the schedule works. A jacket and trousers depend on the model and number of pieces, and we confirm the time before we start.'],
        ['Is linen too casual for formal occasions?', 'A well-cut linen jacket in sand, light blue or navy tones is a standard choice for summer weddings and dinners by the sea. We help you choose colour and cut.'],
        ['Will the jacket be lined?', 'You choose: unlined or half-lined for hot weather, or fully lined. We advise based on the fabric and how you will wear it.'],
        ['Can you alter a jacket I already bought?', 'Yes. Sleeve shortening and taking in a jacket are ready the next day. See our alterations page for details.'],
        ['What does a custom linen jacket cost?', `The price depends on the type of jacket, the fabric and lining, and we confirm it on WhatsApp before sewing.`],
      ],
    },
    de: {
      name: 'Leinensakko & Sommeranzug',
      h1: 'Leinensakko & Sommeranzug nach Maß in Antalya',
      title: 'Leinensakko & Sommeranzug nach Maß Antalya',
      desc: `Leinen- und Leinen-Baumwoll-Sakkos und Sommeranzüge nach Maß in Antalya — für Hochzeit, Dinner und Urlaub. Die Dauer richtet sich nach Modell und Stückzahl. Terzi Can.`,
      keywords: ['Leinensakko nach Maß Antalya', 'Leinenanzug maßgeschneidert Türkei', 'Sommeranzug nach Maß Antalya', 'Hochzeitsgast Leinenanzug Antalya', 'Maßanzug Urlaub Antalya', 'Damen Leinenblazer nach Maß', 'Herren Leinenanzug Schneider Antalya'],
      lead: `Ein Leinensakko oder Sommeranzug von Terzi Can wird nach Ihren Maßen aus natürlichem Leinen oder Leinen-Baumwoll-Stoff genäht — die Dauer richtet sich nach Modell und Stückzahl fertig. Sakkos haben mehr Details als Hemden; nennen Sie uns Ihren Termin früh, dann bestätigen wir den Zeitplan.`,
      styles: ['Unstrukturiertes Leinensakko für Herren', 'Leinenblazer für Damen', 'Sommeranzug: Sakko und Hose aus passendem Stoff', 'Leinenweste', 'Leinen-Outfit für Hochzeit oder Dinner in Antalya'],
      custom: ['Revers, Knöpfe und Taschen', 'Gefüttert oder ungefüttert für heiße Tage', 'Passform: klassisch oder locker', 'Passende Hose, Hemd oder Kleid aus demselben Stoff'],
      faq: [
        ['Kann ich einen Leinenanzug für eine Hochzeit in Antalya anfertigen lassen?', 'Ja. Nennen Sie uns Termin der Feier und Abreisedatum per WhatsApp; wir bestätigen, ob der Zeitplan passt. Sakko und Hose richten sich nach Modell und Stückzahl; wir nennen die Dauer vorab.'],
        ['Ist Leinen für formelle Anlässe zu leger?', 'Ein gut geschnittenes Leinensakko in Sand, Hellblau oder Marine ist eine übliche Wahl für Sommerhochzeiten und Dinner am Meer. Bei Farbe und Schnitt beraten wir Sie.'],
        ['Wird das Sakko gefüttert?', 'Sie entscheiden: ungefüttert oder halbgefüttert für heiße Tage oder vollgefüttert. Wir beraten je nach Stoff und Tragesituation.'],
        ['Können Sie ein bereits gekauftes Sakko ändern?', 'Ja. Ärmel kürzen und Sakko enger machen sind am nächsten Tag fertig. Details auf unserer Seite zu Änderungen.'],
        ['Was kostet ein Leinensakko nach Maß?', `Der Preis hängt von Sakkotyp, Stoff und Futter ab und wird vor dem Nähen per WhatsApp bestätigt.`],
      ],
    },
    ru: {
      name: 'Льняной пиджак и костюм',
      h1: 'Льняной пиджак и летний костюм на заказ в Анталье',
      title: 'Льняной пиджак и летний костюм на заказ в Анталье',
      desc: `Льняные и льняно-хлопковые пиджаки и летние костюмы по вашим меркам в Анталье — для свадьбы, ужина и отпуска. Срок зависит от модели и количества изделий. Terzi Can.`,
      keywords: ['льняной пиджак на заказ Анталья', 'льняной костюм на заказ Анталья', 'летний костюм по меркам Турция', 'костюм на свадьбу Анталья пошив', 'женский льняной жакет на заказ', 'мужской льняной костюм портной Анталья', 'индивидуальный пошив пиджака туристам'],
      lead: `Льняной пиджак или летний костюм в Terzi Can шьётся по вашим меркам из натурального льна или льняно-хлопковой ткани — срок зависит от модели и количества изделий. В пиджаке больше деталей, чем в рубашке, поэтому сообщите дату заранее — мы подтвердим сроки.`,
      styles: ['Мужской льняной пиджак без жёсткой подкладки', 'Женский льняной жакет', 'Летний костюм: пиджак и брюки из одной ткани', 'Льняной жилет', 'Льняной образ для свадьбы или ужина в Анталье'],
      custom: ['Лацканы, пуговицы и карманы', 'На подкладке или без — для жаркой погоды', 'Посадка: классическая или свободная', 'Брюки, рубашка или платье из той же ткани'],
      faq: [
        ['Можно сшить льняной костюм на свадьбу в Анталье?', 'Да. Напишите в WhatsApp дату мероприятия и дату отъезда — подтвердим, получится ли по срокам. Пиджак и брюки срок зависит от модели и количества изделий; и заранее скажем, если потребуется больше времени.'],
        ['Не слишком ли лён небрежен для торжественных случаев?', 'Хорошо скроенный льняной пиджак песочного, голубого или тёмно-синего тона — привычный выбор для летних свадеб и ужинов у моря. Поможем с цветом и кроем.'],
        ['Будет ли пиджак на подкладке?', 'Вы решаете: без подкладки или на половинной — для жары, либо на полной. Посоветуем с учётом ткани и того, как вы будете носить пиджак.'],
        ['Можно подогнать уже купленный пиджак?', 'Да. Укорачивание рукавов и ушивание пиджака делаем на следующий день. Подробности — на странице подгонки одежды.'],
        ['Сколько стоит льняной пиджак на заказ?', `Цена зависит от типа пиджака, ткани и подкладки, подтверждаем её в WhatsApp до пошива.`],
      ],
    },
  },

  // ───────────────────────── ÇOCUK ─────────────────────────
  kids: {
    en: {
      name: 'Kids\' linen clothing',
      h1: 'Kids\' Linen & Cotton Clothing Made to Measure in Antalya',
      title: 'Kids\' Linen Clothing Antalya — Made to Measure',
      desc: `Linen and cotton clothes for boys and girls made to measure in Antalya: shirts, shorts, dresses, dungarees, matching family outfits. Timing depends on the model and number of pieces.`,
      keywords: ['kids linen clothing Antalya', 'children linen clothes made to measure Turkey', 'tailor made kids dress Antalya', 'boys linen shirt custom Antalya', 'matching family outfits linen Antalya', 'girls linen dress made to measure', 'children clothing tailor Antalya holiday'],
      lead: `Terzi Can makes linen and cotton clothes for children to measure — shirts and shorts for boys, summer dresses and dungarees for girls, or matching outfits for the whole family. Timing depends on the model and number of pieces.`,
      styles: ['Boys\' linen shirt and shorts set', 'Girls\' summer dress with thin straps or short sleeves', 'Linen dungarees (overalls)', 'Matching family outfits', 'Light cotton shirts and tops'],
      custom: ['Fabric and colour — soft natural tones or brighter shades, depending on stock', 'Room to grow: slightly longer hems or adjustable straps', 'Matching colours with parents\' outfits', 'Easy-to-wear details such as elastic waists and simple closures'],
      faq: [
        ['Can you measure my child at the hotel?', 'Yes. Hotel service is free in every area we serve, so we can measure the whole family at your hotel, or you can visit the workshop in Konyaaltı.'],
        ['How long does children\'s clothing take?', 'Timing depends on the model and number of pieces. If you order for the whole family, tell us the number of pieces and your departure date so we can confirm the schedule.'],
        ['Can the outfits match what the parents order?', 'Yes. We can make shirts, dresses and shorts in matching fabrics and colours for the whole family — a pleasant holiday keepsake.'],
        ['Children grow — can you allow for that?', 'We can add a little room, for example slightly longer hems or adjustable straps, depending on the style. Tell us how long you want the piece to last.'],
        ['What does children\'s clothing cost?', `Depending on the item and fabric; confirmed on WhatsApp before sewing.`],
      ],
    },
    de: {
      name: 'Kinder-Leinenkleidung',
      h1: 'Kinder-Leinenkleidung nach Maß in Antalya',
      title: 'Kinder-Leinenkleidung nach Maß Antalya — nach Maß',
      desc: `Leinen- und Baumwollkleidung für Jungen und Mädchen nach Maß in Antalya: Hemden, Shorts, Kleider, Latzhosen, Partnerlook. Die Dauer richtet sich nach Modell und Stückzahl.`,
      keywords: ['Kinder Leinenkleidung Antalya', 'Kinderkleidung nach Maß Türkei', 'Kinderkleid Maßanfertigung Antalya', 'Jungen Leinenhemd nach Maß', 'Partnerlook Familie Leinen Antalya', 'Mädchen Leinenkleid Schneider Antalya', 'Kinder Urlaub Schneider Antalya'],
      lead: `Terzi Can fertigt Leinen- und Baumwollkleidung für Kinder nach Maß — Hemden und Shorts für Jungen, Sommerkleider und Latzhosen für Mädchen oder Partnerlook für die ganze Familie. Die Dauer richtet sich nach Modell und Stückzahl fertig.`,
      styles: ['Leinenhemd mit Shorts für Jungen', 'Sommerkleid für Mädchen mit dünnen Trägern oder kurzen Ärmeln', 'Leinen-Latzhose', 'Partnerlook für die ganze Familie', 'Leichte Baumwollhemden und -tops'],
      custom: ['Stoff und Farbe — sanfte Naturtöne oder kräftigere Farben, je nach Vorrat', 'Wachstumsreserve: etwas längerer Saum oder verstellbare Träger', 'Passende Farben zu den Outfits der Eltern', 'Praktische Details wie Gummizug und einfache Verschlüsse'],
      faq: [
        ['Können Sie mein Kind im Hotel ausmessen?', 'Ja. Der Hotelservice ist in allen Gebieten, die wir bedienen, kostenlos; wir messen die ganze Familie im Hotel aus, oder Sie besuchen die Werkstatt in Konyaaltı.'],
        ['Wie lange dauert Kinderkleidung?', 'Die Dauer richtet sich nach Modell und Stückzahl. Bei Bestellungen für die ganze Familie nennen Sie uns Stückzahl und Abreisedatum, dann bestätigen wir den Zeitplan.'],
        ['Können die Outfits zu denen der Eltern passen?', 'Ja. Hemden, Kleider und Shorts lassen sich in passenden Stoffen und Farben für die ganze Familie fertigen — ein schönes Urlaubsandenken.'],
        ['Kinder wachsen — können Sie das berücksichtigen?', 'Je nach Modell planen wir etwas Reserve ein, etwa einen längeren Saum oder verstellbare Träger. Sagen Sie uns, wie lange das Stück getragen werden soll.'],
        ['Was kostet Kinderkleidung nach Maß?', `Je nach Artikel und Stoff; vor dem Nähen per WhatsApp bestätigt.`],
      ],
    },
    ru: {
      name: 'Детская льняная одежда',
      h1: 'Детская одежда из льна и хлопка на заказ в Анталье',
      title: 'Детская льняная одежда на заказ в Анталье — на заказ',
      desc: `Льняная и хлопковая одежда для мальчиков и девочек на заказ в Анталье: рубашки, шорты, платья, комбинезоны, семейные комплекты. Срок зависит от модели и количества изделий.`,
      keywords: ['детская льняная одежда Анталья', 'пошив детской одежды на заказ Турция', 'детское платье на заказ Анталья', 'льняная рубашка для мальчика на заказ', 'одинаковые наряды для семьи лён Анталья', 'льняное платье для девочки на заказ', 'портной Анталья детская одежда туристам'],
      lead: `Terzi Can шьёт детскую одежду из льна и хлопка по меркам — рубашки и шорты для мальчиков, летние платья и комбинезоны для девочек или одинаковые наряды для всей семьи. Срок зависит от модели и количества изделий после снятия мерок.`,
      styles: ['Льняной комплект для мальчика: рубашка и шорты', 'Летнее платье для девочки на тонких бретелях или с коротким рукавом', 'Льняной комбинезон', 'Одинаковые наряды для всей семьи', 'Лёгкие хлопковые рубашки и топы'],
      custom: ['Ткань и цвет — мягкие натуральные тона или более яркие оттенки, в зависимости от наличия', 'Запас на рост: чуть длиннее подол или регулируемые бретели', 'Цвета в тон нарядам родителей', 'Удобные детали: резинка в поясе, простые застёжки'],
      faq: [
        ['Можно снять мерки с ребёнка в отеле?', 'Да. Забор и доставка в отели бесплатны во всех районах, которые мы обслуживаем: снимем мерки со всей семьи у вас в отеле, либо приезжайте в ателье в Коньяалты.'],
        ['Сколько занимает пошив детской одежды?', 'Срок зависит от модели и количества изделий. Если заказываете для всей семьи, напишите количество вещей и дату отъезда — подтвердим сроки.'],
        ['Можно сшить наряды в тон одежде родителей?', 'Да. Рубашки, платья и шорты можно сшить из подходящих тканей и цветов для всей семьи — приятная память об отпуске.'],
        ['Дети растут — можно учесть это?', 'В зависимости от модели закладываем небольшой запас: например, чуть длиннее подол или регулируемые бретели. Скажите, как долго вы хотите носить вещь.'],
        ['Сколько стоит детская одежда на заказ?', `В зависимости от изделия и ткани; подтверждаем в WhatsApp до пошива.`],
      ],
    },
  },
};

// ── Hub içeriği ─────────────────────────────────────────────
export interface HubCopy {
  title: string; desc: string; keywords: string[];
  h1a: string; h1b: string; lead: string;
  designH: string; designP: string;
  altH: string; altP: string; altBtn: string;
  faq: [string, string][];
  related: string; // kısa
}

export const HUB_COPY: L3<HubCopy> = {
  en: {
    title: `Custom Linen Clothing Antalya — Made to Measure`,
    desc: `Custom & serial linen and cotton clothing in Antalya: shirts, dresses, trousers, jackets, kids. Timing depends on the model and number of pieces. Terzi Can, Konyaaltı.`,
    keywords: ['custom linen clothing Antalya', 'made to measure linen Antalya', 'tailor made clothes Antalya tourists', 'linen dress made to measure Antalya', 'linen shirt tailor Antalya', 'souvenir from Antalya clothing', 'bespoke linen clothing Turkey holiday', 'tailor Antalya made to measure', 'clothing alterations Antalya tourists', 'tailor Konyaaltı', 'natural fabric clothing Antalya', 'linen cotton tailor Antalya', 'serial production linen clothing Turkey', 'custom linen clothing production', 'linen clothing manufacturer Antalya', 'linen clothing manufacturer Turkey', 'custom linen clothing production Turkey', 'linen pattern making Turkey', 'contract sewing linen cotton clothing Turkey', 'private label linen clothing Turkey', 'linen clothing ship to Europe',
      'mens linen shirt made to measure', 'womens linen dress made to order', 'linen shorts and skirt made to measure', 'natural fabric clothing custom made',
      'custom linen clothing worldwide shipping', 'linen clothing international shipping from Turkey', 'made to measure linen single piece or bulk order'],
    h1a: 'Custom Linen & Cotton Clothing', h1b: 'Made for you in Antalya',
    lead: `Terzi Can makes shirts, dresses, trousers, jackets and children's clothing to your measurements in natural linen and cotton. Timing for your piece depends on the model and number of pieces. It is a souvenir from Antalya you can actually wear — and if you bought clothes here that don't fit, we alter them the next day, and in urgent cases within 1–2 hours. We make it for men and women, as a single piece or in series, and ship across Turkey and worldwide.`,
    designH: 'Your idea, made to measure',
    designP: 'Choose one of the models or bring a photo of what you imagine. We adapt the design to you — cut, length, neckline, pockets and fabric — and sew it in our own workshop in Konyaaltı. Everything is made for your body, not off the rack.',
    altH: 'Bought something that doesn\'t fit?', altP: 'We shorten hems, take in waists and sides, adjust sleeves and repair zippers for visitors every day. Ready the next day; urgent jobs take 1–2 hours.', altBtn: 'Alterations for tourists',
    faq: [
      ['Can I get custom linen clothing made during a holiday in Antalya?', `Yes. Terzi Can in Konyaaltı makes linen and cotton clothing to your measurements, timing depends on the model and number of pieces. Start early in your holiday and tell us your departure date on WhatsApp.`],
      ['How much does custom linen clothing cost?', `The final price depends on the garment, the fabric and the design, and is confirmed on WhatsApp before we start sewing.`],
      ['Do you take measurements at my hotel?', 'Yes. Hotel service is free in every area we serve, so we can measure you at your hotel. You can also visit our workshop in Hurma, Konyaaltı.'],
      ['Can you make something from a photo or my own design?', 'Yes. Send a photo or describe your idea on WhatsApp. We adapt it to your measurements and suggest a suitable fabric.'],
      ['Which garments can I order?', 'Shirts, dresses, trousers, shorts, jackets and summer suits for men and women, and clothing for children — in natural linen and cotton fabrics.'],
      ['Do you also alter clothes I bought in Antalya?', 'Yes. Hemming, waist and side taking-in, sleeve shortening and repairs are ready the next day. In urgent cases we can often finish in 1–2 hours; we confirm on WhatsApp.'],
      ['Where are you and when are you open?', 'Terzi Can is in Hurma Mahallesi, Konyaaltı, Antalya, and open every day from 08:00 to 23:00. We have been working since 2006 and answer WhatsApp messages in your language.'],
    ],
    related: 'Linen & cotton clothing',
  },
  de: {
    title: `Leinenkleidung nach Maß in Antalya — nach Maß`,
    desc: `Leinen- & Baumwollkleidung nach Maß und in Serie in Antalya: Hemden, Kleider, Hosen, Sakkos, Kinder. Dauer nach Modell und Stückzahl. Terzi Can, Konyaaltı.`,
    keywords: ['Leinenkleidung nach Maß Antalya', 'Maßschneider Antalya Urlaub', 'Kleidung maßschneidern lassen Antalya', 'Leinenkleid Maßanfertigung Antalya', 'Leinenhemd Schneider Antalya', 'Souvenir Antalya Kleidung', 'Maßanfertigung Türkei Urlaub Leinen', 'Schneider Antalya nach Maß', 'Kleidung ändern lassen Antalya Urlaub', 'Schneider Konyaaltı', 'Naturstoff Kleidung Antalya', 'Leinen Baumwolle Schneider Antalya', 'Leinenkleidung Serienproduktion Türkei', 'Leinenkleidung Hersteller Antalya', 'Leinenkleidung Sonderanfertigung Serie', 'Leinenkleidung Hersteller Türkei', 'Leinenbekleidung Produktion Türkei', 'Schnittmuster Leinenkleidung Türkei', 'Lohnfertigung Leinen Baumwolle Türkei', 'Private Label Leinenkleidung Türkei', 'Leinenkleidung Versand Europa',
      'Damen Leinenkleid nach Maß', 'Herren Leinenhemd nach Maß', 'Leinenrock nach Maß', 'Leinenshorts nach Maß', 'Naturstoff Kleidung nach Maß',
      'Leinenkleidung nach Maß Versand weltweit', 'Leinenkleidung aus der Türkei Versand', 'Einzelstück oder Serie Leinenkleidung nach Maß'],
    h1a: 'Leinen- & Baumwollkleidung nach Maß', h1b: 'In Antalya für Sie gefertigt — die Dauer richtet sich nach Modell und Stückzahln',
    lead: `Terzi Can fertigt Hemden, Kleider, Hosen, Sakkos und Kinderkleidung nach Ihren Maßen aus natürlichem Leinen und Baumwolle. Ihr Stück ist die Dauer richtet sich nach Modell und Stückzahln fertig. Ein Souvenir aus Antalya, das Sie wirklich tragen — und wenn Sie hier gekaufte Kleidung ändern lassen möchten, erledigen wir das am nächsten Tag, in dringenden Fällen in 1–2 Stunden. Wir fertigen für Damen und Herren, als Einzelstück oder in Serie, und versenden in der Türkei und weltweit.`,
    designH: 'Ihre Idee, nach Maß gefertigt',
    designP: 'Wählen Sie eines der Modelle oder bringen Sie ein Foto Ihrer Vorstellung mit. Wir passen das Design an Sie an — Schnitt, Länge, Ausschnitt, Taschen und Stoff — und nähen es in unserer eigenen Werkstatt in Konyaaltı. Alles wird für Ihren Körper gefertigt, nicht von der Stange.',
    altH: 'Etwas gekauft, das nicht passt?', altP: 'Wir kürzen Säume, machen Taillen und Seiten enger, ändern Ärmel und reparieren Reißverschlüsse — täglich für Urlauber. In der Regel am nächsten Tag; dringende Aufträge in 1–2 Stunden.', altBtn: 'Änderungen für Urlauber',
    faq: [
      ['Kann ich im Urlaub in Antalya Leinenkleidung nach Maß anfertigen lassen?', `Ja. Terzi Can in Konyaaltı fertigt Leinen- und Baumwollkleidung nach Ihren Maßen, die Dauer richtet sich nach Modell und Stückzahln. Kommen Sie früh im Urlaub und nennen Sie uns Ihr Abreisedatum per WhatsApp.`],
      ['Was kostet Leinenkleidung nach Maß?', `Der Endpreis hängt von Kleidungsstück, Stoff und Design ab und wird vor dem Nähen per WhatsApp bestätigt.`],
      ['Nehmen Sie bei mir im Hotel Maß?', 'Ja. Der Hotelservice ist in allen Gebieten, die wir bedienen, kostenlos; wir messen Sie im Hotel aus. Sie können auch unsere Werkstatt in Hurma, Konyaaltı besuchen.'],
      ['Können Sie nach Foto oder eigenem Entwurf nähen?', 'Ja. Senden Sie ein Foto oder beschreiben Sie Ihre Idee per WhatsApp. Wir passen sie Ihren Maßen an und schlagen einen passenden Stoff vor.'],
      ['Welche Kleidungsstücke kann ich bestellen?', 'Hemden, Kleider, Hosen, Shorts, Sakkos und Sommeranzüge für Damen und Herren sowie Kinderkleidung — aus natürlichen Leinen- und Baumwollstoffen.'],
      ['Ändern Sie auch Kleidung, die ich in Antalya gekauft habe?', 'Ja. Kürzen, Taille und Seiten enger machen, Ärmel kürzen und Reparaturen sind am nächsten Tag fertig. In dringenden Fällen oft in 1–2 Stunden am selben Tag; wir bestätigen per WhatsApp.'],
      ['Wo sind Sie und wann haben Sie geöffnet?', 'Terzi Can befindet sich in Hurma Mahallesi, Konyaaltı, Antalya, täglich von 08:00 bis 23:00 Uhr geöffnet. Wir arbeiten seit 2006 und sprechen Deutsch, Englisch, Russisch und Türkisch.'],
    ],
    related: 'Leinen- & Baumwollkleidung',
  },
  ru: {
    title: `Пошив из льна в Анталье на заказ — на заказ`,
    desc: `Пошив одежды из льна и хлопка на заказ и серийно в Анталье: рубашки, платья, брюки, пиджаки, дети. Срок зависит от модели и количества изделий. Terzi Can.`,
    keywords: ['пошив одежды из льна Анталья', 'индивидуальный пошив Анталья туристам', 'пошив на заказ Анталья на заказ', 'льняное платье на заказ Анталья', 'льняная рубашка на заказ Анталья', 'сувенир из Анталии одежда', 'ателье Анталья туристам', 'подгонка одежды Анталья срочно', 'портной Коньяалты', 'одежда из натуральных тканей Анталья', 'лён хлопок ателье Анталья', 'серийное производство одежды из льна Турция', 'производство льняной одежды Анталья', 'индивидуальный и серийный пошив лён', 'производитель льняной одежды Турция', 'пошив льняной одежды серийно Турция', 'лекала льняная одежда Турция', 'контрактное производство лён хлопок Турция', 'одежда из льна под своей маркой Турция', 'льняная одежда доставка в Россию',
      'мужская льняная рубашка на заказ', 'женская льняная одежда на заказ', 'льняная юбка на заказ', 'льняные шорты на заказ', 'одежда из натуральных тканей на заказ',
      'льняная одежда на заказ с доставкой', 'доставка льняной одежды из Турции за границу', 'пошив одной вещи или серии из льна'],
    h1a: 'Одежда из льна и хлопка на заказ', h1b: 'Шьём для вас в Анталье — срок зависит от модели и количества изделий',
    lead: `Terzi Can шьёт рубашки, платья, брюки, пиджаки и детскую одежду по вашим меркам из натурального льна и хлопка. Срок изделия зависит от модели и количества. Это сувенир из Антальи, который действительно можно носить. А если вы купили здесь вещи, которые не сидят, мы подгоним их готово на следующий день, в срочных случаях часто за 1–2 часа. Шьём для мужчин и женщин, одну вещь или серию, отправляем по Турции и за рубеж.`,
    designH: 'Ваша идея — по вашим меркам',
    designP: 'Выберите одну из моделей или принесите фото того, что вы представляете. Мы адаптируем дизайн под вас — крой, длину, вырез, карманы и ткань — и сошьём в нашем ателье в Коньяалты. Всё шьётся на вашу фигуру, а не снимается с вешалки.',
    altH: 'Купили вещь, которая не сидит?', altP: 'Каждый день подшиваем низ, ушиваем талию и бока, подгоняем рукава и меняем молнии для туристов. На следующий день; срочные заказы — за 1–2 часа.', altBtn: 'Подгонка одежды туристам',
    faq: [
      ['Можно ли сшить одежду из льна на заказ во время отпуска в Анталье?', `Да. Ателье Terzi Can в Коньяалты шьёт одежду из льна и хлопка по вашим меркам, срок зависит от модели и количества изделий. Приходите в начале отпуска и напишите дату отъезда в WhatsApp.`],
      ['Сколько стоит индивидуальный пошив из льна?', `Итоговая цена зависит от изделия, ткани и дизайна и подтверждается в WhatsApp до начала пошива.`],
      ['Снимаете ли вы мерки в отеле?', 'Да. Забор и доставка в отели бесплатны во всех районах, которые мы обслуживаем — снимем мерки у вас в отеле. Можно также приехать в ателье в Хурма, Коньяалты.'],
      ['Можно сшить по фото или по моему эскизу?', 'Да. Пришлите фото или опишите идею в WhatsApp. Мы адаптируем её под ваши мерки и предложим подходящую ткань.'],
      ['Что можно заказать?', 'Рубашки, платья, брюки, шорты, пиджаки и летние костюмы для мужчин и женщин, а также детскую одежду — из натуральных тканей: льна и хлопка.'],
      ['Подгоняете ли вы одежду, купленную в Анталье?', 'Да. Подшив, ушивание талии и боков, укорачивание рукавов и ремонт готово на следующий день. В срочных случаях часто успеваем за 1–2 часа; подтверждаем в WhatsApp.'],
      ['Где вы находитесь и когда работаете?', 'Terzi Can находится в районе Хурма, Коньяалты, Анталья, и работает ежедневно с 08:00 до 23:00. Мы работаем с 2006 года и пишите в WhatsApp на своём языке.'],
    ],
    related: 'Одежда из льна и хлопка',
  },
};

// ── Ekspres tadilat sayfası ─────────────────────────────────
export interface ExpressCopy {
  title: string; desc: string; keywords: string[];
  h1: string; lead: string;
  listH: string; list: [string, string][];
  urgentH: string; urgentSteps: [string, string][]; urgentNote: string;
  priceH: string; priceP: string;
  faq: [string, string][];
  glance: { std: string; urgent: string; price: string; pickup: string };
  glanceLabels: { std: string; urgent: string; price: string; pickup: string };
  customLink: string; customLinkP: string;
}

export const EXPRESS_COPY: L3<ExpressCopy> = {
  en: {
    title: 'Tourist Clothing Alterations Antalya — Next Day, Urgent 1–2 Hours',
    desc: 'Clothes don\'t fit? Hemming, waist, sleeves and repairs in Antalya. Ready the next day, urgent 1–2 hours. Hotel pick-up. Terzi Can, Konyaaltı.',
    keywords: ['clothing alterations Antalya tourists', 'urgent tailor Antalya', 'urgent alterations Antalya', 'trouser hemming Antalya holiday', 'waist taking in Antalya', 'tailor near me Antalya hotel', 'fix clothes bought in Antalya', 'dress alteration Antalya urgent', 'tailor Konyaaltı'],
    h1: 'Clothing Alterations for Tourists in Antalya',
    lead: 'Holiday shopping in Antalya and something doesn\'t fit? Terzi Can shortens hems, takes in waists and sides, adjusts sleeves and fixes zippers. Most jobs are ready the next day; in urgent cases we can often finish in 1–2 hours. We can also collect from and deliver to your hotel.',
    listH: 'What we alter', list: [
      ['Trouser and jeans hemming', 'Length set to your height, from ₺200.'],
      ['Waist taking-in', 'Trousers, skirts and shorts that are too wide at the waist, from ₺200.'],
      ['Dresses and skirts', 'Length, sides, straps and fit.'],
      ['Shirts and tops', 'Taking in, shortening and sleeve length.'],
      ['Jackets and suits', 'Sleeves, sides and fit.'],
      ['Zippers, buttons and small tears', 'Zipper replacement from ₺300.'],
    ],
    urgentH: 'Urgent? How it works',
    urgentSteps: [
      ['Send a photo', 'Photo of the garment, what needs doing and your hotel name on WhatsApp.'],
      ['We confirm', 'We tell you the price and the realistic time before we start.'],
      ['Drop-off or pick-up', 'Bring it to Konyaaltı or ask for pick-up at your hotel.'],
      ['Ready', 'Next day; urgent jobs take 1–2 hours.'],
    ],
    urgentNote: 'Urgent timing depends on that day\'s workload, so we always confirm it on WhatsApp before taking the job.',
    priceH: 'Prices', priceP: 'Starting prices: trouser hemming from ₺200, waist alteration from ₺200, zipper replacement from ₺300. The exact price depends on the garment and the work, and we quote it on WhatsApp from your photo.',
    glance: { std: 'Ready the next day.', urgent: 'Urgent jobs take 1–2 hours; confirmed on WhatsApp.', price: 'Hemming from ₺200 · waist from ₺200 · zipper from ₺300.', pickup: 'Hotel pick-up and delivery on request (hotel service is free).' },
    glanceLabels: { std: 'Standard', urgent: 'Urgent', price: 'Prices', pickup: 'Pick-up' },
    faq: [
      ['How fast can you alter clothes I bought in Antalya?', 'Most alterations are ready the next day. In urgent cases we can often finish in 1–2 hours. We confirm the exact time on WhatsApp before we start.'],
      ['Can you collect from my hotel?', 'Yes. Hotel service is free in every area we serve. Send your hotel name and location on WhatsApp.'],
      ['How much does hemming trousers cost?', 'Trouser hemming starts from ₺200. We confirm the final price from your photo on WhatsApp.'],
      ['Can you alter clothes I bought in a shop or bazaar?', 'Yes. We alter clothes regardless of where you bought them. Send a photo and tell us what you want changed.'],
      ['Can you take in a dress or skirt for an evening event?', 'Yes. Tell us the date of the event and we confirm the timing. Wedding and evening dresses are quoted per job.'],
      ['Do you also make clothes from scratch?', `Yes — custom linen and cotton clothing, timing depends on the model and number of pieces. See our linen & cotton tailoring page.`],
    ],
    customLink: 'Want something made from scratch?', customLinkP: `Custom linen and cotton clothing, timing depends on the model and number of pieces.`,
  },
  de: {
    title: 'Kleidung ändern im Urlaub Antalya — am nächsten Tag, eilig 1–2 Stunden',
    desc: 'Kleidung passt nicht? Kürzen, Taille, Ärmel und Reparaturen in Antalya. Meist am nächsten Tag, eilig 1–2 Stunden. Hotelabholung. Terzi Can, Konyaaltı.',
    keywords: ['Kleidung ändern Antalya Urlaub', 'Schneider Antalya dringend', 'Änderungsschneiderei Antalya Touristen', 'Hose kürzen Antalya Urlaub', 'Taille enger machen Antalya', 'Schneider Hotel Antalya Abholung', 'Kleid ändern Antalya eilig', 'Schneider Konyaaltı'],
    h1: 'Kleidung ändern im Urlaub in Antalya',
    lead: 'Im Urlaub in Antalya eingekauft und etwas passt nicht? Terzi Can kürzt Säume, macht Taillen und Seiten enger, ändert Ärmel und repariert Reißverschlüsse. Die meisten Aufträge sind am nächsten Tag fertig; in dringenden Fällen in 1–2 Stunden. Auf Wunsch holen wir die Kleidung im Hotel ab und liefern sie zurück.',
    listH: 'Was wir ändern', list: [
      ['Hose und Jeans kürzen', 'Länge auf Ihre Körpergröße, ab ₺200.'],
      ['Taille enger machen', 'Hosen, Röcke und Shorts, die im Bund zu weit sind, ab ₺200.'],
      ['Kleider und Röcke', 'Länge, Seiten, Träger und Passform.'],
      ['Hemden und Oberteile', 'Enger machen, kürzen und Ärmellänge.'],
      ['Sakkos und Anzüge', 'Ärmel, Seiten und Passform.'],
      ['Reißverschlüsse, Knöpfe und kleine Risse', 'Reißverschluss wechseln ab ₺300.'],
    ],
    urgentH: 'Eilig? So läuft es ab',
    urgentSteps: [
      ['Foto senden', 'Foto des Kleidungsstücks, gewünschte Änderung und Hotelname per WhatsApp.'],
      ['Wir bestätigen', 'Wir nennen Preis und realistische Zeit, bevor wir beginnen.'],
      ['Bringen oder abholen lassen', 'Bringen Sie es nach Konyaaltı oder bitten Sie um Abholung im Hotel.'],
      ['Fertig', 'In der Regel am nächsten Tag; dringende Aufträge in 1–2 Stunden.'],
    ],
    urgentNote: 'Die Zeit bei dringenden Aufträgen hängt von der Auslastung des Tages ab; deshalb bestätigen wir sie vorab immer per WhatsApp.',
    priceH: 'Preise', priceP: 'Preise ab: Hose kürzen ab ₺200, Taille ändern ab ₺200, Reißverschluss wechseln ab ₺300. Der genaue Preis hängt von Kleidungsstück und Arbeit ab; wir nennen ihn per WhatsApp anhand Ihres Fotos.',
    glance: { std: 'In der Regel am nächsten Tag.', urgent: 'Eilaufträge 1–2 Stunden; per WhatsApp bestätigt.', price: 'Kürzen ab ₺200 · Taille ab ₺200 · Reißverschluss ab ₺300.', pickup: 'Abholung und Lieferung im Hotel auf Wunsch (Hotelservice kostenlos).' },
    glanceLabels: { std: 'Standard', urgent: 'Dringend', price: 'Preise', pickup: 'Abholung' },
    faq: [
      ['Wie schnell ändern Sie in Antalya gekaufte Kleidung?', 'Die meisten Änderungen sind am nächsten Tag fertig. In dringenden Fällen oft in 1–2 Stunden am selben Tag. Die genaue Zeit bestätigen wir vorab per WhatsApp.'],
      ['Können Sie die Kleidung im Hotel abholen?', 'Ja. Der Hotelservice ist in allen Gebieten, die wir bedienen, kostenlos. Senden Sie Hotelname und Standort per WhatsApp.'],
      ['Was kostet das Kürzen einer Hose?', 'Hose kürzen ab ₺200. Den Endpreis bestätigen wir per WhatsApp anhand Ihres Fotos.'],
      ['Ändern Sie auch Kleidung aus dem Laden oder Basar?', 'Ja, unabhängig davon, wo Sie sie gekauft haben. Senden Sie ein Foto und sagen Sie uns, was geändert werden soll.'],
      ['Können Sie ein Kleid oder einen Rock für einen Abend enger machen?', 'Ja. Nennen Sie uns den Termin der Veranstaltung, dann bestätigen wir den Zeitplan. Hochzeits- und Abendkleider werden je Auftrag kalkuliert.'],
      ['Fertigen Sie auch Kleidung von Grund auf?', `Ja — Leinen- und Baumwollkleidung nach Maß, die Dauer richtet sich nach Modell und Stückzahln. Siehe unsere Seite Leinen & Baumwolle Schneiderei.`],
    ],
    customLink: 'Lieber etwas ganz Neues?', customLinkP: `Leinen- und Baumwollkleidung nach Maß, die Dauer richtet sich nach Modell und Stückzahln.`,
  },
  ru: {
    title: 'Подгонка одежды туристам в Анталье — на следующий день, срочно',
    desc: 'Купили вещь, а она не сидит? Подшив, ушивание талии, рукава и ремонт в Анталье. На следующий день, срочно 1–2 часа. Забор из отеля. Terzi Can, Коньяалты.',
    keywords: ['подгонка одежды Анталья туристам', 'срочный портной Анталья', 'ателье Анталья срочно', 'подшить брюки Анталья отпуск', 'ушить талию Анталья', 'портной в отель Анталья', 'переделка платья Анталья срочно', 'портной Коньяалты'],
    h1: 'Подгонка одежды туристам в Анталье',
    lead: 'Купили в Анталье одежду, а она не сидит? Terzi Can подшивает низ, ушивает талию и бока, подгоняет рукава и меняет молнии. Большинство работ готовы на следующий день; в срочных случаях — за 1–2 часа. По желанию заберём вещи из отеля и вернём обратно.',
    listH: 'Что мы подгоняем', list: [
      ['Подшив брюк и джинсов', 'Длина по вашему росту, от ₺200.'],
      ['Ушивание талии', 'Брюки, юбки и шорты, которые велики в поясе, от ₺200.'],
      ['Платья и юбки', 'Длина, бока, бретели и посадка.'],
      ['Рубашки и топы', 'Ушивание, укорачивание и длина рукавов.'],
      ['Пиджаки и костюмы', 'Рукава, бока и посадка.'],
      ['Молнии, пуговицы и небольшие разрывы', 'Замена молнии от ₺300.'],
    ],
    urgentH: 'Срочно? Как это работает',
    urgentSteps: [
      ['Пришлите фото', 'Фото вещи, что нужно сделать, и название отеля — в WhatsApp.'],
      ['Мы подтверждаем', 'Назовём цену и реальный срок до начала работы.'],
      ['Принесите или закажите забор', 'Привезите в Коньяалты или закажите забор из отеля.'],
      ['Готово', 'На следующий день; срочные заказы — за 1–2 часа.'],
    ],
    urgentNote: 'Срок для срочных заказов зависит от загрузки в этот день, поэтому всегда подтверждаем его в WhatsApp до начала работы.',
    priceH: 'Цены', priceP: 'Цены от: подшив брюк от ₺200, подгонка по талии от ₺200, замена молнии от ₺300. Точная цена зависит от вещи и работы — назовём её в WhatsApp по вашему фото.',
    glance: { std: 'На следующий день.', urgent: 'Срочные заказы — 1–2 часа; подтверждаем в WhatsApp.', price: 'Подшив от ₺200 · талия от ₺200 · молния от ₺300.', pickup: 'Забор и доставка в отель по запросу (забор из отелей бесплатный).' },
    glanceLabels: { std: 'Обычный срок', urgent: 'Срочно', price: 'Цены', pickup: 'Забор' },
    faq: [
      ['Как быстро вы подгоняете одежду, купленную в Анталье?', 'Обычные работы готовы на следующий день. В срочных случаях успеваем за 1–2 часа. Точное время подтверждаем в WhatsApp до начала работы.'],
      ['Можете забрать вещи из моего отеля?', 'Да. Забор и доставка в отели бесплатны во всех районах, которые мы обслуживаем. Пришлите в WhatsApp название отеля и локацию.'],
      ['Сколько стоит подшить брюки?', 'Подшив брюк от ₺200. Итоговую цену подтвердим в WhatsApp по вашему фото.'],
      ['Подгоняете ли вы вещи, купленные в магазине или на базаре?', 'Да, независимо от того, где вы их купили. Пришлите фото и скажите, что нужно изменить.'],
      ['Можно ушить платье или юбку для вечернего мероприятия?', 'Да. Сообщите дату мероприятия — подтвердим сроки. Свадебные и вечерние платья оцениваются индивидуально.'],
      ['Вы шьёте одежду с нуля?', `Да — одежда из льна и хлопка на заказ, срок зависит от модели и количества изделий. См. страницу «Пошив из льна и хлопка».`],
    ],
    customLink: 'Хотите сшить что-то новое?', customLinkP: `Одежда из льна и хлопка на заказ, срок зависит от модели и количества изделий.`,
  },
};

// ── JSON-LD / Metadata yardımcıları ─────────────────────────
export function businessNode(lang: TLang) {
  return {
    '@type': ['LocalBusiness', 'ClothingStore'],
    ...reviewSchema(),
    '@id': `${SITE}#business`,
    name: 'Terzi Can',
    url: SITE,
    telephone: PHONE_TEL,
    priceRange: '₺₺',
    image: OG_DEFAULT,
    hasMap: MAPS,
    address: {
      '@type': 'PostalAddress', streetAddress: 'Hurma Mahallesi', addressLocality: 'Konyaaltı',
      addressRegion: 'Antalya', postalCode: '07130', addressCountry: 'TR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 36.857466, longitude: 30.596987 },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00', closes: '23:00',
    }],
    foundingDate: '2006',
    knowsLanguage: ['tr', 'en', 'ru', 'de', 'pl', 'uk', 'nl', 'fr', 'es', 'ar'],
    availableLanguage: ['Turkish', 'English', 'Russian', 'German', 'Polish', 'Ukrainian', 'Dutch', 'French', 'Spanish', 'Arabic'],
    sameAs: [MAPS, `https://wa.me/${PHONE_TEL.replace('+', '')}`, 'https://swaphubs.com/terzi'],
    inLanguage: lang,
  };
}

const faqNode = (url: string, faq: [string, string][]) => ({
  '@type': 'FAQPage', '@id': `${url}#faq`,
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

const webPageNode = (lang: TLang, url: string, name: string, description: string, image: string) => ({
  '@type': 'WebPage', '@id': `${url}#webpage`, url, name, description, inLanguage: lang,
  about: { '@id': `${SITE}#business` }, primaryImageOfPage: { '@type': 'ImageObject', url: image },
  dateModified: TURIST_UPDATE,
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-h', '.hero-desc'] },
});

const crumbNode = (url: string, crumbs: { name: string; item: string }[]) => ({
  '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
});

const priceOffer = (url: string) => ({
  '@type': 'Offer', url, priceCurrency: 'EUR',
});

/** Hub: kendi BreadcrumbList'i YOK — IcerikHaritasi (BREADCRUMB_PAGES) üretiyor. */
export function hubJsonLd(lang: TLang) {
  const url = abs(hubUrl(lang));
  const c = HUB_COPY[lang];
  const u = UI[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode(lang),
      webPageNode(lang, url, c.title, c.desc, OG_DEFAULT),
      {
        '@type': 'Service', '@id': `${url}#service`, name: u.hubName, serviceType: 'Made-to-measure clothing',
        provider: { '@id': `${SITE}#business` },
        areaServed: { '@type': 'AdministrativeArea', name: 'Antalya' },
        description: c.desc, offers: priceOffer(url),
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: url, servicePhone: PHONE_TEL },
        hasOfferCatalog: {
          '@type': 'OfferCatalog', name: u.hubName,
          itemListElement: PRODUCT_IDS.map((p) => ({
            '@type': 'Offer', itemOffered: { '@type': 'Service', name: PRODUCTS[p][lang].name, url: abs(productUrl(lang, p)) },
          })),
        },
      },
      {
        '@type': 'Service', '@id': `${url}#production`, name: `${u.hubName}: serial & contract production`,
        serviceType: 'Garment production (pattern making, samples, serial and contract production)',
        provider: { '@id': `${SITE}#business` },
        areaServed: [{ '@type': 'Place', name: 'Europe' }, { '@type': 'Country', name: 'Russia' }, { '@type': 'Country', name: 'Türkiye' }],
        description: 'Linen and cotton clothing for men, women and kids: pattern making, samples, serial and contract production, shipped to Europe, Russia and other countries. Quantity and price per project.',
      },
      faqNode(url, c.faq),
    ],
  };
}

export function productJsonLd(lang: TLang, p: ProductId) {
  const url = abs(productUrl(lang, p));
  const c = PRODUCTS[p][lang];
  const u = UI[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode(lang),
      webPageNode(lang, url, c.title, c.desc, PRODUCT_OG[p]),
      crumbNode(url, [
        { name: u.brand, item: SITE },
        { name: u.hubName, item: abs(hubUrl(lang)) },
        { name: c.name, item: url },
      ]),
      {
        '@type': 'Service', '@id': `${url}#service`, name: c.h1, serviceType: 'Made-to-measure clothing',
        provider: { '@id': `${SITE}#business` },
        areaServed: { '@type': 'AdministrativeArea', name: 'Antalya' },
        description: c.lead, offers: priceOffer(url),
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: url, servicePhone: PHONE_TEL },
      },
      faqNode(url, c.faq),
    ],
  };
}

export function expressJsonLd(lang: TLang) {
  const url = abs(expressUrl(lang));
  const c = EXPRESS_COPY[lang];
  const u = UI[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode(lang),
      webPageNode(lang, url, c.title, c.desc, OG_DEFAULT),
      crumbNode(url, [
        { name: u.brand, item: SITE },
        { name: u.expressName, item: url },
      ]),
      {
        '@type': 'Service', '@id': `${url}#service`, name: c.h1, serviceType: 'Clothing alterations',
        provider: { '@id': `${SITE}#business` },
        areaServed: { '@type': 'AdministrativeArea', name: 'Antalya' },
        description: c.lead,
        offers: { '@type': 'Offer', url, priceCurrency: 'TRY', priceSpecification: { '@type': 'PriceSpecification', minPrice: 200, priceCurrency: 'TRY' } },
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: url, servicePhone: PHONE_TEL },
      },
      faqNode(url, c.faq),
    ],
  };
}

// hreflang: hub'ın TR karşılığı var (x-default TR); ürün/ekspres sayfaları yalnızca EN/DE/RU (x-default EN).
const meta = (lang: TLang, title: string, desc: string, keywords: string[], url: string, languages: Record<string, string>, image: string, imgAlt: string): Metadata => ({
  metadataBase: new URL(SITE),
  title: { absolute: title },
  description: desc,
  keywords,
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: url, languages },
  openGraph: {
    title, description: desc, url, siteName: 'Terzi Can', locale: UI[lang].locale, type: 'website',
    images: [{ url: image, width: 1200, height: 630, alt: imgAlt }],
  },
  twitter: { card: 'summary_large_image', title, description: desc, images: [image] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
});

const langMap = (urlFor: (l: TLang) => string, xDefault: string, extra: Record<string, string> = {}) => ({
  ...extra, en: abs(urlFor('en')), de: abs(urlFor('de')), ru: abs(urlFor('ru')), 'x-default': xDefault,
});

export function hubMetadata(lang: TLang): Metadata {
  const c = HUB_COPY[lang];
  const tr = abs(TR_HUB);
  return meta(lang, c.title, c.desc, c.keywords, abs(hubUrl(lang)), langMap(hubUrl, tr, { tr }), OG_DEFAULT, ALT.family[lang]);
}
export function productMetadata(lang: TLang, p: ProductId): Metadata {
  const c = PRODUCTS[p][lang];
  return meta(lang, c.title, c.desc, c.keywords, abs(productUrl(lang, p)), langMap((l) => productUrl(l, p), abs(productUrl('en', p))), PRODUCT_OG[p], ALT[PRODUCT_IMGS[p][0]][lang]);
}
export function expressMetadata(lang: TLang): Metadata {
  const c = EXPRESS_COPY[lang];
  return meta(lang, c.title, c.desc, c.keywords, abs(expressUrl(lang)), langMap(expressUrl, abs(expressUrl('en'))), OG_DEFAULT, ALT.family[lang]);
}

export const waLink = (text: string) => `https://wa.me/${PHONE_TEL.replace('+', '')}?text=${encodeURIComponent(text)}`;
