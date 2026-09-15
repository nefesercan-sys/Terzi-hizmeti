import type { Metadata } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';

const SITE = 'https://terzihizmeti.com.tr';
const BASE_PATH = '/de/schneider-service-hotel-antalya';
const WA_DEF = `https://wa.me/905318986418?text=${encodeURIComponent('Hallo, ich möchte Informationen zum Schneiderservice in meinem Hotel.')}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Schneider im Hotel Antalya — Alle Hotelbezirke',
  description: 'Mobiler Schneiderservice zu Hotels in den Ferienorten von Antalya: Belek, Lara, Güzeloba, Kemer, Side. Bezirk wählen, Hotelnamen mitteilen.',
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
  robots: { index: true, follow: true },
};

export default function OtelBolgeleriDeHub() {
  return (
    <div style={{ background: '#1E3329', color: '#F5F1E8', minHeight: '100vh' }}>
      <nav className="nav" aria-label="Hauptnavigation">
        <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
        <a href="/" className="nav-home">← Startseite</a>
        <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP →</a>
      </nav>
      <section className="sec" aria-labelledby="hub-h">
        <div className="ctr" style={{ maxWidth: 760 }}>
          <div className="sec-head">
            <span className="eyebrow">Schneider im Hotel</span>
            <h1 className="sec-h ff" id="hub-h">Mobiler Schneiderservice in Antalyas Hotelbezirken</h1>
            <p className="sec-sub">Wählen Sie Ihren Bezirk — teilen Sie Hotelname und Datum per WhatsApp mit, unser Schneider kommt zu Ihnen.</p>
          </div>
          <div className="nb-grid">
            {OTEL_BOLGELERI.map((r) => (
              <a key={r.slug} href={`${BASE_PATH}/${r.slug}`} className="nb-card">
                <span className="nb-name">{r.name}</span>
                <span className="nb-tag">{r.travelTime.de}</span>
              </a>
            ))}
          </div>
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
  );
}
