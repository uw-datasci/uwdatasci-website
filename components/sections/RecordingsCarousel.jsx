import Carousel from '../UI/Carousel';
import RecordingCard from '../cards/RecordingCard';

export default function RecordingsCarousel({ recordings }) {
  return (
    recordings && (
      <section className='section'>
        <Carousel title='Recordings' gap='mr-6 lg:mr-8'>
          {recordings.map((recording) => (
            <RecordingCard
              title={recording.title}
              link={recording.link}
              key={recording.title}
            />
          ))}
        </Carousel>
      </section>
    )
  );
}
