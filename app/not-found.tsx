import type { Metadata } from 'next';

const PHONE = '+90 531 898 64 18';
const WA = 'https://wa.me/905318986418?text=' + encodeURIComponent('Merhaba, aradığım sayfayı bulamadım, yardımcı olur musunuz?');

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
        fontFamily: 'system-ui, sans-serif',
        background: '#2C4A3E',
        color: '#faf7f0',
      }}
    >
      <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '.5rem' }}>404</div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '.75rem' }}>
        Bu sayfayı bulamadık
      </h1>
      <p style={{ opacity: 0.8, maxWidth: 440, marginBottom: '2rem', lineHeight: 1.6 }}>
        Aradığınız sayfa taşınmış ya da kaldırılmış olabilir. Aşağıdaki bağlantılardan
        devam edebilir ya da doğrudan bize yazabilirsiniz.
      </p>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
        <a href="/" style={{ background: '#C9A96E', color: '#2C4A3E', padding: '.7rem 1.4rem', borderRadius: 999, fontWeight: 700, textDecoration: 'none' }}>
          Ana Sayfa
        </a>
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ border: '1px solid rgba(255,255,255,.4)', color: '#faf7f0', padding: '.7rem 1.4rem', borderRadius: 999, fontWeight: 700, textDecoration: 'none' }}>
          💬 WhatsApp: {PHONE}
        </a>
      </div>
      <nav aria-label="Popüler sayfalar" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '.85rem', opacity: 0.75 }}>
        <a href="/antalya-terzi" style={{ color: 'inherit' }}>Antalya Terzi</a>
        <a href="/otele-gelen-terzi-antalya" style={{ color: 'inherit' }}>Otele Gelen Terzi</a>
        <a href="/antalya-gelinlik-tadilati" style={{ color: 'inherit' }}>Gelinlik Tadilatı</a>
        <a href="/blog" style={{ color: 'inherit' }}>Blog</a>
      </nav>
    </main>
  );
}
