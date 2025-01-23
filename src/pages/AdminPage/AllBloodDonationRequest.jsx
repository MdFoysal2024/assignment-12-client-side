import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { BsEye } from 'react-icons/bs';

const AllBloodDonationRequest = () => {


    //custom hooks-->
    const axiosSecure = useAxiosSecure();
    //  const { user } = useAuth();

    const { refetch, data: bloodRequestList = [] } = useQuery({

        queryKey: ['bloodRequestList'],
        queryFn: async () => {
            const res = await axiosSecure.get('/createDonationRequest')
            return res.data;
        }


    })








    return (
        <div className='p-24'>
          <h2 className='text-center text-red-600 text-2xl md:text-4xl font-bold'>

            All Blood Donation Request({bloodRequestList.length})
          </h2>



            <div>
                {
                    bloodRequestList.length ?
                        <> <div className="overflow-x-auto my-8">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-red-600 text-lg text-white ">
                                    <tr className="">
                                        <th className="pl-6">
                                            SN
                                        </th>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Donation Date</th>
                                        <th>Donation Time</th>
                                        <th>Blood Group</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>



                                    {
                                        bloodRequestList.map((request, idx) => <tr key={request._id}>
                                            <th>
                                                {idx + 1}
                                            </th>

                                            <td>
                                                <p className="font-bold">

                                                    {request.recipient_name}
                                                </p>

                                            </td>
                                            <td className='text-gray-500'>
                                                {request.upazila},{request.district}

                                            </td>
                                            <td>
                                                {format(new Date(request.start_Date
                                                ), 'P')}


                                            </td>
                                            {/* <td>
                                                {request.time}

                                            </td> */}


                                            <td>
                                                {(() => {
                                                    const [hours, minutes] = request.time.split(':'); // Split the time into hours and minutes
                                                    const date = new Date();
                                                    date.setHours(hours, minutes, 0, 0); // Set only time on the current date
                                                    return date.toLocaleTimeString([], {
                                                        hour: 'numeric',
                                                        minute: '2-digit',
                                                    });
                                                })()}
                                            </td>

                                            <td>
                                                {request.blood_group}

                                            </td>
                                            <td className="text-red-600 font-bold   text-center">
                                                <p className="bg-red-100 py-1 px-4 rounded-lg">{request.status}</p>


                                            </td>

                                            <th className="join join-vertical lg:join-horizontal">
                                                <Link to={`/dashboard/editDonationRequest/${request._id}`}>
                                                    <button

                                                        className="btn join-item p-3 text-xl text-green-600 border-2 border-gray-300 rounded-full hover:bg-slate-300"><BiEdit /></button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(request._id)}
                                                    className="btn join-item ml-2 p-3 text-xl text-red-600 border-2 border-gray-300 rounded-full hover:bg-slate-300"><RiDeleteBin2Fill /></button>


                                                <Link to={`/dashboard/donationRequestDetails/${request._id}`}>
                                                    <button

                                                        className="btn join-item p-3 text-xl text-green-600 border-2 border-gray-300 rounded-full hover:bg-slate-300"><BsEye /></button>
                                                </Link>


                                            </th>
                                        </tr>)
                                    }


                                </tbody>

                            </table>
                        </div>
                        </>
                        :
                        <div className="text-center text-2xl  pt-12 font-bold">
                            No data  Available Here...
                        </div>

                }
            </div>
        </div>
    );
};

export default AllBloodDonationRequest;