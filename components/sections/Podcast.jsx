import Banner from '../UI/Banner';
import Button from '../UI/Button';
import youtubeIcon from '../../public/img/icons/youtube.svg';
import spotifyIcon from '../../public/img/icons/spotify.svg';

export default function Podcast() {
  return (
    <Banner>
      <div className="grid 2xl:grid-cols-2 2xl:gap-12">
        <div>
          <h2 className="mb-4 xl:mb-6">
            <span className="h2">Listen to our podcast!</span>
          </h2>
          <p className="mb-7 leading-relaxed text-purple dark:text-lightPurple xl:mb-12 xl:text-lg xl:leading-relaxed">
            Unlabelled Unstructured is a podcast created by students, for
            students interested in Data Science. Listen to candid conversations
            with leaders in Tech, Machine Learning, and Data Science to learn
            more about the industry and how you can succeed!
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            <Button
              bg="bg-white dark:bg-black"
              border="rounded-full border-purple dark:border-lightPurple border"
              px="px-4"
              py="py-3"
              font="text-black dark:text-white xl:text-lg"
              icon={youtubeIcon}
              iconAlt="youtube icon"
              iconClasses="absolute top-1/2 -translate-y-1/2 left-4 dark:filter-light-purple md:relative md:top-0 md:translate-y-0 md:left-0"
              onClick={() => window.open('https://youtube.com', '_blank')}
              classes="text-center md:flex md:gap-3 md:items-center"
            >
              YouTube
            </Button>
            <Button
              bg="bg-white dark:bg-black"
              border="rounded-full border-purple dark:border-lightPurple border"
              px="px-4"
              py="py-3"
              font="text-black dark:text-white xl:text-lg"
              icon={spotifyIcon}
              iconAlt="spotify icon"
              iconClasses="absolute top-1/2 -translate-y-1/2 left-4 dark:filter-light-purple md:relative md:top-0 md:translate-y-0 md:left-0"
              onClick={() => window.open('https://spotify.com', '_blank')}
              classes="text-center md:flex md:gap-3 md:items-center"
            >
              Spotify
            </Button>
          </div>
        </div>
        <div className="hidden 2xl:block"></div>
      </div>
    </Banner>
  );
}
