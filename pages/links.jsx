import Button from '../components/UI/Button';
import echo from '../public/img/graphics/echo-profile.png'
import Image from 'next/image';

import instagram from '../public/img/icons/instagram.svg'
import spotify from '../public/img/icons/spotify.svg'
import linkedin from '../public/img/icons/linkedin.svg'
import mail from '../public/img/icons/mail.svg'
import youtube from '../public/img/icons/youtube.svg'

/* TODO: in the future, we could refactor the social media icons & links, 
      because they are being repeated in multiple files (e.g. this one, footer.jsx, and contact.jsx).
      We could export them all from a new file (called socials.js) in the 'constants' folder
*/

const ICONS = [
  { title: 'Instagram', image: instagram, link: 'https://instagram.com/uwaterloodsc' },
  { title: 'Spotify', image: spotify, link: 'https://open.spotify.com/show/4r1GMei94NFMEMTi6ErvEk?si=3b8fa1ef88334caa' },
  { title: 'Youtube', image: youtube, link: 'https://www.youtube.com/channel/UCknY88pglf2xz_S72WHIDxg' },
  { title: 'Linkedin', image: linkedin, link: 'https://www.linkedin.com/company/waterloo-data-science-club/' },
  { title: 'Mail', image: mail, link: 'mailto:contact@uwdatascience.ca' },
];

export default function Links() {
  return <section className="m-horizontal">
    <Image
      src={echo}
      alt="echo icon"
      className="no-select-or-drag w-[160px] mb-9 mx-auto"
    />
    <div className="mb-20">
      {/* First column of buttons - for NADA */}
    </div>
    <div className="mb-14">
      {/* Second column of buttons - for NADA */}
    </div>
    <div className="flex gap-4 justify-center">
      {ICONS.map(icon =>
        <a href={icon.link} key={icon.title}>
          <Image src={icon.image} alt={icon.title} className="filter-purple dark:filter-light-purple w-9" />
        </a>)}
    </div>
  </section>;
}
