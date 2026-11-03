import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/kot-etek-kisaltma-daraltma-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, kot etek kısaltma veya daraltma hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Kot Etek Kısaltma ve Daraltma ₺200 · Orijinal Etek Ucu · Antalya" },
  description:
    "Kot etek boyu kısaltma, bel daraltma ve orijinal etek ucu yapımı ₺200'den. Normal iş aynı gün, acil 1–2 saat. Eve ve otele ücretsiz servis. ☎ " + PHONE,
  keywords: fitKeywords([
    'kot etek kısaltma', 'kot etek daraltma', 'kot etek boy kısaltma', 'kot etek bel daraltma', 'kot etek orijinal ucu', 'kot etek tadilatı', 'Antalya kot etek kısaltma',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kot Etek Kısaltma ve Daraltma Antalya",
    description: "Kot etek boy kısaltma, bel daraltma, orijinal etek ucu. ₺200'den. ☎ " + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Kot Etek Kısaltma ve Daraltma Antalya" }],
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
      name: "Kot Etek Kısaltma ve Daraltma Antalya",
      description: "Kot etek boyu kısaltma, bel daraltma ve orijinal etek ucu yapımı ₺200'den.",
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
        { '@type': 'ListItem', position: 3, name: "Kot Etek Kısaltma ve Daraltma", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Kot Etek Kısaltma ve Daraltma",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 2,
        offers: [
          { '@type': 'Offer', name: 'Kot Etek Boy Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Kot Etek Bel Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Kot Etek Nasıl Kısaltılır?",
      description: "Kot Etek Nasıl Kısaltılır?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan kot eteğin fotoğrafını gönderin, ön fiyat alın.' },
        { '@type': 'HowToStep', name: 'Teslim Edin', text: 'Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin.' },
        { '@type': 'HowToStep', name: 'Ölçü ve Dikiş', text: 'Ölçü üzerinizde işaretlenir; kalın kot kumaşa uygun makine ve iplikle dikilir. Normal işte aynı gün, acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Kontrol edilip teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Kot etek kısaltma fiyatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Kot etek boy kısaltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.' } },
        { '@type': 'Question', name: 'Kot etek orijinal ucuyla kısaltılır mı?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, kot eteğin orijinal etek ucu görünümünü koruyacak şekilde kısaltma yapıyoruz. Fotoğraf gönderirseniz yapılabilecek işlemi söyleriz.' } },
        { '@type': 'Question', name: 'Kot etek daraltma ve bel daraltma yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Kot etekte bel ve kalça daraltma ₺200\'den başlar; net fiyat fotoğrafa göre söylenir.' } },
        { '@type': 'Question', name: 'Kot etek tadilatı ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Normal işler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır.' } },
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
            <span className="hero-tag">👗 👗 Kot Etek Kısaltma · Daraltma</span>
            <h1 id="hero-h">
              Kot Etek Kısaltma <span className="accent">Antalya</span><br />₺200'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Kot etek boy kısaltma, bel daraltma ve orijinal etek ucu yapımı. Kalın kot kumaşa uygun makine ve iplik; eve ve otele ücretsiz servis.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Kot etek kısaltma ve daraltma ₺200'den başlar; orijinal etek ucu görünümü korunur, normal işler aynı gün teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Kot Etek Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Kot Etek Kısaltma Fiyatları</h2>
              <p className="sec-sub">Net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👗</span>
                  <div><div className="price-tr">Kot Etek</div></div>
                </div>
                <p className="price-desc">Kalın kot kumaşa uygun makine ve iplik.</p>
                <table className="price-table"><tbody>
                  <tr><td>Kot Etek Boy Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Kot Etek Bel Daraltma</td><td>₺200+</td></tr>
                  <tr><td>Orijinal Etek Ucu</td><td>₺200+</td></tr>
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
              <h2 className="sec-h ff" id="howto-h">Kot Etek Nasıl Kısaltılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan kot eteğin fotoğrafını gönderin, ön fiyat alın.</div></div>
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
              <h2 className="sec-h ff" id="faq-h">Kot Etek Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Kot etek kısaltma fiyatı ne kadar?', 'Kot etek boy kısaltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.'],
              ['Kot etek orijinal ucuyla kısaltılır mı?', 'Evet, kot eteğin orijinal etek ucu görünümünü koruyacak şekilde kısaltma yapıyoruz. Fotoğraf gönderirseniz yapılabilecek işlemi söyleriz.'],
              ['Kot etek daraltma ve bel daraltma yapıyor musunuz?', 'Evet. Kot etekte bel ve kalça daraltma ₺200\'den başlar; net fiyat fotoğrafa göre söylenir.'],
              ['Kot etek tadilatı ne kadar sürer?', 'Normal işler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır.'],
              ['Kot ürününü eve veya otele gelip alıyor musunuz?', 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim ücretsizdir.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Kot pantolon için <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a>, kot ceket için <a href="/kot-ceket-mont-tadilati-antalya">kot ceket ve mont</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Kot Eteğiniz mi Uzun?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, kısa sürede fiyat alın; normal işte aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Kot Etek Kısaltma ve Daraltma Antalya · {PHONE}</div>
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
