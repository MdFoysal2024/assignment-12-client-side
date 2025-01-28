import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import BlogCard from './BlogCard';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const ContentManagement = () => {




    //--------pagination start from here------->

    //total number of marathon get from server side
    const { blogsCount } = useLoaderData()
    console.log(blogsCount)

    const [itemsPerPage, setItemsPerPage] = useState(3)

    const [currentPage, setCurrentPage] = useState(0)

    const numberOfPages = Math.ceil(blogsCount / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)













    //Prev Page btn functionality-->

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }


    //Next Page btn functionality-->

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            // pages.length-1 -->  -1  না দিয়ে একটা পেইজ অতিরিক্ত চলে যায়
            setCurrentPage(currentPage + 1)
        }
    }




    //--------pagination end here------->







    //custom hooks-->
    const axiosSecure = useAxiosSecure();
    //  const { user } = useAuth();

    const [filter, setFilter] = useState('')
    console.log(filter)
    const { refetch, data: blogs = [] } = useQuery({

        queryKey: [currentPage, itemsPerPage, filter, 'blogs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs?page=${currentPage}&size=${itemsPerPage}&filter=${filter}`)

            return res.data;

        }

    })











    return (
        <div className=' p-6 md:p-6'>
            <h2 className='text-center font-bold pb-12 text-red-600 text-3xl md:text-5xl'>Content Management</h2>
            <div className='flex justify-between p-4 items-center'>

            <div className='pt-12'>
                    <select defaultValue='default'
                        name='status'
                        id='status'
                        className="select select-bordered w-full max-w-xs"
                        // onChange={(e)=>console.log(e.target.value)}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option disabled value='default'>Filter</option>
                        
                        <option value='Draft'>Draft</option>
                        <option value='Published'>Published</option>
                    </select>
                </div>

                <div>
                    <Link to='/dashboard/addBlog'>
                        <button className='btn  text-white text-lg px-8 bg-red-600 hover:bg-red-800 font-semibold'>Add Blog</button>
                    </Link>
                </div>



            </div>

            {blogs.length ?
                <>
                    <div className='grid gap-6 grid-cols-1 mt-12  md:grid-cols-2 lg:grid-cols-3'>
                        {
                            blogs.map(blog => <BlogCard key={blog._id} blog={blog} refetch={refetch} ></BlogCard>)
                        }
                    </div>

                    {/* //--------pagination start from here-------> */}

                    <div className='flex justify-center my-12 items-center gap-4'>
                        {/* <p>Pagination</p> */}



                        <button
                            className='pagination mr-6 text-red-600'
                            onClick={handlePrevPage}><FaArrowLeftLong /></button>

                        <div className='pagination'>
                            {
                                pages.map((page, indx) =>

                                    <button
                                        key={page}
                                        // key={indx}
                                        //Click করলে setCurrentPage এর ভিতরে page এর মান সেট হবে।
                                        onClick={() => setCurrentPage(page)}
                                        className={currentPage === page && 'selected'}


                                    //page + 1 -->0 থেকে শুরু না হয়ে 1 থেকে শুরু হবে।
                                    >{page + 1}</button>
                                )
                            }
                        </div>

                        <button
                            className='pagination  text-red-600'
                            onClick={handleNextPage}><FaArrowRightLong /></button>




                    </div>




                </>
                :
                <>
                    <p className='text-center pt-12 font-semibold text-2xl text-red-500'>No Data Available Here...
                    </p>
                </>

            }


        </div>
    );
};

export default ContentManagement;