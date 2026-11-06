// ============================================================
// lib/business.ts — TEK işletme düğümü (JSON-LD). Tüm sayfalar bunu kullanır; @id sabit: BUSINESS_ID.
// Marka adı: "Terzi Can". NAP: Hurma Mahallesi, Konyaaltı, Antalya 07130 · +90 531 898 64 18 · her gün 08:00–23:00.
// Yorum şeması (aggregateRating/review) yalnızca yorumların görünür olduğu sayfalarda: businessNode({ reviews: true }).
// ============================================================
import { SITE, MAPS, PHONE_TEL, BUSINESS_ID } from '@/lib/seo-data';
import { reviewSchema } from '@/lib/reviews';

/** Hizmet verilen gerçek alanlar */
export const AREA_SERVED = [
  'Konyaaltı, Antalya', 'Hurma, Konyaaltı', 'Liman, Konyaaltı', 'Sarısu, Konyaaltı', 'Gürsu, Konyaaltı', 'Uncalı, Konyaaltı', 'Çakırlar, Konyaaltı',
  'Muratpaşa, Antalya', 'Lara, Antalya', 'Kundu, Antalya', 'Güzeloba, Antalya', 'Meltem, Muratpaşa', 'Şirinyalı, Muratpaşa', 'Fener, Muratpaşa',
  'Kepez, Antalya', 'Aksu, Antalya', 'Döşemealtı, Antalya', 'Belek, Antalya', 'Side, Manavgat, Antalya', 'Kemer, Antalya', 'Beldibi, Kemer, Antalya', 'Göynük, Kemer, Antalya', 'Antalya',
];

/** Her iki resmî site de aynı işletmenindir; diğer sitenin işletme sayfası sameAs ile bağlanır. */
export const OFFICIAL_SITES = ['https://terzihizmeti.com.tr/', 'https://swaphubs.com/terzi'];
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CYUmDLIgrCRREAE/review';

export function businessNode(opts: { reviews?: boolean } = {}) {
  return {
  '@type': ['LocalBusiness', 'ClothingStore'],
  ...(opts.reviews === false ? {} : reviewSchema()),
  additionalType: ['https://schema.org/SewingService'],
  '@id': BUSINESS_ID,
  name: 'Terzi Can',
  alternateName: [
    'Terzi Can Antalya', 'Konyaaltı Terzi', 'Tailor Can Antalya',
    'Портной Кан Анталья', 'Schneider Can Antalya', 'Terzi Hizmeti Antalya', 'Dikiş Atölyesi Antalya',
  ],
  description: "Antalya Konyaaltı'nda 2006'dan bu yana hizmet veren profesyonel terzi atölyesi. Paça kısaltma, fermuar değişimi, bel daraltma, özel dikim, gelinlik tadilatı, tekstil imalatı. Hurma, Liman, Sarısu, Gürsu, Uncalı bölgelerine hizmet.",
  url: SITE,
  telephone: PHONE_TEL,
  priceRange: '₺₺',
  foundingDate: '2006',
  paymentAccepted: 'Cash, Credit Card',
  currenciesAccepted: 'TRY, EUR, USD, GBP, RUB, PLN, UAH, CHF, SEK, NOK, DKK, CZK, AED, SAR',
  slogan: 'Fotoğraf at, fiyat al',
  image: `${SITE}/terzi-can-hero.jpg`,
  logo: `${SITE}/terzi-can-hero.jpg`,
  hasMap: MAPS,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hurma Mahallesi',
    addressLocality: 'Konyaaltı',
    addressRegion: 'Antalya',
    postalCode: '07130',
    addressCountry: 'TR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 36.857466, longitude: 30.596987 },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00', closes: '23:00',
  }],
  areaServed: AREA_SERVED.map((n) => ({ '@type': 'Place', name: n })),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: PHONE_TEL,
      contactType: 'customer service',
      areaServed: ['TR', 'DE', 'RU', 'GB', 'PL', 'UA', 'NL', 'FR', 'ES', 'SA'],
      availableLanguage: ['Turkish', 'English', 'Russian', 'German', 'Polish', 'Ukrainian', 'Dutch', 'French', 'Spanish', 'Arabic'],
      hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '23:00' },
    },
    {
      '@type': 'ContactPoint',
      contactType: 'WhatsApp',
      url: `https://wa.me/${PHONE_TEL.replace('+', '')}`,
      availableLanguage: ['Turkish', 'English', 'Russian', 'German', 'Polish', 'Ukrainian', 'Dutch', 'French', 'Spanish', 'Arabic'],
      hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '23:00' },
    },
  ],
  sameAs: [MAPS, GOOGLE_REVIEW_URL, `https://wa.me/${PHONE_TEL.replace('+', '')}`, ...OFFICIAL_SITES.filter((u) => !u.startsWith(SITE))],
  knowsLanguage: ['tr', 'en', 'ru', 'de', 'pl', 'uk', 'nl', 'fr', 'es', 'ar'],
}
}
