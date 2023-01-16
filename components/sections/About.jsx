import Card from '../UI/Card';
import Image from 'next/image';
import { ABOUT } from '../../constants/data';

export default function About() {
  return (
    <section className="section m-horizontal">
      <h2 className="mb-6 md:mb-9">
        <span className="h2">About Us</span>
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:gap-12 xl:grid-cols-3">
        {ABOUT.map((card) => (
          <Card key={card.title} borderRadius="rounded-2xl md:rounded-4xl">
            <div className="flex flex-col px-7 pt-7 pb-8 md:px-9 md:pt-9 md:pb-12">
              <Image
                src={card.icon}
                alt={card.title}
                className="no-select-or-drag dark:filter-light-purple filter-purple mb-7 w-9 self-end md:w-12"
              />
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white md:mb-3 md:text-3xl">
                {card.title}
              </h3>
              <p className="leading-relaxed text-purple dark:text-lightPurple">
                {card.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
