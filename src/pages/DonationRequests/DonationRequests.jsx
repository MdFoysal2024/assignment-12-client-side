import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { BsEye } from "react-icons/bs";


const DonationRequests = () => {

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
    console.log(bloodRequestList)



    const donors = bloodRequestList.filter(request => request.status === 'pending');

    console.log(donors);



    return (
        <div className='container mx-auto py-24'>
            Donation Requests



            <div>
                {
                   donors.length ?
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
                                        donors.map((request, idx) => <tr key={request._id}>
                                            <th>
                                                {idx + 1}
                                            </th>

                                            <td>
                                                <p className="font-bold">

                                                    {request.recipient_name}
                                                </p>

                                            </td>
                                            <td>
                                                {request.upazila}, {request.district}

                                            </td>
                                            <td>
                                                {format(new Date(request.start_Date
                                                ), 'P')}


                                            </td>
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

                                            <th>


                                                <Link to={`/dashboard/donationRequestDetails/${request._id}`}>
                                                    <button

                                                        className=" p-3 text-xl text-red-600 border-2 border-gray-300 rounded-full hover:bg-slate-300"><BsEye /></button>
                                                </Link>


                                            </th>
                                        </tr>)
                                    }


                                </tbody>

                            </table>
                        </div>
                        </>
                        :
                        <div className="text-center text-2xl font-bold">
                            No data  Available Here...
                        </div>

                }
            </div>
        </div>
    );
};

export default DonationRequests;