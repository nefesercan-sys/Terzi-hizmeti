// ============================================================
// terzihizmeti.com.tr — components/TuristKeten.tsx
// Turistlere yönelik EN/DE/RU keten & pamuk özel dikim sayfaları:
//   <TuristHub/>      hub sayfası
//   <TuristProduct/>  ürün alt sayfaları (gömlek, elbise, pantolon, ceket, çocuk)
//   <TuristExpress/>  ekspres tadilat sayfası
// Tüm metin/şema verisi lib/turist-keten.ts'te. Site Tailwind kullanmıyor → stil inline.
// Sunucu bileşeni (hook yok): içerik HTML olarak sunucuda render edilir.
// ============================================================
import OrnekGorselSeridi from '@/components/OrnekGorselSeridi';
import Link from 'next/link';
import { PHONE, SERVICES, serviceUrl, HOTEL_BASE } from '@/lib/seo-data';
import {
  ALT, EXPRESS_COPY, HUB_COPY, HUB_GALLERY, IMG, PRICES_PAGE, ANAVERA, PRODUCTS, PRODUCT_IDS, PRODUCT_IMGS, UI,
  expressJsonLd, expressUrl, hubJsonLd, hubUrl, productJsonLd, productUrl, waLink,
  type ImgKey, type ProductId, type TLang,
} from '@/lib/turist-keten';

const C = { green: '#2C4A3E', gold: '#D4B07A', cream: '#FAF7F2', sand: '#F2EDE4', ink: '#1C1814', muted: '#6B5F53', line: 'rgba(44,74,62,.15)' };
const serif = 'Georgia,serif';

function Img({ k, lang, ratio = '4 / 5', priority = false }: { k: ImgKey; lang: TLang; ratio?: string; priority?: boolean }) {
  const i = IMG[k];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={i.src} alt={ALT[k][lang]} width={i.w} height={i.h}
      loading={priority ? 'eager' : 'lazy'} decoding="async" {...(priority ? { fetchPriority: 'high' as const } : {})}
      style={{ width: '100%', height: '100%', aspectRatio: ratio, objectFit: 'cover', objectPosition: 'center 25%', display: 'block', borderRadius: 8 }}
    />
  );
}

function WaBtn({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ background: dark ? C.green : '#25d366', color: '#fff', padding: '.95rem 1.8rem', fontWeight: 700, textDecoration: 'none', fontSize: '.9rem', borderRadius: 4, display: 'inline-block' }}>
      💬 {children}
    </a>
  );
}

function Section({ bg, children, id }: { bg?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} style={{ background: bg || 'transparent', padding: '3rem 1.25rem' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: serif, fontSize: '1.5rem', color: C.ink, margin: '0 0 1.2rem', lineHeight: 1.25 }}>{children}</h2>
);

function Shell({ lang, children }: { lang: TLang; children: React.ReactNode }) {
  return (
    <main lang={lang} style={{ fontFamily: 'system-ui,sans-serif', background: C.cream, color: '#3A3028', minHeight: '100vh', lineHeight: 1.65 }}>
      {children}
    </main>
  );
}

function Hero({ lang, h1, sub, lead, img, waHref, cta }: { lang: TLang; h1: React.ReactNode; sub?: string; lead: string; img?: ImgKey; waHref: string; cta: string }) {
  const u = UI[lang];
  return (
    <section style={{ background: `linear-gradient(135deg,${C.green} 0%,#3E6656 100%)`, padding: '3.5rem 1.25rem 3rem' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: img ? 'repeat(auto-fit,minmax(300px,1fr))' : '1fr', gap: '2rem', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '.68rem', letterSpacing: '.22em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>{u.tag}</div>
          <h1 id="hero-h" style={{ fontFamily: serif, fontSize: 'clamp(1.8rem,5vw,3rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', marginBottom: '.8rem' }}>{h1}</h1>
          {sub && <p style={{ color: C.gold, fontStyle: 'italic', fontFamily: serif, fontSize: '1.05rem', marginBottom: '1rem' }}>{sub}</p>}
          <p className="hero-desc" style={{ fontSize: '1rem', color: 'rgba(255,255,255,.9)', maxWidth: 620, marginBottom: '1.6rem' }}>{lead}</p>
          <WaBtn href={waHref}>{cta}</WaBtn>
        </div>
        {img && <div><Img k={img} lang={lang} ratio="4 / 3" priority /></div>}
      </div>
    </section>
  );
}

function Glance({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <Section bg={C.sand}>
      <H2>{title}</H2>
      <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '.9rem', margin: 0 }}>
        {rows.map(([k, v]) => (
          <div key={k} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '1rem 1.1rem' }}>
            <dt style={{ fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase', color: C.green, fontWeight: 700, marginBottom: '.3rem' }}>{k}</dt>
            <dd style={{ margin: 0, fontSize: '.88rem', color: '#3A3028' }}>{v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Steps({ title, steps }: { title: string; steps: [string, string][] }) {
  return (
    <Section>
      <H2>{title}</H2>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '1rem' }}>
        {steps.map(([t, d], i) => (
          <li key={t} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '1.2rem 1.1rem' }}>
            <div style={{ fontFamily: serif, fontSize: '1.6rem', color: C.gold, lineHeight: 1 }}>{i + 1}</div>
            <div style={{ fontFamily: serif, fontSize: '1rem', color: C.green, margin: '.3rem 0' }}>{t}</div>
            <div style={{ fontSize: '.82rem', color: C.muted }}>{d}</div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Faq({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <Section bg={C.sand}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <H2>{title}</H2>
        {items.map(([q, a]) => (
          <details key={q} style={{ borderBottom: `1px solid ${C.line}`, padding: '.9rem 0' }}>
            <summary style={{ cursor: 'pointer', fontSize: '.95rem', fontWeight: 600, color: C.ink }}>{q}</summary>
            <p style={{ margin: '.6rem 0 0', fontSize: '.88rem', color: C.muted }}>{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function FinalCta({ lang, waHref }: { lang: TLang; waHref: string }) {
  const u = UI[lang];
  return (
    <section style={{ background: C.green, padding: '3rem 1.25rem', textAlign: 'center' }}>
      <h2 style={{ fontFamily: serif, fontSize: '1.6rem', color: '#fff', margin: '0 0 .6rem' }}>{u.ctaH}</h2>
      <p style={{ color: 'rgba(255,255,255,.85)', margin: '0 auto 1.4rem', maxWidth: 520, fontSize: '.92rem' }}>{u.ctaSub}</p>
      <WaBtn href={waHref}>{u.ctaBtn}</WaBtn>
      <p style={{ color: 'rgba(255,255,255,.6)', margin: '1.1rem 0 0', fontSize: '.78rem' }}>{u.ctaPhone}: {PHONE}</p>
    </section>
  );
}

function RelatedLinks({ lang, current }: { lang: TLang; current?: ProductId | 'express' | 'hub' }) {
  const u = UI[lang];
  const links: { href: string; label: string }[] = [];
  if (current !== 'hub') links.push({ href: hubUrl(lang), label: u.allProducts });
  PRODUCT_IDS.filter((p) => p !== current).forEach((p) => links.push({ href: productUrl(lang, p), label: PRODUCTS[p][lang].name }));
  if (current !== 'express') links.push({ href: expressUrl(lang), label: u.expressName });
  links.push({ href: PRICES_PAGE[lang], label: u.priceLink });
  links.push({ href: HOTEL_BASE[lang], label: u.hotelLink });
  return (
    <Section>
      <H2>{u.relatedH}</H2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} style={{ display: 'inline-block', padding: '.5rem .9rem', border: `1px solid ${C.line}`, borderRadius: 999, background: '#fff', color: C.green, fontSize: '.84rem', textDecoration: 'none' }}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

const Json = ({ data }: { data: unknown }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);

function Bullets({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '1.2rem 1.3rem' }}>
      <h3 style={{ fontFamily: serif, fontSize: '1.05rem', color: C.green, margin: '0 0 .6rem' }}>{title}</h3>
      <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '.88rem', color: '#3A3028' }}>
        {items.map((x) => <li key={x} style={{ margin: '.3rem 0' }}>{x}</li>)}
      </ul>
    </div>
  );
}

function Gallery({ lang, keys, title, note }: { lang: TLang; keys: ImgKey[]; title: string; note: string }) {
  return (
    <Section>
      <H2>{title}</H2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.8rem' }}>
        {keys.map((k) => <figure key={k} style={{ margin: 0 }}><Img k={k} lang={lang} /></figure>)}
      </div>
      <p style={{ fontSize: '.76rem', color: C.muted, margin: '.8rem 0 0' }}>{note}</p>
    </Section>
  );
}

// ───────────────────────── HUB ─────────────────────────
export function TuristHub({ lang }: { lang: TLang }) {
  const c = HUB_COPY[lang];
  const u = UI[lang];
  const wa = waLink(u.waGeneric);
  const g = u.glance, gl = u.glanceLabels;
  return (
    <Shell lang={lang}>
      <Json data={hubJsonLd(lang)} />
      <Hero lang={lang} h1={c.h1a} sub={c.h1b} lead={c.lead} img="family" waHref={wa} cta={u.ctaBtn} />
      <Glance title={u.glanceH} rows={[[gl.price, g.price], [gl.delivery, g.delivery], [gl.fabrics, g.fabrics], [gl.measure, g.measure], [gl.alter, g.alter], [gl.hours, g.hours]]} />

      <Section>
        <H2>{u.stylesH}</H2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem' }}>
          {PRODUCT_IDS.map((p) => {
            const pc = PRODUCTS[p][lang];
            return (
              <article key={p} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, overflow: 'hidden' }}>
                <Link href={productUrl(lang, p)} style={{ display: 'block' }}><Img k={PRODUCT_IMGS[p][0]} lang={lang} ratio="4 / 3" /></Link>
                <div style={{ padding: '1rem 1.1rem 1.2rem' }}>
                  <h3 style={{ fontFamily: serif, fontSize: '1.05rem', margin: '0 0 .3rem' }}>
                    <Link href={productUrl(lang, p)} style={{ color: C.ink, textDecoration: 'none' }}>{pc.name}</Link>
                  </h3>
                  <p style={{ fontSize: '.8rem', color: C.gold, fontWeight: 700, margin: '0 0 .4rem' }}>{u.fromPrice}</p>
                  <p style={{ fontSize: '.84rem', color: C.muted, margin: '0 0 .8rem' }}>{pc.styles.slice(0, 3).join(' · ')}</p>
                  <Link href={productUrl(lang, p)} style={{ color: C.green, fontWeight: 600, fontSize: '.84rem' }}>{u.seeMore} →</Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Steps title={u.stepsH} steps={u.steps} />

      <Section bg={C.sand}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.2rem' }}>
          <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '1.4rem' }}>
            <h2 style={{ fontFamily: serif, fontSize: '1.25rem', color: C.ink, margin: '0 0 .6rem' }}>{c.designH}</h2>
            <p style={{ margin: 0, fontSize: '.9rem', color: C.muted }}>{c.designP}</p>
          </div>
          <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '1.4rem' }}>
            <h2 style={{ fontFamily: serif, fontSize: '1.25rem', color: C.ink, margin: '0 0 .6rem' }}>{c.altH}</h2>
            <p style={{ margin: '0 0 .9rem', fontSize: '.9rem', color: C.muted }}>{c.altP}</p>
            <Link href={expressUrl(lang)} style={{ color: C.green, fontWeight: 700, fontSize: '.88rem' }}>{c.altBtn} →</Link>
          </div>
        </div>
      </Section>

      <Gallery lang={lang} keys={HUB_GALLERY} title={u.galleryH} note={u.galleryNote} />
      <Faq title={u.faqH} items={c.faq} />

      <Section>
        <p style={{ margin: 0, fontSize: '.88rem', color: C.muted }}>
          {u.b2b} <Link href={ANAVERA[lang]} style={{ color: C.green, fontWeight: 600 }}>{u.b2bLink}</Link>
        </p>
      </Section>

      <RelatedLinks lang={lang} current="hub" />
      <FinalCta lang={lang} waHref={wa} />
    </Shell>
  );
}

// ───────────────────────── ÜRÜN ─────────────────────────
export function TuristProduct({ lang, p }: { lang: TLang; p: ProductId }) {
  const c = PRODUCTS[p][lang];
  const u = UI[lang];
  const wa = waLink(u.waGeneric + c.name);
  const g = u.glance, gl = u.glanceLabels;
  const imgs = PRODUCT_IMGS[p];
  return (
    <Shell lang={lang}>
      <Json data={productJsonLd(lang, p)} />
      <Hero lang={lang} h1={c.h1} lead={c.lead} img={imgs[0]} waHref={wa} cta={u.quoteBtn} />
      <Glance title={u.glanceH} rows={[[gl.price, g.price], [gl.delivery, g.delivery], [gl.fabrics, g.fabrics], [gl.measure, g.measure]]} />

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.2rem' }}>
          <Bullets title={u.stylesH} items={c.styles} />
          <Bullets title={u.customH} items={c.custom} />
        </div>
      </Section>

      <Steps title={u.stepsH} steps={u.steps} />
      <Gallery lang={lang} keys={imgs.slice(1)} title={u.galleryH} note={u.galleryNote} />
      <Faq title={u.faqH} items={c.faq} />
      <RelatedLinks lang={lang} current={p} />
      <FinalCta lang={lang} waHref={wa} />
    </Shell>
  );
}

// ───────────────────────── EKSPRES TADİLAT ─────────────────────────
export function TuristExpress({ lang }: { lang: TLang }) {
  const c = EXPRESS_COPY[lang];
  const u = UI[lang];
  const wa = waLink(u.waExpress);
  const gl = c.glanceLabels, g = c.glance;
  const svcIds = ['paca', 'bel', 'fermuar', 'elbise-tamir', 'gomlek', 'takim'];
  const svcs = SERVICES.filter((s) => svcIds.includes(s.id));
  return (
    <Shell lang={lang}>
      <Json data={expressJsonLd(lang)} />
      <Hero lang={lang} h1={c.h1} lead={c.lead} img="green" waHref={wa} cta={u.ctaBtn} />
      <Glance title={u.glanceH} rows={[[gl.std, g.std], [gl.urgent, g.urgent], [gl.price, g.price], [gl.pickup, g.pickup]]} />

      <Section>
        <H2>{c.listH}</H2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.9rem' }}>
          {c.list.map(([t, d]) => (
            <li key={t} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '1rem 1.1rem' }}>
              <div style={{ fontFamily: serif, color: C.green, fontSize: '1rem', marginBottom: '.2rem' }}>{t}</div>
              <div style={{ fontSize: '.84rem', color: C.muted }}>{d}</div>
            </li>
          ))}
        </ul>
      </Section>

      <Steps title={c.urgentH} steps={c.urgentSteps} />
      <Section>
        <p style={{ margin: 0, fontSize: '.84rem', color: C.muted }}>{c.urgentNote}</p>
      </Section>

      <Section bg={C.sand}>
        <H2>{c.priceH}</H2>
        <p style={{ margin: '0 0 .8rem', fontSize: '.92rem', color: '#3A3028', maxWidth: 720 }}>{c.priceP}</p>
        <Link href={PRICES_PAGE[lang]} style={{ color: C.green, fontWeight: 600, fontSize: '.88rem' }}>{u.priceLink} →</Link>
      </Section>

      <Section>
        <H2>{u.relatedH}</H2>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.4rem', display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
          {svcs.map((s) => (
            <li key={s.id}>
              <Link href={serviceUrl(lang, s)} style={{ display: 'inline-block', padding: '.5rem .9rem', border: `1px solid ${C.line}`, borderRadius: 999, background: '#fff', color: C.green, fontSize: '.84rem', textDecoration: 'none' }}>{s.name[lang]}</Link>
            </li>
          ))}
        </ul>
        <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '1.2rem 1.3rem' }}>
          <h3 style={{ fontFamily: serif, fontSize: '1.1rem', color: C.ink, margin: '0 0 .4rem' }}>{c.customLink}</h3>
          <p style={{ margin: '0 0 .7rem', fontSize: '.88rem', color: C.muted }}>{c.customLinkP}</p>
          <Link href={hubUrl(lang)} style={{ color: C.green, fontWeight: 700, fontSize: '.88rem' }}>{u.allProducts} →</Link>
        </div>
      </Section>

      <OrnekGorselSeridi lang={lang} tema="acik" anahtarlar={['beyaz-gomlek-katli', 'palto-yaka-detay', 'pilili-etek']} />
      <Faq title={u.faqH} items={c.faq} />
      <RelatedLinks lang={lang} current="express" />
      <FinalCta lang={lang} waHref={wa} />
    </Shell>
  );
}

