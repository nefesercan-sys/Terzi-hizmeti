// terzihizmeti.com.tr — Anavera Tekstil B2B sayfası (10 dil). Veri: lib/uretim*.ts. Sunucu bileşeni, stil inline.
import Link from 'next/link';
import { PHONE, PHONE_TEL, MAPS, SITE } from '@/lib/seo-data';
import { businessNode, OG_DEFAULT, waLink, TURIST_UPDATE } from '@/lib/turist-keten';
import { UDATA, U_IDS, uUrl, ANAVERA_HOME, type UId, type UL } from '@/lib/uretim';

const C = { green: '#2C4A3E', gold: '#D4B07A', cream: '#FAF7F2', sand: '#F2EDE4', ink: '#1C1814', muted: '#6B5F53' };
const serif = 'Georgia,serif';

const UI: Record<UL, { back: string; faq: string; cta: string; more: string; call: string; map: string; flow: string }> = {
  tr: { back: '← Anavera Tekstil', faq: 'Sık sorulan sorular', cta: 'WhatsApp\'tan yazın', more: 'Diğer üretim sayfaları', call: 'Ara', map: 'Haritada aç', flow: 'Çizim/fotoğraf → numune → onay → kişiye özel veya seri üretim → gönderim' },
  en: { back: '← Anavera Tekstil', faq: 'Frequently asked questions', cta: 'Message us on WhatsApp', more: 'More production pages', call: 'Call', map: 'Open on map', flow: 'Sketch/photo → sample → approval → custom or series production → shipping' },
  de: { back: '← Anavera Tekstil', faq: 'Häufige Fragen', cta: 'Per WhatsApp schreiben', more: 'Weitere Produktionsseiten', call: 'Anrufen', map: 'Auf Karte öffnen', flow: 'Skizze/Foto → Muster → Freigabe → Einzel- oder Serienfertigung → Versand' },
  ru: { back: '← Anavera Tekstil', faq: 'Частые вопросы', cta: 'Написать в WhatsApp', more: 'Другие страницы о производстве', call: 'Позвонить', map: 'Открыть на карте', flow: 'Эскиз/фото → образец → одобрение → индивидуальный пошив или серия → отправка' },
  es: { back: '← Anavera Tekstil', faq: 'Preguntas frecuentes', cta: 'Escribir por WhatsApp', more: 'Más páginas de producción', call: 'Llamar', map: 'Abrir en el mapa', flow: 'Boceto/foto → muestra → aprobación → pieza a medida o serie → envío' },
  fr: { back: '← Anavera Tekstil', faq: 'Questions fréquentes', cta: 'Écrire sur WhatsApp', more: 'Autres pages production', call: 'Appeler', map: 'Ouvrir sur la carte', flow: 'Croquis/photo → échantillon → validation → pièce sur mesure ou série → expédition' },
  pl: { back: '← Anavera Tekstil', faq: 'Najczęstsze pytania', cta: 'Napisz na WhatsApp', more: 'Inne strony o produkcji', call: 'Zadzwoń', map: 'Otwórz na mapie', flow: 'Szkic/zdjęcie → próbka → akceptacja → szycie na miarę lub seria → wysyłka' },
  uk: { back: '← Anavera Tekstil', faq: 'Часті запитання', cta: 'Написати у WhatsApp', more: 'Інші сторінки про виробництво', call: 'Зателефонувати', map: 'Відкрити на карті', flow: 'Ескіз/фото → зразок → схвалення → індивідуальний пошив або серія → відправлення' },
  nl: { back: '← Anavera Tekstil', faq: 'Veelgestelde vragen', cta: 'Stuur een bericht via WhatsApp', more: 'Meer productiepagina\'s', call: 'Bel', map: 'Open op kaart', flow: 'Schets/foto → sample → goedkeuring → maatwerk of serie → verzending' },
  ar: { back: '← Anavera Tekstil', faq: 'الأسئلة الشائعة', cta: 'راسلنا عبر واتساب', more: 'صفحات إنتاج أخرى', call: 'اتصل', map: 'افتح على الخريطة', flow: 'رسم/صورة ← عيّنة ← اعتماد ← قطعة حسب الطلب أو سلسلة ← شحن' },
};

export function uJsonLd(lang: UL, id: UId) {
  const c = UDATA[lang][id]; const url = `${SITE}${uUrl(lang, id)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode('en'),
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang, dateModified: TURIST_UPDATE, about: { '@id': `${SITE}#business` }, primaryImageOfPage: { '@type': 'ImageObject', url: OG_DEFAULT } },
      { '@type': 'Service', '@id': `${url}#service`, name: c.h1, provider: { '@id': `${SITE}#business` }, areaServed: [{ '@type': 'Place', name: 'Antalya' }, { '@type': 'Place', name: 'Europe' }, { '@type': 'Place', name: 'Worldwide (shipping)' }], inLanguage: lang },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  };
}

const H2 = ({ children }: { children: React.ReactNode }) => <h2 style={{ fontFamily: serif, fontSize: '1.35rem', color: C.ink, margin: '0 0 .8rem', lineHeight: 1.25 }}>{children}</h2>;

export default function UretimLanding({ lang, id }: { lang: UL; id: UId }) {
  const c = UDATA[lang][id]; const ui = UI[lang];
  return (
    <main lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ fontFamily: 'system-ui,sans-serif', background: C.cream, color: '#3A3028', minHeight: '100vh', lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(uJsonLd(lang, id)) }} />
      <header style={{ background: C.green, padding: '3rem 1.25rem 2.4rem' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ margin: '0 0 .8rem', fontSize: '.85rem' }}><Link href={ANAVERA_HOME(lang)} style={{ color: C.gold }}>{ui.back}</Link></p>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(1.6rem,4.6vw,2.4rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', margin: '0 0 .9rem' }}>{c.h1}</h1>
          <p style={{ fontSize: '1.02rem', color: 'rgba(255,255,255,.92)', margin: 0 }}>{c.lead}</p>
        </div>
      </header>
      <article style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.25rem' }}>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{c.pointsTitle}</H2>
          <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>{c.points.map((x) => <li key={x}>{x}</li>)}</ul>
          <p style={{ margin: '1rem 0 0', color: C.muted, fontSize: '.93rem' }}>{ui.flow}</p>
        </section>
        <section style={{ marginBottom: '1.8rem' }}>
          <H2>{ui.faq}</H2>
          {c.faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.02rem', color: C.ink, margin: '0 0 .25rem' }}>{q}</h3>
              <p style={{ margin: 0 }}>{a}</p>
            </div>
          ))}
        </section>
        <section style={{ background: C.sand, borderRadius: 8, padding: '1.3rem' }}>
          <p style={{ margin: '0 0 1rem' }}>
            <a href={waLink(c.wa)} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '.8rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '.92rem', borderRadius: 4, display: 'inline-block' }}>{ui.cta}</a>
          </p>
          <p style={{ margin: '0 0 .8rem', fontSize: '.92rem' }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: C.green }} dir="ltr">☎ {ui.call}: {PHONE}</a>{' · '}<a href={MAPS} target="_blank" rel="noopener noreferrer" style={{ color: C.green }}>{ui.map}</a>
          </p>
          <p style={{ margin: 0, fontSize: '.9rem' }}><strong>{ui.more}:</strong>{' '}
            {U_IDS.filter((x) => x !== id).map((x, i) => <span key={x}>{i > 0 && ' · '}<Link href={uUrl(lang, x)} style={{ color: C.green }}>{UDATA[lang][x].h1}</Link></span>)}
          </p>
        </section>
      </article>
    </main>
  );
}
