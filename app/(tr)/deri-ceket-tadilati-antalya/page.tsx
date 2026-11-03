import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/deri-ceket-tadilati-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, deri ceket tadilatı hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Deri Ceket Tadilatı Antalya · Daraltma, Kısaltma, Onarım" },
  description:
    "Deri ceket ve deri pantolon tadilatı: daraltma, kol kısaltma ve onarım. Önce fotoğraf, sonra net fiyat ve süre. Eve ve otele ücretsiz servis. ☎ " + PHONE,
  keywords: fitKeywords([
    'deri ceket tadilatı', 'deri ceket daraltma', 'deri ceket kol kısaltma', 'deri ceket tamiri', 'deri pantolon tadilatı', 'deri mont terzi', 'deri ceket tadilatı fiyat', 'Antalya deri ceket terzi',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Deri Ceket Tadilatı Antalya",
    description: "Deri ceket daraltma, kol kısaltma ve onarım. Fotoğrafla net fiyat ve süre. ☎ " + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Deri ceket tadilatı Antalya" }],
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
      name: "Deri Ceket Tadilatı Antalya",
      description: "Deri ceket ve deri pantolon tadilatı: daraltma, kol kısaltma ve onarım.",
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
        { '@type': 'ListItem', position: 3, name: "Deri Ceket Tadilatı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Deri Ceket Tadilatı",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Deri Ceket Tadilatı Nasıl İlerler?",
      description: "Deri Ceket Tadilatı Nasıl İlerler?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan ceketin önden, arkadan ve yapılacak yerin fotoğrafını gönderin.' },
        { '@type': 'HowToStep', name: 'Deri Cinsi Görülür', text: 'Deri cinsi görüldükten sonra yapılabilecek işlem ve fiyat netleşir.' },
        { '@type': 'HowToStep', name: 'Ceketi Teslim Edin', text: 'Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin; ölçü üzerinizde alınır.' },
        { '@type': 'HowToStep', name: 'Tadilat ve Teslim', text: 'İşlem yapılır ve ceket teslim edilir. Süre işin kapsamına göre WhatsApp\'ta netleşir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Deri ceket tadilatı yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Deri ceket ve deri pantolonda daraltma, kısaltma ve onarım yapıyoruz. Önce fotoğraf istiyoruz; deri cinsi görüldükten sonra yapılabilecek işlem netleşir.' } },
        { '@type': 'Question', name: 'Deri ceket tadilatı fiyatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Fiyat işin kapsamına ve deri cinsine göre değişir; fotoğrafı WhatsApp\'tan gönderirseniz net fiyatı söyleriz.' } },
        { '@type': 'Question', name: 'Deri ceket daraltılabilir mi?', acceptedAnswer: { '@type': 'Answer', text: 'Yapılabilirlik derinin cinsine ve dikiş yapısına bağlıdır. Fotoğraf gönderirseniz değerlendirip bilgi veririz.' } },
        { '@type': 'Question', name: 'Deri ceketin kolu kısaltılır mı?', acceptedAnswer: { '@type': 'Answer', text: 'Kol boyu ceket üzerinizdeyken işaretlenir. Yapılabilecek işlem fotoğraftan değerlendirilir.' } },
        { '@type': 'Question', name: 'Deri ceket tadilatı ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Süre işin kapsamına göre değişir; fotoğrafı gönderince net süreyi WhatsApp\'tan söyleriz.' } },
        { '@type': 'Question', name: 'Deri ceketi eve veya otele gelip alıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim ücretsizdir.' } },
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
            <span className="hero-tag">🧤 🧤 Deri Ceket Tadilatı · Antalya</span>
            <h1 id="hero-h">
              Deri Ceket Tadilatı <span className="accent">Antalya</span><br />Daraltma, Kısaltma, Onarım</h1>
            <p className="hero-desc">
              Deri ceket ve deri pantolonda daraltma, kol kısaltma ve onarım. Eve ve otele ücretsiz servis; her gün 08:00–23:00.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Deri ceket ve deri pantolonda daraltma, kısaltma ve onarım yapılır; önce fotoğraf gönderilir, ardından net fiyat ve süre WhatsApp'tan söylenir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Tadilat Türleri</span>
              <h2 className="sec-h ff" id="price-h">Deri Ceket Tadilatında Neler Yapılır?</h2>
              <p className="sec-sub">Net fiyat ve süre için fotoğraf yeterlidir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧤</span>
                  <div><div className="price-tr">Yapılan İşlemler</div></div>
                </div>
                <p className="price-desc">Fiyat işe ve deri cinsine göre fotoğrafla netleşir.</p>
                <table className="price-table"><tbody>
                  <tr><td>Deri Ceket Daraltma</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Deri Ceket Kol Kısaltma</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Deri Ceket Onarımı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Deri Pantolon Tadilatı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyat ve süre deri cinsine ve işin kapsamına göre fotoğraf görüldükten sonra söylenir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Deri Ceket Tadilatı Nasıl İlerler?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan ceketin önden, arkadan ve yapılacak yerin fotoğrafını gönderin.</div></div>
              <div className="howto-item"><div className="howto-t">Deri Cinsi Görülür</div><div className="howto-d">Deri cinsi görüldükten sonra yapılabilecek işlem ve fiyat netleşir.</div></div>
              <div className="howto-item"><div className="howto-t">Ceketi Teslim Edin</div><div className="howto-d">Atölyeye getirin veya eve/otele ücretsiz alım-teslim isteyin; ölçü üzerinizde alınır.</div></div>
              <div className="howto-item"><div className="howto-t">Tadilat ve Teslim</div><div className="howto-d">İşlem yapılır ve ceket teslim edilir. Süre işin kapsamına göre WhatsApp'ta netleşir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Deri Ceket Tadilatı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Deri ceket tadilatı yapıyor musunuz?', 'Evet. Deri ceket ve deri pantolonda daraltma, kısaltma ve onarım yapıyoruz. Önce fotoğraf istiyoruz; deri cinsi görüldükten sonra yapılabilecek işlem netleşir.'],
              ['Deri ceket tadilatı fiyatı ne kadar?', 'Fiyat işin kapsamına ve deri cinsine göre değişir; fotoğrafı WhatsApp\'tan gönderirseniz net fiyatı söyleriz.'],
              ['Deri ceket daraltılabilir mi?', 'Yapılabilirlik derinin cinsine ve dikiş yapısına bağlıdır. Fotoğraf gönderirseniz değerlendirip bilgi veririz.'],
              ['Deri ceketin kolu kısaltılır mı?', 'Kol boyu ceket üzerinizdeyken işaretlenir. Yapılabilecek işlem fotoğraftan değerlendirilir.'],
              ['Deri ceket tadilatı ne kadar sürer?', 'Süre işin kapsamına göre değişir; fotoğrafı gönderince net süreyi WhatsApp\'tan söyleriz.'],
              ['Deri ceketi eve veya otele gelip alıyor musunuz?', 'Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim ücretsizdir.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a>, tüm hizmetler için <a href="/antalya-terzi">Antalya terzi sayfasına</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Deri Ceketinizi mi Yaptıracaksınız?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, net fiyat ve süreyi söyleyelim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Deri Ceket Tadilatı Antalya · {PHONE}</div>
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
