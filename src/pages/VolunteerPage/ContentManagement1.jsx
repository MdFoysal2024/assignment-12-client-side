import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import BlogCard from '../AdminPage/BlogCard';

const ContentManagement1 = () => {


    //custom hooks-->
    const axiosSecure = useAxiosSecure();
    //  const { user } = useAuth();

    const [filter, setFilter] = useState('')
    console.log(filter)

    const { refetch, data: blogs = [] } = useQuery({

        queryKey: [filter, 'blogs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs?filter=${filter}`)
            return res.data;
        }


    })











    return (
        <div className='p-24'>
            <h2 className='text-center font-bold pb-12 text-red-600 text-5xl'>Content Management</h2>
            <div className='flex items-center justify-between'>

                <div className=''>
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
                        <button className='btn mt-6 text-white text-lg px-8 bg-red-600 hover:bg-red-800 font-semibold'>Add Blog</button>
                    </Link>
                </div>

            </div>

            <div className='grid gap-6 grid-cols-1 mt-12  md:grid-cols-2 lg:grid-cols-3'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog} ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default ContentManagement1;