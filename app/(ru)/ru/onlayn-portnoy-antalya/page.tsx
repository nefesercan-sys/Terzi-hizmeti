import { photoPrice } from '@/lib/meta-fit';
import KargoSayfasi, { kargoMetadata } from '@/components/KargoSayfasi';

const baseMeta = kargoMetadata('ru');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'ru') };
export default function Page() {
  return <KargoSayfasi lang="ru" />;
}
