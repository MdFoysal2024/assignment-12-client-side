import React from 'react';
import bgImg from '../../../images/blood_image.jpg'
const ContactForm = () => {
    return (
        <div className='my-24'>
            {/* Extra Section */}
            <div
                className="hero  bg-fixed "
                style={{
                    backgroundImage: `url(${bgImg})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex flex-col md:flex-col lg:flex-row justify-between md:gap-24  m-12 md:m-24 bg-opacity-30  text-neutral-content ">
                    <div className="text-center md:text-left px-6">
                        <h1 className=" text-red-600   text-4xl md:text-6xl font-bold">The Blood Donor</h1>
                        <h3 className=" my-2 text-white   text-3xl md:text-4xl font-bold">Contact Form.</h3>
                        <p className="mb-5 text-white ">
                        We answer the most frequently asked questions in the new Be a Hero Donor Guide. Enter your information to learn the truth about some blood donation myths and how you can help patients.
                        </p>

                    </div>
                    <div className="card bg-red-100 rounded-none py-12 px-6 w-[360px]   md:w-[540px]  shrink-0 shadow-2xl">
                        <h1 className="text-4xl text-center text-red-600 pt-4 font-bold">Contact Us!</h1>
                        <form className="card-body">

                            <div className='flex flex-col md:flex-row justify-between gap-4 w-full'>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Donor Name*</span>
                                    </label>
                                    <input type="text" placeholder="Your Name Here..." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Donor Email*</span>
                                    </label>
                                    <input type="email" placeholder="Your Email Hrere..." className="input input-bordered" required />
                                </div>
                            </div>


                            <div className='flex flex-col md:flex-row justify-between gap-4'>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Contact Number</span>
                                    </label>
                                    <input type="number" placeholder="Your Number..." className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blood Group*</span>
                                    </label>
                                    <select defaultValue={'BloodGroup'} name="blood_group"
                                        className="select text-gray-500 select-bordered w-[215px] ">
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>


                                    </select>

                                </div>
                            </div>






                            <div className="form-control mt-6">
                                <button className="btn bg-red-600 text-white w-40 mx-auto hover:bg-red-800">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;