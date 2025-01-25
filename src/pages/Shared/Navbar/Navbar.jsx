import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from '../../../assets/blood-logo.png'
import { TfiShoppingCart } from "react-icons/tfi";
import { IoPersonCircleOutline, IoPersonCircleSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { CiLogout } from "react-icons/ci";
import { MdDashboardCustomize, MdEmail } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import useAdmin from "../../../hooks/useAdmin";
import useVolunteer from "../../../hooks/useVolunteer";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    //console.log(user.email);
    // const [isAdmin] = useAdmin();

    //for test--->
    // const [isAdmin, setIsAdmin] = useState(null);


    const [isAdmin] = useAdmin();
    const [isVolunteer] = useVolunteer()

    const navOptions = <>
        <li><Link to='/' className='hover:underline text-lg font-semibold'>Home</Link></li>
        <li><Link to='/donationRequests' className='hover:underline text-lg font-semibold'>Donation Requests</Link></li>
        <li><Link to='/blog' className='hover:underline text-lg font-semibold'>Blog</Link></li>


        {
            //user? 'true': 'false'
            //user? condition? 'double true' : 'one true' : 'false'
        }
        {/* {
        user && isAdmin && <li><Link to='/dashboard/adminHome' className='hover:underline'>Dashboard</Link></li>
    }
    {
        user && !isAdmin && <li><Link to='/dashboard/userHome' className='hover:underline'>Dashboard</Link></li>
    } */}




        {/* <li><Link to='/secret' className='hover:underline'>Contact US</Link></li>
            <li><Link className='hover:underline'>Dashboard</Link></li> */}
        <div>

            {
                user ? <>

                    <li><Link to='/funding' className='hover:underline text-lg font-semibold'>Funding</Link></li>
                </> : <>

                </>
            }
        </div>



    </>


    return (
        <div className="  text-white ">
            <div className="navbar fixed z-10 bg-opacity-30 px-40  bg-red-950  hover:text-opacity-100 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm bg-slate-400 dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='lg:text-left w-[190px] bg-white bg-opacity-15 '>
                        <a className=" flex gap-1 px-3 text-xl">
                            <img className="w-12 " src={logo} alt="" />
                            <div>

                            </div>
                            <h2 className="text-xl flex flex-col md:text-3xl font-extrabold">
                                <span className="text-red-600">BLOOD</span>
                                <div className='flex justify-between'>
                                    <span className="text-white text-sm ">F </span>
                                    <span className="text-white text-sm ">O </span>
                                    <span className="text-white text-sm ">R </span>
                                    <span className="text-white text-sm ">L </span>
                                    <span className="text-white text-sm ">I </span>
                                    <span className="text-white text-sm ">F </span>
                                    <span className="text-white text-sm ">E </span>

                                </div>

                            </h2>
                        </a>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>



                    {
                        user && user?.email ?


                            <>
                                <div>
                                    {/* className="tooltip" data-tip="Home" */}
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                        <img className="w-12  mt-2 border-2 border-gray-500 rounded-full  " src={user?.photoURL} alt="" />
                                    </button>


                                    <dialog id="my_modal_5" className=" modal flex  justify-center left-auto right-16 top-6  w-[280px] modal-top ">
                                        <div className="bg-red-300 px-8 py-12">

                                            <img className="w-20 mb-6 border-2  border-gray-500 mx-auto rounded-full" src={user?.photoURL} alt="" />

                                            <div className=" flex flex-col space-y-1">
                                                <h3 className="font-bold text-left text-black text-lg flex items-center gap-2"><IoPersonCircleOutline />{user?.displayName}</h3>

                                                <p className=" text-center text-black flex items-center gap-2"><MdEmail />{user?.email}</p>

                                                <div>
                                                    {
                                                        isAdmin ? <>
                                                            <Link to="/dashboard/adminHome">
                                                                <p className="text-black flex gap-2 items-center"><MdDashboardCustomize />Dashboard</p>
                                                            </Link>
                                                        </>
                                                            : isVolunteer ? <>
                                                                <Link to="/dashboard/volunteerHome">
                                                                    <p className="text-black flex gap-2 items-center"><MdDashboardCustomize />Dashboard</p>
                                                                </Link>
                                                            </>
                                                                :
                                                                <>
                                                                    <Link to="/dashboard/donorHome">
                                                                        <p className="text-black flex gap-2 items-center"><MdDashboardCustomize />Dashboard</p>
                                                                    </Link>
                                                                </>

                                                    }
                                                </div>




                                                <Link to="/login">
                                                    <button onClick={logOut} className='text-black flex items-center gap-2'><CiLogout className="text-2xl font-bold" />Log-Out</button>
                                                </Link>

                                                <div className="text-left">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}

                                                        <button className="text-black   flex items-center gap-2 "><AiFillCloseCircle />Close</button>
                                                    </form>
                                                </div>
                                            </div>



                                        </div>
                                    </dialog>
                                </div>
                            </>

                            :
                            (<Link to='/login' className=' text-5xl text-red-600 font-bold rounded-full '><IoPersonCircleOutline /></Link>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;