import Carousel from '../UI/Carousel';
import PastEventCard from '../cards/PastEventCard';
import ID from '../other/ID';

export default function PastEventsCarousel({ pastEvents }) {
  return (
    pastEvents && (
      <section className='section relative '>
        <ID id='events' />
        <Carousel title='Past Events' gap='mr-6 lg:mr-8'>
          {pastEvents.map((upcomingEvent) => (
            <PastEventCard
              title={upcomingEvent.title}
              image={upcomingEvent.image}
              key={upcomingEvent.title}
            />
          ))}
        </Carousel>
      </section>
    )
  );
}
