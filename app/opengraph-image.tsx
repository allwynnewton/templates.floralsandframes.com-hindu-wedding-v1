import { ImageResponse } from 'next/og';
import { creator, hinduCouple, hinduWedding } from '@/lib/hindu-site';

// The link-preview card shown when the site is shared (WhatsApp, iMessage, FB…).
export const alt = `${hinduCouple.groom} & ${hinduCouple.bride} — ${hinduWedding.dateLabel}, ${hinduWedding.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const marigolds = Array.from({ length: 24 });

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'radial-gradient(circle at 50% 45%, #1f5a48 0%, #103a2f 55%, #07201a 100%)',
        color: '#fcf7ec',
        fontFamily: 'serif',
      }}
    >
      {/* marigold toran */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#c3a060', display: 'flex' }} />
      <div style={{ position: 'absolute', top: 6, left: 20, right: 20, display: 'flex', justifyContent: 'space-between' }}>
        {marigolds.map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {Array.from({ length: i % 2 ? 3 : 5 }).map((__, j) => (
              <div key={j} style={{ width: 16, height: 16, borderRadius: 8, marginTop: 2, background: j % 2 ? '#f0a830' : '#d9702a' }} />
            ))}
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', inset: 36, border: '1px solid rgba(228,207,156,0.45)', display: 'flex' }} />

      <div style={{ fontSize: 24, letterSpacing: 12, textTransform: 'uppercase', color: '#e4cf9c', marginTop: 60 }}>
        Together with their families
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
        <span style={{ fontSize: 124 }}>{hinduCouple.groom}</span>
        <span style={{ fontSize: 80, color: '#f0a830', margin: '0 34px', fontStyle: 'italic' }}>&</span>
        <span style={{ fontSize: 124 }}>{hinduCouple.bride}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '30px 0' }}>
        <div style={{ width: 120, height: 1, background: '#c3a060' }} />
        <div style={{ width: 12, height: 12, background: '#c3a060', transform: 'rotate(45deg)', margin: '0 18px' }} />
        <div style={{ width: 120, height: 1, background: '#c3a060' }} />
      </div>
      <div style={{ fontSize: 38, letterSpacing: 10, color: '#e4cf9c', textTransform: 'uppercase' }}>{hinduWedding.dateLabel}</div>
      <div style={{ fontSize: 22, letterSpacing: 8, textTransform: 'uppercase', color: 'rgba(252,247,236,0.65)', marginTop: 14 }}>
        {hinduWedding.city}
      </div>
      <div style={{ fontSize: 16, letterSpacing: 6, textTransform: 'uppercase', color: 'rgba(228,207,156,0.6)', marginTop: 40 }}>
        {creator.brand}
      </div>
    </div>,
    { ...size },
  );
}
