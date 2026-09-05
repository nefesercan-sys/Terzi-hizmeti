import { MetadataRoute } from 'next';

const SITE = 'https://terzihizmeti.com.tr';
const NOW  = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Ana sayfa — Konyaaltı merkezli marka sayfası, en yüksek öncelik
    { url: SITE, lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },

    // Antalya geneli hizmet sayfası
    { url: `${SITE}/antalya-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },

    // ✅ YENİ — Hurma mahallesine özel derinlemesine içerik sayfası
    { url: `${SITE}/hurma-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${SITE}/liman-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${SITE}/sarisu-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${SITE}/uncali-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/gursu-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },

    // ✅ YENİ — long-tail "şehir + hizmet" kombinasyon sayfaları
    // Bunlar spesifik, düşük rekabetli aramalar için hızlı sıralanmaya aday
    { url: `${SITE}/konyaalti-fermuar-tamiri`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/konyaalti-paca-kisaltma`,  lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/antalya-gelinlik-tadilati`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/antalya-uniforma-imalati`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    // ✅ YENİ — blog / içerik tazeliği sayfaları
    { url: `${SITE}/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.6 },

    // İleride eklenecek diğer kombinasyon sayfaları için yer ayrıldı:
    // { url: `${SITE}/konyaalti-bel-daraltma`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    // { url: `${SITE}/konyaalti-uniforma-uretimi`,  lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    // { url: `${SITE}/antalya-kuru-temizleme`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
  ];
}
