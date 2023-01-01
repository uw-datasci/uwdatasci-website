import Carousel from '../UI/Carousel';
import ResourceCard from '../cards/ResourceCard';
import { RESOURCES } from '../../constants/data';

export default function ResourcesCarousel({ showTitle }) {
  return (
    <section className="section">
      <Carousel title={showTitle ? 'Resources' : ''} gap="mr-6 lg:mr-8">
        {RESOURCES.map((resource) => (
          <ResourceCard
            title={resource.title}
            description={resource.description}
            buttons={resource.buttons}
            icon={resource.icon}
            key={resource.title}
          />
        ))}
      </Carousel>
    </section>
  );
}
