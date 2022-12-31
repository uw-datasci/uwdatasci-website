import EventsCarousel from '../components/sections/EventsCarousel';
import RecordingsCarousel from '../components/sections/RecordingsCarousel';

export default function Events() {
  return (
    <>
      <h1 className="mb-6 text-center md:mb-0">
        <span className="h1">Events</span>
      </h1>
      <EventsCarousel showTitle={false} />
      <RecordingsCarousel />
    </>
  );
}
