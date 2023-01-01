import { useRef } from 'react';
import Image from 'next/image';
import chevronLeft from '../../public/img/icons/chevron-left.svg';
import chevronRight from '../../public/img/icons/chevron-right.svg';

export default function Carousel({ title, gap, children }) {
  const carouselRef = useRef(null);

  function scrollLeft() {
    carouselRef.current.scrollLeft -= 200;
  }

  function scrollRight() {
    carouselRef.current.scrollLeft += 200;
  }

  return (
    <>
      <div className="m-horizontal mb-6 flex items-center justify-between md:mb-9">
        <h2 className="h2">{title}</h2>

        <div className="flex gap-3 md:gap-4">
          <div
            className="grid h-10 w-10 cursor-pointer place-content-center rounded-full outline outline-1 outline-purple dark:outline-lightPurple md:h-11 md:w-11"
            onClick={scrollLeft}
          >
            <Image
              src={chevronLeft}
              alt="chevron left"
              className="filter-purple dark:filter-light-purple no-select-or-drag w-6 md:w-7"
            />
          </div>
          <div
            className="grid h-10 w-10 cursor-pointer place-content-center rounded-full outline outline-1 outline-purple dark:outline-lightPurple md:h-11 md:w-11"
            onClick={scrollRight}
          >
            <Image
              src={chevronRight}
              alt="chevron right"
              className="filter-purple dark:filter-light-purple no-select-or-drag w-6 md:w-7"
            />
          </div>
        </div>
      </div>

      <div
        ref={carouselRef}
        className={`no-scrollbar flex overflow-x-scroll scroll-smooth whitespace-nowrap px-5 outline-darkPurple xs:px-7 sm:px-9 xl:px-16 3xl:px-[calc((100%-1280px)/2)]`}
      >
        {children.map((child, i) => (
          <div
            className={`justify-self-stretch ${gap} last:mr-0`}
            key={`child-${i}`}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
}
