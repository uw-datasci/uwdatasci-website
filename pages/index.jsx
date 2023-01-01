import Landing from '../components/sections/Landing';
import About from '../components/sections/About';
import Milestones from '../components/sections/Milestones';
import EventsCarousel from '../components/sections/EventsCarousel';
import ResourcesCarousel from '../components/sections/ResourcesCarousel';
import MailingList from '../components/sections/MailingList';
import Contact from '../components/sections/Contact';
import Footer from '../components/navigation/Footer';

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Milestones />
      <EventsCarousel showTitle={true} />
      <ResourcesCarousel showTitle={true} />
      <MailingList />
      <Contact />
      <Footer />
    </>
  );
}
