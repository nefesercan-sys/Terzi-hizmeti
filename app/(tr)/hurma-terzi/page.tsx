import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { businessNode } from '@/lib/business';
import Image from 'next/image';
import { DISTRICT_BASE } from '@/lib/seo-data';

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/hurma-terzi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, Hurma mahallesine terzi servisi hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-10-04';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Hurma Terzi · Paça ₺200 · Her Gün 23:00'e Kadar Açık" },
  description:
    "Hurma terzi: paça kısaltma ₺200, fermuar ₺300, bel daraltma, özel dikim. Atölyemiz Hurma'da, adrese ücretsiz servis. Her gün 08:00–23:00. ☎ " + PHONE,
  keywords: Array.from(new Set(['Hurma tamir tadilat', 'Hurma söküğü dikme', 'Hurma yırtık tamiri', 'Hurma elbise tamiri', 'Hurma terzi', 'Hurma mahallesi terzi', 'Hurma Konyaaltı terzi', 'Hurma paça kısaltma', 'Hurma fermuar tamiri', 'Hurma bel daraltma', 'Hurma elbise dikimi', 'Hurma gelinlik tadilatı', 'Hurma ütü hizmeti', 'Hurma kuru temizleme', 'Hurma eve gelen terzi', 'Hurma adrese gelen terzi', 'Hurma terzi fiyatları 2026', 'Konyaaltı Hurma dikiş atölyesi', 'Hurma sahil terzi', 'Hurma otel terzi hizmeti', 'Hurma özel dikim', 'Hurma bay bayan elbise dikimi', 'Hurma ölçüye göre özel dikim', 'Hurma ölçüye göre elbise dikimi', 'Hurma beden ayarlama', 'Hurma beden ayarlaması', 'Hurma elbise daraltma', 'Hurma elbise kısaltma', 'Hurma pantolon daraltma', 'Hurma abiye tamiri', 'Hurma abiye tadilatı', 'Hurma kot paçası kısaltma', 'Hurma fermuar değişimi', 'Hurma ceket tadilatı', 'Hurma mont tamiri', 'Hurma gömlek daraltma', 'Hurma etek kısaltma', 'Hurma şort kısaltma', 'Hurma yakınımda terzi', 'Hurma atölye', 'Konyaaltı Hurma terzi tamir tadilat', 'Hurma bay bayan elbise tamiri', 'Hurma terzi', 'Hurma bay bayan terzi', 'Hurma dikim', 'Hurma tamir tadilat', 'Hurma elbise tamiri', 'Hurma elbise tadilatı', 'Hurma fermuar değişimi', 'Hurma fermuar tamiri', 'Hurma boy kısaltma', 'Hurma bel daraltma', 'Hurma etek boyu kısaltma', 'Hurma pantolon boyu kısaltma', 'Hurma paça kısaltma', 'Hurma kot paçası kısaltma', 'Hurma beden ölçüsüne göre elbise tadilatı', 'Hurma mont tamiri', 'Hurma ceket daraltma', 'Hurma gömlek daraltma', 'Hurma şort kısaltma', 'Hurma pantolon daraltma', 'Hurma etek daraltma', 'Hurma elbise daraltma', 'Hurma elbise dikimi'])) ,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL, languages: { tr: PAGE_URL, en: `${SITE}${DISTRICT_BASE.en}/hurma`, ru: `${SITE}${DISTRICT_BASE.ru}/hurma`, de: `${SITE}${DISTRICT_BASE.de}/hurma`, 'x-default': PAGE_URL } },
  openGraph: {
    title: 'Hurma Terzi · Tamir, Tadilat, Özel Dikim | Terzi Can',
    description: "Hurma terzi atölyemiz Hurma'da: tamir, tadilat, bay bayan özel dikim, ölçüye göre elbise, daraltma, kısaltma. Paça ₺200'den. 08:00–23:00. ☎ " + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Hurma Terzi Konyaaltı' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
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
          { '@type': 'Offer', name: 'Paça Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Fermuar Değişimi', price: '300', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Bel Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Elbise Dikimi', price: '800', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Gelinlik Tadilatı', price: '800', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Ütü Hizmeti', price: '80', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Hurma mahallesine terzi servisi geliyor mu?', acceptedAnswer: { '@type': 'Answer', text: `Evet! Hurma mahallesine ücretsiz adrese servis veriyoruz. Kıyafetinizi adresinizden alıp normal tamir ve tadilatta ertesi gün, acil işlerde 1–2 saatte teslim ediyoruz; özel dikimde süre modele ve adede göre belirlenir. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Hurma terzi fiyatları ne kadar 2026?', acceptedAnswer: { '@type': 'Answer', text: `Paça kısaltma ₺200'den, fermuar değişimi ₺300'den, bel daraltma ₺200'den, elbise dikimi ₺800'den, gelinlik tadilatı ₺800'den, abiye tadilatı ₺800'den, ütü ₺80'den başlar. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Hurma sahil bölgesindeki otellere ütü ve kuru temizleme servisi var mı?', acceptedAnswer: { '@type': 'Answer', text: `Evet, Hurma sahil şeridindeki otellere alım-teslimatlı ütü ve kuru temizleme hizmeti veriyoruz. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Hurma\'da acil tadilat ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Paça kısaltma, fermuar değişimi ve bel daraltma gibi standart işlemler ertesi gün, acil olanlar 1–2 saatte teslim edilir.' } },
      ],
    },
  ],
};

const FIYATLAR: [string, string, string][] = [
  ['Paça Kısaltma', 'Pantolon, kot, etek — görünmez dikiş', '₺200+'],
  ['Fermuar Değişimi', 'Pantolon, mont, ceket fermuarı', '₺300+'],
  ['Bel Daraltma', 'Elbise, pantolon, ceket', '₺200+'],
  ['Elbise Dikimi', 'Kadın, erkek, çocuk özel dikim', '₺800+'],
  ['Gelinlik Tadilatı', 'Hassas daraltma, boy ayarı', '₺800+'],
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
            <Image src="/terzi-can-hero.jpg" alt="Terzi Can — Hurma mahallesi Konyaaltı terzi atölyesi" fill priority fetchPriority="high" sizes="100vw" className="hero-bg-img" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📍 Hurma Mahallesi · Konyaaltı · Ücretsiz Servis</span>
            <h1 id="hero-h">
              Hurma <span className="accent">Terzi</span><br />
              Paça Kısaltma, Bel Daraltma, Fermuar Değişimi
            </h1>
            <p className="hero-desc">
              Hurma mahallesine özel adrese servisli terzi hizmeti. Paça kısaltma, fermuar
              değişimi, bel daraltma, özel dikim, gelinlik tadilatı, ütü ve kuru temizleme —
              ₺200'den başlayan fiyatlarla; normal işler ertesi gün, acil işler 1–2 saatte teslim.
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
                tamamına — kıyafetinizi adresinizden alıp normal işte ertesi gün, acil işte 1–2 saatte teslim ediyoruz.
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
                <div className="howto-d">Pantolon, kot, etek kısaltma; elbise, ceket ve pantolonda bel daraltma. ₺200'den, ertesi gün teslim.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Fermuar Değişimi</div>
                <div className="howto-d">Mont, ceket, pantolon fermuarı değişimi ve tamiri. ₺300'den.</div>
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
              ['Hurma mahallesine terzi servisi geliyor mu?', 'Evet! Hurma mahallesine ücretsiz adrese servis veriyoruz. Kıyafetinizi adresinizden alıp normal tamir ve tadilatta ertesi gün, acil işlerde 1–2 saatte teslim ediyoruz; özel dikimde süre modele ve adede göre belirlenir.'],
              ['Hurma terzi fiyatları ne kadar 2026?', 'Paça kısaltma ₺200\'den, fermuar değişimi ₺300\'den, bel daraltma ₺200\'den, elbise dikimi ₺800\'den, gelinlik tadilatı ₺800\'den, abiye tadilatı ₺800\'den, ütü ₺80\'den başlar.'],
              ['Hurma sahil bölgesindeki otellere ütü ve kuru temizleme servisi var mı?', 'Evet, Hurma sahil şeridindeki otellere alım-teslimatlı ütü ve kuru temizleme hizmeti veriyoruz.'],
              ['Hurma\'da acil tadilat ne kadar sürer?', 'Paça kısaltma, fermuar değişimi ve bel daraltma gibi standart işlemler ertesi gün, acil olanlar 1–2 saatte teslim edilir.'],
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
          <p className="cta-sub">Fotoğraf gönderin, adresinizden alalım, ertesi gün teslim edelim.</p>
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
        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Hurma Terzi Konyaaltı · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer bağlantılar">
            <a href="/">Ana Sayfa</a>
            <a href="/antalya-terzi">Antalya Terzi</a>
            <a href="/antalya-uniforma-imalati">Üniforma İmalatı</a>
            <a href="/blog">Blog</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
