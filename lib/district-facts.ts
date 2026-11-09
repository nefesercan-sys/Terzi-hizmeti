// ============================================================
// terzihizmeti.com.tr — lib/district-facts.ts
// Yakın (servis) mahalleler için kısa bölge notu: yalnızca genel coğrafi bilgi + tipik işler.
// Mesafe/dakika/fiyat vaadi YOK. Alım-teslim: işletme sahibinin onayladığı liste (Ekim 2026).
// Not: swaphubs.com'daki metinlerle bilerek farklı yazılmıştır (tekrar içerik olmasın).
// ============================================================
import type { Lang } from '@/lib/seo-data';

export interface AreaNote { where: Record<Lang, string>; jobs: Record<Lang, string> }
const n = (w: [string, string, string, string], j: [string, string, string, string]): AreaNote => ({
  where: { tr: w[0], en: w[1], ru: w[2], de: w[3] },
  jobs: { tr: j[0], en: j[1], ru: j[2], de: j[3] },
});

export const AREA_NOTES: Record<string, AreaNote> = {
  hurma: n(
    ['Atölyemiz Konyaaltı\'na bağlı Hurma Mahallesi\'nde; Hurma\'dan gelenler kıyafetini doğrudan atölyeye getirebilir.', 'Our workshop is in Hurma, Konyaaltı; people from Hurma can drop clothes straight at the workshop.', 'Наша мастерская находится в Хурме (Коньяалты); жители Хурмы могут принести вещи прямо к нам.', 'Unsere Werkstatt liegt in Hurma, Konyaaltı; Anwohner können ihre Kleidung direkt in die Werkstatt bringen.'],
    ['En sık: paça kısaltma, bel daraltma, fermuar değişimi ve elbise tadilatı. Alım-teslim yapılır.', 'Most common: hemming, waist alterations, zipper replacement and dress alterations. Collection and delivery are available.', 'Чаще всего: подшив, ушивание талии, замена молнии и подгонка платьев. Забор и доставка возможен.', 'Am häufigsten: Säume kürzen, Taille enger machen, Reißverschluss wechseln und Kleider ändern. Abholung und Lieferung sind möglich.'],
  ),
  liman: n(
    ['Liman, Konyaaltı\'na bağlı; limana ve sahile yakın bir mahalle.', 'Liman is part of Konyaaltı, near the port and the coast.', 'Лиман относится к Коньяалты и расположен рядом с портом и побережьем.', 'Liman gehört zu Konyaaltı und liegt nahe am Hafen und an der Küste.'],
    ['Ceket, mont, gömlek ve etek: boy ve kol kısaltma, daraltma. Alım-teslim yapılır.', 'Jackets, coats, shirts and skirts: length and sleeve shortening, taking in. Collection and delivery are available.', 'Пиджаки, куртки, рубашки и юбки: укорачивание длины и рукавов, ушивание. Забор и доставка возможен.', 'Sakkos, Mäntel, Hemden und Röcke: Länge und Ärmel kürzen, enger machen. Abholung und Lieferung sind möglich.'],
  ),
  gursu: n(
    ['Gürsu, Konyaaltı\'na bağlı; konut ve iş yerlerinin olduğu bir mahalle.', 'Gürsu is part of Konyaaltı, an area of homes and workplaces.', 'Гюрсу относится к Коньяалты; здесь жилые дома и офисы.', 'Gürsu gehört zu Konyaaltı, mit Wohnhäusern und Geschäften.'],
    ['Bay ve bayan elbise dikimi, özel dikim, pantolon kısaltma ve fermuar işleri. Alım-teslim yapılır.', 'Dress making for men and women, made-to-measure sewing, trouser hemming and zipper jobs. Collection and delivery are available.', 'Пошив одежды для мужчин и женщин, пошив по меркам, подшив брюк и молнии. Забор и доставка возможен.', 'Damen- und Herrenbekleidung nach Maß, Hosen kürzen und Reißverschluss-Arbeiten. Abholung und Lieferung sind möglich.'],
  ),
  uncali: n(
    ['Uncalı, Konyaaltı\'na bağlı; apartman ve sitelerin çok olduğu bir mahalle.', 'Uncalı is part of Konyaaltı, with many apartment blocks and housing estates.', 'Унджалы относится к Коньяалты; здесь много многоэтажек и жилых комплексов.', 'Uncalı gehört zu Konyaaltı, mit vielen Wohnblöcken und Wohnanlagen.'],
    ['Kot paçası, pantolon, gömlek ve etek tadilatı. Randevulu alım-teslim yapılır.', 'Jeans, trousers, shirt and skirt alterations. Collection and delivery by appointment are available.', 'Подгонка джинсов, брюк, рубашек и юбок. Забор и доставка по записи.', 'Änderungen an Jeans, Hosen, Hemden und Röcken. Abholung und Lieferung nach Absprache sind möglich.'],
  ),
  sarisu: n(
    ['Sarısu, Konyaaltı\'na bağlı; sahil hattına yakın bir mahalle.', 'Sarısu is part of Konyaaltı, close to the coastline.', 'Сарысу относится к Коньяалты и находится недалеко от береговой линии.', 'Sarısu gehört zu Konyaaltı und liegt nahe an der Küste.'],
    ['Keten ve pamuk özel dikim, elbise ve pantolon kısaltma-daraltma. Alım-teslim yapılır.', 'Linen and cotton made-to-measure, dress and trouser shortening and taking in. Collection and delivery are available.', 'Пошив из льна и хлопка по меркам, укорачивание и ушивание платьев и брюк. Забор и доставка возможен.', 'Maßanfertigung aus Leinen und Baumwolle, Kleider und Hosen kürzen und enger machen. Abholung und Lieferung sind möglich.'],
  ),
  uluc: n(
    ['Uluç, Konyaaltı ilçesine bağlı bir mahalle.', 'Uluç is a neighbourhood of Konyaaltı district.', 'Улуч — квартал района Коньяалты.', 'Uluç ist ein Viertel im Bezirk Konyaaltı.'],
    ['Tamir, tadilat, paça ve fermuar işleri; mont, ceket ve etek kısaltma-daraltma. Alım-teslim yapılır.', 'Repairs, alterations, hems and zippers; shortening and taking in coats, jackets and skirts. Collection and delivery are available.', 'Ремонт, подгонка, подшив и молнии; укорачивание и ушивание курток, пальто и юбок. Забор и доставка возможен.', 'Reparaturen, Änderungen, Säume und Reißverschlüsse; Mäntel, Jacken und Röcke kürzen und enger machen. Abholung und Lieferung sind möglich.'],
  ),
  meltem: n(
    ['Meltem, Muratpaşa ilçesine bağlı, sahile yakın yerleşik bir mahalle.', 'Meltem is a residential neighbourhood of Muratpaşa, close to the coast.', 'Мельтем — жилой квартал района Муратпаша недалеко от побережья.', 'Meltem ist ein Wohnviertel in Muratpaşa, nahe der Küste.'],
    ['Takım elbise, ceket ve pantolon: kol, boy, bel ve omuz ayarı. Alım-teslim yapılır.', 'Suits, jackets and trousers: sleeve, length, waist and shoulder adjustments. Collection and delivery are available.', 'Костюмы, пиджаки и брюки: рукава, длина, талия и плечи. Забор и доставка возможен.', 'Anzüge, Sakkos und Hosen: Ärmel, Länge, Taille und Schultern. Abholung und Lieferung sind möglich.'],
  ),
  siteler: n(
    ['Siteler, Konyaaltı ilçesine bağlı bir mahalle.', 'Siteler is a neighbourhood of Konyaaltı district.', 'Ситлер — квартал района Коньяалты.', 'Siteler ist ein Viertel im Bezirk Konyaaltı.'],
    ['Abiye ve elbise tadilatı, fermuar değişimi, paça kısaltma. Alım-teslim yapılır.', 'Evening dress and dress alterations, zipper replacement, hemming. Collection and delivery are available.', 'Подгонка вечерних платьев и платьев, замена молнии, подшив. Забор и доставка возможен.', 'Abend- und Kleideränderungen, Reißverschluss wechseln, Säume kürzen. Abholung und Lieferung sind möglich.'],
  ),
  ogretmenevleri: n(
    ['Öğretmenevleri, Konyaaltı ilçesine bağlı bir mahalle.', 'Öğretmenevleri is a neighbourhood of Konyaaltı district.', 'Огретменевлери — квартал района Коньяалты.', 'Öğretmenevleri ist ein Viertel im Bezirk Konyaaltı.'],
    ['Mont, ceket ve deri ceket tadilatı, fermuar değişimi (₺300\'den). Alım-teslim yapılır.', 'Coat, jacket and leather jacket alterations, zipper replacement. Collection and delivery are available.', 'Подгонка пальто, курток и кожаных курток, замена молнии. Забор и доставка возможен.', 'Mantel-, Jacken- und Lederjackenänderungen, Reißverschluss wechseln. Abholung und Lieferung sind möglich.'],
  ),
  altinkum: n(
    ['Altınkum, Konyaaltı ilçesine bağlı bir mahalle.', 'Altınkum is a neighbourhood of Konyaaltı district.', 'Алтынкум — квартал района Коньяалты.', 'Altınkum ist ein Viertel im Bezirk Konyaaltı.'],
    ['Kot ve şort kısaltma, bel daraltma, yazlık giysi tadilatı. Alım-teslim yapılır.', 'Jeans and shorts hemming, waist alterations, summer clothing alterations. Collection and delivery are available.', 'Подшив джинсов и шорт, ушивание талии, подгонка летней одежды. Забор и доставка возможен.', 'Jeans und Shorts kürzen, Taille enger machen, Sommerkleidung ändern. Abholung und Lieferung sind möglich.'],
  ),
  arapsuyu: n(
    ['Arapsuyu, Konyaaltı\'na bağlı, sahil hattına yakın bir mahalle.', 'Arapsuyu is part of Konyaaltı, close to the coastline.', 'Арапсую относится к Коньяалты и находится недалеко от береговой линии.', 'Arapsuyu gehört zu Konyaaltı und liegt nahe an der Küste.'],
    ['Bay ve bayan tamir tadilat: kot paçası, pantolon daraltma, elbise onarımı. Alım-teslim yapılır.', 'Men\'s and women\'s repairs and alterations: jeans hemming, trouser taking in, dress repair. Collection and delivery are available.', 'Мужской и женский ремонт и подгонка: подшив джинсов, ушивание брюк, ремонт платьев. Забор и доставка возможен.', 'Herren- und Damenänderungen: Jeans kürzen, Hosen enger machen, Kleider reparieren. Abholung und Lieferung sind möglich.'],
  ),
};

export const AREA_NOTE_UI: Record<Lang, { h: (n: string) => string; where: string; jobs: string }> = {
  tr: { h: (n) => `${n} için bölge notu`, where: 'Konum', jobs: 'Bu bölgeden gelen işler' },
  en: { h: (n) => `Local note: ${n}`, where: 'Location', jobs: 'Typical jobs from here' },
  ru: { h: (n) => `О районе: ${n}`, where: 'Расположение', jobs: 'Типичные заказы' },
  de: { h: (n) => `Hinweis zu ${n}`, where: 'Lage', jobs: 'Typische Aufträge' },
};
