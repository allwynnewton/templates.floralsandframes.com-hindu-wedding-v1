'use client';
import { useEffect } from 'react';
import HinduEntryGate from './HinduEntryGate';
import HinduHero from './HinduHero';
import HinduCouple from './HinduCouple';
import HinduEvents from './HinduEvents';
import HinduMandap from './HinduMandap';
import HinduVenue from './HinduVenue';
import HinduCountdown from './HinduCountdown';
import HinduClosing from './HinduClosing';
import MusicToggle from '@/components/audio/MusicToggle';
import VolumeAutomation from '@/components/audio/VolumeAutomation';

type LiteNavigator = Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };

export default function HinduExperience() {
  // Low-power devices (older Android, data-saver) skip the ambient loops —
  // swaying garlands, flame flicker, slow mandala spin. Layout is unchanged.
  useEffect(() => {
    const nav = navigator as LiteNavigator;
    const lowMemory = (nav.deviceMemory ?? 8) < 4;
    const fewCores = (nav.hardwareConcurrency ?? 8) <= 4;
    if (lowMemory || fewCores || nav.connection?.saveData) {
      document.documentElement.classList.add('h-lite');
    }
  }, []);

  return (
    <>
      <HinduEntryGate />
      <main className="h-site">
        <HinduHero />
        <HinduCouple />
        <HinduEvents />
        <HinduMandap />
        <HinduVenue />
        <HinduCountdown />
      </main>
      <HinduClosing />
      <MusicToggle />
      <VolumeAutomation />
    </>
  );
}
