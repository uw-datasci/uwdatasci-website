import { useRouter } from 'next/router';
import GradientBorder from '../UI/GradientBorder';
import Button from '../UI/Button';

export default function Landing() {
  const router = useRouter();

  const BUTTONS = [
    {
      text: 'Join Us',
      onClick: () => window.open('https://bit.ly/dsc-22-signup', '_blank'),
    },
    {
      text: 'Events',
      onClick: () => router.push('/#events'),
    },
  ];

  return (
    <section className="section m-horizontal text-center">
      <div className="mx-auto max-w-[715px]">
        <h1 className="mb-5 text-2xl font-bold 3xs:text-3xl 2xs:text-4xl xs:text-5xl sm:text-6xl md:mb-6 md:text-7xl lg:text-8xl xl:text-9xl">
          <span className="gradient-text black-to-purple dark:white-to-light-purple">
            University of Waterloo <br /> Data Science Club
          </span>
        </h1>

        <p className="mb-10 leading-relaxed text-purple dark:text-lightPurple sm:text-lg sm:leading-relaxed md:mb-14 lg:text-xl lg:leading-relaxed">
          Inspiring the data science leaders of the future by building an
          inclusive community to bridge the gap between academics and the
          industry.
        </p>

        <div className="flex flex-col gap-5 xs:mx-auto xs:flex-row xs:justify-center xs:gap-8 md:gap-12">
          {BUTTONS.map((button) => (
            <GradientBorder
              onClick={button.onClick}
              gradient="dark:white-to-light-purple black-to-purple"
              borderRadius="rounded-full"
              classes="transition-300 md:hover:-translate-y-0.5"
              key={button.text}
            >
              <Button
                bg="white-to-lighter-purple dark:black-to-dark-purple"
                border="rounded-full"
                px="px-7 lg:px-9"
                py="py-3 md:py-4"
                font="gradient-text dark:white-to-light-purple black-to-purple font-medium md:text-lg lg:text-xl"
              >
                {button.text}
              </Button>
            </GradientBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
