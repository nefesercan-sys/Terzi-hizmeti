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
    normal: 'Paça kısaltma, bel daraltma ve tamir tadilat işleri işin durumuna göre aynı gün teslim edilir.',
    custom: 'Özel dikimde süre modele ve adede göre belirlenir.',
    urgentShort: 'Acil işler 1–2 saat', normalShort: 'Aynı gün teslim (işe göre)', customShort: 'Özel dikimde süre modele ve adede göre',
  },
  en: {
    urgent: 'Urgent repairs and alterations are ready in 1–2 hours.',
    normal: 'Hemming, waist taking-in and repairs are ready the same day, depending on the job.',
    custom: 'For made-to-measure sewing, the time depends on the model and the number of pieces.',
    urgentShort: 'Urgent jobs 1–2 hours', normalShort: 'Same day (depending on the job)', customShort: 'Made-to-measure: depends on model and quantity',
  },
  de: {
    urgent: 'Eilige Reparaturen und Änderungen sind in 1–2 Stunden fertig.',
    normal: 'Kürzen, Bund enger machen und Reparaturen sind je nach Aufwand am selben Tag fertig.',
    custom: 'Bei Maßanfertigung richtet sich die Dauer nach Modell und Stückzahl.',
    urgentShort: 'Eilaufträge 1–2 Stunden', normalShort: 'Am selben Tag (je nach Aufwand)', customShort: 'Maßanfertigung: nach Modell und Stückzahl',
  },
  ru: {
    urgent: 'Срочный ремонт и подгонка одежды занимают 1–2 часа.',
    normal: 'Подшив, ушивание в талии и ремонт готовы в тот же день — в зависимости от работы.',
    custom: 'При индивидуальном пошиве срок зависит от модели и количества изделий.',
    urgentShort: 'Срочно: 1–2 часа', normalShort: 'В тот же день (по работе)', customShort: 'Пошив: срок по модели и количеству',
  },
  es: {
    urgent: 'Los arreglos urgentes están listos en 1–2 horas.',
    normal: 'Los dobladillos, el ajuste de cintura y las reparaciones están listos el mismo día, según el trabajo.',
    custom: 'En la confección a medida, el plazo depende del modelo y del número de prendas.',
    urgentShort: 'Urgentes: 1–2 horas', normalShort: 'El mismo día (según el trabajo)', customShort: 'A medida: según modelo y cantidad',
  },
  fr: {
    urgent: 'Les retouches urgentes sont prêtes en 1 à 2 heures.',
    normal: 'Ourlets, retouches de taille et réparations sont prêts le jour même, selon le travail.',
    custom: 'Pour le sur-mesure, le délai dépend du modèle et du nombre de pièces.',
    urgentShort: 'Urgences : 1 à 2 heures', normalShort: 'Le jour même (selon le travail)', customShort: 'Sur-mesure : selon modèle et quantité',
  },
  pl: {
    urgent: 'Pilne poprawki są gotowe w 1–2 godziny.',
    normal: 'Skracanie, zwężanie w pasie i naprawy są gotowe tego samego dnia, zależnie od pracy.',
    custom: 'Przy szyciu na miarę termin zależy od modelu i liczby sztuk.',
    urgentShort: 'Pilne: 1–2 godziny', normalShort: 'Tego samego dnia (zależnie od pracy)', customShort: 'Na miarę: zależnie od modelu i ilości',
  },
  uk: {
    urgent: 'Термінові переробки та ремонт готові за 1–2 години.',
    normal: 'Підшивання, звуження в поясі та ремонт готові того ж дня — залежно від роботи.',
    custom: 'У разі індивідуального пошиття термін залежить від моделі та кількості виробів.',
    urgentShort: 'Термінові: 1–2 години', normalShort: 'Того ж дня (за роботою)', customShort: 'Пошиття: за моделлю та кількістю',
  },
  nl: {
    urgent: 'Spoedklussen zijn in 1–2 uur klaar.',
    normal: 'Zomen innemen, taille innemen en reparaties zijn dezelfde dag klaar, afhankelijk van het werk.',
    custom: 'Bij maatwerk hangt de doorlooptijd af van het model en het aantal stuks.',
    urgentShort: 'Spoed: 1–2 uur', normalShort: 'Dezelfde dag (afhankelijk van het werk)', customShort: 'Maatwerk: naar model en aantal',
  },
  ar: {
    urgent: 'الإصلاحات والتعديلات العاجلة تُسلَّم خلال ساعة إلى ساعتين.',
    normal: 'تقصير الحواف وتضييق الخصر والإصلاحات تُسلَّم في اليوم نفسه بحسب حالة العمل.',
    custom: 'في الخياطة حسب الطلب تُحدَّد المدة بحسب الموديل وعدد القطع.',
    urgentShort: 'العاجل: 1–2 ساعة', normalShort: 'التسليم في اليوم نفسه (بحسب العمل)', customShort: 'التفصيل: حسب الموديل والعدد',
  },
};

/** Üç cümlenin tamamı (özet paragraf / SSS cevabı için). */
export const deliveryAll = (l: DLang): string => `${DELIVERY[l].urgent} ${DELIVERY[l].normal} ${DELIVERY[l].custom}`;
/** Yalnızca tamir/tadilat cümleleri (acil + normal). */
export const deliveryRepair = (l: DLang): string => `${DELIVERY[l].urgent} ${DELIVERY[l].normal}`;
