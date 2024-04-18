import { useEffect, useRef } from "react";
import icon1 from "../../assets/Quality1.png";
import icon2 from "../../assets/Quality2.png";
import icon3 from "../../assets/Quality3.png";
import icon4 from "../../assets/Quality4.png";
import icon5 from "../../assets/Quality5.png";

const LoveUsSection = () => {
  const loveUsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    loveUsRef.current.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const loveUs = [
    {
      id: 1,
      icon: icon1,
      title: "Top Quality",
    },
    {
      id: 2,
      icon: icon2,
      title: "best care",
    },
    {
      id: 3,
      icon: icon3,
      title: "Excellence",
    },
    {
      id: 4,
      icon: icon4,
      title: "Treatment",
    },
    {
      id: 5,
      icon: icon5,
      title: "service",
    },
  ];

  return (
    <>
      <div className="h-[20rem] xs:h-auto flex items-center justify-center w-full bg-[#D8CAE3] py-10">
        <div className="flex flex-col w-auto gap-5">
          <div className="flex flex-col items-center justify-center gap-2 mx-5">
            <h1 className="text-black font-semibold md:text-4xl uppercase">
              Why you'll love us
            </h1>
            <p className="md:text-2xl text-gray-500 font-light">
              Discover Why Our Patients Choose Us for Quality Care and Beautiful
              Results!
            </p>
          </div>
          <div className="flex flex-wrap flex-row gap-14 items-center justify-center mx-7">
            {loveUs.map((qua, index) => (
              <div
                key={qua.id}
                ref={(el) => (loveUsRef.current[index] = el)}
                className="flex flex-col items-center justify-center opacity-0"
                id="Review-section"
              >
                <img src={qua.icon} alt="quality" className="w-16 h-16" />
                <h1 className="uppercase md:font-semibold text-xl text-purple-900 mt-2">
                  {qua.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoveUsSection;
