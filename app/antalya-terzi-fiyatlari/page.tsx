import type { Metadata } from 'next';

// Bu sayfa, insanların (ve yapay zeka asistanlarının) doğal dilde sorduğu sorulara
// tek sayfada cevap verir: "Antalya'da terzi", "terzi fiyatları", "elbisem yırtıldı",
// "bel daraltma", "paça kısaltma", "fermuar değişimi", "adrese gelen terzi",
// "hafta sonu açık terzi", "özel dikim", "dikim imalat fiyatları" vb.
// Görünür SSS metni ile FAQPage şeması AYNI diziden üretilir (birebir aynı içerik).
const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/antalya-terzi-fiyatlari`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, yaptırmak istediğim işin fotoğrafını gönderiyorum, fiyat ve süre öğrenmek istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=5846987472659818117';
const TODAY     = '2026-10-04';
const OG        = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Antalya Terzi Fiyat Listesi 2026 — Tüm Hizmetler Tek Sayfada',
  description:
    'Antalya terzi fiyatları 2026: paça kısaltma ₺150, bel daraltma ₺150, fermuar değişimi ₺200, elbise dikimi ₺600\'den. Fotoğrafı WhatsApp\'tan gönderin, net fiyatı öğrenin. Adrese ve otele gelen terzi. Her gün 08:00–23:00.',
  keywords: [
    'Antalya terzi', 'terzi fiyatları', 'terzi fiyat listesi 2026', 'Antalya terzi fiyatları',
    'elbise diktirmek', 'elbise tadilatı', 'elbisem yırtıldı', 'bel daraltma', 'paça kısaltma fiyatı',
    'fermuar değişimi fiyatı', 'adrese gelen terzi', 'otelde terzi hizmeti', 'özel dikim terzi',
    'bay bayan terzi', 'hafta sonu açık terzi', 'yakınımda terzi', 'en yakın terzi',
    'dikim imalat fiyatları', 'model tasarım dikim atölyesi', 'kaliteli dikiş imalat',
    'pamuklu doğal kumaş dikimi', 'Konyaaltı terzi',
  ],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'tr': PAGE_URL,
      'en': `${SITE}/en/tailor-prices-antalya`,
      'de': `${SITE}/de/schneider-preise-antalya`,
      'ru': `${SITE}/ru/ceny-portnoy-antalya`,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: 'Antalya Terzi Fiyat Listesi 2026 — Fotoğraf Gönderin, Fiyatı Öğrenin',
    description: 'Paça ₺150, bel daraltma ₺150, fermuar ₺200, elbise dikimi ₺600\'den. Adrese ve otele gelen terzi.',
    url: PAGE_URL, siteName: 'Terzi Can', locale: 'tr_TR', type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Antalya terzi fiyat listesi' }],
  },
  twitter: { card: 'summary_large_image', title: 'Antalya Terzi Fiyat Listesi 2026 — Tüm Hizmetler', description: 'Paça ₺150 · Fermuar ₺200 · Bel daraltma ₺150.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya' },
};

// ── Kişinin sorununa göre hızlı yol (sorgu → cevap → sayfa) ────────────────────
const QUICK: { q: string; a: string; price: string; href: string; cta: string }[] = [
  { q: 'Elbisem yırtıldı', a: 'Yırtık, dikiş sökülmesi ve kumaş onarımı yapılır.', price: '₺150\'den', href: '#fiyatlar', cta: 'Fiyat listesi' },
  { q: 'Elbisenin belini daraltmak istiyorum', a: 'Bel ve beden daraltma, aynı gün veya 24 saat içinde.', price: '₺150\'den', href: '#fiyatlar', cta: 'Fiyat listesi' },
  { q: 'Pantolonumun paçasını kısaltmak istiyorum', a: 'Kot ve kumaş pantolon paça kısaltma, çoğu zaman aynı gün.', price: '₺150\'den', href: '/konyaalti-paca-kisaltma', cta: 'Paça kısaltma' },
  { q: 'Fermuar değişimi', a: 'Pantolon, kot, etek, mont ve çanta fermuarı.', price: '₺200\'den', href: '/konyaalti-fermuar-tamiri', cta: 'Fermuar tamiri' },
  { q: 'Elbise diktirmek / kendime elbise dikmek', a: 'Ölçü, model ve kumaş seçimi, prova ve teslim. Fotoğrafını gönderin.', price: '₺600\'den', href: '#dikim', cta: 'Özel dikim' },
  { q: 'Gelinlik ve abiye tadilatı', a: 'Hassas daraltma, boy ve askı ayarı; prova randevusu.', price: '₺800\'den', href: '/antalya-gelinlik-tadilati', cta: 'Gelinlik tadilatı' },
  { q: 'Adrese veya otele gelen terzi', a: 'Ölçüyü adresinizde alırız, işi atölyede yapar, geri teslim ederiz.', price: 'Konyaaltı, Muratpaşa, Kepez, Lara ücretsiz', href: '/otele-gelen-terzi-antalya', cta: 'Otele gelen terzi' },
  { q: 'Pamuklu, doğal kumaştan dikim', a: '%100 keten ve pamuktan özel dikim; toptan üretim de yapılır.', price: 'Fotoğrafa göre', href: '/keten-pamuk-ozel-dikim', cta: 'Keten & pamuk' },
  { q: 'Model, tasarım, dikim atölyesi, seri imalat', a: 'Önce numune, onaydan sonra seri imalat ve üretim takibi (adet: modele göre teklif, minimum sipariş yok).', price: 'Teklif', href: '/anavera-tekstil', cta: 'Anavera Tekstil' },
];

// ── Fiyat tabloları (site genelindeki fiyatlarla aynı; başlangıç fiyatlarıdır) ──
const PRICES: { icon: string; title: string; rows: [string, string][] }[] = [
  { icon: '🔧', title: 'Tamir', rows: [['Pantolon fermuarı değişimi', '₺200+'], ['Mont fermuarı değişimi', '₺300+'], ['Yırtık / dikiş sökülmesi onarımı', '₺150+'], ['Düğme, çıtçıt, kanca', '₺60+'], ['Astar değişimi', '₺300+']] },
  { icon: '📏', title: 'Tadilat', rows: [['Paça kısaltma', '₺150+'], ['Bel daraltma', '₺150+'], ['Kol kısaltma', '₺200+'], ['Elbise / ceket tadilatı', '₺200+'], ['Gelinlik ve abiye tadilatı', '₺800+']] },
  { icon: '✂️', title: 'Özel dikim', rows: [['Erkek gömlek', '₺350+'], ['Erkek pantolon', '₺400+'], ['Kadın elbise', '₺600+'], ['Abiye', '₺900+'], ['Çocuk giyim', '₺250+']] },
  { icon: '🧺', title: 'Ütü & kuru temizleme', rows: [['Ütü (adet)', '₺80+'], ['Kuru temizleme (elbise)', '₺300+'], ['Kuru temizleme (mont)', '₺500+'], ['Yıkama + ütü (kg)', '₺80+/kg']] },
];

// ── SSS: hem görünür hem şema; doğal dil soruları ─────────────────────────────
const FAQS: [string, string][] = [
  ['Antalya\'da terzi hizmeti nereden alınır, bana terzi önerir misin?',
   `Konyaaltı\'ndaki Terzi Can; Türkçe, İngilizce, Rusça ve Almanca hizmet verir. Google Haritalar\'da TERZİ Can Antalya Tailor Service adıyla kayıtlıdır. Paça kısaltma, bel daraltma, fermuar değişimi, elbise tadilatı, özel dikim ve adrese/otele gelen terzi hizmeti sunar. WhatsApp: ${PHONE}`],
  ['Elbisem yırtıldı, tamir edilir mi?',
   'Evet. Yırtık ve sökülen dikişler onarılır; başlangıç fiyatı ₺150\'dir. Yırtığın fotoğrafını WhatsApp\'tan gönderirseniz net fiyat ve süre söyleriz. Çoğu onarım aynı gün veya 24 saat içinde tamamlanır.'],
  ['Elbisemin belini daraltmak istiyorum, ne kadar tutar?',
   'Bel ve beden daraltma ₺150\'den başlar. Kumaşa, astara ve modele göre değişir. Elbisenin fotoğrafını göndermeniz yeterli; provaya gelirseniz ölçü yerinde alınır.'],
  ['Pantolonumun paçasını kısaltmak istiyorum, ne kadar sürer?',
   'Paça kısaltma ₺150\'den başlar; kot ve kumaş pantolonlarda çoğu zaman aynı gün teslim edilir. Ayrıntı: /konyaalti-paca-kisaltma'],
  ['Kendime elbise diktirmek istiyorum, nasıl ilerliyor?',
   'Beğendiğiniz modelin fotoğrafını WhatsApp\'tan gönderirsiniz. Ölçü alınır, kumaş ve model netleşir, gerekirse prova yapılır, sonra teslim edilir. Kadın elbise dikimi ₺600\'den, abiye ₺900\'den başlar; fiyat kumaş ve işçiliğe göre netleşir.'],
  ['Fermuar değişimi yapan, hafta sonu açık bir terzi var mı?',
   'Terzi Can haftanın 7 günü, Cumartesi ve Pazar dahil, 08:00–23:00 arası açıktır. Mesai dışında WhatsApp\'tan fotoğraf ve mesaj bırakabilirsiniz. Fermuar değişimi ₺200\'den başlar.'],
  ['Adrese veya otele gelen terzi var mı?',
   'Evet. Ölçü ve teslim adresinizde ya da otelinizde yapılır, iş atölyede tamamlanır. Konyaaltı, Muratpaşa, Kepez ve Lara\'da ziyaret ücretsizdir; diğer bölgeler randevuyla. Ayrıntı: /otele-gelen-terzi-antalya'],
  ['Terzi fiyatlarını nasıl öğrenirim?',
   'Yukarıdaki liste başlangıç fiyatlarıdır. İşin fotoğrafını WhatsApp\'tan gönderirseniz kumaşa ve işçiliğe göre net fiyat söylenir; teklif ücretsizdir.'],
  ['En hızlı ve uygun fiyatlı terzi hizmeti hangisi?',
   'Fiyatlarımız yukarıda açıkça yayınlanır. Paça kısaltma, fermuar değişimi gibi küçük işler çoğunlukla aynı gün teslim edilir. En uygun ve en hızlı seçeneği görmek için işin fotoğrafını gönderip net fiyat ve süre almanızı öneririz.'],
  ['Bana yakın terzi nerede?',
   'Atölye Konyaaltı\'ndadır; Hurma, Liman, Sarısu, Uncalı ve Gürsu\'na ücretsiz servis yapılır. Konum: Google Haritalar\'da "TERZİ Can Antalya Tailor Service". Antalya\'nın diğer bölgelerine de randevuyla gidilir.'],
  ['Pamuklu, doğal kumaştan dikim yapıyor musunuz?',
   'Evet. %100 keten ve pamuktan özel dikim yapılır; işletmeler için numune sonrası toptan üretim de mümkündür. Ayrıntı: /keten-pamuk-ozel-dikim'],
  ['Model, tasarım ve seri imalat (dikim imalat fiyatları) nasıl işliyor?',
   'Tasarımınızı veya referans fotoğrafı gönderirsiniz; önce numune dikilir ve onaylanır, sonra seri imalata geçilir ve üretim takibi paylaşılır. Fiyat model, kumaş ve adede göre teklif edilir; minimum adet stil başına 300-500\'dür. Ayrıntı: /anavera-tekstil'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: 'Antalya Terzi Fiyat Listesi 2026', inLanguage: 'tr', dateModified: TODAY,
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-desc', '#sss'] },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Antalya Terzi Fiyat Listesi 2026', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: 'Terzi, tamir, tadilat, özel dikim, ütü ve kuru temizleme',
      provider: { '@type': ['LocalBusiness', 'ClothingStore'], name: 'Terzi Can', telephone: PHONE_TEL, url: SITE },
      areaServed: ['Konyaaltı', 'Muratpaşa', 'Kepez', 'Lara', 'Antalya'].map((n) => ({ '@type': 'Place', name: n })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Terzi fiyat listesi 2026 (başlangıç fiyatları)',
        itemListElement: PRICES.flatMap((g) => g.rows.map(([name, price]) => ({
          '@type': 'Offer', priceCurrency: 'TRY', price: price.replace(/[^0-9]/g, ''),
          itemOffered: { '@type': 'Service', name },
        }))),
      },
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`,
      mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
};

export default function TerziFiyatlariPage() {
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
            <img src="/terzi-can-hero.jpg" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">₺ Şeffaf fiyat · Her gün 08:00–23:00 · Konyaaltı, Antalya</span>
            <h1 id="hero-h">Antalya Terzi Fiyatları 2026<br /><span className="accent">Fotoğrafı Gönderin, Fiyatı Öğrenin</span></h1>
            <p className="hero-desc" id="hero-desc">
              Paça kısaltma ₺150, bel daraltma ₺150, fermuar değişimi ₺200, elbise dikimi ₺600&apos;den.
              Elbise tadilatı, yırtık onarımı, özel dikim, adrese ve otele gelen terzi. İşin fotoğrafını
              WhatsApp&apos;tan gönderin, net fiyat ve süreyi öğrenin.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Fotoğraf Gönderin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="quick-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Sorununuz ne?</span>
              <h2 className="sec-h ff" id="quick-h">İhtiyacınıza Göre Hızlı Cevap</h2>
              <p className="sec-sub">Aradığınız işi seçin; fiyatı ve ilgili sayfayı görün.</p>
            </div>
            <div className="price-grid">
              {QUICK.map((x) => (
                <a key={x.q} href={x.href} className="price-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="price-head"><div><div className="price-tr">{x.q}</div></div></div>
                  <p className="price-desc">{x.a}</p>
                  <table className="price-table"><tbody><tr><td>{x.cta} →</td><td>{x.price}</td></tr></tbody></table>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Fiyat Listesi 2026</span>
              <h2 className="sec-h ff" id="price-h">Terzi Fiyat Listesi: Tamir, Tadilat, Dikim, Ütü</h2>
              <p className="sec-sub">Başlangıç fiyatlarıdır; kumaş ve işçiliğe göre netleşir. Fotoğraf gönderin, ücretsiz teklif alın.</p>
            </div>
            <div className="price-grid" id="dikim">
              {PRICES.map((cat) => (
                <article className="price-card" key={cat.title}>
                  <div className="price-head"><span className="price-icon" aria-hidden="true">{cat.icon}</span><div><h3 className="price-tr">{cat.title}</h3></div></div>
                  <table className="price-table"><tbody>
                    {cat.rows.map(([n, p]) => (<tr key={n}><td>{n}</td><td>{p}</td></tr>))}
                  </tbody></table>
                </article>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">📲 Fiyatı Sor</a>
            </div>
          </div>
        </section>

        <section className="sec" id="sss" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">Sık Sorulan Sorular</span>
              <h2 className="sec-h ff" id="faq-h">Antalya Terzi: Sorular ve Cevaplar</h2>
            </div>
            {FAQS.map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">İşinizin Fotoğrafını Gönderin</h2>
          <p className="cta-sub">Net fiyat ve süreyi WhatsApp&apos;tan öğrenin. Teklif ücretsizdir.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp&apos;tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Antalya Terzi Fiyatları · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer bağlantılar">
            <a href="/">Ana Sayfa</a>
            <a href="/antalya-terzi">Antalya Terzi</a>
            <a href="/otele-gelen-terzi-antalya">Otele Gelen Terzi</a>
            <a href="/anavera-tekstil">Anavera Tekstil (B2B)</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
