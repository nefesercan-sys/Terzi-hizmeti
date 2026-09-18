import type { Metadata } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';

const SITE = 'https://terzihizmeti.com.tr';
const BASE_PATH = '/otele-gelen-terzi-antalya';
const PHONE = '+90 531 898 64 18';
const WA_DEF = `https://wa.me/905318986418?text=${encodeURIComponent('Merhaba, otelime terzi servisi hakkında bilgi almak istiyorum.')}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Otele Gelen Terzi — Antalya Otel Bölgelerine Mobil Servis',
  description: 'Belek, Lara, Güzeloba, Kemer, Side dahil Antalya\'nın tüm otel bölgelerine terzi servisi. Tadilat, tamir, ütü ve kuru temizleme — biz size geliyoruz.',
  keywords: [
    'otele gelen terzi Antalya', 'otel terzi servisi', 'Belek otel terzi', 'Lara otel terzi',
    'Kemer otel terzi', 'Side otel terzi', 'fermuar tamiri otel', 'gelinlik tadilatı otel Antalya',
  ],
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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    title: 'Otele Gelen Terzi — Antalya Otel Bölgeleri',
    description: 'Belek, Lara, Güzeloba, Kemer, Side otellerine terzi servisi. Tadilat, tamir, ütü, kuru temizleme.',
    url: `${SITE}${BASE_PATH}`, siteName: 'Terzi Can', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Otele Gelen Terzi Antalya' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${BASE_PATH}#service`,
      name: 'Antalya Otel Bölgelerine Otele Gelen Terzi Servisi',
      serviceType: 'Tadilat, tamir, ütü, kuru temizleme — otele gelen mobil terzi hizmeti',
      provider: { '@type': 'LocalBusiness', name: 'Terzi Can', telephone: '+905318986418', url: `${SITE}/antalya-terzi` },
      areaServed: OTEL_BOLGELERI.map((r) => ({ '@type': 'Place', name: r.name })),
      availableLanguage: ['tr', 'en', 'de', 'ru'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Otele gelen terzi servisi nasıl çalışır?', acceptedAnswer: { '@type': 'Answer', text: 'Otel adınızı, oda numaranızı ve size uygun saati WhatsApp\'tan iletin. Terzimiz size gelir, ölçü alır veya kıyafetinizi teslim alır, tamir/tadilatını yapıp geri getirir.' } },
        { '@type': 'Question', name: 'Hangi otel bölgelerine geliyorsunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Belek, Lara, Güzeloba, Kemer ve Side\'ye, talep üzerine Antalya\'nın diğer bölgelerine de hizmet veriyoruz.' } },
        { '@type': 'Question', name: 'Tadilat veya tamir ne kadar sürede tamamlanır?', acceptedAnswer: { '@type': 'Answer', text: 'Çoğu tadilat ve tamir 24 saat içinde tamamlanır. Gelinlik veya abiye için mümkün olduğunca erken iletişime geçmenizi öneririz.' } },
        { '@type': 'Question', name: 'Hangi dilleri konuşuyorsunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Ekibimiz Türkçe, İngilizce, Almanca ve Rusça konuşabiliyor.' } },
      ],
    },
  ],
};

const SERVICES = [
  { icon: '📏', t: 'Tadilat', d: 'Boy kısaltma, daraltma, ölçü ayarı — pantolon, elbise, takım, etek.' },
  { icon: '🧵', t: 'Tamir', d: 'Fermuar, yırtık, düğme, astar — hızlı ve temiz tamir işleri.' },
  { icon: '👗', t: 'Gelinlik & Abiye', d: 'Özel gün için hassas tadilat, yerinde randevu ile.' },
  { icon: '🧺', t: 'Ütü & Kuru Temizleme', d: 'Buharlı ütü, profesyonel kuru temizleme, otelden alım.' },
];

export default function OtelBolgeleriTrHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ background: '#1E3329', color: '#F5F1E8', minHeight: '100vh' }}>
        <nav className="nav" aria-label="Ana navigasyon">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Ana Sayfa</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP →</a>
        </nav>

        <section className="hero" aria-labelledby="hub-h">
          <div className="hero-bg" aria-hidden="true">
            <img src="/terzi-can-hero.jpg" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">🏨 Belek · Lara · Güzeloba · Kemer · Side</span>
            <h1 id="hub-h">Otele Gelen Terzi — <span className="accent">Mobil Servis</span></h1>
            <p className="hero-desc">
              Bölgenizi seçin, otel adınızı ve uygun saati WhatsApp'tan iletin — terzimiz size gelsin.
              Tadilat, tamir, ütü ve kuru temizleme, doğrudan otelinize teslim.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 WhatsApp'tan Yazın →</a>
              <a href="tel:+905318986418" className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="about-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">Hizmet Hakkında</span>
              <h2 className="sec-h ff" id="about-h">Tatilde Neden Otele Gelen Terzi?</h2>
              <p className="sec-sub">
                Gala yemeği öncesi bozulan bir fermuar, ufak bir tadilat gereken elbise ya da kuru
                temizlemeye ihtiyaç duyan bir takım — tatildeyken kendi başınıza bir terzi bulmaya
                nadiren zaman kalır. Terzi Can, Belek, Lara, Güzeloba, Kemer veya Side'deki otelinize
                doğrudan gelir: ölçü alır, tamir eder, kıyafetinizi teslim alıp geri getirir — otelden
                hiç çıkmanıza gerek kalmadan. Ekibimiz Türkçe, İngilizce, Almanca ve Rusça konuşabildiği
                için iletişim son derece kolay.
              </p>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="svc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Hizmetler</span>
              <h2 className="sec-h ff" id="svc-h">Otelinizde Neler Yapıyoruz</h2>
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
              <span className="eyebrow">Bölgeler</span>
              <h2 className="sec-h ff" id="regions-h">Otel Bölgenizi Seçin</h2>
              <p className="sec-sub">Her bölgenin kendi sayfası, otel listesi, ulaşım süresi ve doğrudan WhatsApp iletişimi var.</p>
            </div>
            <div className="wk-grid">
              {OTEL_BOLGELERI.map((r) => (
                <a key={r.slug} href={`${BASE_PATH}/${r.slug}`} className="wk-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="wk-tr">{r.name}</div>
                  <p className="wk-d">{r.blurb.tr}</p>
                  <p style={{ fontSize: '.75rem', color: 'rgba(245,241,232,.5)', marginTop: '.6rem' }}>⏱ {r.travelTime.tr}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="how-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="how-h">Nasıl Çalışır</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">1. Mesaj Gönderin</div><div className="howto-d">Otel adınızı, oda numaranızı ve talebinizi WhatsApp'tan iletin.</div></div>
              <div className="howto-item"><div className="howto-t">2. Randevu Onaylayalım</div><div className="howto-d">Size uygun bir saati, genellikle aynı gün içinde onaylıyoruz.</div></div>
              <div className="howto-item"><div className="howto-t">3. Yerinde Servis</div><div className="howto-d">Terzimiz size gelir, ölçü alır veya kıyafetinizi teslim alır.</div></div>
              <div className="howto-item"><div className="howto-t">4. Otelinize Teslim</div><div className="howto-d">Hazır olan kıyafet 24 saat içinde geri teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Otele gelen terzi servisi nasıl çalışır?', 'Otel adınızı, oda numaranızı ve size uygun saati WhatsApp\'tan iletin. Terzimiz size gelir, ölçü alır veya kıyafetinizi teslim alır, tamir/tadilatını yapıp geri getirir.'],
              ['Hangi otel bölgelerine geliyorsunuz?', 'Belek, Lara, Güzeloba, Kemer ve Side\'ye, talep üzerine Antalya\'nın diğer bölgelerine de hizmet veriyoruz.'],
              ['Tadilat veya tamir ne kadar sürede tamamlanır?', 'Çoğu tadilat ve tamir 24 saat içinde tamamlanır. Gelinlik veya abiye için mümkün olduğunca erken iletişime geçmenizi öneririz.'],
              ['Hangi dilleri konuşuyorsunuz?', 'Ekibimiz Türkçe, İngilizce, Almanca ve Rusça konuşabiliyor.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
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
    </>
  );
}
