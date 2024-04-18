import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Rating } from "@material-tailwind/react";
import { feedbackcustomers } from "../../Data/Data";
import { useState } from "react";
function Feedback() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Change this value according to your needs
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = feedbackcustomers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {/* customer feedback head section */}
      <div className="grid md:grid-cols-2 gap-2 md:px-20 md:py-0 p-7 mt-7 2xl:w-[1440px] w-auto mx-auto">
        <div>
          <h1 className="font-bold md:text-xl">Our Customer Feedback</h1>
          <p className="md:text-lg text-[#652D91]">
            Listen to what our customers have to say, not just our claims
          </p>
        </div>
        {/* button flex section */}
        <div className="md:justify-end flex">
          {/* Previous button section */}
          <div>
            <button
              key="previous"
              onClick={() => paginate(currentPage - 1)}
              className={`mx-1 px-5 py-3 hover:bg-gray-200 text-black border-black border  inline-flex  justify-center rounded ${
                currentPage === 1
                  ? "cursor-not-allowed border border-gray-300 text-gray-300"
                  : " "
              }`}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon
                className={`h-6 w-6 text-[#652D91] ${(currentPage === 1)?"text-[#b89ecc]":" "}`}
                aria-hidden="true"
              />
              <span>Previous</span>
            </button>
          </div>
          {/* Next button section */}
          <div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil(feedbackcustomers.length / itemsPerPage)
              } // Disable if already on the last page
              className={`mx-1 px-5 py-3 hover:bg-gray-200 text-black border-black border inline-flex justify-center rounded ${
                currentPage ===
                Math.ceil(feedbackcustomers.length / itemsPerPage)
                  ? "cursor-not-allowed text-gray-300 border border-gray-300"
                  : " "
              }`}
            >
              {" "}
              <span>Next</span>{" "}
              <ChevronRightIcon
                className={`h-6 w-6 text-[#652D91] ${currentPage ===
                    Math.ceil(feedbackcustomers.length / itemsPerPage)? "text-[#b89ecc]":" "}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
      {/* feedback customers details section */}
      <div className="grid md:grid-cols-3 md:grid-rows-2 md:p-14 p-7 gap-2 2xl:w-[1440px] w-auto mx-auto">
        {/* mapping the feedback customers */}
        {currentItems.map((item, index) => (
          <div key={index} className="p-10 border border-inherit">
            {/* customer image and flex item */}
            <div className="flex gap-3 flex-wrap">
              <div>
                <img
                  src={item.img}    
                  className="w-14 h-auto mb-2"
                />
              </div>
              <div>
                <h1 className="text-yellow-500">< Rating value={item.rating} readonly/></h1>
                <h3 className="text-xl font-semibold mb-3 line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
            <h3 className="text-lg mb-3 font-mono line-clamp-4">{item.describtion}</h3>
          </div>
        ))}
      </div>
      {/* pagination circle button */}
      <div className="justify-center flex mb-3">
        {Array.from(
          { length: Math.ceil(feedbackcustomers.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 p-1 rounded ${
                currentPage === i + 1
                  ? "bg-[#652D91] text-white"
                  : "bg-[#652D914D] text-black"
              }`}
            >
            </button>
          )
        )}

      </div>
    </>
  );
}

export default Feedback;
