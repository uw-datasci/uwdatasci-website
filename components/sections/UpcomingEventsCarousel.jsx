import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../../store/firebase-context';
import Carousel from '../UI/Carousel';
import UpcomingEventCard from '../cards/UpcomingEventCard';
import ID from '../other/ID';

export default function UpcomingEventsCarousel({ fetchedUpcomingEvents }) {
  const firebaseContext = useContext(FirebaseContext);

  const [upcomingEvents, setUpcomingEvents] = useState(fetchedUpcomingEvents);

  useEffect(() => {
    if (firebaseContext.upcomingEvents.length !== 0) {
      setUpcomingEvents(firebaseContext.upcomingEvents);
    }
  }, [firebaseContext.upcomingEvents]);

  return Array.isArray(upcomingEvents) && upcomingEvents.length > 0 ? (
    <section className="section relative ">
      <ID id="events" />
      <Carousel title="Future Events" gap="mr-6 lg:mr-8">
        {upcomingEvents.map((upcomingEvent) => (
          <UpcomingEventCard
            title={upcomingEvent.title}
            description={upcomingEvent.description}
            time={upcomingEvent.time}
            location={upcomingEvent.location}
            signUpLink={upcomingEvent['sign up link']}
            image={upcomingEvent.image}
            key={upcomingEvent.title}
          />
        ))}
      </Carousel>
    </section>
  ) : null;
}
