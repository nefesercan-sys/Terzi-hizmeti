# Terzi Can — terzihizmeti.com.tr

Antalya Konyaaltı'ndaki Terzi Can atölyesinin (ve Anavera Tekstil'in) web sitesi. Next.js 16, React 19, TypeScript; veritabanı yoktur.
Diller: tr, en, de, ru (kendi yönlendirme grupları) ve es, fr, pl, uk, nl, ar (`app/[lang]`).

## Kurulum

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build && npm start
```

Node 20.9 veya üstü gerekir.

## Ortam değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın.

| Değişken | Açıklama |
| --- | --- |
| `INDEXNOW_SECRET` | `POST /api/indexnow` için yetki anahtarı. Örnek: `curl -X POST -H "Authorization: Bearer $INDEXNOW_SECRET" https://terzihizmeti.com.tr/api/indexnow`. Tanımlı değilse uç nokta 401 döner. |

## Tek kaynaklar (metni burada değiştirin)

- `lib/delivery.ts` — teslim süreleri (10 dil)
- `lib/seo-data.ts` — mahalleler, hizmetler, ücretsiz servis kuralı, `BUSINESS_ID`
- `lib/business.ts` — işletme JSON-LD düğümü (`businessNode()`)
- `lib/meta-fit.ts` — title/description/keywords sınırları (60 / 155 / 8)
- `app/sitemap.ts` — sitemap; IndexNow URL listesi de buradan üretilir
