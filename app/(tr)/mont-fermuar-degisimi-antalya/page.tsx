import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/mont-fermuar-degisimi-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, mont fermuarı değişimi hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Mont Fermuarı Değişimi Fiyatları ₺300 · Ertesi Gün · Antalya" },
  description:
    "Mont, kaban ve ceket fermuarı değişimi ₺300'den. Kalın ve su geçirmez montlar dahil. Normal iş ertesi gün, acil 1–2 saat. Eve ve otele ücretsiz servis. ☎ " + PHONE,
  keywords: fitKeywords([
    'mont fermuarı değiştirme', 'mont fermuarı değişimi fiyatları', 'mont fermuar tamiri Antalya',
    'kaban fermuarı değişimi', 'ceket fermuarı değişimi', 'su geçirmez mont fermuarı',
    'mont fermuarı ne kadar', 'mont fermuarı kaç TL', 'Konyaaltı mont fermuarı',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Mont Fermuarı Değişimi Antalya — Ertesi Gün Teslim',
    description: 'Mont, kaban, ceket fermuarı değişimi. Normal iş ertesi gün, acil 1–2 saat. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Mont fermuarı değişimi Antalya' }],
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
      name: 'Mont Fermuarı Değişimi Antalya — Ertesi Gün Teslim',
      description: 'Antalya\'da mont, kaban ve ceket fermuarı değişimi. Kalın ve su geçirmez montlar dahil.',
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
        { '@type': 'ListItem', position: 2, name: 'Fermuar Tamiri Konyaaltı', item: `${SITE}/konyaalti-fermuar-tamiri` },
        { '@type': 'ListItem', position: 3, name: 'Mont Fermuarı Değişimi', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Mont Fermuarı Değişimi',
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '300',
        offerCount: 3,
        offers: [
          { '@type': 'Offer', name: 'Mont Fermuarı', price: '300', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Kaban / Palto Fermuarı', price: '300', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Ceket Fermuarı', price: '300', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: 'Mont Fermuarı Nasıl Değiştirilir?',
      description: 'Mont fermuarı değişimi için adım adım süreç.',
      totalTime: 'PT2H',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'TRY', value: '300' },
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan montun ve bozuk fermuarın fotoğrafını gönderin, ön fiyat alın.' },
        { '@type': 'HowToStep', name: 'Montu Teslim Edin', text: 'Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin.' },
        { '@type': 'HowToStep', name: 'Fermuar Değiştirilir', text: 'Kalın kumaşa uygun fermuar seçilir ve dikilir — normal işte ertesi gün, acilde 1–2 saatte.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Mont test edilip kontrol edildikten sonra teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Mont fermuarı değiştirme fiyatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Mont fermuarı değişimi ₺300\'den başlar. Net fiyat fermuarın boyuna ve türüne göre, fotoğrafla WhatsApp\'tan söylenir.' } },
        { '@type': 'Question', name: 'Mont fermuarı değişimi ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Normal işlemler ertesi gün teslim edilir; acil işler 1–2 saatte tamamlanır.' } },
        { '@type': 'Question', name: 'Kalın ve su geçirmez montların fermuarı değişir mi?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Kalın kumaşa uygun makine ve iplikle çalışıyoruz; su geçirmez montlar için özel fermuar da temin ediyoruz.' } },
        { '@type': 'Question', name: 'Kaban ve palto fermuarı da değişiyor mu?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Mont, kaban, palto ve ceket fermuarı değişimi ₺300\'den başlar.' } },
        { '@type': 'Question', name: 'Fermuar sıkıştı, tamamen bozulmadı; tamir edilebilir mi?', acceptedAnswer: { '@type': 'Answer', text: 'Çoğu zaman sıkışan fermuar değişim gerektirmeden onarılabilir. Fotoğraf gönderirseniz değerlendirip bilgi veririz.' } },
        { '@type': 'Question', name: 'Mont fermuarını değiştirmek yeni mont almaya göre mantıklı mı?', acceptedAnswer: { '@type': 'Answer', text: 'Montun kumaşı ve astarı sağlamsa fermuar değişimi çoğu zaman çok daha ekonomiktir ve montu yeniden kullanıma kazandırır. Fotoğrafını gönderin, birlikte değerlendirelim.' } },
      ],
    },
  ],
};

export default function MontFermuarPage() {
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
            <span className="hero-tag">🧥 Mont Fermuarı Değişimi · Antalya</span>
            <h1 id="hero-h">
              Mont Fermuarı Değişimi <span className="accent">Antalya</span><br />₺300'den, Ertesi Gün Teslim</h1>
            <p className="hero-desc">
              Mont, kaban, ceket ve yelek fermuarı değişimi ve tamiri. Kalın kumaş ve su geçirmez montlar dahil.
              Eve ve otele ücretsiz servis; normal işler ertesi gün, acil işler 1–2 saatte tamamlanır.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Mont fermuarı değişimi ₺300'den başlar; normal işler ertesi gün, acil işler 1–2 saatte teslim edilir.</p>
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
              <span className="eyebrow">₺ Mont Fermuarı Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Mont Fermuarı Değişimi Fiyatları</h2>
              <p className="sec-sub">Başlangıç fiyatları; net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧥</span>
                  <div><div className="price-tr">Mont & Kaban Fermuarı</div></div>
                </div>
                <p className="price-desc">Kalın kumaş ve su geçirmez montlar dahil.</p>
                <table className="price-table"><tbody>
                  <tr><td>Mont Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Kalın Kış Montu Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Su Geçirmez Mont Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Kaban / Palto Fermuarı</td><td>₺300+</td></tr>
                </tbody></table>
              </div>
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧶</span>
                  <div><div className="price-tr">Ceket & Yelek Fermuarı</div></div>
                </div>
                <p className="price-desc">Daha hafif kumaşlar için aynı ertesi gün teslim.</p>
                <table className="price-table"><tbody>
                  <tr><td>Ceket Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Yelek Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Sıkışan Fermuar Onarımı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır, fermuar kalitesi, boyu ve kumaş türüne göre değişebilir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Mont Fermuarı Nasıl Değiştirilir?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan montun ve bozuk fermuarın fotoğrafını gönderin, ön fiyat alın.</div></div>
              <div className="howto-item"><div className="howto-t">Montu Teslim Edin</div><div className="howto-d">Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin.</div></div>
              <div className="howto-item"><div className="howto-t">Fermuar Değiştirilir</div><div className="howto-d">Kalın kumaşa uygun fermuar seçilir ve dikilir. Normal işte ertesi gün, acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Mont test edilip kontrol edildikten sonra teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Mont Fermuarı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Mont fermuarı değiştirme fiyatı ne kadar?', 'Mont fermuarı değişimi ₺300\'den başlar. Net fiyat fermuarın boyuna ve türüne göre, fotoğrafla WhatsApp\'tan söylenir.'],
              ['Mont fermuarı değişimi ne kadar sürer?', 'Normal işlemler ertesi gün teslim edilir; acil işler 1–2 saatte tamamlanır.'],
              ['Kalın ve su geçirmez montların fermuarı değişir mi?', 'Evet. Kalın kumaşa uygun makine ve iplikle çalışıyoruz; su geçirmez montlar için özel fermuar da temin ediyoruz.'],
              ['Kaban ve palto fermuarı da değişiyor mu?', 'Evet. Mont, kaban, palto ve ceket fermuarı değişimi ₺300\'den başlar.'],
              ['Fermuar sıkıştı, tamamen bozulmadı; tamir edilebilir mi?', 'Çoğu zaman sıkışan fermuar değişim gerektirmeden onarılabilir. Fotoğraf gönderirseniz değerlendirip bilgi veririz.'],
              ['Mont fermuarını değiştirmek yeni mont almaya göre mantıklı mı?', 'Montun kumaşı ve astarı sağlamsa fermuar değişimi çoğu zaman çok daha ekonomiktir ve montu yeniden kullanıma kazandırır. Fotoğrafını gönderin, birlikte değerlendirelim.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Pantolon, kot ve çanta fermuarı için <a href="/konyaalti-fermuar-tamiri">fermuar tamiri sayfamıza</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Montunuzun Fermuarı mı Bozuldu?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, kısa sürede fiyat alın; normal işte ertesi gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Mont Fermuarı Değişimi Antalya · {PHONE}</div>
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
