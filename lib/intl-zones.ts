// ============================================================
// terzihizmeti.com.tr — lib/intl-zones.ts
// Ek turist dilleri (ES/FR/PL/UK/NL/AR) için otel bölgesi derinlik sayfaları: /{dil}/{bölge-slug}.
// Bölgeler: işletme sahibinin onayladığı Belek, Lara, Güzeloba, Side, Kemer + atölyenin bulunduğu Konyaaltı.
// Veri: otel adları ve bölge tanımı lib/otel-bolgeleri.ts'ten; mesafe/dakika YAZILMAZ (sitenin kuralı).
// Ücretsiz alım-teslim yalnızca Konyaaltı; diğer bölgelerde koşullar WhatsApp'tan teyit edilir.
// ============================================================
import { ILANGS, type ILang } from '@/lib/intl';

import { DELIVERY } from '@/lib/delivery';
export const ZONE_SLUGS = ['belek', 'lara', 'guzeloba', 'side', 'kemer', 'konyaalti', 'kundu', 'muratpasa', 'goynuk', 'antalya'] as const;
export type ZoneSlug = (typeof ZONE_SLUGS)[number];
export const isZone = (s: string): s is ZoneSlug => (ZONE_SLUGS as readonly string[]).includes(s);

const PREFIX: Record<ILang, string> = {
  es: 'sastre-hoteles', fr: 'couturier-hotels', pl: 'krawiec-hotele', uk: 'kravets-hoteli', nl: 'kleermaker-hotels', ar: 'khayyat-fanadiq',
};
export const zoneSlug = (l: ILang, z: ZoneSlug) => `${PREFIX[l]}-${z}`;
export const zoneUrl = (l: ILang, z: ZoneSlug) => `/${l}/${zoneSlug(l, z)}`;
export const parseZone = (l: ILang, slug: string): ZoneSlug | undefined => ZONE_SLUGS.find((z) => zoneSlug(l, z) === slug);

/** Mevcut TR/EN/RU/DE otel bölgesi sayfalarının hreflang'ına eklenecek yeni dil karşılıkları. */
export const zoneAlt = (z: string): Record<string, string> =>
  isZone(z) ? Object.fromEntries(ILANGS.map((l) => [l, `https://terzihizmeti.com.tr${zoneUrl(l, z)}`])) : {};

const NAMES: Record<ILang, Record<ZoneSlug, string>> = {
  es: { belek: 'Belek', lara: 'Lara', guzeloba: 'Güzeloba', side: 'Side', kemer: 'Kemer', konyaalti: 'Konyaaltı', kundu: 'Kundu', muratpasa: 'Muratpaşa', goynuk: 'Göynük', antalya: 'Antalya' },
  fr: { belek: 'Belek', lara: 'Lara', guzeloba: 'Güzeloba', side: 'Side', kemer: 'Kemer', konyaalti: 'Konyaaltı', kundu: 'Kundu', muratpasa: 'Muratpaşa', goynuk: 'Göynük', antalya: 'Antalya' },
  pl: { belek: 'Belek', lara: 'Lara', guzeloba: 'Güzeloba', side: 'Side', kemer: 'Kemer', konyaalti: 'Konyaaltı', kundu: 'Kundu', muratpasa: 'Muratpaşa', goynuk: 'Göynük', antalya: 'Antalya' },
  nl: { belek: 'Belek', lara: 'Lara', guzeloba: 'Güzeloba', side: 'Side', kemer: 'Kemer', konyaalti: 'Konyaaltı', kundu: 'Kundu', muratpasa: 'Muratpaşa', goynuk: 'Göynük', antalya: 'Antalya' },
  uk: { belek: 'Белек', lara: 'Лара', guzeloba: 'Гюзельоба', side: 'Сіде', kemer: 'Кемер', konyaalti: 'Коньяалти', kundu: 'Кунду', muratpasa: 'Муратпаша', goynuk: 'Гейнюк', antalya: 'Анталія' },
  ar: { belek: 'بيليك', lara: 'لارا', guzeloba: 'غوزيلوبا', side: 'سيدي', kemer: 'كيمر', konyaalti: 'كونيالتي', kundu: 'كوندو', muratpasa: 'موراتباشا', goynuk: 'غوينوك', antalya: 'أنطاليا' },
};

const BLURB: Record<ILang, Record<ZoneSlug, string>> = {
  es: {
    belek: 'Belek es la zona vacacional de Antalya conocida por sus campos de golf y sus resorts de 5 estrellas.',
    lara: 'Lara está cerca del centro de la ciudad, con una larga playa de arena y hoteles alineados a lo largo de la costa.',
    guzeloba: 'Güzeloba está en el lado este de Lara: un tramo de hoteles frente al mar más tranquilo que el centro.',
    side: 'Side es un pueblo vacacional histórico cerca de Manavgat, con ruinas antiguas y muchos hoteles de playa uno junto a otro.',
    kemer: 'Kemer es una localidad costera donde los montes Tauro caen hacia el mar, conocida por su puerto deportivo y sus resorts. El distrito incluye también Beldibi, Göynük y Çamyuva.',
    konyaalti: 'Konyaaltı, donde está nuestro propio taller, reúne hoteles y apartahoteles a lo largo de siete kilómetros de costa.',
    kundu: 'Kundu (Aksu), justo al este de Lara, es una zona hotelera con numerosos resorts de cinco estrellas todo incluido.',
    muratpasa: 'Muratpaşa es el distrito central de Antalya: abarca Kaleiçi, los hoteles del centro, el barrio de Meltem y parte de la zona de Lara. En Meltem la recogida y la entrega son gratuitas.',
    goynuk: 'Göynük, al norte de Kemer, es una tranquila franja de hoteles junto al mar, cerca del cañón de Göynük.',
    antalya: 'Antalya reúne zonas hoteleras en toda la costa: Konyaaltı, Lara, Kundu, Belek, Side, Kemer y Göynük. Atendemos hoteles en todas ellas.',
  },
  fr: {
    belek: 'Belek est la zone de vacances d\'Antalya connue pour ses terrains de golf et ses complexes hôteliers 5 étoiles.',
    lara: 'Lara est proche du centre-ville, avec une longue plage de sable et des hôtels alignés le long de la côte.',
    guzeloba: 'Güzeloba se trouve du côté est de Lara : une portion d\'hôtels en bord de mer plus calme que le centre.',
    side: 'Side est une station balnéaire historique près de Manavgat, où des ruines antiques côtoient de nombreux hôtels de plage.',
    kemer: 'Kemer est une ville côtière où les monts Taurus plongent dans la mer, connue pour sa marina et ses complexes hôteliers. Le district comprend aussi Beldibi, Göynük et Çamyuva.',
    konyaalti: 'Konyaaltı, où se trouve notre atelier, accueille hôtels et appart-hôtels le long de sept kilomètres de côte.',
    kundu: 'Kundu (Aksu), juste à l\'est de Lara, est une zone hôtelière avec de nombreux resorts cinq étoiles tout compris.',
    muratpasa: 'Muratpaşa est le district central d\'Antalya : il comprend Kaleiçi, les hôtels du centre, le quartier de Meltem et une partie de Lara. À Meltem, la collecte et la livraison sont gratuites.',
    goynuk: 'Göynük, au nord de Kemer, est une paisible bande d\'hôtels en bord de mer, près du canyon de Göynük.',
    antalya: 'Antalya compte des zones hôtelières le long de toute la côte : Konyaaltı, Lara, Kundu, Belek, Side, Kemer et Göynük. Nous desservons les hôtels de toutes ces zones.',
  },
  pl: {
    belek: 'Belek to wakacyjny rejon Antalyi znany z pól golfowych i pięciogwiazdkowych kompleksów hotelowych.',
    lara: 'Lara leży blisko centrum miasta, z długą piaszczystą plażą i hotelami ułożonymi wzdłuż wybrzeża.',
    guzeloba: 'Güzeloba leży po wschodniej stronie Lary: spokojniejszy niż centrum pas hoteli nad morzem.',
    side: 'Side to historyczna miejscowość wypoczynkowa niedaleko Manavgat, gdzie starożytne ruiny sąsiadują z wieloma hotelami plażowymi.',
    kemer: 'Kemer to nadmorskie miasteczko, w którym góry Taurus opadają do morza, znane z mariny i kompleksów hotelowych. W skład rejonu wchodzą też Beldibi, Göynük i Çamyuva.',
    konyaalti: 'Konyaaltı, gdzie mieści się nasza pracownia, to hotele i aparthotele ułożone wzdłuż siedmiu kilometrów wybrzeża.',
    kundu: 'Kundu (Aksu), tuż na wschód od Lary, to strefa hotelowa z wieloma pięciogwiazdkowymi kompleksami all inclusive.',
    muratpasa: 'Muratpaşa to centralny dystrykt Antalyi: obejmuje Kaleiçi, hotele w centrum, osiedle Meltem i część rejonu Lara. W Meltem odbiór i dowóz są bezpłatne.',
    goynuk: 'Göynük, na północ od Kemer, to spokojny pas hoteli nad morzem, blisko kanionu Göynük.',
    antalya: 'Antalya ma strefy hotelowe na całym wybrzeżu: Konyaaltı, Lara, Kundu, Belek, Side, Kemer i Göynük. Obsługujemy hotele we wszystkich tych rejonach.',
  },
  uk: {
    belek: 'Белек це курортна зона Анталії, відома гольф-полями та 5-зірковими готелями.',
    lara: 'Лара розташована поруч із центром міста: довгий піщаний пляж і готелі вздовж узбережжя.',
    guzeloba: 'Гюзельоба лежить у східній частині Лари: тихіша, ніж центр, смуга готелів біля моря.',
    side: 'Сіде це історичне курортне містечко поблизу Манавгата, де античні руїни сусідять із багатьма пляжними готелями.',
    kemer: 'Кемер це приморське містечко, де гори Тавр спускаються до моря, відоме мариною та курортними готелями. До району також належать Бельдібі, Гейнюк і Чамюва.',
    konyaalti: 'Коньяалти, де розташоване наше ательє, це готелі й апарт-готелі вздовж семи кілометрів узбережжя.',
    kundu: 'Кунду (Аксу), одразу на схід від Лари, — готельна зона з численними п\'ятизірковими курортами «все включено».',
    muratpasa: 'Муратпаша — центральний район Анталії: до нього входять Калеїчі, готелі в центрі, мікрорайон Мельтем і частина Лари. У Мельтемі забір і доставка безкоштовні.',
    goynuk: 'Гейнюк, на північ від Кемера, — спокійна смуга готелів біля моря, поруч із каньйоном Гейнюк.',
    antalya: 'В Анталії готельні зони розташовані вздовж усього узбережжя: Коньяалти, Лара, Кунду, Белек, Сіде, Кемер і Гейнюк. Ми обслуговуємо готелі в усіх цих районах.',
  },
  nl: {
    belek: 'Belek is het vakantiegebied van Antalya, bekend om zijn golfbanen en 5-sterrenresorts.',
    lara: 'Lara ligt dicht bij het stadscentrum, met een lang zandstrand en hotels langs de kust.',
    guzeloba: 'Güzeloba ligt aan de oostkant van Lara: een rustiger strook strandhotels dan het centrum.',
    side: 'Side is een historisch vakantiestadje bij Manavgat, waar oude ruïnes en veel strandhotels naast elkaar liggen.',
    kemer: 'Kemer is een kustplaats waar het Taurusgebergte tot aan het water afdaalt, bekend om zijn jachthaven en resorts. Ook Beldibi, Göynük en Çamyuva horen bij het district.',
    konyaalti: 'Konyaaltı, waar ons eigen atelier staat, telt hotels en aparthotels langs zeven kilometer kustlijn.',
    kundu: 'Kundu (Aksu), net ten oosten van Lara, is een hotelzone met veel vijfsterrenresorts met all-inclusive.',
    muratpasa: 'Muratpaşa is het centrale district van Antalya: Kaleiçi, hotels in het centrum, de wijk Meltem en een deel van Lara. In Meltem is ophalen en terugbrengen gratis.',
    goynuk: 'Göynük, ten noorden van Kemer, is een rustige hotelstrook aan zee, vlak bij de Göynük-kloof.',
    antalya: 'Antalya heeft hotelzones langs de hele kust: Konyaaltı, Lara, Kundu, Belek, Side, Kemer en Göynük. Wij bedienen hotels in al deze zones.',
  },
  ar: {
    belek: 'بيليك منطقة عطلات في أنطاليا تُعرف بملاعب الغولف ومنتجعاتها من فئة 5 نجوم.',
    lara: 'تقع لارا قرب وسط المدينة، وفيها شاطئ رملي طويل وفنادق متراصّة على امتداد الساحل.',
    guzeloba: 'تقع غوزيلوبا في الجانب الشرقي من لارا، وهي شريط من فنادق الواجهة البحرية أكثر هدوءاً من الوسط.',
    side: 'سيدي بلدة سياحية تاريخية قرب مانافغات، حيث تجاور الآثار القديمة كثيراً من فنادق الشاطئ.',
    kemer: 'كيمر بلدة ساحلية تنحدر فيها جبال طوروس نحو البحر، وتُعرف بمرساها السياحي ومنتجعاتها. ويضم القضاء أيضًا بلديبي وغوينوك وتشاميوفا.',
    konyaalti: 'كونيالتي، حيث تقع ورشتنا، تضم فنادق وشققاً فندقية على امتداد سبعة كيلومترات من الساحل.',
    kundu: 'كوندو (أكسو)، شرق لارا مباشرة، منطقة فنادق تضم منتجعات خمس نجوم عديدة بنظام الشامل.',
    muratpasa: 'موراتباشا هي منطقة وسط أنطاليا وتشمل كاليتشي وفنادق المركز وحي ملتم وجزءًا من منطقة لارا. في حي ملتم الاستلام والتسليم مجاني.',
    goynuk: 'غوينوك شمال كيمر شريط هادئ من الفنادق على البحر، قرب وادي غوينوك.',
    antalya: 'تضم أنطاليا مناطق فنادق على امتداد الساحل: كونيالتي ولارا وكوندو وبيليك وسيدي وكيمر وغوينوك. نخدم الفنادق في جميع هذه المناطق.',
  },
};

export type ZCopy = {
  title: (z: string) => string; desc: (z: string) => string; h1: (z: string) => string; lead: (z: string) => string;
  aboutTitle: (z: string) => string; hotelsLabel: string;
  howTitle: string; how: (z: string, home?: boolean) => string;
  faqTitle: string; faq: (z: string, home?: boolean) => [string, string][];
  back: string; zonesLabel: string; wa: (z: string) => string; cta: string;
};

export const ZCOPY: Record<ILang, ZCopy> = {
  es: {
    title: (z) => `Sastre para hoteles en ${z}: arreglos de ropa`,
    desc: (z) => `Arreglos de ropa para huéspedes de hoteles en ${z}, Antalya. Recogida en el hotel, abierto todos los días 08:00–23:00. Precio por WhatsApp.`,
    h1: (z) => `Sastre para hoteles en ${z}`, lead: (z) => `Si se aloja en ${z}, le recogemos la prenda en el hotel y se la devolvemos arreglada. Envíe una foto por WhatsApp y le decimos precio y plazo.`,
    aboutTitle: (z) => `Sobre la zona de ${z}`, hotelsLabel: 'Ejemplos de hoteles de la zona',
    howTitle: 'Cómo funciona en su hotel',
    how: (z) => `Nuestro taller está en Hurma, Konyaaltı. La recogida y la entrega en hoteles son gratuitas en todas las zonas que atendemos, incluida ${z}. Escríbanos por WhatsApp con el nombre de su hotel y su fecha de salida.`,
    faqTitle: 'Preguntas frecuentes',
    faq: (z, home) => [
      [`¿Atienden hoteles en ${z}?`, `Sí, atendemos hoteles en ${z}. La recogida y entrega en hoteles es gratuita; indíquenos el nombre del hotel por WhatsApp.`],
      ['¿Cuánto tarda un arreglo?', `${DELIVERY.es.urgent} ${DELIVERY.es.normal}`],
      ['¿Cómo conozco el precio?', 'Envíe por WhatsApp una foto de la prenda y del problema; normalmente indicamos precio y plazo desde la foto.'],
    ],
    back: '← Sastre en Antalya para turistas', zonesLabel: 'Otras zonas hoteleras', wa: (z) => `Hola, estoy alojado en ${z} y necesito un arreglo de ropa. Le envío una foto.`, cta: 'Escribir por WhatsApp',
  },
  fr: {
    title: (z) => `Tailleur pour hôtels à ${z} : retouches`,
    desc: (z) => `Retouches pour les clients d'hôtels à ${z}, Antalya. Collecte à l'hôtel, ouvert tous les jours 08h00–23h00. Prix sur WhatsApp avec photo.`,
    h1: (z) => `Tailleur pour hôtels à ${z}`, lead: (z) => `Si vous séjournez à ${z}, nous récupérons le vêtement à l'hôtel et vous le rapportons retouché. Envoyez une photo sur WhatsApp : prix et délai vous sont indiqués.`,
    aboutTitle: (z) => `À propos de la zone de ${z}`, hotelsLabel: 'Exemples d\'hôtels de la zone',
    howTitle: 'Comment cela se passe à votre hôtel',
    how: (z) => `Notre atelier est à Hurma, Konyaaltı. La collecte et la livraison dans les hôtels sont gratuites dans toutes les zones desservies, y compris ${z}. Écrivez-nous sur WhatsApp avec le nom de votre hôtel et votre date de départ.`,
    faqTitle: 'Questions fréquentes',
    faq: (z, home) => [
      [`Desservez-vous les hôtels à ${z} ?`, `Oui, nous desservons les hôtels à ${z}. La collecte et la livraison dans les hôtels sont gratuites ; indiquez-nous le nom de l\'hôtel sur WhatsApp.`],
      ['Combien de temps dure une retouche ?', `${DELIVERY.fr.urgent} ${DELIVERY.fr.normal}`],
      ['Comment connaître le prix ?', 'Envoyez sur WhatsApp une photo du vêtement et du problème ; nous indiquons en général prix et délai d\'après la photo.'],
    ],
    back: '← Tailleur à Antalya pour touristes', zonesLabel: 'Autres zones hôtelières', wa: (z) => `Bonjour, je séjourne à ${z} et j'ai besoin d'une retouche. Je vous envoie une photo.`, cta: 'Écrire sur WhatsApp',
  },
  pl: {
    title: (z) => `Krawiec dla hoteli w ${z}: przeróbki ubrań`,
    desc: (z) => `Przeróbki ubrań i krawiectwo dla gości hoteli w ${z}, Antalya. Odbiór i dostawa do hotelu, otwarte codziennie 08:00–23:00. Cena na WhatsAppie po zdjęciu.`,
    h1: (z) => `Krawiec dla hoteli w ${z}`, lead: (z) => `Jeśli mieszkasz w ${z}, odbierzemy ubranie z hotelu i oddamy je poprawione. Wyślij zdjęcie na WhatsAppie, a podamy cenę i termin.`,
    aboutTitle: (z) => `O rejonie ${z}`, hotelsLabel: 'Przykładowe hotele w okolicy',
    howTitle: 'Jak to wygląda w Twoim hotelu',
    how: (z) => `Nasza pracownia jest w Hurma w Konyaaltı. Odbiór i dostawa do hoteli są bezpłatne we wszystkich obsługiwanych rejonach, także w ${z}. Napisz na WhatsAppie z nazwą hotelu i datą wyjazdu.`,
    faqTitle: 'Najczęstsze pytania',
    faq: (z, home) => [
      [`Czy obsługujecie hotele w ${z}?`, `Tak, obsługujemy hotele w ${z}. Odbiór i dostawa do hoteli są bezpłatne; podaj nazwę hotelu na WhatsAppie.`],
      ['Ile trwa przeróbka?', `${DELIVERY.pl.urgent} ${DELIVERY.pl.normal}`],
      ['Jak poznać cenę?', 'Wyślij na WhatsAppie zdjęcie ubrania i problemu; zwykle podajemy cenę i termin na podstawie zdjęcia.'],
    ],
    back: '← Krawiec w Antalyi dla turystów', zonesLabel: 'Inne rejony hotelowe', wa: (z) => `Dzień dobry, mieszkam w ${z} i potrzebuję przeróbki ubrania. Wysyłam zdjęcie.`, cta: 'Napisz na WhatsAppie',
  },
  uk: {
    title: (z) => `Кравець для готелів: ${z}, підгонка одягу`,
    desc: (z) => `Підгонка одягу та пошиття для гостей готелів: ${z}, Анталія. Забір і доставка до готелю, щодня 08:00–23:00. Ціна у WhatsApp за фото.`,
    h1: (z) => `Кравець для готелів: ${z}`, lead: (z) => `Якщо ви зупинилися в районі ${z}, ми заберемо річ у готелі й повернемо підігнаною. Надішліть фото у WhatsApp, і ми назвемо ціну та строк.`,
    aboutTitle: (z) => `Про район: ${z}`, hotelsLabel: 'Приклади готелів у районі',
    howTitle: 'Як це відбувається у вашому готелі',
    how: (z) => `Наше ательє в районі Хурма, Коньяалти. Забір і доставка до готелів безкоштовні в усіх районах, які ми обслуговуємо, зокрема в ${z}. Напишіть у WhatsApp з назвою готелю та датою виїзду.`,
    faqTitle: 'Часті запитання',
    faq: (z, home) => [
      [`Чи обслуговуєте ви готелі в районі ${z}?`, `Так, ми обслуговуємо готелі в районі ${z}. Забір і доставка до готелів безкоштовні; вкажіть назву готелю у WhatsApp.`],
      ['Скільки триває підгонка?', `${DELIVERY.uk.urgent} ${DELIVERY.uk.normal}`],
      ['Як дізнатися ціну?', 'Надішліть у WhatsApp фото речі та проблеми; зазвичай ми називаємо ціну та строк за фото.'],
    ],
    back: '← Кравець в Анталії для туристів', zonesLabel: 'Інші готельні зони', wa: (z) => `Добрий день, я зупинився в районі ${z} і потребую підгонки одягу. Надсилаю фото.`, cta: 'Написати у WhatsApp',
  },
  nl: {
    title: (z) => `Kleermaker voor hotels in ${z}: vermaken`,
    desc: (z) => `Kleding vermaken voor hotelgasten in ${z}, Antalya. Ophalen bij het hotel, dagelijks open 08:00–23:00. Prijs via WhatsApp met foto.`,
    h1: (z) => `Kleermaker voor hotels in ${z}`, lead: (z) => `Verblijft u in ${z}? Dan halen wij het kledingstuk op bij uw hotel en brengen het aangepast terug. Stuur een foto via WhatsApp en wij geven prijs en termijn door.`,
    aboutTitle: (z) => `Over het gebied ${z}`, hotelsLabel: 'Voorbeelden van hotels in de buurt',
    howTitle: 'Zo werkt het bij uw hotel',
    how: (z) => `Ons atelier ligt in Hurma, Konyaaltı. Ophalen en terugbrengen bij hotels is gratis in alle gebieden die wij bedienen, ook in ${z}. Schrijf ons via WhatsApp met de naam van uw hotel en uw vertrekdatum.`,
    faqTitle: 'Veelgestelde vragen',
    faq: (z, home) => [
      [`Bedienen jullie hotels in ${z}?`, `Ja, wij bedienen hotels in ${z}. Ophalen en terugbrengen bij hotels is gratis; geef de hotelnaam door via WhatsApp.`],
      ['Hoe lang duurt een aanpassing?', `${DELIVERY.nl.urgent} ${DELIVERY.nl.normal}`],
      ['Hoe weet ik de prijs?', 'Stuur via WhatsApp een foto van het kledingstuk en het probleem; meestal noemen wij prijs en termijn aan de hand van de foto.'],
    ],
    back: '← Kleermaker in Antalya voor toeristen', zonesLabel: 'Andere hotelgebieden', wa: (z) => `Hallo, ik verblijf in ${z} en heb een kledingaanpassing nodig. Ik stuur een foto.`, cta: 'Stuur een WhatsApp-bericht',
  },
  ar: {
    title: (z) => `خيّاط لفنادق ${z}: تعديل الملابس`,
    desc: (z) => `تعديل الملابس والخياطة لنزلاء فنادق ${z} في أنطاليا. استلام وتسليم في الفندق، مفتوح كل يوم 08:00–23:00. السعر عبر واتساب بصورة.`,
    h1: (z) => `خيّاط لفنادق ${z}`, lead: (z) => `إذا كنت تقيم في ${z} فنستلم القطعة من فندقك ونعيدها إليك معدّلة. أرسل صورة عبر واتساب ونخبرك بالسعر والموعد.`,
    aboutTitle: (z) => `نبذة عن منطقة ${z}`, hotelsLabel: 'أمثلة على فنادق في المنطقة',
    howTitle: 'كيف يتم الأمر في فندقك',
    how: (z) => `ورشتنا في حي هورما بكونيالتي. الاستلام والتسليم في الفنادق مجاني في جميع المناطق التي نخدمها، ومنها ${z}. راسلنا على واتساب باسم فندقك وتاريخ مغادرتك.`,
    faqTitle: 'الأسئلة الشائعة',
    faq: (z, home) => [
      [`هل تخدمون فنادق ${z}؟`, `نعم، نخدم فنادق ${z}. الاستلام والتسليم في الفنادق مجاني؛ أرسل اسم الفندق عبر واتساب.`],
      ['كم يستغرق التعديل؟', `${DELIVERY.ar.urgent} ${DELIVERY.ar.normal}`],
      ['كيف أعرف السعر؟', 'أرسل عبر واتساب صورة للقطعة وللمشكلة؛ نحدد السعر والموعد عادةً من الصورة.'],
    ],
    back: '← خيّاط في أنطاليا للسياح', zonesLabel: 'مناطق فندقية أخرى', wa: (z) => `مرحباً، أقيم في ${z} وأحتاج إلى تعديل ملابس. أرسل لكم صورة.`, cta: 'راسلنا على واتساب',
  },
};


export function zoneData(l: ILang, z: ZoneSlug) {
  return { name: NAMES[l][z], blurb: BLURB[l][z], hotels: [] as string[], home: z === 'konyaalti' };
}
