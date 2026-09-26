import { useId } from 'react';
import type { HinduEventKey } from '@/lib/hindu-site';

/*
 * Hindu ornament library — hand-built inline SVG, no images, no runtime cost
 * beyond the markup. Colours come from CSS (currentColor / class fills), so
 * every piece re-themes from app/hindu.css.
 */

const safeId = (id: string) => id.replace(/[^a-zA-Z0-9_-]/g, '');

/* ---------- Toran: a string of marigold garlands with mango leaves ---------- */
function MarigoldStrand({ flowers }: { flowers: number }) {
  const h = 20 + flowers * 11 + 12;
  return (
    <svg className="h-toran__strand" viewBox={`0 0 20 ${h}`} width="20" height={h} aria-hidden>
      <path d="M10 1C4 5 3 11 5 17C8 12 10 7 10 1Z" className="h-leaf" />
      <path d="M10 1C16 5 17 11 15 17C12 12 10 7 10 1Z" className="h-leaf h-leaf--light" />
      <line x1="10" y1="0" x2="10" y2={h - 8} className="h-thread" />
      {Array.from({ length: flowers }).map((_, i) => (
        <g key={i} className={i % 2 ? 'h-marigold h-marigold--alt' : 'h-marigold'}>
          <circle cx="10" cy={22 + i * 11} r="5.4" />
          <circle cx="10" cy={22 + i * 11} r="2.3" />
        </g>
      ))}
      <path d={`M10 ${h - 9}l3 5-3 4-3-4Z`} className="h-bead" />
    </svg>
  );
}

export function Toran({ count = 19, className = '' }: { count?: number; className?: string }) {
  return (
    <div className={`h-toran ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <MarigoldStrand key={i} flowers={i % 2 ? 3 : 5} />
      ))}
    </div>
  );
}

/* ---------- Mandala / rangoli ---------- */
export function Mandala({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="0.6" aria-hidden>
      <circle r="98" />
      <circle r="93" strokeDasharray="1 3" />
      {Array.from({ length: 24 }).map((_, i) => (
        <path key={`o${i}`} d="M0 -90C6 -80 6 -70 0 -62C-6 -70 -6 -80 0 -90Z" transform={`rotate(${i * 15})`} />
      ))}
      {Array.from({ length: 36 }).map((_, i) => (
        <circle key={`d${i}`} r="1.1" cy="-76" fill="currentColor" stroke="none" transform={`rotate(${i * 10})`} />
      ))}
      <circle r="60" />
      {Array.from({ length: 16 }).map((_, i) => (
        <path key={`m${i}`} d="M0 -58C10 -48 10 -36 0 -28C-10 -36 -10 -48 0 -58Z" transform={`rotate(${i * 22.5})`} />
      ))}
      <circle r="26" />
      <circle r="21" strokeDasharray="2 2" />
      {Array.from({ length: 8 }).map((_, i) => (
        <path key={`i${i}`} d="M0 -18C5 -12 5 -6 0 -2C-5 -6 -5 -12 0 -18Z" transform={`rotate(${i * 45})`} fill="currentColor" fillOpacity=".25" />
      ))}
      <circle r="3" fill="currentColor" />
    </svg>
  );
}

/* ---------- Lotus divider ---------- */
export function LotusRule({ className = '' }: { className?: string }) {
  return (
    <div className={`h-lotus-rule ${className}`} aria-hidden>
      <svg viewBox="0 0 60 30" width="46" height="23">
        <path d="M30 26C20 27 10 24 4 18C14 17 24 20 30 26Z" />
        <path d="M30 26C40 27 50 24 56 18C46 17 36 20 30 26Z" />
        <path d="M30 26C22 24 16 18 14 9C22 11 28 18 30 26Z" />
        <path d="M30 26C38 24 44 18 46 9C38 11 32 18 30 26Z" />
        <path d="M30 3C36 11 36 19 30 26C24 19 24 11 30 3Z" />
        <path d="M17 28.5H43" fill="none" strokeWidth="1" />
      </svg>
    </div>
  );
}

/* ---------- Jharokha arch (ogee window) — frame for portraits & cards ---------- */
const ARCH_OUTER = 'M6 280V118C6 70 52 52 100 10C148 52 194 70 194 118V280Z';
const ARCH_INNER = 'M18 280V122C18 80 60 64 100 28C140 64 182 80 182 122V280Z';

export function ArchFrame({ className = '', photo, label, monogram }: { className?: string; photo?: string; label?: string; monogram?: string }) {
  const id = safeId(useId());
  return (
    <svg
      viewBox="0 -18 200 298"
      className={`h-arch ${className}`}
      role={photo ? 'img' : undefined}
      aria-label={photo ? label : undefined}
      aria-hidden={photo ? undefined : true}
    >
      <defs>
        <clipPath id={`arch-${id}`}>
          <path d={ARCH_INNER} />
        </clipPath>
        <radialGradient id={`archglow-${id}`} cx="50%" cy="40%" r="70%">
          <stop offset="0" className="h-arch__glow-a" />
          <stop offset="1" className="h-arch__glow-b" />
        </radialGradient>
      </defs>
      <path d={ARCH_OUTER} className="h-arch__outer" />
      {photo ? (
        <image href={photo} x="18" y="28" width="164" height="252" preserveAspectRatio="xMidYMid slice" clipPath={`url(#arch-${id})`} />
      ) : (
        <g clipPath={`url(#arch-${id})`}>
          <path d={ARCH_INNER} fill={`url(#archglow-${id})`} />
          <g className="h-arch__mandala" transform="translate(100 150) scale(.62)">
            <Mandala />
          </g>
          {monogram && (
            <text x="100" y="178" textAnchor="middle" className="h-arch__monogram">
              {monogram}
            </text>
          )}
        </g>
      )}
      <path d={ARCH_INNER} className="h-arch__line" />
      <path d="M100 -16V8" className="h-arch__line" />
      <circle cx="100" cy="-4" r="3.5" className="h-arch__finial" />
      <circle cx="100" cy="10" r="2" className="h-arch__finial" />
    </svg>
  );
}

/* ---------- Event emblems ---------- */
export function EventEmblem({ kind, className = '' }: { kind: HinduEventKey; className?: string }) {
  const common = { viewBox: '0 0 64 64', className: `h-emblem ${className}`, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
  if (kind === 'haldi') {
    return (
      <svg {...common}>
        <path d="M9 36H55C55 48 45 56 32 56C19 56 9 48 9 36Z" />
        <path d="M15 36C19 28 45 28 49 36" />
        <path d="M22 56L20 60H44L42 56" />
        <circle cx="32" cy="22" r="6" strokeDasharray="2 1.4" />
        <circle cx="32" cy="22" r="2.2" fill="currentColor" />
        <path d="M26 26C20 25 17 21 17 16C22 17 25 21 26 26Z" />
        <path d="M38 26C44 25 47 21 47 16C42 17 39 21 38 26Z" />
        <path d="M18 44H46M22 49H42" strokeDasharray="1 3" />
      </svg>
    );
  }
  if (kind === 'sangeet') {
    return (
      <svg {...common}>
        <ellipse cx="13" cy="36" rx="5" ry="12" />
        <ellipse cx="51" cy="36" rx="5" ry="12" />
        <path d="M13 24C25 19 39 19 51 24M13 48C25 53 39 53 51 48" />
        <path d="M15 25L22 47L29 25L36 47L43 25L50 47" strokeWidth="1" />
        <path d="M30 14V4L40 2V12" />
        <circle cx="27.5" cy="14" r="2.6" fill="currentColor" />
        <circle cx="37.5" cy="12" r="2.6" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M21 32C12 42 17 57 32 57C47 57 52 42 43 32Z" />
      <path d="M24 26H40V32H24Z" />
      <path d="M20 44H44" strokeDasharray="1 3" />
      <ellipse cx="32" cy="15" rx="6.5" ry="8" />
      <path d="M26 24C20 22 15 17 14 11C20 13 24 18 26 24Z" />
      <path d="M38 24C44 22 49 17 50 11C44 13 40 18 38 24Z" />
      <path d="M29 24C26 19 25 14 27 8" />
      <path d="M35 24C38 19 39 14 37 8" />
      <circle cx="32" cy="44" r="3.2" />
    </svg>
  );
}

/* ---------- Mandap with sacred fire ---------- */
export function MandapIllustration({ className = '' }: { className?: string }) {
  const id = safeId(useId());
  const scallops = Array.from({ length: 14 }).map(() => 'a12.14 12.14 0 0 0 24.28 0').join('');
  return (
    <svg viewBox="0 0 400 440" className={className} aria-hidden>
      <defs>
        <linearGradient id={`pillar-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#8a6a36" />
          <stop offset=".5" stopColor="#ead7a4" />
          <stop offset="1" stopColor="#8f6f38" />
        </linearGradient>
        <linearGradient id={`canopy-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#246550" />
          <stop offset="1" stopColor="#0f3a2e" />
        </linearGradient>
        <radialGradient id={`glow-${id}`}>
          <stop offset="0" stopColor="#ffcf73" stopOpacity=".75" />
          <stop offset=".45" stopColor="#f0a830" stopOpacity=".22" />
          <stop offset="1" stopColor="#f0a830" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="330" r="150" fill={`url(#glow-${id})`} className="h-mandap-svg__glow" />

      {/* rear pillars */}
      <rect x="116" y="170" width="10" height="212" fill={`url(#pillar-${id})`} opacity=".5" />
      <rect x="274" y="170" width="10" height="212" fill={`url(#pillar-${id})`} opacity=".5" />

      {/* platform */}
      <rect x="24" y="396" width="352" height="16" rx="2" fill="#a77c3f" />
      <rect x="44" y="382" width="312" height="14" fill="#d9bb7e" />
      <path d="M44 389H356" stroke="#a77c3f" strokeDasharray="2 6" />

      {/* front pillars */}
      {[56, 344].map((x) => (
        <g key={x}>
          <rect x={x - 11} y="160" width="22" height="222" fill={`url(#pillar-${id})`} />
          <rect x={x - 18} y="152" width="36" height="10" rx="2" fill="#c3a060" />
          <rect x={x - 16} y="370" width="32" height="12" rx="1" fill="#c3a060" />
          <rect x={x - 11} y="200" width="22" height="3" fill="#8a6a36" />
          <rect x={x - 11} y="330" width="22" height="3" fill="#8a6a36" />
          <path d={`M${x} 210V322`} stroke="#8a6a36" strokeWidth="1" strokeDasharray="3 5" />
        </g>
      ))}

      {/* canopy */}
      <path d="M26 160C58 72 140 44 200 36C260 44 342 72 374 160Z" fill={`url(#canopy-${id})`} stroke="#c3a060" strokeWidth="2" />
      <path d="M200 40Q150 92 118 160M200 40Q250 92 282 160M200 40V160" stroke="#c3a060" strokeOpacity=".45" fill="none" />
      <path d="M60 128C120 102 280 102 340 128" stroke="#c3a060" strokeOpacity=".55" strokeDasharray="1 5" strokeLinecap="round" strokeWidth="2.4" fill="none" />
      <path d="M193 30L200 10L207 30Z" fill="#e07a2a" />
      <circle cx="200" cy="32" r="7" fill="#c3a060" />

      {/* scalloped valance */}
      <path d={`M30 158${scallops}Z`} fill="#e07a2a" />
      <path d="M30 160H370" stroke="#f0a830" strokeWidth="3" />

      {/* marigold swags */}
      <path d="M62 176Q200 256 338 176" fill="none" stroke="#e07a2a" strokeWidth="7" strokeDasharray=".1 9" strokeLinecap="round" />
      <path d="M62 176Q200 232 338 176" fill="none" stroke="#f0a830" strokeWidth="6" strokeDasharray=".1 8" strokeLinecap="round" />
      {[92, 130, 270, 308].map((x, i) => (
        <path key={x} d={`M${x} 170V${i % 3 ? 216 : 236}`} stroke={i % 2 ? '#f0a830' : '#e07a2a'} strokeWidth="6" strokeDasharray=".1 8" strokeLinecap="round" />
      ))}

      {/* havan kund */}
      <path d="M158 382L167 352H233L242 382Z" fill="#8c4f27" />
      <rect x="162" y="346" width="76" height="7" rx="1" fill="#c3a060" />
      <path d="M170 368H230" stroke="#c3a060" strokeOpacity=".6" strokeDasharray="4 4" />

      {/* sacred fire */}
      <g className="h-flame">
        <path d="M200 262C216 286 230 300 226 324C223 344 177 344 174 324C170 300 184 286 200 262Z" fill="#e07a2a" />
        <path d="M200 290C210 304 215 314 213 328C211 340 189 340 187 328C185 314 190 304 200 290Z" fill="#f0a830" />
        <path d="M200 312C205 320 206 328 204 336C202 341 198 341 196 336C194 328 195 320 200 312Z" fill="#fff1c9" />
      </g>

      {/* diyas */}
      {[108, 292].map((x) => (
        <g key={x} transform={`translate(${x} 380)`}>
          <path d="M-12 -4C-8 5 8 5 12 -4Z" fill="#b8642d" />
          <path d="M0 -6C3 -10 3 -14 0 -18C-3 -14 -3 -10 0 -6Z" fill="#f0a830" className="h-diya-flame" />
        </g>
      ))}
    </svg>
  );
}

/* ---------- Jaipur chhatri skyline ---------- */
export function ChhatriSkyline({ className = '' }: { className?: string }) {
  const B = 160;
  const chhatri = (x: number, s: number) =>
    `M${x - 34 * s} ${B - 58 * s}Q${x} ${B - 118 * s} ${x + 34 * s} ${B - 58 * s}Z` +
    `M${x - 2 * s} ${B - 88 * s}h${4 * s}v-${16 * s}h-${4 * s}Z` +
    `M${x - 40 * s} ${B - 58 * s}h${80 * s}v${6 * s}h-${80 * s}Z` +
    `M${x - 32 * s} ${B - 52 * s}h${7 * s}V${B}h-${7 * s}Z` +
    `M${x + 25 * s} ${B - 52 * s}h${7 * s}V${B}h-${7 * s}Z` +
    `M${x - 4 * s} ${B - 52 * s}h${8 * s}V${B}h-${8 * s}Z`;
  const d = [
    chhatri(90, 0.7), chhatri(230, 1), chhatri(390, 0.62), chhatri(600, 1.3),
    chhatri(810, 0.62), chhatri(970, 1), chhatri(1110, 0.7),
  ].join('');
  return (
    <svg viewBox="0 0 1200 160" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden>
      <path d={d} fill="currentColor" />
      <path d={`M0 ${B - 22}H1200V${B}H0Z`} fill="currentColor" />
      <path d={`M0 ${B - 30}H1200`} stroke="currentColor" strokeDasharray="10 8" strokeWidth="6" />
    </svg>
  );
}
