import TerziFiyatlariSayfasi from '@/components/TerziFiyatlariSayfasi';
import { buildFiyatMetadata, buildFiyatJsonLd } from '@/lib/fiyat-meta';

export const metadata = buildFiyatMetadata('ru');

export default function CenyPortnogoRu() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFiyatJsonLd('ru')) }} />
      <TerziFiyatlariSayfasi lang="ru" />
    </>
  );
}
