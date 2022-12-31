import { useContext } from 'react';
import ThemeContext from '../../store/theme-context';

export default function ThemeToggle() {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      onClick={themeContext.changeTheme}
      className={`transition-300 h-5 w-5 rotate-180 cursor-pointer rounded-full bg-black outline outline-1 outline-darkPurple dark:rotate-0 dark:outline-lightPurple`}
    >
      <div className="h-5 w-2.5 rounded-l-full bg-lightPurple"></div>
    </div>
  );
}
