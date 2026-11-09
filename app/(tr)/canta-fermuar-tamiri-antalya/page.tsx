import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/canta-fermuar-tamiri-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, çanta fermuarı tamiri hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Çanta Fermuar Tamiri ₺300'den · Aynı Gün · Antalya" },
  description:
    "Çanta, sırt çantası ve valiz fermuarı değişimi ₺300'den. Normal iş aynı gün, acil 1–2 saat. Eve ve otele servis. ☎ " + PHONE,
  keywords: fitKeywords([
    'çanta fermuar tamiri fiyat', 'çanta fermuarı değiştirme', 'çanta fermuarı tamiri Antalya', 'sırt çantası fermuar tamiri', 'valiz fermuar tamiri', 'çanta fermuarı ne kadar', 'çanta fermuarı kaç TL', 'Konyaaltı çanta fermuarı',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Çanta Fermuar Tamiri Antalya — Aynı Gün Teslim",
    description: "Çanta, sırt çantası ve valiz fermuarı değişimi ₺300'den. Normal iş aynı gün, acil 1–2 saat. ☎ " + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Çanta fermuar tamiri Antalya" }],
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
      name: "Çanta Fermuar Tamiri Antalya — Aynı Gün Teslim",
      description: "Çanta fermuarı değişimi ₺300'den.",
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
        { '@type': 'ListItem', position: 2, name: "Fermuar Tamiri Konyaaltı", item: `${SITE}/konyaalti-fermuar-tamiri` },
        { '@type': 'ListItem', position: 3, name: "Çanta Fermuar Tamiri", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Çanta Fermuar Tamiri",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '300',
        offerCount: 3,
        offers: [
          { '@type': 'Offer', name: 'Çanta Fermuarı', price: '300', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Sırt Çantası Fermuarı', price: '300', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Valiz Fermuarı', price: '300', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Çanta Fermuarı Nasıl Değiştirilir?",
      description: "Çanta Fermuarı Nasıl Değiştirilir?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan çantanın ve bozuk fermuarın fotoğrafını gönderin, ön fiyat alın.' },
        { '@type': 'HowToStep', name: 'Çantayı Teslim Edin', text: 'Atölyeye getirin veya eve/otele alım-teslim isteyin.' },
        { '@type': 'HowToStep', name: 'Fermuar Değiştirilir', text: 'Çantanın kumaşına ve deri/suni deri yapısına uygun fermuar seçilir ve dikilir. Normal işte aynı gün, acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Fermuar test edilip kontrol edildikten sonra teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Çanta fermuarı tamiri ve değiştirme fiyatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Çanta fermuarı değişimi ₺300\'den başlar. Sıkışan fermuarın onarımı fotoğrafa göre netleşir; çantanın fotoğrafını WhatsApp\'tan gönderirseniz net fiyatı söyleriz.' } },
        { '@type': 'Question', name: 'Çanta fermuarı tamiri ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Normal işlemler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır.' } },
        { '@type': 'Question', name: 'Sırt çantası ve valiz fermuarı da değişiyor mu?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Sırt çantası, el çantası ve valiz fermuarı için fotoğraf gönderin; yapılabilecek işlemi ve fiyatı söyleyelim.' } },
        { '@type': 'Question', name: 'Fermuar sıkıştı, tamamen bozulmadı; tamir edilebilir mi?', acceptedAnswer: { '@type': 'Answer', text: 'Çoğu zaman sıkışan fermuar değişim gerektirmeden onarılabilir. Fotoğraf gönderirseniz değerlendirip bilgi veririz.' } },
        { '@type': 'Question', name: 'Çanta fermuarını değiştirmek yeni çanta almaya göre mantıklı mı?', acceptedAnswer: { '@type': 'Answer', text: 'Çantanın gövdesi sağlamsa fermuar değişimi çoğu zaman daha ekonomiktir. Fotoğrafını gönderin, birlikte değerlendirelim.' } },
        { '@type': 'Question', name: 'Çantayı eve veya otele gelip alıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim yapılır.' } },
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
            <span className="hero-tag">👜 👜 Çanta Fermuar Tamiri · Antalya</span>
            <h1 id="hero-h">
              Çanta Fermuar Tamiri <span className="accent">Antalya</span><br />₺300'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Çanta, sırt çantası ve valiz fermuarı değişimi ve tamiri. Eve ve otele servis; normal işler aynı gün, acil işler 1–2 saatte tamamlanır.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Çanta fermuarı değişimi ₺300'den başlar; normal işler aynı gün, acil işler 1–2 saatte teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Çanta Fermuarı Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Çanta Fermuar Tamiri Fiyatları</h2>
              <p className="sec-sub">Başlangıç fiyatları; net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👜</span>
                  <div><div className="price-tr">Çanta & Valiz Fermuarı</div></div>
                </div>
                <p className="price-desc">Fotoğrafa göre net fiyat WhatsApp'tan söylenir.</p>
                <table className="price-table"><tbody>
                  <tr><td>Çanta Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Sırt Çantası Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Valiz Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Sıkışan Fermuar Onarımı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır, fermuar kalitesi, boyu ve çanta türüne göre değişebilir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Çanta Fermuarı Nasıl Değiştirilir?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan çantanın ve bozuk fermuarın fotoğrafını gönderin, ön fiyat alın.</div></div>
              <div className="howto-item"><div className="howto-t">Çantayı Teslim Edin</div><div className="howto-d">Atölyeye getirin veya eve/otele alım-teslim isteyin.</div></div>
              <div className="howto-item"><div className="howto-t">Fermuar Değiştirilir</div><div className="howto-d">Çantanın kumaşına ve deri/suni deri yapısına uygun fermuar seçilir ve dikilir. Normal işte aynı gün, acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Fermuar test edilip kontrol edildikten sonra teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <KargoKisa lang="tr" work="Çanta fermuarı tamiri" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Çanta Fermuarı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Çanta fermuarı tamiri ve değiştirme fiyatı ne kadar?', 'Çanta fermuarı değişimi ₺300\'den başlar. Sıkışan fermuarın onarımı fotoğrafa göre netleşir; çantanın fotoğrafını WhatsApp\'tan gönderirseniz net fiyatı söyleriz.'],
              ['Çanta fermuarı tamiri ne kadar sürer?', 'Normal işlemler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır.'],
              ['Sırt çantası ve valiz fermuarı da değişiyor mu?', 'Evet. Sırt çantası, el çantası ve valiz fermuarı için fotoğraf gönderin; yapılabilecek işlemi ve fiyatı söyleyelim.'],
              ['Fermuar sıkıştı, tamamen bozulmadı; tamir edilebilir mi?', 'Çoğu zaman sıkışan fermuar değişim gerektirmeden onarılabilir. Fotoğraf gönderirseniz değerlendirip bilgi veririz.'],
              ['Çanta fermuarını değiştirmek yeni çanta almaya göre mantıklı mı?', 'Çantanın gövdesi sağlamsa fermuar değişimi çoğu zaman daha ekonomiktir. Fotoğrafını gönderin, birlikte değerlendirelim.'],
              ['Çantayı eve veya otele gelip alıyor musunuz?', 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim yapılır.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Pantolon, kot ve mont fermuarı için <a href="/konyaalti-fermuar-tamiri">fermuar tamiri sayfamıza</a>, mont için <a href="/mont-fermuar-degisimi-antalya">mont fermuarı sayfasına</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Çantanızın Fermuarı mı Bozuldu?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, kısa sürede fiyat alın; normal işte aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Çanta Fermuar Tamiri Antalya · {PHONE}</div>
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
