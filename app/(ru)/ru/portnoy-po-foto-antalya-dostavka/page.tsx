import KargoSayfasi, { kargoMetadata } from '@/components/KargoSayfasi';

export const metadata = kargoMetadata('ru');
export default function Page() {
  return <KargoSayfasi lang="ru" />;
}
