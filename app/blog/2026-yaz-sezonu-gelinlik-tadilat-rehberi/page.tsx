import type { Metadata } from 'next';

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/blog/2026-yaz-sezonu-gelinlik-tadilat-rehberi`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA        = 'https://wa.me/905318986418?text=' + encodeURIComponent('Merhaba, gelinlik tadilatı için randevu almak istiyorum.');
const OG        = `${SITE}/terzi-can-hero.jpg`;
const PUBLISHED = '2026-08-01';
const MODIFIED  = '2026-08-01';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: '2026 Yaz Sezonu Gelinlik Tadilat Rehberi',
  description:
    'Yaz düğün sezonunda gelinlik tadilatı nasıl planlanır? Randevu zamanlaması, kumaş seçimi, sıcak ve nemli havada gelinlik bakımı — Terzi Can\'dan pratik rehber.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: '2026 Yaz Sezonu Gelinlik Tadilat Rehberi',
    description: 'Yaz düğün sezonunda gelinlik tadilatı: randevu zamanlaması, kumaş seçimi, sıcak havada bakım.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'article',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Terzi Can Antalya — Gelinlik Tadilatı' }],
  },
  twitter: { card: 'summary_large_image', title: '2026 Yaz Sezonu Gelinlik Tadilat Rehberi', images: [OG] },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: '2026 Yaz Sezonu Gelinlik Tadilat Rehberi', item: PAGE_URL },
      ],
    },
    {
      '@type': 'BlogPosting',
      '@id': `${PAGE_URL}#article`,
      mainEntityOfPage: PAGE_URL,
      headline: '2026 Yaz Sezonu Gelinlik Tadilat Rehberi',
      description: 'Yaz düğün sezonunda gelinlik tadilatı nasıl planlanır? Randevu zamanlaması, kumaş seçimi, sıcak ve nemli havada gelinlik bakımı.',
      image: OG,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      inLanguage: 'tr',
      author: { '@type': 'Organization', name: 'Terzi Can', url: SITE },
      publisher: {
        '@type': 'Organization',
        name: 'Terzi Can',
        logo: { '@type': 'ImageObject', url: `${SITE}/apple-touch-icon.png` },
      },
      about: { '@type': 'Service', name: 'Gelinlik Tadilatı' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Yaz düğünü için gelinlik tadilatına ne zaman başlamalıyım?',
          acceptedAnswer: { '@type': 'Answer', text: 'Haziran-Eylül arası yoğun düğün sezonunda randevular hızla doluyor. Gelinliğinizi elinize aldıktan sonra, düğün tarihinden en az 3-4 hafta önce ilk prova için randevu almanızı öneririz. Son dakika hafif düzeltmeler mümkün olsa da, korse ve bel daraltma gibi hassas işlemler için erken planlama en iyi sonucu verir.' },
        },
        {
          '@type': 'Question',
          name: 'Antalya\'nın sıcak ve nemli havası gelinlik kumaşını etkiler mi?',
          acceptedAnswer: { '@type': 'Answer', text: 'Evet. Saten ve ipek karışımlı kumaşlar nem oranı yüksek günlerde hafifçe gevşeyebilir, tül ve dantel katmanları ise terleme ve nem nedeniyle vücuda daha farklı oturabilir. Bu yüzden yaz düğünlerinde son prova, mümkünse düğüne yakın bir tarihte ve günün sıcak saatlerinde yapılmalı.' },
        },
        {
          '@type': 'Question',
          name: '2026 yılında gelinlik tadilatı fiyatları ne kadar?',
          acceptedAnswer: { '@type': 'Answer', text: `Boy ayarı ₺400'den, bel daraltma ₺500'den, korse/kapama onarımı ₺600'den, abiye tadilatı ₺400'den başlıyor. Kesin fiyat kumaşa ve yapılacak işleme göre ilk provada netleşir. ☎ ${PHONE}` },
        },
        {
          '@type': 'Question',
          name: 'Gelinliği düğünden hemen önce mi, yoksa aylar önce mi tadilata götürmeliyim?',
          acceptedAnswer: { '@type': 'Answer', text: 'İdeali iki aşamalı gitmek: kilo ve vücut ölçüsü değişikliklerine karşı ilk provayı düğüne 4-6 hafta kala, son (kesin) provayı ise düğüne 5-10 gün kala yapmak. Böylece hem yeterli düzeltme payı kalır hem de gelinlik son haliyle vücuda tam oturur.' },
        },
      ],
    },
  ],
};

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#222', lineHeight: 1.7 }}>
        <nav aria-label="breadcrumb" style={{ fontSize: '.8rem', color: '#888', marginBottom: '1rem' }}>
          <a href="/" style={{ color: '#888' }}>Ana Sayfa</a> <span>/</span> <a href="/blog" style={{ color: '#888' }}>Blog</a>
        </nav>

        <p style={{ fontSize: '.78rem', color: '#999', marginBottom: '.4rem' }}>
          {new Date(PUBLISHED).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} · Terzi Can
        </p>
        <h1 style={{ fontSize: 'clamp(1.7rem,4.5vw,2.5rem)', fontWeight: 800, margin: '0 0 1.5rem', color: '#2C4A3E' }}>
          2026 Yaz Sezonu Gelinlik Tadilat Rehberi
        </h1>

        <p>
          Antalya, yaz aylarında Türkiye'nin en yoğun düğün sezonlarından birini yaşıyor —
          hem yerli çiftler hem de yurt dışından gelip burada evlenen ya da gelinliğini
          buraya getiren çiftler için. Bu yoğunluk, terzi atölyelerinde randevu takviminin
          hızla dolmasına ve son dakika taleplerin daha zor karşılanmasına yol açıyor.
          Bu rehberde, yaz düğününüz için gelinlik tadilatını nasıl zamanlamanız ve
          Antalya'nın sıcak-nemli ikliminin kumaşınızı nasıl etkileyebileceğini anlatıyoruz.
        </p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '2rem', color: '#2C4A3E' }}>
          1. Randevuyu ne zaman almalısınız?
        </h2>
        <p>
          Haziran ile Eylül arası Antalya'da düğün sezonunun zirvesi. Bu dönemde atölyelere
          gelinlik tadilatı talebi normalin birkaç katına çıkıyor, dolayısıyla "düğüne bir
          hafta kala" başvurmak riskli olabilir. İdeal olanı iki aşamalı bir plan:
        </p>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li><strong>İlk prova (düğüne 4-6 hafta kala):</strong> Bel, boy ve göğüs ölçüleri
            alınır, hangi bölgelerde daraltma/boy ayarı gerektiği belirlenir.</li>
          <li><strong>Son prova (düğüne 5-10 gün kala):</strong> Kilo ve vücut ölçüsündeki
            olası değişiklikler netleşmiş olur, gelinlik son haliyle vücuda tam oturacak
            şekilde ince ayar yapılır.</li>
        </ul>
        <p>
          Bu iki randevu arasında yeterli boşluk bırakmak, hem terziye rahat çalışma payı
          verir hem de sizi son dakika stresinden korur.
        </p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '2rem', color: '#2C4A3E' }}>
          2. Antalya'nın sıcak-nemli havası kumaşı nasıl etkiler?
        </h2>
        <p>
          Yaz aylarında Antalya'da nem oranı özellikle sahil bölgelerinde (Konyaaltı, Lara,
          Kundu) yüksek seyreder. Bu durum gelinlik kumaşını iki şekilde etkileyebilir:
        </p>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li><strong>Saten ve ipek karışımları</strong> nemli havada hafifçe gevşeyebilir,
            kumaşın düşüşü değişebilir.</li>
          <li><strong>Tül ve çok katmanlı dantel etekler</strong> terleme ve nem nedeniyle
            günün farklı saatlerinde vücuda biraz farklı oturabilir.</li>
        </ul>
        <p>
          Bu yüzden mümkünse son provayı, düğün gününe yakın bir tarihte ve günün en sıcak
          saatine denk getirerek yapmanızı öneriyoruz — böylece gelinliğin düğün anındaki
          gerçek oturuşunu görürsünüz.
        </p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '2rem', color: '#2C4A3E' }}>
          3. En sık yapılan yaz sezonu tadilatları
        </h2>
        <p>
          Atölyemizde yaz aylarında en çok talep edilen işlemler: bel daraltma, boy ayarı,
          korse/kapama onarımı ve terleme nedeniyle esneyen askı/omuz bölgelerinin
          sıkılaştırılması. 2026 fiyat aralıkları: boy ayarı ₺400'den, bel daraltma ₺500'den,
          korse/kapama onarımı ₺600'den, abiye tadilatı ₺400'den başlıyor. Kesin fiyat,
          kumaş türüne ve yapılacak işlemin kapsamına göre ilk provada netleşiyor. Detaylı
          bilgi ve tüm hizmetler için{' '}
          <a href="/antalya-gelinlik-tadilati" style={{ color: '#2C4A3E', fontWeight: 700 }}>
            Antalya gelinlik & abiye tadilatı sayfamıza
          </a>{' '}
          göz atabilirsiniz.
        </p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '2rem', color: '#2C4A3E' }}>
          4. Otelde kalıyorsanız ne yapmalısınız?
        </h2>
        <p>
          Antalya dışından gelip bir otelde konaklayan çiftler için gelinliği atölyeye
          taşımak pratik olmayabilir. Bu durumda otelinize gelip ölçü alan ve tadilat
          sonrası teslimat yapan{' '}
          <a href="/otele-gelen-terzi-antalya" style={{ color: '#2C4A3E', fontWeight: 700 }}>
            otele gelen terzi hizmetimizden
          </a>{' '}
          faydalanabilirsiniz.
        </p>

        <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#f6f4ee', borderRadius: 14 }}>
          <p style={{ margin: 0, fontWeight: 600 }}>
            Yaz düğünü için gelinlik tadilatı randevusu almak ister misiniz?
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
             style={{ display: 'inline-block', marginTop: '.8rem', background: '#2C4A3E', color: '#fff', padding: '.7rem 1.4rem', borderRadius: 999, textDecoration: 'none', fontWeight: 700 }}>
            💬 WhatsApp: {PHONE}
          </a>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '.85rem', color: '#888' }}>
          <a href="/blog" style={{ color: '#888' }}>← Tüm blog yazıları</a>
        </p>
      </main>
    </>
  );
}
