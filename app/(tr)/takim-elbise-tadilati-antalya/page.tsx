import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/takim-elbise-tadilati-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA("Merhaba, takım elbise tadilatı için fiyat almak istiyorum. Fotoğrafı gönderiyorum.");
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-14';
const FAQ: [string, string][] = [
  ["Takım elbise tadilatı ne kadar?", "Fiyat işe göre değişir (ceket daraltma, kol kısaltma, pantolon bel ayarı vb.); sabit fiyat yazmıyoruz. Pantolon paça kısaltma 200 TL'den başlar. Fotoğrafı WhatsApp'tan gönderirseniz net fiyatı söyleriz."],
  ["Takım elbise satıyor musunuz?", "Hayır, hazır takım elbise satmıyoruz. Sizin takımınızın tadilatını ve isterseniz özel dikimini yapıyoruz."],
  ["Takım elbise ceketi daraltılır mı?", "Evet. Ceket gövdesi ve kolu kumaş, astar ve kesime göre fotoğraftan değerlendirilir; yapılabilecek ayar ölçünüzle netleşir."],
  ["Ceket kolu kısaltılır mı?", "Evet. Ceket kolu ölçünüze göre kısaltılır; kol düğmeli modellerde uygunluğu fotoğraftan söyleriz."],
  ["Takım elbise pantolonunun paçası ve beli ayarlanır mı?", "Evet. Paça kısaltma 200 TL'den başlar; bel daraltma ve genişletme fotoğrafa göre fiyatlandırılır."],
  ["Takım elbise tadilatı ne kadar sürer?", "Normal işler aynı gün, acil işler 1–2 saatte teslim edilir; kapsamlı ceket işlerinde süreyi fotoğrafı görünce söyleriz."],
  ["Takımı eve veya otele gelip alıyor musunuz?", "Evet. Antalya'da eve ve otele alım-teslim yapılır; Antalya içi ve yurt dışı kargoyla da çalışılır (kargo ücreti müşteriye aittir)."],
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Takım Elbise Tadilatı ve Tamiri · Antalya · +90 531 898 64 18" },
  description: "Terziye sor: +90 531 898 64 18 · Takım elbise ceket daraltma, kol ve paça kısaltma, bel ayarı, yelek ve astar onarımı. Fiyat fotoğrafa göre. Takım satışı yok, tadilat ve özel dikim.",
  keywords: fitKeywords(["takım elbise tadilatı", "takım elbise daraltma", "ceket daraltma", "ceket kol kısaltma", "takım elbise pantolon paça kısaltma", "takım elbise bel daraltma", "takım elbise yelek tadilatı", "takım elbise tamiri", "takım elbise tadilatı Antalya"]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Takım Elbise Tadilatı Antalya | Terzi Can",
    description: "Takım elbise ceket, pantolon ve yelek tadilatı: daraltma, kol ve paça kısaltma, bel ayarı, astar onarımı. Fiyat fotoğrafa göre.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Takım Elbise Tadilatı Antalya" }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: "Takım Elbise Tadilatı Antalya", description: "Takım elbise ceket, pantolon ve yelek tadilatı: daraltma, kol ve paça kısaltma, bel ayarı, astar onarımı. Fiyat fotoğrafa göre.",
      inLanguage: 'tr', isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` }, dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Terzi Hizmetleri', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: "Takım Elbise Tadilatı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: "Takım Elbise Tadilatı",
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
            <span className="hero-tag">🤵 Takım Elbise · Ceket · Pantolon · Yelek</span>
            <h1 id="hero-h">Takım Elbise Tadilatı ve Tamiri <span className="accent">Antalya</span></h1>
            <p className="hero-desc">Takım elbise ceket, pantolon ve yelek tadilatı: daraltma, kol ve paça kısaltma, bel ayarı, astar onarımı. Takım elbise satmıyoruz; sizin takımınızın tadilatını ve özel dikim yapıyoruz.</p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Takım elbise tadilatı yapılır; fiyat işe göre fotoğrafla söylenir. Paça kısaltma 200 TL'den başlar. Takım satışı yapmıyoruz, tadilat ve özel dikim yapıyoruz.</p>
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
              <h2 className="sec-h ff" id="price-h">Takım Elbise Tadilatı Fiyatları</h2>
              <p className="sec-sub">Takım elbise tadilatında sabit fiyat yoktur; net fiyat fotoğrafa veya işin detayına göre söylenir. Paça kısaltma 200 TL'den başlar.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🤵</span>
                  <div><div className="price-tr">Takım Elbise Tadilatı</div></div>
                </div>
                <table className="price-table"><tbody>
                  <tr><td>Ceket Daraltma / Beden Ayarı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Ceket Kol Kısaltma</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Pantolon Paça Kısaltma</td><td>200 TL'den</td></tr>
                  <tr><td>Pantolon Bel Daraltma / Genişletme</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Yelek Daraltma</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Astar ve Sökük Onarımı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Hangi işleri yapıyoruz?</span>
              <h2 className="sec-h ff" id="howto-h">Takım Elbise Tadilatı Kapsamı</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">📐 Ceket daraltma ve beden ayarı</div><div className="howto-d">Ceketin sırt, yan ve gövde dikişlerinden ölçünüze göre ayar yapılır.</div></div>
              <div className="howto-item"><div className="howto-t">📏 Kol ve boy kısaltma</div><div className="howto-d">Ceket kolu ve pantolon paçası ölçünüze göre kısaltılır.</div></div>
              <div className="howto-item"><div className="howto-t">👖 Pantolon bel ve paça</div><div className="howto-d">Bel daraltma, genişletme ve paça kısaltma yapılır.</div></div>
              <div className="howto-item"><div className="howto-t">🦺 Yelek tadilatı</div><div className="howto-d">Takım yeleğinin beden ve boy ayarı yapılır.</div></div>
              <div className="howto-item"><div className="howto-t">🪡 Astar ve sökük onarımı</div><div className="howto-d">Yırtık astar, sökük dikiş ve cep onarımı yapılır.</div></div>
            </div>
          </div>
        </section>

        <KargoKisa lang="tr" work="Takım elbise tadilatı" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Takım Elbise Tadilatı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Takım yeleği için <a href="/yelek-tamiri-tadilati-antalya">yelek tamiri ve tadilatı</a>, takım dikimi için <a href="/terzi-hizmetleri/ozel-dikim-antalya">özel dikim</a>, paça için <a href="/konyaalti-paca-kisaltma">paça kısaltma</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Takımınızı mı Yaptıracaksınız?</h2>
          <p className="cta-sub">Takımın fotoğrafını gönderin, fiyatı ve süreyi söyleyelim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Takım Elbise Tadilatı Antalya · {PHONE}</div>
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
