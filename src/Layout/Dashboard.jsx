import { useState } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaCalendar, FaList, FaUsers } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { MdBookmarks } from "react-icons/md";
import { PiGitPullRequestBold } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
    const { user } = useAuth();

    //for test--->
    const [isAdmin, setIsAdmin] = useState('null');
    //const [isAdmin, setIsAdmin] = useState('Admin');
    
    const [admin, setAdmin] = useState('Donor');

    return (
        <div className='flex container mx-auto'>

            {/* Side Bar Menu section */}
            <div className='w-64 min-h-screen bg-red-800 '>
                <div className='text-center py-12 text-white'>
                    <h3 className='text-2xl font-bold'></h3>
                    <img className="w-24 mx-auto rounded-full my-4 border-4 " src={user?.photoURL} alt="" />
                    <p className='uppercase text-lg font-bold'>{user?.displayName}</p>
                    <p className=''> {user?.email}</p>
                    <p className='bg-red-100 w-36 mx-auto text-2xl my-2 font-bold text-red-600 p-2 '> {admin}</p>
                </div>

                <ul className='menu font-semibold text-white '>

                    {
                        isAdmin ?
                            <>

                                <li>
                                    <NavLink to="/dashboard/adminHome">   <FaHome className='text-2xl' /> Admin Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/all-blood-donation-request">   <FaList className='text-xl' />All Blood Donation Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/content-management">   <MdBookmarks className='text-xl' />Content Management</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/all-users">   <FaUsers className='text-2xl' />All Users</NavLink>
                                </li>

                            </>

                            :

                            <>
                                <li>
                                    <NavLink to="/dashboard/donorHome">   <FaHome className='text-2xl' /> Donor Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/createDonationRequest">   <PiGitPullRequestBold className='text-2xl' /> Create Donation Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myDonationRequest">   <BiSolidDonateBlood className='text-2xl' /> My Donation Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">   <FaCalendar className='text-xl' />Funding History</NavLink>
                                </li>


                            </>
                    }





                    <div className="divider px-6"></div>
                    {/* -----------Shared nav links-------------- */}
                    {/* Main Routes Section */}
                    <li>
                        <NavLink to="/">   <FaHome className='text-2xl' /> Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact">   <IoIosContacts className='text-2xl' /> Contact Us</NavLink>
                    </li>

                </ul>

            </div>




            {/* Dashboard Content Routes section */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Dashboard;