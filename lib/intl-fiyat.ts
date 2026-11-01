// ============================================================
// terzihizmeti.com.tr — lib/intl-fiyat.ts
// ES/FR/PL/UK/NL/AR için fiyat sayfası: /{dil}/{slug}. Tutarlar lib/facts.ts'ten (eurText) gelir; metinde rakam yazılmaz.
// Kurallar: € fiyatlar "başlangıç" fiyatıdır (sahip kararı); gelinlik DİKİMİ yok; deri/kot yalnız tamir; eve ve otele alım-teslim ücretsiz.
// ============================================================
import type { ILang } from '@/lib/intl';
import { eurText } from '@/lib/facts';

export type FiyatCopy = {
  slug: string; title: string; desc: string; h1: string; lead: string; back: string; t1: string; t2: string;
  rows: string[]; note: string; faqT: string; faq: [string, string][]; cta: string; wa: string; info: string; all: string;
};
/** rows sırası ile birebir: hangi fiyat anahtarı hangi satıra denk gelir. */
export const FIYAT_KEYS = ['hem', 'waist', 'sleeve', 'zipperPants', 'zipperCoat', 'eveningWeddingAlter', 'dressSew', 'skirtPantsSew', 'kidsSew', 'groomSuit'] as const;
export const FIYAT_SPLIT = 6; // ilk 6 satır tadilat, kalanı dikim
export const fiyatDeger = (i: number): string => eurText(FIYAT_KEYS[i]);

export const FIYAT: Record<ILang, FiyatCopy> = {
  es: {
    slug: 'precios-sastre-antalya',
    title: 'Precios de sastrería y arreglos en Antalya',
    desc: 'Precios desde en euros: dobladillo, cintura, mangas, cremalleras, arreglo de vestidos y ropa a medida en Antalya. Foto por WhatsApp, cada día 08:00–23:00.',
    h1: 'Precios de sastrería y arreglos en Antalya',
    lead: 'Tarifas «desde» en euros. El precio final se confirma por WhatsApp con una foto de la prenda, según la tela y el trabajo.',
    back: '← Sastre en Antalya para turistas',
    t1: 'Arreglos y reparaciones',
    t2: 'Confección a medida',
    rows: ['Acortar dobladillo (pantalón, vaquero)', 'Estrechar cintura', 'Acortar mangas', 'Cambiar cremallera de pantalón', 'Cambiar cremallera de abrigo', 'Arreglo de vestido de noche o de novia', 'Vestido a medida', 'Falda o pantalón a medida', 'Ropa infantil a medida', 'Traje de novio a medida'],
    note: 'Desde: el precio final depende de la tela y del trabajo. Arreglos en cuero desde €30. No confeccionamos vestidos de novia (solo arreglos); cuero y vaqueros: solo reparación y ajuste.',
    faqT: 'Preguntas frecuentes',
    faq: [['¿Los precios son fijos?', 'Son precios «desde». Envíe una foto por WhatsApp y le confirmamos el precio exacto antes de empezar.'], ['¿Recogen y entregan en el hotel?', 'Sí. La recogida y la entrega en hoteles y domicilios son gratuitas en todas las zonas que atendemos.'], ['¿En cuánto tiempo está listo?', 'Los trabajos urgentes en 1–2 horas y los normales al día siguiente; la ropa a medida depende del modelo y la cantidad.']],
    cta: 'Enviar foto por WhatsApp',
    wa: 'Hola, quiero el precio de un arreglo. Le envío una foto.',
    info: 'Abierto cada día 08:00–23:00',
    all: 'Todos los servicios',
  },
  fr: {
    slug: 'tarifs-couturier-antalya',
    title: 'Tarifs couture et retouches à Antalya',
    desc: 'Prix à partir de, en euros : ourlet, taille, manches, fermetures, retouches de robes et couture sur mesure à Antalya. Photo sur WhatsApp, 08h00–23h00.',
    h1: 'Tarifs de couture et de retouches à Antalya',
    lead: 'Tarifs « à partir de » en euros. Le prix final est confirmé sur WhatsApp à partir d’une photo du vêtement, selon le tissu et le travail.',
    back: '← Couturier à Antalya pour les touristes',
    t1: 'Retouches et réparations',
    t2: 'Couture sur mesure',
    rows: ['Raccourcir l’ourlet (pantalon, jean)', 'Reprendre la taille', 'Raccourcir les manches', 'Changer la fermeture d’un pantalon', 'Changer la fermeture d’un manteau', 'Retouche de robe de soirée ou de mariée', 'Robe sur mesure', 'Jupe ou pantalon sur mesure', 'Vêtement d’enfant sur mesure', 'Costume de marié sur mesure'],
    note: 'À partir de : le prix final dépend du tissu et du travail. Retouches en cuir dès €30. Nous ne confectionnons pas de robes de mariée (retouches uniquement) ; cuir et jean : réparation et ajustement seulement.',
    faqT: 'Questions fréquentes',
    faq: [['Les prix sont-ils fixes ?', 'Ce sont des prix « à partir de ». Envoyez une photo sur WhatsApp et nous confirmons le prix exact avant de commencer.'], ['Récupérez-vous les vêtements à l’hôtel ?', 'Oui. La prise en charge et la livraison à l’hôtel ou à domicile sont gratuites dans toutes les zones que nous desservons.'], ['Quel est le délai ?', 'Les travaux urgents en 1 à 2 heures, les autres le lendemain ; le sur-mesure dépend du modèle et de la quantité.']],
    cta: 'Envoyer une photo sur WhatsApp',
    wa: 'Bonjour, je souhaite le prix d’une retouche. Je vous envoie une photo.',
    info: 'Ouvert tous les jours 08h00–23h00',
    all: 'Tous les services',
  },
  pl: {
    slug: 'ceny-krawiec-antalya',
    title: 'Cennik krawiectwa i poprawek w Antalyi',
    desc: 'Ceny „od” w euro: skracanie, talia, rękawy, zamki, poprawki sukienek i szycie na miarę w Antalyi. Zdjęcie na WhatsApp, codziennie 08:00–23:00.',
    h1: 'Cennik krawiectwa i poprawek w Antalyi',
    lead: 'Ceny „od” podane w euro. Ostateczną cenę potwierdzamy na WhatsApp na podstawie zdjęcia ubrania, w zależności od materiału i pracy.',
    back: '← Krawiec w Antalyi dla turystów',
    t1: 'Poprawki i naprawy',
    t2: 'Szycie na miarę',
    rows: ['Skrócenie nogawek (spodnie, jeansy)', 'Zwężenie talii', 'Skrócenie rękawów', 'Wymiana zamka w spodniach', 'Wymiana zamka w płaszczu', 'Przeróbka sukni wieczorowej lub ślubnej', 'Sukienka na miarę', 'Spódnica lub spodnie na miarę', 'Ubranie dziecięce na miarę', 'Garnitur pana młodego na miarę'],
    note: 'Od: cena końcowa zależy od materiału i pracy. Poprawki skórzane od €30. Nie szyjemy sukien ślubnych (tylko przeróbki); skóra i jeans: wyłącznie naprawy i poprawki.',
    faqT: 'Najczęstsze pytania',
    faq: [['Czy ceny są stałe?', 'To ceny „od”. Wyślij zdjęcie na WhatsApp, a potwierdzimy dokładną cenę przed rozpoczęciem pracy.'], ['Czy odbieracie ubrania z hotelu?', 'Tak. Odbiór i dostawa do hotelu lub domu są bezpłatne we wszystkich obsługiwanych rejonach.'], ['Jak szybko będzie gotowe?', 'Pilne prace w 1–2 godziny, zwykłe następnego dnia; szycie na miarę zależy od modelu i ilości.']],
    cta: 'Wyślij zdjęcie na WhatsApp',
    wa: 'Dzień dobry, chcę poznać cenę poprawki. Wysyłam zdjęcie.',
    info: 'Czynne codziennie 08:00–23:00',
    all: 'Wszystkie usługi',
  },
  uk: {
    slug: 'tsiny-kravets-antaliya',
    title: 'Ціни на пошив і підгонку одягу в Анталії',
    desc: 'Ціни «від» в євро: підшивання, талія, рукави, блискавки, підгонка суконь і пошив на замовлення в Анталії. Фото у WhatsApp, щодня 08:00–23:00.',
    h1: 'Ціни на пошив і підгонку одягу в Анталії',
    lead: 'Ціни «від» вказано в євро. Остаточну ціну підтверджуємо у WhatsApp за фото речі — залежно від тканини та роботи.',
    back: '← Кравець в Анталії для туристів',
    t1: 'Підгонка та ремонт',
    t2: 'Пошив на замовлення',
    rows: ['Підшити низ (штани, джинси)', 'Зменшити талію', 'Вкоротити рукави', 'Замінити блискавку на штанах', 'Замінити блискавку на пальті чи куртці', 'Підгонка вечірньої чи весільної сукні', 'Сукня на замовлення', 'Спідниця або штани на замовлення', 'Дитячий одяг на замовлення', 'Костюм нареченого на замовлення'],
    note: '«Від»: остаточна ціна залежить від тканини та роботи. Підгонка шкіряних виробів від €30. Весільні сукні не шиємо (лише підгонка); шкіра та джинси — тільки ремонт і підгонка.',
    faqT: 'Часті запитання',
    faq: [['Чи є ціни фіксованими?', 'Це ціни «від». Надішліть фото у WhatsApp — ми підтвердимо точну ціну до початку роботи.'], ['Чи забираєте речі з готелю?', 'Так. Забір і доставка до готелю чи додому безкоштовні в усіх районах, які ми обслуговуємо.'], ['Як швидко буде готово?', 'Термінові роботи — за 1–2 години, звичайні — наступного дня; пошив на замовлення залежить від моделі та кількості.']],
    cta: 'Надіслати фото у WhatsApp',
    wa: 'Добрий день, хочу дізнатися ціну підгонки. Надсилаю фото.',
    info: 'Щодня 08:00–23:00',
    all: 'Усі послуги',
  },
  nl: {
    slug: 'prijzen-kleermaker-antalya',
    title: 'Prijzen kleermaker en kledingaanpassing in Antalya',
    desc: 'Vanafprijzen in euro: zoom, taille, mouwen, ritsen, jurkaanpassing en maatwerk in Antalya. Foto via WhatsApp, dagelijks 08:00–23:00.',
    h1: 'Prijzen voor kleermaker en aanpassingen in Antalya',
    lead: 'Vanafprijzen in euro. De eindprijs bevestigen we via WhatsApp aan de hand van een foto van het kledingstuk, afhankelijk van stof en werk.',
    back: '← Kleermaker in Antalya voor toeristen',
    t1: 'Aanpassingen en reparaties',
    t2: 'Maatwerk',
    rows: ['Zoom inkorten (broek, jeans)', 'Taille innemen', 'Mouwen inkorten', 'Rits van een broek vervangen', 'Rits van een jas vervangen', 'Aanpassing avond- of trouwjurk', 'Jurk op maat', 'Rok of broek op maat', 'Kinderkleding op maat', 'Bruidegomspak op maat'],
    note: 'Vanaf: de eindprijs hangt af van stof en werk. Leeraanpassingen vanaf €30. Trouwjurken maken we niet (alleen aanpassingen); leer en jeans: alleen reparatie en aanpassing.',
    faqT: 'Veelgestelde vragen',
    faq: [['Zijn de prijzen vast?', 'Het zijn vanafprijzen. Stuur een foto via WhatsApp en we bevestigen de exacte prijs voordat we beginnen.'], ['Halen jullie kleding op bij het hotel?', 'Ja. Ophalen en bezorgen bij hotels en woonadressen is gratis in alle gebieden waar we werken.'], ['Hoe snel is het klaar?', 'Spoedwerk in 1–2 uur, gewoon werk de volgende dag; maatwerk hangt af van model en aantal.']],
    cta: 'Foto sturen via WhatsApp',
    wa: 'Hallo, ik wil de prijs weten van een aanpassing. Ik stuur een foto.',
    info: 'Dagelijks geopend 08:00–23:00',
    all: 'Alle diensten',
  },
  ar: {
    slug: 'asaar-khayyat-antalya',
    title: 'أسعار الخياطة والتعديل في أنطاليا',
    desc: 'أسعار «ابتداءً من» باليورو: تقصير البنطلون والخصر والأكمام والسحّابات وتعديل الفساتين والتفصيل في أنطاليا. أرسل صورة عبر واتساب، يوميًا 08:00–23:00.',
    h1: 'أسعار الخياطة والتعديل في أنطاليا',
    lead: 'الأسعار «ابتداءً من» باليورو. نؤكد السعر النهائي عبر واتساب بعد صورة القطعة، حسب القماش والعمل.',
    back: '← خيّاط في أنطاليا للسياح',
    t1: 'التعديل والإصلاح',
    t2: 'التفصيل حسب المقاس',
    rows: ['تقصير الحاشية (بنطلون، جينز)', 'تضييق الخصر', 'تقصير الأكمام', 'استبدال سحّاب البنطلون', 'استبدال سحّاب المعطف', 'تعديل فستان سهرة أو زفاف', 'فستان حسب المقاس', 'تنورة أو بنطلون حسب المقاس', 'ملابس أطفال حسب المقاس', 'بدلة عريس حسب المقاس'],
    note: 'ابتداءً من: السعر النهائي يعتمد على القماش والعمل. تعديلات الجلد ابتداءً من €30. لا نفصّل فساتين الزفاف (تعديل فقط)؛ الجلد والجينز: إصلاح وتعديل فقط.',
    faqT: 'أسئلة شائعة',
    faq: [['هل الأسعار ثابتة؟', 'هذه أسعار «ابتداءً من». أرسل صورة عبر واتساب ونؤكد لك السعر الدقيق قبل البدء.'], ['هل تستلمون الملابس من الفندق؟', 'نعم. الاستلام والتسليم إلى الفنادق والمنازل مجاني في جميع المناطق التي نخدمها.'], ['كم تستغرق المدة؟', 'الأعمال العاجلة خلال ساعة إلى ساعتين والعادية في اليوم التالي؛ والتفصيل يعتمد على الموديل والكمية.']],
    cta: 'أرسل صورة عبر واتساب',
    wa: 'مرحبًا، أريد معرفة سعر تعديل. سأرسل صورة.',
    info: 'مفتوح يوميًا 08:00–23:00',
    all: 'جميع الخدمات',
  },
};
export const fiyatUrl = (l: ILang) => `/${l}/${FIYAT[l].slug}`;
export const isFiyatSlug = (l: ILang, s: string) => FIYAT[l].slug === s;
