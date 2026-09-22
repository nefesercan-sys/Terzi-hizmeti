import { NextResponse } from 'next/server';

export async function GET() {
  const host = 'terzihizmeti.com.tr';
  const key = '61a8b3c9d2f44e5fa8b29c9b1424ef2d'; 
  const keyLocation = `https://${host}/${key}.txt`;
  
  const urlList = [
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
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList
      })
    });

    return NextResponse.json({ 
      success: true, 
      message: "terzihizmeti.com.tr sayfaları için arama motorlarına ping atıldı!",
      status: response.status 
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Ping işlemi başarısız' }, { status: 500 });
  }
}

