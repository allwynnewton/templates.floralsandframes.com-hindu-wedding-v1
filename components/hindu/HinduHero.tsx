'use client';
import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { useMusic } from '@/components/audio/MusicProvider';
import { hinduCouple, hinduWedding } from '@/lib/hindu-site';
import { LotusRule, Mandala, Toran } from './Ornaments';

export default function HinduHero() {
  const root = useRef<HTMLElement>(null);
  const { hasEntered } = useMusic();

  // The hero sits behind the gate; its intro plays as the doors part.
  useGSAP(
    () => {
      if (!hasEntered || prefersReducedMotion()) return;
      gsap
        .timeline({ defaults: { ease: 'power3.out' }, delay: 0.45 })
        .from('.h-hero__mandala', { autoAlpha: 0, scale: 0.86, duration: 1.8 })
        .from('.h-hero__reveal', { autoAlpha: 0, y: 22, stagger: 0.1, duration: 1.1 }, '-=1.45');
    },
    { scope: root, dependencies: [hasEntered] },
  );

  return (
    <section ref={root} className="h-hero" id="top">
      <div className="h-hero__frame" aria-hidden />
      <Toran className="h-hero__toran" count={25} />
      <Mandala className="h-hero__mandala" />

      <div className="h-hero__inner">
        <p className="h-deva h-hero__shubh h-hero__reveal" lang="hi">॥ शुभ विवाह ॥</p>
        <p className="h-kicker h-hero__reveal">{hinduCouple.familyLine}</p>
        <h1 className="h-hero__names h-hero__reveal">
          <span>{hinduCouple.groom}</span>
          <span className="h-amp">&amp;</span>
          <span>{hinduCouple.bride}</span>
        </h1>
        <p className="h-hero__invite h-hero__reveal">invite you to celebrate the beginning of their forever</p>
        <div className="h-hero__cartouche h-hero__reveal">
          <span>{hinduWedding.dayLong.split(',')[0]}</span>
          <strong>{hinduWedding.dateLabel}</strong>
          <span>{hinduWedding.city}</span>
        </div>
        <LotusRule className="h-hero__reveal" />
      </div>

      <a href="#couple" className="h-scroll-cue h-hero__reveal">
        <span aria-hidden />
        Scroll to celebrate with us
      </a>
    </section>
  );
}
