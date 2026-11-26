import { photoPrice } from '@/lib/meta-fit';
import TerziFiyatlariSayfasi from '@/components/TerziFiyatlariSayfasi';
import { buildFiyatMetadata, buildFiyatJsonLd } from '@/lib/fiyat-meta';

const baseMeta = buildFiyatMetadata('en');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'en') };
export default function TailorPricesEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFiyatJsonLd('en')) }} />
      <TerziFiyatlariSayfasi lang="en" />
    </>
  );
}
