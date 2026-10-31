// ============================================================
// lib/delivery.ts — TESLİM SÜRESİ İÇİN TEK KAYNAK (10 dil)
// İşletme sahibinin onayladığı süreler (Ekim 2026):
//   • ACİL tamir/tadilat      : 1–2 saat
//   • NORMAL tamir/tadilat    : ertesi gün teslim
//   • ÖZEL DİKİM              : süre modele ve adede göre belirlenir (gün sayısı yazılmaz)
// Sitedeki hiçbir metin bu süreleri ("aynı gün", "2–4 saat", "24–48 saat", "3 gün" vb.) kendi başına yazmamalı;
// bu dosyadaki cümleler kullanılmalı. Fiyat rakamları buraya ait değildir.
// ============================================================
export type DLang = 'tr' | 'en' | 'de' | 'ru' | 'es' | 'fr' | 'pl' | 'uk' | 'nl' | 'ar';

export interface DeliveryText {
  /** Acil tamir/tadilat cümlesi */ urgent: string;
  /** Normal tamir/tadilat cümlesi */ normal: string;
  /** Özel dikim cümlesi */ custom: string;
  /** Kısa etiket: acil süre (ör. "1–2 saat") */ urgentShort: string;
  /** Kısa etiket: normal süre (ör. "Ertesi gün teslim") */ normalShort: string;
  /** Kısa etiket: özel dikim */ customShort: string;
}

export const DELIVERY: Record<DLang, DeliveryText> = {
  tr: {
    urgent: 'Acil tamir ve tadilat 1–2 saatte teslim edilir.',
    normal: 'Normal tamir ve tadilat ertesi gün teslim edilir.',
    custom: 'Özel dikimde süre modele ve adede göre belirlenir.',
    urgentShort: 'Acil işler 1–2 saat', normalShort: 'Ertesi gün teslim', customShort: 'Özel dikimde süre modele ve adede göre',
  },
  en: {
    urgent: 'Urgent repairs and alterations are ready in 1–2 hours.',
    normal: 'Standard repairs and alterations are ready the next day.',
    custom: 'For made-to-measure sewing, the time depends on the model and the number of pieces.',
    urgentShort: 'Urgent jobs 1–2 hours', normalShort: 'Ready next day', customShort: 'Made-to-measure: depends on model and quantity',
  },
  de: {
    urgent: 'Eilige Reparaturen und Änderungen sind in 1–2 Stunden fertig.',
    normal: 'Normale Reparaturen und Änderungen sind am nächsten Tag fertig.',
    custom: 'Bei Maßanfertigung richtet sich die Dauer nach Modell und Stückzahl.',
    urgentShort: 'Eilaufträge 1–2 Stunden', normalShort: 'Am nächsten Tag fertig', customShort: 'Maßanfertigung: nach Modell und Stückzahl',
  },
  ru: {
    urgent: 'Срочный ремонт и подгонка одежды занимают 1–2 часа.',
    normal: 'Обычный ремонт и подгонка одежды готовы на следующий день.',
    custom: 'При индивидуальном пошиве срок зависит от модели и количества изделий.',
    urgentShort: 'Срочно: 1–2 часа', normalShort: 'Готово на следующий день', customShort: 'Пошив: срок по модели и количеству',
  },
  es: {
    urgent: 'Los arreglos urgentes están listos en 1–2 horas.',
    normal: 'Los arreglos normales están listos al día siguiente.',
    custom: 'En la confección a medida, el plazo depende del modelo y del número de prendas.',
    urgentShort: 'Urgentes: 1–2 horas', normalShort: 'Listo al día siguiente', customShort: 'A medida: según modelo y cantidad',
  },
  fr: {
    urgent: 'Les retouches urgentes sont prêtes en 1 à 2 heures.',
    normal: 'Les retouches normales sont prêtes le lendemain.',
    custom: 'Pour le sur-mesure, le délai dépend du modèle et du nombre de pièces.',
    urgentShort: 'Urgences : 1 à 2 heures', normalShort: 'Prêt le lendemain', customShort: 'Sur-mesure : selon modèle et quantité',
  },
  pl: {
    urgent: 'Pilne poprawki są gotowe w 1–2 godziny.',
    normal: 'Zwykłe poprawki są gotowe następnego dnia.',
    custom: 'Przy szyciu na miarę termin zależy od modelu i liczby sztuk.',
    urgentShort: 'Pilne: 1–2 godziny', normalShort: 'Gotowe następnego dnia', customShort: 'Na miarę: zależnie od modelu i ilości',
  },
  uk: {
    urgent: 'Термінові переробки та ремонт готові за 1–2 години.',
    normal: 'Звичайні переробки та ремонт готові наступного дня.',
    custom: 'У разі індивідуального пошиття термін залежить від моделі та кількості виробів.',
    urgentShort: 'Термінові: 1–2 години', normalShort: 'Готово наступного дня', customShort: 'Пошиття: за моделлю та кількістю',
  },
  nl: {
    urgent: 'Spoedklussen zijn in 1–2 uur klaar.',
    normal: 'Gewoon vermaakwerk is de volgende dag klaar.',
    custom: 'Bij maatwerk hangt de doorlooptijd af van het model en het aantal stuks.',
    urgentShort: 'Spoed: 1–2 uur', normalShort: 'De volgende dag klaar', customShort: 'Maatwerk: naar model en aantal',
  },
  ar: {
    urgent: 'الإصلاحات والتعديلات العاجلة تُسلَّم خلال ساعة إلى ساعتين.',
    normal: 'الإصلاحات والتعديلات العادية تُسلَّم في اليوم التالي.',
    custom: 'في الخياطة حسب الطلب تُحدَّد المدة بحسب الموديل وعدد القطع.',
    urgentShort: 'العاجل: 1–2 ساعة', normalShort: 'التسليم في اليوم التالي', customShort: 'التفصيل: حسب الموديل والعدد',
  },
};

/** Üç cümlenin tamamı (özet paragraf / SSS cevabı için). */
export const deliveryAll = (l: DLang): string => `${DELIVERY[l].urgent} ${DELIVERY[l].normal} ${DELIVERY[l].custom}`;
/** Yalnızca tamir/tadilat cümleleri (acil + normal). */
export const deliveryRepair = (l: DLang): string => `${DELIVERY[l].urgent} ${DELIVERY[l].normal}`;
