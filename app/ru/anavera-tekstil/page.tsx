// app/ru/anavera-tekstil/page.tsx
import AnaveraTekstilSayfasi from '@/components/AnaveraTekstilSayfasi';
import { buildAnaveraMetadata, buildAnaveraJsonLd } from '@/lib/anavera-meta';

export const metadata = buildAnaveraMetadata('ru');
const jsonLd = buildAnaveraJsonLd('ru');

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnaveraTekstilSayfasi lang="ru" />
    </>
  );
}
