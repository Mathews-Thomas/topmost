import React from "react";
import Services from "../Components/HomePage/Services";
import LoveUsSection from "../Components/HomePage/LoveUsSection";
import ExpertDocs from "../Components/HomePage/ExpertDocs";
import Appointment from "../Components/HomePage/Appointment";
import ChooseUs from "../Components/HomePage/ChooseUs";
import BeautifySpace from "../Components/HomePage/BeautifySpace";
import HeroSection from "../Components/HomePage/HeroSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <HeroSection />
      <Services />
      <ChooseUs />
      <ExpertDocs />
      <LoveUsSection />
      <BeautifySpace />
      <Appointment />
    </>
  );
};

export default HomePage;
