import TerziFiyatlariSayfasi from '@/components/TerziFiyatlariSayfasi';
import { buildFiyatMetadata, buildFiyatJsonLd } from '@/lib/fiyat-meta';

export const metadata = buildFiyatMetadata('en');

export default function TailorPricesEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFiyatJsonLd('en')) }} />
      <TerziFiyatlariSayfasi lang="en" />
    </>
  );
}
