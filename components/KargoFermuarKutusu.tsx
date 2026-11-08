// "Kargoyla fermuar değişimi" kutusu — abiye/elbise ve mont/palto/kaban fermuarı. 10 dil, fiyat yok (WhatsApp'tan netleştirilir).
// Metinler: lib/kargo-fermuar.ts. Sayfa başına tek kez kullanılır. Renkler çevre sayfadan miras alınır (koyu ve açık tema).
import { KARGO_FERMUAR, type KFLang } from '@/lib/kargo-fermuar';
import { waLink } from '@/lib/turist-keten';

export type KFVariant = 'abiye' | 'mont' | 'both';

export default function KargoFermuarKutusu({ lang, variant = 'both' }: { lang: KFLang; variant?: KFVariant }) {
  const c = KARGO_FERMUAR[lang];
  const items = variant === 'abiye' ? c.items.slice(0, 1) : variant === 'mont' ? c.items.slice(1, 2) : c.items;
  const rtl = lang === 'ar';
  return (
    <section
      aria-label={c.title}
      lang={lang}
      dir={rtl ? 'rtl' : 'ltr'}
      style={{ maxWidth: 820, margin: '1.6rem auto', padding: '1.3rem 1.25rem', border: '1px solid rgba(201,169,110,.55)', background: 'rgba(201,169,110,.10)', borderRadius: 8, color: 'inherit', lineHeight: 1.65 }}
    >
      <h2 style={{ fontSize: '1.2rem', margin: '0 0 .6rem', color: 'inherit' }}>📦 {c.title}</h2>
      <p style={{ margin: '0 0 .7rem' }}>{c.lead}</p>
      <ul style={{ margin: '0 0 .8rem', paddingInlineStart: '1.2rem' }}>{items.map((x) => <li key={x}>{x}</li>)}</ul>
      <ol style={{ margin: '0 0 .8rem', paddingInlineStart: '1.2rem' }}>{c.steps.map((x) => <li key={x}>{x}</li>)}</ol>
      <p style={{ margin: '0 0 .7rem' }}>{c.more}</p>
      <p style={{ margin: '0 0 .9rem', fontSize: '.88rem', opacity: .85 }}>{c.note}</p>
      <a href={waLink(c.wa)} target="_blank" rel="noopener noreferrer" style={{ background: '#15803d', color: '#fff', padding: '.7rem 1.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '.9rem', borderRadius: 4, display: 'inline-block' }}>
        💬 {c.cta}
      </a>
    </section>
  );
}
