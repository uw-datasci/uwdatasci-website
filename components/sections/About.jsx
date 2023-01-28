import AboutCard from '../cards/AboutCard';
import { ABOUT } from '../../constants/data';

export default function About() {
  return (
    <section className="section m-horizontal">
      <h2 className="mb-6 md:mb-9">
        <span className="h2">About Us</span>
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:gap-12 xl:grid-cols-3">
        {ABOUT.map((card) => (
          <AboutCard title={card.title} description={card.description} icon={card.icon} key={card.title} />
        ))}
      </div>
    </section>
  );
}
