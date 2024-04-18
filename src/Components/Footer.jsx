import phone from "../assets/Footer Call.png";
import email from "../assets/EmailIcon.png";
import logo from "../assets/TopMostLogo.png";
import insta from "../assets/Insta.png";
import fb from "../assets/Fb.png";
import twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <>
      {/* main container of the footer */}
      <div className="flex  justify-center items-center">
        {/* container for the parent div */}
        <div className="flex flex-col  w-full  ">
          {/* container for the first child */}
          <div className="flex justify-end my-5">
            <div className="flex md:flex-row flex-col 2xl:w-[1440px] items-center justify-center w-auto gap-5 mx-10">
              {/* phone number div */}
              <div className="flex flex-row gap-3 items-center ">
                <img src={phone} alt="Phone icon" />
                <p className="select-all">(+91) 123 - 4567 - 900</p>
              </div>
              {/* email div */}
              <div className="flex flex-row gap-3 items-center ">
                <img src={email} alt="Email Icon" />
                <p className="select-all">support@topmost.com</p>
              </div>
            </div>
          </div>
          {/* container for the second child */}
          <div className="flex lg:flex-nowrap  flex-wrap gap-14 justify-between w-full bg-[#D8CAE3] md:gap-10 px-10 py-10">
            {/* left side container div */}
            <div className="flex flex-col justify-center items-start w-auto h-auto mx-10 gap-7 py-8">
              <img src={logo} alt="Topmost logo" />
              <p className=" w-auto text-[#545454]">
                At TOPMOST, we blend premier dental, skin, and hair care to
                elevate your natural beauty. Experience the TOPMOST standard in
                a clinic where every treatment is a masterpiece.
              </p>
              {/* container for the social media icons */}
              <div className="flex flex-row gap-4">
                <img src={insta} alt="" />
                <img src={fb} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
            {/* right side container div */}
            <div className="flex md:flex-row flex-col mb-5 md:mx-20 mx-10  my-8 w-auto  h-auto md:gap-8 gap-12 text-[#545454] ">
              {/* child container for the contents */}
              <div className="flex flex-col gap-3 w-[8rem] ">
                <h1 className="text-xl font-semibold text-black">Dentistry</h1>
                <p>Botox</p>
                <p>Dermal fillers</p>
                <p>Laser resurfacing</p>
                <p>Chemical peels</p>
                <p>Hydra Facial</p>
              </div>
              <div className="flex flex-col gap-3  w-[8rem] ">
                <h1 className="text-xl font-semibold text-black">
                  Cosmetology
                </h1>
                <p>Botox</p>
                <p>Dermal fillers</p>
                <p>Laser resurfacing</p>
                <p>Chemical peels</p>
                <p>Hydra Facial</p>
              </div>
              <div className="flex flex-col gap-3  w-[8rem]">
                <h1 className="text-xl font-semibold text-black">
                  Dermatology
                </h1>
                <p>Botox</p>
                <p>Dermal fillers</p>
                <p>Laser resurfacing</p>
                <p>Chemical peels</p>
                <p>Hydra Facial</p>
              </div>
              <div className="flex flex-col gap-3  w-[8rem]">
                <h1 className="text-xl font-semibold text-black">Trichology</h1>
                <p>Botox</p>
                <p>Dermal fillers</p>
                <p>Laser resurfacing</p>
                <p>Chemical peels</p>
                <p>Hydra Facial</p>
              </div>
            </div>
          </div>
          {/* container for the last section */}
          <div className="flex flex-wrap md:gap-10 items-center gap-5 text-center bg-white w-full justify-around px-5 py-3 text-sm">
            <p className="font-mono">Copyright © topmostdentalandskin.com </p>
            <p className="font-mono ">
              Privacy Policy & Terms and Conditions Applied
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;