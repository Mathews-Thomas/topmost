import React, { useEffect, useRef } from "react";

import bg from "../../assets/BSpace1.png";


const BeautifySpace = () => {
  const textRef= useRef(null);
  const imageRef=useRef(null);

  useEffect(()=>{
    const options={
      root:null,
      rootMargin:"0px",
      threshold:0.1,
    };

    const callback= (entries,observer) =>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          if(entry.target.id ==="text-area"){
            entry.target.classList.add("animate-fade-right", "animate-once" ,"animate-ease-in-out")
          }
          else if(entry.target.id ==="image-area"){
            entry.target.classList.add("animate-fade-left", "animate-once" ,"animate-ease-in-out")
          }
        }else{
          if(entry.target.id ==="text-area"){
            entry.target.classList.remove("animate-fade-right", "animate-once" ,"animate-ease-in-out")
          }else if(entry.target.id ==="image-area"){
           entry.target.classList.remove("animate-fade-left", "animate-once" ,"animate-ease-in-out")
          }
        }
      })
    }

    const observer = new IntersectionObserver(callback,options);
    if(textRef.current) observer.observe(textRef.current);
    if(imageRef.current) observer.observe(imageRef.current);

    return()=>{
      observer.disconnect();
    }
  },[]);
 

  return (
    <div className="w-auto mx-auto flex justify-center items-center 2xl:w-[1440px] h-auto">
      <div className="flex md:flex-row flex-col flex-wrap justify-center items-center my-14 mx-16  w-auto h-auto">
        <div className="flex flex-wrap items-center gap-5 md:w-[32rem] w-auto md:h-[17rem] h-auto mb-5" ref={textRef} id="text-area">
          <h1 className="text-3xl font-bold">Beautify Your Space</h1>
          <p className="text-[#969696] mr-5">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <button className="capitalize bg-[#652D91] text-white px-8 py-3 mb-2">
            Learn more
          </button>
        </div>
        <div className="md:w-[34rem] md:h-[31rem] h-auto w-auto" id="image-area"   ref={imageRef}>
          <img
          
            src={bg}
            alt="Beautify Your Space"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BeautifySpace;
