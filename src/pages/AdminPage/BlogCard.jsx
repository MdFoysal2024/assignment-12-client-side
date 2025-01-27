import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const BlogCard = ({ blog, refetch }) => {
    const { _id, title, photo, status, content } = blog || {};

    const axiosSecure = useAxiosSecure();

    const stripHtmlTags = (html) => {
        return html?.replace(/<\/?[^>]+(>|$)/g, "") || "";
    };





    const handleBlogPublished = blog => {
        //console.log(user);
        //console.log('User Admin creation Functionality start', user._id)
        axiosSecure.patch(`/blogs/published/${blog._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} is Published Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }

    const handleBlogUnpublished = blog => {
        //console.log(user);
        //console.log('User Admin creation Functionality start', user._id)
        axiosSecure.patch(`/blogs/unpublished/${blog._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} is UnPublished Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }

    const handleDeleteBlog = blog => {
        

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/blogs/${blog._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Blog has been deleted.",
                                icon: "success"
                            });
                            refetch();

                            
                        }
                    })


            }
        });
















        // axiosSecure.patch(`/blogs/unpublished/${blog._id}`)
        //     .then(res => {
        //         console.log(res.data);
        //         if (res.data.modifiedCount > 0) {
        //             refetch();
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: `${title} is UnPublished Now!`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //         }
        //     })


    }















    return (
        <div>
            <div className=" bg-gray-200 p-6 space-y-4 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        className='w-full '
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




                    <div className=" flex flex-col gap-4 items-center lg:flex-row   mt-6 justify-between ">
                        {
                            status === 'Published' ?
                                <><button 
                                onClick={() => handleBlogUnpublished(blog)}
                                className=" text-green-700 font-semibold px-6 text-lg bg-green-300">Unpublished</button></>
                                :
                                <>
                                    <button
                                        onClick={() => handleBlogPublished(blog)}
                                        className=" text-green-700 font-semibold px-2 text-lg bg-green-300">Published</button></>
                        }

                        <Link to={`/dashboard/blogDetails/${_id}`}>

                            <button className=" text-red-600 font-semibold px-2  text-lg bg-red-300"> Details</button>
                        </Link>
                        <button 
                         onClick={() => handleDeleteBlog(blog)}
                        className=" text-red-600 font-semibold px-2  text-lg bg-red-300">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;