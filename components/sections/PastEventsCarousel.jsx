import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../../store/firebase-context';
import Carousel from '../UI/Carousel';
import PastEventCard from '../cards/PastEventCard';
import ID from '../other/ID';

export default function PastEventsCarousel({ fetchedPastEvents }) {
  const firebaseContext = useContext(FirebaseContext);

  const [pastEvents, setPastEvents] = useState(fetchedPastEvents);

  useEffect(() => {
    if (firebaseContext.pastEvents.length !== 0) {
      setPastEvents(firebaseContext.pastEvents);
    }
  }, [firebaseContext.pastEvents]);

  return Array.isArray(pastEvents) && pastEvents.length > 0 ? (
    <section className="section relative ">
      <ID id="events" />
      <Carousel title="Past Events" gap="mr-6 lg:mr-8">
        {pastEvents.map((upcomingEvent) => (
          <PastEventCard
            title={upcomingEvent.title}
            image={upcomingEvent.image}
            key={upcomingEvent.title}
          />
        ))}
      </Carousel>
    </section>
  ) : null;
}
