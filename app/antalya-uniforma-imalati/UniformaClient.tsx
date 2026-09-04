'use client'
// app/antalya-uniforma-imalati/UniformaClient.tsx

import { useState } from 'react'

const PHONE     = '+90 531 898 64 18'
const PHONE_TEL = '+905318986418'
const WA_NUM    = '905318986418'
const wa = (msg: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`
const MAPS = 'https://maps.app.goo.gl/CNZghczJNRQX3mLM9'

// ── Sektörler ─────────────────────────────────────────────────────────────────
const SEKTORLER = [
  {
    ikon: '🏨',
    ad: 'Otel & Konaklama',
    aciklama: 'Resepsiyon, kat hizmetleri, güvenlik, teknik ekip, animasyon ve yönetici kıyafetleri.',
    kalemler: ['Resepsiyon Üniforması', 'Kat Hizmetleri Kıyafeti', 'Yönetici Takım Elbise', 'Animasyon Kıyafeti'],
  },
  {
    ikon: '🍽️',
    ad: 'Restoran & Otel Mutfağı',
    aciklama: 'Garson, şef, aşçı üniforması ve önlük — hijyenik kumaş, dayanıklı dikiş.',
    kalemler: ['Garson Üniforması', 'Şef Ceketi', 'Aşçı Önlüğü', 'Bulaşıkhane Kıyafeti'],
  },
  {
    ikon: '🎓',
    ad: 'Okul & Eğitim Kurumları',
    aciklama: 'Öğrenci forması, spor kıyafeti, okul öncesi üniforma — dayanıklı ve rahat kumaş.',
    kalemler: ['Öğrenci Forması', 'Beden Eğitimi Kıyafeti', 'Okul Öncesi Önlük', 'Öğretmen Kıyafeti'],
  },
  {
    ikon: '🏥',
    ad: 'Hastane & Sağlık Kuruluşları',
    aciklama: 'Doktor önlüğü, hemşire forması, sağlık personeli kıyafeti — hijyen standartlarına uygun.',
    kalemler: ['Doktor Önlüğü', 'Hemşire Forması', 'Teknisyen Kıyafeti', 'Hasta Bakıcı Üniforması'],
  },
  {
    ikon: '🛡️',
    ad: 'Güvenlik & Teknik Ekip',
    aciklama: 'Güvenlik personeli, vale, bakım-onarım ekibi kıyafetleri — dayanıklı kumaş seçenekleri.',
    kalemler: ['Güvenlik Üniforması', 'Vale Kıyafeti', 'Teknik Servis Tulumu', 'Bahçıvan Kıyafeti'],
  },
  {
    ikon: '🏢',
    ad: 'Kurumsal Ofis & Mağaza',
    aciklama: 'Mağaza personeli, çağrı merkezi, ofis kıyafeti — marka kimliğinize uygun tasarım.',
    kalemler: ['Mağaza Personeli Kıyafeti', 'Ofis Forması', 'Satış Ekibi Kıyafeti', 'Kurumsal Yelek'],
  },
]

// ── Süreç adımları ───────────────────────────────────────────────────────────
const SUREC = [
  { no: '01', baslik: 'İhtiyaç Analizi', aciklama: 'Sektörünüzü, personel sayınızı ve marka kimliğinizi dinliyoruz.' },
  { no: '02', baslik: 'Tasarım & Kumaş Seçimi', aciklama: 'Renk, model ve kumaş örnekleri sunuyoruz; onayınızla ilerliyoruz.' },
  { no: '03', baslik: 'Numune Üretimi', aciklama: 'Onaylı tasarımdan numune diker, son kontrolü sizinle yaparız.' },
  { no: '04', baslik: 'Seri İmalat & Nakış', aciklama: 'Toplu üretim başlar; logo nakışı veya baskı bu aşamada işlenir.' },
  { no: '05', baslik: 'Teslimat', aciklama: 'Antalya genelinde adresinize veya işletmenize teslim ederiz.' },
]

// ── Neden biz ─────────────────────────────────────────────────────────────────
const NEDEN_BIZ = [
  { ikon: '✂️', baslik: 'Tasarımdan İmalata Tek Elden', aciklama: 'Kumaş seçimi, kalıp, dikim ve nakış — hepsi tek atölyede.' },
  { ikon: '🏭', baslik: 'Seri Üretim Kapasitesi', aciklama: 'Küçük işletmeden büyük otel zincirine uygun ölçekte üretim.' },
  { ikon: '🧵', baslik: 'Nakış & Logo Baskı Dahil', aciklama: 'Kurumsal kimliğinizi üniformaya işliyoruz — ayrı tedarikçiye gerek yok.' },
  { ikon: '📍', baslik: 'Tüm Antalya\'ya Teslimat', aciklama: 'Konyaaltı\'dan Alanya\'ya, Kemer\'den Manavgat\'a — her bölgeye hizmet.' },
  { ikon: '💬', baslik: 'Şeffaf Süreç Takibi', aciklama: 'Numune onayından teslimata kadar WhatsApp üzerinden bilgilendirme.' },
  { ikon: '⭐', baslik: '4.9 · 94 Değerlendirme', aciklama: 'Otel ve restoran işletmelerinden doğrulanmış memnuniyet.' },
]

export default function UniformaClient() {
  const [aktifSektor, setAktifSektor] = useState<number | null>(null)
  const [form, setForm] = useState({ isletme: '', sektor: '', adet: '', telefon: '' })

  function teklifIste() {
    const msg = [
      `🏭 *ÜNİFORMA İMALATI — TEKLİF TALEBİ*`,
      `━━━━━━━━━━━━━━━━━━`,
      `İşletme: ${form.isletme || '—'}`,
      `Sektör: ${form.sektor || '—'}`,
      `Yaklaşık Adet: ${form.adet || '—'}`,
      `Telefon: ${form.telefon || '—'}`,
      `━━━━━━━━━━━━━━━━━━`,
      `Detaylı bilgi ve teklif için dönüş bekliyorum.`,
    ].join('\n')
    window.open(wa(msg), '_blank')
  }

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Inter',system-ui,sans-serif;background:#F8F5F0;color:#1A1A1A;line-height:1.65;-webkit-font-smoothing:antialiased}
        a{color:inherit;text-decoration:none}

        .nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;
          padding:16px 28px;background:rgba(44,74,62,.97);backdrop-filter:blur(12px);border-bottom:1px solid rgba(201,169,110,.15)}
        .nav-logo{font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:800;color:#fff}
        .nav-logo span{color:#C9A96E}
        .nav-cta{display:inline-flex;align-items:center;gap:7px;background:#C9A96E;color:#1E3329;
          font-weight:700;font-size:.82rem;padding:10px 18px;border-radius:4px}

        .hero{background:linear-gradient(135deg,#1E3329 0%,#2C4A3E 55%,#3A5A4E 100%);
          padding:100px 24px 80px;text-align:center;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;
          background:radial-gradient(ellipse 70% 50% at 50% 20%,rgba(201,169,110,.12),transparent)}
        .hero-inner{position:relative;z-index:2;max-width:820px;margin:0 auto}
        .hero-badge{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(201,169,110,.45);
          color:#C9A96E;font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;font-weight:700;
          padding:7px 16px;border-radius:2px;margin-bottom:24px}
        .hero h1{font-family:'Playfair Display',serif;font-size:clamp(2.2rem,6vw,4rem);font-weight:800;
          color:#fff;line-height:1.12;margin-bottom:18px}
        .hero h1 em{font-style:italic;color:#C9A96E}
        .hero-desc{font-size:1.02rem;color:rgba(255,255,255,.72);max-width:600px;margin:0 auto 32px;line-height:1.75}
        .hero-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:44px}
        .hero-stats{display:flex;gap:2rem;justify-content:center;border-top:1px solid rgba(201,169,110,.2);
          padding-top:1.8rem;flex-wrap:wrap}
        .hs-num{font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:800;color:#C9A96E;line-height:1}
        .hs-lbl{font-size:.65rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em;margin-top:.25rem}

        .sec{padding:80px 24px}
        .ctr{max-width:1080px;margin:0 auto}
        .sec-ey{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#2C4A3E;font-weight:700;
          display:block;margin-bottom:.9rem}
        .sec-h{font-family:'Playfair Display',serif;font-size:clamp(1.7rem,3.6vw,2.5rem);font-weight:800;
          line-height:1.15;color:#1A1A1A;margin-bottom:.6rem}
        .sec-sub{font-size:.93rem;color:#6B7057;max-width:560px;line-height:1.75}
        .sec-head{text-align:center;margin-bottom:52px}
        .sec-head .sec-sub{margin-left:auto;margin-right:auto}
        .gold-line{width:48px;height:3px;background:linear-gradient(90deg,#2C4A3E,#C9A96E);border-radius:2px;
          margin:16px auto 0}

        /* SEKTÖRLER */
        .sektor-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .sektor-card{background:#fff;border:1px solid rgba(44,74,62,.08);border-radius:10px;
          padding:28px 24px;transition:all .25s;cursor:pointer}
        .sektor-card:hover,.sektor-card.aktif{border-color:#C9A96E;box-shadow:0 8px 28px rgba(44,74,62,.1);
          transform:translateY(-3px)}
        .sektor-ikon{width:52px;height:52px;background:#F2EDE5;border-radius:10px;display:flex;
          align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:16px}
        .sektor-ad{font-weight:700;font-size:1.02rem;color:#1A1A1A;margin-bottom:8px}
        .sektor-aciklama{font-size:.83rem;color:#6B7057;line-height:1.65;margin-bottom:14px}
        .sektor-kalemler{display:none;flex-wrap:wrap;gap:6px;padding-top:12px;border-top:1px solid #F2EDE5}
        .sektor-card.aktif .sektor-kalemler{display:flex}
        .kalem-chip{font-size:.68rem;color:#2C4A3E;background:#F2EDE5;padding:4px 10px;border-radius:20px;font-weight:500}
        .sektor-toggle{font-size:.75rem;color:#2C4A3E;font-weight:600;margin-top:8px;display:flex;align-items:center;gap:4px}

        /* SÜREÇ */
        .surec-section{background:#1E3329}
        .surec-section .sec-ey{color:#C9A96E}
        .surec-section .sec-h{color:#fff}
        .surec-section .sec-sub{color:rgba(255,255,255,.55)}
        .surec-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:rgba(255,255,255,.08);margin-top:16px}
        .surec-card{background:#1E3329;padding:28px 20px;text-align:center}
        .surec-no{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:800;
          color:rgba(201,169,110,.18);line-height:1;margin-bottom:12px}
        .surec-baslik{font-weight:700;font-size:.88rem;color:#fff;margin-bottom:8px}
        .surec-aciklama{font-size:.76rem;color:rgba(255,255,255,.5);line-height:1.6}

        /* NEDEN BİZ */
        .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .why-card{background:#fff;border-radius:10px;padding:24px;border:1px solid rgba(44,74,62,.08);transition:all .2s}
        .why-card:hover{border-color:rgba(201,169,110,.4);box-shadow:0 6px 20px rgba(44,74,62,.08)}
        .why-ikon{font-size:1.5rem;margin-bottom:12px}
        .why-baslik{font-weight:700;font-size:.92rem;color:#1A1A1A;margin-bottom:6px}
        .why-aciklama{font-size:.8rem;color:#6B7057;line-height:1.6}

        /* TEKLİF FORMU */
        .form-section{background:#F2EDE5}
        .form-card{max-width:640px;margin:0 auto;background:#fff;border-radius:12px;padding:40px;
          box-shadow:0 4px 24px rgba(44,74,62,.09)}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px}
        .form-grup{margin-bottom:16px}
        .form-lbl{display:block;font-size:.75rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
          color:#2C4A3E;margin-bottom:6px}
        .form-inp{width:100%;padding:12px 14px;border:1.5px solid rgba(44,74,62,.15);border-radius:6px;
          font-size:.92rem;font-family:'Inter',sans-serif;background:#F8F5F0;color:#1A1A1A;outline:none;transition:border-color .2s}
        .form-inp:focus{border-color:#2C4A3E;background:#fff}
        select.form-inp{cursor:pointer}
        .teklif-btn{width:100%;background:#2C4A3E;color:#fff;border:none;border-radius:8px;padding:16px;
          font-weight:800;font-size:.95rem;cursor:pointer;transition:all .2s;margin-top:8px}
        .teklif-btn:hover{background:#1E3329;transform:translateY(-1px)}

        /* FAQ */
        .faq-section{background:#EDE6DA}
        .faq-list{max-width:720px;margin:0 auto}
        .faq-item{border-bottom:1px solid rgba(44,74,62,.12);padding:18px 0}
        .faq-q{font-weight:700;font-size:.95rem;color:#1A1A1A;margin-bottom:.5rem;display:flex;align-items:center;gap:10px}
        .faq-q::before{content:'';width:6px;height:6px;border-radius:50%;background:#C9A96E;flex-shrink:0}
        .faq-a{font-size:.85rem;color:#6B7057;line-height:1.75;padding-left:16px}

        /* BÖLGELER */
        .bolge-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:32px}
        .bolge-chip{background:#fff;border:1.5px solid rgba(44,74,62,.15);color:#1A1A1A;font-size:.85rem;
          font-weight:600;padding:10px 20px;border-radius:40px}

        /* CTA */
        .cta-banner{background:linear-gradient(135deg,#2C4A3E,#1E3329);padding:72px 24px;text-align:center}
        .cta-h{font-family:'Playfair Display',serif;font-size:clamp(1.7rem,4vw,2.6rem);font-weight:800;color:#fff;
          margin-bottom:14px;line-height:1.2}
        .cta-h em{font-style:italic;color:#C9A96E}
        .cta-sub{color:rgba(255,255,255,.65);margin-bottom:32px;font-size:.96rem}
        .cta-acts{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:4px;font-weight:700;font-size:.88rem;
          padding:13px 22px;transition:all .2s;cursor:pointer}
        .btn-gold{background:#C9A96E;color:#1E3329}
        .btn-gold:hover{background:#B8955A;transform:translateY(-2px);box-shadow:0 6px 20px rgba(201,169,110,.35)}
        .btn-dark{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.25)}
        .btn-dark:hover{background:rgba(255,255,255,.2);transform:translateY(-2px)}
        .btn-lg{padding:15px 28px;font-size:.95rem}

        footer{background:#1E3329;padding:36px 24px;text-align:center;border-top:1px solid rgba(201,169,110,.12)}
        .foot-brand{font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:800;color:#C9A96E;margin-bottom:8px}
        .foot-desc{font-size:.76rem;color:rgba(255,255,255,.4);margin-bottom:16px}
        .foot-nav{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        .foot-nav a{font-size:.75rem;color:rgba(255,255,255,.4);transition:color .2s}
        .foot-nav a:hover{color:#C9A96E}

        @media(max-width:900px){
          .sektor-grid,.why-grid{grid-template-columns:repeat(2,1fr)}
          .surec-grid{grid-template-columns:repeat(2,1fr)}
          .form-grid{grid-template-columns:1fr}
        }
        @media(max-width:540px){
          .sektor-grid,.why-grid,.surec-grid{grid-template-columns:1fr}
          .hero-actions,.cta-acts{flex-direction:column;align-items:center}
        }
        @media(prefers-reduced-motion:reduce){*{transition:none!important}}
      `}</style>

      {/* NAV */}
      <nav className="nav" aria-label="Ana menü">
        <a href="/" className="nav-logo">Terzi <span>Can</span></a>
        <a href={wa('Merhaba, üniforma imalatı hakkında bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="nav-cta">
          💬 Teklif Al
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-inner">
          <span className="hero-badge">✦ Antalya Geneli · Üniforma İmalatı & Tasarım</span>
          <h1 id="hero-h">
            Kurumunuza Özel <em>Üniforma</em><br />Tasarımı ve İmalatı
          </h1>
          <p className="hero-desc">
            Otel, restoran, okul, hastane ve kurumsal işletmeler için tasarımdan seri üretime,
            nakıştan teslimata kadar tek elden üniforma çözümü. Antalya'nın her bölgesine hizmet.
          </p>
          <div className="hero-actions">
            <a href={wa('Merhaba, üniforma imalatı için teklif almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
              💬 Ücretsiz Teklif Al
            </a>
            <a href="#sektorler" className="btn btn-dark btn-lg">Sektörleri Gör ↓</a>
          </div>
          <div className="hero-stats">
            {[['4.9★','Google Puanı'],['6 Sektör','Uzmanlık Alanı'],['Tüm Antalya','Teslimat'],['Tek Elden','Tasarım+İmalat+Nakış']].map(([n,l]) => (
              <div key={l}><div className="hs-num">{n}</div><div className="hs-lbl">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKTÖRLER */}
      <section className="sec" id="sektorler" aria-labelledby="sektor-h">
        <div className="ctr">
          <div className="sec-head">
            <span className="sec-ey">✦ Hizmet Verdiğimiz Sektörler</span>
            <h2 className="sec-h" id="sektor-h">Her Sektöre Özel Üniforma Çözümü</h2>
            <p className="sec-sub">Sektörünüze tıklayarak dikebileceğimiz kıyafet kalemlerini görün.</p>
            <div className="gold-line" />
          </div>
          <div className="sektor-grid">
            {SEKTORLER.map((s, i) => (
              <article
                key={s.ad}
                className={`sektor-card${aktifSektor===i?' aktif':''}`}
                onClick={() => setAktifSektor(aktifSektor===i?null:i)}
                role="button"
                tabIndex={0}
                aria-expanded={aktifSektor===i}
              >
                <div className="sektor-ikon" aria-hidden="true">{s.ikon}</div>
                <h3 className="sektor-ad">{s.ad}</h3>
                <p className="sektor-aciklama">{s.aciklama}</p>
                <div className="sektor-toggle">{aktifSektor===i ? '− Kapat' : '+ Kıyafet Kalemlerini Gör'}</div>
                <div className="sektor-kalemler">
                  {s.kalemler.map(k => <span key={k} className="kalem-chip">{k}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="sec surec-section" aria-labelledby="surec-h">
        <div className="ctr">
          <div className="sec-head">
            <span className="sec-ey">⚙️ Nasıl Çalışır</span>
            <h2 className="sec-h" id="surec-h">Tasarımdan Teslimata 5 Adım</h2>
            <p className="sec-sub">İhtiyaç analizinden teslimata kadar tüm süreci biz yönetiyoruz.</p>
            <div className="gold-line" />
          </div>
          <div className="surec-grid">
            {SUREC.map(s => (
              <div className="surec-card" key={s.no}>
                <div className="surec-no">{s.no}</div>
                <div className="surec-baslik">{s.baslik}</div>
                <div className="surec-aciklama">{s.aciklama}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="sec" aria-labelledby="why-h">
        <div className="ctr">
          <div className="sec-head">
            <span className="sec-ey">✦ Neden Terzi Can?</span>
            <h2 className="sec-h" id="why-h">Kurumsal Ortağınız Olmaya Hazırız</h2>
            <div className="gold-line" />
          </div>
          <div className="why-grid">
            {NEDEN_BIZ.map(w => (
              <div className="why-card" key={w.baslik}>
                <div className="why-ikon" aria-hidden="true">{w.ikon}</div>
                <div className="why-baslik">{w.baslik}</div>
                <div className="why-aciklama">{w.aciklama}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEKLİF FORMU */}
      <section className="sec form-section" id="teklif" aria-labelledby="form-h">
        <div className="ctr">
          <div className="sec-head">
            <span className="sec-ey">📋 Hızlı Teklif</span>
            <h2 className="sec-h" id="form-h">Üniforma Teklifi İsteyin</h2>
            <p className="sec-sub">Bilgilerinizi doldurun — WhatsApp üzerinden 30 dakika içinde dönüş yapalım.</p>
            <div className="gold-line" />
          </div>
          <div className="form-card">
            <div className="form-grup">
              <label className="form-lbl" htmlFor="isletme">İşletme Adı</label>
              <input id="isletme" className="form-inp" value={form.isletme}
                onChange={e => setForm({...form, isletme: e.target.value})}
                placeholder="Örn: Deniz Otel, ABC Restoran" />
            </div>
            <div className="form-grid">
              <div className="form-grup">
                <label className="form-lbl" htmlFor="sektor">Sektör</label>
                <select id="sektor" className="form-inp" value={form.sektor}
                  onChange={e => setForm({...form, sektor: e.target.value})}>
                  <option value="">Seçiniz</option>
                  <option>Otel & Konaklama</option>
                  <option>Restoran & Mutfak</option>
                  <option>Okul & Eğitim</option>
                  <option>Hastane & Sağlık</option>
                  <option>Güvenlik & Teknik</option>
                  <option>Kurumsal Ofis & Mağaza</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div className="form-grup">
                <label className="form-lbl" htmlFor="adet">Yaklaşık Personel Sayısı</label>
                <input id="adet" className="form-inp" value={form.adet}
                  onChange={e => setForm({...form, adet: e.target.value})}
                  placeholder="Örn: 25 kişi" />
              </div>
            </div>
            <div className="form-grup">
              <label className="form-lbl" htmlFor="telefon">Telefon</label>
              <input id="telefon" type="tel" className="form-inp" value={form.telefon}
                onChange={e => setForm({...form, telefon: e.target.value})}
                placeholder="0 5__ ___ __ __" />
            </div>
            <button className="teklif-btn" onClick={teklifIste}>
              💬 WhatsApp'tan Teklif İste
            </button>
          </div>
        </div>
      </section>

      {/* BÖLGELER */}
      <section className="sec" aria-labelledby="bolge-h">
        <div className="ctr">
          <div className="sec-head">
            <span className="sec-ey">📍 Hizmet Bölgesi</span>
            <h2 className="sec-h" id="bolge-h">Tüm Antalya'ya Üniforma Teslimatı</h2>
            <p className="sec-sub">Konyaaltı'daki atölyemizden Antalya'nın her ilçesine hizmet veriyoruz.</p>
          </div>
          <div className="bolge-grid">
            {['Konyaaltı','Muratpaşa','Kepez','Döşemealtı','Aksu','Lara','Belek','Kemer','Alanya','Manavgat','Side','Serik'].map(b => (
              <span key={b} className="bolge-chip">📍 {b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec faq-section" id="sss" aria-labelledby="faq-h">
        <div className="ctr">
          <div className="sec-head">
            <span className="sec-ey">SSS</span>
            <h2 className="sec-h" id="faq-h">Sık Sorulan Sorular</h2>
            <div className="gold-line" />
          </div>
          <div className="faq-list">
            {[
              ['Antalya\'da toplu üniforma siparişi verebilir miyim?', 'Evet. Küçük işletmeler için 10 adetten başlayan, büyük zincirler için sınırsız kapasiteli üretim yapıyoruz. WhatsApp\'tan ihtiyacınızı belirtin.'],
              ['Otel personeli için hangi üniformaları dikiyorsunuz?', 'Resepsiyon, kat hizmetleri, güvenlik, teknik ekip, animasyon ve yönetici kıyafetleri dahil tüm departmanlar için özel tasarım üretiyoruz.'],
              ['Okul üniforması siparişi ne kadar sürede teslim edilir?', 'Sipariş adedine göre 2–4 hafta içinde teslim ediyoruz. Sezon başı için erken sipariş öneririz.'],
              ['Hastane ve sağlık kuruluşları için üretim yapıyor musunuz?', 'Evet. Doktor önlüğü, hemşire forması ve sağlık personeli kıyafetlerini hijyen standartlarına uygun kumaşlarla üretiyoruz.'],
              ['Logo nakış ve baskı hizmeti dahil mi?', 'Evet. Kurumsal logonuzu nakış veya dijital baskı ile üniformalara işliyoruz. Ayrı hizmet olarak da sipariş verilebilir.'],
              ['Hangi bölgelere hizmet veriyorsunuz?', 'Konyaaltı, Muratpaşa, Kepez, Lara, Belek, Kemer, Alanya, Manavgat, Side dahil tüm Antalya\'ya hizmet veriyoruz.'],
            ].map(([q,a]) => (
              <div key={q} className="faq-item">
                <div className="faq-q">{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" aria-label="İletişim çağrısı">
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <h2 className="cta-h">İşletmeniz İçin <em>Özel Teklif</em> Alın</h2>
          <p className="cta-sub">WhatsApp'tan yazın, ihtiyacınızı anlatın — 30 dakika içinde dönüş yapalım.</p>
          <div className="cta-acts">
            <a href={wa('Merhaba, üniforma imalatı için teklif almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
              💬 WhatsApp {PHONE}
            </a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg">📍 Atölyeyi Haritada Bul</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-brand">Terzi Can — Üniforma İmalatı</div>
        <p className="foot-desc">Konyaaltı Atölyesi · Antalya Geneli Kurumsal Giyim · {PHONE}</p>
        <nav className="foot-nav" aria-label="Footer bağlantılar">
          <a href="/">Ana Sayfa</a>
          <a href="#sektorler">Sektörler</a>
          <a href="#teklif">Teklif Al</a>
          <a href="#sss">SSS</a>
          <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
        </nav>
      </footer>
    </div>
  )
}
