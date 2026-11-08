// terzihizmeti.com.tr — "Siparişe özel dikim, yurt dışına kargo" sayfası, 10 dilde tek sayfa. Veri: lib/ozel-siparis.ts
import Link from 'next/link';
import type { Metadata } from 'next';
import { PHONE, PHONE_TEL, MAPS, SITE } from '@/lib/seo-data';
import { businessNode, OG_DEFAULT, waLink } from '@/lib/turist-keten';
import { OZEL, OZEL_UPDATED, ozelUrl, ozelLanguages, type OLang } from '@/lib/ozel-siparis';
import { kargoUrl } from '@/lib/kargo-terzi';
import { topicUrl } from '@/lib/intl-topics';
import OzelSiparisForm from '@/components/OzelSiparisForm';
import type { ILang } from '@/lib/intl';

const C = { green: '#2C4A3E', gold: '#D4B07A', cream: '#FAF7F2', sand: '#F2EDE4', ink: '#1C1814' };
const serif = 'Georgia,serif';
const HOME: Record<OLang, string> = { tr: '/', en: '/en', ru: '/ru', de: '/de', es: '/es', fr: '/fr', pl: '/pl', uk: '/uk', nl: '/nl', ar: '/ar' };
const KETEN: Partial<Record<OLang, string>> = { tr: '/keten-pamuk-ozel-dikim', en: '/en/linen-cotton-tailoring', de: '/de/leinen-baumwolle-schneiderei', ru: '/ru/poshiv-lyon-hlopok' };
const LINK_TEXT: Record<OLang, [string, string]> = {
  tr: ['Online terzi servisi', 'Keten ve pamuk özel dikim'], en: ['Online tailor service', 'Linen & cotton tailoring'], ru: ['Онлайн-портной', 'Пошив из льна и хлопка'], de: ['Online-Schneiderservice', 'Leinen & Baumwolle nach Maß'],
  es: ['Sastre en línea', 'Lino y algodón a medida'], fr: ['Couturier en ligne', 'Lin et coton sur mesure'], pl: ['Krawiec online', 'Len i bawełna na miarę'], uk: ['Кравець онлайн', 'Льон і бавовна на замовлення'], nl: ['Online kleermaker', 'Linnen en katoen op maat'], ar: ['خياط أونلاين', 'تفصيل الكتان والقطن'],
};

export function ozelMetadata(lang: OLang): Metadata {
  const c = OZEL[lang]; const url = `${SITE}${ozelUrl(lang)}`;
  return {
    metadataBase: new URL(SITE), title: { absolute: c.title }, description: c.desc,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: { canonical: url, languages: ozelLanguages() },
    openGraph: { title: c.h1, description: c.desc, url, siteName: 'Terzi Can', locale: c.locale, type: 'website', images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: c.h1 }] },
    twitter: { card: 'summary_large_image', title: c.h1, description: c.desc, images: [OG_DEFAULT] },
    other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
  };
}

export function ozelJsonLd(lang: OLang) {
  const c = OZEL[lang]; const url = `${SITE}${ozelUrl(lang)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode('en'),
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#kisa-cevap', 'h1'] }, dateModified: OZEL_UPDATED, about: { '@id': `${SITE}#business` }, primaryImageOfPage: { '@type': 'ImageObject', url: OG_DEFAULT } },
      { '@type': 'Service', '@id': `${url}#service`, name: c.h1, serviceType: 'Made-to-order clothing', description: c.lead, provider: { '@id': `${SITE}#business` }, areaServed: [{ '@type': 'Place', name: 'Antalya' }, { '@type': 'Place', name: 'Abroad' }], inLanguage: lang,
        availableChannel: [{ '@type': 'ServiceChannel', name: 'WhatsApp', serviceUrl: waLink(c.wa), servicePhone: { '@type': 'ContactPoint', telephone: PHONE_TEL, contactType: 'customer service' }, availableLanguage: ['Turkish', 'English', 'Russian', 'German', 'Polish', 'Ukrainian', 'Dutch', 'French', 'Spanish', 'Arabic'] }] },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: `${SITE}${HOME[lang] === '/' ? '' : HOME[lang]}` },
        { '@type': 'ListItem', position: 2, name: c.crumb, item: url },
      ] },
    ],
  };
}

const H2 = ({ children }: { children: React.ReactNode }) => <h2 style={{ fontFamily: serif, fontSize: '1.35rem', color: C.ink, margin: '0 0 .8rem', lineHeight: 1.25 }}>{children}</h2>;

export default function OzelSiparisSayfasi({ lang }: { lang: OLang }) {
  const c = OZEL[lang];
  const t = LINK_TEXT[lang];
  const ketenHref = KETEN[lang] ?? topicUrl(lang as ILang, 'keten');
  return (
    <main lang={lang} dir={c.dir} style={{ fontFamily: 'system-ui,sans-serif', background: C.cream, color: '#3A3028', minHeight: '100vh', lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ozelJsonLd(lang)) }} />
      <header style={{ background: C.green, padding: '3rem 1.25rem 2.4rem' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ margin: '0 0 .8rem', fontSize: '.85rem' }}><Link href={HOME[lang]} style={{ color: C.gold }}>{c.back}</Link></p>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(1.6rem,4.6vw,2.4rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', margin: '0 0 .9rem' }}>{c.h1}</h1>
          <div id="kisa-cevap">
            <p style={{ fontSize: '1.02rem', color: 'rgba(255,255,255,.92)', margin: '0 0 .9rem' }}>{c.lead}</p>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>
              <a href={waLink(c.wa)} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>💬 WhatsApp <span dir="ltr">{PHONE}</span></a>{' · '}<a href={`tel:${PHONE_TEL}`} style={{ color: C.gold }} dir="ltr">☎ {PHONE}</a>
            </p>
          </div>
        </div>
      </header>
      <article style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.25rem' }}>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.whatTitle}</H2>
          <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>{c.what.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.howTitle}</H2>
          <ol style={{ margin: 0, paddingInlineStart: '1.4rem' }}>{c.steps.map((x) => <li key={x}>{x}</li>)}</ol>
        </section>
        <section id="talep-formu" style={{ marginBottom: '1.8rem' }}>
          <H2>{c.form.title}</H2>
          <OzelSiparisForm form={c.form} intro={c.wa} dir={c.dir} />
        </section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.priceTitle}</H2>
          <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>{c.price.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.shipTitle}</H2>
          <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>{c.ship.map((x) => <li key={x}>{x}</li>)}</ul>
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
          <p style={{ margin: 0, fontSize: '.9rem' }}><strong>{c.hubTitle}:</strong>{' '}
            <Link href={kargoUrl(lang)} style={{ color: C.green }}>{t[0]}</Link>{' · '}
            <Link href={ketenHref} style={{ color: C.green }}>{t[1]}</Link>
          </p>
        </section>
      </article>
    </main>
  );
}
