

import { IMG, ALT } from '@/lib/turist-keten';

const PHONE = '+90 531 898 64 18';
const WA_NUM = '905318986418';
const WA = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;

type Lang = 'tr' | 'en' | 'ru' | 'de';

// ─── MODEL GALERİSİ — Terzi Can'ın kendi stil örneği fotoğrafları (public/linen, lib/turist-keten.ts ile ortak) ───
// Bunlar satılan hazır ürün değil, "bu tarz bir şey diktirmek istiyorum"
// diyen misafirin gösterebileceği stil/model örnekleri.
const MODELLER = [
  {
    id: 'maxi', k: 'maxi',
    baslik: { tr: 'Kadın Keten Maxi Elbise', en: "Women's Linen Maxi Dress", ru: 'Женское льняное макси-платье', de: 'Damen Leinen-Maxikleid' },
    aciklama: { tr: 'İşlemeli yakalı, uzun boy keten maxi elbise.', en: 'Linen maxi dress with an embroidered neckline.', ru: 'Льняное макси-платье с вышивкой у выреза.', de: 'Leinen-Maxikleid mit gesticktem Ausschnitt.' },
  },
  {
    id: 'slit', k: 'slit',
    baslik: { tr: 'Yırtmaçlı Keten Maxi Elbise', en: 'Linen Maxi Dress with Side Slit', ru: 'Льняное макси-платье с разрезом', de: 'Leinen-Maxikleid mit Seitenschlitz' },
    aciklama: { tr: 'Yandan yırtmaçlı, bej keten maxi elbise.', en: 'Beige linen maxi dress with a side slit.', ru: 'Бежевое льняное макси-платье с боковым разрезом.', de: 'Beiges Leinen-Maxikleid mit Seitenschlitz.' },
  },
  {
    id: 'white', k: 'white',
    baslik: { tr: 'İnce Askılı Keten Yazlık Elbise', en: 'Thin-Strap Linen Summer Dress', ru: 'Летнее льняное платье на тонких бретелях', de: 'Leinen-Sommerkleid mit dünnen Trägern' },
    aciklama: { tr: 'Beyaz, ince askılı, yazlık keten elbise.', en: 'White linen summer dress with thin straps.', ru: 'Белое летнее льняное платье на тонких бретелях.', de: 'Weißes Leinen-Sommerkleid mit dünnen Trägern.' },
  },
  {
    id: 'tea', k: 'tea',
    baslik: { tr: 'Erkek Keten Yazlık Gömlek', en: "Men's Linen Summer Shirt", ru: 'Мужская летняя льняная рубашка', de: 'Herren Leinen-Sommerhemd' },
    aciklama: { tr: 'Açık mavi, rahat kesim keten gömlek.', en: 'Light-blue linen shirt in a relaxed fit.', ru: 'Голубая льняная рубашка свободного кроя.', de: 'Hellblaues Leinenhemd in lockerer Passform.' },
  },
  {
    id: 'castle', k: 'castle',
    baslik: { tr: 'Erkek Keten Gömlek & Pantolon', en: "Men's Linen Shirt & Trousers", ru: 'Мужская льняная рубашка и брюки', de: 'Herren Leinenhemd & Hose' },
    aciklama: { tr: 'Keten gömlek ve beyaz keten pantolon takımı.', en: 'Linen shirt with white linen trousers.', ru: 'Льняная рубашка и белые льняные брюки.', de: 'Leinenhemd mit weißer Leinenhose.' },
  },
  {
    id: 'jacketKaleici', k: 'jacketKaleici',
    baslik: { tr: 'Keten Ceket & Rahat Elbise', en: 'Linen Jacket & Relaxed Dress', ru: 'Льняной пиджак и свободное платье', de: 'Leinensakko & lockeres Kleid' },
    aciklama: { tr: 'Yapısız keten ceket ve rahat kesim keten elbise.', en: 'Unstructured linen jacket and a relaxed linen dress.', ru: 'Льняной пиджак без жёсткой структуры и свободное льняное платье.', de: 'Unstrukturiertes Leinensakko und ein lockeres Leinenkleid.' },
  },
  {
    id: 'kidsGate', k: 'kidsGate',
    baslik: { tr: 'Çocuk Keten Giyim', en: "Kids' Linen Clothing", ru: 'Детская льняная одежда', de: 'Kinder-Leinenkleidung' },
    aciklama: { tr: 'Keten gömlek, elbise ve bahçıvan tulum.', en: 'Linen shirt, dress and dungarees.', ru: 'Льняная рубашка, платье и комбинезон.', de: 'Leinenhemd, Kleid und Latzhose.' },
  },
  {
    id: 'kidsBench', k: 'kidsBench',
    baslik: { tr: 'Çocuk Keten Gömlek & Şort', en: "Kids' Linen Shirt & Shorts", ru: 'Детская льняная рубашка и шорты', de: 'Kinder Leinenhemd & Shorts' },
    aciklama: { tr: 'Hardal rengi keten gömlek ve şort.', en: 'Mustard linen shirt and shorts.', ru: 'Горчичная льняная рубашка и шорты.', de: 'Senffarbenes Leinenhemd und Shorts.' },
  },
] as const;

const T: Record<Lang, any> = {
  tr: {
    tag: '🧵 Özel Dikim · Keten & Pamuk',
    h1a: 'Keten & Pamuk', h1b: 'Özel Dikim Modelleri',
    heroDesc: 'Aşağıdaki modellerden birini beğenin ya da kendi fikrinizi getirin — doğal keten veya pamuktan, tam sizin ölçünüze göre dikelim. Antalya Konyaaltı atölyemizde; bay bayan, tek veya seri adet, otelinize teslim ya da yurt içi ve yurt dışı gönderim.',
    galleryH: 'Model Örnekleri', gallerySub: 'Beğendiğiniz modeli WhatsApp\'tan gönderin, ölçünüzü alalım.',
    ctaBtn: 'Bu Modeli İste — WhatsApp',
    howH: 'Nasıl Çalışır?',
    steps: [
      ['1️⃣', 'Model Seçin', 'Aşağıdan bir model seçin ya da kendi fotoğrafınızı/fikrinizi gönderin.'],
      ['2️⃣', 'Ölçü & Kumaş', 'WhatsApp\'tan ölçülerinizi paylaşın, keten veya pamuk kumaş seçin.'],
      ['3️⃣', 'Dikim', 'Atölyemizde dikilir; süre modele ve adede göre belirlenir.'],
      ['4️⃣', 'Teslim', 'Otelinize veya adresinize teslim edilir, ödeme teslimde.'],
    ],
    faqH: 'Sık Sorulan Sorular',
    faq: [
      ['Hazır model mi seçmem lazım, kendi tasarımımı da diktirebilir miyim?', 'Hayır, hazır modelle sınırlı değilsiniz — kendi fotoğrafınızı veya fikrinizi WhatsApp\'tan gönderebilirsiniz, ona göre dikeriz.'],
      ['Kumaşı siz mi seçiyorsunuz, ben mi?', 'Siz seçersiniz — keten veya pamuk arasından, WhatsApp\'ta görüşürken karar veriyoruz.'],
      ['Dikim ne kadar sürüyor?', 'Süre modele ve adede göre belirlenir; kesin gün WhatsApp\'ta netleşir.'],
      ['Otelime teslimat yapıyor musunuz?', 'Evet, Belek, Lara, Kemer ve Side otellerine teslim ediyoruz, ödeme teslimde alınır.'],
      ['Ölçümü nasıl vereceğim?', 'WhatsApp üzerinden ölçülerinizi paylaşırsınız, isterseniz görüntülü görüşmeyle de yardımcı oluruz.'],
      ['Model ve kalıp çıkarıyor musunuz?', 'Evet. Fotoğraf, çizim veya örnek bir giysiden model ve kalıp hazırlıyor, önce numune dikiyoruz; onayınızdan sonra özel dikim ya da seri üretime geçiyoruz.'],
      ['Yurt dışına gönderim yapıyor musunuz?', 'Evet, siparişleri Avrupa, Rusya ve diğer ülkelere gönderiyoruz. Süre ve fiyat siparişe göre WhatsApp\'ta netleşir.'],
      ['Seri veya fason üretim yapıyor musunuz?', 'Evet. Keten ve pamukta bay, bayan ve çocuk giyimi için seri ve fason üretim yapıyoruz; adet ve fiyat proje bazında netleşir.'],
    ],
    finalCta: 'Kendi Modelinizi Diktirin', finalSub: 'Fotoğraf gönderin, WhatsApp\'tan fiyat teklifi alın.',
    waBtn: 'WhatsApp ile Başlayın',
    wholesaleTag: '🏭 Özel Dikim & Seri Üretim, İhracat',
    wholesaleH: 'Tek Parça mı, Yoksa Seri İmalat mı?',
    wholesaleDesc: 'Otel/mağaza zinciri, marka veya işletmeyseniz — aynı keten ve pamuk kumaşlarla erkek, kadın ve çocuk giyiminde model ve kalıp çıkarma, numune, fason ve seri üretim yapıyoruz; üretim takibini paylaşıyor, siparişleri Türkiye\'ye, Avrupa\'ya, Rusya\'ya ve diğer ülkelere gönderiyoruz.',
    wholesaleSteps: [
      ['1️⃣', 'Tasarım / Fotoğraf Gönderin', 'İstediğiniz modeli, çizimi veya referans fotoğrafı WhatsApp\'tan paylaşın.'],
      ['2️⃣', 'Numune Geliştirme', 'Kalıbını çıkarıp tek bir numune dikiyoruz — onayınız olmadan seri imalata geçmiyoruz.'],
      ['3️⃣', 'Seri İmalat', 'Numune onaylandıktan sonra istediğiniz adette (adet projeye göre netleşir) üretime geçiyoruz.'],
      ['4️⃣', 'Üretim Takibi & İhracat', 'Kesim/dikim/kalite kontrol aşamalarını fotoğraf-video ile paylaşıyoruz; Avrupa, Rusya ve diğer ülkelere gönderim yapıyoruz.'],
    ] as [string, string, string][],
    wholesaleCtaBtn: 'Seri Üretim Teklifi İste — WhatsApp',
    wholesaleLinkText: 'Kurumsal üretim kataloğumuz için → Anavera Tekstil',
    heroSeri: 'Seri & fason üretim →',
    modelsH: 'Bay & Bayan Keten Pamuk Giyim Modelleri',
    modelsSub: 'Keten ve pamuk kumaştan, ölçünüze göre özel dikim ya da seri üretim.',
    modelGroups: [['Bay','Gömlek, pantolon, şort, ceket, takım'],['Bayan','Elbise, gömlek, pantolon, etek, ceket'],['Çocuk','Elbise, gömlek, şort']] as [string, string][],
    prodCards: [['Özel Dikim','Tek parça: modelinizi ve ölçünüzü gönderin, keten veya pamukla dikelim.'],['Model & Kalıp Çıkarma','Fotoğraf, çizim veya örnek giysiden model ve kalıp hazırlıyoruz.'],['Numune & Seri Üretim','Önce numune, onaydan sonra seri üretim; üretim takibi paylaşılır.'],['Fason Üretim','Kendi modeliniz veya markanız için fason dikim; adet ve fiyat proje bazında netleşir.']] as [string, string][],
    shipLine: 'Siparişler Avrupa, Rusya ve diğer ülkelere gönderilir. Süre ve fiyat WhatsApp\'ta netleşir.',
  },
  en: {
    tag: '🧵 Custom Tailoring · Linen & Cotton',
    h1a: 'Linen & Cotton', h1b: 'Custom Tailoring Models',
    heroDesc: 'Pick a style below or bring your own idea — we\'ll tailor it in natural linen or cotton, made exactly to your measurements. Made in our Konyaaltı, Antalya workshop for men and women, single piece or serial, delivered to your hotel or shipped across Turkey and abroad.',
    galleryH: 'Style Examples', gallerySub: 'Send the style you like on WhatsApp and we\'ll take your measurements.',
    ctaBtn: 'Request This Style — WhatsApp',
    howH: 'How It Works',
    steps: [
      ['1️⃣', 'Choose a Style', 'Pick a model below, or send us your own photo or idea.'],
      ['2️⃣', 'Measurements & Fabric', 'Share your measurements on WhatsApp, choose linen or cotton.'],
      ['3️⃣', 'Tailoring', 'Tailored in our workshop — timing depends on the model and number of pieces.'],
      ['4️⃣', 'Delivery', 'Delivered to your hotel or address, pay on delivery.'],
    ],
    faqH: 'Frequently Asked Questions',
    faq: [
      ['Do I have to pick a ready-made style, or can I have my own design made?', 'You are not limited to the gallery — send your own photo or idea on WhatsApp and we\'ll tailor it.'],
      ['Do I choose the fabric, or do you?', 'You choose — linen or cotton, we\'ll confirm the choice with you on WhatsApp.'],
      ['How long does tailoring take?', 'Timing depends on the model and number of pieces; the exact day is confirmed on WhatsApp.'],
      ['Do you deliver to my hotel?', 'Yes, we deliver to hotels across Antalya, payment on delivery.'],
      ['How do I give you my measurements?', 'You share them on WhatsApp — we can also help via a video call if needed.'],
      ['Do you make styles and patterns?', 'Yes. We prepare the style and pattern from a photo, sketch or sample garment and sew a sample first; after your approval we move to custom tailoring or serial production.'],
      ['Do you ship abroad?', 'Yes, we ship orders to Europe, Russia and other countries. Time and price are agreed on WhatsApp per order.'],
      ['Do you do serial or contract production?', 'Yes. We do serial and contract production in linen and cotton for menswear, womenswear and kidswear; quantity and price are agreed per project.'],
    ],
    finalCta: 'Have Your Own Style Made', finalSub: 'Send a photo and get a price quote on WhatsApp.',
    waBtn: 'Start on WhatsApp',
    wholesaleTag: '🏭 Custom & Serial Production, Export',
    wholesaleH: 'One Piece, or Serial Production?',
    wholesaleDesc: 'Hotel groups, retail chains, brands and businesses — in the same linen and cotton fabrics we do style and pattern making, samples, contract and serial production for menswear, womenswear and kidswear, share production tracking, and ship orders to Turkey, Europe, Russia and other countries.',
    wholesaleSteps: [
      ['1️⃣', 'Send Your Design', 'Share the style, sketch, or reference photo you want on WhatsApp.'],
      ['2️⃣', 'Sample Development', 'We draft the pattern and sew a single sample — serial production starts only after your approval.'],
      ['3️⃣', 'Serial Production', 'Once the sample is approved, we produce your required quantity (quantity agreed per project).'],
      ['4️⃣', 'Production Tracking & Export', 'We share cutting/sewing/QC updates by photo and video; we ship abroad to Europe, Russia and other countries.'],
    ] as [string, string, string][],
    wholesaleCtaBtn: 'Request Serial Production Quote — WhatsApp',
    wholesaleLinkText: 'See our full manufacturing catalogue → Anavera Tekstil',
    heroSeri: 'Serial & contract production →',
    modelsH: 'Men\'s & Women\'s Linen and Cotton Clothing Models',
    modelsSub: 'In linen or cotton, made to your measurements or produced in series.',
    modelGroups: [['Men','Shirts, trousers, shorts, jackets, suits'],['Women','Dresses, shirts, trousers, skirts, jackets'],['Kids','Dresses, shirts, shorts']] as [string, string][],
    prodCards: [['Custom Tailoring','One piece: send your style and measurements, we sew it in linen or cotton.'],['Style & Pattern Making','We prepare the style and pattern from a photo, sketch or sample garment.'],['Sample & Serial Production','Sample first, serial production after approval; production updates shared.'],['Contract Manufacturing','Contract sewing for your own design or brand; quantity and price agreed per project.']] as [string, string][],
    shipLine: 'Orders are shipped to Europe, Russia and other countries. Time and price are agreed on WhatsApp.',
  },
  ru: {
    tag: '🧵 Пошив на заказ · лён и хлопок',
    h1a: 'Лён и хлопок', h1b: 'Модели на заказ',
    heroDesc: 'Выберите модель ниже или предложите свою идею — сошьём из натурального льна или хлопка точно по вашим меркам. Мастерская в Коньяалты, Анталья: мужская и женская одежда, одна вещь или серия, доставка в отель или по Турции и за рубеж.',
    galleryH: 'Примеры моделей', gallerySub: 'Отправьте понравившуюся модель в WhatsApp — снимем мерки.',
    ctaBtn: 'Заказать эту модель — WhatsApp',
    howH: 'Как это работает',
    steps: [
      ['1️⃣', 'Выберите модель', 'Выберите модель ниже или пришлите своё фото/идею.'],
      ['2️⃣', 'Мерки и ткань', 'Пришлите мерки в WhatsApp, выберите лён или хлопок.'],
      ['3️⃣', 'Пошив', 'Шьём в мастерской — обычно готово на заказ.'],
      ['4️⃣', 'Доставка', 'Доставим в отель или по адресу, оплата при получении.'],
    ],
    faqH: 'Часто задаваемые вопросы',
    faq: [
      ['Нужно ли выбирать готовую модель, или можно сшить своё?', 'Вы не ограничены галереей — пришлите своё фото или идею в WhatsApp, мы сошьём по нему.'],
      ['Я выбираю ткань или вы?', 'Вы выбираете — лён или хлопок, окончательно определим в WhatsApp.'],
      ['Сколько времени занимает пошив?', 'Срок зависит от модели и количества изделий; точный день подтверждаем в WhatsApp.'],
      ['Вы доставляете в отель?', 'Да, доставляем в отели по всей Анталье, оплата при получении.'],
      ['Как передать мерки?', 'Пришлите их в WhatsApp — при необходимости поможем и по видеосвязи.'],
      ['Вы разрабатываете модели и лекала?', 'Да. Готовим модель и лекала по фото, эскизу или образцу одежды и сначала шьём образец; после вашего утверждения переходим к индивидуальному пошиву или серии.'],
      ['Отправляете ли вы заказы за границу?', 'Да, отправляем заказы в Европу, Россию и другие страны. Срок и цена согласуются в WhatsApp по каждому заказу.'],
      ['Вы делаете серийное или контрактное производство?', 'Да. Серийное и контрактное производство из льна и хлопка для мужской, женской и детской одежды; количество и цена — по проекту.'],
    ],
    finalCta: 'Сшить по своей модели', finalSub: 'Пришлите фото — получите цену в WhatsApp.',
    waBtn: 'Начать в WhatsApp',
    wholesaleTag: '🏭 Индивидуальный пошив и серийное производство, экспорт',
    wholesaleH: 'Одна вещь или серийное производство?',
    wholesaleDesc: 'Отельные сети, магазины, бренды и компании — из тех же льняных и хлопковых тканей мы делаем модели и лекала, образцы, контрактное и серийное производство мужской, женской и детской одежды, делимся контролем производства и отправляем заказы в Турцию, Европу, Россию и другие страны.',
    wholesaleSteps: [
      ['1️⃣', 'Отправьте дизайн', 'Пришлите желаемую модель, эскиз или референс-фото в WhatsApp.'],
      ['2️⃣', 'Разработка образца', 'Строим лекало и шьём один образец — серийное производство начинается только после утверждения.'],
      ['3️⃣', 'Серийное производство', 'После утверждения образца производим нужный объём (количество согласуется по проекту).'],
      ['4️⃣', 'Контроль производства и экспорт', 'Делимся фото/видео этапов раскроя, пошива и контроля качества; отправляем заказы в Европу, Россию и другие страны.'],
    ] as [string, string, string][],
    wholesaleCtaBtn: 'Запросить цену на серию — WhatsApp',
    wholesaleLinkText: 'Полный каталог производства → Anavera Tekstil',
    heroSeri: 'Серийное и контрактное производство →',
    modelsH: 'Модели мужской и женской одежды из льна и хлопка',
    modelsSub: 'Из льна или хлопка: пошив по вашим меркам или серийное производство.',
    modelGroups: [['Мужская','Рубашки, брюки, шорты, пиджаки, костюмы'],['Женская','Платья, рубашки, брюки, юбки, пиджаки'],['Детская','Платья, рубашки, шорты']] as [string, string][],
    prodCards: [['Индивидуальный пошив','Одна вещь: пришлите модель и мерки, сошьём из льна или хлопка.'],['Разработка модели и лекал','Готовим модель и лекала по фото, эскизу или образцу одежды.'],['Образец и серия','Сначала образец, после утверждения — серийное производство; отчёты о ходе работ.'],['Контрактное производство','Пошив по вашему дизайну или для вашего бренда; количество и цена — по проекту.']] as [string, string][],
    shipLine: 'Заказы отправляем в Европу, Россию и другие страны. Срок и цену уточняем в WhatsApp.',
  },
  de: {
    tag: '🧵 Maßschneiderei · Leinen & Baumwolle',
    h1a: 'Leinen & Baumwolle', h1b: 'Modelle nach Maß',
    heroDesc: 'Wählen Sie unten einen Stil oder bringen Sie Ihre eigene Idee mit — wir schneidern aus natürlichem Leinen oder Baumwolle, genau nach Ihren Maßen. Gefertigt in unserer Werkstatt in Konyaaltı für Damen und Herren, Einzelstück oder Serie, geliefert ans Hotel oder versendet in der Türkei und ins Ausland.',
    galleryH: 'Stilbeispiele', gallerySub: 'Senden Sie den gewünschten Stil per WhatsApp — wir nehmen Maß.',
    ctaBtn: 'Diesen Stil anfragen — WhatsApp',
    howH: 'So funktioniert es',
    steps: [
      ['1️⃣', 'Stil wählen', 'Wählen Sie ein Modell unten oder senden Sie Ihr eigenes Foto/Idee.'],
      ['2️⃣', 'Maße & Stoff', 'Teilen Sie Ihre Maße per WhatsApp mit, wählen Sie Leinen oder Baumwolle.'],
      ['3️⃣', 'Schneidern', 'In unserer Werkstatt gefertigt — die Dauer richtet sich nach Modell und Stückzahl fertig.'],
      ['4️⃣', 'Lieferung', 'Lieferung an Ihr Hotel oder Ihre Adresse, Zahlung bei Lieferung.'],
    ],
    faqH: 'Häufig gestellte Fragen',
    faq: [
      ['Muss ich ein fertiges Modell wählen, oder kann ich mein eigenes Design schneidern lassen?', 'Sie sind nicht auf die Galerie beschränkt — senden Sie Ihr eigenes Foto oder Ihre Idee per WhatsApp, wir schneidern danach.'],
      ['Wähle ich den Stoff, oder Sie?', 'Sie wählen — Leinen oder Baumwolle, wir bestätigen die Wahl gemeinsam per WhatsApp.'],
      ['Wie lange dauert die Anfertigung?', 'Die Dauer richtet sich nach Modell und Stückzahl fertig, je nach Komplexität des Modells; der genaue Tag wird per WhatsApp bestätigt.'],
      ['Liefern Sie an mein Hotel?', 'Ja, wir liefern an Hotels in ganz Antalya, Zahlung bei Lieferung.'],
      ['Wie gebe ich meine Maße an?', 'Teilen Sie sie per WhatsApp mit — bei Bedarf helfen wir auch per Videoanruf.'],
      ['Erstellen Sie Modelle und Schnittmuster?', 'Ja. Wir erstellen Modell und Schnittmuster nach Foto, Skizze oder Musterstück und nähen zuerst ein Muster; nach Ihrer Freigabe folgen Maßanfertigung oder Serie.'],
      ['Versenden Sie ins Ausland?', 'Ja, wir versenden Bestellungen nach Europa, Russland und in weitere Länder. Zeit und Preis klären wir pro Bestellung per WhatsApp.'],
      ['Machen Sie Serien- oder Lohnfertigung?', 'Ja. Serien- und Lohnfertigung aus Leinen und Baumwolle für Herren-, Damen- und Kinderbekleidung; Menge und Preis projektbezogen.'],
    ],
    finalCta: 'Eigenen Stil schneidern lassen', finalSub: 'Foto senden und per WhatsApp ein Preisangebot erhalten.',
    waBtn: 'Mit WhatsApp beginnen',
    wholesaleTag: '🏭 Sonder- & Serienproduktion, Export',
    wholesaleH: 'Einzelstück oder Serienproduktion?',
    wholesaleDesc: 'Hotelgruppen, Handelsketten, Marken und Unternehmen — aus denselben Leinen- und Baumwollstoffen erstellen wir Modelle und Schnittmuster, Muster, Lohn- und Serienfertigung für Herren-, Damen- und Kinderbekleidung, teilen die Produktionsverfolgung und versenden in die Türkei, nach Europa, Russland und in weitere Länder.',
    wholesaleSteps: [
      ['1️⃣', 'Design senden', 'Teilen Sie den gewünschten Stil, die Skizze oder ein Referenzfoto per WhatsApp mit.'],
      ['2️⃣', 'Musterentwicklung', 'Wir erstellen das Schnittmuster und nähen ein einzelnes Muster — die Serienproduktion beginnt erst nach Ihrer Freigabe.'],
      ['3️⃣', 'Serienproduktion', 'Nach Freigabe des Musters fertigen wir die gewünschte Menge (Menge projektbezogen).'],
      ['4️⃣', 'Produktionsverfolgung & Export', 'Wir teilen Foto-/Video-Updates zu Zuschnitt/Nähen/QK; Versand ins Ausland (Europa, Russland und weitere Länder).'],
    ] as [string, string, string][],
    wholesaleCtaBtn: 'Serienproduktion anfragen — WhatsApp',
    wholesaleLinkText: 'Unser vollständiger Produktionskatalog → Anavera Tekstil',
    heroSeri: 'Serien- & Lohnfertigung →',
    modelsH: 'Herren- & Damenmodelle aus Leinen und Baumwolle',
    modelsSub: 'Aus Leinen oder Baumwolle, nach Ihren Maßen oder in Serie gefertigt.',
    modelGroups: [['Herren','Hemden, Hosen, Shorts, Sakkos, Anzüge'],['Damen','Kleider, Hemden, Hosen, Röcke, Sakkos'],['Kinder','Kleider, Hemden, Shorts']] as [string, string][],
    prodCards: [['Maßanfertigung','Einzelstück: Modell und Maße senden, wir nähen es aus Leinen oder Baumwolle.'],['Modell & Schnittmuster','Wir erstellen Modell und Schnittmuster nach Foto, Skizze oder Musterstück.'],['Muster & Serienfertigung','Erst ein Muster, nach Freigabe die Serie; Produktionsupdates inklusive.'],['Lohnfertigung','Lohnnähen für Ihr eigenes Design oder Ihre Marke; Menge und Preis projektbezogen.']] as [string, string][],
    shipLine: 'Bestellungen werden nach Europa, Russland und in weitere Länder versendet. Zeit und Preis klären wir per WhatsApp.',
  },
};

export const KETEN_PAMUK_T = T;

import OrnekGorselSeridi from '@/components/OrnekGorselSeridi';

const KETEN_URL: Record<string, string> = { tr: '/keten-pamuk-ozel-dikim', en: '/en/linen-cotton-tailoring', de: '/de/leinen-baumwolle-schneiderei', ru: '/ru/poshiv-lyon-hlopok' };

export default function KetenPamukOzelDikim({ lang = 'tr' }: { lang?: Lang }) {
  const t = T[lang] || T['tr'];
  const waMsg = lang === 'ru' ? 'Здравствуйте, хочу заказать пошив из льна/хлопка. Модель: '
    : lang === 'de' ? 'Hallo, ich möchte etwas aus Leinen/Baumwolle schneidern lassen. Modell: '
    : lang === 'en' ? 'Hello, I would like to order custom linen/cotton tailoring. Style: '
    : 'Merhaba, keten/pamuk özel dikim sipariş etmek istiyorum. Model: ';

  const wholesaleWaMsg = lang === 'ru' ? 'Здравствуйте, интересует индивидуальный пошив и серийное производство одежды из льна/хлопка. Категория: '
    : lang === 'de' ? 'Hallo, ich interessiere mich für Sonder- und Serienproduktion von Leinen-/Baumwollbekleidung. Kategorie: '
    : lang === 'en' ? 'Hello, I am interested in custom and serial linen/cotton clothing production. Category: '
    : 'Merhaba, keten/pamuk giyimde özel dikim ve seri üretim ile ilgileniyorum. Kategori: ';

  const anaveraHref = lang === 'tr' ? '/anavera-tekstil' : `/${lang}/anavera-tekstil`;

  return (
    <main style={{ fontFamily: 'system-ui,sans-serif', background: '#FAF7F2', color: '#3A3028', minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(135deg,#2C4A3E 0%,#3E6656 100%)', padding: '4.5rem 1.5rem 3.5rem' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#D4B07A', marginBottom: '1rem' }}>{t.tag}</div>
          <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: '1.2rem' }}>
            {t.h1a}<br /><span style={{ color: '#D4B07A', fontStyle: 'italic' }}>{t.h1b}</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.8, maxWidth: 620, marginBottom: '1.8rem' }}>
            {t.heroDesc}
          </p>
          <a href={WA(waMsg)} target="_blank" rel="noopener noreferrer"
            style={{ background: '#25d366', color: '#fff', padding: '1rem 2rem', fontWeight: 700, textDecoration: 'none', fontSize: '.88rem', borderRadius: 4, display: 'inline-block' }}>
            💬 {t.waBtn}
          </a>
          <a href="#seri-uretim" style={{ color: '#D4B07A', fontSize: '.85rem', textDecoration: 'underline', marginLeft: '1.2rem', display: 'inline-block', marginTop: '.8rem' }}>{t.heroSeri}</a>
        </div>
      </section>

      <section style={{ padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.6rem', color: '#1C1814', marginBottom: '.3rem', textAlign: 'center' }}>{t.galleryH}</h2>
          <p style={{ color: '#7A6E62', fontSize: '.88rem', marginBottom: '2rem', textAlign: 'center' }}>{t.gallerySub}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.2rem' }}>
            {MODELLER.map((m) => (
              <div key={m.id} style={{ background: '#fff', borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(44,74,62,.12)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG[m.k].src} alt={lang === 'tr' ? `${m.baslik.tr} — model örneği` : ALT[m.k][lang]} width={IMG[m.k].w} height={IMG[m.k].h} style={{ width: '100%', height: 300, objectFit: 'cover', objectPosition: 'center 25%', display: 'block' }} loading="lazy" decoding="async" />
                <div style={{ padding: '1.1rem' }}>
                  <h3 style={{ fontFamily: 'Georgia,serif', fontSize: '1rem', color: '#1C1814', marginBottom: '.4rem' }}>{m.baslik[lang]}</h3>
                  <p style={{ fontSize: '.8rem', color: '#7A6E62', lineHeight: 1.6, marginBottom: '.9rem' }}>{m.aciklama[lang]}</p>
                  <a href={WA(waMsg + m.baslik[lang])} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', textAlign: 'center', background: '#2C4A3E', color: '#fff', padding: '.65rem', borderRadius: 4, textDecoration: 'none', fontSize: '.78rem', fontWeight: 600 }}>
                    {t.ctaBtn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OrnekGorselSeridi konu={'keten'} lang={lang as 'tr' | 'en' | 'de' | 'ru'} tema="acik" anahtarlar={['keten-kadin-evde', 'keten-blazer-atolye', 'keten-erkek-gomlek', 'keten-pantolon-katli']} sayfaUrl={`https://terzihizmeti.com.tr${KETEN_URL[lang] || KETEN_URL.tr}`} />

      <section style={{ background: '#F2EDE4', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.6rem', color: '#1C1814', marginBottom: '2rem', textAlign: 'center' }}>{t.howH}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 1, background: '#E8E0D2' }}>
            {t.steps.map(([ic, ti, d]: string[], i: number) => (
              <div key={i} style={{ background: '#fff', padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '.6rem' }}>{ic}</div>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: '.95rem', color: '#2C4A3E', marginBottom: '.3rem' }}>{ti}</div>
                <div style={{ fontSize: '.77rem', color: '#7A6E62', lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELLER & ÜRETİM TÜRLERİ — bay/bayan/çocuk, özel dikim, model-kalıp, numune-seri, fason; gönderim Avrupa/Rusya/diğer ülkeler */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.6rem', color: '#1C1814', marginBottom: '.4rem', textAlign: 'center' }}>{t.modelsH}</h2>
          <p style={{ color: '#7A6E62', fontSize: '.88rem', marginBottom: '2rem', textAlign: 'center' }}>{t.modelsSub}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginBottom: '1.6rem' }}>
            {t.modelGroups.map(([g, items]: string[]) => (
              <div key={g} style={{ border: '1px solid rgba(44,74,62,.2)', borderRadius: 8, padding: '1.1rem 1rem', background: '#FAF7F2' }}>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: '1rem', color: '#2C4A3E', marginBottom: '.3rem' }}>{g}</h3>
                <div style={{ fontSize: '.8rem', color: '#7A6E62', lineHeight: 1.6 }}>{items}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginBottom: '1.4rem' }}>
            {t.prodCards.map(([ti, d]: string[]) => (
              <div key={ti} style={{ borderLeft: '3px solid #D4B07A', padding: '.4rem 1rem' }}>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: '.95rem', color: '#1C1814', marginBottom: '.25rem' }}>{ti}</h3>
                <div style={{ fontSize: '.78rem', color: '#7A6E62', lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '.85rem', color: '#2C4A3E', fontWeight: 600 }}>{t.shipLine}</p>
        </div>
      </section>

      {/* TOPTAN ÜRETİM & İHRACAT — SEO/AI: "seri imalat", "toptan üretim", "numune
          çalışması" aramalarını da bu sayfaya bağlıyor; bireysel özel dikim
          hizmetiyle aynı sayfada ama ayrı bir CTA ile sunuluyor, ve kurumsal
          kataloğun tamamı için Anavera Tekstil'e link veriyor. */}
      <section id="seri-uretim" style={{ background: '#1C1814', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', color: '#D4B07A', marginBottom: '.8rem', textAlign: 'center' }}>{t.wholesaleTag}</div>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.7rem', color: '#fff', marginBottom: '1rem', textAlign: 'center' }}>{t.wholesaleH}</h2>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '.92rem', lineHeight: 1.8, maxWidth: 720, margin: '0 auto 2.5rem', textAlign: 'center' }}>{t.wholesaleDesc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.2rem', marginBottom: '2.2rem' }}>
            {t.wholesaleSteps.map(([ic, ti, d]: string[], i: number) => (
              <div key={i} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,176,122,.25)', borderRadius: 8, padding: '1.4rem 1.1rem' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '.5rem' }}>{ic}</div>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: '.9rem', color: '#D4B07A', marginBottom: '.3rem' }}>{ti}</div>
                <div style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href={WA(wholesaleWaMsg)} target="_blank" rel="noopener noreferrer"
              style={{ background: '#25d366', color: '#fff', padding: '.9rem 1.8rem', fontWeight: 700, textDecoration: 'none', fontSize: '.85rem', borderRadius: 4, display: 'inline-block', marginRight: '.8rem', marginBottom: '.8rem' }}>
              💬 {t.wholesaleCtaBtn}
            </a>
            <br />
            <a href={anaveraHref} style={{ color: '#D4B07A', fontSize: '.8rem', textDecoration: 'underline' }}>{t.wholesaleLinkText}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.5rem', color: '#1C1814', marginBottom: '1.5rem', textAlign: 'center' }}>{t.faqH}</h2>
          {t.faq.map(([q, a]: string[]) => (
            <details key={q} style={{ borderBottom: '1px solid rgba(44,74,62,.15)', padding: '1rem 0' }}>
              <summary style={{ cursor: 'pointer', fontSize: '.9rem', fontWeight: 600, color: '#1C1814' }}>{q}</summary>
              <p style={{ marginTop: '.7rem', fontSize: '.83rem', color: '#7A6E62', lineHeight: 1.7 }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ background: '#2C4A3E', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.6rem', color: '#fff', marginBottom: '.7rem' }}>{t.finalCta}</h2>
        <p style={{ color: 'rgba(255,255,255,.85)', marginBottom: '1.6rem', fontSize: '.9rem' }}>{t.finalSub}</p>
        <a href={WA(waMsg)} target="_blank" rel="noopener noreferrer"
          style={{ background: '#25d366', color: '#fff', padding: '1rem 2.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '.9rem', borderRadius: 4, display: 'inline-block' }}>
          💬 {t.waBtn}
        </a>
        <p style={{ color: 'rgba(255,255,255,.5)', marginTop: '1.2rem', fontSize: '.75rem' }}>{PHONE}</p>
      </section>
    </main>
  );
}
