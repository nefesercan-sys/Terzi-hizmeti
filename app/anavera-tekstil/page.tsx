// app/anavera-tekstil/page.tsx — Türkçe Anavera sayfası
// DÜZELTME: Bu dosyada önceden swaphubs.com/tekstil-antalya sayfasının kopyası vardı
// (canonical swaphubs.com'u gösteriyordu, "Min. 300 adet" yazıyordu). Artık diğer 3 dil
// gibi paylaşılan bileşeni ve kendi canonical/hreflang'ını kullanır.
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
