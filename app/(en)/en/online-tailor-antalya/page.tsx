import { photoPrice } from '@/lib/meta-fit';
import KargoSayfasi, { kargoMetadata } from '@/components/KargoSayfasi';

const baseMeta = kargoMetadata('en');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'en') };
export default function Page() {
  return <KargoSayfasi lang="en" />;
}
