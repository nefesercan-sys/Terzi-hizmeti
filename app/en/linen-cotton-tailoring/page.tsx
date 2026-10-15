import { TuristHub } from '@/components/TuristKeten';
import { hubMetadata } from '@/lib/turist-keten';

export const metadata = hubMetadata('en');

export default function Page() {
  return <TuristHub lang="en" />;
}
