import UretimLanding from '@/components/UretimLanding';
import { uMetadata } from '@/lib/uretim';

export const metadata = uMetadata('de', 'gonderim');
export default function Page() { return <UretimLanding lang="de" id="gonderim" />; }
