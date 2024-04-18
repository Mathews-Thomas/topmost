import React from "react";
import Herosection from "../Components/Aboutus/Herosection";
import Whyus from "../Components/Aboutus/Whyus";
import Technology from "../Components/Aboutus/Technology";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Aboutus() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Herosection />
      <Whyus />
      <Technology />
    </>
  );
}

export default Aboutus;
