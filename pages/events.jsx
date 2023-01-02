import { getDataOnce } from '../lib/firebase';
import EventsCarousel from '../components/sections/EventsCarousel';
import RecordingsCarousel from '../components/sections/RecordingsCarousel';
import Footer from '../components/navigation/Footer';
import SEO from '../components/other/SEO';

export default function Events({ events, recordings }) {
  return (
    <>
      <SEO
        title="Events | UWaterloo Data Science Club"
        description="Interested in attending UWaterloo Data Science Club's events? Find a list of them here."
        keywords=""
      />
      <h1 className="mb-6 text-center md:mb-0">
        <span className="h1">Events</span>
      </h1>
      <EventsCarousel showTitle={false} fetchedEvents={events} />
      <RecordingsCarousel fetchedRecordings={recordings} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const events = await getDataOnce('events');
  const recordings = await getDataOnce('recordings');

  return {
    props: {
      events,
      recordings,
    },
    revalidate: 1,
  };
}
