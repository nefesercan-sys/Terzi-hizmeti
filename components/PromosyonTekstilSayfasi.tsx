// components/PromosyonTekstilSayfasi.tsx
// Promosyon / reklam tekstili ve baskılı bez çanta imalatı — 10 dilde tek bileşen (veri: lib/promosyon-tekstil.ts).
// Anavera Tekstil sayfalarıyla aynı görsel dil (lacivert/altın), sunucu bileşeni, stil inline; örnek görseller (yapay zekâ ile üretilmiş, "örnek görsel" etiketli).
// RTL (ar): kök <div dir="rtl"> + mantıksal CSS özellikleri; telefon numarası dir="ltr".
import Link from 'next/link';
import { UDATA, uUrl } from '@/lib/uretim';
import {
  COPY, PHONE, PHONE_E, SITE, ANAVERA_TARGET, MAIN_TARGET, PLANGS, PROMO_PATH, PROMO_NAME,
  buildPromoJsonLd, waLink, PROMO_FOTOLAR, ORNEK_GORSEL, type PLang,
} from '@/lib/promosyon-tekstil';

const GOLD = '#C9A227';
const GOLD_L = '#E4C664';
const NAVY = '#0F172A';
const card = { backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 14, padding: '1.4rem' } as const;

function Head({ title, desc, dark }: { title: string; desc?: string; dark?: boolean }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, margin: '0 0 .6rem', color: dark ? '#FFFFFF' : NAVY }}>{title}</h2>
      {desc && <p style={{ color: dark ? '#CBD5E1' : '#475569', maxWidth: 680, margin: '0 auto', lineHeight: 1.7 }}>{desc}</p>}
    </div>
  );
}

export default function PromosyonTekstilSayfasi({ lang }: { lang: PLang }) {
  const c = COPY[lang];
  const wa = waLink(c.wa);
  const anavera = ANAVERA_TARGET[lang];
  const anaveraSuffix = anavera.lang === lang ? '' : ` (${anavera.lang.toUpperCase()})`;
  const mainPath = MAIN_TARGET[lang];

  return (
    <div lang={lang} dir={c.dir} style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#F8FAFC', color: NAVY, margin: 0, lineHeight: 1.6 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPromoJsonLd(lang)) }} />

      {/* ÜST ŞERİT: telefon + dil geçişi (gerçek, taranabilir bağlantılar) */}
      <div style={{ backgroundColor: '#020617', color: '#94A3B8', fontSize: '.8rem', padding: '.6rem 1rem', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.6rem' }}>
          <a href={`tel:${PHONE_E}`} dir="ltr" style={{ color: '#CBD5E1', textDecoration: 'none' }}>{PHONE}</a>
          <nav aria-label={c.ui.toolbarLangs} style={{ display: 'flex', gap: '.35rem .8rem', flexWrap: 'wrap' }}>
            {PLANGS.map((l) => (
              <Link key={l} href={PROMO_PATH[l]} hrefLang={COPY[l].hreflang} lang={COPY[l].hreflang}
                aria-current={l === lang ? 'page' : undefined}
                style={{ textDecoration: 'none', color: l === lang ? GOLD_L : '#94A3B8', fontWeight: l === lang ? 800 : 400 }}>{COPY[l].langName}</Link>
            ))}
          </nav>
        </div>
      </div>

      {/* BAŞLIK ŞERİDİ */}
      <header style={{ backgroundColor: NAVY, borderBottom: `2px solid ${GOLD}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div dir="ltr" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '.05em' }}>
            ANAVERA <span style={{ color: GOLD }}>TEKSTİL</span>
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: GOLD, color: NAVY, padding: '.6rem 1.2rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: '.9rem' }}>{c.cta}</a>
        </div>
      </header>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" style={{ maxWidth: 1200, margin: '0 auto', padding: '.9rem 1rem 0', fontSize: '.8rem', color: '#64748B' }}>
        <a href={SITE} style={{ color: '#64748B', textDecoration: 'none' }}>{c.ui.home}</a>
        <span style={{ margin: '0 .4rem' }}>/</span>
        <Link href={anavera.path} style={{ color: '#64748B', textDecoration: 'none' }}>Anavera Tekstil</Link>
        <span style={{ margin: '0 .4rem' }}>/</span>
        <span style={{ color: NAVY }}>{PROMO_NAME[lang]}</span>
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: '#FFFFFF', padding: '4rem 1rem', marginTop: '.9rem' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', border: '1px solid rgba(201,162,39,.5)', background: 'rgba(201,162,39,.12)', color: '#FDE047', padding: '.35rem 1rem', borderRadius: 30, fontSize: '.8rem', fontWeight: 700, marginBottom: '1.3rem' }}>{c.badge}</span>
          <h1 id="hero-h" style={{ fontSize: 'clamp(1.9rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 1.1rem' }}>{c.h1}</h1>
          <p className="hero-desc" style={{ color: '#CBD5E1', fontSize: '1.08rem', lineHeight: 1.75, margin: '0 auto 2rem', maxWidth: 740 }}>{c.lead}</p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#25D366', color: '#FFFFFF', padding: '.9rem 1.8rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>{c.cta}</a>
        </div>
      </section>

      {/* NELER ÜRETİYORUZ */}
      <section style={{ padding: '4.5rem 1rem 3rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Head title={c.makeTitle} desc={c.makeIntro} />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem' }}>
            {c.items.map(([name, desc], i) => (
              <li key={name} style={{ ...card, ...(i === 0 ? { borderTop: `3px solid ${GOLD}` } : {}) }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 .4rem' }}>{name}</h3>
                <p style={{ color: '#475569', fontSize: '.93rem', margin: 0 }}>{desc}</p>
              </li>
            ))}
          </ul>
          <p style={{ textAlign: 'center', color: '#475569', maxWidth: 680, margin: '1.8rem auto 0' }}>{c.makeMore}</p>
        </div>
      </section>

      {/* ÖRNEK GÖRSELLER (ürün adı = başlık, açıklama = figcaption; alt metin dilin kendisinde) */}
      <section aria-label={c.makeTitle} style={{ padding: '0 1rem 3.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.1rem' }}>
          {PROMO_FOTOLAR.map((f) => {
            const [name, desc] = c.items[f.idx];
            return (
              <figure key={f.src} style={{ margin: 0, ...card, padding: 0, overflow: 'hidden' }}>
                <img src={f.src} alt={`${name} (${ORNEK_GORSEL[lang]})`} title={name} width={1264} height={848} loading="lazy" decoding="async"
                  style={{ width: '100%', height: 'auto', aspectRatio: '3 / 2', objectFit: 'cover', display: 'block' }} />
                <figcaption style={{ padding: '1rem 1.2rem 1.2rem' }}>
                  <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '.25rem' }}>{name}</strong>
                  <span style={{ color: '#475569', fontSize: '.9rem' }}>{desc}</span>
                  <span style={{ display: 'block', color: '#94A3B8', fontSize: '.72rem', marginTop: '.4rem' }}>{ORNEK_GORSEL[lang]}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* BASKI VE LOGO TASARIMI */}
      <section style={{ padding: '3.5rem 1rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Head title={c.printTitle} desc={c.printText} />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '.7rem' }}>
            {c.printList.map((s) => (
              <li key={s} style={{ display: 'flex', gap: '.8rem', alignItems: 'flex-start', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '.85rem 1.1rem', color: '#334155' }}>
                <span aria-hidden="true" style={{ color: GOLD, fontWeight: 800 }}>✓</span><span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FUAR VE ORGANİZASYONLAR */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Head title={c.fairTitle} desc={c.fairText} />
        </div>
      </section>

      {/* SİPARİŞ NASIL İLERLER */}
      <section style={{ padding: '4rem 1rem', backgroundColor: NAVY }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Head title={c.flowTitle} desc={c.flowIntro} dark />
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem' }}>
            {c.steps.map(([title, desc], i) => (
              <li key={title} style={{ backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: 14, padding: '1.4rem' }}>
                <div dir="ltr" style={{ fontSize: '1.7rem', fontWeight: 800, color: GOLD }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, margin: '.3rem 0 .5rem' }}>{title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '.93rem', margin: 0 }}>{desc}</p>
              </li>
            ))}
          </ol>
          <p style={{ color: '#CBD5E1', textAlign: 'center', maxWidth: 700, margin: '1.8rem auto 0' }}>{c.flowNote}</p>
        </div>
      </section>

      {/* SSS */}
      <section style={{ padding: '4.5rem 1rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Head title={c.faqTitle} />
          <div style={{ display: 'grid', gap: '1rem' }}>
            {c.faq.map(([q, a]) => (
              <div key={q} style={{ ...card, padding: '1.2rem 1.4rem' }}>
                <h3 style={{ fontSize: '1.02rem', fontWeight: 800, margin: '0 0 .5rem' }}>{q}</h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '.95rem' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1rem', backgroundColor: NAVY, textAlign: 'center' }}>
        <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 800, margin: '0 0 .8rem' }}>{c.ctaTitle}</h2>
        <p style={{ color: '#CBD5E1', maxWidth: 620, margin: '0 auto 1.8rem' }}>{c.ctaText}</p>
        <a href={wa} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', backgroundColor: GOLD, color: NAVY, padding: '.95rem 2rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>{c.cta}</a>
      </section>

      {/* İLGİLİ SAYFALAR + İLETİŞİM */}
      <footer style={{ backgroundColor: '#020617', color: '#94A3B8', padding: '3rem 1rem 2rem', borderTop: `4px solid ${GOLD}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <div>
            <h2 style={{ color: '#F8FAFC', fontSize: '1.02rem', fontWeight: 800, margin: '0 0 .9rem' }}>{c.relTitle}</h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '.5rem', fontSize: '.92rem' }}>
              <li><Link href={anavera.path} hrefLang={anavera.lang} style={{ color: '#E2E8F0' }}>{c.relAnavera}{anaveraSuffix}</Link></li>
              <li><Link href={mainPath} style={{ color: '#E2E8F0' }}>{c.relMain}</Link></li>
              <li><Link href={uUrl(lang, 'uretici')} style={{ color: '#E2E8F0' }}>{UDATA[lang].uretici.h1}</Link></li>
              <li><Link href={uUrl(lang, 'gonderim')} style={{ color: '#E2E8F0' }}>{UDATA[lang].gonderim.h1}</Link></li>
            </ul>
          </div>
          <div>
            <h2 style={{ color: '#F8FAFC', fontSize: '1.02rem', fontWeight: 800, margin: '0 0 .9rem' }}>{c.ui.contact}</h2>
            <p style={{ fontSize: '.92rem', margin: '0 0 .5rem' }}>
              {c.ui.waLabel}: <a href={wa} target="_blank" rel="noopener noreferrer" dir="ltr" style={{ color: '#38BDF8', textDecoration: 'none' }}>{PHONE}</a>
            </p>
            <p style={{ fontSize: '.92rem', margin: 0 }}>
              {c.ui.call}: <a href={`tel:${PHONE_E}`} dir="ltr" style={{ color: '#38BDF8', textDecoration: 'none' }}>{PHONE}</a>
            </p>
          </div>
        </div>
        <div style={{ maxWidth: 1100, margin: '2rem auto 0', paddingTop: '1.2rem', borderTop: '1px solid #1E293B', textAlign: 'center', fontSize: '.85rem', color: '#475569' }}>
          <span dir="ltr">© {new Date().getFullYear()} {c.ui.rights} · terzihizmeti.com.tr</span>
        </div>
      </footer>
    </div>
  );
}
