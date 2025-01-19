import { useState } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaCalendar, FaList, FaUsers } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { MdBookmarks } from "react-icons/md";
import { PiGitPullRequestBold } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

 //for test--->
    const [isAdmin, setIsAdmin] = useState(null);

    return (
        <div className='flex container mx-auto'>

        {/* Side Bar Menu section */}
        <div className='w-64 min-h-screen bg-red-800 '>
            <div className='text-center py-12 text-white'>
                <h3 className='text-2xl font-bold'>Save lives By</h3>
                <p className='uppercase'>Donating Blood.</p>
            </div>

            <ul className='menu font-semibold '>

                {
                    isAdmin ?
                        <>

                            <li>
                                <NavLink to="/dashboard/adminHome">   <FaHome className='text-2xl' /> Admin Home</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/manageItems">   <FaList className='text-xl' />Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">   <MdBookmarks className='text-xl' />Content Management</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/users">   <FaUsers className='text-2xl' />All Users</NavLink>
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
                                <NavLink to="/dashboard/paymentHistory">   <FaCalendar className='text-xl' />Donation History</NavLink>
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