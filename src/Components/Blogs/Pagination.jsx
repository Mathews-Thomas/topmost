import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { paginationitems } from "../../Data/Data";
function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Change this value according to your needs

  // Effect to retrieve the stored page number when the component mounts
  useEffect(() => {
    const storedPage = sessionStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(parseInt(storedPage));
    }
  }, []);

  // Calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the array to display items for the current page
  const currentItems = paginationitems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); // Update current page state
    sessionStorage.setItem("currentPage", pageNumber);   // Store current page in session storage
  };
  return (
    <>
      {/* main section of pagination */}
      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-5 md:px-20 md:py-0 2xl:w-[1440px] w-auto mx-auto px-10 my-5">
        {currentItems.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              alt={`Image ${index}`}
              className="w-full h-auto mb-2"
            />
            <p className="text-sm font-mono text-[#1C1C1C] mb-3 mt-3">
              {item.date}
            </p>
            <h3 className="text-lg font-semibold mb-3 line-clamp-1">
              {item.title}
            </h3>
            <Link to={`/blogreadmore/${item.blogId}`} className="text-[#652D91]">
              Read More
            </Link>
          </div>
        ))}
      </div>
      {/* pagination icon function*/}
      <div className="flex flex-wrap justify-center md:mt-9 gap-3 mb-3 2xl:w-[1440px] w-auto md:mx-auto">
        {Array.from(
          { length: Math.ceil(paginationitems.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-5 py-3 ${
                currentPage === i + 1
                  ? "bg-[#652D91] text-white"
                  : "bg-white text-black border-color:inherit border"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
        {/* nextpage button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(paginationitems.length / itemsPerPage)
          } // Disable if already on the last page
          className={`mx-1 px-5 py-3 hover:bg-gray-200 text-black border-color:inherit border
         ${currentPage === Math.ceil(paginationitems.length / itemsPerPage)?"cursor-not-allowed text-gray-400":''} `}
        > Next page
        </button> 
      </div>
    </>
  );
}

export default Pagination;
