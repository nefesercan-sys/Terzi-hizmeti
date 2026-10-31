'use client';

import { useEffect } from 'react';

// Sunucu/istemci çalışma zamanı hatalarında gösterilen sayfa (404 için app/global-not-found.tsx).
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3rem 1.5rem', fontFamily: 'system-ui, sans-serif', background: '#2C4A3E', color: '#faf7f0' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '.75rem' }}>Bir sorun oluştu / Something went wrong</h1>
      <p style={{ opacity: 0.8, maxWidth: 440, marginBottom: '1.5rem', lineHeight: 1.6 }}>
        Sayfa yüklenemedi. Lütfen tekrar deneyin ya da WhatsApp&apos;tan yazın: +90 531 898 64 18
      </p>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button type="button" onClick={() => reset()} style={{ background: '#C9A96E', color: '#2C4A3E', padding: '.7rem 1.4rem', borderRadius: 999, fontWeight: 700, border: 0, cursor: 'pointer' }}>
          Tekrar dene / Try again
        </button>
        <a href="/" style={{ border: '1px solid rgba(255,255,255,.4)', color: '#faf7f0', padding: '.7rem 1.4rem', borderRadius: 999, fontWeight: 700, textDecoration: 'none' }}>
          Ana Sayfa / Home
        </a>
      </div>
    </main>
  );
}
