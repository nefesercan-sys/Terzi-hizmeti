import type { Metadata } from 'next';
import OrnekGorselSeridi from '@/components/OrnekGorselSeridi';
import FabricsOrderBlock from '@/components/FabricsOrderBlock';
import { DELIVERY } from '@/lib/delivery';
import ReviewsBlock from '@/components/ReviewsBlock';
import { businessNode } from '@/lib/turist-keten';
import { INTL_ALT } from '@/lib/intl';
import Image from 'next/image';
import { fitDesc } from '@/lib/meta-fit';

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
const MAPS      = 'https://www.google.com/maps?cid=6436895271281342624';
const TODAY     = '2026-10-04';
const OG        = `${SITE}/terzi-can-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: "Портной в Анталье: ремонт, подгонка, пошив · Ежедневно" },
  description: fitDesc('Пошив, ремонт и подгонка одежды в Анталье. Портной приедет в отель или по адресу: Белек, Лара, Кемер, Сиде, Коньяалты. Говорим по-русски. ☎ ' + PHONE),
  keywords: ['портной Анталья', 'выездной портной Анталья', 'портной в отель Анталья', 'срочная подгонка одежды Анталья', 'портной Коньяалты', 'русскоговорящий портной Анталья', 'ремонт одежды Анталья', 'подшить брюки Анталья'],
  authors: [{ name: 'Terzi Can', url: SITE }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: {
    canonical: PAGE_URL,
    languages: { 'tr': TR_URL, 'en': EN_URL, 'ru': PAGE_URL, 'de': DE_URL, ...INTL_ALT, 'x-default': TR_URL },
  },
  openGraph: {
    title: 'Портной Анталья · Выездной портной в отель',
    description: 'Пошив, ремонт, подгонка и глажка во всех районах Антальи. Мы приедем к вам.',
    url: PAGE_URL, siteName: 'Terzi Hizmeti', locale: 'ru_RU', alternateLocale: ['tr_TR'], type: 'website',
    images: [{ url: OG, width: 1024, height: 1024, alt: 'Портной Анталья', type: 'image/jpeg' }],
  },
  twitter: { card: 'summary_large_image', title: 'Портной Анталья — Выездной портной', description: 'Приедем в ваш отель во всех районах Антальи.', images: [OG] },
  other: { 'geo.region': 'TR-07', 'geo.placename': 'Antalya', contact: PHONE },
};

// Самые частые вопросы для быстрых ответов поиска/ИИ (короткие, прямые ответы)
const EXTRA_FAQS: [string, string][] = [
  ['Где в Анталье подшить брюки рядом со мной?', 'В ателье Terzi Can в Хурме (Коньяалты), открыто ежедневно с 08:00 до 23:00. Подшив брюк и джинсов обычно готов на следующий день, срочно — за 1–2 часа. WhatsApp: ' + PHONE],
  ['Сколько стоит подшив и замена молнии в Анталье?', 'Цена зависит от вещи и работы: подшив, ушивание по талии, замена молнии, подгонка вечерних и свадебных платьев. Точную цену назовём по фото в WhatsApp.'],
  ['Вы переделываете куртки, пальто, рубашки, юбки и шорты?', 'Да. Переделываем и ремонтируем куртки, пальто, рубашки, юбки, шорты, платья и брюки, мужские и женские. Пришлите фото вещи в WhatsApp — назовём цену и срок.'],
  ['Я живу в отеле всего несколько дней. Успеете?', 'Да. Подшив и ремонт обычно готовы на следующий день, срочно — за 1–2 часа; заберём вещи из отеля и вернём обратно (для отелей бесплатно).'],
  ['Какой график работы и как связаться?', 'Ежедневно с 08:00 до 23:00. Звоните или пишите в WhatsApp ' + PHONE + '. Мастерская находится в Хурме, Коньяалты, Анталья.'],
];

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
        'Serik', 'Side', ].map((n) => ({ '@type': 'Place', name: n })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Пошив, ремонт, подгонка и глажка',
        itemListElement: [
          { '@type': 'Offer', price: '200', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Укорачивание' } },
          { '@type': 'Offer', price: '300', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Замена молнии' } },
          { '@type': 'Offer', price: '200', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Заужение талии' } },
          { '@type': 'Offer', price: '800', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Подгонка свадебного/вечернего платья' } },
          { '@type': 'Offer', price: '80', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Глажка' } },
          { '@type': 'Offer', price: '300', priceCurrency: 'TRY', availability: 'https://schema.org/InStock', itemOffered: { '@type': 'Service', name: 'Химчистка' } },
        ],
      },
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'Вы приезжаете в отели Белека, Лары и Кемера?', acceptedAnswer: { '@type': 'Answer', text: `Да! Наш выездной портной приезжает во все отели Белека, Лары, Кемера и Сиде. Напишите название отеля в WhatsApp. WhatsApp: ${PHONE}` } },
        { '@type': 'Question', name: 'Выезд портного бесплатный?', acceptedAnswer: { '@type': 'Answer', text: 'Да, в Коньяалты выезд полностью бесплатный; в другие районы стоимость зависит от расстояния. Для более дальних районов детали согласуются заранее в WhatsApp.' } },
        { '@type': 'Question', name: 'Вы делаете глажку и химчистку?', acceptedAnswer: { '@type': 'Answer', text: 'Да, профессиональная паровая глажка и химчистка с забором и доставкой в отель или по адресу.' } },
        { '@type': 'Question', name: 'Как быстро делаете срочный ремонт?', acceptedAnswer: { '@type': 'Answer', text: `Да, большинство работ по ремонту и подгонке выполняются на следующий день, срочно — за 1–2 часа. WhatsApp: ${PHONE}` } },
        { '@type': 'Question', name: 'Вы говорите по-русски?', acceptedAnswer: { '@type': 'Answer', text: 'Да — напишите нам в WhatsApp на своём языке, и мы ответим.' } },
        ...EXTRA_FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      ],
    },
  ],
};

const PRIORITY_DISTRICTS = [
  { name: 'Коньяалты', tag: 'Мастерская', note: 'Здесь наша мастерская — обслуживание на следующий день' },
  { name: 'Муратпаша', tag: 'Бесплатно', note: 'Бесплатный выезд, запись на следующий день' },
  { name: 'Кепез', tag: 'Бесплатно', note: 'Бесплатный выезд' },
  { name: 'Лара', tag: 'Бесплатно', note: 'Бесплатный выезд — все отели Лары' },
  { name: 'Дёшемеалты', tag: 'Рядом', note: 'Выезд по записи' },
  { name: 'Аксу', tag: 'Рядом', note: 'Выезд по записи' },
];

const OTHER_DISTRICTS = ['Белек', 'Кемер', 'Серик', 'Сиде'];

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
    rows: [['Мужские брюки', ''], ['Женское платье', ''], ['Вечернее платье', ''], ['Детская одежда', '']] as [string, string][] },
  { icon: '🔧', title: 'Ремонт', keyword: 'ремонт одежды Анталья', desc: 'Молнии, разрывы, пуговицы — повседневный ремонт.',
    rows: [['Замена молнии (брюки)', ''], ['Замена молнии (пальто)', ''], ['Ремонт пуговиц', ''], ['Замена подкладки', '']] as [string, string][] },
  { icon: '📏', title: 'Подгонка', keyword: 'укорачивание брюк Анталья', desc: 'Точная подгонка по фигуре.',
    rows: [['Укорачивание', ''], ['Заужение талии', ''], ['Укорачивание рукавов', ''], ['Изменение размера платья', ''], ['Свадебное/вечернее платье', '']] as [string, string][] },
  { icon: '🧺', title: 'Глажка и химчистка', keyword: 'глажка химчистка Анталья', desc: 'Профессиональная паровая глажка и химчистка.',
    rows: [['Глажка (за вещь)', ''], ['Химчистка (платье)', ''], ['Химчистка (пальто)', ''], ['Стирка и глажка (за кг)', '₺80+/кг']] as [string, string][] },
];

const FAQS: [string, string][] = [
  ['Вы приезжаете в отели Белека, Лары и Кемера?', 'Да! Наш выездной портной приезжает во все отели Белека, Лары, Кемера и Сиде. Просто напишите название отеля в WhatsApp.'],
  ['Выезд портного бесплатный?', 'Да, полностью бесплатно в Коньяалты; в другие районы стоимость зависит от расстояния. Для более дальних районов детали согласуем заранее в WhatsApp.'],
  ['Вы делаете глажку и химчистку?', 'Да — профессиональная паровая глажка и химчистка, с забором и доставкой в отель или по адресу.'],
  ['Можно сделать срочный ремонт перед мероприятием?', 'Да, большинство работ по ремонту и подгонке выполняются на следующий день, срочно — за 1–2 часа.'],
  ['Вы обслуживаете ближайшие районы Антальи?', 'Да — бесплатный выезд в Коньяалты; Муратпаша, Кепез, Лара, Дёшемеалты, Белек, Кемер, Сиде и ближайшие районы по записи, стоимость выезда зависит от расстояния.'],
  ['Вы говорите по-русски?', 'Да — напишите нам в WhatsApp на своём языке, и мы ответим.'],
  ...EXTRA_FAQS,
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
              Terzi Can — портной в Коньяалты (Анталья): подшив, подгонка, ремонт и пошив по меркам; на связи в WhatsApp и по телефону +90 531 898 64 18 ежедневно с 08:00 до 23:00. {DELIVERY.ru.urgent} {DELIVERY.ru.normal} Забор и доставка в отели бесплатны везде, где мы работаем: Лара, Белек, Сиде, Кемер и другие районы.
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
              по адресам в Белеке, Ларе, Кемере, Сиде и других районах, помимо нашей
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
                <span className="eyebrow">Цены</span>
                <h2 className="sec-h" id="price-h">Пошив, ремонт, подгонка и глажка</h2>
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
                      <tbody>{cat.rows.map((row) => (<tr key={row[0]}><td colSpan={2}>{row[0]}</td></tr>))}</tbody>
                    </table>
                  </article>
                ))}
              </div>
              <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', marginTop: '1rem', fontStyle: 'italic' }}>
                Цена зависит от ткани и сложности работы; перед началом мы подтверждаем её в WhatsApp.
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

      <OrnekGorselSeridi konu={['terzi','fiyat']} lang="ru" anahtarlar={['eve-gelen-terzi', 'erkek-takim-olcu', 'abiye-elbise-atolye', 'yun-pantolon-metre', 'beyaz-gomlek-katli', 'palto-yaka-detay']} sayfaUrl="https://terzihizmeti.com.tr/ru/uslugi-portnogo-antalya" />

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [businessNode('ru')] }) }} />
      <FabricsOrderBlock lang="ru" />
      <ReviewsBlock lang="ru" />
        <footer>
          <div>© {new Date().getFullYear()} Terzi Can · Портной Анталья · {PHONE}</div>
          <nav className="foot-links" aria-label="Ссылки в подвале">
            <a href="/ru/ceny-portnoy-antalya">Цены портного 2026</a>
            <a href="/">Ana Sayfa (TR)</a>
            <a href={EN_URL}>English</a>
            <a href={DE_URL}>Deutsch</a>
            <a href={TR_URL}>Türkçe — Konyaaltı Terzi</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </nav>
          <nav className="foot-links" aria-label="Отельные зоны">
            <a href="/ru/vyezdnoy-portnoy-antalya/belek">Портной в отеле Белек</a>
            <a href="/ru/vyezdnoy-portnoy-antalya/lara">Портной в отеле Лара</a>
            <a href="/ru/vyezdnoy-portnoy-antalya/guzeloba">Портной в отеле Гюзельоба</a>
            <a href="/ru/vyezdnoy-portnoy-antalya/kemer">Портной в отеле Кемер</a>
            <a href="/ru/vyezdnoy-portnoy-antalya/side">Портной в отеле Сиде</a>
          </nav>
          <nav className="foot-links" aria-label="B2B">
            <a href="/ru/anavera-tekstil">Производитель одежды B2B (Anavera Tekstil)</a>
          </nav>
          <p style={{ marginTop: '1rem', fontSize: '.68rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.8 }}>
            Портной Анталья — пошив, ремонт, подгонка и глажка во всех районах Антальи: Коньяалты, Муратпаша,
            Кепез, Лара, Белек, Кемер, Сиде и другие. Выездной портной в отель или по адресу. {PHONE}
          </p>
        </footer>
      </div>
    </>
  );
}
