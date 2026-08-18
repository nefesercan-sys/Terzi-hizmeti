import { MetadataRoute } from 'next';

// ✅ DÜZELTME: www eklendi — canonical domain ile tutarlı
const SITE = 'https://www.terzihizmeti.com.tr';
const NOW  = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Ana sayfa — Konyaaltı merkezli marka sayfası, en yüksek öncelik
    { url: SITE,                        lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },
    // Antalya geneli hizmet sayfası — farklı arama niyeti (şehir geneli)
    { url: `${SITE}/antalya-terzi`,     lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    // İleride eklenecek hizmet sayfaları için yer ayrıldı:
    // { url: `${SITE}/paca-kisaltma`,  lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    // { url: `${SITE}/fermuar`,        lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    // { url: `${SITE}/elbise-dikimi`,  lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
  ];
}
