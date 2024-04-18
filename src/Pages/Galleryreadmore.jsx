import React from 'react'
import Gallerymore from '../Components/Gallerymore/Gallerymore'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Galleryreadmore() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
  
    <Gallerymore/>
    
    </>
  )
}

export default Galleryreadmore