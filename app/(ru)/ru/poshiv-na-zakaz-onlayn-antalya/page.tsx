import { photoPrice } from '@/lib/meta-fit';
import OzelSiparisSayfasi, { ozelMetadata } from '@/components/OzelSiparisSayfasi';

const baseMeta = ozelMetadata('ru');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'ru') };
export default function Page() {
  return <OzelSiparisSayfasi lang="ru" />;
}
