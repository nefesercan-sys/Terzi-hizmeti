import { TuristExpress } from '@/components/TuristKeten';
import { expressMetadata } from '@/lib/turist-keten';

export const metadata = expressMetadata('ru');

export default function Page() {
  return <TuristExpress lang="ru" />;
}
