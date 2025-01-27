import React from 'react';
import { Link } from 'react-router-dom';

const BlogCardPublic = ({blog}) => {

   const {_id, title, photo, status, content } = blog || {};


    const stripHtmlTags = (html) => {
        return html?.replace(/<\/?[^>]+(>|$)/g, "") || "";
      };
    
    return (
        <div>
            <div className=" bg-gray-200 p-6 space-y-4 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        className='w-full h-[180px]'
                        alt="Image Loading..." />
                </figure>
                <div className="">
                    <div className='flex  items-center justify-between'>
                        <h2 className="font-bold text-lg">{title}</h2>

                       
                        
                    </div>


                    <div >
                        <p className='py-2 text-gray-500'>

                    {stripHtmlTags(content)}
                        </p>
                    </div>


                  

                    <div className=" flex mt-6 justify-center ">
                   
                        <Link to={`/dashboard/blogDetails/${_id}`}>

                        <button className=" text-red-600 font-semibold px-4  text-lg bg-red-300"> Details</button>
                        </Link>
          
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardPublic;