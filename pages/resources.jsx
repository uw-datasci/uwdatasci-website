import ResourcesCarousel from '../components/sections/ResourcesCarousel';
import RecordingsCarousel from '../components/sections/RecordingsCarousel';

export default function Resources() {
  return (
    <>
      <h1 className="text-center">
        <span className="h1">Resources</span>
      </h1>
      <ResourcesCarousel />
      <RecordingsCarousel />
    </>
  );
}
