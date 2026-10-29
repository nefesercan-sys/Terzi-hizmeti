import IletisimSayfasi, { iletisimMetadata } from '@/components/IletisimSayfasi';

export const metadata = iletisimMetadata('ru');

export default function Page() {
  return <IletisimSayfasi lang="ru" />;
}
