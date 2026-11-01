// terzihizmeti.com.tr — Ek turist dilleri için kısa tanıtım sayfası (veri: lib/intl.ts). Sunucu bileşeni, stil inline.
import Link from 'next/link';
import OrnekGorselSeridi from '@/components/OrnekGorselSeridi';
import { PHONE, PHONE_TEL, MAPS, SITE } from '@/lib/seo-data';
import { ILANGS, INTL, NB, NB_DISTRICT, ZONES, iUrl, type ILang } from '@/lib/intl';
import { SVC, svcUrl } from '@/lib/intl-services';
import { ZCOPY, ZONE_SLUGS, zoneData, zoneUrl } from '@/lib/intl-zones';
import { eurText } from '@/lib/facts';
import { waLink, businessNode, OG_DEFAULT } from '@/lib/turist-keten';

const C = { green: '#2C4A3E', gold: '#D4B07A', cream: '#FAF7F2', sand: '#F2EDE4', ink: '#1C1814', muted: '#6B5F53', line: 'rgba(44,74,62,.15)' };
const serif = 'Georgia,serif';

const PRICE_T: Record<ILang, { title: string; hem: string; zipP: string; zipC: string; dress: string; sew: string; note: string }> = {
  es: { title: 'Precios desde (euros)', hem: 'Bajos y cintura', zipP: 'Cremallera pantalón', zipC: 'Cremallera abrigo', dress: 'Arreglo de vestido de novia/noche', sew: 'Falda, pantalón o ropa infantil a medida', note: 'El precio final se confirma por foto en WhatsApp.' },
  fr: { title: 'Prix à partir de (euros)', hem: 'Ourlet et taille', zipP: 'Fermeture pantalon', zipC: 'Fermeture manteau', dress: 'Retouche robe de mariée/soirée', sew: 'Jupe, pantalon ou vêtement enfant sur mesure', note: 'Le prix final est confirmé par photo sur WhatsApp.' },
  pl: { title: 'Ceny od (euro)', hem: 'Skracanie i talia', zipP: 'Zamek w spodniach', zipC: 'Zamek w płaszczu', dress: 'Przeróbka sukni ślubnej/wieczorowej', sew: 'Spódnica, spodnie lub odzież dziecięca na miarę', note: 'Cenę końcową potwierdzamy po zdjęciu na WhatsApp.' },
  uk: { title: 'Ціни від (євро)', hem: 'Підшивання і талія', zipP: 'Блискавка на штанах', zipC: 'Блискавка на пальті', dress: 'Переробка весільної/вечірньої сукні', sew: 'Спідниця, штани чи дитячий одяг на замовлення', note: 'Остаточну ціну підтверджуємо за фото у WhatsApp.' },
  nl: { title: 'Prijzen vanaf (euro)', hem: 'Zoom en taille', zipP: 'Rits broek', zipC: 'Rits jas', dress: 'Aanpassing bruids-/avondjurk', sew: 'Rok, broek of kinderkleding op maat', note: 'De eindprijs wordt per foto via WhatsApp bevestigd.' },
  ar: { title: 'الأسعار تبدأ من (يورو)', hem: 'التقصير والخصر', zipP: 'سحّاب البنطال', zipC: 'سحّاب المعطف', dress: 'تعديل فستان الزفاف/السهرة', sew: 'تفصيل تنورة أو بنطال أو ملابس أطفال', note: 'يتم تأكيد السعر النهائي بالصورة عبر واتساب.' },
};

export function intlJsonLd(lang: ILang) {
  const c = INTL[lang];
  const url = `${SITE}${iUrl(lang)}`;
  const node = businessNode('en') as Record<string, unknown>;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...node, inLanguage: lang },
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.desc, inLanguage: lang,
        about: { '@id': `${SITE}#business` }, primaryImageOfPage: { '@type': 'ImageObject', url: OG_DEFAULT },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-h', '.hero-desc'] },
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };
}

export default function IntlLanding({ lang }: { lang: ILang }) {
  const c = INTL[lang];
  const wa = waLink(c.wa);
  return (
    <main lang={lang} dir={c.dir} style={{ fontFamily: 'system-ui,sans-serif', background: C.cream, color: '#3A3028', minHeight: '100vh', lineHeight: 1.65 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(intlJsonLd(lang)) }} />

      <section style={{ background: `linear-gradient(135deg,${C.green} 0%,#3E6656 100%)`, padding: '3.5rem 1.25rem 3rem' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{ fontSize: '.68rem', letterSpacing: '.18em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>{c.tag}</div>
          <h1 id="hero-h" style={{ fontFamily: serif, fontSize: 'clamp(1.8rem,5vw,3rem)', fontWeight: 700, lineHeight: 1.15, color: '#fff', margin: '0 0 .9rem' }}>{c.h1}</h1>
          <p className="hero-desc" style={{ fontSize: '1.02rem', color: 'rgba(255,255,255,.92)', maxWidth: 620, margin: '0 0 1.6rem' }}>{c.lead}</p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
            style={{ background: '#25d366', color: '#fff', padding: '.95rem 1.8rem', fontWeight: 700, textDecoration: 'none', fontSize: '.95rem', borderRadius: 4, display: 'inline-block' }}>
            💬 {c.cta}
          </a>
        </div>
      </section>

      <Block><H2>{c.factsTitle}</H2>
        <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '.8rem', margin: 0 }}>
          {c.facts.map(([k, v]) => (
            <div key={k} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '.8rem 1rem' }}>
              <dt style={{ fontSize: '.72rem', color: C.muted, textTransform: 'uppercase', letterSpacing: '.08em' }}>{k}</dt>
              <dd style={{ margin: '.2rem 0 0', fontWeight: 600, color: C.ink }}>{v}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block bg={C.sand}><H2>{c.servicesTitle}</H2>
        <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>{c.services.map((s) => <li key={s} style={{ marginBottom: '.4rem' }}>{s}</li>)}</ul>
      </Block>

      <Block><H2>{NB[lang].title}</H2>
        <p style={{ margin: 0 }}>{NB[lang].text}</p>
        <h3 style={{ fontSize: '1rem', margin: '1rem 0 .3rem' }}>{NB_DISTRICT[lang].title}</h3>
        <p style={{ margin: 0 }}>{NB_DISTRICT[lang].text}</p>
      </Block>

      <Block bg={C.sand}><H2>{c.hotelTitle}</H2>
        <p style={{ margin: '0 0 1rem' }}>{c.hotelText}</p>
        <p style={{ margin: 0, color: C.muted, fontSize: '.92rem' }}><strong>{c.zonesLabel}:</strong> {ZONES.join(' · ')}</p>
      </Block>

      <Block><H2>{SVC[lang].altTitle}</H2>
        <p style={{ margin: 0 }}><Link href={svcUrl(lang)} style={{ color: C.green }}>{SVC[lang].h1}</Link></p>
      </Block>

      <Block><H2>{ZCOPY[lang].zonesLabel}</H2>
        <p style={{ margin: 0 }}>
          {ZONE_SLUGS.map((z, i) => (
            <span key={z}>{i > 0 && ' · '}<Link href={zoneUrl(lang, z)} style={{ color: C.green }}>{zoneData(lang, z).name}</Link></span>
          ))}
        </p>
      </Block>

      <Block bg={C.sand}><H2>{PRICE_T[lang].title}</H2>
        <ul style={{ margin: 0, paddingInlineStart: '1.2rem' }}>
          <li>{PRICE_T[lang].hem}: {eurText('hem')}</li>
          <li>{PRICE_T[lang].zipP}: {eurText('zipperPants')}</li>
          <li>{PRICE_T[lang].zipC}: {eurText('zipperCoat')}</li>
          <li>{PRICE_T[lang].dress}: {eurText('eveningWeddingAlter')}</li>
          <li>{PRICE_T[lang].sew}: {eurText('skirtPantsSew')}</li>
        </ul>
        <p style={{ margin: '.8rem 0 0', color: C.muted, fontSize: '.92rem' }}>{PRICE_T[lang].note}</p>
      </Block>

      <Block><H2>{c.faqTitle}</H2>
        {c.faq.map(([q, a]) => (
          <div key={q} style={{ marginBottom: '1.1rem' }}>
            <h3 style={{ fontSize: '1.02rem', color: C.ink, margin: '0 0 .25rem' }}>{q}</h3>
            <p style={{ margin: 0 }}>{a}</p>
          </div>
        ))}
      </Block>

      <OrnekGorselSeridi konu={'terziFp'} lang={lang} tema="acik" anahtarlar={['eve-gelen-terzi', 'abiye-elbise-atolye', 'erkek-takim-olcu', 'yun-pantolon-metre']} sayfaUrl={`${SITE}${iUrl(lang)}`} />

      <Block><H2>{c.contactTitle}</H2>
        <p style={{ margin: '0 0 .5rem' }}><strong>{c.addressLabel}:</strong> {c.address}</p>
        <p style={{ margin: '0 0 1rem' }}>
          <a href={`tel:${PHONE_TEL}`} style={{ color: C.green, fontWeight: 700 }} dir="ltr">☎ {c.call}: {PHONE}</a>
          {' · '}
          <a href={MAPS} target="_blank" rel="noopener noreferrer" style={{ color: C.green }}>{c.mapLabel}</a>
        </p>
        <p style={{ margin: 0, fontSize: '.9rem', color: C.muted }}>
          {c.otherLangs}:{' '}
          {ILANGS.filter((l) => l !== lang).map((l, i) => (
            <span key={l}>{i > 0 && ' · '}<Link href={iUrl(l)} hrefLang={INTL[l].hreflang} style={{ color: C.green }}>{INTL[l].name}</Link></span>
          ))}
          {' · '}<Link href="/en/tailor-service-antalya" hrefLang="en" style={{ color: C.green }}>English</Link>
        </p>
      </Block>
    </main>
  );
}

function Block({ bg, children }: { bg?: string; children: React.ReactNode }) {
  return (
    <section style={{ background: bg || 'transparent', padding: '2.6rem 1.25rem' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>{children}</div>
    </section>
  );
}
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: serif, fontSize: '1.45rem', color: C.ink, margin: '0 0 1.1rem', lineHeight: 1.25 }}>{children}</h2>
);
