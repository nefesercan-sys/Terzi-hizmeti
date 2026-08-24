'use client';
// app/melis-style/MelisStyleClient.tsx
import { useState } from 'react';

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  images: string[];
};

// ── Marka Paleti ──────────────────────────────────────────────────────────
const SAND = '#F4EEE3';
const SAND_DEEP = '#E8DFCE';
const TEAL = '#2C6E68';
const TEAL_DEEP = '#1E4F4A';
const RUST = '#C1633A';
const RUST_DEEP = '#A34F2C';
const INK = '#241F1A';
const MUTED = '#786F60';
const CREAM = '#FBF8F2';

function formatTRY(n: number) {
  return `${n.toLocaleString('tr-TR')} ₺`;
}

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: SAND_DEEP, padding: 12, textAlign: 'center' }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16l4.5-6 3.5 4.5 2.5-3L20 16M4 6h16v12H4V6z" />
        </svg>
        <span style={{ fontSize: 11.5, color: MUTED, lineHeight: 1.4, fontFamily: 'var(--ms-body)' }}>Fotoğraf yakında eklenecek</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} loading="lazy" onError={() => setBroken(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
  );
}

function WeaveTrim({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const a = tone === 'light' ? TEAL : SAND;
  const b = RUST;
  return (
    <div
      aria-hidden
      style={{
        height: 10,
        width: '100%',
        backgroundImage: `linear-gradient(135deg, ${a} 25%, transparent 25%), linear-gradient(225deg, ${a} 25%, transparent 25%), linear-gradient(45deg, ${b} 25%, transparent 25%), linear-gradient(315deg, ${b} 25%, transparent 25%)`,
        backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
        backgroundSize: '20px 10px',
        backgroundRepeat: 'repeat-x',
        opacity: 0.85,
      }}
    />
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
  const total = selected ? selected.price * quantity : 0;

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
      `Birim Fiyat: ${selected ? formatTRY(selected.price) : '-'}`,
      `Toplam: ${formatTRY(total)}`,
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
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700&display=swap');
        :root { --ms-display: 'Fraunces', Georgia, serif; --ms-body: 'Inter', system-ui, sans-serif; }
        .ms-root { font-family: var(--ms-body); color: ${INK}; background: ${CREAM}; }
        .ms-card { transition: transform .25s ease, box-shadow .25s ease, border-color .2s ease; }
        .ms-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(36,31,26,0.1); }
        .ms-pick { cursor: pointer; }
        .ms-pick.on { border-color: ${TEAL} !important; box-shadow: 0 0 0 1px ${TEAL}; }
        input.ms-input, textarea.ms-input, select.ms-input {
          width: 100%; border: 1px solid ${SAND_DEEP}; border-radius: 10px; padding: 12px 14px;
          font-size: 15px; font-family: var(--ms-body); color: ${INK}; background: #fff;
        }
        input.ms-input:focus, textarea.ms-input:focus, select.ms-input:focus { outline: none; border-color: ${TEAL}; box-shadow: 0 0 0 3px rgba(44,110,104,0.12); }
        .ms-hero { animation: msFadeUp .7s ease both; }
        @keyframes msFadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .ms-hero { animation: none; } }
        @media (max-width: 760px) {
          .ms-hero-grid { grid-template-columns: 1fr !important; }
          .ms-products { grid-template-columns: 1fr !important; }
          .ms-gallery { grid-template-columns: 1fr 1fr !important; }
          .ms-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="ms-root">
        {/* HERO */}
        <section style={{ background: `linear-gradient(180deg, ${SAND} 0%, ${CREAM} 100%)`, paddingBottom: 8 }}>
          <div className="ms-hero" style={{ maxWidth: 980, margin: '0 auto', padding: '56px 24px 40px' }}>
            <div className="ms-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: TEAL_DEEP, fontWeight: 600, marginBottom: 18 }}>
                  <span style={{ width: 18, height: 1.5, background: RUST, display: 'inline-block' }} />
                  El İşçiliği · Dokuma Detaylı · Yazlık Koleksiyon
                </div>

                <h1 style={{ fontFamily: 'var(--ms-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', lineHeight: 0.98, color: INK, margin: '0 0 4px', letterSpacing: '-0.01em' }}>
                  Melis <span style={{ color: RUST }}>Style</span>
                </h1>
                <p style={{ fontFamily: 'var(--ms-body)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, fontWeight: 600, margin: '0 0 22px' }}>
                  Plaj Çantası · Makyaj Çantası · Şapka
                </p>

                <div style={{ maxWidth: 380, marginBottom: 8 }}>
                  <WeaveTrim />
                </div>

                <p style={{ fontSize: 16, lineHeight: 1.7, color: MUTED, margin: '20px 0 0', maxWidth: 420 }}>
                  Krem bukle kumaş, dokuma aztek desenler ve yumuşak havlu kumaşlarla hazırlanan, yaza özel küçük seri parçalar.
                </p>

                <div style={{ marginTop: 26, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', border: `1px solid ${SAND_DEEP}`, borderRadius: 999, padding: '9px 16px', fontSize: 13, fontWeight: 600, color: TEAL_DEEP }}>
                  💵 Kapıda Ödeme — Kart / POS Yok
                </div>
              </div>

              <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 18, overflow: 'hidden', border: `1px solid ${SAND_DEEP}`, boxShadow: '0 20px 50px rgba(36,31,26,0.12)' }}>
                {/* DÜZELTME: Hero görseli artık gerçek Melis Style ürün fotoğrafına
                    bağlı — önceki "lifestyle" dosyası yanlışlıkla başka bir markanın
                    (BISOU etiketli) ürün fotoğrafıydı. */}
                <ProductImage src="/images/plaj-cantasi-aztek-1.jpg" alt="Melis Style aztek desenli plaj çantası" />
              </div>
            </div>
          </div>
          <WeaveTrim />
        </section>

        <main style={{ maxWidth: 980, margin: '0 auto', padding: '48px 24px 80px' }}>

          {/* ÜRÜNLER */}
          <section style={{ marginBottom: 52 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 22 }}>
              <h2 style={{ fontFamily: 'var(--ms-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 26, color: INK, margin: 0 }}>Koleksiyon</h2>
              <span style={{ fontSize: 13, color: MUTED }}>— birini seçip aşağıdan sipariş verin</span>
            </div>
            <div className="ms-products" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
              {products.map((p) => (
                <div
                  key={p.id}
                  className={`ms-card ms-pick${selectedProduct === p.id ? ' on' : ''}`}
                  onClick={() => setSelectedProduct(p.id)}
                  style={{ border: `1px solid ${selectedProduct === p.id ? TEAL : SAND_DEEP}`, borderRadius: 16, overflow: 'hidden', background: '#fff' }}
                >
                  <div style={{ position: 'relative', aspectRatio: '4/5', background: SAND }}>
                    <ProductImage src={p.images[0]} alt={p.name} />
                    <div style={{ position: 'absolute', top: 10, right: 10, background: RUST, color: '#fff', fontSize: 12.5, fontWeight: 700, padding: '4px 10px', borderRadius: 999 }}>
                      {formatTRY(p.price)}
                    </div>
                  </div>
                  <div style={{ padding: '16px 16px 18px' }}>
                    <div style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.14em', color: RUST_DEEP, fontWeight: 700, marginBottom: 6 }}>{p.category}</div>
                    <div style={{ fontFamily: 'var(--ms-display)', fontSize: 17, fontWeight: 600, color: INK, marginBottom: 6, lineHeight: 1.25 }}>{p.name}</div>
                    <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.55 }}>{p.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SEÇİLİ ÜRÜN GALERİSİ */}
          {selected && selected.images.length > 1 && (
            <section style={{ marginBottom: 52 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
                <h2 style={{ fontFamily: 'var(--ms-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 22, color: INK, margin: 0 }}>
                  {selected.name}
                </h2>
                <span style={{ fontSize: 16, fontWeight: 700, color: RUST_DEEP }}>{formatTRY(selected.price)}</span>
              </div>
              <div className="ms-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {selected.images.map((src) => (
                  <div key={src} style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 12, overflow: 'hidden', border: `1px solid ${SAND_DEEP}`, background: SAND }}>
                    <ProductImage src={src} alt={selected.name} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* NASIL SİPARİŞ VERİLİR */}
          <section style={{ marginBottom: 52, background: SAND, borderRadius: 18, padding: '30px 28px' }}>
            <h2 style={{ fontFamily: 'var(--ms-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 20, color: INK, marginBottom: 20 }}>Nasıl Sipariş Verilir</h2>
            <div className="ms-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {[
                ['01', 'Ürünü Seçin', 'Yukarıdaki koleksiyondan istediğiniz ürüne tıklayın.'],
                ['02', 'Formu Doldurun', 'Ad, adres, telefon ve adet bilgisini girin.'],
                ['03', "WhatsApp'tan Onaylayın", 'Sipariş detayları ve toplam tutar WhatsApp\'a iletilir.'],
              ].map(([n, t, d]) => (
                <div key={n}>
                  <div style={{ fontFamily: 'var(--ms-display)', fontSize: 22, color: RUST, fontWeight: 600, marginBottom: 6 }}>{n}</div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: INK, marginBottom: 4 }}>{t}</div>
                  <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>{d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SİPARİŞ FORMU */}
          <section style={{ borderTop: `1px solid ${SAND_DEEP}`, paddingTop: 40 }}>
            <h2 style={{ fontFamily: 'var(--ms-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 24, color: INK, marginBottom: 6 }}>Sipariş Formu</h2>
            <p style={{ fontSize: 14, color: MUTED, marginBottom: 24 }}>
              Formu gönderdiğinizde bilgileriniz ve toplam tutar WhatsApp'a iletilir.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 460 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, marginBottom: 6, color: INK, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Ürün</label>
                <select className="ms-input" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>{p.name} — {formatTRY(p.price)}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, marginBottom: 6, color: INK, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Adet</label>
                <input className="ms-input" type="number" min={1} value={quantity} onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: `1px solid ${SAND_DEEP}`, borderRadius: 10, padding: '12px 16px' }}>
                <span style={{ fontSize: 13.5, color: MUTED, fontWeight: 600 }}>Toplam Tutar</span>
                <span style={{ fontSize: 18, fontWeight: 800, color: RUST_DEEP, fontFamily: 'var(--ms-display)' }}>{formatTRY(total)}</span>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, marginBottom: 6, color: INK, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Ad Soyad</label>
                <input className="ms-input" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Adınız Soyadınız" required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, marginBottom: 6, color: INK, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Teslimat Adresi</label>
                <textarea className="ms-input" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Mahalle, cadde/sokak, no, ilçe, il" required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, marginBottom: 6, color: INK, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Telefon</label>
                <input className="ms-input" type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="05XX XXX XX XX" required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, marginBottom: 6, color: INK, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Not (opsiyonel)</label>
                <textarea className="ms-input" rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Renk tercihi, teslimat saati vb." />
              </div>

              {error && (
                <div style={{ fontSize: 13.5, color: '#8a2e1f', background: '#fbe9e4', border: '1px solid #f0c4b7', borderRadius: 10, padding: '10px 14px' }}>
                  {error}
                </div>
              )}

              <div style={{ fontSize: 12.5, color: TEAL_DEEP, background: '#eef5f4', border: `1px solid ${TEAL}22`, borderRadius: 10, padding: '10px 14px' }}>
                💵 Ödeme yalnızca <strong>kapıda nakit</strong> olarak alınır. Kart veya online ödeme (POS) desteği bulunmamaktadır.
              </div>

              <button
                type="submit"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '15px 24px', borderRadius: 12, background: RUST, color: '#fff', fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(193,99,58,0.32)', fontFamily: 'var(--ms-body)' }}
              >
                Siparişi WhatsApp'tan Gönder — {formatTRY(total)}
              </button>
            </form>

            <p style={{ fontSize: 12.5, color: MUTED, marginTop: 16 }}>
              Sorularınız için: <a href={`tel:${phoneE164}`} style={{ color: TEAL_DEEP, fontWeight: 600 }}>{phone}</a>
            </p>
          </section>

        </main>

        {/* FOOTER */}
        <footer style={{ background: INK, padding: '32px 24px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--ms-display)', fontStyle: 'italic', fontSize: 20, color: SAND, marginBottom: 10 }}>
            Melis <span style={{ color: RUST }}>Style</span>
          </div>
          <div style={{ maxWidth: 160, margin: '0 auto' }}>
            <WeaveTrim tone="dark" />
          </div>
          <p style={{ fontSize: 12, color: '#a89e8e', marginTop: 14 }}>
            Plaj Çantası · Makyaj Çantası · Şapka · Kapıda Ödeme
          </p>
        </footer>
      </div>
    </>
  );
}
