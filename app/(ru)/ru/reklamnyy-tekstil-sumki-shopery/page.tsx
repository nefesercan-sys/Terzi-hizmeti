// app/(ru)/ru/reklamnyy-tekstil-sumki-shopery/page.tsx
import PromosyonTekstilSayfasi from '@/components/PromosyonTekstilSayfasi';
import { buildPromoMetadata } from '@/lib/promosyon-tekstil';

export const metadata = buildPromoMetadata('ru');

export default function Page() {
  return <PromosyonTekstilSayfasi lang="ru" />;
}
