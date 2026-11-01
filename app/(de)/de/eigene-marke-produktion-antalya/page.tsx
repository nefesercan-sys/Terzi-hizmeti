import UretimLanding from '@/components/UretimLanding';
import { uMetadata } from '@/lib/uretim';

export const metadata = uMetadata('de', 'marka');
export default function Page() { return <UretimLanding lang="de" id="marka" />; }
