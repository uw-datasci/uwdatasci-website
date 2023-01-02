import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../../store/firebase-context';
import Carousel from '../UI/Carousel';
import RecordingCard from '../cards/RecordingCard';

export default function RecordingsCarousel({ fetchedRecordings }) {
  const firebaseContext = useContext(FirebaseContext);

  const [recordings, setRecordings] = useState(fetchedRecordings);

  useEffect(() => {
    if (firebaseContext.recordings.length > 0) {
      setRecordings(firebaseContext.recordings);
    }
  }, [firebaseContext.recordings]);

  return Array.isArray(recordings) && recordings.length > 0 ? (
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
  ) : null;
}
