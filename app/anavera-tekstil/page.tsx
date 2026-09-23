// app/anavera-tekstil/page.tsx
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
    'Anavera Tekstil is a Turkey-based premium textile design, manufacturing and export company. Menswear, womenswear, kidswear and corporate uniforms — knit & woven fabrics serving EU and Russia.',
  keywords: [
    'Turkish textile manufacturer', 'textile manufacturer Turkey', 'clothing manufacturer Turkey',
    'garment factory Turkey', 'textile exporter Turkey', 'uniform manufacturer Turkey',
    'knit fabric manufacturer', 'woven fabric manufacturer', 'private label clothing Turkey',
    '100% cotton clothing manufacturer', 'natural linen clothing manufacturer Turkey',
    'tekstil üretim fabrikası', 'tekstil atölyesi', 'giyim üretim fabrikası Türkiye',
    'fason tekstil imalatı', 'ihracat tekstil firması', 'текстильная фабрика Турция', 'производство одежды Турция'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Anavera Tekstil — Premium Turkish Textile Manufacturing & Export',
    description: 'Menswear, womenswear, kidswear and uniforms — knit & woven. Turkey-based B2B manufacturer serving the EU and Russia.',
    url: PAGE_URL, siteName: 'Anavera Tekstil', locale: 'en_US', type: 'website',
    images: [{ url: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Anavera Tekstil Factory' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ClothingStore'],
      '@id': `${PAGE_URL}#business`,
      name: 'Anavera Tekstil',
      alternateName: ['Anavera Textile', 'Анавера Текстиль'],
      description: 'Turkey-based high-capacity textile design, manufacturing and export company serving European Union and CIS markets.',
      url: PAGE_URL,
      telephone: PHONE_E,
      address: { '@type': 'PostalAddress', addressLocality: 'Antalya', addressCountry: 'TR' },
      areaServed: [
        { '@type': 'Country', name: 'Turkey' },
        { '@type': 'Place', name: 'European Union' },
        { '@type': 'Country', name: 'Russia' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'France' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Textile Manufacturing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Menswear B2B Manufacturing', serviceType: "Men's Garment Manufacturing" } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Womenswear B2B Manufacturing', serviceType: "Women's Garment Manufacturing" } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Uniform Manufacturing', serviceType: 'Workwear & Uniform Production' } },
        ],
      },
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
        { '@type': 'Question', name: 'What does Anavera Tekstil produce?', acceptedAnswer: { '@type': 'Answer', text: 'We design, manufacture and export menswear, womenswear, kidswear and corporate uniforms in both knit and woven fabrics.' } },
        { '@type': 'Question', name: 'Which countries do you export to?', acceptedAnswer: { '@type': 'Answer', text: 'We export directly to Germany, France, Netherlands, Italy, Poland, Russia, and all EU/CIS member states.' } },
        { '@type': 'Question', name: 'Do you support Private Label / OEM manufacturing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide full OEM and Private Label services including custom labels, tags, custom fabric dyeing, pattern making, and packaging.' } },
      ],
    },
  ],
};

const CATEGORIES = [
  {
    key: 'men',
    title: 'Menswear Collection',
    trTitle: 'Erkek Giyim Üretimi',
    desc: 'Shirts, polo-shirts, trousers, hoodies, jackets & tailored suits — knit and woven options.',
    img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'women',
    title: 'Womenswear Collection',
    trTitle: 'Kadın Giyim Üretimi',
    desc: 'Dresses, blouses, skirts, loungewear & outerwear crafted with precision patterns.',
    img: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'kids',
    title: 'Kidswear & Toddler',
    trTitle: 'Çocuk Giyim Üretimi',
    desc: 'Soft OEKO-TEX certified cotton t-shirts, sleepwear & school wear with non-toxic dyes.',
    img: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'uniform',
    title: 'Corporate & Workwear',
    trTitle: 'Kurumsal Üniforma',
    desc: 'Hotel, medical, security & industrial uniforms engineered for high durability.',
    img: 'https://images.pexels.com/photos/8483488/pexels-photo-8483488.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
];

const CERTIFICATIONS = [
  { title: 'OEKO-TEX 100', desc: 'Eco-friendly, chemical-free textiles' },
  { title: 'ISO 9001:2015', desc: 'Certified Quality Management System' },
  { title: 'EU Customs Union', desc: 'Duty-free / streamlined customs export' },
  { title: '100% Export Ready', desc: 'Complete customs & logistics paperwork' },
];

export default function AnaveraTekstilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#F8F9FA', color: '#1E293B', margin: 0, padding: 0 }}>
        
        {/* TOP BAR */}
        <div style={{ backgroundColor: '#0B132B', color: '#94A3B8', fontSize: '0.78rem', padding: '0.5rem 1rem', borderBottom: '1px solid #1E293B' }}>
          <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>📍 Direct B2B Export from Turkey to EU & CIS Markets</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span>📞 {PHONE}</span>
              <span style={{ color: '#E2E8F0' }}>|</span>
              <span>💬 English · Deutsch · Русский · Türkçe</span>
            </div>
          </div>
        </div>

        {/* HEADER / NAVBAR */}
        <header style={{ backgroundColor: '#0F172A', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 4px 20px rgba(0,0,0,0.15)', borderBottom: '2px solid #C9A227' }}>
          <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* BRAND LOGO */}
            <a href={PAGE_URL} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: 42, height: 42, borderRadius: '8px', background: 'linear-gradient(135deg, #C9A227 0%, #E4C664 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(201,162,39,0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.04em', lineHeight: 1 }}>
                  ANAVERA
                </div>
                <div style={{ color: '#C9A227', fontSize: '0.68rem', letterSpacing: '0.22em', fontWeight: 600, marginTop: '2px' }}>
                  TEKSTİL · TURKEY
                </div>
              </div>
            </a>

            {/* NAV ACTION BUTTON */}
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#C9A227', color: '#0F172A', padding: '0.55rem 1.1rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s' }}>
              <span>💬</span> Get B2B Quote
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section style={{ position: 'relative', background: 'linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.92)), url("https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover no-repeat', padding: '4.5rem 1rem 4rem', color: '#FFFFFF' }}>
          <div style={{ maxWidth: 1140, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(201, 162, 39, 0.15)', border: '1px solid rgba(201, 162, 39, 0.4)', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.75rem', color: '#E4C664', fontWeight: 600, marginBottom: '1.25rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E' }}></span>
                Certified Turkish Textile Manufacturer &amp; Exporter
              </div>

              <h1 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
                High-Capacity Garment Manufacturing for <span style={{ color: '#E4C664' }}>EU &amp; Russia</span>
              </h1>

              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '2rem' }}>
                We design, manufacture, and export premium <strong style={{ color: '#FFF' }}>menswear, womenswear, kidswear, and uniforms</strong>. Full OEM &amp; Private Label capabilities with knit (jersey) and woven fabric manufacturing directly from Turkey.
              </p>

              {/* ACTION BUTTONS */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '0.9rem 1.8rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)' }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                  Request Fast B2B Quote
                </a>
                <a href={`tel:${PHONE_E}`} style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)', padding: '0.9rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
                  📞 Call Sales: {PHONE}
                </a>
              </div>

              {/* STATS STRIP */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#E4C664' }}>50,000+</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Monthly Capacity</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#E4C664' }}>15+ EU &amp; CIS</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Export Countries</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight 800, color: '#E4C664' }}>OEM / ODM</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Private Label Ready</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST & CERTIFICATIONS BAR */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '1.5rem 1rem', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {CERTIFICATIONS.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0F172A' }}>{item.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FACTORY & PRODUCTION SHOWCASE */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#F8F9FA' }}>
          <div style={{ maxWidth: 1140, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Manufacturing Excellence</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.3rem' }}>Modern Production Facilities in Turkey</h2>
              <p style={{ color: '#64748B', maxWidth: 640, margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
                From pattern making and automated cutting to precision sewing, quality control, and export packaging.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#FFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/3738095/pexels-photo-3738095.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="Precision Fabric Cutting & Tailoring" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>Precision Cutting &amp; Patterning</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6 }}>Advanced CAD pattern drafting and computerized fabric cutting ensures maximum fabric efficiency and zero sizing variance.</p>
                </div>
              </div>

              <div style={{ backgroundColor: '#FFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="Garment Sewing Line" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>High-Speed Assembly Lines</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6 }}>Skilled seamstresses operating specialized flatlock, overlock, and double-needle machinery for durable stitching.</p>
                </div>
              </div>

              <div style={{ backgroundColor: '#FFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/6292850/pexels-photo-6292850.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="Fabric & Quality Control" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight 700, color: '#0F172A', marginBottom: '0.4rem' }}>100% Quality Inspection</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6 }}>AQL 2.5 standard quality checks applied at every stage — from raw fabric inspection to final ironing and polybagging.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS CATALOGUE GRID */}
        <section style={{ padding: '4.5rem 1rem', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: 1140, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>B2B Product Range</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.3rem' }}>Manufacturing Categories</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {CATEGORIES.map((cat) => (
                <div key={cat.key} style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#FFF', border: '1px solid #E2E8F0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: 12, left: 12, backgroundColor: '#0F172A', color: '#E4C664', fontSize: '0.68rem', fontWeight: 700, padding: '0.35rem 0.75rem', borderRadius: '4px', textTransform: 'uppercase' }}>
                      Knit &amp; Woven
                    </span>
                  </div>
                  <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>{cat.title}</h3>
                      <div style={{ fontSize: '0.75rem', color: '#C9A227', fontWeight: 600, marginBottom: '0.6rem' }}>{cat.trTitle}</div>
                      <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.2rem' }}>{cat.desc}</p>
                    </div>
                    <a href={WA(`Hello, I am interested in ${cat.title} manufacturing.`)} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#F1F5F9', color: '#0F172A', textAlign: 'center', padding: '0.65rem 1rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', border: '1px solid #CBD5E1' }}>
                      Inquire Order Terms →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 100% COTTON & LINEN SPECIAL SECTION */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#0F172A', color: '#FFFFFF' }}>
          <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#E4C664', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Sustainable &amp; Premium</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
                100% Natural Organic Cotton &amp; Pure Linen Collections
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                We produce high-end sustainable fashion lines using certified 100% Aegean cotton and Turkish flax linen. Popular among premium European resort brands and boutiques seeking breathable, eco-friendly garments.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#CBD5E1', fontSize: '0.9rem', display: 'grid', gap: '0.6rem' }}>
                <li>✓ Pre-washed, pre-shrunk organic linen shirts &amp; dresses</li>
                <li>✓ Combed 100% cotton jersey with high color fastness</li>
                <li>✓ Custom eco-friendly dyeing with GOTS compliance</li>
              </ul>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/17630522/pexels-photo-17630522.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Natural Cotton Menswear" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '10px' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/4256573/pexels-photo-4256573.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Linen Womenswear" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
          </div>
        </section>

        {/* WHY TURKEY & FAQ */}
        <section style={{ padding: '4.5rem 1rem', backgroundColor: '#F8F9FA' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Frequently Asked Questions</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginTop: '0.3rem' }}>B2B Export &amp; Production Details</h2>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                ['What is your Minimum Order Quantity (MOQ)?', 'Our standard MOQ starts from 300-500 pieces per style/color, depending on fabric specification and garment complexity.'],
                ['How fast can you deliver to EU & Russia?', 'Sampling takes 7-10 business days. Bulk production takes 3-5 weeks depending on quantity. Road transport to Central Europe takes 4-6 days, and shipping to Russia takes 5-8 days.'],
                ['Do you handle customs documentation (ATR / EUR.1)?', 'Yes, we handle complete ATR certificates, EUR.1 movement certificates, commercial invoices, and packing lists for smooth duty-free customs clearance in the EU.'],
                ['Can I order custom tags, labels, and packaging?', 'Yes, we provide complete OEM Private Label services including woven brand labels, care labels, hangtags, barcodes, and custom printed bags.'],
              ].map(([question, answer], idx) => (
                <details key={idx} style={{ backgroundColor: '#FFFFFF', padding: '1.2rem 1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.98rem' }}>{question}</summary>
                  <p style={{ marginTop: '0.8rem', color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7, margin: '0.8rem 0 0 0' }}>{answer}</p>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: '#0B132B', color: '#94A3B8', padding: '3.5rem 1rem 2rem', borderTop: '2px solid #C9A227' }}>
          <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
            <div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                ANAVERA <span style={{ color: '#C9A227' }}>TEKSTİL</span>
              </div>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#64748B' }}>
                Turkey-based textile design, manufacturing, and export company serving corporate buyers across Europe, DACH, and CIS regions.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.8rem' }}>Contact Sales</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>📱 WhatsApp: {PHONE}</p>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>📍 Production Base: Antalya / Turkey</p>
              <p style={{ fontSize: '0.85rem' }}>🌐 Website: terzihizmeti.com.tr</p>
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.8rem' }}>Export Markets</h4>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>
                Germany · France · Italy · Netherlands · Poland · Austria · Switzerland · Russia · CIS Region
              </p>
            </div>
          </div>

          <div style={{ maxWidth: 1140, margin: '0 auto', paddingTop: '1.5rem', borderTop: '1px solid #1E293B', textAlign: 'center', fontSize: '0.78rem', color: '#64748B' }}>
            © {new Date().getFullYear()} Anavera Tekstil. All rights reserved. Sub-brand of terzihizmeti.com.tr
          </div>
        </footer>

        {/* FLOATING WHATSAPP BUTTON (MOBILE & DESKTOP) */}
        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#25D366', color: '#FFF', borderRadius: '50px', padding: '0.8rem 1.3rem', display: 'flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)', textDecoration: 'none', fontWeight: 700, fontSize: '0.88rem', zIndex: 9999 }}>
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span>WhatsApp Quote</span>
        </a>

      </div>
    </>
  );
}
