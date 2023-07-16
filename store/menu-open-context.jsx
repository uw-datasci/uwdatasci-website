import { createContext, useState } from 'react';

const MenuOpenContext = createContext();

export default MenuOpenContext;

export function MenuOpenContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <MenuOpenContext.Provider
      value={{ isMenuOpen, openMenu, closeMenu, toggleMenu }}
    >
      {children}
    </MenuOpenContext.Provider>
  );
}
