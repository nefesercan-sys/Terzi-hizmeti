import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { Inter, Syne } from 'next/font/google';
import '@/app/globals.css';
import IcerikHaritasi from '@/components/IcerikHaritasi';
import { HizliEylemBandi, HizliAkis } from '@/components/HizliEylem';
import RuTelegramButton from '@/components/RuTelegramButton';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-inter', display: 'swap' });
const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap' });

const SITE = 'https://terzihizmeti.com.tr';

export const rootMetadata: Metadata = {
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
    // Yandex Webmaster: eski ve yeni doğrulama kodları birlikte (ikisi de geçerli kalsın)
    yandex: ['e7b38dec995b9142', '90847d9fde4fea11'],
    // Bing Webmaster kodu gerekirse buraya ekleyin (Bing'de GSC'den içe aktarırsanız gerekmez):
    // other: { 'msvalidate.01': 'BING_KODU' },
  },
  // (Kök layout'ta canonical VERİLMEZ: her sayfa kendi canonical'ını verir; aksi halde sayfalar ana sayfaya işaret ederdi.)
};

export const rootViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C4A3E',
};

// DÜZELTME (SEO denetimi): Bu dosyada daha önce her sayfada basılan tam bir
// LocalBusiness/ClothingStore JSON-LD bloğu vardı. Ancak her alt sayfa
// (app/page.tsx, app/antalya-terzi/page.tsx, app/hurma-terzi/page.tsx, vb.)
// ZATEN aynı '@id' (`${SITE}#business`, `${SITE}#website`) ile kendi, daha
// eksiksiz ve doğru adresli (Hurma Mahallesi, 07130) şemalarını basıyordu.
// Aynı sayfada aynı @id için iki farklı/çelişen tanım olması (biri eksik/
// genel, diğeri tam) arama motorlarının ve AI motorlarının işletme bilgisini
// (NAP) doğru okumasını riske atıyordu. Global şema buradan tamamen
// kaldırıldı — her rota kendi doğru JSON-LD'sini kendi basıyor (blog
// sayfaları için de ayrıca eklendi, bkz. app/blog/**/page.tsx).
export const fontClasses = `${inter.variable} ${syne.variable}`;

// Her dil grubunun kendi kök düzeni vardır; <html lang> ve dir sunucuda, ilk HTML'de doğru basılır
// (botlar ve JavaScript çalıştırmayan yapay zeka tarayıcıları için). Kök düzenlerin ortak gövdesi burada.
export default function RootShell({ lang, dir = 'ltr', children }: { lang: string; dir?: 'ltr' | 'rtl'; children: ReactNode }) {
  return (
    <html lang={lang} dir={dir} className={fontClasses}>
      <body>
        <HizliEylemBandi />
        {children}
        <RuTelegramButton />
        <HizliAkis />
        <IcerikHaritasi />
        <Analytics />
      </body>
    </html>
  );
}
