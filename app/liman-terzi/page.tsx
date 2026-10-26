import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { reviewSchema } from '@/lib/reviews';
import Image from 'next/image';
import { DISTRICT_BASE } from '@/lib/seo-data';

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/liman-terzi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, Liman mahallesine terzi servisi hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=5846987472659818117';
const TODAY     = '2026-10-04';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Liman Terzi · Paça ₺200, Fermuar ₺300 · Adrese Servis" },
  description:
    "Liman terzi: paça kısaltma ₺200, fermuar değişimi ₺300, bel daraltma, tamir tadilat. Liman'a ücretsiz servis. Her gün 08:00–23:00. ☎ " + PHONE,
  keywords: Array.from(new Set(['Liman tamir tadilat', 'Liman söküğü dikme', 'Liman yırtık tamiri', 'Liman elbise tamiri', 'Liman terzi', 'Liman mahallesi terzi', 'Liman Konyaaltı terzi', 'Liman paça kısaltma', 'Liman fermuar tamiri', 'Liman bel daraltma', 'Liman elbise dikimi', 'Liman gelinlik tadilatı', 'Liman ütü hizmeti', 'Liman kuru temizleme', 'Liman terzi fiyatları 2026', 'Konyaaltı Liman dikiş atölyesi', 'Liman fermuar değişimi', 'Liman fermuar değiştirme', 'Liman beden ayarlama', 'Liman beden ayarlaması', 'Liman beden küçültme', 'Liman beden büyütme', 'Liman pantolon daraltma', 'Liman pantolon kısaltma', 'Liman kot paçası kısaltma', 'Liman abiye tamiri', 'Liman mont fermuar değişimi', 'Liman ceket tadilatı', 'Liman gömlek daraltma', 'Liman etek daraltma', 'Liman şort kısaltma', 'Liman özel dikim', 'Liman bayan elbise dikimi', 'Liman yakınımda terzi', 'Konyaaltı Liman terzi tamir tadilat', 'Liman bay bayan elbise tamiri', 'Liman terzi', 'Liman bay bayan terzi', 'Liman dikim', 'Liman tamir tadilat', 'Liman elbise tamiri', 'Liman elbise tadilatı', 'Liman fermuar değişimi', 'Liman fermuar tamiri', 'Liman boy kısaltma', 'Liman bel daraltma', 'Liman etek boyu kısaltma', 'Liman pantolon boyu kısaltma', 'Liman paça kısaltma', 'Liman kot paçası kısaltma', 'Liman beden ölçüsüne göre elbise tadilatı', 'Liman mont tamiri', 'Liman ceket daraltma', 'Liman gömlek daraltma', 'Liman şort kısaltma', 'Liman pantolon daraltma', 'Liman etek daraltma', 'Liman elbise daraltma', 'Liman elbise dikimi'])) ,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL, languages: { tr: PAGE_URL, en: `${SITE}${DISTRICT_BASE.en}/liman`, ru: `${SITE}${DISTRICT_BASE.ru}/liman`, de: `${SITE}${DISTRICT_BASE.de}/liman`, 'x-default': PAGE_URL } },
  openGraph: {
    title: 'Liman Terzi · Paça, Fermuar, Beden Ayarı | Terzi Can',
    description: "Liman terzi: paça kısaltma ₺200'den, fermuar değişimi ₺300'den, beden ayarlama, bel daraltma, tamir tadilat. Adrese servis. 08:00–23:00. ☎ " + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Liman Terzi Konyaaltı' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ClothingStore'],
      ...reviewSchema(),
      additionalType: ['https://schema.org/SewingService', 'https://schema.org/DryCleaningService'],
      '@id': `${SITE}#business`,
      name: 'Terzi Can',
      alternateName: [
        'Terzi Can Antalya', 'Konyaaltı Terzi', 'Tailor Can Antalya',
        'Портной Кан Анталья', 'Schneider Can Antalya', 'Terzi Hizmeti Antalya', 'Dikiş Atölyesi Antalya',
      ],
      description: "Antalya Konyaaltı'da 2006'dan bu yana hizmet veren profesyonel terzi atölyesi. Paça kısaltma, fermuar değişimi, bel daraltma, özel dikim, gelinlik tadilatı, tekstil imalatı ve kuru temizleme. Hurma, Liman, Sarısu, Gürsu, Uncalı bölgelerine hizmet.",
      url: SITE,
      telephone: PHONE_TEL,
      priceRange: '₺₺',
      currenciesAccepted: 'TRY, EUR, USD, RUB',
      paymentAccepted: 'Cash, Credit Card',
      image: `${SITE}/terzi-can-hero.jpg`,
      logo: `${SITE}/terzi-can-hero.jpg`,
      hasMap: MAPS,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hurma Mahallesi',
        addressLocality: 'Konyaaltı',
        addressRegion: 'Antalya',
        postalCode: '07130',
        addressCountry: 'TR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 36.857466, longitude: 30.596987 },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00', closes: '23:00',
      }],
      areaServed: [
        'Liman, Konyaaltı', 'Hurma, Konyaaltı', 'Sarısu, Konyaaltı', 'Gürsu, Konyaaltı', 'Uncalı, Konyaaltı',
        'Konyaaltı', 'Muratpaşa', 'Kepez', 'Antalya', 'Lara', 'Belek', 'Kemer', 'Alanya', 'Manavgat',
      ].map((n) => ({ '@type': 'Place', name: n })),
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: PHONE_TEL,
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: ['Turkish', 'English', 'Russian', 'German'],
      }],
      sameAs: [MAPS, `https://wa.me/${WA_NUM}`, 'https://swaphubs.com/terzi'],
      knowsLanguage: ['tr', 'en', 'ru', 'de'],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Liman Terzi Konyaaltı — Dikim, Tamir, Tadilat, Ütü Hizmeti',
      description: 'Konyaaltı Liman mahallesine terzi hizmeti. Paça kısaltma, fermuar değişimi, bel daraltma, elbise dikimi, gelinlik tadilatı, ütü ve kuru temizleme.',
      inLanguage: 'tr',
      isPartOf: { '@id': `${SITE}#website` },
      about: { '@id': `${SITE}#business` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      dateModified: TODAY,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-h', '.hero-desc'] },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Antalya Terzi', item: `${SITE}/antalya-terzi` },
        { '@type': 'ListItem', position: 3, name: 'Liman Terzi', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Terzi, Dikim, Tamir, Tadilat, Ütü Hizmeti',
      provider: { '@id': `${SITE}#business` },
      areaServed: { '@type': 'Place', name: 'Liman, Konyaaltı, Antalya' },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TRY',
        lowPrice: '80',
        highPrice: '600',
        offerCount: 6,
        offers: [
          { '@type': 'Offer', name: 'Paça Kısaltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Fermuar Değişimi', price: '300', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Bel Daraltma', price: '200', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Elbise Dikimi', price: '800', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Gelinlik Tadilatı', price: '800', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
          { '@type': 'Offer', name: 'Ütü Hizmeti', price: '80', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: "Atölyeniz Liman'da mı?", acceptedAnswer: { '@type': 'Answer', text: 'Evet, atölyemiz Liman mahallesinde yer alıyor. Bu sayede Liman içindeki teslimatlar genellikle diğer mahallelere göre daha hızlı tamamlanır.' } },
        { '@type': 'Question', name: 'Liman terzi fiyatları ne kadar 2026?', acceptedAnswer: { '@type': 'Answer', text: `Paça kısaltma ₺200'den, fermuar değişimi ₺300'den, bel daraltma ₺200'den, elbise dikimi ₺800'den, gelinlik tadilatı ₺800'den, abiye tadilatı ₺800'den, ütü ₺80'den başlar. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Liman\'da aynı gün teslim mümkün mü?', acceptedAnswer: { '@type': 'Answer', text: 'Paça kısaltma, fermuar değişimi ve bel daraltma gibi standart işlemler genellikle aynı gün içinde tamamlanıp teslim edilir.' } },
        { '@type': 'Question', name: 'Gelinlik ve abiye tadilatı yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: `Evet, gelinlik ve abiye tadilatında uzmanız. Gelinlik tadilatı ₺800'den, abiye tadilatı ₺800'den başlar. ☎ ${PHONE}` } },
      ],
    },
  ],
};

const FIYATLAR: [string, string, string][] = [
  ['Paça Kısaltma', 'Pantolon, kot, etek — görünmez dikiş', '₺200+'],
  ['Fermuar Değişimi', 'Pantolon, mont, ceket fermuarı', '₺300+'],
  ['Bel Daraltma', 'Elbise, pantolon, ceket', '₺200+'],
  ['Elbise Dikimi', 'Kadın, erkek, çocuk özel dikim', '₺800+'],
  ['Gelinlik Tadilatı', 'Hassas daraltma, boy ayarı', '₺800+'],
  ['Ütü Hizmeti', 'Buharlı ütü, otel alım-teslim', '₺80+'],
];

export default function LimanPage() {
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
            <Image src="/terzi-can-hero.jpg" alt="Terzi Can — Liman mahallesi Konyaaltı terzi atölyesi" fill priority fetchPriority="high" sizes="100vw" className="hero-bg-img" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📍 Liman Mahallesi · Konyaaltı · Ücretsiz Servis</span>
            <h1 id="hero-h">
              Liman <span className="accent">Terzi</span><br />
              Paça Kısaltma, Bel Daraltma, Fermuar Değişimi
            </h1>
            <p className="hero-desc">
              Liman mahallesine terzi hizmeti. Paça kısaltma, fermuar değişimi,
              bel daraltma, özel dikim, gelinlik tadilatı, ütü ve kuru temizleme —
              ₺200'den başlayan fiyatlarla, aynı gün teslim.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 WhatsApp'tan Yazın →</a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="local-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Liman Mahallesi</span>
              <h2 className="sec-h ff" id="local-h">Liman'da Terzi İhtiyacınız İçin Buradayız</h2>
              <p className="sec-sub">
                Atölyemizin bulunduğu mahalle. Liman içindeki tüm sokaklara — sahil şeridi, iş yerleri ve site/apartman bölgeleri dahil — en hızlı ulaşım burada, çünkü atölyemiz Liman sınırları içinde.
              </p>
              <p className="sec-sub" style={{ marginTop: '.8rem' }}>Liman mahallesine ücretsiz adrese servis veriyoruz — atölyemiz burada olduğu için genellikle en hızlı teslimat bu bölgede.</p>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Liman Terzi Fiyatları 2026</span>
              <h2 className="sec-h ff" id="price-h">Fiyat Listesi</h2>
              <p className="sec-sub">Şeffaf, sabit başlangıç fiyatları.</p>
            </div>
            <div className="price-card" style={{ maxWidth: 620, margin: '0 auto' }}>
              <table className="price-table"><tbody>
                {FIYATLAR.map(([n, d, p]) => (
                  <tr key={n}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{n}</div>
                      <div style={{ fontSize: '.76rem', opacity: .65 }}>{d}</div>
                    </td>
                    <td style={{ fontWeight: 700 }}>{p}</td>
                  </tr>
                ))}
              </tbody></table>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1.4rem', fontStyle: 'italic', textAlign: 'center' }}>
              * Fiyatlar başlangıç fiyatıdır, kumaş türü ve işlem detayına göre değişebilir.
            </p>
          </div>
        </section>

        <section className="sec" aria-labelledby="svc-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">Hizmetler</span>
              <h2 className="sec-h ff" id="svc-h">Liman'da Sunduğumuz Terzi Hizmetleri</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item">
                <div className="howto-t">Paça Kısaltma & Bel Daraltma</div>
                <div className="howto-d">Pantolon, kot, etek kısaltma; elbise, ceket ve pantolonda bel daraltma. ₺200'den, aynı gün teslim.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Fermuar Değişimi</div>
                <div className="howto-d">Mont, ceket, pantolon fermuarı değişimi ve tamiri. ₺300'den.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Özel Dikim & Gelinlik Tadilatı</div>
                <div className="howto-d">Kadın, erkek, çocuk kıyafet dikimi; gelinlik ve abiye hassas tadilatı.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Ütü & Kuru Temizleme</div>
                <div className="howto-d">Buharlı ütü ve kuru temizleme, otel alım-teslimatı dahil.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Liman Terzi Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ["Atölyeniz Liman'da mı?", 'Evet, atölyemiz Liman mahallesinde yer alıyor. Bu sayede Liman içindeki teslimatlar genellikle diğer mahallelere göre daha hızlı tamamlanır.'],
              ['Liman terzi fiyatları ne kadar 2026?', 'Paça kısaltma ₺200\'den, fermuar değişimi ₺300\'den, bel daraltma ₺200\'den, elbise dikimi ₺800\'den, gelinlik tadilatı ₺800\'den, abiye tadilatı ₺800\'den, ütü ₺80\'den başlar.'],
              ['Liman\'da aynı gün teslim mümkün mü?', 'Paça kısaltma, fermuar değişimi ve bel daraltma gibi standart işlemler genellikle aynı gün içinde tamamlanıp teslim edilir.'],
              ['Gelinlik ve abiye tadilatı yapıyor musunuz?', 'Evet, gelinlik ve abiye tadilatında uzmanız. Gelinlik tadilatı ₺800\'den, abiye tadilatı ₺800\'den başlar.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Liman'da Terziye mi İhtiyacınız Var?</h2>
          <p className="cta-sub">Fotoğraf gönderin, adresinizden alalım, aynı gün teslim edelim.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Haritalar</a>
          </div>
        </section>


        {/* İÇ LİNKLEME: diğer mahalle sayfalarına — Google'ın mahalle
            kümesini bir bütün olarak keşfetmesi ve otoriteyi eşit dağıtması için */}
        <section className="sec" aria-labelledby="other-h" style={{ paddingTop: 0, paddingBottom: '2.5rem' }}>
          <div className="ctr" style={{ maxWidth: 720 }}>
            <h2 id="other-h" style={{ fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase', opacity: .55, marginBottom: '.9rem' }}>
              Diğer Mahallelerimiz
            </h2>
            <nav className="foot-links" aria-label="Diğer mahalle sayfaları">
              <a href="/hurma-terzi">Hurma Terzi</a>
              <a href="/sarisu-terzi">Sarısu Terzi</a>
              <a href="/uncali-terzi">Uncalı Terzi</a>
              <a href="/gursu-terzi">Gürsu Terzi</a>
            </nav>
          </div>
        </section>
        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Liman Terzi Konyaaltı · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer bağlantılar">
            <a href="/">Ana Sayfa</a>
            <a href="/antalya-terzi">Antalya Terzi</a>
            <a href="/antalya-uniforma-imalati">Üniforma İmalatı</a>
            <a href="/blog">Blog</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
