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

  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
      {children}
    </MenuOpenContext.Provider>
  );
}
