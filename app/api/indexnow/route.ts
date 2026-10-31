import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import sitemap from '@/app/sitemap';

export const dynamic = 'force-dynamic';

const HOST = 'terzihizmeti.com.tr';
// IndexNow anahtarı herkese açıktır (public/<anahtar>.txt dosyasıyla doğrulanır); gizli olan INDEXNOW_SECRET'tır.
const KEY = '61a8b3c9d2f44e5fa8b29c9b1424ef2d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function esit(a: string | null | undefined, b: string): boolean {
  if (!a) return false;
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

// URL listesi tek kaynaktan: app/sitemap.ts (promosyon sayfaları dahil). Ayrı bir liste tutulmaz.
function urlListesi(): string[] {
  return Array.from(new Set(sitemap().map((e) => e.url)));
}

// Yetki: Vercel'de INDEXNOW_SECRET tanımlı olmalı; yalnızca "Authorization: Bearer <INDEXNOW_SECRET>" başlığı kabul edilir
// (URL'de ?token= kabul edilmez: adres günlüklerine ve geçmişe sızar).
function yetkili(req: Request): boolean {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret) return false;
  const bearer = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  return esit(bearer, secret);
}

export async function POST(req: Request) {
  if (!yetkili(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  const urlList = urlListesi();
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    });
    if (!response.ok) {
      // Ham yanıt gövdesi dışarı verilmez; yalnızca durum kodu döner.
      return NextResponse.json(
        { success: false, status: response.status, gonderilenUrlSayisi: urlList.length },
        { status: 502 },
      );
    }
    return NextResponse.json({
      success: true,
      status: response.status,
      gonderilenUrlSayisi: urlList.length,
      not: "IndexNow Google'ı kapsamaz; Google için Search Console'da sitemap gönderin.",
    });
  } catch {
    return NextResponse.json({ success: false, error: 'IndexNow isteği başarısız' }, { status: 502 });
  }
}

export async function GET() {
  return NextResponse.json({ success: false, error: 'Method Not Allowed. Use POST.' }, { status: 405, headers: { Allow: 'POST' } });
}
