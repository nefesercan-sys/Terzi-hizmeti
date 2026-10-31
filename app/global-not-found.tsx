import type { Metadata } from 'next';
import '@/app/globals.css';
import NotFoundContent from '@/components/NotFoundContent';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı · 404',
  robots: { index: false, follow: true },
};

// Kök düzen dışında çalışır; dil, istemcide URL'nin ilk bölümünden seçilir (tr, en, de, ru, es, fr, pl, uk, nl, ar).
export default function GlobalNotFound() {
  return (
    <html lang="tr">
      <body>
        <NotFoundContent />
      </body>
    </html>
  );
}
