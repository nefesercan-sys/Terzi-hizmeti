import { photoPrice } from '@/lib/meta-fit';
import { HubPage, hubMetadata } from '@/components/SeoLanding';

const baseMeta = hubMetadata('en');
export const metadata = { ...baseMeta, description: photoPrice(String(baseMeta.description ?? ''), 'en') };
export default function Page() {
  return <HubPage lang="en" />;
}
