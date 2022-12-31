import Image from 'next/image';
import Card from '../UI/Card';
import clockIcon from '../../public/img/icons/clock.svg';
import mapIcon from '../../public/img/icons/map.svg';

export default function EventCard({
  title,
  description,
  time,
  location,
  image,
}) {
  return (
    <Card
      borderRadius="rounded-2xl md:rounded-4xl"
      classes="w-[300px] md:w-[380px]"
    >
      <Image
        src={image}
        alt={title}
        className="aspect-[2/1] w-full object-cover"
      />
      <div className="px-5 pt-3 pb-8 md:px-7 md:pt-4 md:pb-10">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white md:mb-3 md:text-3xl">
          {title}
        </h3>
        <p className="mb-4 leading-relaxed text-purple dark:text-lightPurple md:mb-5">
          {description}
        </p>
        <div className="mb-4 flex gap-3 md:mb-5">
          <Image
            src={clockIcon}
            alt="clock icon"
            className="dark:filter-light-purple filter-purple w-6"
          />
          <p className="text-purple dark:text-lightPurple">{time}</p>
        </div>
        <div className="flex gap-3">
          <Image
            src={mapIcon}
            alt="map icon"
            className="dark:filter-light-purple filter-purple w-6"
          />
          <p className="text-purple dark:text-lightPurple">{location}</p>
        </div>
      </div>
    </Card>
  );
}
