import Image from 'next/image';
import Card from '../UI/Card';
import instagramIcon from '../../public/img/icons/instagram.svg';
import linkedinIcon from '../../public/img/icons/linkedin.svg';
import mailIcon from '../../public/img/icons/mail.svg';
import websiteIcon from '../../public/img/icons/globe.svg';

export default function MemberCard({ name, position, socials, image }) {
  return (
    <Card borderRadius="rounded-2xl md:rounded-4xl" classes="w-[290px]">
      <div className="px-3 pt-7 pb-9 text-center">
        <Image
          src={image}
          alt={name}
          className="no-select-or-drag mb-4 inline-block w-32 rounded-md"
        />
        <h4 className="mb-3 text-2xl font-semibold text-black dark:text-white">
          {name}
        </h4>
        <p className="mb-5 text-lg leading-relaxed text-purple dark:text-lightPurple">
          {position}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.entries(socials).map(([type, link]) => {
            if (link === undefined) {
              return null;
            }

            let icon;

            switch (type) {
              case 'website':
                icon = websiteIcon;
                break;
              case 'instagram':
                icon = instagramIcon;
                break;
              case 'linkedin':
                icon = linkedinIcon;
                break;
              default:
                icon = mailIcon;
            }

            return (
              <a href={link} target="_blank" rel="noreferrer" key={type}>
                <Image
                  src={icon}
                  alt={type}
                  className="no-select-or-drag filter-purple dark:filter-light-purple w-6"
                />
              </a>
            );
          })}
          {/* {socials.map((social) => {
            let icon;

            switch (social.type) {
              case 'website':
                icon = websiteIcon;
                break;
              case 'instagram':
                icon = instagramIcon;
                break;
              case 'linkedin':
                icon = linkedinIcon;
                break;
              default:
                icon = mailIcon;
            }

            return (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={social.type}
                className=""
              >
                <Image
                  src={icon}
                  alt={social.type}
                  className="no-select-or-drag filter-purple dark:filter-light-purple w-6"
                />
              </a>
            );
          })} */}
        </div>
      </div>
    </Card>
  );
}
