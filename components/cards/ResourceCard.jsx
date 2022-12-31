import { useContext } from 'react';
import Image from 'next/image';
import ThemeContext from '../../store/theme-context';
import Card from '../UI/Card';
import Button from '../UI/Button';

export default function ResourceCard({
  title,
  description,
  buttons,
  iconLight,
  iconDark,
}) {
  const themeContext = useContext(ThemeContext);

  return (
    <Card
      borderRadius="rounded-2xl md:rounded-4xl"
      classes="w-[300px] md:w-[380px] overflow-hidden relative"
    >
      <Image
        src={themeContext.theme === 'light' ? iconLight : iconDark}
        alt={title}
        className="absolute -right-8 -top-2 w-40 opacity-10 md:-right-12 md:w-50"
      />
      <div className="relative px-5 pt-6 pb-8 md:px-7 md:pt-8 md:pb-10">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white md:text-3xl">
          {title}
        </h3>
        <p className="mb-6 leading-relaxed text-purple dark:text-lightPurple">
          {description}
        </p>
        <div className="flex flex-col gap-4">
          {buttons.map((button) => (
            <Button
              bg="bg-white dark:bg-black"
              border="rounded-full border border-purple dark:border-lightPurple"
              py="py-2.5"
              font="text-black dark:text-white"
              icon={button.icon ? button.icon : null}
              iconAlt={button.text}
              iconClasses="w-6 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
              classes="text-center"
              onClick={() => window.open(button.link, '_blank')}
              key={button.text}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
