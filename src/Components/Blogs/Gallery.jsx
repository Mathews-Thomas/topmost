import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { galleryitems } from '../../Data/Data';
import { Link } from 'react-router-dom';
function Gallery() {
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Change this value according to your needs
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = galleryitems.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    {/* customer gallery head section */}
    <div className="grid md:grid-cols-2 gap-2 md:px-20 md:py-0 p-7 mt-9 2xl:w-[1440px] w-auto mx-auto">
        <div>
          <h1 className="font-bold md:text-xl">Virtual Galley</h1>
          <p className="md:text-lg text-[#652D91]">
          Capturing Beautiful Moments
          </p>
          <Link to="/galleryreadmore" className='text-[#652D91] text-sm'>View More</Link>
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
                Math.ceil(galleryitems.length / itemsPerPage)
              } // Disable if already on the last page
              className={`mx-1 px-5 py-3 hover:bg-gray-200 text-black border-black border inline-flex justify-center rounded ${
                currentPage ===
                Math.ceil(galleryitems.length / itemsPerPage)
                  ? "cursor-not-allowed text-gray-300 border border-gray-300"
                  : " "
              }`}
            >
              {" "}
              <span>Next</span>{" "}
              <ChevronRightIcon
                className={`h-6 w-6 text-[#652D91] ${( currentPage ===
                    Math.ceil(galleryitems.length / itemsPerPage))?"text-[#b89ecc]":" "}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
      {/* galleryitems section */}

      {/* gallery image section*/}
      <div className="grid md:grid-cols-4 md:grid-rows-2  p-7 gap-5 2xl:w-[1440px] w-auto mx-auto justify-center">
        {/* mapping the  gallery image */}
        {currentItems.map((item, index) => (
          <div key={index}>
            {/* gallery image*/}
            <div>
              <div>
                <img
                  src={item.img}    
                  className="w-auto h-auto mb-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery