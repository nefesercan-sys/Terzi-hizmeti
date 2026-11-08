// terzihizmeti.com.tr — "Kargoyla fermuar değişimi" kutusu metinleri (10 dil).
// Kapsam: abiye/elbise ve mont/palto/kaban fermuarı. Sahip kararı: fiyat yazılmaz, "WhatsApp'tan netleştirilir".
// Kurallar: kargo yalnızca Antalya içi ve yurt dışı; kargo ücretini müşteri öder; güvence = kargo firması + bizim dikiş güvencemiz;
// süre "işin durumuna göre"; gün/dakika/mesafe sözü yok. Metinler tek yerden, birçok sayfaya girer.

export type KFLang = 'tr' | 'en' | 'ru' | 'de' | 'es' | 'fr' | 'pl' | 'uk' | 'nl' | 'ar';

export type KFCopy = {
  title: string;
  lead: string;
  items: string[];
  steps: string[];
  note: string;
  cta: string;
  wa: string;
  faqQ: string;
  faqA: string;
};

export const KARGO_FERMUAR: Record<KFLang, KFCopy> = {
  tr: {
    title: 'Fermuar değişimi kargoyla da yapılır',
    lead: 'Abiye, elbise, mont, palto ve kaban fermuarını kargoyla gönderebilirsiniz. Fermuarı değiştirir, kargoyla geri göndeririz.',
    items: ['Abiye ve elbise fermuarı', 'Mont, palto ve kaban fermuarı'],
    steps: [
      'WhatsApp’tan yazın, kıyafetin ve fermuarın fotoğrafını gönderin.',
      'Kıyafeti kargoyla bize gönderin, fermuarı değiştirelim.',
      'Hazır olunca kargoyla size geri gönderelim.',
    ],
    note: 'Kargo Antalya içi ve yurt dışı için geçerlidir. Kargo ücretini müşteri öder. Taşıma sırasında kargo firmasının güvencesi, işçilikte bizim dikiş güvencemiz geçerlidir. Süre işin durumuna göre değişir. Fiyat ve ayrıntılar WhatsApp’tan netleştirilir.',
    cta: 'WhatsApp’tan yazın',
    wa: 'Merhaba, kargoyla fermuar değişimi hakkında bilgi almak istiyorum.',
    faqQ: 'Fermuar değişimi kargoyla yapılır mı?',
    faqA: 'Evet. Abiye, elbise, mont, palto ve kaban fermuarını kargoyla gönderebilirsiniz; fermuarı değiştirip kargoyla geri gönderiyoruz. Kargo Antalya içi ve yurt dışı için geçerlidir, kargo ücretini müşteri öder. Fiyat ve ayrıntılar WhatsApp’tan netleştirilir.',
  },
  en: {
    title: 'Zipper replacement also by post',
    lead: 'You can send us the zipper job for an evening dress, a dress, a coat or a jacket by courier. We replace the zipper and send it back to you.',
    items: ['Evening dress and dress zippers', 'Coat, jacket and overcoat zippers'],
    steps: [
      'Message us on WhatsApp and send a photo of the garment and the zipper.',
      'Send the garment to us by courier and we replace the zipper.',
      'When it is ready we send it back to you by courier.',
    ],
    note: 'Shipping is available within Antalya and abroad. The customer pays the shipping fee. The carrier’s cover applies during transport, and our own sewing guarantee applies to the work. Timing depends on the job. Price and details are agreed on WhatsApp.',
    cta: 'Message us on WhatsApp',
    wa: 'Hello, I would like information about zipper replacement by courier.',
    faqQ: 'Can you replace a zipper if I send the garment by courier?',
    faqA: 'Yes. You can send an evening dress, dress, coat or jacket zipper job by courier; we replace the zipper and send the garment back. Shipping is available within Antalya and abroad and the customer pays the shipping fee. Price and details are agreed on WhatsApp.',
  },
  ru: {
    title: 'Замена молнии и по почте',
    lead: 'Вы можете отправить нам вечернее платье, платье, пальто или куртку курьером. Мы заменим молнию и вышлем вещь обратно.',
    items: ['Молнии на вечерних платьях и платьях', 'Молнии на куртках, пальто и верхней одежде'],
    steps: [
      'Напишите нам в WhatsApp и пришлите фото вещи и молнии.',
      'Отправьте вещь нам курьером, мы заменим молнию.',
      'Когда всё готово, отправим вещь обратно курьером.',
    ],
    note: 'Доставка возможна по Анталье и за границу. Стоимость доставки оплачивает клиент. При перевозке действует гарантия перевозчика, на работу — наша гарантия на шитьё. Срок зависит от работы. Цена и детали уточняются в WhatsApp.',
    cta: 'Написать в WhatsApp',
    wa: 'Здравствуйте, хочу узнать о замене молнии с отправкой курьером.',
    faqQ: 'Можно ли заменить молнию, если отправить вещь курьером?',
    faqA: 'Да. Вы можете отправить курьером вечернее платье, платье, пальто или куртку; мы заменим молнию и вышлем вещь обратно. Доставка возможна по Анталье и за границу, стоимость доставки оплачивает клиент. Цена и детали уточняются в WhatsApp.',
  },
  de: {
    title: 'Reißverschluss-Wechsel auch per Versand',
    lead: 'Sie können uns Abendkleid, Kleid, Mantel oder Jacke per Kurier schicken. Wir tauschen den Reißverschluss und schicken das Teil zurück.',
    items: ['Reißverschlüsse an Abendkleidern und Kleidern', 'Reißverschlüsse an Mänteln und Jacken'],
    steps: [
      'Schreiben Sie uns per WhatsApp und senden Sie ein Foto von Kleidungsstück und Reißverschluss.',
      'Senden Sie das Kleidungsstück per Kurier an uns, wir tauschen den Reißverschluss.',
      'Wenn es fertig ist, schicken wir es per Kurier zurück.',
    ],
    note: 'Der Versand ist innerhalb von Antalya und ins Ausland möglich. Die Versandkosten trägt der Kunde. Beim Transport gilt die Absicherung des Versanddienstleisters, für die Arbeit unsere Näh-Garantie. Die Dauer hängt vom Auftrag ab. Preis und Einzelheiten klären wir per WhatsApp.',
    cta: 'Per WhatsApp schreiben',
    wa: 'Hallo, ich möchte mich zum Reißverschluss-Wechsel per Versand informieren.',
    faqQ: 'Können Sie den Reißverschluss wechseln, wenn ich das Kleidungsstück per Kurier schicke?',
    faqA: 'Ja. Sie können Abendkleid, Kleid, Mantel oder Jacke per Kurier schicken; wir tauschen den Reißverschluss und senden das Teil zurück. Der Versand ist innerhalb von Antalya und ins Ausland möglich, die Versandkosten trägt der Kunde. Preis und Einzelheiten klären wir per WhatsApp.',
  },
  es: {
    title: 'Cambio de cremallera también por envío',
    lead: 'Puede enviarnos por mensajería un vestido de noche, un vestido, un abrigo o una chaqueta. Cambiamos la cremallera y se lo devolvemos.',
    items: ['Cremalleras de vestidos de noche y vestidos', 'Cremalleras de abrigos y chaquetas'],
    steps: [
      'Escríbanos por WhatsApp y envíe una foto de la prenda y de la cremallera.',
      'Envíenos la prenda por mensajería y cambiamos la cremallera.',
      'Cuando esté lista, se la devolvemos por mensajería.',
    ],
    note: 'El envío está disponible dentro de Antalya y al extranjero. El cliente paga el envío. Durante el transporte rige la cobertura de la empresa de mensajería y, para el trabajo, nuestra garantía de costura. El plazo depende del trabajo. El precio y los detalles se acuerdan por WhatsApp.',
    cta: 'Escribir por WhatsApp',
    wa: 'Hola, quiero información sobre el cambio de cremallera por envío.',
    faqQ: '¿Pueden cambiar la cremallera si envío la prenda por mensajería?',
    faqA: 'Sí. Puede enviar por mensajería un vestido de noche, un vestido, un abrigo o una chaqueta; cambiamos la cremallera y le devolvemos la prenda. El envío está disponible dentro de Antalya y al extranjero, y el cliente paga el envío. El precio y los detalles se acuerdan por WhatsApp.',
  },
  fr: {
    title: 'Remplacement de fermeture éclair aussi par envoi',
    lead: 'Vous pouvez nous envoyer par transporteur une robe de soirée, une robe, un manteau ou une veste. Nous remplaçons la fermeture éclair et nous vous le renvoyons.',
    items: ['Fermetures éclair de robes de soirée et de robes', 'Fermetures éclair de manteaux et de vestes'],
    steps: [
      'Écrivez-nous sur WhatsApp et envoyez une photo du vêtement et de la fermeture.',
      'Envoyez-nous le vêtement par transporteur, nous remplaçons la fermeture éclair.',
      'Quand il est prêt, nous vous le renvoyons par transporteur.',
    ],
    note: 'L’envoi est possible à Antalya et à l’étranger. Les frais d’envoi sont à la charge du client. Pendant le transport, la garantie du transporteur s’applique ; pour le travail, notre garantie de couture. Le délai dépend du travail. Le prix et les détails sont précisés sur WhatsApp.',
    cta: 'Écrire sur WhatsApp',
    wa: 'Bonjour, je souhaite des informations sur le remplacement de fermeture éclair par envoi.',
    faqQ: 'Pouvez-vous remplacer la fermeture éclair si j’envoie le vêtement par transporteur ?',
    faqA: 'Oui. Vous pouvez envoyer par transporteur une robe de soirée, une robe, un manteau ou une veste ; nous remplaçons la fermeture éclair et vous renvoyons le vêtement. L’envoi est possible à Antalya et à l’étranger, les frais d’envoi sont à la charge du client. Le prix et les détails sont précisés sur WhatsApp.',
  },
  pl: {
    title: 'Wymiana zamka także wysyłkowo',
    lead: 'Suknię wieczorową, sukienkę, płaszcz lub kurtkę możesz wysłać do nas kurierem. Wymienimy zamek i odeślemy rzecz do Ciebie.',
    items: ['Zamki w sukniach wieczorowych i sukienkach', 'Zamki w płaszczach i kurtkach'],
    steps: [
      'Napisz do nas na WhatsApp i wyślij zdjęcie ubrania oraz zamka.',
      'Wyślij nam ubranie kurierem, a my wymienimy zamek.',
      'Gdy będzie gotowe, odeślemy je kurierem.',
    ],
    note: 'Wysyłka jest możliwa w obrębie Antalyi i za granicę. Koszt wysyłki ponosi klient. W transporcie obowiązuje ochrona przewoźnika, a na wykonanie pracy nasza gwarancja krawiecka. Czas zależy od zlecenia. Cenę i szczegóły ustalamy na WhatsApp.',
    cta: 'Napisz na WhatsApp',
    wa: 'Dzień dobry, chcę dowiedzieć się o wymianie zamka z wysyłką.',
    faqQ: 'Czy wymienicie zamek, jeśli wyślę ubranie kurierem?',
    faqA: 'Tak. Suknię wieczorową, sukienkę, płaszcz lub kurtkę możesz wysłać kurierem; wymienimy zamek i odeślemy ubranie. Wysyłka jest możliwa w obrębie Antalyi i za granicę, koszt wysyłki ponosi klient. Cenę i szczegóły ustalamy na WhatsApp.',
  },
  uk: {
    title: 'Заміна блискавки також поштою',
    lead: 'Вечірню сукню, сукню, пальто чи куртку можна надіслати нам кур’єром. Ми замінимо блискавку й надішлемо річ назад.',
    items: ['Блискавки на вечірніх сукнях і сукнях', 'Блискавки на пальтах і куртках'],
    steps: [
      'Напишіть нам у WhatsApp і надішліть фото речі та блискавки.',
      'Надішліть річ нам кур’єром, ми замінимо блискавку.',
      'Коли буде готово, надішлемо річ назад кур’єром.',
    ],
    note: 'Доставка можлива по Анталії та за кордон. Вартість доставки сплачує клієнт. Під час перевезення діє гарантія перевізника, на роботу — наша гарантія на пошив. Строк залежить від роботи. Ціну та деталі уточнюємо у WhatsApp.',
    cta: 'Написати у WhatsApp',
    wa: 'Вітаю, хочу дізнатися про заміну блискавки з пересилкою.',
    faqQ: 'Чи можна замінити блискавку, якщо надіслати річ кур’єром?',
    faqA: 'Так. Вечірню сукню, сукню, пальто чи куртку можна надіслати кур’єром; ми замінимо блискавку й надішлемо річ назад. Доставка можлива по Анталії та за кордон, вартість доставки сплачує клієнт. Ціну та деталі уточнюємо у WhatsApp.',
  },
  nl: {
    title: 'Rits vervangen kan ook per verzending',
    lead: 'U kunt een avondjurk, jurk, jas of jack per koerier naar ons sturen. Wij vervangen de rits en sturen het terug.',
    items: ['Ritsen van avondjurken en jurken', 'Ritsen van jassen en jacks'],
    steps: [
      'Stuur ons een bericht via WhatsApp met een foto van het kledingstuk en de rits.',
      'Stuur het kledingstuk per koerier naar ons, wij vervangen de rits.',
      'Als het klaar is, sturen wij het per koerier terug.',
    ],
    note: 'Verzending is mogelijk binnen Antalya en naar het buitenland. De verzendkosten betaalt de klant. Tijdens het transport geldt de dekking van de vervoerder, voor het werk onze naaigarantie. De duur hangt af van het werk. Prijs en details bespreken we via WhatsApp.',
    cta: 'Stuur een bericht via WhatsApp',
    wa: 'Hallo, ik wil graag informatie over een rits vervangen met verzending.',
    faqQ: 'Kunnen jullie de rits vervangen als ik het kledingstuk per koerier stuur?',
    faqA: 'Ja. U kunt een avondjurk, jurk, jas of jack per koerier sturen; wij vervangen de rits en sturen het kledingstuk terug. Verzending is mogelijk binnen Antalya en naar het buitenland, de verzendkosten betaalt de klant. Prijs en details bespreken we via WhatsApp.',
  },
  ar: {
    title: 'استبدال السحّاب ممكن أيضًا عبر الشحن',
    lead: 'يمكنك إرسال فستان سهرة أو فستان أو معطف أو جاكيت إلينا عبر شركة شحن. نستبدل السحّاب ونعيد القطعة إليك.',
    items: ['سحّابات فساتين السهرة والفساتين', 'سحّابات المعاطف والجاكيتات'],
    steps: [
      'راسلنا على واتساب وأرسل صورة للقطعة والسحّاب.',
      'أرسل القطعة إلينا عبر الشحن ونحن نستبدل السحّاب.',
      'عندما تجهز نعيدها إليك عبر الشحن.',
    ],
    note: 'الشحن متاح داخل أنطاليا وإلى الخارج. يتحمّل العميل رسوم الشحن. أثناء النقل تسري حماية شركة الشحن، وعلى العمل ضمان الخياطة لدينا. تعتمد المدة على العمل. يُتّفق على السعر والتفاصيل عبر واتساب.',
    cta: 'راسلنا على واتساب',
    wa: 'مرحبًا، أريد معلومات عن استبدال السحّاب عبر الشحن.',
    faqQ: 'هل تستبدلون السحّاب إذا أرسلت القطعة عبر الشحن؟',
    faqA: 'نعم. يمكنك إرسال فستان سهرة أو فستان أو معطف أو جاكيت عبر الشحن؛ نستبدل السحّاب ونعيد القطعة إليك. الشحن متاح داخل أنطاليا وإلى الخارج، ويتحمّل العميل رسوم الشحن. يُتّفق على السعر والتفاصيل عبر واتساب.',
  },
};
