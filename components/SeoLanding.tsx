// ============================================================
// terzihizmeti.com.tr — components/SeoLanding.tsx
// Bölge sayfaları (/antalya-terzi/[bolge] …) ve hizmet sayfaları (/terzi-hizmetleri/[hizmet] …)
// için 4 dilli, veri odaklı sunucu bileşenleri + metadata üreticileri.
// Veri: lib/seo-data.ts. Sadece doğrulanmış bilgi kullanılır (bkz. dosya başlığı).
// ============================================================
import { sixForService } from '@/lib/intl-hizmet';
import { sixAlt } from '@/lib/intl-topics';
import OrnekGorselSeridi from '@/components/OrnekGorselSeridi';
import type { GorselAnahtar } from '@/lib/ornek-gorseller';
import type { Metadata } from 'next';
import Image from 'next/image';
import ReviewsBlock from '@/components/ReviewsBlock';
import { AREA_NOTES, AREA_NOTE_UI } from '@/lib/district-facts';
import { districtAnswer, districtFaqPool, SERVICE_PICK } from '@/lib/district-copy';
import { areaIntro, areaNeeds, NEEDS_H, AREA_PROFILES } from '@/lib/area-profiles';
import { businessNode as sharedBusinessNode } from '@/lib/business';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';
import {
  DISTRICTS, SERVICES, MAHALLE_PAGES, findDistrict, LANGS, SITE, PHONE, PHONE_TEL, MAPS, LAST_UPDATE,
  SERVICE_BASE, HUB_MAIN, HOTEL_BASE,
  abs, districtUrl, serviceUrl, query, timeOf, priceOf, TIME_TEXT,
  type Lang, type District, type Service,
  isTrNear, isIndexable, TR_NEAR_SLUGS, trExtraKeywords, isFreeService,
} from '@/lib/seo-data';
import { angleFor, angleTitles, angleDescs, angleKeywords, unfreeDeep, unfree } from '@/lib/seo-angles';
import { fgNearDistrict, fgServiceMeta, eurFromText, EUR_FROM } from '@/lib/fg-meta';
import { trNearDistrict } from '@/lib/tr-meta';
import { fitDesc, fitKeywords } from '@/lib/meta-fit';

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
    mahalle: 'Konyaaltı mahalleleri', ctaH: 'Hemen Ulaşın', free: 'Otel ve eve ücretsiz servis', paid: 'Otellere ücretsiz servis',
    hours: 'Her gün 08:00–23:00', since: "2006'dan beri", where: 'Atölye: Hurma Mahallesi, Konyaaltı, Antalya',
    footer: 'Terzi Can · Hurma, Konyaaltı, Antalya', pricesLink: 'Terzi fiyatları 2026', pricesHref: '/antalya-terzi-fiyatlari',
  },
  en: {
    home: '← Home', wa: 'WHATSAPP →', waBtn: '💬 Message us on WhatsApp →', brand: 'Terzi Can', svcWord: 'Services',
    popular: 'Popular searches', faq: 'Frequently Asked Questions', nearby: 'Nearby areas', all: 'All services',
    otherLang: 'Other languages', hotelLink: 'Hotel area page', districts: 'Areas we serve',
    related: 'Related services', time: 'Turnaround', price: 'Price', photoPrice: 'Send a photo and we will quote right away',
    mahalle: 'Konyaaltı neighbourhoods (Turkish)', ctaH: 'Get in Touch', free: 'Free service to hotels and homes', paid: 'Free hotel service',
    hours: 'Open daily 08:00–23:00', since: 'Serving since 2006', where: 'Workshop: Hurma, Konyaaltı, Antalya',
    footer: 'Terzi Can · Hurma, Konyaaltı, Antalya', pricesLink: 'Tailor prices Antalya', pricesHref: '/en/tailor-prices-antalya',
  },
  ru: {
    home: '← Главная', wa: 'WHATSAPP →', waBtn: '💬 Написать в WhatsApp →', brand: 'Terzi Can', svcWord: 'Услуги',
    popular: 'Частые запросы', faq: 'Частые вопросы', nearby: 'Ближайшие районы', all: 'Все услуги',
    otherLang: 'Другие языки', hotelLink: 'Страница отельного района', districts: 'Районы обслуживания',
    related: 'Похожие услуги', time: 'Срок', price: 'Цена', photoPrice: 'Пришлите фото — сразу назовём цену',
    mahalle: 'Районы Коньяалты (тур.)', ctaH: 'Свяжитесь с нами', free: 'Бесплатный выезд в отели и на дом', paid: 'Бесплатный выезд в отели',
    hours: 'Ежедневно 08:00–23:00', since: 'Работаем с 2006 года', where: 'Мастерская: Хурма, Коньяалты, Анталья',
    footer: 'Terzi Can · Хурма, Коньяалты, Анталья', pricesLink: 'Цены портного Анталья', pricesHref: '/ru/ceny-portnoy-antalya',
  },
  de: {
    home: '← Startseite', wa: 'WHATSAPP →', waBtn: '💬 Per WhatsApp schreiben →', brand: 'Terzi Can', svcWord: 'Leistungen',
    popular: 'Häufige Suchanfragen', faq: 'Häufige Fragen', nearby: 'Nahegelegene Gebiete', all: 'Alle Leistungen',
    otherLang: 'Andere Sprachen', hotelLink: 'Seite für das Hotelgebiet', districts: 'Gebiete, die wir bedienen',
    related: 'Ähnliche Leistungen', time: 'Dauer', price: 'Preis', photoPrice: 'Foto senden, Preis sofort per WhatsApp',
    mahalle: 'Stadtteile in Konyaaltı (türk.)', ctaH: 'Kontakt aufnehmen', free: 'Kostenloser Service zu Hotels und nach Hause', paid: 'Hotelservice kostenlos',
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
const businessNode = (_lang: Lang) => sharedBusinessNode();

const alternatesFor = (lang: Lang, urlFor: (l: Lang) => string, slug?: string) => {
  // Uzak bölgenin Türkçe sayfası noindex olduğu için hreflang'a girmez; x-default İngilizce olur.
  const trOk = !slug || isTrNear(slug);
  const languages: Record<string, string> = {};
  if (trOk) languages.tr = urlFor('tr');
  languages.en = urlFor('en'); languages.ru = urlFor('ru'); languages.de = urlFor('de');
  languages['x-default'] = urlFor(trOk ? 'tr' : 'en');
  return { canonical: urlFor(lang), languages };
};
const _alternatesForOld = (lang: Lang, urlFor: (l: Lang) => string) => ({
  // Her dil sayfası KENDİ adresini canonical gösterir (Türkçe sayfayı değil); dil karşılıkları hreflang ile bağlanır.
  canonical: urlFor(lang),
  languages: { tr: urlFor('tr'), en: urlFor('en'), ru: urlFor('ru'), de: urlFor('de'), 'x-default': urlFor('tr') },
});

// ── Arama sorgusu odaklı başlık/açıklama yardımcıları ──────────────────────
const capFirst = (lang: Lang, t: string) => (t ? t.charAt(0).toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : lang) + t.slice(1) : t);
const pickFit = (list: string[], max: number) => list.find((c) => c.length <= max) ?? list[list.length - 1];
const priceShortOf = (lang: Lang, s: Service) =>
  lang === 'tr' ? (s.priceFrom ? `₺${s.priceFrom}'den` : '') : eurFromText(lang, s.id).toLowerCase();
const TIME_SHORT: Record<Lang, Record<'same' | 'next' | 'three' | 'none', string>> = {
  tr: { same: 'Ertesi Gün', next: 'Ertesi Gün', three: 'Ölçüye Göre', none: 'Yakınınızda' },
  en: { same: 'Next Day', next: 'Next Day', three: 'Made to Measure', none: 'Near You' },
  ru: { same: 'На следующий день', next: 'На следующий день', three: 'На заказ', none: 'Рядом' },
  de: { same: 'Am nächsten Tag', next: 'Am nächsten Tag', three: 'Nach Maß', none: 'In der Nähe' },
};

// ── Bölge önceliği: TR'de yerel mahalleler, yabancı dilde tatil bölgeleri öne ──
const TR_PRI = ['konyaalti', 'hurma', 'liman', 'gursu', 'uluc', 'altinkum', 'ogretmenevleri', 'arapsuyu', 'siteler', 'uncali', 'sarisu', 'meltem'];
const FG_PRI = ['konyaalti', 'muratpasa', 'side', 'aksu', 'kundu', 'belek', 'lara', 'kemer', 'beldibi'];
function sortD(lang: Lang, list: District[]): District[] {
  const pri = lang === 'tr' ? TR_PRI : FG_PRI;
  list = list.filter((x) => isIndexable(lang, x.slug)); // Türkçede uzak bölgeler listelenmez
  const rank = (x: District) => { const i = pri.indexOf(x.slug); return i < 0 ? 999 : i; };
  return [...list].sort((a, b) => rank(a) - rank(b));
}

// ── Metin üreticileri ───────────────────────────────────────
function districtCopy(lang: Lang, d: District) {
  const r = _districtCopy(lang, d);
  return isFreeService(d.slug) ? r : unfreeDeep(lang, r);
}
function _districtCopy(lang: Lang, d: District) {
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
  let title = pickFit(titles, 60);
  let desc = '';
  const descs = {
    tr: [`${loc} terzi arıyorsanız: Terzi Can Konyaaltı. Paça kısaltma ₺200'den, fermuar değişimi ₺300'den, elbise tamiri. Her gün 08:00–23:00. ${PH}`,
         `${loc} terzi: paça ₺200'den, fermuar ₺300'den, elbise tamiri. Her gün 08:00–23:00, otel ve eve ücretsiz alım. ${PH}`,
         `${loc} terzi ${PH}: paça, fermuar, elbise dikimi ve tamiri. Her gün 08:00–23:00.`],
    en: [`Tailor ${loc}? Terzi Can, Konyaaltı: hemming, zipper replacement, dress repair. Open daily 08:00–23:00. ${PH}`,
         `Tailor ${loc}: hemming, zippers, dress repair. Open daily 08:00–23:00, free hotel pick-up. ${PH}`,
         `Tailor ${loc} ${PH}: hemming, zippers, dress repair. Open daily 08:00–23:00.`],
    ru: [`Портной ${loc}? Terzi Can, Коньяалты: подшив, замена молнии, ремонт платьев. Ежедневно 08:00–23:00. ${PH}`,
         `Портной ${loc}: подшив, молния, ремонт платьев. Ежедневно 08:00–23:00, забор из отелей бесплатно. ${PH}`,
         `Портной ${loc} ${PH}: подшив, молнии, ремонт платьев. Ежедневно 08:00–23:00.`],
    de: [`Schneider ${loc}? Terzi Can, Konyaaltı: Hose kürzen, Reißverschluss, Kleid ändern. Täglich 08:00–23:00. ${PH}`,
         `Schneider ${loc}: Kürzen, Reißverschluss, Kleider ändern. Täglich 08:00–23:00, Hotelabholung gratis. ${PH}`,
         `Schneider ${loc} ${PH}: Kürzen, Reißverschlüsse, Kleider ändern. Täglich 08:00–23:00.`],
  }[lang];
  const priT: string[] = lang === 'tr'
    ? (TR_PRI.includes(d.slug) ? (d.slug === 'konyaalti' ? [`Konyaaltı Terzi: Hurma, Uncalı, Liman, Gürsu | Terzi Can`, `Konyaaltı Terzi: Paça ₺200, Fermuar ₺300 | Terzi Can`] : [`${n} Terzi: Paça ₺200, Fermuar ₺300 | Terzi Can`, `${n} Terzi | Terzi Can`]) : [])
    : (FG_PRI.includes(d.slug) ? ({
      en: [`Tailor in ${n}: Hotel Pick-up, Hemming | Terzi Can`, `Tailor in ${n}, Antalya · Hotel Pick-up | Terzi Can`],
      ru: [`Портной ${n}: забор из отеля, подшив | Terzi Can`, `Портной ${n}, Анталья · из отеля | Terzi Can`],
      de: [`Schneider ${n}: Hotelabholung, Kürzen | Terzi Can`, `Schneider ${n}, Antalya · Hotelabholung | Terzi Can`],
    } as Record<string, string[]>)[lang] : []);
  const priD: string[] = lang === 'tr'
    ? (TR_PRI.includes(d.slug) ? (d.slug === 'konyaalti' ? [`Konyaaltı, Hurma, Liman, Uncalı, Gürsu ve Öğretmenevleri'nde terzi arıyorsanız: paça ₺200'den, fermuar ₺300'den. Her gün 08:00–23:00, adrese servis. ${PH}`, `Konyaaltı terzi: Hurma, Liman, Uncalı, Gürsu. Paça ₺200'den, fermuar ₺300'den. Her gün 08:00–23:00. ${PH}`] : [`${loc} terzi: paça kısaltma ücreti ₺200'den, fermuar değişimi ₺300'den. Otel ve eve ücretsiz servis, her gün 08:00–23:00. ${PH}`, `${loc} terzi: paça ₺200'den, fermuar ₺300'den. Her gün 08:00–23:00. ${PH}`]) : [])
    : (FG_PRI.includes(d.slug) ? ({
      en: [`Staying ${loc}? We collect from your hotel: hemming, zippers. message us on WhatsApp in your language. Daily 08:00–23:00. ${PH}`, `Staying ${loc}? Hotel pick-up: hemming, zippers. Daily 08:00–23:00. ${PH}`],
      ru: [`Отдыхаете ${loc}? Заберём вещи из отеля: подшив, молния. Говорим по-русски. Ежедневно 08:00–23:00. ${PH}`, `Отдыхаете ${loc}? Забор из отеля: подшив, молния. Ежедневно 08:00–23:00. ${PH}`],
      de: [`Urlaub ${loc}? Wir holen im Hotel ab: Kürzen, Reißverschluss. schreiben Sie uns per WhatsApp. Täglich 08:00–23:00. ${PH}`, `Urlaub ${loc}? Hotelabholung: Kürzen, Reißverschluss. Täglich 08:00–23:00. ${PH}`],
    } as Record<string, string[]>)[lang] : []);
  if (priT.length) title = pickFit([...priT, ...titles], 60);
  desc = pickFit([...priD, ...descs], 158);
  // Bölge sayfası "açısı": her bölge farklı bir arama niyetine ağırlık verir (dikim / tamir-tadilat / fermuar-paça /
  // daraltma / keten-pamuk / üst giyim) → başlık, açıklama ve anahtar kelimeler sayfadan sayfaya farklı olur.
  // Tamir-tadilat açısı: Türkçede yalnızca yakın bölgelerde, yabancı dillerde tüm bölgelerde çıkabilir (lib/seo-angles.ts).
  {
    const near = isTrNear(d.slug);
    const order = lang === 'tr' ? Math.max(0, TR_NEAR_SLUGS.indexOf(d.slug)) : Math.max(0, DISTRICTS.findIndex((x) => x.slug === d.slug));
    const a = angleFor(lang, d.slug, near, order);
    const tail = ({ tr: `Haftanın 7 günü açık ${PH}`, en: `Open 7 days ${PH}`, ru: `Работаем 7 дней ${PH}`, de: `7 Tage geöffnet ${PH}` } as Record<string, string>)[lang];
    const ctx = { lang, n, loc, free: isFreeService(d.slug), tail };
    title = pickFit([...angleTitles(lang, a, n), ...titles], 60);
    desc = pickFit([...angleDescs(lang, a, ctx), ...priD, ...descs], 158);
    if (lang === 'tr' && d.slug === 'konyaalti') {
      const kd = `Konyaaltı, Hurma, Liman, Uncalı, Gürsu'da tamir tadilat, daraltma, kısaltma, fermuar, abiye, özel dikim. Paça ₺200'den. 08:00–23:00 ${PH}`;
      if (kd.length <= 158) desc = kd;
    }
    kw.push(...angleKeywords(lang, a, n));
    if (lang === 'tr' && near) kw.push(...trExtraKeywords(d.slug, n));
    if (lang !== 'tr' && d.slug === 'konyaalti') {
      const MH = ['Hurma', 'Liman', 'Gürsu', 'Uncalı', 'Sarısu', 'Uluç', 'Siteler', 'Altınkum'];
      const T = ({ en: ['tailor', 'clothing repair', 'alterations', 'trouser hemming', 'jeans hemming', 'zipper replacement', 'waist taking in', 'dress alteration', 'custom dressmaking'],
        ru: ['портной', 'ремонт одежды', 'подгонка одежды', 'подшив брюк', 'подшив джинсов', 'замена молнии', 'ушить в талии', 'подгонка платья', 'пошив платья'],
        de: ['Schneider', 'Kleidung reparieren', 'Änderungsschneiderei', 'Hose kürzen', 'Jeans kürzen', 'Reißverschluss wechseln', 'Taille enger machen', 'Kleid ändern', 'Kleid nach Maß'] } as Record<string, string[]>)[lang];
      for (const m of MH) kw.push(...T.map((t) => `${m} ${t}`));
    }
    // Türkçe + yakın bölge: tüm tamir-tadilat / dikim aramaları her yakın sayfanın anahtar kelimelerinde bulunur.
    if (lang === 'tr' && near) {
      kw.push(`${n} terzi`, `${n} bay bayan terzi`, `${n} tamir tadilat`, `${n} paça kısaltma`, `${n} kot paçası kısaltma`, `${n} kot paçası daraltma`,
        `${n} fermuar değişimi`, `${n} fermuar tamiri`, `${n} pantolon kısaltma`, `${n} pantolon daraltma`, `${n} etek kısaltma`, `${n} bel daraltma`,
        `${n} şort kısaltma`, `${n} mont tamiri`, `${n} ceket daraltma`, `${n} ceket kısaltma`, `${n} elbise dikimi`, `${n} elbise daraltma`,
        `${n} abiye tamiri`, `${n} özel dikim`, `${n} bana yakın terzi`);
    }
    return metaOverride({ n, loc, kw, title, desc: isFreeService(d.slug) ? desc : unfree(lang, desc) });
  }
  return metaOverride({ n, loc, kw, title, desc: isFreeService(d.slug) ? desc : unfree(lang, desc) });

  function metaOverride(r: { n: string; loc: string; kw: string[]; title: string; desc: string }) {
    const o = lang === 'tr' ? trNearDistrict(d.slug, n, r.loc, PHONE, 'Terzi Can') : fgNearDistrict(lang, d.slug, n); // elle yazılmış meta (TR yakın bölgeler + EN/RU/DE)
    if (!o) return { ...r, title: pickFit(({ tr: [`${n} Terzi · Elbise Dikimi, Tamiri, Tadilatı | Antalya`, `${n} Terzi: Elbise Dikimi, Tamir, Tadilat | Antalya`, `${n} Terzi · Dikim, Tamir, Tadilat | Antalya`, `${n} Terzi | Antalya`], en: [`Tailor ${n}, Antalya: Dressmaking, Repairs, Alterations`, `Tailor ${n} Antalya · Dress Making & Alterations`, `Tailor ${n}, Antalya · Repairs, Alterations`, `Tailor in ${n}, Antalya`], ru: [`Портной ${n}, Анталья: пошив, ремонт, переделка одежды`, `Портной ${n}: пошив, ремонт, переделка`, `Портной ${n}, Анталья`], de: [`Schneider ${n}, Antalya: Nähen, Reparatur, Änderung`, `Schneider ${n}: Kleider nähen, ändern`, `Schneider ${n}, Antalya`] } as Record<string, string[]>)[lang], 60) };
    return { n: r.n, loc: r.loc, kw: Array.from(new Set([...o.kw, ...r.kw])), title: pickFit(({ tr: [`${n} Terzi · Elbise Dikimi, Tamiri, Tadilatı | Antalya`, `${n} Terzi: Elbise Dikimi, Tamir, Tadilat | Antalya`, `${n} Terzi · Dikim, Tamir, Tadilat | Antalya`, `${n} Terzi | Antalya`], en: [`Tailor ${n}, Antalya: Dressmaking, Repairs, Alterations`, `Tailor ${n} Antalya · Dress Making & Alterations`, `Tailor ${n}, Antalya · Repairs, Alterations`, `Tailor in ${n}, Antalya`], ru: [`Портной ${n}, Анталья: пошив, ремонт, переделка одежды`, `Портной ${n}: пошив, ремонт, переделка`, `Портной ${n}, Анталья`], de: [`Schneider ${n}, Antalya: Nähen, Reparatur, Änderung`, `Schneider ${n}: Kleider nähen, ändern`, `Schneider ${n}, Antalya`] } as Record<string, string[]>)[lang], 60), desc: o.desc };
  }
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
  const trPrice = lang === 'tr' && ps ? [`${Q} fiyatları 2026 Antalya ${ps} | Terzi Can`, `${Q} fiyatları 2026 · ${ps} | Terzi Can`] : [];
  const trNoPrice = lang === 'tr' && !ps ? [`${Q} Antalya · Fotoğrafla Net Fiyat | Terzi Can`, `${Q} Antalya · Fotoğrafla Fiyat | Terzi Can`, `${Q} Antalya · Fiyat | Terzi Can`] : [];
  const title = pickFit([...trPrice, ...trNoPrice, ...(ps ? t1 : t1.slice(1))], 60);
  const price = priceShortOf(lang, s);
  const tm0 = timeOf(lang, s).replace(/[.\s]+$/, '');
  const tm = tm0.charAt(0).toLocaleLowerCase(lang === 'tr' ? 'tr-TR' : lang) + tm0.slice(1);
  const v0 = capFirst(lang, s.vars[lang][0]);
  // Açıklama: kullanıcının sorusunu aynen tekrar eden ilk cümle + cevap (süre, fiyat, saat, telefon).
  const ask = {
    tr: price ? `${Q} ücreti ne kadar?` : `${Q} fiyatı: fotoğrafı WhatsApp'tan gönderin, net fiyatı öğrenin.`,
    en: `${Q} in Antalya?`,
    ru: `${v0} в Анталье?`,
    de: `${v0} in Antalya?`,
  }[lang];
  const who = { tr: 'Terzi Can Konyaaltı:', en: 'Terzi Can in Konyaaltı:', ru: 'Terzi Can в Коньяалты:', de: 'Terzi Can in Konyaaltı:' }[lang];
  const open = { tr: 'Her gün 08:00–23:00', en: 'Open daily 08:00–23:00', ru: 'Ежедневно 08:00–23:00', de: 'Täglich 08:00–23:00' }[lang];
  const pick = { tr: 'Konyaaltı\'nda ücretsiz servis', en: 'free pick-up in Konyaaltı', ru: 'забор из отелей бесплатно', de: 'Gratis-Abholung in Konyaaltı' }[lang];
  const tel = `☎ ${PHONE}`;
  const priceTxt = price ? (lang === 'tr' ? `2026 fiyatı ${price}` : price) : '';
  const body = (withTime: boolean) => `${who} ${withTime ? tm : ''}${withTime && priceTxt ? ', ' : ''}${priceTxt}`.replace(/[\s,:]+$/, '');
  const candidates = [
    `${ask} ${body(true)}. ${open}, ${pick}. ${tel}`,
    `${ask} ${body(true)}. ${open}. ${tel}`,
    `${ask} ${body(false)}. ${open}, ${pick}. ${tel}`,
    `${ask} ${body(false)}. ${open}. ${tel}`,
    `${nm}. ${open}. ${tel}`,
  ];
  const desc = pickFit(candidates, 158);
  const o = lang === 'tr' ? undefined : fgServiceMeta(lang, s.id);
  if (o) return { nm, title: o.title, desc: o.desc, kw: o.kw };
  return { nm, title, desc, kw: [] as string[] };
}

function serviceFaq(lang: Lang, s: Service): [string, string][] {
  const nm = s.name[lang];
  const price = priceOf(lang, s);
  const time = timeOf(lang, s);
  return {
    tr: [
      [`Antalya'da ${s.vars.tr[0]} için nereye gidebilirim?`, `Konyaaltı Hurma'daki Terzi Can atölyesine. ${s.intro.tr} Konyaaltı'da otellere servis ücretsiz, ev adresleri için WhatsApp'tan sorulur; atölye her gün 08:00–23:00 açık.`],
      [`${nm} kaç gün sürer, fiyatı nedir?`, `${time}.${price ? ' ' + price + '; net fiyat kumaşa ve işin kapsamına bağlı.' : " Fiyat için kıyafetin fotoğrafını WhatsApp'tan iletin."}`],
      [`${nm} için otele ya da eve geliyor musunuz?`, 'Evet. Konyaaltı\'nda alım-teslim ücretsiz; Muratpaşa, Lara, Güzeloba, Kundu, Belek, Side ve Kemer gibi otel bölgelerinde otele alım-teslim de ücretsizdir.'],
    ],
    en: [
      [`Where in Antalya can I get ${s.vars.en[0]} done?`, `At the Terzi Can workshop in Hurma, Konyaaltı. ${s.intro.en} Hotel pick-up and delivery is free everywhere we serve (home addresses: free in Konyaaltı and nearby neighbourhoods, otherwise ask on WhatsApp), and the workshop is open daily 08:00–23:00.`],
      [`How many days does ${nm.toLowerCase()} take, and what is the price?`, `${time}.${price ? ' ' + price + '; the final price depends on the fabric and the scope of work.' : ' Send a photo of the garment on WhatsApp to get a price.'}`],
      [`Do you come to my hotel or home for ${nm.toLowerCase()}?`, 'Yes. Hotel pick-up and delivery is free everywhere we serve; in areas such as Muratpaşa, Lara, Güzeloba, Kundu, Belek and Side the service fee depends on the distance.'],
    ],
    ru: [
      [`Куда в Анталье обратиться: ${s.vars.ru[0]}?`, `В мастерскую Terzi Can в Хурме (Коньяалты). ${s.intro.ru} Забор и доставка в отели бесплатны везде, где мы работаем; на домашние адреса — бесплатно в Коньяалты и соседних кварталах; мастерская открыта ежедневно с 08:00 до 23:00.`],
      [`Сколько дней занимает «${nm}» и какая цена?`, `${time}.${price ? ' ' + price + '; окончательная цена зависит от ткани и объёма работ.' : ' Пришлите фото вещи в WhatsApp, и мы назовём цену.'}`],
      [`Забираете ли вы вещь из отеля или с дома для услуги «${nm}»?`, 'Да. В Коньяалты забор и доставка бесплатны; в Муратпаше, Ларе, Гюзельобе, Кунду, Белеке и Сиде стоимость зависит от расстояния.'],
    ],
    de: [
      [`Wo in Antalya bekomme ich „${s.vars.de[0]}“?`, `In der Werkstatt von Terzi Can in Hurma, Konyaaltı. ${s.intro.de} Der Hotelservice ist überall kostenlos; für Wohnadressen gilt das in Konyaaltı und Nachbarvierteln, sonst per WhatsApp fragen, die Werkstatt ist täglich von 08:00 bis 23:00 geöffnet.`],
      [`Wie viele Tage braucht „${nm}“ und was kostet es?`, `${time}.${price ? ' ' + price + '; der endgültige Preis hängt von Stoff und Aufwand ab.' : ' Schicken Sie ein Foto des Kleidungsstücks per WhatsApp, dann nennen wir den Preis.'}`],
      [`Holen Sie die Kleidung für „${nm}“ im Hotel oder zu Hause ab?`, 'Ja. In Konyaaltı sind Abholung und Lieferung kostenlos; in Muratpaşa, Lara, Güzeloba, Kundu, Belek und Side richtet sich die Gebühr nach der Entfernung.'],
    ],
  }[lang] as [string, string][];
}

// ── Metadata ────────────────────────────────────────────────
// EN/RU/DE bölge sayfaları için ek anahtar kelimeler: ceket/mont, gömlek, etek, şort, fiyat, "yakınımda", otel, bay-bayan.
function foreignExtraKeywords(lang: Lang, n: string): string[] {
  if (lang === 'tr') return [];
  return ({
    en: [
      `tailor near me ${n}`, `tailor near hotels ${n}`, `${n} tailor for hotel guests`, `${n} tailor men and women`,
      `jacket alteration ${n}`, `coat alteration ${n}`, `shirt alteration ${n}`, `skirt hemming ${n}`, `shorts hemming ${n}`,
      `${n} alteration prices`, `${n} tailor price`, `hemming price ${n}`, `zipper replacement price ${n}`,
    ],
    ru: [
      `портной рядом ${n}`, `портной рядом с отелем ${n}`, `ателье для туристов ${n}`, `${n} ателье мужская и женская одежда`,
      `ремонт куртки ${n}`, `подгонка пиджака ${n}`, `переделка рубашки ${n}`, `укоротить юбку ${n}`, `подшить шорты ${n}`,
      `${n} ателье цены`, `${n} стоимость подшива`, `замена молнии цена ${n}`,
    ],
    de: [
      `Schneider in der Nähe ${n}`, `Schneider Hotel ${n}`, `Schneiderei für Hotelgäste ${n}`, `${n} Schneider Damen und Herren`,
      `Jacke ändern ${n}`, `Mantel kürzen ${n}`, `Hemd ändern ${n}`, `Rock kürzen ${n}`, `Shorts kürzen ${n}`,
      `${n} Änderungsschneiderei Preise`, `Hose kürzen Preis ${n}`, `Reißverschluss wechseln Preis ${n}`,
    ],
  } as Record<string, string[]>)[lang];
}

export function districtMetadata(lang: Lang, d: District): Metadata {
  const c = districtCopy(lang, d);
  const url = abs(districtUrl(lang, d));
  const kw = [
    ...c.kw,
    ...SERVICES.slice(0, 8).map((s) => query(lang, d, s)),
    ...SERVICES.slice(0, 6).map((s) => `${d.name[lang]} ${s.vars[lang][0]}`),
    ...foreignExtraKeywords(lang, d.name[lang]),
  ];
  return {
    metadataBase: new URL(SITE),
    title: { absolute: c.title },
    description: fitDesc(c.desc),
    keywords: fitKeywords(kw),
    // Türkçe + uzak bölge: dizine alınmasın, linkler takip edilsin.
    robots: !isIndexable(lang, d.slug)
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: alternatesFor(lang, (l) => abs(districtUrl(l, d)), d.slug),
    openGraph: {
      title: c.title, description: fitDesc(c.desc), url, siteName: 'Terzi Can', locale: OG_LOCALE[lang], type: 'website',
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
    description: fitDesc(c.desc),
    keywords: fitKeywords([
      ...c.kw,
      ...s.vars[lang],
      ...s.vars[lang].slice(0, 3).map((v) => `${v} Antalya`),
      // Aramada sık yazılan ek kalıplar: fiyat + bay/bayan + 7 gün açık (her hizmette o hizmetin kendi kelimesiyle)
      ...({
        tr: [`${s.vars.tr[0]} fiyatları 2026`, `${s.vars.tr[0]} bay bayan`, `${s.vars.tr[0]} haftanın 7 günü`, `${s.vars.tr[0]} Konyaaltı Hurma`],
        en: [`${s.vars.en[0]} price Antalya`, `${s.vars.en[0]} men and women`, `${s.vars.en[0]} open 7 days`],
        ru: [`${s.vars.ru[0]} цена Анталья`, `${s.vars.ru[0]} мужская и женская`, `${s.vars.ru[0]} 7 дней в неделю`],
        de: [`${s.vars.de[0]} Preis Antalya`, `${s.vars.de[0]} Damen und Herren`, `${s.vars.de[0]} 7 Tage geöffnet`],
      } as Record<string, string[]>)[lang],
    ]),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: (() => { const a = alternatesFor(lang, (l) => abs(serviceUrl(l, s))); return { ...a, languages: { ...a.languages, ...sixForService(s.slug.tr) } }; })(),
    openGraph: {
      title: c.title, description: fitDesc(c.desc), url, siteName: 'Terzi Can', locale: OG_LOCALE[lang], type: 'website',
      images: [{ url: OG, width: 1024, height: 1024, alt: c.title }],
    },
  };
}

export function hubMetadata(lang: Lang): Metadata {
  const title = {
    tr: 'Tamir Tadilat Terzi Antalya · Paça ₺200, Fermuar ₺300',
    en: 'Clothing Repair & Alterations Antalya · Hemming',
    ru: 'Ремонт и подшив одежды в Анталье · подшив',
    de: 'Kleidung ändern & reparieren Antalya · Kürzen',
  }[lang];
  const description = {
    tr: `Bay bayan tamir tadilat: söküğü, yırtığı dikme, paça ve etek kısaltma, fermuar değişimi. Konyaaltı Hurma, Liman, Uncalı, Gürsu. ☎ ${PHONE}`,
    en: `Clothing repair for men & women: torn seams, hemming, zipper replacement. Konyaaltı, Hurma, Liman, Arapsuyu. Pick-up arranged on WhatsApp. ☎ ${PHONE}`,
    ru: `Ремонт одежды: зашить дырку, подшив, молнии, мужская и женская. Коньяалты, Хурма, Лиман, Арапсую. Бесплатный забор. ☎ ${PHONE}`,
    de: `Kleidung reparieren & ändern: Risse nähen, Kürzen, Reißverschluss. Konyaaltı, Hurma, Liman, Arapsuyu. Abholung gratis. ☎ ${PHONE}`,
  }[lang];
  const url = abs(SERVICE_BASE[lang]);
  return {
    metadataBase: new URL(SITE),
    title: { absolute: title },
    description: fitDesc(description),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: (() => { const a = alternatesFor(lang, (l) => abs(SERVICE_BASE[l])); return { ...a, languages: { ...a.languages, ...sixAlt('tamir') } }; })(),
    openGraph: { title, description: fitDesc(description), url, siteName: 'Terzi Can', locale: OG_LOCALE[lang], type: 'website', images: [{ url: OG, width: 1024, height: 1024, alt: title }] },
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

function otherLangLinks(lang: Lang, urlFor: (l: Lang) => string, only?: (l: Lang) => boolean) {
  const names: Record<Lang, string> = { tr: 'Türkçe', en: 'English', ru: 'Русский', de: 'Deutsch' };
  return (
    <section className="sec" style={{ paddingTop: 0, paddingBottom: '1.5rem' }}>
      <div className="ctr" style={{ maxWidth: 720 }}>
        <h2 style={{ fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase', opacity: .55, marginBottom: '.9rem' }}>{UI[lang].otherLang}</h2>
        <div>
          {LANGS.filter((l) => l !== lang && (!only || only(l))).map((l) => (
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
  const faq = districtFaqPool(lang, d);
  const waMsg = {
    tr: `Merhaba, ${c.loc} terzi hizmeti almak istiyorum.`,
    en: `Hello, I need a tailor ${c.loc}.`,
    ru: `Здравствуйте, нужен портной ${c.loc}.`,
    de: `Hallo, ich brauche einen Schneider ${c.loc}.`,
  }[lang];
  const nearby = DISTRICTS.filter((x) => x.slug !== d.slug && x.kind === d.kind && isIndexable(lang, x.slug)).slice(0, 8);
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

  // H1 varyantları: slug'a göre deterministik seçilir (sayfalar birbirinin kopyası olmasın); anahtar kelime ve doğrulanmış bilgi korunur.
  const hv = [...d.slug].reduce((x, ch) => x + ch.charCodeAt(0), 0) % 4;
  const h1 = {
    tr: [
      (<>{d.name.tr} <span className="accent">Terzi</span><br />Paça Kısaltma, Bel Daraltma, Fermuar Değişimi</>),
      (<>{d.loc.tr} <span className="accent">Terzi Hizmeti</span><br />Pantolon paça, fermuar ve elbise tadilatı</>),
      (<>{d.loc.tr} <span className="accent">Kıyafet Tadilatı</span><br />Acil işler 1–2 saatte, normal işler ertesi gün</>),
      (<>{d.name.tr} İçin <span className="accent">Terzi</span><br />Fotoğrafı WhatsApp'tan gönderin, fiyatı öğrenin</>),
    ],
    en: [
      (<>Tailor in <span className="accent">{d.name.en}</span><br />Hemming, Waist Taking-in, Zipper Replacement</>),
      (<><span className="accent">{d.name.en}</span> Tailor Service<br />Trouser hemming, zipper repair and dress alterations</>),
      (<>Clothing Alterations {d.loc.en}<br /><span className="accent">Urgent jobs in 1–2 hours, normal jobs next day</span></>),
      (<>Your Tailor {d.loc.en}<br /><span className="accent">Send a photo on WhatsApp and get a price</span></>),
    ],
    ru: [
      (<>Портной <span className="accent">{d.name.ru}</span><br />Подшив брюк, ушивание в талии, замена молнии</>),
      (<>Услуги портного {d.loc.ru}<br /><span className="accent">Подшив брюк, замена молний, переделка платьев</span></>),
      (<>Подгонка одежды {d.loc.ru}<br /><span className="accent">Срочно — за 1–2 часа, обычно — на следующий день</span></>),
      (<>Ваш портной {d.loc.ru}<br /><span className="accent">Пришлите фото в WhatsApp — назовём цену</span></>),
    ],
    de: [
      (<>Schneider <span className="accent">{d.name.de}</span><br />Hose kürzen, Taille enger, Reißverschluss wechseln</>),
      (<>Schneiderservice {d.loc.de}<br /><span className="accent">Hosen kürzen, Reißverschluss wechseln, Kleider ändern</span></>),
      (<>Kleidung ändern {d.loc.de}<br /><span className="accent">Eilig in 1–2 Stunden, normal am nächsten Tag</span></>),
      (<>Ihr Schneider {d.loc.de}<br /><span className="accent">Foto per WhatsApp senden und Preis erfahren</span></>),
    ],
  }[lang][hv];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Shell lang={lang} waMsg={waMsg} footLinks={[
        { href: lang === 'tr' ? '/' : HUB_MAIN[lang], label: u.home.replace('← ', '') },
        { href: SERVICE_BASE[lang], label: u.all },
        { href: u.pricesHref, label: u.pricesLink },
      ]}>
        <Hero lang={lang} tag={`📍 ${d.name[lang]} · ${isFreeService(d.slug) ? u.free : u.paid} · ${u.hours}`} h1={h1}
          desc={districtAnswer(lang, d)} waMsg={waMsg} />

        <section className="sec" aria-labelledby="svc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">{u.since} · {u.where}</span>
              <h2 className="sec-h ff" id="svc-h">{{
                tr: `${c.loc} Terzi Hizmetleri`, en: `Tailor Services ${c.loc}`, ru: `Услуги портного ${c.loc}`, de: `Schneider-Leistungen ${c.loc}`,
              }[lang]}</h2>
            </div>
            <div className="price-grid">
              {SERVICE_PICK(d.slug, SERVICES.length, 6).map((i) => SERVICES[i]).map((s) => (
                <a key={s.id} href={serviceUrl(lang, s)} className="price-card" style={{ display: 'block' }}>
                  <div className="price-head">
                    <span className="price-icon" aria-hidden="true">{s.icon}</span>
                    <div><div className="price-tr">{s.name[lang]}</div><div className="price-kw">{query(lang, d, s)}</div></div>
                  </div>
                  <div style={{ fontSize: '.78rem', color: '#C9A96E', fontWeight: 700 }}>
                    {timeOf(lang, s)}{priceOf(lang, s) ? ` · ${priceOf(lang, s)}` : ''}
                  </div>
                </a>
              ))}
            </div>
            <p style={{ fontSize: '.84rem', marginTop: '1.2rem', textAlign: 'center' }}><a href={SERVICE_BASE[lang]} style={{ color: '#C9A96E', fontWeight: 700 }}>{u.all} →</a></p>
            <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', marginTop: '.6rem', textAlign: 'center' }}>{u.photoPrice}</p>
          </div>
        </section>

        {AREA_PROFILES[d.slug] && (
          <section className="sec" aria-labelledby="about-area-h">
            <div className="ctr" style={{ maxWidth: 820 }}>
              <div className="sec-head"><h2 className="sec-h ff" id="about-area-h">{NEEDS_H[lang](d.name[lang])}</h2></div>
              <p style={{ fontSize: '.92rem', lineHeight: 1.8, margin: '.5rem 0' }}>{areaIntro(lang, d.slug, d.name[lang], { name: (s, l) => findDistrict(s)?.name[l] })}</p>
              <ul style={{ fontSize: '.92rem', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
                {areaNeeds(lang, d.slug).map((x) => (<li key={x}>{x}</li>))}
              </ul>
            </div>
          </section>
        )}

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="pop-h">
          <div className="ctr" style={{ maxWidth: 820 }}>
            <div className="sec-head"><h2 className="sec-h ff" id="pop-h">{u.popular} — {d.name[lang]}</h2></div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, columns: '2 260px', fontSize: '.84rem', lineHeight: 2, color: 'rgba(255,255,255,.7)' }}>
              {popular.map((p) => (<li key={p}>✂️ {p}</li>))}
            </ul>
            {hotel && (<p style={{ marginTop: '1.2rem', fontSize: '.84rem' }}><a href={hotel} style={{ color: '#C9A96E', fontWeight: 700 }}>{u.hotelLink} →</a></p>)}
          </div>
        </section>

        {AREA_NOTES[d.slug] && isFreeService(d.slug) && (
          <section className="sec" aria-labelledby="area-h">
            <div className="ctr" style={{ maxWidth: 820 }}>
              <div className="sec-head"><h2 className="sec-h ff" id="area-h">{AREA_NOTE_UI[lang].h(d.name[lang])}</h2></div>
              <p style={{ fontSize: '.92rem', lineHeight: 1.8, margin: '.5rem 0' }}><strong>{AREA_NOTE_UI[lang].where}:</strong> {AREA_NOTES[d.slug].where[lang]}</p>
              <p style={{ fontSize: '.92rem', lineHeight: 1.8, margin: '.5rem 0' }}><strong>{AREA_NOTE_UI[lang].jobs}:</strong> {AREA_NOTES[d.slug].jobs[lang]}</p>
            </div>
          </section>
        )}

        <OrnekGorselSeridi konu="terzi" yer={d.name[lang]} lang={lang} anahtarlar={['eve-gelen-terzi', 'erkek-takim-olcu', 'beyaz-gomlek-katli', 'yun-pantolon-metre']} sayfaUrl={url} />

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
        {otherLangLinks(lang, (l) => districtUrl(l, d), (l) => isIndexable(l, d.slug))}
        <ReviewsBlock lang={lang} />
      </Shell>
    </>
  );
}

// ── HİZMET SAYFASI ──────────────────────────────────────────
// Hizmete göre örnek görseller (yapay zekâ ile üretilmiş; 'örnek görsel' etiketli)
const HIZMET_GORSEL: Record<string, GorselAnahtar[]> = {
  paca: ['yun-pantolon-metre', 'keten-pantolon-katli'], kot: ['yun-pantolon-metre', 'keten-pantolon-katli'],
  fermuar: ['polar-yelek', 'kadin-trenckot-atolye'],
  'elbise-dikim': ['abiye-elbise-atolye', 'keten-blazer-atolye', 'manken-bej-ceket'], 'ozel-dikim': ['abiye-elbise-atolye', 'keten-blazer-atolye', 'manken-bej-ceket'],
  'elbise-tamir': ['abiye-elbise-atolye', 'abiye-askida'], 'gece-kiyafeti': ['abiye-elbise-atolye', 'abiye-askida'], 'gelinlik-abiye': ['abiye-askida', 'abiye-elbise-atolye'],
  takim: ['erkek-takim-olcu', 'manken-palto-takim'], mont: ['erkek-palto-atolye', 'palto-yaka-detay', 'kadin-trenckot-atolye'],
  abiye: ['abiye-elbise-atolye', 'abiye-askida', 'manken-bej-ceket'], pantolon: ['yun-pantolon-metre', 'keten-pantolon-katli'], kol: ['erkek-takim-olcu', 'beyaz-gomlek-katli', 'palto-yaka-detay'],
  gomlek: ['beyaz-gomlek-katli', 'erkek-gomlek-atolye'], tisort: ['sweatshirt-katli'], etek: ['pilili-etek'],
  'kiyafet-tamiri': ['erkek-takim-olcu', 'beyaz-gomlek-katli', 'pilili-etek'], beden: ['erkek-takim-olcu', 'beyaz-gomlek-katli', 'pilili-etek'],
};

const HIZMET_KONU: Record<string, 'paca' | 'fermuar' | 'gelinlik' | 'hizmet'> = { paca: 'paca', kot: 'paca', pantolon: 'paca', abiye: 'gelinlik', fermuar: 'fermuar', 'gelinlik-abiye': 'gelinlik', 'elbise-dikim': 'gelinlik', 'elbise-tamir': 'gelinlik', 'gece-kiyafeti': 'gelinlik' };

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
        ...(lang === 'tr' ? (s.priceFrom ? { offers: { '@type': 'Offer', priceCurrency: 'TRY', price: String(s.priceFrom), priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'TRY', minPrice: String(s.priceFrom) } } } : {}) : (EUR_FROM[s.id] ? { offers: { '@type': 'Offer', priceCurrency: 'EUR', price: String(EUR_FROM[s.id]), priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', minPrice: String(EUR_FROM[s.id]) } } } : {})),
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
              {sortD(lang, DISTRICTS).map((d) => (<a key={d.slug} href={districtUrl(lang, d)} style={linkChip}>{query(lang, d, s)}</a>))}
              {MAHALLE_PAGES.map((m) => (<a key={m.href} href={m.href} style={linkChip}>{m.name[lang]}</a>))}
            </div>
          </div>
        </section>

        {HIZMET_GORSEL[s.id] && <OrnekGorselSeridi konu={HIZMET_KONU[s.id] || 'hizmet'} lang={lang} anahtarlar={HIZMET_GORSEL[s.id]} sayfaUrl={url} />}

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
              {sortD(lang, DISTRICTS).map((d) => (<a key={d.slug} href={districtUrl(lang, d)} style={linkChip}>{d.name[lang]}</a>))}
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
