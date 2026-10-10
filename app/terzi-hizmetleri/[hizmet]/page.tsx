import { notFound } from 'next/navigation';
import { SERVICES, findServiceBySlug } from '@/lib/seo-data';
import { ServicePage, serviceMetadata } from '@/components/SeoLanding';

export const dynamicParams = false;
export function generateStaticParams() {
  return SERVICES.map((s) => ({ hizmet: s.slug.tr }));
}
export async function generateMetadata({ params }: { params: Promise<{ hizmet: string }> }) {
  const { hizmet } = await params;
  const s = findServiceBySlug('tr', hizmet);
  return s ? serviceMetadata('tr', s) : {};
}
export default async function Page({ params }: { params: Promise<{ hizmet: string }> }) {
  const { hizmet } = await params;
  const s = findServiceBySlug('tr', hizmet);
  if (!s) notFound();
  return <ServicePage lang="tr" s={s} />;
}
