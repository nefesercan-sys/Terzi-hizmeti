import type { Metadata } from 'next';
import { OTEL_BOLGELERI } from '@/lib/otel-bolgeleri';

const SITE = 'https://terzihizmeti.com.tr';
const BASE_PATH = '/ru/vyezdnoy-portnoy-antalya';
const WA_DEF = `https://wa.me/905318986418?text=${encodeURIComponent('Здравствуйте, хочу узнать про выездного портного в мой отель.')}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Выездной портной Анталья — Мобильный сервис во всех отельных районах',
  description: 'Выездной портной в отели курортных районов Антальи: Белек, Лара, Гюзельоба, Кемер, Сиде. Подгонка, ремонт, глажка и химчистка — мы приедем к вам.',
  keywords: [
    'портной в отеле Анталья', 'выездной портной Анталья', 'портной Белек отель', 'портной Лара отель',
    'портной Кемер отель', 'портной Сиде отель', 'ремонт молнии Анталья', 'подгонка платья в отеле Анталья',
    'химчистка в отеле Анталья', 'подгонка свадебного платья Анталья',
  ],
  alternates: {
    canonical: `${SITE}${BASE_PATH}`,
    languages: {
      'tr': `${SITE}/otele-gelen-terzi-antalya`,
      'en': `${SITE}/en/hotel-tailor-antalya`,
      'ru': `${SITE}${BASE_PATH}`,
      'de': `${SITE}/de/schneider-service-hotel-antalya`,
      'x-default': `${SITE}${BASE_PATH}`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    title: 'Выездной портной Анталья — Мобильный сервис',
    description: 'Мы приедем в ваш отель в Белеке, Ларе, Гюзельобе, Кемере или Сиде. Подгонка, ремонт, глажка, химчистка.',
    url: `${SITE}${BASE_PATH}`, siteName: 'Terzi Can', locale: 'ru_RU', type: 'website',
    images: [{ url: `${SITE}/terzi-can-hero.jpg`, width: 1024, height: 1024, alt: 'Выездной портной Анталья' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${BASE_PATH}#service`,
      name: 'Выездной портной в отельных районах Антальи',
      serviceType: 'Подгонка, ремонт, глажка, химчистка — выездной сервис в отель',
      provider: { '@type': 'LocalBusiness', name: 'Terzi Can', telephone: '+905318986418', url: `${SITE}/antalya-terzi` },
      areaServed: OTEL_BOLGELERI.map((r) => ({ '@type': 'Place', name: r.name })),
      availableLanguage: ['ru', 'en', 'de', 'tr'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Как работает выездной портной в отеле?', acceptedAnswer: { '@type': 'Answer', text: 'Напишите название отеля, номер комнаты и удобное время в WhatsApp. Наш портной приедет к вам, снимет мерки или заберёт вещь, и вернёт её отремонтированной или подогнанной.' } },
        { '@type': 'Question', name: 'В какие районы вы приезжаете?', acceptedAnswer: { '@type': 'Answer', text: 'Мы обслуживаем Белек, Лару, Гюзельобу, Кемер и Сиде, а также другие районы Антальи по запросу.' } },
        { '@type': 'Question', name: 'Сколько времени занимает подгонка или ремонт?', acceptedAnswer: { '@type': 'Answer', text: 'Большинство подгонок и ремонтов выполняются в течение 24 часов. Для свадебных или вечерних платьев рекомендуем обращаться как можно раньше.' } },
        { '@type': 'Question', name: 'На каких языках вы говорите?', acceptedAnswer: { '@type': 'Answer', text: 'Наша команда говорит на русском, английском, немецком и турецком языках.' } },
      ],
    },
  ],
};

const SERVICES = [
  { icon: '📏', t: 'Подгонка одежды', d: 'Укорачивание, ушивание, изменение размера — брюки, платья, костюмы, юбки.' },
  { icon: '🧵', t: 'Ремонт', d: 'Молнии, разрывы, пуговицы, подкладка — быстрый и аккуратный ремонт.' },
  { icon: '👗', t: 'Свадебные и вечерние наряды', d: 'Бережная подгонка к особому случаю, с записью на месте.' },
  { icon: '🧺', t: 'Глажка и химчистка', d: 'Отпаривание, профессиональная химчистка, забор из отеля.' },
];

export default function OtelBolgeleriRuHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ background: '#1E3329', color: '#F5F1E8', minHeight: '100vh' }}>
        <nav className="nav" aria-label="Главная навигация">
          <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
          <a href="/" className="nav-home">← Главная</a>
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">WHATSAPP →</a>
        </nav>

        <section className="hero" aria-labelledby="hub-h">
          <div className="hero-bg" aria-hidden="true">
            <img src="/terzi-can-hero.jpg" alt="" className="hero-bg-img" width={1024} height={1024} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <span className="hero-tag">🏨 Белек · Лара · Кунду · Коньяалты · Кемер · Гёйнюк · Муратпаша · Сиде</span>
            <h1 id="hub-h">Портной в отеле — <span className="accent">Выездной сервис</span></h1>
            <p className="hero-desc">
              Выберите ваш район, напишите название отеля и удобное время в WhatsApp — наш портной
              приедет к вам. Подгонка, ремонт, глажка и химчистка прямо в вашем отеле.
            </p>
            <div className="hero-btns">
              <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Написать в WhatsApp →</a>
              <a href="tel:+905318986418" className="btn-secondary">📞 +90 531 898 64 18</a>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="about-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">Об услуге</span>
              <h2 className="sec-h ff" id="about-h">Зачем выездной портной в отпуске?</h2>
              <p className="sec-sub">
                Порвалась молния перед торжественным ужином, платью нужна небольшая подгонка, костюму
                требуется химчистка — в отпуске редко есть время искать ателье самостоятельно. Terzi
                Can приезжает прямо в ваш отель в Белеке, Ларе, Гюзельобе, Кемере или Сиде: снимаем
                мерки, ремонтируем, забираем и возвращаем вещь — без необходимости покидать отель.
                Наша команда говорит на русском, английском, немецком и турецком, поэтому общение
                проходит легко.
              </p>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="svc-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Услуги</span>
              <h2 className="sec-h ff" id="svc-h">Что мы делаем в вашем отеле</h2>
            </div>
            <div className="howto-list">
              {SERVICES.map((s) => (
                <div className="howto-item" key={s.t}>
                  <div className="howto-t">{s.icon} {s.t}</div>
                  <div className="howto-d">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="regions-h">
          <div className="ctr">
            <div className="sec-head">
              <span className="eyebrow">Районы</span>
              <h2 className="sec-h ff" id="regions-h">Выберите ваш отельный район</h2>
              <p className="sec-sub">У каждого района своя страница со списком отелей, временем в пути и прямым контактом в WhatsApp.</p>
            </div>
            <div className="wk-grid">
              {OTEL_BOLGELERI.map((r) => (
                <a key={r.slug} href={`${BASE_PATH}/${r.slug}`} className="wk-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="wk-tr">{r.name}</div>
                  <p className="wk-d">{r.blurb.ru}</p>
                  <p style={{ fontSize: '.75rem', color: 'rgba(245,241,232,.5)', marginTop: '.6rem' }}>⏱ {r.travelTime.ru}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="how-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">Процесс</span>
              <h2 className="sec-h ff" id="how-h">Как это работает</h2>
            </div>
            <div className="howto-list">
              <div className="howto-item"><div className="howto-t">1. Напишите нам</div><div className="howto-d">Укажите название отеля, номер комнаты и запрос в WhatsApp.</div></div>
              <div className="howto-item"><div className="howto-t">2. Согласуем время</div><div className="howto-d">Мы подтвердим удобное время, обычно в тот же день.</div></div>
              <div className="howto-item"><div className="howto-t">3. Сервис на месте</div><div className="howto-d">Наш портной приедет к вам, снимет мерки или заберёт вещь.</div></div>
              <div className="howto-item"><div className="howto-t">4. Доставка в отель</div><div className="howto-d">Готовая вещь возвращается в течение 24 часов.</div></div>
            </div>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="ctr" style={{ maxWidth: 760 }}>
            <div className="sec-head">
              <span className="eyebrow">Вопросы и ответы</span>
              <h2 className="sec-h ff" id="faq-h">Часто задаваемые вопросы</h2>
            </div>
            {[
              ['Как работает выездной портной в отеле?', 'Напишите название отеля, номер комнаты и удобное время в WhatsApp. Наш портной приедет к вам, снимет мерки или заберёт вещь, и вернёт её отремонтированной или подогнанной.'],
              ['В какие районы вы приезжаете?', 'Мы обслуживаем Белек, Лару, Гюзельобу, Кемер и Сиде, а также другие районы Антальи по запросу.'],
              ['Сколько времени занимает подгонка или ремонт?', 'Большинство подгонок и ремонтов выполняются в течение 24 часов. Для свадебных или вечерних платьев рекомендуем обращаться как можно раньше.'],
              ['На каких языках вы говорите?', 'Наша команда говорит на русском, английском, немецком и турецком языках.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="linen-h">
          <div className="ctr" style={{ maxWidth: 760, textAlign: 'center' }}>
            <div className="sec-head">
              <span className="eyebrow">🧵 Новинка</span>
              <h2 className="sec-h ff" id="linen-h">Пошив на заказ из льна и хлопка</h2>
              <p className="sec-sub">
                Хотите одеваться так во время отдыха? Сшейте что-то на заказ из 100% натурального
                льна или хлопка, точно по вашим меркам — посмотрите модели, закажите в WhatsApp.
              </p>
            </div>
            <a href="/ru/poshiv-lyon-hlopok" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Смотреть модели →
            </a>
          </div>
        </section>

        <section className="cta-final" aria-label="Контакты">
          <h2 className="cta-h ff">Остановились в другом районе?</h2>
          <p className="cta-sub">Скорее всего, мы всё равно можем приехать — просто спросите в WhatsApp.</p>
          <div className="cta-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">💬 Написать в WhatsApp</a>
            <a href="tel:+905318986418" className="btn-outline-white">📞 +90 531 898 64 18</a>
          </div>
        </section>
      </div>
    </>
  );
}
