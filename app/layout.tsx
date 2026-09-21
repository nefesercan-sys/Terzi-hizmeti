import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import LangSetter from './LangSetter';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-inter', display: 'swap' });
const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap' });

const SITE = 'https://terzihizmeti.com.tr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Terzi Can — Antalya Konyaaltı Terzi Hizmeti',
    template: '%s · Terzi Can',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ',
    yandex: 'e7b38dec995b9142',
  },
  alternates: {
    canonical: SITE,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C4A3E',
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Terzi Can',
  url: SITE,
  telephone: '+905318986418',
  image: `${SITE}/terzi-can-hero.jpg`,
  description: 'Antalya Konyaaltı terzi, özel dikim, giysi tadilatı, tamir ve profesyonel buharlı ütü hizmeti. Tailor, alterations, repair, custom sewing & steam ironing service in Antalya.',
  address: { 
    '@type': 'PostalAddress', 
    streetAddress: 'Konyaaltı', 
    addressLocality: 'Konyaaltı', 
    addressRegion: 'Antalya', 
    addressCountry: 'TR' 
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Antalya' },
    { '@type': 'AdministrativeArea', name: 'Konyaaltı' },
    { '@type': 'AdministrativeArea', name: 'Liman' },
    { '@type': 'AdministrativeArea', name: 'Hurma' },
    { '@type': 'AdministrativeArea', name: 'Gürsu' },
    { '@type': 'AdministrativeArea', name: 'Sarısu' },
    { '@type': 'AdministrativeArea', name: 'Uncalı' }
  ],
  knowsLanguage: ['tr', 'en', 'ru', 'de'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tailoring, Alteration, Repair & Ironing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Clothing Alterations & Repairs / Änderungsschneiderei / Ремонт одежды',
          description: 'Pant hemming, zipper replacement, suit fitting, dress resizing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Steam Ironing & Pressing / Bügelservice / Глажка одежды',
          description: 'Steam pressing and ironing service for suits, dresses, and daily clothes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Tailoring & Sewing / Maßschneiderei / Индивидуальный пошив',
          description: 'Bespoke cotton, linen clothing, and custom curtain tailoring.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hotel Pickup & Mobile Tailor Service / Mobiler Hotel-Schneiderservice / Выездной портной в отель',
          description: 'Express clothing pickup, alteration, ironing, and hotel delivery service.',
        },
      },
    ],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+905318986418',
    contactType: 'customer service',
    areaServed: 'TR',
    availableLanguage: ['Turkish', 'English', 'Russian', 'German'],
  },
  sameAs: [`${SITE}/antalya-terzi`, 'https://swaphubs.com/terzi'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body>
        <LangSetter />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
