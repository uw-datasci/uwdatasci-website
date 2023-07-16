import { getDataOnce } from '../lib/firebase';
import SEO from '../components/other/SEO';
import ResourcesCarousel from '../components/sections/ResourcesCarousel';
import Podcast from '../components/sections/Podcast';
import RecordingsCarousel from '../components/sections/RecordingsCarousel';
import Footer from '../components/navigation/Footer';

export default function Resources({ resources, recordings }) {
  return (
    <>
      <SEO
        title='Resources | UWaterloo Data Science Club'
        description='Want to learn more about Data Science? Take a look at our resources here.'
        keywords=''
      />
      <h1 className='mb-6 text-center md:mb-0'>
        <span className='h1'>Resources</span>
      </h1>
      <ResourcesCarousel resources={resources} />
      {/* <Podcast /> */}
      <RecordingsCarousel recordings={recordings} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const resources = await getDataOnce('resources');
  const recordings = await getDataOnce('rerecording');

  return {
    props: {
      resources,
      recordings,
    },
  };
}
