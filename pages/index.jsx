import { getDataOnce } from '../lib/firebase';
import Landing from '../components/sections/Landing';
import About from '../components/sections/About';
import Milestones from '../components/sections/Milestones';
import EventsCarousel from '../components/sections/EventsCarousel';
import ResourcesCarousel from '../components/sections/ResourcesCarousel';
import MailingList from '../components/sections/MailingList';
import Contact from '../components/sections/Contact';
import Footer from '../components/navigation/Footer';

export default function Home({ events, resources, officeStatus }) {
  return (
    <>
      <Landing />
      <About />
      <Milestones />
      <EventsCarousel showTitle={true} fetchedEvents={events} />
      <ResourcesCarousel showTitle={true} fetchedResources={resources} />
      <MailingList />
      <Contact fetchedOfficeStatus={officeStatus} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const events = await getDataOnce('events');
  const resources = await getDataOnce('resources');
  const officeStatus = await getDataOnce('officeStatus');

  return {
    props: {
      events,
      resources,
      officeStatus,
    },
    revalidate: 1,
  };
}
