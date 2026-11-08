// ============================================================
// terzihizmeti.com.tr — lib/icerik-haritasi.ts
// Sayfa sonu "içerik haritası" verisi + breadcrumb'ı olmayan sayfalar için BreadcrumbList.
// Yalnızca gerçekten var olan sayfalara link verir. Puan/yorum verisi içermez.
// ============================================================
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';
import { DISTRICTS, SERVICES, DISTRICT_BASE, SERVICE_BASE, districtUrl, serviceUrl, isIndexable } from '@/lib/seo-data';
import { PROMO_PATH, PROMO_NAME } from '@/lib/promosyon-paths';
import { PRODUCT_IDS, LINK_NAMES, productUrl, expressUrl, hubUrl, type TLang } from '@/lib/turist-links';

export type Lang = 'tr' | 'en' | 'de' | 'ru';
export type MapLink = { href: string; label: string };
export type MapSection = { title: string; links: MapLink[] };
export type SiteMap = { lang: string; heading: string; sections: MapSection[] };
export type Crumb = { name: string; href: string };

const BASE_URL = 'https://terzihizmeti.com.tr';
const BRAND = 'Terzi Can';

const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

// ── Sayfa listeleri (sadece var olan rotalar) ────────────────────────────────
const TR_SERVICES: MapLink[] = [
  { href: '/antalya-terzi', label: 'Antalya terzi' },
  { href: '/otele-gelen-terzi-antalya', label: 'Otele gelen terzi' },
  { href: '/konyaalti-paca-kisaltma', label: 'Konyaaltı paça kısaltma' },
  { href: '/konyaalti-fermuar-tamiri', label: 'Konyaaltı fermuar tamiri' },
  { href: '/mont-tamiri-tadilati-antalya', label: 'Mont tamiri ve tadilatı' },
  { href: '/kaban-palto-tadilati-antalya', label: 'Kaban ve palto tadilatı' },
  { href: '/yelek-tamiri-tadilati-antalya', label: 'Yelek tamiri ve tadilatı' },
  { href: '/mont-fermuar-degisimi-antalya', label: 'Mont fermuarı değişimi' },
  { href: '/canta-fermuar-tamiri-antalya', label: 'Çanta fermuar tamiri' },
  { href: '/deri-ceket-tadilati-antalya', label: 'Deri ceket tadilatı' },
  { href: '/kot-pantolon-paca-kisaltma-antalya', label: 'Kot pantolon paça kısaltma' },
  { href: '/kot-pantolon-daraltma-antalya', label: 'Kot pantolon daraltma' },
  { href: '/orijinal-kot-paca-yapimi-antalya', label: 'Orijinal kot paça yapımı' },
  { href: '/kot-ceket-mont-tadilati-antalya', label: 'Kot ceket ve mont tadilatı' },
  { href: '/kot-etek-kisaltma-daraltma-antalya', label: 'Kot etek kısaltma ve daraltma' },
  { href: '/antalya-gelinlik-tadilati', label: 'Gelinlik tadilatı' },
  { href: '/antalya-terzi-fiyatlari', label: 'Terzi fiyatları 2026' },
  { href: '/sik-sorulan-sorular-terzi-antalya', label: 'Sık sorulan sorular' },
  { href: '/online-terzi-servisi', label: 'Online terzi servisi' },
  { href: '/evde-olcu-nasil-alinir', label: 'Evde ölçü nasıl alınır?' },
  { href: '/ozel-dikim-siparis-kargo', label: 'Siparişe özel dikim' },
  { href: '/antalya-uniforma-imalati', label: 'Üniforma imalatı' },
  { href: '/keten-pamuk-ozel-dikim', label: 'Keten ve pamuk özel dikim' },
  { href: '/blog', label: 'Blog' },
];

// Toptan/fason (B2B) sayfaları ve genel sayfalar: haritaya dahil (iç bağlantı için)
const TR_B2B: MapLink[] = [
  { href: '/giyim-uretici-antalya', label: 'Giyim üretici Antalya' },
  { href: '/numune-uretimi-antalya', label: 'Numune üretimi' },
  { href: '/seri-imalat-antalya', label: 'Seri imalat' },
  { href: '/markaniza-ozel-uretim-antalya', label: 'Markanıza özel üretim' },
  { href: '/yurt-disi-gonderim-uretim', label: 'Yurt dışı gönderim ve üretim' },
];
const TR_GENEL: MapLink[] = [
  { href: '/terzi-hizmetleri', label: 'Terzi hizmetleri' },
  { href: '/iletisim', label: 'İletişim' },
];
const TR_EXTRA = new Set<string>(['/', ...TR_B2B.map((l) => l.href), ...TR_GENEL.map((l) => l.href)]);

// es/fr/pl/uk/nl/ar: slug'lar lib/intl-fiyat.ts ve lib/intl-iletisim.ts ile aynı olmalı (istemci paketini şişirmemek için burada kopya).
const INTL_MAP: Record<string, { heading: string; fiyat: [string, string]; iletisim: [string, string]; promo: string }> = {
  es: { heading: 'Más páginas', fiyat: ['precios-sastre-antalya', 'Precios'], iletisim: ['contacto-sastre-antalya', 'Contacto'], promo: 'Textil promocional' },
  fr: { heading: 'Autres pages', fiyat: ['tarifs-couturier-antalya', 'Tarifs'], iletisim: ['contact-couturier-antalya', 'Contact'], promo: 'Textile promotionnel' },
  pl: { heading: 'Więcej stron', fiyat: ['ceny-krawiec-antalya', 'Cennik'], iletisim: ['kontakt-krawiec-antalya', 'Kontakt'], promo: 'Tekstylia reklamowe' },
  uk: { heading: 'Інші сторінки', fiyat: ['tsiny-kravets-antaliya', 'Ціни'], iletisim: ['kontakty-kravets-antaliya', 'Контакти'], promo: 'Рекламний текстиль' },
  nl: { heading: 'Meer pagina’s', fiyat: ['prijzen-kleermaker-antalya', 'Prijzen'], iletisim: ['contact-kleermaker-antalya', 'Contact'], promo: 'Promotietextiel' },
  ar: { heading: 'صفحات أخرى', fiyat: ['asaar-khayyat-antalya', 'الأسعار'], iletisim: ['ittisal-khayyat-antalya', 'اتصل بنا'], promo: 'منسوجات دعائية' },
};
const INTL_CODES = Object.keys(INTL_MAP);

const TR_MAHALLELER: MapLink[] = [
  { href: '/hurma-terzi', label: 'Hurma terzi' },
  { href: '/liman-terzi', label: 'Liman terzi' },
  { href: '/sarisu-terzi', label: 'Sarısu terzi' },
  { href: '/uncali-terzi', label: 'Uncalı terzi' },
  { href: '/gursu-terzi', label: 'Gürsu terzi' },
];

const OTHER_LANG_HUBS: MapLink[] = [
  { href: '/en/tailor-service-antalya', label: 'English — Tailor Service Antalya' },
  { href: '/de/schneiderservice-antalya', label: 'Deutsch — Schneiderservice Antalya' },
  { href: '/ru/uslugi-portnogo-antalya', label: 'Русский — Услуги портного' },
];

// Turist keten & pamuk özel dikim kümesi (EN/DE/RU): ürün sayfaları + ekspres tadilat
const turistLinks = (lang: TLang): MapLink[] => [
  { href: hubUrl(lang), label: LINK_NAMES.hub[lang] },
  ...PRODUCT_IDS.map((p) => ({ href: productUrl(lang, p), label: LINK_NAMES.product[p][lang] })),
  { href: expressUrl(lang), label: LINK_NAMES.express[lang] },
];
const TURIST_TITLES: Record<TLang, string> = {
  en: 'Custom linen & cotton clothing and tourist alterations',
  de: 'Leinen- & Baumwollkleidung nach Maß und Änderungen im Urlaub',
  ru: 'Одежда из льна и хлопка на заказ и подгонка туристам',
};

const EN_BASE = '/en/hotel-tailor-antalya';
const DE_BASE = '/de/schneider-service-hotel-antalya';
const RU_BASE = '/ru/vyezdnoy-portnoy-antalya';
const TR_BASE = '/otele-gelen-terzi-antalya';

const RU_NAMES: Record<string, string> = {
  belek: 'Белек', lara: 'Лара', guzeloba: 'Гюзельоба', side: 'Сиде', kemer: 'Кемер', kundu: 'Кунду',
};
const regionName = (slug: string, name: string, lang: Lang) => (lang === 'ru' ? RU_NAMES[slug] || name : name);

function regionLinks(base: string, lang: Lang, label: (n: string) => string): MapLink[] {
  return OTEL_BOLGELERI.map((r) => ({ href: `${base}/${r.slug}`, label: label(regionName(r.slug, r.name, lang)) }));
}

const seoServiceLinks = (lang: Lang): MapLink[] => SERVICES.map((s) => ({ href: serviceUrl(lang, s), label: s.name[lang] }));
const seoDistrictLinks = (lang: Lang): MapLink[] => DISTRICTS.filter((d) => isIndexable(lang, d.slug)).map((d) => ({
  href: districtUrl(lang, d),
  label: { tr: `${d.name.tr} terzi`, en: `Tailor ${d.name.en}`, ru: `Портной ${d.name.ru}`, de: `Schneider ${d.name.de}` }[lang],
}));
const SEO_TITLES: Record<Lang, { svc: string; dist: string }> = {
  tr: { svc: 'Terzi hizmetleri (paça, fermuar, tadilat, dikim)', dist: 'Antalya bölgelerine göre terzi' },
  en: { svc: 'Tailor services (hemming, zippers, alterations, dress making)', dist: 'Tailor by area in Antalya' },
  ru: { svc: 'Услуги портного (подшив, молнии, переделка, пошив)', dist: 'Портной по районам Антальи' },
  de: { svc: 'Schneider-Leistungen (Kürzen, Reißverschluss, Änderungen, Maßanfertigung)', dist: 'Schneider nach Gebiet in Antalya' },
};

export function getLang(pathname: string): Lang | null {
  const p = norm(pathname);
  if (p === '/anavera-tekstil' || p === PROMO_PATH.tr || TR_EXTRA.has(p)) return 'tr';
  if (p.startsWith('/en/')) return 'en';
  if (p.startsWith('/de/')) return 'de';
  if (p.startsWith('/ru/')) return 'ru';
  if (TR_SERVICES.some((l) => l.href === p) || TR_MAHALLELER.some((l) => l.href === p)) return 'tr';
  if (p.startsWith(`${TR_BASE}/`) || p.startsWith('/blog/')) return 'tr';
  if (p.startsWith(`${DISTRICT_BASE.tr}/`) || p === SERVICE_BASE.tr || p.startsWith(`${SERVICE_BASE.tr}/`)) return 'tr';
  return null;
}

// ── Sayfa sonu içerik haritası ───────────────────────────────────────────────
function getIntlMap(pathname: string): SiteMap | null {
  const p = norm(pathname);
  const code = INTL_CODES.find((c) => p === `/${c}` || p.startsWith(`/${c}/`));
  if (!code) return null;
  const m = INTL_MAP[code];
  const links: MapLink[] = [
    { href: `/${code}`, label: code.toUpperCase() },
    { href: `/${code}/${m.fiyat[0]}`, label: m.fiyat[1] },
    { href: `/${code}/${m.iletisim[0]}`, label: m.iletisim[1] },
    { href: PROMO_PATH[code as keyof typeof PROMO_PATH], label: m.promo },
  ].filter((l) => l.href !== p);
  return { lang: code, heading: m.heading, sections: [{ title: 'Antalya', links }] };
}

export function getSiteMap(pathname: string): SiteMap | null {
  const intl = getIntlMap(pathname);
  if (intl) return intl;
  const base = getBaseSiteMap(pathname);
  if (!base) return null;
  const p = norm(pathname);
  const not = (l: MapLink) => l.href !== p;
  return {
    ...base,
    sections: [
      ...base.sections,
      { title: SEO_TITLES[base.lang].svc, links: seoServiceLinks(base.lang).filter(not) },
      { title: SEO_TITLES[base.lang].dist, links: seoDistrictLinks(base.lang).filter(not) },
    ],
  };
}

function getBaseSiteMap(pathname: string): (Omit<SiteMap, 'lang'> & { lang: Lang }) | null {
  const p = norm(pathname);
  const lang = getLang(p);
  if (!lang) return null;
  const not = (l: MapLink) => l.href !== p;

  if (lang === 'tr') {
    return {
      lang,
      heading: 'İlgili sayfalar',
      sections: [
        { title: 'Toptan ve fason tekstil üretimi (B2B)', links: [{ href: '/anavera-tekstil', label: 'Anavera Tekstil — hazır giyim üretimi ve ihracat' }, { href: PROMO_PATH.tr, label: PROMO_NAME.tr }, ...TR_B2B].filter(not) },
        { title: 'Terzi hizmetleri', links: [...TR_SERVICES, ...TR_GENEL].filter(not) },
        { title: 'Konyaaltı mahalleleri', links: TR_MAHALLELER.filter(not) },
        { title: 'Otele gelen terzi — bölgeler', links: regionLinks(TR_BASE, 'tr', (n) => `${n} otele gelen terzi`).filter(not) },
        { title: 'Diğer diller', links: OTHER_LANG_HUBS },
      ],
    };
  }

  if (lang === 'en') {
    return {
      lang,
      heading: 'More tailor services in Antalya',
      sections: [
        { title: 'Clothing manufacturing in Turkey (B2B)', links: [{ href: '/en/anavera-tekstil', label: 'Anavera Tekstil — clothing manufacturer & exporter' }, { href: PROMO_PATH.en, label: PROMO_NAME.en }].filter(not) },
        {
          title: 'Services',
          links: [
            { href: '/en/tailor-service-antalya', label: 'Tailor Service Antalya' },
            { href: EN_BASE, label: 'Hotel Tailor Antalya' },
            { href: '/en/tailor-prices-antalya', label: 'Tailor Prices Antalya' },
            { href: '/en/tailor-faq-antalya', label: 'Tailor FAQ Antalya' },
            { href: '/en/online-tailor-antalya', label: 'Online Tailor Service' },
            { href: '/en/how-to-take-body-measurements-at-home', label: 'How to Take Measurements at Home' },
            { href: '/en/custom-clothing-order-online-antalya', label: 'Made-to-Order Clothing' },
            { href: '/en/linen-cotton-tailoring', label: 'Linen & Cotton Tailoring' },
            { href: '/antalya-terzi', label: 'Antalya Terzi (Türkçe)' },
          ].filter(not),
        },
        { title: TURIST_TITLES.en, links: turistLinks('en').filter(not) },
        { title: 'Hotel tailor by area', links: regionLinks(EN_BASE, 'en', (n) => `Hotel tailor ${n}`).filter(not) },
      ],
    };
  }

  if (lang === 'de') {
    return {
      lang,
      heading: 'Weitere Schneider-Services in Antalya',
      sections: [
        { title: 'Bekleidungsherstellung in der Türkei (B2B)', links: [{ href: '/de/anavera-tekstil', label: 'Anavera Tekstil — Bekleidungshersteller & Exporteur' }, { href: PROMO_PATH.de, label: PROMO_NAME.de }].filter(not) },
        {
          title: 'Services',
          links: [
            { href: '/de/schneiderservice-antalya', label: 'Schneiderservice Antalya' },
            { href: DE_BASE, label: 'Schneider Service Hotel Antalya' },
            { href: '/de/schneider-preise-antalya', label: 'Schneider Preise Antalya' },
            { href: '/de/schneider-faq-antalya', label: 'Schneider FAQ Antalya' },
            { href: '/de/online-schneider-antalya', label: 'Online-Schneiderservice' },
            { href: '/de/koerpermasse-selbst-nehmen-anleitung', label: 'Körpermaße selbst nehmen' },
            { href: '/de/massanfertigung-bestellen-antalya', label: 'Maßanfertigung bestellen' },
            { href: '/de/leinen-baumwolle-schneiderei', label: 'Leinen & Baumwolle Schneiderei' },
            { href: '/antalya-terzi', label: 'Antalya Terzi (Türkçe)' },
          ].filter(not),
        },
        { title: TURIST_TITLES.de, links: turistLinks('de').filter(not) },
        { title: 'Hotel-Schneider nach Region', links: regionLinks(DE_BASE, 'de', (n) => `Schneider ${n}`).filter(not) },
      ],
    };
  }

  return {
    lang,
    heading: 'Другие услуги в Анталье',
    sections: [
      { title: 'Производство одежды в Турции (B2B)', links: [{ href: '/ru/anavera-tekstil', label: 'Anavera Tekstil — производитель одежды и экспорт' }, { href: PROMO_PATH.ru, label: PROMO_NAME.ru }].filter(not) },
      {
        title: 'Услуги',
        links: [
          { href: '/ru/uslugi-portnogo-antalya', label: 'Услуги портного Анталья' },
          { href: RU_BASE, label: 'Выездной портной Анталья' },
          { href: '/ru/ceny-portnoy-antalya', label: 'Цены портного Анталья' },
          { href: '/ru/voprosy-portnoy-antalya', label: 'Вопросы портному Анталья' },
          { href: '/ru/onlayn-portnoy-antalya', label: 'Онлайн-портной Анталья' },
          { href: '/ru/kak-snyat-merki-doma', label: 'Как снять мерки дома' },
          { href: '/ru/poshiv-na-zakaz-onlayn-antalya', label: 'Пошив на заказ' },
          { href: '/ru/poshiv-lyon-hlopok', label: 'Пошив из льна и хлопка' },
          { href: '/antalya-terzi', label: 'Antalya Terzi (Türkçe)' },
        ].filter(not),
      },
      { title: TURIST_TITLES.ru, links: turistLinks('ru').filter(not) },
      { title: 'Выездной портной по районам', links: regionLinks(RU_BASE, 'ru', (n) => `Портной ${n}`).filter(not) },
    ],
  };
}

// ── Yalnızca kendi BreadcrumbList'i OLMAYAN sayfalar için ────────────────────
// (Diğer sayfaların şemasında zaten var; çift üretmemek için burada yok.)
const BREADCRUMB_PAGES: Record<string, Crumb[]> = {
  '/blog': [{ name: 'Blog', href: '/blog' }],
  '/keten-pamuk-ozel-dikim': [{ name: 'Keten ve pamuk özel dikim', href: '/keten-pamuk-ozel-dikim' }],
  '/otele-gelen-terzi-antalya': [{ name: 'Otele gelen terzi', href: '/otele-gelen-terzi-antalya' }],
  '/en/hotel-tailor-antalya': [{ name: 'Hotel Tailor Antalya', href: '/en/hotel-tailor-antalya' }],
  // '/en/linen-cotton-tailoring': sayfa kendi BreadcrumbList şemasını basar (çift şema olmasın)
  // '/de/schneiderservice-antalya': sayfa kendi BreadcrumbList şemasını basar (çift şema olmasın)
  '/de/schneider-service-hotel-antalya': [{ name: 'Schneider Service Hotel Antalya', href: '/de/schneider-service-hotel-antalya' }],
  // '/de/leinen-baumwolle-schneiderei': sayfa kendi BreadcrumbList şemasını basar (çift şema olmasın)
  '/ru/vyezdnoy-portnoy-antalya': [{ name: 'Выездной портной Анталья', href: '/ru/vyezdnoy-portnoy-antalya' }],
  // '/ru/poshiv-lyon-hlopok': sayfa kendi BreadcrumbList şemasını basar (çift şema olmasın)
};

export function getBreadcrumb(pathname: string): Crumb[] | null {
  const p = norm(pathname);
  const home: Crumb = { name: BRAND, href: '/' };

  const fixed = BREADCRUMB_PAGES[p];
  if (fixed) return [home, ...fixed];

  const regionPages: [string, string, string, Lang][] = [
    [TR_BASE, 'Otele gelen terzi', TR_BASE, 'tr'],
    [EN_BASE, 'Hotel Tailor Antalya', EN_BASE, 'en'],
    [DE_BASE, 'Schneider Service Hotel Antalya', DE_BASE, 'de'],
    [RU_BASE, 'Выездной портной Анталья', RU_BASE, 'ru'],
  ];
  for (const [base, hubName, hubHref, lang] of regionPages) {
    if (p.startsWith(`${base}/`)) {
      const slug = p.slice(base.length + 1);
      const r = OTEL_BOLGELERI.find((x) => x.slug === slug);
      if (r) return [home, { name: hubName, href: hubHref }, { name: regionName(r.slug, r.name, lang), href: p }];
    }
  }
  return null;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.href === '/' ? BASE_URL : `${BASE_URL}${c.href}`,
    })),
  };
}
