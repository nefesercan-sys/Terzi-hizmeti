import { photoPrice } from '@/lib/meta-fit';
import OzelSiparisSayfasi, { ozelMetadata } from '@/components/OzelSiparisSayfasi';

const baseMeta = ozelMetadata('de');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'de') };
export default function Page() {
  return <OzelSiparisSayfasi lang="de" />;
}
