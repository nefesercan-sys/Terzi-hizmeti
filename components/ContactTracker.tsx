'use client';

// İletişim ölçümü: WhatsApp ve telefon tıklamalarını dile/sayfaya göre sayar. Müşterinin mesajına hiçbir şey eklenmez
// (etiket, adres vb. yok). Çerez, yerel depolama veya kişisel veri KULLANMAZ; bağlantılar olduğu gibi kalır.
import { useEffect } from 'react';
import { track } from '@vercel/analytics';

const LANGS = ['en', 'ru', 'de', 'es', 'fr', 'pl', 'uk', 'nl', 'ar'];
const WA = /^(?:https?:)?\/\/(?:wa\.me|api\.whatsapp\.com)\/|^whatsapp:\/\//i;

function pageInfo() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  const lang = parts[0] && LANGS.includes(parts[0]) ? parts[0] : 'tr';
  return { lang, path };
}

export default function ContactTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      try {
        const el = (e.target as Element | null)?.closest?.('a');
        if (!el) return;
        const href = el.getAttribute('href') || '';
        const isTel = /^tel:/i.test(href);
        const isWa = WA.test(href);
        if (!isTel && !isWa) return;
        const { lang, path } = pageInfo();
        try { track('contact_click', { type: isTel ? 'phone' : 'whatsapp', lang, page: path }); } catch { /* ölçüm başarısız olsa da bağlantı çalışır */ }
      } catch { /* ölçüm hiçbir koşulda tıklamayı engellemez */ }
    };
    document.addEventListener('click', onClick, { capture: true, passive: true });
    document.addEventListener('auxclick', onClick, { capture: true, passive: true });
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('auxclick', onClick, true);
    };
  }, []);
  return null;
}
