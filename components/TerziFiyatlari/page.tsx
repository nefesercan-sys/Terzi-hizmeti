import TerziFiyatlariSayfasi from '@/components/TerziFiyatlariSayfasi';
import { buildFiyatMetadata, buildFiyatJsonLd } from '@/lib/fiyat-meta';

export const metadata = buildFiyatMetadata('tr');

export default function TerziFiyatlariTr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFiyatJsonLd('tr')) }} />
      <TerziFiyatlariSayfasi lang="tr" />
    </>
  );
}
