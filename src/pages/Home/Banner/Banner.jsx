import React from 'react';
import banner_img from '../../../assets/banner-img.jpg'
const Banner = () => {
    return (
        <div className="bg-red-200 md:p-24">

            <div className="flex flex-col md:flex-row lg:flex-row gap-12 py-12 justify-between items-center container mx-auto ">
                <div className="md:w-1/2 px-24 md:px-0 text-center flex flex-col items-center md:items-start md:text-left pt-12 ">
                    <h1 className=" text-5xl md:text-6xl lg:text-8xl font-bold">Save lives By </h1>
                    <h3><span className="text-3xl md:text-4xl lg:text-6xl text-red-600 font-bold">Donating Blood.</span></h3>
                    <p className="my-8  text-justify">
                        The Blood Donor App Put the power to save lives in the palm of your hand, consectetur adipisicing elit. Libero, rerum obcaecati. Alias recusandae  deleniti suscipit voluptate commodi praesentium ipsum incidunt accusantium..
                    </p>
                    <div className="flex gap-6 mt-6">
                        <button className="btn border-none text-xl text-white  hover:bg-red-800 bg-red-600">Join as a donor</button>
                        <button className="btn border-none text-xl text-red-600  hover:text-white hover:bg-red-800 bg-white">Search Donors</button>
                    </div>
                </div>
                <div>
                    <img src={banner_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;