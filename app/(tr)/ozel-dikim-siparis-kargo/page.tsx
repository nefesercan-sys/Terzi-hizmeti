import { resimFiyat } from '@/lib/meta-fit';
import OzelSiparisSayfasi, { ozelMetadata } from '@/components/OzelSiparisSayfasi';

const base = ozelMetadata('tr');
export const metadata = { ...base, description: resimFiyat(String(base.description ?? '')) };
export default function Page() {
  return <OzelSiparisSayfasi lang="tr" />;
}
