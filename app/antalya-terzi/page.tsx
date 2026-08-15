import React from 'react';

export const metadata = {
  title: 'Terzi Can | Antalya Profesyonel Terzi, Giyim Tamir ve Tadilat',
  description: 'Antalya, Konyaaltı ve Belek bölgelerinde kaliteli giyim tamiri, özel dikim, kıyafet tadilatı ve onarım hizmetleri. Terzi Can güvencesiyle hızlı ve usta işçilik.',
  keywords: 'antalya terzi, terzi can, kıyafet tamir, giyim tadilat, elbise dikim, konyaaltı terzi, belek terzi, paça boyu, fermuar değişimi, online terzi',
};

export default function Home() {
  // Arama motorları (Google) için özel işletme kimliği (SEO Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TailorShop",
    "name": "Terzi Can Antalya",
    "image": "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=1920&auto=format&fit=crop",
    "telephone": "+905318986418",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antalya",
      "addressRegion": "Antalya",
      "addressCountry": "TR"
    },
    "url": "https://terzihizmeti.com.tr",
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Üst Bilgi Barı */}
      <div className="bg-slate-900 text-slate-300 text-sm py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="hidden sm:block">📍 Antalya & Çevresi Profesyonel Terzilik Hizmeti</div>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
          <span>📞 0531 898 64 18</span>
        </div>
      </div>

      {/* Header / Navigasyon */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <div className="text-3xl font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="text-amber-600">✂️</span> Terzi<span className="text-slate-900 font-light">Can</span>
          </div>
          <a 
            href="https://wa.me/905318986418" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-600 transition shadow-md flex items-center gap-2"
          >
            <span>💬</span> WhatsApp'tan Ulaşın
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
        {/* Kaliteli bir terzilik/kumaş arka planı */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=1920&auto=format&fit=crop')" }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-start text-left">
          <span className="text-amber-500 font-semibold tracking-wider uppercase mb-3 drop-shadow-md">
            Kalite, Güven ve Ustalık
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-3xl drop-shadow-lg">
            Antalya'nın Usta Terzisi: <br/> Giyimde Kusursuz Dokunuşlar
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl font-light drop-shadow-md">
            En sevdiğiniz kıyafetlerinizi profesyonel ellere emanet edin. Giyim tamiri, özel dikim ve tüm tadilat işlemleriniz için Terzi Can kalitesiyle hizmetinizdeyiz.
          </p>
          <a 
            href="https://wa.me/905318986418" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-600 transition shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-3"
          >
            Hemen Fiyat ve Bilgi Alın &rarr;
          </a>
        </div>
      </section>

      {/* Terzi Can Kimdir? (Güven İnşası) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-amber-100 rounded-3xl transform rotate-3 z-0"></div>
            {/* Terzi Can'ı temsil eden profesyonel bir görsel */}
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" 
              alt="Antalya Terzi Can Usta Çalışırken" 
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Ustalık ve Sanayi Tipi Kalite: <span className="text-amber-600">Terzi Can</span></h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Yılların getirdiği tecrübe ile Antalya'da giyim tamir ve tadilat sektöründe güvenin adresi olmaktan gurur duyuyoruz. İster narin bir ipek elbise, ister kalın bir kot veya deri ceket olsun; evimizde bulunan sanayi tipi yüksek teknoloji makinelerimizle kusursuz işçilik sunuyoruz.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Her dikişte kaliteyi, her tadilatta orijinalliği korumayı ilke edindik. Kıyafetleriniz bizimle sadece tamir edilmez, adeta yeniden hayat bulur.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
              <div>
                <div className="text-3xl font-bold text-slate-800 mb-1">100%</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Müşteri Memnuniyeti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-800 mb-1">Hızlı</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Zamanında Teslimat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Odaklı Hizmetler Bölümü */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Profesyonel Terzilik Hizmetlerimiz</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Kıyafet tamirinden özel dikime kadar geniş bir yelpazede, en ince detayına kadar özenle çalışıyoruz.</p>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hizmet 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-amber-500 transition-colors">
                ✂️
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Giyim Tamir ve Tadilat</h3>
              <p className="text-slate-600 leading-relaxed">
                Her türlü kıyafet onarımı, yırtık dikimi, sökük tamiri ve kumaş yenileme işlemlerini orijinal yapısını bozmadan gerçekleştiriyoruz.
              </p>
            </div>
            
            {/* Hizmet 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-amber-500 transition-colors">
                📏
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Daraltma ve Beden Ayarlama</h3>
              <p className="text-slate-600 leading-relaxed">
                Kilo değişimi sonrası bol gelen pantolon, etek, gömlek ve ceketlerinizi vücut ölçülerinize tam oturacak şekilde kusursuzca daraltıyoruz.
              </p>
            </div>
            
            {/* Hizmet 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-amber-500 transition-colors">
                🧵
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Fermuar ve Astar Yenileme</h3>
              <p className="text-slate-600 leading-relaxed">
                Bozulan kaban, mont, pantolon fermuarları ile yıpranmış ceket ve elbise astarlarını birinci sınıf malzemelerle değiştiriyoruz.
              </p>
            </div>

            {/* Hizmet 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-amber-500 transition-colors">
                👖
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Paça Boyu ve Kesim İşlemleri</h3>
              <p className="text-slate-600 leading-relaxed">
                Kot pantolonlarda orijinal paça kıvırma, kumaş pantolonlarda gizli dikiş paça ve etek boyu kısaltma işlemlerini titizlikle yapıyoruz.
              </p>
            </div>

            {/* Hizmet 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-amber-500 transition-colors">
                👗
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Abiye ve Özel Giyim Tadilatı</h3>
              <p className="text-slate-600 leading-relaxed">
                Hassas kumaşlara sahip abiye elbiseleriniz, takım elbiseleriniz ve gece kıyafetleriniz için profesyonel kalıp düzeltme hizmeti.
              </p>
            </div>

            {/* Hizmet 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-amber-500 transition-colors">
                ✨
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Özel Dikim ve Tasarım</h3>
              <p className="text-slate-600 leading-relaxed">
                Hayalinizdeki modeli, size en uygun kumaş ve kendi bedeninize özel kalıplarla hayata geçiriyor, eşsiz tasarımlar yaratıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO İçin Zengin Metin (Arama Motorları Bu Bölümü Çok Sever) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Antalya Kıyafet Tadilatı ve Terzilik Hakkında Bilmeniz Gerekenler</h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="mb-4">
              Giyim, kişisel tarzımızın en önemli yansımasıdır. Ancak zamanla yıpranan, ölçüleri uymayan veya ufak kazalar sonucu hasar gören kıyafetler için profesyonel bir <strong>terzilik hizmeti</strong> şarttır. <strong>Antalya terzi</strong> arayışınızda, Terzi Can olarak bölgenin en güvenilir giyim onarım merkezlerinden biriyiz. Özellikle <strong>Konyaaltı</strong> ve <strong>Belek</strong> gibi bölgelerdeki müşterilerimize hızlı ve kaliteli çözümler sunuyoruz.
            </p>
            <p className="mb-4">
              <strong>Kıyafet tamiri ve tadilatı</strong> sıradan bir dikiş işleminden öte, kumaşın dokusunu, esnekliğini ve kalıbını anlama sanatıdır. Ev tipi makinelerin yetersiz kaldığı kalın kot (denim) kumaşlar, deri ceketler veya çok hassas şifon elbiseler için atölyemizdeki <strong>sanayi tipi dikiş makinelerimiz</strong> ile hatasız işlemler gerçekleştiriyoruz. Orijinal paça yapımı, fermuar tamiri, ceket astarı değişimi ve elbise daraltma gibi işlemleriniz Terzi Can güvencesiyle ilk günkü görünümüne kavuşur.
            </p>
            <p>
              Gardırobunuzdaki giyilmeyen kıyafetleri atmak yerine, doğru bir <strong>beden ayarlama</strong> ve <strong>giyim revizyonu</strong> ile onları tekrar favori parçalarınız haline getirebilirsiniz. Sürdürülebilir modaya katkı sağlayan bu tamir ve onarım süreçleri için bize WhatsApp üzerinden 7/24 ulaşarak detaylı bilgi alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* CTA (Harekete Geçirici Mesaj) Banner */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Kıyafetleriniz İçin Tadilat Mı Gerekiyor?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Fotoğrafını çekin, WhatsApp'tan gönderin. Anında fiyat ve teslim süresi hakkında bilgi verelim.
          </p>
          <a 
            href="https://wa.me/905318986418" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-emerald-600 transition hover:-translate-y-1"
          >
            <span className="text-2xl">📱</span> +90 531 898 64 18 ile Mesajlaşın
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-amber-600">✂️</span> Terzi Can
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Antalya, Konyaaltı ve Belek bölgelerine hizmet veren, kıyafet tamir ve özel dikimde kalitenin adresi. Sanayi tipi işçilik, kusursuz sonuç.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hizmet Bölgeleri</h3>
            <ul className="space-y-2 text-sm">
              <li>• Antalya Merkez Terzi</li>
              <li>• Konyaaltı Terzi Hizmeti</li>
              <li>• Belek Terzi & Tadilat</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">İletişim Bilgileri</h3>
            <p className="mb-2">📍 Antalya, Türkiye</p>
            <p className="mb-4">📞 0531 898 64 18</p>
            <a 
              href="https://wa.me/905318986418" 
              className="text-emerald-400 hover:text-emerald-300 transition font-medium text-sm flex items-center gap-1"
            >
              WhatsApp Hattına Git &rarr;
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          © {new Date().getFullYear()} Terzihizmeti.com.tr - Terzi Can Antalya. Tüm hakları saklıdır.
        </div>
      </footer>
      
    </div>
  );
}
