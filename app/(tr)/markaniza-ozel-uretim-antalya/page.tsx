import UretimLanding from '@/components/UretimLanding';
import { uMetadata } from '@/lib/uretim';

export const metadata = uMetadata('tr', 'marka');
export default function Page() { return <UretimLanding lang="tr" id="marka" />; }
