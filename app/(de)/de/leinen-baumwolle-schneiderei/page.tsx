import { photoPrice } from '@/lib/meta-fit';
import { TuristHub } from '@/components/TuristKeten';
import { hubMetadata } from '@/lib/turist-keten';

const baseMeta = hubMetadata('de');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'de') };
export default function Page() {
  return <TuristHub lang="de" />;
}
