// ============================================================
// terzihizmeti.com.tr — components/SeoLanding.tsx
// Bölge sayfaları (/antalya-terzi/[bolge] …) ve hizmet sayfaları (/terzi-hizmetleri/[hizmet] …)
// için 4 dilli, veri odaklı sunucu bileşenleri + metadata üreticileri.
// Veri: lib/seo-data.ts. Sadece doğrulanmış bilgi kullanılır (bkz. dosya başlığı).
// ============================================================
import type { Metadata } from 'next';
import Image from 'next/image';
import ReviewsBlock from '@/components/ReviewsBlock';
import { reviewSchema } from '@/lib/reviews';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';
import {
  DISTRICTS, SERVICES, MAHALLE_PAGES, LANGS, SITE, PHONE, PHONE_TEL, MAPS, LAST_UPDATE,
  SERVICE_BASE, HUB_MAIN, HOTEL_BASE,
  abs, districtUrl, serviceUrl, query, timeOf, priceOf, TIME_TEXT,
  type Lang, type District, type Service,
} from '@/lib/seo-data';

const WA = (m: string) => `https://wa.me/${PHONE_TEL.replace('+', '')}?text=${encodeURIComponent(m)}`;
const OG = `${SITE}/terzi-can-hero.jpg`;
const OG_LOCALE: Record<Lang, string> = { tr: 'tr_TR', en: 'en_US', ru: 'ru_RU', de: 'de_DE' };

// ── Arayüz metinleri ────────────────────────────────────────
const UI = {
  tr: {
    home: '← Ana Sayfa', wa: 'WHATSAPP →', waBtn: "💬 WhatsApp'tan Yazın →", brand: 'Terzi Can', svcWord: 'Hizmetler',
    popular: 'Sık aranan aramalar', faq: 'Sık Sorulan Sorular', nearby: 'Yakın bölgeler', all: 'Tüm hizmetler',
    otherLang: 'Diğer diller', hotelLink: 'Otel bölgesi sayfası', districts: 'Hizmet verdiğimiz bölgeler',
    related: 'İlgili hizmetler', time: 'Teslim süresi', price: 'Fiyat', photoPrice: 'Fotoğraf gönderin, fiyatı hemen söyleyelim',
    mahalle: 'Konyaaltı mahalleleri', ctaH: 'Hemen Ulaşın', free: 'Otel ve eve ücretsiz servis',
    hours: 'Her gün 08:00–23:00', since: "2006'dan beri", where: 'Atölye: Hurma Mahallesi, Konyaaltı, Antalya',
    footer: 'Terzi Can · Hurma, Konyaaltı, Antalya', pricesLink: 'Terzi fiyatları 2026', pricesHref: '/antalya-terzi-fiyatlari',
  },
  en: {
    home: '← Home', wa: 'WHATSAPP →', waBtn: '💬 Message us on WhatsApp →', brand: 'Terzi Can', svcWord: 'Services',
    popular: 'Popular searches', faq: 'Frequently Asked Questions', nearby: 'Nearby areas', all: 'All services',
    otherLang: 'Other languages', hotelLink: 'Hotel area page', districts: 'Areas we serve',
    related: 'Related services', time: 'Turnaround', price: 'Price', photoPrice: 'Send a photo and we will quote right away',
    mahalle: 'Konyaaltı neighbourhoods (Turkish)', ctaH: 'Get in Touch', free: 'Free service to hotels and homes',
    hours: 'Open daily 08:00–23:00', since: 'Serving since 2006', where: 'Workshop: Hurma, Konyaaltı, Antalya',
    footer: 'Terzi Can · Hurma, Konyaaltı, Antalya', pricesLink: 'Tailor prices Antalya', pricesHref: '/en/tailor-prices-antalya',
  },
  ru: {
    home: '← Главная', wa: 'WHATSAPP →', waBtn: '💬 Написать в WhatsApp →', brand: 'Terzi Can', svcWord: 'Услуги',
    popular: 'Частые запросы', faq: 'Частые вопросы', nearby: 'Ближайшие районы', all: 'Все услуги',
    otherLang: 'Другие языки', hotelLink: 'Страница отельного района', districts: 'Районы обслуживания',
    related: 'Похожие услуги', time: 'Срок', price: 'Цена', photoPrice: 'Пришлите фото — сразу назовём цену',
    mahalle: 'Районы Коньяалты (тур.)', ctaH: 'Свяжитесь с нами', free: 'Бесплатный выезд в отели и на дом',
    hours: 'Ежедневно 08:00–23:00', since: 'Работаем с 2006 года', where: 'Мастерская: Хурма, Коньяалты, Анталья',
    footer: 'Terzi Can · Хурма, Коньяалты, Анталья', pricesLink: 'Цены портного Анталья', pricesHref: '/ru/ceny-portnoy-antalya',
  },
  de: {
    home: '← Startseite', wa: 'WHATSAPP →', waBtn: '💬 Per WhatsApp schreiben →', brand: 'Terzi Can', svcWord: 'Leistungen',
    popular: 'Häufige Suchanfragen', faq: 'Häufige Fragen', nearby: 'Nahegelegene Gebiete', all: 'Alle Leistungen',
    otherLang: 'Andere Sprachen', hotelLink: 'Seite für das Hotelgebiet', districts: 'Gebiete, die wir bedienen',
    related: 'Ähnliche Leistungen', time: 'Dauer', price: 'Preis', photoPrice: 'Foto senden, Preis sofort per WhatsApp',
    mahalle: 'Stadtteile in Konyaaltı (türk.)', ctaH: 'Kontakt aufnehmen', free: 'Kostenloser Service zu Hotels und nach Hause',
    hours: 'Täglich 08:00–23:00', since: 'Seit 2006', where: 'Werkstatt: Hurma, Konyaaltı, Antalya',
    footer: 'Terzi Can · Hurma, Konyaaltı, Antalya', pricesLink: 'Schneider Preise Antalya', pricesHref: '/de/schneider-preise-antalya',
  },
} as const;

const HUB_NAME: Record<Lang, string> = {
  tr: 'Antalya Terzi', en: 'Tailor Service Antalya', ru: 'Услуги портного Анталья', de: 'Schneiderservice Antalya',
};
const SVC_HUB_NAME: Record<Lang, string> = {
  tr: 'Terzi Hizmetleri', en: 'Tailor Services', ru: 'Услуги портного', de: 'Schneider-Leistungen',
};

// ── Ortak şema: işletme düğümü (ana sayfadaki @id ile aynı) ────
function businessNode(lang: Lang) {
  return {
    '@type': ['LocalBusiness', 'ClothingStore'],
    ...reviewSchema(),
    '@id': `${SITE}#business`,
    name: 'Terzi Can',
    url: SITE,
    telephone: PHONE_TEL,
    priceRange: '₺₺',
    image: OG,
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
    knowsLanguage: ['tr', 'en', 'ru', 'de'],
    availableLanguage: ['Turkish', 'English', 'Russian', 'German'],
    sameAs: [MAPS, `https://wa.me/${PHONE_TEL.replace('+', '')}`, 'https://swaphubs.com/terzi'],
    inLanguage: lang,
  };
}

const alternatesFor = (urlFor: (l: Lang) => string) => ({
  canonical: urlFor('tr'),
  languages: { tr: urlFor('tr'), en: urlFor('en'), ru: urlFor('ru'), de: urlFor('de'), 'x-default': urlFor('tr') },
});

// ── Arama sorgusu odaklı başlık/açıklama yardımcıları ──────────────────────
const capFirst = (lang: Lang, t: string) => (t ? t.charAt(0).toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : lang) + t.slice(1) : t);
const pickFit = (list: string[], max: number) => list.find((c) => c.length <= max) ?? list[list.length - 1];
const priceShortOf = (lang: Lang, s: Service) =>
  s.priceFrom ? (lang === 'tr' ? `₺${s.priceFrom}'den` : lang === 'en' ? `from ₺${s.priceFrom}` : lang === 'ru' ? `от ₺${s.priceFrom}` : `ab ₺${s.priceFrom}`) : '';
const TIME_SHORT: Record<Lang, Record<'same' | 'next' | 'three' | 'none', string>> = {
  tr: { same: 'Aynı Gün', next: 'Ertesi Gün', three: '3 Günde', none: 'Yakınınızda' },
  en: { same: 'Same Day', next: 'Next Day', three: 'In 3 Days', none: 'Near You' },
  ru: { same: 'В тот же день', next: 'За 1 день', three: 'За 3 дня', none: 'Рядом' },
  de: { same: 'Am selben Tag', next: 'Am nächsten Tag', three: 'In 3 Tagen', none: 'In der Nähe' },
};

// ── Metin üreticileri ───────────────────────────────────────
function districtCopy(lang: Lang, d: District) {
  const n = d.name[lang];
  const loc = d.loc[lang];
  const kw = (lang === 'tr' ? [`${n} terzi`, `${n} terzi hizmeti`, ...d.alias.map((a) => `${a} terzi`)] : []);
  const PH = `☎ ${PHONE}`;
  const titles = {
    tr: [`${n} Terzi · En Yakın Terzi, Paça, Fermuar | Terzi Can`, `${n} Terzi · Paça, Fermuar, Tadilat | Terzi Can`, `${n} Terzi | Paça, Fermuar, Elbise Tamiri`],
    en: [`Tailor in ${n}, Antalya · Near Me · Hemming, Zippers`, `Tailor in ${n}, Antalya | Hemming & Zipper Repair`, `Tailor in ${n}, Antalya`],
    ru: [`Портной ${n}, Анталья · рядом · подшив, молнии`, `Портной ${n}, Анталья | Подшив и ремонт одежды`, `Портной ${n}, Анталья`],
    de: [`Schneider ${n}, Antalya · in der Nähe · Kürzen, Zipper`, `Schneider ${n}, Antalya | Kürzen & Änderungen`, `Schneider ${n}, Antalya`],
  }[lang];
  const title = pickFit(titles, 60);
  const descs = {
    tr: [`${loc} terzi arıyorsanız: Terzi Can Konyaaltı. Paça kısaltma ₺150'den, fermuar değişimi ₺200'den, elbise tamiri. Her gün 08:00–23:00. ${PH}`,
         `${loc} terzi: paça ₺150'den, fermuar ₺200'den, elbise tamiri. Her gün 08:00–23:00, otel ve eve ücretsiz alım. ${PH}`,
         `${loc} terzi ${PH}: paça, fermuar, elbise dikimi ve tamiri. Her gün 08:00–23:00.`],
    en: [`Tailor ${loc}? Terzi Can, Konyaaltı: hemming from ₺150, zipper replacement from ₺200, dress repair. Open daily 08:00–23:00. ${PH}`,
         `Tailor ${loc}: hemming from ₺150, zippers from ₺200, dress repair. Open daily 08:00–23:00, free hotel pick-up. ${PH}`,
         `Tailor ${loc} ${PH}: hemming, zippers, dress repair. Open daily 08:00–23:00.`],
    ru: [`Портной ${loc}? Terzi Can, Коньяалты: подшив от ₺150, замена молнии от ₺200, ремонт платьев. Ежедневно 08:00–23:00. ${PH}`,
         `Портной ${loc}: подшив от ₺150, молния от ₺200, ремонт платьев. Ежедневно 08:00–23:00, забор из отелей бесплатно. ${PH}`,
         `Портной ${loc} ${PH}: подшив, молнии, ремонт платьев. Ежедневно 08:00–23:00.`],
    de: [`Schneider ${loc}? Terzi Can, Konyaaltı: Hose kürzen ab ₺150, Reißverschluss ab ₺200, Kleid ändern. Täglich 08:00–23:00. ${PH}`,
         `Schneider ${loc}: Kürzen ab ₺150, Reißverschluss ab ₺200, Kleider ändern. Täglich 08:00–23:00, Hotelabholung gratis. ${PH}`,
         `Schneider ${loc} ${PH}: Kürzen, Reißverschlüsse, Kleider ändern. Täglich 08:00–23:00.`],
  }[lang];
  const desc = pickFit(descs, 158);
  return { n, loc, kw, title, desc };
}

function districtAbout(lang: Lang, d: District): string {
  const n = d.name[lang];
  const loc = d.loc[lang];
  const t = {
    tr: {
      central: `${loc} yaşıyor ya da çalışıyorsanız kıyafetinizi Hurma'daki atölyemize getirebilir veya adresinizden aldırabilirsiniz. ${n} ve çevresinde alım-teslim ücretsizdir.`,
      resort: `${loc} bir otelde kalıyorsanız terzi için dışarı çıkmanız gerekmez. Yırtılan, dar gelen ya da özel bir akşam için son dakika ayarı isteyen kıyafetinizi otelden alıp teslim ediyoruz. Türkçe, İngilizce, Rusça ve Almanca konuşuyoruz.`,
      outer: `${loc} ev, ofis ve sitelere alım-teslim yapıyoruz. Mesafe uzun olduğu için gün ve saati WhatsApp'tan sizinle birlikte netleştiriyoruz.`,
    },
    en: {
      central: `If you live or work ${loc}, you can drop garments off at our Hurma workshop or have us collect them from your address. Pick-up and delivery in ${n} and nearby is free.`,
      resort: `Staying at a hotel ${loc}? You do not need to go out for a tailor. If something tears, stops fitting or needs a last-minute fix for a special evening, we collect it from your hotel and bring it back. We speak English, Turkish, Russian and German.`,
      outer: `We collect and deliver for homes, offices and residential complexes ${loc}. Since the distance is longer, we fix the day and time with you on WhatsApp.`,
    },
    ru: {
      central: `Если вы живёте или работаете ${loc}, можно принести вещи в нашу мастерскую в Хурме или попросить забрать их по адресу. Забор и доставка в районе ${n} и рядом бесплатны.`,
      resort: `Остановились в отеле ${loc}? Ехать к портному не нужно. Если вещь порвалась, перестала подходить по размеру или нужна срочная правка к вечеру, мы заберём её из отеля и вернём. Говорим по-русски, по-английски, по-турецки и по-немецки.`,
      outer: `Забираем и доставляем вещи ${loc} — на дом, в офис или в жилой комплекс. Расстояние большое, поэтому день и время уточняем с вами в WhatsApp.`,
    },
    de: {
      central: `Wenn Sie ${loc} wohnen oder arbeiten, können Sie Kleidung in unserer Werkstatt in Hurma abgeben oder an Ihrer Adresse abholen lassen. Abholung und Lieferung in ${n} und Umgebung sind kostenlos.`,
      resort: `Sie wohnen im Hotel ${loc}? Dann müssen Sie für den Schneider nicht aus dem Haus. Reißt etwas, passt nicht mehr oder braucht kurz vor einem besonderen Abend eine Anpassung, holen wir es im Hotel ab und bringen es zurück. Wir sprechen Deutsch, Englisch, Russisch und Türkisch.`,
      outer: `Wir holen und liefern Kleidung ${loc} für Wohnungen, Büros und Wohnanlagen. Weil die Strecke länger ist, legen wir Tag und Uhrzeit per WhatsApp mit Ihnen fest.`,
    },
  }[lang];
  return t[d.kind];
}

function districtFaq(lang: Lang, d: District): [string, string][] {
  const loc = d.loc[lang];
  const n = d.name[lang];
  const by = (id: string) => SERVICES.find((s) => s.id === id)!;
  return {
    tr: [
      [`${loc} terzi nerede, en yakın atölye hangisi?`, `Atölyemiz Konyaaltı'nda, Hurma Mahallesi'nde. ${n} için kıyafeti adresinizden ya da otelinizden alıp geri getiriyoruz; otel ve eve servis ücretsiz. WhatsApp'tan her gün 08:00–23:00 yazabilirsiniz.`],
      [`${loc} ${by('paca').q.tr} ve ${by('fermuar').q.tr} aynı gün biter mi?`, 'Evet, paça kısaltma, daraltma ve fermuar değişimi ya da tamiri aynı gün teslim edilir.'],
      [`${loc} gelinlik ve abiye ayarı ne kadar tutar?`, "Gelinlik tadilatı ₺800'den, abiye tadilatı ₺400'den başlıyor. Kesin fiyat fotoğrafa ve işin kapsamına göre verilir; abiye ertesi gün hazır olur."],
      [`${loc} ${by('elbise-dikim').q.tr} ne zaman teslim alınır?`, 'Elbise dikimi 3 günde hazır olur. Elbise, ceket, gömlek, mont ve abiye tadilatı ya da tamiri 1 gün sürer.'],
      [`Turist olarak ${loc} terzi bulabilir miyim?`, "Evet. Türkçe, İngilizce, Rusça ve Almanca konuşuyoruz; otel ve eve servis ücretsiz. Kıyafetin fotoğrafını WhatsApp'tan gönderin, fiyatı hemen söyleyelim."],
    ],
    en: [
      [`Where is the nearest tailor ${loc}?`, `Our workshop is in Hurma, Konyaaltı. For ${n} we pick garments up from your address or hotel and bring them back, free of charge for hotels and homes. You can reach us on WhatsApp every day from 08:00 to 23:00.`],
      [`Can ${by('paca').q.en} and ${by('fermuar').q.en} be done in one day ${loc}?`, 'Yes. Hemming, taking in and zipper replacement or repair are returned the same day.'],
      [`What does a wedding or evening dress alteration cost ${loc}?`, 'Wedding dress alterations start at ₺800 and evening dress alterations at ₺400. The exact price is set from a photo and the scope of work; evening dresses are ready the next day.'],
      [`How soon is ${by('elbise-dikim').q.en} ready ${loc}?`, 'Dress making is ready in 3 days. Alterations and repairs of dresses, jackets, shirts, coats and evening dresses take 1 day.'],
      [`Can tourists use a tailor ${loc}?`, 'Yes. We speak English, Turkish, Russian and German, and hotel and home service is free. Send a photo of the garment on WhatsApp and we will quote right away.'],
    ],
    ru: [
      [`Где ближайший портной ${loc}?`, `Мастерская находится в Хурме (Коньяалты). Для района ${n} забираем вещи с вашего адреса или из отеля и возвращаем, для отелей и дома это бесплатно. Пишите в WhatsApp каждый день с 08:00 до 23:00.`],
      [`Сколько ждать: ${by('paca').q.ru} и ${by('fermuar').q.ru} ${loc}?`, 'Подшив, ушивание и замена или ремонт молнии возвращаем в тот же день.'],
      [`Сколько стоит подгонка свадебного или вечернего платья ${loc}?`, 'Подгонка свадебного платья начинается от ₺800, вечернего — от ₺400. Точную цену называем по фото и объёму работ; вечерние платья готовы на следующий день.'],
      [`Сколько дней занимает ${by('elbise-dikim').q.ru} ${loc}?`, 'Пошив платья занимает 3 дня. Переделка и ремонт платьев, пиджаков, рубашек, курток и вечерних платьев — 1 день.'],
      [`Подходит ли ваш сервис туристам ${loc}?`, 'Да. Мы говорим по-русски, по-английски, по-турецки и по-немецки, выезд в отели и на дом бесплатный. Пришлите фото вещи в WhatsApp, и мы сразу назовём цену.'],
    ],
    de: [
      [`Wo finde ich einen Schneider ${loc}?`, `Unsere Werkstatt liegt in Hurma, Konyaaltı. Für ${n} holen wir Kleidung an Ihrer Adresse oder im Hotel ab und bringen sie zurück; für Hotels und Zuhause ist das kostenlos. Per WhatsApp erreichen Sie uns täglich von 08:00 bis 23:00.`],
      [`Sind ${by('paca').q.de} und ${by('fermuar').q.de} ${loc} am selben Tag erledigt?`, 'Ja. Hose kürzen, enger machen und Reißverschluss wechseln oder reparieren sind am selben Tag fertig.'],
      [`Was kostet es, ein Brautkleid oder Abendkleid ${loc} ändern zu lassen?`, 'Änderungen am Brautkleid starten bei ₺800, am Abendkleid bei ₺400. Der genaue Preis ergibt sich aus Foto und Aufwand; Abendkleider sind am nächsten Tag fertig.'],
      [`Wann ist ${by('elbise-dikim').q.de} ${loc} fertig?`, 'Ein Kleid nähen dauert 3 Tage. Änderungen und Reparaturen an Kleidern, Sakkos, Hemden, Mänteln und Abendkleidern sind nach 1 Tag fertig.'],
      [`Kann ich als Tourist ${loc} einen Schneider nutzen?`, 'Ja. Wir sprechen Deutsch, Englisch, Russisch und Türkisch; Hotel- und Heimservice sind kostenlos. Schicken Sie ein Foto per WhatsApp, den Preis nennen wir sofort.'],
    ],
  }[lang] as [string, string][];
}

function serviceCopy(lang: Lang, s: Service) {
  const nm = s.name[lang];
  const q = s.q[lang];
  const Q = capFirst(lang, q);
  const ps = priceShortOf(lang, s);
  const ts = TIME_SHORT[lang][s.time];
  // Başlık: insanların yazdığı sorgu ifadesi + (varsa) fiyat + süre. SERP ~60 karakterde keser; sığan en zengin varyant seçilir.
  const t1 = {
    tr: [`${Q} Antalya ${ps} · ${ts} | Terzi Can`, `${Q} Antalya · ${ts} | Terzi Can`, `${Q} Antalya | Terzi Can`],
    en: [`${Q} in Antalya ${ps} · ${ts} | Terzi Can`, `${Q} in Antalya · ${ts} | Terzi Can`, `${Q} in Antalya | Terzi Can`],
    ru: [`${Q} в Анталье ${ps} · ${ts} | Terzi Can`, `${Q} в Анталье · ${ts} | Terzi Can`, `${Q} в Анталье | Terzi Can`],
    de: [`${Q} in Antalya ${ps} · ${ts} | Terzi Can`, `${Q} in Antalya · ${ts} | Terzi Can`, `${Q} in Antalya | Terzi Can`],
  }[lang];
  const title = pickFit(ps ? t1 : t1.slice(1), 60);
  const price = priceShortOf(lang, s);
  const tm0 = timeOf(lang, s).replace(/[.\s]+$/, '');
  const tm = tm0.charAt(0).toLocaleLowerCase(lang === 'tr' ? 'tr-TR' : lang) + tm0.slice(1);
  const v0 = capFirst(lang, s.vars[lang][0]);
  // Açıklama: kullanıcının sorusunu aynen tekrar eden ilk cümle + cevap (süre, fiyat, saat, telefon).
  const ask = {
    tr: `${Q} için en yakın terzi mi arıyorsunuz?`,
    en: `${Q} in Antalya?`,
    ru: `${v0} в Анталье?`,
    de: `${v0} in Antalya?`,
  }[lang];
  const who = { tr: 'Terzi Can Konyaaltı:', en: 'Terzi Can in Konyaaltı:', ru: 'Terzi Can в Коньяалты:', de: 'Terzi Can in Konyaaltı:' }[lang];
  const open = { tr: 'Her gün 08:00–23:00', en: 'Open daily 08:00–23:00', ru: 'Ежедневно 08:00–23:00', de: 'Täglich 08:00–23:00' }[lang];
  const pick = { tr: 'otel ve eve ücretsiz alım', en: 'free hotel pick-up', ru: 'бесплатный забор из отелей', de: 'Hotelabholung gratis' }[lang];
  const tel = `☎ ${PHONE}`;
  const body = (withTime: boolean) => `${who} ${withTime ? tm : ''}${withTime && price ? ', ' : ''}${price}`.replace(/[\s,:]+$/, '');
  const candidates = [
    `${ask} ${body(true)}. ${open}, ${pick}. ${tel}`,
    `${ask} ${body(true)}. ${open}. ${tel}`,
    `${ask} ${body(false)}. ${open}, ${pick}. ${tel}`,
    `${ask} ${body(false)}. ${open}. ${tel}`,
    `${nm}. ${open}. ${tel}`,
  ];
  const desc = pickFit(candidates, 158);
  return { nm, title, desc };
}

function serviceFaq(lang: Lang, s: Service): [string, string][] {
  const nm = s.name[lang];
  const price = priceOf(lang, s);
  const time = timeOf(lang, s);
  return {
    tr: [
      [`Antalya'da ${s.vars.tr[0]} için nereye gidebilirim?`, `Konyaaltı Hurma'daki Terzi Can atölyesine. ${s.intro.tr} Otel ve eve servis ücretsiz, atölye her gün 08:00–23:00 açık.`],
      [`${nm} kaç gün sürer, fiyatı nedir?`, `${time}.${price ? ' ' + price + '; net fiyat kumaşa ve işin kapsamına bağlı.' : " Fiyat için kıyafetin fotoğrafını WhatsApp'tan iletin."}`],
      [`${nm} için otele ya da eve geliyor musunuz?`, 'Evet, otel ve eve alım-teslim ücretsiz. Konyaaltı, Muratpaşa, Lara, Güzeloba, Kundu, Belek, Side ve Kemer gibi bölgelere gidiyoruz.'],
    ],
    en: [
      [`Where in Antalya can I get ${s.vars.en[0]} done?`, `At the Terzi Can workshop in Hurma, Konyaaltı. ${s.intro.en} Hotel and home service is free, and the workshop is open daily 08:00–23:00.`],
      [`How many days does ${nm.toLowerCase()} take, and what is the price?`, `${time}.${price ? ' ' + price + '; the final price depends on the fabric and the scope of work.' : ' Send a photo of the garment on WhatsApp to get a price.'}`],
      [`Do you come to my hotel or home for ${nm.toLowerCase()}?`, 'Yes, pick-up and delivery to hotels and homes is free. We cover Konyaaltı, Muratpaşa, Lara, Güzeloba, Kundu, Belek, Side and Kemer, among other areas.'],
    ],
    ru: [
      [`Куда в Анталье обратиться: ${s.vars.ru[0]}?`, `В мастерскую Terzi Can в Хурме (Коньяалты). ${s.intro.ru} Выезд в отели и на дом бесплатный, мастерская открыта ежедневно с 08:00 до 23:00.`],
      [`Сколько дней занимает «${nm}» и какая цена?`, `${time}.${price ? ' ' + price + '; окончательная цена зависит от ткани и объёма работ.' : ' Пришлите фото вещи в WhatsApp, и мы назовём цену.'}`],
      [`Забираете ли вы вещь из отеля или с дома для услуги «${nm}»?`, 'Да, забор и доставка в отели и на дом бесплатны. Работаем в Коньяалты, Муратпаше, Ларе, Гюзельобе, Кунду, Белеке, Сиде, Кемере и других районах.'],
    ],
    de: [
      [`Wo in Antalya bekomme ich „${s.vars.de[0]}“?`, `In der Werkstatt von Terzi Can in Hurma, Konyaaltı. ${s.intro.de} Hotel- und Heimservice sind kostenlos, die Werkstatt ist täglich von 08:00 bis 23:00 geöffnet.`],
      [`Wie viele Tage braucht „${nm}“ und was kostet es?`, `${time}.${price ? ' ' + price + '; der endgültige Preis hängt von Stoff und Aufwand ab.' : ' Schicken Sie ein Foto des Kleidungsstücks per WhatsApp, dann nennen wir den Preis.'}`],
      [`Holen Sie die Kleidung für „${nm}“ im Hotel oder zu Hause ab?`, 'Ja, Abholung und Lieferung zu Hotels und nach Hause sind kostenlos. Wir fahren unter anderem nach Konyaaltı, Muratpaşa, Lara, Güzeloba, Kundu, Belek, Side und Kemer.'],
    ],
  }[lang] as [string, string][];
}

// ── Metadata ────────────────────────────────────────────────
export function districtMetadata(lang: Lang, d: District): Metadata {
  const c = districtCopy(lang, d);
  const url = abs(districtUrl(lang, d));
  const kw = [
    ...c.kw,
    ...SERVICES.slice(0, 8).map((s) => query(lang, d, s)),
    ...SERVICES.slice(0, 6).map((s) => `${d.name[lang]} ${s.vars[lang][0]}`),
  ];
  return {
    metadataBase: new URL(SITE),
    title: { absolute: c.title },
    description: c.desc,
    keywords: Array.from(new Set(kw)),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: alternatesFor((l) => abs(districtUrl(l, d))),
    openGraph: {
      title: c.title, description: c.desc, url, siteName: 'Terzi Can', locale: OG_LOCALE[lang], type: 'website',
      images: [{ url: OG, width: 1024, height: 1024, alt: c.title }],
    },
  };
}

export function serviceMetadata(lang: Lang, s: Service): Metadata {
  const c = serviceCopy(lang, s);
  const url = abs(serviceUrl(lang, s));
  return {
    metadataBase: new URL(SITE),
    title: { absolute: c.title },
    description: c.desc,
    keywords: Array.from(new Set([...s.vars[lang], ...s.vars[lang].slice(0, 3).map((v) => `${v} Antalya`)])),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: alternatesFor((l) => abs(serviceUrl(l, s))),
    openGraph: {
      title: c.title, description: c.desc, url, siteName: 'Terzi Can', locale: OG_LOCALE[lang], type: 'website',
      images: [{ url: OG, width: 1024, height: 1024, alt: c.title }],
    },
  };
}

export function hubMetadata(lang: Lang): Metadata {
  const title = {
    tr: 'Terzi Hizmetleri Antalya · Paça ₺150, Fermuar ₺200',
    en: 'Tailor Services & Prices Antalya · Hemming ₺150, Zipper ₺200',
    ru: 'Услуги и цены портного в Анталье · подшив ₺150, молния ₺200',
    de: 'Schneider Leistungen & Preise Antalya · Kürzen ab ₺150',
  }[lang];
  const description = {
    tr: `Paça kısaltma, bel daraltma, fermuar, elbise dikimi, tadilat. Her gün 08:00–23:00, otel ve eve ücretsiz alım. ☎ ${PHONE}`,
    en: `Hemming, waist alterations, zippers, dress making. Open daily 08:00–23:00, free hotel and home pick-up. ☎ ${PHONE}`,
    ru: `Подшив, ушивание, молнии, пошив и переделка. Ежедневно 08:00–23:00, бесплатный забор из отелей. ☎ ${PHONE}`,
    de: `Kürzen, Taille anpassen, Reißverschlüsse, Kleider nähen. Täglich 08:00–23:00, Hotelabholung gratis. ☎ ${PHONE}`,
  }[lang];
  const url = abs(SERVICE_BASE[lang]);
  return {
    metadataBase: new URL(SITE),
    title: { absolute: title },
    description,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: alternatesFor((l) => abs(SERVICE_BASE[l])),
    openGraph: { title, description, url, siteName: 'Terzi Can', locale: OG_LOCALE[lang], type: 'website', images: [{ url: OG, width: 1024, height: 1024, alt: title }] },
  };
}

// ── Ortak parçalar ──────────────────────────────────────────
function Shell({ lang, waMsg, children, footLinks }: { lang: Lang; waMsg: string; children: React.ReactNode; footLinks: { href: string; label: string }[] }) {
  const u = UI[lang];
  const href = WA(waMsg);
  return (
    <div lang={lang}>
      <div className="float">
        <a href={`tel:${PHONE_TEL}`} className="fbtn fbtn-call" aria-label="Tel">📞</a>
        <a href={href} target="_blank" rel="noopener noreferrer" className="fbtn fbtn-wa" aria-label="WhatsApp">💬</a>
      </div>
      <nav className="nav" aria-label="Navigation">
        <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
        <a href={lang === 'tr' ? '/' : HUB_MAIN[lang]} className="nav-home">{u.home}</a>
        <a href={href} target="_blank" rel="noopener noreferrer" className="nav-wa">{u.wa}</a>
      </nav>
      {children}
      <footer>
        <div>© {new Date().getFullYear()} {u.footer} · {PHONE}</div>
        <nav className="foot-links" aria-label="Footer">
          {footLinks.map((l) => (<a key={l.href} href={l.href}>{l.label}</a>))}
          <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
        </nav>
      </footer>
    </div>
  );
}

function Hero({ lang, tag, h1, desc, waMsg }: { lang: Lang; tag: string; h1: React.ReactNode; desc: string; waMsg: string }) {
  const u = UI[lang];
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-bg" aria-hidden="true">
        <Image src="/terzi-can-hero.jpg" alt="Terzi Can — Hurma, Konyaaltı, Antalya" fill priority fetchPriority="high" sizes="100vw" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <span className="hero-tag">{tag}</span>
        <h1 id="hero-h">{h1}</h1>
        <p className="hero-desc">{desc}</p>
        <div className="hero-btns">
          <a href={WA(waMsg)} target="_blank" rel="noopener noreferrer" className="btn-primary">{u.waBtn}</a>
          <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

function Faq({ lang, items }: { lang: Lang; items: [string, string][] }) {
  return (
    <section className="sec" id="faq" aria-labelledby="faq-h">
      <div className="ctr" style={{ maxWidth: 720 }}>
        <div className="sec-head"><h2 className="sec-h ff" id="faq-h">{UI[lang].faq}</h2></div>
        {items.map(([q, a]) => (
          <div key={q} className="faq-item"><div className="faq-q">{q}</div><div className="faq-a">{a}</div></div>
        ))}
      </div>
    </section>
  );
}

function Cta({ lang, waMsg, text }: { lang: Lang; waMsg: string; text: string }) {
  const u = UI[lang];
  return (
    <section className="cta-final" aria-label={u.ctaH}>
      <h2 className="cta-h ff">{u.ctaH}</h2>
      <p className="cta-sub">{text}</p>
      <div className="cta-btns">
        <a href={WA(waMsg)} target="_blank" rel="noopener noreferrer" className="btn-white">{u.waBtn}</a>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Maps</a>
      </div>
    </section>
  );
}

const linkChip: React.CSSProperties = { display: 'inline-block', padding: '.35rem .75rem', border: '1px solid rgba(201,169,110,.25)', borderRadius: 999, fontSize: '.78rem', color: 'rgba(255,255,255,.75)', margin: '0 .4rem .5rem 0' };

function otherLangLinks(lang: Lang, urlFor: (l: Lang) => string) {
  const names: Record<Lang, string> = { tr: 'Türkçe', en: 'English', ru: 'Русский', de: 'Deutsch' };
  return (
    <section className="sec" style={{ paddingTop: 0, paddingBottom: '1.5rem' }}>
      <div className="ctr" style={{ maxWidth: 720 }}>
        <h2 style={{ fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase', opacity: .55, marginBottom: '.9rem' }}>{UI[lang].otherLang}</h2>
        <div>
          {LANGS.filter((l) => l !== lang).map((l) => (
            <a key={l} href={urlFor(l)} hrefLang={l} lang={l} style={linkChip}>{names[l]}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── BÖLGE SAYFASI ───────────────────────────────────────────
export function DistrictPage({ lang, d }: { lang: Lang; d: District }) {
  const u = UI[lang];
  const c = districtCopy(lang, d);
  const url = abs(districtUrl(lang, d));
  const idx = DISTRICTS.findIndex((x) => x.slug === d.slug);
  const faq = districtFaq(lang, d);
  const waMsg = {
    tr: `Merhaba, ${c.loc} terzi hizmeti almak istiyorum.`,
    en: `Hello, I need a tailor ${c.loc}.`,
    ru: `Здравствуйте, нужен портной ${c.loc}.`,
    de: `Hallo, ich brauche einen Schneider ${c.loc}.`,
  }[lang];
  const nearby = DISTRICTS.filter((x) => x.slug !== d.slug && x.kind === d.kind).slice(0, 8);
  const hotel = d.hotelSlug && OTEL_BOLGELERI.some((r) => r.slug === d.hotelSlug) ? `${HOTEL_BASE[lang]}/${d.hotelSlug}` : null;
  // Aynı bölge için farklı yazılışlar: her bölge hizmet varyantlarının farklı bir dilimini gösterir
  const popular = SERVICES.map((s, i) => {
    const v = s.vars[lang][(idx + i) % s.vars[lang].length];
    return lang === 'ru' ? `${v} ${d.loc.ru}` : lang === 'tr' ? `${d.loc.tr} ${v}` : `${v} ${d.loc[lang]}`;
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode(lang),
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang,
        isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
        breadcrumb: { '@id': `${url}#breadcrumb` }, dateModified: LAST_UPDATE,
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-h', '.hero-desc'] },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
          { '@type': 'ListItem', position: 2, name: HUB_NAME[lang], item: abs(HUB_MAIN[lang]) },
          { '@type': 'ListItem', position: 3, name: d.name[lang], item: url },
        ],
      },
      {
        '@type': 'Service', '@id': `${url}#service`, provider: { '@id': `${SITE}#business` },
        serviceType: SERVICES.map((s) => s.name[lang]).slice(0, 8).join(', '),
        areaServed: { '@type': 'Place', name: `${d.name.en}, Antalya, Türkiye` },
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: url, servicePhone: PHONE_TEL },
        hasOfferCatalog: {
          '@type': 'OfferCatalog', name: SVC_HUB_NAME[lang],
          itemListElement: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name[lang], url: abs(serviceUrl(lang, s)) } })),
        },
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };

  const h1 = {
    tr: (<>{d.name.tr} <span className="accent">Terzi</span><br />Dikim, Tamir, Tadilat, Fermuar</>),
    en: (<>Tailor in <span className="accent">{d.name.en}</span><br />Alterations, Repairs &amp; Dress Making</>),
    ru: (<>Портной <span className="accent">{d.name.ru}</span><br />Подгонка, ремонт, пошив</>),
    de: (<>Schneider <span className="accent">{d.name.de}</span><br />Änderungen, Reparatur &amp; Maßanfertigung</>),
  }[lang];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Shell lang={lang} waMsg={waMsg} footLinks={[
        { href: lang === 'tr' ? '/' : HUB_MAIN[lang], label: u.home.replace('← ', '') },
        { href: SERVICE_BASE[lang], label: u.all },
        { href: u.pricesHref, label: u.pricesLink },
      ]}>
        <Hero lang={lang} tag={`📍 ${d.name[lang]} · ${u.free} · ${u.hours}`} h1={h1}
          desc={`${districtAbout(lang, d)}`} waMsg={waMsg} />

        <section className="sec" aria-labelledby="svc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">{u.since} · {u.where}</span>
              <h2 className="sec-h ff" id="svc-h">{{
                tr: `${c.loc} Terzi Hizmetleri`, en: `Tailor Services ${c.loc}`, ru: `Услуги портного ${c.loc}`, de: `Schneider-Leistungen ${c.loc}`,
              }[lang]}</h2>
            </div>
            <div className="price-grid">
              {SERVICES.map((s) => (
                <a key={s.id} href={serviceUrl(lang, s)} className="price-card" style={{ display: 'block' }}>
                  <div className="price-head">
                    <span className="price-icon" aria-hidden="true">{s.icon}</span>
                    <div><div className="price-tr">{s.name[lang]}</div><div className="price-kw">{query(lang, d, s)}</div></div>
                  </div>
                  <p className="price-desc">{s.intro[lang]}</p>
                  <div style={{ fontSize: '.78rem', color: '#C9A96E', fontWeight: 700 }}>
                    {timeOf(lang, s)}{priceOf(lang, s) ? ` · ${priceOf(lang, s)}` : ''}
                  </div>
                </a>
              ))}
            </div>
            <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', marginTop: '1.2rem', textAlign: 'center' }}>{u.photoPrice}</p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="pop-h">
          <div className="ctr" style={{ maxWidth: 820 }}>
            <div className="sec-head"><h2 className="sec-h ff" id="pop-h">{u.popular} — {d.name[lang]}</h2></div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, columns: '2 260px', fontSize: '.84rem', lineHeight: 2, color: 'rgba(255,255,255,.7)' }}>
              {popular.map((p) => (<li key={p}>✂️ {p}</li>))}
            </ul>
            {hotel && (<p style={{ marginTop: '1.2rem', fontSize: '.84rem' }}><a href={hotel} style={{ color: '#C9A96E', fontWeight: 700 }}>{u.hotelLink} →</a></p>)}
          </div>
        </section>

        <Faq lang={lang} items={faq} />
        <Cta lang={lang} waMsg={waMsg} text={u.photoPrice} />

        <section className="sec" aria-labelledby="near-h" style={{ paddingBottom: '1.5rem' }}>
          <div className="ctr" style={{ maxWidth: 820 }}>
            <h2 id="near-h" style={{ fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase', opacity: .55, marginBottom: '.9rem' }}>{u.nearby}</h2>
            <div>
              {nearby.map((x) => (<a key={x.slug} href={districtUrl(lang, x)} style={linkChip}>{x.name[lang]}</a>))}
              {d.slug === 'konyaalti' && MAHALLE_PAGES.map((m) => (<a key={m.href} href={m.href} style={linkChip}>{m.name[lang]}</a>))}
            </div>
          </div>
        </section>
        {otherLangLinks(lang, (l) => districtUrl(l, d))}
        <ReviewsBlock lang={lang} />
      </Shell>
    </>
  );
}

// ── HİZMET SAYFASI ──────────────────────────────────────────
export function ServicePage({ lang, s }: { lang: Lang; s: Service }) {
  const u = UI[lang];
  const c = serviceCopy(lang, s);
  const url = abs(serviceUrl(lang, s));
  const faq = serviceFaq(lang, s);
  const price = priceOf(lang, s);
  const waMsg = {
    tr: `Merhaba, ${s.name.tr.toLowerCase()} için fiyat ve süre öğrenmek istiyorum.`,
    en: `Hello, I would like a price and timing for: ${s.name.en}.`,
    ru: `Здравствуйте, хочу узнать цену и срок: ${s.name.ru}.`,
    de: `Hallo, ich möchte Preis und Dauer erfahren: ${s.name.de}.`,
  }[lang];
  const related = SERVICES.filter((x) => x.id !== s.id).slice(0, 6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode(lang),
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang,
        isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
        breadcrumb: { '@id': `${url}#breadcrumb` }, dateModified: LAST_UPDATE,
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-h', '.hero-desc'] },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
          { '@type': 'ListItem', position: 2, name: SVC_HUB_NAME[lang], item: abs(SERVICE_BASE[lang]) },
          { '@type': 'ListItem', position: 3, name: s.name[lang], item: url },
        ],
      },
      {
        '@type': 'Service', '@id': `${url}#service`, name: s.name[lang], description: s.intro[lang], serviceType: s.name[lang],
        provider: { '@id': `${SITE}#business` },
        areaServed: DISTRICTS.map((d) => ({ '@type': 'Place', name: `${d.name.en}, Antalya` })),
        ...(s.priceFrom ? { offers: { '@type': 'Offer', priceCurrency: 'TRY', price: String(s.priceFrom), priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'TRY', minPrice: String(s.priceFrom) } } } : {}),
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Shell lang={lang} waMsg={waMsg} footLinks={[
        { href: lang === 'tr' ? '/' : HUB_MAIN[lang], label: u.home.replace('← ', '') },
        { href: SERVICE_BASE[lang], label: u.all },
        { href: u.pricesHref, label: u.pricesLink },
      ]}>
        <Hero lang={lang} tag={`${s.icon} ${u.free} · ${u.hours}`} h1={<>{s.name[lang]}<br /><span className="accent">Antalya</span></>}
          desc={s.intro[lang]} waMsg={waMsg} />

        <section className="sec" aria-labelledby="det-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head"><span className="eyebrow">{u.since}</span><h2 className="sec-h ff" id="det-h">{s.name[lang]}</h2></div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">{u.time}</div><div className="howto-d">{timeOf(lang, s)}</div></div>
              {price && (<div className="howto-item"><div className="howto-t">{u.price}</div><div className="howto-d">{price}</div></div>)}
              <div className="howto-item"><div className="howto-t">{u.free}</div><div className="howto-d">{u.where} · {u.hours}</div></div>
            </div>
            {s.extra && (<p style={{ marginTop: '1.2rem', fontSize: '.84rem' }}><a href={s.extra.href} style={{ color: '#C9A96E', fontWeight: 700 }}>{s.extra.label[lang]} →</a></p>)}
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="var-h">
          <div className="ctr" style={{ maxWidth: 820 }}>
            <div className="sec-head"><h2 className="sec-h ff" id="var-h">{u.popular}</h2></div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, columns: '2 260px', fontSize: '.84rem', lineHeight: 2, color: 'rgba(255,255,255,.7)' }}>
              {s.vars[lang].map((v) => (<li key={v}>✂️ {v}</li>))}
            </ul>
          </div>
        </section>

        <section className="sec" aria-labelledby="areas-h">
          <div className="ctr" style={{ maxWidth: 900 }}>
            <div className="sec-head"><h2 className="sec-h ff" id="areas-h">{u.districts}</h2></div>
            <div>
              {DISTRICTS.map((d) => (<a key={d.slug} href={districtUrl(lang, d)} style={linkChip}>{query(lang, d, s)}</a>))}
              {MAHALLE_PAGES.map((m) => (<a key={m.href} href={m.href} style={linkChip}>{m.name[lang]}</a>))}
            </div>
          </div>
        </section>

        <Faq lang={lang} items={faq} />
        <Cta lang={lang} waMsg={waMsg} text={u.photoPrice} />

        <section className="sec" aria-labelledby="rel-h" style={{ paddingBottom: '1.5rem' }}>
          <div className="ctr" style={{ maxWidth: 820 }}>
            <h2 id="rel-h" style={{ fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase', opacity: .55, marginBottom: '.9rem' }}>{u.related}</h2>
            <div>{related.map((x) => (<a key={x.id} href={serviceUrl(lang, x)} style={linkChip}>{x.name[lang]}</a>))}</div>
          </div>
        </section>
        {otherLangLinks(lang, (l) => serviceUrl(l, s))}
        <ReviewsBlock lang={lang} />
      </Shell>
    </>
  );
}

// ── HİZMETLER ANA SAYFASI (4 dilde hub) ─────────────────────
export function HubPage({ lang }: { lang: Lang }) {
  const u = UI[lang];
  const url = abs(SERVICE_BASE[lang]);
  const title = (hubMetadata(lang).title as { absolute: string }).absolute;
  const desc = hubMetadata(lang).description as string;
  const waMsg = { tr: 'Merhaba, terzi hizmetleri hakkında bilgi almak istiyorum.', en: 'Hello, I would like information about your tailor services.', ru: 'Здравствуйте, хочу узнать об услугах портного.', de: 'Hallo, ich möchte Informationen zu Ihren Schneider-Leistungen.' }[lang];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode(lang),
      {
        '@type': 'CollectionPage', '@id': `${url}#webpage`, url, name: title, description: desc, inLanguage: lang,
        isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` }, dateModified: LAST_UPDATE,
        mainEntity: { '@type': 'ItemList', itemListElement: SERVICES.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name[lang], url: abs(serviceUrl(lang, s)) })) },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
          { '@type': 'ListItem', position: 2, name: SVC_HUB_NAME[lang], item: url },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Shell lang={lang} waMsg={waMsg} footLinks={[
        { href: lang === 'tr' ? '/' : HUB_MAIN[lang], label: u.home.replace('← ', '') },
        { href: u.pricesHref, label: u.pricesLink },
      ]}>
        <Hero lang={lang} tag={`📍 ${u.where}`} h1={<>{SVC_HUB_NAME[lang]}<br /><span className="accent">Antalya</span></>} desc={desc} waMsg={waMsg} />
        <section className="sec" aria-labelledby="all-h">
          <div className="ctr">
            <div className="sec-head"><h2 className="sec-h ff" id="all-h">{u.svcWord}</h2></div>
            <div className="price-grid">
              {SERVICES.map((s) => (
                <a key={s.id} href={serviceUrl(lang, s)} className="price-card" style={{ display: 'block' }}>
                  <div className="price-head"><span className="price-icon" aria-hidden="true">{s.icon}</span><div className="price-tr">{s.name[lang]}</div></div>
                  <p className="price-desc">{s.intro[lang]}</p>
                  <div style={{ fontSize: '.78rem', color: '#C9A96E', fontWeight: 700 }}>{TIME_TEXT[s.time][lang] === timeOf(lang, s) ? TIME_TEXT[s.time][lang] : timeOf(lang, s)}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="dist-h">
          <div className="ctr" style={{ maxWidth: 900 }}>
            <div className="sec-head"><h2 className="sec-h ff" id="dist-h">{u.districts}</h2></div>
            <div>
              {DISTRICTS.map((d) => (<a key={d.slug} href={districtUrl(lang, d)} style={linkChip}>{d.name[lang]}</a>))}
              {MAHALLE_PAGES.map((m) => (<a key={m.href} href={m.href} style={linkChip}>{m.name[lang]}</a>))}
            </div>
          </div>
        </section>
        <Cta lang={lang} waMsg={waMsg} text={u.photoPrice} />
        {otherLangLinks(lang, (l) => SERVICE_BASE[l])}
        <ReviewsBlock lang={lang} />
      </Shell>
    </>
  );
}
