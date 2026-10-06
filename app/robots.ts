import { MetadataRoute } from 'next'

// terzihizmeti.com.tr — robots.txt
// 2026-10-06: Google'ın tanımadığı "Host" yönergesi kaldırıldı (Search Console uyarısı);
// ChatGPT arama botu OAI-SearchBot açıkça eklendi.
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
        userAgent: [
          'Google-Extended',
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-SearchBot',
          'Applebot-Extended',
          'Bingbot',
          'YandexBot',
          'Amazonbot',
          'meta-externalagent',
          'DuckAssistBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://terzihizmeti.com.tr/sitemap.xml',
    host: 'https://terzihizmeti.com.tr',
  }
}
