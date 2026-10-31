'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// 404 içeriği: dil, URL'nin ilk bölümünden (/en/..., /de/... vb.) anlaşılır; yoksa Türkçe.
type Copy = { title: string; text: string; home: string; wa: string; waMsg: string; nav: string; links: [string, string][] };
const L: Record<string, Copy> = {
  tr: { title: 'Bu sayfayı bulamadık', text: 'Aradığınız sayfa taşınmış ya da kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilir ya da doğrudan bize yazabilirsiniz.', home: 'Ana Sayfa', wa: 'WhatsApp', waMsg: 'Merhaba, aradığım sayfayı bulamadım, yardımcı olur musunuz?', nav: 'Popüler sayfalar', links: [['/antalya-terzi', 'Antalya Terzi'], ['/otele-gelen-terzi-antalya', 'Otele Gelen Terzi'], ['/antalya-gelinlik-tadilati', 'Gelinlik Tadilatı'], ['/blog', 'Blog']] },
  en: { title: 'We could not find this page', text: 'The page may have moved or been removed. Use the links below or message us directly.', home: 'Home', wa: 'WhatsApp', waMsg: 'Hello, I could not find the page I was looking for. Can you help?', nav: 'Popular pages', links: [['/en/tailor-service-antalya', 'Tailor Antalya'], ['/en/hotel-tailor-antalya', 'Hotel Tailor'], ['/en/tailor-prices-antalya', 'Prices']] },
  de: { title: 'Seite nicht gefunden', text: 'Die Seite wurde möglicherweise verschoben oder entfernt. Nutzen Sie die Links unten oder schreiben Sie uns direkt.', home: 'Startseite', wa: 'WhatsApp', waMsg: 'Hallo, ich habe die gesuchte Seite nicht gefunden. Können Sie helfen?', nav: 'Beliebte Seiten', links: [['/de/schneiderservice-antalya', 'Schneider Antalya'], ['/de/schneider-service-hotel-antalya', 'Hotel-Schneider'], ['/de/schneider-preise-antalya', 'Preise']] },
  ru: { title: 'Страница не найдена', text: 'Возможно, страница была перемещена или удалена. Воспользуйтесь ссылками ниже или напишите нам.', home: 'Главная', wa: 'WhatsApp', waMsg: 'Здравствуйте, я не нашёл нужную страницу. Можете помочь?', nav: 'Популярные страницы', links: [['/ru/uslugi-portnogo-antalya', 'Портной Анталья'], ['/ru/vyezdnoy-portnoy-antalya', 'Портной в отель'], ['/ru/ceny-portnoy-antalya', 'Цены']] },
  es: { title: 'Página no encontrada', text: 'Puede que la página se haya movido o eliminado. Use los enlaces de abajo o escríbanos.', home: 'Inicio', wa: 'WhatsApp', waMsg: 'Hola, no encontré la página que buscaba. ¿Pueden ayudarme?', nav: 'Páginas populares', links: [] },
  fr: { title: 'Page introuvable', text: 'La page a peut-être été déplacée ou supprimée. Utilisez les liens ci-dessous ou écrivez-nous.', home: 'Accueil', wa: 'WhatsApp', waMsg: 'Bonjour, je n’ai pas trouvé la page recherchée. Pouvez-vous m’aider ?', nav: 'Pages populaires', links: [] },
  pl: { title: 'Nie znaleziono strony', text: 'Strona mogła zostać przeniesiona lub usunięta. Skorzystaj z linków poniżej lub napisz do nas.', home: 'Strona główna', wa: 'WhatsApp', waMsg: 'Dzień dobry, nie znalazłem strony, której szukałem. Czy mogą Państwo pomóc?', nav: 'Popularne strony', links: [] },
  uk: { title: 'Сторінку не знайдено', text: 'Можливо, сторінку переміщено або видалено. Скористайтеся посиланнями нижче або напишіть нам.', home: 'Головна', wa: 'WhatsApp', waMsg: 'Доброго дня, я не знайшов потрібну сторінку. Чи можете допомогти?', nav: 'Популярні сторінки', links: [] },
  nl: { title: 'Pagina niet gevonden', text: 'De pagina is mogelijk verplaatst of verwijderd. Gebruik de links hieronder of stuur ons een bericht.', home: 'Home', wa: 'WhatsApp', waMsg: 'Hallo, ik kon de pagina die ik zocht niet vinden. Kunnen jullie helpen?', nav: 'Populaire pagina’s', links: [] },
  ar: { title: 'الصفحة غير موجودة', text: 'ربما تم نقل الصفحة أو حذفها. استخدم الروابط أدناه أو راسلنا مباشرة.', home: 'الرئيسية', wa: 'واتساب', waMsg: 'مرحباً، لم أجد الصفحة التي أبحث عنها. هل يمكنكم المساعدة؟', nav: 'صفحات شائعة', links: [] },
};
const PHONE = '+90 531 898 64 18';

export default function NotFoundContent() {
  const path = usePathname() || '/';
  const seg = path.split('/')[1] || '';
  const lang = L[seg] ? seg : 'tr';
  const c = L[lang];
  const home = lang === 'tr' ? '/' : `/${lang}`;
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  const wa = 'https://wa.me/905318986418?text=' + encodeURIComponent(c.waMsg);
  return (
    <main style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3rem 1.5rem', fontFamily: 'system-ui, sans-serif', background: '#2C4A3E', color: '#faf7f0' }}>
      <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '.5rem' }}>404</div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '.75rem' }}>{c.title}</h1>
      <p style={{ opacity: 0.8, maxWidth: 440, marginBottom: '2rem', lineHeight: 1.6 }}>{c.text}</p>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
        <a href={home} style={{ background: '#C9A96E', color: '#2C4A3E', padding: '.7rem 1.4rem', borderRadius: 999, fontWeight: 700, textDecoration: 'none' }}>{c.home}</a>
        <a href={wa} target="_blank" rel="noopener noreferrer" style={{ border: '1px solid rgba(255,255,255,.4)', color: '#faf7f0', padding: '.7rem 1.4rem', borderRadius: 999, fontWeight: 700, textDecoration: 'none' }}>💬 {c.wa}: {PHONE}</a>
      </div>
      {c.links.length > 0 && (
        <nav aria-label={c.nav} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '.85rem', opacity: 0.75 }}>
          {c.links.map(([h, l]) => (<a key={h} href={h} style={{ color: 'inherit' }}>{l}</a>))}
        </nav>
      )}
    </main>
  );
}
