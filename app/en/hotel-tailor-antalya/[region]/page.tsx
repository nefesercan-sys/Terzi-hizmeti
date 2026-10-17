import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS = 'https://www.google.com/maps?cid=5846987472659818117';
const BASE_PATH = '/en/hotel-tailor-antalya';

export const dynamicParams = false;

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) return {};

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  // Yeni VIP SEO Başlığı ve Açıklaması (Dinamik)
  const title = `Hotel Tailor in ${r.name}, Antalya | Pick-up & Delivery`;
  const desc = `Staying in ${r.name}? We collect clothes from your hotel, alter them in Konyaaltı and bring them back. Open daily 08:00–23:00.`;
  const ogImage = `${SITE}/terzi-can-hero.jpg`;

  return {
    metadataBase: new URL(SITE),
    title: { absolute: title },
    description: desc,
    keywords: [`tailor near hotels in ${r.name}`, `${r.name} hotel tailor`, `clothing alterations ${r.name}`, `hemming ${r.name} Antalya`, `zipper repair ${r.name}`, 'holiday clothing alterations Antalya', 'hotel pick-up tailor Antalya'],
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
        'en': url,
        'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya/${r.slug}`,
        'de': `${SITE}/de/schneider-service-hotel-antalya/${r.slug}`,
        'x-default': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
      },
    },
    openGraph: { title, description: desc, url, type: 'website', locale: 'en_US', siteName: 'Terzi Can Antalya', images: [{ url: ogImage, width: 1200, height: 630, alt: `Hotel tailor in ${r.name}` }] },
    twitter: { card: 'summary_large_image', title, description: desc, images: [ogImage] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  };
}

export default async function OtelBolgeEnPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) notFound();

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  
  // İçerikte kullanılmak üzere hazırlanan VIP SEO Metinleri
  const seoContent = {
    h1: `Hotel Tailor in ${r.name} — We Collect, Fix and Bring It Back`,
    h2: `Clothing alterations for holidaymakers, handled without a trip into town`,
    body1: `A hem that is too long, a zipper that gave way, a dress that needs taking in before dinner? If you are staying in ${r.name}, send us a photo on WhatsApp and we will tell you what can be done and what it costs.`,
    body2: `Our workshop is in Hurma, Konyaaltı, and it is open every day from 08:00 to 23:00. We collect the garment from your hotel, work on it in the workshop and deliver it back; pick-up and delivery to hotels is free. Hemming, taking in and zipper jobs are ready the same day.`
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Hotel Tailor ${r.name} — Pick-up & Delivery`,
        serviceType: 'Clothing Alterations & Mobile Tailoring',
        provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: `${SITE}/antalya-terzi`, image: `${SITE}/terzi-can-hero.jpg`, priceRange: '$$' },
        areaServed: { '@type': 'Place', name: `${r.name}, Antalya` },
        description: seoContent.body2,
        url,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `How do I get my clothes collected from a hotel in ${r.name}?`,
            acceptedAnswer: { '@type': 'Answer', text: `Send a photo of the garment and your hotel name on WhatsApp. We arrange a collection time, take the garment to our workshop and bring it back to your hotel.` },
          },
          {
            '@type': 'Question',
            name: `How soon will I get it back?`,
            acceptedAnswer: { '@type': 'Answer', text: `Hemming, taking in and zipper repairs are usually done the same day; dress, jacket, shirt and coat alterations take 1 day; dress making takes 3 days.` },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* seoContent objesini OtelBolgeSayfasi bileşenine prop olarak gönderebilir veya doğrudan burada ekranda basabilirsiniz */}
      <OtelBolgeSayfasi lang="en" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} seoContent={seoContent} />
    </>
  );
}
 
