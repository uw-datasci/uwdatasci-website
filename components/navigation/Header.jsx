import { useContext } from 'react';
import Link from 'next/link';
import MenuOpenContext from '../../store/menu-open-context';
import Logo from './Logo';
import ThemeToggle from '../navigation/ThemeToggle';
import GradientBorder from '../UI/GradientBorder';
import Button from '../UI/Button';
import { MENU } from '../../constants/menu';
import Login from '../navigation/Login';

export default function Header() {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <header className="fixed z-40 mt-9 flex w-full items-center justify-between bg-white bg-opacity-20 py-3 px-5 backdrop-blur-md dark:bg-black dark:bg-opacity-20 xs:px-7 sm:px-9">
      <Logo />

      <div className="flex items-center gap-6 md:hidden">
        <ThemeToggle />

        <GradientBorder
          gradient="black-to-purple dark:white-to-light-purple"
          borderRadius="rounded-full"
          onClick={menuOpenContext.openMenu}
        >
          <Button
            bg="white-to-lighter-purple dark:black-to-dark-purple"
            border="rounded-full"
            px="px-6"
            py="py-3"
            font="font-medium gradient-text black-to-purple dark:white-to-light-purple"
          >
            Menu
          </Button>
        </GradientBorder>
      </div>

      <nav className="hidden md:flex md:items-center md:gap-10 lg:gap-12 xl:gap-16">
        {MENU.map((menuItem) => {
          if (menuItem.link.startsWith('/')) {
            return (
              <Link
                href={menuItem.link}
                key={menuItem.text}
                className="text-purple hover:text-black dark:text-lightPurple dark:hover:text-white"
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
                className="text-purple hover:text-black dark:text-lightPurple dark:hover:text-white"
              >
                {menuItem.text}
              </a>
            );
          }
        })}

        <Login /> 
        <ThemeToggle />
      </nav>
    </header>
  );
}
