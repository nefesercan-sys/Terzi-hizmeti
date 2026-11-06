// terzihizmeti.com.tr — "Fotoğrafla terzi / kargoyla terzi" hizmet sayfası, 10 dilde tek sayfa. Veri: lib/kargo-terzi.ts
import Link from 'next/link';
import type { Metadata } from 'next';
import { PHONE, PHONE_TEL, MAPS, SITE } from '@/lib/seo-data';
import { businessNode, OG_DEFAULT, waLink, TURIST_UPDATE } from '@/lib/turist-keten';
import { KARGO, kargoUrl, kargoLanguages, type KLang } from '@/lib/kargo-terzi';
import { SSS_LINKS, SSS_PATH } from '@/lib/sss-merkezi';
import { svcUrl } from '@/lib/intl-services';
import type { ILang } from '@/lib/intl';

const C = { green: '#2C4A3E', gold: '#D4B07A', cream: '#FAF7F2', sand: '#F2EDE4', ink: '#1C1814', muted: '#6B5F53' };
const serif = 'Georgia,serif';
const HOME: Record<KLang, string> = { tr: '/', en: '/en', ru: '/ru', de: '/de', es: '/es', fr: '/fr', pl: '/pl', uk: '/uk', nl: '/nl', ar: '/ar' };
const FOUR = ['tr', 'en', 'ru', 'de'] as const;
type Four = (typeof FOUR)[number];
const isFour = (l: KLang): l is Four => (FOUR as readonly string[]).includes(l);

export function kargoMetadata(lang: KLang): Metadata {
  const c = KARGO[lang]; const url = `${SITE}${kargoUrl(lang)}`;
  return {
    metadataBase: new URL(SITE), title: { absolute: c.title }, description: c.desc,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: { canonical: url, languages: kargoLanguages() },
    openGraph: { title: c.h1, description: c.desc, url, siteName: 'Terzi Can', locale: c.locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: c.h1 }] },
    twitter: { card: 'summary_large_image', title: c.h1, description: c.desc, images: [OG_DEFAULT] },
    other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
  };
}

export function kargoJsonLd(lang: KLang) {
  const c = KARGO[lang]; const url = `${SITE}${kargoUrl(lang)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode('en'),
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang, dateModified: TURIST_UPDATE, about: { '@id': `${SITE}#business` },
        primaryImageOfPage: { '@type': 'ImageObject', url: OG_DEFAULT } },
      { '@type': 'Service', '@id': `${url}#service`, name: c.h1, description: c.lead, provider: { '@id': `${SITE}#business` }, areaServed: { '@type': 'Place', name: 'Antalya' }, inLanguage: lang },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: `${SITE}${HOME[lang] === '/' ? '' : HOME[lang]}` },
        { '@type': 'ListItem', position: 2, name: c.crumb, item: url },
      ] },
    ],
  };
}

const H2 = ({ children }: { children: React.ReactNode }) => <h2 style={{ fontFamily: serif, fontSize: '1.35rem', color: C.ink, margin: '0 0 .8rem', lineHeight: 1.25 }}>{children}</h2>;

export default function KargoSayfasi({ lang }: { lang: KLang }) {
  const c = KARGO[lang];
  const links: [string, string][] = isFour(lang)
    ? [[SSS_LINKS.PRICES[lang], '₺'], [SSS_LINKS.HOTEL[lang], '🏨'], [SSS_PATH[lang], '?'], [SSS_LINKS.CONTACT[lang], '☎']]
    : [[svcUrl(lang as ILang), '•']];
  const linkText: Record<Four, string[]> = {
    tr: ['Fiyat listesi', 'Otele gelen terzi (Antalya)', 'Sık sorulan sorular', 'İletişim'],
    en: ['Price list', 'Hotel tailor (Antalya)', 'FAQ', 'Contact'],
    ru: ['Цены', 'Портной в отель (Анталья)', 'Частые вопросы', 'Контакты'],
    de: ['Preisliste', 'Schneider im Hotel (Antalya)', 'Häufige Fragen', 'Kontakt'],
  };
  const labels = isFour(lang) ? linkText[lang] : [c.hubTitle];
  return (
    <main lang={lang} dir={c.dir} style={{ fontFamily: 'system-ui,sans-serif', background: C.cream, color: '#3A3028', minHeight: '100vh', lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kargoJsonLd(lang)) }} />
      <header style={{ background: C.green, padding: '3rem 1.25rem 2.4rem' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ margin: '0 0 .8rem', fontSize: '.85rem' }}><Link href={HOME[lang]} style={{ color: C.gold }}>{c.back}</Link></p>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(1.6rem,4.6vw,2.4rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', margin: '0 0 .9rem' }}>{c.h1}</h1>
          <p style={{ fontSize: '1.02rem', color: 'rgba(255,255,255,.92)', margin: 0 }}>{c.lead}</p>
        </div>
      </header>
      <article style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.25rem' }}>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.mainTitle}</H2>
          <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>{c.main.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.pricesTitle}</H2>
          <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>{c.prices.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.stepsTitle}</H2>
          <ol style={{ margin: 0, paddingInlineStart: '1.4rem' }}>{c.steps.map((x) => <li key={x}>{x}</li>)}</ol>
          <h3 style={{ fontSize: '1.02rem', color: C.ink, margin: '1rem 0 .25rem' }}>{c.abroadTitle}</h3>
          <p style={{ margin: 0 }}>{c.abroad}</p>
        </section>
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
            <a href={waLink(c.wa)} target="_blank" rel="noopener noreferrer" style={{ background: '#15803d', color: '#fff', padding: '.8rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '.92rem', borderRadius: 4, display: 'inline-block' }}>💬 {c.cta}</a>
          </p>
          <p style={{ margin: '0 0 .8rem', fontSize: '.92rem' }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: C.green }} dir="ltr">☎ {PHONE}</a>{' · '}<a href={MAPS} target="_blank" rel="noopener noreferrer" style={{ color: C.green }}>Google Maps</a>
          </p>
          <p style={{ margin: 0, fontSize: '.9rem' }}><strong>{c.hubTitle}:</strong>{links.map(([h], i) => <span key={h}>{i ? ' · ' : ' '}<Link href={h} style={{ color: C.green }}>{labels[i]}</Link></span>)}</p>
        </section>
      </article>
    </main>
  );
}
