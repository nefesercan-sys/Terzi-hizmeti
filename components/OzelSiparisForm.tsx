'use client';
// Siparişe özel dikim talep formu: doldurulan alanlardan hazır WhatsApp mesajı üretir (sunucuya veri göndermez).
import { useState } from 'react';
import type { OzelForm } from '@/lib/ozel-siparis';

const WA_NUMBER = '905318986418';

export default function OzelSiparisForm({ form, intro, dir }: { form: OzelForm; intro: string; dir: 'ltr' | 'rtl' }) {
  const [product, setProduct] = useState('');
  const [fabric, setFabric] = useState('');
  const [measure, setMeasure] = useState('');
  const [help, setHelp] = useState(false);
  const [place, setPlace] = useState('');
  const [photo, setPhoto] = useState(false);
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const lines: string[] = [intro];
  if (product) lines.push(`${form.product} ${product}`);
  if (fabric) lines.push(`${form.fabric}: ${fabric}`);
  if (measure.trim()) lines.push(`${form.measure}: ${measure.trim()}`);
  if (help) lines.push(`• ${form.help}`);
  if (place.trim()) lines.push(`${form.place}: ${place.trim()}`);
  if (photo) lines.push(`• ${form.photo}`);
  if (date.trim()) lines.push(`${form.date}: ${date.trim()}`);
  if (note.trim()) lines.push(`${form.note}: ${note.trim()}`);
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;

  const box: React.CSSProperties = { width: '100%', padding: '.55rem .7rem', border: '1px solid #b9ad9c', borderRadius: 6, fontSize: '.95rem', background: '#fff', color: '#1C1814', boxSizing: 'border-box', fontFamily: 'inherit' };
  const lab: React.CSSProperties = { display: 'block', fontSize: '.88rem', fontWeight: 600, color: '#1C1814', margin: '0 0 .25rem' };
  const row: React.CSSProperties = { marginBottom: '.9rem' };

  return (
    <form dir={dir} onSubmit={(e) => e.preventDefault()} aria-label={form.title} style={{ background: '#fff', border: '1px solid #e2d9c9', borderRadius: 8, padding: '1.2rem' }}>
      <p style={{ margin: '0 0 1rem', fontSize: '.92rem', color: '#4a3f35' }}>{form.intro}</p>
      <div style={row}>
        <label style={lab} htmlFor="oz-product">{form.product}</label>
        <select id="oz-product" style={box} value={product} onChange={(e) => setProduct(e.target.value)}>
          <option value="" />
          {form.products.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div style={row}>
        <label style={lab} htmlFor="oz-fabric">{form.fabric}</label>
        <select id="oz-fabric" style={box} value={fabric} onChange={(e) => setFabric(e.target.value)}>
          <option value="" />
          {form.fabrics.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div style={row}>
        <label style={lab} htmlFor="oz-measure">{form.measure}</label>
        <textarea id="oz-measure" style={{ ...box, minHeight: 70 }} placeholder={form.measurePh} value={measure} onChange={(e) => setMeasure(e.target.value)} />
        <label style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginTop: '.4rem', fontSize: '.9rem' }}>
          <input type="checkbox" checked={help} onChange={(e) => setHelp(e.target.checked)} /> {form.help}
        </label>
      </div>
      <div style={row}>
        <label style={lab} htmlFor="oz-place">{form.place}</label>
        <input id="oz-place" style={box} placeholder={form.placePh} value={place} onChange={(e) => setPlace(e.target.value)} />
      </div>
      <div style={row}>
        <label style={{ display: 'flex', gap: '.5rem', alignItems: 'center', fontSize: '.9rem' }}>
          <input type="checkbox" checked={photo} onChange={(e) => setPhoto(e.target.checked)} /> {form.photo}
        </label>
      </div>
      <div style={row}>
        <label style={lab} htmlFor="oz-date">{form.date}</label>
        <input id="oz-date" style={box} placeholder={form.datePh} value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div style={row}>
        <label style={lab} htmlFor="oz-note">{form.note}</label>
        <textarea id="oz-note" style={{ ...box, minHeight: 56 }} value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#15803d', color: '#fff', padding: '.8rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '.95rem', borderRadius: 4 }}>💬 {form.send}</a>
      <p style={{ margin: '.8rem 0 0', fontSize: '.85rem', color: '#4a3f35' }}>{form.hint}</p>
    </form>
  );
}
