import type { Metadata, Viewport } from 'next';
import { Jost, Marcellus, Playfair_Display, Tiro_Devanagari_Hindi } from 'next/font/google';
import { hinduCouple, hinduWedding } from '@/lib/hindu-site';
import './hindu.css';

const display = Playfair_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-display', display: 'swap' });
const label = Marcellus({ subsets: ['latin'], weight: '400', variable: '--font-label', display: 'swap' });
const body = Jost({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body', display: 'swap' });
const deva = Tiro_Devanagari_Hindi({ subsets: ['devanagari'], weight: '400', variable: '--font-deva', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://templates2.floralsandframes.com'),
  title: `${hinduCouple.groom} & ${hinduCouple.bride} · ${hinduWedding.dateShort}`,
  description: `${hinduCouple.groom} and ${hinduCouple.bride} invite you to celebrate their wedding in ${hinduWedding.city} — ${hinduWedding.dateLabel}.`,
  openGraph: { title: `${hinduCouple.groom} & ${hinduCouple.bride}`, description: `A celebration of love, family and forever — ${hinduWedding.dateLabel}.`, type: 'website', url: '/', siteName: `${hinduCouple.groom} & ${hinduCouple.bride}` },
};
export const viewport: Viewport = { themeColor: '#0b2a22', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${label.variable} ${body.variable} ${deva.variable}`}>
      <body>{children}</body>
    </html>
  );
}
