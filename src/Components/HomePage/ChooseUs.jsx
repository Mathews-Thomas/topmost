import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef } from "react";

import bg from "../../assets/ChooseUs.png";

const ChooseUs = () => {
  const chooseUsRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "loveUs") {
            entry.target.classList.add(
              "animate-fade-right",
              "animate-duration-[1000ms]",
              "animate-ease-out"
            );
          } else if (entry.target.id === "text-area") {
            entry.target.classList.add(
              "animate-fade-left",
              "animate-duration-[1000ms]",
              "animate-ease-out"
            );
          }
        } else {
          if (entry.target.id === "loveUs") {
            entry.target.classList.remove(
              "animate-fade-right",
              "animate-duration-[1000ms]",
              "animate-ease-out"
            );
          } else if (entry.target.id === "text-area") {
            entry.target.classList.remove(
              "animate-fade-left",
              "animate-duration-[1000ms]",
              "animate-ease-out"
            );
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (chooseUsRef.current) observer.observe(chooseUsRef.current);
    if (textAreaRef.current) observer.observe(textAreaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* main container for the section */}
      <div className="flex justify-center items-center w-full bg-[#FAF8FC]  md:h-[47rem] h-auto mx-auto">
        {/* container div for the section */}
        <div className="flex md:flex-row flex-col gap-20  md:w-[72rem] w-auto  mx-10 my-14">
          <div className="w-auto h-full" id="loveUs" ref={chooseUsRef}>
            <img src={bg} alt="Why choose Us" />
          </div>
          {/* container for the text area */}
          <div
            className="flex flex-col items-start gap-5 md:w-[35rem] w-auto"
            id="text-area"
            ref={textAreaRef}
          >
            <h1 className="text-2xl font-bold text-[#652D91]">Why Choose Us</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">
              We are always working to provide you best of the features in all
              aspects.
            </h1>
            <p>
              At WEEKENDUX the chief determination is to clear the minds of our
              students about their goals, while making them consistent in their
              ambitions and pushing them to be confident for their journey
              towards the course of time.
            </p>
            <p>
              You will find every little thing on the internet in just a click
              of hand, but here we admire that without knowledge and practice
              the internet may even also fail you in your life.
            </p>
            <button className="bg-[#652D91] px-8 py-3 text-white capitalize font-bold flex flex-wrap gap-2 items-center">
              Learn More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
