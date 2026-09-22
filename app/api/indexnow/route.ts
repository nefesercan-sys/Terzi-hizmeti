import { NextResponse } from 'next/server';

// Next.js'e bu API'nin dinamik olduğunu ve statik derlenmemesi gerektiğini söyler
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const host = 'terzihizmeti.com.tr';
  const key = '61a8b3c9d2f44e5fa8b29c9b1424ef2d';
  const keyLocation = `https://${host}/${key}.txt`;

  const urlList = [
    `https://${host}/`,
    `https://${host}/llms.txt`,
    `https://${host}/antalya-terzi`,
    `https://${host}/en/tailor-service-antalya`,
    `https://${host}/ru/uslugi-portnogo-antalya`,
    `https://${host}/de/schneiderservice-antalya`,
    `https://${host}/anavera-tekstil`
  ];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { success: false, status: response.status, error: errorText },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'terzihizmeti.com.tr sayfaları için arama motorlarına ping atıldı!',
      status: response.status,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: 'Ping işlemi başarısız' },
      { status: 500 }
    );
  }
}
