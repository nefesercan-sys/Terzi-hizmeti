// ============================================================
// terzihizmeti.com.tr — lib/promosyon-tekstil.ts
// "Promosyon / reklam tekstili ve baskılı bez çanta imalatı" — 10 dilde tek sayfa, metin + SEO + JSON-LD.
// Yalnızca işletme sahibinin doğruladığı bilgiler (Ekim 2026):
//  - fuar ve organizasyonlar için firmalara baskılı, logolu bez çanta imalatı ve baskısı (tanıtım ve hediyelik)
//  - tişört, polar yelek, mont, pantolon, şort, önlük, uniforma ve diğer tekstil ürünleri; baskı ve logo tasarımı
//  - istenen tasarım, model ve baskı çeşitleriyle üretim
//  - Antalya'daki EXPO ve diğer fuar/organizasyonlarda ihtiyaç duyulan tekstil ürünlerinin üretimi
//    (resmî tedarikçi / sponsor İMA EDİLMEZ: "fuar ve organizasyonlar için üretim")
//  - iletişim: WhatsApp (kodda sabit). Fiyat, süre, adet, sertifika, müşteri adı, puan/yorum YAZILMAZ.
// Route'lar: tr/en/de/ru → kendi route grupları; es/fr/pl/uk/nl/ar → app/[lang]/[zone].
// ============================================================
import type { Metadata } from 'next';
import { UDATA } from '@/lib/uretim';
import { PLANGS, PROMO_PATH, PROMO_NAME, type PLang } from '@/lib/promosyon-paths';

export { PLANGS, PROMO_PATH, PROMO_NAME };
export type { PLang };

export const SITE = 'https://terzihizmeti.com.tr';
export const PHONE = '+90 531 898 64 18';
export const PHONE_E = '+905318986418';
export const waLink = (t: string) => `https://wa.me/${PHONE_E.replace('+', '')}?text=${encodeURIComponent(t)}`;
const OG = `${SITE}/og-promosyon.jpg`;

/** Sayfadaki örnek görseller (örnek niteliğinde; gerçek iş fotoğrafı değildir). idx: COPY[lang].items içindeki sıra. */
export const PROMO_FOTOLAR: { src: string; idx: number }[] = [
  { src: '/gorseller/bez-canta-atolye.webp', idx: 0 }, // Bez çanta
  { src: '/gorseller/hazir-giyim-atolye.webp', idx: 1 }, // Tişört
  { src: '/gorseller/uniforma.webp', idx: 7 }, // Uniforma
  { src: '/gorseller/polar-yelek.webp', idx: 2 }, // Polar yelek
  { src: '/gorseller/yun-pantolon-metre.webp', idx: 4 }, // Pantolon
  { src: '/gorseller/sef-mutfak-uniforma.webp', idx: 6 }, // Önlük
];
export const ORNEK_GORSEL: Record<PLang, string> = {
  tr: 'örnek görsel', en: 'illustrative image', de: 'Beispielbild', ru: 'пример изображения', es: 'imagen ilustrativa',
  fr: 'image d’illustration', pl: 'obraz poglądowy', uk: 'ілюстративне зображення', nl: 'illustratieve afbeelding', ar: 'صورة توضيحية',
};

/** Sayfanın yayın / son içerik güncelleme tarihi (sitemap lastModified). */
export const PROMO_LAST_UPDATE = '2026-10-31';

export const promoUrl = (l: PLang) => `${SITE}${PROMO_PATH[l]}`;

/** hreflang kodları (tamamı karşılıklı) ve x-default (uluslararası varsayılan: İngilizce). */
export const promoAlternates = (): Record<string, string> => ({
  ...Object.fromEntries(PLANGS.map((l) => [l, promoUrl(l)])),
  'x-default': promoUrl('en'),
});

/** Dil sayfasından Anavera Tekstil sayfasına (var olan 4 dil sayfası; diğerleri en yakın olana). */
export const ANAVERA_TARGET: Record<PLang, { lang: 'tr' | 'en' | 'de' | 'ru'; path: string }> = {
  tr: { lang: 'tr', path: '/anavera-tekstil' }, en: { lang: 'en', path: '/en/anavera-tekstil' },
  de: { lang: 'de', path: '/de/anavera-tekstil' }, ru: { lang: 'ru', path: '/ru/anavera-tekstil' },
  es: { lang: 'en', path: '/en/anavera-tekstil' }, fr: { lang: 'en', path: '/en/anavera-tekstil' },
  pl: { lang: 'en', path: '/en/anavera-tekstil' }, uk: { lang: 'ru', path: '/ru/anavera-tekstil' },
  nl: { lang: 'en', path: '/en/anavera-tekstil' }, ar: { lang: 'en', path: '/en/anavera-tekstil' },
};

/** Ana hizmet (terzi) sayfası: 4 dilde kendi hizmet sayfası, diğerlerinde o dilin tanıtım sayfası (/es ...). */
export const MAIN_TARGET: Record<PLang, string> = {
  tr: '/antalya-terzi', en: '/en/tailor-service-antalya', de: '/de/schneiderservice-antalya', ru: '/ru/uslugi-portnogo-antalya',
  es: '/es', fr: '/fr', pl: '/pl', uk: '/uk', nl: '/nl', ar: '/ar',
};

type Pair = [string, string];

export type PCopy = {
  langName: string; hreflang: string; ogLocale: string; dir: 'ltr' | 'rtl';
  title: string; desc: string;
  badge: string; h1: string; lead: string; cta: string; wa: string;
  makeTitle: string; makeIntro: string; items: Pair[]; makeMore: string;
  printTitle: string; printText: string; printList: string[];
  fairTitle: string; fairText: string;
  flowTitle: string; flowIntro: string; steps: Pair[]; flowNote: string;
  faqTitle: string; faq: Pair[];
  ctaTitle: string; ctaText: string;
  relTitle: string; relMain: string; relAnavera: string;
  ui: { call: string; contact: string; waLabel: string; home: string; toolbarLangs: string; rights: string };
};

export const COPY: Record<PLang, PCopy> = {
  // ───────────────────────────── Türkçe
  tr: {
    langName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr',
    title: 'Promosyon Tekstil ve Baskılı Bez Çanta İmalatı | Anavera',
    desc: 'Fuar ve organizasyonlar için logolu baskılı bez çanta, tişört, polar yelek, mont, önlük ve uniforma imalatı. Teklif için WhatsApp\'tan yazın.',
    badge: 'Fuar · Organizasyon · Tanıtım ve hediyelik ürünler',
    h1: 'Promosyon Tekstil ve Baskılı Bez Çanta İmalatı',
    lead: 'Firmanız için logolu bez çanta, tişört, polar yelek, mont ve uniforma üretiyoruz. Tasarımı ve baskıyı sizinle birlikte netleştiriyor, ürünü istediğiniz model ve baskıyla hazırlıyoruz.',
    cta: 'WhatsApp\'tan teklif isteyin',
    wa: 'Merhaba, logolu baskılı bez çanta / promosyon tekstil ürünleri için teklif almak istiyorum. Logo veya tasarım dosyamı gönderebilirim.',
    makeTitle: 'Neler üretiyoruz',
    makeIntro: 'Tanıtım ve hediyelik amaçlı tekstil ürünleri. Hepsi logonuzla ve istediğiniz tasarımla hazırlanır.',
    items: [
      ['Bez çanta', 'Firmalar için baskılı, logolu bez çanta imalatı ve baskısı. Fuar ve organizasyonlarda tanıtım ya da hediyelik olarak.'],
      ['Tişört', 'Logonuzla ya da kendi tasarımınızla baskılı tişört.'],
      ['Polar yelek', 'Ekip ve personel için logolu polar yelek.'],
      ['Mont', 'İhtiyacınıza uygun modelde, logolu mont.'],
      ['Pantolon', 'Ekip kıyafetini ya da uniformayı tamamlayan pantolon.'],
      ['Şort', 'Etkinlik ve ekip giyimi için şort.'],
      ['Önlük', 'Logo baskılı önlük.'],
      ['Uniforma', 'İstediğiniz model ve baskıyla uniforma.'],
    ],
    makeMore: 'Listede olmayan başka bir tekstil ürününe mi ihtiyacınız var? Fikrinizi yazın, birlikte bakalım.',
    printTitle: 'Baskı ve logo tasarımı',
    printText: 'Logonuz hazırsa dosyasını gönderin. Henüz yoksa ya da yenilemek istiyorsanız logo tasarımını da biz yaparız. Baskı çeşidini ürüne ve tasarıma göre birlikte seçeriz. Serigrafi, nakış, transfer ve DTF baskının hepsini yapıyoruz.',
    printList: ['Logo ya da tasarım dosyanızla başlayabilirsiniz', 'Elinizde yalnızca bir fikir olması da yeterli', 'Model, ürün ve baskı çeşidini birlikte seçeriz'],
    fairTitle: 'Fuar ve organizasyonlar için',
    fairText: 'Antalya\'daki EXPO ve diğer fuarlarda ve organizasyonlarda ihtiyaç duyulan tekstil ürünlerini üretiyoruz: ekip giyimi, uniforma, dağıtılacak çantalar ve hediyelik ürünler.',
    flowTitle: 'Sipariş nasıl ilerler',
    flowIntro: 'Üç adımda ilerliyoruz.',
    steps: [
      ['Logo, tasarım ya da fikir', 'WhatsApp\'tan logo dosyanızı, tasarımınızı ya da sadece ne istediğinizi yazın.'],
      ['Model, ürün ve baskı seçimi', 'Modeli, ürünü ve baskıyı birlikte netleştiririz.'],
      ['Üretim', 'Her şey netleştiğinde siparişiniz üretime alınır.'],
    ],
    flowNote: 'Süre ve fiyat siparişe göre netleşir. Önceden sabit rakam vermiyoruz; teklifi WhatsApp\'tan alırsınız.',
    faqTitle: 'Sık sorulan sorular',
    faq: [
      ['Logomu hangi ürünlere bastırabilirim?', 'Bez çanta, tişört, polar yelek, mont, pantolon, şort, önlük ve uniformaya; ayrıca diğer tekstil ürünlerine. Başka bir ürün gerekirse sormanız yeterli.'],
      ['Logom yok, yardımcı olur musunuz?', 'Evet, logo tasarımı da yapıyoruz. Yalnızca bir fikirle de başlayabilirsiniz; birlikte şekillendiririz.'],
      ['En az kaç adet sipariş vermeliyim?', 'Modele, adede ve baskıya göre değişir. WhatsApp\'tan yazın, siparişiniz için netleştirelim.'],
      ['Fiyat ve teslim süresi nedir?', 'İkisi de siparişe bağlıdır: model, adet ve baskı. Talebinizi WhatsApp\'tan ilettiğinizde net bir cevap verebiliriz.'],
      ['Teklif almak için ne göndermeliyim?', 'Varsa logo ya da tasarım dosyanızı, istediğiniz ürünü ve yaklaşık adedi. Bir fikir ya da örnek fotoğraf da yeterli.'],
    ],
    ctaTitle: 'Teklif için WhatsApp\'tan yazın',
    ctaText: 'Logonuzu, tasarımınızı ya da fikrinizi gönderin; bir sonraki adımı birlikte belirleyelim.',
    relTitle: 'İlgili sayfalar', relMain: 'Terzi Can: Antalya terzi hizmeti', relAnavera: 'Anavera Tekstil: hazır giyim üretimi ve ihracat',
    ui: { call: 'Ara', contact: 'İletişim', waLabel: 'WhatsApp', home: 'Terzi Can', toolbarLangs: 'Diller', rights: 'Anavera Tekstil · Terzi Can' },
  },

  // ───────────────────────────── English
  en: {
    langName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr',
    title: 'Promotional Textiles & Printed Tote Bags | Anavera',
    desc: 'Tote bags printed with your logo, plus T-shirts, fleece vests, jackets, aprons and uniforms for fairs and events. Request a quote on WhatsApp.',
    badge: 'Fairs · Events · Promotional and gift items',
    h1: 'Promotional Textiles and Printed Tote Bag Production',
    lead: 'We make logo tote bags, T-shirts, fleece vests, jackets and uniforms for companies. Design and print are settled together with you, and each piece is made in the model and print you ask for.',
    cta: 'Request a quote on WhatsApp',
    wa: 'Hello, I would like a quote for printed tote bags / promotional textiles with our logo. I can send the logo or design file.',
    makeTitle: 'What we make',
    makeIntro: 'Textile products for promotion and gifting, all prepared with your logo and the design you want.',
    items: [
      ['Tote bags', 'Printed tote bags with your logo, made and printed for companies. For fairs and events, as promotion or as gifts.'],
      ['T-shirts', 'Printed T-shirts with your logo or your own design.'],
      ['Fleece vests', 'Fleece vests with your logo for teams and staff.'],
      ['Jackets', 'Jackets with your logo, in the model that fits your need.'],
      ['Trousers', 'Trousers that complete a team outfit or a uniform.'],
      ['Shorts', 'Shorts for event and team wear.'],
      ['Aprons', 'Aprons printed with your logo.'],
      ['Uniforms', 'Uniforms in the model and print you want.'],
    ],
    makeMore: 'Need a textile product that is not on the list? Tell us your idea and we will look at it together.',
    printTitle: 'Print and logo design',
    printText: 'If your logo is ready, send us the file. If you do not have one yet, or want to refresh it, we design the logo as well. We choose the type of print together, according to the product and the design. We offer screen printing, embroidery, transfer printing and DTF printing.',
    printList: ['Start with a logo or design file', 'An idea alone is enough to begin', 'We choose the model, product and print type together'],
    fairTitle: 'For fairs and events',
    fairText: 'We produce the textile products needed at fairs and events, including the EXPO and other fairs in Antalya: team wear, uniforms, bags to hand out and gift items.',
    flowTitle: 'How an order goes',
    flowIntro: 'It takes three steps.',
    steps: [
      ['Send your logo, design or idea', 'Message us on WhatsApp with a logo file, a design, or simply a description of what you want.'],
      ['Choose model, product and print', 'We settle the model, the product and the print together.'],
      ['Production', 'Once everything is agreed, your order goes into production.'],
    ],
    flowNote: 'Time and price are settled for each order. We do not quote fixed figures in advance; you get the quote on WhatsApp.',
    faqTitle: 'Frequently asked questions',
    faq: [
      ['Which products can carry my logo?', 'Tote bags, T-shirts, fleece vests, jackets, trousers, shorts, aprons and uniforms, along with other textile products. If you need something else, just ask.'],
      ['I do not have a logo yet. Can you help?', 'Yes, we also do logo design. You can also begin with just an idea and we will shape it with you.'],
      ['How many pieces do I have to order?', 'It depends on the model, the quantity and the print. Write to us on WhatsApp and we will clarify it for your order.'],
      ['What are the price and the turnaround?', 'Both depend on the order: the model, the quantity and the print. Once you send your request on WhatsApp, we can give a clear answer.'],
      ['What should I send to get a quote?', 'Your logo or design file if you have one, the product you want and roughly how many. An idea or a reference photo is fine too.'],
    ],
    ctaTitle: 'Ask for your quote on WhatsApp',
    ctaText: 'Send your logo, design or idea, and we will work out the next step together.',
    relTitle: 'Related pages', relMain: 'Terzi Can: tailor service in Antalya', relAnavera: 'Anavera Tekstil: clothing manufacturing and export',
    ui: { call: 'Call', contact: 'Contact', waLabel: 'WhatsApp', home: 'Terzi Can', toolbarLangs: 'Languages', rights: 'Anavera Tekstil · Terzi Can' },
  },

  // ───────────────────────────── Deutsch
  de: {
    langName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr',
    title: 'Werbetextilien & bedruckte Stofftaschen | Anavera',
    desc: 'Stofftaschen mit Ihrem Logo, dazu T-Shirts, Fleeceweste, Jacken, Schürzen und Uniformen für Messen und Events. Angebot per WhatsApp.',
    badge: 'Messen · Veranstaltungen · Werbe- und Geschenkartikel',
    h1: 'Werbetextilien und Stofftaschen mit Logodruck',
    lead: 'Wir fertigen für Unternehmen Stofftaschen mit Logo, T-Shirts, Fleecewesten, Jacken und Uniformen. Gestaltung und Druck klären wir gemeinsam mit Ihnen; das Teil entsteht in dem Modell und mit dem Druck, den Sie wünschen.',
    cta: 'Angebot per WhatsApp anfragen',
    wa: 'Guten Tag, ich möchte ein Angebot für bedruckte Stofftaschen / Werbetextilien mit unserem Logo. Die Logo- oder Designdatei kann ich senden.',
    makeTitle: 'Was wir herstellen',
    makeIntro: 'Textilien als Werbemittel und Geschenk, jeweils mit Ihrem Logo und dem Motiv Ihrer Wahl.',
    items: [
      ['Stofftaschen', 'Bedruckte Stofftaschen mit Logo für Unternehmen: Herstellung und Druck. Für Messen und Veranstaltungen, als Werbemittel oder Geschenk.'],
      ['T-Shirts', 'Bedruckte T-Shirts mit Ihrem Logo oder eigenem Motiv.'],
      ['Fleeceweste', 'Fleeceweste mit Logo für Team und Personal.'],
      ['Jacken', 'Jacken mit Logo, im Modell, das zu Ihrem Bedarf passt.'],
      ['Hosen', 'Hosen, die eine Team- oder Dienstkleidung vervollständigen.'],
      ['Shorts', 'Shorts für Veranstaltungs- und Teamkleidung.'],
      ['Schürzen', 'Schürzen mit Logodruck.'],
      ['Uniformen', 'Uniformen im gewünschten Modell und mit gewünschtem Druck.'],
    ],
    makeMore: 'Sie brauchen ein anderes Textilprodukt? Schildern Sie uns Ihre Idee, wir sehen sie uns gemeinsam an.',
    printTitle: 'Druck und Logogestaltung',
    printText: 'Ist Ihr Logo fertig, schicken Sie uns die Datei. Haben Sie noch keins oder möchten es überarbeiten, gestalten wir das Logo ebenfalls. Die Druckart wählen wir gemeinsam, passend zu Produkt und Motiv. Wir bieten Siebdruck, Stickerei, Transferdruck und DTF-Druck an.',
    printList: ['Start mit einer Logo- oder Designdatei', 'Für den Anfang genügt eine Idee', 'Modell, Produkt und Druckart wählen wir gemeinsam'],
    fairTitle: 'Für Messen und Veranstaltungen',
    fairText: 'Wir stellen Textilien her, die auf Messen und Veranstaltungen gebraucht werden, darunter die EXPO und andere Messen in Antalya: Teamkleidung, Uniformen, Taschen zum Verteilen und Geschenkartikel.',
    flowTitle: 'So läuft eine Bestellung ab',
    flowIntro: 'In drei Schritten.',
    steps: [
      ['Logo, Design oder Idee senden', 'Schreiben Sie uns per WhatsApp, mit Logodatei, Entwurf oder einfach einer Beschreibung.'],
      ['Modell, Produkt und Druck wählen', 'Modell, Produkt und Druck legen wir gemeinsam fest.'],
      ['Fertigung', 'Sobald alles abgestimmt ist, geht Ihre Bestellung in die Fertigung.'],
    ],
    flowNote: 'Dauer und Preis klären wir je Bestellung. Feste Zahlen nennen wir vorab nicht; das Angebot erhalten Sie über WhatsApp.',
    faqTitle: 'Häufige Fragen',
    faq: [
      ['Auf welche Produkte kann mein Logo?', 'Auf Stofftaschen, T-Shirts, Fleecewesten, Jacken, Hosen, Shorts, Schürzen und Uniformen sowie auf weitere Textilprodukte. Brauchen Sie etwas anderes, fragen Sie einfach nach.'],
      ['Ich habe noch kein Logo. Können Sie helfen?', 'Ja, wir gestalten auch Logos. Sie können auch nur mit einer Idee beginnen; wir entwickeln sie mit Ihnen weiter.'],
      ['Wie viele Stück muss ich bestellen?', 'Das hängt vom Modell, der Stückzahl und dem Druck ab. Schreiben Sie uns per WhatsApp, dann klären wir es für Ihre Bestellung.'],
      ['Wie sind Preis und Lieferzeit?', 'Beides richtet sich nach Ihrer Bestellung: Modell, Menge und Druck. Nach Ihrer Anfrage über WhatsApp können wir konkret antworten.'],
      ['Was schicke ich für ein Angebot?', 'Wenn vorhanden Ihre Logo- oder Designdatei, das gewünschte Produkt und ungefähr die Menge. Eine Idee oder ein Referenzfoto reicht ebenfalls.'],
    ],
    ctaTitle: 'Angebot per WhatsApp anfragen',
    ctaText: 'Schicken Sie Logo, Design oder Idee, und wir legen den nächsten Schritt gemeinsam fest.',
    relTitle: 'Weitere Seiten', relMain: 'Terzi Can: Schneiderservice in Antalya', relAnavera: 'Anavera Tekstil: Bekleidungsherstellung und Export',
    ui: { call: 'Anrufen', contact: 'Kontakt', waLabel: 'WhatsApp', home: 'Terzi Can', toolbarLangs: 'Sprachen', rights: 'Anavera Tekstil · Terzi Can' },
  },

  // ───────────────────────────── Русский
  ru: {
    langName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr',
    title: 'Рекламный текстиль и сумки-шопперы с печатью | Anavera',
    desc: 'Шопперы с вашим логотипом, футболки, флисовые жилеты, куртки, фартуки и форма для выставок и мероприятий. Расчёт — в WhatsApp.',
    badge: 'Выставки · Мероприятия · Рекламная и подарочная продукция',
    h1: 'Рекламный текстиль и пошив сумок-шопперов с печатью',
    lead: 'Шьём для компаний тканевые сумки с логотипом, футболки, флисовые жилеты, куртки и форму. Дизайн и печать согласуем с вами, а изделие делаем в нужной вам модели и с нужной печатью.',
    cta: 'Запросить расчёт в WhatsApp',
    wa: 'Здравствуйте! Хочу получить расчёт на тканевые сумки с печатью и рекламный текстиль с нашим логотипом. Могу прислать логотип или макет.',
    makeTitle: 'Что мы изготавливаем',
    makeIntro: 'Текстиль для рекламы и подарков. Всё выпускается с вашим логотипом и в нужном вам оформлении.',
    items: [
      ['Тканевые сумки (шопперы)', 'Тканевые сумки с печатью и логотипом для компаний: пошив и нанесение. Для выставок и мероприятий, как реклама или подарок.'],
      ['Футболки', 'Футболки с печатью: с вашим логотипом или собственным рисунком.'],
      ['Флисовые жилеты', 'Флисовые жилеты с логотипом для команды и персонала.'],
      ['Куртки', 'Куртки с логотипом в модели, подходящей под вашу задачу.'],
      ['Брюки', 'Брюки как часть командной одежды или формы.'],
      ['Шорты', 'Шорты для мероприятий и командной одежды.'],
      ['Фартуки', 'Фартуки с нанесённым логотипом.'],
      ['Форма', 'Форма в нужной вам модели и с нужной печатью.'],
    ],
    makeMore: 'Нужно другое текстильное изделие? Опишите идею, и мы посмотрим вместе.',
    printTitle: 'Печать и разработка логотипа',
    printText: 'Если логотип готов, пришлите файл. Если его ещё нет или хочется обновить, мы разработаем и логотип. Вид печати выбираем вместе, в зависимости от изделия и рисунка. Мы выполняем шелкографию, вышивку, трансферную печать и DTF-печать.',
    printList: ['Можно начать с файла логотипа или макета', 'Для начала достаточно одной идеи', 'Модель, изделие и вид печати выбираем вместе'],
    fairTitle: 'Для выставок и мероприятий',
    fairText: 'Мы выпускаем текстиль, который нужен на выставках и мероприятиях, в том числе на EXPO и других выставках в Анталье: командную одежду, форму, сумки для раздачи и подарочные изделия.',
    flowTitle: 'Как проходит заказ',
    flowIntro: 'Всё укладывается в три шага.',
    steps: [
      ['Логотип, макет или идея', 'Напишите в WhatsApp: приложите файл логотипа, макет или просто опишите, что хотите получить.'],
      ['Выбор модели, изделия и печати', 'Модель, изделие и печать согласуем вместе.'],
      ['Производство', 'Когда всё согласовано, заказ идёт в работу.'],
    ],
    flowNote: 'Сроки и стоимость определяются по каждому заказу. Конкретных цифр заранее не называем: расчёт вы получите в WhatsApp.',
    faqTitle: 'Частые вопросы',
    faq: [
      ['На какие изделия можно нанести логотип?', 'На тканевые сумки, футболки, флисовые жилеты, куртки, брюки, шорты, фартуки и форму, а также на другие текстильные изделия. Если нужно что-то ещё, просто спросите.'],
      ['У меня нет логотипа. Вы поможете?', 'Да, мы разрабатываем и логотипы. Можно начать и с одной идеи: доработаем её вместе с вами.'],
      ['Сколько штук нужно заказать?', 'Это зависит от модели, количества и печати. Напишите нам в WhatsApp, и мы уточним для вашего заказа.'],
      ['Сколько это стоит и как быстро делаете?', 'И то и другое зависит от заказа: модели, количества и печати. После вашего запроса в WhatsApp сможем ответить конкретно.'],
      ['Что отправить, чтобы получить расчёт?', 'Файл логотипа или макета, если он есть, нужное изделие и примерное количество. Подойдёт и просто идея или фото-образец.'],
    ],
    ctaTitle: 'Запросите расчёт в WhatsApp',
    ctaText: 'Пришлите логотип, макет или идею, и мы вместе определим следующий шаг.',
    relTitle: 'Другие страницы', relMain: 'Terzi Can: услуги портного в Анталье', relAnavera: 'Anavera Tekstil: производство одежды и экспорт',
    ui: { call: 'Позвонить', contact: 'Контакты', waLabel: 'WhatsApp', home: 'Terzi Can', toolbarLangs: 'Языки', rights: 'Anavera Tekstil · Terzi Can' },
  },

  // ───────────────────────────── Español
  es: {
    langName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr',
    title: 'Textil promocional y bolsas de tela estampadas | Anavera',
    desc: 'Bolsas de tela con su logo, camisetas, chalecos polares, chaquetas, delantales y uniformes para ferias y eventos. Pida presupuesto por WhatsApp.',
    badge: 'Ferias · Eventos · Artículos promocionales y de regalo',
    h1: 'Textil promocional y bolsas de tela estampadas con su logo',
    lead: 'Confeccionamos para empresas bolsas de tela con logo, camisetas, chalecos polares, chaquetas y uniformes. El diseño y la estampación los definimos con usted, y cada prenda se hace con el modelo y la estampación que pida.',
    cta: 'Pedir presupuesto por WhatsApp',
    wa: 'Hola, quisiera un presupuesto de bolsas de tela estampadas y textil promocional con nuestro logo. Puedo enviar el archivo del logo o del diseño.',
    makeTitle: 'Qué fabricamos',
    makeIntro: 'Productos textiles para promoción y regalo, todos con su logo y el diseño que usted elija.',
    items: [
      ['Bolsas de tela', 'Bolsas de tela estampadas y con logo para empresas: confección y estampación. Para ferias y eventos, como promoción o como regalo.'],
      ['Camisetas', 'Camisetas estampadas con su logo o con su propio diseño.'],
      ['Chalecos polares', 'Chalecos polares con su logo para equipos y personal.'],
      ['Chaquetas', 'Chaquetas con logo, en el modelo que mejor encaje con su necesidad.'],
      ['Pantalones', 'Pantalones que completan la ropa de equipo o el uniforme.'],
      ['Pantalones cortos', 'Pantalones cortos para eventos y ropa de equipo.'],
      ['Delantales', 'Delantales con su logo estampado.'],
      ['Uniformes', 'Uniformes en el modelo y con la estampación que desee.'],
    ],
    makeMore: '¿Necesita otro producto textil que no figura en la lista? Cuéntenos su idea y la vemos juntos.',
    printTitle: 'Estampación y diseño de logo',
    printText: 'Si ya tiene el logo, envíenos el archivo. Si todavía no lo tiene o quiere renovarlo, también diseñamos el logo. El tipo de estampación lo elegimos juntos, según el producto y el diseño. Hacemos serigrafía, bordado, transfer y estampación DTF.',
    printList: ['Puede empezar con un archivo de logo o de diseño', 'Basta una idea para empezar', 'Elegimos juntos el modelo, el producto y el tipo de estampación'],
    fairTitle: 'Para ferias y eventos',
    fairText: 'Fabricamos los productos textiles que se necesitan en ferias y eventos, como la EXPO de Antalya y otras ferias: ropa de equipo, uniformes, bolsas para repartir y artículos de regalo.',
    flowTitle: 'Cómo avanza un pedido',
    flowIntro: 'Son tres pasos.',
    steps: [
      ['Envíe su logo, diseño o idea', 'Escríbanos por WhatsApp con un archivo de logo, un diseño o simplemente una descripción de lo que quiere.'],
      ['Elección de modelo, producto y estampación', 'Definimos juntos el modelo, el producto y la estampación.'],
      ['Producción', 'Cuando todo está acordado, su pedido pasa a producción.'],
    ],
    flowNote: 'El plazo y el precio se concretan en cada pedido. No damos cifras fijas de antemano: el presupuesto lo recibe por WhatsApp.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      ['¿En qué productos se puede poner mi logo?', 'En bolsas de tela, camisetas, chalecos polares, chaquetas, pantalones, pantalones cortos, delantales y uniformes, además de otros productos textiles. Si necesita otra cosa, pregúntenos.'],
      ['No tengo logo. ¿Pueden ayudarme?', 'Sí, también diseñamos logos. Puede empezar solo con una idea y la desarrollamos con usted.'],
      ['¿Cuántas unidades tengo que pedir?', 'Depende del modelo, de la cantidad y de la estampación. Escríbanos por WhatsApp y lo concretamos para su pedido.'],
      ['¿Cuánto cuesta y cuánto tarda?', 'Ambas cosas dependen del pedido: modelo, cantidad y estampación. Cuando nos envíe su consulta por WhatsApp podremos darle una respuesta concreta.'],
      ['¿Qué debo enviar para recibir un presupuesto?', 'Su archivo de logo o diseño si lo tiene, el producto que busca y una cantidad aproximada. También sirve una idea o una foto de referencia.'],
    ],
    ctaTitle: 'Pida su presupuesto por WhatsApp',
    ctaText: 'Envíe su logo, diseño o idea y definimos juntos el siguiente paso.',
    relTitle: 'Páginas relacionadas', relMain: 'Terzi Can: sastrería en Antalya', relAnavera: 'Anavera Tekstil: producción de ropa y exportación',
    ui: { call: 'Llamar', contact: 'Contacto', waLabel: 'WhatsApp', home: 'Terzi Can', toolbarLangs: 'Idiomas', rights: 'Anavera Tekstil · Terzi Can' },
  },

  // ───────────────────────────── Français
  fr: {
    langName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr',
    title: 'Textile promotionnel et sacs en tissu imprimés | Anavera',
    desc: 'Sacs en tissu à votre logo, t-shirts, gilets polaires, vestes, tabliers et uniformes pour salons et événements. Demandez un devis sur WhatsApp.',
    badge: 'Salons · Événements · Objets promotionnels et cadeaux',
    h1: 'Textile promotionnel et sacs en tissu imprimés à votre logo',
    lead: 'Nous réalisons pour les entreprises des sacs en tissu à leur logo, des t-shirts, des gilets polaires, des vestes et des uniformes. Le design et l\'impression se définissent avec vous, puis la pièce est fabriquée dans le modèle et avec l\'impression que vous choisissez.',
    cta: 'Demander un devis sur WhatsApp',
    wa: 'Bonjour, je souhaite un devis pour des sacs en tissu imprimés et du textile promotionnel à notre logo. Je peux envoyer le fichier du logo ou du design.',
    makeTitle: 'Ce que nous fabriquons',
    makeIntro: 'Des produits textiles pour la promotion et le cadeau, tous réalisés à votre logo et avec le visuel de votre choix.',
    items: [
      ['Sacs en tissu', 'Sacs en tissu imprimés à votre logo pour les entreprises : fabrication et impression. Pour salons et événements, en objet promotionnel ou en cadeau.'],
      ['T-shirts', 'T-shirts imprimés à votre logo ou avec votre propre visuel.'],
      ['Gilets polaires', 'Gilets polaires à votre logo pour vos équipes et votre personnel.'],
      ['Vestes', 'Vestes à votre logo, dans le modèle qui répond à votre besoin.'],
      ['Pantalons', 'Pantalons pour compléter une tenue d\'équipe ou un uniforme.'],
      ['Shorts', 'Shorts pour les événements et les tenues d\'équipe.'],
      ['Tabliers', 'Tabliers imprimés à votre logo.'],
      ['Uniformes', 'Uniformes dans le modèle et avec l\'impression de votre choix.'],
    ],
    makeMore: 'Il vous faut un autre produit textile ? Décrivez-nous votre idée, nous l\'examinerons ensemble.',
    printTitle: 'Impression et création de logo',
    printText: 'Si votre logo est prêt, envoyez-nous le fichier. S\'il n\'existe pas encore ou si vous voulez le renouveler, nous créons aussi le logo. Le type d\'impression se choisit ensemble, selon le produit et le visuel. Nous proposons la sérigraphie, la broderie, l\'impression par transfert et l\'impression DTF.',
    printList: ['Vous pouvez partir d\'un fichier de logo ou de design', 'Une simple idée suffit pour commencer', 'Nous choisissons ensemble le modèle, le produit et le type d\'impression'],
    fairTitle: 'Pour les salons et les événements',
    fairText: 'Nous fabriquons les produits textiles dont on a besoin lors des salons et des événements, comme l\'EXPO d\'Antalya et d\'autres salons : tenues d\'équipe, uniformes, sacs à distribuer et objets cadeaux.',
    flowTitle: 'Le déroulement d\'une commande',
    flowIntro: 'Cela se fait en trois étapes.',
    steps: [
      ['Envoyez logo, design ou idée', 'Écrivez-nous sur WhatsApp avec un fichier de logo, un visuel ou simplement une description de ce que vous voulez.'],
      ['Choix du modèle, du produit et de l\'impression', 'Nous fixons ensemble le modèle, le produit et l\'impression.'],
      ['Fabrication', 'Une fois tout validé, votre commande part en fabrication.'],
    ],
    flowNote: 'Le délai et le prix sont précisés pour chaque commande. Nous n\'annonçons pas de chiffres à l\'avance : le devis vous est donné sur WhatsApp.',
    faqTitle: 'Questions fréquentes',
    faq: [
      ['Sur quels produits peut-on mettre mon logo ?', 'Sur les sacs en tissu, t-shirts, gilets polaires, vestes, pantalons, shorts, tabliers et uniformes, ainsi que sur d\'autres produits textiles. Pour tout autre produit, demandez-nous.'],
      ['Je n\'ai pas de logo. Pouvez-vous m\'aider ?', 'Oui, nous créons aussi des logos. Vous pouvez partir d\'une simple idée, que nous développons avec vous.'],
      ['Combien de pièces faut-il commander ?', 'Cela dépend du modèle, de la quantité et de l\'impression. Écrivez-nous sur WhatsApp et nous le précisons pour votre commande.'],
      ['Quels sont le prix et le délai ?', 'Les deux dépendent de la commande : modèle, quantité et impression. Une fois votre demande reçue sur WhatsApp, nous pouvons répondre précisément.'],
      ['Que dois-je envoyer pour obtenir un devis ?', 'Votre fichier de logo ou de design si vous en avez un, le produit souhaité et une quantité approximative. Une idée ou une photo de référence suffit aussi.'],
    ],
    ctaTitle: 'Demandez votre devis sur WhatsApp',
    ctaText: 'Envoyez votre logo, votre design ou votre idée, et nous définissons ensemble la suite.',
    relTitle: 'Pages liées', relMain: 'Terzi Can : couturier à Antalya', relAnavera: 'Anavera Tekstil : production de vêtements et export',
    ui: { call: 'Appeler', contact: 'Contact', waLabel: 'WhatsApp', home: 'Terzi Can', toolbarLangs: 'Langues', rights: 'Anavera Tekstil · Terzi Can' },
  },

  // ───────────────────────────── Polski
  pl: {
    langName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr',
    title: 'Tekstylia reklamowe, torby materiałowe z logo | Anavera',
    desc: 'Torby materiałowe z logo, koszulki, kamizelki polarowe, kurtki, fartuchy i mundury na targi i eventy. Wycena po wiadomości na WhatsAppie.',
    badge: 'Targi · Wydarzenia · Gadżety reklamowe i upominki',
    h1: 'Tekstylia reklamowe i torby materiałowe z nadrukiem logo',
    lead: 'Szyjemy dla firm torby materiałowe z logo, koszulki, kamizelki polarowe, kurtki i mundury. Projekt i nadruk ustalamy wspólnie z Państwem, a produkt powstaje w wybranym przez Państwa modelu i z wybranym nadrukiem.',
    cta: 'Poproś o wycenę na WhatsAppie',
    wa: 'Dzień dobry, proszę o wycenę toreb materiałowych z nadrukiem i tekstyliów reklamowych z naszym logo. Mogę przesłać plik z logo lub projektem.',
    makeTitle: 'Co wykonujemy',
    makeIntro: 'Wyroby tekstylne na reklamę i upominki, każdy z Państwa logo i w wybranym wzorze.',
    items: [
      ['Torby materiałowe', 'Torby materiałowe z nadrukiem i logo dla firm: szycie i nadruk. Na targi i wydarzenia, jako reklama lub upominek.'],
      ['Koszulki', 'Koszulki z nadrukiem: z Państwa logo lub własnym projektem.'],
      ['Kamizelki polarowe', 'Kamizelki polarowe z logo dla zespołów i personelu.'],
      ['Kurtki', 'Kurtki z logo w modelu dopasowanym do potrzeb.'],
      ['Spodnie', 'Spodnie jako element stroju zespołu lub munduru.'],
      ['Szorty', 'Szorty na wydarzenia i do odzieży zespołowej.'],
      ['Fartuchy', 'Fartuchy z nadrukiem logo.'],
      ['Mundury', 'Mundury w wybranym modelu i z wybranym nadrukiem.'],
    ],
    makeMore: 'Potrzebują Państwo innego wyrobu tekstylnego? Proszę opisać pomysł, przyjrzymy mu się razem.',
    printTitle: 'Nadruk i projekt logo',
    printText: 'Jeśli logo jest gotowe, wystarczy przesłać plik. Jeśli go jeszcze nie ma albo chcą Państwo je odświeżyć, projektujemy także logo. Rodzaj nadruku dobieramy wspólnie, zależnie od produktu i projektu. Wykonujemy sitodruk, haft, nadruk transferowy i druk DTF.',
    printList: ['Można zacząć od pliku z logo lub projektem', 'Na początek wystarczy sam pomysł', 'Model, produkt i rodzaj nadruku wybieramy wspólnie'],
    fairTitle: 'Na targi i wydarzenia',
    fairText: 'Wykonujemy wyroby tekstylne potrzebne na targach i wydarzeniach, takich jak EXPO w Antalyi i inne targi: odzież zespołową, mundury, torby do rozdawania i upominki.',
    flowTitle: 'Jak przebiega zamówienie',
    flowIntro: 'To trzy kroki.',
    steps: [
      ['Logo, projekt lub pomysł', 'Proszę napisać do nas na WhatsAppie i dołączyć plik z logo, projekt albo zwykły opis tego, co Państwo chcą otrzymać.'],
      ['Wybór modelu, produktu i nadruku', 'Model, produkt i nadruk ustalamy razem.'],
      ['Produkcja', 'Gdy wszystko jest uzgodnione, zamówienie trafia do produkcji.'],
    ],
    flowNote: 'Termin i cena wynikają z konkretnego zamówienia. Nie podajemy z góry stałych kwot; wycenę otrzymają Państwo na WhatsAppie.',
    faqTitle: 'Najczęstsze pytania',
    faq: [
      ['Na jakich produktach można umieścić moje logo?', 'Na torbach materiałowych, koszulkach, kamizelkach polarowych, kurtkach, spodniach, szortach, fartuchach i mundurach, a także na innych wyrobach tekstylnych. Jeśli potrzebują Państwo czegoś innego, proszę zapytać.'],
      ['Nie mam logo. Czy mogą Państwo pomóc?', 'Tak, projektujemy także logo. Można zacząć od samego pomysłu, rozwiniemy go razem.'],
      ['Ile sztuk trzeba zamówić?', 'To zależy od modelu, ilości i nadruku. Proszę napisać na WhatsAppie, a doprecyzujemy to dla Państwa zamówienia.'],
      ['Ile to kosztuje i jak długo trwa?', 'Jedno i drugie zależy od zamówienia: modelu, ilości i nadruku. Po otrzymaniu zapytania na WhatsAppie możemy odpowiedzieć konkretnie.'],
      ['Co wysłać, żeby dostać wycenę?', 'Plik z logo lub projektem, jeśli jest, wybrany produkt i orientacyjną ilość. Wystarczy też pomysł albo zdjęcie poglądowe.'],
    ],
    ctaTitle: 'Poproś o wycenę na WhatsAppie',
    ctaText: 'Prześlij logo, projekt lub pomysł, a następny krok ustalimy razem.',
    relTitle: 'Powiązane strony', relMain: 'Terzi Can: krawiec w Antalyi', relAnavera: 'Anavera Tekstil: produkcja odzieży i eksport',
    ui: { call: 'Zadzwoń', contact: 'Kontakt', waLabel: 'WhatsApp', home: 'Terzi Can', toolbarLangs: 'Języki', rights: 'Anavera Tekstil · Terzi Can' },
  },

  // ───────────────────────────── Українська
  uk: {
    langName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr',
    title: 'Рекламний текстиль і сумки з друком логотипу | Anavera',
    desc: 'Тканинні сумки з вашим логотипом, футболки, флісові жилети, куртки, фартухи та уніформа для виставок і заходів. Розрахунок — у WhatsApp.',
    badge: 'Виставки · Заходи · Рекламна й подарункова продукція',
    h1: 'Рекламний текстиль і пошиття тканинних сумок із друком',
    lead: 'Шиємо для компаній тканинні сумки з логотипом, футболки, флісові жилети, куртки та уніформу. Дизайн і друк узгоджуємо разом із вами, а виріб робимо в потрібній вам моделі та з потрібним друком.',
    cta: 'Запитати розрахунок у WhatsApp',
    wa: 'Доброго дня! Хочу отримати розрахунок на тканинні сумки з друком і рекламний текстиль з нашим логотипом. Можу надіслати файл логотипу або макета.',
    makeTitle: 'Що ми виготовляємо',
    makeIntro: 'Текстиль для реклами та подарунків. Усе виготовляється з вашим логотипом і в потрібному вам оформленні.',
    items: [
      ['Тканинні сумки', 'Тканинні сумки з друком і логотипом для компаній: пошиття та нанесення. Для виставок і заходів, як реклама або подарунок.'],
      ['Футболки', 'Футболки з друком: з вашим логотипом або власним малюнком.'],
      ['Флісові жилети', 'Флісові жилети з логотипом для команди та персоналу.'],
      ['Куртки', 'Куртки з логотипом у моделі, що відповідає вашому завданню.'],
      ['Штани', 'Штани як частина командного одягу чи уніформи.'],
      ['Шорти', 'Шорти для заходів і командного одягу.'],
      ['Фартухи', 'Фартухи з нанесеним логотипом.'],
      ['Уніформа', 'Уніформа в потрібній вам моделі та з потрібним друком.'],
    ],
    makeMore: 'Потрібен інший текстильний виріб? Розкажіть про свою ідею, і ми розглянемо її разом.',
    printTitle: 'Друк і розробка логотипу',
    printText: 'Якщо логотип готовий, надішліть файл. Якщо його ще немає або хочеться оновити, ми розробимо й логотип. Вид друку обираємо разом, залежно від виробу та малюнка. Ми виконуємо шовкографію, вишивку, трансферний друк і DTF-друк.',
    printList: ['Можна почати з файлу логотипу або макета', 'Для початку досить самої ідеї', 'Модель, виріб і вид друку обираємо разом'],
    fairTitle: 'Для виставок і заходів',
    fairText: 'Виготовляємо текстильні вироби, які потрібні на виставках і заходах, зокрема на EXPO та інших виставках в Анталії: командний одяг, уніформу, сумки для роздачі та подарункові вироби.',
    flowTitle: 'Як проходить замовлення',
    flowIntro: 'Усе вміщається у три кроки.',
    steps: [
      ['Логотип, макет або ідея', 'Напишіть нам у WhatsApp: додайте файл логотипу, макет або просто опишіть, що хочете отримати.'],
      ['Вибір моделі, виробу та друку', 'Модель, виріб і друк узгоджуємо разом.'],
      ['Виробництво', 'Коли все погоджено, замовлення йде у виробництво.'],
    ],
    flowNote: 'Строки та вартість визначаються під кожне замовлення. Конкретних цифр наперед не називаємо: розрахунок ви отримаєте у WhatsApp.',
    faqTitle: 'Поширені запитання',
    faq: [
      ['На яких виробах можна розмістити мій логотип?', 'На тканинних сумках, футболках, флісових жилетах, куртках, штанях, шортах, фартухах і уніформі, а також на інших текстильних виробах. Якщо потрібне щось інше, просто запитайте.'],
      ['У мене немає логотипу. Ви допоможете?', 'Так, ми розробляємо й логотипи. Можна почати з однієї ідеї: доопрацюємо її разом із вами.'],
      ['Скільки штук потрібно замовити?', 'Це залежить від моделі, кількості та друку. Напишіть нам у WhatsApp, і ми уточнимо для вашого замовлення.'],
      ['Скільки це коштує і як швидко ви виконуєте?', 'І те, й інше залежить від замовлення: моделі, кількості та друку. Після вашого запиту у WhatsApp зможемо відповісти конкретно.'],
      ['Що надіслати, щоб отримати розрахунок?', 'Файл логотипу чи макета, якщо він є, потрібний виріб і приблизну кількість. Підійде й просто ідея або фото-приклад.'],
    ],
    ctaTitle: 'Запитайте розрахунок у WhatsApp',
    ctaText: 'Надішліть логотип, макет або ідею, і ми разом визначимо наступний крок.',
    relTitle: 'Пов\'язані сторінки', relMain: 'Terzi Can: кравець в Анталії', relAnavera: 'Anavera Tekstil: виробництво одягу та експорт',
    ui: { call: 'Зателефонувати', contact: 'Контакти', waLabel: 'WhatsApp', home: 'Terzi Can', toolbarLangs: 'Мови', rights: 'Anavera Tekstil · Terzi Can' },
  },

  // ───────────────────────────── Nederlands
  nl: {
    langName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr',
    title: 'Promotietextiel en bedrukte stoffen tassen | Anavera',
    desc: 'Stoffen tassen met uw logo, plus T-shirts, fleecebodywarmers, jassen, schorten en uniformen voor beurzen en evenementen. Offerte via WhatsApp.',
    badge: 'Beurzen · Evenementen · Promotie-artikelen en relatiegeschenken',
    h1: 'Promotietextiel en bedrukte stoffen tassen met uw logo',
    lead: 'Wij maken voor bedrijven stoffen tassen met logo, T-shirts, fleecebodywarmers, jassen en uniformen. Ontwerp en bedrukking bepalen we samen met u, en het product wordt gemaakt in het model en met de bedrukking die u kiest.',
    cta: 'Offerte aanvragen via WhatsApp',
    wa: 'Hallo, ik wil graag een offerte voor bedrukte stoffen tassen en promotietextiel met ons logo. Ik kan het logo- of ontwerpbestand sturen.',
    makeTitle: 'Wat wij maken',
    makeIntro: 'Textielproducten voor promotie en als geschenk, allemaal met uw logo en het ontwerp dat u wilt.',
    items: [
      ['Stoffen tassen', 'Bedrukte stoffen tassen met logo voor bedrijven: productie en bedrukking. Voor beurzen en evenementen, als promotie of als relatiegeschenk.'],
      ['T-shirts', 'Bedrukte T-shirts met uw logo of eigen ontwerp.'],
      ['Fleecebodywarmers', 'Fleecebodywarmers met uw logo voor teams en personeel.'],
      ['Jassen', 'Jassen met uw logo, in het model dat bij uw wensen past.'],
      ['Broeken', 'Broeken als onderdeel van teamkleding of een uniform.'],
      ['Korte broeken', 'Korte broeken voor evenementen en teamkleding.'],
      ['Schorten', 'Schorten met uw logo erop.'],
      ['Uniformen', 'Uniformen in het gewenste model en met de gewenste bedrukking.'],
    ],
    makeMore: 'Heeft u een ander textielproduct nodig? Vertel ons uw idee, dan kijken we er samen naar.',
    printTitle: 'Bedrukking en logo-ontwerp',
    printText: 'Is uw logo klaar, stuur dan het bestand. Heeft u er nog geen of wilt u het vernieuwen, dan ontwerpen wij het logo ook. De soort bedrukking kiezen we samen, passend bij het product en het ontwerp. Wij doen zeefdruk, borduren, transferdruk en DTF-druk.',
    printList: ['U kunt beginnen met een logo- of ontwerpbestand', 'Een idee is genoeg om te starten', 'Model, product en soort bedrukking kiezen we samen'],
    fairTitle: 'Voor beurzen en evenementen',
    fairText: 'Wij maken de textielproducten die op beurzen en evenementen nodig zijn, zoals de EXPO in Antalya en andere beurzen: teamkleding, uniformen, tassen om uit te delen en relatiegeschenken.',
    flowTitle: 'Zo verloopt een bestelling',
    flowIntro: 'In drie stappen.',
    steps: [
      ['Stuur logo, ontwerp of idee', 'Stuur ons een bericht via WhatsApp met een logobestand, een ontwerp of gewoon een beschrijving van wat u wilt.'],
      ['Model, product en bedrukking kiezen', 'Model, product en bedrukking leggen we samen vast.'],
      ['Productie', 'Zodra alles is afgestemd, gaat uw bestelling in productie.'],
    ],
    flowNote: 'Levertijd en prijs bepalen we per bestelling. Vooraf noemen we geen vaste bedragen; de offerte krijgt u via WhatsApp.',
    faqTitle: 'Veelgestelde vragen',
    faq: [
      ['Op welke producten kan mijn logo?', 'Op stoffen tassen, T-shirts, fleecebodywarmers, jassen, broeken, korte broeken, schorten en uniformen, en op andere textielproducten. Heeft u iets anders nodig, vraag het gerust.'],
      ['Ik heb nog geen logo. Kunnen jullie helpen?', 'Ja, wij ontwerpen ook logo\'s. U kunt ook met alleen een idee beginnen; we werken het samen met u uit.'],
      ['Hoeveel stuks moet ik bestellen?', 'Dat hangt af van het model, het aantal en de bedrukking. Stuur ons een bericht via WhatsApp, dan bepalen we het voor uw bestelling.'],
      ['Wat kost het en hoe lang duurt het?', 'Beide hangen af van de bestelling: model, aantal en bedrukking. Na uw aanvraag via WhatsApp kunnen we concreet antwoord geven.'],
      ['Wat stuur ik voor een offerte?', 'Uw logo- of ontwerpbestand als u dat heeft, het gewenste product en ongeveer het aantal. Een idee of een voorbeeldfoto is ook goed.'],
    ],
    ctaTitle: 'Vraag uw offerte aan via WhatsApp',
    ctaText: 'Stuur uw logo, ontwerp of idee, en we bepalen samen de volgende stap.',
    relTitle: 'Gerelateerde pagina\'s', relMain: 'Terzi Can: kleermaker in Antalya', relAnavera: 'Anavera Tekstil: kledingproductie en export',
    ui: { call: 'Bellen', contact: 'Contact', waLabel: 'WhatsApp', home: 'Terzi Can', toolbarLangs: 'Talen', rights: 'Anavera Tekstil · Terzi Can' },
  },

  // ───────────────────────────── العربية
  ar: {
    langName: 'العربية', hreflang: 'ar', ogLocale: 'ar_AR', dir: 'rtl',
    title: 'منسوجات دعائية وحقائب قماش مطبوعة | Anavera',
    desc: 'حقائب قماش بشعارك، مع قمصان وصدريات فليس وجاكيتات ومآزر وزيّ موحّد للمعارض والفعاليات. اطلب عرض السعر عبر واتساب.',
    badge: 'معارض · فعاليات · منتجات دعائية وهدايا',
    h1: 'منسوجات دعائية وتصنيع حقائب قماش مطبوعة بشعارك',
    lead: 'نصنع للشركات حقائب قماش بشعارها وقمصانًا وصدريات فليس وجاكيتات وزيًّا موحّدًا. نتفق معك على التصميم والطباعة، ثم نصنع القطعة بالموديل والطباعة اللذين تختارهما.',
    cta: 'اطلب عرض السعر عبر واتساب',
    wa: 'مرحبًا، أريد عرض سعر لحقائب قماش مطبوعة ومنسوجات دعائية بشعارنا. يمكنني إرسال ملف الشعار أو التصميم.',
    makeTitle: 'ماذا نصنع',
    makeIntro: 'منتجات نسيجية للدعاية والهدايا، تُجهَّز كلها بشعارك وبالتصميم الذي تريده.',
    items: [
      ['حقائب القماش', 'حقائب قماش مطبوعة وبشعار الشركة: تصنيع وطباعة. للمعارض والفعاليات، للدعاية أو كهدايا.'],
      ['القمصان (تيشيرت)', 'قمصان مطبوعة بشعارك أو بتصميمك الخاص.'],
      ['صدريات الفليس', 'صدريات فليس بشعارك للفرق والموظفين.'],
      ['الجاكيتات', 'جاكيتات بشعارك بالموديل الذي يناسب حاجتك.'],
      ['البناطيل', 'بناطيل تكمل زيّ الفريق أو الزيّ الموحّد.'],
      ['الشورتات', 'شورتات للفعاليات وملابس الفرق.'],
      ['المآزر', 'مآزر مطبوع عليها شعارك.'],
      ['الزيّ الموحّد', 'زيّ موحّد بالموديل والطباعة اللذين تريدهما.'],
    ],
    makeMore: 'هل تحتاج منتجًا نسيجيًا غير مذكور؟ أخبرنا بفكرتك وننظر فيها معًا.',
    printTitle: 'الطباعة وتصميم الشعار',
    printText: 'إن كان شعارك جاهزًا فأرسل لنا الملف. وإن لم يكن لديك شعار بعد أو أردت تجديده فنحن نصمّم الشعار أيضًا. نختار نوع الطباعة معًا بحسب المنتج والتصميم. ننفّذ الطباعة بالشاشة الحريرية والتطريز والطباعة بالنقل الحراري وطباعة DTF.',
    printList: ['يمكنك البدء بملف شعار أو تصميم', 'تكفي فكرة للبدء', 'نختار الموديل والمنتج ونوع الطباعة معًا'],
    fairTitle: 'للمعارض والفعاليات',
    fairText: 'ننتج المنتجات النسيجية التي تلزم في المعارض والفعاليات، ومنها معرض إكسبو وغيره من المعارض في أنطاليا: ملابس الفرق والزيّ الموحّد وحقائب للتوزيع وهدايا.',
    flowTitle: 'كيف يسير الطلب',
    flowIntro: 'في ثلاث خطوات.',
    steps: [
      ['أرسل الشعار أو التصميم أو الفكرة', 'راسلنا عبر واتساب مع ملف الشعار أو تصميم، أو اكتب لنا ببساطة ما تريده.'],
      ['اختيار الموديل والمنتج والطباعة', 'نحدد معًا الموديل والمنتج والطباعة.'],
      ['التصنيع', 'عند الاتفاق على كل شيء يبدأ تصنيع طلبك.'],
    ],
    flowNote: 'المدة والسعر يُحدَّدان لكل طلب على حدة. لا نذكر أرقامًا ثابتة مسبقًا، وستحصل على عرض السعر عبر واتساب.',
    faqTitle: 'الأسئلة الشائعة',
    faq: [
      ['على أي المنتجات يمكن طباعة شعاري؟', 'على حقائب القماش والقمصان وصدريات الفليس والجاكيتات والبناطيل والشورتات والمآزر والزيّ الموحّد، وعلى منتجات نسيجية أخرى. وإن احتجت شيئًا آخر فاسألنا.'],
      ['ليس لدي شعار. هل تساعدونني؟', 'نعم، نصمّم الشعارات أيضًا. يمكنك البدء بفكرة فقط ونطوّرها معك.'],
      ['كم قطعة يجب أن أطلب؟', 'يعتمد ذلك على الموديل والكمية والطباعة. راسلنا عبر واتساب ونحدده لطلبك.'],
      ['كم السعر وكم المدة؟', 'كلاهما يعتمد على الطلب: الموديل والكمية والطباعة. بعد وصول استفسارك عبر واتساب نستطيع الإجابة بدقة.'],
      ['ماذا أرسل للحصول على عرض سعر؟', 'ملف الشعار أو التصميم إن وُجد، والمنتج المطلوب، وكمية تقريبية. وتكفي أيضًا فكرة أو صورة مرجعية.'],
    ],
    ctaTitle: 'اطلب عرض السعر عبر واتساب',
    ctaText: 'أرسل شعارك أو تصميمك أو فكرتك ونحدد معًا الخطوة التالية.',
    relTitle: 'صفحات ذات صلة', relMain: 'Terzi Can: خيّاط في أنطاليا', relAnavera: 'Anavera Tekstil: تصنيع الملابس والتصدير',
    ui: { call: 'اتصل', contact: 'التواصل', waLabel: 'واتساب', home: 'Terzi Can', toolbarLangs: 'اللغات', rights: 'Anavera Tekstil · Terzi Can' },
  },
};

// ── Metadata ────────────────────────────────────────────────
// Net cevap: yurt dışı gönderim sorusu (üretim sayfalarıyla aynı, doğrulanmış bilgi). Fiyat/adet/süre uydurulmaz.
for (const l of PLANGS) {
  const q = UDATA[l].gonderim.faq[0];
  if (!COPY[l].faq.some((x) => x[0] === q[0])) COPY[l].faq = [...COPY[l].faq, q];
}

export function buildPromoMetadata(lang: PLang): Metadata {
  const c = COPY[lang];
  const url = promoUrl(lang);
  return {
    metadataBase: new URL(SITE),
    title: { absolute: c.title },
    description: c.desc,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: { canonical: url, languages: promoAlternates() },
    openGraph: {
      title: c.title, description: c.desc, url, siteName: 'Anavera Tekstil', locale: c.ogLocale, type: 'website',
      images: [{ url: OG, width: 1200, height: 630, alt: c.h1 }],
    },
    twitter: { card: 'summary_large_image', title: c.title, description: c.desc, images: [OG] },
    other: { contact: PHONE_E },
  };
}

// ── JSON-LD (Organization + WebPage + Service + BreadcrumbList + FAQPage). Puan/yorum şeması YOK. ──
export function buildPromoJsonLd(lang: PLang) {
  const c = COPY[lang];
  const url = promoUrl(lang);
  const anaveraId = `${SITE}/anavera-tekstil#business`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', '@id': anaveraId, name: 'Anavera Tekstil', url: `${SITE}/anavera-tekstil`, telephone: PHONE_E,
        address: { '@type': 'PostalAddress', addressLocality: 'Antalya', addressRegion: 'Antalya', addressCountry: 'TR' },
        parentOrganization: { '@id': `${SITE}#business` },
      },
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang,
        about: { '@id': `${url}#service` }, primaryImageOfPage: { '@id': `${url}#img-0` }, isPartOf: { '@id': `${SITE}#website` },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-h', '.hero-desc'] },
      },
      {
        '@type': 'Service', '@id': `${url}#service`, name: c.h1, description: c.lead, inLanguage: lang,
        serviceType: 'Promotional textiles and printed tote bag manufacturing',
        provider: { '@id': anaveraId },
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: waLink(c.wa), servicePhone: PHONE_E },
        hasOfferCatalog: {
          '@type': 'OfferCatalog', name: c.makeTitle,
          itemListElement: c.items.map(([name, desc]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, description: desc } })),
        },
      },
      ...PROMO_FOTOLAR.map((f) => ({
        '@type': 'ImageObject', '@id': `${url}#img-${f.idx}`, contentUrl: `${SITE}${f.src}`, url: `${SITE}${f.src}`,
        name: c.items[f.idx][0], caption: c.items[f.idx][1], description: `${c.items[f.idx][0]} (${ORNEK_GORSEL[lang]})`,
        width: 1264, height: 848, inLanguage: lang,
      })),
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Anavera Tekstil', item: `${SITE}${ANAVERA_TARGET[lang].path}` },
          { '@type': 'ListItem', position: 3, name: PROMO_NAME[lang], item: url },
        ],
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };
}
