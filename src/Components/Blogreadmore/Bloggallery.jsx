import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router-dom";
import {blogsReadMoreDatas} from '../../Data/Data';
function Bloggallery() {

  const { blogId } = useParams();

  // Find the blog post data based on the blogId
  const blogData = blogsReadMoreDatas.find((blog) => blog.blogId === parseInt(blogId));
  return (
    <>
      {/* gallary heading */}
      <div className="md:px-20 px-7 py-5 2xl:w-[1440px] w-auto mx-auto">
        <h1 className="font-bold text-2xl">
         {blogData.title}
        </h1>
        <p className="md:text-justify">
         {blogData.content}
        </p>
      </div>
      {/* gallery section */}
      <div className="justify-center 2xl:w-[1440px] w-auto mx-auto px-7">
        <div className="flex justify-center gap-4 flex-wrap my-4">
          {blogData.images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>

      {/* gallery details section */}
      <div className="md:px-20 px-7 py-5  2xl:w-[1440px] w-auto mx-auto">
        <p className="my-4 md:text-justify">
       {blogData.content1}
        </p>
        {/* Mapping myths from the specific blogData */}
  {blogData.myths.map((item, index) => (
    <div key={index} className="flex gap-3 md:px-36 my-3">
      <div>
        <CheckIcon className="h-5 w-5 text-green-500" />
      </div>
      <div className="font-bold italic w-full">{item}</div>
    </div>
  ))}
        <p className="my-4 md:text-justify">
      {blogData.content2}
        </p>
      </div>
    </>
  );
}

export default Bloggallery;
