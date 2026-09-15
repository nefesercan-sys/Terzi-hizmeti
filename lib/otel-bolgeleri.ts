// ============================================================
// terzihizmeti.com.tr — lib/otel-bolgeleri.ts
// Belek / Lara / Güzeloba / Kemer / Side otel bölgeleri —
// TR/EN/RU/DE otele gelen terzi sayfaları için ortak veri.
// ============================================================

export type OtelBolgesi = {
  slug: string;
  name: string;
  hotels: string[];
  travelTime: { tr: string; en: string; ru: string; de: string };
  blurb: { tr: string; en: string; ru: string; de: string };
};

export const OTEL_BOLGELERI: OtelBolgesi[] = [
  {
    slug: 'belek',
    name: 'Belek',
    hotels: [
      'Regnum Carya', 'Rixos Premium Belek', 'Rixos Sungate', 'Maxx Royal Belek', 'Kaya Palazzo Golf Resort',
      'Gloria Golf Resort', 'Calista Luxury Resort', 'Cornelia Diamond Golf Resort', 'Susesi Luxury Resort',
      'Adam & Eve Hotel', 'TUI Magic Life Belek', 'Ela Quality Resort', 'Delphin BE Grand Resort', 'Papillon Zeugma',
    ],
    travelTime: {
      tr: 'Konyaaltı atölyemizden ~35–40 dk',
      en: '~35–40 min from our Konyaaltı workshop', ru: '~35–40 мин от мастерской в Коньяалты', de: '~35–40 Min von unserer Werkstatt in Konyaaltı',
    },
    blurb: {
      tr: 'Belek, Antalya\'nın golf ve 5 yıldızlı otel bölgesi — bölgenin en prestijli tesislerinden bazılarına ev sahipliği yapıyor.',
      en: 'Belek is Antalya\'s golf and 5-star hotel district, home to some of the region\'s most exclusive resorts.',
      ru: 'Белек — район гольф-курортов и 5-звёздочных отелей Антальи, один из самых престижных курортных районов региона.',
      de: 'Belek ist der Golf- und 5-Sterne-Hotelbezirk von Antalya, mit einigen der exklusivsten Resorts der Region.',
    },
  },
  {
    slug: 'lara',
    name: 'Lara',
    hotels: [
      'Titanic Mardan Palace', 'Delphin Diva Premiere', 'Delphin BE Grand Resort', 'Fame Residence Lara',
      'Akra Hotel', 'Lara Barut Collection', 'Concorde De Luxe Resort', 'Limak Atlantis', 'Kervansaray Lara',
      'IC Hotels Santai', 'Royal Wings Hotel', 'Crown Plaza Lara',
    ],
    travelTime: {
      tr: 'Konyaaltı atölyemizden ~10–15 dk',
      en: '~10–15 min from our Konyaaltı workshop', ru: '~10–15 мин от мастерской в Коньяалты', de: '~10–15 Min von unserer Werkstatt in Konyaaltı',
    },
    blurb: {
      tr: 'Lara, Antalya şehir merkezine en yakın büyük sahil-otel bölgesi — uzun bir kumsal şeridine sahip.',
      en: 'Lara is Antalya\'s closest major beach-hotel district to the city centre, with a long sandy coastline.',
      ru: 'Лара — ближайший к центру Антальи крупный пляжный отельный район с длинной песчаной береговой линией.',
      de: 'Lara ist der stadtnächste große Strand-Hotelbezirk von Antalya mit einer langen Sandküste.',
    },
  },
  {
    slug: 'guzeloba',
    name: 'Güzeloba',
    hotels: [
      'Sherwood Exclusive Lara', 'Sherwood Breezes Resort', 'Delphin Imperial', 'Adalya Elite Lara',
      'Aydinbey Famous Resort', 'Xanadu Resort (yakın)', 'Belconti Resort (yakın)',
    ],
    travelTime: {
      tr: 'Konyaaltı atölyemizden ~15–20 dk',
      en: '~15–20 min from our Konyaaltı workshop', ru: '~15–20 мин от мастерской в Коньяалты', de: '~15–20 Min von unserer Werkstatt in Konyaaltı',
    },
    blurb: {
      tr: 'Güzeloba, Lara bölgesinin bir parçası — Lara merkezinin hemen doğusunda, daha sakin bir sahil-otel bölgesi.',
      en: 'Güzeloba, part of the greater Lara area, is a quieter beachfront hotel district just east of central Lara.',
      ru: 'Гюзельоба, часть района Лара, — более тихий пляжный отельный район чуть восточнее центра Лары.',
      de: 'Güzeloba, Teil des größeren Lara-Gebiets, ist ein ruhigerer Strand-Hotelbezirk östlich des Zentrums von Lara.',
    },
  },
  {
    slug: 'kemer',
    name: 'Kemer',
    hotels: [
      'Rixos Sungate', 'Club Med Kemer', 'Alva Donna Beach Resort', 'Amara Dolce Vita Luxury',
      'Kilikya Palace Göynük', 'Sherwood Dreams Resort', 'Sentido Zeynep Resort', 'Fantasia Hotel De Luxe Kemer',
      'Club Turan Prince World', 'Simena Holiday Village',
    ],
    travelTime: {
      tr: 'Konyaaltı atölyemizden ~40–50 dk',
      en: '~40–50 min from our Konyaaltı workshop', ru: '~40–50 мин от мастерской в Коньяалты', de: '~40–50 Min von unserer Werkstatt in Konyaaltı',
    },
    blurb: {
      tr: 'Kemer, Toros Dağları ile denizin buluştuğu, marina ve tatil otelleriyle bilinen bir Antalya sahil kasabası.',
      en: 'Kemer is a coastal Antalya town where the Taurus Mountains meet the sea, known for its marina and resort hotels.',
      ru: 'Кемер — прибрежный город Антальи, где горы Тавр встречаются с морем, известный своей мариной и курортными отелями.',
      de: 'Kemer ist eine Küstenstadt bei Antalya, wo das Taurus-Gebirge auf das Meer trifft, bekannt für seine Marina und Resort-Hotels.',
    },
  },
  {
    slug: 'side',
    name: 'Side',
    hotels: [
      'Crystal Sunset Luxury Resort', 'Papillon Ayscha Resort', 'TUI Sensatori Side', 'Barut Hotels Side',
      'Kamelya Collection', 'Nashira Resort', 'Xanthe Resort & Spa', 'Side Star Resort', 'Defne Defnem Beach Hotel',
    ],
    travelTime: {
      tr: 'Konyaaltı atölyemizden ~55–65 dk',
      en: '~55–65 min from our Konyaaltı workshop', ru: '~55–65 мин от мастерской в Коньяалты', de: '~55–65 Min von unserer Werkstatt in Konyaaltı',
    },
    blurb: {
      tr: 'Side, Manavgat yakınında, antik kalıntıları ve yoğun sahil-otel dokusuyla bilinen tarihi bir tatil kasabası.',
      en: 'Side is a historic resort town with ancient ruins alongside a large concentration of beach hotels, near Manavgat.',
      ru: 'Сиде — исторический курортный город с античными руинами и большой концентрацией пляжных отелей, рядом с Манавгатом.',
      de: 'Side ist eine historische Kurstadt mit antiken Ruinen und einer großen Konzentration an Strandhotels, nahe Manavgat.',
    },
  },
];

export function bulOtelBolgesi(slug: string) {
  return OTEL_BOLGELERI.find((b) => b.slug === slug);
}
