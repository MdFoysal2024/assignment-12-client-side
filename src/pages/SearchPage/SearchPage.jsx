import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import DonorCard from './DonorCard';
import { FaSearch } from 'react-icons/fa';

const SearchPage = () => {


    const [donorList, setDonorList] = useState()

    //custom hooks-->
    const axiosSecure = useAxiosSecure();


    const { refetch, data: users = [] } = useQuery({

        queryKey: ['users'],
        queryFn: async () => {

            //const res = await axiosSecure.get('/users')

            // const res = await axiosSecure.get('/users', {
            //     //---Token কে cookies এ না রেখে localStorage এ রাখা হয়েছে-->

            //     //headers --> এই মেথড কে axios থেকে আনা হয়েছে  এবং এখন থেকে     headers দিয়ে Token কে সার্ভারে পাঠানো হয়েছে।   localStorage এ টোকেন কে  পাঠাতে/রাখতে হলে headers এর মাধ্যমেই পাঠাতে হবে।

            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('Access-Token')}`
            //     }
            // });


            const res = await axiosSecure.get('/users');
            //headers --> মেথড কে axiosSecure এর ভিতরে রাখা হয়েছে
            // এখানে const res এ headers এর ভিতরে authorization টোকেন না রেখে axiosSecure এর ভিতরে রেখেছি যাতে সব জায়গা হতে পাওয়া যায় ।
            return res.data;

        }

    })

    console.log(users)

    // const donors = users.filter(user => user.role === 'Donor')
    // setDonorList(donors)


    const donors = users.filter(user => user.role === 'Donor');

    console.log(donors);


    return (
        <div className='container mx-auto py-24 px-12'>
           


            <div className='text-center text-3xl py-4 md:text-5xl font-bold text-red-600'>
                <p> Search Your Donor </p>
            </div>

            <div className='flex justify-center my-8'>
                <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2   lg:w-[640px] text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        onChange={e => setSearch(e.target.value)}
                        //onBlur={e => setSearch(e.target.value)}
                        placeholder='Search...'
                        aria-label='Enter Job Title'
                    />

                    <button className='px-4 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-orange-800 focus:bg-red-800 focus:outline-none'>
                        <FaSearch />
                    </button>
                </div>
            </div>



            {
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        donors.map(donor => <DonorCard
                            key={donor._id}
                            donor={donor}
                        ></DonorCard>)
                    }
                </div>
            }

        </div>
    );
};

export default SearchPage;
