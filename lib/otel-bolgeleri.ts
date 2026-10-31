// ============================================================
// terzihizmeti.com.tr — lib/otel-bolgeleri.ts
// Belek / Lara / Güzeloba / Kemer / Side otel bölgeleri —
// TR/EN/RU/DE otele gelen terzi sayfaları için ortak veri.
// ============================================================

export type OtelBolgesi = {
  slug: string;
  name: string;
  blurb: { tr: string; en: string; ru: string; de: string };
};

export const OTEL_BOLGELERI: OtelBolgesi[] = [
  {
    slug: 'belek',
    name: 'Belek',
    blurb: {
      tr: "Belek, Antalya'nın golf sahalarıyla ve 5 yıldızlı resort otelleriyle öne çıkan tatil bölgesi.",
      en: "Belek is Antalya's holiday area known for its golf courses and 5-star resort hotels.",
      ru: "Белек — курортная зона Антальи, известная гольф-полями и 5-звёздочными отелями.",
      de: "Belek ist Antalyas Urlaubsgebiet, bekannt für Golfplätze und 5-Sterne-Resorts.",
    },
  },
  {
    slug: 'lara',
    name: 'Lara',
    blurb: {
      tr: "Lara, şehir merkezine yakın, uzun kumsalı olan ve sahil boyunca otellerin sıralandığı bir bölge.",
      en: "Lara lies close to the city centre, with a long sandy beach and hotels lined along the coast.",
      ru: "Лара находится недалеко от центра города: длинный песчаный пляж и отели вдоль побережья.",
      de: "Lara liegt nahe dem Stadtzentrum, mit langem Sandstrand und Hotels entlang der Küste.",
    },
  },
  {
    slug: 'guzeloba',
    name: 'Güzeloba',
    blurb: {
      tr: "Güzeloba, Lara'nın doğu yakasında, merkeze göre daha sakin, sahil boyunca uzanan bir otel bölgesi.",
      en: "Güzeloba sits on the eastern side of Lara, a calmer stretch of beachfront hotels compared with the centre.",
      ru: "Гюзельоба расположена в восточной части Лары — более спокойная полоса пляжных отелей по сравнению с центром.",
      de: "Güzeloba liegt im Osten von Lara, eine ruhigere Strandhotel-Zone als das Zentrum.",
    },
  },
  {
    slug: 'kemer',
    name: 'Kemer',
    blurb: {
      tr: "Kemer, Toros Dağları'nın denize inen eteklerinde kurulu; marinası ve resort otelleriyle bilinen bir sahil kasabası.",
      en: "Kemer is a seaside town where the Taurus Mountains drop to the water, known for its marina and resort hotels.",
      ru: "Кемер — приморский городок, где горы Тавр спускаются к морю; известен мариной и курортными отелями.",
      de: "Kemer ist ein Küstenort, an dem das Taurusgebirge zum Meer abfällt, bekannt für Marina und Resorthotels.",
    },
  },
  {
    slug: 'side',
    name: 'Side',
    blurb: {
      tr: "Side, Manavgat'a yakın; antik kalıntılarının yanında çok sayıda sahil oteli bulunan tarihi bir tatil beldesi.",
      en: "Side is a historic holiday town near Manavgat, with ancient ruins and many beach hotels side by side.",
      ru: "Сиде — исторический курортный городок возле Манавгата: античные руины рядом со множеством пляжных отелей.",
      de: "Side ist ein historischer Urlaubsort bei Manavgat, wo antike Ruinen und viele Strandhotels nebeneinander liegen.",
    },
  },
  {
    slug: 'kundu',
    name: 'Kundu',
    blurb: {
      tr: 'Kundu (Aksu), Lara\'nın hemen doğusunda, çok sayıda 5 yıldızlı all-inclusive resort barındıran bir otel bölgesi.',
      en: 'Kundu (Aksu), just east of Lara, is a hotel district home to numerous 5-star all-inclusive resorts.',
      ru: 'Кунду (Аксу), рядом с районом Лара, — отельный район с множеством 5-звёздочных курортов по системе «всё включено».',
      de: 'Kundu (Aksu), direkt östlich von Lara, ist ein Hotelbezirk mit zahlreichen 5-Sterne-All-inclusive-Resorts.',
    },
  },
  {
    slug: 'konyaalti',
    name: 'Konyaaltı',
    blurb: {
      tr: 'Konyaaltı, atölyemizin de bulunduğu bölge — sahil şeridi boyunca sıralanan otel ve apart-otellere ev sahipliği yapıyor.',
      en: 'Konyaaltı, where our own workshop is based, is home to hotels and aparthotels lined along the coastline.',
      ru: 'Коньяалты, где расположена наша мастерская, — район с отелями и апарт-отелями вдоль 7-километровой береговой линии.',
      de: 'Konyaaltı, wo sich unsere eigene Werkstatt befindet, beherbergt Hotels und Aparthotels entlang eines 7 km langen Küstenabschnitts.',
    },
  },
  {
    slug: 'goynuk',
    name: 'Göynük',
    blurb: {
      tr: 'Göynük, Kemer\'in kuzey komşusu — sakin bir otel şeridi, Göynük Kanyonu\'na yakınlığıyla bilinir.',
      en: 'Göynük, Kemer\'s northern neighbour, is a quieter hotel row known for its proximity to Göynük Canyon.',
      ru: 'Гёйнюк, северный сосед Кемера, — более тихий отельный район, известный близостью к каньону Гёйнюк.',
      de: 'Göynük, der nördliche Nachbar von Kemer, ist eine ruhigere Hotelreihe, bekannt für die Nähe zum Göynük-Canyon.',
    },
  },
  {
    slug: 'muratpasa',
    name: 'Muratpaşa',
    blurb: {
      tr: 'Muratpaşa, Antalya\'nın merkez ilçesi — Kaleiçi, şehir merkezi otelleri ve Lara\'nın bir bölümünü kapsayan geniş bir bölge.',
      en: 'Muratpaşa is Antalya\'s central district, covering Kaleiçi, city-centre hotels and part of the Lara area.',
      ru: 'Муратпаша — центральный район Антальи, охватывающий Калеичи, отели в центре города и часть района Лара.',
      de: 'Muratpaşa ist der zentrale Bezirk von Antalya, der Kaleiçi, Stadtzentrumshotels und einen Teil des Lara-Gebiets umfasst.',
    },
  },
];

export function bulOtelBolgesi(slug: string) {
  return OTEL_BOLGELERI.find((b) => b.slug === slug);
}
