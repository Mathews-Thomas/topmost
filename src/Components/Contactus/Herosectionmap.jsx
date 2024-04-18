import React from "react";
import mapimage from "../../assets/map.png";
function Herosectionmap() {
  return (
    <>
      {/* Herosectionmap */}
      <div
        style={{
          backgroundImage: `url(${mapimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%", 
          height: "70vh", 
          minHeight: "300px", // Set a minimum height
        }}
        className="relative 2xl:w-[1440px] w-auto mx-auto -z-10"
      >
        {/* search box in map */}
        <div className="absolute bottom-10 md:bottom-20 md:right-10 md:w-96">
          <form className="max-w-md ">
            <div className="relative">  
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-[#652D91] dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-md text-gray-900 border border-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="   Search Hospitals"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Herosectionmap;
