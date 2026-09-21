import type { Metadata } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';

const SITE = 'https://terzihizmeti.com.tr';
const BASE_PATH = '/de/schneider-service-hotel-antalya';
const WA_DEF = `https://wa.me/905318986418?text=${encodeURIComponent('Hallo, ich möchte Informationen zum Schneiderservice in meinem Hotel.')}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Schneider im Hotel Antalya — Mobiler Service in allen Hotelbezirken',
  description: 'Mobiler Schneiderservice zu Hotels in den Ferienorten von Antalya: Belek, Lara, Güzeloba, Kemer, Side. Änderungsschneiderei, Reparatur, Bügelservice und chemische Reinigung — wir kommen zu Ihnen.',
  keywords: [
    'Schneider Hotel Antalya', 'mobiler Schneider Antalya', 'Änderungsschneiderei Hotel',
    'Schneider Belek Hotel', 'Schneider Lara Hotel', 'Schneider Kemer Hotel', 'Schneider Side Hotel',
    'Reißverschluss Reparatur Antalya', 'Kleidung kürzen Antalya', 'chemische Reinigung Hotel Antalya',
  ],
  alternates: {
    canonical: `${SITE}${BASE_PATH}`,
    languages: {
      'tr': `${SITE}/otele-gelen-terzi-antalya`,
      'en': `${SITE}/en/hotel-tailor-antalya`,
      'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya`,
      'de': `${SITE}${BASE_PATH}`,
      'x-default': `${SITE}${BASE_PATH}`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    title: 'Schneider im Hotel Antalya — Mobiler Service',
    description: 'Wir kommen zu Ihrem Hotel in Belek, Lara, Güzeloba, Kemer oder Side. Änderungen, Reparaturen, Bügelservice, chemische Reinigung.',
    url: `${SITE}${BASE_PATH}`, siteName: 'Terzi Can', locale: 'de_DE', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Schneider im Hotel Antalya' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${BASE_PATH}#service`,
      name: 'Mobiler Schneiderservice in Antalyas Hotelbezirken',
      serviceType: 'Änderungsschneiderei, Reparatur, Bügelservice, chemische Reinigung — mobiler Hotelservice',
      provider: { '@type': 'LocalBusiness', name: 'Terzi Can', telephone: '+905318986418', url: `${SITE}/antalya-terzi`,
        hasMap: 'https://maps.app.goo.gl/QEgSkRoA8Nz8H62g8',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Hurma Mahallesi',
          addressLocality: 'Konyaaltı',
          addressRegion: 'Antalya',
          postalCode: '07130',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 36.8820, longitude: 30.6980 } },
      areaServed: OTEL_BOLGELERI.map((r) => ({ '@type': 'Place', name: r.name })),
      availableLanguage: ['de', 'en', 'ru', 'tr'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Wie funktioniert der mobile Schneiderservice im Hotel?', acceptedAnswer: { '@type': 'Answer', text: 'Sie teilen uns Hotelname, Zimmernummer und einen passenden Zeitpunkt per WhatsApp mit. Unser Schneider kommt zu Ihnen, nimmt Maß oder holt das Kleidungsstück ab, und liefert es fertig repariert oder geändert zurück.' } },
        { '@type': 'Question', name: 'In welche Hotelbezirke kommen Sie?', acceptedAnswer: { '@type': 'Answer', text: 'Wir bedienen Belek, Lara, Güzeloba, Kemer und Side sowie auf Anfrage weitere Bezirke Antalyas.' } },
        { '@type': 'Question', name: 'Wie lange dauert eine Änderung oder Reparatur?', acceptedAnswer: { '@type': 'Answer', text: 'Die meisten Änderungen und Reparaturen sind innerhalb von 24 Stunden fertig. Für Hochzeits- oder Abendkleider empfehlen wir, uns möglichst früh zu kontaktieren.' } },
        { '@type': 'Question', name: 'Welche Sprachen sprechen Sie?', acceptedAnswer: { '@type': 'Answer', text: 'Unser Team spricht Deutsch, Englisch, Russisch und Türkisch.' } },
      ],
    },
  ],
};

const SERVICES = [
  { icon: '📏', t: 'Änderungsschneiderei', d: 'Kürzen, Enger machen, Anpassen — Hosen, Kleider, Anzüge, Röcke.' },
  { icon: '🧵', t: 'Reparatur', d: 'Reißverschluss, Riss, Knopf, Futter — schnelle, saubere Reparatur.' },
  { icon: '👗', t: 'Braut- & Abendkleid', d: 'Vorsichtige Anpassung für den besonderen Anlass, mit Termin vor Ort.' },
  { icon: '🧺', t: 'Bügelservice & Reinigung', d: 'Dampfbügeln, professionelle chemische Reinigung, Abholung im Hotel.' },
];

export default function OtelBolgeleriDeHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ background: '#1E3329', color: '#F5F1E8', minHeight: '100vh' }}>
        <nav className="nav" aria-label="Hauptnavigation">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Startseite</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP →</a>
        </nav>

        {/* HERO mit Bild */}
        <section className="hero" aria-labelledby="hub-h">
          <div className="hero-bg" aria-hidden="true">
            <img src="/terzi-can-hero.jpg" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">🏨 Belek · Lara · Kundu · Konyaaltı · Kemer · Göynük · Muratpaşa · Side</span>
            <h1 id="hub-h">Schneider im Hotel — <span className="accent">Mobiler Service</span></h1>
            <p className="hero-desc">
              Wählen Sie Ihren Bezirk, teilen Sie Hotelname und Zeitpunkt per WhatsApp mit — unser
              Schneider kommt zu Ihnen. Änderungen, Reparaturen, Bügelservice und chemische Reinigung,
              direkt vor Ort in Ihrem Hotel.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Auf WhatsApp schreiben →</a>
              <a href="tel:+905318986418" className="btn-secondary">📞 +90 531 898 64 18</a>
            </div>
          </div>
        </section>

        {/* EINLEITUNG — reichhaltiger Text */}
        <section className="sec" aria-labelledby="about-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">Über den Service</span>
              <h2 className="sec-h ff" id="about-h">Warum ein mobiler Schneider im Urlaub?</h2>
              <p className="sec-sub">
                Ein gerissener Reißverschluss vor dem Galadinner, ein Kleid, das eine kleine Anpassung
                braucht, oder ein Anzug, der eine chemische Reinigung nötig hat — im Urlaub bleibt
                selten Zeit, selbst eine Änderungsschneiderei zu finden. Terzi Can kommt direkt zu
                Ihrem Hotel in Belek, Lara, Güzeloba, Kemer oder Side: Maßnehmen, Reparieren, Abholen
                und Zurückbringen — alles ohne dass Sie Ihr Hotel verlassen müssen. Unser Team spricht
                Deutsch, Englisch, Russisch und Türkisch, sodass die Kommunikation unkompliziert ist.
              </p>
            </div>
          </div>
        </section>

        {/* LEISTUNGEN */}
        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="svc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Leistungen</span>
              <h2 className="sec-h ff" id="svc-h">Was wir im Hotel für Sie erledigen</h2>
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

        {/* BEZIRKE — mit Bild + Beschreibung */}
        <section className="sec" aria-labelledby="regions-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Bezirke</span>
              <h2 className="sec-h ff" id="regions-h">Wählen Sie Ihren Hotelbezirk</h2>
              <p className="sec-sub">Jeder Bezirk hat eine eigene Seite mit Hotelliste, Fahrzeit und direktem WhatsApp-Kontakt.</p>
            </div>
            <div className="wk-grid">
              {OTEL_BOLGELERI.map((r) => (
                <a key={r.slug} href={`${BASE_PATH}/${r.slug}`} className="wk-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="wk-tr">{r.name}</div>
                  <p className="wk-d">{r.blurb.de}</p>
                  <p style={{ fontSize: '.75rem', color: 'rgba(245,241,232,.5)', marginTop: '.6rem' }}>⏱ {r.travelTime.de}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SO FUNKTIONIERT ES */}
        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="how-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">Ablauf</span>
              <h2 className="sec-h ff" id="how-h">So funktioniert es</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">1. Nachricht senden</div><div className="howto-d">Hotelname, Zimmernummer und Anliegen per WhatsApp mitteilen.</div></div>
              <div className="howto-item"><div className="howto-t">2. Termin vereinbaren</div><div className="howto-d">Wir bestätigen einen passenden Zeitpunkt, meist noch am selben Tag.</div></div>
              <div className="howto-item"><div className="howto-t">3. Vor-Ort-Service</div><div className="howto-d">Unser Schneider kommt zu Ihnen, nimmt Maß oder holt das Kleidungsstück ab.</div></div>
              <div className="howto-item"><div className="howto-t">4. Lieferung ins Hotel</div><div className="howto-d">Fertiges Stück wird innerhalb von 24 Stunden zurückgebracht.</div></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">FAQ</span>
              <h2 className="sec-h ff" id="faq-h">Häufig gestellte Fragen</h2>
            </div>
            {[
              ['Wie funktioniert der mobile Schneiderservice im Hotel?', 'Sie teilen uns Hotelname, Zimmernummer und einen passenden Zeitpunkt per WhatsApp mit. Unser Schneider kommt zu Ihnen, nimmt Maß oder holt das Kleidungsstück ab, und liefert es fertig repariert oder geändert zurück.'],
              ['In welche Hotelbezirke kommen Sie?', 'Wir bedienen Belek, Lara, Güzeloba, Kemer und Side sowie auf Anfrage weitere Bezirke Antalyas.'],
              ['Wie lange dauert eine Änderung oder Reparatur?', 'Die meisten Änderungen und Reparaturen sind innerhalb von 24 Stunden fertig. Für Hochzeits- oder Abendkleider empfehlen wir, uns möglichst früh zu kontaktieren.'],
              ['Welche Sprachen sprechen Sie?', 'Unser Team spricht Deutsch, Englisch, Russisch und Türkisch.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="Kontakt">
          <h2 className="cta-h ff">Nicht in einem dieser Bezirke?</h2>
          <p className="cta-sub">Wir erreichen Sie wahrscheinlich trotzdem — fragen Sie einfach per WhatsApp.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 Auf WhatsApp schreiben</a>
            <a href="tel:+905318986418" className="btn-outline-white">📞 +90 531 898 64 18</a>
          </div>
        </section>
      </div>
    </>
  );
}
