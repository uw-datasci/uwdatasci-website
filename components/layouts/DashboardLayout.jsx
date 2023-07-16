import { useContext } from 'react';
import MenuOpenContext from '../../store/menu-open-context';
import DashboardMenu from '../navigation/DashboardMenu';
import Button from '../UI/Button';

export default function DashboardLayout({ children }) {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <div className='pb-28 2xl:pb-40'>
      <DashboardMenu />
      <div className='fixed inset-x-0 z-50 flex justify-end py-12 px-5 xl:hidden'>
        <Button
          bg='white-to-lighter-purple dark:black-to-dark-purple'
          border='rounded-full border-white border'
          px='px-6'
          py='py-3'
          font='font-medium gradient-text black-to-purple dark:white-to-light-purple'
          onClick={menuOpenContext.toggleMenu}
        >
          {menuOpenContext.isMenuOpen ? 'Close' : 'Menu'}
        </Button>
      </div>
      <div className='pt-32 xl:ml-[300px]'>{children}</div>
    </div>
  );
}
