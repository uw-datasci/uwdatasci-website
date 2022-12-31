import { ThemeContextProvider } from '../store/theme-context';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import Header from '../components/navigation/Header';
import MobileMenu from '../components/navigation/MobileMenu';
import '../styles/globals.css';
import Wave from '../components/other/Wave';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <MenuOpenContextProvider>
        <Header />
        <MobileMenu />
        <Wave />
        <div className="pt-44 md:pt-56">
          <Component {...pageProps} />
        </div>
      </MenuOpenContextProvider>
    </ThemeContextProvider>
  );
}
