import { getDataOnce } from '../lib/firebase';
import SEO from '../components/other/SEO';
import CXCSponsors from '../components/sections/CSCSponsors';
import UpcomingEventsCarousel from '../components/sections/UpcomingEventsCarousel';
import RecordingsCarousel from '../components/sections/RecordingsCarousel';
import PastEventsCarousel from '../components/sections/PastEventsCarousel';
import Footer from '../components/navigation/Footer';

export default function Events({ upcomingEvents, pastEvents, recordings }) {
  return (
    <>
      <SEO
        title='Events | UWaterloo Data Science Club'
        description="Interested in attending UWaterloo Data Science Club's events? Find a list of them here."
        keywords=''
      />
      <h1 className='mb-12 text-center md:mb-16 xl:mb-20'>
        <span className='h1'>Events</span>
      </h1>
      <CXCSponsors />
      <UpcomingEventsCarousel upcomingEvents={upcomingEvents} />
      <RecordingsCarousel recordings={recordings} />
      <PastEventsCarousel pastEvents={pastEvents} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const upcomingEvents = await getDataOnce('upcomingEvents');
  const pastEvents = await getDataOnce('pastEvents');
  const recordings = await getDataOnce('rerecording');

  return {
    props: {
      upcomingEvents,
      pastEvents,
      recordings,
    },
  };
}
