import type { Metadata } from 'next';

const SITE     = 'https://www.terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/konyaalti-paca-kisaltma`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, paça kısaltma hakkında bilgi almak istiyorum.');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const TODAY     = new Date().toISOString().split('T')[0];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Paça Kısaltma Konyaaltı — Aynı Gün Pantolon Kısaltma | ₺150\'den',
  description:
    'Konyaaltı\'da paça kısaltma hizmeti. Pantolon, kot, etek kısaltma — aynı gün teslim, ₺150\'den başlayan fiyatlarla. Hurma, Liman, Sarısu bölgesine ücretsiz servis. ☎ ' + PHONE,
  keywords: [
    'paça kısaltma Konyaaltı', 'pantolon kısaltma Antalya', 'kot paça kısaltma',
    'etek kısaltma Antalya', 'paça kısaltma fiyatı 2026', 'aynı gün paça kısaltma',
    'pantolon boyu kısaltma Konyaaltı', 'hemming Antalya', 'подшить брюки Анталья',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Paça Kısaltma Konyaaltı — Aynı Gün Teslim',
    description: 'Pantolon, kot, etek kısaltma. ₺150\'den başlayan fiyatlar. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.png`, width: 1024, height: 1024, alt: 'Paça Kısaltma Konyaaltı' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Paça Kısaltma Konyaaltı — Aynı Gün Pantolon Kısaltma',
      description: 'Konyaaltı\'da paça kısaltma hizmeti. Pantolon, kot, etek kısaltma.',
      inLanguage: 'tr',
      isPartOf: { '@id': `${SITE}#website` },
      about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Antalya Terzi', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: 'Paça Kısaltma Konyaaltı', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Paça Kısaltma',
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '150',
        highPrice: '220',
        offerCount: 3,
        offers: [
          { '@type': 'Offer', name: 'Kumaş Pantolon Paçası', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
          { '@type': 'Offer', name: 'Kot Paça Kısaltma', price: '180', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
          { '@type': 'Offer', name: 'Etek Kısaltma', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: 'Konyaaltı\'da Paça Kısaltma Nasıl Yaptırılır?',
      description: 'Pantolon veya etek paça kısaltma için adım adım süreç.',
      totalTime: 'PT1H',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'TRY', value: '150-220' },
      step: [
        { '@type': 'HowToStep', name: 'İstediğiniz Boyu Belirtin', text: 'WhatsApp\'tan pantolon/etek fotoğrafını ve kısaltmak istediğiniz miktarı belirtin.' },
        { '@type': 'HowToStep', name: 'Ölçü Kontrolü', text: 'Mümkünse atölyede prova ile en doğru boy belirlenir; adrese gelen servis de mevcuttur.' },
        { '@type': 'HowToStep', name: 'Dikim Yapılır', text: 'Görünmez dikiş tekniğiyle paça kısaltılır — orijinal görünüm korunur.' },
        { '@type': 'HowToStep', name: 'Aynı Gün Teslim', text: 'Çoğu paça kısaltma işlemi aynı gün içinde tamamlanır ve teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Paça kısaltma ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Standart paça kısaltma aynı gün içinde, genellikle 2-4 saat içinde tamamlanır.' } },
        { '@type': 'Question', name: 'Paça kısaltma fiyatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Kumaş pantolon ₺150\'den, kot pantolon ₺180\'den, etek kısaltma ₺150\'den başlar.' } },
        { '@type': 'Question', name: 'Orijinal dikişi bozmadan kısaltma yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, görünmez dikiş tekniğiyle çalışıyoruz — orijinal paça görünümü korunur, özellikle kot pantolonlarda orijinal dikiş izi bile taklit edilebilir.' } },
        { '@type': 'Question', name: 'Prova gerekiyor mu?', acceptedAnswer: { '@type': 'Answer', text: 'En doğru sonuç için prova önerilir ama net ölçü verirseniz provasız da yapabiliriz. Adrese gelen servisimizle yerinde ölçü de alabiliriz.' } },
      ],
    },
  ],
};

export default function PacaKisaltmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div>
        <div className="float">
          <a href={`tel:${PHONE_TEL}`} className="fbtn fbtn-call" aria-label="Ara">📞</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="fbtn fbtn-wa" aria-label="WhatsApp">💬</a>
        </div>

        <nav className="nav" aria-label="Ana navigasyon">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Ana Sayfa</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP →</a>
        </nav>

        <section className="hero" aria-labelledby="hero-h">
          <div className="hero-bg" aria-hidden="true">
            <img src="/terzi-can-hero.png" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📏 Aynı Gün Paça Kısaltma · Konyaaltı</span>
            <h1 id="hero-h">
              Paça Kısaltma <span className="accent">Konyaaltı</span><br />
              ₺150'den, Aynı Gün Teslim
            </h1>
            <p className="hero-desc">
              Pantolon, kot, etek paça kısaltma — görünmez dikiş tekniğiyle,
              orijinal görünümü koruyarak. Hurma, Liman, Sarısu bölgesine
              ücretsiz adrese servis.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Ölçü Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        {/* FİYATLAR */}
        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Paça Kısaltma Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Fiyat Listesi</h2>
              <p className="sec-sub">Kumaş türüne göre şeffaf fiyatlandırma.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👔</span>
                  <div><div className="price-tr">Kumaş Pantolon</div></div>
                </div>
                <p className="price-desc">Klasik kumaş pantolon, keten, gabardin.</p>
                <table className="price-table"><tbody>
                  <tr><td>Standart Paça Kısaltma</td><td>₺150+</td></tr>
                  <tr><td>Orijinal Astar Korumalı</td><td>₺180+</td></tr>
                </tbody></table>
              </div>
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👖</span>
                  <div><div className="price-tr">Kot Pantolon</div></div>
                </div>
                <p className="price-desc">Orijinal dikiş taklidi dahil kot paça kısaltma.</p>
                <table className="price-table"><tbody>
                  <tr><td>Standart Kot Paça</td><td>₺180+</td></tr>
                  <tr><td>Orijinal Dikiş Taklitli</td><td>₺220+</td></tr>
                </tbody></table>
              </div>
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👗</span>
                  <div><div className="price-tr">Etek & Elbise</div></div>
                </div>
                <p className="price-desc">Etek boyu ve elbise boyu kısaltma.</p>
                <table className="price-table"><tbody>
                  <tr><td>Etek Kısaltma</td><td>₺150+</td></tr>
                  <tr><td>Elbise Boyu Kısaltma</td><td>₺200+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır, kumaş türü ve dikim tekniğine göre değişebilir.
            </p>
          </div>
        </section>

        {/* HOWTO */}
        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Paça Kısaltma Nasıl Yaptırılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item">
                <div className="howto-t">İstediğiniz Boyu Belirtin</div>
                <div className="howto-d">WhatsApp'tan pantolon/etek fotoğrafını ve kısaltmak istediğiniz miktarı belirtin.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Ölçü Kontrolü</div>
                <div className="howto-d">Mümkünse atölyede prova ile en doğru boy belirlenir; adrese gelen servis de mevcuttur.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Dikim Yapılır</div>
                <div className="howto-d">Görünmez dikiş tekniğiyle paça kısaltılır — orijinal görünüm korunur.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Aynı Gün Teslim</div>
                <div className="howto-d">Çoğu paça kısaltma işlemi aynı gün içinde tamamlanır ve teslim edilir.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Paça Kısaltma Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Paça kısaltma ne kadar sürer?', 'Standart paça kısaltma aynı gün içinde, genellikle 2-4 saat içinde tamamlanır.'],
              ['Paça kısaltma fiyatı ne kadar?', 'Kumaş pantolon ₺150\'den, kot pantolon ₺180\'den, etek kısaltma ₺150\'den başlar.'],
              ['Orijinal dikişi bozmadan kısaltma yapıyor musunuz?', 'Evet, görünmez dikiş tekniğiyle çalışıyoruz — orijinal paça görünümü korunur, kot pantolonlarda orijinal dikiş izi bile taklit edilebilir.'],
              ['Prova gerekiyor mu?', 'En doğru sonuç için prova önerilir ama net ölçü verirseniz provasız da yapabiliriz. Adrese gelen servisimizle yerinde ölçü de alabiliriz.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Pantolonunuz Uzun mu Geldi?</h2>
          <p className="cta-sub">Fotoğraf gönderin, aynı gün teslim alın.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Paça Kısaltma Konyaaltı · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer bağlantılar">
            <a href="/">Ana Sayfa</a>
            <a href="/antalya-terzi">Antalya Terzi</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
