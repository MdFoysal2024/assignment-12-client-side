import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, photo, status, content } = blog || {};

    const contentText = `<p><strong>Minim dolor id venia.</strong></p><p>Distinctively simplify synergistic opportunities and 24/365 leadership. Intrinsicly restore economically sound web-readiness without real-time technologies. Objectively syndicate.</p>`;

    // console.log(contentText)
    // console.log(content)
    // Remove all HTML tags using a regex

    const plainText = contentText.replace(/<\/?[^>]+(>|$)/g, "");
    
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
                        <p className='text-violet-500 font-bold bg-violet-200 px-4'>{status}</p>
                    </div>

                    <div>
                        {plainText}

                    </div>


                    <div className=" flex mt-6 justify-between ">

                        <button className=" text-green-700 font-semibold px-6 text-lg bg-green-300">Published</button>
                        <button className=" text-red-600 font-semibold px-8  text-lg bg-red-300">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;