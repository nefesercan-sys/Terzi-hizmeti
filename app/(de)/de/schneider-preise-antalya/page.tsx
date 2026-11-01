import TerziFiyatlariSayfasi from '@/components/TerziFiyatlariSayfasi';
import { buildFiyatMetadata, buildFiyatJsonLd } from '@/lib/fiyat-meta';

export const metadata = buildFiyatMetadata('de');

export default function SchneiderPreiseDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFiyatJsonLd('de')) }} />
      <TerziFiyatlariSayfasi lang="de" />
    </>
  );
}
 
