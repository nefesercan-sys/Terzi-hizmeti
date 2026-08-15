import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://terzihizmeti.com.tr'),
  title: {
    default: 'Terzi Can — Antalya Terzi Hizmeti',
    template: '%s | Terzi Can',
  },
  icons: {
    icon: '/terzi-can-hero.png',
    apple: '/terzi-can-hero.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF4D00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
