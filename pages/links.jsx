import Button from "../components/UI/Button";
import echo from "../public/img/graphics/echo-profile.png";
import Image from "next/image";
import externalLinkIcon from "../public/img/icons/external-link.svg";

import instagram from "../public/img/icons/instagram.svg";
import spotify from "../public/img/icons/spotify.svg";
import linkedin from "../public/img/icons/linkedin.svg";
import mail from "../public/img/icons/mail.svg";
import youtube from "../public/img/icons/youtube.svg";

/* TODO: in the future, we could refactor the social media icons & links, 
      because they are being repeated in multiple files (e.g. this one, footer.jsx, and contact.jsx).
      We could export them all from a new file (called socials.js) in the 'constants' folder
*/

const ICONS = [
  {
    title: "Instagram",
    image: instagram,
    link: "https://instagram.com/uwaterloodsc",
  },
  {
    title: "Spotify",
    image: spotify,
    link: "https://open.spotify.com/show/4r1GMei94NFMEMTi6ErvEk?si=3b8fa1ef88334caa",
  },
  {
    title: "Youtube",
    image: youtube,
    link: "https://www.youtube.com/channel/UCknY88pglf2xz_S72WHIDxg",
  },
  {
    title: "Linkedin",
    image: linkedin,
    link: "https://www.linkedin.com/company/waterloo-data-science-club/",
  },
  { title: "Mail", image: mail, link: "mailto:contact@uwdatascience.ca" },
];

export default function Links() {
  return (
    <section className="m-horizontal">
      <Image
        src={echo}
        alt="echo icon"
        className="no-select-or-drag mx-auto mb-9 w-[160px]"
      />
      <div className="mb-20">
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          icon={externalLinkIcon}
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button"
          onClick={() => window.open(link, "_blank")}
        >
          Website
        </Button>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button my-4"
          onClick={() => window.open(link, "_blank")}
        >
          Link 1
        </Button>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button my-4"
          onClick={() => window.open(link, "_blank")}
        >
          Link 2
        </Button>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button my-4"
          onClick={() => window.open(link, "_blank")}
        >
          Link 3
        </Button>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button my-4"
          onClick={() => window.open(link, "_blank")}
        >
          Link 4
        </Button>
      </div>
      <h3 className="mb-4 text-center text-2xl font-bold text-black dark:text-white md:mb-6 md:text-3xl">
        Events
      </h3>
      <div className="mb-14">
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          icon={externalLinkIcon}
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button"
          onClick={() => window.open(link, "_blank")}
        >
          Website
        </Button>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button my-4"
          onClick={() => window.open(link, "_blank")}
        >
          Link 1
        </Button>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button my-4"
          onClick={() => window.open(link, "_blank")}
        >
          Link 2
        </Button>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button my-4"
          onClick={() => window.open(link, "_blank")}
        >
          Link 3
        </Button>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          iconAlt="open link"
          iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
          classes="text-center narrow-button my-4"
          onClick={() => window.open(link, "_blank")}
        >
          Link 4
        </Button>
      </div>
      <div className="flex justify-center gap-4">
        {ICONS.map((icon) => (
          <a href={icon.link} key={icon.title}>
            <Image
              src={icon.image}
              alt={icon.title}
              className="filter-purple dark:filter-light-purple w-9"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
