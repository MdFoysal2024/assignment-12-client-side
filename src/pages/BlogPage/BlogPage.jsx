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



    const blogs = blogsList.filter(blog => blog.status === 'Draft');

    console.log(blogs);




    return (

        <div className='container mx-auto py-24'>blog page
        
        
        <div className='grid gap-6 grid-cols-1 mt-12  md:grid-cols-2 lg:grid-cols-4'>
                {
                    blogs.map(blog => <BlogCardPublic key={blog._id} blog={blog} ></BlogCardPublic>)
                }
            </div>
        
        </div>


    );
};

export default BlogPage;