import Landing from '../components/sections/Landing';
import EventsCarousel from '../components/sections/EventsCarousel';
import ResourcesCarousel from '../components/sections/ResourcesCarousel';

export default function Home() {
  return (
    <>
      <Landing />
      <EventsCarousel showTitle={true} />
      <ResourcesCarousel showTitle={true} />
    </>
  );
}
