import bg from "../../assets/ServiceHero.png";

const HeroSection = () => {
  return (
    <>
      {/* main container for the hero section */}
      <div className="w-full  h-auto mx-auto bg-[#FAF8FC]">
        {/* inner container */}
        <div className="flex md:flex-row flex-col justify-center items-center m-14 gap-10">
          {/* container for the text */}
          <div className="flex flex-col gap-5 items-start justify-center md:w-[34rem] md:h-[13rem] h-auto w-auto">
            <h1 className="uppercase md:text-5xl text-3xl text-[#652D91] font-bold">our services</h1>
            <p>
              At WEEKENDUX the chief determination is to clear the minds of our
              students about their goals, while making them consistent in their
              ambitions and pushing them to be confident for their journey
              towards the course of time.At WEEKENDUX the chief determination is
              to clear the minds of our students about their goals
            </p>
          </div>
          {/* container for the image */}
          <div className="md:w-[31rem] md:h-[28rem] w-auto h-auto">
            <img src={bg} alt="sevice hero" className="h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
