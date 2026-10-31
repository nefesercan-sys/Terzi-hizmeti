// ============================================================
// components/IletisimSayfasi.tsx — 4 dilli İLETİŞİM sayfası (TR/EN/RU/DE)
// Amaç: "terzi can telefon / iletişim / adres / whatsapp", "açık terzi", "terzi nerede" gibi
// iletişim niyetli aramalarda çıkacak, telefon + adres + saat + ihtiyaç bazlı kısayollar içeren sayfa.
// Tek doğruluk kaynağı: lib/seo-data.ts (SITE, PHONE, PHONE_TEL, MAPS, SERVICES, serviceUrl...).
// Siteye özgü ayarlar yalnızca aşağıdaki SITE_CFG bloğundadır.
// ============================================================
import type { Metadata } from 'next';
import {
  SITE, PHONE, PHONE_TEL, MAPS, LANGS, LAST_UPDATE, SERVICES, SERVICE_BASE, HUB_MAIN, HOTEL_BASE,
  serviceUrl, type Lang,
} from '@/lib/seo-data';

type L4<T = string> = Record<Lang, T>;

// ── Siteye özgü ayarlar ─────────────────────────────────────
const SITE_CFG = {
  businessId: `${SITE}#business`,
  businessName: 'Terzi Can',
  image: `${SITE}/terzi-can-hero.jpg`,
  geo: { latitude: 36.857466, longitude: 30.596987 },
  sameAs: [MAPS, `https://wa.me/${PHONE_TEL.replace('+', '')}`, 'https://swaphubs.com/terzi'],
  contactUrl: {
    tr: '/iletisim',
    en: '/en/contact-tailor-antalya',
    ru: '/ru/kontakty-portnoy-antalya',
    de: '/de/kontakt-schneider-antalya',
  } as L4,
  pricesUrl: {
    tr: '/antalya-terzi-fiyatlari',
    en: '/en/tailor-prices-antalya',
    ru: '/ru/ceny-portnoy-antalya',
    de: '/de/schneider-preise-antalya',
  } as L4,
  homeUrl: { tr: '/', en: '/', ru: '/', de: '/' } as L4,
  siteName: 'Terzi Can',
};

export const CONTACT_URL = SITE_CFG.contactUrl;

const OG_LOCALE: L4 = { tr: 'tr_TR', en: 'en_US', ru: 'ru_RU', de: 'de_DE' };
const PHONE_LOCAL = '0531 898 64 18';
const WA_BASE = `https://wa.me/${PHONE_TEL.replace('+', '')}`;
const abs = (p: string) => `${SITE}${p === '/' ? '' : p}`;

// ── Metinler ────────────────────────────────────────────────
const T = {
  tr: {
    title: `Terzi Can İletişim | ${PHONE_LOCAL} · WhatsApp · Adres`,
    desc: `Terzi Can Antalya telefon: ${PHONE} (WhatsApp). Hurma Mah., Konyaaltı. Her gün 08:00–23:00. Fotoğraf gönderin, fiyatı hemen öğrenin.`,
    tag: 'Antalya · Konyaaltı · Her gün 08:00–23:00',
    h1: 'Terzi Can İletişim',
    lead: 'Telefon, WhatsApp ve adres bilgileri. Aramanız ya da yazmanız yeterli: fotoğraf gönderin, fiyatı ve teslim süresini öğrenin.',
    call: 'Hemen Ara', wa: "WhatsApp'tan Yaz", maps: 'Yol Tarifi (Google Haritalar)',
    infoH: 'İletişim Bilgileri',
    rows: [
      ['Telefon / WhatsApp', PHONE],
      ['Adres', 'Hurma Mahallesi, 07130 Konyaaltı / Antalya'],
      ['Çalışma saatleri', 'Her gün 08:00–23:00 (Cumartesi ve Pazar dahil)'],
      ['Diller', 'Türkçe, İngilizce, Rusça, Almanca'],
      ['Servis', 'Konyaaltı\'nda otel ve eve ücretsiz alım-teslim (diğer bölgelerde ücret mesafeye göre, WhatsApp\'ta planlanır)'],
    ] as [string, string][],
    needH: 'Ne için arıyorsunuz?',
    needSub: 'İhtiyacınıza dokunun: ilgili sayfaya gidin ya da doğrudan WhatsApp\'tan sorun.',
    waShort: 'WhatsApp',
    stepsH: 'Nasıl çalışıyoruz?',
    steps: [
      ['1', 'Fotoğraf gönderin', 'WhatsApp\'tan kıyafetin ve istediğiniz işlemin fotoğrafını yollayın.'],
      ['2', 'Fiyat ve süre', 'Size fiyatı ve teslim süresini bildiririz. Normal işler ertesi gün, acil işler 1–2 saatte hazırdır.'],
      ['3', 'Gelin ya da biz gelelim', 'Atölyemize uğrayın veya otel/eve alım-teslim isteyin (Konyaaltı\'nda ücretsiz).'],
    ] as [string, string, string][],
    faqH: 'Sık sorulan sorular',
    faq: [
      ['Terzi Can telefon numarası nedir?', `Telefon ve WhatsApp numaramız ${PHONE}. Arayabilir ya da WhatsApp'tan yazabilirsiniz.`],
      ['Pazar günü açık mısınız?', 'Evet. Terzi Can haftanın 7 günü, Cumartesi ve Pazar dahil, 08:00–23:00 arası açıktır.'],
      ['Fiyatı nasıl öğrenirim?', 'Kıyafetin fotoğrafını WhatsApp\'tan gönderin. Başlangıç fiyatları: paça kısaltma ₺200\'den, fermuar değişimi ₺300\'den, abiye tadilatı ₺800\'den, gelinlik tadilatı ₺800\'den.'],
      ['Adrese veya otele geliyor musunuz?', 'Evet, Konyaaltı\'nda otel ve eve ücretsiz alım-teslim yapıyoruz. Uzak bölgeler için alım-teslim WhatsApp\'ta planlanır.'],
      ['Atölyeniz nerede?', 'Hurma Mahallesi, 07130 Konyaaltı / Antalya. Google Haritalar\'dan yol tarifi alabilirsiniz.'],
      ['Hangi dillerde hizmet veriyorsunuz?', 'Türkçe, İngilizce, Rusça ve Almanca.'],
    ] as [string, string][],
    moreH: 'Diğer sayfalar',
    more: { prices: 'Terzi fiyatları', services: 'Tüm terzi hizmetleri', hotel: 'Otele gelen terzi', home: 'Ana sayfa' },
    waMsg: 'Merhaba, terzi hizmeti hakkında bilgi almak istiyorum.',
    waNeed: (n: string) => `Merhaba, "${n}" konusunda fiyat ve süre öğrenmek istiyorum.`,
    crumbHome: 'Ana sayfa', crumbThis: 'İletişim',
    needs: {
      paca: 'Pantolonum uzun, kısaltmak istiyorum', fermuar: 'Fermuarım bozuldu', bel: 'Bel bol geliyor, daraltmak istiyorum',
      'elbise-tamir': 'Elbisem yırtıldı veya söküldü', 'elbise-dikim': 'Ölçüme göre elbise diktirmek istiyorum',
      'gelinlik-abiye': 'Gelinlik veya abiye tadilatı', hotel: 'Otelde kaldım, terzi otele gelsin', prices: 'Fiyat öğrenmek istiyorum',
    },
  },
  en: {
    title: `Contact Tailor Antalya | ${PHONE} · WhatsApp`,
    desc: `Terzi Can tailor, Antalya: call or WhatsApp ${PHONE}. Hurma, Konyaaltı. Open daily 08:00–23:00. Send a photo, get the price today.`,
    tag: 'Antalya · Konyaaltı · Open daily 08:00–23:00',
    h1: 'Contact Terzi Can — Tailor in Antalya',
    lead: 'Phone, WhatsApp and address. Call or message us: send a photo and get the price and turnaround time the same day.',
    call: 'Call now', wa: 'Message on WhatsApp', maps: 'Directions (Google Maps)',
    infoH: 'Contact details',
    rows: [
      ['Phone / WhatsApp', PHONE],
      ['Address', 'Hurma Mahallesi, 07130 Konyaaltı / Antalya, Türkiye'],
      ['Opening hours', 'Every day 08:00–23:00 (including Saturday and Sunday)'],
      ['Languages', 'English, Turkish, Russian, German'],
      ['Service', 'Free pick-up and delivery to hotels in every area we serve; home addresses are free in Konyaaltı and nearby neighbourhoods (other areas: ask on WhatsApp)'],
    ] as [string, string][],
    needH: 'What do you need?',
    needSub: 'Tap what you need: open the page or ask directly on WhatsApp.',
    waShort: 'WhatsApp',
    stepsH: 'How it works',
    steps: [
      ['1', 'Send a photo', 'Send a photo of the garment and what you need on WhatsApp.'],
      ['2', 'Price and time', 'We reply with the price and turnaround. Hemming, waist and zipper jobs are mostly ready the same day.'],
      ['3', 'Visit us or we come to you', 'Drop in at our workshop or ask for hotel/home pick-up and delivery (hotel service is free).'],
    ] as [string, string, string][],
    faqH: 'Frequently asked questions',
    faq: [
      ['What is the phone number of Terzi Can?', `Our phone and WhatsApp number is ${PHONE}. You can call or message us on WhatsApp.`],
      ['Are you open on Sunday?', 'Yes. Terzi Can is open 7 days a week, including Saturday and Sunday, from 08:00 to 23:00.'],
      ['How do I get a price?', 'Send a photo of the garment on WhatsApp. Starting prices: hemming from ₺200, zipper replacement from ₺300, evening dress alterations from ₺800, wedding gown alterations from ₺800.'],
      ['Do you pick up from hotels or homes?', 'Yes, we offer free pick-up and delivery to hotels and homes in Konyaaltı. For farther areas, pick-up is arranged on WhatsApp.'],
      ['Where is your workshop?', 'Hurma Mahallesi, 07130 Konyaaltı / Antalya. Get directions on Google Maps.'],
      ['Which languages do you speak?', 'English, Turkish, Russian and German.'],
    ] as [string, string][],
    moreH: 'More pages',
    more: { prices: 'Tailor prices', services: 'All tailor services', hotel: 'Hotel tailor service', home: 'Home' },
    waMsg: 'Hello! I am looking for tailor and alteration services in Antalya.',
    waNeed: (n: string) => `Hello! I would like the price and turnaround for: "${n}".`,
    crumbHome: 'Home', crumbThis: 'Contact',
    needs: {
      paca: 'My trousers are too long', fermuar: 'My zipper is broken', bel: 'The waist is too loose',
      'elbise-tamir': 'My dress is torn or the seam came apart', 'elbise-dikim': 'I want a custom-made dress',
      'gelinlik-abiye': 'Wedding or evening dress alteration', hotel: 'I am in a hotel — tailor should come to me', prices: 'I want to know the prices',
    },
  },
  ru: {
    title: `Контакты портного в Анталье | ${PHONE} · WhatsApp`,
    desc: `Портной Terzi Can, Анталья: звоните или пишите в WhatsApp ${PHONE}. Хурма, Коньяалты. Ежедневно 08:00–23:00. Пришлите фото, цену скажем сразу.`,
    tag: 'Анталья · Коньяалты · Ежедневно 08:00–23:00',
    h1: 'Контакты Terzi Can — портной в Анталье',
    lead: 'Телефон, WhatsApp и адрес. Позвоните или напишите: пришлите фото и на следующий день узнайте цену и срок.',
    call: 'Позвонить', wa: 'Написать в WhatsApp', maps: 'Маршрут (Google Maps)',
    infoH: 'Контактная информация',
    rows: [
      ['Телефон / WhatsApp', PHONE],
      ['Адрес', 'Hurma Mahallesi, 07130 Коньяалты / Анталья, Турция'],
      ['Часы работы', 'Ежедневно 08:00–23:00 (включая субботу и воскресенье)'],
      ['Языки', 'Русский, турецкий, английский, немецкий'],
      ['Сервис', 'Бесплатный забор и доставка в отели и на дом (дальние районы — по договорённости в WhatsApp)'],
    ] as [string, string][],
    needH: 'Что вам нужно?',
    needSub: 'Выберите задачу: откройте страницу или спросите сразу в WhatsApp.',
    waShort: 'WhatsApp',
    stepsH: 'Как это работает',
    steps: [
      ['1', 'Пришлите фото', 'Отправьте в WhatsApp фото вещи и напишите, что нужно сделать.'],
      ['2', 'Цена и срок', 'Мы ответим с ценой и сроком. Подшив, талия и молния чаще всего готовы на следующий день.'],
      ['3', 'Приходите или мы приедем', 'Заходите в мастерскую или закажите забор и доставку в отель или на дом (для отелей бесплатно).'],
    ] as [string, string, string][],
    faqH: 'Частые вопросы',
    faq: [
      ['Какой телефон у Terzi Can?', `Телефон и WhatsApp: ${PHONE}. Можно позвонить или написать в WhatsApp.`],
      ['Вы работаете в воскресенье?', 'Да. Terzi Can работает 7 дней в неделю, включая субботу и воскресенье, с 08:00 до 23:00.'],
      ['Как узнать цену?', 'Пришлите фото вещи в WhatsApp. Цены от: подшив брюк от ₺200, замена молнии от ₺300, переделка вечернего платья от ₺800, свадебного платья от ₺800.'],
      ['Вы забираете вещи из отеля или с дома?', 'Да, в Коньяалты забор и доставка в отели и на дом бесплатны. Для дальних районов забор согласуется в WhatsApp.'],
      ['Где находится мастерская?', 'Hurma Mahallesi, 07130 Коньяалты / Анталья. Маршрут — в Google Maps.'],
      ['На каких языках вы обслуживаете?', 'На русском, турецком, английском и немецком.'],
    ] as [string, string][],
    moreH: 'Другие страницы',
    more: { prices: 'Цены портного', services: 'Все услуги портного', hotel: 'Портной с выездом в отель', home: 'Главная' },
    waMsg: 'Здравствуйте! Меня интересуют услуги портного и ремонта одежды в Анталье.',
    waNeed: (n: string) => `Здравствуйте! Хочу узнать цену и срок: «${n}».`,
    crumbHome: 'Главная', crumbThis: 'Контакты',
    needs: {
      paca: 'Брюки длинные, нужно подшить', fermuar: 'Сломалась молния', bel: 'Велико в талии, нужно ушить',
      'elbise-tamir': 'Порвалось или распоролось платье', 'elbise-dikim': 'Хочу платье на заказ по моим меркам',
      'gelinlik-abiye': 'Переделка свадебного или вечернего платья', hotel: 'Я в отеле — нужен портной с выездом', prices: 'Хочу узнать цены',
    },
  },
  de: {
    title: `Schneider Antalya Kontakt | ${PHONE} · WhatsApp`,
    desc: `Schneider Terzi Can, Antalya: Anruf oder WhatsApp ${PHONE}. Hurma, Konyaaltı. Täglich 08:00–23:00. Foto senden, Preis noch heute erfahren.`,
    tag: 'Antalya · Konyaaltı · Täglich 08:00–23:00',
    h1: 'Kontakt Terzi Can — Schneider in Antalya',
    lead: 'Telefon, WhatsApp und Adresse. Rufen Sie an oder schreiben Sie uns: Foto senden und Preis sowie Fertigstellungszeit noch am selben Tag erfahren.',
    call: 'Jetzt anrufen', wa: 'Per WhatsApp schreiben', maps: 'Route (Google Maps)',
    infoH: 'Kontaktdaten',
    rows: [
      ['Telefon / WhatsApp', PHONE],
      ['Adresse', 'Hurma Mahallesi, 07130 Konyaaltı / Antalya, Türkei'],
      ['Öffnungszeiten', 'Täglich 08:00–23:00 (auch samstags und sonntags)'],
      ['Sprachen', 'Deutsch, Englisch, Türkisch, Russisch'],
      ['Service', 'Kostenlose Abholung und Lieferung zu Hotels und nach Hause (weiter entfernte Gebiete per WhatsApp)'],
    ] as [string, string][],
    needH: 'Was brauchen Sie?',
    needSub: 'Tippen Sie auf Ihr Anliegen: Seite öffnen oder direkt per WhatsApp fragen.',
    waShort: 'WhatsApp',
    stepsH: 'So funktioniert es',
    steps: [
      ['1', 'Foto senden', 'Schicken Sie per WhatsApp ein Foto des Kleidungsstücks und Ihren Wunsch.'],
      ['2', 'Preis und Zeit', 'Wir nennen Preis und Fertigstellungszeit. Kürzen, Taille und Reißverschluss sind am nächsten Tag fertig (eilig in 1–2 Stunden).'],
      ['3', 'Kommen Sie vorbei oder wir kommen', 'Besuchen Sie unsere Werkstatt oder fragen Sie die Abholung und Lieferung ins Hotel oder nach Hause an (Hotelservice kostenlos).'],
    ] as [string, string, string][],
    faqH: 'Häufige Fragen',
    faq: [
      ['Wie lautet die Telefonnummer von Terzi Can?', `Telefon und WhatsApp: ${PHONE}. Sie können anrufen oder per WhatsApp schreiben.`],
      ['Haben Sie sonntags geöffnet?', 'Ja. Terzi Can ist 7 Tage die Woche, auch samstags und sonntags, von 08:00 bis 23:00 Uhr geöffnet.'],
      ['Wie erfahre ich den Preis?', 'Schicken Sie ein Foto des Kleidungsstücks per WhatsApp. Ab-Preise: Hose kürzen ab ₺200, Reißverschluss ersetzen ab ₺300, Abendkleid ändern ab ₺800, Brautkleid ändern ab ₺800.'],
      ['Holen Sie im Hotel oder zu Hause ab?', 'Ja, in Konyaaltı holen wir kostenlos im Hotel oder zu Hause ab und liefern zurück. Für weiter entfernte Gebiete wird die Abholung per WhatsApp geplant.'],
      ['Wo ist Ihre Werkstatt?', 'Hurma Mahallesi, 07130 Konyaaltı / Antalya. Die Route finden Sie bei Google Maps.'],
      ['Welche Sprachen sprechen Sie?', 'Schreiben Sie uns per WhatsApp in Ihrer Sprache.'],
    ] as [string, string][],
    moreH: 'Weitere Seiten',
    more: { prices: 'Schneider-Preise', services: 'Alle Schneider-Leistungen', hotel: 'Schneider-Service im Hotel', home: 'Startseite' },
    waMsg: 'Hallo! Ich suche einen Schneider für Änderungsschneiderei in Antalya.',
    waNeed: (n: string) => `Hallo! Ich möchte Preis und Dauer erfahren für: „${n}“.`,
    crumbHome: 'Startseite', crumbThis: 'Kontakt',
    needs: {
      paca: 'Meine Hose ist zu lang', fermuar: 'Mein Reißverschluss ist kaputt', bel: 'Die Taille ist zu weit',
      'elbise-tamir': 'Mein Kleid ist gerissen oder aufgegangen', 'elbise-dikim': 'Ich möchte ein Kleid nach Maß',
      'gelinlik-abiye': 'Brautkleid- oder Abendkleid-Änderung', hotel: 'Ich bin im Hotel – der Schneider soll kommen', prices: 'Ich möchte die Preise wissen',
    },
  },
} as const;

type NeedKey = keyof (typeof T)['tr']['needs'];
const NEED_ORDER: NeedKey[] = ['paca', 'fermuar', 'bel', 'elbise-tamir', 'elbise-dikim', 'gelinlik-abiye', 'hotel', 'prices'];
const NEED_ICON: Record<NeedKey, string> = {
  paca: '📏', fermuar: '🔧', bel: '🪡', 'elbise-tamir': '🧵', 'elbise-dikim': '👗', 'gelinlik-abiye': '👰', hotel: '🏨', prices: '💰',
};

function needUrl(lang: Lang, k: NeedKey): string {
  if (k === 'prices') return SITE_CFG.pricesUrl[lang];
  if (k === 'hotel') return HOTEL_BASE[lang] || HUB_MAIN[lang];
  const s = SERVICES.find((x) => x.id === k);
  return s ? serviceUrl(lang, s) : SERVICE_BASE[lang];
}

const alternates = () => ({
  canonical: abs(SITE_CFG.contactUrl.tr),
  languages: {
    tr: abs(SITE_CFG.contactUrl.tr), en: abs(SITE_CFG.contactUrl.en), ru: abs(SITE_CFG.contactUrl.ru), de: abs(SITE_CFG.contactUrl.de),
    'x-default': abs(SITE_CFG.contactUrl.tr),
  },
});

export function iletisimMetadata(lang: Lang): Metadata {
  const c = T[lang];
  const url = abs(SITE_CFG.contactUrl[lang]);
  const alt = alternates();
  return {
    metadataBase: new URL(SITE),
    title: { absolute: c.title },
    description: c.desc,
    alternates: { canonical: url, languages: alt.languages },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: {
      title: c.title, description: c.desc, url, siteName: SITE_CFG.siteName, locale: OG_LOCALE[lang], type: 'website',
      images: [{ url: SITE_CFG.image, width: 1024, height: 1024, alt: c.title, type: 'image/jpeg' }],
    },
    twitter: { card: 'summary_large_image', title: c.title, description: c.desc, images: [SITE_CFG.image] },
  };
}

function buildJsonLd(lang: Lang) {
  const c = T[lang];
  const url = abs(SITE_CFG.contactUrl[lang]);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ClothingStore'],
        additionalType: ['https://schema.org/SewingService', 'https://schema.org/DryCleaningService'],
        '@id': SITE_CFG.businessId,
        name: SITE_CFG.businessName,
        url: SITE,
        telephone: PHONE_TEL,
        priceRange: '₺₺',
        image: SITE_CFG.image,
        hasMap: MAPS,
        address: {
          '@type': 'PostalAddress', streetAddress: 'Hurma Mahallesi', addressLocality: 'Konyaaltı',
          addressRegion: 'Antalya', postalCode: '07130', addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', ...SITE_CFG.geo },
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '08:00', closes: '23:00',
        }],
        contactPoint: [{
          '@type': 'ContactPoint', telephone: PHONE_TEL, contactType: 'customer service', areaServed: 'TR',
          availableLanguage: ['Turkish', 'English', 'Russian', 'German', 'Polish', 'Ukrainian', 'Dutch', 'French', 'Spanish', 'Arabic'],
        }],
        sameAs: SITE_CFG.sameAs,
        knowsLanguage: ['tr', 'en', 'ru', 'de', 'pl', 'uk', 'nl', 'fr', 'es', 'ar'],
      },
      {
        '@type': 'ContactPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang,
        dateModified: LAST_UPDATE,
        mainEntity: { '@id': SITE_CFG.businessId },
        about: { '@id': SITE_CFG.businessId },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#ct-h1', '.ct-lead'] },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: c.crumbHome, item: SITE },
          { '@type': 'ListItem', position: 2, name: c.crumbThis, item: url },
        ],
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: lang,
        mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };
}

const CSS = `
.ct{background:#F8F5F0;color:#1A1A1A;min-height:100vh;font-family:inherit;line-height:1.6}
.ct *{box-sizing:border-box}
.ct a{color:inherit;text-decoration:none}
.ct-hero{background:linear-gradient(160deg,#1E3329 0%,#2C4A3E 100%);color:#fff;padding:5.5rem 1.25rem 3rem}
.ct-in{max-width:920px;margin:0 auto}
.ct-tag{display:inline-block;border:1px solid rgba(201,169,110,.55);color:#E2C98F;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;font-weight:700;padding:6px 12px;border-radius:2px;margin-bottom:1.1rem}
.ct h1{font-size:clamp(1.9rem,6vw,3rem);line-height:1.12;font-weight:800;margin-bottom:.9rem}
.ct-lead{font-size:1.02rem;color:rgba(255,255,255,.88);max-width:640px;margin-bottom:1.6rem}
.ct-btns{display:flex;flex-wrap:wrap;gap:12px}
.ct-btn{display:inline-flex;align-items:center;gap:10px;font-weight:800;font-size:1rem;padding:15px 24px;border-radius:6px}
.ct-call{background:#C9A96E;color:#1E3329}
.ct-wa{background:#0F7B3C;color:#fff}
.ct-map{border:2px solid rgba(255,255,255,.5);color:#fff;font-weight:700}
.ct-sec{padding:2.6rem 1.25rem}
.ct-sec.alt{background:#F2EDE5}
.ct h2{font-size:clamp(1.3rem,3.6vw,1.8rem);font-weight:800;margin-bottom:1rem;color:#1A1A1A}
.ct-info{display:grid;gap:0;border:1px solid rgba(44,74,62,.18);border-radius:8px;overflow:hidden;background:#fff}
.ct-row{display:grid;grid-template-columns:minmax(120px,190px) 1fr;gap:12px;padding:14px 18px;border-bottom:1px solid rgba(44,74,62,.12)}
.ct-row:last-child{border-bottom:0}
.ct-k{font-weight:700;color:#2C4A3E;font-size:.92rem}
.ct-v{font-size:.98rem}
.ct-v a{font-weight:800;color:#0F5C2E;text-decoration:underline}
.ct-sub{color:#565C45;margin-bottom:1.2rem;font-size:.95rem}
.ct-needs{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}
.ct-need{background:#fff;border:1px solid rgba(44,74,62,.18);border-radius:8px;padding:14px 16px;display:flex;flex-direction:column;gap:10px}
.ct-need a.ct-nl{font-weight:700;font-size:.98rem;color:#1A1A1A;display:flex;gap:10px;align-items:flex-start}
.ct-need a.ct-nl:hover{text-decoration:underline}
.ct-need a.ct-nw{align-self:flex-start;font-size:.82rem;font-weight:800;background:#0F7B3C;color:#fff;padding:7px 14px;border-radius:5px}
.ct-steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px}
.ct-step{background:#fff;border:1px solid rgba(44,74,62,.18);border-radius:8px;padding:18px}
.ct-step b.n{display:inline-flex;width:30px;height:30px;border-radius:50%;background:#2C4A3E;color:#fff;align-items:center;justify-content:center;margin-bottom:8px}
.ct-step h3{font-size:1rem;margin-bottom:4px}
.ct-step p{font-size:.92rem;color:#3F4433}
.ct-faq details{background:#fff;border:1px solid rgba(44,74,62,.18);border-radius:8px;padding:14px 16px;margin-bottom:10px}
.ct-faq summary{font-weight:700;cursor:pointer}
.ct-faq p{margin-top:8px;font-size:.95rem;color:#3F4433}
.ct-more{display:flex;flex-wrap:wrap;gap:10px}
.ct-more a{background:#2C4A3E;color:#fff;font-weight:700;font-size:.9rem;padding:10px 16px;border-radius:6px}
.ct-langs{margin-top:1.4rem;font-size:.85rem;color:#3F4433;display:flex;gap:14px;flex-wrap:wrap}
.ct-langs a{text-decoration:underline}
@media(max-width:560px){.ct-row{grid-template-columns:1fr;gap:2px}}
`;

export default function IletisimSayfasi({ lang }: { lang: Lang }) {
  const c = T[lang];
  const waHref = `${WA_BASE}?text=${encodeURIComponent(c.waMsg)}`;
  const LANG_LABEL: Record<Lang, string> = { tr: 'Türkçe', en: 'English', ru: 'Русский', de: 'Deutsch' };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(lang)) }} />
      <style>{CSS}</style>
      <div className="ct" lang={lang}>
        <main id="main">
          <section className="ct-hero" aria-labelledby="ct-h1">
            <div className="ct-in">
              <span className="ct-tag">{c.tag}</span>
              <h1 id="ct-h1">{c.h1}</h1>
              <p className="ct-lead">{c.lead}</p>
              <div className="ct-btns">
                <a className="ct-btn ct-call" href={`tel:${PHONE_TEL}`}>📞 {c.call}: {PHONE}</a>
                <a className="ct-btn ct-wa" href={waHref} target="_blank" rel="noopener noreferrer">💬 {c.wa}</a>
                <a className="ct-btn ct-map" href={MAPS} target="_blank" rel="noopener noreferrer">📍 {c.maps}</a>
              </div>
            </div>
          </section>

          <section className="ct-sec" aria-labelledby="ct-info-h">
            <div className="ct-in">
              <h2 id="ct-info-h">{c.infoH}</h2>
              <div className="ct-info">
                {c.rows.map(([k, v], i) => (
                  <div className="ct-row" key={k}>
                    <div className="ct-k">{k}</div>
                    <div className="ct-v">{i === 0 ? <a href={`tel:${PHONE_TEL}`}>{v}</a> : v}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="ct-sec alt" aria-labelledby="ct-need-h">
            <div className="ct-in">
              <h2 id="ct-need-h">{c.needH}</h2>
              <p className="ct-sub">{c.needSub}</p>
              <div className="ct-needs">
                {NEED_ORDER.map((k) => {
                  const name = c.needs[k];
                  return (
                    <div className="ct-need" key={k}>
                      <a className="ct-nl" href={needUrl(lang, k)}><span aria-hidden="true">{NEED_ICON[k]}</span><span>{name}</span></a>
                      <a className="ct-nw" href={`${WA_BASE}?text=${encodeURIComponent(c.waNeed(name))}`} target="_blank" rel="noopener noreferrer">💬 {c.waShort}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="ct-sec" aria-labelledby="ct-steps-h">
            <div className="ct-in">
              <h2 id="ct-steps-h">{c.stepsH}</h2>
              <div className="ct-steps">
                {c.steps.map(([n, h, p]) => (
                  <div className="ct-step" key={n}><b className="n">{n}</b><h3>{h}</h3><p>{p}</p></div>
                ))}
              </div>
            </div>
          </section>

          <section className="ct-sec alt ct-faq" aria-labelledby="ct-faq-h">
            <div className="ct-in">
              <h2 id="ct-faq-h">{c.faqH}</h2>
              {c.faq.map(([q, a]) => (
                <details key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </section>

          <section className="ct-sec" aria-labelledby="ct-more-h">
            <div className="ct-in">
              <h2 id="ct-more-h">{c.moreH}</h2>
              <div className="ct-more">
                <a href={SITE_CFG.pricesUrl[lang]}>{c.more.prices}</a>
                <a href={SERVICE_BASE[lang]}>{c.more.services}</a>
                <a href={HOTEL_BASE[lang] || HUB_MAIN[lang]}>{c.more.hotel}</a>
                <a href={SITE_CFG.homeUrl[lang]}>{c.more.home}</a>
              </div>
              <nav className="ct-langs" aria-label="Languages">
                {LANGS.filter((l) => l !== lang).map((l) => (
                  <a key={l} href={SITE_CFG.contactUrl[l]} hrefLang={l}>{LANG_LABEL[l]}</a>
                ))}
              </nav>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
