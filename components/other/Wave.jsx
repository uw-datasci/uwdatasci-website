import { useContext } from 'react';
import Image from 'next/image';
import ThemeContext from '../../store/theme-context';
import waveLight from '../../public/img/graphics/wave-light.svg';
import waveDark from '../../public/img/graphics/wave-dark.svg';

export default function Wave() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="absolute top-[30vh] -z-50 w-screen overflow-x-hidden">
      <Image
        src={themeContext.theme === 'light' ? waveLight : waveDark}
        alt="wave"
        priority
        className="no-select-or-drag -ml-[60%] w-[1300px] max-w-none sm:ml-0 2xl:w-screen"
      />
    </div>
  );
}
