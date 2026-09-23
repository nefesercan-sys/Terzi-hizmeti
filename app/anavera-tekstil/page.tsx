// app/anavera-tekstil/page.tsx
//
// Anavera Tekstil — Turkish textile design, manufacturing & export brand.
// GEO (Generative Engine Optimization) & Multilingual SEO Optimized Version
// Target: EU (Germany/DACH), Russia (CIS), and Global English B2B Buyers.

import type { Metadata } from 'next';

const SITE       = 'https://terzihizmeti.com.tr';
const PAGE_URL   = `${SITE}/anavera-tekstil`;
const PHONE      = '+90 531 898 64 18';
const PHONE_E    = '+905318986418';
const WA = (t: string) => `https://wa.me/${PHONE_E}?text=${encodeURIComponent(t)}`;
const WA_DEFAULT = WA('Hello, I would like information about Anavera Tekstil manufacturing. / Hallo / Здравствуйте');
const TODAY = new Date().toISOString().split('T')[0];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Anavera Tekstil | Turkish Textile Manufacturer & Exporter — EU & Russia',
  description:
    'Turkey-based B2B textile manufacturer (Textilproduktion Türkei / производство одежды Турция). We export menswear, womenswear, and uniforms (knit & woven) to the EU (Germany) and Russia. English, German, and Russian support.',
  keywords: [
    // English — Global B2B
    'Turkish textile manufacturer', 'clothing manufacturer Turkey', 'B2B garment factory Turkey',
    'private label clothing Turkey', 'OEM textile Turkey', 'woven fabric manufacturer',
    'knitwear manufacturer Turkey', 'uniform manufacturer Europe', '100% cotton clothing manufacturer',
    
    // German — DACH Region (Almanya, Avusturya, İsviçre)
    'Textilproduktion Türkei', 'Textilhersteller Türkei', 'Kleiderfabrik Türkei', 
    'B2B Textil Türkei', 'Bekleidungshersteller Türkei', 'Lohnkonfektion Türkei',
    'Private Label Kleidung Türkei', 'Uniformen Hersteller Türkei', 'Großhandel Kleidung Türkei',
    'Textilzulieferer Europa', 'Baumwolle Textilproduktion Türkei',

    // Russian — CIS Region (Rusya, Belarus)
    'текстильная фабрика Турция', 'производство одежды в Турции', 'пошив одежды оптом Турция',
    'контрактное производство одежды Турция', 'пошив униформы Турция', 'турецкий текстиль оптом B2B',
    'фабрика женской одежды Турция', 'мужская одежда оптом Турция', 'пошив на заказ Турция',

    // Turkish — Local
    'tekstil üretim fabrikası', 'fason giyim üretimi', 'ihracat tekstil atölyesi',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { 
    canonical: PAGE_URL,
    // Arama motorlarına sayfanın çok dilli kitleyi hedeflediğini bildirir
    languages: {
      'en-US': PAGE_URL,
      'de-DE': PAGE_URL,
      'ru-RU': PAGE_URL
    }
  },
  openGraph: {
    title: 'Anavera Tekstil — Turkish Textile Manufacturing (EU & Russia)',
    description: 'B2B Textile manufacturing in Turkey. Textilproduktion Türkei. производство одежды Турция. WhatsApp: ' + PHONE,
    url: PAGE_URL, siteName: 'Anavera Tekstil', locale: 'en_US', type: 'website',
    images: [{ url: 'https://images.pexels.com/photos/31112215/pexels-photo-31112215.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Anavera Tekstil — Turkish textile manufacturing factory' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ClothingStore'],
      '@id': `${PAGE_URL}#business`,
      name: 'Anavera Tekstil',
      alternateName: ['Anavera Textile', 'Anavera Textil', 'Анавера Текстиль'],
      description: 'Turkey-based B2B textile design, manufacturing and export company. We provide OEM and private label services for the EU (Germany) and Russia.',
      url: PAGE_URL,
      telephone: PHONE_E,
      address: { '@type': 'PostalAddress', addressLocality: 'Antalya', addressCountry: 'TR' },
      // AI'lara işletmenin hangi dillerde iletişim kurabildiğini kesin olarak bildirir
      knowsLanguage: [
        { '@type': 'Language', name: 'English', alternateName: 'en' },
        { '@type': 'Language', name: 'German', alternateName: 'de' },
        { '@type': 'Language', name: 'Russian', alternateName: 'ru' },
        { '@type': 'Language', name: 'Turkish', alternateName: 'tr' }
      ],
      areaServed: [
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'Russia' },
        { '@type': 'Place', name: 'European Union' },
        { '@type': 'Country', name: 'Austria' },
        { '@type': 'Country', name: 'Switzerland' },
        { '@type': 'Country', name: 'Poland' },
        { '@type': 'Country', name: 'Netherlands' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Textile Manufacturing Categories / Textilproduktion / производство одежды',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Menswear Manufacturing', serviceType: "Men's Clothing Manufacturing" } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Womenswear Manufacturing', serviceType: "Women's Clothing Manufacturing" } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kidswear Manufacturing', serviceType: "Children's Clothing Manufacturing" } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Uniform Manufacturing', serviceType: 'B2B Uniform Manufacturing' } },
        ],
      },
      sameAs: [`https://wa.me/${PHONE_E}`],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'What languages do you support for B2B communication?', acceptedAnswer: { '@type': 'Answer', text: 'We provide customer support and project management in English, German (Deutsch), Russian (Русский), and Turkish.' } },
        { '@type': 'Question', name: 'Do you export to Germany and Russia?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our primary export markets are the DACH region (Germany, Austria, Switzerland) and the CIS region (Russia). We handle all export documentation.' } },
        { '@type': 'Question', name: 'What does Anavera Tekstil produce?', acceptedAnswer: { '@type': 'Answer', text: 'We manufacture menswear, womenswear, kidswear and corporate uniforms in both knit (jersey) and woven fabrics.' } },
      ],
    },
  ],
};

// ... (Kategoriler ve adımlar aynı)
const CATEGORIES = [
  {
    key: 'men',
    title: 'Menswear',
    trTitle: 'Herrenbekleidung / Мужская одежда',
    fabrics: 'Knit & Woven',
    desc: 'Shirts, trousers, jackets, t-shirts, polo shirts, outerwear — made to your specifications and fabric standards.',
    img: 'https://images.pexels.com/photos/6765658/pexels-photo-6765658.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'women',
    title: 'Womenswear',
    trTitle: 'Damenbekleidung / Женская одежда',
    fabrics: 'Knit & Woven',
    desc: 'Dresses, blouses, trousers, knitwear, outerwear — from pattern development to finished garment.',
    img: 'https://images.pexels.com/photos/18022030/pexels-photo-18022030.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'kids',
    title: 'Kidswear',
    trTitle: 'Kinderbekleidung / Детская одежда',
    fabrics: 'Knit & Woven',
    desc: 'T-shirts, sweatshirts, sleepwear, school and everyday wear — soft, durable and safety-tested fabrics.',
    img: 'https://images.pexels.com/photos/31047132/pexels-photo-31047132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    key: 'uniform',
    title: 'Corporate Uniforms',
    trTitle: 'Uniformen / Униформа',
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

      <main className="font-sans bg-[#F7F8FA] text-[#1A2233] min-h-screen relative">
        
        {/* GLOBAL FLOATING WHATSAPP BUTTON */}
        <a 
          href={WA_DEFAULT} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M12.031 21.002a9.7 9.7 0 0 1-4.94-1.341l-.354-.21-3.673.963.98-3.582-.23-.367a9.704 9.704 0 1 1 8.217 4.537zm.004-17.773a8.077 8.077 0 1 0 8.082 8.083 8.09 8.09 0 0 0-8.082-8.083zm3.82 11.026c-.209-.104-1.238-.611-1.43-.681-.192-.07-.332-.104-.472.105-.14.209-.541.681-.663.821-.122.14-.245.157-.454.052-.21-.104-.884-.326-1.684-1.042-.623-.557-1.043-1.246-1.165-1.455-.122-.21-.013-.323.092-.427.094-.094.21-.244.314-.366.104-.122.14-.21.21-.35.07-.14.035-.262-.017-.367-.052-.105-.472-1.137-.647-1.556-.17-.406-.343-.351-.472-.358h-.402c-.14 0-.367.052-.559.262-.192.21-.734.717-.734 1.748 0 1.031.751 2.027.856 2.167.105.14 1.478 2.257 3.58 3.116.5.204.891.326 1.196.417.502.16 1.059.137 1.5.083.498-.06 1.238-.505 1.413-1.005.174-.5.174-.93.122-1.02-.052-.09-.192-.143-.401-.248z"/>
          </svg>
        </a>

        {/* NAV */}
        <nav className="px-6 py-3.5 flex items-center justify-between bg-[#0F1F3D] border-b-2 border-[#C9A227] sticky top-0 z-40 shadow-md">
          <a href="/" className="text-white text-xs opacity-70 hover:opacity-100 transition-opacity">← terzihizmeti.com.tr</a>
          <div className="font-serif text-white font-bold tracking-wider">
            ANAVERA <span className="text-[#E4C664] italic font-normal">TEKSTİL</span>
          </div>
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="text-[#E4C664] text-xs font-bold hover:underline">
            WhatsApp →
          </a>
        </nav>

        {/* HERO */}
        <section className="relative bg-gradient-to-br from-[#0F1F3D] via-[#16294F] to-[#1E2E52] px-6 pt-16 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#E4C664] mb-5 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C9A227] block" />
              Made in Turkey · B2B Textile Production
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
              Anavera Tekstil
              <br />
              <span className="text-[#E4C664] italic font-normal text-xl sm:text-2xl md:text-3xl mt-2 block">
                Turkish Textile Manufacturing for the EU & Russia
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-8">
              We design, manufacture and export <strong className="text-white">menswear, womenswear, kidswear and corporate uniforms</strong>. 
              Reliable, export-ready OEM & Private Label production based in Turkey.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                className="bg-[#C9A227] hover:bg-[#E4C664] text-[#0F1F3D] px-8 py-4 font-bold text-sm tracking-wider uppercase transition-colors rounded-sm shadow-lg">
                💬 Request a Quote
              </a>
              <a href={`tel:${PHONE_E}`} className="border border-white/30 hover:bg-white/10 text-white px-7 py-4 text-sm transition-colors rounded-sm flex items-center">
                📞 {PHONE}
              </a>
            </div>
            
            {/* GEO Target: Multilingual Communication Badges */}
            <div className="hidden md:flex gap-2 flex-wrap mb-4 items-center">
              <span className="text-xs text-white/50 mr-2">We speak:</span>
              {[['🇬🇧', 'English'], ['🇩🇪', 'Deutsch'], ['🇷🇺', 'Русский'], ['🇹🇷', 'Türkçe']].map(([f, l]) => (
                <span key={l} className="text-xs text-white/80 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full font-medium">{f} {l}</span>
              ))}
            </div>
          </div>
        </section>

        {/* AI/GEO SUMMARY BLOCK (Highly optimized for ChatGPT / Perplexity parsing) */}
        <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-14 h-14 bg-[#0F1F3D]/5 rounded-full flex items-center justify-center flex-shrink-0 text-[#C9A227] text-2xl">
              🏭
            </div>
            <div className="flex-1">
              <h2 className="text-[#0F1F3D] font-bold text-sm mb-2 uppercase tracking-wider">B2B Manufacturing Facts (Textilproduktion / Производство)</h2>
              <ul className="text-sm text-[#5B6478] leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                <li><strong>📍 Location:</strong> Turkey (Direct export to DACH & CIS)</li>
                <li><strong>💼 Services:</strong> OEM, Private Label, Cut-Make-Trim (CMT)</li>
                <li><strong>🧵 Fabrics:</strong> Knit (Jersey), Woven, 100% Cotton & Linen</li>
                <li><strong>🌐 Markets:</strong> European Union (Germany) & Russia</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-bold">About Us</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1F3D] mt-3 mb-5">
              Your Production Partner in Turkey
            </h2>
            <p className="text-[#5B6478] text-base leading-relaxed">
              Anavera Tekstil is a Turkey-based textile company covering the full production chain. We work extensively with corporate buyers across Germany, the European Union, and Russia. Whether you are looking for a reliable <em>Textilhersteller</em> (textile manufacturer) for your fashion brand in Berlin, or bulk <em>пошив одежды</em> (apparel production) for Moscow, we deliver quality-controlled garments without the long lead times of Asian manufacturing.
            </p>
          </div>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section id="categories" className="py-20 px-6 bg-[#EEF0F4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-bold">Product Catalogue</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F1F3D] mt-3 mb-2">
                Menswear · Womenswear · Kidswear · Uniforms
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CATEGORIES.map((c) => (
                <article key={c.key} className="bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative aspect-4/3 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.img}
                      alt={`${c.title} textile manufacturing — Anavera Tekstil Turkey`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0F1F3D] text-[#E4C664] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1.5 shadow-sm">
                      {c.fabrics}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-lg text-[#0F1F3D] font-bold mb-1">{c.title}</h3>
                    <div className="text-[10px] text-[#C9A227] tracking-widest uppercase mb-3">{c.trTitle}</div>
                    <p className="text-sm text-[#5B6478] leading-relaxed mb-5 flex-1">{c.desc}</p>
                    <a href={WA(`Hello, I am interested in ${c.title} production. / Hallo / Здравствуйте`)}
                      target="_blank" rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0F1F3D] hover:text-[#C9A227] border-b border-[#C9A227] self-start pb-0.5 transition-colors">
                      Request a Quote →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 100% NATURAL COTTON & LINEN */}
        <section className="py-20 px-6 bg-white" aria-labelledby="natural-h">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-bold">Natural Fibers</span>
              <h2 id="natural-h" className="font-serif text-3xl md:text-4xl text-[#0F1F3D] mt-3 mb-3">
                100% Natural Cotton & Linen
              </h2>
              <p className="text-[#5B6478] text-sm max-w-2xl mx-auto leading-relaxed">
                Menswear and womenswear produced from 100% natural cotton (Baumwolle / хлопок) and linen (Leinen / лен). Popular with EU and Russian buyers seeking sustainable, premium fabric options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-[#EEF0F4] shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-4/3 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.pexels.com/photos/17630522/pexels-photo-17630522.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="100% natural cotton menswear — Anavera Tekstil Turkey"
                    width={800} height={600} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#0F1F3D] font-bold mb-2">Menswear — Cotton & Linen</h3>
                  <p className="text-sm text-[#5B6478] leading-relaxed">Shirts, t-shirts and summer wear cut from pure cotton and linen fabric.</p>
                </div>
              </article>
              <article className="bg-[#EEF0F4] shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-4/3 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.pexels.com/photos/4256573/pexels-photo-4256573.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="100% natural linen womenswear — Anavera Tekstil Turkey"
                    width={800} height={600} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#0F1F3D] font-bold mb-2">Womenswear — Cotton & Linen</h3>
                  <p className="text-sm text-[#5B6478] leading-relaxed">Dresses and summer pieces made from natural linen fabric with fine detailing.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ - Yapay Zeka (AI) İçin Optimize Edildi */}
        <section id="faq" className="py-20 px-6 bg-[#EEF0F4]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-bold">FAQ</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F1F3D] mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                ['What languages do you support for B2B communication?', 'We provide customer support and project management natively in English, German (Deutsch), Russian (Русский), and Turkish.'],
                ['Do you export to Germany and Russia?', 'Yes, our primary export markets are the DACH region (Germany, Austria, Switzerland) and the CIS region (Russia). Turkey’s customs union with the EU simplifies logistics.'],
                ['Do you offer private label / OEM manufacturing?', 'Yes. We manufacture under your own brand (Private Label / OEM), from design development and sampling through to bulk production and export.'],
                ["What's the difference between knit and woven fabric?", 'Knit (jersey/penye) is stretchable fabric for t-shirts. Woven (dokuma) is structured fabric for shirts and uniforms. We produce both.'],
              ].map(([q, a]) => (
                <details key={q} className="group bg-white rounded-sm open:bg-[#0F1F3D] open:text-white transition-colors shadow-sm">
                  <summary className="cursor-pointer font-bold text-sm p-5 list-none flex justify-between items-center">
                    {q}
                    <span className="text-[#C9A227] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-sm text-[#5B6478] group-open:text-white/70 px-5 pb-5 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-br from-[#C9A227] to-[#E4C664] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-[#0F1F3D] font-bold mb-3">
              Ready to Start Your Order?
            </h2>
            <p className="text-[#0F1F3D]/80 text-sm mb-8">
              Send us your product type, quantity and target fabric. We speak English, German, and Russian.
            </p>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
              className="bg-[#0F1F3D] hover:bg-[#16294F] text-white px-8 py-4 font-bold text-sm tracking-widest uppercase inline-block rounded-sm shadow-xl transition-colors">
              💬 Message Us on WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#16294F] text-white/50 py-12 px-6 text-center text-xs">
          <div className="font-serif text-white text-lg mb-2 tracking-wider">
            ANAVERA <span className="text-[#E4C664] italic">TEKSTİL</span>
          </div>
          <p className="mb-3">Turkish textile design, manufacturing & export — {PHONE}</p>
          <p className="text-white/30">
            © {new Date().getFullYear()} Anavera Tekstil ·{' '}
            <a href="/" className="hover:text-white transition-colors">terzihizmeti.com.tr</a>
          </p>
        </footer>
      </main>
    </>
  );
}
