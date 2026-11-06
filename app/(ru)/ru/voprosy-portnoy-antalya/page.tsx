import SssMerkezi, { sssMetadata } from '@/components/SssMerkezi';

export const metadata = sssMetadata('ru');

export default function Page() {
  return <SssMerkezi lang="ru" />;
}
