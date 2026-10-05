'use client';
// ============================================================
// components/HizliEylem.tsx
// İki bileşen:
//  - <HizliEylemBandi />  sayfa üstünde ince, sticky OLMAYAN WhatsApp bandı (+ JSON-LD eylem/speakable)
//  - <HizliAkis />        sayfa sonunda 3 adımlı "Fotoğraf → Fiyat → Teslim" akışı
// Dil ve sayfaya özel WhatsApp mesajı pathname'den otomatik belirlenir.
// Anavera (B2B) sayfalarında ve tanınmayan rotalarda hiçbir şey çizmez.
// Site Tailwind kullanmadığı için tüm stil inline'dır.
// ============================================================
import { usePathname } from 'next/navigation';
import { getLang } from '@/lib/icerik-haritasi';
import { STEPS, VALUE_PROPS, pageWaMessage, waUrl, type Lang } from '@/lib/value-props';

const SITE = 'https://terzihizmeti.com.tr';

function useCtx(): { lang: Lang; path: string } | null {
  const path = usePathname() || '/';
  if (path.includes('anavera-tekstil')) return null;           // B2B sayfa: bireysel terzi bandı yok
  if (path === '/') return { lang: 'tr', path };
  const lang = getLang(path);
  return lang ? { lang, path } : null;
}

export function HizliEylemBandi() {
  const ctx = useCtx();
  if (!ctx) return null;
  const { lang, path } = ctx;
  const primary = VALUE_PROPS[lang][0];
  const msg = pageWaMessage(path, lang) ?? primary.waTemplate;
  const href = waUrl(msg);
  const pageUrl = `${SITE}${path === '/' ? '' : path}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // İşletme düğümüne yalnızca @id ile referans: tanımı sayfanın kendi şeması yapar, burada çelişki oluşmaz.
      {
        '@id': `${SITE}#business`,
        potentialAction: {
          '@type': 'CommunicateAction',
          name: primary.actionText,
          target: href,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#quick-actions`,
        url: pageUrl,
        inLanguage: lang,
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.hero-slogan', '#hizli-eylem'] },
      },
    ],
  };

  return (
    <div id="hizli-eylem" lang={lang} style={{ background: '#2C4A3E', color: '#fff', padding: '.55rem 1rem', fontFamily: 'inherit' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '.6rem 1rem', textAlign: 'center' }}>
        <span className="hero-slogan" style={{ fontSize: '.92rem', fontWeight: 700 }}>
          {primary.slogan}
        </span>
        <a href={href} target="_blank" rel="noopener noreferrer"
          style={{ background: '#25D366', color: '#fff', fontWeight: 800, fontSize: '.85rem', padding: '.4rem 1rem', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}>
          {primary.actionText}
        </a>
      </div>
    </div>
  );
}

export function HizliAkis() {
  const ctx = useCtx();
  if (!ctx) return null;
  const { lang, path } = ctx;
  const s = STEPS[lang];
  const href = waUrl(pageWaMessage(path, lang) ?? VALUE_PROPS[lang][0].waTemplate);
  const extra = VALUE_PROPS[lang].slice(1);

  return (
    <section aria-label={s.heading} lang={lang}
      style={{ maxWidth: 1040, margin: '0 auto', padding: '2.5rem 1.25rem 0', fontFamily: 'inherit' }}>
      <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 1rem' }}>{s.heading}</h2>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '.9rem' }}>
        {s.steps.map((st, i) => (
          <li key={st.title} style={{ border: '1px solid rgba(128,128,128,.3)', borderRadius: 12, padding: '1rem' }}>
            <div style={{ fontWeight: 800, color: '#2C4A3E', fontSize: '1.3rem' }}>{i + 1}</div>
            <div style={{ fontWeight: 700, margin: '.2rem 0 .3rem' }}>{st.title}</div>
            <div style={{ fontSize: '.88rem', lineHeight: 1.55, opacity: .85 }}>{st.desc}</div>
          </li>
        ))}
      </ol>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', marginTop: '1rem' }}>
        <a href={href} target="_blank" rel="noopener noreferrer"
          style={{ background: '#25D366', color: '#fff', fontWeight: 800, padding: '.6rem 1.2rem', borderRadius: 8, textDecoration: 'none' }}>
          {s.cta}
        </a>
        {extra.map((e) => (
          <a key={e.id} href={waUrl(e.waTemplate)} target="_blank" rel="noopener noreferrer"
            style={{ border: '1px solid rgba(128,128,128,.4)', color: 'inherit', fontWeight: 600, padding: '.6rem 1rem', borderRadius: 8, textDecoration: 'none', fontSize: '.9rem' }}>
            {e.actionText}
          </a>
        ))}
      </div>
    </section>
  );
}
