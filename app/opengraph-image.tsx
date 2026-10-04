import { ImageResponse } from 'next/og';
import { creator, hinduCouple, hinduWedding } from '@/lib/hindu-site';

// The link-preview card shown when the site is shared (WhatsApp, iMessage, FB…).
// Drawn as a sealed envelope so the chat bubble reads like a posted invitation;
// the site then opens on the same envelope. Seal and names stay in the centre
// square because WhatsApp often crops the preview to a small square thumbnail.
export const alt = `A sealed wedding invitation from ${hinduCouple.groom} & ${hinduCouple.bride} — ${hinduWedding.dateLabel}, ${hinduWedding.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const marigolds = Array.from({ length: 24 });
const ENV = { w: 600, h: 400, top: 168 };
const GOLD = '#c3a060';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        background: 'radial-gradient(circle at 50% 55%, #1f5a48 0%, #103a2f 50%, #07201a 100%)',
        color: '#fcf7ec',
        fontFamily: 'serif',
      }}
    >
      {/* marigold toran */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: GOLD, display: 'flex' }} />
      <div style={{ position: 'absolute', top: 6, left: 20, right: 20, display: 'flex', justifyContent: 'space-between' }}>
        {marigolds.map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {Array.from({ length: i % 2 ? 3 : 5 }).map((__, j) => (
              <div key={j} style={{ width: 16, height: 16, borderRadius: 8, marginTop: 2, background: j % 2 ? '#f0a830' : '#d9702a' }} />
            ))}
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', top: 116, fontSize: 22, letterSpacing: 10, textTransform: 'uppercase', color: '#e4cf9c', display: 'flex' }}>
        An invitation for you
      </div>

      {/* envelope */}
      <div style={{ position: 'absolute', top: ENV.top, left: (1200 - ENV.w) / 2, width: ENV.w, height: ENV.h, display: 'flex', boxShadow: '0 40px 80px -30px rgba(0,0,0,0.7)' }}>
        <svg width={ENV.w} height={ENV.h} viewBox="0 0 600 400">
          <rect x="0" y="0" width="600" height="400" rx="10" fill="#0b2a22" />
          <path d="M0 0 L290 214 L0 400 Z" fill="#103a2f" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1.5" />
          <path d="M600 0 L310 214 L600 400 Z" fill="#103a2f" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1.5" />
          <path d="M0 400 L300 186 L600 400 Z" fill="#17493b" stroke={GOLD} strokeOpacity="0.7" strokeWidth="1.5" />
          <path d="M0 0 H600 L324 218 Q300 236 276 218 Z" fill="#1f5a48" stroke={GOLD} strokeWidth="2" />
          <path d="M22 0 H578 L318 206 Q300 220 282 206 Z" fill="none" stroke={GOLD} strokeOpacity="0.35" strokeWidth="1" />
          <rect x="1" y="1" width="598" height="398" rx="10" fill="none" stroke={GOLD} strokeWidth="2" />
        </svg>
      </div>

      {/* wax seal at the flap tip */}
      <div
        style={{
          position: 'absolute',
          top: ENV.top + 226 - 60,
          left: 600 - 60,
          width: 120,
          height: 120,
          borderRadius: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 38% 32%, #c4493f 0%, #9e2f2a 48%, #6e1c18 100%)',
          border: '5px solid #7e211c',
          boxShadow: '0 10px 24px rgba(0,0,0,0.45)',
        }}
      >
        <div style={{ width: 88, height: 88, borderRadius: 44, border: '2px solid rgba(228,207,156,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e4cf9c', fontSize: 34, fontStyle: 'italic' }}>
          {hinduCouple.groom[0]}&amp;{hinduCouple.bride[0]}
        </div>
      </div>

      {/* addressed to the guest, from the couple */}
      <div style={{ position: 'absolute', top: ENV.top + 300, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 50, color: '#fcf7ec' }}>
          <span>{hinduCouple.groom}</span>
          <span style={{ fontSize: 36, color: '#f0a830', margin: '0 18px', fontStyle: 'italic' }}>&amp;</span>
          <span>{hinduCouple.bride}</span>
        </div>
        <div style={{ fontSize: 18, letterSpacing: 8, textTransform: 'uppercase', color: '#e4cf9c', marginTop: 8 }}>{hinduWedding.dateLabel}</div>
      </div>

      <div style={{ position: 'absolute', bottom: 22, fontSize: 15, letterSpacing: 6, textTransform: 'uppercase', color: 'rgba(228,207,156,0.6)', display: 'flex' }}>
        Tap to open · {creator.brand}
      </div>
    </div>,
    { ...size },
  );
}
