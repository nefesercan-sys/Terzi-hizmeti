import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

// ✅ globals.css eklendi — tüm sayfalardaki tekrar eden inline <style> bloklarının
// yerini alan paylaşılan stylesheet. Tarayıcı bunu bir kez indirip cache'ler,
// her sayfa geçişinde aynı CSS'i yeniden parse etmesine yol açmaz. Bu,
// özellikle çoklu sayfa gezinmesinde (ana sayfa → /antalya-terzi → /konyaalti-fermuar-tamiri gibi)
// LCP'yi belirgin şekilde iyileştirir.
//
// DÜZELTME: Önceki sürümde bu dosya HEM metadata API (icons, verification)
// HEM DE JSX içinde elle yazılmış <head> (meta/link etiketleri) içeriyordu.
// Next.js App Router'da metadata API zaten kendi <head>'ini otomatik üretir;
// üstüne ayrıca <head> döndürmek "head cannot be a child of body" tipi
// render/hydration hatasına ve CI check'inin kırmızı X almasına yol açıyordu.
// Aşağıda TÜM <head> içeriği metadata/viewport objelerine taşındı,
// JSX'te artık elle <head> yazılmıyor.

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
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
