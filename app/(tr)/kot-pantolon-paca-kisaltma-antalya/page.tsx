import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/kot-pantolon-paca-kisaltma-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, kot pantolon paça kısaltma hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Kot Pantolon Paça Kısaltma ₺200 · Orijinal Paça · Aynı Gün · Antalya" },
  description:
    "Kot pantolon paça kısaltma, orijinal paça yapımı ve daraltma ₺200'den. Normal iş aynı gün, acil 1–2 saat. Eve ve otele ücretsiz servis. ☎ " + PHONE,
  keywords: fitKeywords([
    'kot pantolon paça kısaltma', 'kot paçası kısaltma', 'kot pantolon paça yapımı', 'kot pantolon orijinal paça', 'kot pantolon daraltma', 'kot pantolon kısaltma', 'kot paça kısaltma fiyat', 'jean paça kısaltma', 'Antalya kot paça kısaltma',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kot Pantolon Paça Kısaltma Antalya — Aynı Gün",
    description: "Kot paça kısaltma, orijinal paça yapımı, daraltma. Normal iş aynı gün, acil 1–2 saat. ☎ " + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Kot Pantolon Paça Kısaltma Antalya — Aynı Gün" }],
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
      name: "Kot Pantolon Paça Kısaltma Antalya — Aynı Gün",
      description: "Kot pantolon paça kısaltma, orijinal paça yapımı ve daraltma ₺200'den.",
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
        { '@type': 'ListItem', position: 3, name: "Kot Pantolon Paça Kısaltma", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Kot Pantolon Paça Kısaltma",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 2,
        offers: [
          { '@type': 'Offer', name: 'Kot Paça Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Kot Pantolon Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Kot Paça Nasıl Kısaltılır?",
      description: "Kot Paça Nasıl Kısaltılır?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan kot pantolonun fotoğrafını gönderin, ön fiyat alın.' },
        { '@type': 'HowToStep', name: 'Teslim Edin', text: 'Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin.' },
        { '@type': 'HowToStep', name: 'Ölçü ve Dikiş', text: 'Ölçü üzerinizde işaretlenir; kalın kot kumaşa uygun makine ve iplikle dikilir. Normal işte aynı gün, acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Kontrol edilip teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Kot pantolon paça kısaltma fiyatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Kot pantolon paça kısaltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.' } },
        { '@type': 'Question', name: 'Kot paçası orijinal paça gibi yapılır mı?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, kot paçasının orijinal paça görünümünü koruyacak şekilde kısaltma yapıyoruz. Fotoğraf gönderirseniz yapılabilecek işlemi ve fiyatı söyleriz.' } },
        { '@type': 'Question', name: 'Kot pantolon daraltma yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Kot pantolonda bacak ve bel daraltma ₺200\'den başlar; net fiyat fotoğrafa göre söylenir.' } },
        { '@type': 'Question', name: 'Kot pantolon paça kısaltma ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Normal işler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır.' } },
        { '@type': 'Question', name: 'Kot paçası uzatılır mı veya genişletilir mi?', acceptedAnswer: { '@type': 'Answer', text: 'Fotoğraf gönderirseniz kumaş payına bakıp yapılıp yapılamayacağını söyleriz.' } },
        { '@type': 'Question', name: 'Kot ürününü eve veya otele gelip alıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim ücretsizdir.' } },
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
            <span className="hero-tag">👖 👖 Kot Paça Kısaltma · Orijinal Paça · Daraltma</span>
            <h1 id="hero-h">
              Kot Pantolon Paça Kısaltma <span className="accent">Antalya</span><br />₺200'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Kot pantolon paça kısaltma, orijinal paça yapımı ve daraltma. Kalın kot kumaşa uygun makine ve iplikle çalışıyoruz; eve ve otele ücretsiz servis.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Kot pantolon paça kısaltma ve daraltma ₺200'den başlar; orijinal paça görünümü korunur, normal işler aynı gün teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Kot Pantolon Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Kot Pantolon Paça Kısaltma Fiyatları</h2>
              <p className="sec-sub">Net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👖</span>
                  <div><div className="price-tr">Kot Pantolon</div></div>
                </div>
                <p className="price-desc">Kalın kot kumaşa uygun makine ve iplik.</p>
                <table className="price-table"><tbody>
                  <tr><td>Kot Paça Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Kot Pantolon Daraltma</td><td>₺200+</td></tr>
                  <tr><td>Orijinal Paça Yapımı</td><td>Fotoğrafa göre</td></tr>
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
              <h2 className="sec-h ff" id="howto-h">Kot Paça Nasıl Kısaltılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan kot pantolonun fotoğrafını gönderin, ön fiyat alın.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Edin</div><div className="howto-d">Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin.</div></div>
              <div className="howto-item"><div className="howto-t">Ölçü ve Dikiş</div><div className="howto-d">Ölçü üzerinizde işaretlenir; kalın kot kumaşa uygun makine ve iplikle dikilir. Normal işte aynı gün, acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Kontrol edilip teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Kot Paça Kısaltma Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Kot pantolon paça kısaltma fiyatı ne kadar?', 'Kot pantolon paça kısaltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.'],
              ['Kot paçası orijinal paça gibi yapılır mı?', 'Evet, kot paçasının orijinal paça görünümünü koruyacak şekilde kısaltma yapıyoruz. Fotoğraf gönderirseniz yapılabilecek işlemi ve fiyatı söyleriz.'],
              ['Kot pantolon daraltma yapıyor musunuz?', 'Evet. Kot pantolonda bacak ve bel daraltma ₺200\'den başlar; net fiyat fotoğrafa göre söylenir.'],
              ['Kot pantolon paça kısaltma ne kadar sürer?', 'Normal işler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır.'],
              ['Kot paçası uzatılır mı veya genişletilir mi?', 'Fotoğraf gönderirseniz kumaş payına bakıp yapılıp yapılamayacağını söyleriz.'],
              ['Kot ürününü eve veya otele gelip alıyor musunuz?', 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim ücretsizdir.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Kot mont ve ceket için <a href="/kot-ceket-mont-tadilati-antalya">kot ceket ve mont tadilatı</a>, kot etek için <a href="/kot-etek-kisaltma-daraltma-antalya">kot etek sayfasına</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Kot Pantolonunuz Uzun mu?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, kısa sürede fiyat alın; normal işte aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Kot Pantolon Paça Kısaltma Antalya · {PHONE}</div>
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
