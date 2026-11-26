import { photoPrice } from '@/lib/meta-fit';
import { TuristHub } from '@/components/TuristKeten';
import { hubMetadata } from '@/lib/turist-keten';

const baseMeta = hubMetadata('ru');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'ru') };
export default function Page() {
  return <TuristHub lang="ru" />;
}
