import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../../store/firebase-context';
import Carousel from '../UI/Carousel';
import ResourceCard from '../cards/ResourceCard';

export default function ResourcesCarousel({ showTitle, fetchedResources }) {
  const firebaseContext = useContext(FirebaseContext);

  const [resources, setResources] = useState(fetchedResources);

  useEffect(() => {
    if (firebaseContext.resources.length > 0) {
      setResources(firebaseContext.resources);
    }
  }, [firebaseContext.resources]);

  return (
    <section className="section">
      <Carousel title={showTitle ? 'Resources' : ''} gap="mr-6 lg:mr-8">
        {resources.map((resource) => (
          <ResourceCard
            title={resource.title}
            description={resource.description}
            button={resource.button}
            link={resource.link}
            icon={resource.icon}
            key={resource.title}
          />
        ))}
      </Carousel>
    </section>
  );
}
