'use client';
import { useEffect, useState } from 'react';
import { hinduCouple, hinduWedding } from '@/lib/hindu-site';
import { useMusic } from '@/components/audio/MusicProvider';
import { prefersReducedMotion } from '@/lib/gsap';
import { LotusRule, Mandala, Toran } from './Ornaments';

/**
 * Opening invitation — two jaali doors meeting over a split mandala. Choosing
 * music (or quiet) starts audio inside the click, then the doors part using
 * transform-only CSS transitions (cheap on older Android GPUs).
 */
export default function HinduEntryGate() {
  const { enter } = useMusic();
  const [phase, setPhase] = useState<'closed' | 'opening' | 'gone'>('closed');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('h-locked', phase === 'closed');
    return () => root.classList.remove('h-locked');
  }, [phase]);

  const choose = (withMusic: boolean) => {
    enter(withMusic);
    setPhase('opening');
    window.setTimeout(() => setPhase('gone'), prefersReducedMotion() ? 450 : 1700);
  };

  if (phase === 'gone') return null;

  return (
    <div className={`h-gate ${phase === 'opening' ? 'is-opening' : ''}`} role="dialog" aria-modal="true" aria-labelledby="h-gate-title">
      <div className="h-gate__door h-gate__door--l" aria-hidden>
        <Mandala className="h-gate__door-mandala" />
      </div>
      <div className="h-gate__door h-gate__door--r" aria-hidden>
        <Mandala className="h-gate__door-mandala" />
      </div>
      <Toran className="h-gate__toran" count={21} />

      <div className="h-gate__card">
        <p className="h-deva h-gate__ganesh" lang="hi">॥ श्री गणेशाय नमः ॥</p>
        <LotusRule className="h-gate__lotus" />
        <p className="h-kicker">An invitation from our hearts</p>
        <h1 id="h-gate-title">
          {hinduCouple.groom} <span className="h-amp">&amp;</span> {hinduCouple.bride}
        </h1>
        <p className="h-gate__copy">request the joy of your presence as they begin their forever</p>
        <p className="h-gate__date">
          {hinduWedding.dateLabel}
          <span>{hinduWedding.city}</span>
        </p>
        <div className="h-gate__actions">
          <button type="button" onClick={() => choose(true)} className="h-btn h-btn--gold">
            Open with music <span aria-hidden>♪</span>
          </button>
          <button type="button" onClick={() => choose(false)} className="h-text-btn">
            Enter quietly
          </button>
        </div>
      </div>
    </div>
  );
}
