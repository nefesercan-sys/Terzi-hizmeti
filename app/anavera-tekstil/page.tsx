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
  title: 'Anavera Tekstil | Turkish Textile Manufacturer & Exporter',
  description:
    'Anavera Tekstil is a premium textile design, manufacturing and export company in Turkey. Menswear, womenswear, kidswear and uniforms for EU and Russia.',
  keywords: [
    'Turkish textile manufacturer', 'textile manufacturer Turkey', 'clothing manufacturer Turkey',
    'garment factory Turkey', 'textile exporter Turkey', 'uniform manufacturer Turkey',
    'fason tekstil imalatı', 'ihracat tekstil firması', 'tekstil atölyesi',
    'текстильная фабрика Турция', 'производство одежды Турция'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Anavera Tekstil — Premium Turkish Textile Manufacturing',
    description: 'Turkey-based B2B clothing manufacturer serving the EU and Russia.',
    url: PAGE_URL, siteName: 'Anavera Tekstil', locale: 'en_US', type: 'website',
    images: [{ url: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ClothingStore', 'B2BBusiness'],
      '@id': `${PAGE_URL}#business`,
      name: 'Anavera Tekstil',
      alternateName: ['Anavera Textile', 'Анавера Текстиль'],
      description: 'Turkey-based high-capacity textile manufacturing and export company.',
      url: PAGE_URL,
      telephone: PHONE_E,
      address: { '@type': 'PostalAddress', addressLocality: 'Antalya', addressCountry: 'TR' },
      areaServed: ['European Union', 'Russia', 'Germany', 'United Kingdom'],
      sameAs: [`https://wa.me/${PHONE_E}`],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'What is your Minimum Order Quantity (MOQ)?', acceptedAnswer: { '@type': 'Answer', text: 'Our MOQ starts from 300-500 pieces per style/color.' } },
        { '@type': 'Question', name: 'Do you handle customs documentation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we handle complete ATR and EUR.1 certificates for duty-free customs clearance in the EU.' } },
      ],
    },
  ],
};

const CATEGORIES = [
  {
    key: 'men', title: 'Menswear Collection', trTitle: 'Erkek Giyim Üretimi',
    desc: 'Premium shirts, polo-shirts, trousers, hoodies, and jackets. Knit and woven fabric options.',
    img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'women', title: 'Womenswear Collection', trTitle: 'Kadın Giyim Üretimi',
    desc: 'Elegant dresses, blouses, loungewear, and activewear crafted with precision patterns.',
    img: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'kids', title: 'Kidswear & Toddler', trTitle: 'Çocuk Giyim Üretimi',
    desc: 'Soft OEKO-TEX certified cotton apparel. Non-toxic dyes for sleepwear and daily wear.',
    img: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'uniform', title: 'Corporate & Workwear', trTitle: 'Kurumsal Üniforma',
    desc: 'Durable hotel, medical, security, and industrial uniforms customized to your brand.',
    img: 'https://images.pexels.com/photos/8483488/pexels-photo-8483488.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
];

const CERTIFICATIONS = [
  { title: 'OEKO-TEX 100', desc: 'Eco-friendly, chemical-free fabrics' },
  { title: 'ISO 9001:2015', desc: 'Certified Quality Management' },
  { title: 'EU Customs Union', desc: 'ATR / EUR.1 Duty-free export' },
  { title: 'Full OEM / ODM', desc: 'Private label & custom packaging' },
];

export default function AnaveraTekstilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#F8FAFC', color: '#0F172A', margin: 0, padding: 0 }}>
        
        {/* TOP INFORMATION BAR */}
        <div style={{ backgroundColor: '#020617', color: '#94A3B8', fontSize: '0.8rem', padding: '0.6rem 1rem', borderBottom: '1px solid #1E293B' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: '#E4C664' }}>✦</span> Direct B2B Export from Turkey to EU, UK & CIS
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a href={`tel:${PHONE_E}`} style={{ color: '#CBD5E1', textDecoration: 'none' }}>📞 {PHONE}</a>
              <span style={{ color: '#334155' }}>|</span>
              <span>🇬🇧 EN · 🇩🇪 DE · 🇷🇺 RU · 🇹🇷 TR</span>
            </div>
          </div>
        </div>

        {/* HEADER / NAVIGATION */}
        <header style={{ backgroundColor: '#0F172A', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 4px 20px rgba(0,0,0,0.2)', borderBottom: '2px solid #C9A227' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* BRAND LOGO */}
            <a href={PAGE_URL} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: '8px', background: 'linear-gradient(135deg, #C9A227 0%, #FDE047 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(201,162,39,0.4)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '0.05em', lineHeight: 1 }}>
                  ANAVERA
                </div>
                <div style={{ color: '#E4C664', fontSize: '0.7rem', letterSpacing: '0.25em', fontWeight: 600, marginTop: '3px' }}>
                  TEKSTİL · TURKEY
                </div>
              </div>
            </a>

            {/* ACTION BUTTON */}
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#C9A227', color: '#0F172A', padding: '0.6rem 1.2rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              Get B2B Quote
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section style={{ position: 'relative', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%), url("https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover no-repeat', padding: '5rem 1rem', color: '#FFFFFF' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ maxWidth: 800 }}>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(201, 162, 39, 0.15)', border: '1px solid rgba(201, 162, 39, 0.5)', padding: '0.4rem 1rem', borderRadius: '30px', fontSize: '0.8rem', color: '#FDE047', fontWeight: 600, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E', boxShadow: '0 0 8px #22C55E' }}></span>
                Verified Turkish Manufacturer
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                Premium Garment Manufacturing for <span style={{ color: '#E4C664' }}>Europe & CIS</span>
              </h1>

              <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 650 }}>
                High-capacity OEM & Private Label production. We design, manufacture, and export <strong style={{ color: '#FFF' }}>menswear, womenswear, and uniforms</strong> using premium Turkish cotton and natural fabrics.
              </p>

              {/* ACTION BUTTONS */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}>
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                  Contact on WhatsApp
                </a>
                <a href={`tel:${PHONE_E}`} style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  📞 Call Us: {PHONE}
                </a>
              </div>

              {/* STATS */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#E4C664' }}>50K+</div>
                  <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.3rem' }}>Pieces / Month</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#E4C664' }}>15+</div>
                  <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.3rem' }}>Export Countries</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#E4C664' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.3rem' }}>Export Ready</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST & CERTIFICATIONS BAR */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '2rem 1rem', borderBottom: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {CERTIFICATIONS.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #F1F5F9' }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>{item.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.2rem' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTION SHOWCASE */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#F8FAFC' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Manufacturing Excellence</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>Modern Facilities in Turkey</h2>
              <p style={{ color: '#64748B', maxWidth: 700, margin: '1rem auto 0', fontSize: '1.05rem', lineHeight: 1.6 }}>
                From meticulous pattern making to automated cutting, precision sewing, and dedicated quality control lines.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {/* Feature 1 */}
              <div style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/3738095/pexels-photo-3738095.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="Fabric Cutting" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Precision Cutting & Patterning</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>Advanced CAD pattern drafting and computerized fabric cutting ensures maximum fabric efficiency and zero sizing variance.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="Sewing Line" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>High-Speed Assembly Lines</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>Skilled seamstresses operating specialized flatlock, overlock, and double-needle machinery for durable stitching.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/6292850/pexels-photo-6292850.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="Quality Control" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>100% Quality Inspection</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>AQL 2.5 standard quality checks applied at every stage — from raw fabric inspection to final ironing and polybagging.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS CATALOGUE */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>B2B Product Range</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>Our Manufacturing Categories</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {CATEGORIES.map((cat) => (
                <div key={cat.key} style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#FFF', border: '1px solid #E2E8F0', boxShadow: '0 10px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '260px', position: 'relative' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 16, left: 16, backgroundColor: '#0F172A', color: '#E4C664', fontSize: '0.75rem', fontWeight: 800, padding: '0.4rem 0.8rem', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Knit & Woven
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.3rem' }}>{cat.title}</h3>
                      <div style={{ fontSize: '0.85rem', color: '#D97706', fontWeight: 700, marginBottom: '0.8rem' }}>{cat.trTitle}</div>
                      <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.5rem' }}>{cat.desc}</p>
                    </div>
                    <a href={WA(`Hello, I am interested in ${cat.title} manufacturing.`)} target="_blank" rel="noopener noreferrer" style={{ display: 'block', backgroundColor: '#F8FAFC', color: '#0F172A', textAlign: 'center', padding: '0.8rem 1rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', border: '2px solid #E2E8F0', transition: 'all 0.2s' }}>
                      Inquire Order Terms →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 100% COTTON & LINEN SPECIAL */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#0F172A', color: '#FFFFFF' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#E4C664', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Sustainable & Premium</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                100% Natural Organic Cotton & Pure Linen
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We produce high-end sustainable fashion lines using certified 100% Aegean cotton and Turkish flax linen. Popular among premium European resort brands and boutiques seeking breathable, eco-friendly garments.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#E2E8F0', fontSize: '1rem', display: 'grid', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: '#22C55E' }}>✔</span> Pre-washed, pre-shrunk organic linen shirts & dresses</li>
                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: '#22C55E' }}>✔</span> Combed 100% cotton jersey with high color fastness</li>
                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: '#22C55E' }}>✔</span> Custom eco-friendly dyeing with GOTS compliance</li>
              </ul>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/17630522/pexels-photo-17630522.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Natural Cotton Menswear" style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', border: '1px solid #334155' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/4256573/pexels-photo-4256573.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Linen Womenswear" style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', border: '1px solid #334155', marginTop: '2rem' }} />
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#F8FAFC' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Frequently Asked Questions</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>B2B Export & Production Details</h2>
            </div>

            <div style={{ display: 'grid', gap: '1.2rem' }}>
              {[
                ['What is your Minimum Order Quantity (MOQ)?', 'Our standard MOQ starts from 300-500 pieces per style/color, depending on fabric specification and garment complexity.'],
                ['How fast can you deliver to EU & Russia?', 'Sampling takes 7-10 business days. Bulk production takes 3-5 weeks depending on quantity. Road transport to Central Europe takes 4-6 days, and shipping to Russia takes 5-8 days.'],
                ['Do you handle customs documentation (ATR / EUR.1)?', 'Yes, we handle complete ATR certificates, EUR.1 movement certificates, commercial invoices, and packing lists for smooth duty-free customs clearance in the EU.'],
                ['Can I order custom tags, labels, and packaging?', 'Yes, we provide complete OEM Private Label services including woven brand labels, care labels, hangtags, barcodes, and custom printed polybags.'],
              ].map(([question, answer], idx) => (
                <details key={idx} style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                  <summary style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.05rem', outline: 'none' }}>{question}</summary>
                  <p style={{ marginTop: '1rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, margin: '1rem 0 0 0', paddingLeft: '1.2rem', borderLeft: '2px solid #C9A227' }}>{answer}</p>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: '#020617', color: '#94A3B8', padding: '4rem 1rem 2rem', borderTop: '4px solid #C9A227' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                ANAVERA <span style={{ color: '#C9A227' }}>TEKSTİL</span>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#64748B' }}>
                Premium textile design, manufacturing, and export company in Turkey. Trusted by corporate buyers across Europe, UK, DACH, and CIS regions.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#F8FAFC', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '0.05em' }}>Contact & Sales</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📱 WhatsApp: <a href={WA_DEFAULT} style={{ color: '#38BDF8', textDecoration: 'none' }}>{PHONE}</a></p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.8rem' }}>📍 Production Base: Antalya / Turkey</p>
              <p style={{ fontSize: '0.95rem' }}>🌐 Website: <a href={SITE} style={{ color: '#94A3B8', textDecoration: 'none' }}>terzihizmeti.com.tr</a></p>
            </div>
            <div>
              <h4 style={{ color: '#F8FAFC', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '0.05em' }}>Export Markets</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                Germany · France · Italy · Netherlands · Poland · Austria · Switzerland · Russia · United Kingdom
              </p>
            </div>
          </div>

          <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: '2rem', borderTop: '1px solid #1E293B', textAlign: 'center', fontSize: '0.85rem', color: '#475569' }}>
            © {new Date().getFullYear()} Anavera Tekstil. All rights reserved. A premium manufacturing branch of terzihizmeti.com.tr
          </div>
        </footer>

        {/* FLOATING WHATSAPP BUTTON (FIXED FOR ALL DEVICES) */}
        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '25px', right: '25px', backgroundColor: '#25D366', color: '#FFF', borderRadius: '50px', padding: '0.9rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5)', textDecoration: 'none', fontWeight: 800, fontSize: '0.95rem', zIndex: 9999, transition: 'transform 0.2s' }}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span style={{ display: 'inline-block' }}>WhatsApp Quote</span>
        </a>

      </div>
    </>
  );
}
