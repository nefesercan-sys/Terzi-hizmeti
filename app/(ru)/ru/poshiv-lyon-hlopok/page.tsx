import { TuristHub } from '@/components/TuristKeten';
import { hubMetadata } from '@/lib/turist-keten';

export const metadata = hubMetadata('ru');

export default function Page() {
  return <TuristHub lang="ru" />;
}
