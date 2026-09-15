'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// DÜZELTME: Next.js App Router'da <html> etiketi yalnızca kök layout
// tarafından render edilebildiği için, tek bir sabit lang="tr" TÜM
// rotalara (dahil /de, /en, /ru) uygulanıyordu. Bu bileşen, geçerli
// yola göre document.documentElement.lang değerini istemci tarafında
// düzeltir — arama motorları ve tarayıcı çeviri önerileri için doğru
// dil sinyali sağlar.
export default function LangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    let lang = 'tr';
    if (pathname?.startsWith('/de')) lang = 'de';
    else if (pathname?.startsWith('/en')) lang = 'en';
    else if (pathname?.startsWith('/ru')) lang = 'ru';
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
