import { useContext } from 'react';
import Link from 'next/link';
import MenuOpenContext from '../../store/menu-open-context';
import GradientBorder from '../UI/GradientBorder';
import Button from '../UI/Button';
import { MENU } from '../../constants/menu';

export default function MobileMenu() {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <div
      className={`transition-300 fixed inset-0 z-50 flex flex-col overscroll-contain bg-white px-5 pt-12 dark:bg-black 3xs:px-5 xs:px-7 sm:px-9 md:hidden ${
        menuOpenContext.isMenuOpen
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`}
    >
      <GradientBorder
        gradient="black-to-purple dark:white-to-light-purple"
        borderRadius="rounded-full"
        classes="self-end"
        onClick={menuOpenContext.closeMenu}
      >
        <Button
          bg="white-to-lighter-purple dark:black-to-dark-purple"
          border="rounded-full"
          px="px-6"
          py="py-3"
          font="font-medium gradient-text black-to-purple dark:white-to-light-purple"
        >
          Close
        </Button>
      </GradientBorder>

      <div className="absolute top-1/2 flex w-full -translate-y-1/2 flex-col gap-7 text-5xl">
        {MENU.map((menuItem) => {
          if (menuItem.link.startsWith('/')) {
            return (
              <Link
                href={menuItem.link}
                key={menuItem.text}
                className="block font-bold"
                onClick={menuOpenContext.closeMenu}
              >
                <span className="gradient-text dark:white-to-light-purple black-to-purple ">
                  {menuItem.text}
                </span>
              </Link>
            );
          } else {
            return (
              <a
                href={menuItem.link}
                target="_blank"
                rel="noreferrer"
                onClick={menuOpenContext.closeMenu}
                className="block font-bold"
                key={menuItem.text}
              >
                <span className="gradient-text dark:white-to-light-purple black-to-purple">
                  {menuItem.text}
                </span>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
