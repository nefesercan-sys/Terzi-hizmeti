import { MetadataRoute } from 'next'

// DÜZELTME (2026-09-27): Bu dosya yanlışlıkla swaphubs.com projesinin
// robots.ts'i ile karışmıştı — /admin-ai/, /bal/, /ilan-ver, /panel/,
// /profil/ gibi yollar bu (terzihizmeti.com.tr) projede HİÇ yok, o site
// swaphubs.com'un pazaryeri/ilan sistemine ait. Ayrıca sitemap/host
// swaphubs.com'a çevrilmişti — tam da terzihizmeti.com.tr'ye göç sürecinin
// ortasında bu, Google'a yanlış kanonik domain sinyali verirdi. İkisi de
// düzeltildi; Google-Extended/GPTBot/PerplexityBot/ClaudeBot izinleri
// (iyi bir eklemeydi) korundu.
export default function robots(): MetadataRoute.Robots {
  const commonDisallows = [
    '/api/',
    '/*?*sort=',
    '/*?*order=',
    '/*?*ref=',
    '/*?*utm_',
    '/*?*session=',
  ]

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: commonDisallows,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: commonDisallows,
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://terzihizmeti.com.tr/sitemap.xml',
  }
}
