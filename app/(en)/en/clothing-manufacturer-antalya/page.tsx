import UretimLanding from '@/components/UretimLanding';
import { uMetadata } from '@/lib/uretim';

export const metadata = uMetadata('en', 'uretici');
export default function Page() { return <UretimLanding lang="en" id="uretici" />; }
