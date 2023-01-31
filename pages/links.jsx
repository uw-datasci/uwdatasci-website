import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/other/SEO';
import Button from '../components/UI/Button';
import echo from '../public/img/graphics/echo-profile.png';
import externalLinkIcon from '../public/img/icons/external-link.svg';
import calendarIcon from '../public/img/icons/calendar.svg';
import signIcon from '../public/img/icons/sign.svg';
import globeIcon from '../public/img/icons/globe.svg';
import instagramIcon from '../public/img/icons/instagram.svg';
import spotifyIcon from '../public/img/icons/spotify.svg';
import linkedinIcon from '../public/img/icons/linkedin.svg';
import mailIcon from '../public/img/icons/mail.svg';
import youtubeIcon from '../public/img/icons/youtube.svg';
import discordIcon from '../public/img/icons/discord.svg';
import tiktokIcon from '../public/img/icons/tiktok.svg';

const MAIN_BUTTONS = [
  {
    title: 'Website',
    link: 'https://www.uwdatascience.ca/',
    icon: globeIcon,
  },
  {
    title: 'W23 Member Sign Up',
    link: 'https://docs.google.com/forms/d/1hgSktKKF2M5aZnt1AOZ8xSZN9e_2gtIw7xomN8Tj-3c/viewform?edit_requested=true',
    icon: signIcon,
  },
  {
    title: 'Discord',
    link: 'https://discord.gg/35hK2nzxM4',
    icon: discordIcon,
  },
  {
    title: 'Events Calendar',
    link: 'https://bit.ly/dsc-calendar-w23',
    icon: calendarIcon,
  },
  {
    title: 'W23 Round 2 Exec Apps :)',
    link: 'https://forms.gle/kXLXsDr56mXPcNE19',
  },
];

const EVENT_BUTTONS = [
  {
    title: 'CXC Sign Ups',
    link: 'https://www.eventbrite.com/e/cxc-tickets-526760303247',
  },
  {
    title: 'E-LeetCoding Registration',
    link: 'https://forms.gle/iLsnz9Xh6B3ZuE4c9',
  },
  {
    title: 'E-LeetCoding Mentor Sign Ups',
    link: 'https://forms.gle/5dvBccEowsbZCd7G9',
  },
  {
    title: 'Snack and Social Sign Up',
    link: 'https://forms.gle/wj2Cnh9jeKZ9Kbvg8',
  },
  {
    title: 'Reading Group Session',
    link: 'https://teams.live.com/meet/9380335784145',
  },
  {
    title: 'W23 DSC BOT Slides',
    link: 'https://docs.google.com/presentation/d/1CIgbRhsZYXUEKC97lfyoPFP2AK4uYmn8Ra38PzpoETA/edit?usp=sharing',
  },
];

const ICONS = [
  {
    title: 'Instagram',
    image: instagramIcon,
    link: 'https://instagram.com/uwaterloodsc',
  },
  {
    title: 'Spotify',
    image: spotifyIcon,
    link: 'https://open.spotify.com/show/4r1GMei94NFMEMTi6ErvEk?si=3b8fa1ef88334caa',
  },
  {
    title: 'Youtube',
    image: youtubeIcon,
    link: 'https://www.youtube.com/channel/UCknY88pglf2xz_S72WHIDxg',
  },
  {
    title: 'TikTok',
    image: tiktokIcon,
    link: 'https://www.tiktok.com/@uwaterloodsc',
  },
  {
    title: 'Linkedin',
    image: linkedinIcon,
    link: 'https://www.linkedin.com/company/waterloo-data-science-club/',
  },
  {
    title: 'Mail',
    image: mailIcon,
    link: 'mailto:contact@uwdatascience.ca',
  },
];

export default function Links() {
  return (
    <>
      <SEO title="Links | UWaterloo Data Science Club" />
      <section className="m-horizontal section -mt-12 md:-mt-20">
        <Link href="/">
          <Image
            src={echo}
            alt="echo icon"
            className="no-select-or-drag mx-auto mb-9 w-[160px]"
          />
        </Link>
        <div className="mx-auto mb-20 flex max-w-[400px] flex-col gap-6">
          {MAIN_BUTTONS.map((button) => (
            <Button
              bg="bg-white dark:bg-black"
              border="rounded-full border border-purple dark:border-lightPurple"
              py="py-2.5"
              font="text-black dark:text-white"
              icon={button.icon ? button.icon : externalLinkIcon}
              iconAlt="open link"
              iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
              classes="text-center"
              onClick={() => window.open(button.link, '_blank')}
              key={button.title}
            >
              {button.title}
            </Button>
          ))}
        </div>
        <h3 className="mb-6 text-center text-2xl font-bold text-black dark:text-white md:mb-6 md:text-3xl">
          Events
        </h3>
        <div className="mb-14">
          <div className="mx-auto mb-20 flex max-w-[400px] flex-col gap-6">
            {EVENT_BUTTONS.map((button) => (
              <Button
                bg="bg-white dark:bg-black"
                border="rounded-full border border-purple dark:border-lightPurple"
                py="py-2.5"
                font="text-black dark:text-white"
                icon={button.icon ? button.icon : externalLinkIcon}
                iconAlt="open link"
                iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
                classes="text-center"
                onClick={() => window.open(button.link, '_blank')}
                key={button.title}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {ICONS.map((icon) => (
            <a
              href={icon.link}
              key={icon.title}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={icon.image}
                alt={icon.title}
                className="filter-purple dark:filter-light-purple w-9"
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
