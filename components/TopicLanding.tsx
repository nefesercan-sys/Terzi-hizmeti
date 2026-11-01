// terzihizmeti.com.tr — konu sayfası (ES/FR/PL/UK/NL/AR): tamir-tadilat, özel dikim, keten-pamuk, tekstil üretimi. Veri: lib/intl-topics.ts.
import Link from 'next/link';
import { PHONE, PHONE_TEL, MAPS, SITE } from '@/lib/seo-data';
import { businessNode, OG_DEFAULT, waLink, TURIST_UPDATE } from '@/lib/turist-keten';
import { INTL, iUrl, type ILang } from '@/lib/intl';
import { svcUrl } from '@/lib/intl-services';
import { TOPICS, TOPIC_IDS, TOPIC_UI, topicUrl, type TopicId } from '@/lib/intl-topics';
import { HIZMET, HIZMET_IDS, hizmetUrl, type HizmetId } from '@/lib/intl-hizmet';

const C = { green: '#2C4A3E', gold: '#D4B07A', cream: '#FAF7F2', sand: '#F2EDE4', ink: '#1C1814', muted: '#6B5F53', line: 'rgba(44,74,62,.15)' };
const serif = 'Georgia,serif';

export function topicJsonLd(lang: ILang, t: TopicId | HizmetId, isHizmet = false) {
  const c = isHizmet ? HIZMET[lang][t as HizmetId] : TOPICS[lang][t as TopicId]; const url = `${SITE}${isHizmet ? hizmetUrl(lang, t as HizmetId) : topicUrl(lang, t as TopicId)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode('en'),
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang, dateModified: TURIST_UPDATE, about: { '@id': `${SITE}#business` },
        primaryImageOfPage: { '@type': 'ImageObject', url: OG_DEFAULT }, isPartOf: { '@id': `${SITE}${iUrl(lang)}#webpage` } },
      { '@type': 'Service', '@id': `${url}#service`, name: c.h1, provider: { '@id': `${SITE}#business` }, areaServed: [{ '@type': 'Place', name: 'Antalya' }, { '@type': 'Place', name: 'Worldwide (shipping)' }], inLanguage: lang },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  };
}

const H2 = ({ children }: { children: React.ReactNode }) => <h2 style={{ fontFamily: serif, fontSize: '1.35rem', color: C.ink, margin: '0 0 .8rem', lineHeight: 1.25 }}>{children}</h2>;

export default function TopicLanding({ lang, topic, hizmet }: { lang: ILang; topic?: TopicId; hizmet?: HizmetId }) {
  const g = INTL[lang]; const c = hizmet ? HIZMET[lang][hizmet] : TOPICS[lang][topic as TopicId]; const ui = TOPIC_UI[lang];
  return (
    <main lang={lang} dir={g.dir} style={{ fontFamily: 'system-ui,sans-serif', background: C.cream, color: '#3A3028', minHeight: '100vh', lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topicJsonLd(lang, (hizmet ?? topic) as TopicId | HizmetId, !!hizmet)) }} />
      <header style={{ background: C.green, padding: '3rem 1.25rem 2.4rem' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ margin: '0 0 .8rem', fontSize: '.85rem' }}><Link href={iUrl(lang)} style={{ color: C.gold }}>{ui.back}</Link></p>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(1.6rem,4.6vw,2.4rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', margin: '0 0 .9rem' }}>{c.h1}</h1>
          <p style={{ fontSize: '1.02rem', color: 'rgba(255,255,255,.92)', margin: 0 }}>{c.lead}</p>
        </div>
      </header>
      <article style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.25rem' }}>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.pointsTitle}</H2>
          <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>{c.points.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{ui.faqTitle}</H2>
          {c.faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.02rem', color: C.ink, margin: '0 0 .25rem' }}>{q}</h3>
              <p style={{ margin: 0 }}>{a}</p>
            </div>
          ))}
        </section>
        {(topic === 'tamir' || topic === 'ozel') && (
          <section style={{ marginBottom: '1.8rem' }}>
            <H2>{ui.moreTitle}</H2>
            <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>{HIZMET_IDS.map((h) => <li key={h}><Link href={hizmetUrl(lang, h)} style={{ color: C.green }}>{HIZMET[lang][h].name}</Link></li>)}</ul>
          </section>
        )}
        <section style={{ background: C.sand, borderRadius: 8, padding: '1.3rem' }}>
          <p style={{ margin: '0 0 1rem' }}>
            <a href={waLink(c.wa)} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '.8rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '.92rem', borderRadius: 4, display: 'inline-block' }}>💬 {ui.cta}</a>
          </p>
          <p style={{ margin: '0 0 .8rem', fontSize: '.92rem' }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: C.green }} dir="ltr">☎ {g.call}: {PHONE}</a>{' · '}<a href={MAPS} target="_blank" rel="noopener noreferrer" style={{ color: C.green }}>{g.mapLabel}</a>
          </p>
          <p style={{ margin: 0, fontSize: '.9rem' }}><strong>{ui.moreTitle}:</strong>{' '}
            <Link href={svcUrl(lang)} style={{ color: C.green }}>{ui.hubName}</Link>
            {TOPIC_IDS.filter((x) => x !== topic).map((x) => <span key={x}>{' · '}<Link href={topicUrl(lang, x)} style={{ color: C.green }}>{TOPICS[lang][x].h1}</Link></span>)}
          </p>
        </section>
      </article>
    </main>
  );
}
