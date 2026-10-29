import { notFound } from 'next/navigation';
import { TuristProduct } from '@/components/TuristKeten';
import { findProduct, productMetadata, productSlugs } from '@/lib/turist-keten';

export const dynamicParams = false;
export function generateStaticParams() {
  return productSlugs('en').map((urun) => ({ urun }));
}
export async function generateMetadata({ params }: { params: Promise<{ urun: string }> }) {
  const { urun } = await params;
  const p = findProduct('en', urun);
  return p ? productMetadata('en', p) : {};
}
export default async function Page({ params }: { params: Promise<{ urun: string }> }) {
  const { urun } = await params;
  const p = findProduct('en', urun);
  if (!p) notFound();
  return <TuristProduct lang="en" p={p} />;
}
