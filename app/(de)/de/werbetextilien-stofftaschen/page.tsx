// app/(de)/de/werbetextilien-stofftaschen/page.tsx
import PromosyonTekstilSayfasi from '@/components/PromosyonTekstilSayfasi';
import { buildPromoMetadata } from '@/lib/promosyon-tekstil';

export const metadata = buildPromoMetadata('de');

export default function Page() {
  return <PromosyonTekstilSayfasi lang="de" />;
}
