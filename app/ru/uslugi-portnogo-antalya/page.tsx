import type { Metadata } from 'next';
import Image from 'next/image';

const SITE      = 'https://terzihizmeti.com.tr';
const PAGE_URL  = `${SITE}/ru/uslugi-portnogo-antalya`;
const TR_URL    = `${SITE}/antalya-terzi`;
const EN_URL    = `${SITE}/en/tailor-service-antalya`;
const DE_URL    = `${SITE}/de/schneiderservice-antalya`;
const PHONE     = '+90 531 898 64 18';
const PHONE_TEL = '+905318986418';
const WA_NUM    = '905318986418';
const WA        = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
const WA_DEF    = WA('Здравствуйте, хочу вызвать выездного портного в отель/по адресу. Мой адрес: ');
const MAPS      = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9';
const TODAY     = new Date().toISOString().split('T')[0];
const OG        = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Портной Анталья · Выездной портной в отель · Все районы',
  description: 'Пошив, ремонт, подгонка и глажка одежды во всех районах Антальи. Выездной портной приедет в ваш отель или по адресу — Белек, Лара, Кемер, Аланья, Сиде, Коньяалты. Говорим по-русски. ☎ ' + PHONE,
  keywords: [
    'портной Анталья', 'выездной портной Анталья', 'портной в отель Анталья',
    'русскоговорящий портной Анталья', 'ремонт одежды Анталья', 'подгонка одежды Анталья',
    'укорачивание брюк Анталья', 'глажка Анталья', 'химчистка Анталья',
    'портной Белек отель', 'портной Лара отель', 'портной Кемер отель', 'портной Аланья отель',
    'портной Сиде отель', 'ателье Коньяалты', 'подгонка свадебного платья Анталья',
    'пошив костюма Анталья', 'ремонт молнии Анталья',
  ],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { 'tr': TR_URL, 'en': EN_URL, 'ru': PAGE_URL, 'de': DE_URL, 'x-default': TR_URL },
  },
  openGraph: {
    title: 'Портной Анталья · Выездной портной в отель',
    description: 'Пошив, ремонт, подгонка и глажка во всех районах Антальи. Мы приедем к вам.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'ru_RU', alternateLocale: ['tr_TR'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Портной Анталья', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Портной Анталья — Выездной портной', description: 'Приедем в ваш отель во всех районах Антальи.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya', contact: PHONE },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: 'Портной Анталья — Выездной портной, ремонт, подгонка, глажка',
      description: 'Выездной портной во всех районах Антальи, в отелях и по адресам.',
      inLanguage: 'ru', dateModified: TODAY,
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-desc', '#seo-intro', '#faq'] },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Портной Анталья', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service', '@id': `${PAGE_URL}#service`,
      serviceType: 'Выездной пошив, ремонт, подгонка и глажка одежды',
      provider: { '@type': 'ClothingStore', name: 'Terzi Can', telephone: PHONE_TEL, url: SITE },
      areaServed: [
        'Konyaaltı', 'Muratpaşa', 'Kepez', 'Lara', 'Döşemealtı', 'Aksu', 'Belek', 'Kemer',
        'Serik', 'Manavgat', 'Side', 'Alanya', 'Gazipaşa', 'Kaş', 'Kalkan', 'Finike', 'Kumluca', 'Elmalı', 'Korkuteli',
      ].map((n) => ({ '@type': 'Place', name: n })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Пошив, ремонт, подгонка и глажка',
        itemListElement: [
          { '@type': 'Offer', price: '150', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Укорачивание' } },
          { '@type': 'Offer', price: '200', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Замена молнии' } },
          { '@type': 'Offer', price: '150', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Заужение талии' } },
          { '@type': 'Offer', price: '400', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Подгонка свадебного/вечернего платья' } },
          { '@type': 'Offer', price: '80', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Глажка' } },
          { '@type': 'Offer', price: '300', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Химчистка' } },
        ],
      },
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Вы приезжаете в отели Белека, Лары и Кемера?', acceptedAnswer: { '@type': 'Answer', text: `Да! Наш выездной портной приезжает во все отели Белека, Лары, Кемера, Аланьи и Сиде. Напишите название отеля в WhatsApp. WhatsApp: ${PHONE}` } },
        { '@type': 'Question', name: 'Выезд портного бесплатный?', acceptedAnswer: { '@type': 'Answer', text: 'Да, в Коньяалты, Муратпаше, Кепезе и Ларе выезд полностью бесплатный. Для более дальних районов детали согласуются заранее в WhatsApp.' } },
        { '@type': 'Question', name: 'Вы делаете глажку и химчистку?', acceptedAnswer: { '@type': 'Answer', text: 'Да, профессиональная паровая глажка и химчистка с забором и доставкой в отель или по адресу.' } },
        { '@type': 'Question', name: 'Можно сделать ремонт в тот же день?', acceptedAnswer: { '@type': 'Answer', text: `Да, большинство работ по ремонту и подгонке выполняются в тот же день или за 24 часа. WhatsApp: ${PHONE}` } },
        { '@type': 'Question', name: 'Вы говорите по-русски?', acceptedAnswer: { '@type': 'Answer', text: 'Да, наша команда говорит по-русски, английски, немецки и турецки.' } },
      ],
    },
  ],
};

const PRIORITY_DISTRICTS = [
  { name: 'Коньяалты', tag: 'Мастерская', note: 'Здесь наша мастерская — обслуживание в тот же день' },
  { name: 'Муратпаша', tag: 'Бесплатно', note: 'Бесплатный выезд, запись в тот же день' },
  { name: 'Кепез', tag: 'Бесплатно', note: 'Бесплатный выезд' },
  { name: 'Лара', tag: 'Бесплатно', note: 'Бесплатный выезд — все отели Лары' },
  { name: 'Дёшемеалты', tag: 'Рядом', note: 'Выезд по записи' },
  { name: 'Аксу', tag: 'Рядом', note: 'Выезд по записи' },
];

const OTHER_DISTRICTS = ['Белек', 'Кемер', 'Серик', 'Манавгат', 'Сиде', 'Аланья', 'Газипаша', 'Каш', 'Калкан', 'Финике', 'Кумлуджа', 'Эльмалы', 'Коркутели'];

const SERVICES = [
  { icon: '👔', tr: 'Пошив мужской одежды', en: 'Рубашки, брюки, костюмы', desc: 'Пошив одежды с нуля по индивидуальным меркам.', items: ['Рубашка', 'Брюки', 'Пиджак', 'Костюм', 'Костюм жениха'] },
  { icon: '👗', tr: 'Пошив женской одежды', en: 'Платья, блузы, юбки', desc: 'Индивидуальный дизайн и пошив по меркам на любой случай.', items: ['Платье', 'Блуза', 'Юбка', 'Вечернее платье', 'Свадебное платье'] },
  { icon: '🔧', tr: 'Ремонт одежды', en: 'Молнии, разрывы, пуговицы', desc: 'Повседневный ремонт — молнии, разорванные швы, пуговицы, подкладка.', items: ['Замена молнии', 'Ремонт разрыва', 'Ремонт пуговиц', 'Замена подкладки'] },
  { icon: '📏', tr: 'Подгонка одежды', en: 'Укорачивание, заужение', desc: 'Точная подгонка по фигуре — идеальная посадка.', items: ['Укорачивание', 'Заужение талии', 'Укорачивание рукавов', 'Изменение размера платья'] },
  { icon: '🧺', tr: 'Глажка и химчистка', en: 'Паровая глажка, химчистка', desc: 'Профессиональная паровая глажка и химчистка с забором и доставкой.', items: ['Глажка', 'Химчистка', 'Стирка и глажка'] },
  { icon: '🚗', tr: 'Выездной сервис / в отель', en: 'Мы приедем к вам', desc: 'Снятие мерок, забор и доставка в ваш отель или по адресу.', items: ['Выезд в отель', 'Выезд на дом', 'Бесплатный забор и доставка'] },
];

const REPAIR_CATEGORIES = [
  { icon: '✂️', title: 'Пошив', keyword: 'пошив на заказ Анталья', desc: 'Пошив одежды с нуля по индивидуальным меркам.',
    rows: [['Мужская рубашка', '₺350+'], ['Мужские брюки', '₺400+'], ['Женское платье', '₺600+'], ['Вечернее платье', '₺900+'], ['Детская одежда', '₺250+']] as [string, string][] },
  { icon: '🔧', title: 'Ремонт', keyword: 'ремонт одежды Анталья', desc: 'Молнии, разрывы, пуговицы — повседневный ремонт.',
    rows: [['Замена молнии (брюки)', '₺200+'], ['Замена молнии (пальто)', '₺300+'], ['Ремонт разрыва / шва', '₺150+'], ['Ремонт пуговиц', '₺60+'], ['Замена подкладки', '₺300+']] as [string, string][] },
  { icon: '📏', title: 'Подгонка', keyword: 'укорачивание брюк Анталья', desc: 'Точная подгонка по фигуре.',
    rows: [['Укорачивание', '₺150+'], ['Заужение талии', '₺150+'], ['Укорачивание рукавов', '₺200+'], ['Изменение размера платья', '₺200+'], ['Свадебное/вечернее платье', '₺400+']] as [string, string][] },
  { icon: '🧺', title: 'Глажка и химчистка', keyword: 'глажка химчистка Анталья', desc: 'Профессиональная паровая глажка и химчистка.',
    rows: [['Глажка (за вещь)', '₺80+'], ['Химчистка (платье)', '₺300+'], ['Химчистка (пальто)', '₺500+'], ['Стирка и глажка (за кг)', '₺80+/кг']] as [string, string][] },
];

const FAQS: [string, string][] = [
  ['Вы приезжаете в отели Белека, Лары и Кемера?', 'Да! Наш выездной портной приезжает во все отели Белека, Лары, Кемера, Аланьи и Сиде. Просто напишите название отеля в WhatsApp.'],
  ['Выезд портного бесплатный?', 'Да, полностью бесплатно в Коньяалты, Муратпаше, Кепезе и Ларе. Для более дальних районов детали согласуем заранее в WhatsApp.'],
  ['Вы делаете глажку и химчистку?', 'Да — профессиональная паровая глажка и химчистка, с забором и доставкой в отель или по адресу.'],
  ['Можно сделать срочный ремонт перед мероприятием?', 'Да, большинство работ по ремонту и подгонке выполняются в тот же день или за 24 часа.'],
  ['Вы обслуживаете все районы Антальи?', 'Да — Коньяалты, Муратпаша, Кепез, Лара и Дёшемеалты с бесплатным выездом; Белек, Кемер, Сиде, Аланья, Манавгат и все остальные районы по записи.'],
  ['Вы говорите по-русски?', 'Да, наша команда говорит по-русски, английски, немецки и турецки.'],
];

const PROCESS_STEPS: [string, string, string][] = [
  ['01', 'Отправьте геолокацию', 'Напишите название отеля или адрес в WhatsApp.'],
  ['02', 'Снятие мерок / дизайн', 'Мы снимаем мерки по вашему адресу или обсуждаем детали дизайна.'],
  ['03', 'Пошив / Ремонт', 'Работа выполняется в нашей мастерской в Коньяалты.'],
  ['04', 'Доставка', 'Бесплатная доставка в приоритетные районы; по записи — в остальные районы Антальи.'],
];

export default function UslugiPortnogoAntalyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <a href="#main-content" className="skip-link">Перейти к содержанию</a>

      <div style={{ background: '#1E3329', color: '#F5F1E8', fontFamily: 'var(--font-inter), system-ui, sans-serif', lineHeight: 1.6, minHeight: '100vh' }}>

        <nav className="nav" aria-label="Основная навигация">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Главная</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP <span aria-hidden="true">→</span></a>
        </nav>

        <header className="hero">
          <div className="hero-bg" aria-hidden="true">
            <Image src="/terzi-can-hero.jpg" alt="" fill priority fetchPriority="high" sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 15%', filter: 'brightness(.32) saturate(.75)' }} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">📍 Все районы Антальи · Выезд в отель и по адресу</span>
            <span className="hero-eng">Портной Анталья</span>
            <h1 id="hero-h">Пошив, ремонт, подгонка<br /><span className="accent">прямо в ваш отель</span></h1>
            <p className="hero-desc" id="hero-desc">
              Из нашей мастерской в Коньяалты Terzi Can обслуживает все районы Антальи — Белек, Лару, Кемер,
              Аланью, Сиде и другие. Пошив, ремонт, подгонка, глажка и химчистка с выездным портным,
              который приедет в ваш отель или по адресу.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span aria-hidden="true">💬</span> Отправить геолокацию <span aria-hidden="true">→</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary"><span aria-hidden="true">📞</span> {PHONE}</a>
            </div>
          </div>
        </header>

        <main id="main-content">
          <div className="seo-intro-wrap">
            <p className="seo-intro" id="seo-intro">
              <strong style={{ color: '#C9A96E' }}>Портной Анталья</strong> — Terzi Can обслуживает все районы
              Антальи: пошив, ремонт, подгонка, глажка и химчистка. Наш выездной портной приезжает в отели и
              по адресам в Белеке, Ларе, Кемере, Аланье, Сиде, Манавгате и других районах, помимо нашей
              мастерской в Коньяалты.
            </p>
          </div>

          <section className="sec" aria-labelledby="nb-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">📍 Районы Антальи</span>
                <h2 className="sec-h" id="nb-h">Начинаем с района, ближайшего к вам</h2>
                <p className="sec-sub">Бесплатный выезд в приоритетные районы; по записи — во все остальные районы Антальи.</p>
              </div>
              <ul className="nb-grid" aria-label="Приоритетные районы">
                {PRIORITY_DISTRICTS.map((n) => (
                  <li key={n.name} className={`nb-card${n.tag !== 'Рядом' ? ' priority' : ''}`}>
                    <div className="nb-top"><span className="nb-name">{n.name}</span><span className={`nb-tag ${n.tag !== 'Рядом' ? 'oncelikli' : 'yakin'}`}>{n.tag}</span></div>
                    <div className="nb-note">{n.note}</div>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', marginTop: '1rem', marginBottom: '.4rem' }}>
                Также обслуживаем следующие районы Антальи по записи:
              </p>
              <ul className="other-districts" aria-label="Другие обслуживаемые районы">
                {OTHER_DISTRICTS.map((d) => (<li key={d} className="od-chip">{d}</li>))}
              </ul>
            </div>
          </section>

          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="workshop" aria-labelledby="wk-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">Мастерская пошива и ремонта</span>
                <h2 className="sec-h" id="wk-h">Пошив · Ремонт · Подгонка · Глажка</h2>
                <p className="sec-sub">Полноценная текстильная мастерская — от пошива на заказ до срочного ремонта.</p>
              </div>
              <div className="wk-grid">
                {SERVICES.map((s) => (
                  <article className="wk-card" key={s.tr}>
                    <div className="wk-icon" aria-hidden="true">{s.icon}</div>
                    <h3 className="wk-tr">{s.tr}</h3>
                    <span className="wk-en">{s.en}</span>
                    <p className="wk-desc">{s.desc}</p>
                    <ul className="wk-items" aria-label={`${s.tr} — состав услуги`}>
                      {s.items.map((i) => <li key={i} className="wk-item">{i}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a href={WA('Здравствуйте, хочу узнать цену на пошив/ремонт/подгонку.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span aria-hidden="true">💬</span> Узнать цену <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          <section className="sec" id="fiyatlar" aria-labelledby="price-h">
            <div className="ctr">
              <div className="sec-head">
                <span className="eyebrow">₺ Прозрачные цены 2026</span>
                <h2 className="sec-h" id="price-h">Цены на пошив, ремонт, подгонку и глажку</h2>
                <p className="sec-sub">Отправьте фото в WhatsApp для точной цены.</p>
              </div>
              <div className="price-grid">
                {REPAIR_CATEGORIES.map((cat) => (
                  <article className="price-card" key={cat.title}>
                    <div className="price-head">
                      <span className="price-icon" aria-hidden="true">{cat.icon}</span>
                      <div><h4 className="price-tr">{cat.title}</h4><span className="price-kw">{cat.keyword}</span></div>
                    </div>
                    <p className="price-desc">{cat.desc}</p>
                    <table className="price-table" aria-label={cat.title}>
                      <caption className="visually-hidden">{cat.title} — прайс-лист</caption>
                      <thead><tr><th scope="col" className="visually-hidden">Услуга</th><th scope="col" className="visually-hidden">Цена</th></tr></thead>
                      <tbody>{cat.rows.map((row) => (<tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td></tr>))}</tbody>
                    </table>
                  </article>
                ))}
              </div>
              <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1rem', fontStyle: 'italic' }}>
                Цены указаны от, могут меняться в зависимости от ткани и сложности работы. НДС включён.
              </p>
              <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
                <a href={WA('Здравствуйте, хочу узнать цены на пошив/ремонт/глажку.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span aria-hidden="true">📲</span> Узнать цену
                </a>
              </div>
            </div>
          </section>

          <section className="sec" aria-labelledby="proc-h">
            <div className="ctr">
              <div className="sec-head"><span className="eyebrow">Процесс</span><h2 className="sec-h" id="proc-h">Как мы работаем</h2></div>
              <ol className="step-grid" aria-label="Этапы обслуживания">
                {PROCESS_STEPS.map((step) => (
                  <li key={step[0]}><span className="step-n" aria-hidden="true">{step[0]}</span><div className="step-t">{step[1]}</div><div className="step-d">{step[2]}</div></li>
                ))}
              </ol>
            </div>
          </section>

          <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} id="faq" aria-labelledby="faq-h">
            <div className="ctr" style={{ maxWidth: 740 }}>
              <div className="sec-head"><span className="eyebrow">Вопросы</span><h2 className="sec-h" id="faq-h">Часто задаваемые вопросы</h2></div>
              {FAQS.map((item) => (
                <details key={item[0]} className="faq-item"><summary className="faq-q">{item[0]}</summary><p className="faq-a">{item[1]}</p></details>
              ))}
            </div>
          </section>
        </main>

        <section className="cta-final" aria-label="Связаться с нами">
          <h2 className="cta-h">Портной в каждом районе<br />Антальи — мы приедем к вам</h2>
          <p className="cta-sub">Отель или домашний адрес, пошив или ремонт — просто напишите ваше местоположение.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white"><span aria-hidden="true">💬</span> Написать в WhatsApp</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white"><span aria-hidden="true">📍</span> Google Maps</a>
          </div>
        </section>

        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Портной Анталья · {PHONE}</div>
          <nav className="foot-links" aria-label="Ссылки в подвале">
            <a href="/">Ana Sayfa (TR)</a>
            <a href={EN_URL}>English</a>
            <a href={DE_URL}>Deutsch</a>
            <a href={TR_URL}>Türkçe — Konyaaltı Terzi</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
          <p style={{ marginTop: '1rem', fontSize: '.68rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.8 }}>
            Портной Анталья — пошив, ремонт, подгонка и глажка во всех районах Антальи: Коньяалты, Муратпаша,
            Кепез, Лара, Белек, Кемер, Сиде, Аланья, Манавгат и другие. Выездной портной в отель или по адресу. {PHONE}
          </p>
        </footer>
      </div>
    </>
  );
}
