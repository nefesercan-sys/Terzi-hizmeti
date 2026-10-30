// app/(en)/en/promotional-textiles-tote-bags/page.tsx
import PromosyonTekstilSayfasi from '@/components/PromosyonTekstilSayfasi';
import { buildPromoMetadata } from '@/lib/promosyon-tekstil';

export const metadata = buildPromoMetadata('en');

export default function Page() {
  return <PromosyonTekstilSayfasi lang="en" />;
}
