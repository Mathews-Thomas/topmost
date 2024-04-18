import React from "react";
import { useParams } from "react-router-dom";
import {blogsReadMoreDatas} from '../../Data/Data';
function Aboutour() {
  const { blogId } = useParams();

  // Find the blog post data based on the blogId
  const blogData = blogsReadMoreDatas.find((blog) => blog.blogId === parseInt(blogId));
  
  return (
    <>
      {/* aboutour images section */}
      <div className="2xl:w-[1440px] w-auto mx-auto">
        <img src={blogData.aboutimage} />
      </div>
      <div className="grid md:grid-cols-2  md:px-20 px-7 py-5  2xl:w-[1440px] w-auto mx-auto gap-10">
        {/* about our data */}
        <div>
            <div  className="md:text-justify">
              <h1 className="font-bold text-2xl text-center">
                {blogData.abouttitle}
              </h1>
              <p className="my-3">{blogData.aboutcontent}</p>
              <p className="my-3">{blogData.aboutcontent2}</p>
              <p>{blogData.importance}</p>
            </div>
        </div>
        {/* learn here section */}
        <div>
            <div>
              <h1 className="font-bold text-2xl text-center">
                {blogData.title3}
              </h1>
              <p className="my-3 md:text-justify">{blogData.content3}</p> 
              <h1 className="font-bold text-xl">{blogData.subtitle3}</h1>
              {blogData.topics.map((subtitle, subIndex) => (
                  <div key={subIndex} className="flex gap-2">
                    <div className="md:text-justify text-md ">{subtitle}</div>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default Aboutour;
