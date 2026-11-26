import { photoPrice } from '@/lib/meta-fit';
import SssMerkezi, { sssMetadata } from '@/components/SssMerkezi';

const baseMeta = sssMetadata('ru');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'ru') };
export default function Page() {
  return <SssMerkezi lang="ru" />;
}
