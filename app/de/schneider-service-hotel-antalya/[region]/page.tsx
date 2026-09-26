import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OTEL_BOLGELERI, bulOtelBolgesi } from '@/lib/otel-bolgeleri';
import OtelBolgeSayfasi from '@/components/OtelBolgeSayfasi';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE_TEL = '+905318986418';
const MAPS = 'https://maps.app.goo.gl/QEgSkRoA8Nz8H62g8';
const BASE_PATH = '/de/schneider-service-hotel-antalya';

export const dynamicParams = false;

export async function generateStaticParams() {
  return OTEL_BOLGELERI.map((r) => ({ region: r.slug }));
}

// DÜZELTME: Next.js 16'da params bir Promise — await edilmeden okunursa
// 'region' hep undefined kalır, bulOtelBolgesi(undefined) boş döner ve
// notFound() tetiklenir. Bu, bu route altındaki 11 sayfanın da gerçekte
// 404 dönmesine ve Google tarafından indexlenememesine sebep oluyordu.
export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) return {};

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  const title = `VIP Änderungsschneiderei ${r.name} | Hotel-Service & Abholung`;
  const desc = `Schnelle Kleiderreparatur im Urlaub? Terzi Can bietet professionelle Änderungsschneiderei mit VIP-Abholung in den Hotels von ${r.name}. Kontaktieren Sie uns über WhatsApp!`;
  const ogImage = `${SITE}/terzi-can-hero.jpg`;

  return {
    metadataBase: new URL(SITE),
    title,
    description: desc,
    keywords: [`VIP Schneider ${r.name}`, `Änderungsschneiderei ${r.name}`, `Hotel Abholung Schneider ${r.name}`, 'Textilreparatur Antalya'],
    alternates: {
      canonical: url,
      languages: {
        'tr': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
        'en': `${SITE}/en/hotel-tailor-antalya/${r.slug}`,
        'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya/${r.slug}`,
        'de': url,
        'x-default': `${SITE}/otele-gelen-terzi-antalya/${r.slug}`,
      },
    },
    openGraph: { title, description: desc, url, type: 'website', locale: 'de_DE', siteName: 'Terzi Can Antalya', images: [{ url: ogImage, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description: desc, images: [ogImage] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  };
}

// DÜZELTME: Next.js 16'da params bir Promise — await edilmeden okunursa
// 'region' hep undefined kalır, bulOtelBolgesi(undefined) boş döner ve
// notFound() tetiklenir. Bu, bu route altındaki 11 sayfanın da gerçekte
// 404 dönmesine ve Google tarafından indexlenememesine sebep oluyordu.
export default async function OtelBolgeDePage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = bulOtelBolgesi(region);
  if (!r) notFound();

  const url = `${SITE}${BASE_PATH}/${r.slug}`;
  
  const seoContent = {
    h1: `Premium Änderungsschneiderei für Hotelgäste in ${r.name}`,
    h2: `Schnelle und professionelle Textilreparatur – direkt ab Hotel`,
    body1: `Sie genießen Ihren Urlaub in ${r.name}, aber das neu gekaufte Kleid ist zu lang oder der Reißverschluss Ihrer Lieblingsjacke ist kaputt? Terzi Can ist Ihre zuverlässige Schneiderei vor Ort.`,
    body2: `Da Ihre Urlaubszeit kostbar ist, bieten wir einen exklusiven VIP-Abhol- und Lieferservice für Gäste in den Hotelregionen von ${r.name} an. Sie müssen Ihr Resort nicht verlassen!`
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `VIP Hotel Schneider Service ${r.name}`,
        serviceType: 'Clothing Alterations & Mobile Tailoring',
        provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: `${SITE}/antalya-terzi`, image: `${SITE}/terzi-can-hero.jpg` },
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
            name: `Bieten Sie eine VIP-Abholung in ${r.name} an?`,
            acceptedAnswer: { '@type': 'Answer', text: `Ja! Senden Sie uns ein Foto per WhatsApp. Wir holen das Kleidungsstück direkt an der Rezeption Ihres Hotels in ${r.name} ab.` },
          },
          {
            '@type': 'Question',
            name: `Wie schnell ist die Bearbeitung?`,
            acceptedAnswer: { '@type': 'Answer', text: `Unsere erfahrenen Schneider erledigen die Arbeit und liefern es in der Regel innerhalb von 24 bis 48 Stunden an Ihr Hotel in ${r.name} zurück.` },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OtelBolgeSayfasi lang="de" region={r} allRegions={OTEL_BOLGELERI} basePath={BASE_PATH} maps={MAPS} seoContent={seoContent} />
    </>
  );
}
