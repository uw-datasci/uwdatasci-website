import { getDataOnce } from '../lib/firebase';
import SEO from '../components/other/SEO';
import ResourcesCarousel from '../components/sections/ResourcesCarousel';
import Podcast from '../components/sections/Podcast';
import RecordingsCarousel from '../components/sections/RecordingsCarousel';
import Footer from '../components/navigation/Footer';

export default function Resources({ resources, recordings }) {
  return (
    <>
      <SEO title="Resources | UWaterloo Data Science Club" description="Want to learn more about Data Science? Take a look at our resources here." keywords=""/>
      <h1 className="mb-6 text-center md:mb-0">
        <span className="h1">Resources</span>
      </h1>
      <ResourcesCarousel fetchedResources={resources} />
      {/* <Podcast /> */}
      <RecordingsCarousel fetchedRecordings={recordings} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const resources = await getDataOnce('resources');
  const recordings = await getDataOnce('recordings');

  return {
    props: {
      resources,
      recordings,
    },
    revalidate: 1,
  };
}
