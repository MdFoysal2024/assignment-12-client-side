import { RiDeleteBin2Fill } from "react-icons/ri";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDonationRequest from "../../hooks/useDonationRequest";
import { format } from 'date-fns';
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const MyDonationRequests = () => {

    // custom hooks-->
    const [donationRequest, refetch] = useDonationRequest();
    const axiosSecure = useAxiosSecure()

    //-------->'/createDonationRequest'

    //({donationRequest.length})
    return (
        <div className='p-24'>
            My All Donation Requests ({donationRequest.length})



            <div className="overflow-x-auto my-8">
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
                            donationRequest.map((request, idx) => <tr key={request._id}>
                                <th>
                                    {idx + 1}
                                </th>

                                <td>
                                    <p className="font-bold">

                                        {request.recipient_name}
                                    </p>

                                </td>
                                <td>
                                    {request.upazila},{request.district}

                                </td>
                                <td>
                                    {format(new Date(request.start_Date
                                    ), 'P')}


                                </td>
                                <td>
                                    {request.time}

                                </td>
                                <td>
                                    {request.blood_group}

                                </td>
                                <td className="text-red-600 font-bold   text-center">
                                    <p className="bg-red-100 py-1 px-4 rounded-lg">{request.status}</p>


                                </td>

                                <th>
                                    <Link to={`/dashboard/editDonationRequest/${request._id}`}>
                                    <button
                                        
                                        className=" p-3 text-xl text-red-600 border-2 border-gray-300 rounded-full hover:bg-slate-300"><BiEdit /></button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(request._id)}
                                        className=" ml-2 p-3 text-xl text-red-600 border-2 border-gray-300 rounded-full hover:bg-slate-300"><RiDeleteBin2Fill /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyDonationRequests;