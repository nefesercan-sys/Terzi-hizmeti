// ============================================================
// lib/district-copy.ts — bölge sayfaları için doğrudan cevap paragrafı + doğal soru kalıplı SSS havuzu (tr/en/ru/de)
// Süreler lib/delivery.ts'ten; fiyatlar sitede zaten yayınlanan başlangıç fiyatlarıdır (₺200 / ₺300 / ₺800).
// Otellere servis her bölgede ücretsiz; ev adresinde ücretsiz yalnızca seo-data FREE_SERVICE_SLUGS.
// SSS bölgeye göre seçilir (slug karması) → sayfalar aynı 5 soruyu tekrarlamaz.
// ============================================================
import { DELIVERY } from '@/lib/delivery';
import { PHONE, isFreeService, type Lang, type District } from '@/lib/seo-data';
import { pickVariant } from '@/lib/area-profiles';

const HOME: Record<Lang, { free: string; ask: string }> = {
  tr: { free: 'Ev adreslerinde de alım-teslim ücretsizdir.', ask: "Ev adresleri için servis durumunu WhatsApp'tan sorabilirsiniz." },
  en: { free: 'Home addresses here are free as well.', ask: 'For home addresses, please ask on WhatsApp.' },
  ru: { free: 'Домашние адреса здесь тоже обслуживаются бесплатно.', ask: 'По домашним адресам уточняйте в WhatsApp.' },
  de: { free: 'Auch Wohnadressen werden hier kostenlos bedient.', ask: 'Für Wohnadressen fragen Sie bitte per WhatsApp.' },
};
const HOTEL_FREE: Record<Lang, string> = {
  tr: 'Otellere alım-teslim ücretsizdir.', en: 'Hotel pick-up and delivery is free.', ru: 'Забор и доставка в отели бесплатны.', de: 'Abholung und Lieferung im Hotel sind kostenlos.',
};

/** 1–2 cümlelik doğrudan cevap (sesli asistan dostu): kim, ne, nerede, nasıl ulaşılır, süre. */
export function districtAnswer(lang: Lang, d: District): string {
  const loc = d.loc[lang];
  const D = DELIVERY[lang];
  const home = isFreeService(d.slug) ? HOME[lang].free : HOME[lang].ask;
  const v = pickVariant(d.slug, 2, 'ans');
  if (lang === 'tr') {
    return v === 0
      ? `Terzi Can, ${loc} paça kısaltma, daraltma, fermuar değişimi ve elbise tadilatı yapar; atölye Konyaaltı Hurma'dadır ve her gün 08:00–23:00 WhatsApp ile telefondan (${PHONE}) ulaşılır. ${D.urgent} ${D.normal} ${HOTEL_FREE.tr} ${home}`
      : `${loc} terzi arıyorsanız Terzi Can'a ${PHONE} numarasından, her gün 08:00–23:00 arası WhatsApp veya telefonla ulaşabilirsiniz; atölye Hurma, Konyaaltı'dadır. ${D.urgent} ${D.normal} ${HOTEL_FREE.tr} ${home}`;
  }
  if (lang === 'en') {
    return v === 0
      ? `Terzi Can hems, takes in and repairs clothes ${loc}; the workshop is in Hurma, Konyaaltı, and you can reach us on WhatsApp or by phone (${PHONE}) every day from 08:00 to 23:00. ${D.urgent} ${D.normal} ${HOTEL_FREE.en} ${home}`
      : `Looking for a tailor ${loc}? Message or call Terzi Can on ${PHONE} daily between 08:00 and 23:00; our workshop is in Hurma, Konyaaltı. ${D.urgent} ${D.normal} ${HOTEL_FREE.en} ${home}`;
  }
  if (lang === 'ru') {
    return v === 0
      ? `Terzi Can подшивает, ушивает и ремонтирует одежду ${loc}; мастерская находится в Хурме (Коньяалты), на связи в WhatsApp и по телефону (${PHONE}) ежедневно с 08:00 до 23:00. ${D.urgent} ${D.normal} ${HOTEL_FREE.ru} ${home}`
      : `Ищете портного ${loc}? Пишите или звоните в Terzi Can по номеру ${PHONE} ежедневно с 08:00 до 23:00; мастерская — в Хурме, Коньяалты. ${D.urgent} ${D.normal} ${HOTEL_FREE.ru} ${home}`;
  }
  return v === 0
    ? `Terzi Can kürzt, ändert und repariert Kleidung ${loc}; die Werkstatt liegt in Hurma, Konyaaltı, erreichbar per WhatsApp oder Telefon (${PHONE}) täglich von 08:00 bis 23:00. ${D.urgent} ${D.normal} ${HOTEL_FREE.de} ${home}`
    : `Sie suchen einen Schneider ${loc}? Schreiben oder rufen Sie Terzi Can unter ${PHONE} an, täglich 08:00–23:00; die Werkstatt ist in Hurma, Konyaaltı. ${D.urgent} ${D.normal} ${HOTEL_FREE.de} ${home}`;
}

type QA = (lang: Lang, d: District) => [string, string];
const POOL: { id: string; f: Record<Lang, (loc: string, n: string, d: District) => [string, string]> }[] = [
  { id: 'urgent', f: {
    tr: (loc) => [`${loc} acil terzi var mı?`, `Evet. Terzi Can her gün 08:00–23:00 açıktır. ${DELIVERY.tr.urgent} Kıyafetin fotoğrafını WhatsApp'tan gönderin, durumu ve fiyatı söyleyelim.`],
    en: (loc) => [`Is there an urgent tailor ${loc}?`, `Yes. Terzi Can is open every day from 08:00 to 23:00. ${DELIVERY.en.urgent} Send a photo on WhatsApp and we will tell you what is possible and the price.`],
    ru: (loc) => [`Есть ли срочный портной ${loc}?`, `Да. Terzi Can работает ежедневно с 08:00 до 23:00. ${DELIVERY.ru.urgent} Пришлите фото в WhatsApp — скажем, что возможно, и назовём цену.`],
    de: (loc) => [`Gibt es ${loc} einen Schneider für Eilaufträge?`, `Ja. Terzi Can hat täglich von 08:00 bis 23:00 geöffnet. ${DELIVERY.de.urgent} Schicken Sie ein Foto per WhatsApp, wir sagen Ihnen, was möglich ist, und den Preis.`],
  } },
  { id: 'hotel', f: {
    tr: (loc) => [`${loc} otelime terzi gelir mi?`, `Evet. Otellere alım-teslim ücretsizdir; otel adınızı ve oda numaranızı WhatsApp'tan iletin, saati birlikte netleştirelim. Yalnızca yapılan iş ücretlendirilir.`],
    en: (loc) => [`Will a tailor come to my hotel ${loc}?`, 'Yes. Hotel pick-up and delivery is free; send your hotel name and room number on WhatsApp and we will agree a time. You only pay for the work itself.'],
    ru: (loc) => [`Приедет ли портной ко мне в отель ${loc}?`, 'Да. Забор и доставка в отели бесплатны; пришлите в WhatsApp название отеля и номер комнаты, и мы согласуем время. Оплачивается только сама работа.'],
    de: (loc) => [`Kommt der Schneider ${loc} ins Hotel?`, 'Ja. Abholung und Lieferung im Hotel sind kostenlos; senden Sie Hotelname und Zimmernummer per WhatsApp, dann vereinbaren wir die Zeit. Sie zahlen nur die Arbeit selbst.'],
  } },
  { id: 'hem', f: {
    tr: (loc) => [`${loc} paça kısaltma ne kadar sürer?`, `${DELIVERY.tr.normal} ${DELIVERY.tr.urgent} Paça kısaltma ₺200'den başlar.`],
    en: (loc) => [`How long does trouser hemming take ${loc}?`, `${DELIVERY.en.normal} ${DELIVERY.en.urgent} Hemming starts from ₺200.`],
    ru: (loc) => [`Сколько занимает подшив брюк ${loc}?`, `${DELIVERY.ru.normal} ${DELIVERY.ru.urgent} Подшив — от ₺200.`],
    de: (loc) => [`Wie lange dauert das Hosenkürzen ${loc}?`, `${DELIVERY.de.normal} ${DELIVERY.de.urgent} Kürzen ab ₺200.`],
  } },
  { id: 'zip', f: {
    tr: (loc) => [`${loc} fermuar değişimi ne kadar tutar?`, `Fermuar değişimi ₺300'den başlar; fermuarın türüne ve kıyafete göre net fiyatı fotoğraf üzerinden söyleriz. ${DELIVERY.tr.normal}`],
    en: (loc) => [`How much does zipper replacement cost ${loc}?`, `Zipper replacement starts from ₺300; we give the exact price from a photo, depending on the zipper type and garment. ${DELIVERY.en.normal}`],
    ru: (loc) => [`Сколько стоит замена молнии ${loc}?`, `Замена молнии — от ₺300; точную цену называем по фото, в зависимости от типа молнии и вещи. ${DELIVERY.ru.normal}`],
    de: (loc) => [`Was kostet ein Reißverschlusswechsel ${loc}?`, `Ein Reißverschlusswechsel kostet ab ₺300; den genauen Preis nennen wir anhand eines Fotos, je nach Typ und Kleidungsstück. ${DELIVERY.de.normal}`],
  } },
  { id: 'home', f: {
    tr: (loc, n, d) => [`${loc} eve servis var mı?`, isFreeService(d.slug) ? `Evet. ${n} çevresinde ev adreslerinde de alım-teslim ücretsizdir; gün ve saati WhatsApp'tan birlikte belirleriz.` : `Otellere servis ücretsizdir. ${n} içindeki ev adresleri için servis durumunu WhatsApp'tan sorabilirsiniz; Konyaaltı'ndaki atölyeye de getirebilirsiniz.`],
    en: (loc, n, d) => [`Is there home pick-up ${loc}?`, isFreeService(d.slug) ? `Yes. Home pick-up and delivery around ${n} is free as well; we agree the day and time on WhatsApp.` : `Hotel service is free. For home addresses in ${n}, please ask on WhatsApp; you can also bring clothes to our workshop in Konyaaltı.`],
    ru: (loc, n, d) => [`Есть ли забор вещей на дом ${loc}?`, isFreeService(d.slug) ? `Да. В районе ${n} забор и доставка на дом тоже бесплатны; день и время согласуем в WhatsApp.` : `В отели выезд бесплатный. По домашним адресам в районе ${n} уточняйте в WhatsApp; вещи можно принести и в мастерскую в Коньяалты.`],
    de: (loc, n, d) => [`Gibt es ${loc} eine Abholung nach Hause?`, isFreeService(d.slug) ? `Ja. Auch Wohnadressen rund um ${n} werden kostenlos abgeholt und beliefert; Tag und Uhrzeit klären wir per WhatsApp.` : `Der Hotelservice ist kostenlos. Für Wohnadressen in ${n} fragen Sie bitte per WhatsApp; Sie können die Kleidung auch in unsere Werkstatt in Konyaaltı bringen.`],
  } },
  { id: 'custom', f: {
    tr: (loc) => [`${loc} özel dikim yaptırabilir miyim?`, `Evet. Ölçünüze göre elbise, gömlek, pantolon ve etek dikiyoruz; keten ve pamuk yazlık kumaşlarda model ve ölçüyü birlikte belirleriz. ${DELIVERY.tr.custom} Fiyat işe göre WhatsApp'tan netleşir.`],
    en: (loc) => [`Can I get clothes made to measure ${loc}?`, `Yes. We sew dresses, shirts, trousers and skirts to your measurements; for linen and cotton summer fabrics we agree the model and size with you. ${DELIVERY.en.custom} The price is confirmed on WhatsApp.`],
    ru: (loc) => [`Можно ли заказать индивидуальный пошив ${loc}?`, `Да. Шьём платья, рубашки, брюки и юбки по вашим меркам; для летних тканей из льна и хлопка модель и размер согласуем с вами. ${DELIVERY.ru.custom} Цену уточняем в WhatsApp.`],
    de: (loc) => [`Kann ich ${loc} Kleidung nach Maß nähen lassen?`, `Ja. Wir nähen Kleider, Hemden, Hosen und Röcke nach Ihren Maßen; bei Sommerstoffen aus Leinen und Baumwolle legen wir Modell und Größe gemeinsam fest. ${DELIVERY.de.custom} Den Preis klären wir per WhatsApp.`],
  } },
  { id: 'wedding', f: {
    tr: (loc) => [`${loc} gelinlik veya abiye tadilatı yapılıyor mu?`, `Evet. Gelinlik tadilatı ₺800'den, abiye tadilatı ₺800'den başlar; kesin fiyat fotoğrafa ve işin kapsamına göre verilir. Abiye tadilatı ertesi gün teslim edilir, gelinlikte süre işin kapsamına göre netleşir.`],
    en: (loc) => [`Do you alter wedding or evening dresses ${loc}?`, 'Yes. Wedding dress alterations start from ₺800 and evening dress alterations from ₺800; the exact price depends on a photo and the scope of work. Evening dresses are ready the next day; for wedding dresses the time depends on the work.'],
    ru: (loc) => [`Подгоняете ли вы свадебные и вечерние платья ${loc}?`, 'Да. Подгонка свадебного платья — от ₺800, вечернего — от ₺800; точная цена зависит от фото и объёма работ. Вечерние платья готовы на следующий день, для свадебных срок зависит от работы.'],
    de: (loc) => [`Ändern Sie ${loc} auch Braut- und Abendkleider?`, 'Ja. Änderungen am Brautkleid beginnen bei ₺800, am Abendkleid bei ₺800; der genaue Preis hängt von Foto und Aufwand ab. Abendkleider sind am nächsten Tag fertig, beim Brautkleid richtet sich die Dauer nach dem Umfang.'],
  } },
  { id: 'tourist', f: {
    tr: (loc) => [`Turist olarak ${loc} terzi bulabilir miyim?`, `Evet. WhatsApp'tan kendi dilinizde yazabilirsiniz; Türkçe, İngilizce, Rusça ve Almanca ile hizmet veriyoruz. Otellere alım-teslim ücretsizdir. Fotoğrafı gönderin, fiyatı söyleyelim.`],
    en: (loc) => [`Can tourists find a tailor ${loc}?`, 'Yes. Write to us on WhatsApp in your own language; we serve in Turkish, English, Russian and German. Hotel pick-up and delivery is free. Send a photo and we will quote.'],
    ru: (loc) => [`Может ли турист найти портного ${loc}?`, 'Да. Пишите в WhatsApp на своём языке; мы работаем на турецком, английском, русском и немецком. Забор и доставка в отели бесплатны. Пришлите фото — назовём цену.'],
    de: (loc) => [`Finden Touristen ${loc} einen Schneider?`, 'Ja. Schreiben Sie uns per WhatsApp in Ihrer Sprache; wir bedienen auf Türkisch, Englisch, Russisch und Deutsch. Abholung und Lieferung im Hotel sind kostenlos. Foto senden, wir nennen den Preis.'],
  } },
  { id: 'hours', f: {
    tr: (loc) => [`${loc} terzi akşam ve hafta sonu açık mı?`, `Evet. Terzi Can haftanın 7 günü, Cumartesi ve Pazar dahil, 08:00–23:00 arası açıktır. Mesai dışında WhatsApp'tan fotoğraf ve mesaj bırakabilirsiniz.`],
    en: (loc) => [`Is the tailor open evenings and weekends ${loc}?`, 'Yes. Terzi Can is open 7 days a week, including Saturday and Sunday, from 08:00 to 23:00. Outside those hours you can leave a photo and message on WhatsApp.'],
    ru: (loc) => [`Работает ли портной ${loc} вечером и в выходные?`, 'Да. Terzi Can открыт 7 дней в неделю, включая субботу и воскресенье, с 08:00 до 23:00. В нерабочее время можно оставить фото и сообщение в WhatsApp.'],
    de: (loc) => [`Ist der Schneider ${loc} abends und am Wochenende geöffnet?`, 'Ja. Terzi Can hat 7 Tage die Woche, auch samstags und sonntags, von 08:00 bis 23:00 geöffnet. Außerhalb dieser Zeit können Sie Foto und Nachricht per WhatsApp hinterlassen.'],
  } },
  { id: 'where', f: {
    tr: (loc, n) => [`${n} için terzi atölyesi nerede?`, `Atölyemiz Hurma Mahallesi, Konyaaltı, Antalya (posta kodu 07130) adresindedir. ${n} için kıyafeti atölyeye getirebilir ya da servis için WhatsApp'tan yazabilirsiniz.`],
    en: (loc, n) => [`Where is the tailor's workshop for ${n}?`, `Our workshop is at Hurma Mahallesi, Konyaaltı, Antalya (postcode 07130). From ${n} you can bring clothes to the workshop or message us on WhatsApp for pick-up.`],
    ru: (loc, n) => [`Где находится мастерская для района ${n}?`, `Наша мастерская — Hurma Mahallesi, Коньяалты, Анталья (индекс 07130). Из района ${n} можно принести вещи в мастерскую или написать в WhatsApp для забора.`],
    de: (loc, n) => [`Wo ist die Schneiderwerkstatt für ${n}?`, `Unsere Werkstatt liegt in Hurma Mahallesi, Konyaaltı, Antalya (PLZ 07130). Aus ${n} können Sie Kleidung bringen oder uns per WhatsApp für die Abholung schreiben.`],
  } },
  { id: 'price', f: {
    tr: (loc) => [`${loc} terzi fiyatı nasıl öğrenilir?`, `Kıyafetin ve sorunun fotoğrafını WhatsApp'tan gönderin; net fiyatı ve süreyi söyleyelim. Başlangıç fiyatları: paça kısaltma ₺200, fermuar değişimi ₺300.`],
    en: (loc) => [`How do I get a tailor's price ${loc}?`, 'Send a photo of the garment and the problem on WhatsApp and we will give the exact price and time. Starting prices: hemming ₺200, zipper replacement ₺300.'],
    ru: (loc) => [`Как узнать цену у портного ${loc}?`, 'Пришлите в WhatsApp фото вещи и проблемы — назовём точную цену и срок. Стартовые цены: подшив ₺200, замена молнии ₺300.'],
    de: (loc) => [`Wie erfahre ich ${loc} den Preis beim Schneider?`, 'Senden Sie ein Foto von Kleidungsstück und Problem per WhatsApp, wir nennen Preis und Dauer. Startpreise: Kürzen ₺200, Reißverschluss wechseln ₺300.'],
  } },
];

/** Bölgeye göre 5 doğal soru: otel sorusu daima var; geri kalanı slug karmasına göre döner. */
export function districtFaqPool(lang: Lang, d: District): [string, string][] {
  const loc = d.loc[lang]; const n = d.name[lang];
  const rest = POOL.filter((x) => x.id !== 'hotel');
  const start = pickVariant(d.slug, rest.length, 'faq');
  const step = [1, 3, 7][pickVariant(d.slug, 3, 'fstep')];
  const chosen = [POOL[1], ...[0, 1, 2, 3].map((i) => rest[(start + i * step) % rest.length])];
  // 'home' sorusu otel dışı bölgelerde net bilgi içerdiği için her zaman dahil edilir
  if (!chosen.some((c) => c.id === 'home')) chosen[4] = POOL.find((x) => x.id === 'home')!;
  const uniq = Array.from(new Map(chosen.map((c) => [c.id, c])).values());
  return uniq.map((c) => c.f[lang](loc, n, d));
}
export const SERVICE_PICK = (slug: string, total: number, count: number): number[] => {
  const start = pickVariant(slug, total, 'svc');
  const step = [1, 2, 4, 7][pickVariant(slug, 4, 'sstep')];
  const out: number[] = [];
  for (let i = 0; out.length < count && i < total * 3; i++) { const x = (start + i * step) % total; if (!out.includes(x)) out.push(x); }
  return out;
};
