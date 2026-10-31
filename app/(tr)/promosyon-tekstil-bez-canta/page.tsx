// app/(tr)/promosyon-tekstil-bez-canta/page.tsx — Promosyon tekstil ve baskılı bez çanta imalatı (TR)
import PromosyonTekstilSayfasi from '@/components/PromosyonTekstilSayfasi';
import { buildPromoMetadata } from '@/lib/promosyon-tekstil';

export const metadata = buildPromoMetadata('tr');

export default function Page() {
  return <PromosyonTekstilSayfasi lang="tr" />;
}
