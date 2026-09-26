// app/anavera-tekstil/page.tsx (Türkçe — varsayılan/bare URL, site geneliyle tutarlı)
import AnaveraTekstilSayfasi from '@/components/AnaveraTekstilSayfasi';
import { buildAnaveraMetadata, buildAnaveraJsonLd } from '@/lib/anavera-meta';

export const metadata = buildAnaveraMetadata('tr');
const jsonLd = buildAnaveraJsonLd('tr');

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnaveraTekstilSayfasi lang="tr" />
    </>
  );
}
