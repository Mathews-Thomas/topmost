import React from "react";
import jointeamimage from "../../assets/jointeamimage.png";

function Join() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Join our team section */}
      <div className="text-white bg-[#930FE3] flex flex-col justify-center px-6 py-3 md:px-20 md:w-1/2 ">
        <p className="uppercase font-mono">want to join our team!</p>
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl my-7">
          Join our team to pursue the career of your dreams
        </h1>
        <div className="flex gap-5 items-center flex-wrap">
          <button className="border p-2 bg-[#652D91]">Submit Resume</button>
          <p className="md:block">(OR)</p>
          <p className="border p-2 text-black bg-white">Call: (+91) 9867 5647</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={jointeamimage} alt="Join Team" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Join;
