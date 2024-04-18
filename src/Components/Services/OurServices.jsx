import { TiMinus } from "react-icons/ti";
import { dummyData } from "../../Data/Data";
import { Link } from "react-router-dom";
export const OurServices = () => {
  return (
    <>
      {/* main container for the our services */}
      <div className="w-auto 2xl:w-[1440px] mx-auto">
        {/* container for the contents */}
        <div className="flex flex-col justify-center items-center">
          {/* text container */}
          <div className="flex flex-col items-center justify-center gap-5 md:h-[13rem] h-auto mx-7">
            <h1 className="md:text-3xl text-xl text-[#652D91] font-bold capitalize">
              what we offer
            </h1>
            <h1
              className="md:text-5xl text-2xl text-[#666666] font-bold capitalize"
              style={{ borderBottom: "4px solid #652D91" }}
            >
              our services
            </h1>
            <p>
              Patients receive comprehensive care from expert medical teams that
              focus not only on specific diseases and disorders,but also on
              caring for the whole person
            </p>
          </div>
          {/* card container */}
          <div className="flex flex-wrap  lg:w-[73rem] gap-5 h-auto w-auto m-10 justify-center">
            {dummyData.map((item, index) => (
              // individual card
              <div
                className="md:w-[23rem] md:h-[40rem] w-auto h-auto flex flex-col bg-[#FAF8FC] shadow-2xl shadow-slate-400"
                key={index}
              >
                <div className="md:h-[15rem] w-auto h-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-auto mx-10 mt-5 gap-3 md:h-[21rem] h-auto py-3">
                  <h1
                    className="text-xl font-semibold uppercase relative"
                    style={{
                      borderBottom: "2px solid #652D91",
                      width: "50%",
                      borderBottomWidth: "2px",
                    }}
                  >
                    {item.title}
                  </h1>

                  <p>{item.description}</p>
                  <h1 className="flex items-center uppercase text-[#727272] text-sm font-semibold">
                    <TiMinus style={{ color: "blue", fontSize: "24px" }} />
                    {item.h1}
                  </h1>
                  <h1 className="flex items-center uppercase text-[#727272] text-sm font-semibold">
                    <TiMinus style={{ color: "blue", fontSize: "24px" }} />
                    {item.h2}
                  </h1>
                  <h1 className="flex items-center uppercase text-[#727272] text-sm font-semibold">
                    <TiMinus style={{ color: "blue", fontSize: "24px" }} />
                    {item.h3}
                  </h1>
                  <h1 className="flex items-center uppercase text-[#727272] text-sm font-semibold">
                    <TiMinus style={{ color: "blue", fontSize: "24px" }} />
                    {item.h4}
                  </h1>
                  <h1 className="flex items-center uppercase text-[#727272] text-sm font-semibold">
                    <TiMinus style={{ color: "blue", fontSize: "24px" }} />
                    {item.h5}
                  </h1>
                  <h1 className="flex items-center uppercase text-[#727272] text-sm font-semibold">
                    <TiMinus style={{ color: "blue", fontSize: "24px" }} />
                    {item.h6}
                  </h1>
                  <div className="flex justify-end">
                    <Link to={`/subservices/${item.serviceId}`} className="text-[#652D91] text-sm font-semibold uppercase">View More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
