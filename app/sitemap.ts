import type { MetadataRoute } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';
import { DISTRICTS, SERVICES, LANGS, SERVICE_BASE, districtUrl, serviceUrl, LAST_UPDATE, isIndexable, type Lang } from '@/lib/seo-data';
import { TLANGS, allNewPages, hubUrl, TR_HUB, TURIST_UPDATE } from '@/lib/turist-keten';
import { ILANGS, INTL, iUrl } from '@/lib/intl';

const SITE = "https://terzihizmeti.com.tr";
const NOW = new Date('2026-10-27');   // v36'da değişen sayfalar
const OLD = new Date('2026-09-20');   // v36'da değişmeyen sayfalar (sahte güncelleme tarihi verme)
// İçeriği değişen sayfalar (yorum bölümü eklenenler dahil) — yeni içerik eklenince buraya ekle
const CHANGED = new Set(['', '/ru/uslugi-portnogo-antalya', '/antalya-terzi', '/antalya-terzi-fiyatlari', '/antalya-gelinlik-tadilati', '/antalya-uniforma-imalati', '/en/tailor-service-antalya', '/de/schneiderservice-antalya', '/gursu-terzi', '/hurma-terzi', '/liman-terzi', '/sarisu-terzi', '/uncali-terzi', '/keten-pamuk-ozel-dikim', '/en/linen-cotton-tailoring', '/de/leinen-baumwolle-schneiderei', '/ru/poshiv-lyon-hlopok', '/konyaalti-fermuar-tamiri', '/konyaalti-paca-kisaltma', '/otele-gelen-terzi-antalya', '/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi']);
const lm = (path: string) => (CHANGED.has(path) ? NOW : OLD);

export default function sitemap(): MetadataRoute.Sitemap {
  // OTEL_BOLGELERI verisini güvenli bir şekilde slug metin dizisine çeviriyoruz
  const bolgeListesi: string[] = Array.isArray(OTEL_BOLGELERI)
    ? OTEL_BOLGELERI.map((b) => (typeof b === 'string' ? b : b.slug || String(b)))
    : Object.keys(OTEL_BOLGELERI);

  // Otel bölgeleri için dinamik sayfalar (Niş Alt Sayfalar - Priority: 0.75)
  const otelSayfalari: MetadataRoute.Sitemap = bolgeListesi.flatMap((slug) => [
    { url: `${SITE}/otele-gelen-terzi-antalya/${slug}`, lastModified: OLD, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${SITE}/en/hotel-tailor-antalya/${slug}`, lastModified: OLD, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${SITE}/ru/vyezdnoy-portnoy-antalya/${slug}`, lastModified: OLD, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${SITE}/de/schneider-service-hotel-antalya/${slug}`, lastModified: OLD, changeFrequency: 'weekly', priority: 0.75 },
  ]);

  // Sabit Sayfalar Hiyerarşisi
  const sabitSayfalar: MetadataRoute.Sitemap = [
    // 🌟 1. BİRİNCİL ZİRVE: ANA SAYFA (Priority: 1.0)
    { url: SITE, lastModified: lm(''), changeFrequency: 'daily', priority: 1.0 },

    // 📍 2. ANA ŞEHİR SAYFASI & MERKEZ HİZMETLER (Priority: 0.90)
    { url: `${SITE}/antalya-terzi`, lastModified: lm('/antalya-terzi'), changeFrequency: 'weekly', priority: 0.90 },
    { url: `${SITE}/otele-gelen-terzi-antalya`, lastModified: lm('/otele-gelen-terzi-antalya'), changeFrequency: 'weekly', priority: 0.90 },

    // 🏠 3. KONYAALTI MAHALLE SAYFALARI (Sıcak Lokal Müşteri - Priority: 0.85)
    { url: `${SITE}/hurma-terzi`, lastModified: lm('/hurma-terzi'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/liman-terzi`, lastModified: lm('/liman-terzi'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/sarisu-terzi`, lastModified: lm('/sarisu-terzi'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/uncali-terzi`, lastModified: lm('/uncali-terzi'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/gursu-terzi`, lastModified: lm('/gursu-terzi'), changeFrequency: 'weekly', priority: 0.85 },

    // ✂️ 4. ÖZEL DİKİM & SPESİFİK TADİLATLAR (Priority: 0.82)
    { url: `${SITE}/keten-pamuk-ozel-dikim`, lastModified: lm('/keten-pamuk-ozel-dikim'), changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/anavera-tekstil`, lastModified: lm('/anavera-tekstil'), changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/en/anavera-tekstil`, lastModified: lm('/en/anavera-tekstil'), changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/de/anavera-tekstil`, lastModified: lm('/de/anavera-tekstil'), changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/ru/anavera-tekstil`, lastModified: lm('/ru/anavera-tekstil'), changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/konyaalti-fermuar-tamiri`, lastModified: lm('/konyaalti-fermuar-tamiri'), changeFrequency: 'monthly', priority: 0.82 },
    { url: `${SITE}/konyaalti-paca-kisaltma`, lastModified: lm('/konyaalti-paca-kisaltma'), changeFrequency: 'monthly', priority: 0.82 },
    { url: `${SITE}/antalya-gelinlik-tadilati`, lastModified: lm('/antalya-gelinlik-tadilati'), changeFrequency: 'monthly', priority: 0.82 },
    { url: `${SITE}/antalya-terzi-fiyatlari`, lastModified: lm('/antalya-terzi-fiyatlari'), changeFrequency: 'weekly', priority: 0.90 },
    { url: `${SITE}/en/tailor-prices-antalya`, lastModified: lm('/en/tailor-prices-antalya'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/de/schneider-preise-antalya`, lastModified: lm('/de/schneider-preise-antalya'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/ru/ceny-portnoy-antalya`, lastModified: lm('/ru/ceny-portnoy-antalya'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/antalya-uniforma-imalati`, lastModified: lm('/antalya-uniforma-imalati'), changeFrequency: 'monthly', priority: 0.82 },

    // 🌍 5. ÇOK DİLLİ LANDING SAYFALARI (Priority: 0.80 / 0.78)
    { url: `${SITE}/en/tailor-service-antalya`, lastModified: lm('/en/tailor-service-antalya'), changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/ru/uslugi-portnogo-antalya`, lastModified: lm('/ru/uslugi-portnogo-antalya'), changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/de/schneiderservice-antalya`, lastModified: lm('/de/schneiderservice-antalya'), changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/en/hotel-tailor-antalya`, lastModified: lm('/en/hotel-tailor-antalya'), changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/ru/vyezdnoy-portnoy-antalya`, lastModified: lm('/ru/vyezdnoy-portnoy-antalya'), changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/de/schneider-service-hotel-antalya`, lastModified: lm('/de/schneider-service-hotel-antalya'), changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/en/linen-cotton-tailoring`, lastModified: lm('/en/linen-cotton-tailoring'), changeFrequency: 'weekly', priority: 0.78 },
    { url: `${SITE}/ru/poshiv-lyon-hlopok`, lastModified: lm('/ru/poshiv-lyon-hlopok'), changeFrequency: 'weekly', priority: 0.78 },
    { url: `${SITE}/de/leinen-baumwolle-schneiderei`, lastModified: lm('/de/leinen-baumwolle-schneiderei'), changeFrequency: 'weekly', priority: 0.78 },

    // 📝 6. BLOG İÇERİKLERİ (Priority: 0.70 / 0.60)
    { url: `${SITE}/blog`, lastModified: lm('/blog'), changeFrequency: 'weekly', priority: 0.70 },
    { url: `${SITE}/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi`, lastModified: lm('/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi'), changeFrequency: 'monthly', priority: 0.60 },
  ];

  // 🔎 7. BÖLGE × HİZMET SEO SAYFALARI (4 dil, hreflang karşılıklı)
  const SEO_DATE = new Date(LAST_UPDATE);
  const alt = (urlFor: (l: Lang) => string, ok: (l: Lang) => boolean = () => true) => {
    const ls = LANGS.filter(ok);
    return { languages: Object.fromEntries([...ls.map((l) => [l, `${SITE}${urlFor(l)}`]), ['x-default', `${SITE}${urlFor(ls.includes('tr') ? 'tr' : 'en')}`]]) };
  };
  const seoSayfalari: MetadataRoute.Sitemap = [
    ...LANGS.map((l) => ({ url: `${SITE}${SERVICE_BASE[l]}`, lastModified: SEO_DATE, changeFrequency: 'weekly' as const, priority: 0.8, alternates: alt((x) => SERVICE_BASE[x]) })),
    ...SERVICES.flatMap((s) => LANGS.map((l) => ({ url: `${SITE}${serviceUrl(l, s)}`, lastModified: SEO_DATE, changeFrequency: 'monthly' as const, priority: 0.78, alternates: alt((x) => serviceUrl(x, s)) }))),
    ...DISTRICTS.flatMap((d) => LANGS.filter((l) => isIndexable(l, d.slug)).map((l) => ({ url: `${SITE}${districtUrl(l, d)}`, lastModified: SEO_DATE, changeFrequency: 'monthly' as const, priority: 0.76, alternates: alt((x) => districtUrl(x, d), (x) => isIndexable(x, d.slug)) }))),
  ];

  // 🧵 8. TURİST KETEN & PAMUK ÖZEL DİKİM + EKSPRES TADİLAT (EN/DE/RU; hub'ın TR karşılığı da hreflang'a dahil)
  const tAlt = (urlFor: (l: 'en' | 'de' | 'ru') => string) => ({
    languages: Object.fromEntries([...TLANGS.map((l) => [l, `${SITE}${urlFor(l)}`]), ['x-default', `${SITE}${urlFor('en')}`]]),
  });
  const turistSayfalari: MetadataRoute.Sitemap = allNewPages().flatMap((pg) =>
    TLANGS.map((l) => ({ url: `${SITE}${pg.urlFor(l)}`, lastModified: new Date(TURIST_UPDATE), changeFrequency: 'monthly' as const, priority: pg.id === 'express' ? 0.8 : 0.77, alternates: tAlt(pg.urlFor) })),
  );
  // Hub sayfaları sabitSayfalar'da zaten var; hreflang eşleşmesi için ayrıca alternates ile aşağıda güncellenir.
  const hubAlt = { languages: { tr: `${SITE}${TR_HUB}`, ...Object.fromEntries(TLANGS.map((l) => [l, `${SITE}${hubUrl(l)}`])), 'x-default': `${SITE}${TR_HUB}` } };
  sabitSayfalar.forEach((e) => {
    if (e.url === `${SITE}${TR_HUB}` || TLANGS.some((l) => e.url === `${SITE}${hubUrl(l)}`)) {
      e.alternates = hubAlt;
      e.lastModified = new Date(TURIST_UPDATE);
    }
  });

  // 📞 9. İLETİŞİM SAYFALARI (4 dil, hreflang karşılıklı) — "terzi can telefon / iletişim / adres" aramaları
  const CONTACT: Record<'tr' | 'en' | 'ru' | 'de', string> = {
    tr: '/iletisim', en: '/en/contact-tailor-antalya', ru: '/ru/kontakty-portnoy-antalya', de: '/de/kontakt-schneider-antalya',
  };
  const contactAlt = { languages: { ...Object.fromEntries((Object.keys(CONTACT) as (keyof typeof CONTACT)[]).map((l) => [l, `${SITE}${CONTACT[l]}`])), 'x-default': `${SITE}${CONTACT.tr}` } };
  const iletisimSayfalari: MetadataRoute.Sitemap = (Object.keys(CONTACT) as (keyof typeof CONTACT)[]).map((l) => ({
    url: `${SITE}${CONTACT[l]}`, lastModified: new Date(LAST_UPDATE), changeFrequency: 'monthly' as const, priority: l === 'tr' ? 0.85 : 0.8, alternates: contactAlt,
  }));

  // Ek turist dilleri (ES/FR/PL/UK/NL/AR): tek tanıtım sayfası, kendi aralarında hreflang.
  const intlAlt = { languages: { tr: `${SITE}/antalya-terzi`, en: `${SITE}/en/tailor-service-antalya`, ru: `${SITE}/ru/uslugi-portnogo-antalya`, de: `${SITE}/de/schneiderservice-antalya`, ...Object.fromEntries(ILANGS.map((l) => [INTL[l].hreflang, `${SITE}${iUrl(l)}`])), 'x-default': `${SITE}/antalya-terzi` } };
  const intlSayfalari: MetadataRoute.Sitemap = ILANGS.map((l) => ({
    url: `${SITE}${iUrl(l)}`, lastModified: new Date(LAST_UPDATE), changeFrequency: 'monthly' as const, priority: 0.7, alternates: intlAlt,
  }));

  // Aynı URL birden fazla bölümde üretilebilir; ilk kayıt (sabit sayfalar) korunur.
  const gorulen = new Set<string>();
  return [...sabitSayfalar, ...otelSayfalari, ...seoSayfalari, ...turistSayfalari, ...iletisimSayfalari, ...intlSayfalari].filter((e) => {
    if (gorulen.has(e.url)) return false;
    gorulen.add(e.url);
    return true;
  });
}
