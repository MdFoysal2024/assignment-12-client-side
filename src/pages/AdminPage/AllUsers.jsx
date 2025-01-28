import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUsers } from 'react-icons/fa6';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const AllUsers = () => {


    //custom hooks-->
    const axiosSecure = useAxiosSecure();

    const [filter, setFilter] = useState('')
    const { refetch, data: users = [] } = useQuery({

        queryKey: [filter, 'users'],
        queryFn: async () => {

            //const res = await axiosSecure.get('/users')

            // const res = await axiosSecure.get('/users', {
            //     //---Token কে cookies এ না রেখে localStorage এ রাখা হয়েছে-->

            //     //headers --> এই মেথড কে axios থেকে আনা হয়েছে  এবং এখন থেকে     headers দিয়ে Token কে সার্ভারে পাঠানো হয়েছে।   localStorage এ টোকেন কে  পাঠাতে/রাখতে হলে headers এর মাধ্যমেই পাঠাতে হবে।

            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('Access-Token')}`
            //     }
            // });


            const res = await axiosSecure.get(`/users?filter=${filter}`);
            //headers --> মেথড কে axiosSecure এর ভিতরে রাখা হয়েছে
            // এখানে const res এ headers এর ভিতরে authorization টোকেন না রেখে axiosSecure এর ভিতরে রেখেছি যাতে সব জায়গা হতে পাওয়া যায় ।
            return res.data;

        }

    })



    //User Admin creation Functionality start------->
    const handleMakeAdmin = user => {
        //console.log(user);
        //console.log('User Admin creation Functionality start', user._id)
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }

    //User Admin creation Functionality start------->
    const handleMakeVolunteer = user => {
        //console.log(user);
        //console.log('User Admin creation Functionality start', user._id)
        axiosSecure.patch(`/users/volunteer/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    //User Admin creation Functionality start------->
    const handleMakeUnblocked = user => {
        //console.log(user);
        //console.log('User Admin creation Functionality start', user._id)
        axiosSecure.patch(`/users/unblocked/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Active Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    //User Admin creation Functionality start------->
    const handleMakeBlocked = user => {
        //console.log(user);
        //console.log('User Admin creation Functionality start', user._id)
        axiosSecure.patch(`/users/blocked/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Blocked Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }



    return (
        <div className='p-24'>

            <div className='text-center text-2xl md:text-4xl font-bold text-red-600'>
                <p> All Users Details</p>




            </div>
            
                <div className='pt-12'>
                    <select defaultValue='default'
                        name='status'
                        id='status'
                        className="select select-bordered w-full max-w-xs"
                        // onChange={(e)=>console.log(e.target.value)}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option disabled value='default'>Filter</option>

                        <option value='Active'>Active</option>
                        <option value='Blocked'>Blocked</option>
                    </select>
                </div>

            <div>
                {
                    users.length ? <div className="overflow-x-auto my-8">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-red-600 text-lg text-white ">
                                <tr className="">
                                    <th className="pl-6">
                                        #
                                    </th>
                                    <th> Image</th>
                                    <th> Role</th>
                                    <th> Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>



                                {
                                    users.map((user, idx) => <tr key={user._id}>
                                        <th>
                                            {idx + 1}
                                        </th>

                                        <td className='flex gap-4 items-center'>
                                            <img className='w-16 rounded-full' src={user.photo} alt="img loading..." />
                                            <div>
                                                <p className="font-bold">

                                                    {user.name}
                                                </p>
                                                <p className=" text-gray-500">

                                                    {user.email}
                                                </p>

                                            </div>
                                        </td>



                                        <th>
                                            {user.role === 'Admin' ?
                                                <p className="text-xl text-green-600">{user.role}</p> :
                                                user.role === 'Volunteer' ?
                                                    <p className="text-xl text-orange-500">{user.role}</p>
                                                    :
                                                    <p className="text-xl text-red-600 ">{user.role}</p>

                                            }
                                        </th>

                                        <th className={`text-xl ${user.status === 'Active' ? 'text-green-400' : user.status === 'Blocked' ? 'text-red-400' : ''
                                            }`}>
                                            {user.status}
                                        </th>
                                        <th>

                                            <div className="join join-vertical lg:join-horizontal">

                                                {user.status === 'Active' ?
                                                    <button
                                                        onClick={() => handleMakeBlocked(user)}
                                                        className="btn bg-red-300 join-item" >Block</button>
                                                    :
                                                    <button
                                                        onClick={() => handleMakeUnblocked(user)}
                                                        className="btn bg-red-300 join-item" >Unblocked</button>

                                                }




                                                {/* <button className="btn px-6 bg-red-300 join-item">Block</button> */}


                                                {user.role === 'Admin' ? <button

                                                    className="btn text-white hover:text-red-600 bg-red-500 join-item" disabled>Admin</button>
                                                    :

                                                    <button
                                                        onClick={() => handleMakeAdmin(user)}
                                                        className="btn text-white hover:text-red-600 bg-red-500 join-item" >Admin</button>
                                                }

                                                {user.role === 'Volunteer' ?
                                                    <button
                                                        className="btn bg-red-300 join-item" disabled>Volunteer</button>
                                                    :
                                                    <button
                                                        onClick={() => handleMakeVolunteer(user)}
                                                        className="btn bg-red-300 join-item">Volunteer</button>

                                                }

                                                {/* {user.status === 'Blocked' ?
                                                    <button
                                                    onClick={() => handleMakeUnblocked(user)}
                                                        className="btn bg-red-300 join-item" >Unblocked</button>
                                                    :
                                                    <button
                                                   
                                                        className="btn bg-red-300 join-item" disabled>Unblocked</button>

                                                } */}


                                            </div>
                                        </th>
                                    </tr>)
                                }


                            </tbody>

                        </table>
                    </div>

                        :
                        <div className="text-center text-2xl pt-12 font-bold">
                            No data  Available Here...
                        </div>
                }
            </div>



        </div>
    );
};

export default AllUsers;