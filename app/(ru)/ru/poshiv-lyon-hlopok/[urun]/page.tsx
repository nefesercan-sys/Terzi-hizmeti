import { notFound } from 'next/navigation';
import { TuristProduct } from '@/components/TuristKeten';
import { findProduct, productMetadata, productSlugs } from '@/lib/turist-keten';

export const dynamicParams = false;
export function generateStaticParams() {
  return productSlugs('ru').map((urun) => ({ urun }));
}
export async function generateMetadata({ params }: { params: Promise<{ urun: string }> }) {
  const { urun } = await params;
  const p = findProduct('ru', urun);
  return p ? productMetadata('ru', p) : {};
}
export default async function Page({ params }: { params: Promise<{ urun: string }> }) {
  const { urun } = await params;
  const p = findProduct('ru', urun);
  if (!p) notFound();
  return <TuristProduct lang="ru" p={p} />;
}
