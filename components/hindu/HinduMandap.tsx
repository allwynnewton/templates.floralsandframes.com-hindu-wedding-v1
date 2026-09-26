'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { hinduCouple, saptapadi } from '@/lib/hindu-site';
import { MandapIllustration } from './Ornaments';

export default function HinduMandap() {
  const root = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.h-mandap__svg', {
          autoAlpha: 0,
          y: 40,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        });
        gsap.from('.h-mandap__intro > *', {
          autoAlpha: 0,
          y: 24,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.h-mandap__intro', start: 'top 80%' },
        });
        gsap.from('.h-saptapadi li', {
          autoAlpha: 0,
          x: -18,
          stagger: 0.09,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.h-saptapadi', start: 'top 78%' },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="h-mandap" id="ceremony" data-music-vol="0.26">
      <div className="h-mandap__visual">
        <MandapIllustration className="h-mandap__svg" />
      </div>
      <div className="h-mandap__content">
        <div className="h-mandap__intro">
          <p className="h-kicker">The sacred ceremony · Saptapadi</p>
          <h2>
            Seven steps.
            <br />
            <em>Seven promises.</em>
          </h2>
          <p className="h-mandap__lead">
            Around the sacred fire, {hinduCouple.groom} and {hinduCouple.bride} will take seven steps together—each one a promise, witnessed by
            Agni, their families and you.
          </p>
        </div>
        <ol className="h-saptapadi">
          {saptapadi.map((step, i) => (
            <li key={step.vow}>
              <span className="h-saptapadi__num">{i + 1}</span>
              <div>
                <h3>{step.vow}</h3>
                <p>{step.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
