import Carousel from '../UI/Carousel';
import RecordingCard from '../cards/RecordingCard';

export default function RecordingsCarousel({ recordings }) {
  console.log(recordings);

  return (
    recordings && (
      <section className='section'>
        <Carousel title='Recordings' gap='mr-6 lg:mr-8'>
          {Object.values(recordings).map((recording) => (
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
