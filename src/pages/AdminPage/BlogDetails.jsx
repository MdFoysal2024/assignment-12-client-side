import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blogData = useLoaderData()
   console.log(blogData )
    const { _id, title, photo, status, content } = blogData || {};
    console.log(_id)
    const stripHtmlTags = (html) => {
        return html?.replace(/<\/?[^>]+(>|$)/g, "") || "";
    };




    return (
        <div className='container mx-auto  p-24 '>


            <div className="hero bg-red-200 p-12 ">
                <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
                    <img
                        src={photo}
                        className="w-full md:w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-full md:pr-12 md:w-1/2'>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className='py-6 text-gray-500'>

                            {stripHtmlTags(content)}
                        </p>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default BlogDetails;