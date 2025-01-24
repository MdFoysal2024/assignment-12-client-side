import React from 'react';
import useUserInfo from '../../hooks/useUserInfo';
import { Link } from 'react-router-dom';

const UserProfile = () => {

    const [userInfo] = useUserInfo();
    console.log(userInfo)

    return (
        <div>
            <div className=' py-12 '>








                <div className='my-12 space-y-6 mx-24 bg-red-200 p-24'>
                    <div className='text-center pb-12'>

                        <img className="w-44 mx-auto rounded-full  mb-12 border-4 " src={userInfo?.photo} alt="" />
                        <p className=' bg-red-600 text-white w-48 mx-auto p-2 text-3xl font-bold'>My Profile</p>
                    </div>



                    <div className=' flex justify-between'>

                        <div className='flex flex-col  gap-6 justify-between '>
                            <div>
                                <p className='text-xl  text-gray-500 font-semibold'>Full Name:</p>
                                <p className='uppercase text-lg font-bold'>{userInfo?.name}</p>
                            </div>
                            <div >
                                <p className='text-xl  text-gray-500 font-semibold'>Email:</p>
                                <p className=' text-lg font-bold'>{userInfo?.email}</p>
                            </div>
                            <div>
                                <p className='text-xl  text-gray-500 font-semibold'>Address:</p>
                                <p className=' text-lg font-bold'>{userInfo?.upazila}, {userInfo?.district}</p>
                            </div>

                        </div>

                        <div className='flex flex-col gap-6  justify-between'>

                            <div>
                                <p className='text-xl  text-gray-500 font-semibold'>User Role:</p>
                                <p className='uppercase text-lg font-bold'>{userInfo.role}</p>
                            </div>
                            <div >
                                <p className='text-xl  text-gray-500 font-semibold'>User Status:</p>
                                <p className='uppercase text-lg font-bold'>{userInfo.status}</p>
                            </div>
                            <div >
                                <p className='text-xl  text-gray-500 font-semibold'>Blood Group:</p>
                                <p className='uppercase text-lg font-bold'>({userInfo?.bloodGroup})</p>
                            </div>


                        </div>
                    </div>



                    <div className=' pt-12'>
                        <Link to='/dashboard/updateProfile'>
                            <button className=' bg-red-600 text-white   mx-auto px-4 py-2 text-xl font-bold'>
                                Edit Profile
                            </button>
                        </Link>
                    </div>

                </div>



            </div>



        </div>
    );
};

export default UserProfile;