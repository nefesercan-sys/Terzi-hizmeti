import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/sokuk-yirtik-onarimi-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA("Merhaba, sökük/yırtık onarımı için fiyat almak istiyorum. Fotoğrafı gönderiyorum.");
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-14';
const FAQ: [string, string][] = [
  ["Sökük dikiş ne kadar?", "Fiyat işe göre değişir; sabit fiyat yazmıyoruz. Fotoğrafı WhatsApp'tan gönderirseniz net fiyatı söyleriz."],
  ["Yırtık pantolon tamir edilir mi?", "Evet. Yırtık ve delikler kumaşa ve yırtığın yerine göre fotoğraftan değerlendirilerek onarılır."],
  ["Cep tamiri yapılıyor mu?", "Evet. Yırtılan veya sökülen cepler onarılır."],
  ["Mont ve kazak tamiri yapıyor musunuz?", "Evet. Mont, kazak, kot ve elbise onarımı yapılır; kumaşa göre fotoğraftan değerlendiririz."],
  ["Sökük onarımı ne kadar sürer?", "Normal işler aynı gün, acil işler 1–2 saatte teslim edilir; kapsamlı işlerde süreyi fotoğrafı görünce söyleriz."],
  ["Eve veya otele gelip alıyor musunuz?", "Evet. Antalya'da eve ve otele alım-teslim yapılır; Antalya içi ve yurt dışı kargoyla da çalışılır (kargo ücreti müşteriye aittir)."],
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Sökük ve Yırtık Onarımı · Antalya · +90 531 898 64 18" },
  description: "Terziye sor: +90 531 898 64 18 · Sökük dikiş, yırtık, delik ve cep onarımı; pantolon, mont, kazak ve elbise tamiri. Fiyat fotoğrafa göre.",
  keywords: fitKeywords(["sökük dikme", "sökük onarımı", "yırtık onarımı", "yırtık pantolon tamiri", "delik kapatma", "cep tamiri", "kıyafet tamiri", "kıyafet tamiri Antalya"]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Sökük ve Yırtık Onarımı Antalya | Terzi Can",
    description: "Sökük dikiş, yırtık, delik ve cep onarımı: pantolon, mont, kot ve elbise tamiri. Antalya Konyaaltı.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Sökük ve Yırtık Onarımı Antalya" }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: "Sökük ve Yırtık Onarımı Antalya", description: "Sökük dikiş, yırtık, delik ve cep onarımı: pantolon, mont, kot ve elbise tamiri. Antalya Konyaaltı.",
      inLanguage: 'tr', isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` }, dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Terzi Hizmetleri', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: "Sökük ve Yırtık Onarımı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: "Sökük ve Yırtık Onarımı",
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
            <span className="hero-tag">🪡 Sökük · Yırtık · Delik · Cep</span>
            <h1 id="hero-h">Sökük ve Yırtık Onarımı <span className="accent">Antalya</span></h1>
            <p className="hero-desc">Sökük dikiş, yırtık, delik ve cep onarımı: pantolon, kot, mont, kazak ve elbise. Antalya'da eve ve otele alım-teslim.</p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Sökük, yırtık ve delik onarımı yapılır; fiyat işe göre fotoğrafla söylenir.</p>
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
              <h2 className="sec-h ff" id="price-h">Sökük ve Yırtık Onarımı Fiyatları</h2>
              <p className="sec-sub">Sökük ve yırtık onarımında net fiyat fotoğrafa veya işin detayına göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🪡</span>
                  <div><div className="price-tr">Sökük ve Yırtık Onarımı</div></div>
                </div>
                <table className="price-table"><tbody>
                  <tr><td>Sökük Dikiş Onarımı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Yırtık / Delik Onarımı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Cep Onarımı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Hangi işleri yapıyoruz?</span>
              <h2 className="sec-h ff" id="howto-h">Sökük ve Yırtık Onarımı Kapsamı</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">🪡 Sökük dikiş</div><div className="howto-d">Sökülen dikişler kumaşa uygun iplik ve teknikle yeniden dikilir.</div></div>
              <div className="howto-item"><div className="howto-t">🕳️ Yırtık ve delik</div><div className="howto-d">Yırtık ve delikler fotoğraftan değerlendirilerek onarılır.</div></div>
              <div className="howto-item"><div className="howto-t">👖 Cep onarımı</div><div className="howto-d">Yırtılan veya sökülen cepler onarılır.</div></div>
              <div className="howto-item"><div className="howto-t">Fotoğraf gönderin</div><div className="howto-d">Kıyafetin ve yırtığın fotoğrafını WhatsApp'tan gönderin, net fiyat alın.</div></div>
            </div>
          </div>
        </section>

        <KargoKisa lang="tr" work="Sökük ve yırtık onarımı" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Sökük ve Yırtık Onarımı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Fermuar için <a href="/terzi-hizmetleri/fermuar-degisimi-tamiri">fermuar değişimi ve tamiri</a>, düğme için <a href="/dugme-dikme-tamiri-antalya">düğme dikme</a>, astar için <a href="/astar-degisimi-tamiri-antalya">astar değişimi</a>, mont için <a href="/mont-tamiri-tadilati-antalya">mont tamiri</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Kıyafetiniz mi Sökülmüş?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, fiyatı söyleyelim; normal işte aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Sökük ve Yırtık Onarımı Antalya · {PHONE}</div>
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
