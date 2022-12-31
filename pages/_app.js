import { ThemeContextProvider } from '../store/theme-context';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import Wave from '../components/other/Wave';
import Header from '../components/navigation/Header';
import MobileMenu from '../components/navigation/MobileMenu';
import '../styles/globals.css';
import Footer from '../components/navigation/Footer';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <MenuOpenContextProvider>
        <Wave />
        <Header />
        <MobileMenu />
        <div className="pt-44 md:pt-56">
          <Component {...pageProps} />
        </div>
        <Footer />
      </MenuOpenContextProvider>
    </ThemeContextProvider>
  );
}
