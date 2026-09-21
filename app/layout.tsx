import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import LangSetter from './LangSetter';

// DÜZELTME: Fontlar artık next/font ile yükleniyor — build zamanında indirilip
// kendi sunucudan servis edilir (Google Fonts'a ekstra ağ bağlantısı yok),
// otomatik font-display:swap uygular ve CLS'i (Cumulative Layout Shift) önler.
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-inter', display: 'swap' });
const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap' });

// ✅ globals.css eklendi — tüm sayfalardaki tekrar eden inline <style> bloklarının
// yerini alan paylaşılan stylesheet. Tarayıcı bunu bir kez indirip cache'ler,
// her sayfa geçişinde yeniden parse etmez. Bu, özellikle çoklu sayfa gezinmesinde
// (ana sayfa → /antalya-terzi → /konyaalti-fermuar-tamiri gibi) LCP'yi belirgin
// şekilde iyileştirir.

const SITE = 'https://terzihizmeti.com.tr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  // DÜZELTME: Şablon eki " | Terzi Can Antalya" (21 karakter) her alt sayfa
  // başlığına otomatik ekleniyordu — bu, Google'ın ~60 karakterlik gösterim
  // sınırını fazlasıyla aşıp en değerli kısımların (fiyat, hizmet) arama
  // sonucunda "..." ile kesilmesine yol açıyordu. Kısaltıldı.
  title: {
    default: 'Terzi Can — Antalya Konyaaltı Terzi Hizmeti',
    template: '%s · Terzi Can',
  },
  icons: {
    icon: [{ url: '/terzi-can-hero.jpg', type: 'image/jpeg' }],
    apple: '/terzi-can-hero.jpg',
    shortcut: '/terzi-can-hero.jpg',
  },
  verification: {
    google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ',
    yandex: 'e7b38dec995b9142',
  },
  // ✅ YENİ: Çok dilli SEO (Hreflang) ve Yapay Zeka için dil haritası eklendi.
  alternates: {
    canonical: SITE,
    languages: {
      'tr-TR': `${SITE}`,
      'en-US': `${SITE}/en/tailor-service-antalya`,
      'de-DE': `${SITE}/de/schneiderservice-antalya`,
      'ru-RU': `${SITE}/ru/uslugi-portnogo-antalya`,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C4A3E',
};

// Site geneli Organization + ContactPoint şeması — yapay zeka motorlarının
// (ChatGPT, Perplexity, Google AI Overview) telefon numarası ve linki
// doğrudan alıp kullanıcıya önerebilmesi için her sayfada mevcut.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Terzi Can',
  url: SITE,
  telephone: '+905318986418',
  image: `${SITE}/terzi-can-hero.jpg`,
  // ✅ YENİ: Yapay zeka tarayıcıları için çok dilli temel açıklama eklendi.
  description: 'Antalya Konyaaltı terzi, özel dikim, giysi tadilatı, tamir ve profesyonel buharlı ütü hizmeti. Tailor, alterations, repair, custom sewing & steam ironing service in Antalya.',
  address: { 
    '@type': 'PostalAddress', 
    streetAddress: 'Konyaaltı', 
    addressLocality: 'Konyaaltı', 
    addressRegion: 'Antalya', 
    addressCountry: 'TR' 
  },
  // ✅ YENİ: Sadece Antalya değil, mahalle bazlı hizmet noktaları belirtildi (Local SEO).
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
  // ✅ YENİ: AI arama motorları için çok dilli hizmet kataloğu eklendi.
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
        {/* DÜZELTME (2026-09-20): google-site-verification ve yandex-verification
            meta etiketleri buradan kaldırıldı — yukarıdaki metadata.verification
            alanı (google/yandex) Next.js tarafından zaten otomatik <meta> olarak
            render ediliyor. İkisi aynı anda olması siteyi bozmuyordu ama HTML'de
            aynı etiketi gereksiz yere iki kez üretiyordu. */}
        {/* DÜZELTME: fonts.googleapis.com/fonts.gstatic.com preconnect'leri kaldırıldı —
            proje next/font ile fontları kendi sunucusunda barındırıyor (Google Fonts'a
            hiç ağ isteği gitmiyor), bu preconnect'ler hiçbir zaman kullanılmayan boşa
            harcanmış bağlantılardı. */}
        {/* ✅ Hero görseli için preload — LCP görselini tarayıcıya erkenden haber verir */}
        <link rel="preload" as="image" href="/terzi-can-hero.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        <LangSetter />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
