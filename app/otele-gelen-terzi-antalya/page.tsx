import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter, Syne } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter', display: 'swap' });
const syne  = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap' });

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/otele-gelen-terzi-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Hello, I need a VIP mobile tailor service for my hotel. / Merhaba, otelime terzi servisi istiyorum.');
const MAPS      = 'https://maps.app.goo.gl/QEgSkRoA8Nz8H62g8';
const BIZ       = 'TERZİ Can - VIP Mobile Tailor';
const TODAY     = new Date().toISOString().split('T')[0];
const OG        = `${SITE}/otel-terzi-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Otele Gelen Terzi — Belek, Lara, Kemer | VIP Tailor Service',
  description: "Antalya'da otellere ve adresinize gelen VIP terzi hizmeti. Belek, Lara, Kundu, Kemer bölgelerinde ölçü alma, ekspres tadilat ve teslimat. ☎ " + PHONE,
  keywords: [
    'otele gelen terzi Antalya', 'VIP tailor Antalya', 'mobile tailor Belek',
    'Lara otel terzi', 'Kemer terzi', 'Kundu terzi', 'Belek tailor service',
    'портной с выездом в отель Анталья', 'mobiler Schneider Antalya',
    'otel terzisi', 'ekspres terzi Antalya', 'adrese gelen terzi'
  ],
  authors: [{ name: BIZ, url: SITE }],
  creator: BIZ,
  publisher: 'Terzi Hizmeti',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'tr': PAGE_URL,
      'en': `${SITE}/en/hotel-tailor-antalya`,
      'ru': `${SITE}/ru/vyezdnoy-portnoy-antalya`,
      'de': `${SITE}/de/schneider-service-hotel-antalya`,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: 'VIP Mobile Tailor Service to Hotels in Antalya',
    description: 'Express tailoring service directly to your hotel room or lobby. Serving Belek, Lara, Kundu, and Kemer. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR',
    alternateLocale: ['en_US', 'ru_RU', 'de_DE'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'VIP Mobile Tailor Antalya', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Tailor for Hotels in Antalya',
    description: 'Express fitting and alteration service delivered to your hotel.',
    images: [OG],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': `${SITE}#vip-business`,
      name: 'Terzi Can - VIP Mobile Tailor',
      alternateName: ['Otele Gelen Terzi', 'Mobile Tailor Antalya', 'Портной в отель Анталья', 'Mobiler Schneider Antalya'],
      description: "Belek, Lara, Kundu, Kemer otellerine ekspres terzi ve kuru temizleme hizmeti. Lobi veya odada ölçü alımı.",
      url: SITE,
      telephone: PHONE_TEL,
      priceRange: '₺₺₺',
      currenciesAccepted: 'TRY, EUR, USD, RUB',
      paymentAccepted: 'Cash, Credit Card',
      image: OG,
      hasMap: MAPS,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Antalya',
        addressRegion: 'Antalya',
        addressCountry: 'TR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 36.8820, longitude: 30.6980 },
      areaServed: [
        'Belek, Antalya', 'Kadriye, Antalya', 'Lara, Antalya', 'Kundu, Antalya', 
        'Kemer, Antalya', 'Göynük, Antalya', 'Beldibi, Antalya', 'Serik, Antalya'
      ].map((n) => ({ '@type': 'Place', name: n })),
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: PHONE_TEL,
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: ['Turkish', 'English', 'Russian', 'German'],
      }],
      knowsLanguage: ['tr', 'en', 'ru', 'de'],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Otele Gelen Terzi — VIP Mobile Tailor',
      inLanguage: 'tr',
      isPartOf: { '@id': `${SITE}#website` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Otelin lobisine gelip ölçü alabiliyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, Belek, Lara, Kundu ve Kemer bölgelerindeki otellerin lobisinde veya resepsiyonunda ölçü alımı yapıyoruz.' } },
        { '@type': 'Question', name: 'Do you provide express alteration for tourists in hotels?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer same-day or next-day express alteration services for hotel guests in Antalya, Belek, and Lara.' } },
        { '@type': 'Question', name: 'Вы приезжаете в отели Белека и Кемера?', acceptedAnswer: { '@type': 'Answer', text: 'Да, мы предоставляем услуги портного с выездом в отели Белека, Кемера, Лары и Кунду. Экспресс-доставка.' } },
      ],
    }
  ],
};

interface HotelRegion {
  name: string;
  tag: string;
  desc: string;
}

const HOTEL_REGIONS: HotelRegion[] = [
  { name: 'Belek & Kadriye', tag: 'VIP Servis', desc: 'Maxx Royal, Regnum Carya, Rixos ve diğer tüm resort oteller.' },
  { name: 'Lara & Kundu', tag: 'Hızlı Servis', desc: 'Titanic, Concorde, Delphin ve Kundu oteller bölgesi.' },
  { name: 'Kemer Beli', tag: 'Randevulu', desc: 'Göynük, Beldibi, Tekirova, Kiriş otelleri.' },
  { name: 'Konyaaltı & Şehir Merkezi', tag: 'Öncelikli', desc: 'Şehir içi tüm oteller, Su Hotel, Rixos Downtown vb.' },
];

type Lang = 'tr' | 'en' | 'ru' | 'de';
const LANGS: Lang[] = ['tr', 'en', 'ru', 'de'];

interface LangLabel {
  name: string;
  flag: string;
  note: string;
}

const LANG_LABELS: Record<Lang, LangLabel> = {
  tr: { name: 'Türkçe', flag: '🇹🇷', note: 'Otel servis ücreti mesafeye göre değişebilir. KDV dahildir.' },
  en: { name: 'English', flag: '🇬🇧', note: 'Hotel service fee may vary by distance. VAT included.' },
  ru: { name: 'Русский', flag: '🇷🇺', note: 'Стоимость выезда зависит от расстояния. НДС включён.' },
  de: { name: 'Deutsch', flag: '🇩🇪', note: 'Die Anfahrtskosten können je nach Entfernung variieren. Inkl. MwSt.' },
};

interface VipCategory {
  icon: string;
  title: string;
  keyword: string;
  desc: string;
  rows: [string, string][];
}

const VIP_CATEGORIES: Record<Lang, VipCategory[]> = {
  tr: [
    { icon: '🚗', title: 'Otelde Ölçü & Teslimat', keyword: 'VIP terzi servisi Antalya',
      desc: 'Adresinizde veya otel lobisinde ölçü alma ve provaya gelme hizmeti.',
      rows: [['Otel Servis Ücreti (Konyaaltı/Merkez)', '₺300+'], ['Otel Servis Ücreti (Lara/Kundu)', '₺500+'], ['Otel Servis Ücreti (Belek/Kemer)', 'Sorunuz']] },
    { icon: '✂️', title: 'Ekspres Tadilat', keyword: 'acil terzi Antalya',
      desc: 'Tatiliniz sırasında ihtiyaç duyduğunuz acil onarımlar.',
      rows: [['Acil Paça Kısaltma', '₺250+'], ['Acil Yırtık Onarımı / Fermuar', '₺300+'], ['Abiye / Elbise Tadilatı', '₺600+']] },
  ],
  en: [
    { icon: '🚗', title: 'Hotel Fitting & Delivery', keyword: 'Mobile tailor Antalya',
      desc: 'We come to your hotel lobby or room for fitting and measurements.',
      rows: [['Call-out Fee (Konyaalti/Center)', '₺300+'], ['Call-out Fee (Lara/Kundu)', '₺500+'], ['Call-out Fee (Belek/Kemer)', 'Ask price']] },
    { icon: '✂️', title: 'Express Alterations', keyword: 'urgent tailor Antalya',
      desc: 'Urgent repairs and alterations you need during your holiday.',
      rows: [['Express Hemming', '₺250+'], ['Express Tear / Zipper Repair', '₺300+'], ['Evening Dress Alterations', '₺600+']] },
  ],
  ru: [
    { icon: '🚗', title: 'Выезд в отель и примерка', keyword: 'портной в отель Анталья',
      desc: 'Выезд в лобби отеля для снятия мерок и примерки.',
      rows: [['Выезд (Коньяалты/Центр)', '₺300+'], ['Выезд (Лара/Кунду)', '₺500+'], ['Выезд (Белек/Кемер)', 'По запросу']] },
    { icon: '✂️', title: 'Экспресс-ремонт', keyword: 'срочный портной Анталья',
      desc: 'Срочный ремонт и подгонка одежды во время вашего отдыха.',
      rows: [['Срочное укорачивание', '₺250+'], ['Срочный ремонт / Молния', '₺300+'], ['Подгонка вечернего платья', '₺600+']] },
  ],
  de: [
    { icon: '🚗', title: 'Anprobe & Lieferung im Hotel', keyword: 'mobiler Schneider Antalya',
      desc: 'Wir kommen in die Lobby oder aufs Zimmer Ihres Hotels für Maße und Anproben.',
      rows: [['Anfahrtskosten (Konyaalti/Zentrum)', '₺300+'], ['Anfahrtskosten (Lara/Kundu)', '₺500+'], ['Anfahrtskosten (Belek/Kemer)', 'Auf Anfrage']] },
    { icon: '✂️', title: 'Express-Änderungen', keyword: 'Notfall-Schneider Antalya',
      desc: 'Dringende Reparaturen und Änderungen während Ihres Urlaubs.',
      rows: [['Express-Kürzen', '₺250+'], ['Express-Riss / Reißverschluss', '₺300+'], ['Abendkleid-Änderungen', '₺600+']] },
  ],
};

const PROCESS_STEPS: [string, string, string][] = [
  ['01', 'Otel & Oda Bilgisi İletin', "WhatsApp üzerinden otel adınızı, konumunuzu ve yapılacak işlemi (görsel ile) gönderin."],
  ['02', 'Lobi Veya Odada Ölçü', 'VIP servis aracımızla belirlediğiniz saatte otelinize gelip profesyonel ölçü alıyoruz.'],
  ['03', 'Ekspres İşlem', 'Kıyafetiniz merkez atölyemize getirilir ve öncelikli (VIP) olarak işleme alınır.'],
  ['04', 'Otele Teslimat', 'Hazırlanan kıyafetleriniz özel kılıfında otel resepsiyonuna veya size teslim edilir.'],
];

export default function MobileTailorHotelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main-content" className="skip-link">İçeriğe geç</a>

      <div className={`${inter.variable} ${syne.variable}`} style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: 'var(--font-inter), system-ui, sans-serif', lineHeight: 1.6, minHeight: '100vh' }}>

        {/* NAVIGASYON */}
        <nav className="nav" aria-label="Ana site navigasyonu">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Ana Sayfa</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">
            WHATSAPP <span aria-hidden="true">→</span>
          </a>
        </nav>

        {/* HERO SECTION */}
        <header className="hero">
          <div className="hero-bg" aria-hidden="true">
            {/* VIP/Otel hizmetini yansıtacak bir görsel ismi kullanıldı */}
            <Image
              src="/otel-terzi-hero.jpg"
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center', filter: 'brightness(.30) saturate(.80)' }}
            />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">🌟 VIP Tailor Service for Hotels</span>
            <span className="hero-eng">Belek · Lara · Kundu · Kemer</span>
            <h1 id="hero-h">
              Otelinize Gelen <span className="accent">VIP Terzi</span><br />
              ve Tadilat Servisi
            </h1>
            <p className="hero-desc" id="hero-desc">
              Tatiliniz yarım kalmasın. Belek, Lara, Kundu ve Kemer otellerine VIP mobil terzi aracımızla gelerek ölçü alıyor, ekspres tadilat ve kuru temizleme sonrası kıyafetlerinizi tekrar otelinize teslim ediyoruz. (We speak English & Russian)
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#C9A96E', color: '#111' }}>
                <span aria-hidden="true">🚕</span> Otelime Terzi Çağır <span aria-hidden="true">→</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">
                <span aria-hidden="true">📞</span> {PHONE}
              </a>
            </div>
          </div>
        </header>

        <main id="main-content">
          <div className="seo-intro-wrap">
            <p className="seo-intro" id="seo-intro">
              <strong style={{ color: '#C9A96E' }}>VIP Mobile Tailor Antalya</strong> — Özellikle Belek golf otelleri, Lara-Kundu sahil otelleri ve Kemer tatil köylerindeki misafirler için sunduğumuz ayrıcalıklı <strong style={{ color: '#C9A96E' }}>Otele Gelen Terzi</strong> hizmetidir. Abiye daraltma, paça kısaltma, smokin ölçüsü alma gibi acil terzi ihtiyaçlarınızda, otelinizin lobisine veya odanıza gelerek işlemleri hızla başlatıyoruz.
            </p>
          </div>

          {/* OTEL BÖLGELERİ BÖLÜMÜ */}
          <section className="sec" aria-labelledby="nb-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">📍 Hizmet Bölgeleri</span>
                <h2 className="sec-h" id="nb-h">Hangi Otel Bölgelerine Geliyoruz?</h2>
                <p className="sec-sub">Mobil servis aracımızla Antalya'nın tüm turistik otel bölgelerine ulaşıyoruz.</p>
              </div>
              <ul className="nb-grid" aria-label="Hizmet verilen otel bölgeleri">
                {HOTEL_REGIONS.map((r: HotelRegion) => (
                  <li key={r.name} className="nb-card priority" style={{ border: '1px solid rgba(201,169,110,.3)' }}>
                    <div className="nb-top">
                      <span className="nb-name" style={{ color: '#C9A96E' }}>{r.name}</span>
                      <span className="nb-tag oncelikli" style={{ background: '#C9A96E', color: '#111' }}>{r.tag}</span>
                    </div>
                    <div className="nb-note" style={{ color: '#F5F1E8' }}>{r.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* SÜREÇ ADIMLARI */}
          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="proc-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">Süreç · Process · Процесс</span>
                <h2 className="sec-h" id="proc-h">Otel Terzisi Nasıl Çalışır?</h2>
              </div>
              <ol className="step-grid" aria-label="VIP hizmet süreci">
                {PROCESS_STEPS.map((step: [string, string, string]) => (
                  <li key={step[0]}>
                    <span className="step-n" aria-hidden="true" style={{ color: '#C9A96E' }}>{step[0]}</span>
                    <div className="step-t">{step[1]}</div>
                    <div className="step-d">{step[2]}</div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ÇOK DİLLİ FİYATLANDIRMA BÖLÜMÜ */}
          <section className="sec" id="fiyatlar" aria-labelledby="price-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">₺ VIP Hizmet Fiyatları · VIP Pricing</span>
                <h2 className="sec-h" id="price-h">Otel Servisi ve Ekspres Tadilat</h2>
                <p className="sec-sub">Hizmet fiyatları, otelinizin mesafesine ve işlemin aciliyetine göre belirlenir.</p>
              </div>

              {LANGS.map((lang: Lang) => (
                <div key={lang} style={{ marginBottom: lang !== 'de' ? '3rem' : 0 }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem', fontFamily: 'var(--font-syne)', fontSize: '1.05rem', fontWeight: 700, color: '#C9A96E' }}>
                    <span aria-hidden="true">{LANG_LABELS[lang].flag}</span>
                    {LANG_LABELS[lang].name}
                    <span style={{ flex: 1, height: 1, background: 'rgba(201,169,110,.15)' }} aria-hidden="true" />
                  </h3>
                  <div className="price-grid">
                    {VIP_CATEGORIES[lang].map((cat: VipCategory) => (
                      <article className="price-card" key={cat.title}>
                        <div className="price-head">
                          <span className="price-icon" aria-hidden="true">{cat.icon}</span>
                          <div><h4 className="price-tr">{cat.title}</h4><span className="price-kw">{cat.keyword}</span></div>
                        </div>
                        <p className="price-desc">{cat.desc}</p>
                        <table className="price-table" aria-label={`${cat.title} — ${LANG_LABELS[lang].name}`}>
                          <caption className="visually-hidden">{cat.title} fiyat listesi</caption>
                          <thead>
                            <tr>
                              <th scope="col" className="visually-hidden">Hizmet</th>
                              <th scope="col" className="visually-hidden">Fiyat</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cat.rows.map((row: [string, string]) => (<tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td></tr>))}
                          </tbody>
                        </table>
                      </article>
                    ))}
                  </div>
                  <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1rem', fontStyle: 'italic' }}>{LANG_LABELS[lang].note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SSS / FAQ */}
          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="faq" aria-labelledby="faq-h">
            <div className="ctr" style={{ maxWidth: 740 }}>
              <div className="sec-head">
                <span className="eyebrow">SSS / FAQ</span>
                <h2 className="sec-h" id="faq-h">Sıkça Sorulan Sorular</h2>
              </div>
              <details className="faq-item">
                <summary className="faq-q">Do you speak English or Russian?</summary>
                <p className="faq-a">Yes, we provide our tailoring and booking services in English, Russian, and German. You can safely communicate with us via WhatsApp.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">Otelin içine girebiliyor musunuz? Lobide ölçü alınır mı?</summary>
                <p className="faq-a">Otel güvenliği ile mutabık kalınması şartıyla lobiye veya resepsiyona kadar gelip ölçünüzü alabiliriz. Odaya çıkış kuralları otelinize bağlıdır.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">Kıyafetlerimi ne zaman teslim edersiniz? (Express service?)</summary>
                <p className="faq-a">Paça kısaltma, yırtık onarımı gibi basit tadilatlar için ekspres servis (aynı gün) seçeneğimiz vardır. İhtiyacınıza göre WhatsApp'tan süre teyidi alabilirsiniz.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">Sadece tadilat mı yoksa sıfırdan ölçüye göre dikim yapıyor musunuz?</summary>
                <p className="faq-a">Tadilat (Alterations) hizmetlerinin yanı sıra, eğer Antalya tatiliniz süresince özel tasarım takım elbise veya abiye istiyorsanız sıfırdan dikim (Bespoke Tailoring) hizmetimiz de mevcuttur.</p>
              </details>
            </div>
          </section>
        </main>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h">Send Your Location, We Will Come</h2>
          <p className="cta-sub">Tatilinizde zaman kaybetmeyin. İhtiyacınızı WhatsApp'tan yazın.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white" style={{ background: '#C9A96E', color: '#111', border: 'none' }}>
              <span aria-hidden="true">💬</span> Contact via WhatsApp
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn-outline-white">
              <span aria-hidden="true">📞</span> Call Now
            </a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · VIP Mobile Tailor Service · {PHONE}</div>
          <nav className="foot-links" aria-label="Alt bilgi bağlantıları">
            <a href="/">Ana Sayfa</a>
            <a href="/antalya-terzi">Konyaaltı Terzi Atölyesi</a>
            <a href="/en/hotel-tailor-antalya">English</a>
            <a href="/ru/vyezdnoy-portnoy-antalya">Русский</a>
            <a href="/de/schneider-service-hotel-antalya">Deutsch</a>
            <a href="https://swaphubs.com/terzi">SwapHubs Profilimiz</a>
          </nav>
          <p style={{ marginTop: '1rem', fontSize: '.68rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.8 }}>
            VIP Mobile Tailor Antalya — Belek, Lara, Kundu, Kemer, Göynük, Beldibi ve şehir içi otellere özel terzi servisi. 
            Otele gelen terzi, ekspres tadilat, takım elbise daraltma, abiye onarımı ve kişiye özel dikim hizmetleri. {PHONE}
          </p>
        </footer>
      </div>
    </>
  );
}
