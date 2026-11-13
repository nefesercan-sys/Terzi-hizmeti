import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/kot-pantolon-daraltma-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, kot pantolon daraltma hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Kot Daraltma ₺200'den · Bacak, Bel, Kalça · Antalya" },
  description:
    'Terziye sor: ' + PHONE + ' · ' + "Kot pantolon bacak ve bel daraltma ₺200'den; ölçü üzerinizde alınır. Normal iş aynı gün, acil 1–2 saat. Eve ve otele servis.",
  keywords: fitKeywords([
    'kot pantolon daraltma', 'kot daraltma fiyat', 'kot pantolon bacak daraltma', 'kot bel daraltma', 'kot pantolon daraltma Antalya', 'jean daraltma terzi', 'kot pantolon dar paça yapma',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kot Pantolon Daraltma Antalya — Aynı Gün",
    description: 'Terziye sor: ' + PHONE + ' · ' + "Kot pantolon bacak ve bel daraltma ₺200'den. Normal iş aynı gün, acil 1–2 saat.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Kot Pantolon Daraltma Antalya — Aynı Gün" }],
  },
};

// Görünen SSS ve FAQPage şeması tek diziden üretilir (tutarlılık).
const FAQ: [string, string][] = [
  ['Kot pantolon daraltma ne kadar?', 'Kot pantolon daraltma ₺200\'den başlar. Net fiyat daraltılacak yere ve işin kapsamına göre, fotoğrafla WhatsApp\'tan söylenir.'],
  ['Bacak mı bel mi daraltılır?', 'İkisi de yapılır. Bacak daraltma pantolonu dar paçalı hale getirir, bel daraltma ise bele oturmasını sağlar. İhtiyacınızı fotoğrafla birlikte yazmanız yeterli.'],
  ['Kot pantolon daraltma için ne göndermeliyim?', 'Pantolonun önden ve arkadan fotoğrafını, hangi yeri daraltmak istediğinizi ve varsa istediğiniz ölçüyü WhatsApp\'tan gönderin.'],
  ['Kot pantolon daraltma ne kadar sürer?', 'Çoğu daraltma aynı gün biter; acil işlerde 1–2 saat içinde teslim ederiz.'],
  ['Daraltırken paçanın orijinal görünümü korunur mu?', 'Evet, paçanın orijinal görünümünü koruyacak şekilde çalışıyoruz. Fotoğraf gönderirseniz yapılabilecek işlemi söyleriz.'],
  ['Kot pantolonu eve veya otele gelip alıyor musunuz?', 'Evet, pantolonu eve veya otele gelip alırız; Konyaaltı, Muratpaşa ve çevresinde geçerlidir.'],
  ["Kot pantolonun kalçası bolsa daraltılır mı?", "Evet. Kalça ve oturma yeri bolluğu da daraltılır; arkadan çekilmiş bir fotoğraf göndermeniz yeterlidir. Net fiyat işin kapsamına göre söylenir."],
  ["Geniş paçalı kotu dar paçalı yapabilir misiniz?", "Evet, bacak daraltmayla geniş ya da düz kesim bir kot daha dar bir kalıba getirilebilir. Referans olarak sevdiğiniz bir pantolonun ölçüsünü yazarsanız daha doğru sonuç alırız."],
  ["Streç kotu fazla daraltırsam sıkar mı?", "Esnek kumaşta çok fazla daraltma sıkabilir. Bu yüzden ölçüyü üzerinizde kontrol etmeyi ve gerekirse payı sınırlı tutmayı öneririz."],
  ["Daraltma ile paça kısaltmayı aynı anda yaptırabilir miyim?", "Evet, iki işlem birlikte planlanır. Fiyat her işlem için ₺200'den başlar; toplamı fotoğrafa göre söyleriz."],
];

// Sayfaya özgü rehber içeriği (kot kümesinde sayfaları farklı niyetlere ayırır).
const GUIDE: [string, string][] = [
  ["Bel mi bol, kalça mı, bacak mı?", "Kot pantolon bol geldiğinde sorunun nerede olduğunu doğru bulmak işin yarısıdır. Bel bol ise pantolon kemersiz düşer; kalça ve oturma yeri bol ise arkada kumaş birikir; bacak bol ise pantolon dar kesim gibi durmaz. Üç yer ayrı ayrı daraltılabilir. Önden ve arkadan çekilmiş fotoğraf, hangisine ihtiyacınız olduğunu anlamamızı kolaylaştırır."],
  ["Dar paça ve slim kesim isteyenler için", "Geniş veya düz kesim bir kotu daha dar bir kalıba çevirmek mümkündür; bunun için bacak dikişleri yeniden ayarlanır. Dar kesim istiyorsanız, mevcut kotun baldır ve diz genişliğini biliyorsanız yazın ya da en sevdiğiniz bir pantolonu referans olarak gösterin. Böylece ölçü tahmine kalmadan belirlenir."],
  ["Streç oranı daraltma payını değiştirir", "Esnek içerikli kotta kumaş vücuda uyum sağladığı için daraltma payı sınırlı tutulur; sert denimde ise pay daha rahat belirlenir. Etiketteki kumaş içeriğini mesaja eklemeniz işimizi kolaylaştırır. Çok daraltma yapılırsa oturma ve diz hareketi sıkışabileceği için ölçüyü üzerinizde kontrol etmeyi öneririz."],
  ["Daraltırken nelere dikkat edilir?", "Kotun cep yerleşimi, arkadaki dikiş çizgileri ve paça şekli daraltma sırasında bozulmamalıdır. Bu yüzden her kotta önce mevcut dikiş yapısına bakılır, sonra hangi dikişten pay alınacağına karar verilir. Paça kısmı da kısalacaksa iki işlem birlikte planlanır; kısaltma ayrıntıları için kot paça kısaltma sayfamıza bakabilirsiniz."],
  ["Fiyat ve teslim", "Kot pantolon bacak veya bel daraltma ₺200'den başlar. Net fiyat daraltılacak yer sayısına ve kumaşa göre fotoğrafla söylenir. Normal işler aynı gün, acil işler 1–2 saatte teslim edilir; eve ve otele alım-teslim yapılır. Fiyatlara KDV dahil değildir."],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Kot Pantolon Daraltma Antalya — Aynı Gün",
      description: "Kot pantolon bacak daraltma ve bel daraltma ₺200'den.",
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
        { '@type': 'ListItem', position: 3, name: "Kot Pantolon Daraltma", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Kot Pantolon Daraltma",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 2,
        offers: [
          { '@type': 'Offer', name: 'Kot Bacak Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Kot Bel Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Kot Pantolon Nasıl Daraltılır?",
      description: "Kot Pantolon Nasıl Daraltılır?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan kot pantolonun önden ve arkadan fotoğrafını, daraltmak istediğiniz yeri belirterek gönderin.' },
        { '@type': 'HowToStep', name: 'Teslim Edin', text: 'Pantolonu getirin veya adresinizden alım talep edin.' },
        { '@type': 'HowToStep', name: 'Ölçü ve Dikiş', text: 'Daraltılacak yer üzerinizde iğnelenir, dikişler yeniden kurulur. Aynı gün; acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Oturuş kontrol edilir; isterseniz deneyip teslim alırsınız.' },
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
            <span className="hero-tag">👖 👖 Kot Pantolon Daraltma · Bacak ve Bel</span>
            <h1 id="hero-h">
              Kot Pantolon Daraltma <span className="accent">Antalya</span><br />₺200'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Kot pantolonda bacak daraltma ve bel daraltma. Kalın kot kumaşa uygun dikişle çalışıyoruz; eve ve otele servis veriyoruz.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Kot pantolon bacak ve bel daraltma ₺200'den başlar; ölçü üzerinizde alınır, normal işler aynı gün, acil işler 1–2 saatte teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary"><span className="ico-tel" aria-hidden="true" /> {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Kot Daraltma Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Kot Pantolon Daraltma Fiyatları</h2>
              <p className="sec-sub">Net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">📐</span>
                  <div><div className="price-tr">Kot Pantolon Daraltma</div></div>
                </div>
                <p className="price-desc">Dikiş payı kumaşın kalınlığına ve streç oranına göre belirlenir.</p>
                <table className="price-table"><tbody>
                  <tr><td>Bacak Daraltma</td><td>₺200+</td></tr>
                  <tr><td>Bel Daraltma</td><td>₺200+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır; daraltılacak yer sayısına ve streç oranına göre değişebilir. KDV dahil değildir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Kot Pantolon Nasıl Daraltılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan kot pantolonun önden ve arkadan fotoğrafını, daraltmak istediğiniz yeri belirterek gönderin.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Edin</div><div className="howto-d">Pantolonu getirin veya adresinizden alım talep edin.</div></div>
              <div className="howto-item"><div className="howto-t">Ölçü ve Dikiş</div><div className="howto-d">Daraltılacak yer üzerinizde iğnelenir, dikişler yeniden kurulur. Aynı gün; acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Oturuş kontrol edilir; isterseniz deneyip teslim alırsınız.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="guide-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Rehber</span>
              <h2 className="sec-h ff" id="guide-h">Kot Pantolon Daraltmada Bel, Kalça ve Bacak Farkı</h2>
            </div>
            <div className="howto-list">
              {GUIDE.map(([t, x]) => (
                <div key={t} className="howto-item"><div className="howto-t">{t}</div><div className="howto-d">{x}</div></div>
              ))}
            </div>
            <p style={{ marginTop: '1.2rem' }}>
              Daraltmayla birlikte boyu da kısaltmak istiyorsanız <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a>, paça dikişinin kalması için <a href="/orijinal-kot-paca-yapimi-antalya">orijinal kot paça yapımı</a>, kot etek için <a href="/kot-etek-kisaltma-daraltma-antalya">kot etek tadilatı</a> sayfalarına geçebilirsiniz.
            </p>
          </div>
        </section>

        <KargoKisa lang="tr" work="Kot pantolon daraltma" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Kot Pantolon Daraltma Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Paça için <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a> ve <a href="/orijinal-kot-paca-yapimi-antalya">orijinal kot paça</a> sayfalarına, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Kot Pantolonunuz mu Bol?</h2>
          <p className="cta-sub">Önden ve arkadan fotoğraf gönderin, daraltma fiyatını öğrenin.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Kot Pantolon Daraltma Antalya · {PHONE}</div>
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
