// Fiyat tutarlılık kontrolü: kod içindeki ₺/€ tutarlarını ("₺200", "200 TL", "€10", "10 €"/"10 EUR") ve
// JSON-LD sayısal price/lowPrice/minPrice değerlerini tarar, onaylı listede olmayanları raporlar.
// Kullanım: node scripts/fiyat-kontrol.mjs   (sorun varsa çıkış kodu 1)
// Onaylı fiyatlar (sahip kararı, Kasım 2026): lib/business.ts PRICE_FROM ve lib/facts.ts ile aynı olmalı.
//   ₺200 (kısaltma/daraltma), ₺300 (fermuar), ₺400 (deri), ₺800 (yalnız abiye/gelinlik TADİLATI);
//   € karşılıkları 10 / 15 / 20 / 40. DİKİM işlerinde sabit fiyat YOKTUR (BY_PHOTO_MODEL): 1000, 20000, 50 vb. yasak.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const TRY_OK = new Set([200, 300, 400, 800, 20]); // 20 = yalnız kur notu (₺20 = €1) için
const EUR_OK = new Set([10, 15, 20, 40, 1]);       // 40 = abiye/gelinlik tadilatı (₺800)
const SKIP = /(^|\/)(node_modules|\.next|\.git|bal|ilan|api)(\/|$)|bal-icerik|fiyat-kontrol/;
const EXT = /\.(ts|tsx|txt|md)$/;

const N = '(\\d{1,3}(?:[.,]\\d{3})+|\\d+)';
const sayi = (s) => Number(s.replace(/[.,]/g, ''));
const bulgu = [];
const ekle = (yol, i, t) => bulgu.push(`${yol}:${i + 1}  ${t}`);
function tara(dir) {
  for (const ad of readdirSync(dir)) {
    const yol = join(dir, ad);
    if (SKIP.test(yol)) continue;
    const st = statSync(yol);
    if (st.isDirectory()) { tara(yol); continue; }
    if (!EXT.test(ad) || /^docs\//.test(yol)) continue;
    readFileSync(yol, 'utf8').split('\n').forEach((satir, i) => {
      for (const m of satir.matchAll(new RegExp('₺ ?' + N, 'g'))) if (!TRY_OK.has(sayi(m[1]))) ekle(yol, i, `₺${m[1]}`);
      for (const m of satir.matchAll(new RegExp('€ ?' + N, 'g'))) if (!EUR_OK.has(sayi(m[1]))) ekle(yol, i, `€${m[1]}`);
      // "800 TL", "800 ₺", "10 €", "10 EUR", "10 euro"
      for (const m of satir.matchAll(new RegExp('(?<![\\d.,])' + N + ' ?(?:TL\\b|₺)', 'g'))) if (!TRY_OK.has(sayi(m[1]))) ekle(yol, i, `${m[1]} TL`);
      for (const m of satir.matchAll(new RegExp('(?<![\\d.,])' + N + ' ?(?:€|EUR\\b|euro\\b|Euro\\b)', 'g'))) if (!EUR_OK.has(sayi(m[1]))) ekle(yol, i, `${m[1]} €`);
      // JSON-LD sayısal fiyat: price: '800', "price": "800", lowPrice/highPrice/minPrice/maxPrice: 10
      for (const m of satir.matchAll(new RegExp('["\']?(?:price|lowPrice|highPrice|minPrice|maxPrice)["\']?\\s*:\\s*["\']?' + N + '(?![\\d])', 'g'))) {
        const v = sayi(m[1]); const eur = /EUR|€/.test(satir); const ok = eur ? EUR_OK : TRY_OK;
        if (!ok.has(v)) ekle(yol, i, `JSON-LD price ${m[1]}`);
      }
      // Bare "price": "0" (ücretsiz yerine) yasak
      if (/["']price["']\s*:\s*["']0["']/.test(satir)) ekle(yol, i, 'price "0" (Free/Ücretsiz yazın)');
    });
  }
}
for (const d of ['app', 'components', 'lib', 'public']) { try { tara(d); } catch {} }
if (bulgu.length) { console.log('Onaylı listede olmayan tutarlar:\n' + bulgu.join('\n')); process.exit(1); }
console.log('Fiyat kontrolü temiz.');
