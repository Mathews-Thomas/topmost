import React from "react";
import Logo from '../../assets/TopMostLogo.png'
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#652D91] bg-opacity-75 z-50">
      <div className="animate-bounce animate-infinite"><img src={Logo} className="w-full"/></div>
    </div>
  );
};
export default Loader;