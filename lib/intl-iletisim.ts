// ============================================================
// terzihizmeti.com.tr — lib/intl-iletisim.ts
// ES/FR/PL/UK/NL/AR için iletişim sayfası: /{dil}/{slug}. Adres/telefon/harita lib/seo-data.ts + lib/intl.ts'ten.
// Doğrulanmış bilgiler: Hurma Mah. Konyaaltı, 2006'dan beri, her gün 08:00–23:00, TR/EN/RU/DE konuşulur, eve ve otele alım ücretsiz.
// ============================================================
import type { ILang } from '@/lib/intl';

export type IletisimCopy = {
  slug: string; title: string; desc: string; h1: string; lead: string; back: string; howT: string; how: string[];
  faqT: string; faq: [string, string][]; cta: string; wa: string; prices: string;
};
export const ILETISIM: Record<ILang, IletisimCopy> = {
  es: {
    slug: 'contacto-sastre-antalya',
    title: 'Contacto: sastre en Konyaaltı, Antalya',
    desc: 'Taller de sastrería Terzi Can en Hurma, Konyaaltı (Antalya). Abierto cada día 08:00–23:00. WhatsApp, teléfono y mapa. Recogida gratuita en hoteles y domicilios.',
    h1: 'Contacto y cómo llegar',
    lead: 'Taller de sastrería en el barrio de Hurma, Konyaaltı, desde 2006. Abierto todos los días de 08:00 a 23:00, fines de semana incluidos.',
    back: '← Sastre en Antalya para turistas',
    howT: 'Cómo contactarnos',
    how: ['Escríbanos por WhatsApp con una foto de la prenda: es la forma más rápida de saber el precio.', 'Llame por teléfono si prefiere hablar directamente.', 'Venga al taller en Hurma, Konyaaltı, o pida la recogida gratuita en su hotel o domicilio.'],
    faqT: 'Preguntas frecuentes',
    faq: [['¿A qué hora está abierto?', 'Todos los días de 08:00 a 23:00, también fines de semana.'], ['¿Hay que pedir cita?', 'No es necesario. Escriba por WhatsApp y acordamos la hora o la recogida.'], ['¿Qué idiomas hablan?', 'Turco, inglés, ruso y alemán. En otros idiomas puede escribirnos por WhatsApp.']],
    cta: 'Escribir por WhatsApp',
    wa: 'Hola, quiero información. Le escribo desde su página web.',
    prices: 'Ver precios',
  },
  fr: {
    slug: 'contact-couturier-antalya',
    title: 'Contact : couturier à Konyaaltı, Antalya',
    desc: 'Atelier de couture Terzi Can à Hurma, Konyaaltı (Antalya). Ouvert tous les jours 08h00–23h00. WhatsApp, téléphone et plan. Prise en charge gratuite à l’hôtel et à domicile.',
    h1: 'Contact et accès',
    lead: 'Atelier de couture dans le quartier de Hurma, à Konyaaltı, depuis 2006. Ouvert tous les jours de 08h00 à 23h00, week-ends compris.',
    back: '← Couturier à Antalya pour les touristes',
    howT: 'Comment nous joindre',
    how: ['Écrivez-nous sur WhatsApp avec une photo du vêtement : c’est le moyen le plus rapide de connaître le prix.', 'Appelez-nous si vous préférez parler directement.', 'Passez à l’atelier à Hurma, Konyaaltı, ou demandez la prise en charge gratuite à votre hôtel ou à domicile.'],
    faqT: 'Questions fréquentes',
    faq: [['Quels sont les horaires ?', 'Tous les jours de 08h00 à 23h00, week-ends compris.'], ['Faut-il prendre rendez-vous ?', 'Ce n’est pas nécessaire. Écrivez sur WhatsApp et nous convenons de l’heure ou de la prise en charge.'], ['Quelles langues parlez-vous ?', 'Turc, anglais, russe et allemand. Dans d’autres langues, écrivez-nous sur WhatsApp.']],
    cta: 'Écrire sur WhatsApp',
    wa: 'Bonjour, je souhaite des informations. Je vous écris depuis votre site.',
    prices: 'Voir les tarifs',
  },
  pl: {
    slug: 'kontakt-krawiec-antalya',
    title: 'Kontakt: krawiec w Konyaaltı, Antalya',
    desc: 'Zakład krawiecki Terzi Can w Hurma, Konyaaltı (Antalya). Czynny codziennie 08:00–23:00. WhatsApp, telefon i mapa. Bezpłatny odbiór z hotelu i domu.',
    h1: 'Kontakt i dojazd',
    lead: 'Zakład krawiecki w dzielnicy Hurma w Konyaaltı, od 2006 roku. Czynny codziennie od 08:00 do 23:00, także w weekendy.',
    back: '← Krawiec w Antalyi dla turystów',
    howT: 'Jak się z nami skontaktować',
    how: ['Napisz na WhatsApp i dołącz zdjęcie ubrania — to najszybszy sposób na poznanie ceny.', 'Zadzwoń, jeśli wolisz porozmawiać.', 'Przyjdź do zakładu w Hurma, Konyaaltı, albo poproś o bezpłatny odbiór z hotelu lub domu.'],
    faqT: 'Najczęstsze pytania',
    faq: [['Jakie są godziny otwarcia?', 'Codziennie od 08:00 do 23:00, także w weekendy.'], ['Czy trzeba się umawiać?', 'Nie trzeba. Napisz na WhatsApp, a ustalimy godzinę lub odbiór.'], ['W jakich językach rozmawiacie?', 'Po turecku, angielsku, rosyjsku i niemiecku. W innych językach napisz do nas na WhatsApp.']],
    cta: 'Napisz na WhatsApp',
    wa: 'Dzień dobry, chcę uzyskać informacje. Piszę z Państwa strony.',
    prices: 'Zobacz ceny',
  },
  uk: {
    slug: 'kontakty-kravets-antaliya',
    title: 'Контакти: кравець у Коньяалти, Анталія',
    desc: 'Ательє Terzi Can у Хурмі, Коньяалти (Анталія). Щодня 08:00–23:00. WhatsApp, телефон і карта. Безкоштовний забір з готелю та дому.',
    h1: 'Контакти та як нас знайти',
    lead: 'Ательє в районі Хурма, Коньяалти, з 2006 року. Працюємо щодня з 08:00 до 23:00, у вихідні теж.',
    back: '← Кравець в Анталії для туристів',
    howT: 'Як із нами зв’язатися',
    how: ['Напишіть у WhatsApp і додайте фото речі — це найшвидший спосіб дізнатися ціну.', 'Зателефонуйте, якщо зручніше поговорити.', 'Приходьте в ательє в Хурмі, Коньяалти, або замовте безкоштовний забір з готелю чи дому.'],
    faqT: 'Часті запитання',
    faq: [['Який графік роботи?', 'Щодня з 08:00 до 23:00, у вихідні теж.'], ['Чи потрібен попередній запис?', 'Не обов’язково. Напишіть у WhatsApp, і ми домовимось про час або забір.'], ['Якими мовами ви спілкуєтесь?', 'Турецькою, англійською, російською та німецькою. Іншими мовами пишіть у WhatsApp.']],
    cta: 'Написати у WhatsApp',
    wa: 'Добрий день, хочу отримати інформацію. Пишу з вашого сайту.',
    prices: 'Дивитися ціни',
  },
  nl: {
    slug: 'contact-kleermaker-antalya',
    title: 'Contact: kleermaker in Konyaaltı, Antalya',
    desc: 'Kleermakerij Terzi Can in Hurma, Konyaaltı (Antalya). Dagelijks open 08:00–23:00. WhatsApp, telefoon en kaart. Gratis ophalen bij hotels en woonadressen.',
    h1: 'Contact en route',
    lead: 'Kleermakerij in de wijk Hurma in Konyaaltı, sinds 2006. Dagelijks open van 08:00 tot 23:00, ook in het weekend.',
    back: '← Kleermaker in Antalya voor toeristen',
    howT: 'Zo bereikt u ons',
    how: ['Stuur ons een WhatsApp-bericht met een foto van het kledingstuk: de snelste manier om de prijs te weten.', 'Bel ons als u liever rechtstreeks praat.', 'Kom langs in Hurma, Konyaaltı, of vraag gratis ophalen bij uw hotel of woonadres.'],
    faqT: 'Veelgestelde vragen',
    faq: [['Wat zijn de openingstijden?', 'Dagelijks van 08:00 tot 23:00, ook in het weekend.'], ['Moet ik een afspraak maken?', 'Dat hoeft niet. Stuur een WhatsApp-bericht en we spreken een tijd of ophaalmoment af.'], ['Welke talen spreken jullie?', 'Turks, Engels, Russisch en Duits. In andere talen kunt u ons via WhatsApp schrijven.']],
    cta: 'Stuur een WhatsApp-bericht',
    wa: 'Hallo, ik wil graag informatie. Ik schrijf vanaf jullie website.',
    prices: 'Prijzen bekijken',
  },
  ar: {
    slug: 'ittisal-khayyat-antalya',
    title: 'اتصل بنا: خيّاط في كونيالتي، أنطاليا',
    desc: 'ورشة خياطة تيرزي جان في حي هورما، كونيالتي (أنطاليا). مفتوحة يوميًا 08:00–23:00. واتساب وهاتف وخريطة. استلام مجاني من الفنادق والمنازل.',
    h1: 'اتصل بنا وكيف تصل إلينا',
    lead: 'ورشة خياطة في حي هورما بكونيالتي منذ عام 2006. مفتوحة يوميًا من 08:00 إلى 23:00 بما في ذلك عطلة نهاية الأسبوع.',
    back: '← خيّاط في أنطاليا للسياح',
    howT: 'كيف تتواصل معنا',
    how: ['راسلنا عبر واتساب مع صورة القطعة: هذه أسرع طريقة لمعرفة السعر.', 'اتصل بنا هاتفيًا إذا كنت تفضّل التحدث مباشرة.', 'تفضّل بزيارة الورشة في هورما بكونيالتي، أو اطلب الاستلام المجاني من فندقك أو منزلك.'],
    faqT: 'أسئلة شائعة',
    faq: [['ما ساعات العمل؟', 'يوميًا من 08:00 إلى 23:00 بما في ذلك عطلة نهاية الأسبوع.'], ['هل أحتاج إلى موعد؟', 'لا حاجة لذلك. راسلنا عبر واتساب ونتفق على الوقت أو الاستلام.'], ['ما اللغات التي تتحدثون بها؟', 'التركية والإنجليزية والروسية والألمانية. وبلغات أخرى يمكنك مراسلتنا عبر واتساب.']],
    cta: 'راسلنا عبر واتساب',
    wa: 'مرحبًا، أريد الحصول على معلومات. أراسلكم من موقعكم.',
    prices: 'عرض الأسعار',
  },
};
export const iletisimUrl = (l: ILang) => `/${l}/${ILETISIM[l].slug}`;
export const isIletisimSlug = (l: ILang, s: string) => ILETISIM[l].slug === s;
