import Image from 'next/image';
import Logo from './Logo';
import mailIcon from '../../public/img/icons/mail.svg';
import instagramIcon from '../../public/img/icons/instagram.svg';
import discordIcon from '../../public/img/icons/discord.svg';
import linkedinIcon from '../../public/img/icons/linkedin.svg';
import youtubeIcon from '../../public/img/icons/youtube.svg';
import twitterIcon from '../../public/img/icons/twitter.svg';
import tiktokIcon from '../../public/img/icons/tiktok.svg';
import spotifyIcon from '../../public/img/icons/spotify.svg';

const SOCIALS = [
  {
    type: 'mail',
    link: 'mailto:contact@uwdatascience.ca',
    icon: mailIcon,
  },
  {
    type: 'instagram',
    link: 'https://instagram.com/uwaterloodsc',
    icon: instagramIcon,
  },
  {
    type: 'discord',
    link: 'https://discord.gg/35hK2nzxM4',
    icon: discordIcon,
  },
  {
    type: 'linkedin',
    link: 'https://www.linkedin.com/company/waterloo-data-science-club/',
    icon: linkedinIcon,
  },
  {
    type: 'youtube',
    link: 'https://www.youtube.com/channel/UCknY88pglf2xz_S72WHIDxg',
    icon: youtubeIcon,
  },
  {
    type: 'twitter',
    link: 'https://twitter.com/uwaterloodsc',
    icon: twitterIcon,
  },
  {
    type: 'tiktok',
    link: 'https://vm.tiktok.com/ZMF3YveUq/',
    icon: tiktokIcon,
  },
  {
    type: 'spotify',
    link: 'https://open.spotify.com/show/4r1GMei94NFMEMTi6ErvEk?si=3b8fa1ef88334caa',
    icon: spotifyIcon,
  },
];

export default function Footer() {
  return (
    <footer className="white-to-lighter-purple dark:black-to-dark-purple flex flex-col items-center gap-7 px-5 pt-7 pb-9 xs:px-7 sm:px-9 md:flex-row md:justify-between">
      <Logo />
      <div className="flex justify-center gap-3 md:gap-4">
        {SOCIALS.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            key={social.type}
          >
            <Image
              src={social.icon}
              alt={social.type}
              className="filter-purple dark:filter-light-purple w-6"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
