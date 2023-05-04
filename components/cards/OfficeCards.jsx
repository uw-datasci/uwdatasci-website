import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Card from "../UI/Card";

const OfficeCard = ({ opacity, children, classes }) => {
  return (
    <section
      style={{ height: "100vh" }}
      className={`flex max-w-md flex-col justify-center p-10 ${classes}`}
    >
      <Card
        classes="flex flex-col"
        borderRadius="rounded-lg md:rounded-2xl"
        style={{
          opacity: opacity,
        }}
      >
        <div className="flex px-3 pt-7 pb-9 text-center">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </Card>
    </section>
  );
};

export const Overlay = () => {
  const scrolly = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scrolly.range(0, 1.5 / 3));
    setOpacitySecondSection(scrolly.curve(1.5 / 3, 1.5 / 3));
    setOpacityLastSection(scrolly.range(2 / 3, 1.5 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen dark:text-white">
        <OfficeCard opacity={opacityFirstSection} classes="mx-44">
          <h1 className="font-serif text-3xl font-semibold">
            This is the DSC Office <b>@ MC 3034</b>
          </h1>
        </OfficeCard>
        <OfficeCard
          right
          opacity={opacitySecondSection}
          classes="mr-32 ml-auto"
        >
          <h1 className="font-serif text-3xl font-semibold">
            Drop by and chat with us about
          </h1>
          <ul className="leading-9">
            <li>Joining the club</li>
            <li>Buying merch</li>
            <li>
              <b>Sesame Street</b>
            </li>
          </ul>
        </OfficeCard>
        <OfficeCard opacity={opacityLastSection} classes="ml-20">
          <h1 className="font-serif text-3xl font-semibold">
            Use the office machines!
          </h1>
          <p className="text-gray-500">
            Funded by MEF, we have two machines available to members for ML
            model training
          </p>
        </OfficeCard>
      </div>
    </Scroll>
  );
};
