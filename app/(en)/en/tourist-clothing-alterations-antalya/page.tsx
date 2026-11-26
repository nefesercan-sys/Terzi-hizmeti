import { photoPrice } from '@/lib/meta-fit';
import { TuristExpress } from '@/components/TuristKeten';
import { expressMetadata } from '@/lib/turist-keten';

const baseMeta = expressMetadata('en');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'en') };
export default function Page() {
  return <TuristExpress lang="en" />;
}
