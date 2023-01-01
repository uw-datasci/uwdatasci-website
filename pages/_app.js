import { ThemeContextProvider } from '../store/theme-context';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import Wave from '../components/other/Wave';
import Header from '../components/navigation/Header';
import MobileMenu from '../components/navigation/MobileMenu';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <MenuOpenContextProvider>
        <Wave />
        <Header />
        <MobileMenu />
        <div className="pt-48 md:pt-56">
          <Component {...pageProps} />
        </div>
      </MenuOpenContextProvider>
    </ThemeContextProvider>
  );
}
