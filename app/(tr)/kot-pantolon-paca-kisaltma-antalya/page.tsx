import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/kot-pantolon-paca-kisaltma-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, kot pantolon paça kısaltma hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Kot Pantolon Paça Kısaltma ₺200'den · Aynı Gün · Antalya" },
  description:
    'Terziye sor: ' + PHONE + ' · ' + "Kot pantolon paça kısaltma, orijinal paça yapımı ve daraltma ₺200'den. Normal iş aynı gün, acil 1–2 saat. Eve ve otele servis.",
  keywords: fitKeywords([
    'kot pantolon paça kısaltma', 'kot paçası kısaltma', 'kot pantolon paça yapımı', 'kot pantolon orijinal paça', 'kot pantolon daraltma', 'kot pantolon kısaltma', 'kot paça kısaltma fiyat', 'jean paça kısaltma', 'Antalya kot paça kısaltma',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kot Pantolon Paça Kısaltma Antalya — Aynı Gün",
    description: 'Terziye sor: ' + PHONE + ' · ' + "Kot paça kısaltma, orijinal paça yapımı, daraltma. Normal iş aynı gün, acil 1–2 saat.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Kot Pantolon Paça Kısaltma Antalya — Aynı Gün" }],
  },
};

// Görünen SSS ve FAQPage şeması tek diziden üretilir (tutarlılık).
const FAQ: [string, string][] = [
  ['Kot pantolon paça kısaltma fiyatı ne kadar?', 'Kot pantolon paça kısaltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.'],
  ['Kot paçası orijinal paça gibi yapılır mı?', 'Evet, kot paçasının orijinal paça görünümünü koruyacak şekilde kısaltma yapıyoruz. Fotoğraf gönderirseniz yapılabilecek işlemi ve fiyatı söyleriz.'],
  ['Kot pantolon daraltma yapıyor musunuz?', 'Evet. Kot pantolonda bacak ve bel daraltma ₺200\'den başlar; net fiyat fotoğrafa göre söylenir.'],
  ['Kot pantolon paça kısaltma ne kadar sürer?', 'Genelde aynı gün; acil işlerde 1–2 saat içinde teslim ederiz.'],
  ['Kot paçası uzatılır mı veya genişletilir mi?', 'Fotoğraf gönderirseniz kumaş payına bakıp yapılıp yapılamayacağını söyleriz.'],
  ['Kot ürününü eve veya otele gelip alıyor musunuz?', 'Evet, kotunuzu evinizden veya otelinizden alırız; Konyaaltı, Muratpaşa ve çevresinde geçerlidir.'],
  ["Kot paçasını kısaltırken ayakkabıyla mı ölçüyorsunuz?", "Evet. Kot, giyeceğiniz ayakkabıyla birlikte ve normal bel hizasında dururken işaretlenir. Uzaktan çalışıyorsanız hangi ayakkabıyla giyeceğinizi WhatsApp'tan yazmanız yeterli."],
  ["Streç kot ile sert kot aynı fiyata mı kısalır?", "Kot paça kısaltma her ikisinde de ₺200'den başlar. Kumaşın kalınlığı ve işin kapsamı kesin tutarı etkileyebilir; fotoğrafla net fiyat söylenir."],
  ["Kısaltma sonrası kotun duruşu bozulur mu?", "Makul bir kısaltmada bozulmaz. Çok fazla kısaltma gerekiyorsa diz ve baldır hizasındaki kalıbın etkilenebileceğini, fotoğrafa bakarak önceden söyleriz."],
  ["Ödemeyi hangi para birimleriyle yapabilirim?", "Tüm para birimleriyle ödeme kabul ediyoruz; nakit veya kartla ödeyebilirsiniz. Fiyatlara KDV dahil değildir."],
];

// Sayfaya özgü rehber içeriği (kot kümesinde sayfaları farklı niyetlere ayırır).
const GUIDE: [string, string][] = [
  ["Boyu hangi ayakkabıyla ölçeceğiz?", "Kot paçası, günlük giyeceğiniz ayakkabıyla birlikte ve pantolon normal bel hizasında dururken işaretlenir. Spor ayakkabıyla giyeceğiniz bir kotun boyu ile bot veya topuklu ayakkabıyla giyeceğiniz kotun boyu birbirinden farklıdır. Uzaktan gönderdiğiniz fotoğrafta da hangi ayakkabıyla giyeceğinizi yazarsanız boyu daha doğru önerebiliriz. Eve veya otele gelen servisimizle ölçüyü üzerinizde almamız da mümkündür."],
  ["Sert denim ile streç kot aynı şekilde mi kısalır?", "Hayır. Sert, kalın denimde paça kıvrımı dik durur ve dikiş yerinde kumaş kalınlığı artar; bu yüzden kalın kota uygun makine ve iplikle çalışırız. Streç kotta ise kumaş esnediği için dikişin de esnemeye uyması gerekir. Fotoğrafta kumaşın cinsini görebiliyorsak ya da etiketteki içerik bilgisini yazarsanız işlemi ona göre planlarız."],
  ["Ne kadar kısaltılabilir?", "Paçada kıvrılacak pay yeterliyse birkaç santimden çok daha fazlası kısaltılabilir. Fakat çok fazla kısaltma, kotun diz ve baldır hizasındaki kalıbını bozabilir; bu durumda pantolonun formu bozulmadan hangi boya kadar inileceğini fotoğrafa bakarak söyleriz. Kısaltma sonrası paçanın geniş kalması hâlinde daraltma da yapılır."],
  ["Hangi durumda başka bir işlem gerekir?", "Paça dikiş izini aynen korumak istiyorsanız orijinal kot paça yapımı sayfamıza bakın. Kotun bacak veya bel kısmı da bolsa kot pantolon daraltma sayfamızdaki seçenekler size daha uygundur. Kotunuzun paçası yırtıldıysa ya da yıprandıysa kısaltmayla birlikte onarım yapılabilir; bunun için paçanın yakın fotoğrafı yeterlidir."],
  ["Fiyat nasıl belirlenir?", "Kot paça kısaltma ₺200'den başlar. Kumaşın kalınlığı ve işin kapsamı fiyatı etkiler; kesin tutarı fotoğrafı gördükten sonra WhatsApp'tan söyleriz. Fiyatlara KDV dahil değildir; ödemeyi tüm para birimleriyle, nakit veya kartla yapabilirsiniz."],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Kot Pantolon Paça Kısaltma Antalya — Aynı Gün",
      description: "Kot pantolon paça kısaltma, orijinal paça yapımı ve daraltma ₺200'den.",
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
        { '@type': 'ListItem', position: 3, name: "Kot Pantolon Paça Kısaltma", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Kot Pantolon Paça Kısaltma",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 2,
        offers: [
          { '@type': 'Offer', name: 'Kot Paça Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Kot Pantolon Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Kot Paça Nasıl Kısaltılır?",
      description: "Kot Paça Nasıl Kısaltılır?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan kot pantolonun fotoğrafını gönderin, ön fiyat alın.' },
        { '@type': 'HowToStep', name: 'Teslim Edin', text: 'Kotu atölyeye bırakın ya da adresinizden alalım.' },
        { '@type': 'HowToStep', name: 'Ölçü ve Dikiş', text: 'Boy ayakkabınızla işaretlenir, paça kalın kota uygun iplikle kapatılır. Aynı gün; acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Paça dikişi kontrol edilerek teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
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
            <span className="hero-tag">👖 👖 Kot Paça Kısaltma · Orijinal Paça · Daraltma</span>
            <h1 id="hero-h">
              Kot Pantolon Paça Kısaltma <span className="accent">Antalya</span><br />₺200'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Kot pantolon paça kısaltma, orijinal paça yapımı ve daraltma. Kalın denime uygun iplik ve iğneyle çalışıyoruz; adresinize servis veriyoruz.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Kot pantolon paça kısaltma ve daraltma ₺200'den başlar; orijinal paça görünümü korunur, normal işler aynı gün teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Kot Pantolon Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Kot Pantolon Paça Kısaltma Fiyatları</h2>
              <p className="sec-sub">Net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👖</span>
                  <div><div className="price-tr">Kot Pantolon</div></div>
                </div>
                <p className="price-desc">Kalın denime uygun iplik ve iğneyle, paçanın kalınlığına göre ayarlanmış dikiş.</p>
                <table className="price-table"><tbody>
                  <tr><td>Kot Paça Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Kot Pantolon Daraltma</td><td>₺200+</td></tr>
                  <tr><td>Orijinal Paça Yapımı</td><td>₺200+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır; kumaş kalınlığına ve kaç santim kısaltılacağına göre değişebilir. KDV dahil değildir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Kot Paça Nasıl Kısaltılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan kot pantolonun fotoğrafını gönderin, ön fiyat alın.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Edin</div><div className="howto-d">Kotu atölyeye bırakın ya da adresinizden alalım.</div></div>
              <div className="howto-item"><div className="howto-t">Ölçü ve Dikiş</div><div className="howto-d">Boy ayakkabınızla işaretlenir, paça kalın kota uygun iplikle kapatılır. Aynı gün; acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Paça dikişi kontrol edilerek teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="guide-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Rehber</span>
              <h2 className="sec-h ff" id="guide-h">Kot Paça Kısaltmadan Önce Bilmeniz Gerekenler</h2>
            </div>
            <div className="howto-list">
              {GUIDE.map(([t, x]) => (
                <div key={t} className="howto-item"><div className="howto-t">{t}</div><div className="howto-d">{x}</div></div>
              ))}
            </div>
            <p style={{ marginTop: '1.2rem' }}>
              Paça izi korunsun istiyorsanız <a href="/orijinal-kot-paca-yapimi-antalya">orijinal kot paça yapımı</a>, bacak ve bel bolsa <a href="/kot-pantolon-daraltma-antalya">kot pantolon daraltma</a>, kot ceket ve mont için <a href="/kot-ceket-mont-tadilati-antalya">kot ceket tadilatı</a>, etek için <a href="/kot-etek-kisaltma-daraltma-antalya">kot etek kısaltma</a> sayfalarımıza bakabilirsiniz. Kumaş pantolon ve etek paçası için <a href="/konyaalti-paca-kisaltma">Konyaaltı paça kısaltma</a> sayfamız var.
            </p>
          </div>
        </section>

        <KargoKisa lang="tr" work="Kot pantolon paça kısaltma" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Kot Paça Kısaltma Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Ayrıntılı sayfalar: <a href="/kot-pantolon-daraltma-antalya">kot pantolon daraltma</a> ve <a href="/orijinal-kot-paca-yapimi-antalya">orijinal kot paça</a>. Kot mont ve ceket için <a href="/kot-ceket-mont-tadilati-antalya">kot ceket ve mont tadilatı</a>, kot etek için <a href="/kot-etek-kisaltma-daraltma-antalya">kot etek sayfasına</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Kot Pantolonunuz Uzun mu?</h2>
          <p className="cta-sub">Paçanın fotoğrafını gönderin, net fiyatı hemen öğrenin.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Kot Pantolon Paça Kısaltma Antalya · {PHONE}</div>
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
