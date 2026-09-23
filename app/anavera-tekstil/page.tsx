// app/anavera-tekstil/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

// URL parametrelerinin (searchParams) anlık algılanması için zorunlu
export const dynamic = 'force-dynamic';

const SITE       = 'https://terzihizmeti.com.tr';
const PAGE_URL   = `${SITE}/anavera-tekstil`;
const PHONE      = '+90 531 898 64 18';
const PHONE_E    = '+905318986418';
const WA = (t: string) => `https://wa.me/${PHONE_E}?text=${encodeURIComponent(t)}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Anavera Tekstil | Turkish Textile Manufacturer & Exporter',
  description:
    'Anavera Tekstil is a premium textile design, manufacturing and export company in Turkey. Menswear, womenswear, kidswear and uniforms for EU and Russia.',
  keywords: [
    'Turkish textile manufacturer', 'textile manufacturer Turkey', 'clothing manufacturer Turkey',
    'garment factory Turkey', 'textile exporter Turkey', 'uniform manufacturer Turkey',
    'kadın giyim üreticisi', 'erkek giyim imalatı', 'fason tekstil imalatı', 'ihracat tekstil firması',
    'текстильная фабрика Турция', 'производство одежды Турция'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Anavera Tekstil — Premium Menswear & Womenswear Manufacturing in Turkey',
    description: 'Turkey-based B2B clothing manufacturer serving the EU, UK and CIS regions.',
    url: PAGE_URL, siteName: 'Anavera Tekstil', locale: 'en_US', type: 'website',
    images: [{ url: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ClothingStore', 'B2BBusiness'],
      '@id': `${PAGE_URL}#business`,
      name: 'Anavera Tekstil',
      alternateName: ['Anavera Textile', 'Анавера Текстиль'],
      description: 'Turkey-based high-capacity textile manufacturing and export company focusing on menswear, womenswear and corporate apparel.',
      url: PAGE_URL,
      telephone: PHONE_E,
      address: { '@type': 'PostalAddress', addressLocality: 'Antalya', addressCountry: 'TR' },
      areaServed: ['European Union', 'Russia', 'Germany', 'United Kingdom'],
      sameAs: [`https://wa.me/${PHONE_E}`],
    },
  ],
};

// --- MULTI-LANGUAGE DICTIONARY ---
const translations = {
  en: {
    topBarMsg: '✦ Direct B2B Menswear & Womenswear Export from Turkey',
    quoteBtn: 'Get B2B Quote',
    heroVerified: 'Verified Turkish Garment Manufacturer',
    heroTitle1: 'Premium Menswear & Womenswear Production for ',
    heroTitle2: 'Europe & CIS',
    heroDesc: 'High-capacity OEM & Private Label production. We design, manufacture, and export menswear, womenswear, and corporate uniforms using premium Turkish cotton, linen, and sustainable fabrics.',
    contactWa: 'Contact on WhatsApp',
    callUs: 'Call Us:',
    stat1: 'Pieces / Month',
    stat2: 'Export Countries',
    stat3: 'Export Ready',
    cert1Title: 'OEKO-TEX 100', cert1Desc: 'Eco-friendly, chemical-free fabrics',
    cert2Title: 'ISO 9001:2015', cert2Desc: 'Certified Quality Management',
    cert3Title: 'EU Customs Union', cert3Desc: 'ATR / EUR.1 Duty-free export',
    cert4Title: 'Full OEM / ODM', cert4Desc: 'Private label & custom packaging',
    
    // MEN & WOMEN SPECIAL SECTION
    menSub: 'Menswear Manufacturing',
    menTitle: 'Custom & OEM Menswear Collection',
    menDesc: 'From high-end tailored shirts to casual polo tees, trousers, and blazers crafted with precision Turkish tailoring.',
    men1Title: 'Dress Shirts & Polo Shirts', men1Desc: '100% Combed cotton, non-iron fabrics, and custom collar designs for men.',
    men2Title: 'Blazers, Jackets & Suits', men2Desc: 'Structured shoulders, premium lining, and precise CAD patterns for European sizing.',
    men3Title: 'Trousers & Casual Knitwear', men3Desc: 'Chinos, formal trousers, hoodies, and sweatshirts built for high durability.',

    womenSub: 'Womenswear Manufacturing',
    womenTitle: 'Elegance & Precision in Womenswear',
    womenDesc: 'Delicate stitching, sophisticated patterns, and organic linen/cotton fabrics designed for modern womenswear lines.',
    women1Title: 'Dresses & Blouses', women1Desc: 'Fluid drapes, custom prints, and breathable organic fabrics for summer and evening collections.',
    women2Title: 'Blazers, Suits & Office Wear', women2Desc: 'Tailored feminine silhouettes, high-density stitching, and premium finishes.',
    women3Title: 'Linen & Casual Wear', women3Desc: 'Pre-washed 100% Turkish linen and soft cotton jersey loungewear.',

    facSub: 'Manufacturing Excellence',
    facTitle: 'Modern Facilities in Turkey',
    facDesc: 'From meticulous pattern making to automated cutting, precision sewing, and dedicated quality control lines.',
    fac1Title: 'Precision Cutting & Patterning', fac1Desc: 'Advanced CAD pattern drafting and computerized fabric cutting ensures maximum fabric efficiency and zero sizing variance.',
    fac2Title: 'High-Speed Assembly Lines', fac2Desc: 'Skilled seamstresses operating specialized flatlock, overlock, and double-needle machinery for durable stitching.',
    fac3Title: '100% Quality Inspection', fac3Desc: 'AQL 2.5 standard quality checks applied at every stage — from raw fabric inspection to final ironing and polybagging.',
    
    catSub: 'B2B Product Range',
    catTitle: 'Our Manufacturing Categories',
    cat1Title: 'Menswear Collection', cat1Desc: 'Premium shirts, polo-shirts, trousers, hoodies, and jackets. Knit and woven fabric options.',
    cat2Title: 'Womenswear Collection', cat2Desc: 'Elegant dresses, blouses, loungewear, and activewear crafted with precision patterns.',
    cat3Title: 'Kidswear & Toddler', cat3Desc: 'Soft OEKO-TEX certified cotton apparel. Non-toxic dyes for sleepwear and daily wear.',
    cat4Title: 'Corporate & Workwear', cat4Desc: 'Durable hotel, medical, security, and industrial uniforms customized to your brand.',
    catTag: 'Knit & Woven',
    catBtn: 'Inquire Order Terms →',

    ecoSub: 'Sustainable & Premium',
    ecoTitle: '100% Natural Organic Cotton & Pure Linen',
    ecoDesc: 'We produce high-end sustainable fashion lines using certified 100% Aegean cotton and Turkish flax linen. Popular among premium European resort brands and boutiques seeking breathable, eco-friendly garments.',
    ecoLi1: 'Pre-washed, pre-shrunk organic linen shirts & dresses',
    ecoLi2: 'Combed 100% cotton jersey with high color fastness',
    ecoLi3: 'Custom eco-friendly dyeing with GOTS compliance',

    faqSub: 'Frequently Asked Questions',
    faqTitle: 'B2B Export & Production Details',
    faq1Q: 'What is your Minimum Order Quantity (MOQ)?', faq1A: 'Our standard MOQ starts from 300-500 pieces per style/color, depending on fabric specification and garment complexity.',
    faq2Q: 'How fast can you deliver to EU & Russia?', faq2A: 'Sampling takes 7-10 business days. Bulk production takes 3-5 weeks depending on quantity. Road transport to Central Europe takes 4-6 days, and shipping to Russia takes 5-8 days.',
    faq3Q: 'Do you handle customs documentation (ATR / EUR.1)?', faq3A: 'Yes, we handle complete ATR certificates, EUR.1 movement certificates, commercial invoices, and packing lists for smooth duty-free customs clearance in the EU.',
    faq4Q: 'Can I order custom tags, labels, and packaging?', faq4A: 'Yes, we provide complete OEM Private Label services including woven brand labels, care labels, hangtags, barcodes, and custom printed polybags.',

    footDesc: 'Premium textile design, manufacturing, and export company in Turkey. Trusted by corporate buyers across Europe, UK, DACH, and CIS regions.',
    footContact: 'Contact & Sales',
    footProdBase: 'Production Base: Antalya / Turkey',
    footMarkets: 'Export Markets',
    footMarketsList: 'Germany · France · Italy · Netherlands · Poland · Austria · Switzerland · Russia · United Kingdom',
    footCopy: 'Anavera Tekstil. All rights reserved. A premium manufacturing branch of terzihizmeti.com.tr',
    waFloat: 'WhatsApp Quote',
    waMessage: 'Hello, I would like information about Anavera Tekstil menswear & womenswear manufacturing and export.',
  },
  tr: {
    topBarMsg: '✦ Türkiye\'den Kadın ve Erkek Giyiminde Doğrudan B2B İhracat',
    quoteBtn: 'B2B Teklif Al',
    heroVerified: 'Onaylı Türk Konfeksiyon Üreticisi',
    heroTitle1: 'Avrupa ve BDT İçin Premium Kadın & Erkek ',
    heroTitle2: 'Giyim Üretimi',
    heroDesc: 'Yüksek kapasiteli OEM ve Özel Marka (Private Label) üretimi. Birinci sınıf Türk pamuğu, keten ve sürdürülebilir kumaşlar kullanarak kadın, erkek ve kurumsal üniforma tasarımı, üretimi ve ihracatı yapıyoruz.',
    contactWa: 'WhatsApp\'tan Ulaşın',
    callUs: 'Bizi Arayın:',
    stat1: 'Adet / Ay',
    stat2: 'İhracat Ülkesi',
    stat3: 'İhracata Hazır',
    cert1Title: 'OEKO-TEX 100', cert1Desc: 'Çevre dostu, kimyasalsız kumaşlar',
    cert2Title: 'ISO 9001:2015', cert2Desc: 'Sertifikalı Kalite Yönetimi',
    cert3Title: 'AB Gümrük Birliği', cert3Desc: 'ATR / EUR.1 Gümrüksüz İhracat',
    cert4Title: 'Tam OEM / ODM', cert4Desc: 'Özel etiket ve ambalajlama',

    // MEN & WOMEN SPECIAL SECTION
    menSub: 'Erkek Giyim İmalatı',
    menTitle: 'Özel Tasarım & OEM Erkek Giyim Koleksiyonu',
    menDesc: 'Şık terzi dikimi gömleklerden casual polo tişörtlere, pantolon ve ceketlere kadar hassas Türk terziliği kalitesi.',
    men1Title: 'Gömlek & Polo Tişört', men1Desc: '%100 Penye pamuk, ütü istemeyen kumaşlar ve erkeklere özel yaka tasarımları.',
    men2Title: 'Blazer, Ceket & Takım', men2Desc: 'Avrupa beden ölçülerine uygun kalıplar, kaliteli iç astar ve sağlam dikim.',
    men3Title: 'Pantolon & Casual Triko', men3Desc: 'Chino pantolonlar, kumaş pantolonlar, kapüşonlu sweatshirtler ve dayanıklı casual giyim.',

    womenSub: 'Kadın Giyim İmalatı',
    womenTitle: 'Kadın Giyimde Zarafet ve Hassas Dikim',
    womenDesc: 'Modern kadın giyim koleksiyonları için tasarlanmış zarif dikişler, sofistike kalıplar ve organik keten/pamuk kumaşlar.',
    women1Title: 'Elbise & Bluz Koleksiyonu', women1Desc: 'Yazlık ve davet koleksiyonları için dökümlü kumaşlar, özel baskılar ve nefes alan dokular.',
    women2Title: 'Ceket, Takım & Ofis Şıklığı', women2Desc: 'Kadın anatomisine uygun kesimler, yüksek dikiş sıklığı ve birinci sınıf bitirişler.',
    women3Title: 'Keten & Casual Giyim', women3Desc: 'Önceden yıkanmış %100 Türk keteni ve yumuşak pamuklu ev/günlük giyim koleksiyonları.',

    facSub: 'Üretimde Mükemmellik',
    facTitle: 'Türkiye\'deki Modern Tesislerimiz',
    facDesc: 'Titiz kalıp çıkarmadan otomatik kesime, hassas dikimden özel kalite kontrol hatlarına kadar uçtan uca üretim.',
    fac1Title: 'Hassas Kesim ve Kalıp', fac1Desc: 'Gelişmiş CAD kalıp çizimi ve bilgisayarlı kumaş kesimi, maksimum kumaş verimliliği ve sıfır beden sapması sağlar.',
    fac2Title: 'Yüksek Hızlı Montaj Hatları', fac2Desc: 'Dayanıklı dikiş için özel reçme, overlok ve çift iğne makinelerini kullanan yetenekli terziler.',
    fac3Title: '%100 Kalite Denetimi', fac3Desc: 'Ham kumaş denetiminden son ütüleme ve paketlemeye kadar her aşamada uygulanan AQL 2.5 standart kalite kontrolleri.',

    catSub: 'B2B Ürün Yelpazesi',
    catTitle: 'Üretim Kategorilerimiz',
    cat1Title: 'Erkek Giyim Koleksiyonu', cat1Desc: 'Premium gömlekler, polo yaka tişörtler, pantolonlar, kapüşonlular ve ceketler. Örme ve dokuma seçenekleri.',
    cat2Title: 'Kadın Giyim Koleksiyonu', cat2Desc: 'Hassas kalıplarla hazırlanmış zarif elbiseler, bluzlar, ev giyimi ve spor giyim.',
    cat3Title: 'Çocuk ve Bebek Giyimi', cat3Desc: 'Yumuşak OEKO-TEX sertifikalı pamuklu giysiler. Uyku ve günlük giyim için toksik olmayan boyalar.',
    cat4Title: 'Kurumsal ve İş Giyimi', cat4Desc: 'Markanıza özel tasarlanmış dayanıklı otel, medikal, güvenlik ve endüstriyel üniformalar.',
    catTag: 'Örme ve Dokuma',
    catBtn: 'Sipariş Şartlarını Sorun →',

    ecoSub: 'Sürdürülebilir & Premium',
    ecoTitle: '%100 Doğal Organik Pamuk ve Saf Keten',
    ecoDesc: 'Sertifikalı %100 Ege pamuğu ve Türk keteni kullanarak üst düzey sürdürülebilir moda hatları üretiyoruz. Nefes alabilen, çevre dostu giysiler arayan seçkin Avrupa butikleri arasında popülerdir.',
    ecoLi1: 'Önceden yıkanmış, çekmez organik keten gömlekler ve elbiseler',
    ecoLi2: 'Yüksek renk haslığına sahip %100 penyelenmiş pamuklu jarse',
    ecoLi3: 'GOTS uyumlu özel çevre dostu boyama',

    faqSub: 'Sıkça Sorulan Sorular',
    faqTitle: 'B2B İhracat ve Üretim Detayları',
    faq1Q: 'Minimum Sipariş Miktarınız (MOQ) Nedir?', faq1A: 'Standart MOQ\'umuz kumaş özelliklerine ve giysi karmaşıklığına bağlı olarak stil/renk başına 300-500 adetten başlamaktadır.',
    faq2Q: 'Avrupa ve Rusya\'ya ne kadar hızlı teslimat yapabilirsiniz?', faq2A: 'Numune alımı 7-10 iş günü sürer. Toplu üretim miktara bağlı olarak 3-5 hafta sürer. Orta Avrupa\'ya karayolu taşımacılığı 4-6 gün, Rusya\'ya nakliye ise 5-8 gün sürmektedir.',
    faq3Q: 'Gümrük belgelerini (ATR / EUR.1) siz mi hallediyorsunuz?', faq3A: 'Evet, AB\'de sorunsuz gümrüksüz gümrükleme için eksiksiz ATR sertifikaları, EUR.1 dolaşım belgeleri, ticari faturalar ve paketleme listelerini biz hazırlıyoruz.',
    faq4Q: 'Özel etiket, marka ve ambalaj sipariş edebilir miyim?', faq4A: 'Evet, dokuma marka etiketleri, yıkama talimatları, karton etiketler, barkodlar ve özel baskılı poşetler dahil olmak üzere eksiksiz OEM Özel Marka (Private Label) hizmetleri sunuyoruz.',

    footDesc: 'Türkiye\'de birinci sınıf tekstil tasarımı, üretimi ve ihracat şirketi. Avrupa, İngiltere, DACH ve BDT bölgelerindeki kurumsal alıcıların güvenilir tercihi.',
    footContact: 'İletişim ve Satış',
    footProdBase: 'Üretim Üssü: Antalya / Türkiye',
    footMarkets: 'İhracat Pazarlarımız',
    footMarketsList: 'Almanya · Fransa · İtalya · Hollanda · Polonya · Avusturya · İsviçre · Rusya · İngiltere',
    footCopy: 'Anavera Tekstil. Tüm hakları saklıdır. terzihizmeti.com.tr\'nin premium üretim şubesi.',
    waFloat: 'WhatsApp Teklif',
    waMessage: 'Merhaba, Anavera Tekstil kadın ve erkek giyim üretimi ve ihracat şartları hakkında bilgi almak istiyorum.',
  },
  de: {
    topBarMsg: '✦ Direkter B2B-Export von Damen- und Herrenbekleidung aus der Türkei',
    quoteBtn: 'B2B-Angebot einholen',
    heroVerified: 'Verifizierter türkischer Bekleidungshersteller',
    heroTitle1: 'Premium Damen- & Herrenbekleidung für ',
    heroTitle2: 'Europa & GUS',
    heroDesc: 'Hochkapazitative OEM- & Private-Label-Produktion. Wir entwerfen, produzieren und exportieren Herren-, Damen- und Arbeitskleidung aus hochwertiger türkischer Baumwolle, Leinen und nachhaltigen Stoffen.',
    contactWa: 'Auf WhatsApp kontaktieren',
    callUs: 'Rufen Sie uns an:',
    stat1: 'Stück / Monat',
    stat2: 'Exportländer',
    stat3: 'Exportbereit',
    cert1Title: 'OEKO-TEX 100', cert1Desc: 'Umweltfreundliche, chemikalienfreie Stoffe',
    cert2Title: 'ISO 9001:2015', cert2Desc: 'Zertifiziertes Qualitätsmanagement',
    cert3Title: 'EU-Zollunion', cert3Desc: 'ATR / EUR.1 Zollfreier Export',
    cert4Title: 'Vollständiges OEM / ODM', cert4Desc: 'Eigenmarke & individuelle Verpackung',

    menSub: 'Herrenbekleidung Produktion',
    menTitle: 'Maßgeschneiderte OEM Herrenkollektion',
    menDesc: 'Von hochwertigen Hemden bis hin zu lässigen Poloshirts, Hosen und Sakko-Jacken.',
    men1Title: 'Hemden & Poloshirts', men1Desc: '100% gekämmte Baumwolle, bügelfreie Stoffe und individuelle Kragendesigns.',
    men2Title: 'Blazer, Sakkos & Anzüge', men2Desc: 'Präzise CAD-Muster nach europäischen Konfektionsgrößen.',
    men3Title: 'Hosen & Casual Strickwaren', men3Desc: 'Chinos, Stoffhosen, Hoodies und langlebige Sweatshirts.',

    womenSub: 'Damenbekleidung Produktion',
    womenTitle: 'Eleganz & Präzision in der Damenbekleidung',
    womenDesc: 'Feine Nähte, anspruchsvolle Schnitte und Stoffe aus Bio-Leinen und Baumwolle für moderne Damenkollektionen.',
    women1Title: 'Kleider & Blusen', women1Desc: 'Fließende Stoffe, individuelle Drucke und atmungsaktive Materialien.',
    women2Title: 'Blazer, Anzüge & Office Wear', women2Desc: 'Maßgeschneiderte feminine Silhouetten und erstklassige Verarbeitungen.',
    women3Title: 'Leinen & Lässige Kleidung', women3Desc: 'Vorgewaschenes 100% türkisches Leinen und weiche Baumwoll-Loungewear.',

    facSub: 'Exzellenz in der Fertigung',
    facTitle: 'Moderne Anlagen in der Türkei',
    facDesc: 'Von der sorgfältigen Schnittmustererstellung über das automatisierte Zuschneiden bis hin zum Präzisionsnähen und speziellen Qualitätskontrolllinien.',
    fac1Title: 'Präzisionszuschnitt & Musterung', fac1Desc: 'Modernste CAD-Schnittmustererstellung und computergesteuerter Stoffzuschnitt garantieren höchste Stoffeffizienz.',
    fac2Title: 'Hochgeschwindigkeits-Montagelinien', fac2Desc: 'Erfahrene Näherinnen bedienen spezielle Flatlock-, Overlock- und Doppel-Nadel-Maschinen.',
    fac3Title: '100% Qualitätskontrolle', fac3Desc: 'AQL 2.5 Standard-Qualitätsprüfungen in jeder Phase — von der Rohstoffprüfung bis zum finalen Bügeln.',

    catSub: 'B2B-Produktsortiment',
    catTitle: 'Unsere Fertigungskategorien',
    cat1Title: 'Herrenbekleidung', cat1Desc: 'Premium-Hemden, Poloshirts, Hosen, Hoodies und Jacken. Strick- und Webstoffoptionen.',
    cat2Title: 'Damenbekleidung', cat2Desc: 'Elegante Kleider, Blusen, Loungewear und Activewear, gefertigt nach präzisen Schnittmustern.',
    cat3Title: 'Kinder- & Babybekleidung', cat3Desc: 'Weiche, OEKO-TEX zertifizierte Baumwollkleidung. Ungiftige Farbstoffe für Schlaf- und Alltagskleidung.',
    cat4Title: 'Corporate & Berufsbekleidung', cat4Desc: 'Langlebige Hotel-, Medizin-, Sicherheits- und Industrieuniformen, angepasst an Ihre Marke.',
    catTag: 'Strick & Webware',
    catBtn: 'Bestellbedingungen anfragen →',

    ecoSub: 'Nachhaltig & Premium',
    ecoTitle: '100% Natürliche Bio-Baumwolle & Reines Leinen',
    ecoDesc: 'Wir produzieren hochwertige nachhaltige Modelinien aus zertifizierter 100% Ägäis-Baumwolle und türkischem Flachsleinen.',
    ecoLi1: 'Vorgewaschene, einlaufsichere Bio-Leinenhemden & -kleider',
    ecoLi2: 'Gekämmter 100% Baumwoll-Jersey mit hoher Farbechtheit',
    ecoLi3: 'Individuelle, umweltfreundliche Färbung (GOTS-konform)',

    faqSub: 'Häufig gestellte Fragen',
    faqTitle: 'B2B Export- & Produktionsdetails',
    faq1Q: 'Wie hoch ist Ihre Mindestbestellmenge (MOQ)?', faq1A: 'Unsere Standard-MOQ beginnt bei 300-500 Stück pro Stil/Farbe, abhängig von den Stoffspezifikationen.',
    faq2Q: 'Wie schnell können Sie in die EU & nach Russland liefern?', faq2A: 'Die Bemusterung dauert 7-10 Werktage. Die Massenproduktion dauert je nach Menge 3-5 Wochen.',
    faq3Q: 'Kümmern Sie sich um die Zolldokumentation (ATR / EUR.1)?', faq3A: 'Ja, wir kümmern uns um vollständige ATR-Zertifikate, EUR.1-Warenverkehrsbescheinigungen und Handelsrechnungen.',
    faq4Q: 'Kann ich individuelle Etiketten und Verpackungen bestellen?', faq4A: 'Ja, wir bieten komplette OEM Private Label-Dienstleistungen.',

    footDesc: 'Premium-Unternehmen für Textildesign, Produktion und Export in der Türkei. Vertrauenswürdiger Partner für Unternehmenskäufer in ganz Europa, UK, DACH und der GUS.',
    footContact: 'Kontakt & Vertrieb',
    footProdBase: 'Produktionsstandort: Antalya / Türkei',
    footMarkets: 'Exportmärkte',
    footMarketsList: 'Deutschland · Frankreich · Italien · Niederlande · Polen · Österreich · Schweiz · Russland · Großbritannien',
    footCopy: 'Anavera Tekstil. Alle Rechte vorbehalten. Ein Premium-Produktionszweig von terzihizmeti.com.tr',
    waFloat: 'WhatsApp Angebot',
    waMessage: 'Hallo, ich hätte gerne Informationen zur Produktion und zum Export von Damen- und Herrenbekleidung bei Anavera Tekstil.',
  },
  ru: {
    topBarMsg: '✦ Прямой B2B экспорт женской и мужской одежды из Турции',
    quoteBtn: 'Получить B2B предложение',
    heroVerified: 'Проверенный турецкий производитель одежды',
    heroTitle1: 'Производство женской и мужской одежды премиум-класса для ',
    heroTitle2: 'Европы и СНГ',
    heroDesc: 'Высокопроизводительное OEM-производство. Мы проектируем, производим и экспортируем мужскую, женскую одежду и униформу, используя премиальный турецкий хлопок, лен и экологичные ткани.',
    contactWa: 'Связаться в WhatsApp',
    callUs: 'Позвоните нам:',
    stat1: 'Штук / Месяц',
    stat2: 'Стран экспорта',
    stat3: 'Готовность к экспорту',
    cert1Title: 'OEKO-TEX 100', cert1Desc: 'Экологичные ткани без химикатов',
    cert2Title: 'ISO 9001:2015', cert2Desc: 'Сертифицированный менеджмент качества',
    cert3Title: 'Таможенный союз ЕС', cert3Desc: 'Беспошлинный экспорт ATR / EUR.1',
    cert4Title: 'Полный OEM / ODM', cert4Desc: 'Собственная торговая марка и упаковка',

    menSub: 'Производство мужской одежды',
    menTitle: 'OEM Коллекция мужской одежды',
    menDesc: 'От премиальных рубашек до футболок поло, брюк и пиджаков высокой точности пошива.',
    men1Title: 'Рубашки и Поло', men1Desc: '100% гребенной хлопок, ткани не требующие глажки и индивидуальные воротники.',
    men2Title: 'Пиджаки, Блейзеры и Костюмы', men2Desc: 'Точные лекала в САПР по европейским размерным сеткам.',
    men3Title: 'Брюки и Повседневный Трикотаж', men3Desc: 'Чиносы, классические брюки, худи и свитшоты высокой прочности.',

    womenSub: 'Производство женской одежды',
    womenTitle: 'Элегантность и точность в женской одежде',
    womenDesc: 'Изящные швы, утонченные силуэты и ткани из органического льна и хлопка для современных женских коллекций.',
    women1Title: 'Платья и Блузки', women1Desc: 'Струящиеся ткани, индивидуальные принты и дышащие органические материалы.',
    women2Title: 'Пиджаки, Костюмы и Офисный стиль', women2Desc: 'Приталенные женственные силуэты, высокая плотность стежков и премиальная отделка.',
    women3Title: 'Лен и Домашняя одежда', women3Desc: 'Предварительно постиранный 100% турецкий лен и мягкий хлопковый трикотаж.',

    facSub: 'Совершенство производства',
    facTitle: 'Современные мощности в Турции',
    facDesc: 'От тщательного создания лекал до автоматизированного раскроя, точного шитья и выделенных линий контроля качества.',
    fac1Title: 'Точный крой и лекала', fac1Desc: 'Усовершенствованная разработка лекал в САПР и компьютеризированный раскрой ткани.',
    fac2Title: 'Высокоскоростные сборочные линии', fac2Desc: 'Квалифицированные швеи работают на специализированном оборудовании для долговечных швов.',
    fac3Title: '100% Контроль качества', fac3Desc: 'Проверки качества стандарта AQL 2.5 применяются на каждом этапе.',

    catSub: 'Ассортимент B2B',
    catTitle: 'Наши категории производства',
    cat1Title: 'Мужская коллекция', cat1Desc: 'Рубашки премиум-класса, поло, брюки, худи и куртки. Трикотаж и тканые материалы.',
    cat2Title: 'Женская коллекция', cat2Desc: 'Элегантные платья, блузки, домашняя и спортивная одежда, созданные по точным лекалам.',
    cat3Title: 'Детская одежда', cat3Desc: 'Мягкая одежда из хлопка с сертификатом OEKO-TEX. Нетоксичные красители.',
    cat4Title: 'Корпоративная и рабочая одежда', cat4Desc: 'Долговечная униформа для отелей, медицины, охраны и промышленности, адаптированная под ваш бренд.',
    catTag: 'Трикотаж и Ткань',
    catBtn: 'Узнать условия заказа →',

    ecoSub: 'Экологичность и Премиум',
    ecoTitle: '100% Натуральный органический хлопок и чистый лен',
    ecoDesc: 'Мы производим высококачественные экологичные коллекции, используя сертифицированный 100% эгейский хлопок и турецкий лен.',
    ecoLi1: 'Предварительно постиранные рубашки и платья из органического льна',
    ecoLi2: 'Гребенной джерси из 100% хлопка с высокой стойкостью цвета',
    ecoLi3: 'Индивидуальное экологичное окрашивание (стандарт GOTS)',

    faqSub: 'Часто задаваемые вопросы',
    faqTitle: 'Детали B2B экспорта и производства',
    faq1Q: 'Каков ваш минимальный объем заказа (MOQ)?', faq1A: 'Наш стандартный MOQ начинается от 300-500 штук на стиль/цвет, в зависимости от спецификации ткани.',
    faq2Q: 'Как быстро вы можете доставить в ЕС и Россию?', faq2A: 'Изготовление образцов занимает 7-10 рабочих дней. Массовое производство занимает 3-5 недель.',
    faq3Q: 'Оформляете ли вы таможенные документы?', faq3A: 'Да, мы оформляем полные сертификаты, коммерческие счета и упаковочные листы.',
    faq4Q: 'Могу ли я заказать индивидуальные бирки и упаковку?', faq4A: 'Да, мы предоставляем полные услуги OEM Private Label.',

    footDesc: 'Премиальная компания по дизайну, производству и экспорту текстиля в Турции. Нам доверяют корпоративные покупатели по всей Европе и СНГ.',
    footContact: 'Контакты и Продажи',
    footProdBase: 'Производственная база: Анталия / Турция',
    footMarkets: 'Рынки экспорта',
    footMarketsList: 'Германия · Франция · Италия · Нидерланды · Польша · Австрия · Швейцария · Россия · Великобритания',
    footCopy: 'Anavera Tekstil. Все права защищены. Премиальный производственный филиал terzihizmeti.com.tr',
    waFloat: 'WhatsApp Запрос',
    waMessage: 'Здравствуйте, я хотел бы получить информацию о производстве и экспорте женской и мужской одежды Anavera Tekstil.',
  }
};

type LangType = 'en' | 'tr' | 'de' | 'ru';

type PageProps = {
  searchParams: Promise<{ lang?: string }> | { lang?: string };
};

export default async function AnaveraTekstilPage({ searchParams }: PageProps) {
  // Next.js 15 uyumluluğu için await kullanımı
  const resolvedParams = await searchParams;
  const rawLang = resolvedParams?.lang || '';
  
  const currentLang: LangType = ['en', 'tr', 'de', 'ru'].includes(rawLang)
    ? (rawLang as LangType)
    : 'en';
    
  const t = translations[currentLang];
  const WA_LINK = WA(t.waMessage);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#F8FAFC', color: '#0F172A', margin: 0, padding: 0 }}>
        
        {/* TOP INFORMATION BAR WITH LANGUAGE SWITCHER */}
        <div style={{ backgroundColor: '#020617', color: '#94A3B8', fontSize: '0.8rem', padding: '0.6rem 1rem', borderBottom: '1px solid #1E293B' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {t.topBarMsg}
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a href={`tel:${PHONE_E}`} style={{ color: '#CBD5E1', textDecoration: 'none' }}>📞 {PHONE}</a>
              <span style={{ color: '#334155' }}>|</span>
              
              {/* DYNAMIC LANGUAGE SWITCHER */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Link href="/anavera-tekstil?lang=en" style={{ textDecoration: 'none', color: currentLang === 'en' ? '#E4C664' : '#94A3B8', fontWeight: currentLang === 'en' ? 800 : 400, transition: 'color 0.2s' }}>🇬🇧 EN</Link>
                <span style={{ color: '#334155' }}>·</span>
                <Link href="/anavera-tekstil?lang=de" style={{ textDecoration: 'none', color: currentLang === 'de' ? '#E4C664' : '#94A3B8', fontWeight: currentLang === 'de' ? 800 : 400, transition: 'color 0.2s' }}>🇩🇪 DE</Link>
                <span style={{ color: '#334155' }}>·</span>
                <Link href="/anavera-tekstil?lang=ru" style={{ textDecoration: 'none', color: currentLang === 'ru' ? '#E4C664' : '#94A3B8', fontWeight: currentLang === 'ru' ? 800 : 400, transition: 'color 0.2s' }}>🇷🇺 RU</Link>
                <span style={{ color: '#334155' }}>·</span>
                <Link href="/anavera-tekstil?lang=tr" style={{ textDecoration: 'none', color: currentLang === 'tr' ? '#E4C664' : '#94A3B8', fontWeight: currentLang === 'tr' ? 800 : 400, transition: 'color 0.2s' }}>🇹🇷 TR</Link>
              </div>

            </div>
          </div>
        </div>

        {/* HEADER / NAVIGATION */}
        <header style={{ backgroundColor: '#0F172A', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 4px 20px rgba(0,0,0,0.2)', borderBottom: '2px solid #C9A227' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* BRAND LOGO */}
            <a href={PAGE_URL} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: '8px', background: 'linear-gradient(135deg, #C9A227 0%, #FDE047 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(201,162,39,0.4)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '0.05em', lineHeight: 1 }}>
                  ANAVERA
                </div>
                <div style={{ color: '#E4C664', fontSize: '0.7rem', letterSpacing: '0.25em', fontWeight: 600, marginTop: '3px' }}>
                  TEKSTİL · TURKEY
                </div>
              </div>
            </a>

            {/* ACTION BUTTON */}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#C9A227', color: '#0F172A', padding: '0.6rem 1.2rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'transform 0.2s' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              {t.quoteBtn}
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section style={{ position: 'relative', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%), url("https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover no-repeat', padding: '5rem 1rem', color: '#FFFFFF' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ maxWidth: 800 }}>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(201, 162, 39, 0.15)', border: '1px solid rgba(201, 162, 39, 0.5)', padding: '0.4rem 1rem', borderRadius: '30px', fontSize: '0.8rem', color: '#FDE047', fontWeight: 600, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E', boxShadow: '0 0 8px #22C55E' }}></span>
                {t.heroVerified}
              </div>

              <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                {t.heroTitle1} <span style={{ color: '#E4C664' }}>{t.heroTitle2}</span>
              </h1>

              <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 680 }}>
                {t.heroDesc}
              </p>

              {/* ACTION BUTTONS */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}>
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                  {t.contactWa}
                </a>
                <a href={`tel:${PHONE_E}`} style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  📞 {t.callUs} {PHONE}
                </a>
              </div>

              {/* STATS */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#E4C664' }}>50K+</div>
                  <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.3rem' }}>{t.stat1}</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#E4C664' }}>15+</div>
                  <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.3rem' }}>{t.stat2}</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#E4C664' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.3rem' }}>{t.stat3}</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST & CERTIFICATIONS BAR */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '2rem 1rem', borderBottom: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: t.cert1Title, desc: t.cert1Desc },
              { title: t.cert2Title, desc: t.cert2Desc },
              { title: t.cert3Title, desc: t.cert3Desc },
              { title: t.cert4Title, desc: t.cert4Desc }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #F1F5F9' }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>{item.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.2rem' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1. SPECIAL SHOWCASE: ERKEK GİYİM İMALATI (MENSWEAR) */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.menSub}</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>{t.menTitle}</h2>
              <p style={{ color: '#64748B', maxWidth: 700, margin: '1rem auto 0', fontSize: '1.05rem', lineHeight: 1.6 }}>
                {t.menDesc}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {/* Erkek Gömlek & Polo */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Erkek Gömlek ve Polo Üretimi" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{t.men1Title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{t.men1Desc}</p>
                </div>
              </div>

              {/* Erkek Ceket & Takım */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Erkek Ceket ve Takım Elbise İmalatı" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{t.men2Title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{t.men2Desc}</p>
                </div>
              </div>

              {/* Erkek Casual & Pantolon */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Erkek Casual ve Triko Üretimi" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight 800, color: '#0F172A', marginBottom: '0.5rem' }}>{t.men3Title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{t.men3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SPECIAL SHOWCASE: KADIN GİYİM İMALATI (WOMENSWEAR) */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.womenSub}</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>{t.womenTitle}</h2>
              <p style={{ color: '#64748B', maxWidth: 700, margin: '1rem auto 0', fontSize: '1.05rem', lineHeight: 1.6 }}>
                {t.womenDesc}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {/* Kadın Elbise & Bluz */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Kadın Elbise ve Bluz Üretimi" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{t.women1Title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{t.women1Desc}</p>
                </div>
              </div>

              {/* Kadın Ceket & Takım */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Kadın Ceket ve Takım İmalatı" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{t.women2Title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{t.women2Desc}</p>
                </div>
              </div>

              {/* Kadın Keten & Triko */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Kadın Keten ve Casual Giyim Üretimi" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{t.women3Title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{t.women3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTION SHOWCASE (FACILITIES) */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.facSub}</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>{t.facTitle}</h2>
              <p style={{ color: '#64748B', maxWidth: 700, margin: '1rem auto 0', fontSize: '1.05rem', lineHeight: 1.6 }}>
                {t.facDesc}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {/* 1. Hassas Kesim ve Kalıp */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/3738095/pexels-photo-3738095.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="Precision Cutting & Patterning" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{t.fac1Title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{t.fac1Desc}</p>
                </div>
              </div>

              {/* 2. Yüksek Hızlı Montaj Hatları */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/4622350/pexels-photo-4622350.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="High-Speed Assembly Lines" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight 800, color: '#0F172A', marginBottom: '0.5rem' }}>{t.fac2Title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{t.fac2Desc}</p>
                </div>
              </div>

              {/* 3. %100 Kalite Denetimi */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/8483488/pexels-photo-8483488.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="100% Quality Inspection" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight 800, color: '#0F172A', marginBottom: '0.5rem' }}>{t.fac3Title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{t.fac3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS CATALOGUE OVERVIEW */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#F8FAFC' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.catSub}</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>{t.catTitle}</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', title: t.cat1Title, desc: t.cat1Desc },
                { img: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', title: t.cat2Title, desc: t.cat2Desc },
                { img: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', title: t.cat3Title, desc: t.cat3Desc },
                { img: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', title: t.cat4Title, desc: t.cat4Desc },
              ].map((cat, idx) => (
                <div key={idx} style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#FFF', border: '1px solid #E2E8F0', boxShadow: '0 10px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '260px', position: 'relative' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 16, left: 16, backgroundColor: '#0F172A', color: '#E4C664', fontSize: '0.75rem', fontWeight: 800, padding: '0.4rem 0.8rem', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {t.catTag}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.8rem' }}>{cat.title}</h3>
                      <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.5rem' }}>{cat.desc}</p>
                    </div>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', backgroundColor: '#F8FAFC', color: '#0F172A', textAlign: 'center', padding: '0.8rem 1rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', border: '2px solid #E2E8F0', transition: 'all 0.2s' }}>
                      {t.catBtn}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 100% COTTON & LINEN SPECIAL */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#0F172A', color: '#FFFFFF' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#E4C664', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.ecoSub}</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                {t.ecoTitle}
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                {t.ecoDesc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#E2E8F0', fontSize: '1rem', display: 'grid', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: '#22C55E' }}>✔</span> {t.ecoLi1}</li>
                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: '#22C55E' }}>✔</span> {t.ecoLi2}</li>
                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: '#22C55E' }}>✔</span> {t.ecoLi3}</li>
              </ul>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/17630522/pexels-photo-17630522.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Natural Cotton Menswear" style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', border: '1px solid #334155' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/4256573/pexels-photo-4256573.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Linen Womenswear" style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', border: '1px solid #334155', marginTop: '2rem' }} />
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#F8FAFC' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.faqSub}</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>{t.faqTitle}</h2>
            </div>

            <div style={{ display: 'grid', gap: '1.2rem' }}>
              {[
                [t.faq1Q, t.faq1A],
                [t.faq2Q, t.faq2A],
                [t.faq3Q, t.faq3A],
                [t.faq4Q, t.faq4A],
              ].map(([question, answer], idx) => (
                <details key={idx} style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                  <summary style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.05rem', outline: 'none' }}>{question}</summary>
                  <p style={{ marginTop: '1rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, margin: '1rem 0 0 0', paddingLeft: '1.2rem', borderLeft: '2px solid #C9A227' }}>{answer}</p>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: '#020617', color: '#94A3B8', padding: '4rem 1rem 2rem', borderTop: '4px solid #C9A227' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                ANAVERA <span style={{ color: '#C9A227' }}>TEKSTİL</span>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#64748B' }}>
                {t.footDesc}
              </p>
            </div>
            <div>
              <h4 style={{ color: '#F8FAFC', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '0.05em' }}>{t.footContact}</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📱 WhatsApp: <a href={WA_LINK} style={{ color: '#38BDF8', textDecoration: 'none' }}>{PHONE}</a></p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.8rem' }}>📍 {t.footProdBase}</p>
              <p style={{ fontSize: '0.95rem' }}>🌐 Website: <a href={SITE} style={{ color: '#94A3B8', textDecoration: 'none' }}>terzihizmeti.com.tr</a></p>
            </div>
            <div>
              <h4 style={{ color: '#F8FAFC', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '0.05em' }}>{t.footMarkets}</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                {t.footMarketsList}
              </p>
            </div>
          </div>

          <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: '2rem', borderTop: '1px solid #1E293B', textAlign: 'center', fontSize: '0.85rem', color: '#475569' }}>
            © {new Date().getFullYear()} {t.footCopy}
          </div>
        </footer>

        {/* FLOATING WHATSAPP BUTTON */}
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '25px', right: '25px', backgroundColor: '#25D366', color: '#FFF', borderRadius: '50px', padding: '0.9rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5)', textDecoration: 'none', fontWeight: 800, fontSize: '0.95rem', zIndex: 9999, transition: 'transform 0.2s' }}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span style={{ display: 'inline-block' }}>{t.waFloat}</span>
        </a>

      </div>
    </>
  );
}
