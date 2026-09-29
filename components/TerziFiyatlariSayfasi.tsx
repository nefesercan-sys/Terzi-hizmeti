// components/TerziFiyatlariSayfasi.tsx
//
// Fiyat listesi + doğal dil soru-cevap sayfası — 4 dilde (TR/EN/DE/RU).
// Görünür SSS metni ile FAQPage şeması AYNI diziden (T.faqs) üretilir.
// Fiyatlar tek yerde (PRICE_ROWS) tutulur; dil dosyaları sadece isimleri çevirir,
// böylece 4 dilde fiyat tutarsızlığı olması mümkün olmaz.

export type FLang = 'tr' | 'en' | 'de' | 'ru';

export const SITE = 'https://terzihizmeti.com.tr';
export const PHONE = '+90 531 898 64 18';
export const PHONE_TEL = '+905318986418';
export const MAPS = 'https://maps.app.goo.gl/QEgSkRoA8Nz8H62g8';
const WA = (m: string) => `https://wa.me/905318986418?text=${encodeURIComponent(m)}`;

export const PRICE_ROWS: { icon: string; rows: string[] }[] = [
  {
    "icon": "🔧",
    "rows": [
      "₺200+",
      "₺300+",
      "₺150+",
      "₺60+",
      "₺300+"
    ]
  },
  {
    "icon": "📏",
    "rows": [
      "₺150+",
      "₺150+",
      "₺200+",
      "₺200+",
      "₺400+"
    ]
  },
  {
    "icon": "✂️",
    "rows": [
      "₺350+",
      "₺400+",
      "₺600+",
      "₺900+",
      "₺250+"
    ]
  },
  {
    "icon": "🧺",
    "rows": [
      "₺80+",
      "₺300+",
      "₺500+",
      "₺80+/kg"
    ]
  }
];

export interface QuickItem { q: string; a: string; price: string; href: string; cta: string }
export interface FiyatText {
  path: string; htmlLang: string; locale: string;
  metaTitle: string; metaDesc: string; ogTitle: string; ogDesc: string; keywords: string[];
  webName: string; serviceType: string; catalogName: string;
  heroTag: string; h1a: string; h1b: string; heroDesc: string; btnPhoto: string;
  quickEyebrow: string; quickH: string; quickSub: string;
  priceEyebrow: string; priceH: string; priceSub: string; priceBtn: string;
  faqEyebrow: string; faqH: string; ctaH: string; ctaSub: string; ctaWa: string;
  navBack: string; footLabel: string; footHome: string; footHub: string; footHotel: string; footAnavera: string; langLabel: string; skipCall: string;
  waMsg: string; waNav: string;
  links: { hub: string; hotel: string; linen: string; anavera: string; hem: string; zip: string; wedding: string };
  priceTitles: string[]; priceNames: string[][];
  quick: QuickItem[]; faqs: [string, string][];
}

export const FT: Record<FLang, FiyatText> = {
  "tr": {
    "path": "/antalya-terzi-fiyatlari",
    "htmlLang": "tr",
    "locale": "tr_TR",
    "metaTitle": "Antalya Terzi Fiyat Listesi 2026 | Paça ₺150 · Fermuar ₺200",
    "metaDesc": "Antalya terzi fiyatları 2026: paça kısaltma ₺150, bel daraltma ₺150, fermuar değişimi ₺200, elbise dikimi ₺600'den. Fotoğrafı WhatsApp'tan gönderin, net fiyatı öğrenin. Adrese ve otele gelen terzi. Her gün 09:00–19:00.",
    "ogTitle": "Antalya Terzi Fiyat Listesi 2026 — Fotoğraf Gönderin, Fiyatı Öğrenin",
    "ogDesc": "Paça ₺150, bel daraltma ₺150, fermuar ₺200, elbise dikimi ₺600'den. Adrese ve otele gelen terzi.",
    "keywords": [
      "Antalya terzi",
      "terzi fiyatları",
      "terzi fiyat listesi 2026",
      "Antalya terzi fiyatları",
      "elbise diktirmek",
      "elbise tadilatı",
      "elbisem yırtıldı",
      "bel daraltma",
      "paça kısaltma fiyatı",
      "fermuar değişimi fiyatı",
      "adrese gelen terzi",
      "otelde terzi hizmeti",
      "özel dikim terzi",
      "bay bayan terzi",
      "hafta sonu açık terzi",
      "pazar günü açık terzi",
      "yakınımda terzi",
      "en yakın terzi",
      "dikim imalat fiyatları",
      "model tasarım dikim atölyesi",
      "kaliteli dikiş imalat",
      "pamuklu doğal kumaş dikimi",
      "Konyaaltı terzi"
    ],
    "webName": "Antalya Terzi Fiyat Listesi 2026",
    "serviceType": "Terzi, tamir, tadilat, özel dikim, ütü ve kuru temizleme",
    "catalogName": "Terzi fiyat listesi 2026 (başlangıç fiyatları)",
    "heroTag": "₺ Şeffaf fiyat · Her gün 09:00–19:00 · Konyaaltı, Antalya",
    "h1a": "Antalya Terzi Fiyatları 2026",
    "h1b": "Fotoğrafı Gönderin, Fiyatı Öğrenin",
    "heroDesc": "Paça kısaltma ₺150, bel daraltma ₺150, fermuar değişimi ₺200, elbise dikimi ₺600'den. Elbise tadilatı, yırtık onarımı, özel dikim, adrese ve otele gelen terzi. İşin fotoğrafını WhatsApp'tan gönderin, net fiyat ve süreyi öğrenin.",
    "btnPhoto": "💬 Fotoğraf Gönderin →",
    "quickEyebrow": "Sorununuz ne?",
    "quickH": "İhtiyacınıza Göre Hızlı Cevap",
    "quickSub": "Aradığınız işi seçin; fiyatı ve ilgili sayfayı görün.",
    "priceEyebrow": "₺ Fiyat Listesi 2026",
    "priceH": "Terzi Fiyat Listesi: Tamir, Tadilat, Dikim, Ütü",
    "priceSub": "Başlangıç fiyatlarıdır; kumaş ve işçiliğe göre netleşir. Fotoğraf gönderin, ücretsiz teklif alın.",
    "priceBtn": "📲 Fiyatı Sor",
    "faqEyebrow": "Sık Sorulan Sorular",
    "faqH": "Antalya Terzi: Sorular ve Cevaplar",
    "ctaH": "İşinizin Fotoğrafını Gönderin",
    "ctaSub": "Net fiyat ve süreyi WhatsApp'tan öğrenin. Teklif ücretsizdir.",
    "ctaWa": "💬 WhatsApp'tan Yazın",
    "navBack": "← Ana Sayfa",
    "footLabel": "Antalya Terzi Fiyatları",
    "footHome": "Ana Sayfa",
    "footHub": "Antalya Terzi",
    "footHotel": "Otele Gelen Terzi",
    "footAnavera": "Anavera Tekstil (B2B)",
    "langLabel": "Türkçe",
    "skipCall": "Ara",
    "waMsg": "Merhaba, yaptırmak istediğim işin fotoğrafını gönderiyorum, fiyat ve süre öğrenmek istiyorum.",
    "waNav": "WHATSAPP →",
    "links": {
      "hub": "/antalya-terzi",
      "hotel": "/otele-gelen-terzi-antalya",
      "linen": "/keten-pamuk-ozel-dikim",
      "anavera": "/anavera-tekstil",
      "hem": "/konyaalti-paca-kisaltma",
      "zip": "/konyaalti-fermuar-tamiri",
      "wedding": "/antalya-gelinlik-tadilati"
    },
    "priceTitles": [
      "Tamir",
      "Tadilat",
      "Özel dikim",
      "Ütü & kuru temizleme"
    ],
    "priceNames": [
      [
        "Pantolon fermuarı değişimi",
        "Mont fermuarı değişimi",
        "Yırtık / dikiş sökülmesi onarımı",
        "Düğme, çıtçıt, kanca",
        "Astar değişimi"
      ],
      [
        "Paça kısaltma",
        "Bel daraltma",
        "Kol kısaltma",
        "Elbise / ceket tadilatı",
        "Gelinlik ve abiye tadilatı"
      ],
      [
        "Erkek gömlek",
        "Erkek pantolon",
        "Kadın elbise",
        "Abiye",
        "Çocuk giyim"
      ],
      [
        "Ütü (adet)",
        "Kuru temizleme (elbise)",
        "Kuru temizleme (mont)",
        "Yıkama + ütü (kg)"
      ]
    ],
    "quick": [
      {
        "q": "Elbisem yırtıldı",
        "a": "Yırtık, dikiş sökülmesi ve kumaş onarımı yapılır.",
        "price": "₺150'den",
        "href": "#fiyatlar",
        "cta": "Fiyat listesi"
      },
      {
        "q": "Elbisenin belini daraltmak istiyorum",
        "a": "Bel ve beden daraltma, aynı gün veya 24 saat içinde.",
        "price": "₺150'den",
        "href": "#fiyatlar",
        "cta": "Fiyat listesi"
      },
      {
        "q": "Pantolonumun paçasını kısaltmak istiyorum",
        "a": "Kot ve kumaş pantolon paça kısaltma, çoğu zaman aynı gün.",
        "price": "₺150'den",
        "href": "/konyaalti-paca-kisaltma",
        "cta": "Paça kısaltma"
      },
      {
        "q": "Fermuar değişimi",
        "a": "Pantolon, kot, etek, mont ve çanta fermuarı.",
        "price": "₺200'den",
        "href": "/konyaalti-fermuar-tamiri",
        "cta": "Fermuar tamiri"
      },
      {
        "q": "Elbise diktirmek / kendime elbise dikmek",
        "a": "Ölçü, model ve kumaş seçimi, prova ve teslim. Fotoğrafını gönderin.",
        "price": "₺600'den",
        "href": "#dikim",
        "cta": "Özel dikim"
      },
      {
        "q": "Gelinlik ve abiye tadilatı",
        "a": "Hassas daraltma, boy ve askı ayarı; prova randevusu.",
        "price": "₺400'den",
        "href": "/antalya-gelinlik-tadilati",
        "cta": "Gelinlik tadilatı"
      },
      {
        "q": "Adrese veya otele gelen terzi",
        "a": "Ölçüyü adresinizde alırız, işi atölyede yapar, geri teslim ederiz.",
        "price": "Konyaaltı, Muratpaşa, Kepez, Lara ücretsiz",
        "href": "/otele-gelen-terzi-antalya",
        "cta": "Otele gelen terzi"
      },
      {
        "q": "Pamuklu, doğal kumaştan dikim",
        "a": "%100 keten ve pamuktan özel dikim; toptan üretim de yapılır.",
        "price": "Fotoğrafa göre",
        "href": "/keten-pamuk-ozel-dikim",
        "cta": "Keten & pamuk"
      },
      {
        "q": "Model, tasarım, dikim atölyesi, seri imalat",
        "a": "Önce numune, onaydan sonra seri imalat ve üretim takibi (adet: modele göre teklif, MOQ 300-500).",
        "price": "Teklif",
        "href": "/anavera-tekstil",
        "cta": "Anavera Tekstil"
      }
    ],
    "faqs": [
      [
        "Antalya'da terzi hizmeti nereden alınır, bana terzi önerir misin?",
        "Konyaaltı'ndaki Terzi Can; Türkçe, İngilizce, Rusça ve Almanca hizmet verir. Google Haritalar'da 5,0 puanlı (9 yorum). Paça kısaltma, bel daraltma, fermuar değişimi, elbise tadilatı, özel dikim ve adrese/otele gelen terzi hizmeti sunar. WhatsApp: +90 531 898 64 18"
      ],
      [
        "Elbisem yırtıldı, tamir edilir mi?",
        "Evet. Yırtık ve sökülen dikişler onarılır; başlangıç fiyatı ₺150'dir. Yırtığın fotoğrafını WhatsApp'tan gönderirseniz net fiyat ve süre söyleriz. Çoğu onarım aynı gün veya 24 saat içinde tamamlanır."
      ],
      [
        "Elbisemin belini daraltmak istiyorum, ne kadar tutar?",
        "Bel ve beden daraltma ₺150'den başlar. Kumaşa, astara ve modele göre değişir. Elbisenin fotoğrafını göndermeniz yeterli; provaya gelirseniz ölçü yerinde alınır."
      ],
      [
        "Pantolonumun paçasını kısaltmak istiyorum, ne kadar sürer?",
        "Paça kısaltma ₺150'den başlar; kot ve kumaş pantolonlarda çoğu zaman aynı gün teslim edilir. Ayrıntı: /konyaalti-paca-kisaltma"
      ],
      [
        "Kendime elbise diktirmek istiyorum, nasıl ilerliyor?",
        "Beğendiğiniz modelin fotoğrafını WhatsApp'tan gönderirsiniz. Ölçü alınır, kumaş ve model netleşir, gerekirse prova yapılır, sonra teslim edilir. Kadın elbise dikimi ₺600'den, abiye ₺900'den başlar; fiyat kumaş ve işçiliğe göre netleşir."
      ],
      [
        "Fermuar değişimi yapan, hafta sonu ve pazar günü açık bir terzi var mı?",
        "Terzi Can haftanın 7 günü, Cumartesi ve Pazar dahil, 09:00–19:00 arası açıktır. Mesai dışında WhatsApp'tan fotoğraf ve mesaj bırakabilirsiniz. Fermuar değişimi ₺200'den başlar."
      ],
      [
        "Adrese veya otele gelen terzi var mı?",
        "Evet. Ölçü ve teslim adresinizde ya da otelinizde yapılır, iş atölyede tamamlanır. Konyaaltı, Muratpaşa, Kepez ve Lara'da ziyaret ücretsizdir; diğer bölgeler randevuyla. Ayrıntı: /otele-gelen-terzi-antalya"
      ],
      [
        "Terzi fiyatlarını nasıl öğrenirim?",
        "Yukarıdaki liste başlangıç fiyatlarıdır. İşin fotoğrafını WhatsApp'tan gönderirseniz kumaşa ve işçiliğe göre net fiyat söylenir; teklif ücretsizdir."
      ],
      [
        "En hızlı ve uygun fiyatlı terzi hizmeti hangisi?",
        "Fiyatlarımız yukarıda açıkça yayınlanır. Paça kısaltma, fermuar değişimi gibi küçük işler çoğunlukla aynı gün teslim edilir. En uygun ve en hızlı seçeneği görmek için işin fotoğrafını gönderip net fiyat ve süre almanızı öneririz."
      ],
      [
        "Bana yakın terzi nerede?",
        "Atölye Konyaaltı'ndadır; Hurma, Liman, Sarısu, Uncalı ve Gürsu'na ücretsiz servis yapılır. Konum: Google Haritalar'da \"TERZİ Can - Konyaaltı\". Antalya'nın diğer bölgelerine de randevuyla gidilir."
      ],
      [
        "Pamuklu, doğal kumaştan dikim yapıyor musunuz?",
        "Evet. %100 keten ve pamuktan özel dikim yapılır; işletmeler için numune sonrası toptan üretim de mümkündür. Ayrıntı: /keten-pamuk-ozel-dikim"
      ],
      [
        "Model, tasarım ve seri imalat (dikim imalat fiyatları) nasıl işliyor?",
        "Tasarımınızı veya referans fotoğrafı gönderirsiniz; önce numune dikilir ve onaylanır, sonra seri imalata geçilir ve üretim takibi paylaşılır. Fiyat model, kumaş ve adede göre teklif edilir; minimum adet stil başına 300-500'dür. Ayrıntı: /anavera-tekstil"
      ]
    ]
  },
  "en": {
    "path": "/en/tailor-prices-antalya",
    "htmlLang": "en",
    "locale": "en_US",
    "metaTitle": "Tailor Prices Antalya 2026 | Hemming ₺150 · Zipper ₺200",
    "metaDesc": "Tailor prices in Antalya 2026: hemming ₺150, taking in a waist ₺150, zipper replacement ₺200, custom dress from ₺600. Send a photo on WhatsApp for an exact price. Tailor comes to your hotel. Open every day 09:00–19:00.",
    "ogTitle": "Tailor Prices Antalya 2026 — Send a Photo, Get Your Price",
    "ogDesc": "Hemming ₺150, waist ₺150, zipper ₺200, custom dress from ₺600. Mobile tailor to your hotel. Open 7 days.",
    "keywords": [
      "tailor Antalya",
      "tailor prices Antalya",
      "tailor near me Antalya",
      "clothes repair Antalya",
      "dress alteration Antalya",
      "my dress is torn Antalya",
      "take in waist dress Antalya",
      "hem trousers Antalya",
      "zipper replacement Antalya",
      "tailor open Sunday Antalya",
      "tailor open weekend Antalya",
      "tailor comes to hotel Antalya",
      "mobile tailor Antalya",
      "custom dress Antalya",
      "have a dress made Antalya",
      "English speaking tailor Antalya",
      "best tailor Antalya",
      "wedding dress alteration Antalya",
      "clothing manufacturer Turkey sample bulk production"
    ],
    "webName": "Tailor Prices Antalya 2026",
    "serviceType": "Tailoring, repair, alterations, custom sewing, ironing and dry cleaning",
    "catalogName": "Tailor price list 2026 (starting prices)",
    "heroTag": "₺ Transparent prices · Open every day 09:00–19:00 · Konyaaltı, Antalya",
    "h1a": "Tailor Prices in Antalya 2026",
    "h1b": "Send a Photo, Get Your Price",
    "heroDesc": "Hemming ₺150, taking in a waist ₺150, zipper replacement ₺200, custom dress from ₺600. Clothing repair, alterations, custom sewing, and a tailor who comes to your hotel or address. Send a photo of the job on WhatsApp and get an exact price and time.",
    "btnPhoto": "💬 Send a Photo →",
    "quickEyebrow": "What do you need?",
    "quickH": "Quick Answers for Your Situation",
    "quickSub": "Pick your job to see the price and the right page.",
    "priceEyebrow": "₺ Price List 2026",
    "priceH": "Tailor Price List: Repair, Alterations, Custom Sewing, Ironing",
    "priceSub": "Starting prices; the final price depends on fabric and workmanship. Send a photo for a free quote.",
    "priceBtn": "📲 Ask the Price",
    "faqEyebrow": "FAQ",
    "faqH": "Tailor in Antalya: Questions and Answers",
    "ctaH": "Send a Photo of Your Job",
    "ctaSub": "Get the exact price and time on WhatsApp. Quotes are free.",
    "ctaWa": "💬 Write on WhatsApp",
    "navBack": "← Home",
    "footLabel": "Tailor Prices Antalya",
    "footHome": "Home (TR)",
    "footHub": "Tailor Service Antalya",
    "footHotel": "Hotel Tailor",
    "footAnavera": "Anavera Tekstil (B2B)",
    "langLabel": "English",
    "skipCall": "Call",
    "waMsg": "Hello, I am sending a photo of the job I need done. Could you tell me the price and time?",
    "waNav": "WHATSAPP →",
    "links": {
      "hub": "/en/tailor-service-antalya",
      "hotel": "/en/hotel-tailor-antalya",
      "linen": "/en/linen-cotton-tailoring",
      "anavera": "/en/anavera-tekstil",
      "hem": "/en/tailor-service-antalya",
      "zip": "/en/tailor-service-antalya",
      "wedding": "/en/tailor-service-antalya"
    },
    "priceTitles": [
      "Repair",
      "Alterations",
      "Custom sewing",
      "Ironing & dry cleaning"
    ],
    "priceNames": [
      [
        "Trouser zipper replacement",
        "Coat zipper replacement",
        "Tear or open-seam repair",
        "Buttons, snaps, hooks",
        "Lining replacement"
      ],
      [
        "Hem shortening",
        "Waist taking-in",
        "Sleeve shortening",
        "Dress / jacket alteration",
        "Wedding & evening dress alteration"
      ],
      [
        "Men's shirt",
        "Men's trousers",
        "Women's dress",
        "Evening gown",
        "Children's clothing"
      ],
      [
        "Ironing (per item)",
        "Dry cleaning (dress)",
        "Dry cleaning (coat)",
        "Wash + iron (per kg)"
      ]
    ],
    "quick": [
      {
        "q": "My dress is torn",
        "a": "Tears, opened seams and fabric repair.",
        "price": "from ₺150",
        "href": "#fiyatlar",
        "cta": "Price list"
      },
      {
        "q": "I want to take in the waist of my dress",
        "a": "Waist and size reduction, same day or within 24 hours.",
        "price": "from ₺150",
        "href": "#fiyatlar",
        "cta": "Price list"
      },
      {
        "q": "I want to shorten my trousers",
        "a": "Jeans and dress trousers, usually done the same day.",
        "price": "from ₺150",
        "href": "/en/tailor-service-antalya",
        "cta": "Tailor service"
      },
      {
        "q": "Zipper replacement",
        "a": "Trousers, jeans, skirts, coats and bags.",
        "price": "from ₺200",
        "href": "/en/tailor-service-antalya",
        "cta": "Tailor service"
      },
      {
        "q": "I want a dress made for me",
        "a": "Measurements, model and fabric choice, fitting and delivery. Send a photo of the design.",
        "price": "from ₺600",
        "href": "#dikim",
        "cta": "Custom sewing"
      },
      {
        "q": "Wedding and evening dress alterations",
        "a": "Careful taking-in, length and strap adjustment; fitting appointment.",
        "price": "from ₺400",
        "href": "/en/tailor-service-antalya",
        "cta": "Tailor service"
      },
      {
        "q": "A tailor who comes to my hotel or address",
        "a": "We take measurements at your hotel or address, do the work in our workshop and deliver it back.",
        "price": "Free in Konyaaltı, Muratpaşa, Kepez, Lara",
        "href": "/en/hotel-tailor-antalya",
        "cta": "Hotel tailor"
      },
      {
        "q": "Custom clothing in natural cotton or linen",
        "a": "Custom sewing in 100% linen and cotton; wholesale production also available.",
        "price": "Based on your photo",
        "href": "/en/linen-cotton-tailoring",
        "cta": "Linen & cotton"
      },
      {
        "q": "Model design, sewing workshop, serial production",
        "a": "Sample first, then serial production with progress tracking (MOQ 300-500 per style).",
        "price": "Quote",
        "href": "/en/anavera-tekstil",
        "cta": "Anavera Tekstil"
      }
    ],
    "faqs": [
      [
        "Is there an English-speaking tailor in Antalya? Can you recommend one?",
        "Terzi Can in Konyaaltı, Antalya works in English, Russian, German and Turkish. It is rated 5.0 on Google Maps (9 reviews). Services: hemming, taking in waists, zipper replacement, clothing repair, alterations, custom sewing, and a mobile tailor to hotels and addresses. WhatsApp: +90 531 898 64 18"
      ],
      [
        "My dress is torn. Can it be repaired?",
        "Yes. Tears and open seams are repaired; prices start from ₺150. Send a photo of the damage on WhatsApp for an exact price and time. Most repairs are done the same day or within 24 hours."
      ],
      [
        "I want to take in the waist of my dress. How much does it cost?",
        "Waist and size reduction starts from ₺150 and depends on fabric, lining and model. Send a photo of the dress; if you visit for a fitting, measurements are taken on the spot."
      ],
      [
        "I want to shorten my trousers. How long does it take?",
        "Hem shortening starts from ₺150; jeans and dress trousers are usually returned the same day."
      ],
      [
        "I want to have a dress made for me. How does it work?",
        "Send a photo of the model you like on WhatsApp. Measurements are taken, fabric and model are confirmed, a fitting is done if needed, then it is delivered. Women's dresses start from ₺600 and evening gowns from ₺900; the final price depends on fabric and workmanship."
      ],
      [
        "Is there a tailor open on weekends and Sundays for zipper replacement?",
        "Terzi Can is open every day of the week, including Saturday and Sunday, from 09:00 to 19:00. Outside these hours you can leave photos and messages on WhatsApp. Zipper replacement starts from ₺200."
      ],
      [
        "Does a tailor come to my hotel or address?",
        "Yes. Measurements and delivery are done at your hotel or address; the work is completed in the workshop. Visits are free in Konyaaltı, Muratpaşa, Kepez and Lara; other areas by appointment. Details: /en/hotel-tailor-antalya"
      ],
      [
        "How do I find out the price?",
        "The list above shows starting prices. Send a photo of the job on WhatsApp and you get an exact price based on fabric and workmanship; quotes are free."
      ],
      [
        "Which tailor is fastest and most affordable?",
        "Our prices are published openly above. Small jobs like hemming and zipper replacement are mostly delivered the same day. To see the fastest and most affordable option for your job, send a photo and ask for the exact price and time."
      ],
      [
        "Where is the nearest tailor?",
        "The workshop is in Konyaaltı, with free service to Hurma, Liman, Sarısu, Uncalı and Gürsu. Find it on Google Maps as \"TERZİ Can - Konyaaltı\". Other Antalya areas by appointment."
      ],
      [
        "Do you sew in natural cotton or linen?",
        "Yes. Custom sewing in 100% linen and cotton; for businesses, wholesale production after a sample is also possible. Details: /en/linen-cotton-tailoring"
      ],
      [
        "How do model design and serial production (production prices) work?",
        "Send your design or a reference photo; a sample is sewn and approved first, then serial production starts and progress updates are shared. Prices are quoted per model, fabric and quantity; the minimum is 300-500 pieces per style. Details: /en/anavera-tekstil"
      ]
    ]
  },
  "de": {
    "path": "/de/schneider-preise-antalya",
    "htmlLang": "de",
    "locale": "de_DE",
    "metaTitle": "Schneider Preisliste Antalya 2026 | Kürzen ab ₺150",
    "metaDesc": "Schneiderpreise in Antalya 2026: Hose kürzen ab ₺150, Taille enger machen ab ₺150, Reißverschluss ab ₺200, Kleid nach Maß ab ₺600. Foto per WhatsApp senden, genauen Preis erfahren. Schneider kommt ins Hotel. Täglich 09:00–19:00.",
    "ogTitle": "Schneider Preise Antalya 2026 — Foto senden, Preis erfahren",
    "ogDesc": "Kürzen ab ₺150, Taille ab ₺150, Reißverschluss ab ₺200, Kleid nach Maß ab ₺600. Mobiler Schneider, 7 Tage geöffnet.",
    "keywords": [
      "Schneider Antalya",
      "Schneider Preise Antalya",
      "Schneider in der Nähe Antalya",
      "Kleidung reparieren Antalya",
      "Kleid ändern Antalya",
      "Kleid ist gerissen Antalya",
      "Taille enger machen Antalya",
      "Hose kürzen Antalya",
      "Reißverschluss wechseln Antalya",
      "Schneider Sonntag geöffnet Antalya",
      "Schneider Wochenende Antalya",
      "Schneider kommt ins Hotel Antalya",
      "mobiler Schneider Antalya",
      "Kleid schneidern lassen Antalya",
      "deutschsprachiger Schneider Antalya",
      "Brautkleid ändern Antalya",
      "Bekleidungshersteller Türkei Muster Serienproduktion"
    ],
    "webName": "Schneider Preise Antalya 2026",
    "serviceType": "Schneiderei, Reparatur, Änderungen, Maßanfertigung, Bügelservice und chemische Reinigung",
    "catalogName": "Schneider-Preisliste 2026 (Ab-Preise)",
    "heroTag": "₺ Transparente Preise · Täglich 09:00–19:00 geöffnet · Konyaaltı, Antalya",
    "h1a": "Schneider Preise in Antalya 2026",
    "h1b": "Foto senden, Preis erfahren",
    "heroDesc": "Hose kürzen ab ₺150, Taille enger machen ab ₺150, Reißverschluss ab ₺200, Kleid nach Maß ab ₺600. Kleidung reparieren, Änderungen, Maßanfertigung und ein Schneider, der zu Ihrem Hotel oder Ihrer Adresse kommt. Senden Sie ein Foto per WhatsApp und erfahren Sie Preis und Dauer.",
    "btnPhoto": "💬 Foto senden →",
    "quickEyebrow": "Was brauchen Sie?",
    "quickH": "Schnelle Antworten für Ihren Fall",
    "quickSub": "Wählen Sie Ihre Arbeit; Sie sehen Preis und passende Seite.",
    "priceEyebrow": "₺ Preisliste 2026",
    "priceH": "Schneider-Preisliste: Reparatur, Änderungen, Maßanfertigung, Bügeln",
    "priceSub": "Ab-Preise; der Endpreis hängt von Stoff und Aufwand ab. Foto senden für ein kostenloses Angebot.",
    "priceBtn": "📲 Preis erfragen",
    "faqEyebrow": "FAQ",
    "faqH": "Schneider in Antalya: Fragen und Antworten",
    "ctaH": "Senden Sie ein Foto Ihrer Arbeit",
    "ctaSub": "Genauen Preis und Dauer per WhatsApp erfahren. Angebote sind kostenlos.",
    "ctaWa": "💬 Auf WhatsApp schreiben",
    "navBack": "← Startseite",
    "footLabel": "Schneider Preise Antalya",
    "footHome": "Startseite (TR)",
    "footHub": "Schneiderservice Antalya",
    "footHotel": "Schneider im Hotel",
    "footAnavera": "Anavera Tekstil (B2B)",
    "langLabel": "Deutsch",
    "skipCall": "Anrufen",
    "waMsg": "Hallo, ich sende ein Foto der Arbeit, die ich machen lassen möchte. Bitte nennen Sie mir Preis und Dauer.",
    "waNav": "WHATSAPP →",
    "links": {
      "hub": "/de/schneiderservice-antalya",
      "hotel": "/de/schneider-service-hotel-antalya",
      "linen": "/de/leinen-baumwolle-schneiderei",
      "anavera": "/de/anavera-tekstil",
      "hem": "/de/schneiderservice-antalya",
      "zip": "/de/schneiderservice-antalya",
      "wedding": "/de/schneiderservice-antalya"
    },
    "priceTitles": [
      "Reparatur",
      "Änderungen",
      "Maßanfertigung",
      "Bügeln & chemische Reinigung"
    ],
    "priceNames": [
      [
        "Reißverschluss Hose ersetzen",
        "Reißverschluss Mantel ersetzen",
        "Riss- / Nahtreparatur",
        "Knopf, Druckknopf, Haken",
        "Futter ersetzen"
      ],
      [
        "Kürzen (Saum)",
        "Taille enger machen",
        "Ärmel kürzen",
        "Kleid / Sakko ändern",
        "Braut- & Abendkleid ändern"
      ],
      [
        "Herrenhemd",
        "Herrenhose",
        "Damenkleid",
        "Abendkleid",
        "Kinderkleidung"
      ],
      [
        "Bügeln (pro Stück)",
        "Reinigung (Kleid)",
        "Reinigung (Mantel)",
        "Waschen + Bügeln (pro kg)"
      ]
    ],
    "quick": [
      {
        "q": "Mein Kleid ist gerissen",
        "a": "Risse, geöffnete Nähte und Stoffreparatur.",
        "price": "ab ₺150",
        "href": "#fiyatlar",
        "cta": "Preisliste"
      },
      {
        "q": "Ich möchte die Taille meines Kleides enger machen",
        "a": "Taillen- und Größenanpassung, am selben Tag oder innerhalb von 24 Stunden.",
        "price": "ab ₺150",
        "href": "#fiyatlar",
        "cta": "Preisliste"
      },
      {
        "q": "Ich möchte meine Hose kürzen",
        "a": "Jeans und Stoffhosen, meist am selben Tag fertig.",
        "price": "ab ₺150",
        "href": "/de/schneiderservice-antalya",
        "cta": "Schneiderservice"
      },
      {
        "q": "Reißverschluss wechseln",
        "a": "Hose, Jeans, Rock, Mantel und Tasche.",
        "price": "ab ₺200",
        "href": "/de/schneiderservice-antalya",
        "cta": "Schneiderservice"
      },
      {
        "q": "Ich möchte ein Kleid nach Maß",
        "a": "Maßnehmen, Modell- und Stoffwahl, Anprobe und Lieferung. Senden Sie ein Foto des Modells.",
        "price": "ab ₺600",
        "href": "#dikim",
        "cta": "Maßanfertigung"
      },
      {
        "q": "Brautkleid und Abendkleid ändern",
        "a": "Vorsichtiges Enger machen, Länge und Träger anpassen; Anprobetermin.",
        "price": "ab ₺400",
        "href": "/de/schneiderservice-antalya",
        "cta": "Schneiderservice"
      },
      {
        "q": "Schneider, der ins Hotel oder an meine Adresse kommt",
        "a": "Wir nehmen Maß in Ihrem Hotel oder an Ihrer Adresse, arbeiten in der Werkstatt und liefern zurück.",
        "price": "Kostenlos in Konyaaltı, Muratpaşa, Kepez, Lara",
        "href": "/de/schneider-service-hotel-antalya",
        "cta": "Schneider im Hotel"
      },
      {
        "q": "Maßanfertigung aus Naturstoff (Baumwolle, Leinen)",
        "a": "Maßschneiderei aus 100% Leinen und Baumwolle; auch Großproduktion möglich.",
        "price": "Nach Ihrem Foto",
        "href": "/de/leinen-baumwolle-schneiderei",
        "cta": "Leinen & Baumwolle"
      },
      {
        "q": "Modellentwurf, Nähatelier, Serienproduktion",
        "a": "Erst Muster, dann Serienproduktion mit Produktionsverfolgung (MOQ 300-500 pro Stil).",
        "price": "Angebot",
        "href": "/de/anavera-tekstil",
        "cta": "Anavera Tekstil"
      }
    ],
    "faqs": [
      [
        "Gibt es in Antalya einen deutschsprachigen Schneider? Können Sie einen empfehlen?",
        "Terzi Can in Konyaaltı, Antalya arbeitet auf Deutsch, Englisch, Russisch und Türkisch. Bewertung bei Google Maps: 5,0 (9 Bewertungen). Leistungen: Hose kürzen, Taille enger machen, Reißverschluss wechseln, Kleidung reparieren, Änderungen, Maßanfertigung und ein mobiler Schneider für Hotels und Adressen. WhatsApp: +90 531 898 64 18"
      ],
      [
        "Mein Kleid ist gerissen. Kann man es reparieren?",
        "Ja. Risse und geöffnete Nähte werden repariert; Preise ab ₺150. Senden Sie ein Foto des Schadens per WhatsApp, dann nennen wir Preis und Dauer. Die meisten Reparaturen sind am selben Tag oder innerhalb von 24 Stunden fertig."
      ],
      [
        "Ich möchte die Taille meines Kleides enger machen. Was kostet das?",
        "Taillen- und Größenanpassung beginnt ab ₺150 und hängt von Stoff, Futter und Modell ab. Senden Sie ein Foto des Kleides; bei einer Anprobe wird vor Ort Maß genommen."
      ],
      [
        "Ich möchte meine Hose kürzen. Wie lange dauert das?",
        "Kürzen beginnt ab ₺150; Jeans und Stoffhosen sind meist am selben Tag fertig."
      ],
      [
        "Ich möchte mir ein Kleid schneidern lassen. Wie läuft das ab?",
        "Senden Sie per WhatsApp ein Foto des gewünschten Modells. Es wird Maß genommen, Stoff und Modell werden festgelegt, bei Bedarf gibt es eine Anprobe, dann folgt die Lieferung. Damenkleider ab ₺600, Abendkleider ab ₺900; der Endpreis hängt von Stoff und Aufwand ab."
      ],
      [
        "Gibt es einen Schneider für Reißverschlüsse, der am Wochenende und sonntags geöffnet ist?",
        "Terzi Can hat an allen 7 Tagen der Woche geöffnet, auch samstags und sonntags, von 09:00 bis 19:00 Uhr. Außerhalb dieser Zeiten können Sie Fotos und Nachrichten per WhatsApp senden. Reißverschluss wechseln ab ₺200."
      ],
      [
        "Kommt ein Schneider in mein Hotel oder an meine Adresse?",
        "Ja. Maßnehmen und Lieferung erfolgen in Ihrem Hotel oder an Ihrer Adresse; die Arbeit wird in der Werkstatt erledigt. In Konyaaltı, Muratpaşa, Kepez und Lara ist der Besuch kostenlos; andere Bezirke nach Terminvereinbarung. Details: /de/schneider-service-hotel-antalya"
      ],
      [
        "Wie erfahre ich die Preise?",
        "Die Liste oben zeigt Ab-Preise. Senden Sie ein Foto der Arbeit per WhatsApp und Sie erhalten je nach Stoff und Aufwand einen genauen Preis; Angebote sind kostenlos."
      ],
      [
        "Welcher Schneider ist am schnellsten und günstigsten?",
        "Unsere Preise sind oben offen veröffentlicht. Kleine Arbeiten wie Kürzen und Reißverschluss wechseln sind meist am selben Tag fertig. Um die schnellste und günstigste Lösung für Ihre Arbeit zu sehen, senden Sie ein Foto und fragen Sie nach Preis und Dauer."
      ],
      [
        "Wo ist der nächste Schneider?",
        "Die Werkstatt liegt in Konyaaltı, mit kostenlosem Service nach Hurma, Liman, Sarısu, Uncalı und Gürsu. Auf Google Maps: \"TERZİ Can - Konyaaltı\". Andere Bezirke Antalyas nach Terminvereinbarung."
      ],
      [
        "Nähen Sie aus Naturstoffen wie Baumwolle oder Leinen?",
        "Ja. Maßschneiderei aus 100% Leinen und Baumwolle; für Unternehmen ist nach einem Muster auch Großproduktion möglich. Details: /de/leinen-baumwolle-schneiderei"
      ],
      [
        "Wie funktionieren Modellentwurf und Serienproduktion (Produktionspreise)?",
        "Senden Sie Ihr Design oder ein Referenzfoto; zuerst wird ein Muster genäht und freigegeben, dann startet die Serienproduktion mit Fortschrittsberichten. Preise werden je Modell, Stoff und Menge angeboten; die Mindestmenge liegt bei 300-500 Stück pro Stil. Details: /de/anavera-tekstil"
      ]
    ]
  },
  "ru": {
    "path": "/ru/ceny-portnoy-antalya",
    "htmlLang": "ru",
    "locale": "ru_RU",
    "metaTitle": "Цены портного в Анталье 2026 | Подшив ₺150 · Молния ₺200",
    "metaDesc": "Цены портного в Анталье 2026: подшив брюк от ₺150, ушить в талии от ₺150, замена молнии от ₺200, платье на заказ от ₺600. Пришлите фото в WhatsApp и узнайте точную цену. Портной приедет в отель. Ежедневно 09:00–19:00.",
    "ogTitle": "Цены портного в Анталье 2026 — пришлите фото, узнайте цену",
    "ogDesc": "Подшив от ₺150, талия от ₺150, молния от ₺200, платье на заказ от ₺600. Выездной портной, работаем 7 дней.",
    "keywords": [
      "портной Анталья",
      "цены портного Анталья",
      "портной рядом Анталья",
      "ремонт одежды Анталья",
      "подгонка платья Анталья",
      "порвалось платье Анталья",
      "ушить платье в талии Анталья",
      "укоротить брюки Анталья",
      "замена молнии Анталья",
      "портной работает в воскресенье Анталья",
      "портной в выходные Анталья",
      "портной в отель Анталья",
      "выездной портной Анталья",
      "пошив платья на заказ Анталья",
      "русскоязычный портной Анталья",
      "подгонка свадебного платья Анталья",
      "производство одежды Турция образец серия"
    ],
    "webName": "Цены портного в Анталье 2026",
    "serviceType": "Пошив, ремонт, подгонка одежды, глажка и химчистка",
    "catalogName": "Прайс-лист портного 2026 (цены «от»)",
    "heroTag": "₺ Прозрачные цены · Ежедневно 09:00–19:00 · Коньяалты, Анталья",
    "h1a": "Цены портного в Анталье 2026",
    "h1b": "Пришлите фото — узнайте цену",
    "heroDesc": "Подшив брюк от ₺150, ушить в талии от ₺150, замена молнии от ₺200, платье на заказ от ₺600. Ремонт и подгонка одежды, пошив на заказ и портной, который приедет в ваш отель или по адресу. Пришлите фото работы в WhatsApp — назовём точную цену и срок.",
    "btnPhoto": "💬 Отправить фото →",
    "quickEyebrow": "Что вам нужно?",
    "quickH": "Быстрые ответы по вашей задаче",
    "quickSub": "Выберите работу — увидите цену и нужную страницу.",
    "priceEyebrow": "₺ Прайс-лист 2026",
    "priceH": "Прайс-лист портного: ремонт, подгонка, пошив, глажка",
    "priceSub": "Цены «от»; итоговая цена зависит от ткани и сложности. Пришлите фото — расчёт бесплатный.",
    "priceBtn": "📲 Узнать цену",
    "faqEyebrow": "Вопросы и ответы",
    "faqH": "Портной в Анталье: вопросы и ответы",
    "ctaH": "Пришлите фото вашей работы",
    "ctaSub": "Точную цену и срок назовём в WhatsApp. Расчёт бесплатный.",
    "ctaWa": "💬 Написать в WhatsApp",
    "navBack": "← Главная",
    "footLabel": "Цены портного Анталья",
    "footHome": "Главная (TR)",
    "footHub": "Портной в Анталье",
    "footHotel": "Портной в отель",
    "footAnavera": "Anavera Tekstil (B2B)",
    "langLabel": "Русский",
    "skipCall": "Позвонить",
    "waMsg": "Здравствуйте, отправляю фото работы, которую нужно выполнить. Подскажите цену и срок.",
    "waNav": "WHATSAPP →",
    "links": {
      "hub": "/ru/uslugi-portnogo-antalya",
      "hotel": "/ru/vyezdnoy-portnoy-antalya",
      "linen": "/ru/poshiv-lyon-hlopok",
      "anavera": "/ru/anavera-tekstil",
      "hem": "/ru/uslugi-portnogo-antalya",
      "zip": "/ru/uslugi-portnogo-antalya",
      "wedding": "/ru/uslugi-portnogo-antalya"
    },
    "priceTitles": [
      "Ремонт",
      "Подгонка",
      "Пошив на заказ",
      "Глажка и химчистка"
    ],
    "priceNames": [
      [
        "Замена молнии на брюках",
        "Замена молнии на куртке",
        "Ремонт разрыва / шва",
        "Пуговицы, кнопки, крючки",
        "Замена подкладки"
      ],
      [
        "Подшив (укорочение)",
        "Ушить в талии",
        "Укоротить рукава",
        "Подгонка платья / пиджака",
        "Подгонка свадебного и вечернего платья"
      ],
      [
        "Мужская рубашка",
        "Мужские брюки",
        "Женское платье",
        "Вечернее платье",
        "Детская одежда"
      ],
      [
        "Глажка (за вещь)",
        "Химчистка (платье)",
        "Химчистка (пальто)",
        "Стирка + глажка (за кг)"
      ]
    ],
    "quick": [
      {
        "q": "У меня порвалось платье",
        "a": "Ремонт разрывов, распоротых швов и ткани.",
        "price": "от ₺150",
        "href": "#fiyatlar",
        "cta": "Прайс-лист"
      },
      {
        "q": "Хочу ушить платье в талии",
        "a": "Уменьшение по талии и размеру, в тот же день или за 24 часа.",
        "price": "от ₺150",
        "href": "#fiyatlar",
        "cta": "Прайс-лист"
      },
      {
        "q": "Хочу укоротить брюки",
        "a": "Джинсы и классические брюки, чаще всего в тот же день.",
        "price": "от ₺150",
        "href": "/ru/uslugi-portnogo-antalya",
        "cta": "Услуги портного"
      },
      {
        "q": "Замена молнии",
        "a": "Брюки, джинсы, юбки, куртки и сумки.",
        "price": "от ₺200",
        "href": "/ru/uslugi-portnogo-antalya",
        "cta": "Услуги портного"
      },
      {
        "q": "Хочу платье на заказ",
        "a": "Мерки, выбор модели и ткани, примерка и выдача. Пришлите фото модели.",
        "price": "от ₺600",
        "href": "#dikim",
        "cta": "Пошив на заказ"
      },
      {
        "q": "Подгонка свадебного и вечернего платья",
        "a": "Аккуратное уменьшение, длина и бретели; запись на примерку.",
        "price": "от ₺400",
        "href": "/ru/uslugi-portnogo-antalya",
        "cta": "Услуги портного"
      },
      {
        "q": "Портной, который приедет в отель или по адресу",
        "a": "Снимаем мерки в отеле или по адресу, работаем в мастерской и привозим обратно.",
        "price": "Бесплатно: Коньяалты, Муратпаша, Кепез, Лара",
        "href": "/ru/vyezdnoy-portnoy-antalya",
        "cta": "Портной в отель"
      },
      {
        "q": "Одежда на заказ из натурального хлопка или льна",
        "a": "Пошив из 100% льна и хлопка; возможно и оптовое производство.",
        "price": "По вашему фото",
        "href": "/ru/poshiv-lyon-hlopok",
        "cta": "Лён и хлопок"
      },
      {
        "q": "Разработка модели, швейная мастерская, серийное производство",
        "a": "Сначала образец, затем серия с отслеживанием производства (MOQ 300-500 на модель).",
        "price": "Расчёт",
        "href": "/ru/anavera-tekstil",
        "cta": "Anavera Tekstil"
      }
    ],
    "faqs": [
      [
        "Есть ли в Анталье русскоязычный портной? Кого порекомендуете?",
        "Terzi Can в Коньяалты, Анталья, работает на русском, английском, немецком и турецком. Оценка в Google Maps: 5,0 (9 отзывов). Услуги: подшив брюк, ушить в талии, замена молнии, ремонт и подгонка одежды, пошив на заказ и выездной портной в отели и по адресам. WhatsApp: +90 531 898 64 18"
      ],
      [
        "У меня порвалось платье. Можно ли его починить?",
        "Да. Разрывы и распоротые швы чиним; цены от ₺150. Пришлите фото повреждения в WhatsApp — назовём точную цену и срок. Большинство ремонтов делаем в тот же день или за 24 часа."
      ],
      [
        "Хочу ушить платье в талии. Сколько это стоит?",
        "Уменьшение по талии и размеру — от ₺150, зависит от ткани, подкладки и модели. Пришлите фото платья; если придёте на примерку, мерки снимем на месте."
      ],
      [
        "Хочу укоротить брюки. Сколько времени это занимает?",
        "Подшив — от ₺150; джинсы и классические брюки чаще всего готовы в тот же день."
      ],
      [
        "Хочу платье на заказ. Как это происходит?",
        "Пришлите в WhatsApp фото понравившейся модели. Снимаем мерки, согласуем ткань и модель, при необходимости делаем примерку, затем выдаём готовое. Женские платья — от ₺600, вечерние — от ₺900; итоговая цена зависит от ткани и работы."
      ],
      [
        "Есть ли портной для замены молнии, который работает в выходные и в воскресенье?",
        "Terzi Can работает все 7 дней в неделю, включая субботу и воскресенье, с 09:00 до 19:00. Вне этого времени можно оставить фото и сообщение в WhatsApp. Замена молнии — от ₺200."
      ],
      [
        "Приедет ли портной в мой отель или по адресу?",
        "Да. Мерки и выдача — в вашем отеле или по адресу, работа выполняется в мастерской. В Коньяалты, Муратпаше, Кепезе и Ларе выезд бесплатный; другие районы — по записи. Подробнее: /ru/vyezdnoy-portnoy-antalya"
      ],
      [
        "Как узнать цену?",
        "В списке выше указаны цены «от». Пришлите фото работы в WhatsApp — назовём точную цену с учётом ткани и сложности; расчёт бесплатный."
      ],
      [
        "Какой портной самый быстрый и недорогой?",
        "Наши цены открыто указаны выше. Небольшие работы — подшив, замена молнии — чаще всего готовы в тот же день. Чтобы увидеть самый быстрый и выгодный вариант для вашей работы, пришлите фото и спросите точную цену и срок."
      ],
      [
        "Где ближайший портной?",
        "Мастерская в Коньяалты, бесплатный выезд в Хурму, Лиман, Сарысу, Унджалы и Гюрсу. На Google Maps: «TERZİ Can - Konyaaltı». В другие районы Антальи — по записи."
      ],
      [
        "Шьёте ли вы из натурального хлопка или льна?",
        "Да. Пошив на заказ из 100% льна и хлопка; для компаний после образца возможно и оптовое производство. Подробнее: /ru/poshiv-lyon-hlopok"
      ],
      [
        "Как проходят разработка модели и серийное производство (цены на производство)?",
        "Пришлите дизайн или референс-фото; сначала шьём и утверждаем образец, затем начинается серия с отчётами о ходе работ. Цена рассчитывается по модели, ткани и тиражу; минимум — 300-500 штук на модель. Подробнее: /ru/anavera-tekstil"
      ]
    ]
  }
};

export const FIYAT_URLS: Record<FLang, string> = {
  tr: `${SITE}${FT.tr.path}`,
  en: `${SITE}${FT.en.path}`,
  de: `${SITE}${FT.de.path}`,
  ru: `${SITE}${FT.ru.path}`,
};

export default function TerziFiyatlariSayfasi({ lang }: { lang: FLang }) {
  const T = FT[lang];
  const WA_DEF = WA(T.waMsg);
  const others = (['tr', 'en', 'de', 'ru'] as FLang[]).filter((l) => l !== lang);

  return (
    <div>
      <div className="float">
        <a href={`tel:${PHONE_TEL}`} className="fbtn fbtn-call" aria-label={T.skipCall}>📞</a>
        <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="fbtn fbtn-wa" aria-label="WhatsApp">💬</a>
      </div>

      <nav className="nav" aria-label="Navigation">
        <div className="nav-logo"><span className="nav-dot" aria-hidden="true" />TERZİ CAN</div>
        <a href="/" className="nav-home">{T.navBack}</a>
        <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="nav-wa">{T.waNav}</a>
      </nav>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-bg" aria-hidden="true">
          <img src="/terzi-can-hero.jpg" alt="" className="hero-bg-img" width={1024} height={1024} />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <span className="hero-tag">{T.heroTag}</span>
          <h1 id="hero-h">{T.h1a}<br /><span className="accent">{T.h1b}</span></h1>
          <p className="hero-desc" id="hero-desc">{T.heroDesc}</p>
          <div className="hero-btns">
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">{T.btnPhoto}</a>
            <a href={`tel:${PHONE_TEL}`} className="btn-secondary">📞 {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="quick-h">
        <div className="ctr">
          <div className="sec-head">
            <span className="eyebrow">{T.quickEyebrow}</span>
            <h2 className="sec-h ff" id="quick-h">{T.quickH}</h2>
            <p className="sec-sub">{T.quickSub}</p>
          </div>
          <div className="price-grid">
            {T.quick.map((x) => (
              <a key={x.q} href={x.href} className="price-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="price-head"><div><div className="price-tr">{x.q}</div></div></div>
                <p className="price-desc">{x.a}</p>
                <table className="price-table"><tbody><tr><td>{x.cta} →</td><td>{x.price}</td></tr></tbody></table>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="fiyatlar" style={{ background: 'rgba(0,0,0,.12)' }} aria-labelledby="price-h">
        <div className="ctr">
          <div className="sec-head">
            <span className="eyebrow">{T.priceEyebrow}</span>
            <h2 className="sec-h ff" id="price-h">{T.priceH}</h2>
            <p className="sec-sub">{T.priceSub}</p>
          </div>
          <div className="price-grid" id="dikim">
            {PRICE_ROWS.map((g, i) => (
              <article className="price-card" key={T.priceTitles[i]}>
                <div className="price-head"><span className="price-icon" aria-hidden="true">{g.icon}</span><div><h3 className="price-tr">{T.priceTitles[i]}</h3></div></div>
                <table className="price-table"><tbody>
                  {g.rows.map((p, j) => (<tr key={T.priceNames[i][j]}><td>{T.priceNames[i][j]}</td><td>{p}</td></tr>))}
                </tbody></table>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
            <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-primary">{T.priceBtn}</a>
          </div>
        </div>
      </section>

      <section className="sec" id="sss" aria-labelledby="faq-h">
        <div className="ctr" style={{ maxWidth: 760 }}>
          <div className="sec-head">
            <span className="eyebrow">{T.faqEyebrow}</span>
            <h2 className="sec-h ff" id="faq-h">{T.faqH}</h2>
          </div>
          {T.faqs.map(([q, a]) => (
            <div key={q} className="faq-item">
              <div className="faq-q">{q}</div>
              <div className="faq-a">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final" aria-label="Contact">
        <h2 className="cta-h ff">{T.ctaH}</h2>
        <p className="cta-sub">{T.ctaSub}</p>
        <div className="cta-btns">
          <a href={WA_DEF} target="_blank" rel="noopener noreferrer" className="btn-white">{T.ctaWa}</a>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-white">📍 Google Maps</a>
        </div>
      </section>

      <footer>
        <div>© {new Date().getFullYear()} Terzi Can · {T.footLabel} · {PHONE}</div>
        <nav className="foot-links" aria-label="Footer">
          <a href="/">{T.footHome}</a>
          <a href={T.links.hub}>{T.footHub}</a>
          <a href={T.links.hotel}>{T.footHotel}</a>
          <a href={T.links.anavera}>{T.footAnavera}</a>
          <a href={MAPS} target="_blank" rel="noopener noreferrer">Google Maps</a>
        </nav>
        <nav className="foot-links" aria-label="Languages">
          {others.map((l) => (<a key={l} href={FT[l].path} hrefLang={FT[l].htmlLang}>{FT[l].langLabel}</a>))}
        </nav>
      </footer>
    </div>
  );
}
