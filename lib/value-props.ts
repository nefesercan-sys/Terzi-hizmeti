// lib/value-props.ts
// Slogan, rozet ve hazır WhatsApp mesajlarının TEK kaynağı (4 dil).
// Kural: burada gerçek olmayan hiçbir vaat yok (7/24, "2 dakikada fiyat", "24 saatte teslim"
// gibi süre garantileri çıkarıldı). Bir vaadi doğru yapabiliyorsan buraya yazabilirsin.

export type Lang = 'tr' | 'en' | 'de' | 'ru';

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
};

// Sayfaya özel hazır WhatsApp mesajı: o sayfadaki hizmete göre
const PAGE_MSG: { match: RegExp; msg: Record<Lang, string> }[] = [
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
  { match: /keten|linen|leinen|lyon/i, msg: {
    tr: 'Merhaba, keten/pamuk özel dikim için bilgi almak istiyorum.',
    en: 'Hello, I would like information about custom linen or cotton clothing.',
    de: 'Hallo, ich möchte Informationen zu maßgeschneiderter Leinen-/Baumwollkleidung.',
    ru: 'Здравствуйте, хочу узнать о пошиве из льна или хлопка.' } },
];

function VALUE_PROP_HOTEL(): Record<Lang, string> {
  return { tr: VALUE_PROPS.tr[1].waTemplate, en: VALUE_PROPS.en[1].waTemplate, de: VALUE_PROPS.de[1].waTemplate, ru: VALUE_PROPS.ru[1].waTemplate };
}

export function pageWaMessage(pathname: string, lang: Lang): string | null {
  for (const r of PAGE_MSG) if (r.match.test(pathname)) return r.msg[lang];
  return null;
}
