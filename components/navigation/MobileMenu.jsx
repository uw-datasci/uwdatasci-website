import { useContext } from 'react';
import Link from 'next/link';
import MenuOpenContext from '../../store/menu-open-context';
import GradientBorder from '../UI/GradientBorder';
import { MENU } from '../../constants/menu';

export default function MobileMenu() {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <div
      className={`transition-300 fixed inset-0 z-50 flex flex-col bg-white px-5 pt-12 dark:bg-black 3xs:px-5 xs:px-7 sm:px-9 md:hidden ${
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
        <div className="white-to-lighter-purple dark:black-to-dark-purple rounded-full px-6 py-3">
          <p className="text-base font-medium">
            <span className="gradient-text black-to-purple dark:white-to-light-purple">
              Close
            </span>
          </p>
        </div>
      </GradientBorder>

      <div className="absolute top-1/2 flex w-full -translate-y-1/2 flex-col gap-7 text-5xl">
        {MENU.map((menuItem) => {
          if (menuItem.link.startsWith('/')) {
            return (
              <Link
                href={menuItem.link}
                key={menuItem.text}
                className="gradient-text dark:white-to-light-purple black-to-purple block font-bold"
              >
                {menuItem.text}
              </Link>
            );
          } else {
            return (
              <a
                href={menuItem.link}
                key={menuItem.text}
                className="gradient-text dark:white-to-light-purple black-to-purple font-bold"
              >
                {menuItem.text}
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
