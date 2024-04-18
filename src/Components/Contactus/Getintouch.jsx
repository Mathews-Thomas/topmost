import React from "react";
import { Rating } from "@material-tailwind/react";
import {dentistryItems,dermatologyItems,laboratoryItems,dentalcareItems,acrylicDentalLabItems} from '../../Data/Data'
import { useState } from "react";
function Getintouch() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedServiceType, setSelectedServiceType] = useState("ALL");
  const itemsPerPage = 3; // Change this value according to your needs
  const [Animation, setAnimation] = useState(false); // State to toggle animation
  // Function to get items based on the selected service type
  const getItemsByServiceType = (serviceType) => {
    switch (serviceType) {
      case "DERMATOLOGY & COSMETOLOGY":
        return dermatologyItems;
      case "DENTISTRY":
        return dentistryItems;
      case "LABORATORY":
        return laboratoryItems;
      case "ACRYLIC DENTAL LAB":
        return acrylicDentalLabItems;
      default:
        return dentalcareItems.concat(
          dentistryItems,
          laboratoryItems,
          acrylicDentalLabItems
        );
    }
  };
  // Get items based on the selected service type
  const currentItems = getItemsByServiceType(selectedServiceType).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle button click for filtering items
  const handleButtonClick = (serviceType) => {
    setSelectedServiceType(serviceType);
    setCurrentPage(1); // Reset pagination to first page when filter changes
    setAnimation(true); // Trigger animation
    setTimeout(() => setAnimation(false), 1000); // Reset animation after 1 second
 
  };
  return (
    <>
      {/* get in touch buttons and head*/}
      <div className="my-10 2xl:w-[1440px] w-auto mx-auto">
        <h1 className="font-bold md:text-2xl text-center">
          GET IN TOUCH WITH US
        </h1>
        <div className="flex my-4 gap-5 justify-center text-[#652D91] flex-wrap mx-3">
          <button
            className={`border-b-2 border-white hover:border-b-[#652D91] ${
              selectedServiceType === "ALL" ? "border-b-[#652D91]" : ""
            } `}
            onClick={() => handleButtonClick("ALL")}
          >
            ALL
          </button>
          <button
            className={`border-b-2 border-white hover:border-b-[#652D91] ${
              selectedServiceType === "DERMATOLOGY & COSMETOLOGY"
                ? "border-b-[#652D91]"
                : ""
            }`}
            onClick={() => handleButtonClick("DERMATOLOGY & COSMETOLOGY")}
          >
            DERMATOLOGY & COSMETOLOGY
          </button>
          <button
            className={`border-b-2 border-white hover:border-b-[#652D91] ${
              selectedServiceType === "DENTISTRY" ? "border-b-[#652D91]" : ""
            }`}
            onClick={() => handleButtonClick("DENTISTRY")}
          >
            DENTISTRY
          </button>
          <button
            className={`border-b-2 border-white hover:border-b-[#652D91] ${
              selectedServiceType === "LABORATORY" ? "border-b-[#652D91]" : ""
            }`}
            onClick={() => handleButtonClick("LABORATORY")}
          >
            LABORATORY
          </button>
          <button
            className={`border-b-2 border-white hover:border-b-[#652D91] ${
              selectedServiceType === "ACRYLIC DENTAL LAB"
                ? "border-b-[#652D91] "
                : ""
            }`}
            onClick={() => handleButtonClick("ACRYLIC DENTAL LAB")}
          >
            ACRYLIC DENTAL LAB
          </button>
        </div>
      </div>
      {/* pagination dental care items  */}
      <div className={`grid md:grid-cols-3 md:grid-rows-1 md:px-14 md:py-0 px-9 gap-7 2xl:w-[1440px] w-auto mx-auto`}>
        {/* mapping the getin touch items */}
        {currentItems.map((item, index) => (
          <div key={index} className={`md:py-5 shadow-2xl px-3 ${Animation ? 'animate-jump-in' : ''}`}>
            <div>
              <img src={item.img} alt="dentalitem" />
            </div>
            {/* flex title and map image */}
            <div className="flex justify-between items-center my-3 px-3">
              <div>
                <h1 className="font-bold text-lg">{item.title}</h1>
                <p className="text-yellow-500"><Rating value={item.rating}/></p>
              </div>
              {/* blackmap image */}
              <div>
                <img src={item.mapblack} alt="blackmap" />
              </div>
            </div>
            {/* redmap and address */}
            <div className="flex items-center gap-4 my-3">
              <div>
                <img src={item.mapred} alt="redmap" className="w-10"/>
              </div>
              <div>
                <p className="text-base text-[#535858] text-[14px]">{item.address}</p>
              </div>
            </div>
            {/* phonenumber section */}
            <div className="flex items-center gap-4 my-3 flex-wrap">
              <div>
                <img src={item.oldphone} alt="phone" />
              </div>
              <div>
                <p className="text-base text-[#535858] text-[14px]">{item.phonenumber}</p>
              </div>
            </div>
            {/* gmail section */}
            <div className="flex items-center gap-4 my-3  flex-wrap line-clamp-2">
              <div>
                <img src={item.gmailimg} alt="gmail" />
              </div>
              <div>
                <a
                  className="text-base text-[#535858] text-[14px]  hover:underline"
                  href="https://mail.google.com/"
                >
                  {item.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Getintouch;
