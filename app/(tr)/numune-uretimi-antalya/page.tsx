import UretimLanding from '@/components/UretimLanding';
import { uMetadata } from '@/lib/uretim';

export const metadata = uMetadata('tr', 'numune');
export default function Page() { return <UretimLanding lang="tr" id="numune" />; }
