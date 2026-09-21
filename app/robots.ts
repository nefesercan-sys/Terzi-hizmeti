import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // API rotalarının taranmasına gerek yok
          '/admin/',         // Yönetim paneli gizli kalmalı
          '/panel/',         // Alternatif panel yolları
          '/*?*utm_',        // Reklam ve takip linklerinin (kopya içerik) taranmasını engeller
          '/*?*sort=',       // Filtre/sıralama parametrelerini engeller
          '/*?*session=',    // Oturum parametrelerini engeller
        ],
      },
    ],
    // ✅ DÜZELTME (2026-08-23): www geri alındı, non-www canonical
    sitemap: 'https://terzihizmeti.com.tr/sitemap.xml',
    host: 'https://terzihizmeti.com.tr', // Alan adı otoritesini tek merkezde toplar
  };
}
