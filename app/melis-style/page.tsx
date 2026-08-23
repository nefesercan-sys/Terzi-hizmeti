// app/melis-style/page.tsx
import type { Metadata } from 'next';
import MelisStyleClient from './MelisStyleClient';

const BASE_URL = 'https://terzihizmeti.com.tr';
const PAGE_URL = `${BASE_URL}/melis-style`;
const PHONE = '+90 531 898 64 18';
const PHONE_E164 = '+905318986418';
const WHATSAPP_LINK = `https://wa.me/${PHONE_E164.replace('+', '')}?text=${encodeURIComponent('Merhaba, Melis Style ürünleri hakkında bilgi almak istiyorum.')}`;

// TODO: Gerçek ürün fotoğraflarını /public/images/melis-style/ altına bu
// dosya adlarıyla yükleyin. Yüklenene kadar sayfa zarif bir placeholder gösterir.
const PRODUCTS = [
  {
    id: 'plaj-cantasi-aztek',
    name: 'Aztek Desenli Plaj Çantası',
    category: 'Plaj Çantası',
    description: 'Krem bukle kumaş ve turkuaz-turuncu aztek desenli panel. İç fermuarlı cep, geniş sap, plaj ve günlük kullanım için ideal boyut.',
    images: [
      '/images/melis-style/plaj-cantasi-aztek-1.jpg',
      '/images/melis-style/plaj-cantasi-aztek-2.jpg',
      '/images/melis-style/plaj-cantasi-aztek-3.jpg',
      '/images/melis-style/plaj-cantasi-aztek-lifestyle.jpg',
    ],
  },
  {
    id: 'makyaj-cantasi-terry',
    name: 'Havlu Kumaş Makyaj / Plaj Çantası',
    category: 'Makyaj Çantası',
    description: 'Yumuşak havlu (terry) kumaş, örgü ip sap, turuncu fermuar detayı. Makyaj malzemeleri veya plaj eşyaları için kompakt boy.',
    images: ['/images/melis-style/makyaj-cantasi-terry-1.jpg'],
  },
  {
    id: 'sapka-yesil-cicek',
    name: 'Yeşil Çiçek Desenli Bucket Şapka',
    category: 'Şapka',
    description: 'Havlu kumaş üzerine çiçek desenli, bağcıklı bucket şapka. Yazlık, hafif ve güneşten koruyucu.',
    images: ['/images/melis-style/sapka-yesil-cicek-1.jpg'],
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Melis Style | Plaj Çantası, Makyaj Çantası, Şapka ve Aksesuar',
  description:
    `Melis Style — özel tasarım plaj çantası, havlu kumaş makyaj çantası, yazlık şapka ve aksesuar. Kapıda ödeme (nakit) ile sipariş verin. ☎ ${PHONE}`,
  keywords: [
    'Melis Style', 'plaj çantası', 'makyaj çantası', 'yazlık şapka', 'bukle çanta',
    'aztek desenli çanta', 'havlu kumaş çanta', 'kapıda ödeme çanta', 'el yapımı çanta',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Melis Style | Plaj Çantası, Makyaj Çantası, Şapka',
    description: 'Özel tasarım plaj çantası, makyaj çantası ve şapka. Kapıda ödeme ile sipariş.',
    url: PAGE_URL,
    siteName: 'Terzi Hizmeti',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: '/images/melis-style/plaj-cantasi-aztek-1.jpg', width: 1200, height: 1500, alt: 'Melis Style plaj çantası' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${PAGE_URL}#brand`,
      name: 'Melis Style',
      url: PAGE_URL,
      sameAs: [WHATSAPP_LINK],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Melis Style | Plaj Çantası, Makyaj Çantası, Şapka ve Aksesuar',
      description: 'Melis Style özel tasarım plaj çantası, makyaj çantası, şapka ve aksesuar koleksiyonu. Kapıda ödeme ile sipariş.',
      inLanguage: 'tr',
    },
    ...PRODUCTS.map((p) => ({
      '@type': 'Product',
      '@id': `${PAGE_URL}#${p.id}`,
      name: p.name,
      description: p.description,
      category: p.category,
      brand: { '@type': 'Brand', name: 'Melis Style' },
      image: p.images.map((src) => `${BASE_URL}${src}`),
      // TODO: Gerçek fiyat eklenince offers.price ve priceCurrency doldurulmalı —
      // fiyat olmadan ürün, Google Alışveriş zengin sonuçlarına giremez.
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'TRY',
        url: PAGE_URL,
      },
    })),
  ],
};

export default function MelisStylePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MelisStyleClient products={PRODUCTS} phone={PHONE} phoneE164={PHONE_E164} />
    </>
  );
}
