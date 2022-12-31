import Landing from '../components/sections/Landing';
import EventsCarousel from '../components/sections/EventsCarousel';
import ResourcesCarousel from '../components/sections/ResourcesCarousel';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Landing />
      <EventsCarousel showTitle={true} />
      <ResourcesCarousel showTitle={true} />
      <About />
      <Contact />
    </>
  );
}
