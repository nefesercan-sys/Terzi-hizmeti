import UretimLanding from '@/components/UretimLanding';
import { uMetadata } from '@/lib/uretim';

export const metadata = uMetadata('ru', 'uretici');
export default function Page() { return <UretimLanding lang="ru" id="uretici" />; }
