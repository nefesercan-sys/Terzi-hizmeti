import KargoSayfasi, { kargoMetadata } from '@/components/KargoSayfasi';

export const metadata = kargoMetadata('de');
export default function Page() {
  return <KargoSayfasi lang="de" />;
}
