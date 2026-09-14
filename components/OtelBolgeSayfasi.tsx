import Image from 'next/image';
import type { OtelBolgesi } from '@/lib/otel-bolgeleri';

const PHONE = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM = '905318986418';

type Lang = 'en' | 'ru' | 'de';

const T: Record<Lang, any> = {
  en: {
    homeLabel: '← Home', tag: (r: string) => `📍 ${r} Hotel Zone · Mobile Tailor`,
    h1: (r: string) => <>Hotel Tailor<br /><span className="accent">{r}</span></>,
    heroDesc: (r: string, blurb: string) => `${blurb} Terzi Can's mobile tailor comes directly to your hotel in ${r} — measurement, tailoring, alterations, ironing and dry cleaning delivered back to your room.`,
    waShare: 'Share Hotel Name', callLabel: PHONE,
    aboutH: (r: string) => `About ${r}`, travelLabel: 'Travel time:',
    hotelsH: (r: string) => `Hotels We Serve in ${r}`, hotelsSub: 'We come to every hotel here — just tell us your hotel name on WhatsApp.',
    otherHotelsNote: '+ every other hotel in this district.',
    servicesEyebrow: 'Tailoring & Repair Workshop', servicesH: 'Tailoring · Repair · Alterations · Ironing', servicesSub: 'A full-capacity textile workshop, delivered to your hotel.',
    services: [
      { icon: '👔', tr: 'Tailoring', en: 'Custom-fit clothing', desc: 'Custom-fit garments made to your exact measurements.', items: ['Shirt', 'Trousers', 'Suit', 'Dress'] },
      { icon: '🔧', tr: 'Repair', en: 'Zippers, tears, buttons', desc: 'Everyday repairs — zippers, torn seams, buttons, lining.', items: ['Zipper Replacement', 'Tear Repair', 'Lining Replacement'] },
      { icon: '📏', tr: 'Alterations', en: 'Hemming, taking in', desc: 'Precise fit adjustments so clothing sits exactly right.', items: ['Hemming', 'Waist Taking In', 'Sleeve Shortening'] },
      { icon: '🧺', tr: 'Ironing & Dry Cleaning', en: 'Steam press, dry cleaning', desc: 'Professional steam ironing and dry cleaning, picked up and delivered.', items: ['Ironing', 'Dry Cleaning'] },
    ],
    priceEyebrow: '₺ Transparent Prices', priceH: 'Prices', priceSub: 'The hotel visit is free — you only pay for the work.',
    priceRows: [['Hotel Visit', 'FREE'], ['Hemming', '₺150+'], ['Zipper Replacement', '₺200+'], ['Dress / Suit Alteration', '₺200+'], ['Wedding Dress Alteration', '₺500+'], ['Ironing (per item)', '₺80+'], ['Dry Cleaning', '₺300+']],
    procEyebrow: 'Process', procH: 'How It Works',
    steps: [
      ['01', 'Share Hotel & Room', `Send hotel name and room number to ${PHONE}`],
      ['02', 'Booking Within 30 Min', 'We confirm a convenient time'],
      ['03', 'On-Site Measurement', 'Tailor visits, measures and collects the garment'],
      ['04', '24–48h Delivery', 'Finished garment delivered back to your room'],
    ],
    faqEyebrow: 'FAQ', faqH: 'Frequently Asked Questions',
    faq: (r: string) => [
      [`Do you come to all hotels in ${r}?`, `Yes! We visit every hotel in ${r} — share your hotel name and room number on WhatsApp.`],
      ['Is the hotel visit free?', 'Yes, completely free — you only pay for the tailoring or repair work.'],
      ['How fast is the service?', 'Most repairs and hemming are completed within 24–48 hours.'],
      ['Do you speak English?', 'Yes, our team speaks English, Russian, German and Turkish.'],
    ],
    ctaH: (r: string) => <>Hotel Tailor in {r}<br />We Come to You</>, ctaSub: 'Share your hotel name — booked within 30 minutes.',
    waBtn: 'Message on WhatsApp', mapsBtn: 'Google Maps',
    footTitle: 'Related', related: [] as [string, string][],
  },
  ru: {
    homeLabel: '← Главная', tag: (r: string) => `📍 Отельная зона ${r} · Выездной портной`,
    h1: (r: string) => <>Портной в отеле<br /><span className="accent">{r}</span></>,
    heroDesc: (r: string, blurb: string) => `${blurb} Выездной портной Terzi Can приедет прямо в ваш отель в районе ${r} — снятие мерок, пошив, подгонка, глажка и химчистка с доставкой в номер.`,
    waShare: 'Отправить название отеля', callLabel: PHONE,
    aboutH: (r: string) => `О районе ${r}`, travelLabel: 'Время в пути:',
    hotelsH: (r: string) => `Отели, которые мы обслуживаем в ${r}`, hotelsSub: 'Мы приезжаем в каждый отель — просто напишите название отеля в WhatsApp.',
    otherHotelsNote: '+ все остальные отели этого района.',
    servicesEyebrow: 'Мастерская пошива и ремонта', servicesH: 'Пошив · Ремонт · Подгонка · Глажка', servicesSub: 'Полноценная текстильная мастерская с доставкой в ваш отель.',
    services: [
      { icon: '👔', tr: 'Пошив', en: 'Одежда по меркам', desc: 'Пошив одежды по вашим точным меркам.', items: ['Рубашка', 'Брюки', 'Костюм', 'Платье'] },
      { icon: '🔧', tr: 'Ремонт', en: 'Молнии, разрывы, пуговицы', desc: 'Повседневный ремонт — молнии, швы, пуговицы, подкладка.', items: ['Замена молнии', 'Ремонт разрыва', 'Замена подкладки'] },
      { icon: '📏', tr: 'Подгонка', en: 'Укорачивание, заужение', desc: 'Точная подгонка по фигуре.', items: ['Укорачивание', 'Заужение талии', 'Укорачивание рукавов'] },
      { icon: '🧺', tr: 'Глажка и химчистка', en: 'Паровая глажка, химчистка', desc: 'Профессиональная глажка и химчистка с забором и доставкой.', items: ['Глажка', 'Химчистка'] },
    ],
    priceEyebrow: '₺ Прозрачные цены', priceH: 'Цены', priceSub: 'Выезд в отель бесплатный — платите только за работу.',
    priceRows: [['Выезд в отель', 'БЕСПЛАТНО'], ['Укорачивание', 'от ₺150'], ['Замена молнии', 'от ₺200'], ['Подгонка платья/костюма', 'от ₺200'], ['Подгонка свадебного платья', 'от ₺500'], ['Глажка (за вещь)', 'от ₺80'], ['Химчистка', 'от ₺300']],
    procEyebrow: 'Процесс', procH: 'Как мы работаем',
    steps: [
      ['01', 'Отель и номер', `Отправьте название отеля и номер комнаты на ${PHONE}`],
      ['02', 'Запись за 30 минут', 'Мы согласуем удобное время'],
      ['03', 'Снятие мерок на месте', 'Портной приезжает, снимает мерки и забирает вещь'],
      ['04', 'Доставка за 24–48ч', 'Готовая вещь доставляется обратно в номер'],
    ],
    faqEyebrow: 'Вопросы', faqH: 'Часто задаваемые вопросы',
    faq: (r: string) => [
      [`Вы приезжаете во все отели ${r}?`, `Да! Мы приезжаем в каждый отель района ${r} — напишите название отеля и номер комнаты в WhatsApp.`],
      ['Выезд в отель бесплатный?', 'Да, полностью бесплатный — вы платите только за саму работу.'],
      ['Как быстро выполняется услуга?', 'Большинство работ выполняется за 24–48 часов.'],
      ['Вы говорите по-русски?', 'Да, наша команда говорит по-русски, английски, немецки и турецки.'],
    ],
    ctaH: (r: string) => <>Портной в отеле {r}<br />Мы приедем к вам</>, ctaSub: 'Отправьте название отеля — запись за 30 минут.',
    waBtn: 'Написать в WhatsApp', mapsBtn: 'Google Maps',
    footTitle: 'Похожие', related: [] as [string, string][],
  },
  de: {
    homeLabel: '← Startseite', tag: (r: string) => `📍 Hotelzone ${r} · Mobiler Schneider`,
    h1: (r: string) => <>Schneider im Hotel<br /><span className="accent">{r}</span></>,
    heroDesc: (r: string, blurb: string) => `${blurb} Der mobile Schneider von Terzi Can kommt direkt zu Ihrem Hotel in ${r} — Maßnehmen, Schneidern, Änderungen, Bügeln und chemische Reinigung, geliefert auf Ihr Zimmer.`,
    waShare: 'Hotelnamen senden', callLabel: PHONE,
    aboutH: (r: string) => `Über ${r}`, travelLabel: 'Anfahrtszeit:',
    hotelsH: (r: string) => `Hotels, die wir in ${r} bedienen`, hotelsSub: 'Wir kommen zu jedem Hotel — teilen Sie einfach Ihren Hotelnamen per WhatsApp mit.',
    otherHotelsNote: '+ alle anderen Hotels in diesem Bezirk.',
    servicesEyebrow: 'Schneider- und Reparaturwerkstatt', servicesH: 'Schneiderei · Reparatur · Änderungen · Bügelservice', servicesSub: 'Eine voll ausgestattete Textilwerkstatt, geliefert in Ihr Hotel.',
    services: [
      { icon: '👔', tr: 'Schneiderei', en: 'Maßgeschneiderte Kleidung', desc: 'Maßanfertigung nach Ihren genauen Maßen.', items: ['Hemd', 'Hose', 'Anzug', 'Kleid'] },
      { icon: '🔧', tr: 'Reparatur', en: 'Reißverschlüsse, Risse, Knöpfe', desc: 'Alltägliche Reparaturen — Reißverschlüsse, Nähte, Knöpfe, Futter.', items: ['Reißverschluss ersetzen', 'Riss reparieren', 'Futter ersetzen'] },
      { icon: '📏', tr: 'Änderungen', en: 'Kürzen, enger machen', desc: 'Präzise Passform-Anpassungen für perfekten Sitz.', items: ['Kürzen', 'Taille enger machen', 'Ärmel kürzen'] },
      { icon: '🧺', tr: 'Bügelservice & Reinigung', en: 'Dampfbügeln, Reinigung', desc: 'Professionelles Bügeln und chemische Reinigung mit Abholung und Lieferung.', items: ['Bügeln', 'Chemische Reinigung'] },
    ],
    priceEyebrow: '₺ Transparente Preise', priceH: 'Preise', priceSub: 'Der Hotelbesuch ist kostenlos — Sie zahlen nur für die Arbeit.',
    priceRows: [['Hotelbesuch', 'KOSTENLOS'], ['Kürzen', 'ab ₺150'], ['Reißverschluss ersetzen', 'ab ₺200'], ['Kleid-/Anzugänderung', 'ab ₺200'], ['Brautkleid ändern', 'ab ₺500'], ['Bügeln (pro Stück)', 'ab ₺80'], ['Chemische Reinigung', 'ab ₺300']],
    procEyebrow: 'Ablauf', procH: 'So funktioniert es',
    steps: [
      ['01', 'Hotel & Zimmer angeben', `Senden Sie Hotelname und Zimmernummer an ${PHONE}`],
      ['02', 'Termin in 30 Min', 'Wir bestätigen eine passende Zeit'],
      ['03', 'Maßnehmen vor Ort', 'Schneider kommt, nimmt Maß und das Kleidungsstück mit'],
      ['04', 'Lieferung in 24–48 Std', 'Fertiges Kleidungsstück wird zurück auf Ihr Zimmer geliefert'],
    ],
    faqEyebrow: 'FAQ', faqH: 'Häufig gestellte Fragen',
    faq: (r: string) => [
      [`Kommen Sie zu allen Hotels in ${r}?`, `Ja! Wir besuchen jedes Hotel in ${r} — teilen Sie Hotelname und Zimmernummer per WhatsApp mit.`],
      ['Ist der Hotelbesuch kostenlos?', 'Ja, völlig kostenlos — Sie zahlen nur für die eigentliche Arbeit.'],
      ['Wie schnell ist der Service?', 'Die meisten Reparaturen werden innerhalb von 24–48 Stunden erledigt.'],
      ['Sprechen Sie Deutsch?', 'Ja, unser Team spricht Deutsch, Englisch, Russisch und Türkisch.'],
    ],
    ctaH: (r: string) => <>Schneider im Hotel {r}<br />Wir kommen zu Ihnen</>, ctaSub: 'Hotelnamen senden — Termin in 30 Minuten.',
    waBtn: 'Auf WhatsApp schreiben', mapsBtn: 'Google Maps',
    footTitle: 'Ähnlich', related: [] as [string, string][],
  },
};

export default function OtelBolgeSayfasi({ lang, region, allRegions, basePath, maps }: {
  lang: Lang; region: OtelBolgesi; allRegions: OtelBolgesi[]; basePath: string; maps: string;
}) {
  const t = T[lang];
  const waMsg = lang === 'ru' ? `Здравствуйте, я в отеле в районе ${region.name}. Мой отель: `
    : lang === 'de' ? `Hallo, ich bin in einem Hotel in ${region.name}. Mein Hotel: `
    : `Hello, I am at a hotel in ${region.name}. My hotel: `;
  const WA_URL = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
  const WA_DEF = WA_URL(waMsg);

  return (
    <div style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: 'var(--font-inter), system-ui, sans-serif', lineHeight: 1.6, minHeight: '100vh' }}>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <nav className="nav" aria-label="Main navigation">
        <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
        <a href="/" className="nav-home">{t.homeLabel}</a>
        <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP <span aria-hidden="true">→</span></a>
      </nav>

      <header className="hero">
        <div className="hero-bg" aria-hidden="true">
          <Image src="/terzi-can-hero.jpg" alt="" fill priority fetchPriority="high" sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 15%', filter: 'brightness(.32) saturate(.75)' }} />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <span className="hero-tag">{t.tag(region.name)}</span>
          <span className="hero-eng">Terzi Can</span>
          <h1 id="hero-h">{t.h1(region.name)}</h1>
          <p className="hero-desc" id="hero-desc">{t.heroDesc(region.name, region.blurb[lang])}</p>
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
            <p className="sec-sub" style={{ marginBottom: '.6rem' }}>{region.blurb[lang]}</p>
            <p style={{ fontSize: '.85rem', color: '#C9A96E', fontWeight: 700 }}>🚗 {t.travelLabel} {region.travelTime[lang]}</p>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="hotels-h">
          <div className="ctr">
            <div className="sec-head">
              <h2 className="sec-h" id="hotels-h">{t.hotelsH(region.name)}</h2>
              <p className="sec-sub">{t.hotelsSub}</p>
            </div>
            <ul className="other-districts" aria-label="Hotels">
              {region.hotels.map((h) => (<li key={h} className="od-chip">{h}</li>))}
            </ul>
            <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', marginTop: '1rem', fontStyle: 'italic' }}>{t.otherHotelsNote}</p>
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
              {t.services.map((s: any) => (
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
                {t.priceRows.map((row: string[]) => (<tr key={row[0]}><td>{row[0]}</td><td style={{ color: row[1].match(/FREE|БЕСПЛАТНО|KOSTENLOS/) ? '#22c55e' : undefined, fontWeight: 600 }}>{row[1]}</td></tr>))}
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

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 740 }}>
            <div className="sec-head"><span className="eyebrow">{t.faqEyebrow}</span><h2 className="sec-h" id="faq-h">{t.faqH}</h2></div>
            {t.faq(region.name).map((item: string[]) => (
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
          <a href={basePath}>{lang === 'ru' ? '← Все районы' : lang === 'de' ? '← Alle Bezirke' : '← All Districts'}</a>
          {allRegions.filter((r) => r.slug !== region.slug).map((r) => (
            <a key={r.slug} href={`${basePath}/${r.slug}`}>{r.name}</a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
