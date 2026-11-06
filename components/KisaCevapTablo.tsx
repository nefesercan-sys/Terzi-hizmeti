// components/KisaCevapTablo.tsx — Fiyat sayfalarında "kısa cevap + işlem / başlangıç fiyatı / süre" tablosu (TR/EN/RU/DE).
// Yapay zeka asistanlarının ve sesli aramanın alıntılaması için sade tablo. Sahip kuralları: lib/sss-merkezi.ts başlığındaki gibi.
import { SSS_META } from '@/lib/sss-merkezi';

type L = 'tr' | 'en' | 'ru' | 'de';
const T: Record<L, { h: string; cols: [string, string, string]; rows: [string, string, string][]; vat: string }> = {
  tr: {
    h: 'Kısa cevap: işlem, başlangıç fiyatı ve süre', cols: ['İşlem', 'Başlangıç fiyatı', 'Süre'],
    rows: [
      ['Paça, bel, kol, boy kısaltma/daraltma', "₺200'den (≈ €10)", 'Normal iş aynı gün, acil 1–2 saat'],
      ['Fermuar değişimi', "₺300'den (≈ €15; mont/kaban/palto/deri €20)", 'Aynı gün, acil 1–2 saat'],
      ['Deri ceket, pantolon, yelek tadilatı', "₺400'den (≈ €20)", 'İşin durumuna göre'],
      ['Kot paça kısaltma ve daraltma', "≈ ₺200'den", 'Aynı gün'],
      ['Kaban, palto kısaltma/daraltma', "₺200'den", 'Aynı gün'],
      ['Gelinlik ve abiye tadilatı', 'Fotoğrafa veya işin detayına göre', 'Aynı gün veya duruma göre 1–2 gün'],
      ['Dikim (elbise, etek, pantolon, çocuk, takım)', 'Fotoğrafa ve istenilen modele göre', 'Modele ve adede göre'],
      ['Eve ve otele alım-teslim', 'Ücretsiz', 'Her bölgede'],
    ], vat: "Fiyatlara KDV dahil değildir. Ödeme tüm para birimleriyle, nakit veya kartla.",
  },
  en: {
    h: 'Quick answer: service, starting price and turnaround', cols: ['Service', 'Starting price', 'Turnaround'],
    rows: [
      ['Hem, waist, sleeve and length shortening/taking-in', 'From ₺200 (≈ €10)', 'Standard same day, urgent 1–2 hours'],
      ['Zipper replacement', 'From ₺300 (≈ €15; coat/overcoat/leather €20)', 'Same day, urgent 1–2 hours'],
      ['Leather jacket, trousers, vest', 'From ₺400 (≈ €20)', 'Depends on the job'],
      ['Jeans hemming and taking-in', 'From ≈ ₺200', 'Same day'],
      ['Overcoat shortening/taking-in', 'From ₺200', 'Same day'],
      ['Wedding and evening dress alterations', 'By photo or job details', 'Same day or 1–2 days depending on the job'],
      ['Sewing (dress, skirt, trousers, children, suit)', 'By photo and the model you want', 'Depends on model and quantity'],
      ['Home and hotel pick-up and delivery', 'Free', 'Every area we serve'],
    ], vat: 'Prices exclude VAT. Payment in any currency, cash or card.',
  },
  ru: {
    h: 'Коротко: работа, цена «от» и срок', cols: ['Работа', 'Цена от', 'Срок'],
    rows: [
      ['Подшить, ушить: низ, талия, рукав, длина', 'От ₺200 (≈ €10)', 'Обычные — в тот же день, срочные 1–2 часа'],
      ['Замена молнии', 'От ₺300 (≈ €15; пальто/куртка/кожа €20)', 'В тот же день, срочно 1–2 часа'],
      ['Кожаная куртка, брюки, жилет', 'От ₺400 (≈ €20)', 'По состоянию работы'],
      ['Джинсы: подшить, ушить', 'От ≈ ₺200', 'В тот же день'],
      ['Пальто: укоротить, ушить', 'От ₺200', 'В тот же день'],
      ['Переделка свадебных и вечерних платьев', 'По фото или деталям работы', 'В тот же день или 1–2 дня'],
      ['Пошив (платье, юбка, брюки, детское, костюм)', 'По фото и желаемой модели', 'По модели и количеству'],
      ['Забор и доставка домой и в отель', 'Бесплатно', 'В каждом районе'],
    ], vat: 'Цены без НДС. Оплата в любой валюте, наличными или картой.',
  },
  de: {
    h: 'Kurz: Leistung, Ab-Preis und Dauer', cols: ['Leistung', 'Ab-Preis', 'Dauer'],
    rows: [
      ['Kürzen/Enger machen: Saum, Taille, Ärmel, Länge', 'Ab ₺200 (≈ €10)', 'Normal am selben Tag, dringend 1–2 Stunden'],
      ['Reißverschlusswechsel', 'Ab ₺300 (≈ €15; Mantel/Jacke/Leder €20)', 'Selber Tag, dringend 1–2 Stunden'],
      ['Lederjacke, -hose, -weste ändern', 'Ab ₺400 (≈ €20)', 'Je nach Arbeit'],
      ['Jeans kürzen und enger machen', 'Ab ≈ ₺200', 'Selber Tag'],
      ['Mantel kürzen/enger machen', 'Ab ₺200', 'Selber Tag'],
      ['Änderung von Braut- und Abendkleidern', 'Nach Foto oder Details der Arbeit', 'Selber Tag oder 1–2 Tage je nach Arbeit'],
      ['Nähen (Kleid, Rock, Hose, Kinder, Anzug)', 'Nach Foto und gewünschtem Modell', 'Je nach Modell und Menge'],
      ['Abholung und Lieferung nach Hause und ins Hotel', 'Kostenlos', 'In jedem Gebiet'],
    ], vat: 'Preise zzgl. MwSt. Zahlung in jeder Währung, bar oder Karte.',
  },
};

export default function KisaCevapTablo({ lang }: { lang: string }) {
  if (!(lang in T)) return null;
  const l = lang as L;
  const t = T[l];
  return (
    <section id="kisa-cevap-tablo" aria-label={t.h} style={{ maxWidth: 960, margin: '0 auto', padding: '16px' }}>
      <h2 style={{ fontSize: 20, margin: '0 0 8px' }}>{t.h}</h2>
      <p id="kisa-cevap" style={{ margin: '0 0 10px' }}>{SSS_META[l].short}</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 520 }}>
          <thead><tr>{t.cols.map((c) => <th key={c} style={{ textAlign: 'left', borderBottom: '2px solid currentColor', padding: '6px 8px' }}>{c}</th>)}</tr></thead>
          <tbody>{t.rows.map((r) => (
            <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ borderBottom: '1px solid rgba(128,128,128,.35)', padding: '6px 8px', fontWeight: i === 0 ? 600 : 400 }}>{c}</td>)}</tr>
          ))}</tbody>
        </table>
      </div>
      <p style={{ fontSize: 14, margin: '8px 0 0' }}>{t.vat}</p>
    </section>
  );
}
