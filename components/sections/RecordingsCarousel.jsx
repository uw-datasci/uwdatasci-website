import Carousel from '../UI/Carousel';
import RecordingCard from '../cards/RecordingCard';
import { RECORDINGS } from '../../constants/data';

export default function RecordingsCarousel() {
  return (
    <section className="section">
      <Carousel title="Recordings" gap="mr-6 lg:mr-8">
        {RECORDINGS.map((recording) => (
          <RecordingCard
            title={recording.title}
            description={recording.description}
            link={recording.link}
            key={recording.title}
          />
        ))}
      </Carousel>
    </section>
  );
}
