// ============================================================
// EN / RU / DE sayfalar için bölge ve hizmet başına ELLE yazılmış, birbirinden FARKLI başlık / açıklama / anahtar kelime.
// Her yakın bölge ayrı bir ihtiyaca odaklanır (tamir-tadilat, abiye/gelinlik, takım elbise, yırtık onarımı, keten-pamuk özel dikim,
// kot/paça, mont/deri...). Hem tamir-tadilat hem özel dikim (keten, pamuk; bay, bayan) kapsanır.
// Yalnızca doğrulanmış bilgi: paça ₺200'den, fermuar ₺300'den, abiye ve gelinlik tadilatı fotoğrafa veya işin detayına göre; dikimde sabit fiyat yok (fotoğrafa ve modele göre); eve ve otele her bölgede servis.
// Bölgede kayıt yoksa sayfa lib/seo-angles.ts şablonuna döner.
// ============================================================

export type FgMeta = { title: string; desc: string; kw: string[] };
type L3 = 'en' | 'ru' | 'de';
type Row = Record<L3, { t: string; d: string; kw: string[] }>;

const FG_DISTRICT: Record<string, Row> = {
  "konyaalti": {
    en: { t: "Konyaaltı Tailor: Hurma, Liman, Uncalı Beach | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Tailor in Konyaaltı: Hurma, Liman, Uncalı, Sarısu, Gürsu. Dress repair, alterations, custom linen sewing. pick-up.", kw: ["tailor Konyaaltı", "tailor Konyaaltı beach", "tailor Hurma Konyaaltı", "tailor Liman Konyaaltı", "tailor Uncalı", "tailor Sarısu", "tailor Gürsu", "dress repair Konyaaltı", "custom linen sewing Konyaaltı"] },
    ru: { t: "Портной Коньяалты: Хурма, Лиман, Унджалы | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной в Коньяалты: Хурма, Лиман, Унджалы, Сарысу, Гюрсу. Ремонт платьев, подгонка, пошив из льна. Забор вещей.", kw: ["портной Коньяалты", "портной пляж Коньяалты", "портной Хурма Коньяалты", "портной Лиман Коньяалты", "ремонт платьев Коньяалты", "пошив из льна Коньяалты"] },
    de: { t: "Schneider Konyaaltı: Hurma, Liman, Uncalı | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in Konyaaltı: Hurma, Liman, Uncalı, Sarısu, Gürsu. Kleider ändern, reparieren, Leinen nach Maß. Hotelabholung.", kw: ["Schneider Konyaaltı", "Schneider Konyaaltı Strand", "Schneider Hurma Konyaaltı", "Schneider Liman Konyaaltı", "Kleid ändern Konyaaltı", "Leinen nach Maß Konyaaltı"] },
  },
  "muratpasa": {
    en: { t: "Muratpaşa Tailor: Evening & Wedding Dresses | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Evening and wedding dress alteration in Muratpaşa: evening and wedding dresses. Fittings included, pick-up arranged on WhatsApp.", kw: ["tailor Muratpaşa", "evening dress alteration Muratpaşa", "wedding dress alteration Antalya", "dress tailor Muratpaşa"] },
    ru: { t: "Портной Муратпаша: вечерние и свадебные платья | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка вечерних и свадебных платьев в Муратпаше: вечернее и свадебное. Забор — по договорённости в WhatsApp.", kw: ["портной Муратпаша", "подгонка вечернего платья Муратпаша", "подгонка свадебного платья Анталья"] },
    de: { t: "Schneider Muratpaşa: Abend- & Brautkleid ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Abendkleid und Brautkleid ändern in Muratpaşa: Abend- und Brautkleid. Mit Anprobe, Abholung per WhatsApp vereinbar.", kw: ["Schneider Muratpaşa", "Abendkleid ändern Muratpaşa", "Brautkleid ändern Antalya"] },
  },
  "meltem": {
    en: { t: "Meltem Tailor: Suit, Jacket & Trouser Alteration | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Suit, jacket and trouser alterations in Meltem for men and women: sleeves, hems, waist, shoulders. pick-up and delivery.", kw: ["tailor Meltem", "suit alteration Meltem", "jacket alteration Antalya", "trouser hemming Meltem"] },
    ru: { t: "Портной Мельтем: костюм, пиджак, брюки | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка костюмов, пиджаков и брюк в Мельтеме, мужских и женских: рукава, длина, талия, плечи. Забор вещей.", kw: ["портной Мельтем", "подгонка костюма Мельтем", "подгонка пиджака Анталья", "подшив брюк Мельтем"] },
    de: { t: "Schneider Meltem: Anzug, Sakko, Hose ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Anzug, Sakko und Hose ändern in Meltem, für Herren und Damen: Ärmel, Saum, Taille, Schultern. Anprobe am Körper, Hotelabholung.", kw: ["Schneider Meltem", "Anzug ändern Meltem", "Sakko ändern Antalya", "Hose kürzen Meltem"] },
  },
  "fener": {
    en: { t: "Fener Tailor: Torn Clothes & Seam Repair | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Torn clothes, holes and open seams repaired in Fener, for men and women. Stitched with thread to match the fabric, ready same day.", kw: ["tailor Fener", "torn clothes repair Fener", "fix hole in clothes Antalya", "sew open seam Fener"] },
    ru: { t: "Портной Фенер: ремонт порванной одежды, швы | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Ремонт порванной одежды, дырок и распоровшихся швов в Фенере, мужской и женской. Нитки под ткань, готово в тот же день.", kw: ["портной Фенер", "ремонт порванной одежды Фенер", "зашить дырку Анталья", "зашить шов Фенер"] },
    de: { t: "Schneider Fener: Riss & Loch in Kleidung flicken | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Risse, Löcher und aufgegangene Nähte in Fener reparieren, für Damen und Herren. Garn passend zum Stoff, meist am selben Tag fertig.", kw: ["Schneider Fener", "Riss reparieren Fener", "Loch flicken Antalya", "Naht nähen Fener"] },
  },
  "sirinyali": {
    en: { t: "Şirinyalı Tailor: Made-to-Measure Linen Dresses | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Custom dressmaking in Şirinyalı: linen and cotton dresses, shirts and outfits for women and men. Pick-up arranged on WhatsApp.", kw: ["tailor Şirinyalı", "made to measure dress Antalya", "linen dress tailor Şirinyalı", "custom clothing men women Antalya"] },
    ru: { t: "Ширинъялы: пошив льняных платьев по меркам | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Пошив на заказ в Ширинъялы: платья, рубашки и наряды из льна и хлопка, женские и мужские, по вашим меркам и выбранной модели.", kw: ["пошив платья по меркам Ширинъялы", "льняное платье на заказ Анталья", "пошив одежды на заказ Анталья"] },
    de: { t: "Şirinyalı: Leinenkleider nach Maß nähen lassen | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Maßanfertigung in Şirinyalı: Kleider, Hemden und Outfits aus Leinen und Baumwolle für Damen und Herren. Abholung per WhatsApp.", kw: ["Kleid nach Maß Şirinyalı", "Leinenkleid nähen lassen Antalya", "Maßschneiderei Antalya Damen Herren"] },
  },
  "arapsuyu": {
    en: { t: "Arapsuyu Tailor: Men's & Women's Repairs, Jeans | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Men's and women's clothing repairs in Arapsuyu: jeans hemming, trouser taking in, dress repair, open seams. Pick-up arranged on WhatsApp.", kw: ["tailor Arapsuyu", "jeans hemming Arapsuyu", "clothing repair Arapsuyu", "dress alteration Arapsuyu"] },
    ru: { t: "Портной Арапсую: ремонт мужской и женской одежды | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Ремонт мужской и женской одежды в Арапсую: подшив джинсов, ушивание брюк, ремонт платьев, зашить швы. Забор и доставка.", kw: ["портной Арапсую", "подшить джинсы Арапсую", "ремонт одежды Арапсую"] },
    de: { t: "Arapsuyu: Herren- und Damenkleidung ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Änderungen für Herren und Damen in Arapsuyu: Jeans kürzen, Hose enger machen, Kleid reparieren, Nähte schließen. Hotelabholung.", kw: ["Schneider Arapsuyu", "Jeans kürzen Arapsuyu", "Kleidung reparieren Arapsuyu"] },
  },
  "toros": {
    en: { t: "Toros Tailor Near Me: Urgent Trouser Hemming | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Looking for a tailor near Toros? Trouser, skirt and jeans hemming, ready the same day. Pick-up arranged on WhatsApp.", kw: ["tailor near me Toros", "trouser hemming near me", "Same-day hemming Antalya", "tailor open now Antalya"] },
    ru: { t: "Портной рядом, Торос: подшив брюк в тот же день | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной рядом в районе Торос. Подшив брюк, юбок и джинсов, обычно в тот же день. Ежедневно 08:00–23:00, WhatsApp.", kw: ["портной рядом Торос", "подшить брюки рядом", "подшив в тот же день Анталья"] },
    de: { t: "Toros: Schneider in der Nähe, Hose kürzen, eilig | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in der Nähe von Toros: Hosen, Röcke und Jeans kürzen, am selben Tag. Abholung per WhatsApp.", kw: ["Schneider in der Nähe Toros", "Hose kürzen in der Nähe", "Hose kürzen eilig Antalya"] },
  },
  "ogretmenevleri": {
    en: { t: "Öğretmenevleri Tailor: Coat, Leather, Zipper Fix | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Coat, jacket and leather jacket alterations in Öğretmenevleri: shorten, take in, replace zippers. Pick-up arranged on WhatsApp.", kw: ["tailor Öğretmenevleri", "coat alteration Antalya", "leather jacket repair Antalya", "zipper replacement Öğretmenevleri"] },
    ru: { t: "Огретменевлери: пальто, кожа, молнии, ремонт | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка пальто, курток и кожаных курток в Огретменевлери: укоротить, ушить, замена молнии. Забор и доставка.", kw: ["портной Огретменевлери", "подгонка пальто Анталья", "ремонт кожаной куртки Анталья", "замена молнии Огретменевлери"] },
    de: { t: "Öğretmenevleri: Mantel, Leder, Reißverschluss | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Mantel, Jacke und Lederjacke ändern in Öğretmenevleri: kürzen, enger machen, Reißverschluss wechseln. Hotelabholung.", kw: ["Schneider Öğretmenevleri", "Mantel ändern Antalya", "Lederjacke reparieren Antalya", "Reißverschluss wechseln Öğretmenevleri"] },
  },
  "side": {
    en: { t: "Side Tailor: Hotel Pick-up, Clothing Repairs | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Staying in Side? Tailor service from your hotel: alterations, repairs and custom linen and cotton clothing for men and women.", kw: ["tailor Side Antalya", "hotel tailor Side", "custom linen clothing Side", "clothing alterations Side Turkey"] },
    ru: { t: "Портной Сиде: из отеля, лён и хлопок на заказ | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Отдыхаете в Сиде? Портной заберёт вещь из отеля: подгонка, ремонт, пошив на заказ из льна и хлопка, мужская и женская одежда.", kw: ["портной Сиде", "портной в отеле Сиде", "льняная одежда на заказ Сиде", "ремонт одежды Сиде"] },
    de: { t: "Schneider Side: Hotelabholung, Leinen nach Maß | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Urlaub in Side? Schneiderservice ab Hotel: Änderungen, Reparaturen und Maßanfertigung aus Leinen und Baumwolle für Damen und Herren.", kw: ["Schneider Side Antalya", "Hotelschneider Side", "Leinenkleidung nach Maß Side", "Kleidung ändern Side"] },
  },
  "aksu": {
    en: { t: "Aksu Tailor: Custom Sewing & Dress Alteration | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Aksu tailor service: custom sewing for men and women, dress repair and alterations, trouser hemming.", kw: ["tailor Aksu Antalya", "custom sewing Aksu", "dress alteration Aksu", "trouser hemming Aksu"] },
    ru: { t: "Портной Аксу: пошив на заказ и подгонка платьев | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной в Аксу: пошив на заказ мужской и женской одежды, ремонт и подгонка платьев, подшив брюк. Забор и доставка — в WhatsApp.", kw: ["портной Аксу", "пошив на заказ Аксу", "подгонка платья Аксу", "подшив брюк Аксу"] },
    de: { t: "Schneider Aksu: Maßanfertigung & Kleider ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in Aksu: Maßanfertigung für Damen und Herren, Kleider ändern und reparieren, Hosen kürzen.", kw: ["Schneider Aksu Antalya", "Maßanfertigung Aksu", "Kleid ändern Aksu", "Hose kürzen Aksu"] },
  },
  "lara": {
    en: { t: "Lara Tailor: Evening Dress & Hemming Fixes | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Staying in Lara? Evening dress fitting, hemming, quick repairs and custom linen sewing for men and women. Hotel pick-up via WhatsApp.", kw: ["tailor Lara", "tailor Lara Antalya", "evening dress alteration Lara", "hotel tailor Lara", "custom linen dress Lara", "clothing repair Lara", "hemming Lara hotel"] },
    ru: { t: "Портной Лара: вечернее платье и подшив | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Отдыхаете в Ларе? Подгонка вечерних платьев, подшив, быстрый ремонт и пошив из льна для мужчин и женщин. Забор — через WhatsApp.", kw: ["портной Лара", "ателье Лара Анталья", "подгонка вечернего платья Лара", "портной в отель Лара", "пошив льняного платья Лара", "ремонт одежды Лара"] },
    de: { t: "Schneider Lara: Abendkleid & Saum ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Urlaub in Lara? Abendkleid anpassen, Saum kürzen, Reparaturen und Leinen nach Maß für Damen und Herren. Hotelabholung per WhatsApp.", kw: ["Schneider Lara", "Änderungsschneiderei Lara", "Abendkleid ändern Lara", "Hotel Schneider Lara", "Leinenkleid nach Maß Lara", "Kleidung reparieren Lara"] },
  },
  "kundu": {
    en: { t: "Kundu Tailor: Zipper & Torn Clothes Repair | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Broken zipper or torn seam in Kundu? Fast repairs and alterations, plus custom cotton and linen outfits. Hotel pick-up via WhatsApp.", kw: ["tailor Kundu", "zipper repair Kundu", "torn clothes repair Kundu", "hotel tailor Kundu", "clothing alterations Kundu", "custom cotton outfit Kundu"] },
    ru: { t: "Портной Кунду: молния и порванная одежда | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Сломалась молния или порвался шов в Кунду? Быстрый ремонт и подгонка, пошив из хлопка и льна. Забор — через WhatsApp.", kw: ["портной Кунду", "замена молнии Кунду", "ремонт порванной одежды Кунду", "портной в отель Кунду", "подгонка одежды Кунду"] },
    de: { t: "Schneider Kundu: Reißverschluss & Risse flicken | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Reißverschluss kaputt oder Naht offen in Kundu? Schnelle Reparaturen, dazu Outfits nach Maß aus Leinen. Abholung per WhatsApp.", kw: ["Schneider Kundu", "Reißverschluss reparieren Kundu", "Riss in Kleidung flicken Kundu", "Hotel Schneider Kundu", "Kleidung ändern Kundu"] },
  },
  "belek": {
    en: { t: "Belek Tailor: Custom Linen Shirts & Suits | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Custom linen and cotton shirts, trousers, suits and dresses in Belek for men and women. Alterations and repairs too.", kw: ["tailor Belek", "custom linen shirt Belek", "made to measure suit Belek", "linen dress tailor Belek", "hotel tailor Belek", "clothing alterations Belek"] },
    ru: { t: "Портной Белек: льняные рубашки и костюмы | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Пошив на заказ в Белеке: рубашки, брюки, костюмы и платья из льна и хлопка по вашим меркам, мужские и женские. Подгонка и ремонт тоже.", kw: ["портной Белек", "льняная рубашка на заказ Белек", "костюм по меркам Белек", "пошив платья Белек", "портной в отель Белек", "подгонка одежды Белек"] },
    de: { t: "Schneider Belek: Leinenhemd & Anzug nach Maß | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Maßanfertigung in Belek: Hemden, Hosen, Anzüge und Kleider aus Leinen und Baumwolle für Damen und Herren. Dazu Änderungen und Reparaturen.", kw: ["Schneider Belek", "Leinenhemd nach Maß Belek", "Maßanzug Belek", "Leinenkleid Belek", "Hotel Schneider Belek", "Kleidung ändern Belek"] },
  },
  "goynuk": {
    en: { t: "Göynük Tailor: Kids & Family Linen Outfits | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Custom linen and cotton outfits in Göynük for kids, women and men, plus hemming and repairs. Matching family sets.", kw: ["tailor Göynük", "kids linen clothing Göynük", "custom family outfits Göynük", "clothing repair Göynük", "hotel tailor Göynük", "hemming Göynük"] },
    ru: { t: "Портной Гёйнюк: льняная одежда для всей семьи | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Пошив из льна и хлопка в Гёйнюке для детей, женщин и мужчин, плюс подшив, молнии и ремонт. Одинаковые семейные комплекты по желанию.", kw: ["портной Гёйнюк", "детская льняная одежда Гёйнюк", "семейные образы на заказ Гёйнюк", "ремонт одежды Гёйнюк", "подшив Гёйнюк"] },
    de: { t: "Schneider Göynük: Leinen für Kinder & Familie | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Outfits nach Maß aus Leinen in Göynük für Kinder, Damen und Herren, dazu Saum und Reparaturen. Partnerlook möglich.", kw: ["Schneider Göynük", "Kinder Leinenkleidung Göynük", "Partnerlook Familie Göynük", "Kleidung reparieren Göynük", "Saum kürzen Göynük"] },
  },
  "beldibi": {
    en: { t: "Beldibi Tailor: Beach Linen Dresses & Repairs | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Beach linen dresses and shirts made to measure in Beldibi, plus hemming, zipper replacement and torn clothes repair for men and women.", kw: ["tailor Beldibi", "beach linen dress Beldibi", "custom linen clothing Beldibi", "zipper replacement Beldibi", "torn clothes repair Beldibi", "hotel tailor Beldibi"] },
    ru: { t: "Портной Бельдиби: пляжные платья и ремонт | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Пляжные льняные платья и рубашки на заказ в Бельдиби, плюс подшив, замена молнии и ремонт порванной одежды, мужской и женской.", kw: ["портной Бельдиби", "пляжное платье на заказ Бельдиби", "льняная одежда на заказ Бельдиби", "замена молнии Бельдиби", "ремонт одежды Бельдиби"] },
    de: { t: "Schneider Beldibi: Strandkleider & Reparaturen | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Strandkleider und Hemden aus Leinen nach Maß in Beldibi, dazu Saum kürzen, Reißverschluss wechseln und Risse flicken für Damen und Herren.", kw: ["Schneider Beldibi", "Strandkleid nach Maß Beldibi", "Leinenkleidung Beldibi", "Reißverschluss wechseln Beldibi", "Kleidung reparieren Beldibi"] },
  },
  "hurma": {
    en: { t: "Hurma Tailor: Workshop in Hurma, Konyaaltı | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Tailor workshop in Hurma, Konyaaltı: hemming, zippers, dress repair. pick-up and delivery. Daily 08:00–23:00.", kw: ["tailor Hurma", "Hurma clothing alterations", "Hurma hemming Antalya"] },
    ru: { t: "Портной в Хурме: мастерская в Коньяалты | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Мастерская портного в Хурме, Коньяалты: подшив, молния, ремонт платьев. Забор и доставка. 08:00–23:00.", kw: ["портной Хурма", "ремонт одежды Хурма", "подшив брюк Хурма"] },
    de: { t: "Schneider Hurma: Werkstatt in Konyaaltı | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneiderwerkstatt in Hurma, Konyaaltı: Kürzen, Reißverschluss, Kleider ändern. Abholung und Lieferung.", kw: ["Schneider Hurma", "Kleidung ändern Hurma", "Hose kürzen Hurma"] },
  },
  "liman": {
    en: { t: "Liman Tailor: Hemming, Zippers, Alterations | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Tailor in Liman, Konyaaltı: trouser hemming, zipper replacement, taking in, shortening. pick-up and delivery.", kw: ["tailor Liman", "Liman clothing alterations", "Liman hemming Antalya"] },
    ru: { t: "Портной в Лимане: подшив, молнии, подгонка | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной в Лимане, Коньяалты: подшив брюк, замена молнии, ушить, укоротить. Забор и доставка.", kw: ["портной Лиман", "ремонт одежды Лиман", "подшив брюк Лиман"] },
    de: { t: "Schneider Liman: Kürzen, Reißverschluss, Ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in Liman, Konyaaltı: Hosen kürzen, Reißverschluss, enger und kürzer machen. Abholung und Lieferung.", kw: ["Schneider Liman", "Kleidung ändern Liman", "Hose kürzen Liman"] },
  },
  "gursu": {
    en: { t: "Gürsu Tailor: Trousers, Jackets, Coats | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Tailor in Gürsu, Konyaaltı: trouser, jacket and coat alterations, hemming, zippers. pick-up and delivery.", kw: ["tailor Gürsu", "Gürsu clothing alterations", "Gürsu hemming Antalya"] },
    ru: { t: "Портной в Гюрсу: брюки, пиджаки, пальто | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной в Гюрсу, Коньяалты: подгонка брюк, пиджаков и пальто, подшив, молния. Забор и доставка.", kw: ["портной Гюрсу", "ремонт одежды Гюрсу", "подшив брюк Гюрсу"] },
    de: { t: "Schneider Gürsu: Hose, Sakko, Mantel ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in Gürsu, Konyaaltı: Hosen, Sakkos und Mäntel ändern, Kürzen, Reißverschluss. Abholung und Lieferung.", kw: ["Schneider Gürsu", "Kleidung ändern Gürsu", "Hose kürzen Gürsu"] },
  },
  "uncali": {
    en: { t: "Uncalı Tailor: Evening Dress & Dress Repair | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Tailor in Uncalı, Konyaaltı: evening dress and dress alteration, hemming, skirts, custom sewing. pick-up.", kw: ["tailor Uncalı", "Uncalı clothing alterations", "Uncalı hemming Antalya"] },
    ru: { t: "Портной в Унджалы: вечерние платья, ремонт | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной в Унджалы, Коньяалты: подгонка вечерних платьев, подшив, юбки, пошив на заказ. Забор вещей.", kw: ["портной Унджалы", "ремонт одежды Унджалы", "подшив брюк Унджалы"] },
    de: { t: "Schneider Uncalı: Abendkleid & Kleider ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in Uncalı, Konyaaltı: Abendkleid ändern, Kürzen, Röcke, Maßanfertigung. Hotelabholung.", kw: ["Schneider Uncalı", "Kleidung ändern Uncalı", "Hose kürzen Uncalı"] },
  },
  "sarisu": {
    en: { t: "Sarısu Tailor: Shorts, Jeans, Beach Clothes | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Tailor in Sarısu, Konyaaltı: jeans, shorts and trouser hemming, zippers, taking in the waist. pick-up.", kw: ["tailor Sarısu", "Sarısu clothing alterations", "Sarısu hemming Antalya"] },
    ru: { t: "Портной в Сарысу: джинсы, шорты, подшив | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной в Сарысу, Коньяалты: подшив джинсов, шорт и брюк, молния, ушить в талии. Забор вещей.", kw: ["портной Сарысу", "ремонт одежды Сарысу", "подшив брюк Сарысу"] },
    de: { t: "Schneider Sarısu: Jeans, Shorts kürzen | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in Sarısu, Konyaaltı: Jeans, Shorts und Hosen kürzen, Reißverschluss, Taille enger. Hotelabholung.", kw: ["Schneider Sarısu", "Kleidung ändern Sarısu", "Hose kürzen Sarısu"] },
  },
  "uluc": {
    en: { t: "Uluç Tailor: Trousers, Skirts, Dresses | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Tailor in Uluç, Konyaaltı: take in and shorten trousers, skirts and dresses, hemming, custom sewing. pick-up.", kw: ["tailor Uluç", "Uluç clothing alterations", "Uluç hemming Antalya"] },
    ru: { t: "Портной в Улуче: брюки, юбки, платья | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной в Улуче, Коньяалты: ушить и укоротить брюки, юбки, платья, подшив, пошив на заказ. Забор вещей.", kw: ["портной Улуч", "ремонт одежды Улуч", "подшив брюк Улуч"] },
    de: { t: "Schneider Uluç: Hose, Rock, Kleid ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in Uluç, Konyaaltı: Hosen, Röcke und Kleider enger und kürzer machen, Kürzen, Maßanfertigung. Hotelabholung.", kw: ["Schneider Uluç", "Kleidung ändern Uluç", "Hose kürzen Uluç"] },
  },
  "siteler": {
    en: { t: "Siteler Tailor: Evening Dress & Alterations | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Tailor in Siteler, Antalya: evening dress and dress alteration, zippers, shortening. pick-up and delivery.", kw: ["tailor Siteler", "Siteler clothing alterations", "Siteler hemming Antalya"] },
    ru: { t: "Портной в Ситлере: вечерние платья, подгонка | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной в Ситлере, Анталья: подгонка вечерних платьев, замена молнии, подшив. Забор и доставка.", kw: ["портной Ситлер", "ремонт одежды Ситлер", "подшив брюк Ситлер"] },
    de: { t: "Schneider Siteler: Abendkleid & Änderungen | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in Siteler, Antalya: Abendkleid ändern, Reißverschluss, Kürzen. Abholung und Lieferung.", kw: ["Schneider Siteler", "Kleidung ändern Siteler", "Hose kürzen Siteler"] },
  },
  "altinkum": {
    en: { t: "Altınkum Tailor: Holiday Clothes Repair | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Tailor in Altınkum, Antalya: holiday clothes, dresses, shorts and trousers repaired and hemmed. pick-up and delivery.", kw: ["tailor Altınkum", "Altınkum clothing alterations", "Altınkum hemming Antalya"] },
    ru: { t: "Портной в Алтынкуме: ремонт отпускной одежды | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Портной в Алтынкуме, Анталья: ремонт и подшив отпускной одежды, платьев, шорт и брюк. Забор и доставка.", kw: ["портной Алтынкум", "ремонт одежды Алтынкум", "подшив брюк Алтынкум"] },
    de: { t: "Schneider Altınkum: Urlaubskleidung reparieren | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Schneider in Altınkum, Antalya: Urlaubskleidung, Kleider, Shorts und Hosen reparieren und kürzen. Hotelabholung.", kw: ["Schneider Altınkum", "Kleidung ändern Altınkum", "Hose kürzen Altınkum"] },
  },
};

const FG_SERVICE: Record<string, Row> = {
  "paca": {
    en: { t: "Trouser & Skirt Hemming Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Trouser, skirt and jeans hemming in Antalya, ready the same day. Length marked on you, clean stitching.", kw: ["skirt hemming", "trouser hemming Antalya", "shorten trousers", "hem pants near me"] },
    ru: { t: "Подшив брюк и юбок в Анталье | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подшив брюк, юбок и джинсов в Анталье, обычно в тот же день. Длину отмечаем на вас, аккуратный шов.", kw: ["подшить юбку", "подшив брюк Анталья", "укоротить брюки"] },
    de: { t: "Hosen & Röcke kürzen in Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Hosen, Röcke und Jeans kürzen in Antalya, am selben Tag. Länge am Körper abgesteckt, saubere Naht.", kw: ["Rock kürzen", "Hose kürzen Antalya", "Hosensaum kürzen"] },
  },
  "kot": {
    en: { t: "Jeans Hemming & Taking In Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Jeans hemming and taking in in Antalya. Machines and thread made for heavy denim, length and leg width set to your measurements.", kw: ["jeans hemming", "taper jeans tailor", "take in jeans waist Antalya"] },
    ru: { t: "Подшив и ушивание джинсов в Анталье | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подшив и ушивание джинсов в Анталье. Машины и нитки для плотного денима, длина и ширина штанин по вашим меркам.", kw: ["подшить джинсы", "ушить джинсы Анталья", "джинсы подшив с сохранением низа"] },
    de: { t: "Jeans kürzen & enger machen Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Jeans kürzen und enger machen in Antalya. Maschinen und Garn für dicken Denim, Länge und Beinweite nach Ihren Maßen.", kw: ["Jeans kürzen", "Jeans enger machen", "Jeans Bund enger Antalya"] },
  },
  "bel": {
    en: { t: "Take In Waist: Trousers, Skirts, Dresses Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Clothes too big? We take in the waist of trousers, skirts, dresses and jackets in Antalya, set at a fitting. Ready the same day.", kw: ["waist alteration", "take in trousers waist", "clothes too big alteration", "skirt waist alteration"] },
    ru: { t: "Ушить в талии: брюки, юбка, платье, Анталья | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Одежда велика? Ушиваем талию брюк, юбок, платьев и пиджаков в Анталье, посадка определяется на примерке. Часто в тот же день.", kw: ["ушить в талии", "ушить брюки", "ушить платье", "уменьшить размер одежды"] },
    de: { t: "Taille enger machen: Hose, Rock, Kleid Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Kleidung zu groß? Wir machen die Taille von Hosen, Röcken, Kleidern und Sakkos enger, abgestimmt bei der Anprobe. am selben Tag.", kw: ["Taille enger machen", "Hose enger machen", "Kleid enger machen", "Kleidung zu groß ändern"] },
  },
  "fermuar": {
    en: { t: "Zipper Repair & Replacement Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Zipper replacement and repair in Antalya: trousers, jackets, coats, dresses and bags.", kw: ["zipper repair", "zipper replacement Antalya", "jacket zipper replacement", "bag zipper repair"] },
    ru: { t: "Замена и ремонт молнии в Анталье | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Замена и ремонт молнии в Анталье: брюки, куртки, пальто, платья и сумки. Подбираем по ткани и цвету, в тот же день.", kw: ["замена молнии", "ремонт молнии Анталья", "заменить молнию на куртке"] },
    de: { t: "Reißverschluss wechseln & reparieren | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Reißverschluss wechseln und reparieren in Antalya: Hosen, Jacken, Mäntel, Kleider und Taschen.", kw: ["Reißverschluss wechseln", "Reißverschluss reparieren Antalya", "Reißverschluss Jacke wechseln"] },
  },
  "elbise-dikim": {
    en: { t: "Custom Dress Making: Linen & Cotton, Men & Women | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Custom sewing in Antalya: dresses, shirts and outfits in linen or cotton for women and men, to your measurements and model.", kw: ["custom dress making", "made to measure clothing", "linen dress tailor", "cotton clothing custom", "men women custom tailor Antalya"] },
    ru: { t: "Пошив платьев на заказ: лён, хлопок, муж/жен | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Пошив на заказ в Анталье: платья, рубашки и наряды из льна или хлопка, женские и мужские, по вашим меркам и модели.", kw: ["пошив платья на заказ", "пошив по меркам", "льняное платье на заказ", "пошив из хлопка Анталья"] },
    de: { t: "Kleider nach Maß nähen: Leinen, Baumwolle | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Maßanfertigung in Antalya: Kleider, Hemden und Outfits aus Leinen oder Baumwolle für Damen und Herren, nach Maß und Modell.", kw: ["Kleid nach Maß", "Maßschneiderei Antalya", "Leinenkleid nähen lassen", "Baumwollkleidung nach Maß"] },
  },
  "elbise-tamir": {
    en: { t: "Dress Repair & Alteration Antalya, Torn Seams | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Dress repair and alteration in Antalya: taking in, shortening, straps and sleeves, open seams and tears.", kw: ["dress repair", "dress alteration Antalya", "mend torn clothes", "shorten dress", "take in dress"] },
    ru: { t: "Ремонт и переделка платьев, Анталья, швы | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Ремонт и переделка платьев в Анталье: ушить, укоротить, бретели и рукава, распоровшиеся швы и порывы.", kw: ["ремонт платья", "переделка платья Анталья", "зашить порванную одежду", "ушить платье"] },
    de: { t: "Kleider ändern & reparieren in Antalya, Nähte | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Kleider ändern und reparieren in Antalya: enger machen, kürzen, Träger und Ärmel, aufgegangene Nähte und Risse.", kw: ["Kleid ändern", "Kleid reparieren Antalya", "Riss nähen lassen", "Kleid kürzen"] },
  },
  "gelinlik-abiye": {
    en: { t: "Evening & Wedding Dress Alteration | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Evening dress alteration, wedding dress in Antalya: taking in, hem, corset and straps, with fittings.", kw: ["wedding dress alteration", "evening gown alteration", "bridal gown alterations Antalya", "prom dress alteration"] },
    ru: { t: "Подгонка вечерних и свадебных платьев | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка вечернего платья, свадебного в Анталье: ушивание, длина, корсет и бретели, с примеркой. Выезд в отели возможен.", kw: ["подгонка свадебного платья", "подгонка вечернего платья", "ателье свадебные платья Анталья"] },
    de: { t: "Abendkleid & Brautkleid ändern | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Abendkleid ändern, Brautkleid in Antalya: enger machen, Saum, Korsett und Träger, mit Anprobe. Service zu Hotels möglich.", kw: ["Brautkleid ändern", "Abendkleid ändern", "Brautkleid Änderungsschneiderei Antalya"] },
  },
  "abiye": {
    en: { t: "Evening Dress & Formal Wear Alteration, Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Evening dress, formal wear and special-occasion outfit alterations in Antalya: take in, let out, shorten, straps and zippers. Pick-up arranged on WhatsApp.", kw: ["evening dress alteration", "evening gown tailor", "formal dress alteration", "special occasion dress alteration"] },
    ru: { t: "Подгонка вечерних платьев и нарядов в Анталье | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка вечерних платьев, нарядной одежды и нарядов для особых случаев в Анталье: ушить, расширить, укоротить, бретели и молнии. Забор и доставка обсуждаются в WhatsApp.", kw: ["подгонка вечернего платья", "ушить вечернее платье", "ателье вечерние платья", "нарядное платье подгонка"] },
    de: { t: "Abendkleid & Festmode ändern in Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Abendkleid, Festmode und Kleidung für besondere Anlässe in Antalya ändern: enger, weiter, kürzen, Träger und Reißverschluss. Abholung per WhatsApp.", kw: ["Abendkleid ändern", "Abendkleid enger machen", "Festliches Kleid ändern", "Cocktailkleid ändern"] },
  },
  "pantolon": {
    en: { t: "Trouser Alteration: Hem, Waist, Taper | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Trouser alteration in Antalya: hemming, waist taking-in or letting-out, tapering legs, zipper replacement. Ready the same day, urgent 1–2 hours.", kw: ["trouser alteration", "pants alteration", "taper trousers", "take in trousers"] },
    ru: { t: "Подгонка брюк: подшив, талия, сужение | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка брюк в Анталье: подшив, ушивание и расширение в поясе, сужение штанин, замена молнии. В тот же день, срочно — 1–2 часа.", kw: ["подгонка брюк", "ушить брюки", "сузить брюки", "ателье брюки"] },
    de: { t: "Hose ändern: kürzen, Bund, schmaler | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Hosen ändern in Antalya: kürzen, Bund enger oder weiter machen, Beine schmaler machen, Reißverschluss wechseln. Am selben Tag fertig, eilig 1–2 Stunden.", kw: ["Hose ändern", "Hose enger machen", "Hose schmaler machen", "Anzughose ändern"] },
  },
  "kol": {
    en: { t: "Sleeve Shortening: Jacket, Coat, Shirt | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Sleeve shortening in Antalya for jackets, coats, shirts, sweaters and dresses. Ready the same day, urgent 1–2 hours. Pick-up arranged on WhatsApp.", kw: ["sleeve shortening", "shorten sleeves", "jacket sleeve shortening", "shirt sleeve shortening"] },
    ru: { t: "Укорочение рукавов: пиджак, куртка, рубашка | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Укорочение рукавов в Анталье: пиджаки, куртки, пальто, рубашки, свитеры и платья. В тот же день, срочно — 1–2 часа.", kw: ["укорочение рукавов", "укоротить рукава", "укоротить рукава пиджака", "укоротить рукава рубашки"] },
    de: { t: "Ärmel kürzen: Sakko, Mantel, Hemd | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Ärmel kürzen in Antalya bei Sakkos, Jacken, Mänteln, Hemden, Pullovern und Kleidern. Am selben Tag fertig, eilig 1–2 Stunden.", kw: ["Ärmel kürzen", "Sakko Ärmel kürzen", "Mantel Ärmel kürzen", "Hemd Ärmel kürzen"] },
  },
  "takim": {
    en: { t: "Suit & Jacket Alteration: Sleeves, Waist | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Suit and jacket alteration in Antalya for men and women: shorten sleeves, take in waist, fix shoulders.", kw: ["suit alteration", "jacket alteration", "shorten jacket sleeves", "blazer alteration Antalya"] },
    ru: { t: "Подгонка костюма и пиджака: рукава, талия | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка костюмов и пиджаков в Анталье, мужских и женских: укоротить рукава, ушить талию, исправить плечи.", kw: ["подгонка костюма", "подгонка пиджака", "укоротить рукава пиджака"] },
    de: { t: "Anzug & Sakko ändern: Ärmel, Taille, Schulter | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Anzug und Sakko ändern in Antalya für Herren und Damen: Ärmel kürzen, Taille enger machen, Schultern anpassen.", kw: ["Anzug ändern", "Sakko ändern", "Ärmel kürzen Sakko"] },
  },
  "mont": {
    en: { t: "Coat & Jacket Shortening, Taking In, Zipper Fix | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Coat and jacket alteration in Antalya: shorten, take in, adjust sleeves and replace zippers. Pick-up arranged on WhatsApp.", kw: ["coat alteration", "shorten coat", "jacket zipper replacement Antalya"] },
    ru: { t: "Куртка и пальто: укоротить, ушить, молния | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка курток и пальто в Анталье: укоротить, ушить, подогнать рукава, заменить молнию. Забор из отеля и с дома.", kw: ["подгонка пальто", "укоротить куртку", "замена молнии на куртке Анталья"] },
    de: { t: "Jacke & Mantel kürzen, Reißverschluss wechseln | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Jacken und Mäntel ändern in Antalya: kürzen, enger machen, Ärmel anpassen, Reißverschluss wechseln.", kw: ["Mantel ändern", "Jacke kürzen", "Reißverschluss Jacke wechseln Antalya"] },
  },
  "gomlek": {
    en: { t: "Shirt Alteration: Take In, Shorten Sleeves | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Shirt alteration in Antalya for men and women: take in the sides, shorten sleeves and length, fix the collar.", kw: ["shirt alteration", "take in shirt", "shorten shirt sleeves Antalya"] },
    ru: { t: "Подгонка рубашки: ушить, укоротить рукава | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка рубашек в Анталье, мужских и женских: ушить по бокам, укоротить рукава и длину, поправить воротник.", kw: ["ушить рубашку", "укоротить рукава рубашки", "подгонка рубашки Анталья"] },
    de: { t: "Hemd ändern: enger machen, Ärmel kürzen | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Hemden ändern in Antalya für Herren und Damen: seitlich enger machen, Ärmel und Länge kürzen, Kragen anpassen.", kw: ["Hemd enger machen", "Hemd Ärmel kürzen", "Hemd ändern Antalya"] },
  },
  "deri": {
    en: { t: "Leather Jacket & Trouser Repair in Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Leather jacket and leather trouser repair in Antalya: taking in and zipper replacement.", kw: ["leather jacket repair", "leather jacket alteration Antalya", "leather trousers tailor"] },
    ru: { t: "Ремонт кожаной куртки и брюк в Анталье | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Ремонт кожаных курток и брюк в Анталье: ушивание и замена молнии. Пришлите фото в WhatsApp — назовём цену.", kw: ["ремонт кожаной куртки", "ушить кожаную куртку", "кожаные брюки ателье Анталья"] },
    de: { t: "Lederjacke & Lederhose reparieren in Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Lederjacke und Lederhose reparieren in Antalya: enger machen, Reißverschluss wechseln.", kw: ["Lederjacke reparieren", "Lederjacke ändern Antalya", "Lederhose Schneider"] },
  },
  "tisort": {
    en: { t: "T-Shirt & Shorts Alteration, Hemming Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · T-shirt and shorts alteration in Antalya: shorten, take in, sleeve length, waistband fit. Hemming, pick-up via WhatsApp.", kw: ["shorts hemming", "t-shirt alteration", "take in shorts Antalya"] },
    ru: { t: "Футболка и шорты: ушить, подшить, Анталья | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Подгонка футболок и шорт в Анталье: укоротить, ушить, длина рукава, посадка пояса. Быстро и просто, пришлите фото — назовём цену.", kw: ["подшить шорты", "ушить футболку", "подгонка шорт Анталья"] },
    de: { t: "T-Shirt & Shorts ändern, kürzen in Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · T-Shirts und Shorts ändern in Antalya: kürzen, enger machen, Ärmellänge, Bund anpassen. Kürzen, Foto per WhatsApp.", kw: ["Shorts kürzen", "T-Shirt enger machen", "Shorts ändern Antalya"] },
  },
  "beden": {
    en: { t: "Resize Clothes to Your Measurements, Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Lost or gained weight? We resize clothes to your measurements in Antalya: take in or let out, to the length and fit you want.", kw: ["resize clothes", "clothes too big alteration", "tailor to measurements Antalya"] },
    ru: { t: "Подгонка одежды по вашим меркам, Анталья | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Похудели или поправились? Подгоним одежду по вашим меркам в Анталье: ушьём или расширим, до нужной длины и посадки. С примеркой.", kw: ["подгонка одежды по меркам", "уменьшить размер одежды", "расширить одежду Анталья"] },
    de: { t: "Kleidung auf Ihre Maße ändern lassen, Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Abgenommen oder zugenommen? Wir ändern Kleidung in Antalya auf Ihre Maße: enger oder weiter machen, auf Wunschlänge und Passform.", kw: ["Kleidung auf Maß ändern", "Kleidung enger machen lassen", "Kleidung weiter machen Antalya"] },
  },
  "etek": {
    en: { t: "Skirt Hemming & Alteration Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Skirt shortening, taking in and zipper repair in Antalya. pick-up.", kw: ["skirt hemming Antalya", "shorten skirt", "skirt alteration", "take in skirt"] },
    ru: { t: "Подшив и ушивание юбок в Анталье | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Укорачивание, ушивание и ремонт молнии юбок в Анталье. Забор вещей.", kw: ["подшив юбки Анталья", "укоротить юбку", "ушить юбку", "переделка юбок"] },
    de: { t: "Rock kürzen & ändern in Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Röcke kürzen und enger machen in Antalya. Abholung.", kw: ["Rock kürzen Antalya", "Rock ändern", "Rock enger machen", "Schneider Rock"] },
  },
  "gece-kiyafeti": {
    en: { t: "Evening Wear Alteration Antalya | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Evening dress alteration in Antalya: taking in, hem, straps. pick-up.", kw: ["evening dress alteration Antalya", "formal wear tailor", "evening gown hemming", "night outfit alteration"] },
    ru: { t: "Переделка вечерних нарядов в Анталье | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Переделка вечерних платьев в Анталье: ушивание, длина. Забор вещей.", kw: ["переделка вечернего платья Анталья", "подгонка вечернего наряда", "подшить вечернее платье"] },
    de: { t: "Abendgarderobe ändern in Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Abendkleider ändern in Antalya: enger machen, Saum. Abholung.", kw: ["Abendkleid ändern Antalya", "festliche Kleidung Schneider", "Abendkleid kürzen"] },
  },
  "kiyafet-tamiri": {
    en: { t: "Clothing Repair Antalya, Tears & Seams | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Clothing repair in Antalya: seams, tears, zippers. pick-up.", kw: ["clothing repair Antalya", "mend clothes", "fix torn clothes", "repair seams"] },
    ru: { t: "Ремонт одежды в Анталье: швы, дыры | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Ремонт одежды в Анталье: швы, дыры, молнии. Забор вещей.", kw: ["ремонт одежды Анталья", "зашить одежду", "ремонт швов", "починить одежду"] },
    de: { t: "Kleidung reparieren in Antalya, Risse & Nähte | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Kleidung reparieren in Antalya: Nähte, Risse, Reißverschlüsse. Abholung.", kw: ["Kleidung reparieren Antalya", "Risse nähen lassen", "Nähte reparieren", "Schneider Reparatur"] },
  },
  "ozel-dikim": {
    en: { t: "Custom Tailoring Antalya, Made to Measure | Terzi Can", d: "Ask the tailor: +90 531 898 64 18 · Made-to-measure in Antalya: trousers, skirts, dresses, groom suits. pick-up.", kw: ["custom tailoring Antalya", "made to measure Antalya", "bespoke clothing", "groom suit tailor Antalya"] },
    ru: { t: "Индивидуальный пошив в Анталье | Terzi Can", d: "Спросите в ателье: +90 531 898 64 18 · Пошив по меркам в Анталье: брюки, юбки, платья, костюмы жениха. Забор вещей.", kw: ["индивидуальный пошив Анталья", "пошив по меркам", "пошив на заказ", "костюм жениха Анталья"] },
    de: { t: "Maßanfertigung in Antalya | Terzi Can", d: "Schneider fragen: +90 531 898 64 18 · Maßschneiderei in Antalya: Hosen, Röcke, Kleider, Bräutigamanzüge. Abholung.", kw: ["Maßanfertigung Antalya", "Maßschneiderei", "Anzug nach Maß", "Schneider Antalya"] },
  },
};

const KW_PLACE: Record<L3, string[]> = {
  en: ['dress repair', 'trouser hemming', 'zipper replacement', 'custom dressmaking linen cotton', 'men and women tailor'],
  ru: ['ремонт платьев', 'подшив брюк', 'замена молнии', 'пошив на заказ лён хлопок', 'портной мужская и женская одежда'],
  de: ['Kleid reparieren', 'Hose kürzen', 'Reißverschluss wechseln', 'Maßanfertigung Leinen Baumwolle', 'Schneider Damen Herren'],
};

const PH = ' ☎ +90 531 898 64 18';
const splitPhone = (d: string) => (d.endsWith(PH) ? [d.slice(0, -PH.length), PH] : [d, '']);
const OPEN_NEAR: Record<L3, string> = {
  en: 'Near you, open daily 08:00–23:00.',
  ru: 'Рядом, ежедневно 08:00–23:00.',
  de: 'In der Nähe, täglich 08:00–23:00 geöffnet.',
};
const NEAR_KW: Record<L3, string> = { en: 'tailor near me', ru: 'портной рядом', de: 'Schneider in der Nähe' };

/** Hizmet başına başlangıç fiyatı (EUR); null = fotoğrafla fiyat. Yalnızca EN/RU/DE sayfalarda gösterilir. */
export const EUR_FROM: Record<string, number | null> = {
  paca: 10, kot: 10, bel: 10, pantolon: 10, kol: 10, takim: 10, 'elbise-tamir': 10, gomlek: 10, tisort: 10, etek: 10,
  'kiyafet-tamiri': 10, beden: 10, fermuar: 15, mont: 20, deri: 20,
};
export const eurFromText = (lang: string, id: string): string => {
  const n = EUR_FROM[id];
  if (!n) return '';
  return lang === 'en' ? `From €${n}` : lang === 'de' ? `Ab ${n} €` : lang === 'ru' ? `От ${n} €` : '';
};
const PHOTO: Record<L3, string> = { en: 'Price by photo on WhatsApp', ru: 'Цена по фото в WhatsApp', de: 'Preis per Foto über WhatsApp' };
const OPEN_SHORT: Record<L3, string> = { en: 'open daily 08:00–23:00', ru: 'ежедневно 08:00–23:00', de: 'täglich 08:00–23:00' };

/** Yakın bölge sayfası için elle yazılmış EN/RU/DE meta; kayıt yoksa undefined. */
/** Almanca bölge sayfaları (tatil bölgeleri): fiyat ve 'in der Nähe' niyeti başlık/açıklamaya eklenir. Fiyatlar sitede yayınlanan başlangıç fiyatlarıdır. */
const DE_NEAR_META: Record<string, { t: string; d: string; kw: string[] }> = {
  konyaalti: { t: 'Schneider Konyaaltı: Hose kürzen ab ₺200 | Terzi Can', d: 'Schneider fragen: +90 531 898 64 18 · Schneider in Konyaaltı: Hose kürzen ab ₺200 (~€10), Reißverschluss ab ₺300, Kleider ändern. Abholung in Antalya. Täglich 08:00–23:00.', kw: ['Schneider in der Nähe Konyaaltı', 'Änderungsschneiderei Konyaaltı'] },
  muratpasa: { t: 'Schneider Muratpaşa: Abendkleid ändern, Hose kürzen', d: 'Schneider fragen: +90 531 898 64 18 · Schneider in Muratpaşa: Hose kürzen ab ₺200 (~€10), Reißverschluss ab ₺300, Abendkleid ändern. Abholung in Antalya. Täglich 08:00–23:00.', kw: ['Schneider in der Nähe Muratpaşa', 'Änderungsschneiderei Muratpaşa'] },
  side: { t: 'Schneider Side: Hose kürzen ab ₺200, Hotelabholung', d: 'Schneider fragen: +90 531 898 64 18 · Schneider in Side: Hose kürzen ab ₺200 (~€10), Reißverschluss ab ₺300, Kleider ändern. Abholung im Hotel. Täglich 08:00–23:00.', kw: ['Schneider in der Nähe Side', 'Änderungsschneiderei Side', 'Hose kürzen Side Hotel'] },
  belek: { t: 'Schneider Belek: Hose kürzen ab ₺200, Hotelabholung', d: 'Schneider fragen: +90 531 898 64 18 · Schneider in Belek: Hose kürzen ab ₺200 (~€10), Reißverschluss ab ₺300, Kleider ändern. Abholung im Hotel. Täglich 08:00–23:00.', kw: ['Schneider in der Nähe Belek', 'Änderungsschneiderei Belek', 'Hose kürzen Belek Hotel'] },
  lara: { t: 'Schneider Lara: Abendkleid ändern, Hose kürzen ab ₺200', d: 'Schneider fragen: +90 531 898 64 18 · Schneider in Lara: Hose kürzen ab ₺200 (~€10), Abendkleid anpassen, Reißverschluss ab ₺300. Abholung im Hotel. Täglich 08:00–23:00.', kw: ['Schneider in der Nähe Lara', 'Änderungsschneiderei Lara', 'Hose kürzen Lara Hotel'] },
  kundu: { t: 'Schneider Kundu: Reißverschluss, Hose kürzen ab ₺200', d: 'Schneider fragen: +90 531 898 64 18 · Schneider in Kundu: Hose kürzen ab ₺200 (~€10), Reißverschluss ab ₺300, Risse reparieren. Abholung im Hotel. Täglich 08:00–23:00.', kw: ['Schneider in der Nähe Kundu', 'Änderungsschneiderei Kundu'] },
  aksu: { t: 'Schneider Aksu: Hose kürzen ab ₺200, Kleider ändern', d: 'Schneider fragen: +90 531 898 64 18 · Schneider in Aksu: Hose kürzen ab ₺200 (~€10), Reißverschluss ab ₺300, Kleider ändern und reparieren. Hotelabholung. Täglich 08:00–23:00.', kw: ['Schneider in der Nähe Aksu', 'Änderungsschneiderei Aksu'] },
  kemer: { t: 'Schneider Kemer: Hose kürzen ab ₺200, Hotelabholung', d: 'Schneider fragen: +90 531 898 64 18 · Schneider in Kemer: Hose kürzen ab ₺200 (~€10), Reißverschluss ab ₺300, Kleider ändern. Abholung im Hotel. Täglich 08:00–23:00.', kw: ['Schneider Kemer', 'Schneider in der Nähe Kemer', 'Änderungsschneiderei Kemer', 'Hose kürzen Kemer Hotel'] },
  manavgat: { t: 'Schneider Manavgat: Hose kürzen ab ₺200, Änderungen', d: 'Schneider fragen: +90 531 898 64 18 · Schneider in Manavgat: Hose kürzen ab ₺200 (~€10), Reißverschluss ab ₺300, Kleider ändern. Hotelabholung. Täglich 08:00–23:00.', kw: ['Schneider Manavgat', 'Schneider in der Nähe Manavgat', 'Änderungsschneiderei Manavgat'] },
};

export function fgNearDistrict(lang: string, slug: string, name: string): FgMeta | undefined {
  const x = FG_DISTRICT[slug]?.[lang as L3];
  if (lang === 'de' && DE_NEAR_META[slug]) {
    const o = DE_NEAR_META[slug];
    return {
      title: o.t,
      desc: o.d,
      kw: Array.from(new Set([`${NEAR_KW.de} ${name}`, ...o.kw, ...(x ? x.kw : []), ...KW_PLACE.de.map((k) => `${k} ${name}`)])),
    };
  }
  if (!x) return undefined;
  const l = lang as L3;
  const [body, ph] = splitPhone(x.d);
  return {
    title: x.t,
    desc: `${body} ${OPEN_NEAR[l]}${ph}`,
    kw: Array.from(new Set([`${NEAR_KW[l]} ${name}`, ...x.kw, ...KW_PLACE[l].map((k) => `${k} ${name}`)])),
  };
}

/** Hizmet sayfası için elle yazılmış EN/RU/DE meta (başlangıç fiyatı dahil); kayıt yoksa undefined. */
export function fgServiceMeta(lang: string, id: string): FgMeta | undefined {
  const x = FG_SERVICE[id]?.[lang as L3];
  if (!x) return undefined;
  const l = lang as L3;
  const city = { en: ['Antalya', 'Konyaaltı'], ru: ['Анталья', 'Коньяалты'], de: ['Antalya', 'Konyaaltı'] }[l];
  const [body, ph] = splitPhone(x.d);
  const price = eurFromText(lang, id) || PHOTO[l];
  return {
    title: x.t,
    desc: `${body} ${price} · ${OPEN_SHORT[l]}.${ph}`,
    kw: Array.from(new Set([...x.kw.flatMap((k) => [k, `${k} ${city[0]}`, `${k} ${city[1]}`]), `${NEAR_KW[l]} ${city[0]}`])),
  };
}
