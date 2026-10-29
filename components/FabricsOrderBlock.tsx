// terzihizmeti.com.tr — Kumaşlar ve yurt dışı sipariş bölümü (sunucu bileşeni). Veri: lib/fabrics-order.ts
import { FABRICS_ORDER, type FabricsLang } from '@/lib/fabrics-order';

export default function FabricsOrderBlock({ lang }: { lang: FabricsLang }) {
  const t = FABRICS_ORDER[lang];
  return (
    <section
      id="kumaslar-ve-yurt-disi-siparis"
      lang={lang}
      style={{ maxWidth: 1000, margin: '32px auto', padding: '0 16px', fontFamily: 'system-ui,-apple-system,sans-serif', lineHeight: 1.65 }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>{t.h}</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, margin: '14px 0 6px' }}>{t.fabricsH}</h3>
      <p style={{ margin: '0 0 8px' }}>{t.fabrics}</p>
      <p style={{ margin: '0 0 8px' }}>{t.leather}</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, margin: '14px 0 6px' }}>{t.abroadH}</h3>
      <ol style={{ margin: '0 0 8px', paddingInlineStart: 22 }}>
        {t.abroadSteps.map((s) => <li key={s}>{s}</li>)}
      </ol>
      <p style={{ margin: 0 }}>{t.abroadNote}</p>
    </section>
  );
}
