'use client';
// Ölçü formu → hazır WhatsApp mesajı. Veri sunucuya GİTMEZ; mesaj yalnızca wa.me bağlantısında açılır.
import { useMemo, useState } from 'react';
import type { OlcuCopy } from '@/lib/olcu-rehberi';

const field = { width: '100%', padding: '.55rem .7rem', border: '1px solid #8A7D6E', borderRadius: 6, fontSize: '1rem', background: '#fff', color: '#1C1814', boxSizing: 'border-box' as const };

export default function OlcuFormu({ copy, waDigits }: { copy: OlcuCopy; waDigits: string }) {
  const f = copy.form;
  const names = copy.rows.map((r) => r[0]);
  const [product, setProduct] = useState(f.products[0]);
  const [vals, setVals] = useState<string[]>(() => names.map(() => ''));
  const [country, setCountry] = useState('');
  const [note, setNote] = useState('');

  const message = useMemo(() => {
    const lines = [f.hello, `${f.productWord}: ${product}`];
    names.forEach((n, i) => { const v = vals[i].trim(); if (v) lines.push(`${n}: ${v} ${f.unit}`); });
    if (country.trim()) lines.push(`${f.countryWord}: ${country.trim()}`);
    if (note.trim()) lines.push(`${f.noteWord}: ${note.trim()}`);
    lines.push(f.photoLine);
    return lines.join('\n');
  }, [f, names, product, vals, country, note]);

  const href = `https://wa.me/${waDigits}?text=${encodeURIComponent(message)}`;

  return (
    <form onSubmit={(e) => e.preventDefault()} aria-label={f.title}>
      <p style={{ margin: '0 0 1rem' }}>{f.intro}</p>
      <label style={{ display: 'block', marginBottom: '.9rem', fontWeight: 600 }}>
        {f.productLabel}
        <select value={product} onChange={(e) => setProduct(e.target.value)} style={{ ...field, marginTop: '.3rem' }}>
          {f.products.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '.7rem', marginBottom: '.9rem' }}>
        {names.map((n, i) => (
          <label key={n} style={{ fontWeight: 600, fontSize: '.92rem' }}>
            {n} ({f.unit})
            <input inputMode="decimal" dir="ltr" value={vals[i]} onChange={(e) => setVals((p) => p.map((x, j) => (j === i ? e.target.value : x)))} style={{ ...field, marginTop: '.3rem' }} />
          </label>
        ))}
      </div>
      <label style={{ display: 'block', marginBottom: '.9rem', fontWeight: 600 }}>
        {f.countryLabel}
        <input value={country} onChange={(e) => setCountry(e.target.value)} style={{ ...field, marginTop: '.3rem' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600 }}>
        {f.noteLabel}
        <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} style={{ ...field, marginTop: '.3rem', resize: 'vertical' }} />
      </label>
      <p style={{ margin: '0 0 .4rem', fontWeight: 600 }}>{f.preview}</p>
      <pre style={{ whiteSpace: 'pre-wrap', background: '#fff', border: '1px solid #D9CFC1', borderRadius: 6, padding: '.8rem', margin: '0 0 1rem', fontFamily: 'inherit', fontSize: '.95rem', color: '#1C1814' }}>{message}</pre>
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ background: '#15803d', color: '#fff', padding: '.8rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '.95rem', borderRadius: 4, display: 'inline-block' }}>💬 {f.sendLabel}</a>
    </form>
  );
}
