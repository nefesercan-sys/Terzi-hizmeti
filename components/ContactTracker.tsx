'use client';

// İletişim ölçümü: WhatsApp ve telefon tıklamalarını dile/sayfaya göre sayar ve WhatsApp mesajının sonuna
// kısa bir kaynak etiketi ([ref:dil/sayfa]) ekler. Çerez, yerel depolama veya kişisel veri KULLANMAZ.
// Sayfa JavaScript'siz de çalışır: bağlantılar olduğu gibi kalır, etiket yalnızca tıklama anında eklenir.
import { useEffect } from 'react';
import { track } from '@vercel/analytics';

const LANGS = ['en', 'ru', 'de', 'es', 'fr', 'pl', 'uk', 'nl', 'ar'];
const GREET: Record<string, string> = {
  tr: 'Merhaba, bilgi almak istiyorum',
  en: 'Hello, I would like some information',
  ru: 'Здравствуйте, хочу получить информацию',
  de: 'Guten Tag, ich hätte gern Informationen',
};
const WA = /^(?:https?:)?\/\/(?:wa\.me|api\.whatsapp\.com)\/|^whatsapp:\/\//i;

function pageInfo() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  const lang = parts[0] && LANGS.includes(parts[0]) ? parts[0] : 'tr';
  const last = parts.length ? parts[parts.length - 1] : 'home';
  return { lang, path, code: last.slice(0, 28) };
}

// text parametresinin sonuna etiketi ekler; text yoksa kısa nötr bir selam ekler. Numara ve mevcut mesaj aynı kalır.
function withRef(href: string, lang: string, code: string): string {
  if (/%5Bref(?::|%3A)/i.test(href) || /\[ref:/i.test(href)) return href;
  const ref = `[ref:${lang}/${code}]`;
  const hash = href.indexOf('#');
  const base = hash >= 0 ? href.slice(0, hash) : href;
  const tail = hash >= 0 ? href.slice(hash) : '';
  const m = /([?&])text=([^&]*)/.exec(base);
  if (m) {
    let cur = m[2];
    try { cur = decodeURIComponent(m[2].replace(/\+/g, ' ')); } catch { /* bozuk kodlama: olduğu gibi bırak */ }
    return base.replace(m[0], `${m[1]}text=${encodeURIComponent(`${cur} ${ref}`)}`) + tail;
  }
  const text = encodeURIComponent(`${GREET[lang] || GREET.en} ${ref}`);
  return base + (base.includes('?') ? '&' : '?') + `text=${text}` + tail;
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
        const { lang, path, code } = pageInfo();
        if (isWa) el.setAttribute('href', withRef(href, lang, code));
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
