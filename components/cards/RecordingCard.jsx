import Button from '../UI/Button';
import Card from '../UI/Card';
import externalLinkIcon from '../../public/img/icons/external-link.svg';

export default function RecordingCard({ title, description, link }) {
  return (
    <Card
      borderRadius="rounded-2xl md:rounded-4xl"
      classes="w-[300px] md:w-[380px]"
    >
      <iframe
        src={`https://www.youtube.com/embed/${link.substring(
          link.indexOf('watch?v=') + 8
        )}`}
        title="Data Science Club Recordings"
        frameborder="0"
        className="no-select-or-drag aspect-video w-full"
      />
      <div className="px-5 pt-3 pb-8 md:px-7 md:pt-4 md:pb-10">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white md:mb-3 md:text-3xl">
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
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center"
          onClick={() => window.open(link, '_blank')}
        >
          YouTube
        </Button>
      </div>
    </Card>
  );
}
