import ResourcesCarousel from '../components/sections/ResourcesCarousel';
import Podcast from '../components/sections/Podcast';
import RecordingsCarousel from '../components/sections/RecordingsCarousel';
import Footer from '../components/navigation/Footer;';

export default function Resources() {
  return (
    <>
      <h1 className="mb-6 text-center md:mb-0">
        <span className="h1">Resources</span>
      </h1>
      <ResourcesCarousel />
      <Podcast />
      <RecordingsCarousel />
      <Footer />
    </>
  );
}
