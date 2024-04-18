import React from 'react'
import Herosection from '../Components/Blogreadmore/Herosection'
import Bloggallery from '../Components/Blogreadmore/Bloggallery'
import Aboutour from '../Components/Blogreadmore/Aboutour'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Blogreadmore() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>

    <Herosection/>
    <Bloggallery/>
    <Aboutour/>
   
    </>
  )
}

export default Blogreadmore