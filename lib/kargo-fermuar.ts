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
  more: string;
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
    more: 'İsterseniz diğer tamir ve tadilat işleri de WhatsApp’tan görüşülerek kargoyla yapılabilir.',
    note: 'Kargo Antalya içi ve yurt dışı için geçerlidir. Kargo ücretini müşteri öder. Taşıma sırasında kargo firmasının güvencesi, işçilikte bizim dikiş güvencemiz geçerlidir. Süre işin durumuna göre değişir. Fiyat ve ayrıntılar WhatsApp’tan netleştirilir.',
    cta: 'WhatsApp’tan yazın',
    wa: 'Merhaba, kargoyla fermuar değişimi hakkında bilgi almak istiyorum.',
    faqQ: 'Fermuar ve diğer tamir/tadilat işleri kargoyla yapılır mı?',
    faqA: 'Evet. Abiye, elbise, mont, palto ve kaban fermuarını kargoyla gönderebilirsiniz; fermuarı değiştirip kargoyla geri gönderiyoruz. Kargo Antalya içi ve yurt dışı için geçerlidir, kargo ücretini müşteri öder. Fiyat ve ayrıntılar WhatsApp’tan netleştirilir. İsterseniz diğer tamir ve tadilat işleri de WhatsApp’tan görüşülerek kargoyla yapılabilir.',
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
    more: 'If you like, other repair and alteration jobs can also be done by courier once we agree the details on WhatsApp.',
    note: 'Shipping is available within Antalya and abroad. The customer pays the shipping fee. The carrier’s cover applies during transport, and our own sewing guarantee applies to the work. Timing depends on the job. Price and details are agreed on WhatsApp.',
    cta: 'Message us on WhatsApp',
    wa: 'Hello, I would like information about zipper replacement by courier.',
    faqQ: 'Can zipper and other repair or alteration jobs be done by courier?',
    faqA: 'Yes. You can send an evening dress, dress, coat or jacket zipper job by courier; we replace the zipper and send the garment back. Shipping is available within Antalya and abroad and the customer pays the shipping fee. Price and details are agreed on WhatsApp. If you like, other repair and alteration jobs can also be done by courier once we agree the details on WhatsApp.',
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
    more: 'При желании другие работы по ремонту и подгонке тоже можно выполнить с отправкой курьером, детали обсуждаем в WhatsApp.',
    note: 'Доставка возможна по Анталье и за границу. Стоимость доставки оплачивает клиент. При перевозке действует гарантия перевозчика, на работу — наша гарантия на шитьё. Срок зависит от работы. Цена и детали уточняются в WhatsApp.',
    cta: 'Написать в WhatsApp',
    wa: 'Здравствуйте, хочу узнать о замене молнии с отправкой курьером.',
    faqQ: 'Можно ли выполнить замену молнии и другие работы по ремонту и подгонке с отправкой курьером?',
    faqA: 'Да. Вы можете отправить курьером вечернее платье, платье, пальто или куртку; мы заменим молнию и вышлем вещь обратно. Доставка возможна по Анталье и за границу, стоимость доставки оплачивает клиент. Цена и детали уточняются в WhatsApp. При желании другие работы по ремонту и подгонке тоже можно выполнить с отправкой курьером, детали обсуждаем в WhatsApp.',
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
    more: 'Auf Wunsch lassen sich auch andere Reparatur- und Änderungsarbeiten per Versand erledigen; die Einzelheiten besprechen wir per WhatsApp.',
    note: 'Der Versand ist innerhalb von Antalya und ins Ausland möglich. Die Versandkosten trägt der Kunde. Beim Transport gilt die Absicherung des Versanddienstleisters, für die Arbeit unsere Näh-Garantie. Die Dauer hängt vom Auftrag ab. Preis und Einzelheiten klären wir per WhatsApp.',
    cta: 'Per WhatsApp schreiben',
    wa: 'Hallo, ich möchte mich zum Reißverschluss-Wechsel per Versand informieren.',
    faqQ: 'Lassen sich Reißverschluss-Wechsel und andere Reparaturen oder Änderungen per Versand erledigen?',
    faqA: 'Ja. Sie können Abendkleid, Kleid, Mantel oder Jacke per Kurier schicken; wir tauschen den Reißverschluss und senden das Teil zurück. Der Versand ist innerhalb von Antalya und ins Ausland möglich, die Versandkosten trägt der Kunde. Preis und Einzelheiten klären wir per WhatsApp. Auf Wunsch lassen sich auch andere Reparatur- und Änderungsarbeiten per Versand erledigen; die Einzelheiten besprechen wir per WhatsApp.',
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
    more: 'Si lo desea, otros arreglos y reparaciones también pueden hacerse por envío, acordando los detalles por WhatsApp.',
    note: 'El envío está disponible dentro de Antalya y al extranjero. El cliente paga el envío. Durante el transporte rige la cobertura de la empresa de mensajería y, para el trabajo, nuestra garantía de costura. El plazo depende del trabajo. El precio y los detalles se acuerdan por WhatsApp.',
    cta: 'Escribir por WhatsApp',
    wa: 'Hola, quiero información sobre el cambio de cremallera por envío.',
    faqQ: '¿Se pueden hacer por envío el cambio de cremallera y otros arreglos o reparaciones?',
    faqA: 'Sí. Puede enviar por mensajería un vestido de noche, un vestido, un abrigo o una chaqueta; cambiamos la cremallera y le devolvemos la prenda. El envío está disponible dentro de Antalya y al extranjero, y el cliente paga el envío. El precio y los detalles se acuerdan por WhatsApp. Si lo desea, otros arreglos y reparaciones también pueden hacerse por envío, acordando los detalles por WhatsApp.',
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
    more: 'Si vous le souhaitez, d’autres retouches et réparations peuvent aussi se faire par envoi, après discussion sur WhatsApp.',
    note: 'L’envoi est possible à Antalya et à l’étranger. Les frais d’envoi sont à la charge du client. Pendant le transport, la garantie du transporteur s’applique ; pour le travail, notre garantie de couture. Le délai dépend du travail. Le prix et les détails sont précisés sur WhatsApp.',
    cta: 'Écrire sur WhatsApp',
    wa: 'Bonjour, je souhaite des informations sur le remplacement de fermeture éclair par envoi.',
    faqQ: 'Le remplacement de fermeture éclair et les autres retouches ou réparations peuvent-ils se faire par envoi ?',
    faqA: 'Oui. Vous pouvez envoyer par transporteur une robe de soirée, une robe, un manteau ou une veste ; nous remplaçons la fermeture éclair et vous renvoyons le vêtement. L’envoi est possible à Antalya et à l’étranger, les frais d’envoi sont à la charge du client. Le prix et les détails sont précisés sur WhatsApp. Si vous le souhaitez, d’autres retouches et réparations peuvent aussi se faire par envoi, après discussion sur WhatsApp.',
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
    more: 'Jeśli chcesz, inne naprawy i przeróbki również można zrealizować wysyłkowo po ustaleniu szczegółów na WhatsApp.',
    note: 'Wysyłka jest możliwa w obrębie Antalyi i za granicę. Koszt wysyłki ponosi klient. W transporcie obowiązuje ochrona przewoźnika, a na wykonanie pracy nasza gwarancja krawiecka. Czas zależy od zlecenia. Cenę i szczegóły ustalamy na WhatsApp.',
    cta: 'Napisz na WhatsApp',
    wa: 'Dzień dobry, chcę dowiedzieć się o wymianie zamka z wysyłką.',
    faqQ: 'Czy wymiana zamka i inne naprawy lub przeróbki mogą być wykonane wysyłkowo?',
    faqA: 'Tak. Suknię wieczorową, sukienkę, płaszcz lub kurtkę możesz wysłać kurierem; wymienimy zamek i odeślemy ubranie. Wysyłka jest możliwa w obrębie Antalyi i za granicę, koszt wysyłki ponosi klient. Cenę i szczegóły ustalamy na WhatsApp. Jeśli chcesz, inne naprawy i przeróbki również można zrealizować wysyłkowo po ustaleniu szczegółów na WhatsApp.',
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
    more: 'За бажання інші роботи з ремонту та підгонки теж можна виконати з пересилкою, деталі узгоджуємо у WhatsApp.',
    note: 'Доставка можлива по Анталії та за кордон. Вартість доставки сплачує клієнт. Під час перевезення діє гарантія перевізника, на роботу — наша гарантія на пошив. Строк залежить від роботи. Ціну та деталі уточнюємо у WhatsApp.',
    cta: 'Написати у WhatsApp',
    wa: 'Вітаю, хочу дізнатися про заміну блискавки з пересилкою.',
    faqQ: 'Чи можна виконати заміну блискавки та інші роботи з ремонту й підгонки з пересилкою?',
    faqA: 'Так. Вечірню сукню, сукню, пальто чи куртку можна надіслати кур’єром; ми замінимо блискавку й надішлемо річ назад. Доставка можлива по Анталії та за кордон, вартість доставки сплачує клієнт. Ціну та деталі уточнюємо у WhatsApp. За бажання інші роботи з ремонту та підгонки теж можна виконати з пересилкою, деталі узгоджуємо у WhatsApp.',
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
    more: 'Als u wilt, kunnen ook andere reparaties en vermaakwerkzaamheden per verzending, na overleg via WhatsApp.',
    note: 'Verzending is mogelijk binnen Antalya en naar het buitenland. De verzendkosten betaalt de klant. Tijdens het transport geldt de dekking van de vervoerder, voor het werk onze naaigarantie. De duur hangt af van het werk. Prijs en details bespreken we via WhatsApp.',
    cta: 'Stuur een bericht via WhatsApp',
    wa: 'Hallo, ik wil graag informatie over een rits vervangen met verzending.',
    faqQ: 'Kunnen een rits vervangen en andere reparaties of vermaakwerk per verzending?',
    faqA: 'Ja. U kunt een avondjurk, jurk, jas of jack per koerier sturen; wij vervangen de rits en sturen het kledingstuk terug. Verzending is mogelijk binnen Antalya en naar het buitenland, de verzendkosten betaalt de klant. Prijs en details bespreken we via WhatsApp. Als u wilt, kunnen ook andere reparaties en vermaakwerkzaamheden per verzending, na overleg via WhatsApp.',
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
    more: 'إن رغبت، يمكن أيضًا تنفيذ أعمال الإصلاح والتعديل الأخرى عبر الشحن بعد الاتفاق على التفاصيل عبر واتساب.',
    note: 'الشحن متاح داخل أنطاليا وإلى الخارج. يتحمّل العميل رسوم الشحن. أثناء النقل تسري حماية شركة الشحن، وعلى العمل ضمان الخياطة لدينا. تعتمد المدة على العمل. يُتّفق على السعر والتفاصيل عبر واتساب.',
    cta: 'راسلنا على واتساب',
    wa: 'مرحبًا، أريد معلومات عن استبدال السحّاب عبر الشحن.',
    faqQ: 'هل يمكن استبدال السحّاب وأعمال الإصلاح والتعديل الأخرى عبر الشحن؟',
    faqA: 'نعم. يمكنك إرسال فستان سهرة أو فستان أو معطف أو جاكيت عبر الشحن؛ نستبدل السحّاب ونعيد القطعة إليك. الشحن متاح داخل أنطاليا وإلى الخارج، ويتحمّل العميل رسوم الشحن. يُتّفق على السعر والتفاصيل عبر واتساب. إن رغبت، يمكن أيضًا تنفيذ أعمال الإصلاح والتعديل الأخرى عبر الشحن بعد الاتفاق على التفاصيل عبر واتساب.',
  },
};

// ── Kısa varyant: işin kendi sayfasında tek cümle ('Dilerseniz bu işlemi kargoyla da yaptırabilirsiniz'). {w} = işin adı. ──
// Fiyat yok; kurallar aynı: Antalya içi ve yurt dışı, kargo ücreti müşteriye ait, ayrıntı WhatsApp'tan. Dikim sayfalarında kullanılmaz.
export const KARGO_KISA: Record<KFLang, { v: [string, string]; link: string }> = {
  tr: { v: [
    '{w}: dilerseniz bu işlemi WhatsApp’tan görüşerek kargoyla da yaptırabilirsiniz (Antalya içi ve yurt dışı; kargo ücreti müşteriye aittir, fiyat ve ayrıntılar WhatsApp’tan).',
    'Uzakta mısınız? {w} için kıyafetinizi kargoyla gönderebilirsiniz; Antalya içi ve yurt dışı için WhatsApp’tan görüşürüz, kargo ücretini müşteri öder.',
  ], link: 'Kargoyla hizmet' },
  en: { v: [
    '{w}: if you like, you can also have this done by courier after agreeing the details on WhatsApp (within Antalya and abroad; the customer pays the shipping fee).',
    'Not in Antalya? For {w} you can send the garment by courier; we agree price and details on WhatsApp, within Antalya and abroad, and the customer pays shipping.',
  ], link: 'Service by courier' },
  ru: { v: [
    '{w}: при желании эту работу можно выполнить и с отправкой курьером после обсуждения в WhatsApp (по Анталье и за границу; доставку оплачивает клиент).',
    'Вы далеко? Для работы «{w}» можно отправить вещь курьером; цену и детали уточняем в WhatsApp, по Анталье и за границу, доставку оплачивает клиент.',
  ], link: 'Услуга с отправкой курьером' },
  de: { v: [
    '{w}: Auf Wunsch können Sie diese Arbeit nach Absprache per WhatsApp auch per Versand erledigen lassen (innerhalb Antalyas und ins Ausland; die Versandkosten trägt der Kunde).',
    'Nicht in Antalya? Für „{w}“ können Sie das Teil per Kurier schicken; Preis und Einzelheiten klären wir per WhatsApp, innerhalb Antalyas und ins Ausland, die Versandkosten trägt der Kunde.',
  ], link: 'Service per Versand' },
  es: { v: [
    '{w}: si lo desea, también puede encargar este trabajo por envío, tras acordarlo por WhatsApp (dentro de Antalya y al extranjero; el cliente paga el envío).',
    '¿No está en Antalya? Para «{w}» puede enviar la prenda por mensajería; precio y detalles se acuerdan por WhatsApp, dentro de Antalya y al extranjero, y el cliente paga el envío.',
  ], link: 'Servicio por envío' },
  fr: { v: [
    '{w} : si vous le souhaitez, vous pouvez aussi confier ce travail par envoi, après accord sur WhatsApp (à Antalya et à l’étranger ; les frais d’envoi sont à la charge du client).',
    'Vous n’êtes pas à Antalya ? Pour « {w} », vous pouvez envoyer le vêtement par transporteur ; prix et détails sont précisés sur WhatsApp, à Antalya et à l’étranger, frais d’envoi à la charge du client.',
  ], link: 'Service par envoi' },
  pl: { v: [
    '{w}: jeśli chcesz, możesz zlecić tę pracę także wysyłkowo, po ustaleniu na WhatsApp (w obrębie Antalyi i za granicę; koszt wysyłki ponosi klient).',
    'Nie jesteś w Antalyi? Przy „{w}” możesz wysłać ubranie kurierem; cenę i szczegóły ustalamy na WhatsApp, w obrębie Antalyi i za granicę, koszt wysyłki ponosi klient.',
  ], link: 'Usługa wysyłkowa' },
  uk: { v: [
    '{w}: за бажання цю роботу можна замовити й із пересилкою, після узгодження у WhatsApp (по Анталії та за кордон; вартість доставки сплачує клієнт).',
    'Ви не в Анталії? Для «{w}» можна надіслати річ кур’єром; ціну та деталі уточнюємо у WhatsApp, по Анталії та за кордон, доставку сплачує клієнт.',
  ], link: 'Послуга з пересилкою' },
  nl: { v: [
    '{w}: als u wilt, kunt u dit werk ook per verzending laten doen, na overleg via WhatsApp (binnen Antalya en naar het buitenland; de verzendkosten betaalt de klant).',
    'Niet in Antalya? Voor “{w}” kunt u het kledingstuk per koerier sturen; prijs en details bespreken we via WhatsApp, binnen Antalya en naar het buitenland, verzendkosten voor de klant.',
  ], link: 'Service per verzending' },
  ar: { v: [
    '{w}: إن رغبت، يمكنك تنفيذ هذا العمل عبر الشحن أيضًا بعد الاتفاق على واتساب (داخل أنطاليا وإلى الخارج؛ يتحمّل العميل رسوم الشحن).',
    'لست في أنطاليا؟ لعمل «{w}» يمكنك إرسال القطعة عبر الشحن؛ نتفق على السعر والتفاصيل عبر واتساب، داخل أنطاليا وإلى الخارج، ويتحمّل العميل رسوم الشحن.',
  ], link: 'الخدمة عبر الشحن' },
};
