import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import BlogCard from './BlogCard';

const ContentManagement = () => {


    //custom hooks-->
    const axiosSecure = useAxiosSecure();
    //  const { user } = useAuth();


    const { refetch, data: blogs = [] } = useQuery({

        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosSecure.get('/blogs')
            return res.data;
        }


    })











    return (
        <div className=' p-6 md:p-6'>
            <h2 className='text-center font-bold pb-12 text-red-600 text-3xl md:text-5xl'>Content Management</h2>
            <div className='flex justify-between p-4 items-center'>

                <div>
                    <select defaultValue='default'
                        className="select select-bordered w-full max-w-xs">
                        <option disabled value='default'>Filter</option>
                        <option>Draft</option>
                        <option>Published</option>
                    </select></div>

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
                            blogs.map(blog => <BlogCard key={blog._id} blog={blog}  refetch={refetch} ></BlogCard>)
                        }
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