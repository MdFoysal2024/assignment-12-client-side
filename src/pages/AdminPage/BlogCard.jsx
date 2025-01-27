import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { _id, title, photo, status, content } = blog || {};


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

                        {
                            status === 'Published' ?
                                <></>
                                :
                                <>
                                    <p className='text-violet-500 font-bold bg-violet-200 px-4'>{status}</p></>
                        }

                    </div>


                    <div >
                        <p className='py-2 text-gray-500'>

                            {stripHtmlTags(content)}
                        </p>
                    </div>




                    <div className=" flex mt-6 justify-between ">
                        {
                            status === 'Published' ?
                                <><button className=" text-green-700 font-semibold px-6 text-lg bg-green-300">Unpublished</button></>
                                :
                                <>
                                    <button className=" text-green-700 font-semibold px-2 text-lg bg-green-300">Published</button></>
                        }

                        <Link to={`/dashboard/blogDetails/${_id}`}>

                            <button className=" text-red-600 font-semibold px-2  text-lg bg-red-300"> Details</button>
                        </Link>
                        <button className=" text-red-600 font-semibold px-2  text-lg bg-red-300">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;