import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import slideicon from "../../assets/slideicon.png";
import previcon from '../../assets/previcon.png';
import { servicesTypes } from "../../Data/Data";
import { Link } from "react-router-dom";
function Dropdown() {
  const [hoveredType, setHoveredType] = useState(servicesTypes[0]?.type); // State to keep track of hovered type
  const [currentPage, setCurrentPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
 
  const handlePageChange = (pageNumber) => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsAnimating(false); // Stop animation after a delay
    }, 500); // Change 500 to your animation duration
  };
  // Number of items to display per page
  const itemsPerPage = 4;

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <div className="lg:flex gap-4 md:px-20 animate-flip-down  font-bold absolute bg-white w-full z-50  hidden">
      <div className="w-1/3">
        <ul>
          {servicesTypes.map((service, index) => (
            <li
              key={index}
              className="my-3 flex items-center gap-3 hover:text-[#652D91] cursor-pointer hover:bg-gray-200 p-1"
              onClick={() => setHoveredType(service.type)}
              onMouseEnter={() => setHoveredType(service.type)} // Set hovered type on mouse enter
            >
              <DoneIcon /> {service.type}
            </li>
          ))}
           <Link className="text-[#652d91] flex my-3 uppercase p-1 items-center text-sm" to="/services" onClick={() => props.onCloseDropdown()}>view more</Link>
        </ul>
      </div>
      <div className="my-3 w-full">
        {servicesTypes.map((service, index) => (
          <div key={index} className="flex w-full gap-3">
            {hoveredType === service.type &&
              service.subtypes
                .slice(startIndex, endIndex)
                .map((subtype, subIndex) => (
                  <div key={subIndex} className={`w-full animate-fade-up ${isAnimating?'animate-jump-out':''}`}>
                    <p className="text-[#652D91] border-b-[#652d91] border border-t-0 border-r-0 border-l-0">
                      {subtype.subheading}
                    </p>
                    <ul>
                      {subtype.treatments.map((treatment, treatmentIndex) => (
                        <li
                          key={treatmentIndex}
                          className="my-2 flex items-center text-sm gap-3 hover:text-[#652D91] cursor-pointer py-2 hover:bg-gray-200"
                        >
                          <TripOriginIcon
                            sx={{ fontSize: "10px" }}
                            className="text-[#652D91]"
                          />{" "}
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
          </div>
        ))}
        {hoveredType && (
          <div className="flex justify-end items-center text-[#652D91]">
            {currentPage > 0 && (
              <button
                className="uppercase flex items-center  animate-fade-left"
                onClick={() => handlePageChange(currentPage - 1)}
              >
            <img src={previcon}/>
              </button>
            )}
            {servicesTypes.find((service) => service.type === hoveredType)
              ?.subtypes.length > endIndex && (
              <button
                className="uppercase flex items-center animate-fade-left"
                onClick={() => handlePageChange(currentPage + 1)}
              >
              <img src={slideicon}/>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
