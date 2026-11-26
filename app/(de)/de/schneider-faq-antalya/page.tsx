import { photoPrice } from '@/lib/meta-fit';
import SssMerkezi, { sssMetadata } from '@/components/SssMerkezi';

const baseMeta = sssMetadata('de');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'de') };
export default function Page() {
  return <SssMerkezi lang="de" />;
}
