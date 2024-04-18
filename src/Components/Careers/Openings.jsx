import React from "react";
import { currentOpenings } from "../../Data/Data";
function Openings() {
  return (
    <>
 {/* opening section and head */}
      {/* header section */}
      <div className="text-center md:px-20 px-7 2xl:w-[1440px] w-auto mx-auto">
        <p className="md:text-xl">
          If you are a healthcare professional with commitment and professionalism and want to be part of Caritas Hospital, we invite you to join the largest private healthcare provider in Topmost dental and skincare.
        </p>
      </div>
      {/* openings sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 md:px-20 px-7 my-6 2xl:w-[1440px] w-auto mx-auto">
        {/* mapping the openings */}
        {currentOpenings.map((vacancy, index) => (
          <div key={index} className="flex flex-col items-center xl:flex-row md:items-center md:justify-start gap-4 md:px-7 py-4  bg-[#f1f1f1] flex-wrap my-3 ">
            <div className="flex justify-center md:justify-start">
              <img src={vacancy.img} alt={vacancy.position} className="w-[12rem]" />
            </div>
            <div>
              <h1 className="font-bold md:text-xl">{vacancy.position}</h1>
              <p>{vacancy.qualification}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Openings;
