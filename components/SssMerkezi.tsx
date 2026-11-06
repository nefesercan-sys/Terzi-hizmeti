// components/SssMerkezi.tsx — Sık sorulan sorular merkez sayfası (TR/EN/RU/DE). Sunucu bileşeni.
// Görünen SSS ile FAQPage şeması AYNI diziden (lib/sss-merkezi.ts) üretilir.
import type { Metadata } from 'next';
import { SSS_ITEMS, SSS_LINKS, SSS_META, SSS_PATH, SSS_SITE, SSS_UPDATED, sssHreflang, type SssLang } from '@/lib/sss-merkezi';
import { BUSINESS_ID, PHONE_TEL } from '@/lib/seo-data';

const OG = `${SSS_SITE}/terzi-can-hero.jpg`;
const waUrl = (m: string) => `https://wa.me/${PHONE_TEL.replace('+', '')}?text=${encodeURIComponent(m)}`;

export function sssMetadata(lang: SssLang): Metadata {
  const m = SSS_META[lang];
  const url = `${SSS_SITE}${SSS_PATH[lang]}`;
  return {
    metadataBase: new URL(SSS_SITE),
    title: { absolute: m.title },
    description: m.description,
    alternates: { canonical: url, languages: sssHreflang() },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: { title: m.h1, description: m.description, url, siteName: 'Terzi Can', locale: m.locale, type: 'website', images: [{ url: OG, width: 1024, height: 1024, alt: m.h1 }] },
    twitter: { card: 'summary_large_image', title: m.h1, description: m.description, images: [OG] },
  };
}

export default function SssMerkezi({ lang }: { lang: SssLang }) {
  const m = SSS_META[lang];
  const items = SSS_ITEMS[lang];
  const url = `${SSS_SITE}${SSS_PATH[lang]}`;
  const wa = waUrl(m.wa);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: m.htmlLang, url,
        mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.h1, inLanguage: m.htmlLang, dateModified: SSS_UPDATED,
        about: { '@id': BUSINESS_ID }, mainEntity: { '@id': `${url}#faq` }, breadcrumb: { '@id': `${url}#breadcrumb` },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#kisa-cevap', '#sss'] },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: m.home, item: SSS_SITE },
          { '@type': 'ListItem', position: 2, name: m.crumb, item: url },
        ],
      },
    ],
  };
  const link = { color: '#0b5ed7', textDecoration: 'underline' } as const;
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '24px 16px 48px', lineHeight: 1.6 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <nav aria-label="breadcrumb" style={{ fontSize: 14, marginBottom: 12 }}>
        <a href="/" style={link}>{m.home}</a> <span>/</span> <span>{m.crumb}</span>
      </nav>
      <h1 style={{ fontSize: 28, lineHeight: 1.25, margin: '0 0 8px' }}>{m.h1}</h1>
      <p>{m.lead}</p>
      <p id="kisa-cevap" style={{ background: '#f1f7ff', border: '1px solid #cfe2ff', borderRadius: 8, padding: '12px 14px' }}>{m.short}</p>
      <p><a href={wa} rel="noopener" style={{ display: 'inline-block', background: '#16a34a', color: '#fff', padding: '10px 16px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>{m.cta}</a>{' '}
        <a href={`tel:${PHONE_TEL}`} style={link}>+90 531 898 64 18</a></p>
      <section id="sss" aria-label={m.crumb}>
        {items.map((it, i) => (
          <article key={i} style={{ margin: '18px 0' }}>
            <h2 style={{ fontSize: 18, margin: '0 0 4px' }}>{it.q}</h2>
            <p style={{ margin: 0 }}>{it.a}{it.href ? <> <a href={it.href} style={link}>{m.more} →</a></> : null}</p>
          </article>
        ))}
      </section>
      <p style={{ marginTop: 28 }}>
        <a href={SSS_LINKS.PRICES[lang]} style={link}>{m.prices}</a> · <a href={SSS_LINKS.SERV[lang]} style={link}>{m.services}</a> · <a href={SSS_LINKS.HOTEL[lang]} style={link}>{m.hotel}</a> · <a href={SSS_LINKS.CONTACT[lang]} style={link}>{m.contact}</a>
      </p>
    </main>
  );
}
