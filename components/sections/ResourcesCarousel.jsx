import Carousel from '../UI/Carousel';
import ResourceCard from '../cards/ResourceCard';

export default function ResourcesCarousel({ showTitle, resources }) {
  return (
    resources && (
      <section className='section'>
        <Carousel title={showTitle ? 'Resources' : ''} gap='mr-6 lg:mr-8'>
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
    )
  );
}
