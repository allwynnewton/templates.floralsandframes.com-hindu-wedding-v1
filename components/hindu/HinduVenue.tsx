import Reveal from '@/components/Reveal';
import { hinduCalendarUrl, hinduEvents, hinduWedding } from '@/lib/hindu-site';
import { ChhatriSkyline, LotusRule } from './Ornaments';

export default function HinduVenue() {
  return (
    <section className="h-venue" id="venue">
      <div className="h-venue__grid">
        <Reveal className="h-venue__card">
          <p className="h-kicker">Meet us in the Pink City</p>
          <h2>{hinduWedding.venue}</h2>
          <p className="h-venue__city">{hinduWedding.city}</p>
          <LotusRule />
          <address>{hinduWedding.address}</address>
          <div className="h-venue__actions">
            <a href={hinduWedding.mapUrl} target="_blank" rel="noreferrer" className="h-btn h-btn--emerald">
              Get directions <span aria-hidden>↗</span>
            </a>
            <a href={hinduCalendarUrl()} target="_blank" rel="noreferrer" className="h-btn">
              Save the date
            </a>
          </div>
        </Reveal>

        <Reveal className="h-itinerary" delay={0.1}>
          <p className="h-kicker">The celebrations at a glance</p>
          <ol>
            {hinduEvents.map((e) => (
              <li key={e.key} className={`h-itinerary__item h-itinerary__item--${e.key}`}>
                <span className="h-itinerary__dot" aria-hidden />
                <p className="h-itinerary__day">{e.day}</p>
                <h3>{e.name}</h3>
                <p className="h-itinerary__detail">
                  {e.time} · {e.venue}
                </p>
              </li>
            ))}
          </ol>
          <p className="h-itinerary__foot">Dinner and celebrations follow the wedding ceremony.</p>
        </Reveal>
      </div>
      <ChhatriSkyline className="h-venue__skyline" />
    </section>
  );
}
