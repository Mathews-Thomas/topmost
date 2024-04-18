import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { dummyDoc } from "../../Data/Data";
const ExpertDocs = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <>
      {/* main container for section */}
      <div className="flex flex-col justify-center items-center mt-14">
        {/* container for the content */}
        <div className="flex flex-col justify-center mx-11 2xl:w-[1440px] w-auto">
          {/* heading section  */}
          <div className="flex md:justify-between md:gap-36 flex-col md:flex-row flex-wrap">
            <div className="md:w-1/2 mx-10">
              <h1 className="md:text-2xl sm:text-xl lg:text-3xl xs:text-lg font-semibold text-zinc-900 uppercase xs:text-s md:text-start">
                Meet Our Team of Expert doctors
              </h1>
              <p className="mt-3 md:text-xl sm:text-lg xs:text-base">
                Unveil Your Best Smile and Skin
              </p>
            </div>
            <div className="flex md:items-end xs:items-center md:w-auto md:ml-auto md:mt-0 mt-4">
              <Link className="text-purple-900 xs:ml-9 md:ml-0" to="/doctorsmore">
                View More
              </Link>
            </div>
          </div>
          {/* card carosel */}
        </div>
        <div className="2xl:w-[1440px] w-full m-10">
          <Slider {...settings}>
            {dummyDoc.map((item) => (
              <div key={item.id} className="px-2 h-auto 3xl:w-[35rem]">
                <div className="flex flex-col items-center justify-center h-auto py-5 mx-auto ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mx-auto w-auto  h-auto mb-3"
                  />
                  <h2 className="text-center mb-2 2xl:text-3xl text-2xl text-[#652D91]">{item.title}</h2>
                  <p className="mb-4 text-[#181818] text-base">{item.designation}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ExpertDocs;