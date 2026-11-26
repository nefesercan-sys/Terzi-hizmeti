import { photoPrice } from '@/lib/meta-fit';
import SssMerkezi, { sssMetadata } from '@/components/SssMerkezi';

const baseMeta = sssMetadata('en');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'en') };
export default function Page() {
  return <SssMerkezi lang="en" />;
}
