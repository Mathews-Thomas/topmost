import React from 'react'
import Herosectionmap from '../Components/Contactus/Herosectionmap'
import Getintouch from '../Components/Contactus/Getintouch'
import Questions from '../Components/Contactus/Questions'
import Contactusform from '../Components/Contactus/Contactusform'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Contactus() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
    
    <Herosectionmap/>
    <Getintouch/>
    <Questions/>
    <Contactusform/>
   
    </>
  )
}

export default Contactus