import { MetadataRoute } from 'next'

// terzihizmeti.com.tr — robots.txt
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
        userAgent: [
          'Googlebot',
          'Bingbot',
          'YandexBot',
          'Google-Extended',
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-SearchBot',
          'Applebot-Extended',
          'Amazonbot',
          'meta-externalagent',
          'DuckAssistBot',
        ],
        allow: '/',
        disallow: commonDisallows,
      },
    ],
    sitemap: 'https://terzihizmeti.com.tr/sitemap.xml',
  }
}
