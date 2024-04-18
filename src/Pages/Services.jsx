import HeroSection from "../Components/Services/HeroSection";
import { OurServices } from "../Components/Services/OurServices";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <HeroSection />
      <OurServices />
    </>
  );
};

export default Services;
