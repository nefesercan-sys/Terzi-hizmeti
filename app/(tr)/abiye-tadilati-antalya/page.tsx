import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/abiye-tadilati-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA("Merhaba, abiye elbisem için tadilat/tamir fiyatı almak istiyorum. Fotoğrafı gönderiyorum.");
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-14';
const FAQ: [string, string][] = [
  ["Abiye tadilatı ne kadar?", "Abiye tadilatı işe göre değişir (daraltma, boy, fermuar, askı, model değişimi); sabit fiyat yazmıyoruz. Elbisenin fotoğrafını WhatsApp'tan gönderirseniz net fiyatı söyleriz."],
  ["Abiye elbise daraltılır mı, beden ayarlanır mı?", "Evet. Abiye beden ayarlama ve daraltma yapılır; kumaş, astar ve kesime göre fotoğraftan değerlendirilir. Büyütme payı varsa elbise bir beden büyütülebilir."],
  ["Abiye elbise kısaltma yapıyor musunuz?", "Evet. Abiye boyu kısaltılır; şifon, saten, tül ve payetli kumaşlarda kumaşa uygun teknikle yapılır."],
  ["Abiye fermuarı tamir edilir mi, değiştirilir mi?", "Evet. Bozulan abiye fermuarı tamir edilir ya da yenisiyle değiştirilir; gizli fermuar da değişir."],
  ["Askılı abiyenin askısını ayarlayabilir misiniz?", "Evet. Askı boyu ayarlanır, askı yenilenir ya da elbiseye göre eklenir veya çıkarılır."],
  ["Abiyenin sırtını bağcıklı yapıyor musunuz?", "Evet. Sırt bağcıklı (korse bağlamalı) hâle getirme yapılır; böylece beden ayarlanabilir ve model değişir. Elbiseye uygunluğunu fotoğraftan söyleriz."],
  ["Abiye elbisenin modelini değiştiriyor musunuz?", "Evet. Yaka, sırt, kol, etek boyu ve askı gibi bölümlerde model değişikliği yapılır; mümkün olup olmadığını fotoğrafı görünce söyleriz."],
  ["Abiye tadilatı ne kadar sürer?", "Süre işin durumuna göre değişir; fotoğrafı görünce söyleriz. Özel gününüz yakınsa tarihi yazın, ona göre planlarız."],
  ["Abiyeyi eve veya otele gelip alıyor musunuz?", "Evet. Antalya'da eve ve otele alım-teslim yapılır; Antalya içi ve yurt dışı kargoyla da çalışılır (kargo ücreti müşteriye aittir)."],
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Abiye Tadilatı ve Tamiri · Antalya · +90 531 898 64 18" },
  description: "Terziye sor: +90 531 898 64 18 · Abiye beden ayarlama, daraltma, kısaltma, fermuar tamiri, askı ayarı, bağcıklı yapma ve model değiştirme. Fiyat fotoğrafa göre.",
  keywords: fitKeywords(["abiye tadilatı", "abiye elbise tamiri", "abiye daraltma", "abiye elbise kısaltma", "abiye beden ayarlama", "abiye fermuar tamiri", "abiye fermuar değişimi", "abiye elbise bağcıklı yapma", "askılı elbise askı ayarlama", "elbise modelini değiştirme", "abiye tadilatı Antalya"]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Abiye Tadilatı ve Tamiri Antalya | Terzi Can",
    description: "Abiye elbise daraltma, kısaltma, beden ayarlama, fermuar tamiri, askı ayarı, bağcıklı yapma ve model değiştirme. Fiyat fotoğrafa göre.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Abiye Tadilatı ve Tamiri Antalya" }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: "Abiye Tadilatı ve Tamiri Antalya", description: "Abiye elbise daraltma, kısaltma, beden ayarlama, fermuar tamiri, askı ayarı, bağcıklı yapma ve model değiştirme.",
      inLanguage: 'tr', isPartOf: { '@id': `${SITE}#website` }, about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` }, dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Terzi Hizmetleri', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: "Abiye Tadilatı ve Tamiri", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: "Abiye Tadilatı ve Tamiri",
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
            <span className="hero-tag">👗 Abiye · Daraltma · Fermuar · Model Değişimi</span>
            <h1 id="hero-h">Abiye Tadilatı ve Tamiri <span className="accent">Antalya</span></h1>
            <p className="hero-desc">Abiye elbise beden ayarlama, daraltma, kısaltma, fermuar tamiri, askı ayarı, sırtı bağcıklı yapma ve model değiştirme. Antalya'da eve ve otele alım-teslim.</p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Abiye elbise tadilatı ve tamiri yapılır; fiyat elbisenin kumaşına ve yapılacak işe göre fotoğrafla söylenir, süre işin durumuna göre belirlenir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Elbisenin Fotoğrafını Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary"><span className="ico-tel" aria-hidden="true" /> {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Fiyatlar 2026</span>
              <h2 className="sec-h ff" id="price-h">Abiye Tadilatı ve Tamiri Fiyatları</h2>
              <p className="sec-sub">Abiye tadilatında sabit fiyat yoktur; net fiyat fotoğrafa veya işin detayına göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👗</span>
                  <div><div className="price-tr">Abiye Tadilatı ve Tamiri</div></div>
                </div>
                <table className="price-table"><tbody>
                  <tr><td>Abiye Daraltma / Beden Ayarlama</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Abiye Boy Kısaltma</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Abiye Fermuar Tamiri / Değişimi</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Askı Ayarı</td><td>Fotoğrafa göre</td></tr>
                  <tr><td>Bağcıklı Yapma / Model Değiştirme</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Hangi işleri yapıyoruz?</span>
              <h2 className="sec-h ff" id="howto-h">Abiye Tadilatı ve Tamiri Kapsamı</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">📐 Beden ayarlama ve daraltma</div><div className="howto-d">Bel, göğüs, kalça ve yan dikişlerden elbise ölçünüze göre ayarlanır.</div></div>
              <div className="howto-item"><div className="howto-t">📏 Boy kısaltma</div><div className="howto-d">Abiye boyu kumaşa uygun teknikle kısaltılır.</div></div>
              <div className="howto-item"><div className="howto-t">🧷 Fermuar tamiri ve değişimi</div><div className="howto-d">Bozulan veya takılan fermuar tamir edilir ya da yenisiyle değiştirilir.</div></div>
              <div className="howto-item"><div className="howto-t">🎀 Askı ayarı</div><div className="howto-d">Askılı elbisede askı boyu ayarlanır, yenilenir ya da modele göre eklenir veya çıkarılır.</div></div>
              <div className="howto-item"><div className="howto-t">🪢 Sırtı bağcıklı yapma</div><div className="howto-d">Elbisenin sırtı bağcıklı hâle getirilir; beden ayarlanabilir olur.</div></div>
              <div className="howto-item"><div className="howto-t">✂️ Model değiştirme</div><div className="howto-d">Yaka, sırt, kol ve etek boyu gibi bölümlerde model değişikliği yapılır.</div></div>
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">Elbisenin ve yapılacak yerin fotoğrafını WhatsApp'tan gönderin, net fiyat alın. Antalya'da eve ve otele alım-teslim isteyebilirsiniz.</div></div>
            </div>
          </div>
        </section>

        <KargoKisa lang="tr" work="Abiye tadilatı ve tamiri" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Abiye Tadilatı ve Tamiri Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Gelinlik için <a href="/antalya-gelinlik-tadilati">gelinlik tadilatı</a>, abiye dikimi için <a href="/terzi-hizmetleri/ozel-dikim-antalya">özel dikim</a>, fermuar için <a href="/terzi-hizmetleri/fermuar-degisimi-tamiri">fermuar değişimi ve tamiri</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Abiyenizi mi Yaptıracaksınız?</h2>
          <p className="cta-sub">Elbisenin fotoğrafını gönderin, fiyatı ve süreyi söyleyelim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Abiye Tadilatı ve Tamiri Antalya · {PHONE}</div>
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
