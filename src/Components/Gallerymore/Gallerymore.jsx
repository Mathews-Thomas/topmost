import React from "react"; // Import React library
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"; // Import icons for pagination
import { useState } from "react"; // Import useState hook for managing state
import G1 from "../../assets/galleryreadmoreimg1.png"; // Import image assets
import G2 from "../../assets/galleryreadmoreimg2.png";
import G3 from "../../assets/galleryreadmoreimg3.png";
import G4 from "../../assets/galleryreadmoreimg4.png";
import G5 from "../../assets/galleryreadmoreimg5.png";

function Gallerymore() {
  // Define gallery items
  const [Animation, setAnimation] = useState(false); // State to toggle animation
  const [galleryItems, setGalleryItems] = useState({
    "SMILE GALLERY": [
      { img: G1 },
      { img: G2 },
      { img: G3 },
      { img: G4 },
      { img: G5 },
      { img: G1 },
      { img: G2 },
      { img: G3 },
      { img: G4 },
      { img: G5 },
    //   add more images to activate next and prev buttons
    ],
    "PATIENTS": [{ img: G2 }, { img: G2 }, { img: G3 }, { img: G4 }, { img: G5 }],
    "CLINICS": [{ img: G3 }, { img: G2 }, { img: G3 }, { img: G4 }],
  });

  const [selectedServiceType, setSelectedServiceType] =
    useState("SMILE GALLERY"); // State for selected service type
  const [currentPage, setCurrentPage] = useState(1); // State for current page number
  const itemsPerPage = 10; // Number of items per page

  // Get current items based on selected service type and pagination
  const currentItems = galleryItems[selectedServiceType].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle button click for service type
  const handleButtonClick = (serviceType) => {
    setSelectedServiceType(serviceType);
    setCurrentPage(1); // Reset current page to 1 when service type changes
    setAnimation(true); // Trigger animation
    setTimeout(() => setAnimation(false), 1000); // Reset animation after 1 second
  };

  return (
    <>
      {/* Gallery header */}
      <div className="grid md:grid-cols-2 gap-2 md:px-20 md:py-0 p-7 mt-9 2xl:w-[1440px] w-auto mx-auto">
        <div>
          <h1 className="font-mono uppercase">latest update</h1>
          <p className="md:text-4xl  font-semibold">
            Welcome to our online gallery
          </p>
          {/* Service type buttons */}
          <div className="flex my-4 gap-5 mx-4 text-[#652D91] flex-wrap">
            <button
              className={`border-b-2 border-white hover:border-b-[#652D91] ${
                selectedServiceType === "SMILE GALLERY"
                  ? "border-b-[#652D91]"
                  : ""
              } `}
              onClick={() => handleButtonClick("SMILE GALLERY")}
            >
              SMILE GALLERY
            </button>
            <button
              className={`border-b-2 border-white hover:border-b-[#652D91] ${
                selectedServiceType === "PATIENTS" ? "border-b-[#652D91]" : ""
              } `}
              onClick={() => handleButtonClick("PATIENTS")}
            >
              PATIENTS
            </button>
            <button
              className={`border-b-2 border-white hover:border-b-[#652D91] ${
                selectedServiceType === "CLINICS" ? "border-b-[#652D91]" : ""
              } `}
              onClick={() => handleButtonClick("CLINICS")}
            >
              CLINICS
            </button>
          </div>
        </div>
        {/* Pagination */}
        <div className="md:justify-end flex">
          {/* Previous button */}
          <div>
            <button
              key="previous"
              onClick={() => paginate(currentPage - 1)}
              className={`mx-1 px-5 py-3 hover:bg-gray-200 text-black border-black border  inline-flex  justify-center rounded ${
                currentPage === 1
                  ? "cursor-not-allowed border border-gray-300 text-gray-300"
                  : ""
              }`}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon
                className={`h-6 w-6 text-[#652D91] ${
                  currentPage === 1 ? "text-[#b89ecc]" : ""
                }`}
                aria-hidden="true"
              />
              <span>Previous</span>
            </button>
          </div>
          {/* Next button */}
          <div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil(
                  galleryItems[selectedServiceType].length / itemsPerPage
                )
              }
              className={`mx-1 px-5 py-3 hover:bg-gray-200 text-black border-black border inline-flex justify-center rounded ${
                currentPage ===
                Math.ceil(
                  galleryItems[selectedServiceType].length / itemsPerPage
                )
                  ? "cursor-not-allowed text-gray-300 border border-gray-300"
                  : ""
              }`}
            >
              {" "}
              <span>Next</span>{" "}
              <ChevronRightIcon
                className={`h-6 w-6 text-[#652D91] ${
                  currentPage ===
                  Math.ceil(
                    galleryItems[selectedServiceType].length / itemsPerPage
                  )
                    ? "text-[#b89ecc]"
                    : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Gallery images */}
      <div className={`flex flex-wrap justify-center gap-7 md:px-20 p-7 2xl:w-[1440px] w-auto mx-auto ${Animation ? 'animate-fade-down' : ''}`}>
  {/* Map through current items */}
  {currentItems.map((item, index) => (
    <div key={index} className={`w-[calc((100% - 4rem) / 3)]  md:w-[calc((100% - 3rem) / 2)]`}>
      <div className="flex justify-center">
        <div>   
          <img
            src={item.img}
            alt={`gallery-${index}`}
            className="w-auto mb-2 md:h-72"
          />
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default Gallerymore; // Export Gallerymore component
