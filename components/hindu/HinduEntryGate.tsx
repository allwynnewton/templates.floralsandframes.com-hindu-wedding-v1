'use client';
import { useEffect, useRef, useState } from 'react';
import { hinduCouple, hinduWedding } from '@/lib/hindu-site';
import { useMusic } from '@/components/audio/MusicProvider';
import { prefersReducedMotion } from '@/lib/gsap';
import { LotusRule, Toran } from './Ornaments';

type Phase = 'sealed' | 'opening' | 'card' | 'leaving' | 'gone';

/**
 * Opening invitation — the same sealed envelope guests saw in the link
 * preview. Tapping the wax seal lifts the flap and draws the card out; the
 * card then asks for music (audio must start inside a click) and fades away
 * to the site. Transform/opacity-only CSS transitions, cheap on older Android.
 */
export default function HinduEntryGate() {
  const { enter } = useMusic();
  const [phase, setPhase] = useState<Phase>('sealed');
  const primary = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('h-locked', phase !== 'leaving' && phase !== 'gone');
    if (phase === 'card') primary.current?.focus({ preventScroll: true });
    return () => root.classList.remove('h-locked');
  }, [phase]);

  const open = () => {
    if (phase !== 'sealed') return;
    if (prefersReducedMotion()) return setPhase('card');
    setPhase('opening');
    window.setTimeout(() => setPhase('card'), 1700);
  };

  const choose = (withMusic: boolean) => {
    enter(withMusic);
    setPhase('leaving');
    window.setTimeout(() => setPhase('gone'), prefersReducedMotion() ? 450 : 1100);
  };

  if (phase === 'gone') return null;

  const cardShown = phase === 'card' || phase === 'leaving';

  return (
    <div className="h-gate" data-phase={phase} role="dialog" aria-modal="true" aria-labelledby="h-gate-title">
      <div className="h-gate__bg" aria-hidden />
      <Toran className="h-gate__toran" count={21} />

      <div className="h-env-stage" inert={cardShown}>
        <p className="h-deva h-env-stage__ganesh" lang="hi">॥ श्री गणेशाय नमः ॥</p>
        <p className="h-kicker h-env-stage__kicker">An invitation for you</p>

        <div className="h-env">
          <div className="h-env__peek" aria-hidden>
            <span className="h-deva">॥ शुभ विवाह ॥</span>
            <LotusRule />
          </div>
          <svg className="h-env__pocket" viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden>
            <path d="M0 0 L48.5 37.5 L0 70 Z" className="h-env__side" />
            <path d="M100 0 L51.5 37.5 L100 70 Z" className="h-env__side" />
            <path d="M0 70 L50 32.5 L100 70 Z" className="h-env__bottom" />
          </svg>
          <p className="h-env__to" aria-hidden>
            {hinduCouple.groom} <span className="h-amp">&amp;</span> {hinduCouple.bride}
          </p>
          <svg className="h-env__flap" viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden>
            <path d="M0 0 H100 L54 38 Q50 41.5 46 38 Z" />
          </svg>
          <button type="button" className="h-env__seal" onClick={open} aria-label="Open the invitation">
            <span aria-hidden>
              {hinduCouple.groom[0]}
              <i>&amp;</i>
              {hinduCouple.bride[0]}
            </span>
          </button>
        </div>

        <p className="h-env-stage__hint" aria-hidden>Tap the seal to open</p>
      </div>

      <div className="h-gate__card" inert={!cardShown}>
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
          <button ref={primary} type="button" onClick={() => choose(true)} className="h-btn h-btn--gold">
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
