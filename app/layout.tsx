import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';

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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C4A3E',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <meta name="google-site-verification" content="W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ" />
        <meta name="yandex-verification" content="e7b38dec995b9142" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* ✅ Hero görseli için preload — LCP görselini tarayıcıya erkenden haber verir */}
        <link rel="preload" as="image" href="/terzi-can-hero.jpg" />
      </head>
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
