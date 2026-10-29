import type { ReactNode } from 'react';
import RootShell, { rootMetadata, rootViewport } from '@/components/RootShell';
import { ILANGS, INTL, isILang, type ILang } from '@/lib/intl';

export const metadata = rootMetadata;
export const viewport = rootViewport;
export const dynamicParams = false;
export function generateStaticParams() {
  return ILANGS.map((lang) => ({ lang }));
}

export default async function Layout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l: ILang = isILang(lang) ? lang : 'es'; // geçersiz dil yalnızca 404'te görülür
  return <RootShell lang={l} dir={INTL[l].dir}>{children}</RootShell>;
}
