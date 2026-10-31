// ============================================================
// lib/blog-yazilari.ts — Blog yazıları (tek kaynak).
// Yeni yazı eklemek için diziye bir nesne eklemek yeterli: /blog/[slug] sayfası, blog listesi ve sitemap otomatik güncellenir.
// Fiyatlar yalnızca sitede zaten yayınlanan başlangıç fiyatlarıdır (paça/bel ₺200, fermuar ₺300, elbise dikimi ₺800'den, kuru temizleme ₺80+).
// Teslim süreleri lib/delivery.ts ile aynıdır (acil 1–2 saat, normal ertesi gün, özel dikim modele/adede göre).
// Görseller yapay zekâ ile üretilmiş örnek görsellerdir (gerçek iş fotoğrafı değildir).
// ============================================================
export interface BlogBolum { h: string; p: string[]; liste?: string[] }
export interface BlogYazi {
  slug: string;
  baslik: string;
  ozet: string;
  tarih: string;           // YYYY-MM-DD
  gorsel: string;          // /gorseller/...
  gorselAlt: string;
  giris: string;
  bolumler: BlogBolum[];
  sss: { q: string; a: string }[];
  linkler: { href: string; metin: string }[];
  waMesaj: string;
}

export const BLOG_YAZILARI: BlogYazi[] = [
  {
    slug: 'pantolon-paca-kisaltma-nasil-yapilir',
    baslik: 'Pantolon Paçası Nasıl Kısaltılır? Ölçü, Yöntem ve Fiyat',
    ozet: 'Paça kısaltmada doğru boy nasıl belirlenir, hangi paça tipi nasıl dikilir, ne kadar sürer ve kaça yapılır?',
    tarih: '2026-10-31',
    gorsel: '/gorseller/paca-kisaltma.webp',
    gorselAlt: 'Terzi pantolon paçasına ölçü işaretliyor (örnek görsel)',
    giris: 'Pantolonun boyu uzun geldiğinde paça kısaltma en sık yapılan tadilatlardan biridir. İşin püf noktası, boyu ayakkabıyla birlikte ve ayakta ölçmektir. Bu yazıda doğru ölçünün nasıl alındığını, paça tiplerine göre yöntemleri ve nelere dikkat etmeniz gerektiğini anlatıyoruz.',
    bolumler: [
      {
        h: 'Doğru boy nasıl belirlenir?',
        p: [
          'Pantolonu ayakta, günlük giydiğiniz ayakkabıyla birlikte giyin. Terzi, paçanın ayakkabıya ne kadar bineceğini sizin tercihinize göre işaretler. Spor ayakkabıyla giyeceğiniz pantolonu spor ayakkabıyla, klasik ayakkabıyla giyeceğiniz pantolonu klasik ayakkabıyla denemek boy hatasını önler.',
        ],
        liste: [
          'Klasik pantolonda paça genelde ayakkabının topuk üstüne hafifçe değecek şekilde ayarlanır.',
          'Dar paçalı (slim) pantolonda paça ayak bileğine yakın biter, kırışık oluşmaması için daha kısa tercih edilir.',
          'Geniş paçada paça biraz daha uzun bırakılır, yürürken ayakkabıyı kapatır.',
        ],
      },
      {
        h: 'Paça tiplerine göre kısaltma yöntemleri',
        p: [
          'Klasik pantolonlarda paça içten çevrilip gizli dikişle (görünmeyen dikiş) tutturulur. Dışarıdan dikiş izi görünmez. Kumaş kalınsa veya eski paçanın dikişi belirgin bir iz bıraktıysa bu iz bazen tamamen kaybolmayabilir; terzi bunu ölçü sırasında size söyler.',
          'Kot ve gabardin gibi kalın kumaşlarda paça daha farklı bir yöntemle kısaltılır. Bu kumaşlarda paça ucundaki orijinal dikişin görünümünü korumak isteyip istemediğinizi baştan belirtmeniz önemlidir.',
        ],
      },
      {
        h: 'Ne kadar sürer, kaça yapılır?',
        p: [
          'Atölyemizde pantolon paça kısaltma ₺200\'den başlar; kumaşa ve paça tipine göre kesin fiyat ölçü sırasında netleşir. Acil tamir ve tadilat 1–2 saatte, normal tadilat ertesi gün teslim edilir.',
        ],
      },
      {
        h: 'Kısaltmadan önce kontrol listesi',
        p: ['Pantolonu atölyeye getirmeden önce şunlara bakmanız işi hızlandırır:'],
        liste: [
          'Pantolonu yıkayıp ütüledikten sonra getirin; kumaş çekme payı boya yansımasın.',
          'Giyeceğiniz ayakkabıyı yanınızda getirin.',
          'Cep ve astar içindeki eşyaları çıkarın.',
          'Aynı pantolonda başka bir tadilat (bel, fermuar) gerekiyorsa aynı randevuda söyleyin.',
        ],
      },
    ],
    sss: [
      { q: 'Paça kısaltılan pantolon tekrar uzatılabilir mi?', a: 'Paça kıvrımı kumaşta iz bıraktığı için tam eski haline döndürmek her zaman mümkün olmayabilir. Kısaltmadan önce boyu kesin belirlemek için pantolonu ayakkabıyla denemeniz önerilir.' },
      { q: 'Paça kısaltma için fotoğrafla fiyat alabilir miyim?', a: 'Evet. Pantolonun fotoğrafını WhatsApp\'tan gönderebilirsiniz; kesin fiyat ve boy için pantolonu denemek gerekir.' },
      { q: 'Kot pantolonun paçası da kısaltılıyor mu?', a: 'Evet. Kot paça kısaltma için ayrı bir sayfamız var; orijinal paça görünümünü korumak istiyorsanız baştan belirtin.' },
    ],
    linkler: [
      { href: '/konyaalti-paca-kisaltma', metin: 'Konyaaltı paça kısaltma sayfası' },
      { href: '/antalya-terzi-fiyatlari', metin: 'Antalya terzi fiyatları' },
    ],
    waMesaj: 'Merhaba, paça kısaltma için fiyat ve süre öğrenmek istiyorum.',
  },
  {
    slug: 'fermuar-degisimi-ne-zaman-gerekir',
    baslik: 'Fermuar Ne Zaman Tamir Edilir, Ne Zaman Değiştirilir?',
    ozet: 'Sıkışan, açılan veya dişi kopan fermuar için tamir mi değişim mi gerekir? Pantolon, mont ve çanta fermuarı rehberi.',
    tarih: '2026-10-31',
    gorsel: '/gorseller/fermuar-degisimi.webp',
    gorselAlt: 'Mont fermuarı, sökücü ve yeni fermuar masada (örnek görsel)',
    giris: 'Fermuar bozulduğunda ilk soru genelde "tamir mi, değişim mi?" olur. Her sorun için yeni fermuar gerekmez; bazen sadece sürgü (kayıcı) değişir ya da sıkışma giderilir. Bu yazıda hangi durumda ne yapıldığını özetliyoruz.',
    bolumler: [
      {
        h: 'Tamirle çözülebilen durumlar',
        p: ['Fermuar dişleri sağlamsa sorun çoğu zaman sürgüdedir.'],
        liste: [
          'Fermuar sıkışıyor ama dişler yerinde: dişlerin arasına kaçan kumaş veya iplik temizlenir.',
          'Fermuar kendiliğinden açılıyor: sürgü gevşemiştir, sürgü değiştirilir veya sıkılaştırılır.',
          'Sürgünün tutacağı koptu: yeni sürgü takılır, fermuar şeridi aynı kalır.',
        ],
      },
      {
        h: 'Değişimin gerektiği durumlar',
        p: ['Dişler kopmuş, eğrilmiş veya şerit yırtılmışsa fermuarın tamamı değişir.'],
        liste: [
          'Birkaç diş eksikse ve fermuar tek taraftan açılıyorsa tamir kalıcı olmaz.',
          'Fermuar şeridi (kumaş kısım) yıpranmış veya yırtılmışsa.',
          'Montlarda iki yönlü (açılan uçlu) fermuarın iki ucu da çalışmıyorsa.',
        ],
      },
      {
        h: 'Pantolon, mont ve çanta fermuarı farkı',
        p: [
          'Pantolon fermuarı kısa ve genellikle gizli dikişle sabitlenir; kumaşın görünümüne dikkat edilir. Montlarda fermuar uzundur ve iç astarla birlikte çalışılır. Çanta ve valiz fermuarında kalın şerit ve güçlü diş kullanıldığı için malzeme seçimi önemlidir. Fiyat işin türüne göre değişir; fermuar değişimi atölyemizde ₺300\'den başlar.',
        ],
      },
      {
        h: 'Teslim süresi',
        p: ['Acil fermuar işleri 1–2 saatte, normal işler ertesi gün teslim edilir. Tatilde bavul veya mont fermuarı bozulan misafirler için acil teslim seçeneği vardır.'],
      },
    ],
    sss: [
      { q: 'Fermuarın sadece sürgüsünü değiştirmek yeterli olur mu?', a: 'Dişler sağlam ve şerit yırtık değilse evet. Dişlerde kopma veya şeritte yırtık varsa fermuarın tamamı değişir. Kesin karar fotoğraf veya ürün üzerinde verilir.' },
      { q: 'Mont fermuarı ne kadar sürede değişir?', a: 'Acil işler 1–2 saatte, normal işler ertesi gün teslim edilir.' },
      { q: 'Fermuar fiyatı neye göre değişir?', a: 'Fermuarın boyu, türü (pantolon, mont, çanta) ve kumaşın zorluğuna göre değişir. Başlangıç fiyatı ₺300\'dür; ürünün fotoğrafını WhatsApp\'tan gönderip net fiyat alabilirsiniz.' },
    ],
    linkler: [
      { href: '/konyaalti-fermuar-tamiri', metin: 'Konyaaltı fermuar tamiri sayfası' },
      { href: '/antalya-terzi-fiyatlari', metin: 'Antalya terzi fiyatları' },
    ],
    waMesaj: 'Merhaba, fermuar tamiri/değişimi için fiyat öğrenmek istiyorum. Fotoğrafı gönderiyorum.',
  },
  {
    slug: 'tatilde-kiyafet-tadilati-antalya',
    baslik: 'Antalya\'da Tatilde Kıyafet Tadilatı: Acil Durumda Ne Yapmalı?',
    ozet: 'Tatilde fermuar patladı, elbise uzun geldi, düğmeler koptu: Antalya\'da turistler için acil tadilat ve otele gelen terzi rehberi.',
    tarih: '2026-10-31',
    gorsel: '/gorseller/eve-gelen-terzi.webp',
    gorselAlt: 'Terzi, elbise kılıfı ve ölçü şeridi ile otel ziyareti (örnek görsel)',
    giris: 'Tatil valizine ne koyarsanız koyun, bir kıyafet mutlaka sorun çıkarır: fermuar patlar, pantolon uzun gelir, bir düğme düşer. Antalya\'da tatil yapıyorsanız bunun için şehir merkezine kadar gitmenize gerek yok. Bu yazı, tatilde acil tadilat ihtiyacını nasıl çözebileceğinizi anlatıyor.',
    bolumler: [
      {
        h: 'Tatilde en sık karşılaşılan tadilat işleri',
        p: ['Misafirlerden en çok şu talepler geliyor:'],
        liste: [
          'Düğün, nişan veya özel akşam yemeği için elbise/takım elbise boy ve bel ayarı.',
          'Bavulda bozulan fermuarlar (pantolon, mont, çanta, valiz).',
          'Düşen düğme, sökülen dikiş, yırtık.',
          'Plajda veya havuzda zarar gören kıyafetler.',
        ],
      },
      {
        h: 'Otele gelen terzi nasıl çalışır?',
        p: [
          'Otelinizin bulunduğu bölgeye göre terzi otelinize gelir, ölçü alır, gerekirse kıyafeti atölyeye götürür ve tadilat bitince otelinize teslim eder. Atölyemiz Konyaaltı\'nda; Lara, Belek, Kemer ve Side bölgelerine hizmet veriyoruz. Hizmet verilen bölgelerde otel alım ve teslimatı ücretsizdir.',
        ],
      },
      {
        h: 'Ne kadar sürede teslim edilir?',
        p: ['Acil tamir ve tadilat 1–2 saatte, normal tamir ve tadilat ertesi gün teslim edilir. Özel dikimde süre modele ve adede göre belirlenir. Randevu için WhatsApp\'tan yazmanız yeterli; çalışma saatlerimiz her gün 08:00–23:00.'],
      },
      {
        h: 'Başvururken hızlandıran ipuçları',
        p: ['Mesajınıza şunları eklerseniz süre kısalır:'],
        liste: [
          'Otelinizin adı ve oda numarası veya bölgesi.',
          'Sorunlu kıyafetin fotoğrafı.',
          'Kıyafeti ne zaman giymeniz gerektiği (örn. "bu akşam 20:00").',
          'Bulunabileceğiniz saat aralığı.',
        ],
      },
    ],
    sss: [
      { q: 'Otele terzi geliyor mu?', a: 'Evet. Lara, Belek, Kemer, Side ve Konyaaltı bölgelerindeki otellere terzi hizmeti veriyoruz. Hizmet verilen bölgelerde alım ve teslim ücretsizdir.' },
      { q: 'Yabancı dil biliyor musunuz?', a: 'Türkçe, İngilizce, Rusça ve Almanca ile iletişim kuruyoruz.' },
      { q: 'Tatilde acil bir tadilat için ne yapmalıyım?', a: 'Kıyafetin fotoğrafını ve otel bilginizi WhatsApp\'tan gönderin. Acil işler 1–2 saatte teslim edilir.' },
    ],
    linkler: [
      { href: '/otele-gelen-terzi-antalya', metin: 'Otele gelen terzi hizmeti' },
      { href: '/en/tourist-clothing-alterations-antalya', metin: 'Tourist clothing alterations (English)' },
    ],
    waMesaj: 'Merhaba, otelime gelen terzi hizmeti hakkında bilgi almak istiyorum.',
  },
  {
    slug: 'terziye-gitmeden-once-hazirlik',
    baslik: 'Terziye Gitmeden Önce Neler Hazırlanmalı? 6 Maddelik Liste',
    ozet: 'Tadilat için terziye giderken yanınıza ne almalısınız, hangi bilgileri vermelisiniz? Hızlı ve doğru sonuç için kontrol listesi.',
    tarih: '2026-10-31',
    gorsel: '/gorseller/dikis-makinesi.webp',
    gorselAlt: 'Dikiş makinesinde çalışan eller (örnek görsel)',
    giris: 'Terzide geçen süre ve işin sonucu, büyük ölçüde nasıl hazırlandığınıza bağlıdır. Doğru kıyafet, doğru ayakkabı ve net bir beklenti, ikinci provayı gereksiz kılabilir. İşte kısa bir kontrol listesi.',
    bolumler: [
      {
        h: '1. Kıyafeti yıkanmış ve ütülenmiş getirin',
        p: ['Yıkanmamış kıyafet ölçü aldıktan sonra çekerse boy ve bel değişebilir. Özellikle pamuk, keten ve kot kumaşlarda bu fark belirgin olur.'],
      },
      {
        h: '2. Giyeceğiniz ayakkabıyı ve iç çamaşırını düşünün',
        p: ['Pantolon ve etek boyu, giyeceğiniz ayakkabıya göre belirlenir. Elbise ve gelinlikte provada giyeceğiniz iç giyim, düğün günü giyeceğinizle aynı olmalıdır.'],
      },
      {
        h: '3. Ne istediğinizi net söyleyin',
        p: ['"Biraz dar olsun" yerine "belden iki parmak daha dar" gibi tarif edin. Mümkünse beğendiğiniz bir kıyafeti örnek olarak getirin.'],
      },
      {
        h: '4. Fotoğrafla ön bilgi alın',
        p: ['Kıyafetin fotoğrafını ve yapılacak işi WhatsApp\'tan gönderirseniz ön fiyat ve süre bilgisi alabilirsiniz. Kesin fiyat, kıyafeti görünce ve denedikten sonra netleşir.'],
      },
      {
        h: '5. Acil mi, normal mi?',
        p: ['Acil işler 1–2 saatte, normal tadilat ertesi gün teslim edilir. Özel dikimde süre modele ve adede göre belirlenir. Teslim saatinizi baştan söyleyin.'],
      },
      {
        h: '6. Teslimde mutlaka deneyin',
        p: ['Kıyafeti teslim alırken giyip aynada kontrol edin. Küçük bir ayar gerekirse hemen yapılır.'],
      },
    ],
    sss: [
      { q: 'Randevu almak şart mı?', a: 'Basit tadilat için gerekmez; yine de WhatsApp\'tan önceden yazmanız bekleme süresini kısaltır. Gelinlik ve özel dikimde ön randevu önerilir.' },
      { q: 'Hangi saatlerde açıksınız?', a: 'Her gün 08:00–23:00 arası hizmet veriyoruz.' },
      { q: 'Fiyatı önceden öğrenebilir miyim?', a: 'Evet; başlangıç fiyatları fiyat sayfamızda yayında. Kıyafetin fotoğrafıyla net fiyat alabilirsiniz.' },
    ],
    linkler: [
      { href: '/antalya-terzi-fiyatlari', metin: 'Antalya terzi fiyatları' },
      { href: '/antalya-terzi', metin: 'Antalya terzi hizmetleri' },
    ],
    waMesaj: 'Merhaba, tadilat için fotoğraf gönderip fiyat almak istiyorum.',
  },
  {
    slug: 'keten-kiyafet-dikim-ve-bakim',
    baslik: 'Keten ve Pamuklu Kıyafet: Özel Dikim ve Bakım İpuçları',
    ozet: 'Yaz için keten gömlek, elbise ve pantolon yaptırırken kumaş seçimi, çekme payı ve ütüleme önerileri.',
    tarih: '2026-10-31',
    gorsel: '/gorseller/kalip-ve-makas.webp',
    gorselAlt: 'Keten kumaş üzerinde kalıp, makas ve metre (örnek görsel)',
    giris: 'Antalya gibi sıcak iklimlerde keten ve pamuk kumaş en rahat seçimlerdir. Ancak bu kumaşlar çeker, kırışır ve yanlış bakımda şeklini kaybedebilir. Özel dikim yaptırmadan önce bilmeniz gerekenler burada.',
    bolumler: [
      {
        h: 'Kumaşı dikimden önce ön yıkamadan geçirmek',
        p: ['Keten ve pamuk ilk yıkamada çekebilir. Dikimden önce kumaşın ön yıkamasının yapılması, bitmiş kıyafetin boyunun ve bedeninin sonradan değişmesini önler.'],
      },
      {
        h: 'Kalıp ve rahatlık payı',
        p: ['Keten kumaş esnemez; bu yüzden kalıpta kol altı, kalça ve diz çevresine hareket payı bırakılır. Çok dar kesilen keten pantolon oturunca zorlar.'],
        liste: [
          'Gömlekte omuz ve kol boyu ölçüsü, rahat hareket için kontrol edilir.',
          'Elbisede bel ve kalça çevresi, oturma payı ile birlikte planlanır.',
          'Pantolonda bel lastiği veya ayarlı bel, farklı kilolara uyum sağlar.',
        ],
      },
      {
        h: 'Bakım ve ütü',
        p: ['Keteni hafifçe nemliyken ütülemek kırışıklığı kolaylaştırır. Düşük sıcaklıkta yıkayıp gölgede kurutmak lifleri korur. Renkli ketenleri ilk yıkamada ayrı yıkamak boya akmasını önler.'],
      },
      {
        h: 'Sipariş süreci',
        p: ['Özel dikimde süre modele ve adede göre belirlenir. Elbise dikimi ₺800\'den başlar; kumaş türüne, modele ve işçiliğe göre net fiyat WhatsApp\'tan ya da ölçü sırasında verilir.'],
      },
    ],
    sss: [
      { q: 'Keten kıyafet çeker mi?', a: 'Evet, özellikle ilk yıkamada. Dikimden önce kumaşın ön yıkaması bu riski azaltır.' },
      { q: 'Kumaşı kendim getirebilir miyim?', a: 'Evet. Kumaşı getirmeden önce metrajı ve modeli WhatsApp\'tan paylaşırsanız yeterli olup olmadığını söyleriz.' },
      { q: 'Dikim süresi ne kadar?', a: 'Özel dikimde süre modele ve adede göre belirlenir; ölçü sırasında net süre söylenir.' },
    ],
    linkler: [
      { href: '/keten-pamuk-ozel-dikim', metin: 'Keten ve pamuk özel dikim' },
      { href: '/antalya-terzi-fiyatlari', metin: 'Antalya terzi fiyatları' },
    ],
    waMesaj: 'Merhaba, keten kıyafet özel dikimi için bilgi almak istiyorum.',
  },
  {
    slug: 'bel-daraltma-ne-kadar-mumkun',
    baslik: 'Bel Daraltma Ne Kadar Mümkün? Elbise ve Pantolon İçin Rehber',
    ozet: 'Elbisede ve pantolonda bel daraltma sınırı nedir? Dikiş payı, kumaş ve modelin etkisi, fiyat ve süre.',
    tarih: '2026-10-31',
    gorsel: '/gorseller/bel-daraltma-manken.webp',
    gorselAlt: 'Mankende bel bölgesine iğnelenmiş elbise (örnek görsel)',
    giris: 'Bol gelen bir elbise veya pantolon çoğu zaman bel daraltmayla kurtarılır. Ancak her kıyafette istediğiniz kadar daraltma yapılamaz; dikiş payı, kesim ve desen sınırı belirler. Bu yazıda neye dikkat edildiğini anlatıyoruz.',
    bolumler: [
      {
        h: 'Daraltmayı ne belirler?',
        p: ['Terzi önce yan dikişlerdeki ve bel kısmındaki dikiş payına bakar. Pay genişse daha fazla daraltma yapılabilir. Pay dar bırakılmış kıyafette sınır daha azdır.'],
        liste: [
          'Dikiş payı: kıyafetin içinde ne kadar fazla kumaş kaldığı.',
          'Model: kemerli, kloş, kalem ve düz kesimler farklı davranır.',
          'Desen ve çizgiler: kareli veya çizgili kumaşta daraltma deseni bozabilir.',
          'Fermuar, cep ve astar: dikişe yakınsa onlar da yeniden yerleştirilir.',
        ],
      },
      {
        h: 'Elbise ve pantolonda fark',
        p: ['Elbisede bel daraltma çoğunlukla yan dikişlerden yapılır; kalçanın oranı da dikkate alınır. Pantolonda ise arka orta dikiş ve kemer kısmı kullanılır. Her iki durumda da denemeden önce kıyafetin kalıbını bozmayacak sınır belirlenir.'],
      },
      {
        h: 'Prova şart mı?',
        p: ['Kıyafeti üzerinizde işaretlemek en doğru sonucu verir. Fotoğrafla ön fikir alınabilir ama kesin ölçü için deneme gerekir. Acil tadilat 1–2 saatte, normal tadilat ertesi gün teslim edilir.'],
      },
      {
        h: 'Fiyat',
        p: ['Bel daraltma ₺200\'den başlar; elbise ve abiyede işin kapsamına göre fiyat değişir. Gelinlik ve abiye tadilatında fiyatlar ₺800\'den başlar.'],
      },
    ],
    sss: [
      { q: 'Bel daraltma sonrası kıyafet eski haline döner mi?', a: 'Taşıma payı kesilmediyse çoğu zaman geri genişletilebilir; kesim yapıldıysa mümkün olmayabilir. Terzi bunu işlemden önce söyler.' },
      { q: 'Bir bedenden fazla daraltma yapılır mı?', a: 'Dikiş payı ve kıyafetin kalıbı izin veriyorsa yapılabilir. Kesin sınırı kıyafeti inceleyerek belirleriz.' },
      { q: 'Fotoğraf yeterli mi?', a: 'Ön fiyat ve fikir için yeterli; kesin sonuç için kıyafet üzerinizde denenir.' },
    ],
    linkler: [
      { href: '/antalya-gelinlik-tadilati', metin: 'Antalya gelinlik ve abiye tadilatı' },
      { href: '/antalya-terzi-fiyatlari', metin: 'Antalya terzi fiyatları' },
    ],
    waMesaj: 'Merhaba, bel daraltma için fiyat ve süre öğrenmek istiyorum.',
  },
  {
    slug: 'otel-restoran-uniforma-yaptirirken',
    baslik: 'Otel ve Restoran Üniforması Yaptırırken Dikkat Edilecekler',
    ozet: 'Personel üniforması için kumaş, beden, nakış ve teslim planı. Otel, restoran ve spa işletmeleri için kontrol listesi.',
    tarih: '2026-10-31',
    gorsel: '/gorseller/uniforma.webp',
    gorselAlt: 'Askıda sıralı otel ve restoran üniformaları (örnek görsel)',
    giris: 'Üniforma, işletmenin ilk görünen yüzüdür. Sezon öncesi toplu sipariş verirken doğru kumaşı ve beden planını seçmek, hem maliyeti hem de personelin konforunu belirler. İşte işletmeler için kısa bir rehber.',
    bolumler: [
      {
        h: 'Kumaş seçimi',
        p: ['Antalya\'nın sıcak ve nemli yazında nefes alan kumaşlar tercih edilir. Mutfak personeli için sık yıkamaya dayanıklı pamuk karışımları, resepsiyon ve salon için ütü tutan kumaşlar öne çıkar.'],
        liste: [
          'Mutfak: yıkamaya dayanıklı, kolay kurunan kumaş.',
          'Servis: leke tutmayan, ütü tutan kumaş.',
          'Spa ve animasyon: esnek, hafif kumaş.',
        ],
      },
      {
        h: 'Beden planı',
        p: ['Toplu siparişten önce her departman için beden listesi çıkarın; birkaç bedeni örnek olarak denetmek üretim hatasını azaltır. Sezon içinde gelecek personel için yedek beden stoku bırakmak pratiktir.'],
      },
      {
        h: 'Nakış ve logo',
        p: ['Logo nakışı sipariş öncesi örnek üzerinde kontrol edilmelidir. Renk ve konum onaylandıktan sonra seri üretime geçilir.'],
      },
      {
        h: 'Üretim ve teslim planı',
        p: ['Üniforma gibi seri işlerde süre modele ve adede göre belirlenir. Sezon açılışından önce ölçü, numune ve onay aşamaları için yeterli süre bırakmak gerekir. Teklif için model, adet ve logo bilgisini WhatsApp\'tan gönderebilirsiniz.'],
      },
    ],
    sss: [
      { q: 'Minimum sipariş adedi var mı?', a: 'Adet ve model projeye göre değerlendirilir; teklif almak için model ve adet bilgisini gönderin.' },
      { q: 'Numune üretiliyor mu?', a: 'Seri üretimden önce numune üzerinde ölçü ve görünüm onaylanır.' },
      { q: 'Nakış yapılıyor mu?', a: 'Evet, logo ve isim nakışı hizmeti vardır.' },
    ],
    linkler: [
      { href: '/antalya-uniforma-imalati', metin: 'Antalya üniforma imalatı' },
      { href: '/anavera-tekstil', metin: 'Anavera Tekstil' },
    ],
    waMesaj: 'Merhaba, işletmemiz için üniforma teklifi almak istiyorum.',
  },
];

export const blogYazisi = (slug: string) => BLOG_YAZILARI.find((y) => y.slug === slug);
