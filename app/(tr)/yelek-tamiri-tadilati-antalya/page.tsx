import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/yelek-tamiri-tadilati-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA("Merhaba, yelek tamiri/tadilatı için fiyat almak istiyorum. Fotoğrafı gönderiyorum.");
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';
const FAQ: [string, string][] = [["Yelek tamiri ve tadilatı ne kadar?", "Yelek fiyatı türüne (takım yelek, kot, deri, şişme) ve işe göre değişir; fotoğrafı WhatsApp'tan gönderirseniz net fiyatı söyleriz."], ["Takım elbise yeleği daraltılır mı?", "Evet. Yelek beden ayarı sırt kemeri ve yan dikişlerden yapılır; kumaş ve astara göre fotoğraftan değerlendirilir."], ["Yelek boyu ve omuzu ayarlanır mı?", "Evet. Boy ve omuz/kol çukuru ölçünüze göre düzenlenir; ölçü yelek üzerinizdeyken işaretlenir."], ["Yelek fermuarı değişiyor mu?", "Evet. Kot, deri ve şişme yeleklerin fermuarı değiştirilir; fiyat fermuar boyuna ve yeleğe göre söylenir."], ["Deri veya kot yelek tadilatı yapılıyor mu?", "Evet. Deri ve kot yelek tadilatı yapılıyor; ayrıntı için deri ceket ve kot sayfalarımıza bakabilirsiniz."], ["Yelek tadilatı ne kadar sürer?", "Normal işler aynı gün, acil işler 1–2 saatte teslim edilir. Kapsamlı işlerde süreyi fotoğrafı görünce söyleriz."], ["Yeleği eve veya otele gelip alıyor musunuz?", "Evet. Konyaaltı, Muratpaşa ve çevresinde eve ve otele alım-teslim yapılır."]];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Yelek Tamiri ve Tadilatı · Antalya · +90 531 898 64 18" },
  description: "Terziye sor: +90 531 898 64 18 · Takım elbise yeleği, kot ve deri yelek daraltma, boy ayarı, fermuar ve düğme onarımı. Fiyat fotoğrafa göre. Eve ve otele servis.",
  keywords: fitKeywords(["yelek tamiri", "yelek tadilatı", "yelek daraltma", "yelek kısaltma", "yelek fermuarı değişimi", "takım elbise yeleği tadilatı", "deri yelek tamiri", "kot yelek tadilatı", "yelek tamiri Antalya"]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Yelek Tamiri ve Tadilatı Antalya | Terzi Can",
    description: "Takım elbise, kot, deri ve şişme yelek: beden daraltma, boy ve omuz ayarı, fermuar ve düğme onarımı. Eve ve otele servis.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Yelek Tamiri ve Tadilatı Antalya" }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: "Yelek Tamiri ve Tadilatı Antalya", description: "Takım elbise, kot, deri ve şişme yelek: beden daraltma, boy ve omuz ayarı, fermuar ve düğme onarımı. Eve ve otele servis.",
      inLanguage: 'tr', isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` }, dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Terzi Hizmetleri', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: "Yelek Tamiri ve Tadilatı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: "Yelek Tamiri ve Tadilatı",
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
            <span className="hero-tag">🦺 Yelek · Daraltma · Fermuar · Düğme</span>
            <h1 id="hero-h">Yelek Tamiri ve Tadilatı <span className="accent">Antalya</span></h1>
            <p className="hero-desc">Takım elbise, kot, deri ve şişme yelek: beden daraltma, boy ve omuz ayarı, fermuar ve düğme onarımı. Eve ve otele servis. Her gün 08:00–23:00.</p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Yelek daraltma, boy ayarı, fermuar ve düğme onarımı yapılır; fiyat yeleğin türüne (takım yelek, kot, deri, şişme) ve işe göre fotoğrafla söylenir. Normal işler aynı gün teslim edilir.</p>
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
              <h2 className="sec-h ff" id="price-h">Yelek Tamiri ve Tadilatı Fiyatları</h2>
              <p className="sec-sub">Net fiyat fotoğrafa veya işin detayına göre söylenir; KDV dahil değildir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🦺</span>
                  <div><div className="price-tr">Yelek Tamiri ve Tadilatı</div></div>
                </div>
                <table className="price-table"><tbody>
                  <tr><td>Yelek Daraltma</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Yelek Boy / Omuz Ayarı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Yelek Fermuarı Değişimi</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Düğme, Astar, Sökük Onarımı</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Hangi işleri yapıyoruz?</span>
              <h2 className="sec-h ff" id="howto-h">Yelek Tamiri ve Tadilatı Kapsamı</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">📐 Daraltma ve beden ayarı</div><div className="howto-d">Takım elbise yeleğinde sırt kemeri ve yan dikişlerden beden ayarlanır.</div></div>
              <div className="howto-item"><div className="howto-t">📏 Boy ve omuz</div><div className="howto-d">Yelek boyu ve omuz/kol çukuru ölçünüze göre düzenlenir.</div></div>
              <div className="howto-item"><div className="howto-t">🧷 Fermuar ve düğme</div><div className="howto-d">Kot, deri ve şişme yelek fermuarı değişimi; düğme ve düğme iliği onarımı.</div></div>
              <div className="howto-item"><div className="howto-t">🪡 Astar ve söküklerin onarımı</div><div className="howto-d">Yırtık astar, sökük dikiş ve cep onarımı.</div></div>
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">Yeleğin ve yapılacak yerin fotoğrafını WhatsApp'tan gönderin, net fiyat alın. Eve ve otele alım-teslim isteyebilirsiniz.</div></div>
            </div>
          </div>
        </section>

        <KargoKisa lang="tr" work="Yelek tamiri ve tadilatı" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Yelek Tamiri ve Tadilatı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Deri yelek için <a href="/deri-ceket-tadilati-antalya">deri ceket ve yelek tadilatı</a>, kot yelek için <a href="/kot-ceket-mont-tadilati-antalya">kot ceket ve mont</a>, fermuar için <a href="/mont-fermuar-degisimi-antalya">mont fermuarı değişimi</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Yeleğinizi mi Yaptıracaksınız?</h2>
          <p className="cta-sub">Fotoğrafını gönderin, kısa sürede fiyat alın; normal işte aynı gün teslim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Yelek Tamiri ve Tadilatı Antalya · {PHONE}</div>
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
