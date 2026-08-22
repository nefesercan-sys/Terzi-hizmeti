{/* ═══════════════════════════════════════════════════════════════════════
   İÇ LİNK BÖLÜMÜ — Ana sayfaya veya /antalya-terzi sayfasına, FAQ bölümünden
   HEMEN ÖNCE veya SONRA eklenecek. Yeni long-tail sayfalara (fermuar, paça,
   gelinlik) güçlü, görünür iç link verir. Google bir sayfanın önemini büyük
   ölçüde kaç iç linkle işaret edildiğine bakarak değerlendirir — bu bölüm
   olmadan yeni sayfalar sadece sitemap'te "yalnız" kalır.

   KULLANIM: Aşağıdaki <section>'ı page.tsx dosyanızın uygun yerine
   (örn. FAQ'dan önce) yapıştırın. globals.css zaten gerekli class'ları
   içeriyor (.wk-grid, .wk-card vb. yeniden kullanılıyor).
   ═══════════════════════════════════════════════════════════════════════ */}

<section className="sec" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="detail-h">
  <div className="ctr">
    <div className="sec-head">
      <span className="eyebrow">🔍 Detaylı Hizmet Sayfaları</span>
      <h2 className="sec-h ff" id="detail-h">Aradığınız Hizmeti Doğrudan Bulun</h2>
      <p className="sec-sub">
        En çok talep edilen hizmetler için detaylı fiyat ve süreç bilgisi.
      </p>
    </div>
    <div className="wk-grid">
      <a href="/konyaalti-fermuar-tamiri" className="wk-card" style={{ display: 'block' }}>
        <div className="wk-icon">🔧</div>
        <div className="wk-tr">Fermuar Tamiri Konyaaltı</div>
        <span className="wk-en">Zipper Repair</span>
        <p className="wk-desc">Pantolon, mont, ceket, çanta fermuarı — aynı gün teslim, ₺200'den.</p>
        <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör →</span>
      </a>
      <a href="/konyaalti-paca-kisaltma" className="wk-card" style={{ display: 'block' }}>
        <div className="wk-icon">📏</div>
        <div className="wk-tr">Paça Kısaltma Konyaaltı</div>
        <span className="wk-en">Hemming</span>
        <p className="wk-desc">Pantolon, kot, etek kısaltma — aynı gün teslim, ₺150'den.</p>
        <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör →</span>
      </a>
      <a href="/antalya-gelinlik-tadilati" className="wk-card" style={{ display: 'block' }}>
        <div className="wk-icon">💍</div>
        <div className="wk-tr">Gelinlik Tadilatı Antalya</div>
        <span className="wk-en">Wedding Dress Alterations</span>
        <p className="wk-desc">Hassas daraltma, boy ayarı, korse onarımı — ₺400'den.</p>
        <span style={{ fontSize: '.76rem', color: '#C9A96E', fontWeight: 700 }}>Fiyatları Gör →</span>
      </a>
    </div>
  </div>
</section>
