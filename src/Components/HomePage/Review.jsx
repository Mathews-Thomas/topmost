import rev1 from "../../assets/Rev1.png";
import rev2 from "../../assets/Rev2.png";
import rev3 from "../../assets/Rev3.png";
import rev4 from "../../assets/Rev4.png";


const Review = () => {
  const review = [
    {
      id: 1,
      image: rev1,
      title: "1 lakh",
      description: "Appointments",
    },
    {
      id: 2,
      image: rev2,
      title: "30",
      description: "Doctors & Staffs",
    },
    {
      id: 3,
      image: rev3,
      title: "1 lakh",
      description: "Happy Clients",
    },
    {
      id: 4,
      image: rev4,
      title: "20",
      description: "Years of Experiences",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center items-center md:h-[15rem] lg:h-[15rem] h-auto my-10 w-full bg-[#FAF8FC]">
        {/* container for the content  */}
        <div className="flex flex-row justify-center items-center w-auto flex-wrap gap-10 mx-7">
          {review.map((rev) => (
            <div className="flex flex-row gap-4 w-auto justify-center items-center">
              <img src={rev.image} alt="review-image" className="w-[4rem] h-[4rem]"/>
              <div className="flex flex-col items-start mt-2">
                <div className="flex flex-row">
                  {" "}
                  <h1 className="text-black font-bold text-3xl">{rev.title}</h1>
                  <span className="text-blue-800 text-4xl font-bold ml-2">
                    +
                  </span>
                </div>
                <p className="">{rev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
