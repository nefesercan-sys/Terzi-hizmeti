import Image from 'next/image';
import OrnekGorselSeridi from '@/components/OrnekGorselSeridi';
import { priceRowsFor, type FLang } from '@/components/TerziFiyatlariSayfasi';
import Link from 'next/link';
import type { OtelBolgesi } from '@/lib/otel-bolgeleri';
import { regionAnswer, regionFaq } from '@/lib/otel-copy';
import { areaIntro, areaNeeds, NEEDS_H, pickVariant } from '@/lib/area-profiles';
import { findDistrict } from '@/lib/seo-data';

// Fiyatlar tek kaynaktan (fiyat sayfası bileşeni)
const mkP = (l: FLang) => { const R = priceRowsFor(l); return { hem: R[1].rows[0], zip: R[0].rows[0], alter: R[1].rows[3], wedding: R[1].rows[4] }; };
const P_tr = mkP('tr'), P_en = mkP('en'), P_ru = mkP('ru'), P_de = mkP('de');

const PHONE = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM = '905318986418';

type Lang = 'tr' | 'en' | 'ru' | 'de';


// H1 varyantları (bölge slug'ına göre deterministik); bölge adı vurgulu kalır.
const H1V: Record<string, ((r: string) => [string, string])[]> = {
  tr: [(r) => ['Otele Gelen Terzi', r], (r) => ['Otelinize gelen terzi', r], (r) => [`${r} otellerine terzi servisi`, 'Alım ve teslim ücretsiz']],
  en: [(r) => ['Hotel Tailor', r], (r) => ['Tailor that comes to your hotel in', r], (r) => [`${r} hotel tailor service`, 'Free pickup and delivery']],
  ru: [(r) => ['Портной в отеле', r], (r) => ['Портной с выездом в отель:', r], (r) => [`Портной для отелей: ${r}`, 'Забор и доставка бесплатно']],
  de: [(r) => ['Schneider im Hotel', r], (r) => ['Schneider kommt ins Hotel:', r], (r) => [`Hotel-Schneider ${r}`, 'Abholung und Lieferung kostenlos']],
};
const h1Varyant = (lang: string, slug: string, r: string) => {
  const v = H1V[lang]; if (!v) return null;
  const [a, b] = v[[...slug].reduce((x, c) => x + c.charCodeAt(0), 0) % v.length](r);
  return <>{a}<br /><span className="accent">{b}</span></>;
};

const T: Record<Lang, any> = {
  en: {
    noPartner: 'We do not work for or represent any hotel; the region name only tells you where we can come.',
    homeLabel: '← Home', tag: (r: string) => `📍 ${r} Hotel Zone · Mobile Tailor`,
    h1: (r: string) => <>Hotel Tailor<br /><span className="accent">{r}</span></>,
    heroDesc: (_r: string, answer: string) => answer,
    waShare: 'Share Hotel Name', callLabel: PHONE,
    aboutH: (r: string) => `About ${r}`, travelLabel: 'Travel time:',
    hotelsH: (r: string) => `Hotels in the ${r} Area`, hotelsSub: 'We can reach you at any hotel in this district — just share your hotel name on WhatsApp and we\'ll confirm.',
    otherHotelsNote: 'Staying somewhere else in this district? We can still reach you — just ask.',
    servicesEyebrow: 'Tailoring & Repair Workshop', servicesH: 'Tailoring · Repair · Alterations', servicesSub: 'A full-capacity textile workshop, delivered to your hotel.',
    services: [
      { icon: '👔', tr: 'Tailoring', en: 'Custom-fit clothing', desc: 'Custom-fit garments made to your exact measurements.', items: ['Shirt', 'Trousers', 'Suit', 'Dress'] },
      { icon: '🔧', tr: 'Repair', en: 'Zippers, tears, seams', desc: 'Everyday repairs — zippers and torn seams.', items: ['Zipper Replacement', 'Tear Repair'] },
      { icon: '📏', tr: 'Alterations', en: 'Hemming, taking in', desc: 'Precise fit adjustments so clothing sits exactly right.', items: ['Hemming', 'Waist Taking In', 'Sleeve Shortening'] },
    ],
    priceEyebrow: 'Pricing', priceH: 'Prices', priceSub: 'Hotel pick-up and delivery is free — you only pay for the work.',
    priceRows: [['Hotel Visit', 'FREE'], ['Hemming', (P_en.hem)], ['Zipper Replacement', (P_en.zip)], ['Dress / Suit Alteration', (P_en.alter)], ['Wedding Dress Alteration', (P_en.wedding)]],
    procEyebrow: 'Process', procH: 'How It Works',
    steps: [
      ['01', 'Share Hotel & Room', `Send hotel name and room number to ${PHONE}`],
      ['02', 'Time Confirmed on WhatsApp', 'We confirm a convenient time'],
      ['03', 'On-Site Measurement', 'Tailor visits, measures and collects the garment'],
      ['04', 'Next-Day Delivery', 'Finished garment delivered back to your room'],
    ],
    faqEyebrow: 'FAQ', faqH: 'Frequently Asked Questions',
    faq: (r: string) => [
      [`Do you come to all hotels in ${r}?`, `Yes! We visit every hotel in ${r} — share your hotel name and room number on WhatsApp.`],
      ['Is the hotel visit free?', 'Hotel pick-up and delivery is free in every area we serve; we confirm the time on WhatsApp before we come; you then pay for the tailoring or repair work.'],
      ['How fast is the service?', 'Standard repairs and hemming are ready the next day; urgent jobs take 1–2 hours.'],
      ['Do you speak English?', 'Yes — write to us on WhatsApp in your own language and we will reply.'],
    ],
    ctaH: (r: string) => <>Hotel Tailor in {r}<br />We Come to You</>, ctaSub: 'Share your hotel name — time confirmed on WhatsApp.',
    waBtn: 'Message on WhatsApp', mapsBtn: 'Google Maps',
    footTitle: 'Related', related: [] as [string, string][],
  },
  ru: {
    noPartner: 'Мы не представляем ни один отель; название района лишь показывает, куда мы можем приехать.',
    homeLabel: '← Главная', tag: (r: string) => `📍 Отельная зона ${r} · Выездной портной`,
    h1: (r: string) => <>Портной в отеле<br /><span className="accent">{r}</span></>,
    heroDesc: (_r: string, answer: string) => answer,
    waShare: 'Отправить название отеля', callLabel: PHONE,
    aboutH: (r: string) => `О районе ${r}`, travelLabel: 'Время в пути:',
    hotelsH: (r: string) => `Отели в районе ${r}`, hotelsSub: 'Мы можем приехать в любой отель этого района — просто напишите название отеля в WhatsApp, и мы подтвердим.',
    otherHotelsNote: 'Остановились в другом отеле этого района? Мы всё равно можем приехать — просто спросите.',
    servicesEyebrow: 'Мастерская пошива и ремонта', servicesH: 'Пошив · Ремонт · Подгонка', servicesSub: 'Полноценная текстильная мастерская с доставкой в ваш отель.',
    services: [
      { icon: '👔', tr: 'Пошив', en: 'Одежда по меркам', desc: 'Пошив одежды по вашим точным меркам.', items: ['Рубашка', 'Брюки', 'Костюм', 'Платье'] },
      { icon: '🔧', tr: 'Ремонт', en: 'Молнии, разрывы, швы', desc: 'Повседневный ремонт — молнии и швы.', items: ['Замена молнии', 'Ремонт разрыва'] },
      { icon: '📏', tr: 'Подгонка', en: 'Укорачивание, заужение', desc: 'Точная подгонка по фигуре.', items: ['Укорачивание', 'Заужение талии', 'Укорачивание рукавов'] },
    ],
    priceEyebrow: 'Стоимость', priceH: 'Цены', priceSub: 'Забор и доставка в отель бесплатны — вы платите только за работу.',
    priceRows: [['Выезд в отель', 'БЕСПЛАТНО'], ['Укорачивание', ('от ' + P_ru.hem.replace('+', ''))], ['Замена молнии', ('от ' + P_ru.zip.replace('+', ''))], ['Подгонка платья/костюма', ('от ' + P_ru.alter.replace('+', ''))], ['Подгонка свадебного платья', ('от ' + P_ru.wedding.replace('+', ''))]],
    procEyebrow: 'Процесс', procH: 'Как мы работаем',
    steps: [
      ['01', 'Отель и номер', `Отправьте название отеля и номер комнаты на ${PHONE}`],
      ['02', 'Время — в WhatsApp', 'Мы согласуем удобное время'],
      ['03', 'Снятие мерок на месте', 'Портной приезжает, снимает мерки и забирает вещь'],
      ['04', 'Готово на следующий день', 'Готовая вещь доставляется обратно в номер'],
    ],
    faqEyebrow: 'Вопросы', faqH: 'Часто задаваемые вопросы',
    faq: (r: string) => [
      [`Вы приезжаете во все отели ${r}?`, `Да! Мы приезжаем в каждый отель района ${r} — напишите название отеля и номер комнаты в WhatsApp.`],
      ['Выезд в отель бесплатный?', 'Да, выезд в отель и на дом бесплатный во всех районах — вы платите только за саму работу.'],
      ['Как быстро выполняется услуга?', 'Обычные работы готовы на следующий день, срочные — за 1–2 часа.'],
      ['Вы говорите по-русски?', 'Да — напишите нам в WhatsApp на своём языке, и мы ответим.'],
    ],
    ctaH: (r: string) => <>Портной в отеле {r}<br />Мы приедем к вам</>, ctaSub: 'Отправьте название отеля — время согласуем в WhatsApp.',
    waBtn: 'Написать в WhatsApp', mapsBtn: 'Google Maps',
    footTitle: 'Похожие', related: [] as [string, string][],
  },
  de: {
    noPartner: 'Wir arbeiten nicht für ein bestimmtes Hotel; der Gebietsname zeigt nur, wohin wir kommen können.',
    homeLabel: '← Startseite', tag: (r: string) => `📍 Hotelzone ${r} · Mobiler Schneider`,
    h1: (r: string) => <>Schneider im Hotel<br /><span className="accent">{r}</span></>,
    heroDesc: (_r: string, answer: string) => answer,
    waShare: 'Hotelnamen senden', callLabel: PHONE,
    aboutH: (r: string) => `Über ${r}`, travelLabel: 'Anfahrtszeit:',
    hotelsH: (r: string) => `Hotels im Gebiet ${r}`, hotelsSub: 'Wir erreichen Sie in jedem Hotel dieses Bezirks — teilen Sie einfach Ihren Hotelnamen per WhatsApp mit, wir bestätigen den Termin.',
    otherHotelsNote: 'Wohnen Sie in einem anderen Hotel dieses Bezirks? Wir erreichen Sie trotzdem — fragen Sie einfach nach.',
    servicesEyebrow: 'Schneider- und Reparaturwerkstatt', servicesH: 'Schneiderei · Reparatur · Änderungen', servicesSub: 'Eine voll ausgestattete Textilwerkstatt, geliefert in Ihr Hotel.',
    services: [
      { icon: '👔', tr: 'Schneiderei', en: 'Maßgeschneiderte Kleidung', desc: 'Maßanfertigung nach Ihren genauen Maßen.', items: ['Hemd', 'Hose', 'Anzug', 'Kleid'] },
      { icon: '🔧', tr: 'Reparatur', en: 'Reißverschlüsse, Risse, Nähte', desc: 'Alltägliche Reparaturen — Reißverschlüsse und Nähte.', items: ['Reißverschluss ersetzen', 'Riss reparieren'] },
      { icon: '📏', tr: 'Änderungen', en: 'Kürzen, enger machen', desc: 'Präzise Passform-Anpassungen für perfekten Sitz.', items: ['Kürzen', 'Taille enger machen', 'Ärmel kürzen'] },
    ],
    priceEyebrow: 'Kosten', priceH: 'Preise', priceSub: 'Abholung und Lieferung im Hotel sind kostenlos — Sie zahlen nur die Arbeit.',
    priceRows: [['Hotelbesuch', 'KOSTENLOS'], ['Kürzen', ('ab ' + P_de.hem.replace('+', ''))], ['Reißverschluss ersetzen', ('ab ' + P_de.zip.replace('+', ''))], ['Kleid-/Anzugänderung', ('ab ' + P_de.alter.replace('+', ''))], ['Brautkleid ändern', ('ab ' + P_de.wedding.replace('+', ''))]],
    procEyebrow: 'Ablauf', procH: 'So funktioniert es',
    steps: [
      ['01', 'Hotel & Zimmer angeben', `Senden Sie Hotelname und Zimmernummer an ${PHONE}`],
      ['02', 'Zeit per WhatsApp', 'Wir bestätigen eine passende Zeit'],
      ['03', 'Maßnehmen vor Ort', 'Schneider kommt, nimmt Maß und das Kleidungsstück mit'],
      ['04', 'Am nächsten Tag fertig', 'Fertiges Kleidungsstück wird zurück auf Ihr Zimmer geliefert'],
    ],
    faqEyebrow: 'FAQ', faqH: 'Häufig gestellte Fragen',
    faq: (r: string) => [
      [`Kommen Sie zu allen Hotels in ${r}?`, `Ja! Wir besuchen jedes Hotel in ${r} — teilen Sie Hotelname und Zimmernummer per WhatsApp mit.`],
      ['Ist der Hotelbesuch kostenlos?', 'Ja, Abholung und Lieferung zu Hotel und nach Hause sind in allen Gebieten kostenlos – Sie zahlen nur die eigentliche Arbeit.'],
      ['Wie schnell ist der Service?', 'Normale Reparaturen sind am nächsten Tag fertig, eilige in 1–2 Stunden.'],
      ['Sprechen Sie Deutsch?', 'Ja — schreiben Sie uns per WhatsApp in Ihrer Sprache, wir antworten.'],
    ],
    ctaH: (r: string) => <>Schneider im Hotel {r}<br />Wir kommen zu Ihnen</>, ctaSub: 'Hotelnamen senden — Zeit per WhatsApp klären.',
    waBtn: 'Auf WhatsApp schreiben', mapsBtn: 'Google Maps',
    footTitle: 'Ähnlich', related: [] as [string, string][],
  },
  tr: {
    noPartner: 'Belirli bir otelle ortaklığımız yoktur; bölge adı yalnızca hizmet verdiğimiz yeri gösterir.',
    homeLabel: '← Ana Sayfa', tag: (r: string) => `📍 ${r} Otel Bölgesi · Otele Gelen Terzi`,
    h1: (r: string) => <>Otele Gelen Terzi<br /><span className="accent">{r}</span></>,
    heroDesc: (_r: string, answer: string) => answer,
    waShare: 'Otel Adını Gönderin', callLabel: PHONE,
    aboutH: (r: string) => `${r} Hakkında`, travelLabel: 'Ulaşım süresi:',
    hotelsH: (r: string) => `${r} Bölgesindeki Oteller`, hotelsSub: 'Bu bölgedeki her otele ulaşabiliyoruz — otel adınızı WhatsApp\'tan iletin, size dönelim.',
    otherHotelsNote: 'Bu bölgede başka bir otelde mi kalıyorsunuz? Yine de ulaşabiliriz — sorun yeter.',
    servicesEyebrow: 'Dikim & Tamir Atölyesi', servicesH: 'Dikim · Tamir · Tadilat', servicesSub: 'Tam kapasiteli bir tekstil atölyesi, otelinize kadar geliyor.',
    services: [
      { icon: '👔', tr: 'Dikim', en: 'Özel ölçü kıyafet', desc: 'Tam ölçünüze göre özel dikim kıyafet.', items: ['Gömlek', 'Pantolon', 'Takım Elbise', 'Elbise'] },
      { icon: '🔧', tr: 'Tamir', en: 'Fermuar, yırtık, sökük', desc: 'Günlük tamirler — fermuar ve sökük dikiş.', items: ['Fermuar Değişimi', 'Yırtık Tamiri'] },
      { icon: '📏', tr: 'Tadilat', en: 'Boy kısaltma, daraltma', desc: 'Kıyafetin tam oturması için hassas ölçü ayarı.', items: ['Boy Kısaltma', 'Bel Daraltma', 'Kol Kısaltma'] },
    ],
    priceEyebrow: '₺ Fiyatlar', priceH: 'Fiyatlar', priceSub: 'Otele alım-teslim ücretsiz — yalnızca yapılan iş ücretlendirilir.',
    priceRows: [['Otel Ziyareti', 'ÜCRETSİZ'], ['Boy Kısaltma', (P_tr.hem)], ['Fermuar Değişimi', (P_tr.zip)], ['Elbise / Takım Tadilatı', (P_tr.alter)], ['Gelinlik Tadilatı', (P_tr.wedding)]],
    procEyebrow: 'Süreç', procH: 'Nasıl Çalışır',
    steps: [
      ['01', 'Otel & Oda Bilginizi Gönderin', `Otel adı ve oda numaranızı ${PHONE} numarasına iletin`],
      ['02', 'WhatsApp\'tan Randevu', 'Size uygun bir saat belirleyip onaylıyoruz'],
      ['03', 'Yerinde Ölçü Alma', 'Terzimiz gelir, ölçü alır ve kıyafeti teslim alır'],
      ['04', 'Ertesi Gün Teslim', 'Tamamlanan kıyafet odanıza geri teslim edilir'],
    ],
    faqEyebrow: 'SSS', faqH: 'Sık Sorulan Sorular',
    faq: (r: string) => [
      [`${r} bölgesindeki tüm otellere geliyor musunuz?`, `Evet! ${r} bölgesindeki her otele ulaşabiliyoruz — otel adınızı ve oda numaranızı WhatsApp\'tan iletin.`],
      ['Otel ziyareti ücretsiz mi?', 'Otele alım-teslim hizmet verilen tüm bölgelerde ücretsizdir; gelmeden önce saat WhatsApp\'tan netleştirilir; ayrıca dikim/tamir işi için ödeme yaparsınız.'],
      ['Hizmet ne kadar sürede tamamlanır?', 'Normal tamir ve boy kısaltma ertesi gün, acil işler 1–2 saatte teslim edilir.'],
      ['Türkçe dışında dil konuşuyor musunuz?', 'Evet — WhatsApp\'tan kendi dilinizde yazın, size aynı dilde yanıt veriyoruz.'],
    ],
    ctaH: (r: string) => <>{r} Bölgesinde Otele Gelen Terzi<br />Size Geliyoruz</>, ctaSub: 'Otel adınızı gönderin — randevunuz WhatsApp\'tan netleşsin.',
    waBtn: 'WhatsApp\'tan Yazın', mapsBtn: 'Google Haritalar',
    footTitle: 'İlgili', related: [] as [string, string][],
  },
};

function pickSome<T>(arr: T[], slug: string, n: number, salt: string): T[] {
  const start = pickVariant(slug, arr.length, salt);
  return Array.from({ length: Math.min(n, arr.length) }, (_, i) => arr[(start + i) % arr.length]);
}

export default function OtelBolgeSayfasi({ lang, region, allRegions, basePath, maps }: {
  lang: Lang; 
  region: OtelBolgesi; 
  allRegions: OtelBolgesi[]; 
  basePath: string; 
  maps: string;
}) {
  const t = T[lang] || T['en'];
  
  const waMsg = lang === 'ru' ? `Здравствуйте, я в отеле в районе ${region.name}. Мой отель: `
    : lang === 'de' ? `Hallo, ich bin in einem Hotel in ${region.name}. Mein Hotel: `
    : lang === 'tr' ? `Merhaba, ${region.name} bölgesinde bir oteldeyim. Otelim: `
    : `Hello, I am at a hotel in ${region.name}. My hotel: `;
    
  const WA_URL = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
  const WA_DEF = WA_URL(waMsg);

  return (
    <div style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: 'var(--font-inter), system-ui, sans-serif', lineHeight: 1.6, minHeight: '100vh' }}>
      <a href="#main-content" className="skip-link">{lang === 'ru' ? 'Перейти к содержанию' : lang === 'de' ? 'Zum Inhalt springen' : lang === 'tr' ? 'İçeriğe geç' : 'Skip to content'}</a>

      <nav className="nav" aria-label="Main navigation">
        <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
        <Link href="/" className="nav-home">{t.homeLabel}</Link>
        <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP <span aria-hidden="true">→</span></a>
      </nav>

      <header className="hero">
        <div className="hero-bg" aria-hidden="true">
          <Image src="/terzi-can-hero.jpg" alt={`Terzi Can — ${region.name}`} fill priority fetchPriority="high" sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 15%', filter: 'brightness(.32) saturate(.75)' }} />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <span className="hero-tag">{t.tag(region.name)}</span>
          <span className="hero-eng">Terzi Can</span>
          <h1 id="hero-h">{h1Varyant(lang, region.slug, region.name) ?? t.h1(region.name)}</h1>
          <p className="hero-desc" id="hero-desc">{t.heroDesc(region.name, regionAnswer(lang, region.slug, region.name))}</p>
          <div className="hero-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary"><span aria-hidden="true">💬</span> {t.waShare} <span aria-hidden="true">→</span></a>
            <a href={`tel:${PHONE_TEL}`} className="btn-secondary"><span aria-hidden="true">📞</span> {t.callLabel}</a>
          </div>
        </div>
      </header>

      <main id="main-content">
        
        <section className="sec" aria-labelledby="about-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <h2 className="sec-h" id="about-h">{t.aboutH(region.name)}</h2>
            <p className="sec-sub" style={{ marginBottom: '.8rem' }}>{region.blurb[lang]}</p>
            <p className="sec-sub" style={{ marginBottom: '1rem' }}>{areaIntro(lang, region.slug, region.name, { name: (s, l) => findDistrict(s)?.name[l] })}</p>
            <h3 style={{ color: '#C9A96E', margin: '1rem 0 .4rem', fontSize: '1.05rem', fontWeight: 600 }}>{NEEDS_H[lang](region.name)}</h3>
            <ul style={{ fontSize: '.92rem', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
              {areaNeeds(lang, region.slug).map((x) => (<li key={x}>{x}</li>))}
            </ul>
            <p className="sec-sub" style={{ marginTop: '.8rem', fontSize: '.85rem' }}>{t.noPartner}</p>
          </div>
        </section>

        <section className="sec" aria-labelledby="wk-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">{t.servicesEyebrow}</span>
              <h2 className="sec-h" id="wk-h">{t.servicesH}</h2>
              <p className="sec-sub">{t.servicesSub}</p>
            </div>
            <div className="wk-grid">
              {pickSome(t.services, region.slug, 2, 'svc').map((s: any) => (
                <article className="wk-card" key={s.tr}>
                  <div className="wk-icon" aria-hidden="true">{s.icon}</div>
                  <h3 className="wk-tr">{s.tr}</h3>
                  <span className="wk-en">{s.en}</span>
                  <p className="wk-desc">{s.desc}</p>
                  <ul className="wk-items" aria-label={s.tr}>{s.items.map((i: string) => <li key={i} className="wk-item">{i}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="price-h">
          <div className="ctr" style={{ maxWidth: 700 }}>
            <div className="sec-head">
              <span className="eyebrow">{t.priceEyebrow}</span>
              <h2 className="sec-h" id="price-h">{t.priceH}</h2>
              <p className="sec-sub">{t.priceSub}</p>
            </div>
            <table className="price-table" aria-label={t.priceH} style={{ width: '100%' }}>
              <caption className="visually-hidden">{t.priceH}</caption>
              <thead><tr><th scope="col" className="visually-hidden">Service</th><th scope="col" className="visually-hidden">Price</th></tr></thead>
              <tbody>
                {[t.priceRows[0], ...pickSome(t.priceRows.slice(1), region.slug, 4, 'price')].map((row: string[]) => (<tr key={row[0]}><td>{row[0]}</td><td style={{ color: row[1].match(/FREE|БЕСПЛАТНО|KOSTENLOS|ÜCRETSİZ/) ? '#22c55e' : undefined, fontWeight: 600 }}>{row[1]}</td></tr>))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="sec" aria-labelledby="proc-h">
          <div className="ctr">
            <div className="sec-head"><span className="eyebrow">{t.procEyebrow}</span><h2 className="sec-h" id="proc-h">{t.procH}</h2></div>
            <ol className="step-grid" aria-label={t.procH}>
              {t.steps.map((s: string[]) => (<li key={s[0]}><span className="step-n" aria-hidden="true">{s[0]}</span><div className="step-t">{s[1]}</div><div className="step-d">{s[2]}</div></li>))}
            </ol>
          </div>
        </section>

        <OrnekGorselSeridi konu="bolge" yer={region.name} lang={lang} anahtarlar={['eve-gelen-terzi', 'erkek-takim-olcu']} sayfaUrl={`https://terzihizmeti.com.tr${basePath}/${region.slug}`} />

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 740 }}>
            <div className="sec-head"><span className="eyebrow">{t.faqEyebrow}</span><h2 className="sec-h" id="faq-h">{t.faqH}</h2></div>
            {regionFaq(lang, region.slug, region.name).map((item: string[]) => (
              <details key={item[0]} className="faq-item"><summary className="faq-q">{item[0]}</summary><p className="faq-a">{item[1]}</p></details>
            ))}
          </div>
        </section>
      </main>

      <section className="cta-final" aria-label="Contact">
        <h2 className="cta-h">{t.ctaH(region.name)}</h2>
        <p className="cta-sub">{t.ctaSub}</p>
        <div className="cta-btns">
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white"><span aria-hidden="true">💬</span> {t.waBtn}</a>
          <a href={maps} target="_blank" rel="noopener noreferrer" className="btn-outline-white"><span aria-hidden="true">📍</span> {t.mapsBtn}</a>
        </div>
      </section>

      <footer>
        <div>© {new Date().getFullYear()} Terzi Can · {region.name} · {PHONE}</div>
        <nav className="foot-links" aria-label="Region links">
          <Link href={basePath}>{lang === 'ru' ? '← Все районы' : lang === 'de' ? '← Alle Bezirke' : lang === 'tr' ? '← Tüm Bölgeler' : '← All Districts'}</Link>
          {allRegions.filter((r) => r.slug !== region.slug).map((r) => (
            <Link key={r.slug} href={`${basePath}/${r.slug}`}>{r.name}</Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
