import { photoPrice } from '@/lib/meta-fit';
import { notFound } from 'next/navigation';
import { TuristProduct } from '@/components/TuristKeten';
import { findProduct, productMetadata, productSlugs } from '@/lib/turist-keten';

export const dynamicParams = false;
export function generateStaticParams() {
  return productSlugs('de').map((urun) => ({ urun }));
}
export async function generateMetadata({ params }: { params: Promise<{ urun: string }> }) {
  const { urun } = await params;
  const p = findProduct('de', urun);
  if (!p) return {};
  const m = productMetadata('de', p);
  return { ...m, description: photoPrice(String(m.description ?? ''), 'de') };
}
export default async function Page({ params }: { params: Promise<{ urun: string }> }) {
  const { urun } = await params;
  const p = findProduct('de', urun);
  if (!p) notFound();
  return <TuristProduct lang="de" p={p} />;
}
