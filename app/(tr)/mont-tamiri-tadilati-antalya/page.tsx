import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/mont-tamiri-tadilati-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, mont tamiri veya tadilatı hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Mont Tamiri ve Tadilatı ₺200 · Fermuar · Antalya" },
  description:
    "Mont boy ve kol kısaltma, daraltma ₺200'den; fermuar değişimi ₺300'den. Normal iş aynı gün, acil 1–2 saat. Eve ve otele ücretsiz. ☎ " + PHONE,
  keywords: fitKeywords([
    'mont tamiri', 'mont tadilatı', 'mont kısaltma', 'mont daraltma', 'mont kol kısaltma', 'mont tamiri Antalya', 'mont tadilatı fiyat', 'mont fermuarı değişimi', 'kaban tadilatı',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Mont Tamiri ve Tadilatı Antalya — Aynı Gün",
    description: "Mont kısaltma, daraltma, tamir ve fermuar değişimi. ₺200'den. Normal iş aynı gün. ☎ " + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Mont Tamiri ve Tadilatı Antalya — Aynı Gün" }],
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
      name: "Mont Tamiri ve Tadilatı Antalya — Aynı Gün",
      description: "Mont tamiri ve tadilatı: boy ve kol kısaltma, daraltma ₺200'den, fermuar değişimi ₺300'den.",
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
        { '@type': 'ListItem', position: 3, name: "Mont Tamiri ve Tadilatı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Mont Tamiri ve Tadilatı",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 3,
        offers: [
          { '@type': 'Offer', name: 'Mont Kısaltma / Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Mont Tamiri', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Mont Fermuarı Değişimi', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Mont Tadilatı Nasıl İlerler?",
      description: "Mont Tadilatı Nasıl İlerler?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan montun ve yapılacak yerin fotoğrafını gönderin, ön fiyat alın.' },
        { '@type': 'HowToStep', name: 'Montu Teslim Edin', text: 'Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin.' },
        { '@type': 'HowToStep', name: 'Ölçü ve Dikiş', text: 'Ölçü montun üzerinizdeyken işaretlenir; işlem yapılır. Normal işte aynı gün, acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Kontrol edilip teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Mont tamiri ve tadilatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Mont boy/kol kısaltma ve daraltma ₺200\'den, mont fermuarı değişimi ₺300\'den başlar. Net fiyat işin kapsamına göre, fotoğrafla WhatsApp\'tan söylenir.' } },
        { '@type': 'Question', name: 'Mont kısaltma ve kol kısaltma yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Mont boyu ve kol boyu ölçünüze göre kısaltılır; ölçü montun üzerinizdeyken işaretlenir. Başlangıç fiyatı ₺200\'dir.' } },
        { '@type': 'Question', name: 'Mont daraltma yapılıyor mu?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Beden ve kol daraltma yapıyoruz; yapılabilecek işlem montun kumaşına ve astarına göre fotoğraftan değerlendirilir.' } },
        { '@type': 'Question', name: 'Mont fermuarı değişiyor mu?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Mont, kaban ve ceket fermuarı değişimi ₺300\'den başlar. Ayrıntı için mont fermuarı değişimi sayfamıza bakabilirsiniz.' } },
        { '@type': 'Question', name: 'Mont tamiri ve tadilatı ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Normal işler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır. Kapsamlı işlerde süreyi fotoğrafı görünce söyleriz.' } },
        { '@type': 'Question', name: 'Yırtık veya sökülen mont dikilir mi?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Söküklerin dikilmesi ve yırtık onarımı yapılır; fiyat işe göre değişir. Fotoğrafı gönderirseniz net fiyatı söyleriz.' } },
        { '@type': 'Question', name: 'Montu eve veya otele gelip alıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim ücretsizdir.' } },
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
            <span className="hero-tag">🧥 🧥 Mont Tamiri · Tadilatı · Fermuar</span>
            <h1 id="hero-h">
              Mont Tamiri ve Tadilatı <span className="accent">Antalya</span><br />₺200'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Mont boy ve kol kısaltma, daraltma, tamir ve fermuar değişimi. Eve ve otele ücretsiz servis; her gün 08:00–23:00.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Mont kısaltma ve daraltma ₺200'den, mont fermuarı değişimi ₺300'den başlar; normal işler aynı gün, acil işler 1–2 saatte teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Mont Tadilat Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Mont Tamiri ve Tadilatı Fiyatları</h2>
              <p className="sec-sub">Net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧥</span>
                  <div><div className="price-tr">Mont Tadilatı ve Tamiri</div></div>
                </div>
                <p className="price-desc">Fiyatlar başlangıç fiyatıdır; net fiyat fotoğrafa göre söylenir.</p>
                <table className="price-table"><tbody>
                  <tr><td>Mont Boy Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Mont Kol Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Mont Daraltma</td><td>₺200+</td></tr>
                  <tr><td>Mont Fermuarı Değişimi</td><td>₺300+</td></tr>
                  <tr><td>Yırtık / Sökük Onarımı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır; montun kumaşına ve işin kapsamına göre değişebilir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Mont Tadilatı Nasıl İlerler?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan montun ve yapılacak yerin fotoğrafını gönderin, ön fiyat alın.</div></div>
              <div className="howto-item"><div className="howto-t">Montu Teslim Edin</div><div className="howto-d">Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin.</div></div>
              <div className="howto-item"><div className="howto-t">Ölçü ve Dikiş</div><div className="howto-d">Ölçü montun üzerinizdeyken işaretlenir; işlem yapılır. Normal işte aynı gün, acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Kontrol edilip teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Mont Tamiri ve Tadilatı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Mont tamiri ve tadilatı ne kadar?', 'Mont boy/kol kısaltma ve daraltma ₺200\'den, mont fermuarı değişimi ₺300\'den başlar. Net fiyat işin kapsamına göre, fotoğrafla WhatsApp\'tan söylenir.'],
              ['Mont kısaltma ve kol kısaltma yapıyor musunuz?', 'Evet. Mont boyu ve kol boyu ölçünüze göre kısaltılır; ölçü montun üzerinizdeyken işaretlenir. Başlangıç fiyatı ₺200\'dir.'],
              ['Mont daraltma yapılıyor mu?', 'Evet. Beden ve kol daraltma yapıyoruz; yapılabilecek işlem montun kumaşına ve astarına göre fotoğraftan değerlendirilir.'],
              ['Mont fermuarı değişiyor mu?', 'Evet. Mont, kaban ve ceket fermuarı değişimi ₺300\'den başlar. Ayrıntı için mont fermuarı değişimi sayfamıza bakabilirsiniz.'],
              ['Mont tamiri ve tadilatı ne kadar sürer?', 'Normal işler aynı gün teslim edilir; acil işler 1–2 saatte tamamlanır. Kapsamlı işlerde süreyi fotoğrafı görünce söyleriz.'],
              ['Yırtık veya sökülen mont dikilir mi?', 'Evet. Söküklerin dikilmesi ve yırtık onarımı yapılır; fiyat işe göre değişir. Fotoğrafı gönderirseniz net fiyatı söyleriz.'],
              ['Montu eve veya otele gelip alıyor musunuz?', 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim ücretsizdir.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Fermuar için <a href="/mont-fermuar-degisimi-antalya">mont fermuarı değişimi</a>, uzun kaban için <a href="/kaban-palto-tadilati-antalya">kaban ve palto tadilatı</a>, <a href="/yelek-tamiri-tadilati-antalya">yelek tamiri</a>, kot mont için <a href="/kot-ceket-mont-tadilati-antalya">kot ceket ve mont</a>, deri için <a href="/deri-ceket-tadilati-antalya">deri ceket tadilatı</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Montunuzu mu Yaptıracaksınız?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, kısa sürede fiyat alın; normal işte aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Mont Tamiri ve Tadilatı Antalya · {PHONE}</div>
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
