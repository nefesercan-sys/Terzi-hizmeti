// Kısa "kargoyla da yaptırabilirsiniz" cümlesi — yalnızca tamir/tadilat işinin KENDİ sayfasında, sayfa başına tek kez.
// İş adı parametre, iki cümle varyantından biri iş adına göre seçilir (sayfalar arası birebir kopya olmasın). Fiyat yok.
import { KARGO_KISA, type KFLang } from '@/lib/kargo-fermuar';
import { kargoUrl } from '@/lib/kargo-terzi';

export default function KargoKisa({ lang, work }: { lang: KFLang; work: string }) {
  const k = KARGO_KISA[lang];
  let h = 0;
  for (let i = 0; i < work.length; i++) h = (h * 31 + work.charCodeAt(i)) >>> 0;
  const text = k.v[h % 2].replace('{w}', work);
  const rtl = lang === 'ar';
  return (
    <div lang={lang} dir={rtl ? 'rtl' : 'ltr'} style={{ maxWidth: 820, margin: '1.2rem auto', padding: '0 1.25rem', color: 'inherit', fontSize: '.92rem', lineHeight: 1.65 }}>
      <p style={{ margin: 0 }}>
        📦 {text}{' '}
        <a href={kargoUrl(lang)} style={{ color: 'inherit', fontWeight: 700, textDecoration: 'underline' }}>{k.link} →</a>
      </p>
    </div>
  );
}
