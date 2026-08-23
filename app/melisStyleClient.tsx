'use client';
// app/melis-style/MelisStyleClient.tsx
import { useState } from 'react';

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
};

const GREEN = '#2d8c6e';
const GREEN_DARK = '#20654f';
const INK = '#171a19';
const SUB = '#5b6460';
const BORDER = '#e6e9e7';
const BG_SOFT = '#f7f8f7';
const GOLD = '#c9971f';

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: BG_SOFT, padding: 12, textAlign: 'center' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GREEN_DARK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16l4.5-6 3.5 4.5 2.5-3L20 16M4 6h16v12H4V6z" />
        </svg>
        <span style={{ fontSize: 11.5, color: SUB, lineHeight: 1.4 }}>Fotoğraf yakında eklenecek</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} loading="lazy" onError={() => setBroken(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
  );
}

export default function MelisStyleClient({ products, phone, phoneE164 }: { products: Product[]; phone: string; phoneE164: string }) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]?.id ?? '');
  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const selected = products.find((p) => p.id === selectedProduct);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !address.trim() || !customerPhone.trim()) {
      setError('Lütfen ad soyad, adres ve telefon alanlarını doldurun.');
      return;
    }
    setError('');
    const lines = [
      'Merhaba, Melis Style üzerinden sipariş vermek istiyorum.',
      '',
      `Ürün: ${selected?.name ?? '-'}`,
      `Adet: ${quantity}`,
      `Ad Soyad: ${fullName}`,
      `Adres: ${address}`,
      `Telefon: ${customerPhone}`,
      note.trim() ? `Not: ${note}` : '',
      '',
      'Ödeme: Kapıda ödeme (nakit)',
    ].filter(Boolean);
    const waUrl = `https://wa.me/${phoneE164.replace('+', '')}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        .ms-card:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(23,26,25,0.08); }
        .ms-pick { cursor: pointer; }
        .ms-pick.on { border-color: ${GREEN} !important; background: #eaf5f1 !important; }
        input.ms-input, textarea.ms-input { width: 100%; border: 1px solid ${BORDER}; border-radius: 10px; padding: 12px 14px; font-size: 15px; font-family: inherit; color: ${INK}; }
        input.ms-input:focus, textarea.ms-input:focus { outline: none; border-color: ${GREEN}; }
        @media (max-width: 720px) {
          .ms-products { grid-template-columns: 1fr !important; }
          .ms-gallery { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <main style={{ maxWidth: 880, margin: '0 auto', padding: '36px 20px 72px', color: INK, background: '#fff', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>

        {/* HEADER */}
        <header style={{ marginBottom: 36 }}>
          <div style={{ display: 'inline-block', background: '#eaf5f1', color: GREEN_DARK, fontSize: 12, fontWeight: 700, letterSpacing: 0.3, padding: '6px 12px', borderRadius: 999, marginBottom: 16 }}>
            MELIS STYLE
          </div>
          <h1 style={{ fontSize: 32, lineHeight: 1.16, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 12px', color: '#0e100f' }}>
            Plaj Çantası, Makyaj Çantası ve Şapka
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: SUB, margin: 0, maxWidth: 620 }}>
            Özel tasarım, el işçiliğine önem verilmiş plaj çantaları, havlu kumaş makyaj çantaları ve yazlık şapkalar. Aşağıdan ürünü seçip sipariş formunu doldurmanız yeterli.
          </p>
          <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fbf5e7', color: GOLD, fontSize: 13, fontWeight: 700, padding: '8px 14px', borderRadius: 10 }}>
            💵 Sadece Kapıda Ödeme (Nakit) — Kart / POS ile ödeme yapılmamaktadır
          </div>
        </header>

        {/* ÜRÜNLER */}
        <section style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16, color: '#0e100f' }}>Ürünler</h2>
          <div className="ms-products" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
            {products.map((p) => (
              <div
                key={p.id}
                className={`ms-card ms-pick${selectedProduct === p.id ? ' on' : ''}`}
                onClick={() => setSelectedProduct(p.id)}
                style={{ border: `1px solid ${selectedProduct === p.id ? GREEN : BORDER}`, borderRadius: 14, overflow: 'hidden', transition: 'all .15s', background: '#fff' }}
              >
                <div style={{ position: 'relative', aspectRatio: '4/5', background: BG_SOFT }}>
                  <ProductImage src={p.images[0]} alt={p.name} />
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.4, color: SUB, fontWeight: 700, marginBottom: 4 }}>{p.category}</div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0e100f', marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: SUB, lineHeight: 1.5 }}>{p.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇİLİ ÜRÜN GALERİSİ */}
        {selected && selected.images.length > 1 && (
          <section style={{ marginBottom: 44 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16, color: '#0e100f' }}>{selected.name} — Fotoğraflar</h2>
            <div className="ms-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
              {selected.images.map((src) => (
                <div key={src} style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 12, overflow: 'hidden', border: `1px solid ${BORDER}`, background: BG_SOFT }}>
                  <ProductImage src={src} alt={selected.name} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SİPARİŞ FORMU */}
        <section style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 6, color: '#0e100f' }}>Sipariş Formu</h2>
          <p style={{ fontSize: 14, color: SUB, marginBottom: 22 }}>
            Formu doldurup gönderdiğinizde sipariş bilgileriniz WhatsApp üzerinden iletilir, fiyat ve teslimat detayı orada teyit edilir.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: INK }}>Ürün</label>
              <select
                className="ms-input"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                style={{ background: '#fff' }}
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: INK }}>Adet</label>
              <input
                className="ms-input"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: INK }}>Ad Soyad</label>
              <input className="ms-input" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Adınız Soyadınız" required />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: INK }}>Teslimat Adresi</label>
              <textarea className="ms-input" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Mahalle, cadde/sokak, no, ilçe, il" required />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: INK }}>Telefon</label>
              <input className="ms-input" type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="05XX XXX XX XX" required />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: INK }}>Not (opsiyonel)</label>
              <textarea className="ms-input" rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Renk tercihi, teslimat saati vb." />
            </div>

            {error && (
              <div style={{ fontSize: 13.5, color: '#b3261e', background: '#fdecea', border: '1px solid #f5c6c2', borderRadius: 10, padding: '10px 14px' }}>
                {error}
              </div>
            )}

            <div style={{ fontSize: 12.5, color: SUB, background: BG_SOFT, border: `1px solid ${BORDER}`, borderRadius: 10, padding: '10px 14px' }}>
              💵 Ödeme yalnızca <strong>kapıda nakit</strong> olarak alınır. Kart veya online ödeme (POS) desteği bulunmamaktadır.
            </div>

            <button
              type="submit"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 22px', borderRadius: 10, background: GREEN, color: '#fff', fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(45,140,110,0.28)' }}
            >
              💬 Siparişi WhatsApp'tan Gönder
            </button>
          </form>

          <p style={{ fontSize: 12.5, color: SUB, marginTop: 14 }}>
            Sorularınız için doğrudan da ulaşabilirsiniz: <a href={`tel:${phoneE164}`} style={{ color: GREEN_DARK, fontWeight: 600 }}>{phone}</a>
          </p>
        </section>

      </main>
    </>
  );
}
