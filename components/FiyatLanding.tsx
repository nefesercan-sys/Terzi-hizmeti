// terzihizmeti.com.tr — fiyat sayfası (ES/FR/PL/UK/NL/AR). Veri: lib/intl-fiyat.ts. Sunucu bileşeni, stil inline.
import Link from 'next/link';
import { PHONE, PHONE_TEL, MAPS, SITE } from '@/lib/seo-data';
import { businessNode, OG_DEFAULT, waLink, TURIST_UPDATE } from '@/lib/turist-keten';
import { INTL, iUrl, type ILang } from '@/lib/intl';
import { FIYAT, FIYAT_KEYS, FIYAT_SPLIT, fiyatDeger, fiyatUrl } from '@/lib/intl-fiyat';
import { svcUrl } from '@/lib/intl-services';

const C = { green: '#2C4A3E', gold: '#D4B07A', cream: '#FAF7F2', sand: '#F2EDE4', ink: '#1C1814', muted: '#6B5F53', line: 'rgba(44,74,62,.15)' };
const serif = 'Georgia,serif';

export function fiyatJsonLd(lang: ILang) {
  const c = FIYAT[lang]; const url = `${SITE}${fiyatUrl(lang)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode('en'),
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang,
        dateModified: TURIST_UPDATE, about: { '@id': `${SITE}#business` }, primaryImageOfPage: { '@type': 'ImageObject', url: OG_DEFAULT },
        isPartOf: { '@id': `${SITE}${iUrl(lang)}#webpage` },
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };
}

export default function FiyatLanding({ lang }: { lang: ILang }) {
  const g = INTL[lang]; const c = FIYAT[lang];
  const Table = ({ title, from, to }: { title: string; from: number; to: number }) => (
    <section style={{ marginBottom: '1.8rem' }}>
      <H2>{title}</H2>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', border: `1px solid ${C.line}` }}>
        <tbody>
          {FIYAT_KEYS.slice(from, to).map((k, j) => (
            <tr key={k} style={{ borderTop: j ? `1px solid ${C.line}` : undefined }}>
              <td style={{ padding: '.6rem .9rem' }}>{c.rows[from + j]}</td>
              <td style={{ padding: '.6rem .9rem', fontWeight: 700, whiteSpace: 'nowrap', textAlign: 'end' }} dir="ltr">{fiyatDeger(from + j)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
  return (
    <main lang={lang} dir={g.dir} style={{ fontFamily: 'system-ui,sans-serif', background: C.cream, color: '#3A3028', minHeight: '100vh', lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fiyatJsonLd(lang)) }} />
      <header style={{ background: C.green, padding: '3rem 1.25rem 2.4rem' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ margin: '0 0 .8rem', fontSize: '.85rem' }}><Link href={iUrl(lang)} style={{ color: C.gold }}>{c.back}</Link></p>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(1.6rem,4.6vw,2.4rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', margin: '0 0 .9rem' }}>{c.h1}</h1>
          <p style={{ fontSize: '1.02rem', color: 'rgba(255,255,255,.92)', margin: 0 }}>{c.lead}</p>
        </div>
      </header>
      <article style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.25rem' }}>
        <Table title={c.t1} from={0} to={FIYAT_SPLIT} />
        <Table title={c.t2} from={FIYAT_SPLIT} to={FIYAT_KEYS.length} />
        <p style={{ margin: '0 0 1.8rem', color: C.muted, fontSize: '.95rem' }}>{c.note}</p>

        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.faqT}</H2>
          {c.faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.02rem', color: C.ink, margin: '0 0 .25rem' }}>{q}</h3>
              <p style={{ margin: 0 }}>{a}</p>
            </div>
          ))}
        </section>

        <section style={{ background: C.sand, borderRadius: 8, padding: '1.3rem' }}>
          <p style={{ margin: '0 0 1rem' }}>
            <a href={waLink(c.wa)} target="_blank" rel="noopener noreferrer"
              style={{ background: '#25d366', color: '#fff', padding: '.8rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '.92rem', borderRadius: 4, display: 'inline-block' }}>
              💬 {c.cta}
            </a>
          </p>
          <p style={{ margin: '0 0 .8rem', fontSize: '.92rem' }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: C.green }} dir="ltr">☎ {g.call}: {PHONE}</a>
            {' · '}<a href={MAPS} target="_blank" rel="noopener noreferrer" style={{ color: C.green }}>{g.mapLabel}</a>
            {' · '}{c.info}
          </p>
          <p style={{ margin: 0, fontSize: '.88rem' }}><Link href={svcUrl(lang)} style={{ color: C.green }}>{c.all}</Link></p>
        </section>
      </article>
    </main>
  );
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: serif, fontSize: '1.35rem', color: C.ink, margin: '0 0 .8rem', lineHeight: 1.25 }}>{children}</h2>
);
