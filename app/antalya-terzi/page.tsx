import type { Metadata } from 'next';

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
// ✅ DÜZELTME: www eklendi — Yandex doğrulaması www ile yapıldı, ana sayfayla tutarlı olmalı
const SITE      = 'https://www.terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/antalya-terzi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, Antalya genelinde terzi hizmeti hakkında bilgi almak istiyorum.');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const BIZ       = 'Konyaaltı Terzi - Terzi Dikim Tamir Tadilat';
const TODAY     = new Date().toISOString().split('T')[0];
const OG        = `${SITE}/terzi-can-hero.png`;

// ─── METADATA — ana sayfadan bilinçli olarak farklı ───────────────────────────
// Ana sayfa (/) marka + Konyaaltı merkezli genel hizmeti hedefliyor.
// Bu sayfa (/antalya-terzi) "Antalya" şehir genelinde arama yapan, henüz
// hangi mahallede olduğunu belirtmemiş kullanıcıyı hedefliyor — farklı intent,
// farklı title, farklı H1, farklı içerik yapısı (ilçe/bölge listesi merkezli).
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Antalya Terzi — Tüm İlçelere Hizmet Veren Terzi Atölyesi | Terzi Can',
  description:
    'Antalya genelinde terzi arıyorsanız Terzi Can\'a ulaşın. Konyaaltı, Muratpaşa, Kepez, Lara, Alanya, Manavgat dahil tüm Antalya\'ya adrese gelen terzi servisi, kargo ile kıyafet kabul, kuru temizleme ve dikim. ☎ ' + PHONE,
  keywords: [
    'Antalya terzi', 'Antalya terzi hizmeti', 'Antalya genelinde terzi',
    'Antalya dikim atölyesi', 'Antalya kıyafet tadilat', 'Antalya paça kısaltma',
    'Muratpaşa terzi', 'Kepez terzi', 'Lara terzi', 'Alanya terzi', 'Manavgat terzi',
    'Döşemealtı terzi', 'Aksu terzi', 'Serik terzi', 'Kaş terzi', 'Kemer terzi',
    'Antalya\'ya kargo ile terzi', 'Antalya kıyafet kargo tadilat',
    'Antalya terzi fiyatları 2026', 'en iyi terzi Antalya',
    'Antalya gelinlik tadilatı', 'Antalya üniforma üretimi',
    'tailor all Antalya', 'портной по всей Анталии',
  ],
  authors: [{ name: BIZ, url: SITE }],
  creator: BIZ,
  publisher: 'SwapHubs',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Antalya Terzi — Tüm İlçelere Hizmet | Terzi Can',
    description: 'Konyaaltı, Muratpaşa, Kepez, Lara, Alanya, Manavgat dahil tüm Antalya\'ya terzi hizmeti. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR',
    type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Terzi Can — Antalya Geneli Terzi Hizmeti', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya Terzi — Tüm İlçelere Hizmet | Terzi Can',
    description: 'Antalya genelinde terzi, dikim, tadilat, kuru temizleme hizmeti. ☎ ' + PHONE,
    images: [OG],
  },
  other: {
    'geo.region': 'TR-07', 'geo.placename': 'Antalya',
    'geo.position': '36.8969;30.7133', 'ICBM': '36.8969, 30.7133',
    'contact': PHONE,
  },
  verification: {
    google: 'W2S_Gr49EgkgWG7xAWWMc5qPW6Cw3wEnOi6O6UC9zkQ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Antalya Terzi — Tüm İlçelere Hizmet Veren Terzi Atölyesi',
      description: 'Antalya genelinde (Konyaaltı, Muratpaşa, Kepez, Lara, Alanya, Manavgat dahil) terzi, dikim, tadilat ve kuru temizleme hizmeti.',
      inLanguage: 'tr',
      isPartOf: { '@id': `${SITE}#website` },
      about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      datePublished: '2025-01-01',
      dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Antalya Terzi', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Terzi ve Kıyafet Tadilat Hizmeti',
      provider: { '@id': `${SITE}#business` },
      areaServed: [
        'Konyaaltı', 'Muratpaşa', 'Kepez', 'Döşemealtı', 'Aksu', 'Serik',
        'Lara', 'Kundu', 'Alanya', 'Manavgat', 'Side', 'Kemer', 'Kaş', 'Finike',
      ].map(n => ({ '@type': 'Place', name: n })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Antalya Geneli Terzi Hizmetleri',
        itemListElement: [
          { '@type': 'Offer', name: 'Kargo ile Kıyafet Kabul', itemOffered: { '@type': 'Service', name: 'Antalya dışı ilçelerden kargo ile kıyafet kabul ve tadilat', description: 'Konyaaltı dışındaki ilçelerden kargo ile gönderilen kıyafetlerde tadilat, dikim ve iade kargo.' } },
          { '@type': 'Offer', name: 'İlçe Bazlı Randevulu Servis', itemOffered: { '@type': 'Service', name: 'Belirli günlerde Alanya, Manavgat, Kemer bölgesine randevulu terzi servisi', description: 'Haftanın belirli günlerinde uzak ilçelere planlı alım-teslim hizmeti.' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Sadece Konyaaltı\'da mı hizmet veriyorsunuz, yoksa tüm Antalya\'ya mı?', acceptedAnswer: { '@type': 'Answer', text: `Atölyemiz Konyaaltı'da ancak Antalya'nın tüm ilçelerine hizmet veriyoruz. Muratpaşa, Kepez, Lara, Alanya, Manavgat gibi bölgelere kargo veya randevulu servisle ulaşıyoruz. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Alanya veya Manavgat\'tan kargo ile kıyafet gönderebilir miyim?', acceptedAnswer: { '@type': 'Answer', text: 'Evet. Kıyafetinizi bize kargo ile gönderin, tadilat/dikim sonrası aynı gün kargoya verip size ulaştırıyoruz. WhatsApp\'tan detay alabilirsiniz.' } },
        { '@type': 'Question', name: 'Antalya\'nın hangi ilçelerine adrese gelen terzi servisi var?', acceptedAnswer: { '@type': 'Answer', text: 'Hurma, Liman ve Sarısu\'ya ücretsiz; Konyaaltı\'nın diğer mahallelerine ve Muratpaşa, Kepez gibi yakın ilçelere randevulu servis sağlıyoruz. Uzak ilçeler için kargo öneriyoruz.' } },
        { '@type': 'Question', name: 'Antalya genelinde terzi fiyatları farklı mı?', acceptedAnswer: { '@type': 'Answer', text: 'Fiyatlarımız Antalya\'nın her yerinden gelen siparişler için aynıdır — sadece kargo veya uzak bölge servis ücreti eklenebilir. Güncel fiyat listesi için WhatsApp\'tan yazın.' } },
      ],
    },
  ],
};

const DISTRICTS = [
  { name: 'Konyaaltı', note: 'Atölye burada — aynı gün servis', tag: 'Merkez' },
  { name: 'Muratpaşa', note: 'Randevulu adrese gelen servis', tag: 'Yakın' },
  { name: 'Kepez', note: 'Randevulu adrese gelen servis', tag: 'Yakın' },
  { name: 'Döşemealtı', note: 'Randevulu servis, 1 gün önceden haber verin', tag: 'Yakın' },
  { name: 'Aksu / Kundu / Lara', note: 'Otel bölgesi — randevulu servis', tag: 'Turizm' },
  { name: 'Serik', note: 'Haftalık planlı servis günleri', tag: 'Uzak' },
  { name: 'Alanya', note: 'Kargo ile kabul veya haftalık servis', tag: 'Uzak' },
  { name: 'Manavgat / Side', note: 'Kargo ile kabul veya haftalık servis', tag: 'Uzak' },
  { name: 'Kemer', note: 'Kargo ile kabul öneriyoruz', tag: 'Uzak' },
  { name: 'Kaş / Finike', note: 'Sadece kargo ile kabul', tag: 'Çok Uzak' },
];

const STEPS = [
  ['01', 'Konumunuzu Söyleyin', 'WhatsApp\'tan hangi ilçede olduğunuzu ve ihtiyacınızı belirtin.'],
  ['02', 'Yöntem Belirlenir', 'Konyaaltı yakınıysa adrese servis, uzaksa kargo ile gönderim önerilir.'],
  ['03', 'Dikim & Tadilat', 'Kıyafetiniz atölyede işlenir, gerekiyorsa fotoğrafla onayınız alınır.'],
  ['04', 'Teslim veya Kargo', 'Yakın ilçelere adrese teslim, uzak ilçelere kargo ile gönderilir.'],
];

export default function AntalyaTerziPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ✅ DÜZELTME: Tüm turuncu (#FF4D00) tema, ana sayfadaki yeşil/altın/krem
          markasıyla eşleşecek şekilde değiştirildi. İki sayfa artık aynı marka
          kimliğini taşıyor — bu hem kullanıcı güvenini hem de marka tutarlılığını
          güçlendirir (tutarsız renk teması ziyaretçide "acaba doğru siteye mi
          geldim" tereddüdü yaratabilir). */}
      <div style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", lineHeight: 1.6, minHeight: '100vh' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Syne:wght@700;800&display=swap');
          *{box-sizing:border-box;margin:0;padding:0}
          .ff{font-family:'Syne',sans-serif}
          a{color:inherit;text-decoration:none}

          .nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:rgba(30,51,41,.94);backdrop-filter:blur(12px);border-bottom:1px solid rgba(201,169,110,.15)}
          .nav-logo{font-family:'Syne',sans-serif;font-size:1rem;font-weight:800;color:#fff;letter-spacing:.04em;display:flex;align-items:center;gap:8px}
          .nav-dot{width:8px;height:8px;border-radius:50%;background:#C9A96E}
          .nav-wa{display:inline-flex;align-items:center;gap:8px;background:#C9A96E;color:#1E3329;font-weight:800;font-size:.8rem;padding:9px 16px;border-radius:4px}
          .nav-home{font-size:.78rem;color:rgba(255,255,255,.55)}

          .hero{padding:8rem 1.5rem 3.5rem;position:relative;overflow:hidden;background:linear-gradient(160deg,#1E3329 0%,#2C4A3E 100%)}
          .hero-bg{position:absolute;inset:0;z-index:0}
          .hero-bg-img{width:100%;height:100%;object-fit:cover;object-position:center 15%;filter:brightness(.35) saturate(.75)}
          .hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(30,51,41,.92) 0%,rgba(30,51,41,.7) 55%,rgba(30,51,41,.35) 100%)}
          .hero-content{position:relative;z-index:2;max-width:900px;margin:0 auto}
          .hero-tag{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(201,169,110,.5);color:#C9A96E;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;font-weight:700;padding:6px 14px;border-radius:2px;margin-bottom:1.6rem}
          .hero h1{font-family:'Syne',sans-serif;font-size:clamp(2.2rem,7vw,4.4rem);font-weight:800;line-height:1.05;letter-spacing:-.02em;margin-bottom:1.1rem}
          .hero h1 .accent{color:#C9A96E}
          .hero-desc{font-size:1rem;color:rgba(255,255,255,.7);max-width:640px;line-height:1.75;margin-bottom:1.8rem}
          .hero-btns{display:flex;gap:12px;flex-wrap:wrap}
          .btn-primary{display:inline-flex;align-items:center;gap:10px;background:#C9A96E;color:#1E3329;font-weight:800;font-size:.88rem;padding:13px 22px;border-radius:4px;transition:all .2s}
          .btn-primary:hover{background:#B8955A;transform:translateY(-2px)}
          .btn-secondary{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);color:#fff;font-weight:600;font-size:.88rem;padding:13px 20px;border-radius:4px;border:1px solid rgba(255,255,255,.15)}

          .sec{padding:4rem 1.5rem}
          .ctr{max-width:980px;margin:0 auto}
          .eyebrow{font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#C9A96E;font-weight:700;display:block;margin-bottom:.7rem}
          .sec-h{font-family:'Syne',sans-serif;font-size:clamp(1.6rem,3.6vw,2.4rem);font-weight:800;line-height:1.15;margin-bottom:.5rem;color:#fff}
          .sec-sub{font-size:.88rem;color:rgba(255,255,255,.55);max-width:560px;line-height:1.7}
          .sec-head{margin-bottom:2.2rem}

          .dist-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px}
          .dist-card{background:rgba(255,255,255,.04);border:1px solid rgba(201,169,110,.12);border-radius:6px;padding:16px 18px;transition:border-color .2s}
          .dist-card:hover{border-color:rgba(201,169,110,.35)}
          .dist-name{font-size:.98rem;font-weight:700;color:#fff;display:flex;align-items:center;gap:8px;margin-bottom:.35rem}
          .dist-tag{font-size:.6rem;text-transform:uppercase;letter-spacing:.08em;font-weight:700;padding:2px 8px;border-radius:20px}
          .dist-tag.merkez{background:rgba(201,169,110,.18);color:#C9A96E}
          .dist-tag.yakin{background:rgba(143,168,140,.18);color:#8FA88C}
          .dist-tag.turizm{background:rgba(212,175,55,.18);color:#D4AF37}
          .dist-tag.uzak{background:rgba(200,150,120,.18);color:#C89678}
          .dist-tag.cokuzak{background:rgba(255,255,255,.12);color:rgba(255,255,255,.7)}
          .dist-note{font-size:.78rem;color:rgba(255,255,255,.5);line-height:1.5}

          .step-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.8rem}
          .step-n{font-family:'Syne',sans-serif;font-size:2rem;font-weight:800;color:rgba(201,169,110,.2);line-height:1;margin-bottom:.4rem}
          .step-t{font-weight:700;font-size:.92rem;color:#fff;margin-bottom:.4rem}
          .step-d{font-size:.8rem;color:rgba(255,255,255,.55);line-height:1.6}

          .faq-item{border-bottom:1px solid rgba(201,169,110,.12);padding:1.1rem 0}
          .faq-q{font-weight:700;font-size:.9rem;color:#fff;margin-bottom:.4rem}
          .faq-a{font-size:.8rem;color:rgba(255,255,255,.55);line-height:1.6}

          .cta-final{background:linear-gradient(135deg,#2C4A3E 0%,#1E3329 100%);color:#fff;padding:3.5rem 1.5rem;text-align:center;border-top:1px solid rgba(201,169,110,.15)}
          .cta-h{font-family:'Syne',sans-serif;font-size:clamp(1.5rem,3.4vw,2.2rem);font-weight:800;margin-bottom:.6rem}
          .cta-sub{font-size:.9rem;color:rgba(255,255,255,.75);margin-bottom:1.6rem}
          .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
          .btn-white{display:inline-flex;align-items:center;gap:10px;background:#C9A96E;color:#1E3329;font-weight:800;font-size:.88rem;padding:13px 22px;border-radius:4px;transition:all .2s}
          .btn-white:hover{background:#B8955A;transform:translateY(-2px)}
          .btn-outline-white{display:inline-flex;align-items:center;gap:10px;background:transparent;color:#fff;font-weight:700;font-size:.88rem;padding:13px 22px;border-radius:4px;border:2px solid rgba(255,255,255,.4)}

          footer{background:#152720;border-top:1px solid rgba(201,169,110,.12);padding:1.8rem 1.5rem;text-align:center;font-size:.72rem;color:rgba(255,255,255,.4)}
          .foot-links{display:flex;justify-content:center;gap:1.1rem;flex-wrap:wrap;margin-top:.6rem}
          .foot-links a{color:rgba(255,255,255,.4);transition:color .2s}
          .foot-links a:hover{color:#C9A96E}

          .float{position:fixed;bottom:20px;right:16px;z-index:99;display:flex;flex-direction:column;gap:10px}
          .fbtn{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem;box-shadow:0 4px 14px rgba(0,0,0,.4);transition:transform .2s}
          .fbtn:hover{transform:scale(1.1)}
          .fbtn-call{background:#2C4A3E;color:#fff;border:1px solid rgba(201,169,110,.3)}
          .fbtn-wa{background:#25D366;color:#fff}
        `}</style>

        <div className="float">
          <a href={`tel:${PHONE_TEL}`} className="fbtn fbtn-call" aria-label="Ara">📞</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="fbtn fbtn-wa" aria-label="WhatsApp">💬</a>
        </div>

        <nav className="nav" aria-label="Ana navigasyon">
          <div className="nav-logo">
            <span className="nav-dot" aria-hidden="true" />
            TERZİ CAN
          </div>
          <a href="/" className="nav-home">← Ana Sayfa</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP →</a>
        </nav>

        {/* HERO — şehir geneli mesaj, ana sayfadaki markadan farklı odak */}
        <section className="hero" aria-labelledby="hero-h">
          <div className="hero-bg" aria-hidden="true">
            <img src="/terzi-can-hero.png" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A96E', display: 'inline-block' }} />
              Antalya'nın Her İlçesine Hizmet
            </span>
            <h1 id="hero-h">
              Antalya'nın Neresinde<br />
              Olursanız Olun, <span className="accent">Terziniz Yanınızda</span>
            </h1>
            <p className="hero-desc" id="hero-desc">
              <strong>Terzi Can</strong>, Konyaaltı'daki atölyesinden Antalya'nın tüm ilçelerine hizmet veriyor.
              Muratpaşa, Kepez ve Lara'ya randevulu adrese servis; Alanya, Manavgat, Kemer ve daha uzak
              bölgelere kargo ile kıyafet kabul ediyoruz. Nerede olursanız olun, dikim, tadilat ve
              kuru temizleme ihtiyacınızı karşılıyoruz.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Bölgenizi Söyleyin →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        {/* İLÇE LİSTESİ — bu sayfaya özgü, ana sayfada yok */}
        <section className="sec" style={{ background: '#0a0a0a' }} aria-labelledby="dist-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">📍 HİZMET BÖLGELERİ</span>
              <h2 className="sec-h ff" id="dist-h">Antalya İlçelerine Göre Hizmet Şekli</h2>
              <p className="sec-sub">Bulunduğunuz ilçeye göre en hızlı ve uygun yöntemi öneriyoruz.</p>
            </div>
            <div className="dist-grid">
              {DISTRICTS.map(d => {
                const tagClass = d.tag === 'Merkez' ? 'merkez' : d.tag === 'Yakın' ? 'yakin' : d.tag === 'Turizm' ? 'turizm' : d.tag === 'Uzak' ? 'uzak' : 'cokuzak';
                return (
                  <div className="dist-card" key={d.name}>
                    <div className="dist-name">
                      {d.name}
                      <span className={`dist-tag ${tagClass}`}>{d.tag}</span>
                    </div>
                    <div className="dist-note">{d.note}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SÜREÇ — bölge bazlı, ana sayfadan farklı akış */}
        <section className="sec" style={{ background: '#111111' }} aria-labelledby="proc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">SÜREÇ</span>
              <h2 className="sec-h ff" id="proc-h">Uzak İlçeden de Terzi Hizmeti Alın</h2>
            </div>
            <div className="step-grid">
              {STEPS.map(([n, t, d]) => (
                <div key={n}>
                  <div className="step-n">{n}</div>
                  <div className="step-t">{t}</div>
                  <div className="step-d">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — bölge/kargo odaklı sorular, ana sayfadan tamamen farklı */}
        <section className="sec" style={{ background: '#0a0a0a' }} id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Antalya Geneli Hizmet Hakkında Sorular</h2>
            </div>
            {[
              ['Sadece Konyaaltı\'da mı hizmet veriyorsunuz?', 'Hayır, atölyemiz Konyaaltı\'da ancak Antalya\'nın tüm ilçelerine — Muratpaşa, Kepez, Lara, Alanya, Manavgat dahil — hizmet veriyoruz.'],
              ['Alanya veya Manavgat\'tan kargo ile gönderebilir miyim?', 'Evet. Kıyafetinizi kargoyla gönderin, tadilat sonrası aynı gün size geri kargolarız.'],
              ['Hangi ilçelere adrese gelen servis var?', 'Hurma, Liman, Sarısu\'ya ücretsiz; Muratpaşa, Kepez, Lara\'ya randevulu servis sağlıyoruz.'],
              ['Uzak ilçelerde fiyat farklı mı?', 'Hizmet fiyatı aynıdır, sadece kargo veya uzak bölge servis ücreti eklenebilir.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Antalya'nın Her Yerinden<br />Terzi Can'a Ulaşabilirsiniz</h2>
          <p className="cta-sub">Bölgenizi WhatsApp'tan söyleyin, size en uygun yöntemi önerelim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Antalya Geneli Hizmet · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer bağlantılar">
            <a href="/">Ana Sayfa — Konyaaltı Atölyesi</a>
            <a href="https://swaphubs.com/terzi">SwapHubs Terzi</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
          <p style={{ marginTop: '1rem', fontSize: '.62rem', color: 'rgba(255,255,255,.1)', lineHeight: 1.8 }}>
            Terzi Can — Antalya geneli terzi hizmeti. Konyaaltı, Muratpaşa, Kepez, Döşemealtı, Aksu, Serik,
            Lara, Alanya, Manavgat, Kemer, Kaş, Finike ilçelerine dikim, tadilat, kuru temizleme. {PHONE}
          </p>
        </footer>
      </div>
    </>
  );
}
