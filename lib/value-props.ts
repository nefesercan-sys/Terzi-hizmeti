// lib/value-props.ts
// Slogan, rozet ve hazır WhatsApp mesajlarının TEK kaynağı (10 dil; es/fr/pl/uk/nl/ar çevirileri ana dili konuşan biri tarafından gözden geçirilmelidir).
// Kural: burada gerçek olmayan hiçbir vaat yok (7/24, "2 dakikada fiyat", "1–2 günde teslim"
// gibi süre garantileri çıkarıldı). Bir vaadi doğru yapabiliyorsan buraya yazabilirsin.

export type Lang = 'tr' | 'en' | 'de' | 'ru' | 'es' | 'fr' | 'pl' | 'uk' | 'nl' | 'ar';
export const INTL6 = ['es', 'fr', 'pl', 'uk', 'nl', 'ar'] as const;

export interface ValueProp {
  id: 'photo-quote' | 'hotel' | 'doorstep';
  slogan: string;
  badge: string;
  actionText: string;
  waTemplate: string;
}

export const PHONE_E = '+905318986418';
export const waUrl = (text: string) => `https://wa.me/${PHONE_E.replace('+', '')}?text=${encodeURIComponent(text)}`;

export const VALUE_PROPS: Record<Lang, ValueProp[]> = {
  tr: [
    { id: 'photo-quote', slogan: "WhatsApp'tan resim at, hızlıca fiyat al", badge: 'Fotoğrafla Fiyat', actionText: 'Resim Gönder, Fiyat Sor',
      waTemplate: 'Merhaba, kıyafetimin fotoğrafını gönderiyorum. Yapılacak işlem için fiyat alabilir miyim?' },
    { id: 'hotel', slogan: 'Otele terzi çağır: ölçü ve prova yerinde', badge: 'Otele Gelen Terzi', actionText: 'Otele Terzi Çağır',
      waTemplate: 'Merhaba, kaldığım otele terzi çağırmak istiyorum. Otel adı ve konumu göndereyim.' },
    { id: 'doorstep', slogan: 'Adresten alıp adrese teslim terzi hizmeti', badge: 'Adrese Servis', actionText: 'Terzi Çağır',
      waTemplate: 'Merhaba, adresimden giysi alınıp tadilattan sonra adrese teslim edilmesini istiyorum.' },
  ],
  en: [
    { id: 'photo-quote', slogan: 'Send a photo on WhatsApp, get a quick quote', badge: 'Quote by Photo', actionText: 'Send Photo, Ask Price',
      waTemplate: 'Hello, I am sending a photo of my garment. Could you give me a price for the work needed?' },
    { id: 'hotel', slogan: 'Call a tailor to your hotel: fitting on the spot', badge: 'Hotel Tailor', actionText: 'Call a Tailor to My Hotel',
      waTemplate: 'Hello, I would like a tailor to visit my hotel in Antalya. I can send the hotel name and location.' },
    { id: 'doorstep', slogan: 'Doorstep pick-up and delivery tailor service', badge: 'Doorstep Service', actionText: 'Request Pick-up',
      waTemplate: 'Hello, I would like my garment picked up from my address and delivered back after the work is done.' },
  ],
  de: [
    { id: 'photo-quote', slogan: 'Foto per WhatsApp senden, schnell Preis erfahren', badge: 'Preis per Foto', actionText: 'Foto senden, Preis fragen',
      waTemplate: 'Hallo, ich sende ein Foto meines Kleidungsstücks. Können Sie mir einen Preis für die Arbeit nennen?' },
    { id: 'hotel', slogan: 'Schneider ins Hotel bestellen: Anprobe vor Ort', badge: 'Hotel-Schneider', actionText: 'Schneider ins Hotel',
      waTemplate: 'Hallo, ich möchte einen Schneider in mein Hotel in Antalya bestellen. Hotelname und Standort sende ich Ihnen.' },
    { id: 'doorstep', slogan: 'Abhol- und Lieferservice direkt an Ihre Adresse', badge: 'Lieferservice', actionText: 'Abholung anfragen',
      waTemplate: 'Hallo, ich möchte mein Kleidungsstück an meiner Adresse abholen und nach der Änderung zurückliefern lassen.' },
  ],
  ru: [
    { id: 'photo-quote', slogan: 'Пришлите фото в WhatsApp: быстро назовём цену', badge: 'Цена по фото', actionText: 'Отправить фото',
      waTemplate: 'Здравствуйте, отправляю фото одежды. Подскажите стоимость нужной работы?' },
    { id: 'hotel', slogan: 'Вызов портного в отель: примерка на месте', badge: 'Портной в отель', actionText: 'Вызвать портного в отель',
      waTemplate: 'Здравствуйте, хочу вызвать портного в мой отель в Анталье. Отправлю название отеля и локацию.' },
    { id: 'doorstep', slogan: 'Заберём одежду и вернём по вашему адресу', badge: 'Выездной сервис', actionText: 'Заказать забор вещей',
      waTemplate: 'Здравствуйте, хочу, чтобы одежду забрали с моего адреса и вернули после ремонта.' },
  ],
  es: [
    { id: 'photo-quote', slogan: 'Envíe una foto por WhatsApp y le decimos el precio', badge: 'Precio por foto', actionText: 'Enviar foto, pedir precio',
      waTemplate: 'Hola, le envío una foto de mi prenda. ¿Puede indicarme el precio del arreglo necesario?' },
    { id: 'hotel', slogan: 'Llame a un sastre a su hotel: prueba en el lugar', badge: 'Sastre al hotel', actionText: 'Sastre a mi hotel',
      waTemplate: 'Hola, quiero que un sastre venga a mi hotel en Antalya. Le envío el nombre y la ubicación.' },
    { id: 'doorstep', slogan: 'Recogida y entrega de la prenda en su dirección', badge: 'Servicio a domicilio', actionText: 'Pedir recogida',
      waTemplate: 'Hola, quiero que recojan mi prenda en mi dirección y me la entreguen después del arreglo.' },
  ],
  fr: [
    { id: 'photo-quote', slogan: 'Envoyez une photo sur WhatsApp, recevez le prix', badge: 'Prix sur photo', actionText: 'Envoyer la photo',
      waTemplate: 'Bonjour, je vous envoie une photo de mon vêtement. Pouvez-vous m\'indiquer le prix de la retouche ?' },
    { id: 'hotel', slogan: 'Un tailleur à votre hôtel : essayage sur place', badge: 'Tailleur à l\'hôtel', actionText: 'Tailleur à mon hôtel',
      waTemplate: 'Bonjour, je souhaite qu\'un tailleur vienne à mon hôtel à Antalya. Je vous envoie le nom et l\'adresse.' },
    { id: 'doorstep', slogan: 'Collecte et livraison du vêtement à votre adresse', badge: 'Service à domicile', actionText: 'Demander la collecte',
      waTemplate: 'Bonjour, je souhaite que mon vêtement soit collecté à mon adresse puis livré après la retouche.' },
  ],
  pl: [
    { id: 'photo-quote', slogan: 'Wyślij zdjęcie na WhatsApp, podamy cenę', badge: 'Cena po zdjęciu', actionText: 'Wyślij zdjęcie',
      waTemplate: 'Dzień dobry, wysyłam zdjęcie mojej odzieży. Jaka będzie cena poprawki?' },
    { id: 'hotel', slogan: 'Krawiec w Twoim hotelu: przymiarka na miejscu', badge: 'Krawiec do hotelu', actionText: 'Krawiec do mojego hotelu',
      waTemplate: 'Dzień dobry, chcę wezwać krawca do mojego hotelu w Antalyi. Wyślę nazwę i lokalizację.' },
    { id: 'doorstep', slogan: 'Odbiór i dostawa odzieży pod Twój adres', badge: 'Serwis pod adres', actionText: 'Zamów odbiór',
      waTemplate: 'Dzień dobry, chcę, aby odzież została odebrana z mojego adresu i dostarczona po poprawce.' },
  ],
  uk: [
    { id: 'photo-quote', slogan: 'Надішліть фото у WhatsApp: швидко назвемо ціну', badge: 'Ціна за фото', actionText: 'Надіслати фото',
      waTemplate: 'Добрий день, надсилаю фото одягу. Скільки коштуватиме потрібна робота?' },
    { id: 'hotel', slogan: 'Кравець до вашого готелю: примірка на місці', badge: 'Кравець до готелю', actionText: 'Кравець до мого готелю',
      waTemplate: 'Добрий день, хочу викликати кравця до мого готелю в Анталії. Надішлю назву та локацію.' },
    { id: 'doorstep', slogan: 'Заберемо одяг і повернемо за вашою адресою', badge: 'Виїзний сервіс', actionText: 'Замовити забір речей',
      waTemplate: 'Добрий день, хочу, щоб одяг забрали з моєї адреси та повернули після переробки.' },
  ],
  nl: [
    { id: 'photo-quote', slogan: 'Stuur een foto via WhatsApp en ontvang snel een prijs', badge: 'Prijs via foto', actionText: 'Foto sturen, prijs vragen',
      waTemplate: 'Hallo, ik stuur een foto van mijn kledingstuk. Wat kost de benodigde aanpassing?' },
    { id: 'hotel', slogan: 'Kleermaker naar uw hotel: passen ter plaatse', badge: 'Kleermaker aan huis (hotel)', actionText: 'Kleermaker naar mijn hotel',
      waTemplate: 'Hallo, ik wil een kleermaker laten komen naar mijn hotel in Antalya. Ik stuur de hotelnaam en locatie.' },
    { id: 'doorstep', slogan: 'Ophalen en terugbezorgen op uw adres', badge: 'Ophaalservice', actionText: 'Ophalen aanvragen',
      waTemplate: 'Hallo, ik wil dat mijn kledingstuk op mijn adres wordt opgehaald en na de aanpassing wordt teruggebracht.' },
  ],
  ar: [
    { id: 'photo-quote', slogan: 'أرسل صورة عبر واتساب واعرف السعر بسرعة', badge: 'السعر بالصورة', actionText: 'أرسل الصورة واسأل عن السعر',
      waTemplate: 'مرحباً، أرسل صورة لملابسي. هل يمكنكم إخباري بسعر التعديل المطلوب؟' },
    { id: 'hotel', slogan: 'خياط إلى فندقك: القياس في مكانك', badge: 'خياط إلى الفندق', actionText: 'اطلب خياطاً إلى فندقي',
      waTemplate: 'مرحباً، أريد استدعاء خياط إلى فندقي في أنطاليا. سأرسل اسم الفندق وموقعه.' },
    { id: 'doorstep', slogan: 'استلام الملابس وتسليمها إلى عنوانك', badge: 'خدمة التوصيل', actionText: 'اطلب الاستلام',
      waTemplate: 'مرحباً، أريد استلام ملابسي من عنواني وتسليمها بعد التعديل.' },
  ],
};

// 3 adımlı basit akış (süre sözü yok)
export const STEPS: Record<Lang, { heading: string; steps: { title: string; desc: string }[]; cta: string }> = {
  tr: { heading: 'Nasıl çalışır?', cta: "WhatsApp'tan Başla",
    steps: [
      { title: 'Fotoğraf gönder', desc: "Giysinin ve yapılacak işlemin fotoğrafını WhatsApp'tan atın." },
      { title: 'Fiyat bilgisi al', desc: 'İşe göre fiyatı ve teslim süresini size bildirelim.' },
      { title: 'Teslim al', desc: 'Atölyeden alın ya da adrese/otele teslim için bize yazın.' },
    ] },
  en: { heading: 'How it works', cta: 'Start on WhatsApp',
    steps: [
      { title: 'Send a photo', desc: 'Send a photo of the garment and the work needed on WhatsApp.' },
      { title: 'Get the price', desc: 'We reply with the price and turnaround for the job.' },
      { title: 'Receive it', desc: 'Pick it up at the workshop, or ask for delivery to your hotel or address.' },
    ] },
  de: { heading: "So funktioniert's", cta: 'Per WhatsApp starten',
    steps: [
      { title: 'Foto senden', desc: 'Senden Sie per WhatsApp ein Foto des Kleidungsstücks und der gewünschten Arbeit.' },
      { title: 'Preis erhalten', desc: 'Wir nennen Ihnen Preis und Bearbeitungszeit für die Arbeit.' },
      { title: 'Entgegennehmen', desc: 'In der Werkstatt abholen oder Lieferung ins Hotel bzw. an Ihre Adresse anfragen.' },
    ] },
  ru: { heading: 'Как это работает', cta: 'Начать в WhatsApp',
    steps: [
      { title: 'Отправьте фото', desc: 'Пришлите в WhatsApp фото вещи и нужной работы.' },
      { title: 'Узнайте цену', desc: 'Мы ответим стоимостью и сроком выполнения.' },
      { title: 'Получите вещь', desc: 'Заберите в ателье или закажите доставку в отель или по адресу.' },
    ] },
  es: { heading: 'Cómo funciona', cta: 'Empezar por WhatsApp',
    steps: [
      { title: 'Envíe una foto', desc: 'Envíe por WhatsApp una foto de la prenda y del arreglo que necesita.' },
      { title: 'Reciba el precio', desc: 'Le respondemos con el precio y el plazo del trabajo.' },
      { title: 'Recíbala', desc: 'Recójala en el taller o pida la entrega en su hotel o dirección.' },
    ] },
  fr: { heading: 'Comment ça marche', cta: 'Commencer sur WhatsApp',
    steps: [
      { title: 'Envoyez une photo', desc: 'Envoyez sur WhatsApp une photo du vêtement et de la retouche souhaitée.' },
      { title: 'Recevez le prix', desc: 'Nous vous répondons avec le prix et le délai du travail.' },
      { title: 'Récupérez-le', desc: 'Passez le chercher à l\'atelier ou demandez la livraison à votre hôtel ou adresse.' },
    ] },
  pl: { heading: 'Jak to działa', cta: 'Zacznij na WhatsApp',
    steps: [
      { title: 'Wyślij zdjęcie', desc: 'Wyślij na WhatsApp zdjęcie odzieży i potrzebnej poprawki.' },
      { title: 'Poznaj cenę', desc: 'Odpowiemy z ceną i terminem wykonania.' },
      { title: 'Odbierz', desc: 'Odbierz w pracowni albo poproś o dostawę do hotelu lub pod adres.' },
    ] },
  uk: { heading: 'Як це працює', cta: 'Почати у WhatsApp',
    steps: [
      { title: 'Надішліть фото', desc: 'Надішліть у WhatsApp фото речі та потрібної роботи.' },
      { title: 'Дізнайтеся ціну', desc: 'Ми відповімо ціною та строком виконання.' },
      { title: 'Отримайте річ', desc: 'Заберіть в ательє або замовте доставку до готелю чи за адресою.' },
    ] },
  nl: { heading: 'Hoe werkt het', cta: 'Start via WhatsApp',
    steps: [
      { title: 'Stuur een foto', desc: 'Stuur via WhatsApp een foto van het kledingstuk en de gewenste aanpassing.' },
      { title: 'Ontvang de prijs', desc: 'Wij antwoorden met de prijs en de doorlooptijd.' },
      { title: 'Ontvang het', desc: 'Haal het op in het atelier of vraag levering aan uw hotel of adres.' },
    ] },
  ar: { heading: 'كيف تعمل الخدمة', cta: 'ابدأ عبر واتساب',
    steps: [
      { title: 'أرسل صورة', desc: 'أرسل عبر واتساب صورة للقطعة والتعديل المطلوب.' },
      { title: 'اعرف السعر', desc: 'نرد عليك بالسعر ومدة التنفيذ.' },
      { title: 'استلم القطعة', desc: 'استلمها من الورشة أو اطلب التوصيل إلى فندقك أو عنوانك.' },
    ] },
};

// Sayfaya özel hazır WhatsApp mesajı: o sayfadaki hizmete göre
const PAGE_MSG: { match: RegExp; msg: Partial<Record<Lang, string>> }[] = [
  // Turist ekspres tadilat sayfaları (en: tourist-clothing-alterations, de: kleidung-aendern-urlaub, ru: podgonka-odezhdy-turistam)
  { match: /tourist-clothing-alterations|kleidung-aendern-urlaub|podgonka-odezhdy-turistam/i, msg: {
    tr: 'Merhaba, turistim; satın aldığım kıyafet için tadilat gerekiyor. Fotoğraf gönderiyorum, acil mi, fiyat nedir?',
    en: 'Hello, I bought clothes in Antalya and need an alteration. I am sending a photo. Is it urgent? What is the price?',
    de: 'Hallo, ich habe in Antalya Kleidung gekauft und brauche eine Änderung. Ich sende ein Foto. Ist es eilig? Was kostet es?',
    ru: 'Здравствуйте, купил(а) одежду в Анталье, нужна подгонка. Отправляю фото. Это срочно? Сколько стоит?' } },
  // Keten/pamuk özel dikim: ürün sayfalarında 'trousers/hose/bryuk' geçtiği için paça kısaltma kuralından ÖNCE gelmeli
  { match: /keten|linen|leinen|lyon|lnyan/i, msg: {
    tr: 'Merhaba, keten/pamuk özel dikim için bilgi almak istiyorum.',
    en: 'Hello, I am visiting Antalya and would like something made in linen or cotton. Could you tell me the price and timing?',
    de: 'Hallo, ich bin in Antalya und möchte etwas aus Leinen/Baumwolle nach Maß anfertigen lassen. Preis und Zeitplan?',
    ru: 'Здравствуйте, я в Анталье и хочу заказать пошив из льна/хлопка. Подскажите цену и сроки?' } },
  { match: /paca|hemming|trouser|hose|bryuk|ukoroch/i, msg: {
    tr: 'Merhaba, paça kısaltma için fotoğraf gönderiyorum. Fiyat nedir?',
    en: 'Hello, I am sending a photo for trouser hemming. What is the price?',
    de: 'Hallo, ich sende ein Foto zum Kürzen einer Hose. Was kostet das?',
    ru: 'Здравствуйте, отправляю фото для подшива брюк. Сколько стоит?' } },
  { match: /fermuar|zipper|reissverschluss|molni/i, msg: {
    tr: 'Merhaba, fermuar tamiri/değişimi için fotoğraf gönderiyorum. Fiyat nedir?',
    en: 'Hello, I am sending a photo for a zipper repair or replacement. What is the price?',
    de: 'Hallo, ich sende ein Foto für eine Reißverschluss-Reparatur. Was kostet das?',
    ru: 'Здравствуйте, отправляю фото для замены молнии. Сколько стоит?' } },
  { match: /gelinlik|wedding|brautkleid|svadeb/i, msg: {
    tr: 'Merhaba, gelinlik/abiye tadilatı için fotoğraf gönderiyorum. Bilgi alabilir miyim?',
    en: 'Hello, I am sending photos for a wedding or evening dress alteration. Could you advise?',
    de: 'Hallo, ich sende Fotos für eine Brautkleid-Änderung. Können Sie mich beraten?',
    ru: 'Здравствуйте, отправляю фото для переделки свадебного платья. Можете проконсультировать?' } },
  { match: /uniforma|uniform/i, msg: {
    tr: 'Merhaba, üniforma imalatı için bilgi almak istiyorum.',
    en: 'Hello, I would like information about uniform production.',
    de: 'Hallo, ich möchte Informationen zur Uniformfertigung.',
    ru: 'Здравствуйте, хочу узнать о пошиве униформы.' } },
  { match: /otel|hotel|vyezdnoy/i, msg: VALUE_PROP_HOTEL() },
];

function VALUE_PROP_HOTEL(): Partial<Record<Lang, string>> {
  return Object.fromEntries((Object.keys(VALUE_PROPS) as Lang[]).map((l) => [l, VALUE_PROPS[l][1].waTemplate]));
}

export function pageWaMessage(pathname: string, lang: Lang): string | null {
  for (const r of PAGE_MSG) if (r.match.test(pathname)) return r.msg[lang] ?? null;
  return null;
}
