import { photoPrice } from '@/lib/meta-fit';
import TerziFiyatlariSayfasi from '@/components/TerziFiyatlariSayfasi';
import { buildFiyatMetadata, buildFiyatJsonLd } from '@/lib/fiyat-meta';

const baseMeta = buildFiyatMetadata('ru');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'ru') };
export default function CenyPortnogoRu() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFiyatJsonLd('ru')) }} />
      <TerziFiyatlariSayfasi lang="ru" />
    </>
  );
}
