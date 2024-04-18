import React from "react";
import { Link, useParams } from "react-router-dom";
import { subservice } from "../../Data/Data";
import RemoveIcon from "@mui/icons-material/Remove";
function Herosection() {
  const { serviceId } = useParams();

  // Find the service data based on the serviceId
  const serviceData = subservice.find(
    (service) => service.serviceId === parseInt(serviceId)
  );
  return (
    <>
      <div className="grid md:grid-rows-1 md:grid-cols-2  w-auto mx-auto">
        <div className="flex justify-center ">
          <img src={serviceData.headimage}  className="w-full"/>
        </div>
        <div className="md:py-48 px-7 bg-[#652D91] text-white py-5">
          <p className="uppercase text-2xl">{serviceData.servicehead}</p>
          <p className="text-4xl">{serviceData.subheading}</p>
          <p className="my-2 text-lg">{serviceData.subcontent}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-2 md:gap-16 gap-7 items-center my-7 mx-7 md:px-5 px-4 2xl:w-[1440px] w-auto md:mx-auto">
        {serviceData.treatment.map((item, index) => (
          <div key={index} className="shadow-2xl shadow-slate-400 ">
            <div>
              <img src={item.treatmentImage} className="w-full"/>
            </div>
            <div className="md:mx-7 my-5 mx-7">
              <p className="uppercase font-bold border-b-2 border-[#652D91]">
                {item.treatmenthead}
              </p>
              <p className="my-3">{item.treatmentContent}</p>
              <div>
                {item.treatmentsubitem.map((sub, index) => (
                  <p key={index} className="uppercase my-1 flex items-center text-[#727272] md:text-xs">
                    <RemoveIcon className="text-[#652D91]" /> {sub}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-end text-[#652D91] md:mx-7 my-5 mx-7 font-bold text-sm uppercase">
              <Link to={serviceData.link}>view more</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Herosection;
