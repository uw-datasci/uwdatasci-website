import Card from '../UI/Card';
import Button from '../UI/Button';
import externalLinkIcon from '../../public/img/icons/external-link.svg';

export default function ResourceCard({ title, description, button, link }) {
  return (
    <Card
      borderRadius="rounded-2xl md:rounded-4xl"
      classes="w-[300px] md:w-[380px] relative h-full"
    >
      <div className="relative px-5 pt-6 pb-8 md:px-7 md:pt-8 md:pb-10">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white md:text-3xl">
          {title}
        </h3>
        <p className="mb-6 leading-relaxed text-purple dark:text-lightPurple md:mb-9">
          {description}
        </p>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          icon={externalLinkIcon}
          iconAlt={button}
          iconClasses="no-select-or-drag w-6 absolute right-4 top-1/2 -translate-y-1/2 dark:filter-light-purple"
          classes="text-center w-full"
          onClick={() => window.open(link, '_blank')}
          key={button}
        >
          {button}
        </Button>
      </div>
    </Card>
  );
}
