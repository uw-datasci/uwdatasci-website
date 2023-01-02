import Image from 'next/image';
import Card from '../UI/Card';
import Button from '../UI/Button';
import clockIcon from '../../public/img/icons/clock.svg';
import mapIcon from '../../public/img/icons/map.svg';
import externalLinkIcon from '../../public/img/icons/external-link.svg';

export default function UpcomingEventCard({
  title,
  description,
  time,
  location,
  signUpLink,
  image,
}) {
  return (
    <Card
      borderRadius="rounded-2xl md:rounded-4xl"
      classes="w-[300px] md:w-[380px] h-full flex flex-col"
    >
      <Image
        src={image}
        alt={title}
        width={380}
        height={380}
        className="no-select-or-drag aspect-[2/1] w-full object-cover"
      />

      <div className="flex flex-grow flex-col justify-between px-5 pt-3 pb-8 md:px-7 md:pt-4 md:pb-10">
        <div>
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
              className="no-select-or-drag dark:filter-light-purple filter-purple w-6"
            />

            <p className="text-purple dark:text-lightPurple">{time}</p>
          </div>

          <div className="mb-6 flex gap-3 md:mb-9">
            <Image
              src={mapIcon}
              alt="map icon"
              className="no-select-or-drag dark:filter-light-purple filter-purple w-6"
            />

            <p className="text-purple dark:text-lightPurple">{location}</p>
          </div>
        </div>

        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          icon={externalLinkIcon}
          iconAlt="external link icon"
          iconClasses="no-select-or-drag w-6 absolute right-4 top-1/2 -translate-y-1/2 dark:filter-light-purple"
          classes="text-center w-full"
          onClick={() => window.open(signUpLink, '_blank')}
        >
          Sign Up
        </Button>
      </div>
    </Card>
  );
}
