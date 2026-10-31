// Otel bölgesi derinlik sayfaları (ES/FR/PL/UK/NL/AR): giriş ve "nasıl işler" metinlerinin ek cümle kalıpları.
// Aynı bilgi (otele alım-teslim ücretsiz, atölye Hurma/Konyaaltı, fotoğrafla fiyat) farklı yapılarla verilir;
// kalıp, bölge slug'ına göre deterministik seçilir (sayfalar birbirinin kopyası olmasın). Yeni iddia eklenmez.
import type { ILang } from '@/lib/intl';

type F = (z: string) => string;
export const ZONE_VARIANTS: Record<ILang, { lead: F[]; how: F[] }> = {
  es: {
    lead: [
      (z) => `¿Está alojado en ${z}? Recogemos su prenda en el hotel, la arreglamos en nuestro taller y se la devolvemos. Envíe una foto por WhatsApp.`,
      (z) => `Arreglos de ropa para huéspedes de ${z}: usted nos escribe, recogemos en el hotel y entregamos de vuelta. El precio se confirma por WhatsApp con una foto.`,
    ],
    how: [
      (z) => `Trabajamos desde nuestro taller en Hurma (Konyaaltı). Para los hoteles, incluido ${z}, la recogida y la entrega no tienen coste. Indique en WhatsApp su hotel y cuándo se marcha.`,
      (z) => `El proceso es sencillo: envía una foto, acordamos precio y plazo, recogemos la prenda en su hotel de ${z} y se la devolvemos ya arreglada. Sin coste de recogida ni de entrega.`,
    ],
  },
  fr: {
    lead: [
      (z) => `Vous séjournez à ${z} ? Nous prenons le vêtement à l'hôtel, le retouchons à l'atelier et le rapportons. Envoyez une photo sur WhatsApp.`,
      (z) => `Retouches pour les clients d'hôtels à ${z} : vous nous écrivez, nous passons à l'hôtel et nous rapportons le vêtement. Prix confirmé sur WhatsApp avec une photo.`,
    ],
    how: [
      (z) => `Nous travaillons depuis l'atelier de Hurma (Konyaaltı). Pour les hôtels, y compris à ${z}, la collecte et la livraison sont gratuites. Indiquez sur WhatsApp votre hôtel et votre date de départ.`,
      (z) => `Le déroulement est simple : vous envoyez une photo, nous convenons du prix et du délai, nous récupérons le vêtement dans votre hôtel à ${z} puis nous vous le rapportons retouché, sans frais de collecte ni de livraison.`,
    ],
  },
  pl: {
    lead: [
      (z) => `Mieszkasz w ${z}? Odbieramy ubranie z hotelu, poprawiamy je w pracowni i przywozimy z powrotem. Wyślij zdjęcie na WhatsAppie.`,
      (z) => `Przeróbki dla gości hoteli w ${z}: piszesz do nas, odbieramy ubranie z hotelu i przywozimy je z powrotem. Cenę potwierdzamy na WhatsAppie po zdjęciu.`,
    ],
    how: [
      (z) => `Pracujemy z naszej pracowni w Hurma (Konyaaltı). Dla hoteli, także w ${z}, odbiór i dostawa nic nie kosztują. Napisz na WhatsAppie, w którym hotelu mieszkasz i kiedy wyjeżdżasz.`,
      (z) => `Przebieg jest prosty: wysyłasz zdjęcie, ustalamy cenę i termin, odbieramy ubranie z Twojego hotelu w ${z} i przywozimy je poprawione, bez opłat za odbiór i dostawę.`,
    ],
  },
  uk: {
    lead: [
      (z) => `Зупинилися в районі ${z}? Ми забираємо річ у готелі, підганяємо в ательє й повертаємо назад. Надішліть фото у WhatsApp.`,
      (z) => `Підгонка одягу для гостей готелів у районі ${z}: ви пишете нам, ми забираємо річ у готелі й привозимо назад. Ціну підтверджуємо у WhatsApp за фото.`,
    ],
    how: [
      (z) => `Ми працюємо з ательє в районі Хурма (Коньяалти). Для готелів, зокрема в ${z}, забір і доставка безкоштовні. Напишіть у WhatsApp, у якому ви готелі й коли виїжджаєте.`,
      (z) => `Усе просто: ви надсилаєте фото, ми домовляємося про ціну та строк, забираємо річ у вашому готелі в районі ${z} і повертаємо підігнаною, без плати за забір і доставку.`,
    ],
  },
  nl: {
    lead: [
      (z) => `Verblijft u in ${z}? Wij halen het kledingstuk op bij uw hotel, passen het aan in ons atelier en brengen het terug. Stuur een foto via WhatsApp.`,
      (z) => `Kleding vermaken voor hotelgasten in ${z}: u schrijft ons, wij halen het op bij het hotel en brengen het terug. De prijs bevestigen wij via WhatsApp met een foto.`,
    ],
    how: [
      (z) => `Wij werken vanuit ons atelier in Hurma (Konyaaltı). Voor hotels, ook in ${z}, zijn ophalen en terugbrengen gratis. Laat via WhatsApp weten in welk hotel u verblijft en wanneer u vertrekt.`,
      (z) => `Het is eenvoudig: u stuurt een foto, wij spreken prijs en termijn af, halen het kledingstuk op in uw hotel in ${z} en brengen het aangepast terug, zonder kosten voor ophalen of bezorgen.`,
    ],
  },
  ar: {
    lead: [
      (z) => `هل تقيم في ${z}؟ نستلم القطعة من الفندق ونعدّلها في ورشتنا ثم نعيدها إليك. أرسل صورة عبر واتساب.`,
      (z) => `تعديل ملابس لنزلاء فنادق ${z}: تكتب لنا فنستلم من الفندق ونعيد القطعة إليك. نؤكد السعر عبر واتساب بعد رؤية الصورة.`,
    ],
    how: [
      (z) => `نعمل من ورشتنا في حي هورما (كونيالتي). الاستلام والتسليم من الفنادق مجانيان، ومنها فنادق ${z}. اكتب لنا عبر واتساب اسم فندقك وموعد مغادرتك.`,
      (z) => `الخطوات بسيطة: ترسل صورة، نتفق على السعر والمدة، نستلم القطعة من فندقك في ${z} ونعيدها معدّلة دون رسوم استلام أو تسليم.`,
    ],
  },
};

/** Slug'a göre deterministik kalıp: 0 = ZCOPY'deki özgün metin, 1-2 = ek kalıplar. */
export const zoneVariantIndex = (slug: string) => [...slug].reduce((a, c) => a + c.charCodeAt(0), 0) % 3;
