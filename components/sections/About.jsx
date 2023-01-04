import Card from "../UI/Card";
import Image from "next/image";
import { ABOUT } from "../../constants/data";

export default function About() {
  return (
    <section className="section m-horizontal pb-4" id="aboutUs">
      <div className="m-horizontal grid gap-9 pt-9 pb-4 md:pt-20 md:pb-4 xl:gap-20 xl:pb-4">
        <div>
          <h2 className="mb-3 md:mb-6">
            <span className="h2 xl:text-7xl">About Us</span>
          </h2>
          <div className="flex flex-grow">
            {ABOUT.map((card) => (
              <Card
                key={card.title}
                borderRadius="rounded-2xl md:rounded-4xl"
                //classes="w-[300px] md:w-[380px] relative h-full"
                classes="w-full h-full mx-4"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="no-select-or-drag mb-4 mt-8 mr-8 inline-block w-32 rounded-md dark:bg-white"
                  width={64}
                  height={64}
                  style={{
                    float: "right",
                    maxWidth: "48px",
                    maxHeight: "48px",
                  }}
                />
                <div className="relative px-5 pt-6 pb-8 md:px-7 md:pt-8 md:pb-10">
                  <h3 className="mt-12 mb-2 text-2xl font-bold text-black dark:text-white md:mb-3 md:text-2xl">
                    {card.title}
                  </h3>

                  <p className="mb-4 leading-relaxed text-purple dark:text-lightPurple md:mb-6">
                    {card.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
