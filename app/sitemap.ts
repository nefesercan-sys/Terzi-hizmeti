import type { MetadataRoute } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';
import { DISTRICTS, SERVICES, LANGS, SERVICE_BASE, districtUrl, serviceUrl, LAST_UPDATE, type Lang } from '@/lib/seo-data';

const SITE = "https://terzihizmeti.com.tr";
const NOW = new Date('2026-10-10');

export default function sitemap(): MetadataRoute.Sitemap {
  // OTEL_BOLGELERI verisini güvenli bir şekilde slug metin dizisine çeviriyoruz
  const bolgeListesi: string[] = Array.isArray(OTEL_BOLGELERI)
    ? OTEL_BOLGELERI.map((b) => (typeof b === 'string' ? b : b.slug || String(b)))
    : Object.keys(OTEL_BOLGELERI);

  // Otel bölgeleri için dinamik sayfalar (Niş Alt Sayfalar - Priority: 0.75)
  const otelSayfalari: MetadataRoute.Sitemap = bolgeListesi.flatMap((slug) => [
    { url: `${SITE}/otele-gelen-terzi-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${SITE}/en/hotel-tailor-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${SITE}/ru/vyezdnoy-portnoy-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${SITE}/de/schneider-service-hotel-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.75 },
  ]);

  // Sabit Sayfalar Hiyerarşisi
  const sabitSayfalar: MetadataRoute.Sitemap = [
    // 🌟 1. BİRİNCİL ZİRVE: ANA SAYFA (Priority: 1.0)
    { url: SITE, lastModified: NOW, changeFrequency: 'daily', priority: 1.0 },

    // 📍 2. ANA ŞEHİR SAYFASI & MERKEZ HİZMETLER (Priority: 0.90)
    { url: `${SITE}/antalya-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.90 },
    { url: `${SITE}/otele-gelen-terzi-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.90 },

    // 🏠 3. KONYAALTI MAHALLE SAYFALARI (Sıcak Lokal Müşteri - Priority: 0.85)
    { url: `${SITE}/hurma-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/liman-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/sarisu-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/uncali-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/gursu-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },

    // ✂️ 4. ÖZEL DİKİM & SPESİFİK TADİLATLAR (Priority: 0.82)
    { url: `${SITE}/keten-pamuk-ozel-dikim`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/anavera-tekstil`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/en/anavera-tekstil`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/de/anavera-tekstil`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/ru/anavera-tekstil`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.82 },
    { url: `${SITE}/konyaalti-fermuar-tamiri`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${SITE}/konyaalti-paca-kisaltma`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${SITE}/antalya-gelinlik-tadilati`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${SITE}/antalya-terzi-fiyatlari`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.90 },
    { url: `${SITE}/en/tailor-prices-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/de/schneider-preise-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/ru/ceny-portnoy-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/antalya-uniforma-imalati`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.82 },

    // 🌍 5. ÇOK DİLLİ LANDING SAYFALARI (Priority: 0.80 / 0.78)
    { url: `${SITE}/en/tailor-service-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/ru/uslugi-portnogo-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/de/schneiderservice-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/en/hotel-tailor-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/ru/vyezdnoy-portnoy-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/de/schneider-service-hotel-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE}/en/linen-cotton-tailoring`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.78 },
    { url: `${SITE}/ru/poshiv-lyon-hlopok`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.78 },
    { url: `${SITE}/de/leinen-baumwolle-schneiderei`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.78 },

    // 📝 6. BLOG İÇERİKLERİ (Priority: 0.70 / 0.60)
    { url: `${SITE}/blog`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.70 },
    { url: `${SITE}/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.60 },
  ];

  // 🔎 7. BÖLGE × HİZMET SEO SAYFALARI (4 dil, hreflang karşılıklı)
  const SEO_DATE = new Date(LAST_UPDATE);
  const alt = (urlFor: (l: Lang) => string) => ({ languages: Object.fromEntries([...LANGS.map((l) => [l, `${SITE}${urlFor(l)}`]), ['x-default', `${SITE}${urlFor('tr')}`]]) });
  const seoSayfalari: MetadataRoute.Sitemap = [
    ...LANGS.map((l) => ({ url: `${SITE}${SERVICE_BASE[l]}`, lastModified: SEO_DATE, changeFrequency: 'weekly' as const, priority: 0.8, alternates: alt((x) => SERVICE_BASE[x]) })),
    ...SERVICES.flatMap((s) => LANGS.map((l) => ({ url: `${SITE}${serviceUrl(l, s)}`, lastModified: SEO_DATE, changeFrequency: 'monthly' as const, priority: 0.78, alternates: alt((x) => serviceUrl(x, s)) }))),
    ...DISTRICTS.flatMap((d) => LANGS.map((l) => ({ url: `${SITE}${districtUrl(l, d)}`, lastModified: SEO_DATE, changeFrequency: 'monthly' as const, priority: 0.76, alternates: alt((x) => districtUrl(x, d)) }))),
  ];

  return [...sabitSayfalar, ...otelSayfalari, ...seoSayfalari];
}
