import { photoPrice } from '@/lib/meta-fit';
import { TuristHub } from '@/components/TuristKeten';
import { hubMetadata } from '@/lib/turist-keten';

const baseMeta = hubMetadata('en');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'en') };
export default function Page() {
  return <TuristHub lang="en" />;
}
