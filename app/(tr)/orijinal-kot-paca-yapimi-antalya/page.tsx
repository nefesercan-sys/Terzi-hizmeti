import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/orijinal-kot-paca-yapimi-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, orijinal kot paça yapımı hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Orijinal Kot Paça Yapımı ₺200 · Paça Kısaltma · Antalya" },
  description:
    "Kot paçayı kısaltırken orijinal paça görünümünü koruyoruz, ₺200'den. Boy ayakkabıyla işaretlenir. Normal iş aynı gün, acil 1–2 saat. ☎ " + PHONE,
  keywords: fitKeywords([
    'orijinal kot paça yapımı', 'orijinal paça kot kısaltma', 'kot paça orijinal dikiş', 'kot paçası orijinal kalsın', 'orijinal paça kısaltma fiyat', 'kot paça kısaltma Antalya',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Orijinal Kot Paça Yapımı Antalya — Aynı Gün",
    description: "Kot paça kısaltırken orijinal paça görünümü korunur. ₺200'den. ☎ " + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Orijinal Kot Paça Yapımı Antalya — Aynı Gün" }],
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
      name: "Orijinal Kot Paça Yapımı Antalya — Aynı Gün",
      description: "Kot pantolon paçasını kısaltırken orijinal paça görünümünü koruyoruz, ₺200'den.",
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
        { '@type': 'ListItem', position: 2, name: "Terzi Hizmetleri", item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: "Orijinal Kot Paça Yapımı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Orijinal Kot Paça Yapımı",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 1,
        offers: [
          { '@type': 'Offer', name: 'Orijinal Paça ile Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Orijinal Paça Nasıl Yapılır?",
      description: "Orijinal Paça Nasıl Yapılır?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan kot pantolonun paçasının yakın fotoğrafını ve boyunu gönderin.' },
        { '@type': 'HowToStep', name: 'Teslim Edin', text: 'Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin.' },
        { '@type': 'HowToStep', name: 'Ölçü ve Dikiş', text: 'Boy giyeceğiniz ayakkabıyla işaretlenir; paçanın orijinal görünümünü koruyacak şekilde dikilir. Normal işte aynı gün, acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Kontrol edilip teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Orijinal kot paça yapımı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Orijinal paça görünümünü koruyarak kot paça kısaltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.' } },
        { '@type': 'Question', name: 'Orijinal paça yapımı nedir?', acceptedAnswer: { '@type': 'Answer', text: 'Kot pantolon kısaltılırken paçanın orijinal paça görünümünü koruyacak şekilde dikilmesidir.' } },
        { '@type': 'Question', name: 'Boy nasıl belirlenir?', acceptedAnswer: { '@type': 'Answer', text: 'Boy, pantolonu ve giyeceğiniz ayakkabıyı giyerken üzerinizde işaretlenir. Uzaktan ise paçanın yakın fotoğrafını ve istediğiniz boyu WhatsApp\'tan gönderin.' } },
        { '@type': 'Question', name: 'Orijinal paça yapımı ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Normal işler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır.' } },
        { '@type': 'Question', name: 'Kot pantolonu eve veya otele gelip alıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim ücretsizdir.' } },
      ],
    },
  ],
};

export default function Page() {
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
            <picture><source type="image/webp" srcSet="/terzi-can-hero-640.webp 640w, /terzi-can-hero-1024.webp 1024w" sizes="100vw" /><img src="/terzi-can-hero.jpg" alt="" className="hero-bg-img" width={1024} height={1024} fetchPriority="high" decoding="async" /></picture>
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">🧵 🧵 Orijinal Kot Paça · Kısaltma</span>
            <h1 id="hero-h">
              Orijinal Kot Paça Yapımı <span className="accent">Antalya</span><br />₺200'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Kot pantolonun paçasını kısaltırken orijinal paça görünümünü koruyoruz. Kalın kot kumaşa uygun makine ve iplik; eve ve otele ücretsiz servis.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Orijinal paça görünümünü koruyarak kot paça kısaltma ₺200'den başlar; boy ayakkabıyla işaretlenir, normal işler aynı gün teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Orijinal Paça Fiyatı 2026</span>
              <h2 className="sec-h ff" id="price-h">Orijinal Kot Paça Yapımı Fiyatı</h2>
              <p className="sec-sub">Net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧵</span>
                  <div><div className="price-tr">Orijinal Paça</div></div>
                </div>
                <p className="price-desc">Kalın kot kumaşa uygun makine ve iplik.</p>
                <table className="price-table"><tbody>
                  <tr><td>Orijinal Paça ile Kısaltma</td><td>₺200+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır; kumaş kalınlığına ve işin kapsamına göre değişebilir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Orijinal Paça Nasıl Yapılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan kot pantolonun paçasının yakın fotoğrafını ve boyunu gönderin.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Edin</div><div className="howto-d">Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin.</div></div>
              <div className="howto-item"><div className="howto-t">Ölçü ve Dikiş</div><div className="howto-d">Boy giyeceğiniz ayakkabıyla işaretlenir; paçanın orijinal görünümünü koruyacak şekilde dikilir. Normal işte aynı gün, acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Kontrol edilip teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Orijinal Kot Paça Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Orijinal kot paça yapımı ne kadar?', 'Orijinal paça görünümünü koruyarak kot paça kısaltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.'],
              ['Orijinal paça yapımı nedir?', 'Kot pantolon kısaltılırken paçanın orijinal paça görünümünü koruyacak şekilde dikilmesidir.'],
              ['Boy nasıl belirlenir?', 'Boy, pantolonu ve giyeceğiniz ayakkabıyı giyerken üzerinizde işaretlenir. Uzaktan ise paçanın yakın fotoğrafını ve istediğiniz boyu WhatsApp\'tan gönderin.'],
              ['Orijinal paça yapımı ne kadar sürer?', 'Normal işler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır.'],
              ['Kot pantolonu eve veya otele gelip alıyor musunuz?', 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim ücretsizdir.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Genel kısaltma için <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a>, daraltma için <a href="/kot-pantolon-daraltma-antalya">kot pantolon daraltma</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Paçanın Orijinal Kalmasını mı İstiyorsunuz?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, kısa sürede fiyat alın; normal işte aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Orijinal Kot Paça Yapımı Antalya · {PHONE}</div>
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
