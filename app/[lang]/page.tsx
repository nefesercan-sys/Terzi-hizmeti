import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IntlLanding from '@/components/IntlLanding';
import { ILANGS, INTL, iUrl, isILang } from '@/lib/intl';
import { SITE } from '@/lib/seo-data';
import { OG_DEFAULT } from '@/lib/turist-keten';
import { fitDesc, fitKeywords } from '@/lib/meta-fit';

// Yalnızca ILANGS içindeki diller üretilir; diğer tek-segmentli yollar 404 olur.
export const dynamicParams = false;
export function generateStaticParams() {
  return ILANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isILang(lang)) return {};
  const c = INTL[lang];
  const url = `${SITE}${iUrl(lang)}`;
  return {
    metadataBase: new URL(SITE),
    title: { absolute: c.title },
    description: fitDesc(c.desc),
    keywords: fitKeywords(c.keywords),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: url,
      languages: {
        tr: `${SITE}/antalya-terzi`, en: `${SITE}/en/tailor-service-antalya`, ru: `${SITE}/ru/uslugi-portnogo-antalya`, de: `${SITE}/de/schneiderservice-antalya`,
        ...Object.fromEntries(ILANGS.map((l) => [INTL[l].hreflang, `${SITE}${iUrl(l)}`])),
        'x-default': `${SITE}/antalya-terzi`,
      },
    },
    openGraph: { title: c.title, description: fitDesc(c.desc), url, siteName: 'Terzi Can', locale: c.locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: c.h1 }] },
    twitter: { card: 'summary_large_image', title: c.title, description: fitDesc(c.desc), images: [OG_DEFAULT] },
    other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isILang(lang)) notFound();
  return <IntlLanding lang={lang} />;
}
