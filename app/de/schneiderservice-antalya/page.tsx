import type { Metadata } from 'next';
import Image from 'next/image';

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/de/schneiderservice-antalya`;
const TR_URL    = `${SITE}/antalya-terzi`;
const EN_URL    = `${SITE}/en/tailor-service-antalya`;
const RU_URL    = `${SITE}/ru/uslugi-portnogo-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Hallo, ich möchte einen mobilen Schneider in mein Hotel/an meine Adresse bestellen. Mein Standort: ');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const TODAY     = new Date().toISOString().split('T')[0];
const OG        = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Schneiderservice Antalya · Mobiler Schneider ins Hotel · Alle Bezirke',
  description: 'Schneiderei, Reparatur, Änderungen und Bügelservice in allen Bezirken von Antalya. Mobiler Schneider kommt zu Ihrem Hotel oder Ihrer Adresse — Belek, Lara, Kemer, Alanya, Side, Konyaaltı. Wir sprechen Deutsch. ☎ ' + PHONE,
  keywords: [
    'Schneiderservice Antalya', 'mobiler Schneider Antalya', 'Schneider im Hotel Antalya',
    'deutschsprachiger Schneider Antalya', 'Kleidung reparieren Antalya', 'Änderungsschneiderei Antalya',
    'Hose kürzen Antalya', 'Bügelservice Antalya', 'Reinigung Antalya',
    'Schneider Belek Hotel', 'Schneider Lara Hotel', 'Schneider Kemer Hotel', 'Schneider Alanya Hotel',
    'Schneider Side Hotel', 'Schneider Konyaaltı', 'Brautkleid ändern Antalya',
    'Anzug schneidern Antalya', 'Reißverschluss reparieren Antalya',
  ],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { 'tr': TR_URL, 'en': EN_URL, 'ru': RU_URL, 'de': PAGE_URL, 'x-default': TR_URL },
  },
  openGraph: {
    title: 'Schneiderservice Antalya · Mobiler Schneider ins Hotel',
    description: 'Schneiderei, Reparatur, Änderungen und Bügelservice in allen Bezirken von Antalya. Wir kommen zu Ihnen.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'de_DE', alternateLocale: ['tr_TR'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Schneiderservice Antalya', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Schneiderservice Antalya — Mobiler Schneider', description: 'Wir kommen zu Ihrem Hotel in allen Bezirken von Antalya.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya', contact: PHONE },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: 'Schneiderservice Antalya — Mobiler Schneider, Reparatur, Änderungen, Bügelservice',
      description: 'Mobiler Schneiderservice in allen Bezirken von Antalya, Hotels und Adressen.',
      inLanguage: 'de', dateModified: TODAY,
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-desc', '#seo-intro', '#faq'] },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Schneiderservice Antalya', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: 'Mobiler Schneiderservice, Reparatur, Änderungen und Bügelservice',
      provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: SITE },
      areaServed: [
        'Konyaaltı', 'Muratpaşa', 'Kepez', 'Lara', 'Döşemealtı', 'Aksu', 'Belek', 'Kemer',
        'Serik', 'Manavgat', 'Side', 'Alanya', 'Gazipaşa', 'Kaş', 'Kalkan', 'Finike', 'Kumluca', 'Elmalı', 'Korkuteli',
      ].map((n) => ({ '@type': 'Place', name: n })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Schneiderei, Reparatur, Änderungen und Bügelservice',
        itemListElement: [
          { '@type': 'Offer', price: '150', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Kürzen' } },
          { '@type': 'Offer', price: '200', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Reißverschluss ersetzen' } },
          { '@type': 'Offer', price: '150', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Taille enger machen' } },
          { '@type': 'Offer', price: '400', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Braut- & Abendkleid ändern' } },
          { '@type': 'Offer', price: '80', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Bügeln' } },
          { '@type': 'Offer', price: '300', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Chemische Reinigung' } },
        ],
      },
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Kommen Sie zu Hotels in Belek, Lara und Kemer?', acceptedAnswer: { '@type': 'Answer', text: `Ja! Unser mobiler Schneider kommt zu allen Hotels in Belek, Lara, Kemer, Alanya und Side. Teilen Sie Ihren Hotelnamen per WhatsApp mit. WhatsApp: ${PHONE}` } },
        { '@type': 'Question', name: 'Ist der mobile Besuch kostenlos?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, in Konyaaltı, Muratpaşa, Kepez und Lara ist der Besuch völlig kostenlos. Für weiter entfernte Bezirke klären wir die Details vorher per WhatsApp.' } },
        { '@type': 'Question', name: 'Bieten Sie auch Bügelservice und chemische Reinigung an?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, professionelles Dampfbügeln und chemische Reinigung, mit Abholung und Lieferung zu Ihrem Hotel oder Ihrer Adresse.' } },
        { '@type': 'Question', name: 'Kann ich Änderungen am selben Tag bekommen?', acceptedAnswer: { '@type': 'Answer', text: `Ja, die meisten Reparaturen und Kürzungen werden am selben Tag oder innerhalb von 24 Stunden erledigt. WhatsApp: ${PHONE}` } },
        { '@type': 'Question', name: 'Sprechen Sie Deutsch?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, unser Team spricht Deutsch, Englisch, Russisch und Türkisch.' } },
      ],
    },
  ],
};

const PRIORITY_DISTRICTS = [
  { name: 'Konyaaltı', tag: 'Werkstatt', note: 'Hier ist unsere Werkstatt — Service am selben Tag' },
  { name: 'Muratpaşa', tag: 'Kostenlos', note: 'Kostenloser mobiler Besuch, Termin am selben Tag' },
  { name: 'Kepez', tag: 'Kostenlos', note: 'Kostenloser mobiler Besuch' },
  { name: 'Lara', tag: 'Kostenlos', note: 'Kostenloser mobiler Besuch — alle Hotels in Lara' },
  { name: 'Döşemealtı', tag: 'In der Nähe', note: 'Mobiler Besuch nach Termin' },
  { name: 'Aksu', tag: 'In der Nähe', note: 'Mobiler Besuch nach Termin' },
];

const OTHER_DISTRICTS = ['Belek', 'Kemer', 'Serik', 'Manavgat', 'Side', 'Alanya', 'Gazipaşa', 'Kaş', 'Kalkan', 'Finike', 'Kumluca', 'Elmalı', 'Korkuteli'];

const SERVICES = [
  { icon: '👔', tr: 'Herrenschneiderei', en: 'Hemden, Hosen, Anzüge', desc: 'Maßgeschneiderte Kleidung nach Ihren genauen Maßen.', items: ['Hemd', 'Hose', 'Sakko', 'Anzug', 'Bräutigamanzug'] },
  { icon: '👗', tr: 'Damenschneiderei', en: 'Kleider, Blusen, Röcke', desc: 'Individuelles Design und Maßanfertigung für jeden Anlass.', items: ['Kleid', 'Bluse', 'Rock', 'Abendkleid', 'Brautkleid'] },
  { icon: '🔧', tr: 'Kleidungsreparatur', en: 'Reißverschlüsse, Risse, Knöpfe', desc: 'Alltägliche Reparaturen — Reißverschlüsse, Risse, Knöpfe, Futter.', items: ['Reißverschluss ersetzen', 'Riss reparieren', 'Knopf reparieren', 'Futter ersetzen'] },
  { icon: '📏', tr: 'Änderungsschneiderei', en: 'Kürzen, enger machen', desc: 'Präzise Passform-Anpassungen für perfekten Sitz.', items: ['Kürzen', 'Taille enger machen', 'Ärmel kürzen', 'Kleid ändern'] },
  { icon: '🧺', tr: 'Bügelservice & Reinigung', en: 'Dampfbügeln, chemische Reinigung', desc: 'Professionelles Dampfbügeln und chemische Reinigung mit Abholung und Lieferung.', items: ['Bügeln', 'Chemische Reinigung', 'Waschen & Bügeln'] },
  { icon: '🚗', tr: 'Mobiler Service / Hotel', en: 'Wir kommen zu Ihnen', desc: 'Maßnehmen, Abholung und Lieferung in Ihrem Hotel oder an Ihrer Adresse.', items: ['Hotelbesuch', 'Hausbesuch', 'Kostenlose Abholung & Lieferung'] },
];

const REPAIR_CATEGORIES = [
  { icon: '✂️', title: 'Schneiderei', keyword: 'Maßschneiderei Antalya', desc: 'Maßanfertigung nach Ihren genauen Maßen.',
    rows: [['Herrenhemd', '₺350+'], ['Herrenhose', '₺400+'], ['Damenkleid', '₺600+'], ['Abendkleid', '₺900+'], ['Kinderkleidung', '₺250+']] as [string, string][] },
  { icon: '🔧', title: 'Reparatur', keyword: 'Kleidung reparieren Antalya', desc: 'Reißverschlüsse, Risse, Knöpfe — alltägliche Reparaturen.',
    rows: [['Reißverschluss (Hose)', '₺200+'], ['Reißverschluss (Mantel)', '₺300+'], ['Riss-/Nahtreparatur', '₺150+'], ['Knopf-, Hakenreparatur', '₺60+'], ['Futter ersetzen', '₺300+']] as [string, string][] },
  { icon: '📏', title: 'Änderungen', keyword: 'Hose kürzen Antalya', desc: 'Präzise Anpassung an Ihre Figur.',
    rows: [['Kürzen', '₺150+'], ['Taille enger machen', '₺150+'], ['Ärmel kürzen', '₺200+'], ['Kleid / Sakko ändern', '₺200+'], ['Braut- & Abendkleid', '₺400+']] as [string, string][] },
  { icon: '🧺', title: 'Bügeln & Reinigung', keyword: 'Bügelservice Reinigung Antalya', desc: 'Professionelles Dampfbügeln und chemische Reinigung.',
    rows: [['Bügeln (pro Stück)', '₺80+'], ['Reinigung (Kleid)', '₺300+'], ['Reinigung (Mantel)', '₺500+'], ['Waschen & Bügeln (pro kg)', '₺80+/kg']] as [string, string][] },
];

const FAQS: [string, string][] = [
  ['Kommen Sie zu Hotels in Belek, Lara und Kemer?', 'Ja! Unser mobiler Schneider besucht alle Hotels in Belek, Lara, Kemer, Alanya und Side. Teilen Sie einfach Ihren Hotelnamen per WhatsApp mit.'],
  ['Ist der mobile Besuch kostenlos?', 'Ja, in Konyaaltı, Muratpaşa, Kepez und Lara ist er völlig kostenlos. Für weiter entfernte Bezirke klären wir die Details zuerst per WhatsApp.'],
  ['Bieten Sie Bügelservice und chemische Reinigung an?', 'Ja — professionelles Dampfbügeln und chemische Reinigung, mit Abholung und Lieferung zu Ihrem Hotel oder Ihrer Adresse.'],
  ['Sind Änderungen am selben Tag vor einem Termin möglich?', 'Ja, die meisten Reparaturen und Kürzungen werden am selben Tag oder innerhalb von 24 Stunden erledigt.'],
  ['Bedienen Sie alle Bezirke von Antalya?', 'Ja — Konyaaltı, Muratpaşa, Kepez, Lara und Döşemealtı mit kostenlosem Besuch; Belek, Kemer, Side, Alanya, Manavgat und alle anderen Bezirke nach Terminvereinbarung.'],
  ['Sprechen Sie Deutsch?', 'Ja, unser Team spricht Deutsch, Englisch, Russisch und Türkisch.'],
];

const PROCESS_STEPS: [string, string, string][] = [
  ['01', 'Standort mitteilen', 'Senden Sie Hotelnamen oder Adresse per WhatsApp.'],
  ['02', 'Maßnehmen & Design', 'Wir nehmen an Ihrer Adresse Maß oder besprechen Design-Details.'],
  ['03', 'Schneidern / Reparatur', 'Die Arbeit wird in unserer Werkstatt in Konyaaltı ausgeführt.'],
  ['04', 'Lieferung', 'Kostenlose Lieferung in Prioritätsbezirke; nach Termin überall sonst in Antalya.'],
];

export default function SchneiderserviceAntalyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>

      <div style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: 'var(--font-inter), system-ui, sans-serif', lineHeight: 1.6, minHeight: '100vh' }}>

        <nav className="nav" aria-label="Hauptnavigation">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Startseite</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP <span aria-hidden="true">→</span></a>
        </nav>

        <header className="hero">
          <div className="hero-bg" aria-hidden="true">
            <Image src="/terzi-can-hero.jpg" alt="" fill priority fetchPriority="high" sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 15%', filter: 'brightness(.32) saturate(.75)' }} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📍 Alle Bezirke von Antalya · Hotel- & Hausbesuche</span>
            <span className="hero-eng">Schneiderservice Antalya</span>
            <h1 id="hero-h">Schneiderei, Reparatur & Änderungen<br /><span className="accent">direkt in Ihr Hotel</span></h1>
            <p className="hero-desc" id="hero-desc">
              Von unserer Werkstatt in Konyaaltı aus bedient Terzi Can jeden Bezirk von Antalya — Belek, Lara,
              Kemer, Alanya, Side und mehr. Schneiderei, Reparatur, Änderungen, Bügelservice und chemische
              Reinigung mit einem mobilen Schneider, der zu Ihrem Hotel oder Ihrer Adresse kommt.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span aria-hidden="true">💬</span> Standort senden <span aria-hidden="true">→</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary"><span aria-hidden="true">📞</span> {PHONE}</a>
            </div>
          </div>
        </header>

        <main id="main-content">
          <div className="seo-intro-wrap">
            <p className="seo-intro" id="seo-intro">
              <strong style={{ color: '#C9A96E' }}>Schneiderservice Antalya</strong> — Terzi Can bedient alle
              Bezirke von Antalya mit Schneiderei, Reparatur, Änderungen, Bügelservice und chemischer
              Reinigung. Unser mobiler Schneider besucht Hotels und Adressen in Belek, Lara, Kemer, Alanya,
              Side, Manavgat und jedem anderen Bezirk, zusätzlich zu unserer Werkstatt in Konyaaltı.
            </p>
          </div>

          <section className="sec" aria-labelledby="nb-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">📍 Bezirke von Antalya</span>
                <h2 className="sec-h" id="nb-h">Wir starten im Bezirk, der Ihnen am nächsten liegt</h2>
                <p className="sec-sub">Kostenlose mobile Besuche in Prioritätsbezirken; Terminbesuche überall sonst in Antalya.</p>
              </div>
              <ul className="nb-grid" aria-label="Prioritätsbezirke">
                {PRIORITY_DISTRICTS.map((n) => (
                  <li key={n.name} className={`nb-card${n.tag !== 'In der Nähe' ? ' priority' : ''}`}>
                    <div className="nb-top"><span className="nb-name">{n.name}</span><span className={`nb-tag ${n.tag !== 'In der Nähe' ? 'oncelikli' : 'yakin'}`}>{n.tag}</span></div>
                    <div className="nb-note">{n.note}</div>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', marginTop: '1rem', marginBottom: '.4rem' }}>
                Wir bedienen auch diese Bezirke von Antalya nach Terminvereinbarung:
              </p>
              <ul className="other-districts" aria-label="Weitere bediente Bezirke">
                {OTHER_DISTRICTS.map((d) => (<li key={d} className="od-chip">{d}</li>))}
              </ul>
            </div>
          </section>

          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="workshop" aria-labelledby="wk-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">Schneider- und Reparaturwerkstatt</span>
                <h2 className="sec-h" id="wk-h">Schneiderei · Reparatur · Änderungen · Bügelservice</h2>
                <p className="sec-sub">Eine voll ausgestattete Textilwerkstatt — von Maßanfertigung bis zur Reparatur am selben Tag.</p>
              </div>
              <div className="wk-grid">
                {SERVICES.map((s) => (
                  <article className="wk-card" key={s.tr}>
                    <div className="wk-icon" aria-hidden="true">{s.icon}</div>
                    <h3 className="wk-tr">{s.tr}</h3>
                    <span className="wk-en">{s.en}</span>
                    <p className="wk-desc">{s.desc}</p>
                    <ul className="wk-items" aria-label={`${s.tr} — Leistungsumfang`}>
                      {s.items.map((i) => <li key={i} className="wk-item">{i}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a href={WA('Hallo, ich möchte ein Angebot für Schneiderei/Reparatur/Änderungen.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span aria-hidden="true">💬</span> Angebot einholen <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          <section className="sec" id="fiyatlar" aria-labelledby="price-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">₺ Transparente Preise 2026</span>
                <h2 className="sec-h" id="price-h">Preise für Schneiderei, Reparatur, Änderungen & Bügelservice</h2>
                <p className="sec-sub">Senden Sie ein Foto per WhatsApp für ein genaues Angebot.</p>
              </div>
              <div className="price-grid">
                {REPAIR_CATEGORIES.map((cat) => (
                  <article className="price-card" key={cat.title}>
                    <div className="price-head">
                      <span className="price-icon" aria-hidden="true">{cat.icon}</span>
                      <div><h4 className="price-tr">{cat.title}</h4><span className="price-kw">{cat.keyword}</span></div>
                    </div>
                    <p className="price-desc">{cat.desc}</p>
                    <table className="price-table" aria-label={cat.title}>
                      <caption className="visually-hidden">{cat.title} Preisliste</caption>
                      <thead><tr><th scope="col" className="visually-hidden">Leistung</th><th scope="col" className="visually-hidden">Preis</th></tr></thead>
                      <tbody>{cat.rows.map((row) => (<tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td></tr>))}</tbody>
                    </table>
                  </article>
                ))}
              </div>
              <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1rem', fontStyle: 'italic' }}>
                Preise verstehen sich als Startpreise und können je nach Stoff und Aufwand variieren. Inkl. MwSt.
              </p>
              <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
                <a href={WA('Hallo, ich möchte Ihre Preise für Schneiderei/Reparatur/Bügelservice erfahren.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span aria-hidden="true">📲</span> Preis erfragen
                </a>
              </div>
            </div>
          </section>

          <section className="sec" aria-labelledby="proc-h">
            <div className="ctr">
              <div className="sec-head"><span className="eyebrow">Ablauf</span><h2 className="sec-h" id="proc-h">So funktioniert es</h2></div>
              <ol className="step-grid" aria-label="Ablaufschritte">
                {PROCESS_STEPS.map((step) => (
                  <li key={step[0]}><span className="step-n" aria-hidden="true">{step[0]}</span><div className="step-t">{step[1]}</div><div className="step-d">{step[2]}</div></li>
                ))}
              </ol>
            </div>
          </section>

          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="faq" aria-labelledby="faq-h">
            <div className="ctr" style={{ maxWidth: 740 }}>
              <div className="sec-head"><span className="eyebrow">FAQ</span><h2 className="sec-h" id="faq-h">Häufig gestellte Fragen</h2></div>
              {FAQS.map((item) => (
                <details key={item[0]} className="faq-item"><summary className="faq-q">{item[0]}</summary><p className="faq-a">{item[1]}</p></details>
              ))}
            </div>
          </section>
        </main>

        <section className="cta-final" aria-label="Kontakt aufnehmen">
          <h2 className="cta-h">Schneiderservice in jedem Bezirk<br />von Antalya — wir kommen zu Ihnen</h2>
          <p className="cta-sub">Hotel oder Heimadresse, Schneiderei oder Reparatur — teilen Sie einfach Ihren Standort mit.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white"><span aria-hidden="true">💬</span> Auf WhatsApp schreiben</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white"><span aria-hidden="true">📍</span> Google Maps</a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Schneiderservice Antalya · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer-Links">
            <a href="/">Ana Sayfa (TR)</a>
            <a href={EN_URL}>English</a>
            <a href={RU_URL}>Русский</a>
            <a href={TR_URL}>Türkçe — Konyaaltı Terzi</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
          <nav className="foot-links" aria-label="Hotelzonen">
            <a href="/de/schneiderservice-antalya-hotels/belek">Schneider in Belek</a>
            <a href="/de/schneiderservice-antalya-hotels/lara">Schneider in Lara</a>
            <a href="/de/schneiderservice-antalya-hotels/guzeloba">Schneider in Güzeloba</a>
            <a href="/de/schneiderservice-antalya-hotels/side">Schneider in Side</a>
          </nav>
          <p style={{ marginTop: '1rem', fontSize: '.68rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.8 }}>
            Schneiderservice Antalya — Schneiderei, Reparatur, Änderungen und Bügelservice in allen Bezirken
            von Antalya: Konyaaltı, Muratpaşa, Kepez, Lara, Belek, Kemer, Side, Alanya, Manavgat und mehr.
            Mobiler Schneider zu Ihrem Hotel oder Ihrer Adresse. {PHONE}
          </p>
        </footer>
      </div>
    </>
  );
}
