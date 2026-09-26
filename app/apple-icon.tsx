import { ImageResponse } from 'next/og';

// iOS home-screen icon (rounded automatically by the OS).
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 40%, #1f5a48 0%, #0b2a22 100%)',
        color: '#f0a830',
        fontSize: 118,
        fontFamily: 'serif',
        fontStyle: 'italic',
        border: '6px solid #c3a060',
      }}
    >
      &
    </div>,
    { ...size },
  );
}
