// app/anavera-tekstil/page.tsx
//
// Anavera Tekstil — Turkish textile design, manufacturing & export brand.
// Published as a sub-page of terzihizmeti.com.tr (no separate domain).
// Target audience: corporate/B2B buyers in the EU and Russia looking for
// a Turkey-based textile manufacturer for menswear, womenswear, kidswear
// and uniforms (knit & woven). Primary contact channel: WhatsApp Business.
import type { Metadata } from 'next';

const SITE       = 'https://terzihizmeti.com.tr';
const PAGE_URL   = `${SITE}/anavera-tekstil`;
const PHONE      = '+90 531 898 64 18';
const PHONE_E    = '+905318986418';
const WA = (t: string) => `https://wa.me/${PHONE_E}?text=${encodeURIComponent(t)}`;
const WA_DEFAULT = WA('Hello, I would like information about Anavera Tekstil textile manufacturing and export.');
const TODAY = new Date().toISOString().split('T')[0];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Anavera Tekstil | Turkish Textile Manufacturer & Exporter — EU & Russia',
  description:
    'Anavera Tekstil is a Turkey-based textile design, manufacturing and export company. Menswear, womenswear, kidswear and corporate uniforms — knit (jersey) and woven fabrics. Serving the European Union and Russia. Contact us on WhatsApp for quotes.',
  keywords: [
    // English — EU/international B2B
    'Turkish textile manufacturer', 'textile manufacturer Turkey', 'clothing manufacturer Turkey',
    'garment factory Turkey', 'textile exporter Turkey', 'uniform manufacturer Turkey',
    'knit fabric manufacturer', 'woven fabric manufacturer', 'private label clothing Turkey',
    'OEM clothing manufacturer', 'wholesale clothing supplier Turkey', 'workwear manufacturer Turkey',
    'clothing manufacturer for Europe', 'textile supplier Russia', 'apparel sourcing Turkey',
    // Türkçe — yerli arama (fabrika/atölye arayanlar)
    'tekstil üretim fabrikası', 'tekstil atölyesi', 'giyim üretim fabrikası Türkiye',
    'konfeksiyon üretimi', 'toptan giyim üreticisi', 'üniforma üretici firma',
    'fason tekstil imalatı', 'ihracat tekstil firması', 'penye kumaş üretici', 'dokuma kumaş üretici',
    "Avrupa'ya tekstil ihracatı", "Rusya'ya tekstil ihracatı",
    // Русский — Россия
    'текстильная фабрика Турция', 'производство одежды Турция', 'пошив одежды на заказ Турция',
    'производитель униформы Турция', 'трикотаж оптом Турция', 'ткани оптом Турция',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Anavera Tekstil — Turkish Textile Design, Manufacturing & Export',
    description: 'Menswear, womenswear, kidswear and uniforms — knit & woven. Turkey-based manufacturer serving the EU and Russia. WhatsApp: ' + PHONE,
    url: PAGE_URL, siteName: 'Anavera Tekstil', locale: 'en_US', type: 'website',
    images: [{ url: 'https://images.pexels.com/photos/31112215/pexels-photo-31112215.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Anavera Tekstil — Turkish textile manufacturing' }],
  },
};

// ── JSON-LD: Organization + Product categories + FAQ ──
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ClothingStore'],
      '@id': `${PAGE_URL}#business`,
      name: 'Anavera Tekstil',
      alternateName: ['Anavera Textile', 'Анавера Текстиль'],
      description: 'Turkey-based textile design, manufacturing and export company. Menswear, womenswear, kidswear and corporate uniforms in knit and woven fabrics, exporting to the European Union and Russia.',
      url: PAGE_URL,
      telephone: PHONE_E,
      address: { '@type': 'PostalAddress', addressLocality: 'Antalya', addressCountry: 'TR' },
      areaServed: [
        { '@type': 'Country', name: 'Turkey' },
        { '@type': 'Place', name: 'European Union' },
        { '@type': 'Country', name: 'Russia' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Poland' },
        { '@type': 'Country', name: 'Italy' },
        { '@type': 'Country', name: 'Netherlands' },
      ],
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Menswear — Knit & Woven', category: "Men's Clothing Manufacturing" } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Womenswear — Knit & Woven', category: "Women's Clothing Manufacturing" } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Kidswear — Knit & Woven', category: "Children's Clothing Manufacturing" } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Corporate & Institutional Uniforms', category: 'Uniform Manufacturing' } },
      ],
      sameAs: [`https://wa.me/${PHONE_E}`],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Anavera Tekstil — Turkish Textile Manufacturer & Exporter',
      inLanguage: ['en', 'tr', 'ru'],
      dateModified: TODAY,
      about: { '@id': `${PAGE_URL}#business` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'What does Anavera Tekstil produce?', acceptedAnswer: { '@type': 'Answer', text: 'We design, manufacture and export all types of textile products: menswear, womenswear, kidswear and corporate uniforms, in both knit (jersey) and woven fabrics.' } },
        { '@type': 'Question', name: 'Which countries do you export to?', acceptedAnswer: { '@type': 'Answer', text: 'We manufacture in Turkey and export to the European Union and Russia. Turkey\'s customs union with the EU and geographic proximity to both markets mean shorter lead times than Asian manufacturers.' } },
        { '@type': 'Question', name: 'How can I request a quote or send a sample request?', acceptedAnswer: { '@type': 'Answer', text: `Contact us directly on WhatsApp Business: ${PHONE}. Share your product type, quantities, fabric preference and target price, and we will respond with a quote.` } },
        { '@type': 'Question', name: 'Do you offer private label / OEM manufacturing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manufacture under your own brand and labeling, from design development and sampling through to bulk production and export documentation.' } },
        { '@type': 'Question', name: 'What is the difference between knit (penye) and woven (dokuma) fabric?', acceptedAnswer: { '@type': 'Answer', text: 'Knit (jersey/penye) fabrics are looped-construction, stretchable, and typically used for t-shirts, sweatshirts and underwear. Woven (dokuma) fabrics are cross-thread constructions, more structured, and typically used for shirts, trousers and formal uniforms. We produce both.' } },
      ],
    },
  ],
};

// ── Görsel/renk sabitleri ──
const NAVY   = '#0F1F3D';
const NAVY2  = '#16294F';
const GOLD   = '#C9A227';
const GOLD2  = '#E4C664';
const BG     = '#F7F8FA';
const BG2    = '#EEF0F4';
const INK    = '#1A2233';
const MUTE   = '#5B6478';
const SERIF  = "'Georgia', serif";
const SANS   = 'system-ui, -apple-system, sans-serif';

// ── Ürün kategorileri (görseller — Pexels, ücretsiz ticari kullanım) ──
const CATEGORIES = [
  {
    key: 'men',
    title: 'Menswear',
    trTitle: 'Bay Giyim',
    fabrics: 'Knit & Woven',
    desc: 'Shirts, trousers, jackets, t-shirts, polo shirts, outerwear — made to your specifications and fabric standards.',
    img: 'https://images.pexels.com/photos/6765658/pexels-photo-6765658.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'women',
    title: 'Womenswear',
    trTitle: 'Bayan Giyim',
    fabrics: 'Knit & Woven',
    desc: 'Dresses, blouses, trousers, knitwear, outerwear — from pattern development to finished garment.',
    img: 'https://images.pexels.com/photos/18022030/pexels-photo-18022030.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'kids',
    title: 'Kidswear',
    trTitle: 'Çocuk Giyim',
    fabrics: 'Knit & Woven',
    desc: 'T-shirts, sweatshirts, sleepwear, school and everyday wear — soft, durable and safety-tested fabrics.',
    img: 'https://images.pexels.com/photos/31047132/pexels-photo-31047132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'uniform',
    title: 'Corporate Uniforms',
    trTitle: 'Üniforma',
    fabrics: 'Knit & Woven',
    desc: 'Hotel, hospitality, healthcare, security, education, retail and industrial uniforms — bulk production.',
    img: 'https://images.pexels.com/photos/5378708/pexels-photo-5378708.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
];

const STEPS = [
  { n: '01', t: 'Contact Us', d: 'Send your product type, target quantity, fabric preference and reference images via WhatsApp Business.' },
  { n: '02', t: 'Quote & Sample', d: 'We provide a price quote and, on request, a physical or digital sample before bulk production.' },
  { n: '03', t: 'Production', d: 'Upon approval, we begin cutting, sewing, quality control and finishing at our production partners in Turkey.' },
  { n: '04', t: 'Export & Delivery', d: 'Finished goods are packed, documented and shipped to your address in the EU or Russia.' },
];

export default function AnaveraTekstilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main style={{ fontFamily: SANS, background: BG, color: INK, minHeight: '100vh' }}>
        {/* NAV */}
        <nav style={{ padding: '.9rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: NAVY, borderBottom: `2px solid ${GOLD}` }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '.72rem', opacity: .7 }}>← terzihizmeti.com.tr</a>
          <div style={{ fontFamily: SERIF, color: '#fff', fontWeight: 700, letterSpacing: '.02em' }}>
            ANAVERA <span style={{ color: GOLD2, fontStyle: 'italic', fontWeight: 400 }}>TEKSTİL</span>
          </div>
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" style={{ color: GOLD2, textDecoration: 'none', fontSize: '.72rem', fontWeight: 700 }}>WhatsApp →</a>
        </nav>

        {/* HERO */}
        <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY2} 60%, #1E2E52 100%)`, padding: '4.5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <div style={{ fontSize: '.65rem', letterSpacing: '.35em', textTransform: 'uppercase', color: GOLD2, marginBottom: '1.1rem', display: 'flex', alignItems: 'center', gap: '.8rem' }}>
              <span style={{ width: 32, height: 1, background: GOLD, display: 'inline-block' }} />
              Made in Turkey · Textile Design, Manufacturing &amp; Export
            </div>
            <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem,5.2vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1.3rem' }}>
              Anavera Tekstil
              <br />
              <span style={{ color: GOLD2, fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1.15rem,3vw,1.9rem)' }}>
                Turkish Textile Manufacturing for the EU &amp; Russia
              </span>
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.78)', lineHeight: 1.85, maxWidth: 640, marginBottom: '2rem' }}>
              We design, manufacture and export <strong style={{ color: '#fff' }}>menswear, womenswear, kidswear and corporate
              uniforms</strong> — in both <strong style={{ color: GOLD2 }}>knit (jersey)</strong> and <strong style={{ color: GOLD2 }}>woven</strong> fabrics.
              Based in Turkey, built for European and Russian corporate buyers who need a reliable, export-ready production partner.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.4rem' }}>
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                style={{ background: GOLD, color: NAVY, padding: '1rem 2.1rem', fontWeight: 700, textDecoration: 'none', fontSize: '.85rem', letterSpacing: '.06em', textTransform: 'uppercase' }}>
                💬 Request a Quote — WhatsApp
              </a>
              <a href={`tel:${PHONE_E}`} style={{ border: '1px solid rgba(255,255,255,.3)', color: '#fff', padding: '1rem 1.8rem', textDecoration: 'none', fontSize: '.85rem' }}>
                📞 {PHONE}
              </a>
            </div>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              {[['🇬🇧', 'English'], ['🇹🇷', 'Türkçe'], ['🇷🇺', 'Русский'], ['🇩🇪', 'Deutsch']].map(([f, l]) => (
                <span key={l} style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.6)', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', padding: '.28rem .8rem', borderRadius: 2 }}>{f} {l}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ padding: '4rem 1.5rem', background: '#fff' }}>
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '.65rem', letterSpacing: '.3em', textTransform: 'uppercase', color: GOLD, fontWeight: 700 }}>About Us</span>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,3.2vw,2.1rem)', color: NAVY, margin: '.8rem 0 1.2rem' }}>
              A Turkish Manufacturer Built for Export
            </h2>
            <p style={{ color: MUTE, fontSize: '.95rem', lineHeight: 1.9 }}>
              Anavera Tekstil is a Turkey-based textile company covering the full production chain — design, pattern
              development, sampling, bulk manufacturing and export logistics. We work with corporate and institutional
              buyers across the European Union and Russia who need dependable, quality-controlled apparel and uniform
              production without the long lead times of manufacturing further east. Every order — from a single
              capsule collection to large uniform contracts — is quoted, sampled and produced to your specification.
            </p>
          </div>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section id="categories" style={{ padding: '4.5rem 1.5rem', background: BG2 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '.65rem', letterSpacing: '.3em', textTransform: 'uppercase', color: GOLD, fontWeight: 700 }}>Product Catalogue</span>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,3.5vw,2.3rem)', color: NAVY, margin: '.8rem 0 .6rem' }}>
                Menswear · Womenswear · Kidswear · Uniforms
              </h2>
              <p style={{ color: MUTE, fontSize: '.9rem', maxWidth: 560, margin: '0 auto' }}>
                Every category is available in both knit (jersey) and woven fabric construction.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 2, background: 'rgba(15,31,61,.08)' }}>
              {CATEGORIES.map((c) => (
                <div key={c.key} style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.img}
                      alt={`${c.title} textile manufacturing — Anavera Tekstil Turkey`}
                      width={800}
                      height={600}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <span style={{ position: 'absolute', top: 10, left: 10, background: NAVY, color: GOLD2, fontSize: '.62rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '.3rem .6rem' }}>
                      {c.fabrics}
                    </span>
                  </div>
                  <div style={{ padding: '1.3rem 1.4rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: SERIF, fontSize: '1.05rem', color: NAVY, fontWeight: 700, marginBottom: '.15rem' }}>{c.title}</h3>
                    <div style={{ fontSize: '.68rem', color: GOLD, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '.7rem' }}>{c.trTitle}</div>
                    <p style={{ fontSize: '.82rem', color: MUTE, lineHeight: 1.7, marginBottom: '1.1rem', flex: 1 }}>{c.desc}</p>
                    <a href={WA(`Hello, I am interested in ${c.title} production (knit & woven). Could you share more information?`)}
                      target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '.72rem', fontWeight: 700, color: NAVY, textDecoration: 'none', borderBottom: `1px solid ${GOLD}`, alignSelf: 'flex-start', paddingBottom: 2 }}>
                      Request a Quote →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '.72rem', color: MUTE, marginTop: '1.3rem', textAlign: 'center', fontStyle: 'italic' }}>
              * Images shown are representative product/production examples. Send your own reference images or tech
              packs via WhatsApp for an accurate quote.
            </p>
          </div>
        </section>

        {/* KNIT vs WOVEN */}
        <section style={{ padding: '4.5rem 1.5rem', background: '#fff' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '.65rem', letterSpacing: '.3em', textTransform: 'uppercase', color: GOLD, fontWeight: 700 }}>Fabric Types</span>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,3.2vw,2.1rem)', color: NAVY, margin: '.8rem 0' }}>Knit (Penye) &amp; Woven (Dokuma)</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.2rem' }}>
              <div style={{ border: `1px solid ${BG2}`, borderTop: `3px solid ${GOLD}`, padding: '1.8rem 1.6rem' }}>
                <h3 style={{ fontFamily: SERIF, fontSize: '1.1rem', color: NAVY, marginBottom: '.6rem' }}>Knit / Jersey (Penye)</h3>
                <p style={{ fontSize: '.85rem', color: MUTE, lineHeight: 1.8 }}>
                  Looped-construction, stretchable fabric. Used for t-shirts, polo shirts, sweatshirts, underwear
                  and children's everyday wear. Comfortable, breathable, cost-efficient for bulk orders.
                </p>
              </div>
              <div style={{ border: `1px solid ${BG2}`, borderTop: `3px solid ${GOLD}`, padding: '1.8rem 1.6rem' }}>
                <h3 style={{ fontFamily: SERIF, fontSize: '1.1rem', color: NAVY, marginBottom: '.6rem' }}>Woven (Dokuma)</h3>
                <p style={{ fontSize: '.85rem', color: MUTE, lineHeight: 1.8 }}>
                  Cross-thread construction, more structured and durable. Used for shirts, trousers, jackets and
                  formal or industrial uniforms requiring shape retention and durability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section style={{ padding: '4.5rem 1.5rem', background: NAVY }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '.65rem', letterSpacing: '.3em', textTransform: 'uppercase', color: GOLD2 }}>Process</span>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,3.2vw,2.1rem)', color: '#fff', margin: '.8rem 0' }}>From Inquiry to Export</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 1, background: 'rgba(255,255,255,.06)' }}>
              {STEPS.map((s) => (
                <div key={s.n} style={{ background: 'rgba(255,255,255,.03)', padding: '2rem 1.5rem' }}>
                  <div style={{ fontFamily: SERIF, fontSize: '2.2rem', fontWeight: 700, color: 'rgba(201,162,39,.3)', marginBottom: '.7rem' }}>{s.n}</div>
                  <div style={{ fontSize: '.92rem', color: '#fff', fontWeight: 600, marginBottom: '.5rem' }}>{s.t}</div>
                  <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY TURKEY */}
        <section style={{ padding: '4.5rem 1.5rem', background: BG2 }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
              <span style={{ fontSize: '.65rem', letterSpacing: '.3em', textTransform: 'uppercase', color: GOLD, fontWeight: 700 }}>Why Turkey</span>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,3.2vw,2.1rem)', color: NAVY, margin: '.8rem 0' }}>Why Manufacture With Us</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.2rem' }}>
              {[
                ['🚚', 'Shorter Lead Times', 'Turkey is days, not weeks, from EU ports and Russian border crossings by road and sea.'],
                ['🇪🇺', 'EU Customs Union', "Turkey's customs union with the EU can simplify duties on many finished textile goods."],
                ['🧵', 'Full-Chain Capability', 'Design, sampling, cutting, sewing, finishing and export documentation under one process.'],
                ['📦', 'Flexible Order Sizes', 'From small capsule collections to large uniform contracts.'],
              ].map(([icon, t, d]) => (
                <div key={t} style={{ background: '#fff', padding: '1.6rem 1.4rem', borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '.6rem' }}>{icon}</div>
                  <div style={{ fontSize: '.9rem', fontWeight: 700, color: NAVY, marginBottom: '.4rem' }}>{t}</div>
                  <div style={{ fontSize: '.78rem', color: MUTE, lineHeight: 1.7 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ padding: '4.5rem 1.5rem', background: '#fff' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
              <span style={{ fontSize: '.65rem', letterSpacing: '.3em', textTransform: 'uppercase', color: GOLD, fontWeight: 700 }}>FAQ</span>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,3.2vw,2.1rem)', color: NAVY, margin: '.8rem 0' }}>Frequently Asked Questions</h2>
            </div>
            {[
              ['What does Anavera Tekstil produce?', 'We design, manufacture and export all types of textile products: menswear, womenswear, kidswear and corporate uniforms, in both knit (jersey) and woven fabrics.'],
              ['Which countries do you export to?', "We manufacture in Turkey and export to the European Union and Russia — including Germany, France, Poland, Italy, the Netherlands and beyond."],
              ['How can I request a quote?', `Contact us directly on WhatsApp Business: ${PHONE}. Share your product type, quantities, fabric preference and target price.`],
              ['Do you offer private label / OEM manufacturing?', 'Yes — from design development and sampling through to bulk production and export documentation, under your own brand.'],
              ["What's the difference between knit and woven fabric?", 'Knit (jersey/penye) is stretchable, looped-construction fabric for t-shirts and casualwear. Woven (dokuma) is structured, cross-thread fabric for shirts, trousers and formal uniforms. We produce both.'],
            ].map(([q, a]) => (
              <details key={q} style={{ borderBottom: `1px solid ${BG2}`, padding: '1.1rem 0' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, color: NAVY, fontSize: '.92rem', listStyle: 'none' }}>{q}</summary>
                <p style={{ fontSize: '.85rem', color: MUTE, lineHeight: 1.8, marginTop: '.7rem' }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '3.5rem 1.5rem', background: `linear-gradient(135deg, ${GOLD}, ${GOLD2})`, textAlign: 'center' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.4rem,3.2vw,1.9rem)', color: NAVY, fontWeight: 700, marginBottom: '.6rem' }}>
              Ready to Start Your Order?
            </h2>
            <p style={{ color: 'rgba(15,31,61,.75)', fontSize: '.9rem', marginBottom: '1.6rem' }}>
              Send us your product type, quantity and target fabric — we'll reply with a quote on WhatsApp.
            </p>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
              style={{ background: NAVY, color: '#fff', padding: '.95rem 2.2rem', fontWeight: 700, textDecoration: 'none', fontSize: '.85rem', letterSpacing: '.06em', textTransform: 'uppercase', display: 'inline-block' }}>
              💬 Message Us on WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: NAVY2, color: 'rgba(255,255,255,.5)', padding: '2.5rem 1.5rem', textAlign: 'center', fontSize: '.75rem' }}>
          <div style={{ fontFamily: SERIF, color: '#fff', marginBottom: '.5rem' }}>ANAVERA <span style={{ color: GOLD2, fontStyle: 'italic' }}>TEKSTİL</span></div>
          <p style={{ marginBottom: '.4rem' }}>Turkish textile design, manufacturing &amp; export — {PHONE}</p>
          <p style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.3)' }}>
            © {new Date().getFullYear()} Anavera Tekstil ·{' '}
            <a href="/" style={{ color: 'rgba(255,255,255,.4)' }}>terzihizmeti.com.tr</a>
          </p>
        </footer>
      </main>
    </>
  );
}
