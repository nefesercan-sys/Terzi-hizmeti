import { MetadataRoute } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';

const SITE = "https://terzihizmeti.com.tr";
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  // OTEL_BOLGELERI verisini güvenli bir şekilde slug (metin) dizisine çeviriyoruz
  const bolgeListesi: string[] = Array.isArray(OTEL_BOLGELERI)
    ? OTEL_BOLGELERI.map((b) => (typeof b === 'string' ? b : b.slug || String(b)))
    : Object.keys(OTEL_BOLGELERI);

  // Otel bölgeleri için dinamik sayfalar (MetadataRoute.Sitemap tipine tam uygun)
  const otelSayfalari: MetadataRoute.Sitemap = bolgeListesi.flatMap((slug) => [
    { url: `${SITE}/otele-gelen-terzi-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/hotel-tailor-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/ru/oytelniy-portnoy-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/de/schneider-service-hotel-antalya/${slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
  ]);

  // Sabit sayfalar
  const sabitSayfalar: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE}/antalya-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.91 },
    { url: `${SITE}/konyaalti-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${SITE}/liman-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${SITE}/sarisu-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${SITE}/uncali-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.91 },
    { url: `${SITE}/gursu-terzi`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.91 },
    { url: `${SITE}/konyaalti-fermuar-tamiri`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/konyaalti-paca-kisaltma`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/antalya-elbise-daraltma`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/antalya-uniforma-uretimi`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/hotel-tailor-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/ru/oytelniy-portnoy-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/de/schneider-service-hotel-antalya`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/keten-pamuk-ozel-dikim`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.88 },
    { url: `${SITE}/en/linen-cotton-tailoring`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.88 },
    { url: `${SITE}/ru/poshiv-lyon-khlopok`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.88 },
    { url: `${SITE}/de/leinen-baumwolle-schneiderei`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.88 },
    { url: `${SITE}/blog`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE}/blog/2026-yaz-sezonu-getirillik-tadilati-rehberi`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.6 },
  ];

  return [...sabitSayfalar, ...otelSayfalari];
}
