// ============================================================
// terzihizmeti.com.tr — lib/intl.ts
// Ek turist dilleri (ES/FR/PL/UK/NL/AR): her dil için TEK kısa tanıtım sayfası (/es, /fr, /pl, /uk, /nl, /ar).
// Yalnızca işletme sahibinin doğruladığı bilgiler: Hurma/Konyaaltı atölye, 2006'dan beri, her gün 08:00–23:00,
// özel dikim genellikle 3 gün, tadilat genellikle 1 gün, acilde çoğunlukla 2–4 saat, WhatsApp'tan fotoğrafla fiyat.
// Ücretsiz alım-teslim yalnızca Konyaaltı ve yakın mahallelerde; Belek/Lara/Güzeloba/Side/Kemer için WhatsApp'tan sorulur.
// Fiyat yazılmaz.
// ============================================================
export type ILang = 'es' | 'fr' | 'pl' | 'uk' | 'nl' | 'ar';
export const ILANGS: ILang[] = ['es', 'fr', 'pl', 'uk', 'nl', 'ar'];
export const iUrl = (l: ILang) => `/${l}`;
/** Mevcut TR/EN/RU/DE açılış sayfalarının hreflang'ına eklenen yeni dil karşılıkları (karşılıklı bağ). */
export const INTL_ALT: Record<string, string> = Object.fromEntries(ILANGS.map((l) => [l, `https://terzihizmeti.com.tr/${l}`]));
export const isILang = (l: string): l is ILang => (ILANGS as string[]).includes(l);

export type ICopy = {
  locale: string; name: string; dir: 'ltr' | 'rtl'; hreflang: string;
  title: string; desc: string; keywords: string[];
  tag: string; h1: string; lead: string; cta: string; wa: string;
  factsTitle: string; facts: [string, string][];
  servicesTitle: string; services: string[];
  hotelTitle: string; hotelText: string; zonesLabel: string;
  faqTitle: string; faq: [string, string][];
  contactTitle: string; call: string; addressLabel: string; address: string; mapLabel: string;
  otherLangs: string;
};

export const ZONES = ['Belek', 'Lara', 'Güzeloba', 'Side', 'Kemer'];

export const INTL: Record<ILang, ICopy> = {
  es: {
    locale: 'es_ES', name: 'Español', dir: 'ltr', hreflang: 'es',
    title: 'Sastre en Antalya para turistas | Terzi Can',
    desc: 'Sastrería en Konyaaltı, Antalya, abierta de 08:00 a 23:00. Arreglos, cremalleras y confección a medida. Precio por WhatsApp con una foto.',
    keywords: ['sastre Antalya', 'arreglos de ropa Antalya', 'sastrería Konyaaltı', 'sastre para turistas Antalya', 'costurera Antalya hotel'],
    tag: 'Terzi Can · Antalya, Konyaaltı',
    h1: 'Sastre en Antalya para turistas',
    lead: 'Arreglos de ropa y confección a medida en Konyaaltı, desde 2006. Envíe una foto por WhatsApp y le decimos el precio y el plazo antes de que venga.',
    cta: 'Escribir por WhatsApp', wa: 'Hola, estoy de vacaciones en Antalya y necesito un arreglo de ropa. Le envío una foto.',
    factsTitle: 'De un vistazo',
    facts: [['Taller', 'Hurma, Konyaaltı, Antalya'], ['Horario', 'Todos los días, 08:00–23:00'], ['Experiencia', 'Desde 2006'], ['Arreglos', 'Normalmente en 1 día'], ['Confección a medida', 'Normalmente 3 días'], ['Urgencias', 'Con frecuencia en 2–4 horas'], ['Precio', 'Por WhatsApp, con una foto']],
    servicesTitle: 'Qué podemos hacer',
    services: ['Acortar pantalones, vaqueros, faldas y vestidos', 'Ajustar cintura, costados y mangas', 'Cambiar cremalleras rotas', 'Reparar costuras y desgarros', 'Arreglos de vestidos de novia y de fiesta', 'Confección a medida en lino y algodón'],
    hotelTitle: 'Recogida y entrega en su hotel',
    hotelText: 'Recogemos y entregamos la ropa en su hotel. En Konyaaltı y los barrios cercanos el servicio es gratuito. Para hoteles en otras zonas, escríbanos por WhatsApp con el nombre del hotel y le confirmamos las condiciones.',
    zonesLabel: 'Zonas hoteleras que atendemos',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      ['¿Cuánto tarda un arreglo?', 'Los arreglos sencillos suelen estar listos en un día, según la carga de trabajo. En urgencias, con frecuencia en 2 a 4 horas. El plazo exacto se confirma por WhatsApp.'],
      ['¿Hacen ropa a medida?', 'Sí. La confección a medida suele tardar unos 3 días. Trabajamos mucho el lino y el algodón, ideales para el clima de Antalya.'],
      ['¿Cómo conozco el precio?', 'Envíe una foto de la prenda y del problema por WhatsApp. Normalmente podemos indicar precio y plazo desde la foto.'],
      ['¿Hablan mi idioma?', 'Atendemos en turco, inglés, ruso y alemán.'],
    ],
    contactTitle: 'Contacto', call: 'Llamar', addressLabel: 'Dirección', address: 'Hurma Mahallesi, 07130 Konyaaltı, Antalya', mapLabel: 'Ver en Google Maps',
    otherLangs: 'Otros idiomas',
  },
  fr: {
    locale: 'fr_FR', name: 'Français', dir: 'ltr', hreflang: 'fr',
    title: 'Tailleur à Antalya pour touristes | Terzi Can',
    desc: 'Atelier de couture à Konyaaltı, Antalya, ouvert de 8h à 23h. Retouches, fermetures éclair, sur-mesure. Prix sur WhatsApp avec une photo.',
    keywords: ['tailleur Antalya', 'retouches vêtements Antalya', 'couturier Konyaaltı', 'tailleur touristes Antalya', 'retouche hôtel Antalya'],
    tag: 'Terzi Can · Antalya, Konyaaltı',
    h1: 'Tailleur à Antalya pour touristes',
    lead: 'Retouches et vêtements sur mesure à Konyaaltı, depuis 2006. Envoyez une photo sur WhatsApp : nous vous indiquons le prix et le délai avant votre venue.',
    cta: 'Écrire sur WhatsApp', wa: 'Bonjour, je suis en vacances à Antalya et j\'ai besoin d\'une retouche. Je vous envoie une photo.',
    factsTitle: 'En un coup d\'œil',
    facts: [['Atelier', 'Hurma, Konyaaltı, Antalya'], ['Horaires', 'Tous les jours, 08h00–23h00'], ['Expérience', 'Depuis 2006'], ['Retouches', 'En général sous 1 jour'], ['Sur-mesure', 'En général 3 jours'], ['Urgences', 'Souvent en 2 à 4 heures'], ['Prix', 'Sur WhatsApp, avec une photo']],
    servicesTitle: 'Ce que nous faisons',
    services: ['Raccourcir pantalons, jeans, jupes et robes', 'Ajuster la taille, les côtés et les manches', 'Remplacer les fermetures éclair cassées', 'Réparer coutures et déchirures', 'Retouches de robes de mariée et de soirée', 'Sur-mesure en lin et en coton'],
    hotelTitle: 'Collecte et livraison à votre hôtel',
    hotelText: 'Nous récupérons et livrons vos vêtements à votre hôtel. À Konyaaltı et dans les quartiers voisins, le service est gratuit. Pour les hôtels d\'autres secteurs, écrivez-nous sur WhatsApp avec le nom de l\'hôtel et nous confirmons les conditions.',
    zonesLabel: 'Zones hôtelières desservies',
    faqTitle: 'Questions fréquentes',
    faq: [
      ['Combien de temps dure une retouche ?', 'Les retouches simples sont souvent prêtes en une journée, selon la charge de travail. En urgence, souvent en 2 à 4 heures. Le délai exact est confirmé sur WhatsApp.'],
      ['Faites-vous du sur-mesure ?', 'Oui. Le sur-mesure prend généralement environ 3 jours. Nous travaillons beaucoup le lin et le coton, idéaux pour le climat d\'Antalya.'],
      ['Comment connaître le prix ?', 'Envoyez sur WhatsApp une photo du vêtement et du problème. Nous pouvons en général donner prix et délai d\'après la photo.'],
      ['Parlez-vous ma langue ?', 'Nous parlons turc, anglais, russe et allemand.'],
    ],
    contactTitle: 'Contact', call: 'Appeler', addressLabel: 'Adresse', address: 'Hurma Mahallesi, 07130 Konyaaltı, Antalya', mapLabel: 'Voir sur Google Maps',
    otherLangs: 'Autres langues',
  },
  pl: {
    locale: 'pl_PL', name: 'Polski', dir: 'ltr', hreflang: 'pl',
    title: 'Krawiec w Antalyi dla turystów | Terzi Can',
    desc: 'Krawiec w Konyaaltı, Antalya, czynny codziennie 08:00–23:00. Przeróbki, zamki, szycie na miarę. Cena na WhatsApp po zdjęciu.',
    keywords: ['krawiec Antalya', 'przeróbki krawieckie Antalya', 'krawiec Konyaaltı', 'krawiec dla turystów Antalya', 'przeróbki ubrań hotel Antalya'],
    tag: 'Terzi Can · Antalya, Konyaaltı',
    h1: 'Krawiec w Antalyi dla turystów',
    lead: 'Przeróbki ubrań i szycie na miarę w Konyaaltı, od 2006 roku. Wyślij zdjęcie na WhatsAppie, a podamy cenę i termin, zanim przyjdziesz.',
    cta: 'Napisz na WhatsAppie', wa: 'Dzień dobry, jestem na wakacjach w Antalyi i potrzebuję przeróbki ubrania. Wysyłam zdjęcie.',
    factsTitle: 'W skrócie',
    facts: [['Pracownia', 'Hurma, Konyaaltı, Antalya'], ['Godziny', 'Codziennie, 08:00–23:00'], ['Doświadczenie', 'Od 2006 roku'], ['Przeróbki', 'Zwykle w 1 dzień'], ['Szycie na miarę', 'Zwykle 3 dni'], ['Pilne zlecenia', 'Często w 2–4 godziny'], ['Cena', 'Na WhatsAppie, po zdjęciu']],
    servicesTitle: 'Co robimy',
    services: ['Skracanie spodni, jeansów, spódnic i sukienek', 'Zwężanie w talii, bokach i rękawach', 'Wymiana zepsutych zamków', 'Naprawa szwów i rozdarć', 'Przeróbki sukien ślubnych i wieczorowych', 'Szycie na miarę z lnu i bawełny'],
    hotelTitle: 'Odbiór i dostawa do hotelu',
    hotelText: 'Odbieramy i dowozimy ubrania do Twojego hotelu. W Konyaaltı i pobliskich dzielnicach usługa jest bezpłatna. Dla hoteli w innych rejonach napisz na WhatsAppie z nazwą hotelu, a potwierdzimy warunki.',
    zonesLabel: 'Rejony hotelowe, które obsługujemy',
    faqTitle: 'Najczęstsze pytania',
    faq: [
      ['Ile trwa przeróbka?', 'Proste przeróbki są zwykle gotowe w jeden dzień, zależnie od obłożenia. Przy pilnych zleceniach często w 2–4 godziny. Dokładny termin potwierdzamy na WhatsAppie.'],
      ['Czy szyjecie na miarę?', 'Tak. Szycie na miarę trwa zwykle około 3 dni. Często szyjemy z lnu i bawełny, idealnych na klimat Antalyi.'],
      ['Jak poznać cenę?', 'Wyślij na WhatsAppie zdjęcie ubrania i problemu. Zwykle możemy podać cenę i termin na podstawie zdjęcia.'],
      ['Czy mówicie w moim języku?', 'Obsługujemy po turecku, angielsku, rosyjsku i niemiecku.'],
    ],
    contactTitle: 'Kontakt', call: 'Zadzwoń', addressLabel: 'Adres', address: 'Hurma Mahallesi, 07130 Konyaaltı, Antalya', mapLabel: 'Zobacz w Mapach Google',
    otherLangs: 'Inne języki',
  },
  uk: {
    locale: 'uk_UA', name: 'Українська', dir: 'ltr', hreflang: 'uk',
    title: 'Кравець в Анталії для туристів | Terzi Can',
    desc: 'Ательє в Коньяалти, Анталія, щодня 08:00–23:00. Підгонка одягу, блискавки, сукні та пошиття за мірками. Ціну назвемо у WhatsApp за фото.',
    keywords: ['кравець Анталія', 'підгонка одягу Анталія', 'ательє Коньяалти', 'кравець для туристів Анталія', 'ремонт одягу готель Анталія'],
    tag: 'Terzi Can · Анталія, Коньяалти',
    h1: 'Кравець в Анталії для туристів',
    lead: 'Підгонка одягу та пошиття за мірками в Коньяалти, з 2006 року. Надішліть фото у WhatsApp, і ми назвемо ціну та строк ще до вашого візиту.',
    cta: 'Написати у WhatsApp', wa: 'Добрий день, я у відпустці в Анталії та потребую підгонки одягу. Надсилаю фото.',
    factsTitle: 'Коротко',
    facts: [['Ательє', 'Хурма, Коньяалти, Анталія'], ['Графік', 'Щодня, 08:00–23:00'], ['Досвід', 'З 2006 року'], ['Підгонка', 'Зазвичай за 1 день'], ['Пошиття за мірками', 'Зазвичай 3 дні'], ['Термінові замовлення', 'Часто за 2–4 години'], ['Ціна', 'У WhatsApp, за фото']],
    servicesTitle: 'Що ми робимо',
    services: ['Вкорочення штанів, джинсів, спідниць і суконь', 'Звуження по талії, боках і рукавах', 'Заміна зламаних блискавок', 'Ремонт швів і розривів', 'Підгонка весільних та вечірніх суконь', 'Пошиття з льону та бавовни за мірками'],
    hotelTitle: 'Забір і доставка до вашого готелю',
    hotelText: 'Ми забираємо та повертаємо одяг у вашому готелі. У Коньяалти та сусідніх районах послуга безкоштовна. Для готелів в інших районах напишіть у WhatsApp із назвою готелю, і ми підтвердимо умови.',
    zonesLabel: 'Готельні зони, які ми обслуговуємо',
    faqTitle: 'Часті запитання',
    faq: [
      ['Скільки триває підгонка?', 'Прості роботи зазвичай готові за день, залежно від завантаження. У термінових випадках часто за 2–4 години. Точний строк підтверджуємо у WhatsApp.'],
      ['Чи шиєте ви за мірками?', 'Так. Пошиття за мірками зазвичай займає близько 3 днів. Ми часто працюємо з льоном і бавовною, які ідеально підходять для клімату Анталії.'],
      ['Як дізнатися ціну?', 'Надішліть у WhatsApp фото речі та проблеми. Зазвичай ми можемо назвати ціну та строк за фото.'],
      ['Чи говорите ви моєю мовою?', 'Ми обслуговуємо турецькою, англійською, російською та німецькою.'],
    ],
    contactTitle: 'Контакти', call: 'Зателефонувати', addressLabel: 'Адреса', address: 'Hurma Mahallesi, 07130 Konyaaltı, Antalya', mapLabel: 'Відкрити в Google Maps',
    otherLangs: 'Інші мови',
  },
  nl: {
    locale: 'nl_NL', name: 'Nederlands', dir: 'ltr', hreflang: 'nl',
    title: 'Kleermaker in Antalya voor toeristen | Terzi Can',
    desc: 'Kleermakerij in Konyaaltı, Antalya, elke dag open van 08:00 tot 23:00. Kleding vermaken, ritsen, jurken en maatwerk. Vraag de prijs via WhatsApp met een foto.',
    keywords: ['kleermaker Antalya', 'kleding vermaken Antalya', 'kleermaker Konyaaltı', 'kleermaker voor toeristen Antalya', 'kleding laten vermaken hotel Antalya'],
    tag: 'Terzi Can · Antalya, Konyaaltı',
    h1: 'Kleermaker in Antalya voor toeristen',
    lead: 'Kleding vermaken en maatwerk in Konyaaltı, sinds 2006. Stuur een foto via WhatsApp en wij geven prijs en doorlooptijd door voordat u langskomt.',
    cta: 'Stuur een WhatsApp-bericht', wa: 'Hallo, ik ben op vakantie in Antalya en heb een kledingaanpassing nodig. Ik stuur een foto.',
    factsTitle: 'In het kort',
    facts: [['Atelier', 'Hurma, Konyaaltı, Antalya'], ['Openingstijden', 'Elke dag, 08:00–23:00'], ['Ervaring', 'Sinds 2006'], ['Vermaken', 'Meestal binnen 1 dag'], ['Maatwerk', 'Meestal 3 dagen'], ['Spoedklussen', 'Vaak binnen 2–4 uur'], ['Prijs', 'Via WhatsApp, met een foto']],
    servicesTitle: 'Wat wij doen',
    services: ['Broeken, jeans, rokken en jurken inkorten', 'Taille, zijnaden en mouwen innemen', 'Kapotte ritsen vervangen', 'Naden en scheuren herstellen', 'Bruids- en galajurken aanpassen', 'Maatwerk in linnen en katoen'],
    hotelTitle: 'Ophalen en terugbrengen bij uw hotel',
    hotelText: 'Wij halen uw kleding op bij uw hotel en brengen die terug. In Konyaaltı en nabijgelegen wijken is dit gratis. Voor hotels in andere gebieden stuurt u ons via WhatsApp de naam van het hotel, dan bevestigen wij de voorwaarden.',
    zonesLabel: 'Hotelgebieden die wij bedienen',
    faqTitle: 'Veelgestelde vragen',
    faq: [
      ['Hoe lang duurt een aanpassing?', 'Eenvoudige aanpassingen zijn meestal binnen een dag klaar, afhankelijk van de drukte. Bij spoed vaak binnen 2 tot 4 uur. De exacte tijd bevestigen wij via WhatsApp.'],
      ['Maken jullie kleding op maat?', 'Ja. Maatwerk duurt meestal ongeveer 3 dagen. Wij werken veel met linnen en katoen, ideaal voor het klimaat van Antalya.'],
      ['Hoe weet ik de prijs?', 'Stuur via WhatsApp een foto van het kledingstuk en het probleem. Meestal kunnen wij aan de hand van de foto prijs en doorlooptijd noemen.'],
      ['Spreken jullie mijn taal?', 'Wij helpen in het Turks, Engels, Russisch en Duits.'],
    ],
    contactTitle: 'Contact', call: 'Bellen', addressLabel: 'Adres', address: 'Hurma Mahallesi, 07130 Konyaaltı, Antalya', mapLabel: 'Bekijk op Google Maps',
    otherLangs: 'Andere talen',
  },
  ar: {
    locale: 'ar_AR', name: 'العربية', dir: 'rtl', hreflang: 'ar',
    title: 'خيّاط في أنطاليا للسياح: تعديل الملابس والتفصيل | Terzi Can',
    desc: 'محل خياطة في كونيالتي بأنطاليا، مفتوح كل يوم من 08:00 إلى 23:00. تعديل الملابس وتبديل السحّابات والفساتين والتفصيل. اسأل عن السعر عبر واتساب بصورة.',
    keywords: ['خياط في أنطاليا', 'تعديل ملابس أنطاليا', 'خياطة كونيالتي', 'خياط للسياح أنطاليا', 'تعديل ملابس فندق أنطاليا'],
    tag: 'Terzi Can · أنطاليا، كونيالتي',
    h1: 'خيّاط في أنطاليا للسياح',
    lead: 'تعديل الملابس وتفصيلها في كونيالتي منذ عام 2006. أرسل صورة عبر واتساب ونخبرك بالسعر والموعد قبل أن تزورنا.',
    cta: 'راسلنا على واتساب', wa: 'مرحباً، أنا في عطلة في أنطاليا وأحتاج إلى تعديل ملابس. أرسل لكم صورة.',
    factsTitle: 'نظرة سريعة',
    facts: [['الورشة', 'هورما، كونيالتي، أنطاليا'], ['ساعات العمل', 'كل يوم، 08:00–23:00'], ['الخبرة', 'منذ 2006'], ['التعديلات', 'عادةً خلال يوم واحد'], ['التفصيل', 'عادةً 3 أيام'], ['الحالات العاجلة', 'غالباً خلال 2–4 ساعات'], ['السعر', 'عبر واتساب بصورة']],
    servicesTitle: 'ماذا نفعل',
    services: ['تقصير البناطيل والجينز والتنانير والفساتين', 'تضييق الخصر والجوانب والأكمام', 'استبدال السحّابات المعطّلة', 'إصلاح الدرز والتمزقات', 'تعديل فساتين الزفاف والسهرة', 'تفصيل من الكتان والقطن'],
    hotelTitle: 'الاستلام والتسليم في فندقك',
    hotelText: 'نستلم ملابسك من فندقك ونعيدها إليه. في كونيالتي والأحياء القريبة الخدمة مجانية. أما الفنادق في مناطق أخرى فراسلنا على واتساب باسم الفندق وسنؤكد لك الشروط.',
    zonesLabel: 'المناطق الفندقية التي نخدمها',
    faqTitle: 'الأسئلة الشائعة',
    faq: [
      ['كم يستغرق التعديل؟', 'التعديلات البسيطة تكون جاهزة عادةً خلال يوم، بحسب ضغط العمل. وفي الحالات العاجلة غالباً خلال 2 إلى 4 ساعات. نؤكد الموعد الدقيق عبر واتساب.'],
      ['هل تفصّلون الملابس؟', 'نعم. يستغرق التفصيل عادةً نحو 3 أيام. نعمل كثيراً بالكتان والقطن، وهما مناسبان لمناخ أنطاليا.'],
      ['كيف أعرف السعر؟', 'أرسل عبر واتساب صورة للقطعة وللمشكلة. نستطيع عادةً تحديد السعر والموعد من الصورة.'],
      ['هل تتحدثون لغتي؟', 'نخدم بالتركية والإنجليزية والروسية والألمانية.'],
    ],
    contactTitle: 'التواصل', call: 'اتصل', addressLabel: 'العنوان', address: 'Hurma Mahallesi, 07130 Konyaaltı, Antalya', mapLabel: 'افتح في خرائط Google',
    otherLangs: 'لغات أخرى',
  },
};
