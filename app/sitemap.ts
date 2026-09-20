import { MetadataRoute } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';

const SITE = 'https://terzihizmeti.com.tr';
const NOW  = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Ana sayfa — Konyaaltı merkezli marka sayfası, en yüksek öncelik
    { url: SITE, lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },

    // Antalya geneli hizmet sayfası
    { url: `${SITE}/antalya-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },

    // ✅ YENİ (2026-09) — Anavera Tekstil: B2B tekstil tasarım/üretim/ihracat
    // markası (AB ve Rusya kurumsal alıcılar hedefli), terzihizmeti.com.tr
    // altında ayrı bir bölüm olarak yayınlanıyor.
    { url: `${SITE}/anavera-tekstil`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },

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
    // DÜZELTME (2026-09-20): Sabit yazılmış ['belek','lara','guzeloba','kemer','side']
    // listesi yerine OTEL_BOLGELERI'den dinamik üretiliyor — yeni bölge eklendiğinde
    // (lib/otel-bolgeleri.ts) sitemap otomatik güncellenir, elle senkron gerekmez.
    ...OTEL_BOLGELERI.flatMap(({ slug }) => [
      { url: `${SITE}/otele-gelen-terzi-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly' as const, priority: 0.92 },
      { url: `${SITE}/en/hotel-tailor-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly' as const, priority: 0.9 },
      { url: `${SITE}/ru/vyezdnoy-portnoy-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly' as const, priority: 0.9 },
      { url: `${SITE}/de/schneider-service-hotel-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly' as const, priority: 0.9 },
    ]),

    // ✅ YENİ (2026-09-20) — Keten & Pamuk Özel Dikim Modelleri (yabancı misafirler)
    { url: `${SITE}/keten-pamuk-ozel-dikim`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.88 },
    { url: `${SITE}/en/linen-cotton-tailoring`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.88 },
    { url: `${SITE}/ru/poshiv-lyon-hlopok`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.88 },
    { url: `${SITE}/de/leinen-baumwolle-schneiderei`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.88 },

    // ✅ blog / içerik tazeliği sayfaları
    { url: `${SITE}/blog`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE}/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.6 },

    // İleride eklenecek diğer kombinasyon sayfaları için yer ayrıldı:
    // { url: `${SITE}/konyaalti-bel-daraltma`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    // { url: `${SITE}/konyaalti-uniforma-uretimi`,  lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    // { url: `${SITE}/antalya-kuru-temizleme`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
  ];
}
