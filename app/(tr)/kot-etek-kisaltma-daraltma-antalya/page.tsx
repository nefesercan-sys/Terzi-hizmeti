import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import KargoKisa from '@/components/KargoKisa';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/kot-etek-kisaltma-daraltma-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, kot etek kısaltma veya daraltma hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-11-03';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Kot Etek Kısaltma ve Daraltma ₺200'den · Antalya" },
  description:
    '☎ ' + PHONE + ' · ' + "Kot etek boyu kısaltma, bel daraltma ve orijinal etek ucu ₺200'den. Normal iş aynı gün, acil 1–2 saat. Eve ve otele servis.",
  keywords: fitKeywords([
    'kot etek kısaltma', 'kot etek daraltma', 'kot etek boy kısaltma', 'kot etek bel daraltma', 'kot etek orijinal ucu', 'kot etek tadilatı', 'Antalya kot etek kısaltma',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kot Etek Kısaltma ve Daraltma Antalya",
    description: '☎ ' + PHONE + ' · ' + "Kot etek boy kısaltma, bel daraltma, orijinal etek ucu. ₺200'den.",
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: "Kot Etek Kısaltma ve Daraltma Antalya" }],
  },
};

// Görünen SSS ve FAQPage şeması tek diziden üretilir (tutarlılık).
const FAQ: [string, string][] = [
  ['Kot etek kısaltma fiyatı ne kadar?', 'Kot etek boy kısaltma ₺200\'den başlar. Net fiyat fotoğrafla WhatsApp\'tan söylenir.'],
  ['Kot etek orijinal ucuyla kısaltılır mı?', 'Evet, kot eteğin orijinal etek ucu görünümünü koruyacak şekilde kısaltma yapıyoruz. Fotoğraf gönderirseniz yapılabilecek işlemi söyleriz.'],
  ['Kot etek daraltma ve bel daraltma yapıyor musunuz?', 'Evet. Kot etekte bel ve kalça daraltma ₺200\'den başlar; net fiyat fotoğrafa göre söylenir.'],
  ['Kot etek tadilatı ne kadar sürer?', 'Etek tadilatı çoğunlukla aynı gün biter; acil işlerde 1–2 saat.'],
  ['Kot ürününü eve veya otele gelip alıyor musunuz?', 'Evet, eteği evinizden veya otelinizden alırız; Konyaaltı, Muratpaşa ve çevresinde geçerlidir.'],
  ["Kot eteğin yırtmacı varsa kısaltma yapılır mı?", "Evet. Yırtmaçlı kot etek kısaltılırken yırtmaç boyu da yeni boya göre ayarlanır; aksi halde yırtmaç yüksek ya da kısa kalır."],
  ["Midi kot eteği mini yapabilir misiniz?", "Boy kısaltma yapılabilir, ancak eteğin kalıbı değişmez. A kesimli ya da düz bir eteği çok kısaltmadan önce fotoğrafa bakıp uygun boyu birlikte belirleriz."],
  ["Kot etekte fermuar değişimi de yapılıyor mu?", "Evet. Bozulan fermuar değiştirilebilir; fermuar değişimi ₺300'den başlar. Kısaltma veya daraltmayla aynı işlemde yapılabilir."],
  ["Kot etek bel daraltma kalıbı bozar mı?", "Makul bir daraltma kalıbı bozmaz. Çok fazla daraltma gerekiyorsa etkisini işlemden önce fotoğraf ve ölçüye bakarak söyleriz."],
];

// Sayfaya özgü rehber içeriği (kot kümesinde sayfaları farklı niyetlere ayırır).
const GUIDE: [string, string][] = [
  ["Mini, midi ya da uzun: boy nasıl seçilir?", "Kot etek tadilatında en sık istenen iş boy kısaltmadır. Etek ucu, dizin üstünde mi altında mı duracağına göre, ayakta ve düz durarak işaretlenir. Midi bir eteği mini boya indirirken eteğin A kesimi ya da düz kalıbı değişmeyeceği için kalıba uygun bir boy seçmek gerekir. Fotoğrafta eteği giyerek önden çekilmiş boy görüntüsü işimizi kolaylaştırır."],
  ["Etek ucunun orijinal görünümü", "Kot eteklerde etek ucu çoğunlukla kalın bir dikiş ve çoğu zaman sökük bir saçak ya da kıvrımla biter. Kısaltırken bu detayı korumak mümkünse etek ucunun yakın fotoğrafını bekleriz. Detay yoksa sade kıvırma dikişiyle bitiririz. Hangisinin uygun olduğunu fotoğrafa göre söyleriz."],
  ["Yırtmaç, cep ve fermuarlı etekler", "Yırtmaçlı bir kot eteği kısaltırken yırtmaç boyu da yeni boya göre ayarlanır, aksi halde yırtmaç eteğin ucuna kadar çıkmaz ya da fazla yüksek kalır. Ön ya da yan fermuarlı eteklerde bel daraltırken fermuar yeri değişmez. Fermuar bozulduysa değişimi de aynı işlemde yapılabilir; fermuar değişimi fiyatı ₺300'den başlar."],
  ["Bel ve kalça daraltma", "Kot etekte bel bolsa arka ortadan ya da yan dikişlerden pay alınır. Kalça ve oturma yeri bol ise yan dikişler birlikte ayarlanır. Büyük eteği çok küçültmek kalıbı bozabilir, bu yüzden en fazla ne kadar daraltılabileceğini fotoğraf ve ölçüye bakarak söyleriz."],
  ["Fiyat ve teslim", "Kot etek boy kısaltma, bel ve kalça daraltma ₺200'den başlar; net fiyat fotoğrafa göre söylenir. Normal işler aynı gün, acil işler 1–2 saatte teslim edilir. Fiyatlara KDV dahil değildir. Eve ve otele alım-teslim yapılır."],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Kot Etek Kısaltma ve Daraltma Antalya",
      description: "Kot etek boyu kısaltma, bel daraltma ve orijinal etek ucu yapımı ₺200'den.",
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
        { '@type': 'ListItem', position: 3, name: "Kot Etek Kısaltma ve Daraltma", item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: "Kot Etek Kısaltma ve Daraltma",
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Konyaaltı', 'Antalya'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '200',
        offerCount: 2,
        offers: [
          { '@type': 'Offer', name: 'Kot Etek Boy Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Kot Etek Bel Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: "Kot Etek Nasıl Kısaltılır?",
      description: "Kot Etek Nasıl Kısaltılır?",
      step: [
        { '@type': 'HowToStep', name: 'Fotoğraf Gönderin', text: 'WhatsApp\'tan kot eteğin fotoğrafını gönderin, ön fiyat alın.' },
        { '@type': 'HowToStep', name: 'Teslim Edin', text: 'Eteği atölyeye bırakın veya adresten teslim alalım.' },
        { '@type': 'HowToStep', name: 'Ölçü ve Dikiş', text: 'Boy ve bel ölçüsü üzerinizde işaretlenir, etek ucu yeniden dikilir. Aynı gün; acilde 1–2 saat.' },
        { '@type': 'HowToStep', name: 'Teslim Alın', text: 'Boy ve bel kontrol edilerek teslim edilir.' },
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
            <span className="hero-tag">👗 👗 Kot Etek Kısaltma · Daraltma</span>
            <h1 id="hero-h">
              Kot Etek Kısaltma <span className="accent">Antalya</span><br />₺200'den, Aynı Gün Teslim</h1>
            <p className="hero-desc">
              Kot etek boy kısaltma, bel daraltma ve orijinal etek ucu yapımı. Kalın kot kumaşa uygun dikişle çalışıyoruz; eve ve otele servis.
            </p>
            <p className="hero-desc"><strong>Kısa cevap:</strong> Kot etek kısaltma ve daraltma ₺200'den başlar; orijinal etek ucu görünümü korunur, normal işler aynı gün teslim edilir.</p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Kot Etek Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Kot Etek Kısaltma Fiyatları</h2>
              <p className="sec-sub">Net fiyat fotoğrafa göre söylenir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">👗</span>
                  <div><div className="price-tr">Kot Etek</div></div>
                </div>
                <p className="price-desc">Etek ucu ve yırtmaç yapısına göre belirlenir.</p>
                <table className="price-table"><tbody>
                  <tr><td>Kot Etek Boy Kısaltma</td><td>₺200+</td></tr>
                  <tr><td>Kot Etek Bel Daraltma</td><td>₺200+</td></tr>
                  <tr><td>Orijinal Etek Ucu</td><td>₺200+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır; yırtmaç, astar ve kalıp yapısına göre değişebilir. KDV dahil değildir.
            </p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Kot Etek Nasıl Kısaltılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">Fotoğraf Gönderin</div><div className="howto-d">WhatsApp'tan kot eteğin fotoğrafını gönderin, ön fiyat alın.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Edin</div><div className="howto-d">Eteği atölyeye bırakın veya adresten teslim alalım.</div></div>
              <div className="howto-item"><div className="howto-t">Ölçü ve Dikiş</div><div className="howto-d">Boy ve bel ölçüsü üzerinizde işaretlenir, etek ucu yeniden dikilir. Aynı gün; acilde 1–2 saat.</div></div>
              <div className="howto-item"><div className="howto-t">Teslim Alın</div><div className="howto-d">Boy ve bel kontrol edilerek teslim edilir.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="guide-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Rehber</span>
              <h2 className="sec-h ff" id="guide-h">Kot Etek Tadilatında Boy, Bel ve Yırtmaç</h2>
            </div>
            <div className="howto-list">
              {GUIDE.map(([t, x]) => (
                <div key={t} className="howto-item"><div className="howto-t">{t}</div><div className="howto-d">{x}</div></div>
              ))}
            </div>
            <p style={{ marginTop: '1.2rem' }}>
              Aynı kumaştan pantolon için <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a> ve <a href="/kot-pantolon-daraltma-antalya">kot pantolon daraltma</a>, kot ceket için <a href="/kot-ceket-mont-tadilati-antalya">kot ceket ve mont tadilatı</a>, kumaş etek kısaltma için <a href="/konyaalti-paca-kisaltma">Konyaaltı paça kısaltma</a> sayfalarına bakabilirsiniz.
            </p>
          </div>
        </section>

        <KargoKisa lang="tr" work="Kot etek kısaltma ve daraltma" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Kot Etek Hakkında Sık Sorulan Sorular</h2>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
            <p style={{ marginTop: '1.2rem' }}>
              Kot pantolon için <a href="/kot-pantolon-paca-kisaltma-antalya">kot paça kısaltma</a>, kot ceket için <a href="/kot-ceket-mont-tadilati-antalya">kot ceket ve mont</a>, genel fiyatlar için <a href="/antalya-terzi-fiyatlari">terzi fiyat listesine</a> bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Kot Eteğiniz mi Uzun?</h2>
          <p className="cta-sub">Eteğin boy fotoğrafını gönderin, kısaltma fiyatını öğrenin.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Kot Etek Kısaltma ve Daraltma Antalya · {PHONE}</div>
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
