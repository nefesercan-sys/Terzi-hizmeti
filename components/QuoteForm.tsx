'use client';
// terzihizmeti.com.tr — Anavera Tekstil teklif formu şablonu (10 dil). Sunucuya veri göndermez:
// doldurulan alanlar WhatsApp mesajına çevrilir (wa.me). Minimum sipariş adedi yoktur.
import { useState } from 'react';

type QL = 'tr' | 'en' | 'de' | 'ru' | 'es' | 'fr' | 'pl' | 'uk' | 'nl' | 'ar';
const WA_NUMBER = '905318986418';
const L: Record<QL, { title: string; hint: string; product: string; fabric: string; qty: string; country: string; notes: string; send: string; greet: string; ph: Record<'product' | 'fabric' | 'qty' | 'country' | 'notes', string> }> = {
  tr: { title: 'Teklif formu', hint: 'Bilgileri doldurun; WhatsApp mesajı hazırlanır. Minimum adet yoktur.', product: 'Ürün', fabric: 'Kumaş', qty: 'Adet', country: 'Teslim ülkesi', notes: 'Notlar', send: 'WhatsApp ile teklif iste', greet: 'Merhaba, Anavera Tekstil için teklif istiyorum.', ph: { product: 'Örn. gömlek, pantolon', fabric: 'Örn. keten, pamuk, penye', qty: 'Örn. 1, 50, 500', country: 'Örn. Almanya', notes: 'Model, baskı/nakış, etiket…' } },
  en: { title: 'Quote request form', hint: 'Fill in the details and a WhatsApp message is prepared. No minimum order.', product: 'Product', fabric: 'Fabric', qty: 'Quantity', country: 'Destination country', notes: 'Notes', send: 'Request a quote on WhatsApp', greet: 'Hello, I would like a quote from Anavera Tekstil.', ph: { product: 'e.g. shirts, trousers', fabric: 'e.g. linen, cotton, jersey', qty: 'e.g. 1, 50, 500', country: 'e.g. Germany', notes: 'Model, print/embroidery, labels…' } },
  de: { title: 'Angebotsformular', hint: 'Angaben ausfüllen, eine WhatsApp-Nachricht wird vorbereitet. Keine Mindestmenge.', product: 'Produkt', fabric: 'Stoff', qty: 'Menge', country: 'Zielland', notes: 'Hinweise', send: 'Angebot per WhatsApp anfragen', greet: 'Guten Tag, ich möchte ein Angebot von Anavera Tekstil.', ph: { product: 'z. B. Hemden, Hosen', fabric: 'z. B. Leinen, Baumwolle, Jersey', qty: 'z. B. 1, 50, 500', country: 'z. B. Deutschland', notes: 'Modell, Druck/Stickerei, Etiketten…' } },
  ru: { title: 'Форма запроса', hint: 'Заполните данные — подготовится сообщение в WhatsApp. Минимального тиража нет.', product: 'Изделие', fabric: 'Ткань', qty: 'Количество', country: 'Страна доставки', notes: 'Примечания', send: 'Запросить цену в WhatsApp', greet: 'Здравствуйте, хочу получить расчёт от Anavera Tekstil.', ph: { product: 'напр. рубашки, брюки', fabric: 'напр. лён, хлопок, трикотаж', qty: 'напр. 1, 50, 500', country: 'напр. Германия', notes: 'Модель, печать/вышивка, этикетки…' } },
  es: { title: 'Formulario de presupuesto', hint: 'Rellene los datos y se prepara un mensaje de WhatsApp. Sin pedido mínimo.', product: 'Producto', fabric: 'Tela', qty: 'Cantidad', country: 'País de destino', notes: 'Notas', send: 'Pedir presupuesto por WhatsApp', greet: 'Hola, quisiera un presupuesto de Anavera Tekstil.', ph: { product: 'p. ej. camisas, pantalones', fabric: 'p. ej. lino, algodón, punto', qty: 'p. ej. 1, 50, 500', country: 'p. ej. Alemania', notes: 'Modelo, estampado/bordado, etiquetas…' } },
  fr: { title: 'Formulaire de devis', hint: 'Remplissez les champs, un message WhatsApp est préparé. Aucune quantité minimale.', product: 'Produit', fabric: 'Tissu', qty: 'Quantité', country: 'Pays de destination', notes: 'Remarques', send: 'Demander un devis sur WhatsApp', greet: 'Bonjour, je souhaite un devis auprès d\'Anavera Tekstil.', ph: { product: 'ex. chemises, pantalons', fabric: 'ex. lin, coton, jersey', qty: 'ex. 1, 50, 500', country: 'ex. Allemagne', notes: 'Modèle, impression/broderie, étiquettes…' } },
  pl: { title: 'Formularz wyceny', hint: 'Uzupełnij dane, a przygotujemy wiadomość WhatsApp. Bez minimalnego zamówienia.', product: 'Produkt', fabric: 'Tkanina', qty: 'Ilość', country: 'Kraj docelowy', notes: 'Uwagi', send: 'Poproś o wycenę na WhatsApp', greet: 'Dzień dobry, proszę o wycenę od Anavera Tekstil.', ph: { product: 'np. koszule, spodnie', fabric: 'np. len, bawełna, dzianina', qty: 'np. 1, 50, 500', country: 'np. Niemcy', notes: 'Model, nadruk/haft, etykiety…' } },
  uk: { title: 'Форма запиту', hint: 'Заповніть дані — підготується повідомлення у WhatsApp. Мінімального накладу немає.', product: 'Виріб', fabric: 'Тканина', qty: 'Кількість', country: 'Країна доставки', notes: 'Примітки', send: 'Запросити розрахунок у WhatsApp', greet: 'Доброго дня, хочу отримати розрахунок від Anavera Tekstil.', ph: { product: 'напр. сорочки, штани', fabric: 'напр. льон, бавовна, трикотаж', qty: 'напр. 1, 50, 500', country: 'напр. Німеччина', notes: 'Модель, друк/вишивка, етикетки…' } },
  nl: { title: 'Offerteformulier', hint: 'Vul de gegevens in; een WhatsApp-bericht wordt voorbereid. Geen minimale afname.', product: 'Product', fabric: 'Stof', qty: 'Aantal', country: 'Bestemmingsland', notes: 'Opmerkingen', send: 'Offerte aanvragen via WhatsApp', greet: 'Hallo, ik wil graag een offerte van Anavera Tekstil.', ph: { product: 'bijv. overhemden, broeken', fabric: 'bijv. linnen, katoen, tricot', qty: 'bijv. 1, 50, 500', country: 'bijv. Duitsland', notes: 'Model, bedrukking/borduring, labels…' } },
  ar: { title: 'نموذج طلب عرض سعر', hint: 'املأ البيانات ليتم تجهيز رسالة واتساب. لا يوجد حد أدنى للكمية.', product: 'المنتج', fabric: 'القماش', qty: 'الكمية', country: 'بلد التسليم', notes: 'ملاحظات', send: 'اطلب عرض سعر عبر واتساب', greet: 'مرحباً، أرغب في الحصول على عرض سعر من Anavera Tekstil.', ph: { product: 'مثل: قمصان، بناطيل', fabric: 'مثل: كتان، قطن، جيرسي', qty: 'مثل: 1، 50، 500', country: 'مثل: ألمانيا', notes: 'الموديل، الطباعة/التطريز، الملصقات…' } },
};
const KEYS = ['product', 'fabric', 'qty', 'country', 'notes'] as const;

export default function QuoteForm({ lang }: { lang: QL }) {
  const t = L[lang] ?? L.en;
  const [v, setV] = useState<Record<(typeof KEYS)[number], string>>({ product: '', fabric: '', qty: '', country: '', notes: '' });
  const msg = [t.greet, ...KEYS.filter((k) => v[k].trim()).map((k) => `${t[k]}: ${v[k].trim()}`)].join('\n');
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  const input: React.CSSProperties = { width: '100%', padding: '.6rem .7rem', border: '1px solid #cdbfa8', borderRadius: 4, fontSize: '1rem', boxSizing: 'border-box', background: '#fff' };
  return (
    <section style={{ background: '#fff', border: '1px solid #e4d9c6', borderRadius: 8, padding: '1.3rem', margin: '0 0 1.8rem' }} aria-label={t.title}>
      <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.25rem', margin: '0 0 .4rem', color: '#1C1814' }}>{t.title}</h2>
      <p style={{ margin: '0 0 1rem', fontSize: '.92rem', color: '#6B5F53' }}>{t.hint}</p>
      <div style={{ display: 'grid', gap: '.8rem' }}>
        {KEYS.map((k) => (
          <label key={k} style={{ display: 'block', fontSize: '.9rem', fontWeight: 600 }}>
            {t[k]}
            {k === 'notes'
              ? <textarea rows={3} value={v[k]} placeholder={t.ph[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} style={{ ...input, marginTop: '.25rem' }} />
              : <input value={v[k]} placeholder={t.ph[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} style={{ ...input, marginTop: '.25rem' }} />}
          </label>
        ))}
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem', display: 'inline-block', background: '#25d366', color: '#fff', padding: '.8rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '.95rem', borderRadius: 4 }}>{t.send}</a>
    </section>
  );
}
