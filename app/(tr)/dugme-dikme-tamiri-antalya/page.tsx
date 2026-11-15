import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/dugme-dikme-tamiri-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA("Merhaba, düğme dikme/tamiri için fiyat almak istiyorum. Fotoğrafı gönderiyorum.");
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-14';
const FAQ: [string, string][] = [
  ["Düğme dikme ne kadar?", "Fiyat işe göre değişir (düğme sayısı, kalınlık, ilik); sabit fiyat yazmıyoruz. Fotoğrafı WhatsApp'tan gönderirseniz net fiyatı söyleriz."],
  ["Düşen düğmeyi dikiyor musunuz?", "Evet. Düşen veya sallanan düğmeler yerine sağlam dikilir."],
  ["Düğme iliği onarımı yapılıyor mu?", "Evet. Yırtılan veya açılan düğme iliği onarılır."],
  ["Ceket ve palto düğmesi dikiyor musunuz?", "Evet. Ceket, palto ve mont düğmeleri kalın iplikle ve kumaşa uygun teknikle dikilir."],
  ["Düğme dikme ne kadar sürer?", "Normal işler aynı gün, acil işler 1–2 saatte teslim edilir; kapsamlı işlerde süreyi fotoğrafı görünce söyleriz."],
  ["Eve veya otele gelip alıyor musunuz?", "Evet. Antalya'da eve ve otele alım-teslim yapılır; Antalya içi ve yurt dışı kargoyla da çalışılır (kargo ücreti müşteriye aittir)."],
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Düğme Dikme ve Düğme Tamiri · Antalya · +90 531 898 64 18" },
  description: "Terziye sor: +90 531 898 64 18 · Düğme dikme, düşen düğme, düğme iliği ve çıtçıt tamiri; gömlek, ceket, palto ve mont. Fiyat fotoğrafa göre.",
  keywords: fitKeywords(["düğme dikme", "düğme dikimi", "düşen düğme", "düğme iliği", "çıtçıt takma", "ceket düğmesi dikme", "palto düğmesi", "düğme tamiri Antalya"]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Düğme Dikme Antalya | Terzi Can",
    description: "Düğme dikme, düşen düğme, düğme iliği ve çıtçıt tamiri: gömlek, ceket, palto ve mont. Antalya Konyaaltı.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Düğme Dikme Antalya" }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: "Düğme Dikme Antalya", description: "Düğme dikme, düşen düğme, düğme iliği ve çıtçıt tamiri: gömlek, ceket, palto ve mont. Antalya Konyaaltı.",
      inLanguage: 'tr', isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` }, dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Terzi Hizmetleri', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: "Düğme Dikme", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: "Düğme Dikme",
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
            <span className="hero-tag">🔘 Düğme · İlik · Çıtçıt</span>
            <h1 id="hero-h">Düğme Dikme ve Düğme Tamiri <span className="accent">Antalya</span></h1>
            <p className="hero-desc">Düğme dikme, düşen düğmeleri yerine dikme, düğme iliği ve çıtçıt tamiri: gömlek, ceket, palto ve mont. Antalya'da eve ve otele alım-teslim.</p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Düğme dikme ve düğme tamiri yapılır; fiyat işe göre fotoğrafla söylenir.</p>
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
              <h2 className="sec-h ff" id="price-h">Düğme Dikme Fiyatları</h2>
              <p className="sec-sub">Düğme dikmede net fiyat fotoğrafa veya işin detayına göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🔘</span>
                  <div><div className="price-tr">Düğme Dikme</div></div>
                </div>
                <table className="price-table"><tbody>
                  <tr><td>Düğme Dikme</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Düğme İliği Onarımı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Çıtçıt Takma / Değiştirme</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Hangi işleri yapıyoruz?</span>
              <h2 className="sec-h ff" id="howto-h">Düğme Dikme Kapsamı</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">🔘 Düğme dikme</div><div className="howto-d">Düşen veya sallanan düğmeler sağlam dikilir; ceket, palto ve montta kalın iplikle.</div></div>
              <div className="howto-item"><div className="howto-t">🕳️ Düğme iliği</div><div className="howto-d">Yırtılan veya açılan düğme iliği onarılır.</div></div>
              <div className="howto-item"><div className="howto-t">🧷 Çıtçıt</div><div className="howto-d">Çıtçıt takılır veya değiştirilir.</div></div>
              <div className="howto-item"><div className="howto-t">Fotoğraf gönderin</div><div className="howto-d">Düğmenin ve yerin fotoğrafını WhatsApp'tan gönderin, net fiyat alın.</div></div>
            </div>
          </div>
        </section>

        <KargoKisa lang="tr" work="Düğme dikme ve tamiri" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Düğme Dikme Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Fermuar için <a href="/terzi-hizmetleri/fermuar-degisimi-tamiri">fermuar değişimi ve tamiri</a>, ceket için <a href="/takim-elbise-tadilati-antalya">takım elbise tadilatı</a>, sökük ve yırtıklar için <a href="/sokuk-yirtik-onarimi-antalya">sökük ve yırtık onarımı</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Düğmeniz mi Düştü?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, fiyatı söyleyelim; normal işte aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Düğme Dikme Antalya · {PHONE}</div>
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
