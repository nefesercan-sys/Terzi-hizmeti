import type { Metadata } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';

const SITE = 'https://terzihizmeti.com.tr';
const BASE_PATH = '/en/hotel-tailor-antalya';
const WA_DEF = `https://wa.me/905318986418?text=${encodeURIComponent('Hello, I would like information about tailor service to my hotel.')}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Hotel Tailor Antalya — Mobile Service in Every Hotel District',
  description: "Mobile tailor service to hotels across Antalya's resort districts: Belek, Lara, Güzeloba, Kemer, Side. Alterations, repairs, ironing and dry cleaning — we come to you.",
  keywords: [
    'hotel tailor Antalya', 'mobile tailor Antalya', 'tailor Belek hotel', 'tailor Lara hotel',
    'tailor Kemer hotel', 'tailor Side hotel', 'zipper repair Antalya', 'dress alteration hotel Antalya',
    'dry cleaning hotel Antalya', 'wedding dress alteration Antalya',
  ],
  alternates: {
    canonical: `${SITE}${BASE_PATH}`,
    languages: {
      'tr': `${SITE}/otele-gelen-terzi-antalya`,
      'en': `${SITE}${BASE_PATH}`,
      'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya`,
      'de': `${SITE}/de/schneider-service-hotel-antalya`,
      'x-default': `${SITE}${BASE_PATH}`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    title: 'Hotel Tailor Antalya — Mobile Service',
    description: 'We come to your hotel in Belek, Lara, Güzeloba, Kemer or Side. Alterations, repairs, ironing, dry cleaning.',
    url: `${SITE}${BASE_PATH}`, siteName: 'Terzi Can', locale: 'en_US', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Hotel Tailor Antalya' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${BASE_PATH}#service`,
      name: 'Mobile Tailor Service in Antalya Hotel Districts',
      serviceType: 'Alterations, repairs, ironing, dry cleaning — mobile hotel service',
      provider: { '@type': 'LocalBusiness', name: 'Terzi Can', telephone: '+905318986418', url: `${SITE}/antalya-terzi` },
      areaServed: OTEL_BOLGELERI.map((r) => ({ '@type': 'Place', name: r.name })),
      availableLanguage: ['en', 'de', 'ru', 'tr'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How does the mobile hotel tailor service work?', acceptedAnswer: { '@type': 'Answer', text: 'Share your hotel name, room number and a convenient time on WhatsApp. Our tailor comes to you, takes measurements or collects the item, and returns it repaired or altered.' } },
        { '@type': 'Question', name: 'Which hotel districts do you cover?', acceptedAnswer: { '@type': 'Answer', text: 'We serve Belek, Lara, Güzeloba, Kemer and Side, and other Antalya districts on request.' } },
        { '@type': 'Question', name: 'How long does an alteration or repair take?', acceptedAnswer: { '@type': 'Answer', text: 'Most alterations and repairs are completed within 24 hours. For wedding or evening dresses, we recommend contacting us as early as possible.' } },
        { '@type': 'Question', name: 'What languages do you speak?', acceptedAnswer: { '@type': 'Answer', text: 'Our team speaks English, German, Russian and Turkish.' } },
      ],
    },
  ],
};

const SERVICES = [
  { icon: '📏', t: 'Alterations', d: 'Hemming, taking in, resizing — trousers, dresses, suits, skirts.' },
  { icon: '🧵', t: 'Repairs', d: 'Zippers, tears, buttons, lining — fast, clean repair work.' },
  { icon: '👗', t: 'Wedding & Evening Wear', d: 'Careful fitting for the special occasion, scheduled on-site.' },
  { icon: '🧺', t: 'Ironing & Dry Cleaning', d: 'Steam pressing, professional dry cleaning, hotel pickup.' },
];

export default function OtelBolgeleriEnHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ background: '#1E3329', color: '#F5F1E8', minHeight: '100vh' }}>
        <nav className="nav" aria-label="Main navigation">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Home</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP →</a>
        </nav>

        <section className="hero" aria-labelledby="hub-h">
          <div className="hero-bg" aria-hidden="true">
            <img src="/terzi-can-hero.jpg" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">🏨 Belek · Lara · Güzeloba · Kemer · Side</span>
            <h1 id="hub-h">Hotel Tailor — <span className="accent">Mobile Service</span></h1>
            <p className="hero-desc">
              Choose your district, share your hotel name and preferred time on WhatsApp — our tailor
              comes to you. Alterations, repairs, ironing and dry cleaning, delivered directly to your
              hotel.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Message on WhatsApp →</a>
              <a href="tel:+905318986418" className="btn-secondary">📞 +90 531 898 64 18</a>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="about-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">About This Service</span>
              <h2 className="sec-h ff" id="about-h">Why a Mobile Tailor on Holiday?</h2>
              <p className="sec-sub">
                A broken zipper before a gala dinner, a dress that needs a small adjustment, or a suit
                that needs dry cleaning — on holiday, there's rarely time to find a tailor yourself.
                Terzi Can comes directly to your hotel in Belek, Lara, Güzeloba, Kemer or Side: we take
                measurements, repair, collect and return your garment — all without you having to leave
                the hotel. Our team speaks English, German, Russian and Turkish, so communication is
                straightforward.
              </p>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="svc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Services</span>
              <h2 className="sec-h ff" id="svc-h">What We Handle at Your Hotel</h2>
            </div>
            <div className="howto-list">
              {SERVICES.map((s) => (
                <div className="howto-item" key={s.t}>
                  <div className="howto-t">{s.icon} {s.t}</div>
                  <div className="howto-d">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="regions-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Districts</span>
              <h2 className="sec-h ff" id="regions-h">Choose Your Hotel District</h2>
              <p className="sec-sub">Each district has its own page with a hotel list, travel time and direct WhatsApp contact.</p>
            </div>
            <div className="wk-grid">
              {OTEL_BOLGELERI.map((r) => (
                <a key={r.slug} href={`${BASE_PATH}/${r.slug}`} className="wk-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="wk-tr">{r.name}</div>
                  <p className="wk-d">{r.blurb.en}</p>
                  <p style={{ fontSize: '.75rem', color: 'rgba(245,241,232,.5)', marginTop: '.6rem' }}>⏱ {r.travelTime.en}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="how-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">Process</span>
              <h2 className="sec-h ff" id="how-h">How It Works</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">1. Send a Message</div><div className="howto-d">Share your hotel name, room number and request on WhatsApp.</div></div>
              <div className="howto-item"><div className="howto-t">2. Confirm a Time</div><div className="howto-d">We confirm a convenient time, usually the same day.</div></div>
              <div className="howto-item"><div className="howto-t">3. On-Site Service</div><div className="howto-d">Our tailor comes to you, takes measurements or collects the item.</div></div>
              <div className="howto-item"><div className="howto-t">4. Delivered to Your Hotel</div><div className="howto-d">The finished item is returned within 24 hours.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">FAQ</span>
              <h2 className="sec-h ff" id="faq-h">Frequently Asked Questions</h2>
            </div>
            {[
              ['How does the mobile hotel tailor service work?', 'Share your hotel name, room number and a convenient time on WhatsApp. Our tailor comes to you, takes measurements or collects the item, and returns it repaired or altered.'],
              ['Which hotel districts do you cover?', 'We serve Belek, Lara, Güzeloba, Kemer and Side, and other Antalya districts on request.'],
              ['How long does an alteration or repair take?', 'Most alterations and repairs are completed within 24 hours. For wedding or evening dresses, we recommend contacting us as early as possible.'],
              ['What languages do you speak?', 'Our team speaks English, German, Russian and Turkish.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="Contact">
          <h2 className="cta-h ff">Not Staying in One of These Districts?</h2>
          <p className="cta-sub">We can likely still reach you — just ask on WhatsApp.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 Message on WhatsApp</a>
            <a href="tel:+905318986418" className="btn-outline-white">📞 +90 531 898 64 18</a>
          </div>
        </section>
      </div>
    </>
  );
}
