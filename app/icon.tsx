import { ImageResponse } from 'next/og';

// Browser-tab favicon: a marigold ampersand on deep emerald.
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b2a22',
        color: '#f0a830',
        fontSize: 24,
        fontFamily: 'serif',
        fontStyle: 'italic',
      }}
    >
      &
    </div>,
    { ...size },
  );
}
