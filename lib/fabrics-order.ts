// terzihizmeti.com.tr — TR/EN/RU/DE ana hizmet sayfalarına eklenen "kumaşlar ve yurt dışı sipariş" bölümü.
// Kural (işletme sahibi, 29 Eki 2026): deri ve kot YALNIZCA tamir/tadilat; sıfırdan dikim keten, pamuk, penye, saten, ipek vb.
// Yurt dışı: ölçü online alınır, burada dikilir, istenen ülkeye gönderilir; ödeme banka havalesi; kargo ücreti müşteriye ait;
// kumaşı biz temin ederiz; uymazsa düzeltme yapılır; genelde 1–3 hafta. Fiyat YAZILMAZ.
export type FabricsLang = 'tr' | 'en' | 'ru' | 'de';

export const FABRICS_ORDER: Record<FabricsLang, {
  h: string; fabricsH: string; fabrics: string; leather: string;
  abroadH: string; abroadSteps: string[]; abroadNote: string;
}> = {
  tr: {
    h: 'Kumaşlar ve yurt dışı sipariş',
    fabricsH: 'Hangi kumaşlardan dikim yapıyoruz?',
    fabrics: 'Bay ve bayan elbise, abiye ve gece elbisesi dikimi, tamiri ve tadilatı: keten, pamuk, penye, saten ve ipek gibi kumaşlardan. Model tasarımı ve model üretimi de yapıyoruz; kişiye özel dikimin yanında seri imalat da var. Kumaşı biz temin ediyoruz.',
    leather: 'Deri ve kot: yalnızca tamir ve tadilat (kot paça kısaltma, deri ceket ve pantolon tamiri, daraltma, kısaltma, fermuar değişimi). Sıfırdan deri ya da kot dikimi yapmıyoruz.',
    abroadH: 'Yurt dışından sipariş nasıl verilir?',
    abroadSteps: ['WhatsApp\'tan modeli ve beden ölçülerinizi gönderin.', 'Dikimi Antalya\'daki atölyemizde yaparız.', 'İstediğiniz ülkeye kargolarız. Ödeme banka havalesiyle, kargo ücretini müşteri öder. Genellikle 1–3 hafta sürer.', 'Beden uymazsa düzeltme yaparız.'],
    abroadNote: 'Otelde kalıyorsanız ölçünüzü otelinizde alıp işi bitince otele teslim ediyoruz. Eve ve otele alım-teslim tüm bölgelerde ücretsizdir. Her gün 08:00–23:00.',
  },
  en: {
    h: 'Fabrics and orders from abroad',
    fabricsH: 'Which fabrics do we sew in?',
    fabrics: 'Women\'s and men\'s dresses, evening and gala dresses: made to measure, repaired and altered in linen, cotton, jersey (penye), satin and silk. We also design and produce models, and offer serial production alongside one-off custom tailoring. We supply the fabric.',
    leather: 'Leather and denim: repair and alteration only (hemming jeans, repairing or taking in leather jackets and trousers, shortening, zip replacement). We do not make new leather or denim garments.',
    abroadH: 'How to order from abroad',
    abroadSteps: ['Send us the model and your measurements on WhatsApp.', 'We sew the garment in our Antalya workshop.', 'We ship to the country you choose. Payment is by bank transfer and the customer pays shipping. It usually takes 1–3 weeks.', 'If it does not fit, we correct it.'],
    abroadNote: 'If you are staying in a hotel, we can take your measurements there and deliver the finished work back to the hotel. Hotel pickup and delivery are free in every area we serve. Open daily 08:00–23:00.',
  },
  ru: {
    h: 'Ткани и заказ из-за границы',
    fabricsH: 'Из каких тканей мы шьём?',
    fabrics: 'Женская и мужская одежда, вечерние и выпускные платья: пошив, ремонт и подгонка из льна, хлопка, трикотажа (пенье), атласа и шёлка. Мы также разрабатываем и производим модели, помимо индивидуального пошива есть серийное производство. Ткань мы обеспечиваем сами.',
    leather: 'Кожа и джинсы: только ремонт и подгонка (подшив джинсов, ремонт и ушивание кожаных курток и брюк, укорачивание, замена молний). Новые вещи из кожи или джинсовой ткани мы не шьём.',
    abroadH: 'Как заказать из-за границы',
    abroadSteps: ['Пришлите в WhatsApp модель и свои мерки.', 'Мы шьём вещь в нашей мастерской в Анталье.', 'Отправляем в выбранную вами страну. Оплата банковским переводом, доставку оплачивает клиент. Обычно это занимает 1–3 недели.', 'Если вещь не подошла, мы её исправим.'],
    abroadNote: 'Если вы живёте в отеле, мы снимем мерки в отеле и вернём готовую вещь туда же. Забор и доставка бесплатны во всех районах. Ежедневно 08:00–23:00.',
  },
  de: {
    h: 'Stoffe und Bestellungen aus dem Ausland',
    fabricsH: 'Aus welchen Stoffen nähen wir?',
    fabrics: 'Damen- und Herrenkleidung, Abend- und Gesellschaftskleider: Maßanfertigung, Reparatur und Änderung in Leinen, Baumwolle, Jersey (Penye), Satin und Seide. Wir entwerfen und fertigen auch Modelle, neben der Einzelanfertigung gibt es Serienproduktion. Den Stoff besorgen wir.',
    leather: 'Leder und Jeans: nur Reparatur und Änderung (Jeans kürzen, Lederjacken und -hosen reparieren oder enger machen, kürzen, Reißverschluss tauschen). Neue Kleidung aus Leder oder Jeansstoff nähen wir nicht.',
    abroadH: 'So bestellen Sie aus dem Ausland',
    abroadSteps: ['Senden Sie uns Modell und Körpermaße per WhatsApp.', 'Wir nähen das Stück in unserer Werkstatt in Antalya.', 'Wir versenden in das Land Ihrer Wahl. Zahlung per Banküberweisung, die Versandkosten trägt der Kunde. Dauer meist 1–3 Wochen.', 'Passt es nicht, korrigieren wir es.'],
    abroadNote: 'Wenn Sie im Hotel wohnen, nehmen wir dort Maß und bringen das fertige Stück zurück ins Hotel. Abholung und Lieferung im Hotel sind in allen Gebieten, die wir bedienen, kostenlos. Täglich 08:00–23:00.',
  },
};
