import React from 'react'
import Herosection from '../Components/Doctorsmore/Herosection'
import Doctors from '../Components/Doctorsmore/Doctors'
import Partners from '../Components/Doctorsmore/Partners'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Doctorsmore() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
  
    <Herosection/>
    <Doctors/>
    <Partners/>
    </>
  )
}

export default Doctorsmore;