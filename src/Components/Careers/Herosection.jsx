import React from "react";
import headerimage from "../../assets/careersheadimage.png";

function Herosection() {
  return (
    <>
      {/* careers herosection */}
      <div className="relative bg-black my-7 -z-10">
        <img
          src={headerimage}
          style={{ opacity: "0.5" }}
          className="w-full"
          alt="headerimage"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-center px-6">
            <h1 className="md:text-4xl  font-bold text-white mb-2">
              CAREERS
            </h1>
            <h1 className="md:text-4xl font-bold text-white">
              TOPMOST SKIN AND DENTAL
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
