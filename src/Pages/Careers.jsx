import React from 'react'
import Herosection from '../Components/Careers/Herosection'
import Openings from '../Components/Careers/Openings'
import Join from '../Components/Careers/Join'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Careers() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>

    <Herosection/>
    <Openings/>
    <Join/>
   
    </>
  )
}

export default Careers