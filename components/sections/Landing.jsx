import { useRouter } from "next/router";
import Image from "next/image";
import GradientBorder from "../UI/GradientBorder";
import Button from "../UI/Button";

import OfficeClosed from "../../public/img/graphics/office_v1_close.webp";
import OfficeOpen from "../../public/img/graphics/office_v1_open.webp";
import OfficeStatusCard from "../cards/OfficeStatusCard";
import { YES } from "../../constants/data";

export default function Landing({ officeStatus }) {
  const router = useRouter();

  const BUTTONS = [
    {
      text: "Join Us",
      onClick: () => window.open("https://www.bit.ly/dsc-23", "_blank"),
    },
    {
      text: "Events",
      onClick: () => router.push("/#events"),
    },
  ];

  return (
    <section className="section m-horizontal text-center">
      <div className="md:flex">
        <div className="mx-auto max-w-[715px]">
          <h1 className="mb-5 text-2xl font-bold 3xs:text-3xl 2xs:text-4xl xs:text-5xl sm:text-center sm:text-6xl md:mb-6 md:text-left md:text-7xl lg:text-8xl xl:text-9xl">
            <span className="gradient-text black-to-purple dark:white-to-light-purple">
              University of Waterloo <br /> Data Science Club
            </span>
          </h1>

          <p className="mb-10 leading-relaxed text-purple dark:text-lightPurple sm:text-center sm:text-lg sm:leading-relaxed md:mb-14 md:text-left lg:text-xl lg:leading-relaxed">
            Inspiring the data science leaders of the future by building an
            inclusive community to bridge the gap between academics and the
            industry.
          </p>

          <div className="flex flex-col gap-5 xs:mx-auto xs:flex-row xs:justify-center xs:gap-8 md:justify-start md:gap-12">
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
        <div className="transition duration-500 ease-in-out hover:-translate-y-10 hover:scale-105 sm:mt-10">
          <Image
            src={officeStatus === YES ? OfficeOpen : OfficeClosed}
            width={600}
            height={600}
            className="no-select-or-drag m-auto sm:max-w-sm lg:max-w-none"
            alt="isometric view of the data science club office"
            unoptimized={true}
          />
          <OfficeStatusCard
            officeStatus={officeStatus}
            classes="relative 2xl:bottom-2/3 2xl:left-1/3 xl:bottom-2/3 xl:left-1/3 lg:bottom-1/2 lg:left-1/3 sm:bottom-0 sm:m-auto md:w-56 sm:w-full white-to-lighter-purple dark:black-to-dark-purple"
          />
        </div>
      </div>
    </section>
  );
}
