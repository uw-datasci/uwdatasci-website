import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../../store/firebase-context';
import Carousel from '../UI/Carousel';
import RecordingCard from '../cards/RecordingCard';
import { RECORDINGS } from '../../constants/data';

export default function RecordingsCarousel() {
  const firebaseContext = useContext(FirebaseContext);

  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    if (firebaseContext.recordings.length > 0) {
      setRecordings(firebaseContext.recordings);
    }
  }, [firebaseContext.recordings]);

  return (
    <section className="section">
      <Carousel title="Recordings" gap="mr-6 lg:mr-8">
        {recordings.map((recording) => (
          <RecordingCard
            title={recording.title}
            link={recording.link}
            key={recording.title}
          />
        ))}
      </Carousel>
    </section>
  );
}
