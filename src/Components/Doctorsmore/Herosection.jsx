import React from "react";
import headimg from "../../assets/doctorsmorehead.png";

function Herosection() {
  return (
    <>
      <div className="md:relative 2xl:w-[1440px] 2xl:mx-auto px-7">
        <div className=" md:block hidden "><img src={headimg}/></div>
        <div className="md:absolute md:top-0 md:left-0 lg:top-28 lg:left-24  xl:left-36 xl:top-16 md:w-[30rem] text-center my-5">
          <h1 className="text-[#BC74A5] md:text-3xl text-2xl">TOPMOST</h1>
          <h1 className="text-[#0E54AE] md:text-3xl text-2xl">Specialized Team</h1>
          <p>We are a group of expert physicians collaborating to provide you with optimal treatment tailored to your needs, delivered at a convenient time for you</p>
        </div>
      </div>
    </>
  );
}

export default Herosection;
