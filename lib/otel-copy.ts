// ============================================================
// lib/otel-copy.ts — otel bölge sayfaları (tr/en/ru/de) için doğrudan cevap + SSS (görünen SSS = FAQPage şeması)
// Süreler lib/delivery.ts'ten. Otellere alım-teslim tüm hizmet bölgelerinde ücretsizdir.
// Otel adı listesi YOK (ortaklık izlenimi vermemek için); yalnızca bölge adı kullanılır.
// ============================================================
import { DELIVERY } from '@/lib/delivery';
import { PHONE } from '@/lib/seo-data';
import { pickVariant, AREA_PROFILES } from '@/lib/area-profiles';

type L = 'tr' | 'en' | 'ru' | 'de';

export function regionAnswer(lang: L, slug: string, name: string): string {
  const D = DELIVERY[lang];
  const v = pickVariant(slug, 2, 'hans');
  if (lang === 'tr') return v === 0
    ? `${name} bölgesindeki otelde kalıyorsanız Terzi Can kıyafetinizi otelden alır, Konyaaltı Hurma'daki atölyede tadil eder ve otele geri getirir; otele alım-teslim ücretsizdir. ${D.urgent} ${D.normal} Otel adınızı WhatsApp'tan (${PHONE}) iletmeniz yeterli.`
    : `${name} otellerine Terzi Can servis veriyor: alım-teslim ücretsiz, her gün 08:00–23:00 WhatsApp'tan (${PHONE}) ulaşılır. ${D.urgent} ${D.normal}`;
  if (lang === 'en') return v === 0
    ? `If you are staying at a hotel in ${name}, Terzi Can collects your clothes, alters them at our workshop in Hurma, Konyaaltı and brings them back; hotel pick-up and delivery is free. ${D.urgent} ${D.normal} Just send your hotel name on WhatsApp (${PHONE}).`
    : `Terzi Can serves hotels in ${name}: free pick-up and delivery, reachable on WhatsApp (${PHONE}) every day from 08:00 to 23:00. ${D.urgent} ${D.normal}`;
  if (lang === 'ru') return v === 0
    ? `Если вы остановились в отеле района ${name}, Terzi Can заберёт вещи, подгонит их в мастерской в Хурме (Коньяалты) и вернёт в отель; забор и доставка в отели бесплатны. ${D.urgent} ${D.normal} Достаточно написать название отеля в WhatsApp (${PHONE}).`
    : `Terzi Can обслуживает отели района ${name}: забор и доставка бесплатны, на связи в WhatsApp (${PHONE}) ежедневно с 08:00 до 23:00. ${D.urgent} ${D.normal}`;
  return v === 0
    ? `Wenn Sie in einem Hotel in ${name} wohnen, holt Terzi Can Ihre Kleidung ab, ändert sie in der Werkstatt in Hurma, Konyaaltı und bringt sie zurück; Abholung und Lieferung im Hotel sind kostenlos. ${D.urgent} ${D.normal} Senden Sie einfach Ihren Hotelnamen per WhatsApp (${PHONE}).`
    : `Terzi Can bedient Hotels in ${name}: kostenlose Abholung und Lieferung, per WhatsApp (${PHONE}) täglich von 08:00 bis 23:00 erreichbar. ${D.urgent} ${D.normal}`;
}

const POOL = (lang: L, r: string): { id: string; q: string; a: string }[] => {
  const D = DELIVERY[lang];
  if (lang === 'tr') return [
    { id: 'come', q: `${r} bölgesindeki otelime terzi gelir mi?`, a: `Evet. ${r} bölgesindeki oteller için alım-teslim yapıyoruz; otel adınızı ve oda numaranızı WhatsApp'tan iletin.` },
    { id: 'free', q: `${r} otel servisi ücretsiz mi?`, a: 'Evet. Otellere alım-teslim hizmet verilen tüm bölgelerde ücretsizdir; yalnızca yapılan tamir, tadilat veya dikim işi ücretlendirilir.' },
    { id: 'urgent', q: `${r} otelinde acil terzi var mı?`, a: `Evet. ${D.urgent} Fotoğrafı ve otel adınızı WhatsApp'tan gönderin.` },
    { id: 'hem', q: `${r} otelde paça kısaltma ne kadar sürer?`, a: `${D.normal} ${D.urgent} Paça kısaltma ₺200'den başlar.` },
    { id: 'dress', q: `${r} bölgesinde akşam yemeği için elbise veya takım ayarı yapılır mı?`, a: `Evet; abiye ve takım tadilatı normal tadilat gibi ertesi gün, acil durumda 1–2 saatte hazır olur. Gelinlik ve abiye tadilatı ₺800'den başlar.` },
    { id: 'custom', q: `Tatilde ${r} için özel dikim yaptırabilir miyim?`, a: `Evet; keten ve pamuk gibi yazlık kumaşlarla ölçüye göre dikim yapıyoruz. ${D.custom} Tatil bitiş tarihinizi WhatsApp'tan bildirin.` },
    { id: 'lang', q: `${r} bölgesinde terziyle kendi dilimde konuşabilir miyim?`, a: "Evet. WhatsApp'tan Türkçe, İngilizce, Rusça veya Almanca yazabilirsiniz." },
  ];
  if (lang === 'en') return [
    { id: 'come', q: `Will a tailor come to my hotel in ${r}?`, a: `Yes. We collect and deliver for hotels in ${r}; send your hotel name and room number on WhatsApp.` },
    { id: 'free', q: `Is the hotel service in ${r} free?`, a: 'Yes. Hotel pick-up and delivery is free in every area we serve; you only pay for the repair, alteration or sewing itself.' },
    { id: 'urgent', q: `Is there an urgent tailor for hotels in ${r}?`, a: `Yes. ${D.urgent} Send a photo and your hotel name on WhatsApp.` },
    { id: 'hem', q: `How long does hemming take for a hotel guest in ${r}?`, a: `${D.normal} ${D.urgent} Hemming starts from ₺200.` },
    { id: 'dress', q: `Can you adjust a dress or suit for dinner while I stay in ${r}?`, a: 'Yes; evening dress and suit alterations are ready the next day like standard alterations, or in 1–2 hours when urgent. Wedding and evening dress alterations start from ₺800.' },
    { id: 'custom', q: `Can I have clothes made to measure during my holiday in ${r}?`, a: `Yes; we sew to measure in linen, cotton and other summer fabrics. ${D.custom} Tell us your departure date on WhatsApp.` },
    { id: 'lang', q: `Can I talk to the tailor in my own language in ${r}?`, a: 'Yes. Write to us on WhatsApp in Turkish, English, Russian or German.' },
  ];
  if (lang === 'ru') return [
    { id: 'come', q: `Приедет ли портной в мой отель в районе ${r}?`, a: `Да. Мы забираем и возвращаем вещи для отелей района ${r}; пришлите в WhatsApp название отеля и номер комнаты.` },
    { id: 'free', q: `Бесплатен ли выезд в отели района ${r}?`, a: 'Да. Забор и доставка в отели бесплатны во всех районах, которые мы обслуживаем; оплачивается только ремонт, подгонка или пошив.' },
    { id: 'urgent', q: `Есть ли срочный портной для отелей района ${r}?`, a: `Да. ${D.urgent} Пришлите фото и название отеля в WhatsApp.` },
    { id: 'hem', q: `Сколько занимает подшив брюк для гостя отеля в районе ${r}?`, a: `${D.normal} ${D.urgent} Подшив — от ₺200.` },
    { id: 'dress', q: `Можно ли подогнать платье или костюм к ужину, пока я живу в районе ${r}?`, a: 'Да; вечерние платья и костюмы готовы на следующий день, как обычная подгонка, а при срочности — за 1–2 часа. Подгонка свадебных и вечерних платьев — от ₺800.' },
    { id: 'custom', q: `Можно ли заказать пошив по меркам во время отпуска в районе ${r}?`, a: `Да; шьём по меркам из льна, хлопка и других летних тканей. ${D.custom} Сообщите дату отъезда в WhatsApp.` },
    { id: 'lang', q: `Могу ли я общаться с портным на своём языке в районе ${r}?`, a: 'Да. Пишите в WhatsApp на турецком, английском, русском или немецком.' },
  ];
  return [
    { id: 'come', q: `Kommt der Schneider in mein Hotel in ${r}?`, a: `Ja. Wir holen und liefern für Hotels in ${r}; senden Sie Hotelname und Zimmernummer per WhatsApp.` },
    { id: 'free', q: `Ist der Hotelservice in ${r} kostenlos?`, a: 'Ja. Abholung und Lieferung im Hotel sind in allen Gebieten, die wir bedienen, kostenlos; Sie zahlen nur Reparatur, Änderung oder Näharbeit.' },
    { id: 'urgent', q: `Gibt es einen Schneider für Eilaufträge in Hotels in ${r}?`, a: `Ja. ${D.urgent} Schicken Sie Foto und Hotelnamen per WhatsApp.` },
    { id: 'hem', q: `Wie lange dauert das Kürzen für Hotelgäste in ${r}?`, a: `${D.normal} ${D.urgent} Kürzen ab ₺200.` },
    { id: 'dress', q: `Können Sie ein Kleid oder einen Anzug für das Abendessen in ${r} anpassen?`, a: 'Ja; Abendkleid- und Anzugänderungen sind wie normale Änderungen am nächsten Tag fertig, bei Eilaufträgen in 1–2 Stunden. Brautkleid- und Abendkleid-Änderungen ab ₺800.' },
    { id: 'custom', q: `Kann ich im Urlaub in ${r} Kleidung nach Maß nähen lassen?`, a: `Ja; wir nähen nach Maß aus Leinen, Baumwolle und anderen Sommerstoffen. ${D.custom} Nennen Sie uns Ihr Abreisedatum per WhatsApp.` },
    { id: 'lang', q: `Kann ich in ${r} mit dem Schneider in meiner Sprache sprechen?`, a: 'Ja. Schreiben Sie uns per WhatsApp auf Türkisch, Englisch, Russisch oder Deutsch.' },
  ];
};

/** Bölgeye göre 4 soru (otel + ücret + süre soruları sabit, 1 soru döner). Görünen SSS = FAQPage şeması. */
export function regionFaq(lang: L, slug: string, name: string): [string, string][] {
  const pool = POOL(lang, name);
  const fixed = pool.filter((x) => ['come', 'free'].includes(x.id));
  const rest = pool.filter((x) => !['come', 'free'].includes(x.id));
  const a = pickVariant(slug, rest.length, 'rf1');
  const b = (a + 1 + pickVariant(slug, rest.length - 1, 'rf2')) % rest.length;
  const c = [a, b].map((i) => rest[i]);
  return [...fixed, ...c].map((x) => [x.q, x.a] as [string, string]);
}
export const hasProfile = (slug: string) => !!AREA_PROFILES[slug];

export function regionJsonLd(lang: L, slug: string, name: string, url: string, siteUrl: string, bizId: string) {
  const faq = regionFaq(lang, slug, name);
  const serviceName = { tr: `${name} Otel Terzisi`, en: `Hotel Tailor ${name}`, ru: `Портной для отелей ${name}`, de: `Hotel-Schneider ${name}` }[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': `${url}#service`, name: serviceName, serviceType: { tr: 'Otele gelen terzi', en: 'Hotel pick-up tailoring and alterations', ru: 'Выездной портной', de: 'Hotel-Abholservice Schneider' }[lang],
        provider: { '@id': bizId }, areaServed: { '@type': 'Place', name: `${name}, Antalya` }, description: regionAnswer(lang, slug, name), url, inLanguage: lang },
      { '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: lang, mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  };
}
