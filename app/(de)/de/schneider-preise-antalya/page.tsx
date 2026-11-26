import { photoPrice } from '@/lib/meta-fit';
import TerziFiyatlariSayfasi from '@/components/TerziFiyatlariSayfasi';
import { buildFiyatMetadata, buildFiyatJsonLd } from '@/lib/fiyat-meta';

const baseMeta = buildFiyatMetadata('de');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'de') };
export default function SchneiderPreiseDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFiyatJsonLd('de')) }} />
      <TerziFiyatlariSayfasi lang="de" />
    </>
  );
}
 
