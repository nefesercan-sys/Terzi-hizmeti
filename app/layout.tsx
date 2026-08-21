import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

// ✅ globals.css eklendi — tüm sayfalardaki tekrar eden inline <style> bloklarının
// yerini alan paylaşılan stylesheet. Tarayıcı bunu bir kez indirip cache'ler,
// her sayfa geçişinde yeniden parse etmez. Bu, özellikle çoklu sayfa gezinmesinde
// (ana sayfa → /antalya-terzi → /konyaalti-fermuar-tamiri gibi) LCP'yi belirgin
// şekilde iyileştirir.

const SITE = 'https://www.terzihizmeti.com.tr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Terzi Can — Antalya Konyaaltı Terzi Hizmeti | Dikim Tamir Tadilat',
    template: '%s | Terzi Can Antalya',
  },
  icons: {
    icon: [{ url: '/terzi-can-hero.png', type: 'image/png' }],
    apple: '/terzi-can-hero.png',
    shortcut: '/terzi-can-hero.png',
  },
  verification: {
    google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ',
    yandex: 'e7b38dec995b9142',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C4A3E',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <meta name="google-site-verification" content="W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ" />
        <meta name="yandex-verification" content="e7b38dec995b9142" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* ✅ Hero görseli için preload — LCP görselini tarayıcıya erkenden haber verir */}
        <link rel="preload" as="image" href="/terzi-can-hero.png" />
      </head>
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
