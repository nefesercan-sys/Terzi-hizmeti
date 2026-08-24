import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // ✅ DÜZELTME (2026-08-23): www geri alındı, non-www canonical
    sitemap: 'https://terzihizmeti.com.tr/sitemap.xml',
  };
}
