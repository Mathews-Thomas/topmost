import React from "react";
import "./App.css";
import { lazy ,Suspense } from "react";
import Loader from "./Components/Lazyloading/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Contactus = lazy(() => import("./Pages/Contactus"));
const Blogreadmore = lazy(() => import("./Pages/Blogreadmore"));
const Careers = lazy(() => import("./Pages/Careers"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const Galleryreadmore = lazy(() => import("./Pages/Galleryreadmore"));
const Aboutus = lazy(() => import("./Pages/Aboutus"));
const Doctorsmore = lazy(() => import("./Pages/Doctorsmore"));
const Footer = lazy(() => import("./Components/Footer"));
const Services = lazy(() => import("./Pages/Services"));
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Subservices = lazy(() => import("./Pages/Subservices"));
const Blogs = lazy(() => import("./Pages/Blogs"));

function App() {

  const componentMap ={
    footer:Footer,
    navbar:Navbar
  }
  const FooterComp=componentMap["footer"]
  const Navbarcomp =componentMap['navbar']

    // Function to scroll to the book appointment section
    const scrollToBookAppointment = () => {
      const bookAppointmentSection = document.getElementById('bookAppointmentSection');
      if (bookAppointmentSection) {
        bookAppointmentSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <>
      <BrowserRouter>
      <Suspense fallback ={<Loader/>}>
      <Navbarcomp scrollToBookAppointment={scrollToBookAppointment}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/blogreadmore/:blogId" element={<Blogreadmore />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/galleryreadmore" element={<Galleryreadmore />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/doctorsmore" element={<Doctorsmore />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subservices/:serviceId" element={<Subservices />} />
        </Routes>
        <FooterComp/>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
