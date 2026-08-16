import { MetadataRoute } from 'next';

const SITE = 'https://terzihizmeti.com.tr';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
