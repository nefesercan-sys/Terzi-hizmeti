// ============================================================
// lib/reviews.ts — Google işletme profilindeki GERÇEK yorumlar (tek kaynak)
// Profil: TERZİ Can Antalya Tailor Service (cid=5846987472659818117)
// Yeni yorum geldikçe buraya ekle; şema, görünür bölüm ve sayı birlikte güncellenir.
// Sadece Google'da yayınlanmış yorumları ekle, metni değiştirme.
// ============================================================
export interface GoogleReview {
  author: string;          // gizlilik için ad + soyad baş harfi
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;            // YYYY-MM-DD
  lang: 'tr' | 'en' | 'ru' | 'de';
}

export const GOOGLE_REVIEW_URL = 'https://www.google.com/maps?cid=5846987472659818117';

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: 'Ahmet Y.',
    rating: 5,
    date: '2026-09-20',
    lang: 'tr',
    text: 'Takım elbisemin daraltma işlemini kusursuz yaptılar. Kurye ile otelden alıp tekrar teslim etmeleri çok büyük bir kolaylık. Kesinlikle tavsiye ederim.',
  },
  {
    author: 'Elena M.',
    rating: 5,
    date: '2026-10-02',
    lang: 'en',
    text: 'Very professional and fast alteration service. They picked up my dresses from the hotel and returned them perfectly tailored the next day.',
  },
  {
    author: 'Anastasia B.',
    rating: 5,
    date: '2026-10-05',
    lang: 'en',
    text: 'Very happy with the Service. Quick and efficient. Got my trousers picked up and delivered the next day. Can only recommend',
  },
  {
    author: 'Selvinaz D.',
    rating: 5,
    date: '2026-10-05',
    lang: 'tr',
    text: 'Terzi can a Özel kiyafet diktirdim ve önceki kıyafetlerimin de tadilatını yaptırdım dikis kalitesi ve kalıp olarak oturması cok güzel oldu ve zamaninda teslim ettii ve istedigim elbise tam gibi dikti elbiselerimde bek daraltma ve bir kaç boy kisaltma isinide ojinal sekolde yaptı cok memnun kaldım antalyadakj en iyi en profesyonel ve en guker yüzlü terzi',
  },
];

export function reviewStats() {
  const n = GOOGLE_REVIEWS.length;
  const avg = n ? GOOGLE_REVIEWS.reduce((s, r) => s + r.rating, 0) / n : 0;
  return { count: n, average: avg.toFixed(1) };
}

// LocalBusiness düğümüne `...reviewSchema()` olarak eklenir. Yorum yoksa boş döner.
export function reviewSchema(): Record<string, unknown> {
  const { count, average } = reviewStats();
  if (!count) return {};
  return {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: average,
      reviewCount: String(count),
      bestRating: '5',
      worstRating: '1',
    },
    review: GOOGLE_REVIEWS.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.date,
      reviewBody: r.text,
      inLanguage: r.lang,
      reviewRating: { '@type': 'Rating', bestRating: '5', ratingValue: String(r.rating) },
    })),
  };
}
