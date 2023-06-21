import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import MenuOpenContext from '../../store/menu-open-context';
import calendarIcon from '../../public/img/icons/calendar.svg';
import recordingsIcon from '../../public/img/icons/recordings.svg';
import resourcesIcon from '../../public/img/icons/resources.svg';
import teamIcon from '../../public/img/icons/team.svg';
import Image from 'next/image';
import { signOut } from 'firebase/auth';

export default function DashboardMenu() {
  const menuOpenContext = useContext(MenuOpenContext);

  const router = useRouter();

  const MENU_ITEMS = [
    {
      name: 'Events',
      icon: calendarIcon,
      route: '/dashboard/events',
    },
    {
      name: 'Recordings',
      icon: recordingsIcon,
      route: '/dashboard/recordings',
    },
    {
      name: 'Resources',
      icon: resourcesIcon,
      route: '/dashboard/resources',
    },
    {
      name: 'Team',
      icon: teamIcon,
      route: '/dashboard/team',
    },
  ];

  return (
    <nav
      className={`h-100dvh transition-300 fixed inset-0 z-30 flex w-full flex-col bg-darkPurple px-2 pt-28 md:px-5 xl:w-[300px] xl:px-5 ${
        menuOpenContext.isMenuOpen
          ? 'translate-x-0'
          : 'translate-x-full xl:translate-x-0'
      }`}
    >
      <div className='flex flex-grow flex-col overflow-y-hidden'>
        <div className='no-scrollbar flex-grow overflow-y-scroll py-3'>
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.name}
              label={item.name}
              icon={
                <Image
                  src={item.icon}
                  alt={item.name}
                  className='filter-light-purple'
                />
              }
              isActive={router.pathname === item.route}
              onClick={() => router.push(item.route)}
              classes='mb-1'
            />
          ))}
        </div>
      </div>
      <hr className='border-b-1 mb-3 border-purple' />
      <MenuItem
        label='Log Out'
        onClick={() => {
          signOut();
          router.push('/');
        }}
        classes='mb-8'
      />
    </nav>
  );
}

function MenuItem({ label, icon, isActive, onClick, classes }) {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <div
      onClick={() => {
        onClick();
        menuOpenContext.toggleMenu();
      }}
      className={`transition-300 flex cursor-pointer items-center gap-4 rounded-md px-3 py-4 xl:px-4 ${
        isActive ? 'bg-purple' : 'hover:bg-purple hover:bg-opacity-50'
      } ${classes}`}
    >
      {icon}
      <span className='transition-300 text-md font-medium text-lightPurple'>
        {label}
      </span>
    </div>
  );
}
