import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from '../../../assets/blood-logo.png'
import { TfiShoppingCart } from "react-icons/tfi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {

    // const { user, logOut } = useContext(AuthContext);
    // //console.log(user.email);
    // const [isAdmin] = useAdmin();
    // const [cart] = useCart();
    const [user, setUser] = useState(null)

    const handleLogOut = () => {
        // logOut()
        //     .then(() => { })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }


    const navOptions = <>
        <li><Link to='/' className='hover:underline text-lg'>Home</Link></li>
        <li><Link to='/donationRequests' className='hover:underline text-lg'>Donation Requests</Link></li>
        <li><Link to='/blog' className='hover:underline text-lg'>Blog</Link></li>


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

                    <button onClick={handleLogOut}
                        className="  font-bold">
                        <img className='rounded-full w-10 npm border-2 run dev' src={user?.photoURL} alt="" />
                    </button>
                </> : <>
                    <li> <Link to='/login'>
                        <IoPersonCircleSharp className="text-3xl" />
                    </Link></li>
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



                    {/* <div>
                        <Link to='/login'>
                            <button className='text-2xl p-2 mx-2 border-2  border-gray-500 rounded-full'><IoPersonCircleSharp /></button>
                        </Link>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default Navbar;