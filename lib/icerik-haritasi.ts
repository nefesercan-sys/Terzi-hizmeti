// ============================================================
// terzihizmeti.com.tr — lib/icerik-haritasi.ts
// Sayfa sonu "içerik haritası" verisi + breadcrumb'ı olmayan sayfalar için BreadcrumbList.
// Yalnızca gerçekten var olan sayfalara link verir. Puan/yorum verisi içermez.
// ============================================================
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';
import { DISTRICTS, SERVICES, DISTRICT_BASE, SERVICE_BASE, districtUrl, serviceUrl } from '@/lib/seo-data';

export type Lang = 'tr' | 'en' | 'de' | 'ru';
export type MapLink = { href: string; label: string };
export type MapSection = { title: string; links: MapLink[] };
export type SiteMap = { lang: Lang; heading: string; sections: MapSection[] };
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
  { href: '/antalya-gelinlik-tadilati', label: 'Gelinlik tadilatı' },
  { href: '/antalya-terzi-fiyatlari', label: 'Terzi fiyatları 2026' },
  { href: '/antalya-uniforma-imalati', label: 'Üniforma imalatı' },
  { href: '/keten-pamuk-ozel-dikim', label: 'Keten ve pamuk özel dikim' },
  { href: '/blog', label: 'Blog' },
];

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
const seoDistrictLinks = (lang: Lang): MapLink[] => DISTRICTS.map((d) => ({
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
  if (p === '/anavera-tekstil') return 'tr';
  if (p.startsWith('/en/')) return 'en';
  if (p.startsWith('/de/')) return 'de';
  if (p.startsWith('/ru/')) return 'ru';
  if (TR_SERVICES.some((l) => l.href === p) || TR_MAHALLELER.some((l) => l.href === p)) return 'tr';
  if (p.startsWith(`${TR_BASE}/`) || p.startsWith('/blog/')) return 'tr';
  if (p.startsWith(`${DISTRICT_BASE.tr}/`) || p === SERVICE_BASE.tr || p.startsWith(`${SERVICE_BASE.tr}/`)) return 'tr';
  return null;
}

// ── Sayfa sonu içerik haritası ───────────────────────────────────────────────
export function getSiteMap(pathname: string): SiteMap | null {
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

function getBaseSiteMap(pathname: string): SiteMap | null {
  const p = norm(pathname);
  const lang = getLang(p);
  if (!lang) return null;
  const not = (l: MapLink) => l.href !== p;

  if (lang === 'tr') {
    return {
      lang,
      heading: 'İlgili sayfalar',
      sections: [
        { title: 'Toptan ve fason tekstil üretimi (B2B)', links: [{ href: '/anavera-tekstil', label: 'Anavera Tekstil — hazır giyim üretimi ve ihracat' }].filter(not) },
        { title: 'Terzi hizmetleri', links: TR_SERVICES.filter(not) },
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
        { title: 'Clothing manufacturing in Turkey (B2B)', links: [{ href: '/en/anavera-tekstil', label: 'Anavera Tekstil — clothing manufacturer & exporter' }].filter(not) },
        {
          title: 'Services',
          links: [
            { href: '/en/tailor-service-antalya', label: 'Tailor Service Antalya' },
            { href: EN_BASE, label: 'Hotel Tailor Antalya' },
            { href: '/en/tailor-prices-antalya', label: 'Tailor Prices Antalya' },
            { href: '/en/linen-cotton-tailoring', label: 'Linen & Cotton Tailoring' },
            { href: '/antalya-terzi', label: 'Antalya Terzi (Türkçe)' },
          ].filter(not),
        },
        { title: 'Hotel tailor by area', links: regionLinks(EN_BASE, 'en', (n) => `Hotel tailor ${n}`).filter(not) },
      ],
    };
  }

  if (lang === 'de') {
    return {
      lang,
      heading: 'Weitere Schneider-Services in Antalya',
      sections: [
        { title: 'Bekleidungsherstellung in der Türkei (B2B)', links: [{ href: '/de/anavera-tekstil', label: 'Anavera Tekstil — Bekleidungshersteller & Exporteur' }].filter(not) },
        {
          title: 'Services',
          links: [
            { href: '/de/schneiderservice-antalya', label: 'Schneiderservice Antalya' },
            { href: DE_BASE, label: 'Schneider Service Hotel Antalya' },
            { href: '/de/schneider-preise-antalya', label: 'Schneider Preise Antalya' },
            { href: '/de/leinen-baumwolle-schneiderei', label: 'Leinen & Baumwolle Schneiderei' },
            { href: '/antalya-terzi', label: 'Antalya Terzi (Türkçe)' },
          ].filter(not),
        },
        { title: 'Hotel-Schneider nach Region', links: regionLinks(DE_BASE, 'de', (n) => `Schneider ${n}`).filter(not) },
      ],
    };
  }

  return {
    lang,
    heading: 'Другие услуги в Анталье',
    sections: [
      { title: 'Производство одежды в Турции (B2B)', links: [{ href: '/ru/anavera-tekstil', label: 'Anavera Tekstil — производитель одежды и экспорт' }].filter(not) },
      {
        title: 'Услуги',
        links: [
          { href: '/ru/uslugi-portnogo-antalya', label: 'Услуги портного Анталья' },
          { href: RU_BASE, label: 'Выездной портной Анталья' },
          { href: '/ru/ceny-portnoy-antalya', label: 'Цены портного Анталья' },
          { href: '/ru/poshiv-lyon-hlopok', label: 'Пошив из льна и хлопка' },
          { href: '/antalya-terzi', label: 'Antalya Terzi (Türkçe)' },
        ].filter(not),
      },
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
  '/en/linen-cotton-tailoring': [{ name: 'Linen & Cotton Tailoring', href: '/en/linen-cotton-tailoring' }],
  '/de/schneiderservice-antalya': [{ name: 'Schneiderservice Antalya', href: '/de/schneiderservice-antalya' }],
  '/de/schneider-service-hotel-antalya': [{ name: 'Schneider Service Hotel Antalya', href: '/de/schneider-service-hotel-antalya' }],
  '/de/leinen-baumwolle-schneiderei': [{ name: 'Leinen & Baumwolle Schneiderei', href: '/de/leinen-baumwolle-schneiderei' }],
  '/ru/vyezdnoy-portnoy-antalya': [{ name: 'Выездной портной Анталья', href: '/ru/vyezdnoy-portnoy-antalya' }],
  '/ru/poshiv-lyon-hlopok': [{ name: 'Пошив из льна и хлопка', href: '/ru/poshiv-lyon-hlopok' }],
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
