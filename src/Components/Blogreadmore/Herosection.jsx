import React from "react";
import titleimg from "../../assets/Titleblogreadmore.png";
import { useParams } from "react-router-dom";
import {blogsReadMoreDatas} from '../../Data/Data';

function Herosection() {
  const { blogId } = useParams();

  // Find the blog post data based on the blogId
  const blogData = blogsReadMoreDatas.find((blog) => blog.blogId === parseInt(blogId));

  return (
    <>
      {/* hero section title */}
      <div className="text-white 2xl:w-[1440px] w-auto mx-auto my-5 md:py-14" style={{ background: `url(${titleimg})` }}>
        <div className="md:pt-32 md:px-20 px-7 py-3">
          <p className="font-mono">{blogData.date}</p>
          <h1 className="font-bold md:text-2xl">
            {blogData.mainheader}
          </h1>
          <p className="text-xs py-2">{blogData.readtime}</p>
        </div>
      </div>
    </>
  );
}

export default Herosection;
