import Reveal from '@/components/Reveal';
import { creator, hinduCouple, hinduEnquiryUrl, hinduFamilies } from '@/lib/hindu-site';
import { LotusRule, Mandala, Toran } from './Ornaments';

const surname = (full: string) => full.split(' ').slice(-1)[0];

export default function HinduClosing() {
  return (
    <footer className="h-closing" data-music-vol="0.3">
      <Toran className="h-closing__toran" count={25} />
      <Mandala className="h-closing__rangoli" />
      <Reveal className="h-closing__inner">
        <p className="h-deva h-closing__deva" lang="hi">सादर आमंत्रण</p>
        <p className="h-kicker">With love, laughter &amp; blessings</p>
        <h2>
          Your presence is
          <br />
          <em>our blessing.</em>
        </h2>
        <p className="h-closing__names">
          {hinduCouple.groom} <span className="h-amp">&amp;</span> {hinduCouple.bride}
        </p>
        <p className="h-closing__families">
          With warm regards from the {surname(hinduFamilies.groom.fullName)} &amp; {surname(hinduFamilies.bride.fullName)} families
        </p>
        <LotusRule />
        <p className="h-closing__brand">
          A wedding experience by <strong>{creator.brand}</strong>
        </p>
        <a className="h-btn h-btn--gold" href={hinduEnquiryUrl()} target="_blank" rel="noreferrer">
          Create your invitation <span aria-hidden>↗</span>
        </a>
      </Reveal>
    </footer>
  );
}
