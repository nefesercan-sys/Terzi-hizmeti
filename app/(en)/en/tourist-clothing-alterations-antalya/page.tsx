import { TuristExpress } from '@/components/TuristKeten';
import { expressMetadata } from '@/lib/turist-keten';

export const metadata = expressMetadata('en');

export default function Page() {
  return <TuristExpress lang="en" />;
}
