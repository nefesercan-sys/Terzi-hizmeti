import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // ✅ DÜZELTME: www eklendi — canonical domain ile tutarlı
    sitemap: 'https://www.terzihizmeti.com.tr/sitemap.xml',
  };
}
