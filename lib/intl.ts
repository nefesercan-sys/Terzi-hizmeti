// ============================================================
// terzihizmeti.com.tr — lib/intl.ts
// Ek turist dilleri (ES/FR/PL/UK/NL/AR): her dil için TEK kısa tanıtım sayfası (/es, /fr, /pl, /uk, /nl, /ar).
// Yalnızca işletme sahibinin doğruladığı bilgiler: Hurma/Konyaaltı atölye, 2006'dan beri, her gün 08:00–23:00,
// süreler lib/delivery.ts'ten, WhatsApp'tan fotoğrafla fiyat. Otellere alım-teslim tüm hizmet bölgelerinde ücretsiz;
// ev adreslerinde ücretsiz yalnızca Konyaaltı ve yakın mahalleler (lib/seo-data.ts FREE_SERVICE_SLUGS).
// Fiyat yazılmaz.
// ============================================================
import { DELIVERY } from '@/lib/delivery';
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
    facts: [['Taller', 'Hurma, Konyaaltı, Antalya'], ['Horario', 'Todos los días, 08:00–23:00'], ['Experiencia', 'Desde 2006'], ['Arreglos', `${DELIVERY.es.normalShort}`], ['Confección a medida', `${DELIVERY.es.customShort}`], ['Urgencias', `${DELIVERY.es.urgentShort}`], ['Precio', 'Por WhatsApp, con una foto']],
    servicesTitle: 'Qué podemos hacer',
    services: ['Acortar pantalones, vaqueros, faldas y vestidos', 'Ajustar cintura, costados y mangas', 'Cambiar cremalleras rotas', 'Reparar costuras y desgarros', 'Arreglos de vestidos de novia y de fiesta', 'Confección a medida en lino y algodón'],
    hotelTitle: 'Recogida y entrega en su hotel',
    hotelText: 'Recogemos y entregamos la ropa en su hotel. El servicio a hoteles es gratuito en todas las zonas donde trabajamos (Konyaaltı, Lara, Belek, Side, Kemer y más). Escríbanos por WhatsApp con el nombre del hotel para acordar la recogida.',
    zonesLabel: 'Zonas hoteleras que atendemos',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      ['¿Cuánto tarda un arreglo?', `${DELIVERY.es.urgent} ${DELIVERY.es.normal}`],
      ['¿Hacen ropa a medida?', `Sí. ${DELIVERY.es.custom} Trabajamos mucho el lino y el algodón, ideales para el clima de Antalya.`],
      ['¿Cómo conozco el precio?', 'Envíe una foto de la prenda y del problema por WhatsApp. Normalmente podemos indicar precio y plazo desde la foto.'],
      ['¿Hablan mi idioma?', 'Atendemos en turco, inglés, ruso, alemán, polaco, ucraniano, neerlandés, francés, español y árabe.'],
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
    facts: [['Atelier', 'Hurma, Konyaaltı, Antalya'], ['Horaires', 'Tous les jours, 08h00–23h00'], ['Expérience', 'Depuis 2006'], ['Retouches', `${DELIVERY.fr.normalShort}`], ['Sur-mesure', `${DELIVERY.fr.customShort}`], ['Urgences', `${DELIVERY.fr.urgentShort}`], ['Prix', 'Sur WhatsApp, avec une photo']],
    servicesTitle: 'Ce que nous faisons',
    services: ['Raccourcir pantalons, jeans, jupes et robes', 'Ajuster la taille, les côtés et les manches', 'Remplacer les fermetures éclair cassées', 'Réparer coutures et déchirures', 'Retouches de robes de mariée et de soirée', 'Sur-mesure en lin et en coton'],
    hotelTitle: 'Collecte et livraison à votre hôtel',
    hotelText: 'Nous récupérons et livrons vos vêtements à votre hôtel. Le service vers les hôtels est gratuit dans toutes les zones desservies (Konyaaltı, Lara, Belek, Side, Kemer et autres). Écrivez-nous sur WhatsApp avec le nom de l\'hôtel pour convenir de la prise en charge.',
    zonesLabel: 'Zones hôtelières desservies',
    faqTitle: 'Questions fréquentes',
    faq: [
      ['Combien de temps dure une retouche ?', `${DELIVERY.fr.urgent} ${DELIVERY.fr.normal}`],
      ['Faites-vous du sur-mesure ?', `Oui. ${DELIVERY.fr.custom} Nous travaillons beaucoup le lin et le coton, idéaux pour le climat d\'Antalya.`],
      ['Comment connaître le prix ?', 'Envoyez sur WhatsApp une photo du vêtement et du problème. Nous pouvons en général donner prix et délai d\'après la photo.'],
      ['Parlez-vous ma langue ?', 'Nous parlons turc, anglais, russe, allemand, polonais, ukrainien, néerlandais, français, espagnol et arabe.'],
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
    facts: [['Pracownia', 'Hurma, Konyaaltı, Antalya'], ['Godziny', 'Codziennie, 08:00–23:00'], ['Doświadczenie', 'Od 2006 roku'], ['Przeróbki', `${DELIVERY.pl.normalShort}`], ['Szycie na miarę', `${DELIVERY.pl.customShort}`], ['Pilne zlecenia', `${DELIVERY.pl.urgentShort}`], ['Cena', 'Na WhatsAppie, po zdjęciu']],
    servicesTitle: 'Co robimy',
    services: ['Skracanie spodni, jeansów, spódnic i sukienek', 'Zwężanie w talii, bokach i rękawach', 'Wymiana zepsutych zamków', 'Naprawa szwów i rozdarć', 'Przeróbki sukien ślubnych i wieczorowych', 'Szycie na miarę z lnu i bawełny'],
    hotelTitle: 'Odbiór i dostawa do hotelu',
    hotelText: 'Odbieramy i dowozimy ubrania do Twojego hotelu. Odbiór i dowóz do hoteli są bezpłatne we wszystkich obsługiwanych rejonach (Konyaaltı, Lara, Belek, Side, Kemer i inne). Napisz na WhatsAppie z nazwą hotelu, a ustalimy odbiór.',
    zonesLabel: 'Rejony hotelowe, które obsługujemy',
    faqTitle: 'Najczęstsze pytania',
    faq: [
      ['Ile trwa przeróbka?', `${DELIVERY.pl.urgent} ${DELIVERY.pl.normal}`],
      ['Czy szyjecie na miarę?', `Tak. ${DELIVERY.pl.custom} Często szyjemy z lnu i bawełny, idealnych na klimat Antalyi.`],
      ['Jak poznać cenę?', 'Wyślij na WhatsAppie zdjęcie ubrania i problemu. Zwykle możemy podać cenę i termin na podstawie zdjęcia.'],
      ['Czy mówicie w moim języku?', 'Obsługujemy po turecku, angielsku, rosyjsku, niemiecku, polsku, ukraińsku, niderlandzku, francusku, hiszpańsku i arabsku.'],
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
    facts: [['Ательє', 'Хурма, Коньяалти, Анталія'], ['Графік', 'Щодня, 08:00–23:00'], ['Досвід', 'З 2006 року'], ['Підгонка', `${DELIVERY.uk.normalShort}`], ['Пошиття за мірками', `${DELIVERY.uk.customShort}`], ['Термінові замовлення', `${DELIVERY.uk.urgentShort}`], ['Ціна', 'У WhatsApp, за фото']],
    servicesTitle: 'Що ми робимо',
    services: ['Вкорочення штанів, джинсів, спідниць і суконь', 'Звуження по талії, боках і рукавах', 'Заміна зламаних блискавок', 'Ремонт швів і розривів', 'Підгонка весільних та вечірніх суконь', 'Пошиття з льону та бавовни за мірками'],
    hotelTitle: 'Забір і доставка до вашого готелю',
    hotelText: 'Ми забираємо та повертаємо одяг у вашому готелі. Послуга для готелів безкоштовна в усіх районах, які ми обслуговуємо (Коньяалти, Лара, Белек, Сіде, Кемер та інші). Напишіть у WhatsApp із назвою готелю, і ми домовимось про забір.',
    zonesLabel: 'Готельні зони, які ми обслуговуємо',
    faqTitle: 'Часті запитання',
    faq: [
      ['Скільки триває підгонка?', `${DELIVERY.uk.urgent} ${DELIVERY.uk.normal}`],
      ['Чи шиєте ви за мірками?', `Так. ${DELIVERY.uk.custom} Ми часто працюємо з льоном і бавовною, які ідеально підходять для клімату Анталії.`],
      ['Як дізнатися ціну?', 'Надішліть у WhatsApp фото речі та проблеми. Зазвичай ми можемо назвати ціну та строк за фото.'],
      ['Чи говорите ви моєю мовою?', 'Ми обслуговуємо турецькою, англійською, російською, німецькою, польською, українською, нідерландською, французькою, іспанською та арабською.'],
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
    facts: [['Atelier', 'Hurma, Konyaaltı, Antalya'], ['Openingstijden', 'Elke dag, 08:00–23:00'], ['Ervaring', 'Sinds 2006'], ['Vermaken', `${DELIVERY.nl.normalShort}`], ['Maatwerk', `${DELIVERY.nl.customShort}`], ['Spoedklussen', `${DELIVERY.nl.urgentShort}`], ['Prijs', 'Via WhatsApp, met een foto']],
    servicesTitle: 'Wat wij doen',
    services: ['Broeken, jeans, rokken en jurken inkorten', 'Taille, zijnaden en mouwen innemen', 'Kapotte ritsen vervangen', 'Naden en scheuren herstellen', 'Bruids- en galajurken aanpassen', 'Maatwerk in linnen en katoen'],
    hotelTitle: 'Ophalen en terugbrengen bij uw hotel',
    hotelText: 'Wij halen uw kleding op bij uw hotel en brengen die terug. Voor hotels is dit gratis in alle gebieden waar wij werken (Konyaaltı, Lara, Belek, Side, Kemer en meer). Stuur ons via WhatsApp de naam van het hotel om het ophalen af te spreken.',
    zonesLabel: 'Hotelgebieden die wij bedienen',
    faqTitle: 'Veelgestelde vragen',
    faq: [
      ['Hoe lang duurt een aanpassing?', `${DELIVERY.nl.urgent} ${DELIVERY.nl.normal}`],
      ['Maken jullie kleding op maat?', `Ja. ${DELIVERY.nl.custom} Wij werken veel met linnen en katoen, ideaal voor het klimaat van Antalya.`],
      ['Hoe weet ik de prijs?', 'Stuur via WhatsApp een foto van het kledingstuk en het probleem. Meestal kunnen wij aan de hand van de foto prijs en doorlooptijd noemen.'],
      ['Spreken jullie mijn taal?', 'Wij helpen in het Turks, Engels, Russisch, Duits, Pools, Oekraïens, Nederlands, Frans, Spaans en Arabisch.'],
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
    facts: [['الورشة', 'هورما، كونيالتي، أنطاليا'], ['ساعات العمل', 'كل يوم، 08:00–23:00'], ['الخبرة', 'منذ 2006'], ['التعديلات', `${DELIVERY.ar.normalShort}`], ['التفصيل', `${DELIVERY.ar.customShort}`], ['الحالات العاجلة', `${DELIVERY.ar.urgentShort}`], ['السعر', 'عبر واتساب بصورة']],
    servicesTitle: 'ماذا نفعل',
    services: ['تقصير البناطيل والجينز والتنانير والفساتين', 'تضييق الخصر والجوانب والأكمام', 'استبدال السحّابات المعطّلة', 'إصلاح الدرز والتمزقات', 'تعديل فساتين الزفاف والسهرة', 'تفصيل من الكتان والقطن'],
    hotelTitle: 'الاستلام والتسليم في فندقك',
    hotelText: 'نستلم ملابسك من فندقك ونعيدها إليه. الخدمة مجانية للفنادق في جميع المناطق التي نخدمها (كونيالتي ولارا وبليك وسيدة وكمر وغيرها). راسلنا على واتساب باسم الفندق لنتفق على الاستلام.',
    zonesLabel: 'المناطق الفندقية التي نخدمها',
    faqTitle: 'الأسئلة الشائعة',
    faq: [
      ['كم يستغرق التعديل؟', `${DELIVERY.ar.urgent} ${DELIVERY.ar.normal}`],
      ['هل تفصّلون الملابس؟', `نعم. ${DELIVERY.ar.custom} نعمل كثيراً بالكتان والقطن، وهما مناسبان لمناخ أنطاليا.`],
      ['كيف أعرف السعر؟', 'أرسل عبر واتساب صورة للقطعة وللمشكلة. نستطيع عادةً تحديد السعر والموعد من الصورة.'],
      ['هل تتحدثون لغتي؟', 'نخدم بالتركية والإنجليزية والروسية والألمانية والبولندية والأوكرانية والهولندية والفرنسية والإسبانية والعربية.'],
    ],
    contactTitle: 'التواصل', call: 'اتصل', addressLabel: 'العنوان', address: 'Hurma Mahallesi, 07130 Konyaaltı, Antalya', mapLabel: 'افتح في خرائط Google',
    otherLangs: 'لغات أخرى',
  },
};


/** Ücretsiz alım-teslim mahalleleri (işletme sahibinin onayladığı liste, Ekim 2026) — her dilde mahalle adlarıyla görünür. */
export const NB: Record<ILang, { title: string; text: string }> = {
  es: { title: 'Recogida y entrega gratis a domicilio en estos barrios', text: 'Sin coste de servicio en Hurma, Liman, Sarısu, Gürsu, Uluç, Uncalı, Meltem, Siteler, Öğretmenevleri, Altınkum y Arapsuyu. Todos los días de 08:00 a 23:00: acortar y ajustar pantalones, vaqueros, faldas, abrigos y chaquetas, cambiar y reparar cremalleras, arreglos de vestidos de fiesta y de novia, y confección a medida.' },
  fr: { title: 'Prise en charge et livraison gratuites à domicile dans ces quartiers', text: 'Service gratuit à Hurma, Liman, Sarısu, Gürsu, Uluç, Uncalı, Meltem, Siteler, Öğretmenevleri, Altınkum et Arapsuyu. Tous les jours de 08h00 à 23h00 : ourlets et ajustements de pantalons, jeans, jupes, manteaux et vestes, changement et réparation de fermetures éclair, retouches de robes de soirée et de mariée, sur-mesure.' },
  pl: { title: 'Bezpłatny odbiór i dowóz pod adres domowy w tych dzielnicach', text: 'Bez opłaty za dojazd: Hurma, Liman, Sarısu, Gürsu, Uluç, Uncalı, Meltem, Siteler, Öğretmenevleri, Altınkum i Arapsuyu. Codziennie 08:00–23:00: skracanie i zwężanie spodni, jeansów, spódnic, płaszczy i kurtek, wymiana i naprawa zamków, przeróbki sukienek wieczorowych i ślubnych, szycie na miarę.' },
  uk: { title: 'Безкоштовний забір і доставка додому в цих районах', text: 'Без плати за виїзд: Hurma, Liman, Sarısu, Gürsu, Uluç, Uncalı, Meltem, Siteler, Öğretmenevleri, Altınkum та Arapsuyu. Щодня 08:00–23:00: вкорочення і звуження штанів, джинсів, спідниць, пальт і курток, заміна та ремонт блискавок, підгонка вечірніх і весільних суконь, пошиття на замовлення.' },
  nl: { title: 'Gratis ophalen en terugbrengen aan huis in deze wijken', text: 'Geen servicekosten in Hurma, Liman, Sarısu, Gürsu, Uluç, Uncalı, Meltem, Siteler, Öğretmenevleri, Altınkum en Arapsuyu. Dagelijks 08:00–23:00: broeken, jeans, rokken, jassen en jasjes korter of nauwer maken, ritsen vervangen en repareren, avond- en bruidsjurken aanpassen en maatwerk.' },
  ar: { title: 'استلام وتسليم مجاني للمنازل في هذه الأحياء', text: 'بدون رسوم خدمة في: Hurma, Liman, Sarısu, Gürsu, Uluç, Uncalı, Meltem, Siteler, Öğretmenevleri, Altınkum, Arapsuyu. يوميًا من 08:00 إلى 23:00: تقصير وتضييق البناطيل والجينز والتنانير والمعاطف والجاكيتات، تغيير وإصلاح السحابات، تعديل فساتين السهرة والزفاف، والتفصيل حسب المقاس.' },
};

// İlçe/mahalle bağlantısı (Konyaaltı ve Muratpaşa) — 6 yeni dil
export const NB_DISTRICT: Record<ILang, { title: string; text: string }> = {
  es: { title: 'Barrios por distrito', text: 'Distrito de Konyaaltı: Hurma (donde está el taller), Liman, Sarısu, Gürsu, Uluç, Uncalı, Siteler, Öğretmenevleri, Altınkum, Arapsuyu. Distrito de Muratpaşa: Meltem, Şirinyalı, Fener, Güzeloba.' },
  fr: { title: 'Quartiers par district', text: "District de Konyaaltı : Hurma (où se trouve l'atelier), Liman, Sarısu, Gürsu, Uluç, Uncalı, Siteler, Öğretmenevleri, Altınkum, Arapsuyu. District de Muratpaşa : Meltem, Şirinyalı, Fener, Güzeloba." },
  pl: { title: 'Osiedla według dystryktu', text: 'Dystrykt Konyaaltı: Hurma (tu jest pracownia), Liman, Sarısu, Gürsu, Uluç, Uncalı, Siteler, Öğretmenevleri, Altınkum, Arapsuyu. Dystrykt Muratpaşa: Meltem, Şirinyalı, Fener, Güzeloba.' },
  uk: { title: 'Мікрорайони за районами', text: 'Район Коньяалти: Hurma (тут ательє), Liman, Sarısu, Gürsu, Uluç, Uncalı, Siteler, Öğretmenevleri, Altınkum, Arapsuyu. Район Муратпаша: Meltem, Şirinyalı, Fener, Güzeloba.' },
  nl: { title: 'Wijken per district', text: 'District Konyaaltı: Hurma (hier staat het atelier), Liman, Sarısu, Gürsu, Uluç, Uncalı, Siteler, Öğretmenevleri, Altınkum, Arapsuyu. District Muratpaşa: Meltem, Şirinyalı, Fener, Güzeloba.' },
  ar: { title: 'الأحياء حسب المنطقة', text: 'منطقة Konyaaltı: Hurma (حيث الورشة)، Liman, Sarısu, Gürsu, Uluç, Uncalı, Siteler, Öğretmenevleri, Altınkum, Arapsuyu. منطقة Muratpaşa: Meltem, Şirinyalı, Fener, Güzeloba.' },
};
