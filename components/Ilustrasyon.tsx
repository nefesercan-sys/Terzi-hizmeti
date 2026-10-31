// Özgün, telifsiz çizimler (stok fotoğraf yerine). Gerçek atölye fotoğrafları eklenene kadar kullanılır;
// alt metinlerde "çizim" ifadesi geçer, böylece örnek iş gibi sunulmaz.
import type { CSSProperties } from 'react';

export type IlustrasyonTur =
  | 'pantolon' | 'fermuar' | 'elbise' | 'makas' | 'gelinlik' | 'utu' | 'servis' | 'gomlek'
  | 'makine' | 'metre' | 'kumas' | 'canta';

const BG = '#F3ECDD';
const YESIL = '#2C4A3E';
const ALTIN = '#C9A96E';
const KOYU = '#7A5C1E';
const ACIK = '#FBF7EE';

function Cizim({ tur }: { tur: IlustrasyonTur }) {
  switch (tur) {
    case 'pantolon':
      return (
        <g>
          <path d="M235 70h130l24 20-12 150-52 8-23-120-23 120-52-8-12-150z" fill={YESIL} />
          <path d="M300 128v-58" stroke={ACIK} strokeWidth="3" />
          <path d="M240 235h52M308 235h52" stroke={ALTIN} strokeWidth="4" strokeDasharray="7 6" />
          <rect x="215" y="262" width="170" height="26" rx="4" fill={ALTIN} />
          <g stroke={KOYU} strokeWidth="2">{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <path key={i} d={`M${229 + i * 20} 262v${i % 2 ? 10 : 16}`} />)}</g>
        </g>
      );
    case 'fermuar':
      return (
        <g>
          <rect x="250" y="55" width="100" height="290" rx="10" fill={YESIL} />
          <path d="M300 62v270" stroke={ACIK} strokeWidth="3" />
          <g fill={ALTIN}>{Array.from({ length: 12 }).map((_, i) => (
            <g key={i}><rect x="289" y={78 + i * 21} width="9" height="9" rx="1.5" /><rect x="302" y={88 + i * 21} width="9" height="9" rx="1.5" /></g>
          ))}</g>
          <rect x="283" y="140" width="34" height="46" rx="8" fill={ACIK} stroke={KOYU} strokeWidth="3" />
          <circle cx="300" cy="196" r="9" fill="none" stroke={KOYU} strokeWidth="3" />
        </g>
      );
    case 'elbise':
      return (
        <g>
          <path d="M270 55h60l8 40-14 22 36 160H240l36-160-14-22z" fill={YESIL} />
          <path d="M262 117c20 14 56 14 76 0" stroke={ALTIN} strokeWidth="4" fill="none" />
          <path d="M284 55c4 14 28 14 32 0" stroke={ACIK} strokeWidth="3" fill="none" />
          <path d="M400 80c20 40 20 100 0 140" stroke={ALTIN} strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray="2 14" />
        </g>
      );
    case 'makas':
      return (
        <g>
          <path d="M120 120l240 130M120 280l240-130" stroke={YESIL} strokeWidth="14" strokeLinecap="round" />
          <circle cx="122" cy="108" r="30" fill="none" stroke={ALTIN} strokeWidth="10" />
          <circle cx="122" cy="292" r="30" fill="none" stroke={ALTIN} strokeWidth="10" />
          <circle cx="240" cy="200" r="9" fill={KOYU} />
          <path d="M370 90l60 8-30 30z" fill={YESIL} opacity=".35" />
          <path d="M420 220l50-14-6 44z" fill={ALTIN} opacity=".5" />
        </g>
      );
    case 'gelinlik':
      return (
        <g>
          <path d="M280 55h40l6 50-12 16 70 220H216l70-220-12-16z" fill={ACIK} stroke={KOYU} strokeWidth="3" />
          <path d="M276 122c16 12 32 12 48 0" stroke={ALTIN} strokeWidth="4" fill="none" />
          <path d="M250 270c30 14 70 14 100 0M236 310c40 18 88 18 128 0" stroke={ALTIN} strokeWidth="3" fill="none" />
          <g fill={ALTIN}><circle cx="300" cy="150" r="4" /><circle cx="300" cy="172" r="4" /><circle cx="300" cy="194" r="4" /></g>
        </g>
      );
    case 'utu':
      return (
        <g>
          <path d="M150 260c0-70 60-110 150-110h90l50 70v40z" fill={YESIL} />
          <path d="M150 280h290v18H150z" fill={ALTIN} />
          <path d="M300 150c-4-34 20-40 56-40" stroke={ACIK} strokeWidth="14" fill="none" strokeLinecap="round" />
          <g stroke={ALTIN} strokeWidth="5" strokeLinecap="round" fill="none">
            <path d="M200 120c-14-20 14-30 0-52M250 110c-14-20 14-30 0-52M300 110c-14-20 14-30 0-52" opacity=".7" />
          </g>
          <circle cx="230" cy="225" r="7" fill={ACIK} />
        </g>
      );
    case 'servis':
      return (
        <g>
          <path d="M110 250v-82a14 14 0 0 1 14-14h200l66 52h60a14 14 0 0 1 14 14v30z" fill={YESIL} />
          <path d="M338 168l46 36H312v-36z" fill={ACIK} opacity=".85" />
          <rect x="150" y="176" width="130" height="50" rx="6" fill={ACIK} opacity=".85" />
          <path d="M168 200h94" stroke={KOYU} strokeWidth="5" strokeLinecap="round" />
          <circle cx="192" cy="262" r="26" fill={KOYU} /><circle cx="192" cy="262" r="11" fill={ACIK} />
          <circle cx="408" cy="262" r="26" fill={KOYU} /><circle cx="408" cy="262" r="11" fill={ACIK} />
          <path d="M70 296h460" stroke={ALTIN} strokeWidth="4" strokeDasharray="14 10" />
        </g>
      );
    case 'gomlek':
      return (
        <g>
          <path d="M230 72l-90 38 28 64 36-14v158h192V160l36 14 28-64-90-38c-8 24-30 38-70 38s-62-14-70-38z" fill={YESIL} />
          <path d="M300 110v206" stroke={ACIK} strokeWidth="3" />
          <g fill={ACIK}>{[140, 180, 220, 260, 300].map((y) => <circle key={y} cx="300" cy={y} r="4" />)}</g>
          <rect x="332" y="150" width="36" height="28" rx="3" fill="none" stroke={ALTIN} strokeWidth="4" />
        </g>
      );
    case 'makine':
      return (
        <g>
          <path d="M150 280V120h210a40 40 0 0 1 40 40v34h-70v-20h-60v146z" fill={YESIL} />
          <rect x="130" y="276" width="330" height="22" rx="6" fill={KOYU} />
          <rect x="252" y="196" width="20" height="82" fill={ALTIN} />
          <path d="M262 278v18" stroke={ACIK} strokeWidth="4" />
          <circle cx="200" cy="170" r="22" fill={ACIK} /><circle cx="200" cy="170" r="8" fill={KOYU} />
          <circle cx="410" cy="150" r="22" fill={ALTIN} />
          <path d="M432 150h30v60" stroke={ALTIN} strokeWidth="5" fill="none" />
        </g>
      );
    case 'metre':
      return (
        <g>
          <path d="M80 300c120-140 280-140 440 0" stroke={ALTIN} strokeWidth="46" fill="none" />
          <g stroke={KOYU} strokeWidth="3">{Array.from({ length: 18 }).map((_, i) => {
            const t = i / 17; const x = 80 + t * 440; const y = 300 - Math.sin(t * Math.PI) * 140 * 0.98;
            return <path key={i} d={`M${x} ${y - 14}v${i % 5 === 0 ? 20 : 10}`} />;
          })}</g>
          <circle cx="300" cy="150" r="30" fill={YESIL} /><path d="M284 190l16 90 16-90z" fill={YESIL} />
        </g>
      );
    case 'kumas':
      return (
        <g>
          <rect x="130" y="130" width="120" height="170" rx="14" fill={YESIL} />
          <ellipse cx="190" cy="130" rx="60" ry="16" fill={ACIK} stroke={KOYU} strokeWidth="3" />
          <rect x="260" y="110" width="120" height="190" rx="14" fill={ALTIN} />
          <ellipse cx="320" cy="110" rx="60" ry="16" fill={ACIK} stroke={KOYU} strokeWidth="3" />
          <rect x="390" y="150" width="100" height="150" rx="14" fill={KOYU} />
          <ellipse cx="440" cy="150" rx="50" ry="14" fill={ACIK} stroke={YESIL} strokeWidth="3" />
          <path d="M120 310h380" stroke={YESIL} strokeWidth="6" />
        </g>
      );
    case 'canta':
      return (
        <g>
          <path d="M250 150c0-60 100-60 100 0" stroke={KOYU} strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M215 150h170l16 160H199z" fill={ACIK} stroke={KOYU} strokeWidth="4" />
          <circle cx="300" cy="228" r="34" fill="none" stroke={YESIL} strokeWidth="6" />
          <path d="M282 228l12 12 24-26" stroke={YESIL} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M199 310h202" stroke={ALTIN} strokeWidth="6" />
        </g>
      );
  }
}

export default function Ilustrasyon({ tur, etiket, className, style }: { tur: IlustrasyonTur; etiket: string; className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 600 400"
      role="img"
      aria-label={etiket}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{etiket}</title>
      <rect width="600" height="400" fill={BG} />
      <circle cx="90" cy="60" r="150" fill={ALTIN} opacity=".13" />
      <circle cx="540" cy="360" r="170" fill={YESIL} opacity=".08" />
      <Cizim tur={tur} />
    </svg>
  );
}
