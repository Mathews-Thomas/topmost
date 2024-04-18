import React from "react";
import aboutusvideo from "../../assets/aboutusvideo.png";
import border from "../../assets/border.png";
function Whyus() {
  return (
    <>
    {/* head section */}
      <div className="md:px-28 px-7 py-5 2xl:w-[1440px] w-auto mx-auto">
        <h1 className="md:text-3xl font-bold text-xl text-center">
          Our team is committed to supporting you in restoring balance to your
          life
        </h1>
        <p className="md:text-base text-sm text-[#545454] text-center my-3 md:px-28">
          Our team of highly trained professionals uses the latest healing
          technologies to restore you to pain-free health quickly and easily. We
          thoroughly evaluate & treat all of the contributing root factors
          related to your issue. Includes, but is not limit, your work and home
          stressors.
        </p>
      </div>
      {/* image section */}
      <div className="flex justify-center md:px-20  px-7  2xl:w-[1440px] w-auto mx-auto">
        <img src={aboutusvideo} className="w-full h-full" />
      </div>
      {/* whyus section */}
      <div className="my-6 md:px-20 px-7 2xl:w-[1440px] w-auto mx-auto md:py-4">
        <div className="flex items-end gap-3">
          <div className="md:h-[4rem] h-[3rem] md:w-auto w-[1rem] overflow-hidden">
            <img src={border} />
          </div>
          <h1 className="font-bold md:text-2xl text-xl">WHY CHOOSE US</h1>
        </div>
        <p className="md:text-base text-sm my-3 py-5 md:px-20 md:text-justify border-b-4 border-[#652D91]">
          At TOPMOST, our commitment extends to both dental and skin care
          services. We provide top-quality diagnosis and treatment for both
          dental and skin health in a sophisticated setting with the latest
          technology, all at an affordable cost. This dedication is the hallmark
          of the TOPMOST group, where every team member is devoted to meeting
          our patients' needs. We take pride in delivering excellent service
          within a welcoming, clean, and pleasant environment, ensuring even the
          most sensitive patients feel at home.
        </p>
      </div>
    </>
  );
}

export default Whyus;
