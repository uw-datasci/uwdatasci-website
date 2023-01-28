import { useContext } from 'react';
import ThemeContext from '../../store/theme-context';
import voiceflowLight from '../../public/img/sponsors/voiceflow-light.png';
import voiceflowDark from '../../public/img/sponsors/voiceflow-dark.png';
import huggingFaceLight from '../../public/img/sponsors/hugging-face-light.png';
import huggingFaceDark from '../../public/img/sponsors/hugging-face-dark.png';
import intactLight from '../../public/img/sponsors/intact-light.png';
import intactDark from '../../public/img/sponsors/intact-dark.png';
import wolframLight from '../../public/img/sponsors/wolfram-light.png';
import wolframDark from '../../public/img/sponsors/wolfram-dark.png';
import wyvernLight from '../../public/img/sponsors/wyvern-light.png';
import wyvernDark from '../../public/img/sponsors/wyvern-dark.png';
import Image from 'next/image';

const SPONSOR_LOGOS = [
  { sponsor: 'Voiceflow', light: voiceflowLight, dark: voiceflowDark },
  { sponsor: 'Hugging Face', light: huggingFaceLight, dark: huggingFaceDark },
  { sponsor: 'Intact', light: intactLight, dark: intactDark },
  { sponsor: 'Wolfram', light: wolframLight, dark: wolframDark },
  { sponsor: 'Wyvern', light: wyvernLight, dark: wyvernDark },
];

export default function CXCSponsors() {
  const themeContext = useContext(ThemeContext);

  return (
    <section className="section white-to-lighter-purple dark:black-to-dark-purple border border-x-0 border-purple pt-12 pb-16 lg:pb-18 lg:pt-14">
      <div className="mx-5 xs:mx-7 sm:mx-9 xl:mx-16 2xl:mx-auto">
        <h2 className="mb-12 text-center md:mb-16">
          <span className="h2">CXC Sponsors</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-16">
          {SPONSOR_LOGOS.map((logo) => (
            <Image
              src={themeContext.theme === 'light' ? logo.light : logo.dark}
              alt={logo.sponsor}
              key={logo.sponsor}
              className="w-48"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
