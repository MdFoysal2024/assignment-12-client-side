import React from 'react';
import banner_img from '../../../assets/banner-img.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Banner = () => {

    const { user } = useAuth();


    return (
        <div className="bg-red-200 md:p-24">

            <div className="flex flex-col md:flex-col lg:flex-row gap-12 py-12 justify-between items-center container mx-auto ">
                <div className="md:w-1/2 px-24 md:px-0 text-center flex flex-col  items-center md:items-start md:text-left pt-12 ">
                    <h1 className=" text-5xl md:text-6xl lg:text-8xl font-bold">Save lives By </h1>
                    <h3><span className="text-3xl md:text-4xl lg:text-6xl text-red-600 font-bold">Donating Blood.</span></h3>
                    <p className="my-4  text-justify">
                        The Blood Donor App Put the power to save lives in the palm of your hand, consectetur adipisicing elit. Libero, rerum obcaecati. Alias recusandae  deleniti suscipit voluptate commodi praesentium Donor App Put the power to incidunt accusantium.
                    </p>
                    <div className="flex gap-6 mt-2">
                        {user ?
                            <Link to='/signUp'>
                                <button disabled className="btn  border-none md:text-xl text-white  hover:bg-red-800 bg-red-600">Join as a donor</button>
                            </Link>
                            :
                            <Link to='/signUp'>
                                <button className="btn border-none md:text-xl text-white  hover:bg-red-800 bg-red-600">Join as a Donor</button>
                            </Link>

                        }

                        <Link to='/search'>
                            <button className="btn border-none md:text-xl text-red-600  hover:text-white hover:bg-red-800 bg-white">Search Donors</button>
                        </Link>


                    </div>
                </div>
                <div >
                    <img className='scale-110' src={banner_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;