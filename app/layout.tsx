import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';

// ✅ DÜZELTME: www eklendi — Yandex doğrulaması www ile yapıldı, canonical tutarlı olmalı
const SITE = 'https://www.terzihizmeti.com.tr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Terzi Can — Antalya Konyaaltı Terzi Hizmeti | Dikim Tamir Tadilat',
    template: '%s | Terzi Can Antalya',
  },
  icons: {
    icon: [
      { url: '/terzi-can-hero.png', type: 'image/png' },
    ],
    apple: '/terzi-can-hero.png',
    shortcut: '/terzi-can-hero.png',
  },
  // Google Search Console — terzihizmeti.com.tr için DNS TXT yöntemi de kullan:
  // Host: @  |  Type: TXT  |  Value: google-site-verification=W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ
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
        {/* Google Search Console meta doğrulama (yedek yöntem) */}
        <meta name="google-site-verification" content="W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ" />
        {/* Yandex Webmaster meta doğrulama (yedek — asıl doğrulama public/yandex_*.html dosyasıyla yapıldı) */}
        <meta name="yandex-verification" content="e7b38dec995b9142" />
        {/* Preconnect — font yükleme hızı için */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
