import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import LangSetter from './LangSetter';
import IcerikHaritasi from '@/components/IcerikHaritasi';
import { HizliEylemBandi, HizliAkis } from '@/components/HizliEylem';

// NOT: Aynı iki font app/page.tsx, antalya-terzi ve otele-gelen-terzi-antalya
// sayfalarında da ayrıca tanımlı. Ileride oradaki tanımları silip yalnızca
// buradakini kullan (gereksiz font yükü ve --font-* çakışması biter).
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-inter', display: 'swap' });
const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap' });

const SITE = 'https://terzihizmeti.com.tr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Terzi Can — Antalya Konyaaltı Terzi Hizmeti',
    template: '%s · Terzi Can',
  },
  // Sayfası kendi openGraph'ını vermezse kullanılacak varsayılanlar.
  openGraph: {
    type: 'website',
    siteName: 'Terzi Can',
    locale: 'tr_TR',
    url: SITE,
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ',
    // Yandex Webmaster: eski ve yeni doğrulama kodları birlikte
    yandex: ['e7b38dec995b9142', '90847d9fde4fea11'],
  },
  // Genel canonical bilerek YOK: her sayfa kendi canonical'ını tanımlar
  // (aksi halde tüm sayfaların canonical'ı ana sayfaya düşer).
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C4A3E',
};

// Global LocalBusiness şeması burada YOK: her rota kendi JSON-LD'sini basar
// (aynı @id için çift/çelişen tanımı önlemek için).
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${syne.variable}`}>
      <body>
        <LangSetter />
        <HizliEylemBandi />
        {children}
        <HizliAkis />
        <IcerikHaritasi />
        <Analytics />
      </body>
    </html>
  );
}
