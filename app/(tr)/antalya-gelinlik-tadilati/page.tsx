import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import OrnekGorselSeridi from '@/components/OrnekGorselSeridi';
import { businessNode } from '@/lib/business';
import { fitKeywords } from '@/lib/meta-fit';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/antalya-gelinlik-tadilati`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, gelinlik tadilatı hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-10-04';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Gelinlik & Abiye Tadilatı Antalya — Prova ile" },
  description:
    'Antalya\'da gelinlik ve abiye tadilatı. Hassas daraltma, boy ayarı, detaylı onarım. ₺800\'den, randevulu ve özenli hizmet. Konyaaltı merkezli atölye.',
  keywords: fitKeywords([
    'gelinlik tadilatı Antalya', 'abiye tadilatı Antalya', 'gelinlik daraltma Antalya',
    'gelinlik boy ayarı Konyaaltı', 'düğün kıyafeti tadilatı', 'nişanlık tadilatı Antalya',
    'wedding dress alterations Antalya', 'подгонка свадебного платья Анталья',
  ]),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Gelinlik Tadilatı Antalya — Hassas Daraltma ve Boy Ayarı',
    description: 'Gelinlik ve abiye tadilatı. ₺800\'den başlayan fiyatlar. ☎ ' + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Gelinlik Tadilatı Antalya' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    businessNode(),
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Gelinlik Tadilatı Antalya — Hassas Daraltma ve Boy Ayarı',
      description: 'Antalya\'da gelinlik ve abiye tadilatı hizmeti.',
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
        { '@type': 'ListItem', position: 3, name: 'Gelinlik Tadilatı Antalya', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Gelinlik ve Abiye Tadilatı',
      provider: { '@id': `${SITE}#business` },
      areaServed: ['Konyaaltı', 'Muratpaşa', 'Kepez', 'Antalya', 'Lara', 'Belek'].map(n => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '800',
        highPrice: '900',
        offerCount: 4,
        offers: [
          { '@type': 'Offer', name: 'Gelinlik Bel Daraltma', price: '800', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Gelinlik Boy Ayarı', price: '800', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Abiye Tadilatı', price: '800', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Korse / Kapama Onarımı', price: '800', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: 'Antalya\'da Gelinlik Tadilatı Nasıl Yaptırılır?',
      description: 'Gelinlik veya abiye tadilatı için adım adım süreç.',
      totalTime: 'P2D',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'TRY', value: '400-900' },
      step: [
        { '@type': 'HowToStep', name: 'Randevu Alın', text: 'WhatsApp\'tan gelinlik/abiye fotoğrafı ve düğün tarihini paylaşarak randevu oluşturun.' },
        { '@type': 'HowToStep', name: 'İlk Prova', text: 'Atölyede ilk provada daraltılacak/kısaltılacak bölgeler işaretlenir.' },
        { '@type': 'HowToStep', name: 'Hassas Dikim', text: 'Kumaşa özel teknikle (dantel, tül, saten) hassas tadilat yapılır.' },
        { '@type': 'HowToStep', name: 'Son Prova & Teslim', text: 'Son kontrol provası yapılır, onay sonrası teslim edilir.' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Gelinlik tadilatı ne kadar sürede tamamlanır?', acceptedAnswer: { '@type': 'Answer', text: 'Basit boy ayarı normal tadilat gibi ertesi gün teslim edilir; kapsamlı bel daraltma ve korse onarımında süre işin kapsamına göre WhatsApp\'ta netleşir. Düğün tarihine göre öncelikli randevu ayarlanır.' } },
        { '@type': 'Question', name: 'Gelinlik tadilatı fiyatı ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Boy ayarı ₺800\'den, bel daraltma ₺800\'den, korse/kapama onarımı ₺800\'den başlar. Abiye tadilatı ₺800\'den başlar.' } },
        { '@type': 'Question', name: 'Dantel ve tül kumaşlarla çalışıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, dantel, tül, saten, organze gibi hassas gelinlik kumaşlarında uzman işçiliğimiz var. Desen bütünlüğü bozulmadan tadilat yapılır.' } },
        { '@type': 'Question', name: 'Son dakika gelinlik tadilatı yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: 'Düğününüze az kaldıysa bize hemen ulaşın, ekspres randevu için elimizden geleni yaparız. Erken randevu her zaman önerilir.' } },
      ],
    },
  ],
};

export default function GelinlikTadilatiPage() {
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
            <span className="hero-tag">💍 Hassas Tadilat · Randevulu Hizmet</span>
            <h1 id="hero-h">
              Gelinlik Tadilatı <span className="accent">Antalya</span><br />
              Özenli, Hassas, Zamanında
            </h1>
            <p className="hero-desc">
              Gelinlik ve abiye tadilatında bel daraltma, boy ayarı, korse onarımı.
              Dantel, tül, saten gibi hassas kumaşlarda uzman işçilik. ₺800'den
              başlayan fiyatlarla, randevulu çalışıyoruz.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Randevu Alın →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        {/* FİYATLAR */}
        <section className="sec" id="fiyatlar" aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Gelinlik & Abiye Tadilat Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Fiyat Listesi</h2>
              <p className="sec-sub">Her tadilat kumaş ve kapsamına göre değerlendirilir.</p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">💍</span>
                  <div><div className="price-tr">Gelinlik Tadilatı</div></div>
                </div>
                <p className="price-desc">Bel daraltma, boy ayarı, korse onarımı.</p>
                <table className="price-table"><tbody>
                  <tr><td>Boy Ayarı</td><td>₺800+</td></tr>
                  <tr><td>Bel Daraltma</td><td>₺800+</td></tr>
                  <tr><td>Korse / Kapama Onarımı</td><td>₺800+</td></tr>
                </tbody></table>
              </div>
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">✨</span>
                  <div><div className="price-tr">Abiye & Nişanlık</div></div>
                </div>
                <p className="price-desc">Özel gün kıyafetlerinde detaylı tadilat.</p>
                <table className="price-table"><tbody>
                  <tr><td>Abiye Tadilatı</td><td>₺800+</td></tr>
                  <tr><td>Nişanlık Daraltma</td><td>₺450+</td></tr>
                  <tr><td>Askı / Omuz Ayarı</td><td>₺250+</td></tr>
                </tbody></table>
              </div>
              <div className="price-card">
                <div className="price-head">
                  <span className="price-icon" aria-hidden="true">🧵</span>
                  <div><div className="price-tr">Hassas İşçilik</div></div>
                </div>
                <p className="price-desc">Dantel, tül, saten kumaşlarda özel dikiş.</p>
                <table className="price-table"><tbody>
                  <tr><td>Dantel Deseni Bütünlüğü Koruma</td><td>₺300+</td></tr>
                  <tr><td>Kuyruk Kısaltma</td><td>₺800+</td></tr>
                </tbody></table>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic' }}>
              * Fiyatlar başlangıç fiyatıdır, kumaş ve tadilat kapsamına göre netleşir. Ücretsiz ön değerlendirme.
            </p>
          </div>
        </section>

        {/* HOWTO */}
        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="howto-h">
          <div className="ctr" style={{ maxWidth: 680 }}>
            <div className="sec-head">
              <span className="eyebrow">Süreç</span>
              <h2 className="sec-h ff" id="howto-h">Gelinlik Tadilatı Nasıl Yaptırılır?</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item">
                <div className="howto-t">Randevu Alın</div>
                <div className="howto-d">WhatsApp'tan gelinlik/abiye fotoğrafı ve düğün tarihini paylaşarak randevu oluşturun.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">İlk Prova</div>
                <div className="howto-d">Atölyede ilk provada daraltılacak/kısaltılacak bölgeler işaretlenir.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Hassas Dikim</div>
                <div className="howto-d">Kumaşa özel teknikle (dantel, tül, saten) hassas tadilat yapılır.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Son Prova & Teslim</div>
                <div className="howto-d">Son kontrol provası yapılır, onay sonrası teslim edilir.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <OrnekGorselSeridi konu={['gelinlik','genel']} lang="tr" anahtarlar={['abiye-elbise-atolye', 'abiye-askida']} sayfaUrl="https://terzihizmeti.com.tr/antalya-gelinlik-tadilati" />

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Gelinlik Tadilatı Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ['Gelinlik tadilatı ne kadar sürede tamamlanır?', 'Basit boy ayarı normal tadilat gibi ertesi gün teslim edilir; kapsamlı bel daraltma ve korse onarımında süre işin kapsamına göre WhatsApp\'ta netleşir. Düğün tarihine göre öncelikli randevu ayarlanır.'],
              ['Gelinlik tadilatı fiyatı ne kadar?', 'Boy ayarı ₺800\'den, bel daraltma ₺800\'den, korse/kapama onarımı ₺800\'den başlar. Abiye tadilatı ₺800\'den başlar.'],
              ['Dantel ve tül kumaşlarla çalışıyor musunuz?', 'Evet, dantel, tül, saten, organze gibi hassas gelinlik kumaşlarında uzman işçiliğimiz var. Desen bütünlüğü bozulmadan tadilat yapılır.'],
              ['Son dakika gelinlik tadilatı yapıyor musunuz?', 'Düğününüze az kaldıysa bize hemen ulaşın, ekspres randevu için elimizden geleni yaparız. Erken randevu her zaman önerilir.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Büyük Gününüz İçin Mükemmel Fit</h2>
          <p className="cta-sub">Gelinlik veya abiyenizin fotoğrafını gönderin, randevunuzu alalım.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>

        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Gelinlik Tadilatı Antalya · {PHONE}</div>
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
