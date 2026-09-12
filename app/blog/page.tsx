import type { Metadata } from 'next';

const SITE  = 'https://terzihizmeti.com.tr';
const PHONE = '+90 531 898 64 18';

// ─── Blog yazıları listesi ────────────────────────────────────────────────
// Yeni bir yazı ekledikçe (app/blog/<slug>/page.tsx oluşturup) bu diziye de
// bir satır eklemek yeterli — hem bu sayfa hem de sitemap otomatik güncellenir
// (app/sitemap.ts zaten bu klasörleri okuyorsa; okumuyorsa orada da elle ekleyin).
const YAZILAR = [
  {
    slug: '2026-yaz-sezonu-gelinlik-tadilat-rehberi',
    baslik: '2026 Yaz Sezonu Gelinlik Tadilat Rehberi',
    ozet: 'Yaz düğün sezonunda gelinlik tadilatı: randevu zamanlaması, kumaş seçimi, sıcak havada bakım.',
    tarih: '2026-08-01',
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Blog | Terzi Can Antalya',
  description: 'Terzi Can\'dan dikim, tadilat ve kıyafet bakımı üzerine pratik rehberler ve güncel bilgiler.',
  alternates: { canonical: `${SITE}/blog` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Blog | Terzi Can Antalya',
    description: 'Dikim, tadilat ve kıyafet bakımı üzerine rehberler.',
    url: `${SITE}/blog`, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
  },
};

export default function BlogIndex() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'system-ui, sans-serif' }}>
      <a href="/" style={{ fontSize: '.85rem', color: '#666', textDecoration: 'none' }}>← Ana Sayfa</a>
      <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 800, margin: '1rem 0 2rem' }}>Blog</h1>

      {YAZILAR.map(y => (
        <a key={y.slug} href={`/blog/${y.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit', padding: '1.5rem', border: '1px solid #eee', borderRadius: 14, marginBottom: 16 }}>
          <div style={{ fontSize: '.75rem', color: '#999', marginBottom: 6 }}>{new Date(y.tarih).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>{y.baslik}</h2>
          <p style={{ fontSize: '.9rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{y.ozet}</p>
        </a>
      ))}

      <p style={{ marginTop: '2rem', fontSize: '.85rem', color: '#888' }}>
        Sorularınız için ☎ {PHONE} — WhatsApp'tan da yazabilirsiniz.
      </p>
    </main>
  );
}
