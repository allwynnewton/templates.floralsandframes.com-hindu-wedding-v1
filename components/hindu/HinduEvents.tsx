import Reveal from '@/components/Reveal';
import { hinduEvents } from '@/lib/hindu-site';
import { EventEmblem, LotusRule } from './Ornaments';

export default function HinduEvents() {
  return (
    <section className="h-events" id="celebrations">
      <Reveal className="h-events__header">
        <p className="h-kicker">Three days · a thousand memories</p>
        <h2>
          Come for the rituals.
          <br />
          <em>Stay for the joy.</em>
        </h2>
        <LotusRule />
      </Reveal>
      <div className="h-events__grid">
        {hinduEvents.map((event, index) => (
          <Reveal as="article" key={event.key} className={`h-event h-event--${event.key}`} delay={index * 0.08}>
            <div className="h-event__crown">
              <EventEmblem kind={event.key} />
            </div>
            <span className="h-event__num">{event.number}</span>
            <h3>{event.name}</h3>
            <p className="h-event__note">{event.note}</p>
            <dl className="h-event__meta">
              <div>
                <dt>When</dt>
                <dd>
                  {event.day}
                  <br />
                  {event.time}
                </dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>{event.venue}</dd>
              </div>
            </dl>
            <p className="h-event__dress">
              <span>Dress code</span>
              {event.dress}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
