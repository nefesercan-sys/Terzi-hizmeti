import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoFermuarKutusu from '@/components/KargoFermuarKutusu';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/kaban-palto-tadilati-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA("Merhaba, kaban veya palto tadilatı için fiyat almak istiyorum. Fotoğrafı gönderiyorum.");
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';
const FAQ: [string, string][] = [["Kaban ve palto tadilatı ne kadar?", "Kaban ve palto boy/kol kısaltma ve daraltma ₺200'den, fermuar değişimi ₺300'den başlar. Astar, düğme ve onarım işleri kapsama göre fotoğrafla fiyatlanır."], ["Paltonun boyu kısaltılır mı?", "Evet. Palto boyu üzerinizdeyken işaretlenir; astar ve kumaş boyuna göre kısaltılır. Başlangıç fiyatı ₺200'dür."], ["Kaban kolu kısaltma ve daraltma yapılıyor mu?", "Evet. Kol boyu kısaltılır, kol ve beden daraltılır; kumaş ve astara göre yapılabilecek işlem fotoğraftan değerlendirilir."], ["Palto astarı değişir mi?", "Evet. Yırtılan veya eskiyen astar onarılır ya da değiştirilir; fiyat işin kapsamına göre fotoğrafla söylenir."], ["Kaban fermuarı veya düğmesi değişiyor mu?", "Evet. Kaban fermuarı değişimi ₺300'den başlar; düğme takma ve değiştirme yapılır."], ["Kaban ve palto tadilatı ne kadar sürer?", "Normal işler aynı gün, acil işler 1–2 saatte teslim edilir. Kapsamlı işlerde süreyi fotoğrafı görünce söyleriz."], ["Kaban ve paltoyu eve veya otele gelip alıyor musunuz?", "Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim yapılır."]];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Kaban ve Palto Tadilatı ₺200'den · Antalya" },
  description: "Kaban ve palto boy, kol kısaltma ve daraltma ₺200'den; fermuar değişimi ₺300'den. Astar ve düğme onarımı. Eve ve otele servis. ☎ +90 531 898 64 18",
  keywords: fitKeywords(["kaban tadilatı", "palto tadilatı", "kaban kısaltma", "palto kısaltma", "palto daraltma", "kaban kol kısaltma", "palto astar değişimi", "kaban düğme değişimi", "palto tamiri Antalya"]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kaban ve Palto Tadilatı Antalya | Terzi Can",
    description: "Kaban ve palto boyu, kol boyu, bel ve beden daraltma; astar, düğme, cep ve yaka onarımı. Eve ve otele servis.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Kaban ve Palto Tadilatı Antalya" }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: "Kaban ve Palto Tadilatı Antalya", description: "Kaban ve palto boyu, kol boyu, bel ve beden daraltma; astar, düğme, cep ve yaka onarımı. Eve ve otele servis.",
      inLanguage: 'tr', isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` }, dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Terzi Hizmetleri', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: "Kaban ve Palto Tadilatı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: "Kaban ve Palto Tadilatı",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 3,
        offers: [{"@type": "Offer", "name": "Kaban / Palto Kısaltma", "price": "200", "priceCurrency": "TRY", "priceValidUntil": "2027-12-31"}, {"@type": "Offer", "name": "Kaban / Palto Daraltma", "price": "200", "priceCurrency": "TRY", "priceValidUntil": "2027-12-31"}, {"@type": "Offer", "name": "Kaban / Palto Fermuarı Değişimi", "price": "300", "priceCurrency": "TRY", "priceValidUntil": "2027-12-31"}],
      }
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`,
      mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
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
            <span className="hero-tag">🧥 Kaban · Palto · Astar · Düğme</span>
            <h1 id="hero-h">Kaban ve Palto Tadilatı <span className="accent">Antalya</span></h1>
            <p className="hero-desc">Kaban ve palto boyu, kol boyu, bel ve beden daraltma; astar, düğme, cep ve yaka onarımı. Eve ve otele servis. Her gün 08:00–23:00.</p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Kaban ve palto boy-kol kısaltma ve daraltma ₺200'den, fermuar değişimi ₺300'den başlar; astar, düğme ve söküklerin onarımı fotoğrafa göre fiyatlanır. Normal işler aynı gün teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Fiyatlar 2026</span>
              <h2 className="sec-h ff" id="price-h">Kaban ve Palto Tadilatı Fiyatları</h2>
              <p className="sec-sub">Net fiyat fotoğrafa veya işin detayına göre söylenir; KDV dahil değildir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧥</span>
                  <div><div className="price-tr">Kaban ve Palto Tadilatı</div></div>
                </div>
                <table className="price-table"><tbody>
                  <tr><td>Kaban / Palto Boy Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Kaban / Palto Kol Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Kaban / Palto Daraltma</td><td>₺200+</td></tr>
                  <tr><td>Kaban / Palto Fermuarı</td><td>₺300+</td></tr>
                  <tr><td>Astar, Düğme, Cep, Yaka Onarımı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Hangi işleri yapıyoruz?</span>
              <h2 className="sec-h ff" id="howto-h">Kaban ve Palto Tadilatı Kapsamı</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">📏 Boy ve kol kısaltma</div><div className="howto-d">Boy ve kol, kaban veya palto üzerinizdeyken işaretlenir; astar ve kumaş boyuna göre kısaltılır.</div></div>
              <div className="howto-item"><div className="howto-t">📐 Daraltma</div><div className="howto-d">Beden, bel ve kol daraltma; yün, kaşmir ve kalın kumaşlarda yapılabilecek işlem fotoğraftan değerlendirilir.</div></div>
              <div className="howto-item"><div className="howto-t">🪡 Astar ve düğme</div><div className="howto-d">Yırtılan astarın onarımı veya değişimi, düğme takılması ve düğme değişimi.</div></div>
              <div className="howto-item"><div className="howto-t">🧷 Fermuar, cep, yaka</div><div className="howto-d">Kaban fermuarı değişimi, cep ağzı ve yaka onarımı.</div></div>
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">Kaban veya paltonun ve yapılacak yerin fotoğrafını WhatsApp'tan gönderin. Eve ve otele alım-teslim isteyebilirsiniz.</div></div>
            </div>
          </div>
        </section>

        <KargoFermuarKutusu lang="tr" variant="mont" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Kaban ve Palto Tadilatı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Spor mont için <a href="/mont-tamiri-tadilati-antalya">mont tamiri ve tadilatı</a>, fermuar için <a href="/mont-fermuar-degisimi-antalya">mont fermuarı değişimi</a>, deri için <a href="/deri-ceket-tadilati-antalya">deri ceket tadilatı</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Kaban veya Paltonuzu mu Yaptıracaksınız?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, kısa sürede fiyat alın; normal işte aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Kaban ve Palto Tadilatı Antalya · {PHONE}</div>
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
