import { resimFiyat } from '@/lib/meta-fit';
import SssMerkezi, { sssMetadata } from '@/components/SssMerkezi';

const base = sssMetadata('tr');
export const metadata = { ...base, description: resimFiyat(String(base.description ?? '')) };

export default function Page() {
  return <SssMerkezi lang="tr" />;
}
