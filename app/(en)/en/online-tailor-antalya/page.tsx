import KargoSayfasi, { kargoMetadata } from '@/components/KargoSayfasi';

export const metadata = kargoMetadata('en');
export default function Page() {
  return <KargoSayfasi lang="en" />;
}
