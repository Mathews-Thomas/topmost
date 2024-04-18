import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Dropdown from "./Dropdown"; // Importing Dropdown component
export default function Navbar({scrollToBookAppointment}) { 
  const [open, setOpen] = useState(false); // State for controlling mobile menu open/close
  const [openDropdown, setOpenDropdown] = useState(false);// State for controlling desktop dropdown open/close
  const dropdownRef = useRef(null);
 //function to close the mobile nav when clicking the links
 const handleCloseMobileNav = () => {
    setOpen(false);
  };
  //function to close the dropdown on clicking the links
  const handleOpenDropdown =()=>{
    setOpenDropdown(false);
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <nav className="bg-white w-full mx-auto lg:animate-fade-down lg:sticky lg:top-0 z-50 "ref={dropdownRef}>
      <div className="flex items-center font-medium justify-around px-3 2xl:w-[1440px] mx-auto">
        <div className="z-50 lg:w-auto w-full justify-between flex items-center">
          <img src={logo} alt="logo" className="lg:w-[16rem] lg:h-[6rem] h-20"/>
          <div className="lg:hidden block" onClick={() => setOpen(!open)} role="button">
            {open ? <CloseIcon sx={{ fontSize: 40 }} className="text-[#652d91] animate-jump"/> : <MenuIcon sx={{ fontSize: 40 }} />}
          </div>
        </div>
        <ul className="lg:flex hidden items-center gap-1 uppercase lg-text-base text-sm">
          <li><Link to="/" className="py-2 px-3 inline-block hover:text-[#652D91] hover:border-b-[#652d91] hover:border-b-2" onClick={handleOpenDropdown} onMouseEnter={handleOpenDropdown}>Home</Link></li> 
          <li className="py-2 px-3 flex items-center cursor-pointer hover:text-[#652D91] relative hover:border-b-[#652d91] hover:border-b-2" onMouseEnter={() => setOpenDropdown(true)} >
            Services {openDropdown ? <ArrowDropUpIcon/>:<ArrowDropDownIcon/>}
          </li>
          <li><Link to="/blogs" className="py-2 px-3 inline-block hover:text-[#652D91] hover:border-b-[#652d91] hover:border-b-2" onClick={handleOpenDropdown} onMouseEnter={handleOpenDropdown}>Blogs</Link></li>
          <li><Link to="/careers" className="py-2 px-3 inline-block hover:text-[#652D91] hover:border-b-[#652d91] hover:border-b-2"onClick={handleOpenDropdown} onMouseEnter={handleOpenDropdown}>Careers</Link></li>
          <li><Link to="/aboutus" className="py-2 px-3 inline-block hover:text-[#652D91] hover:border-b-[#652d91] hover:border-b-2" onClick={handleOpenDropdown} onMouseEnter={handleOpenDropdown}>About Us</Link></li>
          <li><Link to="/contactus" className="py-2 px-3 inline-block hover:text-[#652D91] hover:border-b-[#652d91] hover:border-b-2"onClick={handleOpenDropdown} onMouseEnter={handleOpenDropdown}>Contact Us</Link></li>
        </ul>
        <div className="lg:block hidden" onClick={scrollToBookAppointment}>
          <button type="button" className="focus:ring-0 focus:outline-none focus:ring-[#652D91] py-2 px-3 hover:animate-shake hover:bg-[#652D91] hover:text-white border border-[#652D91]"onClick={handleOpenDropdown} onMouseEnter={handleOpenDropdown}>Book Appointment</button>
        </div>
        {/* Mobile nav */}
        <ul className={`lg:hidden block absolute w-full h-full text-black bottom-0 lg:py-24 py-32 pl-4 bg-white px-3 text-left duration-500 ${open ? `left-0 z-10` : `left-[-100%]`}`} >
          <li><Link to="/" className="py-4 px-3 inline-block uppercase hover:text-[#652D91]" onClick={handleCloseMobileNav}>Home</Link></li>
          <li className="flex items-center cursor-pointer hover:text-[#652D91] py-4 px-3 uppercase" onClick={handleCloseMobileNav}>
            <Link to="/services">Services</Link>
          </li>
          <li><Link to="/blogs" className="py-4 px-3 inline-block uppercase hover:text-[#652D91]" onClick={handleCloseMobileNav}>Blogs</Link></li>
          <li><Link to="/careers" className="py-4 px-3 inline-block uppercase hover:text-[#652D91]" onClick={handleCloseMobileNav}>Careers</Link></li>
          <li><Link to="/aboutus" className="py-4 px-3 inline-block uppercase hover:text-[#652D91]" onClick={handleCloseMobileNav}>About Us</Link></li>
          <li><Link to="/contactus" className="py-4 px-3 inline-block uppercase hover:text-[#652D91]" onClick={handleCloseMobileNav}>Contact Us</Link></li>
          <div className="py-4">
            <a href="/#bookAppointmentSection"  className="focus:ring-0 focus:outline-none focus:ring-[#652D91] py-2 px-3 hover:bg-[#652D91] hover:text-white border border-[#652D91]"onClick={handleCloseMobileNav}>Book Appointment</a>
          </div>
        </ul>
      </div>
      {/*onCloseDropdown for passing props to close the dropdown */}
      {openDropdown && <Dropdown/>} 
    </nav>
  );
}
