import type { Metadata } from 'next';
import Image from 'next/image';

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/en/tailor-service-antalya`;
const TR_URL    = `${SITE}/antalya-terzi`;
const RU_URL    = `${SITE}/ru/uslugi-portnogo-antalya`;
const DE_URL    = `${SITE}/de/schneiderservice-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Hello, I would like a mobile tailor to come to my hotel/address. My location: ');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const TODAY     = new Date().toISOString().split('T')[0];
const OG        = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Tailor Service Antalya · Mobile Tailor to Your Hotel · All Districts',
  description: 'Tailoring, repair, alterations and ironing service across all Antalya districts. Mobile tailor comes to your hotel or address — Belek, Lara, Kemer, Alanya, Side, Konyaaltı. English speaking. ☎ ' + PHONE,
  keywords: [
    'tailor service Antalya', 'mobile tailor Antalya', 'hotel tailor Antalya',
    'English speaking tailor Antalya', 'clothing repair Antalya', 'alterations Antalya',
    'hemming Antalya', 'ironing service Antalya', 'dry cleaning Antalya',
    'Belek hotel tailor', 'Lara hotel tailor', 'Kemer hotel tailor', 'Alanya hotel tailor',
    'Side hotel tailor', 'Konyaaltı tailor', 'wedding dress alteration Antalya',
    'suit tailoring Antalya', 'zipper repair Antalya',
  ],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { 'tr': TR_URL, 'en': PAGE_URL, 'ru': RU_URL, 'de': DE_URL, 'x-default': TR_URL },
  },
  openGraph: {
    title: 'Tailor Service Antalya · Mobile Tailor to Your Hotel',
    description: 'Tailoring, repair, alterations and ironing across all Antalya districts. We come to you.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'en_US', alternateLocale: ['tr_TR'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Tailor Service Antalya', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Tailor Service Antalya — Mobile Tailor', description: 'We come to your hotel across all Antalya districts.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya', contact: PHONE },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: 'Tailor Service Antalya — Mobile Tailor, Repair, Alterations, Ironing',
      description: 'Mobile tailor service across all Antalya districts, hotels and addresses.',
      inLanguage: 'en', dateModified: TODAY,
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-desc', '#seo-intro', '#faq'] },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Tailor Service Antalya', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: 'Mobile Tailoring, Repair, Alterations and Ironing Service',
      provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: SITE },
      areaServed: [
        'Konyaaltı', 'Muratpaşa', 'Kepez', 'Lara', 'Döşemealtı', 'Aksu', 'Belek', 'Kemer',
        'Serik', 'Manavgat', 'Side', 'Alanya', 'Gazipaşa', 'Kaş', 'Kalkan', 'Finike', 'Kumluca', 'Elmalı', 'Korkuteli',
      ].map((n) => ({ '@type': 'Place', name: n })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Tailoring, Repair, Alterations and Ironing',
        itemListElement: [
          { '@type': 'Offer', price: '150', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Hemming' } },
          { '@type': 'Offer', price: '200', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Zipper Replacement' } },
          { '@type': 'Offer', price: '150', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Waist Taking In' } },
          { '@type': 'Offer', price: '400', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Wedding & Evening Dress Alterations' } },
          { '@type': 'Offer', price: '80', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Ironing' } },
          { '@type': 'Offer', price: '300', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Dry Cleaning' } },
        ],
      },
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Do you come to hotels in Belek, Lara and Kemer?', acceptedAnswer: { '@type': 'Answer', text: `Yes! Our mobile tailor comes to all hotels in Belek, Lara, Kemer, Alanya and Side. Share your hotel name on WhatsApp. WhatsApp: ${PHONE}` } },
        { '@type': 'Question', name: 'Is the mobile visit free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the visit itself is free in Konyaaltı, Muratpaşa, Kepez and Lara. For further districts a small travel arrangement is confirmed on WhatsApp beforehand.' } },
        { '@type': 'Question', name: 'Do you offer ironing and dry cleaning too?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, professional steam ironing and dry cleaning, with pickup and delivery to your hotel or address.' } },
        { '@type': 'Question', name: 'Can I get same-day alterations?', acceptedAnswer: { '@type': 'Answer', text: `Yes, most repairs and hemming are completed the same day or within 24 hours. WhatsApp: ${PHONE}` } },
        { '@type': 'Question', name: 'Do you speak English?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our team speaks English, Russian, German and Turkish.' } },
      ],
    },
  ],
};

const PRIORITY_DISTRICTS = [
  { name: 'Konyaaltı', tag: 'Workshop', note: 'Our workshop is here — same-day service' },
  { name: 'Muratpaşa', tag: 'Free visit', note: 'Free mobile visit, same-day appointment' },
  { name: 'Kepez', tag: 'Free visit', note: 'Free mobile visit' },
  { name: 'Lara', tag: 'Free visit', note: 'Free mobile visit — all Lara hotels' },
  { name: 'Döşemealtı', tag: 'Nearby', note: 'Scheduled mobile visit' },
  { name: 'Aksu', tag: 'Nearby', note: 'Scheduled mobile visit' },
];

const OTHER_DISTRICTS = ['Belek', 'Kemer', 'Serik', 'Manavgat', 'Side', 'Alanya', 'Gazipaşa', 'Kaş', 'Kalkan', 'Finike', 'Kumluca', 'Elmalı', 'Korkuteli'];

const SERVICES = [
  { icon: '👔', tr: "Men's Tailoring", en: 'Shirts, trousers, jackets, suits', desc: 'Custom-fit garments made from scratch, to your exact measurements.', items: ['Shirt', 'Trousers', 'Jacket', 'Suit', 'Groom Suit'] },
  { icon: '👗', tr: "Women's Tailoring", en: 'Dresses, blouses, skirts, gowns', desc: 'Custom design and made-to-measure sewing for any occasion.', items: ['Dress', 'Blouse', 'Skirt', 'Evening Gown', 'Wedding Dress'] },
  { icon: '🔧', tr: 'Clothing Repair', en: 'Zippers, tears, buttons', desc: 'Everyday repairs — zippers, torn seams, buttons, hooks, lining.', items: ['Zipper Replacement', 'Tear Repair', 'Button Repair', 'Lining Replacement'] },
  { icon: '📏', tr: 'Alterations', en: 'Hemming, taking in, resizing', desc: 'Precise fit adjustments so clothing sits exactly right.', items: ['Hemming', 'Waist Taking In', 'Sleeve Shortening', 'Dress Resizing'] },
  { icon: '🧺', tr: 'Ironing & Dry Cleaning', en: 'Steam ironing, dry cleaning', desc: 'Professional steam ironing and dry cleaning, picked up and delivered.', items: ['Ironing', 'Dry Cleaning', 'Laundry & Ironing'] },
  { icon: '🚗', tr: 'Mobile / Hotel Service', en: 'We come to you', desc: 'Measurement, collection and delivery at your hotel or address.', items: ['Hotel Visit', 'Home Visit', 'Free Pickup & Delivery'] },
];

const REPAIR_CATEGORIES = [
  { icon: '✂️', title: 'Tailoring', keyword: 'custom tailoring Antalya', desc: 'Made-from-scratch garments to your exact measurements.',
    rows: [["Men's Shirt", '₺350+'], ["Men's Trousers", '₺400+'], ["Women's Dress", '₺600+'], ['Evening Gown', '₺900+'], ["Children's Clothing", '₺250+']] as [string, string][] },
  { icon: '🔧', title: 'Repair', keyword: 'clothing repair Antalya', desc: 'Zippers, tears, buttons — everyday fixes.',
    rows: [['Zipper Replacement (Trousers)', '₺200+'], ['Zipper Replacement (Coat)', '₺300+'], ['Tear / Seam Repair', '₺150+'], ['Button, Hook Repair', '₺60+'], ['Lining Replacement', '₺300+']] as [string, string][] },
  { icon: '📏', title: 'Alterations', keyword: 'hemming Antalya', desc: 'Precise fit adjustments to your body.',
    rows: [['Hemming', '₺150+'], ['Waist Taking In', '₺150+'], ['Sleeve Shortening', '₺200+'], ['Dress / Jacket Resizing', '₺200+'], ['Wedding & Evening Dress', '₺400+']] as [string, string][] },
  { icon: '🧺', title: 'Ironing & Dry Cleaning', keyword: 'ironing dry cleaning Antalya', desc: 'Professional steam ironing and dry cleaning.',
    rows: [['Ironing (per item)', '₺80+'], ['Dry Cleaning (Dress)', '₺300+'], ['Dry Cleaning (Coat)', '₺500+'], ['Laundry & Ironing (per kg)', '₺80+/kg']] as [string, string][] },
];

const FAQS: [string, string][] = [
  ['Do you come to hotels in Belek, Lara and Kemer?', 'Yes! Our mobile tailor visits all hotels in Belek, Lara, Kemer, Alanya and Side. Just share your hotel name on WhatsApp.'],
  ['Is the mobile visit free?', 'Yes, completely free in Konyaaltı, Muratpaşa, Kepez and Lara. For farther districts we confirm details on WhatsApp first.'],
  ['Do you offer ironing and dry cleaning?', 'Yes — professional steam ironing and dry cleaning, with pickup and delivery to your hotel or address.'],
  ['Can I get same-day alterations before an event?', 'Yes, most repairs and hemming are completed the same day or within 24 hours.'],
  ['Do you serve all Antalya districts?', 'Yes — Konyaaltı, Muratpaşa, Kepez, Lara and Döşemealtı with free visits; Belek, Kemer, Side, Alanya, Manavgat and all other districts by scheduled appointment.'],
  ['Do you speak English?', 'Yes, our team speaks English, Russian, German and Turkish.'],
];

const PROCESS_STEPS: [string, string, string][] = [
  ['01', 'Share Your Location', 'Send your hotel name or address on WhatsApp.'],
  ['02', 'Measurement & Design', 'We take measurements at your address, or discuss design details.'],
  ['03', 'Tailoring / Repair', 'The work is completed at our Konyaaltı workshop.'],
  ['04', 'Delivery', 'Free delivery to priority districts; scheduled delivery everywhere else in Antalya.'],
];

export default function TailorServiceAntalyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <a href="#main-content" className="skip-link">Skip to content</a>

      <div style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: 'var(--font-inter), system-ui, sans-serif', lineHeight: 1.6, minHeight: '100vh' }}>

        <nav className="nav" aria-label="Main site navigation">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Home</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP <span aria-hidden="true">→</span></a>
        </nav>

        <header className="hero">
          <div className="hero-bg" aria-hidden="true">
            <Image src="/terzi-can-hero.jpg" alt="" fill priority fetchPriority="high" sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 15%', filter: 'brightness(.32) saturate(.75)' }} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📍 All Antalya Districts · Hotel & Address Visits</span>
            <span className="hero-eng">Antalya Tailor Service</span>
            <h1 id="hero-h">
              Tailor, Repair & Alterations<br /><span className="accent">Delivered to Your Hotel</span>
            </h1>
            <p className="hero-desc" id="hero-desc">
              From our Konyaaltı workshop, Terzi Can serves every district of Antalya — Belek, Lara, Kemer,
              Alanya, Side and beyond. Tailoring, repair, alterations, ironing and dry cleaning, with a mobile
              tailor who comes to your hotel or address.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span aria-hidden="true">💬</span> Share Your Location <span aria-hidden="true">→</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary"><span aria-hidden="true">📞</span> {PHONE}</a>
            </div>
          </div>
        </header>

        <main id="main-content">
          <div className="seo-intro-wrap">
            <p className="seo-intro" id="seo-intro">
              <strong style={{ color: '#C9A96E' }}>Antalya Tailor Service</strong> — Terzi Can serves all
              districts of Antalya with tailoring, repair, alterations, ironing and dry cleaning. Our mobile
              tailor visits hotels and addresses in Belek, Lara, Kemer, Alanya, Side, Manavgat and every other
              district, in addition to our Konyaaltı workshop.
            </p>
          </div>

          <section className="sec" aria-labelledby="nb-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">📍 Antalya Districts</span>
                <h2 className="sec-h" id="nb-h">We Start From the District Closest to You</h2>
                <p className="sec-sub">Free mobile visits in priority districts; scheduled visits everywhere else in Antalya.</p>
              </div>
              <ul className="nb-grid" aria-label="Priority districts">
                {PRIORITY_DISTRICTS.map((n) => (
                  <li key={n.name} className={`nb-card${n.tag !== 'Nearby' ? ' priority' : ''}`}>
                    <div className="nb-top">
                      <span className="nb-name">{n.name}</span>
                      <span className={`nb-tag ${n.tag !== 'Nearby' ? 'oncelikli' : 'yakin'}`}>{n.tag}</span>
                    </div>
                    <div className="nb-note">{n.note}</div>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', marginTop: '1rem', marginBottom: '.4rem' }}>
                We also serve these Antalya districts by scheduled hotel/address visit:
              </p>
              <ul className="other-districts" aria-label="Other districts served">
                {OTHER_DISTRICTS.map((d) => (<li key={d} className="od-chip">{d}</li>))}
              </ul>
            </div>
          </section>

          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="workshop" aria-labelledby="wk-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">Tailoring & Repair Workshop</span>
                <h2 className="sec-h" id="wk-h">Tailoring · Repair · Alterations · Ironing</h2>
                <p className="sec-sub">A full-capacity textile workshop, from custom garments to same-day repairs.</p>
              </div>
              <div className="wk-grid">
                {SERVICES.map((s) => (
                  <article className="wk-card" key={s.tr}>
                    <div className="wk-icon" aria-hidden="true">{s.icon}</div>
                    <h3 className="wk-tr">{s.tr}</h3>
                    <span className="wk-en">{s.en}</span>
                    <p className="wk-desc">{s.desc}</p>
                    <ul className="wk-items" aria-label={`${s.tr} scope`}>
                      {s.items.map((i) => <li key={i} className="wk-item">{i}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a href={WA('Hello, I would like a quote for tailoring/repair/alterations.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span aria-hidden="true">💬</span> Get a Quote <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          <section className="sec" id="fiyatlar" aria-labelledby="price-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">₺ Transparent Prices 2026</span>
                <h2 className="sec-h" id="price-h">Tailoring, Repair, Alterations & Ironing Prices</h2>
                <p className="sec-sub">Send a photo on WhatsApp for an exact quote.</p>
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
                      <caption className="visually-hidden">{cat.title} price list</caption>
                      <thead><tr><th scope="col" className="visually-hidden">Service</th><th scope="col" className="visually-hidden">Price</th></tr></thead>
                      <tbody>{cat.rows.map((row) => (<tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td></tr>))}</tbody>
                    </table>
                  </article>
                ))}
              </div>
              <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1rem', fontStyle: 'italic' }}>
                Prices are starting prices and may vary by fabric and workmanship. VAT included.
              </p>
              <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
                <a href={WA('Hello, I would like to know your tailoring/repair/ironing prices.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span aria-hidden="true">📲</span> Ask for a Price
                </a>
              </div>
            </div>
          </section>

          <section className="sec" aria-labelledby="proc-h">
            <div className="ctr">
              <div className="sec-head"><span className="eyebrow">Process</span><h2 className="sec-h" id="proc-h">How It Works</h2></div>
              <ol className="step-grid" aria-label="Service process steps">
                {PROCESS_STEPS.map((step) => (
                  <li key={step[0]}><span className="step-n" aria-hidden="true">{step[0]}</span><div className="step-t">{step[1]}</div><div className="step-d">{step[2]}</div></li>
                ))}
              </ol>
            </div>
          </section>

          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="faq" aria-labelledby="faq-h">
            <div className="ctr" style={{ maxWidth: 740 }}>
              <div className="sec-head"><span className="eyebrow">FAQ</span><h2 className="sec-h" id="faq-h">Frequently Asked Questions</h2></div>
              {FAQS.map((item) => (
                <details key={item[0]} className="faq-item"><summary className="faq-q">{item[0]}</summary><p className="faq-a">{item[1]}</p></details>
              ))}
            </div>
          </section>
        </main>

        <section className="cta-final" aria-label="Contact us">
          <h2 className="cta-h">Tailor Service in Every District<br />of Antalya — We Come to You</h2>
          <p className="cta-sub">Hotel or home address, tailoring or repair — just tell us your location.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white"><span aria-hidden="true">💬</span> Message on WhatsApp</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white"><span aria-hidden="true">📍</span> Google Maps</a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Antalya Tailor Service · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer links">
            <a href="/">Ana Sayfa (TR)</a>
            <a href={RU_URL}>Русский</a>
            <a href={DE_URL}>Deutsch</a>
            <a href={TR_URL}>Türkçe — Konyaaltı Terzi</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
          <p style={{ marginTop: '1rem', fontSize: '.68rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.8 }}>
            Antalya Tailor Service — tailoring, repair, alterations and ironing across all Antalya districts:
            Konyaaltı, Muratpaşa, Kepez, Lara, Belek, Kemer, Side, Alanya, Manavgat and more. Mobile tailor to
            your hotel or address. {PHONE}
          </p>
        </footer>
      </div>
    </>
  );
}
