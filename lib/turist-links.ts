// ============================================================
// terzihizmeti.com.tr — lib/turist-links.ts
// Turist keten & pamuk kümesinin HAFİF (metinsiz) bölümü: URL şeması, slug'lar, kısa adlar.
// Neden ayrı dosya: lib/icerik-haritasi.ts bir İSTEMCİ bileşeninden (IcerikHaritasi) içe aktarılıyor;
// büyük metin verisi (lib/turist-keten.ts) her sayfanın JS paketine girmesin diye link verisi burada.
// ============================================================

export type TLang = 'en' | 'de' | 'ru';
export const TLANGS: TLang[] = ['en', 'de', 'ru'];
type L3<T = string> = Record<TLang, T>;

// ── URL şeması ──────────────────────────────────────────────
export const TR_HUB = '/keten-pamuk-ozel-dikim';
export const HUB: L3 = {
  en: '/en/linen-cotton-tailoring',
  de: '/de/leinen-baumwolle-schneiderei',
  ru: '/ru/poshiv-lyon-hlopok',
};
export const EXPRESS: L3 = {
  en: '/en/tourist-clothing-alterations-antalya',
  de: '/de/kleidung-aendern-urlaub-antalya',
  ru: '/ru/podgonka-odezhdy-turistam-antalya',
};
export const PRICES_PAGE: L3 = {
  en: '/en/tailor-prices-antalya', de: '/de/schneider-preise-antalya', ru: '/ru/ceny-portnoy-antalya',
};
export const ANAVERA: L3 = {
  en: '/en/anavera-tekstil', de: '/de/anavera-tekstil', ru: '/ru/anavera-tekstil',
};

export type ProductId = 'shirt' | 'dress' | 'trousers' | 'jacket' | 'kids';
export const PRODUCT_IDS: ProductId[] = ['shirt', 'dress', 'trousers', 'jacket', 'kids'];

const SLUG: Record<ProductId, L3> = {
  shirt:    { en: 'linen-shirt-antalya',          de: 'leinenhemd-nach-mass-antalya',          ru: 'lnyanaya-rubashka-na-zakaz-antalya' },
  dress:    { en: 'linen-dress-antalya',          de: 'leinenkleid-nach-mass-antalya',         ru: 'lnyanoe-plate-na-zakaz-antalya' },
  trousers: { en: 'linen-trousers-antalya',       de: 'leinenhose-nach-mass-antalya',          ru: 'lnyanye-bryuki-na-zakaz-antalya' },
  jacket:   { en: 'linen-jacket-suit-antalya',    de: 'leinensakko-anzug-nach-mass-antalya',   ru: 'lnyanoy-pidzhak-kostyum-antalya' },
  kids:     { en: 'kids-linen-clothing-antalya',  de: 'kinder-leinenkleidung-antalya',         ru: 'detskaya-lnyanaya-odezhda-antalya' },
};

export const hubUrl = (l: TLang) => HUB[l];
export const productUrl = (l: TLang, p: ProductId) => `${HUB[l]}/${SLUG[p][l]}`;
export const expressUrl = (l: TLang) => EXPRESS[l];
export const productSlugs = (l: TLang) => PRODUCT_IDS.map((p) => SLUG[p][l]);
export const findProduct = (l: TLang, slug: string): ProductId | undefined => PRODUCT_IDS.find((p) => SLUG[p][l] === slug);

/** Sitemap için: tüm yeni sayfalar ve dil karşılıkları */
export function allNewPages(): { id: string; urlFor: (l: TLang) => string }[] {
  return [
    ...PRODUCT_IDS.map((p) => ({ id: p, urlFor: (l: TLang) => productUrl(l, p) })),
    { id: 'express', urlFor: (l: TLang) => expressUrl(l) },
  ];
}

// Footer/iç link haritasında görünen kısa adlar
export const LINK_NAMES: { hub: L3; express: L3; product: Record<ProductId, L3> } = {
  hub: { en: 'Linen & Cotton Tailoring', de: 'Leinen & Baumwolle Schneiderei', ru: 'Пошив из льна и хлопка' },
  express: { en: 'Tourist Clothing Alterations', de: 'Kleidung ändern im Urlaub', ru: 'Подгонка одежды туристам' },
  product: {
    shirt:    { en: 'Linen shirt', de: 'Leinenhemd', ru: 'Льняная рубашка' },
    dress:    { en: 'Linen dress', de: 'Leinenkleid', ru: 'Льняное платье' },
    trousers: { en: 'Linen trousers', de: 'Leinenhose', ru: 'Льняные брюки' },
    jacket:   { en: 'Linen jacket & suit', de: 'Leinensakko & Sommeranzug', ru: 'Льняной пиджак и костюм' },
    kids:     { en: "Kids' linen clothing", de: 'Kinder-Leinenkleidung', ru: 'Детская льняная одежда' },
  },
};

