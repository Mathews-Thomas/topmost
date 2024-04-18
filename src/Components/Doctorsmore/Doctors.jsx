import React from 'react';
import { doctors ,dermatologistandcosmetologist,dentist } from '../../Data/Data';
import { useState } from 'react';
function Doctors() {
    const [currentPage, setCurrentPage] = useState(1);
  const [selectedServiceType, setSelectedServiceType] = useState("ALL");
  const itemsPerPage = 8; // Change this value according to your needs
    // Function to get items based on the selected service type
  const getItemsByServiceType = (serviceType) => {
    switch (serviceType) {
      case "DERMATOLOGY & COSMETOLOGY":
        return dermatologistandcosmetologist;
      case "DENTISTRY":
        return dentist;
      default:
        return doctors.concat(
          dermatologistandcosmetologist,
          dentist
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
  };
    return (
       <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 lg:px-20 2xl:w-[1440px] 2xl:mx-auto">
          {/* Map through current items and render doctor cards */}
            {currentItems.map((doctor, index) => (
                <div key={index} className={`flex flex-col items-center justify-center p-4`}>
                    <img src={doctor.img} alt={doctor.name} className="w-52 h-52 md:w-52 md:h-52 object-cover  mb-4" />
                    <div className="md:text-start text-center">
                        <h1 className="text-[#652D91] text-lg md:text-xl font-semibold mb-1">{doctor.name}</h1>
                        <h2 className="text-sm mb-1">{doctor.department}</h2>
                        <p className="text-xs text-gray-700 mb-1">{doctor.qualification}</p>
                        <p className="text-xs text-gray-700">{doctor.qualification2}</p>
                    </div>
                </div>
            ))}
        </div>
         {/* Filter buttons */}
        <div className='text-[#652D91] my-9  flex gap-4 justify-center flex-wrap 2xl:w-[1440px] 2xl:mx-auto mx-7'>
            <button   className={`uppercase border-b-2 border-white hover:border-b-[#652D91] ${
              selectedServiceType === "ALL" ? "border-b-[#652D91]" : ""
            } `}
            onClick={() => handleButtonClick("ALL")}>all</button>
            <button   className={`uppercase border-b-2 border-white hover:border-b-[#652D91] ${
              selectedServiceType === "DENTISTRY" ? "border-b-[#652D91]" : ""
            } `}
            onClick={() => handleButtonClick("DENTISTRY")}>dentist</button>
            <button   className={`uppercase border-b-2 border-white hover:border-b-[#652D91] ${
              selectedServiceType === "DERMATOLOGY & COSMETOLOGY" ? "border-b-[#652D91]" : ""
            } `}
            onClick={() => handleButtonClick("DERMATOLOGY & COSMETOLOGY")}>dermatologist & cosmetologist</button>
        </div>
       </>
    );
}

export default Doctors;
