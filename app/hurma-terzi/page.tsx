import type { Metadata } from 'next';

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/hurma-terzi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, Hurma mahallesine terzi servisi hakkında bilgi almak istiyorum.');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const TODAY     = new Date().toISOString().split('T')[0];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Hurma Terzi Konyaaltı | ₺150\'den',
  description:
    'Hurma terzi Konyaaltı: paça kısaltma ₺150\'den, fermuar değişimi ₺200\'den, bel daraltma, elbise dikimi. Ücretsiz adrese servis.',
  keywords: [
    'Hurma terzi', 'Hurma mahallesi terzi', 'Hurma Konyaaltı terzi',
    'Hurma paça kısaltma', 'Hurma fermuar tamiri', 'Hurma bel daraltma',
    'Hurma elbise dikimi', 'Hurma gelinlik tadilatı', 'Hurma ütü hizmeti',
    'Hurma kuru temizleme', 'Hurma eve gelen terzi', 'Hurma adrese gelen terzi',
    'Hurma terzi fiyatları 2026', 'Konyaaltı Hurma dikiş atölyesi',
    'Hurma sahil terzi', 'Hurma otel terzi hizmeti',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Hurma Terzi Konyaaltı | ₺150\'den',
    description: 'Hurma mahallesine özel terzi hizmeti. Paça, fermuar, bel daraltma, dikim, ütü. ₺150\'den. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Hurma Terzi Konyaaltı' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Hurma Terzi Konyaaltı — Dikim, Tamir, Tadilat, Ütü Hizmeti',
      description: 'Konyaaltı Hurma mahallesine özel terzi hizmeti. Paça kısaltma, fermuar değişimi, bel daraltma, elbise dikimi, gelinlik tadilatı, ütü ve kuru temizleme.',
      inLanguage: 'tr',
      isPartOf: { '@id': `${SITE}#website` },
      about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      dateModified: TODAY,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-h', '.hero-desc'] },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Antalya Terzi', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: 'Hurma Terzi', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Terzi, Dikim, Tamir, Tadilat, Ütü Hizmeti',
      provider: { '@id': `${SITE}#business` },
      areaServed: { '@type': 'Place', name: 'Hurma, Konyaaltı, Antalya' },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '80',
        highPrice: '600',
        offerCount: 6,
        offers: [
          { '@type': 'Offer', name: 'Paça Kısaltma', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
          { '@type': 'Offer', name: 'Fermuar Değişimi', price: '200', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
          { '@type': 'Offer', name: 'Bel Daraltma', price: '150', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
          { '@type': 'Offer', name: 'Elbise Dikimi', price: '600', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
          { '@type': 'Offer', name: 'Gelinlik & Abiye Tadilatı', price: '400', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
          { '@type': 'Offer', name: 'Ütü Hizmeti', price: '80', priceCurrency: 'TRY', priceValidUntil: '2026-12-31' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Hurma mahallesine terzi servisi geliyor mu?', acceptedAnswer: { '@type': 'Answer', text: `Evet! Hurma mahallesine ücretsiz adrese servis veriyoruz. Kıyafetinizi adresinizden alıp aynı gün veya 24 saat içinde teslim ediyoruz. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Hurma terzi fiyatları ne kadar 2026?', acceptedAnswer: { '@type': 'Answer', text: `Paça kısaltma ₺150'den, fermuar değişimi ₺200'den, bel daraltma ₺150'den, elbise dikimi ₺600'den, gelinlik/abiye tadilatı ₺400'den, ütü ₺80'den başlar. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Hurma sahil bölgesindeki otellere ütü ve kuru temizleme servisi var mı?', acceptedAnswer: { '@type': 'Answer', text: `Evet, Hurma sahil şeridindeki otellere alım-teslimatlı ütü ve kuru temizleme hizmeti veriyoruz. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Hurma\'da aynı gün teslim mümkün mü?', acceptedAnswer: { '@type': 'Answer', text: 'Paça kısaltma, fermuar değişimi ve bel daraltma gibi standart işlemler genellikle aynı gün içinde tamamlanıp teslim edilir.' } },
      ],
    },
  ],
};

const FIYATLAR: [string, string, string][] = [
  ['Paça Kısaltma', 'Pantolon, kot, etek — görünmez dikiş', '₺150+'],
  ['Fermuar Değişimi', 'Pantolon, mont, ceket fermuarı', '₺200+'],
  ['Bel Daraltma', 'Elbise, pantolon, ceket', '₺150+'],
  ['Elbise Dikimi', 'Kadın, erkek, çocuk özel dikim', '₺600+'],
  ['Gelinlik & Abiye Tadilatı', 'Hassas daraltma, boy ayarı', '₺400+'],
  ['Ütü Hizmeti', 'Buharlı ütü, otel alım-teslim', '₺80+'],
];

export default function HurmaTerziPage() {
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
            <span className="hero-tag">📍 Hurma Mahallesi · Konyaaltı · Ücretsiz Servis</span>
            <h1 id="hero-h">
              Hurma <span className="accent">Terzi</span><br />
              Dikim, Tamir, Tadilat, Ütü
            </h1>
            <p className="hero-desc">
              Hurma mahallesine özel adrese servisli terzi hizmeti. Paça kısaltma, fermuar
              değişimi, bel daraltma, özel dikim, gelinlik tadilatı, ütü ve kuru temizleme —
              ₺150'den başlayan fiyatlarla, aynı gün teslim.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 WhatsApp'tan Yazın →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        {/* HURMA'YA ÖZEL İÇERİK */}
        <section className="sec" aria-labelledby="hurma-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Hurma Mahallesi</span>
              <h2 className="sec-h ff" id="hurma-h">Hurma'da Terzi İhtiyacınız İçin Buradayız</h2>
              <p className="sec-sub">
                Konyaaltı'nın sahil şeridindeki Hurma mahallesi, hem yerleşik hem tatilci
                nüfusuyla terzi hizmetine sürekli ihtiyaç duyan bir bölge. Hurma sınırları
                içinde — sahil şeridi, iç mahalle sokakları ve site/apartman bölgelerinin
                tamamına — kıyafetinizi adresinizden alıp aynı gün teslim ediyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* FİYATLAR */}
        <section className="sec" id="fiyatlar" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Hurma Terzi Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Fiyat Listesi</h2>
              <p className="sec-sub">Şeffaf, sabit başlangıç fiyatları.</p>
            </div>
            <div className="price-card" style={{ maxWidth: 620, margin: '0 auto' }}>
              <table className="price-table"><tbody>
                {FIYATLAR.map(([n, d, p]) => (
                  <tr key={n}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{n}</div>
                      <div style={{ fontSize: '.76rem', opacity: .65 }}>{d}</div>
                    </td>
                    <td style={{ fontWeight: 700 }}>{p}</td>
                  </tr>
                ))}
              </tbody></table>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic', textAlign: 'center' }}>
              * Fiyatlar başlangıç fiyatıdır, kumaş türü ve işlem detayına göre değişebilir.
            </p>
          </div>
        </section>

        {/* HİZMETLER */}
        <section className="sec" aria-labelledby="svc-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Hizmetler</span>
              <h2 className="sec-h ff" id="svc-h">Hurma'da Sunduğumuz Terzi Hizmetleri</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item">
                <div className="howto-t">Paça Kısaltma & Bel Daraltma</div>
                <div className="howto-d">Pantolon, kot, etek kısaltma; elbise, ceket ve pantolonda bel daraltma. ₺150'den, aynı gün teslim.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Fermuar Değişimi</div>
                <div className="howto-d">Mont, ceket, pantolon fermuarı değişimi ve tamiri. ₺200'den.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Özel Dikim & Gelinlik Tadilatı</div>
                <div className="howto-d">Kadın, erkek, çocuk kıyafet dikimi; gelinlik ve abiye hassas tadilatı.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Ütü & Kuru Temizleme</div>
                <div className="howto-d">Hurma sahilindeki otellere alım-teslimatlı ütü ve kuru temizleme.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Hurma Terzi Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Hurma mahallesine terzi servisi geliyor mu?', 'Evet! Hurma mahallesine ücretsiz adrese servis veriyoruz. Kıyafetinizi adresinizden alıp aynı gün veya 24 saat içinde teslim ediyoruz.'],
              ['Hurma terzi fiyatları ne kadar 2026?', 'Paça kısaltma ₺150\'den, fermuar değişimi ₺200\'den, bel daraltma ₺150\'den, elbise dikimi ₺600\'den, gelinlik/abiye tadilatı ₺400\'den, ütü ₺80\'den başlar.'],
              ['Hurma sahil bölgesindeki otellere ütü ve kuru temizleme servisi var mı?', 'Evet, Hurma sahil şeridindeki otellere alım-teslimatlı ütü ve kuru temizleme hizmeti veriyoruz.'],
              ['Hurma\'da aynı gün teslim mümkün mü?', 'Paça kısaltma, fermuar değişimi ve bel daraltma gibi standart işlemler genellikle aynı gün içinde tamamlanıp teslim edilir.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Hurma'da Terziye mi İhtiyacınız Var?</h2>
          <p className="cta-sub">Fotoğraf gönderin, adresinizden alalım, aynı gün teslim edelim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>


        {/* İÇ LİNKLEME: diğer mahalle sayfalarına — Google'ın mahalle
            kümesini bir bütün olarak keşfetmesi ve otoriteyi eşit dağıtması için */}
        <section className="sec" aria-labelledby="other-h" style={{ paddingTop: 0, paddingBottom: '2.5rem' }}>
          <div className="ctr" style={{ maxWidth: 720 }}>
            <h2 id="other-h" style={{ fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase', opacity: .55, marginBottom: '.9rem' }}>
              Diğer Mahallelerimiz
            </h2>
            <nav className="foot-links" aria-label="Diğer mahalle sayfaları">
              <a href="/liman-terzi">Liman Terzi</a>
              <a href="/sarisu-terzi">Sarısu Terzi</a>
              <a href="/uncali-terzi">Uncalı Terzi</a>
              <a href="/gursu-terzi">Gürsu Terzi</a>
            </nav>
          </div>
        </section>
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Hurma Terzi Konyaaltı · {PHONE}</div>
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
