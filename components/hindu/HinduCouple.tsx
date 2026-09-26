import Reveal from '@/components/Reveal';
import { hinduCouple, hinduFamilies, hinduStory } from '@/lib/hindu-site';
import { ArchFrame, LotusRule } from './Ornaments';

type Person = (typeof hinduFamilies)['groom'];

function PersonCard({ role, person, delay }: { role: string; person: Person; delay?: number }) {
  return (
    <Reveal className="h-person" delay={delay}>
      <ArchFrame className="h-person__arch" photo={person.photo || undefined} label={person.fullName} monogram={person.fullName.charAt(0)} />
      <p className="h-kicker h-person__role">{role}</p>
      <h3>{person.fullName}</h3>
      <p className="h-person__relation">{person.relation}</p>
      <p className="h-person__parents">{person.parents}</p>
      <p className="h-person__note">{person.note}</p>
    </Reveal>
  );
}

export default function HinduCouple() {
  return (
    <section className="h-couple" id="couple">
      <Reveal className="h-couple__head">
        <p className="h-kicker">{hinduStory.kicker}</p>
        <h2>
          Two families,
          <br />
          <em>one beautiful beginning.</em>
        </h2>
      </Reveal>

      <div className="h-couple__pair">
        <PersonCard role="The groom" person={hinduFamilies.groom} />
        <div className="h-couple__knot" aria-hidden>
          <span>&amp;</span>
        </div>
        <PersonCard role="The bride" person={hinduFamilies.bride} delay={0.12} />
      </div>

      <Reveal className="h-couple__story">
        <LotusRule />
        <h3>
          {hinduStory.title} <em>{hinduStory.titleAccent}</em>
        </h3>
        {hinduStory.copy.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="h-couple__sign">
          — {hinduCouple.groom} &amp; {hinduCouple.bride}
        </p>
      </Reveal>
    </section>
  );
}
