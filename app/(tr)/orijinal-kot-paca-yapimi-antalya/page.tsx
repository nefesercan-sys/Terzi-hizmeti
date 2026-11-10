import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/orijinal-kot-paca-yapimi-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, orijinal kot paça yapımı hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Orijinal Kot Paça Yapımı ₺200'den · Dikiş İzi Korunur" },
  description:
    '☎ ' + PHONE + ' · ' + "Kot paçayı kısaltırken orijinal paça görünümünü koruyoruz, ₺200'den. Boy ayakkabıyla işaretlenir. Normal iş aynı gün, acil 1–2 saat.",
  keywords: fitKeywords([
    'orijinal kot paça yapımı', 'orijinal paça kot kısaltma', 'kot paça orijinal dikiş', 'kot paçası orijinal kalsın', 'orijinal paça kısaltma fiyat', 'kot paça kısaltma Antalya',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Orijinal Kot Paça Yapımı Antalya — Aynı Gün",
    description: '☎ ' + PHONE + ' · ' + "Kot paça kısaltırken orijinal paça görünümü korunur. ₺200'den.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Orijinal Kot Paça Yapımı Antalya — Aynı Gün" }],
  },
};

// Görünen SSS ve FAQPage şeması tek diziden üretilir (tutarlılık).
const FAQ: [string, string][] = [
  ['Orijinal kot paça yapımı ne kadar?', 'Orijinal paça görünümünü koruyarak kot paça kısaltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.'],
  ['Orijinal paça yapımı nedir?', 'Kot pantolon kısaltılırken paçanın orijinal paça görünümünü koruyacak şekilde dikilmesidir.'],
  ['Boy nasıl belirlenir?', 'Boy, pantolonu ve giyeceğiniz ayakkabıyı giyerken üzerinizde işaretlenir. Uzaktan ise paçanın yakın fotoğrafını ve istediğiniz boyu WhatsApp\'tan gönderin.'],
  ['Orijinal paça yapımı ne kadar sürer?', 'Orijinal paça işleri de çoğunlukla aynı gün biter; acilde 1–2 saat.'],
  ['Kot pantolonu eve veya otele gelip alıyor musunuz?', 'Evet, kotu adresinizden alıp teslim ederiz; Konyaaltı, Muratpaşa ve çevresinde geçerlidir.'],
  ["Orijinal paça yapımı sıradan kısaltmadan nasıl ayrılır?", "Sıradan kısaltmada paça kesilip yeniden dikilir; orijinal paça yapımında ise kıvrım ve dikiş görünümü fabrika paçasına yakın kalacak şekilde çalışılır. Sonuç, kotun kısaltıldığının daha az belli olmasıdır."],
  ["Hangi kotlarda orijinal paça önerirsiniz?", "Paça detayı belirgin olan, ham ya da koyu denimli ve markalı kotlarda orijinal paça görünümünü korumayı öneririz. Sade paçalı kotlarda standart kısaltma yeterli olabilir."],
  ["Çok kısaltma gerekirse orijinal görünüm korunur mu?", "Çok fazla kısaltma gerekirse orijinal izin bir kısmı kesilebilir. Bunu işlemden önce söyler, alternatifi birlikte seçeriz."],
  ["Orijinal paça için fotoğrafta neye dikkat edilmeli?", "Paçanın yakın fotoğrafı gün ışığında, dikiş izi görünecek şekilde çekilmeli. Paçanın iç yüzünü ve kotu giydiğiniz bir boy fotoğrafını da eklemeniz işlemi önceden değerlendirmemizi kolaylaştırır."],
];

// Sayfaya özgü rehber içeriği (kot kümesinde sayfaları farklı niyetlere ayırır).
const GUIDE: [string, string][] = [
  ["Orijinal paça görünümü neyi ifade eder?", "Fabrikadan çıkan bir kotun paçasında kendine özgü bir kıvrım, dikiş sırası ve çoğu zaman solmuş bir kenar izi bulunur. Pantolon sade bir şekilde kesilip tekrar dikildiğinde bu görünüm kaybolur ve kot bir bakışta kısaltılmış gibi durur. Orijinal paça yapımında amaç, kısaltmadan sonra da paçanın ilk hâline yakın görünmesini sağlamaktır."],
  ["Hangi kotlarda daha çok önemli?", "Paça detayı belirgin olan kotlarda, özellikle ham veya koyu denimde, solmuş kenar ve dikiş izi pantolonun karakterinin parçasıdır. Markalı ya da çok sevdiğiniz kotlarda bu detayı korumak ister, kısaltmanın anlaşılmamasını beklersiniz. Paça çok sade bir kotta ise standart kısaltma çoğu zaman yeterlidir."],
  ["Fotoğrafı nasıl çekmelisiniz?", "Paçanın yakın bir fotoğrafını gün ışığında, dikiş izi görünecek şekilde çekin. Mümkünse paçanın iç yüzünü ve kotu giydiğiniz hâlde boy fotoğrafını da ekleyin. Bu görüntülerden paçanın nasıl yapıldığını ve orijinal görünümün korunup korunamayacağını önceden değerlendiririz."],
  ["Her kotta aynen korunabilir mi?", "Kumaşın kalınlığına, paçadaki payın genişliğine ve ne kadar kısaltılacağına göre değişir. Çok fazla kısaltma gerekiyorsa orijinal izin bir kısmı kesilebilir; bunu işlemden önce size açıkça söyleriz ve alternatifi birlikte seçeriz. Net sonucu fotoğrafa bakmadan vaat etmeyiz."],
  ["Fiyat ve teslim", "Orijinal paça görünümünü koruyarak kot paça kısaltma ₺200'den başlar. Net fiyat fotoğrafa göre söylenir ve fiyatlara KDV dahil değildir. Normal işler aynı gün, acil işler 1–2 saatte teslim edilir; eve ve otele alım-teslim yapılır."],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Orijinal Kot Paça Yapımı Antalya — Aynı Gün",
      description: "Kot pantolon paçasını kısaltırken orijinal paça görünümünü koruyoruz, ₺200'den.",
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
        { '@type': 'ListItem', position: 3, name: "Orijinal Kot Paça Yapımı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Orijinal Kot Paça Yapımı",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 1,
        offers: [
          { '@type': 'Offer', name: 'Orijinal Paça ile Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Orijinal Paça Nasıl Yapılır?",
      description: "Orijinal Paça Nasıl Yapılır?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan kot pantolonun paçasının yakın fotoğrafını ve boyunu gönderin.' },
        { '@type': 'HowToStep', name: 'Teslim Edin', text: 'Atölyeye uğrayın ya da servisimizi çağırın.' },
        { '@type': 'HowToStep', name: 'Ölçü ve Dikiş', text: 'Boy giyeceğiniz ayakkabıyla işaretlenir; paçanın orijinal görünümünü koruyacak şekilde dikilir. Normal işte aynı gün, acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Paça görünümü kontrol edilir ve teslim edilir.' },
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
            <span className="hero-tag">🧵 🧵 Orijinal Kot Paça · Kısaltma</span>
            <h1 id="hero-h">
              Orijinal Kot Paça Yapımı <span className="accent">Antalya</span><br />₺200'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Kot pantolonun paçasını kısaltırken orijinal paça görünümünü koruyoruz. Kalın denimde çalışırken paçanın karakterini göz önünde tutuyoruz; eve ve otele servis.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Orijinal paça görünümünü koruyarak kot paça kısaltma ₺200'den başlar; boy ayakkabıyla işaretlenir, normal işler aynı gün teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Orijinal Paça Fiyatı 2026</span>
              <h2 className="sec-h ff" id="price-h">Orijinal Kot Paça Yapımı Fiyatı</h2>
              <p className="sec-sub">Net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧵</span>
                  <div><div className="price-tr">Orijinal Paça</div></div>
                </div>
                <p className="price-desc">Paçanın kıvrımı ve dikiş izi göz önünde tutularak kısaltılır.</p>
                <table className="price-table"><tbody>
                  <tr><td>Orijinal Paça ile Kısaltma</td><td>₺200+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyat başlangıç fiyatıdır; paçanın yapısına ve ne kadar kısaltılacağına göre değişebilir. KDV dahil değildir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Orijinal Paça Nasıl Yapılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan kot pantolonun paçasının yakın fotoğrafını ve boyunu gönderin.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Edin</div><div className="howto-d">Atölyeye uğrayın ya da servisimizi çağırın.</div></div>
              <div className="howto-item"><div className="howto-t">Ölçü ve Dikiş</div><div className="howto-d">Boy giyeceğiniz ayakkabıyla işaretlenir; paçanın orijinal görünümünü koruyacak şekilde dikilir. Normal işte aynı gün, acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Paça görünümü kontrol edilir ve teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="guide-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Rehber</span>
              <h2 className="sec-h ff" id="guide-h">Orijinal Paça Görünümü Nedir, Nasıl Korunur?</h2>
            </div>
            <div className="howto-list">
              {GUIDE.map(([t, x]) => (
                <div key={t} className="howto-item"><div className="howto-t">{t}</div><div className="howto-d">{x}</div></div>
              ))}
            </div>
            <p style={{ marginTop: '1.2rem' }}>
              Standart kısaltma yeterliyse <a href="/kot-pantolon-paca-kisaltma-antalya">kot pantolon paça kısaltma</a>, bacak ve bel bolsa <a href="/kot-pantolon-daraltma-antalya">kot pantolon daraltma</a>, kot eteğin etek ucu için <a href="/kot-etek-kisaltma-daraltma-antalya">kot etek kısaltma</a> sayfalarına bakın.
            </p>
          </div>
        </section>

        <KargoKisa lang="tr" work="Orijinal kot paça yapımı" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Orijinal Kot Paça Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Genel kısaltma için <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a>, daraltma için <a href="/kot-pantolon-daraltma-antalya">kot pantolon daraltma</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Paçanın Orijinal Kalmasını mı İstiyorsunuz?</h2>
          <p className="cta-sub">Paçanın yakın fotoğrafını gönderin, orijinal görünümün korunup korunamayacağını söyleyelim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Orijinal Kot Paça Yapımı Antalya · {PHONE}</div>
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
