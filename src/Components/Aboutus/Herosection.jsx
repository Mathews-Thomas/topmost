import React from "react";
import AB1 from "../../assets/AB-1.png";

function Herosection() {
  return (
    <>
     <div className="w-full mx-auto">
        <div className="bg-[#B296C8] md:h-[20rem] xs1:h-[15rem] h-[11rem]  flex justify-center">
        <h1 className="text-white md:text-2xl xs1:text-xl text-base max-w-[55rem] md:py-10 xs:py-10 py-8 text-center px-5">
            For the smile that lights up a room and the skin that glows with
            confidence, we're here to make you feel your best every day
          </h1>
        </div>
        <div className=" flex px-10 md:-mt-44 xs1:-mt-24 -mt-16 justify-center">
          <img src={AB1} className="w-auto max-w-full md:py-0 py-2" alt="AB1" />
        </div>
      </div>
    </>
  );
}

export default Herosection;
