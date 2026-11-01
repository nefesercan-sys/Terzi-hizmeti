// terzihizmeti.com.tr — Anavera Tekstil (B2B) sayfaları için ortak tipler. Metinler lib/uretim-1/2/3.ts içinde.
export type UL = 'tr' | 'en' | 'de' | 'ru' | 'es' | 'fr' | 'pl' | 'uk' | 'nl' | 'ar';
export const UL_LIST: UL[] = ['tr', 'en', 'de', 'ru', 'es', 'fr', 'pl', 'uk', 'nl', 'ar'];
export type UId = 'numune' | 'seri' | 'marka' | 'gonderim' | 'uretici';
export const U_IDS: UId[] = ['numune', 'seri', 'marka', 'gonderim', 'uretici'];
export type UCopy = {
  slug: string; title: string; desc: string; h1: string; lead: string;
  pointsTitle: string; points: string[]; faq: [string, string][]; wa: string;
};
export type UPack = Record<UId, UCopy>;
