// ============================================================
// terzihizmeti.com.tr — lib/intl-services.ts
// Ek turist dilleri (ES/FR/PL/UK/NL/AR) için "hizmetler ve kumaşlar" sayfası: /{dil}/{slug}.
// Kural (işletme sahibi, 29 Eki 2026): deri ve kot YALNIZCA tamir/tadilat; sıfırdan dikim keten, pamuk, penye, saten, ipek vb. kumaşlarda.
// Yurt dışı: ölçü online alınır, burada dikilir, istenen ülkeye gönderilir. Fiyat/kargo ücreti YAZILMAZ (WhatsApp).
// Süreler: tadilat genelde 1 gün, özel dikim ~3 gün, acil işler çoğu kez 2–4 saat. Saat 08:00–23:00 her gün. Ücretsiz alım: Konyaaltı.
// ============================================================
import type { ILang } from '@/lib/intl';

export type SvcCopy = {
  slug: string; title: string; desc: string; h1: string; lead: string; back: string;
  altTitle: string; alt: string[]; leatherTitle: string; leather: string;
  madeTitle: string; made: string; fabrics: string[];
  abroadTitle: string; abroad: string; b2bTitle: string; b2b: string; b2bLink: string;
  faqTitle: string; faq: [string, string][]; cta: string; wa: string;
};

export const SVC: Record<ILang, SvcCopy> = {
  es: {
    slug: 'servicios-sastreria-antalya',
    title: 'Arreglos de ropa y ropa a medida en Antalya',
    desc: 'Dobladillos, ajustes, cremalleras, arreglos de cuero y vaqueros y ropa a medida en lino, algodón, seda y satén. Antalya, 08:00–23:00 cada día.',
    h1: 'Arreglos de ropa y confección a medida en Antalya',
    lead: 'Taller de sastrería en Konyaaltı, Antalya, desde 2006. Arreglamos y ajustamos prendas de mujer y de hombre y confeccionamos a medida. Abierto cada día de 08:00 a 23:00, fines de semana incluidos.',
    back: '← Sastre en Antalya para turistas',
    altTitle: 'Arreglos y ajustes',
    alt: ['Acortar el largo de pantalones, vaqueros y faldas', 'Estrechar o ensanchar cintura, caderas y costados', 'Cambiar o reparar cremalleras (pantalón, falda, abrigo, vestido)', 'Chaquetas, abrigos y trajes: mangas, largo y hombros', 'Vestidos de noche y de fiesta: acortar, estrechar y ensanchar', 'Vestidos de lino y de algodón: reparación y ajuste'],
    leatherTitle: 'Cuero y vaqueros: solo reparación y ajuste',
    leather: 'Con el cuero y los vaqueros trabajamos únicamente arreglos y reparaciones: acortar el bajo de vaqueros, reparar o estrechar una chaqueta o un pantalón de cuero, cambiar cremalleras. No confeccionamos prendas nuevas de cuero ni de vaquero.',
    madeTitle: 'Ropa a medida', made: 'Confeccionamos a medida prendas de mujer y de hombre: vestidos, camisas, pantalones y chaquetas, también modelos propios y vestidos de noche. Tomamos las medidas y cosemos en el taller.',
    fabrics: ['Lino', 'Algodón', 'Punto (jersey)', 'Satén', 'Seda'],
    abroadTitle: 'Pedidos desde el extranjero', abroad: 'Si no está en Antalya, puede enviarnos sus medidas en línea: cosemos la prenda aquí y la enviamos al país que indique. Escríbanos por WhatsApp con su modelo o una foto; allí acordamos precio, plazo y envío.',
    b2bTitle: 'Producción en serie y marca propia', b2b: 'Para empresas: producción en serie de ropa y uniformes, sin cantidad mínima, con etiqueta y marca propias, y envío a cualquier país.', b2bLink: 'Anavera Tekstil — producción y exportación',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      ['¿Hacen prendas nuevas de cuero o de vaquero?', 'No. Con cuero y vaqueros hacemos solo arreglos y reparaciones. La confección a medida es en lino, algodón, punto, satén, seda y telas similares.'],
      ['¿Cuánto tarda un arreglo o una prenda a medida?', 'Los arreglos suelen estar listos en 1 día y las prendas a medida en unos 3 días. Los trabajos urgentes a menudo se resuelven en 2–4 horas. Consúltenos por WhatsApp.'],
      ['¿Recogen y entregan en el hotel?', 'Sí. Podemos tomar medidas o recoger la prenda en su hotel y entregarla allí. Es gratis en los barrios de Konyaaltı; para zonas más alejadas se acuerda por WhatsApp.'],
      ['¿Envían la ropa a mi país?', 'Sí. Cosemos según las medidas que nos envíe en línea y enviamos el pedido al país que indique.'],
      ['¿Cuánto cuesta?', 'El precio depende de la prenda y del trabajo. Envíe una foto por WhatsApp y le decimos el precio antes de empezar.'],
    ],
    cta: 'Enviar foto por WhatsApp', wa: 'Hola, quisiera información sobre arreglos o ropa a medida.',
  },
  fr: {
    slug: 'services-couturier-antalya',
    title: 'Retouches et vêtements sur mesure à Antalya',
    desc: 'Ourlets, ajustements, fermetures éclair, retouches cuir et jean, et vêtements sur mesure en lin, coton, soie et satin. Antalya, 08h00–23h00 chaque jour.',
    h1: 'Retouches de vêtements et couture sur mesure à Antalya',
    lead: 'Atelier de couture à Konyaaltı, Antalya, depuis 2006. Nous retouchons et ajustons les vêtements pour femmes et hommes et confectionnons sur mesure. Ouvert tous les jours de 08h00 à 23h00, week-ends compris.',
    back: '← Couturier à Antalya pour les touristes',
    altTitle: 'Retouches et ajustements',
    alt: ['Raccourcir pantalons, jeans et jupes', 'Reprendre ou élargir la taille, les hanches et les côtés', 'Changer ou réparer les fermetures éclair (pantalon, jupe, manteau, robe)', 'Vestes, manteaux et costumes : manches, longueur et épaules', 'Robes de soirée : raccourcir, reprendre et élargir', 'Robes en lin et en coton : réparation et ajustement'],
    leatherTitle: 'Cuir et jean : retouches et réparations uniquement',
    leather: 'Pour le cuir et le jean, nous faisons uniquement des retouches et des réparations : ourlet de jean, réparation ou ajustement d’une veste ou d’un pantalon en cuir, changement de fermeture éclair. Nous ne fabriquons pas de vêtements neufs en cuir ni en jean.',
    madeTitle: 'Vêtements sur mesure', made: 'Nous confectionnons sur mesure des vêtements pour femmes et hommes : robes, chemises, pantalons et vestes, y compris vos propres modèles et des robes de soirée. Nous prenons les mesures et cousons à l’atelier.',
    fabrics: ['Lin', 'Coton', 'Jersey', 'Satin', 'Soie'],
    abroadTitle: 'Commandes depuis l’étranger', abroad: 'Si vous n’êtes pas à Antalya, envoyez-nous vos mesures en ligne : nous cousons le vêtement ici et l’expédions dans le pays de votre choix. Écrivez-nous sur WhatsApp avec votre modèle ou une photo pour convenir du prix, du délai et de l’envoi.',
    b2bTitle: 'Production en série et marque propre', b2b: 'Pour les entreprises : production en série de vêtements et d’uniformes, sans quantité minimale, avec votre étiquette et votre marque, expédiée dans tous les pays.', b2bLink: 'Anavera Tekstil — production et export',
    faqTitle: 'Questions fréquentes',
    faq: [
      ['Fabriquez-vous des vêtements neufs en cuir ou en jean ?', 'Non. Pour le cuir et le jean, nous faisons uniquement des retouches et des réparations. Le sur-mesure se fait en lin, coton, jersey, satin, soie et tissus similaires.'],
      ['Combien de temps prend une retouche ou une pièce sur mesure ?', 'Les retouches sont en général prêtes en 1 jour et les pièces sur mesure en environ 3 jours. Les travaux urgents se font souvent en 2 à 4 heures. Demandez-nous sur WhatsApp.'],
      ['Venez-vous chercher et livrer à l’hôtel ?', 'Oui. Nous pouvons prendre les mesures ou récupérer le vêtement à votre hôtel et le livrer sur place. C’est gratuit dans les quartiers de Konyaaltı ; pour les zones plus éloignées, cela se convient sur WhatsApp.'],
      ['Expédiez-vous les vêtements dans mon pays ?', 'Oui. Nous cousons d’après les mesures que vous nous envoyez en ligne et expédions la commande dans le pays de votre choix.'],
      ['Quel est le prix ?', 'Le prix dépend du vêtement et du travail. Envoyez une photo sur WhatsApp et nous vous indiquons le prix avant de commencer.'],
    ],
    cta: 'Envoyer une photo sur WhatsApp', wa: 'Bonjour, je souhaite des informations sur des retouches ou un vêtement sur mesure.',
  },
  pl: {
    slug: 'uslugi-krawieckie-antalya',
    title: 'Przeróbki i odzież szyta na miarę w Antalyi',
    desc: 'Skracanie, zwężanie, zamki, naprawa skóry i jeansu oraz szycie na miarę z lnu, bawełny, jedwabiu i satyny. Antalya, 8:00–23:00 codziennie.',
    h1: 'Przeróbki krawieckie i szycie na miarę w Antalyi',
    lead: 'Zakład krawiecki w Konyaaltı w Antalyi, od 2006 roku. Przerabiamy i naprawiamy odzież damską i męską oraz szyjemy na miarę. Czynne codziennie od 8:00 do 23:00, także w weekendy.',
    back: '← Krawiec w Antalyi dla turystów',
    altTitle: 'Przeróbki i poprawki',
    alt: ['Skracanie spodni, jeansów i spódnic', 'Zwężanie i poszerzanie talii, bioder i boków', 'Wymiana i naprawa zamków (spodnie, spódnica, płaszcz, sukienka)', 'Marynarki, płaszcze i garnitury: rękawy, długość i ramiona', 'Suknie wieczorowe: skracanie, zwężanie i poszerzanie', 'Sukienki z lnu i bawełny: naprawa i dopasowanie'],
    leatherTitle: 'Skóra i jeans: tylko naprawy i przeróbki',
    leather: 'Skórę i jeans tylko naprawiamy i przerabiamy: skracamy nogawki jeansów, naprawiamy lub zwężamy skórzaną kurtkę albo spodnie, wymieniamy zamki. Nie szyjemy nowych ubrań ze skóry ani z jeansu.',
    madeTitle: 'Szycie na miarę', made: 'Szyjemy na miarę odzież damską i męską: sukienki, koszule, spodnie i marynarki, także według własnego projektu, oraz suknie wieczorowe. Mierzymy i szyjemy w naszej pracowni.',
    fabrics: ['Len', 'Bawełna', 'Dzianina (jersey)', 'Satyna', 'Jedwab'],
    abroadTitle: 'Zamówienia z zagranicy', abroad: 'Jeśli nie jesteś w Antalyi, prześlij nam wymiary online: uszyjemy ubranie tutaj i wyślemy do wybranego kraju. Napisz na WhatsApp i dołącz projekt lub zdjęcie, a ustalimy cenę, termin i wysyłkę.',
    b2bTitle: 'Produkcja seryjna i własna marka', b2b: 'Dla firm: produkcja seryjna odzieży i mundurów, bez minimalnej ilości, z Państwa metką i marką, wysyłka do dowolnego kraju.', b2bLink: 'Anavera Tekstil — produkcja i eksport',
    faqTitle: 'Najczęstsze pytania',
    faq: [
      ['Czy szyjecie nowe ubrania ze skóry lub jeansu?', 'Nie. Skórę i jeans tylko naprawiamy i przerabiamy. Szycie na miarę wykonujemy z lnu, bawełny, dzianiny, satyny, jedwabiu i podobnych tkanin.'],
      ['Ile trwa przeróbka lub szycie na miarę?', 'Przeróbki są zwykle gotowe w 1 dzień, a ubrania szyte na miarę w około 3 dni. Pilne zlecenia często realizujemy w 2–4 godziny. Zapytaj na WhatsApp.'],
      ['Czy odbieracie i dostarczacie do hotelu?', 'Tak. Możemy zdjąć miarę lub odebrać ubranie w hotelu i tam je dostarczyć. W dzielnicach Konyaaltı jest to bezpłatne; w dalszych rejonach ustalamy to przez WhatsApp.'],
      ['Czy wysyłacie ubrania do mojego kraju?', 'Tak. Szyjemy według wymiarów przysłanych online i wysyłamy zamówienie do wybranego kraju.'],
      ['Ile to kosztuje?', 'Cena zależy od rodzaju ubrania i pracy. Wyślij zdjęcie na WhatsApp, a podamy cenę przed rozpoczęciem pracy.'],
    ],
    cta: 'Wyślij zdjęcie na WhatsApp', wa: 'Dzień dobry, proszę o informacje o przeróbce lub szyciu na miarę.',
  },
  uk: {
    slug: 'poslugy-kravtsya-antaliya',
    title: 'Підгонка та пошив одягу на замовлення в Анталії',
    desc: 'Вкорочення, зуження, блискавки, ремонт шкіри та джинсів, пошив на замовлення з льону, бавовни, шовку й атласу. Анталія, щодня 08:00–23:00.',
    h1: 'Підгонка одягу та пошив на замовлення в Анталії',
    lead: 'Ательє в Коньяалти, Анталія, з 2006 року. Підганяємо та ремонтуємо жіночий і чоловічий одяг, шиємо на замовлення. Працюємо щодня з 08:00 до 23:00, у вихідні теж.',
    back: '← Кравець в Анталії для туристів',
    altTitle: 'Підгонка та ремонт',
    alt: ['Вкорочення штанів, джинсів і спідниць', 'Зуження та розширення талії, стегон і боків', 'Заміна та ремонт блискавок (штани, спідниця, пальто, сукня)', 'Піджаки, пальто й костюми: рукави, довжина, плечі', 'Вечірні сукні: вкорочення, зуження, розширення', 'Сукні з льону та бавовни: ремонт і підгонка'],
    leatherTitle: 'Шкіра та джинс: лише ремонт і підгонка',
    leather: 'Зі шкірою та джинсом ми працюємо лише як з ремонтом і підгонкою: вкорочуємо джинси, ремонтуємо або зужуємо шкіряну куртку чи штани, міняємо блискавки. Нових речей зі шкіри чи джинсу не шиємо.',
    madeTitle: 'Пошив на замовлення', made: 'Шиємо на замовлення жіночий і чоловічий одяг: сукні, сорочки, штани й піджаки, також за вашою моделлю, та вечірні сукні. Знімаємо мірки й шиємо в ательє.',
    fabrics: ['Льон', 'Бавовна', 'Трикотаж (джерсі)', 'Атлас', 'Шовк'],
    abroadTitle: 'Замовлення з-за кордону', abroad: 'Якщо ви не в Анталії, надішліть нам мірки онлайн: ми пошиємо річ тут і відправимо в будь-яку країну. Напишіть у WhatsApp із моделлю чи фото, і ми домовимося про ціну, термін і доставку.',
    b2bTitle: 'Серійний пошив і власний бренд', b2b: 'Для компаній: серійне виробництво одягу та уніформи без мінімальної кількості, з вашою етикеткою та брендом, відправлення в будь-яку країну.', b2bLink: 'Anavera Tekstil — виробництво й експорт',
    faqTitle: 'Часті запитання',
    faq: [
      ['Чи шиєте ви нові речі зі шкіри або джинсу?', 'Ні. Зі шкірою та джинсом ми лише ремонтуємо й підганяємо. Пошив на замовлення виконуємо з льону, бавовни, трикотажу, атласу, шовку та подібних тканин.'],
      ['Скільки часу займає підгонка чи пошив?', 'Підгонка зазвичай готова за 1 день, пошив на замовлення — приблизно за 3 дні. Термінові роботи часто виконуємо за 2–4 години. Уточніть у WhatsApp.'],
      ['Чи забираєте та привозите в готель?', 'Так. Можемо зняти мірки або забрати річ у вашому готелі й привезти назад. У районах Коньяалти це безкоштовно; для віддаленіших місць домовляємося у WhatsApp.'],
      ['Чи відправляєте речі до моєї країни?', 'Так. Шиємо за мірками, які ви надішлете онлайн, і відправляємо замовлення в обрану країну.'],
      ['Скільки це коштує?', 'Ціна залежить від речі та роботи. Надішліть фото у WhatsApp, і ми назвемо ціну до початку роботи.'],
    ],
    cta: 'Надіслати фото у WhatsApp', wa: 'Добрий день, мене цікавить підгонка або пошив одягу на замовлення.',
  },
  nl: {
    slug: 'kleermaker-diensten-antalya',
    title: 'Kleding vermaken en maatwerk in Antalya',
    desc: 'Inkorten, innemen, ritsen, leer- en jeansreparatie en maatwerk in linnen, katoen, zijde en satijn. Antalya, elke dag 08:00–23:00.',
    h1: 'Kleding vermaken en maatwerk laten maken in Antalya',
    lead: 'Kleermakerij in Konyaaltı, Antalya, sinds 2006. Wij vermaken en repareren dames- en herenkleding en maken kleding op maat. Elke dag open van 08:00 tot 23:00, ook in het weekend.',
    back: '← Kleermaker in Antalya voor toeristen',
    altTitle: 'Vermaken en aanpassen',
    alt: ['Broeken, jeans en rokken inkorten', 'Taille, heupen en zijkanten innemen of uitleggen', 'Ritsen vervangen of repareren (broek, rok, jas, jurk)', 'Colberts, jassen en pakken: mouwen, lengte en schouders', 'Avondjurken: inkorten, innemen en uitleggen', 'Linnen en katoenen jurken: repareren en aanpassen'],
    leatherTitle: 'Leer en jeans: alleen reparatie en vermaken',
    leather: 'Leer en jeans doen wij alleen als reparatie en vermaakwerk: jeans inkorten, een leren jas of broek repareren of innemen, ritsen vervangen. Nieuwe kleding van leer of jeans maken wij niet.',
    madeTitle: 'Kleding op maat', made: 'Wij maken dames- en herenkleding op maat: jurken, overhemden, broeken en jasjes, ook naar eigen ontwerp, en avondkleding. Wij nemen de maten op en naaien in onze eigen werkplaats.',
    fabrics: ['Linnen', 'Katoen', 'Tricot (jersey)', 'Satijn', 'Zijde'],
    abroadTitle: 'Bestellen vanuit het buitenland', abroad: 'Bent u niet in Antalya? Stuur ons uw maten online: wij naaien het kledingstuk hier en versturen het naar het land van uw keuze. Stuur uw model of een foto via WhatsApp, dan spreken we prijs, doorlooptijd en verzending af.',
    b2bTitle: 'Serieproductie en eigen merk', b2b: 'Voor bedrijven: serieproductie van kleding en uniformen, zonder minimale afname, met uw eigen label en merk, verzonden naar elk land.', b2bLink: 'Anavera Tekstil — productie en export',
    faqTitle: 'Veelgestelde vragen',
    faq: [
      ['Maken jullie nieuwe kleding van leer of jeans?', 'Nee. Leer en jeans doen wij alleen als reparatie en vermaakwerk. Maatwerk maken wij van linnen, katoen, tricot, satijn, zijde en vergelijkbare stoffen.'],
      ['Hoe lang duurt vermaken of maatwerk?', 'Vermaakwerk is meestal in 1 dag klaar, maatwerk in ongeveer 3 dagen. Spoedklussen zijn vaak in 2 tot 4 uur klaar. Vraag het via WhatsApp.'],
      ['Halen jullie kleding op en brengen jullie die terug naar het hotel?', 'Ja. Wij kunnen de maten opnemen of de kleding ophalen bij uw hotel en daar weer terugbrengen. In de wijken van Konyaaltı is dat gratis; voor verder weg spreken we het af via WhatsApp.'],
      ['Sturen jullie kleding naar mijn land?', 'Ja. Wij naaien naar de maten die u online doorgeeft en sturen de bestelling naar het land van uw keuze.'],
      ['Wat kost het?', 'De prijs hangt af van het kledingstuk en het werk. Stuur een foto via WhatsApp, dan noemen wij de prijs voordat wij beginnen.'],
    ],
    cta: 'Stuur een foto via WhatsApp', wa: 'Hallo, ik heb informatie nodig over vermaken of maatwerk.',
  },
  ar: {
    slug: 'khadamat-khayyat-antalya',
    title: 'تعديل الملابس وخياطة حسب المقاس في أنطاليا',
    desc: 'تقصير وتضييق وتبديل السحّابات وإصلاح الجلد والجينز، وخياطة حسب المقاس بالكتان والقطن والحرير والساتان. أنطاليا، يوميًا 08:00–23:00.',
    h1: 'تعديل الملابس والخياطة حسب المقاس في أنطاليا',
    lead: 'ورشة خياطة في كونيالتي بأنطاليا منذ عام 2006. نعدّل ونصلح الملابس النسائية والرجالية ونخيط حسب المقاس. نعمل يوميًا من 08:00 إلى 23:00 بما في ذلك عطلة نهاية الأسبوع.',
    back: '← خيّاط في أنطاليا للسياح',
    altTitle: 'التعديل والإصلاح',
    alt: ['تقصير البناطيل والجينز والتنانير', 'تضييق أو توسيع الخصر والوركين والجوانب', 'تبديل السحّابات وإصلاحها (بنطال، تنورة، معطف، فستان)', 'السترات والمعاطف والبدلات: الأكمام والطول والأكتاف', 'فساتين السهرة: تقصير وتضييق وتوسيع', 'فساتين الكتان والقطن: إصلاح وتعديل'],
    leatherTitle: 'الجلد والجينز: إصلاح وتعديل فقط',
    leather: 'نتعامل مع الجلد والجينز إصلاحًا وتعديلًا فقط: تقصير الجينز، وإصلاح أو تضييق سترة أو بنطال جلدي، وتبديل السحّابات. لا نصنع ملابس جديدة من الجلد أو الجينز.',
    madeTitle: 'خياطة حسب المقاس', made: 'نخيط حسب المقاس ملابس نسائية ورجالية: فساتين وقمصانًا وبناطيل وسترات، وبحسب تصميمك الخاص، إضافة إلى فساتين السهرة. نأخذ المقاسات ونخيط في ورشتنا.',
    fabrics: ['الكتان', 'القطن', 'الجيرسيه', 'الساتان', 'الحرير'],
    abroadTitle: 'الطلبات من خارج تركيا', abroad: 'إذا لم تكن في أنطاليا فأرسل لنا مقاساتك عبر الإنترنت: نخيط القطعة هنا ونرسلها إلى البلد الذي تختاره. راسلنا على واتساب مع التصميم أو صورة، ونتفق على السعر والمدة والشحن.',
    b2bTitle: 'إنتاج بالجملة وعلامة تجارية خاصة', b2b: 'للشركات: إنتاج ملابس وزيّ موحّد بكميات كبيرة دون حدّ أدنى للطلب، بملصقك وعلامتك التجارية، مع الشحن إلى أي بلد.', b2bLink: 'Anavera Tekstil — الإنتاج والتصدير',
    faqTitle: 'الأسئلة الشائعة',
    faq: [
      ['هل تصنعون ملابس جديدة من الجلد أو الجينز؟', 'لا. نتعامل مع الجلد والجينز إصلاحًا وتعديلًا فقط. أما الخياطة حسب المقاس فتكون بالكتان والقطن والجيرسيه والساتان والحرير وأقمشة مشابهة.'],
      ['كم تستغرق عملية التعديل أو الخياطة؟', 'التعديلات تكون جاهزة عادةً خلال يوم واحد، والخياطة حسب المقاس خلال نحو 3 أيام. والأعمال العاجلة تُنجز غالبًا خلال 2 إلى 4 ساعات. اسألنا عبر واتساب.'],
      ['هل تستلمون الملابس وتسلّمونها في الفندق؟', 'نعم. يمكننا أخذ المقاسات أو استلام القطعة من فندقك وتسليمها إليه. الخدمة مجانية في أحياء كونيالتي، وللمناطق الأبعد نتفق عبر واتساب.'],
      ['هل ترسلون الملابس إلى بلدي؟', 'نعم. نخيط حسب المقاسات التي ترسلها عبر الإنترنت ونشحن الطلب إلى البلد الذي تختاره.'],
      ['كم السعر؟', 'يعتمد السعر على القطعة ونوع العمل. أرسل صورة عبر واتساب ونخبرك بالسعر قبل البدء.'],
    ],
    cta: 'أرسل صورة عبر واتساب', wa: 'مرحبًا، أريد معلومات عن تعديل الملابس أو الخياطة حسب المقاس.',
  },
};

export const svcUrl = (l: ILang) => `/${l}/${SVC[l].slug}`;
export const isSvcSlug = (l: ILang, s: string) => SVC[l].slug === s;
