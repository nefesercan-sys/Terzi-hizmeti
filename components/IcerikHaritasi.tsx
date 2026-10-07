'use client';
// ============================================================
// terzihizmeti.com.tr — components/IcerikHaritasi.tsx
// Her halka açık terzi/hizmet sayfasının sonunda "içerik haritası":
// aynı kümedeki sayfalara bağlantılar (sunucuda HTML olarak render edilir).
// Haritası olmayan sayfalarda (ilanlar, panel, giriş...) hiçbir şey çizmez.
// ============================================================
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { breadcrumbJsonLd, getBreadcrumb, getSiteMap } from '@/lib/icerik-haritasi';

// Aynı işletmenin swaphubs.com üzerindeki sayfaları (iki site birbirine bağlansın: işletme varlığı tek)
const SWAP = 'https://swaphubs.com';
const RELATED: Record<'tr' | 'en' | 'de' | 'ru', { title: string; links: { href: string; label: string }[] }> = {
  tr: {
    title: 'Terzi Can — swaphubs.com sayfalarımız',
    links: [
      { href: `${SWAP}/terzi`, label: 'Terzi Can Antalya' },
      { href: `${SWAP}/antalya-konyaalti-terzi-elbise-dikim-tadilat-utu-hizmeti`, label: 'Konyaaltı terzi, elbise dikim ve tadilat' },
      { href: `${SWAP}/online-terzi-hizmeti`, label: 'Online terzi hizmeti' },
    ],
  },
  en: {
    title: 'Terzi Can — more pages on swaphubs.com',
    links: [
      { href: `${SWAP}/online-tailor-service`, label: 'Online Tailor Service Antalya' },
      { href: `${SWAP}/en/hotel-tailor-antalya`, label: 'Hotel Tailor Antalya' },
    ],
  },
  de: {
    title: 'Terzi Can — weitere Seiten auf swaphubs.com',
    links: [
      { href: `${SWAP}/de/online-schneiderservice-antalya`, label: 'Online Schneiderservice Antalya' },
      { href: `${SWAP}/de/schneider-service-hotel-antalya`, label: 'Schneider-Service im Hotel' },
    ],
  },
  ru: {
    title: 'Terzi Can — другие страницы на swaphubs.com',
    links: [
      { href: `${SWAP}/ru/atelie-antalya`, label: 'Ателье в Анталии' },
      { href: `${SWAP}/ru/atelie-antalya-online`, label: 'Онлайн-ателье Анталья' },
      { href: `${SWAP}/ru/vyezdnoy-portnoy-antalya`, label: 'Выездной портной' },
    ],
  },
};

export default function IcerikHaritasi() {
  const pathname = usePathname() || '/';
  const map = getSiteMap(pathname);
  if (!map) return null;
  const crumbs = getBreadcrumb(pathname);

  return (
    <aside
      aria-label={map.heading}
      lang={map.lang}
      style={{
        maxWidth: 1040,
        margin: '0 auto',
        padding: '2rem 1.25rem 5.5rem', // alt boşluk: mobil alt menü kapatmasın
        fontFamily: 'inherit',
        fontSize: '.88rem',
        lineHeight: 1.6,
        color: 'inherit',
        borderTop: '1px solid rgba(128,128,128,.25)',
      }}
    >
      {crumbs && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      )}

      <h2 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 1rem', color: 'inherit' }}>{map.heading}</h2>

      {map.sections
        .filter((s) => s.links.length > 0)
        .map((s) => (
          <nav key={s.title} aria-label={s.title} style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.08em', opacity: 0.65, marginBottom: '.4rem' }}>
              {s.title}
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '.45rem' }}>
              {s.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      display: 'inline-block',
                      padding: '.3rem .75rem',
                      border: '1px solid rgba(128,128,128,.3)',
                      borderRadius: 999,
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

      <nav aria-label={RELATED[map.lang].title} style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.08em', opacity: 0.65, marginBottom: '.4rem' }}>
          {RELATED[map.lang].title}
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '.45rem' }}>
          {RELATED[map.lang].links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  display: 'inline-block',
                  padding: '.3rem .75rem',
                  border: '1px solid rgba(128,128,128,.3)',
                  borderRadius: 999,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
