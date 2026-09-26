'use client';
import { useEffect, useState } from 'react';
import Reveal from '@/components/Reveal';
import { hinduWedding } from '@/lib/hindu-site';

const LABELS = ['Days', 'Hours', 'Minutes', 'Seconds'];

export default function HinduCountdown() {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const target = new Date(hinduWedding.dateISO).getTime();
    const update = () => setRemaining(Math.max(0, target - Date.now()));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = Math.floor((remaining ?? 0) / 1000);
  const vals = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];

  return (
    <section className="h-count" id="countdown" aria-labelledby="h-count-title">
      <Reveal className="h-count__inner">
        <p className="h-kicker">{remaining === 0 ? 'The auspicious hour is here' : 'Counting down to the muhurat'}</p>
        <h2 id="h-count-title">
          {hinduWedding.dayLong}
          <span className="h-count__dot" aria-hidden> · </span>
          <em>{hinduWedding.timeLabel}</em>
        </h2>
        <div className="h-count__units" role="timer" aria-live="off">
          {LABELS.map((label, i) => (
            <div key={label} className="h-count__unit">
              <strong>{remaining === null ? '—' : String(vals[i]).padStart(2, '0')}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
