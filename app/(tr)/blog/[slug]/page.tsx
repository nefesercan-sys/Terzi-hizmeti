import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fitDesc } from '@/lib/meta-fit';
import { BLOG_YAZILARI, blogYazisi } from '@/lib/blog-yazilari';

const SITE = 'https://terzihizmeti.com.tr';
const PHONE = '+90 531 898 64 18';

export const dynamicParams = false;
export function generateStaticParams() {
  return BLOG_YAZILARI.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const y = blogYazisi(slug);
  if (!y) return {};
  const url = `${SITE}/blog/${y.slug}`;
  const og = `${SITE}${y.gorsel}`;
  return {
    metadataBase: new URL(SITE),
    title: { absolute: `${y.baslik} | Terzi Can Antalya` },
    description: fitDesc(y.ozet),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: y.baslik, description: y.ozet, url, siteName: 'Terzi Hizmeti', locale: 'tr_TR', type: 'article',
      publishedTime: y.tarih, images: [{ url: og, alt: y.gorselAlt }],
    },
    twitter: { card: 'summary_large_image', title: y.baslik, images: [og] },
  };
}

export default async function BlogYazisiSayfasi({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const y = blogYazisi(slug);
  if (!y) notFound();
  const url = `${SITE}/blog/${y.slug}`;
  const wa = 'https://wa.me/905318986418?text=' + encodeURIComponent(y.waMesaj);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Terzi Can', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
          { '@type': 'ListItem', position: 3, name: y.baslik, item: url },
        ],
      },
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        mainEntityOfPage: url,
        headline: y.baslik,
        description: y.ozet,
        image: `${SITE}${y.gorsel}`,
        datePublished: y.tarih,
        dateModified: y.tarih,
        inLanguage: 'tr',
        author: { '@type': 'Organization', name: 'Terzi Can', url: SITE },
        publisher: { '@type': 'Organization', name: 'Terzi Can', logo: { '@type': 'ImageObject', url: `${SITE}/apple-touch-icon.png` } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: y.sss.map((s) => ({ '@type': 'Question', name: s.q, acceptedAnswer: { '@type': 'Answer', text: s.a } })),
      },
    ],
  };
  const h2 = { fontSize: '1.3rem', fontWeight: 700, marginTop: '2rem', color: '#2C4A3E' } as const;
  const digerleri = BLOG_YAZILARI.filter((d) => d.slug !== y.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#222', lineHeight: 1.7 }}>
        <nav aria-label="breadcrumb" style={{ fontSize: '.8rem', color: '#888', marginBottom: '1rem' }}>
          <a href="/" style={{ color: '#888' }}>Ana Sayfa</a> <span>/</span> <a href="/blog" style={{ color: '#888' }}>Blog</a>
        </nav>
        <p style={{ fontSize: '.78rem', color: '#999', marginBottom: '.4rem' }}>
          {new Date(y.tarih).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} · Terzi Can
        </p>
        <h1 style={{ fontSize: 'clamp(1.7rem,4.5vw,2.5rem)', fontWeight: 800, margin: '0 0 1.5rem', color: '#2C4A3E' }}>{y.baslik}</h1>

        <figure style={{ margin: '0 0 1.5rem' }}>
          <img src={y.gorsel} alt={y.gorselAlt} width={y.gorselBoyut?.[0] ?? 1264} height={y.gorselBoyut?.[1] ?? 848} style={{ width: '100%', height: 'auto', borderRadius: 14, display: 'block' }} />
          <figcaption style={{ fontSize: '.75rem', color: '#999', marginTop: 6 }}>Örnek görsel</figcaption>
        </figure>

        <p>{y.giris}</p>

        {y.bolumler.map((b) => (
          <section key={b.h}>
            <h2 style={h2}>{b.h}</h2>
            {b.p.map((t, i) => <p key={i}>{t}</p>)}
            {b.liste && (
              <ul style={{ paddingLeft: '1.2rem' }}>
                {b.liste.map((l) => <li key={l}>{l}</li>)}
              </ul>
            )}
          </section>
        ))}

        <h2 style={h2}>Sık sorulan sorular</h2>
        {y.sss.map((s) => (
          <div key={s.q}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '1.2rem 0 .3rem' }}>{s.q}</h3>
            <p style={{ margin: 0 }}>{s.a}</p>
          </div>
        ))}

        <div style={{ background: '#f6f4ee', borderRadius: 14, padding: '1.5rem', marginTop: '2.5rem' }}>
          <p style={{ margin: '0 0 .8rem', fontWeight: 700, color: '#2C4A3E' }}>Fotoğrafını gönder, fiyat ve süreyi öğren</p>
          <a href={wa} style={{ display: 'inline-block', background: '#2C4A3E', color: '#fff', padding: '.7rem 1.2rem', borderRadius: 10, textDecoration: 'none', fontWeight: 600 }}>WhatsApp&apos;tan yaz</a>
          <span style={{ marginLeft: 12, fontSize: '.9rem', color: '#555' }}>☎ {PHONE} · her gün 08:00–23:00</span>
        </div>

        <h2 style={h2}>İlgili sayfalar</h2>
        <ul style={{ paddingLeft: '1.2rem' }}>
          {y.linkler.map((l) => <li key={l.href}><a href={l.href} style={{ color: '#2C4A3E' }}>{l.metin}</a></li>)}
        </ul>

        {digerleri.length > 0 && (
          <>
            <h2 style={h2}>Diğer yazılar</h2>
            <ul style={{ paddingLeft: '1.2rem' }}>
              {digerleri.map((d) => <li key={d.slug}><a href={`/blog/${d.slug}`} style={{ color: '#2C4A3E' }}>{d.baslik}</a></li>)}
            </ul>
          </>
        )}
        <p style={{ marginTop: '2rem' }}><a href="/blog" style={{ color: '#666' }}>← Tüm yazılar</a></p>
      </main>
    </>
  );
}
