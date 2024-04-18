import Hero1 from "../../assets/HeroSer1.png";
import Hero11 from "../../assets/HeroSer11.png";
import Hero2 from "../../assets/HeroSer2.png";
import Hero22 from "../../assets/HeroSer22.png";
import Hero3 from "../../assets/HeroSer3.png";
import Hero33 from "../../assets/HeroSer33.png";
import Hero5 from "../../assets/HeroSer4.png";
import Hero55 from "../../assets/HeroSer44.png";
import Hero6 from "../../assets/HeroSer5.png";
import Hero66 from "../../assets/HeroSer55.png";
import Hero7 from "../../assets/HeroSer6.png";
import Hero77 from "../../assets/HeroSer66.png";

import Hero4 from "../../assets/HeroSer8.png";
import Hero44 from "../../assets/HeroSer88.png";

import { useState } from "react";
import { Transition } from "@headlessui/react";

import { useSpring, animated } from "@react-spring/web";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const services = [
    {
      id: 1,
      icon: { normal: Hero1, hovered: Hero11 },
      title: "Dentistry",
      description:
        "Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      icon: { normal: Hero2, hovered: Hero22 },
      title: "Trichology",
      description:
        "Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      icon: { normal: Hero3, hovered: Hero33 },
      title: "dermatology",
      description:
        "Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      icon: { normal: Hero4, hovered: Hero44 },
      title: "cosmetology",
      description:
        "Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      icon: { normal: Hero5, hovered: Hero55 },
      title: "laboratory",
      description:
        "Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet",
    },
    {
      id: 6,
      icon: { normal: Hero6, hovered: Hero66 },
      title: "acrylic Dental lab",
      description:
        "Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet",
    },
    {
      id: 7,
      icon: { normal: Hero7, hovered: Hero77 },
      title: "Dental academy",
      description:
        "Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet",
    },
  ];

  const iconSprings = Array.from({ length: services.length }).map((_, index) =>
    useSpring({
      transform: `rotateY(${hoveredIndex === index ? 180 : 0}deg)`,
      config: { tension: 400, friction: 25 },
    })
  );

  return (
    <>
      <div className="flex justify-center items-center my-14 mx-10">
        <div className="flex flex-col justify-center items-center 2xl:w-[1440px] w-auto">
          <div className="flex flex-col text-center">
            <h1 className="uppercase text-purple-900 text-lg md:text-4xl font-bold">
              services
            </h1>

            <p className="md:text-lg text-gray-700 text-base capitalize text-center mt-4">
              Our commitment to providing top-notch services is evident in every
              department we offer
            </p>
          </div>
          <div className="flex flex-wrap flex-row-2 items-center justify-center gap-10 mt-12 max-w-[1024px]">
            {/* container for mapping */}
            {services.map((ser, index) => (
              <div
                key={ser.id}
                className="flex md:flex-row flex-col items-center xs:items-start justify-center gap-3 xs3:w-[27rem] xs3:h-[32rem] md:w-[26rem] "
              >
                {/* image container */}
                <div
                  className="relative w-[15rem] h-[6rem] cursor-pointer transform transition-transform duration-300 flex "
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  <animated.img
                    src={
                      hoveredIndex === index
                        ? ser.icon.hovered
                        : ser.icon.normal
                    }
                    alt={ser.title}
                    className="absolute inset-0 object-cover p-2"
                    style={iconSprings[index]}
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase md:text-2xl sm:text-xl xs:text-lg xs:mt-5 md:mt-0 font-bold text-purple-700">
                    {ser.title}
                  </h1>
                  <p className="text-sm text-black">{ser.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
