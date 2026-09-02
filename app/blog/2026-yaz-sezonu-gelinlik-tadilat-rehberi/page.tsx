import type { Metadata } from 'next';

const SITE     = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${SITE}/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Merhaba, yaz sezonu gelinlik tadilatı hakkında bilgi almak istiyorum.');
const PUBLISHED = '2026-08-01';
const MODIFIED  = new Date().toISOString().split('T')[0];

// ─── İçerik tazeliği sinyali ────────────────────────────────────────────────
// Google, düzenli güncellenen sitelere hafif bir "tazelik" avantajı tanır.
// Bu blog yapısı örnek olarak kuruldu — her ay/sezon yeni bir kısa yazı
// eklemek, dateModified'ı güncel tutmak ve site genelinde "aktif işletme"
// sinyali vermek için düşünülmüştür. Bu şablonu kopyalayıp farklı konularda
// (örn. "Kış Mont Tamiri Rehberi", "Okul Sezonu Üniforma Siparişi" gibi)
// çoğaltabilirsiniz.
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: '2026 Yaz Gelinlik Tadilat Rehberi',
  description:
    'Yaz düğün sezonunda gelinlik tadilatı: randevu zamanlaması, kumaş seçimi, sıcak havada bakım. Antalya Konyaaltı\'dan pratik rehber.',
  keywords: [
    'yaz düğün sezonu gelinlik tadilatı', 'gelinlik tadilat rehberi', 'Antalya yaz düğünü terzi',
    'gelinlik ne zaman tadilat yaptırılır', 'düğün sezonu terzi randevusu',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: '2026 Yaz Sezonu Gelinlik Tadilat Rehberi',
    description: 'Yaz düğün sezonunda gelinlik tadilatı için pratik rehber.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'article',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Yaz Sezonu Gelinlik Tadilatı' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': `${PAGE_URL}#article`,
      headline: '2026 Yaz Sezonu Gelinlik Tadilat Rehberi',
      description: 'Yaz düğün sezonunda gelinlik tadilatı için bilmeniz gereken her şey.',
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      author: { '@type': 'Organization', name: 'Terzi Can', url: SITE },
      publisher: {
        '@type': 'Organization', name: 'Terzi Can',
        logo: { '@type': 'ImageObject', url: `${SITE}/terzi-can-hero.jpg` },
      },
      image: `${SITE}/terzi-can-hero.jpg`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
      inLanguage: 'tr',
      articleSection: 'Terzi Rehberleri',
      keywords: 'gelinlik tadilatı, yaz düğün sezonu, Antalya terzi',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: '2026 Yaz Sezonu Gelinlik Tadilat Rehberi', item: PAGE_URL },
      ],
    },
  ],
};

export default function BlogPostPage() {
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

        <section className="hero" style={{ paddingBottom: '2rem' }} aria-labelledby="hero-h">
          <div className="hero-bg" aria-hidden="true">
            <img src="/terzi-can-hero.jpg" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📝 Terzi Rehberleri</span>
            <h1 id="hero-h" style={{ fontSize: 'clamp(1.8rem,5vw,3rem)' }}>
              2026 Yaz Sezonu <span className="accent">Gelinlik Tadilat</span> Rehberi
            </h1>
          </div>
        </section>

        <article className="sec">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="blog-meta">
              <span>📅 Yayın: {PUBLISHED}</span>
              <span>🔄 Güncelleme: {MODIFIED}</span>
              <span>✍️ Terzi Can</span>
            </div>

            <div className="blog-body">
              <p>
                Antalya'da yaz aylarında düğün yoğunluğu ciddi şekilde artıyor — bu da
                terzi atölyelerinde gelinlik tadilat randevularının hızla dolması demek.
                Eğer 2026 yaz sezonunda evleniyorsanız, doğru zamanlama ve doğru hazırlıkla
                stressiz bir süreç geçirebilirsiniz.
              </p>

              <h2>Ne Zaman Randevu Almalısınız?</h2>
              <p>
                Gelinlik tadilatı için ideal zamanlama, düğün tarihinden en az 4-6 hafta
                öncesidir. Yaz sezonunda (Haziran-Eylül) atölyeler yoğun çalıştığı için
                bu süreyi 6-8 haftaya çıkarmanızı öneririz. Son dakika tadilatlar mümkün
                olsa da, seçenekleriniz kısıtlanabilir.
              </p>

              <h2>Hangi Kumaşlar Daha Uzun Sürer?</h2>
              <ul>
                <li><strong>Dantel ve güpür:</strong> Desen bütünlüğünü korumak için özenli, yavaş çalışma gerektirir.</li>
                <li><strong>Korse ve kemik yapılar:</strong> Bel daraltma işlemlerinde en hassas kısımdır.</li>
                <li><strong>Tül katmanları:</strong> Çok katmanlı etekler boy ayarında daha fazla zaman alır.</li>
                <li><strong>Saten:</strong> Nispeten hızlı işlenir, ancak iğne izi bırakmamak için dikkat gerekir.</li>
              </ul>

              <h2>Sıcak Havada Gelinlik Bakımı</h2>
              <p>
                Antalya'nın yaz sıcağında gelinliğinizi taşırken ve saklarken dikkat
                etmeniz gerekenler var: doğrudan güneş ışığından koruyun, nefes alabilen
                bir kılıf kullanın ve düğün gününe kadar serin, kuru bir ortamda saklayın.
                Tadilat sonrası son provayı düğüne yakın bir tarihte yapmanızı öneririz —
                bu sayede olası kilo değişimlerine göre son ince ayarlar yapılabilir.
              </p>

              <h2>Terzi Can'da Yaz Sezonu Süreci</h2>
              <p>
                Konyaaltı atölyemizde yaz sezonu boyunca gelinlik ve abiye tadilatlarına
                öncelik veriyoruz. Randevu sistemi ile bekleme sürelerini minimumda
                tutuyoruz. Düğün tarihinizi WhatsApp'tan paylaşırsanız, size en uygun
                takvimi birlikte oluşturabiliriz.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(201,169,110,.08)', border: '1px solid rgba(201,169,110,.2)', borderRadius: 10 }}>
              <p style={{ fontSize: '.88rem', color: '#fff', marginBottom: '1rem', fontWeight: 600 }}>
                Gelinlik tadilat fiyatları ve detaylı süreç için:
              </p>
              <a href="/antalya-gelinlik-tadilati" className="btn-primary" style={{ display: 'inline-flex' }}>
                Gelinlik Tadilatı Sayfasına Git →
              </a>
            </div>
          </div>
        </article>

        <section className="cta-final" aria-label="İletişime geç">
          <h2 className="cta-h ff">Yaz Düğününüz İçin Randevu Alın</h2>
          <p className="cta-sub">Erken randevu, stressiz bir düğün hazırlığı demek.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 WhatsApp'tan Yazın</a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Blog · {PHONE}</div>
          <nav className="foot-links" aria-label="Footer bağlantılar">
            <a href="/">Ana Sayfa</a>
            <a href="/antalya-gelinlik-tadilati">Gelinlik Tadilatı</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
