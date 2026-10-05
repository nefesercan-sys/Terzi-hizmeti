// components/AnaveraTekstilSayfasi.tsx
// Anavera Tekstil — B2B hazır giyim üretim sayfası (4 dil, her biri ayrı crawl edilebilir URL):
// /anavera-tekstil (tr), /en/anavera-tekstil, /de/anavera-tekstil, /ru/anavera-tekstil
//
// v5: Konumlandırma "model/tasarım → kalıp → kumaş → numune/deneme → seri imalat → ihracat"
// ve teknik destek + danışmanlık olarak yeniden yazıldı. Kaldırılanlar: uydurma istatistikler
// (50K+ adet/ay, 15+ ülke), sertifika iddiaları (OEKO-TEX, GOTS, ISO, AQL), "Onaylı üretici",
// "modern tesis" iddiaları. Sayfada doğrulanamayan hiçbir sayı/sertifika yok.

import Link from 'next/link';

export type AnaveraLang = 'en' | 'tr' | 'de' | 'ru';

const SITE    = 'https://terzihizmeti.com.tr';
const PHONE   = '+90 531 898 64 18';
const PHONE_E = '+905318986418';
const WA = (t: string) => `https://wa.me/${PHONE_E}?text=${encodeURIComponent(t)}`;

export const ANAVERA_URLS: Record<AnaveraLang, string> = {
  tr: `${SITE}/anavera-tekstil`,
  en: `${SITE}/en/anavera-tekstil`,
  de: `${SITE}/de/anavera-tekstil`,
  ru: `${SITE}/ru/anavera-tekstil`,
};

const HOME_URLS: Record<AnaveraLang, string> = {
  tr: SITE,
  en: `${SITE}/en/tailor-service-antalya`,
  de: `${SITE}/de/schneiderservice-antalya`,
  ru: `${SITE}/ru/uslugi-portnogo-antalya`,
};

type Item = { title: string; desc: string };

export type Copy = {
  topBarMsg: string; quoteBtn: string; heroBadge: string; heroTitle1: string; heroTitle2: string;
  heroDesc: string; contactWa: string; callUs: string;
  highlights: Item[];
  whoSub: string; whoTitle: string; whoDesc: string; who: Item[];
  processSub: string; processTitle: string; processDesc: string; process: Item[];
  catSub: string; catTitle: string; cat: Item[]; catMore: string;
  supSub: string; supTitle: string; supDesc: string; supList: string[];
  qSub: string; qTitle: string; q: Item[];
  expSub: string; expTitle: string; expDesc: string;
  faqSub: string; faqTitle: string; faq: Item[];
  ctaTitle: string; ctaDesc: string;
  footDesc: string; footContact: string; footBase: string; footMarkets: string; footMarketsText: string;
  footCopy: string; waFloat: string; waMessage: string; breadcrumbHome: string;
};

export const translations: Record<AnaveraLang, Copy> = {
  en: {
    topBarMsg: 'Garment manufacturing in Turkey: from design to export',
    quoteBtn: 'Get a Quote',
    heroBadge: 'Sample · Serial Production · Export',
    heroTitle1: 'Your Garment, From Fabric Trial to ',
    heroTitle2: 'Serial Production & Export',
    heroDesc: 'Anavera Tekstil takes any garment model from design and pattern making through fabric sourcing, trial samples and serial production to export. We work with entrepreneurs, small and medium businesses, suppliers and large buyers in Turkey and abroad, with technical support, consulting and on-time delivery at every stage.',
    contactWa: 'Contact on WhatsApp',
    callUs: 'Call Us:',
    highlights: [
      { title: 'Every Garment Model', desc: 'Menswear, womenswear, kidswear, workwear and uniforms, knit and woven.' },
      { title: 'Sample to Serial', desc: 'Design, pattern, fabric trial, approved sample, then serial production.' },
      { title: 'No Minimum Order', desc: 'Samples, small runs and large orders are quoted per project.' },
      { title: 'On-Time Delivery', desc: 'Agreed schedule, regular progress updates and checks at each stage.' },
    ],
    whoSub: 'Who We Work With',
    whoTitle: 'Production for Every Scale',
    whoDesc: 'Whether you are making your first collection or reordering a proven style, we plan production around your quantity and budget.',
    who: [
      { title: 'Entrepreneurs & New Brands', desc: 'Start with an idea, sketch or reference garment. We guide you through the technical file, fabric choice and first samples.' },
      { title: 'Small & Medium Businesses', desc: 'Boutiques, labels and suppliers: private label runs with flexible quantities and repeat orders.' },
      { title: 'Large-Scale Buyers', desc: 'Retailers, wholesalers and corporate buyers: serial production planned against an approved sample and a fixed schedule.' },
    ],
    processSub: 'How It Works',
    processTitle: 'From Idea to Export in 8 Stages',
    processDesc: 'We support you at every stage, and serial production starts only after you approve the sample.',
    process: [
      { title: 'Brief & Consultation', desc: 'We review your idea, reference or technical file, target quantity, budget and timeline.' },
      { title: 'Model & Design Development', desc: 'Model details, measurements and technical drawings are prepared or completed together with you.' },
      { title: 'Pattern, Grading & Marker Planning', desc: 'Patterns are drafted, graded to your size range and planned for efficient fabric use.' },
      { title: 'Fabric & Trim Sourcing', desc: 'We help select and source fabric, lining, buttons, zippers, labels and other trims suited to the model and budget.' },
      { title: 'Trial Sample', desc: 'A sample is produced in the intended fabric to check fit, look and workmanship, with revisions as needed.' },
      { title: 'Approval', desc: 'Fabric, pattern, stitching and finishing are fixed in writing. The approved sample becomes the production standard.' },
      { title: 'Serial Production', desc: 'Production follows the approved sample with checks during sewing and before packing.' },
      { title: 'Packing, Export & Delivery', desc: 'Labelling, packing and export documentation support, then delivery to your door or forwarder.' },
    ],
    catSub: 'Product Range',
    catTitle: 'All Garment Models',
    cat: [
      { title: 'Menswear', desc: 'Shirts, polo shirts, trousers, jackets, suits, hoodies and sweatshirts.' },
      { title: 'Womenswear', desc: 'Dresses, blouses, trousers, jackets, suits, loungewear and activewear.' },
      { title: 'Kidswear & Babywear', desc: 'Everyday wear, sleepwear and sets for children and toddlers.' },
      { title: 'Workwear & Uniforms', desc: 'Hotel, restaurant, medical, security and industrial uniforms in your branding.' },
    ],
    catMore: 'Also: knitwear and jersey, outerwear, linen and cotton garments, sleepwear, custom prints and embroidery. If your model is not listed, ask us.',
    supSub: 'Support',
    supTitle: 'Technical Support & Consulting',
    supDesc: 'Many buyers come with a concept rather than a finished technical file. We help you get from concept to a producible garment.',
    supList: [
      'Technical file (tech pack) preparation and measurement tables',
      'Fabric and trim selection by use, season and budget',
      'Fit and size range advice, pattern corrections after trial',
      'Cost review: ways to reduce cost without losing quality',
      'Production planning, quantities and realistic timelines',
      'Labels, packaging and export preparation',
    ],
    qSub: 'Quality & Trust',
    qTitle: 'Quality, Reliability, On-Time Delivery',
    q: [
      { title: 'Approved Sample Is the Standard', desc: 'We do not start serial production before you sign off the sample, and we produce to it.' },
      { title: 'Checks at Every Stage', desc: 'Fabric, cutting, sewing and finishing are checked before the order moves on.' },
      { title: 'Clear Schedule & Updates', desc: 'You get an agreed timeline and progress updates, so there are no surprises at delivery.' },
    ],
    expSub: 'Export',
    expTitle: 'Sourcing Textiles From Turkey',
    expDesc: 'Turkey offers fabric variety, short supply chains and experienced garment workers close to Europe. We handle production and prepare shipments for domestic and international customers, including export documentation support. Shipping method and terms are agreed per order.',
    faqSub: 'Frequently Asked Questions',
    faqTitle: 'Production & Export Details',
    faq: [
      { title: 'What is your minimum order quantity?', desc: 'We do not require a minimum order quantity. Samples, small runs and large orders are each quoted per project. Send your design or a reference photo on WhatsApp.' },
      { title: 'Can I start with only an idea, sketch or photo?', desc: 'Yes. We help prepare the technical details, pattern and fabric proposal, then make a trial sample for your approval.' },
      { title: 'Which stages do you cover?', desc: 'Model and design development, pattern making, fabric and trim sourcing, trial sample, approval, serial production, packing and export preparation.' },
      { title: 'How long does production take?', desc: 'It depends on the model, fabric and quantity. You receive a written schedule with the quote, covering sample, approval and serial production.' },
      { title: 'Do you support export shipments?', desc: 'Yes. We prepare the order for shipping, including packing and invoice documents, and support the other export documents your destination requires.' },
      { title: 'Can I use my own labels and packaging?', desc: 'Yes. We offer private label production with your brand labels, care labels, hangtags and packaging.' },
    ],
    ctaTitle: 'Tell Us About Your Garment',
    ctaDesc: 'Send a sketch, photo or reference garment and your target quantity. We reply with a production proposal.',
    footDesc: 'Garment design support, sample development, serial production and export from Turkey.',
    footContact: 'Contact & Sales',
    footBase: 'Production base: Antalya, Turkey',
    footMarkets: 'Customers',
    footMarketsText: 'Entrepreneurs, small and medium businesses, suppliers and large buyers in Turkey and abroad.',
    footCopy: 'Anavera Tekstil. A garment production branch of terzihizmeti.com.tr',
    waFloat: 'WhatsApp Quote',
    waMessage: 'Hello, I would like information about garment sampling, serial production and export with Anavera Tekstil.',
    breadcrumbHome: 'Home',
  },

  tr: {
    topBarMsg: "Türkiye'den giyim üretimi: tasarımdan ihracata",
    quoteBtn: 'Teklif Al',
    heroBadge: 'Numune · Seri İmalat · İhracat',
    heroTitle1: 'Giysiniz, Kumaş Denemesinden ',
    heroTitle2: 'Seri İmalata ve İhracata',
    heroDesc: 'Anavera Tekstil, her model giysiyi tasarım ve kalıp çalışmasından kumaş temini, deneme numunesi ve seri imalata, oradan ihracata kadar taşır. Yurt içi ve yurt dışındaki girişimcilere, küçük ve orta ölçekli işletmelere, tedarikçilere ve büyük alıcılara her aşamada teknik destek, danışmanlık ve zamanında teslimat sağlar.',
    contactWa: "WhatsApp'tan Ulaşın",
    callUs: 'Bizi Arayın:',
    highlights: [
      { title: 'Tüm Giyim Modelleri', desc: 'Erkek, kadın, çocuk giyimi, iş giyimi ve üniforma; örme ve dokuma.' },
      { title: 'Numuneden Seriye', desc: 'Tasarım, kalıp, kumaş denemesi, onaylı numune, ardından seri imalat.' },
      { title: 'Sipariş Sınırı Yok', desc: 'Numune, az adetli ve yüksek adetli siparişler proje bazında fiyatlandırılır.' },
      { title: 'Zamanında Teslimat', desc: 'Kararlaştırılan takvim, düzenli bilgilendirme ve her aşamada kontrol.' },
    ],
    whoSub: 'Kimlerle Çalışıyoruz',
    whoTitle: 'Her Ölçekte Üretim',
    whoDesc: 'İlk koleksiyonunuzu çıkarıyor da olsanız, tutan bir modelin tekrar siparişini veriyor da olsanız, üretimi adedinize ve bütçenize göre planlıyoruz.',
    who: [
      { title: 'Girişimciler ve Yeni Markalar', desc: 'Bir fikir, çizim ya da örnek ürünle başlayın. Teknik dosya, kumaş seçimi ve ilk numunelerde size eşlik ediyoruz.' },
      { title: 'Küçük ve Orta Ölçekli İşletmeler', desc: 'Butikler, markalar ve tedarikçiler: esnek adetlerle özel marka üretimi ve tekrar siparişler.' },
      { title: 'Büyük Ölçekli Alıcılar', desc: 'Perakendeciler, toptancılar ve kurumsal alıcılar: onaylı numuneye ve sabit takvime göre planlanan seri imalat.' },
    ],
    processSub: 'Nasıl Çalışıyoruz',
    processTitle: 'Fikirden İhracata 8 Aşama',
    processDesc: 'Her aşamada yanınızdayız; seri imalata siz numuneyi onayladıktan sonra başlanır.',
    process: [
      { title: 'Görüşme ve Danışmanlık', desc: 'Fikrinizi, örnek ürününüzü veya teknik dosyanızı; hedef adet, bütçe ve termini birlikte değerlendiririz.' },
      { title: 'Model ve Tasarım Geliştirme', desc: 'Model detayları, ölçüler ve teknik çizimler sizinle birlikte hazırlanır veya tamamlanır.' },
      { title: 'Kalıp, Beden Serisi ve Pastal Planı', desc: 'Kalıp çıkarılır, beden serisine göre büyütülüp küçültülür ve kumaş verimi için pastal planlanır.' },
      { title: 'Kumaş ve Aksesuar Temini', desc: 'Modele ve bütçeye uygun kumaş, astar, düğme, fermuar, etiket gibi malzemelerin seçimi ve temininde yardımcı oluruz.' },
      { title: 'Deneme Numunesi', desc: 'Kullanılacak kumaşla numune dikilir; kalıp, görünüm ve işçilik denenir, gerekirse düzeltme yapılır.' },
      { title: 'Onay', desc: 'Kumaş, kalıp, dikiş ve bitiş detayları yazılı olarak netleşir. Onaylı numune üretim standardı olur.' },
      { title: 'Seri İmalat', desc: 'Üretim onaylı numuneye göre yapılır; dikim sırasında ve paketlemeden önce kontroller yapılır.' },
      { title: 'Paketleme, İhracat ve Teslimat', desc: 'Etiketleme, paketleme ve ihracat evrakları konusunda destek, ardından adresinize veya nakliyecinize teslim.' },
    ],
    catSub: 'Ürün Yelpazesi',
    catTitle: 'Tüm Giyim Modelleri',
    cat: [
      { title: 'Erkek Giyim', desc: 'Gömlek, polo yaka tişört, pantolon, ceket, takım elbise, kapüşonlu ve sweatshirt.' },
      { title: 'Kadın Giyim', desc: 'Elbise, bluz, pantolon, ceket, takım, ev giyimi ve spor giyim.' },
      { title: 'Çocuk ve Bebek Giyimi', desc: 'Çocuk ve bebekler için günlük giyim, pijama ve takımlar.' },
      { title: 'İş Giyimi ve Üniforma', desc: 'Otel, restoran, sağlık, güvenlik ve sanayi üniformaları, markanıza özel.' },
    ],
    catMore: 'Ayrıca: örme ve penye ürünler, dış giyim, keten ve pamuklu giysiler, pijama, özel baskı ve nakış. Modeliniz burada yoksa bize sorun.',
    supSub: 'Destek',
    supTitle: 'Teknik Destek ve Danışmanlık',
    supDesc: 'Birçok alıcı hazır bir teknik dosyayla değil, bir fikirle gelir. Fikri üretilebilir bir ürüne dönüştürmenize yardımcı oluruz.',
    supList: [
      'Teknik föy (tech pack) ve ölçü tablosu hazırlama',
      'Kullanım, sezon ve bütçeye göre kumaş ve aksesuar seçimi',
      'Beden ve kalıp danışmanlığı, denemeden sonra kalıp düzeltmesi',
      'Maliyet gözden geçirme: kaliteyi düşürmeden tasarruf yolları',
      'Üretim planlaması, adetler ve gerçekçi termin',
      'Etiket, ambalaj ve ihracat hazırlığı',
    ],
    qSub: 'Kalite ve Güven',
    qTitle: 'Kalite, Güvenilirlik, Zamanında Teslimat',
    q: [
      { title: 'Onaylı Numune Standarttır', desc: 'Numuneyi onaylamadan seri imalata başlamayız ve üretimi onaylı numuneye göre yaparız.' },
      { title: 'Her Aşamada Kontrol', desc: 'Kumaş, kesim, dikim ve bitiş kontrol edilmeden sipariş bir sonraki aşamaya geçmez.' },
      { title: 'Net Takvim ve Bilgilendirme', desc: 'Kararlaştırılan bir termin ve düzenli bilgilendirme alırsınız; teslimatta sürpriz yaşamazsınız.' },
    ],
    expSub: 'İhracat',
    expTitle: "Türkiye'den Tekstil Tedarik Etmek",
    expDesc: "Türkiye; kumaş çeşitliliği, kısa tedarik zinciri ve Avrupa'ya yakınlığıyla deneyimli bir giyim üretim altyapısı sunar. Yurt içi ve yurt dışı müşteriler için üretimi yapar, sevkiyatı hazırlar ve ihracat evrakları konusunda destek veririz. Sevkiyat yöntemi ve koşulları siparişe göre belirlenir.",
    faqSub: 'Sık Sorulan Sorular',
    faqTitle: 'Üretim ve İhracat Detayları',
    faq: [
      { title: 'Minimum sipariş adediniz nedir?', desc: 'Minimum sipariş şartı koymuyoruz. Numune, az adetli ve yüksek adetli siparişler proje bazında fiyatlandırılır. Tasarımınızı veya örnek fotoğrafı WhatsApp\'tan gönderin.' },
      { title: 'Sadece fikir, çizim veya fotoğrafla başlayabilir miyim?', desc: 'Evet. Teknik detayların, kalıbın ve kumaş önerisinin hazırlanmasına yardımcı olur, onayınız için deneme numunesi dikeriz.' },
      { title: 'Hangi aşamaları üstleniyorsunuz?', desc: 'Model ve tasarım geliştirme, kalıp, kumaş ve aksesuar temini, deneme numunesi, onay, seri imalat, paketleme ve ihracat hazırlığı.' },
      { title: 'Üretim ne kadar sürer?', desc: 'Model, kumaş ve adede göre değişir. Tekliften birlikte numune, onay ve seri imalatı kapsayan yazılı bir takvim verilir.' },
      { title: 'İhracat sevkiyatında destek veriyor musunuz?', desc: 'Evet. Siparişi sevkiyata hazırlar; paketleme ve fatura evraklarını düzenler, varış ülkesinin istediği diğer ihracat evrakları konusunda destek veririz.' },
      { title: 'Kendi etiket ve ambalajımı kullanabilir miyim?', desc: 'Evet. Marka etiketi, bakım etiketi, askı kartı ve ambalajla özel marka (private label) üretim yapıyoruz.' },
    ],
    ctaTitle: 'Giysinizi Bize Anlatın',
    ctaDesc: 'Çizim, fotoğraf veya örnek ürün ile hedef adedi gönderin. Üretim teklifiyle dönelim.',
    footDesc: "Türkiye'den giyim tasarım desteği, numune geliştirme, seri imalat ve ihracat.",
    footContact: 'İletişim ve Satış',
    footBase: 'Üretim merkezi: Antalya, Türkiye',
    footMarkets: 'Müşterilerimiz',
    footMarketsText: 'Yurt içi ve yurt dışındaki girişimciler, küçük ve orta ölçekli işletmeler, tedarikçiler ve büyük alıcılar.',
    footCopy: 'Anavera Tekstil. terzihizmeti.com.tr giyim üretim kolu',
    waFloat: 'WhatsApp Teklif',
    waMessage: 'Merhaba, Anavera Tekstil ile numune çalışması, seri imalat ve ihracat hakkında bilgi almak istiyorum.',
    breadcrumbHome: 'Ana Sayfa',
  },

  de: {
    topBarMsg: 'Bekleidungsfertigung in der Türkei: vom Design bis zum Export',
    quoteBtn: 'Angebot anfragen',
    heroBadge: 'Muster · Serienfertigung · Export',
    heroTitle1: 'Ihr Kleidungsstück, vom Stoffmuster bis zur ',
    heroTitle2: 'Serienfertigung und zum Export',
    heroDesc: 'Anavera Tekstil begleitet jedes Bekleidungsmodell vom Design und Schnittmuster über Stoffbeschaffung und Probemuster bis zur Serienfertigung und zum Export. Wir arbeiten mit Gründern, kleinen und mittleren Unternehmen, Lieferanten und Großkunden in der Türkei und im Ausland und bieten auf jeder Stufe technische Unterstützung, Beratung und pünktliche Lieferung.',
    contactWa: 'Per WhatsApp kontaktieren',
    callUs: 'Rufen Sie uns an:',
    highlights: [
      { title: 'Alle Bekleidungsmodelle', desc: 'Herren-, Damen-, Kinder- und Berufsbekleidung sowie Uniformen, Strick und Gewebe.' },
      { title: 'Vom Muster zur Serie', desc: 'Design, Schnitt, Stoffprobe, freigegebenes Muster, dann Serienfertigung.' },
      { title: 'Keine Mindestmenge', desc: 'Muster, Kleinserien und Großaufträge werden projektbezogen kalkuliert.' },
      { title: 'Pünktliche Lieferung', desc: 'Vereinbarter Zeitplan, regelmäßige Updates und Kontrollen auf jeder Stufe.' },
    ],
    whoSub: 'Für wen wir produzieren',
    whoTitle: 'Produktion für jede Größenordnung',
    whoDesc: 'Ob erste Kollektion oder Nachbestellung eines bewährten Modells: Wir planen die Produktion nach Ihrer Stückzahl und Ihrem Budget.',
    who: [
      { title: 'Gründer und neue Marken', desc: 'Starten Sie mit einer Idee, Skizze oder einem Referenzstück. Wir begleiten Sie bei technischer Beschreibung, Stoffwahl und ersten Mustern.' },
      { title: 'Kleine und mittlere Unternehmen', desc: 'Boutiquen, Labels und Lieferanten: Private-Label-Produktion mit flexiblen Stückzahlen und Nachbestellungen.' },
      { title: 'Großkunden', desc: 'Einzelhändler, Großhändler und Firmenkunden: Serienfertigung nach freigegebenem Muster und festem Zeitplan.' },
    ],
    processSub: 'So arbeiten wir',
    processTitle: 'Von der Idee zum Export in 8 Schritten',
    processDesc: 'Wir unterstützen Sie auf jeder Stufe. Die Serienfertigung beginnt erst nach Ihrer Mustergenehmigung.',
    process: [
      { title: 'Briefing und Beratung', desc: 'Wir besprechen Idee, Referenz oder technische Unterlagen, Zielmenge, Budget und Termin.' },
      { title: 'Modell- und Designentwicklung', desc: 'Modelldetails, Maße und technische Zeichnungen werden gemeinsam mit Ihnen erstellt oder ergänzt.' },
      { title: 'Schnitt, Gradierung und Marker', desc: 'Schnittmuster werden erstellt, auf Ihre Größenreihe gradiert und für guten Stoffverbrauch geplant.' },
      { title: 'Stoff- und Zutatenbeschaffung', desc: 'Wir helfen bei Auswahl und Beschaffung von Stoff, Futter, Knöpfen, Reißverschlüssen, Etiketten und weiteren Zutaten.' },
      { title: 'Probemuster', desc: 'Ein Muster wird im vorgesehenen Stoff gefertigt, um Passform, Optik und Verarbeitung zu prüfen, bei Bedarf mit Korrekturen.' },
      { title: 'Freigabe', desc: 'Stoff, Schnitt, Naht und Finish werden schriftlich festgelegt. Das freigegebene Muster ist der Produktionsstandard.' },
      { title: 'Serienfertigung', desc: 'Die Produktion folgt dem freigegebenen Muster, mit Kontrollen beim Nähen und vor dem Verpacken.' },
      { title: 'Verpackung, Export und Lieferung', desc: 'Etikettierung, Verpackung und Unterstützung bei den Exportpapieren, dann Lieferung an Ihre Adresse oder Ihren Spediteur.' },
    ],
    catSub: 'Sortiment',
    catTitle: 'Alle Bekleidungsmodelle',
    cat: [
      { title: 'Herrenbekleidung', desc: 'Hemden, Poloshirts, Hosen, Sakkos, Anzüge, Hoodies und Sweatshirts.' },
      { title: 'Damenbekleidung', desc: 'Kleider, Blusen, Hosen, Blazer, Kostüme, Loungewear und Sportbekleidung.' },
      { title: 'Kinder- und Babybekleidung', desc: 'Alltagskleidung, Schlafanzüge und Sets für Kinder und Kleinkinder.' },
      { title: 'Berufsbekleidung und Uniformen', desc: 'Uniformen für Hotel, Gastronomie, Medizin, Sicherheit und Industrie mit Ihrem Branding.' },
    ],
    catMore: 'Außerdem: Strickwaren und Jersey, Oberbekleidung, Leinen- und Baumwollkleidung, Nachtwäsche, individuelle Drucke und Stickerei. Fehlt Ihr Modell, fragen Sie uns.',
    supSub: 'Unterstützung',
    supTitle: 'Technische Unterstützung und Beratung',
    supDesc: 'Viele Kunden kommen mit einem Konzept statt mit fertigen technischen Unterlagen. Wir helfen Ihnen, daraus ein produzierbares Kleidungsstück zu machen.',
    supList: [
      'Erstellung technischer Unterlagen (Tech Pack) und Maßtabellen',
      'Stoff- und Zutatenauswahl nach Einsatz, Saison und Budget',
      'Beratung zu Passform und Größenreihe, Schnittkorrektur nach der Anprobe',
      'Kostenprüfung: Einsparungen ohne Qualitätsverlust',
      'Produktionsplanung, Stückzahlen und realistische Termine',
      'Etiketten, Verpackung und Exportvorbereitung',
    ],
    qSub: 'Qualität und Vertrauen',
    qTitle: 'Qualität, Zuverlässigkeit, pünktliche Lieferung',
    q: [
      { title: 'Das freigegebene Muster ist der Standard', desc: 'Wir beginnen die Serie nicht vor Ihrer Freigabe und fertigen exakt nach dem Muster.' },
      { title: 'Kontrolle auf jeder Stufe', desc: 'Stoff, Zuschnitt, Nähen und Finish werden geprüft, bevor der Auftrag weiterläuft.' },
      { title: 'Klarer Zeitplan und Updates', desc: 'Sie erhalten einen vereinbarten Termin und regelmäßige Statusmeldungen, damit es bei der Lieferung keine Überraschungen gibt.' },
    ],
    expSub: 'Export',
    expTitle: 'Textilien aus der Türkei beziehen',
    expDesc: 'Die Türkei bietet Stoffvielfalt, kurze Lieferketten und erfahrene Näherinnen und Näher in der Nähe Europas. Wir fertigen für Kunden im In- und Ausland, bereiten den Versand vor und unterstützen bei den Exportpapieren. Versandart und Konditionen werden pro Auftrag vereinbart.',
    faqSub: 'Häufige Fragen',
    faqTitle: 'Produktion und Export im Detail',
    faq: [
      { title: 'Wie hoch ist Ihre Mindestbestellmenge?', desc: 'Wir verlangen keine Mindestbestellmenge. Muster, Kleinserien und Großaufträge werden jeweils projektbezogen kalkuliert. Senden Sie Ihr Design oder ein Referenzfoto per WhatsApp.' },
      { title: 'Kann ich nur mit einer Idee, Skizze oder einem Foto starten?', desc: 'Ja. Wir helfen bei technischen Details, Schnitt und Stoffvorschlag und fertigen ein Probemuster zur Freigabe.' },
      { title: 'Welche Schritte übernehmen Sie?', desc: 'Modell- und Designentwicklung, Schnitt, Stoff- und Zutatenbeschaffung, Probemuster, Freigabe, Serienfertigung, Verpackung und Exportvorbereitung.' },
      { title: 'Wie lange dauert die Produktion?', desc: 'Das hängt von Modell, Stoff und Menge ab. Mit dem Angebot erhalten Sie einen schriftlichen Zeitplan für Muster, Freigabe und Serie.' },
      { title: 'Unterstützen Sie Exportsendungen?', desc: 'Ja. Wir bereiten den Auftrag für den Versand vor, erstellen Verpackungs- und Rechnungsunterlagen und unterstützen bei weiteren Exportpapieren, die Ihr Zielland verlangt.' },
      { title: 'Kann ich eigene Etiketten und Verpackungen nutzen?', desc: 'Ja. Wir produzieren als Private Label mit Ihren Markenetiketten, Pflegeetiketten, Hangtags und Verpackungen.' },
    ],
    ctaTitle: 'Erzählen Sie uns von Ihrem Kleidungsstück',
    ctaDesc: 'Senden Sie Skizze, Foto oder Referenzstück und die gewünschte Menge. Wir antworten mit einem Produktionsvorschlag.',
    footDesc: 'Designunterstützung, Musterentwicklung, Serienfertigung und Export aus der Türkei.',
    footContact: 'Kontakt und Vertrieb',
    footBase: 'Produktionsstandort: Antalya, Türkei',
    footMarkets: 'Kunden',
    footMarketsText: 'Gründer, kleine und mittlere Unternehmen, Lieferanten und Großkunden in der Türkei und im Ausland.',
    footCopy: 'Anavera Tekstil. Bekleidungsfertigung von terzihizmeti.com.tr',
    waFloat: 'WhatsApp-Angebot',
    waMessage: 'Guten Tag, ich möchte Informationen zu Musterfertigung, Serienproduktion und Export mit Anavera Tekstil.',
    breadcrumbHome: 'Startseite',
  },

  ru: {
    topBarMsg: 'Пошив одежды в Турции: от дизайна до экспорта',
    quoteBtn: 'Запросить цену',
    heroBadge: 'Образец · Серийное производство · Экспорт',
    heroTitle1: 'Ваша модель: от пробной ткани до ',
    heroTitle2: 'серии и экспорта',
    heroDesc: 'Anavera Tekstil ведёт любую модель одежды от дизайна и лекал через подбор ткани и пробный образец к серийному производству и экспорту. Мы работаем с предпринимателями, малым и средним бизнесом, поставщиками и крупными заказчиками в Турции и за рубежом: техническая поддержка, консультации и поставка в срок на каждом этапе.',
    contactWa: 'Написать в WhatsApp',
    callUs: 'Позвоните нам:',
    highlights: [
      { title: 'Любые модели одежды', desc: 'Мужская, женская, детская одежда, спецодежда и униформа; трикотаж и ткани.' },
      { title: 'От образца к серии', desc: 'Дизайн, лекала, проба ткани, утверждённый образец, затем серия.' },
      { title: 'Без минимального заказа', desc: 'Образцы, малые и крупные партии рассчитываются под проект.' },
      { title: 'Поставка в срок', desc: 'Согласованный график, регулярные отчёты и контроль на каждом этапе.' },
    ],
    whoSub: 'С кем мы работаем',
    whoTitle: 'Производство для любого масштаба',
    whoDesc: 'Первая коллекция или повторный заказ проверенной модели: мы планируем производство под ваш тираж и бюджет.',
    who: [
      { title: 'Предприниматели и новые бренды', desc: 'Начните с идеи, эскиза или образца-референса. Мы поможем с техническим описанием, выбором ткани и первыми образцами.' },
      { title: 'Малый и средний бизнес', desc: 'Бутики, бренды и поставщики: пошив под частной маркой, гибкие тиражи и повторные заказы.' },
      { title: 'Крупные заказчики', desc: 'Ритейл, оптовики и корпоративные клиенты: серия по утверждённому образцу и фиксированному графику.' },
    ],
    processSub: 'Как мы работаем',
    processTitle: 'От идеи до экспорта за 8 этапов',
    processDesc: 'Мы рядом на каждом этапе, а серия запускается только после вашего утверждения образца.',
    process: [
      { title: 'Бриф и консультация', desc: 'Обсуждаем идею, референс или техническое описание, тираж, бюджет и сроки.' },
      { title: 'Разработка модели и дизайна', desc: 'Детали модели, мерки и технические рисунки готовим или дополняем вместе с вами.' },
      { title: 'Лекала, градация и раскладка', desc: 'Строим лекала, градируем по вашей размерной сетке и планируем раскладку для экономии ткани.' },
      { title: 'Подбор ткани и фурнитуры', desc: 'Помогаем выбрать и закупить ткань, подкладку, пуговицы, молнии, этикетки и другую фурнитуру под модель и бюджет.' },
      { title: 'Пробный образец', desc: 'Шьём образец из выбранной ткани, проверяем посадку, внешний вид и качество пошива, при необходимости вносим правки.' },
      { title: 'Утверждение', desc: 'Ткань, лекала, строчка и отделка фиксируются письменно. Утверждённый образец становится стандартом производства.' },
      { title: 'Серийное производство', desc: 'Шьём строго по утверждённому образцу, с проверками во время пошива и перед упаковкой.' },
      { title: 'Упаковка, экспорт и доставка', desc: 'Маркировка, упаковка и помощь с экспортными документами, затем доставка на ваш адрес или экспедитору.' },
    ],
    catSub: 'Ассортимент',
    catTitle: 'Все модели одежды',
    cat: [
      { title: 'Мужская одежда', desc: 'Рубашки, поло, брюки, пиджаки, костюмы, худи и свитшоты.' },
      { title: 'Женская одежда', desc: 'Платья, блузки, брюки, жакеты, костюмы, домашняя и спортивная одежда.' },
      { title: 'Детская одежда', desc: 'Повседневная одежда, пижамы и комплекты для детей и малышей.' },
      { title: 'Спецодежда и униформа', desc: 'Униформа для отелей, ресторанов, медицины, охраны и промышленности с вашим брендингом.' },
    ],
    catMore: 'Также: трикотаж, верхняя одежда, изделия из льна и хлопка, одежда для сна, печать и вышивка по вашему дизайну. Если вашей модели нет в списке, спросите нас.',
    supSub: 'Поддержка',
    supTitle: 'Техническая поддержка и консультации',
    supDesc: 'Многие заказчики приходят с идеей, а не с готовой технической документацией. Мы помогаем превратить идею в изделие, которое можно производить.',
    supList: [
      'Подготовка технического описания (tech pack) и таблицы мерок',
      'Подбор ткани и фурнитуры по назначению, сезону и бюджету',
      'Консультации по посадке и размерной сетке, правка лекал после примерки',
      'Анализ себестоимости: как сэкономить без потери качества',
      'Планирование производства, тиражей и реальных сроков',
      'Этикетки, упаковка и подготовка к экспорту',
    ],
    qSub: 'Качество и доверие',
    qTitle: 'Качество, надёжность, поставка в срок',
    q: [
      { title: 'Стандарт — утверждённый образец', desc: 'Мы не запускаем серию до вашего утверждения и шьём строго по образцу.' },
      { title: 'Контроль на каждом этапе', desc: 'Ткань, раскрой, пошив и отделка проверяются, прежде чем заказ идёт дальше.' },
      { title: 'Понятный график и отчёты', desc: 'Вы получаете согласованные сроки и регулярные отчёты, поэтому при поставке нет сюрпризов.' },
    ],
    expSub: 'Экспорт',
    expTitle: 'Закупка текстиля в Турции',
    expDesc: 'Турция предлагает разнообразие тканей, короткие цепочки поставок и опытных швей рядом с Европой. Мы шьём для клиентов в Турции и за рубежом, готовим отгрузку и помогаем с экспортными документами. Способ доставки и условия согласуются по каждому заказу.',
    faqSub: 'Частые вопросы',
    faqTitle: 'Производство и экспорт: подробности',
    faq: [
      { title: 'Каков минимальный заказ?', desc: 'Минимального заказа нет. Образцы, малые и крупные партии рассчитываются под проект. Пришлите дизайн или фото-референс в WhatsApp.' },
      { title: 'Можно начать только с идеи, эскиза или фото?', desc: 'Да. Мы поможем с техническими деталями, лекалами и подбором ткани, затем сошьём пробный образец на утверждение.' },
      { title: 'Какие этапы вы берёте на себя?', desc: 'Разработка модели и дизайна, лекала, закупка ткани и фурнитуры, пробный образец, утверждение, серийное производство, упаковка и подготовка к экспорту.' },
      { title: 'Сколько занимает производство?', desc: 'Зависит от модели, ткани и тиража. Вместе с предложением вы получите письменный график: образец, утверждение и серия.' },
      { title: 'Помогаете ли вы с экспортной отгрузкой?', desc: 'Да. Готовим заказ к отправке, оформляем упаковочные и счётные документы и помогаем с остальными экспортными документами, которые требует страна назначения.' },
      { title: 'Можно ли использовать свои этикетки и упаковку?', desc: 'Да. Шьём под частной маркой: ваши бирки, этикетки по уходу, навесные ярлыки и упаковка.' },
    ],
    ctaTitle: 'Расскажите о вашей модели',
    ctaDesc: 'Пришлите эскиз, фото или образец и желаемый тираж. Мы ответим предложением по производству.',
    footDesc: 'Поддержка в разработке модели, образцы, серийное производство и экспорт из Турции.',
    footContact: 'Контакты и продажи',
    footBase: 'Производство: Анталья, Турция',
    footMarkets: 'Клиенты',
    footMarketsText: 'Предприниматели, малый и средний бизнес, поставщики и крупные заказчики в Турции и за рубежом.',
    footCopy: 'Anavera Tekstil. Швейное направление terzihizmeti.com.tr',
    waFloat: 'Цена в WhatsApp',
    waMessage: 'Здравствуйте, хочу узнать об образцах, серийном производстве и экспорте одежды с Anavera Tekstil.',
    breadcrumbHome: 'Главная',
  },
};

const GOLD = '#C9A227';
const GOLD_L = '#E4C664';
const NAVY = '#0F172A';
const IMGS = [
  'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
];

const eyebrow = { color: '#D97706', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' } as const;
const h2 = { fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: NAVY, margin: '0.5rem 0 0.8rem' } as const;
const lead = { color: '#475569', maxWidth: 720, margin: '0 auto', lineHeight: 1.7 } as const;
const card = { backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 14, padding: '1.5rem' } as const;

function Head({ sub, title, desc, dark }: { sub: string; title: string; desc?: string; dark?: boolean }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
      <span style={eyebrow}>{sub}</span>
      <h2 style={{ ...h2, color: dark ? '#FFFFFF' : NAVY }}>{title}</h2>
      {desc && <p style={{ ...lead, color: dark ? '#CBD5E1' : '#475569' }}>{desc}</p>}
    </div>
  );
}

export default function AnaveraTekstilSayfasi({ lang }: { lang: AnaveraLang }) {
  const t = translations[lang];
  const WA_LINK = WA(t.waMessage);
  const langs: { code: AnaveraLang; label: string }[] = [
    { code: 'en', label: 'EN' }, { code: 'de', label: 'DE' }, { code: 'ru', label: 'RU' }, { code: 'tr', label: 'TR' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#F8FAFC', color: NAVY, margin: 0 }}>

      {/* TOP BAR + dil geçişi (gerçek, crawl edilebilir URL'ler) */}
      <div style={{ backgroundColor: '#020617', color: '#94A3B8', fontSize: '0.8rem', padding: '0.6rem 1rem', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>{t.topBarMsg}</div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href={`tel:${PHONE_E}`} style={{ color: '#CBD5E1', textDecoration: 'none' }}>{PHONE}</a>
            <span style={{ display: 'flex', gap: '0.6rem' }}>
              {langs.map((l) => (
                <Link key={l.code} href={ANAVERA_URLS[l.code]} hrefLang={l.code}
                  style={{ textDecoration: 'none', color: lang === l.code ? GOLD_L : '#94A3B8', fontWeight: lang === l.code ? 800 : 400 }}>{l.label}</Link>
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header style={{ backgroundColor: NAVY, position: 'sticky', top: 0, zIndex: 50, borderBottom: `2px solid ${GOLD}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '0.05em' }}>
            ANAVERA <span style={{ color: GOLD }}>TEKSTİL</span>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: GOLD, color: NAVY, padding: '0.6rem 1.2rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: '0.9rem' }}>{t.quoteBtn}</a>
        </div>
      </header>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" style={{ maxWidth: 1200, margin: '0 auto', padding: '0.9rem 1rem 0', fontSize: '0.8rem', color: '#64748B' }}>
        <a href={HOME_URLS[lang]} style={{ color: '#64748B', textDecoration: 'none' }}>{t.breadcrumbHome}</a>
        <span style={{ margin: '0 .4rem' }}>/</span>
        <span style={{ color: NAVY }}>Anavera Tekstil</span>
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.96) 0%, rgba(30,41,59,0.9) 100%), url("https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover', color: '#FFFFFF', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', border: '1px solid rgba(201,162,39,.5)', background: 'rgba(201,162,39,.12)', color: '#FDE047', padding: '0.35rem 1rem', borderRadius: 30, fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.4rem' }}>{t.heroBadge}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 1.2rem' }}>
            {t.heroTitle1}<span style={{ color: GOLD_L }}>{t.heroTitle2}</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.08rem', lineHeight: 1.75, margin: '0 auto 2rem', maxWidth: 780 }}>{t.heroDesc}</p>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: '#FFF', padding: '0.9rem 1.7rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>{t.contactWa}</a>
            <a href={`tel:${PHONE_E}`} style={{ border: '1px solid rgba(255,255,255,.3)', color: '#FFF', padding: '0.9rem 1.7rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>{t.callUs} {PHONE}</a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section style={{ maxWidth: 1200, margin: '-2rem auto 0', padding: '0 1rem', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>
          {t.highlights.map((h) => (
            <div key={h.title} style={{ ...card, borderTop: `3px solid ${GOLD}`, boxShadow: '0 8px 24px rgba(15,23,42,.08)' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 800, margin: '0 0 .4rem' }}>{h.title}</h3>
              <p style={{ fontSize: '.9rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO */}
      <section style={{ padding: '5rem 1rem 3rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Head sub={t.whoSub} title={t.whoTitle} desc={t.whoDesc} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.4rem' }}>
            {t.who.map((w) => (
              <div key={w.title} style={card}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 .6rem' }}>{w.title}</h3>
                <p style={{ color: '#475569', fontSize: '.95rem', lineHeight: 1.65, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '4.5rem 1rem', backgroundColor: NAVY }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Head sub={t.processSub} title={t.processTitle} desc={t.processDesc} dark />
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem' }}>
            {t.process.map((p, i) => (
              <li key={p.title} style={{ backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: 14, padding: '1.4rem' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: GOLD }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.02rem', fontWeight: 800, margin: '.3rem 0 .5rem' }}>{p.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '.9rem', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '5rem 1rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Head sub={t.catSub} title={t.catTitle} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.4rem' }}>
            {t.cat.map((c, i) => (
              <div key={c.title} style={{ ...card, padding: 0, overflow: 'hidden' }}>
                <img src={IMGS[i]} alt={c.title} loading="lazy" style={{ width: '100%', height: 190, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '1.2rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 .4rem' }}>{c.title}</h3>
                  <p style={{ color: '#64748B', fontSize: '.9rem', lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ ...lead, textAlign: 'center', marginTop: '1.8rem', fontSize: '.95rem' }}>{t.catMore}</p>
        </div>
      </section>

      {/* SUPPORT */}
      <section style={{ padding: '4.5rem 1rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Head sub={t.supSub} title={t.supTitle} desc={t.supDesc} />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '.8rem' }}>
            {t.supList.map((s) => (
              <li key={s} style={{ display: 'flex', gap: '.8rem', alignItems: 'flex-start', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '.9rem 1.1rem', color: '#334155', lineHeight: 1.55 }}>
                <span aria-hidden="true" style={{ color: GOLD, fontWeight: 800 }}>✓</span><span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUALITY */}
      <section style={{ padding: '5rem 1rem 3rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Head sub={t.qSub} title={t.qTitle} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.4rem' }}>
            {t.q.map((q) => (
              <div key={q.title} style={{ ...card, borderLeft: `4px solid ${GOLD}` }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 .5rem' }}>{q.title}</h3>
                <p style={{ color: '#475569', fontSize: '.93rem', lineHeight: 1.65, margin: 0 }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT */}
      <section style={{ padding: '3rem 1rem 5rem' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Head sub={t.expSub} title={t.expTitle} desc={t.expDesc} />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '4.5rem 1rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Head sub={t.faqSub} title={t.faqTitle} />
          <div style={{ display: 'grid', gap: '1rem' }}>
            {t.faq.map((f) => (
              <details key={f.title} style={{ ...card, padding: '1.2rem 1.4rem', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 800, fontSize: '1.02rem' }}>{f.title}</summary>
                <p style={{ margin: '1rem 0 0', color: '#475569', fontSize: '.95rem', lineHeight: 1.7, paddingLeft: '1rem', borderLeft: `2px solid ${GOLD}` }}>{f.desc}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1rem', backgroundColor: NAVY, textAlign: 'center' }}>
        <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: '0 0 .8rem' }}>{t.ctaTitle}</h2>
        <p style={{ color: '#CBD5E1', maxWidth: 620, margin: '0 auto 1.8rem', lineHeight: 1.7 }}>{t.ctaDesc}</p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: GOLD, color: NAVY, padding: '0.95rem 2rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>{t.quoteBtn}</a>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#020617', color: '#94A3B8', padding: '3.5rem 1rem 2rem', borderTop: `4px solid ${GOLD}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.3rem', marginBottom: '.8rem' }}>ANAVERA <span style={{ color: GOLD }}>TEKSTİL</span></div>
            <p style={{ fontSize: '.92rem', lineHeight: 1.7, color: '#64748B', margin: 0 }}>{t.footDesc}</p>
          </div>
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '1.02rem', fontWeight: 800, margin: '0 0 1rem' }}>{t.footContact}</h4>
            <p style={{ fontSize: '.92rem', margin: '0 0 .6rem' }}>WhatsApp: <a href={WA_LINK} style={{ color: '#38BDF8', textDecoration: 'none' }}>{PHONE}</a></p>
            <p style={{ fontSize: '.92rem', margin: '0 0 .6rem' }}>{t.footBase}</p>
            <p style={{ fontSize: '.92rem', margin: 0 }}><a href={SITE} style={{ color: '#94A3B8', textDecoration: 'none' }}>terzihizmeti.com.tr</a></p>
          </div>
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '1.02rem', fontWeight: 800, margin: '0 0 1rem' }}>{t.footMarkets}</h4>
            <p style={{ fontSize: '.92rem', lineHeight: 1.7, margin: 0 }}>{t.footMarketsText}</p>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.4rem', borderTop: '1px solid #1E293B', fontSize: '.85rem' }}>
          <Link href={ANAVERA_URLS.en} style={{ color: lang === 'en' ? GOLD_L : '#64748B' }}>English</Link>
          <Link href={ANAVERA_URLS.de} style={{ color: lang === 'de' ? GOLD_L : '#64748B' }}>Deutsch</Link>
          <Link href={ANAVERA_URLS.ru} style={{ color: lang === 'ru' ? GOLD_L : '#64748B' }}>Русский</Link>
          <Link href={ANAVERA_URLS.tr} style={{ color: lang === 'tr' ? GOLD_L : '#64748B' }}>Türkçe</Link>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: '1.4rem', textAlign: 'center', fontSize: '.85rem', color: '#475569' }}>
          © {new Date().getFullYear()} {t.footCopy}
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: 25, right: 25, backgroundColor: '#25D366', color: '#FFF', borderRadius: 50, padding: '0.85rem 1.4rem', fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 25px rgba(37,211,102,.4)', zIndex: 60 }}>
        {t.waFloat}
      </a>
    </div>
  );
}
