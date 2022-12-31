import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export default ThemeContext;

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => setInitialTheme(), []);

  function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      setTheme('light');
      document.querySelector('html').classList.remove('dark');
    }
  }

  function changeTheme() {
    document.querySelector('html').classList.toggle('dark');

    const newTheme = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
