import Carousel from '../UI/Carousel';
import UpcomingEventCard from '../cards/UpcomingEventCard';
import ID from '../other/ID';

export default function UpcomingEventsCarousel({ upcomingEvents }) {
  if (!upcomingEvents || upcomingEvents === 'undefined') return null;
  return (
    <section className='section relative '>
      <ID id='events' />
      <Carousel title='Future Events' gap='mr-6 lg:mr-8'>
        {Object.values(upcomingEvents).map((upcomingEvent) => (
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
  );
}
