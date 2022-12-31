import { useContext } from 'react';
import Link from 'next/link';
import MenuOpenContext from '../../store/menu-open-context';
import Logo from './Logo';
import ThemeToggle from '../navigation/ThemeToggle';
import GradientBorder from '../UI/GradientBorder';
import { MENU } from '../../constants/menu';

export default function Header() {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <header className="transition-300 fixed mt-9 flex w-full items-center justify-between bg-white py-3 px-5 backdrop-blur-md dark:bg-black 3xs:px-5 xs:px-7 sm:px-9">
      <Logo />

      <div className="flex items-center gap-6 md:hidden">
        <ThemeToggle />

        <GradientBorder
          gradient="black-to-purple dark:white-to-light-purple"
          borderRadius="rounded-full"
          onClick={menuOpenContext.openMenu}
        >
          <div className="white-to-lighter-purple dark:black-to-dark-purple rounded-full px-6 py-3">
            <p className="text-base font-medium">
              <span className="gradient-text black-to-purple dark:white-to-light-purple">
                Menu
              </span>
            </p>
          </div>
        </GradientBorder>
      </div>

      <nav className="hidden md:flex md:items-center md:gap-10 lg:gap-12 xl:gap-16">
        {MENU.map((menuItem) => {
          if (menuItem.link.startsWith('/')) {
            return (
              <Link
                href={menuItem.link}
                key={menuItem.text}
                className="text-darkPurple dark:text-lightPurple"
              >
                {menuItem.text}
              </Link>
            );
          } else {
            return (
              <a
                href={menuItem.link}
                target="_blank"
                rel="noreferrer"
                key={menuItem.text}
                className="text-darkPurple dark:text-lightPurple"
              >
                {menuItem.text}
              </a>
            );
          }
        })}

        <ThemeToggle />
      </nav>
    </header>
  );
}
