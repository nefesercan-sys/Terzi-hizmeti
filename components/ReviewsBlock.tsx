// Görünür müşteri yorumları (Google'daki gerçek yorumlar). Şema ayrıca üretilmez:
// işletme şeması zaten aynı yorumları lib/reviews.ts'ten alır (çift işaretleme olmasın).
import { GOOGLE_REVIEWS, GOOGLE_REVIEW_URL, reviewStats } from '@/lib/reviews';

type L = 'tr' | 'en' | 'ru' | 'de';
const T = {
  tr: { h: 'Müşteri Yorumları', on: "Google'da", rev: 'yorum', all: "Tüm yorumları Google'da gör", sel: (n: number) => `burada ${n} yorumluk bir seçki` },
  en: { h: 'Customer Reviews', on: 'on Google', rev: 'reviews', all: 'See all reviews on Google', sel: (n: number) => `a selection of ${n} shown here` },
  ru: { h: 'Отзывы клиентов', on: 'в Google', rev: 'отзывов', all: 'Все отзывы в Google', sel: (n: number) => `здесь — подборка из ${n}` },
  de: { h: 'Kundenbewertungen', on: 'bei Google', rev: 'Bewertungen', all: 'Alle Bewertungen bei Google ansehen', sel: (n: number) => `hier eine Auswahl von ${n}` },
} as const;

export default function ReviewsBlock({ lang = 'tr' }: { lang?: L }) {
  const t = T[lang] ?? T.en;
  const { count, average } = reviewStats();
  const list = [...GOOGLE_REVIEWS].sort((a, b) => Number(b.lang === lang) - Number(a.lang === lang));
  return (
    <section
      id="musteri-yorumlari"
      aria-labelledby="yorumlar-baslik"
      style={{ maxWidth: 1000, margin: '32px auto', padding: '20px 16px', background: '#1E3329', color: '#F5F1E8', borderRadius: 14 }}
    >
      <h2 id="yorumlar-baslik" style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{t.h}</h2>
      <p style={{ fontSize: 14, margin: '0 0 14px', opacity: 0.85 }}>
        <span aria-hidden="true" style={{ color: '#F0C987' }}>★★★★★</span> {average} · {count} {t.rev} {t.on} · {t.sel(list.length)}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
        {list.map((r) => (
          <figure key={r.author + r.date} style={{ margin: 0, border: '1px solid rgba(240,201,135,.35)', borderRadius: 12, padding: 14 }}>
            <div style={{ color: '#F0C987', fontSize: 14 }} aria-label={`${r.rating} / 5`}>{'★'.repeat(r.rating)}</div>
            <blockquote style={{ margin: '8px 0', fontSize: 14, lineHeight: 1.6 }}>{r.text}</blockquote>
            <figcaption style={{ fontSize: 12, opacity: 0.85 }}>{r.author} · {r.date}</figcaption>
          </figure>
        ))}
      </div>
      <p style={{ marginTop: 12, fontSize: 14 }}>
        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#F0C987' }}>{t.all}</a>
      </p>
    </section>
  );
}
