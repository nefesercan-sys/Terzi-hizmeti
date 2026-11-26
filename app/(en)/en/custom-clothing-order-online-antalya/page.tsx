import { photoPrice } from '@/lib/meta-fit';
import OzelSiparisSayfasi, { ozelMetadata } from '@/components/OzelSiparisSayfasi';

const baseMeta = ozelMetadata('en');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'en') };
export default function Page() {
  return <OzelSiparisSayfasi lang="en" />;
}
