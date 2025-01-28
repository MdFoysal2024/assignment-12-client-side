import { FaUsers } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { BiSolidBadgeDollar, BiSolidDonateBlood } from "react-icons/bi";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const VolunteerHome = () => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }

    })

    return (
        <div className=' p-6 md:p-24'>
            <div>
                <div>
                    <h2 className='text-4xl text-gray-600 font-bold'>Hi Welcome, <br /> <span className='text-red-600 text-6xl'>Dear, {user?.displayName}</span></h2>

                </div>

                <div className='w-3/4'>
                    <p className='font-semibold py-6 text-xl '> Thank you for being the heart of this noble cause. Your leadership and dedication empower us to save lives and bring hope to those in need.</p>
                    <div className="text-gray-500">

                        <p> This platform is designed to make managing donations effortless and impactful. Here, you can:</p>
                        <ul className='pl-4 py-4'>
                            <li>
                                * Track donations and campaigns in real time.
                            </li>
                            <li>
                                * Engage with donors and volunteers.
                            </li>
                            <li>
                                * Share stories of hope and transformation.
                            </li>
                        </ul>


                        <p>Together, lets make a difference and build a community of kindness. If you need assistance or have suggestions, we are here to support you every step of the way.</p>
                    </div>
                </div>

            </div>



            <div className='grid gap-12 grid-cols-1 my-24 md:grid-cols-2 lg:grid-cols-3'>
                <div className=' flex gap-6 rounded-lg bg-green-200 p-6 items-center'>
                    <div className='text-8xl text-green-600'>
                        <BiSolidBadgeDollar />
                    </div>

                    <div>
                        <p className='text-gray-600  font-bold'>Total Donation Amount</p>
                        <h2 className='font-extrabold text-6xl text-green-600 '>${stats?.revenue}</h2>

                    </div>
                </div>
                <div className=' flex gap-6 rounded-lg bg-red-200 p-6 items-center'>
                    <div className='text-8xl text-red-600'>
                        <BiSolidDonateBlood />
                    </div>

                    <div>
                        <p className='text-gray-600 font-bold'> Total Donation Request</p>
                        <h2 className='font-extrabold text-6xl text-red-600  '>{stats?.bloodRequest}</h2>

                    </div>
                </div>
                <div className=' flex gap-6 rounded-lg bg-purple-200 p-6 items-center'>
                    <div className='text-8xl text-purple-600'>
                        <FaUsers />
                    </div>

                    <div>
                        <p className='text-gray-600 font-bold'>Total Donation Amount</p>
                        <h2 className='font-extrabold px-6 text-6xl text-purple-600 '>${stats?.users}</h2>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default VolunteerHome;