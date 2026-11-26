import { photoPrice } from '@/lib/meta-fit';
import { TuristExpress } from '@/components/TuristKeten';
import { expressMetadata } from '@/lib/turist-keten';

const baseMeta = expressMetadata('de');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'de') };
export default function Page() {
  return <TuristExpress lang="de" />;
}
