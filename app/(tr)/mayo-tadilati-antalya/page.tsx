import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/mayo-tadilati-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA("Merhaba, mayo/bikini tadilatı için fiyat almak istiyorum. Fotoğrafı gönderiyorum.");
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-14';
const FAQ: [string, string][] = [
  ["Mayo tadilatı yapıyor musunuz?", "Evet. Mayo ve bikini tadilatı yapıyoruz; kumaşa ve modele göre yapılıp yapılamayacağını fotoğraftan söyleriz."],
  ["Mayo tadilatı ne kadar?", "Fiyat işe göre değişir; sabit fiyat yazmıyoruz. Mayonun fotoğrafını WhatsApp'tan gönderirseniz net fiyatı söyleriz."],
  ["Mayo daraltılır mı?", "Evet. Beden ayarlama ve daraltma yapılır; kumaş, astar ve kesime göre fotoğraftan değerlendirilir."],
  ["Bikini askısı ve bağlaması ayarlanır mı?", "Evet. Askı boyu ve bağlama kısımları ayarlanır."],
  ["Mayo tadilatı ne kadar sürer?", "Süre işin durumuna göre değişir; fotoğrafı görünce söyleriz."],
  ["Mayoyu otelden alıp getirir misiniz?", "Evet. Antalya'da eve ve otele alım-teslim yapılır; Antalya içi ve yurt dışı kargoyla da çalışılır (kargo ücreti müşteriye aittir)."],
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Mayo ve Bikini Tadilatı · Antalya · +90 531 898 64 18" },
  description: "Terziye sor: +90 531 898 64 18 · Mayo ve bikini tadilatı: beden daraltma, askı ve bağlama ayarı, onarım. Fiyat fotoğrafa göre. Antalya'da alım-teslim.",
  keywords: fitKeywords(["mayo tadilatı", "mayo daraltma", "bikini tadilatı", "mayo tamiri", "mayo askı ayarı", "mayo beden ayarlama", "mayo tadilatı Antalya", "swimwear alterations Antalya", "переделка купальника Анталья"]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Mayo Tadilatı Antalya | Terzi Can",
    description: "Mayo ve bikini tadilatı Antalya: beden ayarlama, askı ve bağlama ayarı, onarım. Fiyat fotoğrafa göre.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Mayo Tadilatı Antalya" }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: "Mayo Tadilatı Antalya", description: "Mayo ve bikini tadilatı Antalya: beden ayarlama, askı ve bağlama ayarı, onarım. Fiyat fotoğrafa göre.",
      inLanguage: 'tr', isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` }, dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Terzi Hizmetleri', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: "Mayo Tadilatı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: "Mayo Tadilatı",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n }))
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
          <a href={`tel:${PHONE_TEL}`} className="fbtn fbtn-call" aria-label="Ara"><span className="ico-tel" aria-hidden="true" /></a>
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
            <span className="hero-tag">🩱 Mayo · Bikini · Plaj Giyimi</span>
            <h1 id="hero-h">Mayo ve Bikini Tadilatı <span className="accent">Antalya</span></h1>
            <p className="hero-desc">Mayo ve bikini tadilatı: beden ayarlama, daraltma, askı ve bağlama ayarı, onarım. Antalya'da eve ve otele alım-teslim.</p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Mayo ve bikini tadilatı yapılır; yapılıp yapılamayacağı kumaşa ve modele göre fotoğraftan söylenir, fiyat fotoğrafa göre verilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary"><span className="ico-tel" aria-hidden="true" /> {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Fiyatlar 2026</span>
              <h2 className="sec-h ff" id="price-h">Mayo Tadilatı Fiyatları</h2>
              <p className="sec-sub">Mayo tadilatında sabit fiyat yoktur; net fiyat fotoğrafa veya işin detayına göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🩱</span>
                  <div><div className="price-tr">Mayo Tadilatı</div></div>
                </div>
                <table className="price-table"><tbody>
                  <tr><td>Mayo Daraltma / Beden Ayarı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Askı ve Bağlama Ayarı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Mayo Onarımı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Hangi işleri yapıyoruz?</span>
              <h2 className="sec-h ff" id="howto-h">Mayo Tadilatı Kapsamı</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">📐 Beden ayarlama ve daraltma</div><div className="howto-d">Mayo ve bikini ölçünüze göre ayarlanır; kumaş ve kesime göre fotoğraftan değerlendirilir.</div></div>
              <div className="howto-item"><div className="howto-t">🎀 Askı ve bağlama ayarı</div><div className="howto-d">Askı boyu ve bağlama kısımları ayarlanır.</div></div>
              <div className="howto-item"><div className="howto-t">🧵 Onarım</div><div className="howto-d">Sökülen dikiş ve yırtıkların onarımı yapılır.</div></div>
              <div className="howto-item"><div className="howto-t">Fotoğraf gönderin</div><div className="howto-d">Mayonun fotoğrafını WhatsApp'tan gönderin, yapılıp yapılamayacağını ve net fiyatı söyleyelim.</div></div>
            </div>
          </div>
        </section>

        <KargoKisa lang="tr" work="Mayo tadilatı" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Mayo Tadilatı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Plaj ve yazlık giyim için <a href="/antalya-terzi">Antalya terzi</a> sayfamıza, abiye için <a href="/abiye-tadilati-antalya">abiye tadilatı</a>, otel müşterileri için <a href="/otele-gelen-terzi-antalya">otele gelen terzi</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Mayonuzu mu Yaptıracaksınız?</h2>
          <p className="cta-sub">Mayonun fotoğrafını gönderin, yapılıp yapılmayacağını ve fiyatı söyleyelim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Mayo Tadilatı Antalya · {PHONE}</div>
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
