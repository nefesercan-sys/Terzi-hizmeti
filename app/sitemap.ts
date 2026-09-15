import { MetadataRoute } from 'next';

const SITE = 'https://terzihizmeti.com.tr';
const NOW  = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Ana sayfa — Konyaaltı merkezli marka sayfası, en yüksek öncelik
    { url: SITE, lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },

    // Antalya geneli hizmet sayfası
    { url: `${SITE}/antalya-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },

    // ✅ Mahalle sayfaları
    { url: `${SITE}/hurma-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${SITE}/liman-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${SITE}/sarisu-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${SITE}/uncali-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/gursu-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },

    // ✅ long-tail "şehir + hizmet" kombinasyon sayfaları
    { url: `${SITE}/konyaalti-fermuar-tamiri`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/konyaalti-paca-kisaltma`,  lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/antalya-gelinlik-tadilati`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/antalya-uniforma-imalati`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },

    // ✅ YENİ — Çok dilli Antalya geneli hizmet sayfaları (2026-09)
    { url: `${SITE}/en/tailor-service-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE}/ru/uslugi-portnogo-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE}/de/schneiderservice-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.95 },

    // ✅ DÜZELTİLDİ (2026-09) — Otel bölgesi sayfaları: gerçek klasör yollarıyla
    // eşleşmeyen (404 veren) URL'ler yerine doğru yollar + eksik olan Kemer +
    // her dil için "tüm bölgeler" hub sayfası + Türkçe karşılığı eklendi.
    { url: `${SITE}/otele-gelen-terzi-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/en/hotel-tailor-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/ru/vyezdnoy-portnoy-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/de/schneider-service-hotel-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    ...['belek', 'lara', 'guzeloba', 'kemer', 'side'].flatMap((slug) => [
      { url: `${SITE}/otele-gelen-terzi-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly' as const, priority: 0.92 },
      { url: `${SITE}/en/hotel-tailor-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly' as const, priority: 0.9 },
      { url: `${SITE}/ru/vyezdnoy-portnoy-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly' as const, priority: 0.9 },
      { url: `${SITE}/de/schneider-service-hotel-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly' as const, priority: 0.9 },
    ]),

    // ✅ blog / içerik tazeliği sayfaları
    { url: `${SITE}/blog`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE}/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.6 },

    // İleride eklenecek diğer kombinasyon sayfaları için yer ayrıldı:
    // { url: `${SITE}/konyaalti-bel-daraltma`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    // { url: `${SITE}/konyaalti-uniforma-uretimi`,  lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    // { url: `${SITE}/antalya-kuru-temizleme`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
  ];
}
