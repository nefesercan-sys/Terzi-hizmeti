'use client';

const PHONE = '+90 531 898 64 18';
const WA_NUM = '905318986418';
const WA = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;

type Lang = 'tr' | 'en' | 'ru' | 'de';

// ─── MODEL GALERİSİ — gerçek kumaş/stil referans görselleri (Unsplash) ───────
// ─── MODEL GALERİSİ — Gerçek Keten & Pamuk Doku Görselleri ───────
// ─── MODEL GALERİSİ — %100 Keten, Pamuk ve Müslin Kumaş Modelleri ───────
// ─── MODEL GALERİSİ — %100 Keten, Pamuk ve Müslin Kumaş Modelleri ───────
// ─── MODEL GALERİSİ — Gerçek Keten & Pamuk Doku Görselleri ───────
const MODELLER = [
  {
    id: 'kadin-elbise',
    img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
    baslik: { 
      tr: 'Kadın Keten Maxi Elbise', 
      en: "Women's Linen Maxi Dress", 
      ru: 'Женское льняное макси-платье', 
      de: 'Damen Leinen-Maxikleid' 
    },
    aciklama: {
      tr: 'Doğal bej keten kumaş, nefes alan rahat kesim — yaz günleri için ideal şıklık.',
      en: 'Natural beige linen fabric, breathable relaxed fit — ideal elegance for summer days.',
      ru: 'Натуральный бежевый лён, дышащий свободный крой — идеальная элегантность для лета.',
      de: 'Natürlicher beigefarbener Leinenstoff, atmungsaktive lockere Passform — ideale Sommer-Eleganz.',
    },
  },
  {
    id: 'kadin-gomlek',
    img: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80',
    baslik: { 
      tr: 'Kadın Pamuk-Keten Oversize Gömlek', 
      en: "Women's Cotton-Linen Oversized Shirt", 
      ru: 'Женская оверсайз рубашка из хлопка и льна', 
      de: 'Damen Oversize-Hemd aus Baumwolle und Leinen' 
    },
    aciklama: {
      tr: '%100 organik pamuk ve keten dokuma, dökümlü ve ferah kullanım.',
      en: '100% organic cotton and linen weave, flowing and comfortable wear.',
      ru: '100% органический хлопок и льняное переплетение, свободный и легкий фасон.',
      de: '100% Bio-Baumwolle und Leinenwebe, fließender und komfortabler Sitz.',
    },
  },
  {
    id: 'erkek-gomlek',
    img: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80',
    baslik: { 
      tr: 'Erkek Keten Yazlık Gömlek', 
      en: "Men's Linen Summer Shirt", 
      ru: 'Мужская летняя льняная рубашка', 
      de: 'Herren Leinen-Sommerhemd' 
    },
    aciklama: {
      tr: 'Hakiki keten dokusu, hakim veya klasik yaka — sıcak havalarda maksimum serinlik.',
      en: 'Genuine linen texture, mandarin or classic collar — maximum coolness in hot weather.',
      ru: 'Фактурный натуральный лён, воротник-стойка или классика — максимум прохлады в жару.',
      de: 'Echte Leinenstruktur, Steh- oder Klassikkragen — maximale Kühlung bei hot Wetter.',
    },
  },
  {
    id: 'erkek-takim',
    img: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80',
    baslik: { 
      tr: 'Erkek Keten Blazer & Pantolon', 
      en: "Men's Linen Blazer & Trousers", 
      ru: 'Мужской льняной блейзер и брюки', 
      de: 'Herren Leinen-Sakko & Hose' 
    },
    aciklama: {
      tr: 'Astarsız hafif ceket ve dökümlü keten pantolon kombini — yaz düğünleri ve davetler için.',
      en: 'Unlined light blazer and draped linen trousers — for summer weddings and events.',
      ru: 'Лёгкий пиджак без подкладки и льняные брюки — для летних свадеб и мероприятий.',
      de: 'Ungefüttertes leichtes Sakko und fließende Leinenhose — für Sommerhochzeiten und Events.',
    },
  },
  {
    id: 'plaj-kaftan',
    img: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80',
    baslik: { 
      tr: 'Plaj Kaftanı / Keten Kimono', 
      en: 'Beach Kaftan / Linen Kimono', 
      ru: 'Пляжное кафтан / льняное кимоно', 
      de: 'Strandkaftan / Leinen-Kimono' 
    },
    aciklama: {
      tr: 'Hafif ve doğal keten kumaştan plaj üstü kimono — sahil ve otel kullanımı için ideal.',
      en: 'Lightweight natural linen beach kimono — ideal for beach and resort wear.',
      ru: 'Лёгкое кимоно из натурального льна — идеально для пляжа и отдыха у бассейна.',
      de: 'Leichter Strandkimono aus natürlichem Leinen — ideal für Strand und Hotel resort.',
    },
  },
  {
    id: 'kadin-pantolon',
    img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
    baslik: { 
      tr: 'Kadın Keten Wide-Leg Pantolon', 
      en: "Women's Wide-Leg Linen Trousers", 
      ru: 'Женские широкие льняные брюки', 
      de: 'Damen Leinen-Weitbeinhose' 
    },
    aciklama: {
      tr: 'Yüksek bel, bol paça doğal keten pantolon — hem gündelik hem şık kombinler için.',
      en: 'High-waisted, wide-leg natural linen trousers — for both casual and stylish looks.',
      ru: 'Широкие льняные брюки с высокой посадкой — для повседневных и элегантных образов.',
      de: 'High-Waist Weitbeinhose aus Naturleinen — für lässige und elegante Kombinationen.',
    },
  },
];
const T: Record<Lang, any> = {
  tr: {
    tag: '🧵 Özel Dikim · %100 Keten & Pamuk',
    h1a: 'Keten & Pamuk', h1b: 'Özel Dikim Modelleri',
    heroDesc: 'Aşağıdaki modellerden birini beğenin ya da kendi fikrinizi getirin — %100 doğal keten veya pamuktan, tam sizin ölçünüze göre dikelim. Antalya Konyaaltı atölyemizde, otelinize teslim.',
    galleryH: 'Model Örnekleri', gallerySub: 'Beğendiğiniz modeli WhatsApp\'tan gönderin, ölçünüzü alalım.',
    ctaBtn: 'Bu Modeli İste — WhatsApp',
    howH: 'Nasıl Çalışır?',
    steps: [
      ['1️⃣', 'Model Seçin', 'Aşağıdan bir model seçin ya da kendi fotoğrafınızı/fikrinizi gönderin.'],
      ['2️⃣', 'Ölçü & Kumaş', 'WhatsApp\'tan ölçülerinizi paylaşın, keten veya pamuk kumaş seçin.'],
      ['3️⃣', 'Dikim', 'Atölyemizde elinizle dikilir — genelde 3-5 gün içinde hazır.'],
      ['4️⃣', 'Teslim', 'Otelinize veya adresinize teslim edilir, ödeme teslimde.'],
    ],
    finalCta: 'Kendi Modelinizi Diktirin', finalSub: 'Fotoğraf gönderin, fiyat teklifi alın — 30 dakikada dönüş.',
    waBtn: 'WhatsApp ile Başlayın',
  },
  en: {
    tag: '🧵 Custom Tailoring · 100% Linen & Cotton',
    h1a: 'Linen & Cotton', h1b: 'Custom Tailoring Models',
    heroDesc: 'Pick a style below or bring your own idea — we\'ll tailor it in 100% natural linen or cotton, made exactly to your measurements. Made in our Konyaaltı, Antalya workshop, delivered to your hotel.',
    galleryH: 'Style Examples', gallerySub: 'Send the style you like on WhatsApp and we\'ll take your measurements.',
    ctaBtn: 'Request This Style — WhatsApp',
    howH: 'How It Works',
    steps: [
      ['1️⃣', 'Choose a Style', 'Pick a model below, or send us your own photo or idea.'],
      ['2️⃣', 'Measurements & Fabric', 'Share your measurements on WhatsApp, choose linen or cotton.'],
      ['3️⃣', 'Tailoring', 'Hand-tailored in our workshop — usually ready in 3-5 days.'],
      ['4️⃣', 'Delivery', 'Delivered to your hotel or address, pay on delivery.'],
    ],
    finalCta: 'Have Your Own Style Made', finalSub: 'Send a photo, get a price quote — usually within 30 minutes.',
    waBtn: 'Start on WhatsApp',
  },
  ru: {
    tag: '🧵 Пошив на заказ · 100% лён и хлопок',
    h1a: 'Лён и хлопок', h1b: 'Модели на заказ',
    heroDesc: 'Выберите модель ниже или предложите свою идею — сошьём из 100% натурального льна или хлопка точно по вашим меркам. Мастерская в Коньяалты, Анталья, доставка в отель.',
    galleryH: 'Примеры моделей', gallerySub: 'Отправьте понравившуюся модель в WhatsApp — снимем мерки.',
    ctaBtn: 'Заказать эту модель — WhatsApp',
    howH: 'Как это работает',
    steps: [
      ['1️⃣', 'Выберите модель', 'Выберите модель ниже или пришлите своё фото/идею.'],
      ['2️⃣', 'Мерки и ткань', 'Пришлите мерки в WhatsApp, выберите лён или хлопок.'],
      ['3️⃣', 'Пошив', 'Шьём вручную в мастерской — обычно готово за 3-5 дней.'],
      ['4️⃣', 'Доставка', 'Доставим в отель или по адресу, оплата при получении.'],
    ],
    finalCta: 'Сшить по своей модели', finalSub: 'Пришлите фото — получите цену в течение 30 минут.',
    waBtn: 'Начать в WhatsApp',
  },
  de: {
    tag: '🧵 Maßschneiderei · 100% Leinen & Baumwolle',
    h1a: 'Leinen & Baumwolle', h1b: 'Modelle nach Maß',
    heroDesc: 'Wählen Sie unten einen Stil oder bringen Sie Ihre eigene Idee mit — wir schneidern aus 100% natürlichem Leinen oder Baumwolle, genau nach Ihren Maßen. Gefertigt in unserer Werkstatt in Konyaaltı, geliefert an Ihr Hotel.',
    galleryH: 'Stilbeispiele', gallerySub: 'Senden Sie den gewünschten Stil per WhatsApp — wir nehmen Maß.',
    ctaBtn: 'Diesen Stil anfragen — WhatsApp',
    howH: 'So funktioniert es',
    steps: [
      ['1️⃣', 'Stil wählen', 'Wählen Sie ein Modell unten oder senden Sie Ihr eigenes Foto/Idee.'],
      ['2️⃣', 'Maße & Stoff', 'Teilen Sie Ihre Maße per WhatsApp mit, wählen Sie Leinen oder Baumwolle.'],
      ['3️⃣', 'Schneidern', 'Handgefertigt in unserer Werkstatt — meist in 3-5 Tagen fertig.'],
      ['4️⃣', 'Lieferung', 'Lieferung an Ihr Hotel oder Ihre Adresse, Zahlung bei Lieferung.'],
    ],
    finalCta: 'Eigenen Stil schneidern lassen', finalSub: 'Foto senden, Preisangebot erhalten — meist innerhalb 30 Minuten.',
    waBtn: 'Mit WhatsApp beginnen',
  },
};

// DÜZELTME 1: lang parametresi opsiyonel (?) yapıldı ve 'tr' varsayılan olarak atandı
export default function KetenPamukOzelDikim({ lang = 'tr' }: { lang?: Lang }) {
  const t = T[lang] || T['tr']; // Olası hatalara karşı ekstra güvenlik
  
  const waMsg = lang === 'ru' ? 'Здравствуйте, хочу заказать пошив из льна/хлопка. Модель: '
    : lang === 'de' ? 'Hallo, ich möchte etwas aus Leinen/Baumwolle schneidern lassen. Modell: '
    : lang === 'en' ? 'Hello, I would like to order custom linen/cotton tailoring. Style: '
    : 'Merhaba, keten/pamuk özel dikim sipariş etmek istiyorum. Model: ';

  return (
    <main style={{ fontFamily: 'system-ui,sans-serif', background: '#FAF7F2', color: '#3A3028', minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(135deg,#2C4A3E 0%,#3E6656 100%)', padding: '4.5rem 1.5rem 3.5rem' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#D4B07A', marginBottom: '1rem' }}>{t.tag}</div>
          <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: '1.2rem' }}>
            {t.h1a}<br /><span style={{ color: '#D4B07A', fontStyle: 'italic' }}>{t.h1b}</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.8, maxWidth: 620, marginBottom: '1.8rem' }}>
            {t.heroDesc}
          </p>
          <a href={WA(waMsg)} target="_blank" rel="noopener noreferrer"
            style={{ background: '#25d366', color: '#fff', padding: '1rem 2rem', fontWeight: 700, textDecoration: 'none', fontSize: '.88rem', borderRadius: 4, display: 'inline-block' }}>
            💬 {t.waBtn}
          </a>
        </div>
      </section>

      <section style={{ padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.6rem', color: '#1C1814', marginBottom: '.3rem', textAlign: 'center' }}>{t.galleryH}</h2>
          <p style={{ color: '#7A6E62', fontSize: '.88rem', marginBottom: '2rem', textAlign: 'center' }}>{t.gallerySub}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.2rem' }}>
            {MODELLER.map((m) => (
              <div key={m.id} style={{ background: '#fff', borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(44,74,62,.12)' }}>
                {/* DÜZELTME 2: ESLint img hatası görmezden gelindi */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.img} alt={m.baslik[lang] || m.baslik['tr']} style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} loading="lazy" />
                <div style={{ padding: '1.1rem' }}>
                  <h3 style={{ fontFamily: 'Georgia,serif', fontSize: '1rem', color: '#1C1814', marginBottom: '.4rem' }}>{m.baslik[lang]}</h3>
                  <p style={{ fontSize: '.8rem', color: '#7A6E62', lineHeight: 1.6, marginBottom: '.9rem' }}>{m.aciklama[lang]}</p>
                  <a href={WA(waMsg + m.baslik[lang])} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', textAlign: 'center', background: '#2C4A3E', color: '#fff', padding: '.65rem', borderRadius: 4, textDecoration: 'none', fontSize: '.78rem', fontWeight: 600 }}>
                    {t.ctaBtn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#F2EDE4', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.6rem', color: '#1C1814', marginBottom: '2rem', textAlign: 'center' }}>{t.howH}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 1, background: '#E8E0D2' }}>
            {/* DÜZELTME 3: Tuple tip hatası giderildi (any kullanıldı) */}
            {t.steps.map(([ic, ti, d]: any, i: number) => (
              <div key={i} style={{ background: '#fff', padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '.6rem' }}>{ic}</div>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: '.95rem', color: '#2C4A3E', marginBottom: '.3rem' }}>{ti}</div>
                <div style={{ fontSize: '.77rem', color: '#7A6E62', lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#2C4A3E', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.6rem', color: '#fff', marginBottom: '.7rem' }}>{t.finalCta}</h2>
        <p style={{ color: 'rgba(255,255,255,.85)', marginBottom: '1.6rem', fontSize: '.9rem' }}>{t.finalSub}</p>
        <a href={WA(waMsg)} target="_blank" rel="noopener noreferrer"
          style={{ background: '#25d366', color: '#fff', padding: '1rem 2.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '.9rem', borderRadius: 4, display: 'inline-block' }}>
          💬 {t.waBtn}
        </a>
        <p style={{ color: 'rgba(255,255,255,.5)', marginTop: '1.2rem', fontSize: '.75rem' }}>{PHONE}</p>
      </section>
    </main>
  );
}
