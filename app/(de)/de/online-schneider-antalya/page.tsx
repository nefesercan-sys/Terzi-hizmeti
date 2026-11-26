import { photoPrice } from '@/lib/meta-fit';
import KargoSayfasi, { kargoMetadata } from '@/components/KargoSayfasi';

const baseMeta = kargoMetadata('de');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'de') };
export default function Page() {
  return <KargoSayfasi lang="de" />;
}
