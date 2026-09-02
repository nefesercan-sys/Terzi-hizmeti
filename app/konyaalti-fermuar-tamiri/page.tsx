import type { Metadata } from 'next';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/konyaalti-fermuar-tamiri`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, fermuar tamiri/değişimi hakkında bilgi almak istiyorum.');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const TODAY     = new Date().toISOString().split('T')[0];

// ─── Bu, "şehir + hizmet" kombinasyon sayfası ──────────────────────────────────
// Amaç: "fermuar tamiri Konyaaltı" gibi spesifik, düşük rekabetli aramalarda
// hızlı sıralanmak. Ana sayfa ve /antalya-terzi genel hizmet listesi sunarken,
// bu sayfa TEK bir hizmete derinlemesine odaklanıyor — Google bu tür "intent match"
// sayfaları genel sayfalara göre daha hızlı ve yüksek sıralar.
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Fermuar Tamiri Konyaaltı | ₺200\'den',
  description:
    'Konyaaltı\'da fermuar tamiri ve değişimi. Pantolon, mont, ceket fermuarı — aynı gün teslim, ₺200\'den. Hurma, Liman, Sarısu bölgesine ücretsiz servis.',
  keywords: [
    'fermuar tamiri Konyaaltı', 'fermuar değişimi Antalya', 'fermuar tamiri Antalya',
    'pantolon fermuarı değişimi', 'mont fermuarı tamiri', 'ceket fermuarı değişimi',
    'çanta fermuarı tamiri', 'sıkışan fermuar tamiri Antalya', 'fermuar ustası Konyaaltı',
    'aynı gün fermuar değişimi', 'zipper repair Antalya', 'ремонт молнии Анталья',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Fermuar Tamiri Konyaaltı — Aynı Gün Değişim',
    description: 'Pantolon, mont, ceket, çanta fermuarı. Aynı gün teslim. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Fermuar Tamiri Konyaaltı' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Fermuar Tamiri Konyaaltı — Aynı Gün Fermuar Değişimi',
      description: 'Konyaaltı\'da fermuar tamiri ve değişimi hizmeti. Pantolon, mont, ceket, çanta fermuarı.',
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
        { '@type': 'ListItem', position: 3, name: 'Fermuar Tamiri Konyaaltı', item: PAGE_URL },
      ],
    },
    // ✅ AggregateOffer — fiyat aralığını tek noktada topluyor
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Fermuar Tamiri ve Değişimi',
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        highPrice: '350',
        offerCount: 3,
        offers: [
          { '@type': 'Offer', name: 'Pantolon / Kot Fermuarı', price: '200', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
          { '@type': 'Offer', name: 'Mont / Ceket Fermuarı', price: '300', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
          { '@type': 'Offer', name: 'Çanta Fermuarı', price: '250', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
        ],
      },
    },
    // ✅ HowTo şeması — "nasıl fermuar tamiri yaptırılır" zengin sonuç ihtimali
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: 'Konyaaltı\'da Fermuar Tamiri Nasıl Yaptırılır?',
      description: 'Fermuar tamiri veya değişimi için adım adım süreç.',
      totalTime: 'PT2H',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'TRY', value: '200-350' },
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan bozuk fermuarın fotoğrafını gönderin, anında ön fiyat alın.' },
        { '@type': 'HowToStep', name: 'Kıyafeti Teslim Edin', text: 'Atölyeye getirin veya Hurma/Liman/Sarısu bölgesindeyseniz ücretsiz kurye ile gönderin.' },
        { '@type': 'HowToStep', name: 'Fermuar Değişimi Yapılır', text: 'Uygun kalitede fermuar seçilir ve profesyonelce dikilir — genellikle aynı gün.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Kıyafetiniz test edilip kontrol edildikten sonra teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Konyaaltı\'da fermuar tamiri ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Çoğu fermuar tamiri ve değişimi aynı gün içinde tamamlanır. Yoğunluğa göre en geç 24 saat sürebilir.' } },
        { '@type': 'Question', name: 'Fermuar değişimi fiyatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Pantolon/kot fermuarı ₺200\'den, mont/ceket fermuarı ₺300\'den, çanta fermuarı ₺250\'den başlar.' } },
        { '@type': 'Question', name: 'Her tür fermuarı değiştiriyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet — metal, plastik, sarmal (YKK dahil) her tip fermuarı değiştiriyoruz. Su geçirmez montlar için özel fermuar da temin ediyoruz.' } },
        { '@type': 'Question', name: 'Fermuar sıkıştı, kırılmadı — tamir edilebilir mi?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, çoğu zaman sıkışan fermuar değişim gerektirmeden onarılabilir. Fotoğraf gönderirseniz değerlendirip size bilgi veririz.' } },
      ],
    },
  ],
};

export default function FermuarTamiriPage() {
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
            <img src="/terzi-can-hero.jpg" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">🔧 Aynı Gün Fermuar Değişimi · Konyaaltı</span>
            <h1 id="hero-h">
              Fermuar Tamiri <span className="accent">Konyaaltı</span><br />
              Aynı Gün Teslim
            </h1>
            <p className="hero-desc">
              Pantolon, kot, mont, ceket ve çanta fermuarı değişimi ve tamiri.
              Hurma, Liman, Sarısu bölgesine ücretsiz servis. ₺200'den başlayan
              şeffaf fiyatlarla, çoğu işlem aynı gün tamamlanır.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        {/* FİYATLAR */}
        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Fermuar Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Fermuar Tamiri & Değişimi Fiyat Listesi</h2>
              <p className="sec-sub">Tüm fermuar tipleri için şeffaf, sabit fiyatlar.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👖</span>
                  <div><div className="price-tr">Pantolon & Kot Fermuarı</div></div>
                </div>
                <p className="price-desc">En sık talep edilen fermuar değişimi. Aynı gün teslim.</p>
                <table className="price-table"><tbody>
                  <tr><td>Standart Pantolon Fermuarı</td><td>₺200+</td></tr>
                  <tr><td>Kot Pantolon Fermuarı</td><td>₺220+</td></tr>
                  <tr><td>Etek Fermuarı</td><td>₺180+</td></tr>
                </tbody></table>
              </div>
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧥</span>
                  <div><div className="price-tr">Mont & Ceket Fermuarı</div></div>
                </div>
                <p className="price-desc">Kalın kumaş ve su geçirmez montlar dahil.</p>
                <table className="price-table"><tbody>
                  <tr><td>Ceket Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Kalın Mont Fermuarı</td><td>₺350+</td></tr>
                  <tr><td>Su Geçirmez Mont Fermuarı</td><td>₺380+</td></tr>
                </tbody></table>
              </div>
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👜</span>
                  <div><div className="price-tr">Çanta & Diğer</div></div>
                </div>
                <p className="price-desc">Çanta, sweatshirt, spor giyim fermuarı.</p>
                <table className="price-table"><tbody>
                  <tr><td>Çanta Fermuarı</td><td>₺250+</td></tr>
                  <tr><td>Sweatshirt Fermuarı</td><td>₺220+</td></tr>
                  <tr><td>Sıkışan Fermuar Onarımı</td><td>₺100+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır, fermuar kalitesi ve kumaş türüne göre değişebilir.
            </p>
          </div>
        </section>

        {/* HOWTO — Nasıl Yaptırılır */}
        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Fermuar Tamiri Nasıl Yaptırılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item">
                <div className="howto-t">Fotoğraf Gönderin</div>
                <div className="howto-d">WhatsApp'tan bozuk fermuarın fotoğrafını gönderin, anında ön fiyat alın.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Kıyafeti Teslim Edin</div>
                <div className="howto-d">Atölyeye getirin veya Hurma, Liman, Sarısu bölgesindeyseniz ücretsiz kurye ile gönderin.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Fermuar Değişimi Yapılır</div>
                <div className="howto-d">Uygun kalitede fermuar seçilir ve profesyonelce dikilir — genellikle aynı gün.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Teslim Alın</div>
                <div className="howto-d">Kıyafetiniz test edilip kontrol edildikten sonra teslim edilir.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Fermuar Tamiri Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Konyaaltı\'da fermuar tamiri ne kadar sürer?', 'Çoğu fermuar tamiri ve değişimi aynı gün içinde tamamlanır. Yoğunluğa göre en geç 24 saat sürebilir.'],
              ['Fermuar değişimi fiyatı ne kadar?', 'Pantolon/kot fermuarı ₺200\'den, mont/ceket fermuarı ₺300\'den, çanta fermuarı ₺250\'den başlar.'],
              ['Her tür fermuarı değiştiriyor musunuz?', 'Evet — metal, plastik, sarmal (YKK dahil) her tip fermuarı değiştiriyoruz. Su geçirmez montlar için özel fermuar da temin ediyoruz.'],
              ['Fermuar sıkıştı, kırılmadı — tamir edilebilir mi?', 'Evet, çoğu zaman sıkışan fermuar değişim gerektirmeden onarılabilir. Fotoğraf gönderirseniz değerlendirip bilgi veririz.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Fermuarınız Bozuldu mu?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, 30 dakikada fiyat alın, aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Fermuar Tamiri Konyaaltı · {PHONE}</div>
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
