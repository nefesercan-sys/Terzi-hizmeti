import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/astar-degisimi-tamiri-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA("Merhaba, astar değişimi/tamiri için fiyat almak istiyorum. Fotoğrafı gönderiyorum.");
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-14';
const FAQ: [string, string][] = [
  ["Astar değişimi ne kadar?", "Fiyat ürüne (ceket, mont, palto, kaban) ve işe göre değişir; sabit fiyat yazmıyoruz. Fotoğrafı WhatsApp'tan gönderirseniz net fiyatı söyleriz."],
  ["Ceket ve mont astarı değişir mi?", "Evet. Ceket, mont, palto ve kaban astarı yenisiyle değiştirilir."],
  ["Yırtık astar tamir edilir mi?", "Evet. Yırtık veya sökülen astar onarılır; kapsamı fotoğraftan değerlendiririz."],
  ["Cep astarı tamiri yapılıyor mu?", "Evet. Delinen veya yırtılan cep astarı onarılır."],
  ["Astar değişimi ne kadar sürer?", "Süre işin durumuna göre değişir; fotoğrafı görünce söyleriz."],
  ["Eve veya otele gelip alıyor musunuz?", "Evet. Antalya'da eve ve otele alım-teslim yapılır; Antalya içi ve yurt dışı kargoyla da çalışılır (kargo ücreti müşteriye aittir)."],
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Astar Değişimi ve Astar Tamiri · Antalya · +90 531 898 64 18" },
  description: "Terziye sor: +90 531 898 64 18 · Ceket, mont, palto ve kaban astar değişimi ve onarımı; yırtık astar tamiri. Fiyat fotoğrafa göre.",
  keywords: fitKeywords(["astar değişimi", "astar tamiri", "yırtık astar", "ceket astarı değişimi", "mont astarı değişimi", "palto astarı", "kaban astarı", "astar tamiri Antalya"]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Astar Değişimi Antalya | Terzi Can",
    description: "Ceket, mont, palto ve kaban astar değişimi ve onarımı; yırtık astar tamiri. Antalya Konyaaltı.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Astar Değişimi Antalya" }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: "Astar Değişimi Antalya", description: "Ceket, mont, palto ve kaban astar değişimi ve onarımı; yırtık astar tamiri. Antalya Konyaaltı.",
      inLanguage: 'tr', isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` }, dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Terzi Hizmetleri', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: "Astar Değişimi", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: "Astar Değişimi",
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
            <span className="hero-tag">🧥 Astar · Ceket · Mont · Palto</span>
            <h1 id="hero-h">Astar Değişimi ve Astar Tamiri <span className="accent">Antalya</span></h1>
            <p className="hero-desc">Ceket, mont, palto ve kaban astar değişimi ve onarımı; yırtık astar tamiri. Antalya'da eve ve otele alım-teslim.</p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Astar değişimi ve astar tamiri yapılır; fiyat ürüne ve işe göre fotoğrafla söylenir.</p>
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
              <h2 className="sec-h ff" id="price-h">Astar Değişimi Fiyatları</h2>
              <p className="sec-sub">Astar değişiminde net fiyat fotoğrafa veya işin detayına göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧥</span>
                  <div><div className="price-tr">Astar Değişimi</div></div>
                </div>
                <table className="price-table"><tbody>
                  <tr><td>Astar Değişimi</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Yırtık Astar Onarımı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Cep Astarı Onarımı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Hangi işleri yapıyoruz?</span>
              <h2 className="sec-h ff" id="howto-h">Astar Değişimi Kapsamı</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">🧥 Astar değişimi</div><div className="howto-d">Ceket, mont, palto ve kabanın aşınmış astarı yenisiyle değiştirilir.</div></div>
              <div className="howto-item"><div className="howto-t">🪡 Yırtık astar onarımı</div><div className="howto-d">Yırtık veya sökülen astar onarılır.</div></div>
              <div className="howto-item"><div className="howto-t">👜 Cep astarı</div><div className="howto-d">Delinen veya yırtılan cep astarı onarılır.</div></div>
              <div className="howto-item"><div className="howto-t">Fotoğraf gönderin</div><div className="howto-d">Astarın ve ürünün fotoğrafını WhatsApp'tan gönderin, net fiyat alın.</div></div>
            </div>
          </div>
        </section>

        <KargoKisa lang="tr" work="Astar değişimi ve tamiri" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Astar Değişimi Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Montlar için <a href="/mont-tamiri-tadilati-antalya">mont tamiri ve tadilatı</a>, palto için <a href="/kaban-palto-tadilati-antalya">kaban ve palto tadilatı</a>, takım için <a href="/takim-elbise-tadilati-antalya">takım elbise tadilatı</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Astarınız mı Yırtıldı?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, fiyatı ve süreyi söyleyelim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Astar Değişimi Antalya · {PHONE}</div>
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
