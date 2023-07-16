import { useRouter } from 'next/router';
import { ThemeContextProvider } from '../store/theme-context';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import Wave from '../components/other/Wave';
import Header from '../components/navigation/Header';
import MobileMenu from '../components/navigation/MobileMenu';
import '../styles/globals.css';
import DashboardLayout from '../components/layouts/DashboardLayout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pathname = router.pathname;

  const isDashboard = pathname.includes('dashboard');

  return (
    <ThemeContextProvider>
      <MenuOpenContextProvider>
        <Wave />
        {!isDashboard && <Header />}
        <div className={isDashboard ? '' : 'pt-48 md:pt-56'}>
          {isDashboard ? (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          ) : (
            <>
              <MobileMenu />
              <Component {...pageProps} />
            </>
          )}
        </div>
      </MenuOpenContextProvider>
    </ThemeContextProvider>
  );
}
