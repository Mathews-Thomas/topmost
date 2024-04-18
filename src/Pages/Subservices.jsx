import React from 'react'
import Herosection from '../Components/Subservices/Herosection'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Subservices() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
    <Herosection/>
    </>
  )
}

export default Subservices