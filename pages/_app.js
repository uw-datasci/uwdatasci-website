import { ThemeContextProvider } from '../store/theme-context';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import Header from '../components/navigation/Header';
import MobileMenu from '../components/navigation/MobileMenu';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <MenuOpenContextProvider>
        <Header />
        <MobileMenu />
        <Component {...pageProps} />
      </MenuOpenContextProvider>
    </ThemeContextProvider>
  );
}
