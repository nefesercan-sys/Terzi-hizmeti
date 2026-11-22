// "Kargoyla fermuar değişimi" notu — yerel hizmet sayfalarında tek satır (sayfanın konusu Antalya'da kalsın).
// Ayrıntılar kargo sayfasında. 10 dil, fiyat yok. Metinler: lib/kargo-fermuar.ts.
import { KARGO_FERMUAR, KARGO_KISA, type KFLang } from '@/lib/kargo-fermuar';
import { kargoUrl } from '@/lib/kargo-terzi';

export type KFVariant = 'abiye' | 'mont' | 'both';

// variant eski çağrılarla uyum için duruyor; kısa notta tüm fermuar türleri tek cümlede geçer.
export default function KargoFermuarKutusu({ lang }: { lang: KFLang; variant?: KFVariant }) {
  const c = KARGO_FERMUAR[lang];
  const rtl = lang === 'ar';
  return (
    <div lang={lang} dir={rtl ? 'rtl' : 'ltr'} style={{ maxWidth: 820, margin: '1.2rem auto', padding: '0 1.25rem', color: 'inherit', fontSize: '.92rem', lineHeight: 1.65 }}>
      <p style={{ margin: 0 }}>
        📦 {c.title}.{' '}
        <a href={kargoUrl(lang)} style={{ color: 'inherit', fontWeight: 700, textDecoration: 'underline' }}>{KARGO_KISA[lang].link} →</a>
      </p>
    </div>
  );
}
