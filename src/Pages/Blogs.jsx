import React from 'react'
import Pagination from '../Components/Blogs/Pagination'
import Feedback from '../Components/Blogs/Feedback'
import Gallery from '../Components/Blogs/Gallery'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Blogs() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
    
      <Pagination/>
      <Feedback/>
      <Gallery/>
     
    </div>
  )
}

export default Blogs