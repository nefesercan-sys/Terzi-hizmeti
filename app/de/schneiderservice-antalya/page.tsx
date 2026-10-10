// app/de/schneiderservice-antalya/page.tsx
// DÜZELTME: Bu URL daha önce /de/schneider-service-hotel-antalya sayfasının neredeyse birebir
// kopyasıydı (214 satır, tek fark başlık) ve canonical'ı o sayfayı gösteriyordu. Böylece
// Almanca "genel terzi" sayfası fiilen yoktu. Artık EN/RU karşılıklarına denk, kendi
// içeriği ve kendi canonical'ı olan gerçek bir Almanca ana hizmet sayfası.
import type { Metadata } from 'next';

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/de/schneiderservice-antalya`;
const TR_URL    = `${SITE}/antalya-terzi`;
const EN_URL    = `${SITE}/en/tailor-service-antalya`;
const RU_URL    = `${SITE}/ru/uslugi-portnogo-antalya`;
const HOTEL_URL = `${SITE}/de/schneider-service-hotel-antalya`;
const PRICE_URL = `${SITE}/de/schneider-preise-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA        = (m: string) => `https://wa.me/905318986418?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Hallo, ich möchte ein Foto meines Kleidungsstücks senden und einen Preis erfahren.');
const WA_HOTEL  = WA('Hallo, ich möchte einen Schneider in mein Hotel in Antalya bestellen. Hotelname und Standort sende ich Ihnen.');
const MAPS      = 'https://www.google.com/maps?cid=5846987472659818117';
const LAST_MOD  = '2026-10-04';
const OG        = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: 'Schneider in Antalya: Änderungen, Reparatur, Maßanfertigung' },
  description:
    'Änderungsschneiderei in Antalya (Konyaaltı): Hose kürzen, Reißverschluss, Brautkleid, Maßanfertigung. Wir kommen ins Hotel. Deutsch gesprochen, täglich geöffnet.',
  keywords: [
    'Schneider Antalya', 'Änderungsschneiderei Antalya', 'Schneider Antalya Deutsch', 'Hose kürzen Antalya',
    'Reißverschluss Reparatur Antalya', 'Brautkleid ändern Antalya', 'Maßanfertigung Antalya',
    'mobiler Schneider Antalya', 'Schneider Konyaaltı', 'Kleidung reparieren Antalya', 'Schneider Sonntag geöffnet Antalya',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { tr: TR_URL, en: EN_URL, ru: RU_URL, de: PAGE_URL, 'x-default': TR_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    title: 'Schneider in Antalya: Änderungen, Reparatur, Maßanfertigung',
    description: 'Terzi Can in Konyaaltı: Änderungen, Reparaturen und Maßanfertigung. Wir kommen auch ins Hotel.',
    url: PAGE_URL, siteName: 'Terzi Can', locale: 'de_DE', type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Schneider in Antalya, Terzi Can' }],
  },
};

const SERVICES: { title: string; desc: string; rows: [string, string][] }[] = [
  { title: 'Änderungen', desc: 'Passform-Anpassungen, damit Kleidung genau sitzt.',
    rows: [['Hose kürzen', 'ab ₺150'], ['Taille enger machen', 'ab ₺150'], ['Ärmel kürzen', 'ab ₺200'], ['Kleid / Jacke anpassen', 'ab ₺200'], ['Brautkleid und Abendkleid', 'ab ₺800']] },
  { title: 'Reparatur', desc: 'Reißverschluss, Risse, Knöpfe und Futter.',
    rows: [['Reißverschluss (Hose)', 'ab ₺200'], ['Reißverschluss (Mantel)', 'ab ₺300'], ['Riss / Naht reparieren', 'ab ₺150'], ['Knopf, Haken', 'ab ₺60']] },
  { title: 'Maßanfertigung', desc: 'Kleidung nach Ihren Maßen, auch aus Leinen und Baumwolle.',
    rows: [['Herrenhemd', 'ab ₺350'], ['Herrenhose', 'ab ₺400'], ['Damenkleid', 'ab ₺600'], ['Abendkleid', 'ab ₺900'], ['Kinderkleidung', 'ab ₺250']] },
  { title: 'Bügeln und Reinigung', desc: 'Dampfbügeln und chemische Reinigung.',
    rows: [['Bügeln (pro Stück)', 'ab ₺80'], ['Reinigung (Kleid)', 'ab ₺300'], ['Reinigung (Mantel)', 'ab ₺500']] },
];

const FREE_DISTRICTS = ['Konyaaltı', 'Muratpaşa', 'Kepez', 'Lara'];
const OTHER_DISTRICTS = ['Belek', 'Kemer', 'Side', 'Serik', 'Manavgat', 'Alanya', 'Döşemealtı', 'Aksu'];

const STEPS: [string, string][] = [
  ['Foto senden', 'Senden Sie per WhatsApp ein Foto des Kleidungsstücks und der gewünschten Arbeit.'],
  ['Preis erfahren', 'Wir nennen Ihnen Preis und Bearbeitungszeit für die Arbeit.'],
  ['Termin oder Abholung', 'In der Werkstatt in Konyaaltı abgeben, oder Besuch im Hotel bzw. Abholung an Ihrer Adresse vereinbaren.'],
  ['Fertig zurück', 'Sie holen das Stück ab, oder wir liefern es ins Hotel bzw. an Ihre Adresse.'],
];

const FAQS: [string, string][] = [
  ['Gibt es in Antalya einen Schneider, der Deutsch spricht?', 'Ja. Das Team von Terzi Can spricht Deutsch, Englisch, Russisch und Türkisch. Am einfachsten schreiben Sie uns per WhatsApp.'],
  ['Kommt der Schneider ins Hotel?', 'Ja. Wir besuchen Hotels, zum Beispiel in Belek, Lara, Kemer und Side. Senden Sie Hotelname und Standort per WhatsApp. Details zum Hotelservice: ' + HOTEL_URL],
  ['Ist der Besuch kostenlos?', 'In Konyaaltı, Muratpaşa, Kepez und Lara ist der Besuch kostenlos. Für weiter entfernte Bezirke klären wir die Einzelheiten vorab per WhatsApp.'],
  ['Wie bekomme ich einen Preis, ohne vorbeizukommen?', 'Senden Sie ein Foto des Kleidungsstücks und der gewünschten Arbeit per WhatsApp. Wir nennen Preis und Bearbeitungszeit. Preisliste: ' + PRICE_URL],
  ['Wie schnell ist eine Änderung fertig?', 'Viele Reparaturen und das Kürzen von Hosen sind am selben Tag oder innerhalb von 24 Stunden fertig. Die genaue Zeit hängt von Arbeit und Auslastung ab und wird per WhatsApp bestätigt.'],
  ['Können Sie ein Brautkleid oder Abendkleid ändern?', 'Ja. Brautkleid- und Abendkleid-Änderungen gibt es ab ₺800, je nach Aufwand. Senden Sie am besten vorab Fotos.'],
  ['Haben Sie am Wochenende geöffnet?', 'Ja, die Werkstatt ist an sieben Tagen in der Woche geöffnet. Die aktuellen Zeiten stehen bei Google Maps.'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL, name: 'Schneider in Antalya', inLanguage: 'de',
      dateModified: LAST_MOD, isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`, serviceType: 'Änderungsschneiderei, Reparatur und Maßanfertigung',
      provider: { '@id': `${SITE}#business` }, areaServed: { '@type': 'City', name: 'Antalya' }, availableLanguage: ['de', 'en', 'ru', 'tr'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Schneiderleistungen in Antalya',
        itemListElement: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.desc } })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Schneider in Antalya', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
};

const wrap = { maxWidth: 1040, margin: '0 auto', padding: '0 1.25rem' } as const;
const card = { border: '1px solid rgba(128,128,128,.3)', borderRadius: 14, padding: '1.2rem', background: '#fff' } as const;
const btn = { display: 'inline-block', background: '#25D366', color: '#fff', fontWeight: 800, padding: '.8rem 1.5rem', borderRadius: 10, textDecoration: 'none' } as const;

export default function SchneiderserviceAntalya() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main lang="de" style={{ fontFamily: 'inherit', color: '#1f2a26', background: '#F7F5F0' }}>
        <nav aria-label="Breadcrumb" style={{ ...wrap, padding: '1rem 1.25rem 0', fontSize: '.8rem' }}>
          <a href={SITE} style={{ color: '#5c6b64' }}>Terzi Can</a> <span>›</span> <strong>Schneider in Antalya</strong>
        </nav>

        <section style={{ background: '#2C4A3E', color: '#fff', padding: '3rem 0', marginTop: '.8rem' }}>
          <div style={{ ...wrap, textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(1.8rem,4.5vw,2.7rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 1rem' }}>
              Schneider in Antalya: Änderungen, Reparatur, Maßanfertigung
            </h1>
            <p id="hero-desc" style={{ maxWidth: 720, margin: '0 auto 1.6rem', lineHeight: 1.7, fontSize: '1.05rem', opacity: .92 }}>
              Terzi Can ist eine Änderungsschneiderei in Hurma, Konyaaltı. Wir kürzen Hosen, wechseln Reißverschlüsse, ändern Brautkleider und
              fertigen nach Maß. Auf Wunsch kommen wir ins Hotel oder holen Ihre Kleidung ab. Wir sprechen Deutsch, Englisch, Russisch und Türkisch.
            </p>
            <div style={{ display: 'flex', gap: '.7rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" style={btn}>Foto senden, Preis erfahren</a>
              <a href={WA_HOTEL} target="_blank" rel="noopener noreferrer" style={{ ...btn, background: 'transparent', border: '1px solid rgba(255,255,255,.5)' }}>Schneider ins Hotel</a>
              <a href={`tel:${PHONE_TEL}`} style={{ ...btn, background: 'transparent', border: '1px solid rgba(255,255,255,.5)' }}>{PHONE}</a>
            </div>
          </div>
        </section>

        <section style={{ ...wrap, padding: '2.5rem 1.25rem 0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 1rem' }}>Leistungen und Richtpreise</h2>
          <p style={{ margin: '0 0 1.2rem', opacity: .8, fontSize: '.92rem' }}>Alle Preise sind Ab-Preise und hängen von Stoff und Aufwand ab. Stand: Oktober 2026.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1rem' }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={card}>
                <h3 style={{ margin: '0 0 .3rem', fontSize: '1.05rem' }}>{s.title}</h3>
                <p style={{ margin: '0 0 .8rem', fontSize: '.88rem', opacity: .8 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '.92rem' }}>
                  {s.rows.map(([n, p]) => (
                    <li key={n} style={{ display: 'flex', justifyContent: 'space-between', gap: '.6rem', padding: '.3rem 0', borderTop: '1px solid rgba(128,128,128,.2)' }}>
                      <span>{n}</span><strong style={{ whiteSpace: 'nowrap' }}>{p}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1rem', fontSize: '.92rem' }}>Die vollständige Liste: <a href={PRICE_URL}>Schneider-Preise Antalya</a></p>
        </section>

        <section style={{ ...wrap, padding: '2.5rem 1.25rem 0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 1rem' }}>So funktioniert es</h2>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
            {STEPS.map(([t, d], i) => (
              <li key={t} style={card}>
                <div style={{ fontWeight: 800, color: '#2C4A3E', fontSize: '1.3rem' }}>{i + 1}</div>
                <strong>{t}</strong>
                <p style={{ margin: '.3rem 0 0', fontSize: '.9rem', lineHeight: 1.55, opacity: .85 }}>{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section style={{ ...wrap, padding: '2.5rem 1.25rem 0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 1rem' }}>Einsatzgebiet in Antalya</h2>
          <div style={{ ...card }}>
            <p style={{ margin: '0 0 .6rem' }}><strong>Kostenloser Besuch:</strong> {FREE_DISTRICTS.join(', ')}</p>
            <p style={{ margin: '0 0 .6rem' }}><strong>Nach Absprache:</strong> {OTHER_DISTRICTS.join(', ')}</p>
            <p style={{ margin: 0, fontSize: '.9rem', opacity: .8 }}>
              Werkstatt: Hurma Mahallesi, 07130 Konyaaltı/Antalya. <a href={MAPS} target="_blank" rel="noopener noreferrer">Auf Google Maps ansehen</a>.
              Hotelbezirke im Detail: <a href={HOTEL_URL}>Schneider im Hotel</a>.
            </p>
          </div>
        </section>

        <section id="sss" style={{ ...wrap, padding: '2.5rem 1.25rem 0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 1rem' }}>Häufige Fragen</h2>
          <div style={{ display: 'grid', gap: '.8rem' }}>
            {FAQS.map(([q, a]) => (
              <details key={q} style={{ ...card, padding: '1rem 1.2rem' }}>
                <summary style={{ fontWeight: 700, cursor: 'pointer' }}>{q}</summary>
                <p style={{ margin: '.7rem 0 0', lineHeight: 1.65, fontSize: '.94rem' }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ ...wrap, padding: '2.5rem 1.25rem 3rem', textAlign: 'center' }}>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" style={btn}>Per WhatsApp starten</a>
          <p style={{ marginTop: '1rem', fontSize: '.85rem', opacity: .7 }}>
            Weitere Sprachen: <a href={TR_URL}>Türkçe</a> · <a href={EN_URL}>English</a> · <a href={RU_URL}>Русский</a>
          </p>
        </section>
      </main>
    </>
  );
}
