import type { Metadata } from 'next';
import ReviewsBlock from '@/components/ReviewsBlock';
import { businessNode } from '@/lib/business';
import Image from 'next/image';
import { DISTRICT_BASE } from '@/lib/seo-data';
import { fitDesc, fitKeywords } from '@/lib/meta-fit';

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/uncali-terzi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, Uncalı mahallesine terzi servisi hakkında bilgi almak istiyorum.');
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-10-04';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Uncalı Terzi · Paça ₺200, Abiye Tadilatı ₺800'den" },
  description:
    fitDesc("Uncalı terzi: paça ₺200, abiye ve elbise tadilatı ₺800'den, etek kısaltma, daraltma, özel dikim. Uncalı'ya ücretsiz servis. 08:00–23:00. ☎ " + PHONE),
  keywords: fitKeywords(Array.from(new Set(['Uncalı tamir tadilat', 'Uncalı söküğü dikme', 'Uncalı yırtık tamiri', 'Uncalı elbise tamiri', 'Uncalı terzi', 'Uncalı mahallesi terzi', 'Uncalı Konyaaltı terzi', 'Uncalı paça kısaltma', 'Uncalı fermuar tamiri', 'Uncalı bel daraltma', 'Uncalı elbise dikimi', 'Uncalı gelinlik tadilatı', 'Uncalı terzi fiyatları 2026', 'Konyaaltı Uncalı dikiş atölyesi', 'Uncalı abiye tamiri', 'Uncalı abiye tadilatı', 'Uncalı abiye daraltma', 'Uncalı abiye kısaltma', 'Uncalı abiye fermuar değişimi', 'Uncalı abiye özel dikim', 'Uncalı elbise daraltma', 'Uncalı elbise kısaltma', 'Uncalı ölçüye göre özel dikim', 'Uncalı bayan elbise dikimi', 'Uncalı etek kısaltma', 'Uncalı etek daraltma', 'Uncalı beden ayarlama', 'Uncalı fermuar değişimi', 'Uncalı kot paçası kısaltma', 'Uncalı pantolon kısaltma', 'Uncalı şort kısaltma', 'Uncalı ceket tadilatı', 'Uncalı gömlek daraltma', 'Uncalı yakınımda terzi', 'Konyaaltı Uncalı terzi tamir tadilat', 'Uncalı bay bayan elbise tamiri', 'Uncalı terzi', 'Uncalı bay bayan terzi', 'Uncalı dikim', 'Uncalı tamir tadilat', 'Uncalı elbise tamiri', 'Uncalı elbise tadilatı', 'Uncalı fermuar değişimi', 'Uncalı fermuar tamiri', 'Uncalı boy kısaltma', 'Uncalı bel daraltma', 'Uncalı etek boyu kısaltma', 'Uncalı pantolon boyu kısaltma', 'Uncalı paça kısaltma', 'Uncalı kot paçası kısaltma', 'Uncalı beden ölçüsüne göre elbise tadilatı', 'Uncalı mont tamiri', 'Uncalı ceket daraltma', 'Uncalı gömlek daraltma', 'Uncalı şort kısaltma', 'Uncalı pantolon daraltma', 'Uncalı etek daraltma', 'Uncalı elbise daraltma', 'Uncalı elbise dikimi']))),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: PAGE_URL, languages: { tr: PAGE_URL, en: `${SITE}${DISTRICT_BASE.en}/uncali`, ru: `${SITE}${DISTRICT_BASE.ru}/uncali`, de: `${SITE}${DISTRICT_BASE.de}/uncali`, 'x-default': PAGE_URL } },
  openGraph: {
    title: 'Uncalı Terzi · Abiye, Etek, Elbise Tadilat | Terzi Can',
    description: "Uncalı terzi: abiye tamiri, tadilatı, etek ve elbise kısaltma, daraltma, özel dikim. Abiye ₺800'den, paça ₺200'den. 08:00–23:00. ☎ " + PHONE,
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Uncalı Terzi Konyaaltı' }],
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
      name: 'Uncalı Terzi Konyaaltı — Dikim, Tamir, Tadilat',
      description: 'Konyaaltı Uncalı mahallesine terzi hizmeti. Paça kısaltma, fermuar değişimi, bel daraltma, elbise dikimi, gelinlik tadilatı.',
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
        { '@type': 'ListItem', position: 3, name: 'Uncalı Terzi', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      serviceType: 'Terzi, Dikim, Tamir, Tadilat',
      provider: { '@id': `${SITE}#business` },
      areaServed: { '@type': 'Place', name: 'Uncalı, Konyaaltı, Antalya' },
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
          { '@type': 'Offer', name: 'Gelinlik & Abiye Tadilatı', price: '800', priceCurrency: 'TRY', priceValidUntil: '2027-12-31' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: "Uncalı'ya terzi servisi geliyor mu?", acceptedAnswer: { '@type': 'Answer', text: 'Evet, Uncalı mahallesine terzi servisi veriyoruz. Adresten alım ve teslimat WhatsApp üzerinden planlanır.' } },
        { '@type': 'Question', name: 'Uncalı terzi fiyatları ne kadar 2026?', acceptedAnswer: { '@type': 'Answer', text: `Paça kısaltma ₺200'den, fermuar değişimi ₺300'den, bel daraltma ₺200'den, elbise dikimi ₺800'den, gelinlik/abiye tadilatı ₺800'den. ☎ ${PHONE}` } },
        { '@type': 'Question', name: 'Uncalı\'da acil tadilat ne kadar sürer?', acceptedAnswer: { '@type': 'Answer', text: 'Paça kısaltma, fermuar değişimi ve bel daraltma gibi standart işlemler ertesi gün, acil olanlar 1–2 saatte teslim edilir.' } },
        { '@type': 'Question', name: 'Gelinlik ve abiye tadilatı yapıyor musunuz?', acceptedAnswer: { '@type': 'Answer', text: `Evet, gelinlik ve abiye tadilatında uzmanız. ₺800'den başlar. ☎ ${PHONE}` } },
      ],
    },
  ],
};

const FIYATLAR: [string, string, string][] = [
  ['Paça Kısaltma', 'Pantolon, kot, etek — görünmez dikiş', '₺200+'],
  ['Fermuar Değişimi', 'Pantolon, mont, ceket fermuarı', '₺300+'],
  ['Bel Daraltma', 'Elbise, pantolon, ceket', '₺200+'],
  ['Elbise Dikimi', 'Kadın, erkek, çocuk özel dikim', '₺800+'],
  ['Gelinlik & Abiye Tadilatı', 'Hassas daraltma, boy ayarı', '₺800+'],
];

export default function UncaliPage() {
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
            <Image src="/terzi-can-hero.jpg" alt="Terzi Can — Uncalı mahallesi Konyaaltı terzi atölyesi" fill priority fetchPriority="high" sizes="100vw" className="hero-bg-img" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📍 Uncalı Mahallesi · Konyaaltı · Adrese Servis</span>
            <h1 id="hero-h">
              Uncalı <span className="accent">Terzi</span><br />
              Paça Kısaltma, Bel Daraltma, Fermuar Değişimi
            </h1>
            <p className="hero-desc">
              Uncalı mahallesine terzi hizmeti. Paça kısaltma, fermuar değişimi,
              bel daraltma, özel dikim, gelinlik tadilatı —
              ₺200'den başlayan fiyatlarla; normal işler ertesi gün, acil işler 1–2 saatte teslim.
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
              <span className="eyebrow">Uncalı Mahallesi</span>
              <h2 className="sec-h ff" id="local-h">Uncalı'da Terzi İhtiyacınız İçin Buradayız</h2>
              <p className="sec-sub">
                Konyaaltı'nın yoğun apartman ve site bölgelerinden biri olan Uncalı, kalabalık nüfusuyla terzi hizmetine sürekli talep duyan bir mahalle. Uncalı'daki tüm site ve apartman bloklarına terzi hizmeti veriyoruz.
              </p>
              <p className="sec-sub" style={{ marginTop: '.8rem' }}>Uncalı mahallesindeki tüm site ve apartman bloklarına terzi servisi veriyoruz — teslimat koşulları WhatsApp üzerinden netleştirilir.</p>
            </div>
          </div>
        </section>

        <section className="sec" id="fiyatlar" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="price-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">₺ Uncalı Terzi Fiyatları 2026</span>
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
              <h2 className="sec-h ff" id="svc-h">Uncalı'da Sunduğumuz Terzi Hizmetleri</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item">
                <div className="howto-t">Paça Kısaltma & Bel Daraltma</div>
                <div className="howto-d">Pantolon, kot, etek kısaltma; elbise, ceket ve pantolonda bel daraltma. ₺200'den, ertesi gün teslim.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Fermuar Değişimi</div>
                <div className="howto-d">Mont, ceket, pantolon fermuarı değişimi ve tamiri. ₺300'den.</div>
              </div>
              <div className="howto-item">
                <div className="howto-t">Özel Dikim & Gelinlik Tadilatı</div>
                <div className="howto-d">Kadın, erkek, çocuk kıyafet dikimi; gelinlik ve abiye hassas tadilatı.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 720 }}>
            <div className="sec-head">
              <span className="eyebrow">SSS</span>
              <h2 className="sec-h ff" id="faq-h">Uncalı Terzi Hakkında Sık Sorulan Sorular</h2>
            </div>
            {[
              ["Uncalı'ya terzi servisi geliyor mu?", 'Evet, Uncalı mahallesine terzi servisi veriyoruz. Adresten alım ve teslimat WhatsApp üzerinden planlanır.'],
              ['Uncalı terzi fiyatları ne kadar 2026?', 'Paça kısaltma ₺200\'den, fermuar değişimi ₺300\'den, bel daraltma ₺200\'den, elbise dikimi ₺800\'den, gelinlik/abiye tadilatı ₺800\'den.'],
              ['Uncalı\'da acil tadilat ne kadar sürer?', 'Paça kısaltma, fermuar değişimi ve bel daraltma gibi standart işlemler ertesi gün, acil olanlar 1–2 saatte teslim edilir.'],
              ['Gelinlik ve abiye tadilatı yapıyor musunuz?', 'Evet, gelinlik ve abiye tadilatında uzmanız. ₺800\'den başlar.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Uncalı'da Terziye mi İhtiyacınız Var?</h2>
          <p className="cta-sub">Fotoğraf gönderin, adresinizden alalım, ertesi gün teslim edelim.</p>
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
              <a href="/liman-terzi">Liman Terzi</a>
              <a href="/sarisu-terzi">Sarısu Terzi</a>
              <a href="/gursu-terzi">Gürsu Terzi</a>
            </nav>
          </div>
        </section>
        <ReviewsBlock lang="tr" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Uncalı Terzi Konyaaltı · {PHONE}</div>
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
