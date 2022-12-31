import EventsCarousel from '../components/sections/EventsCarousel';
import RecordingsCarousel from '../components/sections/RecordingsCarousel';

export default function Events() {
  return (
    <>
      <h1 className="text-center">
        <span className="h1">Events</span>
      </h1>
      <EventsCarousel showTitle={false} />
      <RecordingsCarousel />
    </>
  );
}
