// terzihizmeti.com.tr — "Evde ölçü nasıl alınır?" rehberi, 10 dilde tek sayfa. Veri: lib/olcu-rehberi.ts
import Link from 'next/link';
import type { Metadata } from 'next';
import { PHONE, PHONE_TEL, MAPS, SITE } from '@/lib/seo-data';
import { businessNode, OG_DEFAULT, waLink } from '@/lib/turist-keten';
import { OLCU, OLCU_SITE, OLCU_UPDATED, olcuUrl, olcuLanguages, OZEL_DIKIM_URL, type GLang } from '@/lib/olcu-rehberi';
import { kargoUrl } from '@/lib/kargo-terzi';
import OlcuFormu from '@/components/OlcuFormu';

const C = { green: '#2C4A3E', gold: '#D4B07A', cream: '#FAF7F2', sand: '#F2EDE4', ink: '#1C1814', muted: '#6B5F53' };
const serif = 'Georgia,serif';
const HOME: Record<GLang, string> = { tr: '/', en: '/en', ru: '/ru', de: '/de', es: '/es', fr: '/fr', pl: '/pl', uk: '/uk', nl: '/nl', ar: '/ar' };

export function olcuMetadata(lang: GLang): Metadata {
  const c = OLCU[lang]; const url = `${OLCU_SITE}${olcuUrl(lang)}`;
  return {
    metadataBase: new URL(SITE), title: { absolute: c.title }, description: c.desc,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: { canonical: url, languages: olcuLanguages() },
    openGraph: { title: c.h1, description: c.desc, url, siteName: 'Terzi Can', locale: c.locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: c.h1 }] },
    twitter: { card: 'summary_large_image', title: c.h1, description: c.desc, images: [OG_DEFAULT] },
    other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
  };
}

export function olcuJsonLd(lang: GLang) {
  const c = OLCU[lang]; const url = `${OLCU_SITE}${olcuUrl(lang)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode('en'),
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#kisa-cevap', 'h1'] }, dateModified: OLCU_UPDATED, about: { '@id': `${SITE}#business` }, primaryImageOfPage: { '@type': 'ImageObject', url: OG_DEFAULT } },
      // HowTo: adımlar sayfada görünür tabloda ve listelerde aynen yer alır.
      { '@type': 'HowTo', '@id': `${url}#howto`, name: c.h1, description: c.lead, inLanguage: lang,
        tool: c.tools.slice(0, 2).map((t) => ({ '@type': 'HowToTool', name: t })),
        step: c.rows.map(([n, where, tip], i) => ({ '@type': 'HowToStep', position: i + 1, name: n, text: `${where}. ${tip}.` })) },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: `${OLCU_SITE}${HOME[lang] === '/' ? '' : HOME[lang]}` },
        { '@type': 'ListItem', position: 2, name: c.crumb, item: url },
      ] },
    ],
  };
}

const H2 = ({ children }: { children: React.ReactNode }) => <h2 style={{ fontFamily: serif, fontSize: '1.35rem', color: C.ink, margin: '0 0 .8rem', lineHeight: 1.25 }}>{children}</h2>;
const List = ({ items, ordered }: { items: string[]; ordered?: boolean }) => {
  const Tag = ordered ? 'ol' : 'ul';
  return <Tag style={{ margin: 0, paddingInlineStart: '1.3rem' }}>{items.map((x) => <li key={x} style={{ marginBottom: '.3rem' }}>{x}</li>)}</Tag>;
};

export default function OlcuRehberiSayfasi({ lang }: { lang: GLang }) {
  const c = OLCU[lang];
  const wa = waLink(c.wa);
  return (
    <main lang={lang} dir={c.dir} style={{ fontFamily: 'system-ui,sans-serif', background: C.cream, color: '#3A3028', minHeight: '100vh', lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(olcuJsonLd(lang)) }} />
      <header style={{ background: C.green, padding: '3rem 1.25rem 2.4rem' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ margin: '0 0 .8rem', fontSize: '.85rem' }}><Link href={HOME[lang]} style={{ color: C.gold }}>{c.back}</Link></p>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(1.6rem,4.6vw,2.4rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', margin: '0 0 .9rem' }}>{c.h1}</h1>
          <div id="kisa-cevap">
            <p style={{ fontSize: '1.02rem', color: 'rgba(255,255,255,.92)', margin: '0 0 .9rem' }}>{c.lead}</p>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>
              <a href={wa} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>💬 WhatsApp <span dir="ltr">{PHONE}</span></a>{' · '}<a href={`tel:${PHONE_TEL}`} style={{ color: C.gold }} dir="ltr">☎ {PHONE}</a>
            </p>
          </div>
        </div>
      </header>
      <article style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.25rem' }}>
        <section style={{ marginBottom: '1.8rem' }}><H2>{c.toolsTitle}</H2><List items={c.tools} /></section>
        <section style={{ marginBottom: '1.8rem' }}><H2>{c.rulesTitle}</H2><List items={c.rules} ordered /></section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.tableTitle}</H2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.95rem', background: '#fff' }}>
              <thead><tr>{c.cols.map((h) => <th key={h} scope="col" style={{ textAlign: 'start', padding: '.6rem .7rem', background: C.sand, color: C.ink, borderBottom: '2px solid #D9CFC1' }}>{h}</th>)}</tr></thead>
              <tbody>{c.rows.map(([n, where, tip]) => (
                <tr key={n}>
                  <th scope="row" style={{ textAlign: 'start', padding: '.6rem .7rem', borderBottom: '1px solid #E6DDD0', color: C.ink, verticalAlign: 'top' }}>{n}</th>
                  <td style={{ padding: '.6rem .7rem', borderBottom: '1px solid #E6DDD0', verticalAlign: 'top' }}>{where}</td>
                  <td style={{ padding: '.6rem .7rem', borderBottom: '1px solid #E6DDD0', verticalAlign: 'top' }}>{tip}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </section>
        <section style={{ marginBottom: '1.8rem' }}>
          <h3 style={{ fontFamily: serif, fontSize: '1.15rem', color: C.ink, margin: '0 0 .5rem' }}>{c.womenTitle}</h3><List items={c.women} />
          <h3 style={{ fontFamily: serif, fontSize: '1.15rem', color: C.ink, margin: '1.2rem 0 .5rem' }}>{c.menTitle}</h3><List items={c.men} />
        </section>
        <section style={{ marginBottom: '1.8rem' }}><H2>{c.garmentTitle}</H2><List items={c.garment} ordered /></section>
        <section style={{ marginBottom: '1.8rem' }}><H2>{c.photoTitle}</H2><List items={c.photo} /></section>
        <section style={{ marginBottom: '1.8rem' }}><H2>{c.errorsTitle}</H2><List items={c.errors} /></section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.sendTitle}</H2>
          <p style={{ margin: '0 0 .8rem' }}>{c.sendText}</p>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#fff', border: '1px solid #D9CFC1', borderRadius: 6, padding: '.9rem', margin: 0, fontFamily: 'inherit', fontSize: '.95rem', color: C.ink }}>{c.template.join('\n')}</pre>
        </section>
        <section style={{ marginBottom: '1.8rem', background: C.sand, borderRadius: 8, padding: '1.3rem' }}>
          <H2>{c.form.title}</H2>
          <OlcuFormu copy={c} waDigits={PHONE_TEL.replace('+', '')} />
        </section>
        <section style={{ marginBottom: '1.8rem' }}><H2>{c.helpTitle}</H2><p style={{ margin: 0 }}>{c.help}</p></section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.faqTitle}</H2>
          {c.faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.02rem', color: C.ink, margin: '0 0 .25rem' }}>{q}</h3>
              <p style={{ margin: 0 }}>{a}</p>
            </div>
          ))}
        </section>
        <section style={{ background: C.sand, borderRadius: 8, padding: '1.3rem' }}>
          <p style={{ margin: '0 0 1rem' }}>
            <a href={wa} target="_blank" rel="noopener noreferrer" style={{ background: '#15803d', color: '#fff', padding: '.8rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '.92rem', borderRadius: 4, display: 'inline-block' }}>💬 {c.cta}</a>
          </p>
          <p style={{ margin: '0 0 .8rem', fontSize: '.92rem' }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: C.green }} dir="ltr">☎ {PHONE}</a>{' · '}<a href={MAPS} target="_blank" rel="noopener noreferrer" style={{ color: C.green }}>Google Maps</a>
          </p>
          <p style={{ margin: 0, fontSize: '.9rem' }}><strong>{c.hubTitle}:</strong>{' '}
            <Link href={OZEL_DIKIM_URL[lang]} style={{ color: C.green }}>{c.links.custom}</Link>{' · '}
            <Link href={kargoUrl(lang)} style={{ color: C.green }}>{c.links.online}</Link>{' · '}
            <Link href={HOME[lang]} style={{ color: C.green }}>{c.links.home}</Link>
          </p>
        </section>
      </article>
    </main>
  );
}
