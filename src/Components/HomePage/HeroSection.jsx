import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { TiArrowRightThick } from "react-icons/ti";
import { heroDescriptionsData } from "../../Data/Data";
const HeroSection = ({ heroDescriptions }) => { 

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = heroDescriptionsData.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error("Error preloading images:", error));
  }, [heroDescriptionsData]);

  return (
    <>
      {/* main container */}
      <div className="flex w-full h-full justify-center items-center bg-[#FAF8FC] mx-auto">
        {/* container for carousel */}
        <div className={`md:w-[71rem] w-full mx-11 my-11 ${imagesLoaded ? '' : 'hidden'}`}>
          <Carousel
            autoPlay={true}
            hideArrows={true}
            animation="slide"
            navButtonsAlwaysVisible={false}
            navButtonsProps={{}}
            className="w-full"
          >
            {heroDescriptionsData.map((item) => ( 
              <div
                key={item.id}
                className="flex md:flex-row flex-col gap-10 justify-center items-center"
              >
                <div className="flex flex-col justify-center md:gap-5 xs:gap-2 w-full md:w-[38rem] h-auto ">
                  <h1 className="text-xl md:text-4xl font-bold text-[#652D91] capitalize">
                    {item.title}
                  </h1>
                  <span className="text-2xl md:text-5xl font-extrabold capitalize">
                    {item.description}
                  </span>
                  <span className="text-3xl md:text-5xl font-extrabold text-[#652D91] capitalize">
                    {item.description2}
                  </span>
                  <p className="text-sm md:text-base">{item.para}</p>
                  <div className="flex md:flex-row flex-col gap-4 xs:w-[10rem] md:w-auto">
                    <button className="bg-[#652D91] text-white text-xl font-bold md:px-8 md:py-2 flex flex-row items-center capitalize font-sans xs:py-1 xs:px-1">
                      Book now <TiArrowRightThick className="ml-2" />
                    </button>
                    <button className="bg-[#652D91] text-white text-start text-xl font-bold md:px-8 md:py-2 capitalize font-sans xs:py-1 xs:px-1">
                      more info
                    </button>
                  </div>
                </div>
                {item.image && (
                  <div className="md:w-[30rem] w-full justify-center items-center hidden sm:flex">
                    <img
                      src={item.image}
                      alt="hero section Image"
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
