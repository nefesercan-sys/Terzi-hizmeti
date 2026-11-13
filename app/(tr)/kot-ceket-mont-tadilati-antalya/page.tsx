import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoFermuarKutusu from '@/components/KargoFermuarKutusu';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/kot-ceket-mont-tadilati-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, kot ceket veya kot mont tadilatı hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Kot Ceket ve Mont Tadilatı ₺200'den · Kol, Boy, Beden" },
  description:
    'Terziye sor: ' + PHONE + ' · ' + "Kot ceket ve kot mont kol, boy kısaltma ve daraltma ₺200'den; orijinal görünümde dikiş. Normal iş aynı gün, acil 1–2 saat.",
  keywords: fitKeywords([
    'kot ceket kısaltma', 'kot ceket daraltma', 'kot mont kısaltma', 'kot mont daraltma', 'kot ceket kol kısaltma', 'kot ceket tadilatı', 'kot mont tadilatı', 'kot ceket orijinal dikiş', 'Antalya kot ceket terzi',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kot Ceket ve Kot Mont Tadilatı Antalya",
    description: 'Terziye sor: ' + PHONE + ' · ' + "Kot ceket ve mont kısaltma, daraltma, orijinal görünümde dikiş. ₺200'den.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Kot Ceket ve Kot Mont Tadilatı Antalya" }],
  },
};

// Görünen SSS ve FAQPage şeması tek diziden üretilir (tutarlılık).
const FAQ: [string, string][] = [
  ['Kot ceket kısaltma ve daraltma fiyatı ne kadar?', 'Kot ceket ve kot mont kol/boy kısaltma ve daraltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.'],
  ['Kot ceketin kolu kısaltılır mı?', 'Evet. Kol boyu ceket üzerinizdeyken işaretlenir; kot ceket ve kot mont kol kısaltma ₺200\'den başlar.'],
  ['Kot ceket veya mont daraltılır mı?', 'Evet. Beden ve kol daraltma yapıyoruz; kumaş payına göre yapılabilecek işlem fotoğraftan değerlendirilir.'],
  ['Orijinal dikiş görünümü korunur mu?', 'Kot ceket ve mont tadilatında orijinal dikiş görünümünü koruyacak şekilde çalışıyoruz. Fotoğraf gönderirseniz yapılabilecek işlemi söyleriz.'],
  ['Kot mont tadilatı ne kadar sürer?', 'Kot ceket işleri çoğunlukla aynı gün biter; acil işlerde 1–2 saat.'],
  ['Kot ürününü eve veya otele gelip alıyor musunuz?', 'Evet, ceket veya montu adresinizden alırız; Konyaaltı, Muratpaşa ve çevresinde geçerlidir.'],
  ["Kot ceketin kolu manşetli ise kısaltma yapılır mı?", "Evet. Manşetli kollarda kısaltma manşetin altından ya da omuz tarafından yapılabilir; hangisinin uygun olduğuna fotoğrafa bakarak karar veririz."],
  ["Omuzu bol olan kot ceket dar yapılabilir mi?", "Omuz çizgisi büyük ölçüde değiştirilemez. Yan dikişlerden yapılan beden daraltma mümkündür ama omuza oturmayan bir ceket için tadilatın sınırlı kalacağını önceden söyleriz."],
  ["Kot montun fermuarı da değişiyor mu?", "Evet. Kot mont fermuar değişimi ₺300'den başlar; kısaltma veya daraltmayla aynı işlemde yapılabilir."],
  ["Kot ceketin düğmesi düştü, takılır mı?", "Evet. Düşen ya da bozulan düğme ve çıtçıtlar yenilenir. Fotoğraf göndermeniz ve yenisinin neye benzemesi gerektiğini yazmanız yeterlidir."],
];

// Sayfaya özgü rehber içeriği (kot kümesinde sayfaları farklı niyetlere ayırır).
const GUIDE: [string, string][] = [
  ["Kol kısaltma nasıl yapılır?", "Kot ceketin kolu, ceket üzerinizdeyken ve kol rahat dururken işaretlenir. Kolun ağız kısmında düğmeli bir manşet varsa kısaltma manşetin altından ya da omuz tarafından yapılır; hangisinin uygun olduğu manşet yapısına bağlıdır. Kol ağzı kalın dikişli kotlarda orijinal görünümü korumak için manşetten yapılan kısaltma tercih edilir."],
  ["Boy kısaltma ve cep hizası", "Ceket boyunu kısaltırken etek ucundaki kalın dikiş ve bel hizasındaki cepler birlikte düşünülür. Boy çok kısalırsa cep ağızları ceketin ucuna fazla yaklaşır; bu yüzden en uygun boyu fotoğrafa bakarak söyleriz. Kot montta bu kural daha da önemlidir, çünkü mont ceketten daha uzundur ve kaban gibi kullanılır."],
  ["Beden daraltmada sınırlar", "Yan dikişlerden yapılan beden daraltma çoğu kot ceket ve montta mümkündür. Omuz çizgisi ise büyük ölçüde değiştirilemez; omuza oturmayan bir ceketi tadilatla kurtarmak zor olur. Bu nedenle satın alırken omza uyan bedeni seçip bolluğu tadilatla almak en sağlıklı yoldur."],
  ["Düğme ve fermuar", "Kot ceketlerde düşen ya da bozulan düğmeler ve kot montlarda bozulan fermuarlar tadilatla birlikte yenilenebilir. Mont fermuar değişimi ₺300'den başlar. Düğme ve çıtçıt işi için fotoğraf göndermeniz ve yenisinin neye benzemesi gerektiğini yazmanız yeterlidir."],
  ["Fiyat ve teslim", "Kot ceket ve mont kol, boy kısaltma ve daraltma ₺200'den başlar; net fiyat fotoğrafa göre söylenir. Fiyatlara KDV dahil değildir. Normal işler aynı gün, acil işler 1–2 saatte teslim edilir; eve ve otele alım-teslim yapılır."],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Kot Ceket ve Kot Mont Tadilatı Antalya",
      description: "Kot ceket ve kot mont kol kısaltma, boy kısaltma, daraltma ve orijinal görünümde dikiş ₺200'den.",
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
        { '@type': 'ListItem', position: 3, name: "Kot Ceket ve Mont Tadilatı", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Kot Ceket ve Kot Mont Tadilatı",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 3,
        offers: [
          { '@type': 'Offer', name: 'Kot Ceket Kol Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Kot Ceket Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Kot Mont Kısaltma / Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Kot Ceket Tadilatı Nasıl Yapılır?",
      description: "Kot Ceket Tadilatı Nasıl Yapılır?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan kot ceketin veya montun fotoğrafını gönderin, ön fiyat alın.' },
        { '@type': 'HowToStep', name: 'Teslim Edin', text: 'Ceketi getirin ya da evinizden veya otelinizden alalım.' },
        { '@type': 'HowToStep', name: 'Ölçü ve Dikiş', text: 'Kol, boy ve beden ceket üzerinizdeyken işaretlenir; ilgili dikişler yeniden kurulur. Aynı gün; acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Kol ve boy kontrol edilerek teslim edilir.' },
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
            <span className="hero-tag">🧥 🧥 Kot Ceket · Kot Mont Tadilatı</span>
            <h1 id="hero-h">
              Kot Ceket ve Mont Tadilatı <span className="accent">Antalya</span><br />₺200'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Kot ceket ve kot mont kol kısaltma, boy kısaltma ve daraltma; orijinal dikiş görünümünü koruyacak şekilde. Eve ve otele servis.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Kot ceket ve kot mont kısaltma ve daraltma ₺200'den başlar; normal işler aynı gün, acil işler 1–2 saatte teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Kot Ceket Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Kot Ceket ve Mont Tadilat Fiyatları</h2>
              <p className="sec-sub">Net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧥</span>
                  <div><div className="price-tr">Kot Ceket ve Mont</div></div>
                </div>
                <p className="price-desc">Kol ağzı, etek ucu ve beden dikişleri ayrı ayrı değerlendirilir.</p>
                <table className="price-table"><tbody>
                  <tr><td>Kol Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Boy Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Beden / Kol Daraltma</td><td>₺200+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır; yapılacak işlem sayısına ve kumaşa göre değişebilir. KDV dahil değildir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Kot Ceket Tadilatı Nasıl Yapılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan kot ceketin veya montun fotoğrafını gönderin, ön fiyat alın.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Edin</div><div className="howto-d">Ceketi getirin ya da evinizden veya otelinizden alalım.</div></div>
              <div className="howto-item"><div className="howto-t">Ölçü ve Dikiş</div><div className="howto-d">Kol, boy ve beden ceket üzerinizdeyken işaretlenir; ilgili dikişler yeniden kurulur. Aynı gün; acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Kol ve boy kontrol edilerek teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="guide-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Rehber</span>
              <h2 className="sec-h ff" id="guide-h">Kot Ceket ve Montta Kol, Boy ve Beden Ayarı</h2>
            </div>
            <div className="howto-list">
              {GUIDE.map(([t, x]) => (
                <div key={t} className="howto-item"><div className="howto-t">{t}</div><div className="howto-d">{x}</div></div>
              ))}
            </div>
            <p style={{ marginTop: '1.2rem' }}>
              Kot pantolon için <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a> ve <a href="/kot-pantolon-daraltma-antalya">kot pantolon daraltma</a>, kot etek için <a href="/kot-etek-kisaltma-daraltma-antalya">kot etek tadilatı</a>, kışlık kaban ve paltolar için <a href="/kaban-palto-tadilati-antalya">kaban ve palto tadilatı</a> sayfalarına bakabilirsiniz.
            </p>
          </div>
        </section>

        <KargoFermuarKutusu lang="tr" variant="mont" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Kot Ceket ve Mont Tadilatı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Kot pantolon için <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a>, kot etek için <a href="/kot-etek-kisaltma-daraltma-antalya">kot etek sayfasına</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Kot Ceketiniz mi Büyük?</h2>
          <p className="cta-sub">Ceketin önden ve kol fotoğrafını gönderin, tadilat fiyatını öğrenin.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Kot Ceket ve Mont Tadilatı Antalya · {PHONE}</div>
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
