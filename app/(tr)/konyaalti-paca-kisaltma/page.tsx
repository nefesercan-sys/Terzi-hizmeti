import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import OrnekGorselSeridi from '@/components/OrnekGorselSeridi';
import { businessNode } from '@/lib/business';
import { fitDesc } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/konyaalti-paca-kisaltma`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, paça kısaltma hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-10-04';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Paça Kısaltma ₺200'den · Konyaaltı · +90 531 898 64 18" },
  description:
    fitDesc("☎ +90 531 898 64 18 · Pantolon, kot, etek paça kısaltma ₺200'den, aynı gün teslim, acil 1–2 saat. Eve ve otele servis. Her gün 08:00–23:00."),
  keywords: ['paça kısaltma Konyaaltı', 'pantolon kısaltma Antalya', 'kot paça kısaltma', 'etek kısaltma Antalya', 'acil paça kısaltma', 'paça kısaltma fiyatı', 'Konyaaltı terzi', 'Antalya terzi'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Paça Kısaltma Konyaaltı — Aynı Gün Teslim',
    description: '☎ ' + PHONE + ' · ' + 'Pantolon, kot, etek kısaltma. ₺200\'den başlayan fiyatlar.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Paça Kısaltma Konyaaltı' }],
  },
};

// Görünen SSS ve FAQPage şeması tek diziden üretilir (tutarlılık).
const FAQ: [string, string][] = [
    ['Paça kısaltma ne kadar sürer?', 'Paça kısaltma aynı gün teslim edilir; acil işlerde 1–2 saat.'],
    ['Paça kısaltma fiyatı ne kadar?', 'Kumaş pantolon ₺200\'den, kot pantolon ₺200\'den, etek kısaltma ₺200\'den başlar.'],
    ['Orijinal dikişi bozmadan kısaltma yapıyor musunuz?', 'Evet, görünmez dikiş tekniğiyle çalışıyoruz — orijinal paça görünümü korunur, kot pantolonlarda orijinal dikiş izi bile taklit edilebilir.'],
    ['Prova gerekiyor mu?', 'En doğru sonuç için prova önerilir ama net ölçü verirseniz provasız da yapabiliriz. Adrese gelen servisimizle yerinde ölçü de alabiliriz.'],
    ['Pantolon paçası kısaltma kaç TL?', 'Pantolon paçası kısaltma ₺200\'den başlar. Kumaş pantolon, kot ve etek aynı başlangıç fiyatıyla yapılır; net fiyat işin fotoğrafına göre WhatsApp\'tan söylenir.'],
    ['Kot paça kısaltma ne kadar?', 'Kot paça kısaltma ₺200\'den başlar. Kotun orijinal paça dikişi korunacak şekilde yapılır.'],
    ['Paça kısaltma fiyatları 2026\'da ne kadar?', '2026 güncel başlangıç fiyatı: pantolon, kot ve etek paça kısaltma ₺200\'den. Fiyat işin durumuna göre değişebilir; fotoğraf göndererek net fiyatı öğrenebilirsiniz.'],
  ["Takım elbise pantolonunun paçası kısaltılır mı?", "Evet. Kumaş pantolonda paça görünmez dikişle kapatılır, boy giyeceğiniz ayakkabıyla işaretlenir. Manşetli pantolonlarda manşet yeniden yapılır."],
  ["Astarlı etek kısaltılırsa astar da kısalır mı?", "Evet. Astarlı eteklerde astar da yeni boya göre kısaltılır, böylece etek ucunda astar dışarı taşmaz."],
  ["Konyaaltı'nda otelde kalıyorum, servis gelir mi?", "Evet. Konyaaltı'ndaki otellere alım-teslim yapıyoruz; gerekirse deneme için otelde buluşuruz. Otellerle ortaklığımız yoktur, Antalya'daki tüm otellere hizmet veriyoruz."],
  ["Paça kısaltma için hangi para birimleriyle ödeme yapılır?", "Tüm para birimleriyle ödeme kabul ediyoruz; nakit veya kartla ödeyebilirsiniz. Fiyatlara KDV dahil değildir."],
];

// Sayfaya özgü rehber içeriği (kot kümesinde sayfaları farklı niyetlere ayırır).
const GUIDE: [string, string][] = [
  ["Klasik pantolon ve takım elbise paçası", "Kumaş pantolonlarda paça genellikle düz kesilip görünmez dikişle kapatılır; yani dışarıdan dikiş izi görünmez. Takım elbise pantolonunda boy, giyilecek ayakkabıyla ve pantolonun ayağın üstünde hafifçe durması esasına göre işaretlenir. Manşetli pantolonlarda ise manşet yeniden yapılır ve boy ona göre ayarlanır."],
  ["Keten, gabardin ve ince kumaşlar", "İnce ve dökümlü kumaşlarda paçayı sıkı çekmemek gerekir; aksi halde paçada büzülme olur. Keten gibi kolay kırışan kumaşlarda ise dikiş sonrası ütü ile paçanın oturması sağlanır. Kumaş cinsini fotoğrafta ya da mesajda belirtirseniz işi ona göre planlarız."],
  ["Etek kısaltma", "Düz, pilili ya da kloş eteklerin kısaltılma yöntemi birbirinden farklıdır. Düz eteklerde etek ucu düz kıvrılırken kloş eteklerde etek ucu daireseldir ve kenar daha dar bir kıvırmayla bitirilir. Astarlı eteklerde astar da yeni boya göre kısaltılır. Etek boyunu eteği giyerek ve düz dururken belirleriz."],
  ["Konyaaltı'nda eve ve otele servis", "Konyaaltı, Hurma, Liman, Sarısu, Uncalı ve Gürsu gibi mahallelerde eve ve otele alım-teslim yapılır. Pantolonunuzu adresinizden alır, işi tamamladıktan sonra yine adrese teslim ederiz. Gerekirse deneme için otelde buluşuruz. Otellerle ortaklığımız yoktur; Antalya'daki tüm otellere hizmet veriyoruz."],
  ["Fiyat ve ödeme", "Pantolon, kot ve etek paça kısaltma ₺200'den başlar. Net fiyat işin fotoğrafına göre WhatsApp'tan söylenir. Fiyatlara KDV dahil değildir. Tüm para birimleriyle, nakit veya kartla ödeme yapabilirsiniz. Kotlar için ayrı sayfalarımızda daha ayrıntılı bilgi bulabilirsiniz."],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Paça Kısaltma Konyaaltı — Acil Pantolon Kısaltma',
      description: 'Konyaaltı\'nda paça kısaltma hizmeti. Pantolon, kot, etek kısaltma.',
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
        { '@type': 'ListItem', position: 2, name: 'Antalya Terzi', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: 'Paça Kısaltma Konyaaltı', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Paça Kısaltma',
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 3,
        offers: [
          { '@type': 'Offer', name: 'Kumaş Pantolon Paçası', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Kot Paça Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Etek Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: 'Konyaaltı\'nda Paça Kısaltma Nasıl Yaptırılır?',
      description: 'Pantolon veya etek paça kısaltma için adım adım süreç.',
      totalTime: 'PT1H',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'TRY', value: '200' },
      step: [
        { '@type': 'HowToStep', name: 'İstediğiniz Boyu Belirtin', text: 'WhatsApp\'tan pantolon/etek fotoğrafını ve kısaltmak istediğiniz miktarı belirtin.' },
        { '@type': 'HowToStep', name: 'Ölçü Kontrolü', text: 'Mümkünse atölyede prova ile en doğru boy belirlenir; adrese gelen servis de mevcuttur.' },
        { '@type': 'HowToStep', name: 'Dikim Yapılır', text: 'Görünmez dikiş tekniğiyle paça kısaltılır — orijinal görünüm korunur.' },
        { '@type': 'HowToStep', name: 'Aynı Gün Teslim', text: 'Paça kısaltma aynı gün teslim edilir, acil olanlar 1–2 saatte.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
};

export default function PacaKisaltmaPage() {
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
            <span className="hero-tag">📏 Acil Paça Kısaltma · Konyaaltı</span>
            <h1 id="hero-h">
              Paça Kısaltma <span className="accent">Konyaaltı</span><br />
              ₺200'den, Aynı Gün Teslim
            </h1>
            <p className="hero-desc">
              Pantolon, kot, etek paça kısaltma — görünmez dikiş tekniğiyle,
              orijinal görünümü koruyarak. Eve ve otele
              servis.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Pantolon, kot ve etek paça kısaltma ₺200'den başlar; işler aynı gün, acil işler 1–2 saatte teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Ölçü Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        {/* FİYATLAR */}
        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Paça Kısaltma Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Fiyat Listesi</h2>
              <p className="sec-sub">Kumaş türüne göre fiyatlandırma.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👔</span>
                  <div><div className="price-tr">Kumaş Pantolon</div></div>
                </div>
                <p className="price-desc">Klasik kumaş pantolon, keten, gabardin.</p>
                <table className="price-table"><tbody>
                  <tr><td>Standart Paça Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Orijinal paça dikişi korumalı</td><td>₺200+</td></tr>
                </tbody></table>
              </div>
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👖</span>
                  <div><div className="price-tr">Kot Pantolon</div></div>
                </div>
                <p className="price-desc">Orijinal dikiş taklidi dahil kot paça kısaltma.</p>
                <table className="price-table"><tbody>
                  <tr><td>Standart Kot Paça</td><td>₺200+</td></tr>
                  <tr><td>Orijinal Dikiş Taklitli</td><td>Fotoğrafa göre</td></tr>
                </tbody></table>
              </div>
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👗</span>
                  <div><div className="price-tr">Etek & Elbise</div></div>
                </div>
                <p className="price-desc">Etek boyu ve elbise boyu kısaltma.</p>
                <table className="price-table"><tbody>
                  <tr><td>Etek Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Elbise Boyu Kısaltma</td><td>₺200+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır, kumaş türü ve dikim tekniğine göre değişebilir.
            </p>
          </div>
        </section>

        {/* HOWTO */}
        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Paça Kısaltma Nasıl Yaptırılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item">
                <div className="howto-t">İstediğiniz Boyu Belirtin</div>
                <div className="howto-d">WhatsApp'tan pantolon/etek fotoğrafını ve kısaltmak istediğiniz miktarı belirtin.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Ölçü Kontrolü</div>
                <div className="howto-d">Mümkünse atölyede prova ile en doğru boy belirlenir; adrese gelen servis de mevcuttur.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Dikim Yapılır</div>
                <div className="howto-d">Görünmez dikiş tekniğiyle paça kısaltılır — orijinal görünüm korunur.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Aynı Gün Teslim</div>
                <div className="howto-d">Paça kısaltma aynı gün teslim edilir, acil olanlar 1–2 saatte.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <OrnekGorselSeridi konu={'paca'} lang="tr" anahtarlar={['yun-pantolon-metre', 'keten-pantolon-katli', 'pilili-etek']} sayfaUrl="https://terzihizmeti.com.tr/konyaalti-paca-kisaltma" />

        <section className="sec" aria-labelledby="guide-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Rehber</span>
              <h2 className="sec-h ff" id="guide-h">Kumaş Pantolon ve Etekte Paça Kısaltma</h2>
            </div>
            <div className="howto-list">
              {GUIDE.map(([t, x]) => (
                <div key={t} className="howto-item"><div className="howto-t">{t}</div><div className="howto-d">{x}</div></div>
              ))}
            </div>
            <p style={{ marginTop: '1.2rem' }}>
              Kot pantolonlar için <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a> ve <a href="/orijinal-kot-paca-yapimi-antalya">orijinal kot paça yapımı</a>, kot etek için <a href="/kot-etek-kisaltma-daraltma-antalya">kot etek kısaltma</a>, fermuar için <a href="/konyaalti-fermuar-tamiri">Konyaaltı fermuar tamiri</a> sayfalarına bakabilirsiniz.
            </p>
          </div>
        </section>

        <KargoKisa lang="tr" work="Paça kısaltma" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Paça Kısaltma Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Pantolonunuz Uzun mu Geldi?</h2>
          <p className="cta-sub">Fotoğraf gönderin, aynı gün teslim alın.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Paça Kısaltma Konyaaltı · {PHONE}</div>
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
