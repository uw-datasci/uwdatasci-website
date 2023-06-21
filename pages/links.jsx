import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FirebaseContext from '../store/firebase-context';
import { getDataOnce } from '../lib/firebase';
import SEO from '../components/other/SEO';
import Button from '../components/UI/Button';
import echo from '../public/img/graphics/echo-profile.png';
import externalLinkIcon from '../public/img/icons/external-link.svg';
import calendarIcon from '../public/img/icons/calendar.svg';
import globeIcon from '../public/img/icons/globe.svg';
import instagramIcon from '../public/img/icons/instagram.svg';
import spotifyIcon from '../public/img/icons/spotify.svg';
import linkedinIcon from '../public/img/icons/linkedin.svg';
import mailIcon from '../public/img/icons/mail.svg';
import youtubeIcon from '../public/img/icons/youtube.svg';
import discordIcon from '../public/img/icons/discord.svg';
import tiktokIcon from '../public/img/icons/tiktok.svg';

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

export default function Links({ mainLinks, eventLinks }) {
  const [mainButtons, setMainButtons] = useState(
    mainLinks
      .map((link) => {
        let icon = externalLinkIcon;

        if (link.icon === 'website') {
          icon = globeIcon;
        } else if (link.icon === 'spotify') {
          icon = spotifyIcon;
        } else if (link.icon === 'discord') {
          icon = discordIcon;
        } else if (link.icon === 'calendar') {
          icon = calendarIcon;
        }

        return { title: link.title, link: link.link, icon };
      })
      .reverse()
  );

  const [eventButtons, setEventButtons] = useState(
    eventLinks
      .map((link) => {
        return { title: link.title, link: link.link, icon: externalLinkIcon };
      })
      .reverse()
  );

  const firebaseContext = useContext(FirebaseContext);

  useEffect(() => {
    if (firebaseContext.mainLinks.length > 0) {
      setMainButtons(
        firebaseContext.mainLinks
          .map((link) => {
            let icon = externalLinkIcon;

            if (link.icon === 'website') {
              icon = globeIcon;
            } else if (link.icon === 'spotify') {
              icon = spotifyIcon;
            } else if (link.icon === 'discord') {
              icon = discordIcon;
            } else if (link.icon === 'calendar') {
              icon = calendarIcon;
            }

            return { title: link.title, link: link.link, icon };
          })
          .reverse()
      );
    }
  }, [firebaseContext.mainLinks]);

  useEffect(() => {
    if (firebaseContext.eventLinks.length > 0) {
      setEventButtons(
        firebaseContext.eventLinks
          .map((link) => {
            return {
              title: link.title,
              link: link.link,
              icon: externalLinkIcon,
            };
          })
          .reverse()
      );
    }
  }, [firebaseContext.eventLinks]);

  return (
    <>
      <SEO title='Links | UWaterloo Data Science Club' />
      <section className='m-horizontal section -mt-12 md:-mt-20'>
        <Link href='/'>
          <Image
            src={echo}
            alt='echo icon'
            className='no-select-or-drag mx-auto mb-9 w-[160px]'
          />
        </Link>
        <div className='mx-auto mb-20 flex max-w-[400px] flex-col gap-6'>
          {mainButtons.map((button) => (
            <Button
              bg='bg-white dark:bg-black'
              border='rounded-full border border-purple dark:border-lightPurple'
              py='py-2.5'
              font='text-black dark:text-white'
              icon={button.icon ? button.icon : externalLinkIcon}
              iconAlt='open link'
              iconClasses='no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple'
              classes='text-center'
              onClick={() => window.open(button.link, '_blank')}
              key={button.title}
            >
              {button.title}
            </Button>
          ))}
        </div>
        <h3 className='mb-6 text-center text-2xl font-bold text-black dark:text-white md:mb-6 md:text-3xl'>
          Events
        </h3>
        <div className='mb-14'>
          <div className='mx-auto mb-20 flex max-w-[400px] flex-col gap-6'>
            {eventButtons.map((button) => (
              <Button
                bg='bg-white dark:bg-black'
                border='rounded-full border border-purple dark:border-lightPurple'
                py='py-2.5'
                font='text-black dark:text-white'
                icon={button.icon ? button.icon : externalLinkIcon}
                iconAlt='open link'
                iconClasses='no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple'
                classes='text-center'
                onClick={() => window.open(button.link, '_blank')}
                key={button.title}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
          {ICONS.map((icon) => (
            <a
              href={icon.link}
              key={icon.title}
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src={icon.image}
                alt={icon.title}
                className='filter-purple dark:filter-light-purple w-9'
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const mainLinks = await getDataOnce('mainLinks');
  const eventLinks = await getDataOnce('eventLinks');

  return {
    props: {
      mainLinks,
      eventLinks,
    },
  };
}
