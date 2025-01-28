import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import BlogCardPublic from './BlogCardPublic';

const BlogPage = () => {
    //custom hooks-->
    const axiosSecure = useAxiosSecure();
    //  const { user } = useAuth();

    const { refetch, data: blogsList = [] } = useQuery({

        queryKey: ['blogsList'],
        queryFn: async () => {
            const res = await axiosSecure.get('/blogs')
            return res.data;
        }


    })
    console.log(blogsList)



    const blogs = blogsList.filter(blog => blog.status === 'Published');

    console.log(blogs);




    return (

        <div className='container mx-auto py-24 px-12'>
            <div className='text-center text-3xl md:text-5xl font-bold text-red-600'>
                <p>Blood Donation Blog </p>
            </div>

            <div>

                {blogs.length ?
                    <>
                        <div className='grid gap-6 grid-cols-1 mt-12  md:grid-cols-2 lg:grid-cols-4'>
                            {
                                blogs.map(blog => <BlogCardPublic key={blog._id} blog={blog} ></BlogCardPublic>)
                            }
                        </div>

                    </>
                    :
                    <>
                        <p className='text-center pt-12 font-semibold text-2xl text-red-500'>No Data Available Here...
                        </p></>

                }
            </div>






        </div>


    );
};

export default BlogPage;