import type { Metadata } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';

const SITE = 'https://terzihizmeti.com.tr';
const BASE_PATH = '/otele-gelen-terzi-antalya';
const PHONE = '+90 531 898 64 18';
const WA_DEF = `https://wa.me/905318986418?text=${encodeURIComponent('Merhaba, otelime terzi servisi hakkında bilgi almak istiyorum.')}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Otele Gelen Terzi — Antalya Otel Bölgeleri',
  description: 'Belek, Lara, Güzeloba, Kemer, Side dahil Antalya\'nın tüm otel bölgelerine terzi servisi. Bölgenizi seçin, otel adınızı iletin.',
  alternates: {
    canonical: `${SITE}${BASE_PATH}`,
    languages: {
      'tr': `${SITE}${BASE_PATH}`,
      'en': `${SITE}/en/hotel-tailor-antalya`,
      'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya`,
      'de': `${SITE}/de/schneider-service-hotel-antalya`,
      'x-default': `${SITE}${BASE_PATH}`,
    },
  },
  robots: { index: true, follow: true },
};

export default function OtelBolgeleriTrHub() {
  return (
    <div style={{ background: '#1E3329', color: '#F5F1E8', minHeight: '100vh' }}>
      <nav className="nav" aria-label="Ana navigasyon">
        <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
        <a href="/" className="nav-home">← Ana Sayfa</a>
        <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP →</a>
      </nav>
      <section className="sec" aria-labelledby="hub-h">
        <div className="ctr" style={{ maxWidth: 760 }}>
          <div className="sec-head">
            <span className="eyebrow">Otele Gelen Terzi</span>
            <h1 className="sec-h ff" id="hub-h">Antalya'nın Otel Bölgelerine Terzi Servisi</h1>
            <p className="sec-sub">Bölgenizi seçin — otel adınızı ve tarihinizi WhatsApp'tan iletin, terzimiz size gelsin.</p>
          </div>
          <div className="nb-grid">
            {OTEL_BOLGELERI.map((r) => (
              <a key={r.slug} href={`${BASE_PATH}/${r.slug}`} className="nb-card">
                <span className="nb-name">{r.name}</span>
                <span className="nb-tag">{r.travelTime.tr}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-final" aria-label="İletişim">
        <h2 className="cta-h ff">Bölgeniz Listede Yok mu?</h2>
        <p className="cta-sub">Yine de ulaşabiliriz — WhatsApp'tan sorun.</p>
        <div className="cta-btns">
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
          <a href="tel:+905318986418" className="btn-outline-white">📞 {PHONE}</a>
        </div>
      </section>
    </div>
  );
}
