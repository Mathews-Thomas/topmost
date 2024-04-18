import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Correct import path

import bg from "../../assets/BSpace1.png";

gsap.registerPlugin(ScrollTrigger);

const BeautifyS = () => {
  useEffect(() => {
    // Animation
    gsap.fromTo(
      ".box-a",
      {
        x: 150,
        y: 700, // Initial position
      },
      {
        x: -500,
        y: 600, // Target position
        duration: 4,
        ease: "power1.inOut", // Use a slow-in, slow-out easing function
        scrollTrigger: {
          trigger: ".box-a",
          start: "top 90%", // Start the animation when the top of the element is 90% in the viewport
          end: "bottom bottom",
          scrub: true,
          pin: true,
        },
      }
    );
  }, []);
  

  return (
    <div className="w-auto mx-auto flex flex-col justify-center items-center 2xl:w-[1440px]">
      <div className="flex md:flex-row flex-col justify-center items-center my-14 mx-16 md:h-[31rem]">
        <div className="flex flex-wrap items-center gap-5 md:w-[32rem] w-auto" >
          <h1 className="text-3xl font-bold">Beautify Your Space</h1>
          <p className="text-[#969696] mr-5">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <button className="capitalize bg-[#652D91] text-white px-8 py-3 mb-2">
            Learn more
          </button>
        </div>

        {/* image container */}
        <div className="w-auto h-auto box box-a ">
          <img src={bg} alt="Beautify Your Space" className="h-full w-full" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center my-14 mx-16 md:h-[31rem] md:w-[66rem]">
        {/* image container */}
        <div className="w-auto h-auto box box-b">
       
      
          <img src={bg} alt="Beautify Your Space" className="h-full w-full" />
        </div>
        <div className="flex flex-wrap items-center gap-5 md:w-[32rem] w-auto">
          <h1 className="text-3xl font-bold">Beautify Your Space</h1>
          <p className="text-[#969696] mr-5">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <button className="capitalize bg-[#652D91] text-white px-8 py-3 mb-2">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeautifyS;
