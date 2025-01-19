import React, { useContext } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import loginLottieData from "../../assets/Animation-Register .json"
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";

const SignUp = () => {

    //custom hooks--->
    const axiosPublic = useAxiosPublic();

    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();








    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);



    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;
        const terms = event.target.terms.checked;
        console.log(name, photo, email, password, terms);

        //reset error and status 
        setErrorMessage("");
        setSuccess(false);

        if (password.length < 6) {
            setErrorMessage("Password will be minimum 6 characters")
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('Password will be at least one uppercase, at least one lowercase , at least one number, and at least one special character');
            return;
        }

        if (password !== confirm_password) {
            setErrorMessage("Password Didn't Match")
            return;
        }

        if (!terms) {
            setErrorMessage('Please Checked our Terms & Condition')
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user
                //console.log(user)
                //setUser(user);

                setSuccess(true);

                Swal.fire({
                    title: 'Sign Up',
                    text: 'Sign Up Successfully',
                    icon: 'success',
                    confirmButtonText: 'Thank You'
                })

                updateUserProfile({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser({
                            ...user, displayName: name,
                            photoURL: photo
                        });
                        navigate("/");
                        // const userInfo = {
                        //     name: name,
                        //     email: email,
                        //     photo: photo,
                        //     status: 'active',
                        //     role: 'donor'
                        // }

                        // axiosPublic.post('/users', userInfo)

                        //     .then(res => {
                        //         if (res.data.insertedId) {
                        //             console.log('User data added to Database');

                        //             Swal.fire({
                        //                 title: 'Sign Up',
                        //                 text: 'SignUp Successfully',
                        //                 icon: 'success',
                        //                 confirmButtonText: 'Thank You'
                        //             });

                        //             navigate("/");
                        //         }
                        //     })

                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..

                setErrorMessage(error.message);
                setSuccess(false);
            });


    }






    return (

        <div className="container mx-auto  justify-center gap-16 w-full flex flex-col md:flex-row lg:flex-row items-center">


            <div className='py-12 w-[520px] space-y-4 px-12 my-12 bg-pink-100 shadow-lg '>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Register Page</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>

                <div>
                    <h2 className='text-4xl font-bold text-center pb-6'>

                        Please <span className="text-orange-600">Registration</span>
                    </h2>
                </div>


                <form onSubmit={handleRegister} className='space-y-4'>

                    <label className="input input-bordered flex items-center gap-2">
                        <div className='text-xl text-slate-500'>

                            <IoPersonCircle />
                        </div>
                        <input type="text" name="name" className="grow" placeholder="User Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <div className=' text-slate-500'>

                            <FaImage />
                        </div>
                        <input type="text" name="photo" className="grow" placeholder="Photo Url" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" name="email" className="grow" placeholder="Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="grow"
                            placeholder='password' required />
                        <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn-xs text-xl">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </button>

                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirm_password"
                            className="grow"
                            placeholder='Confirm Password' required />
                        <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn-xs text-xl">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </button>

                    </label>

                    <div className="form-control">
                        <label className="label justify-start gap-4 cursor-pointer">
                            <input type="checkbox" name='terms' className="checkbox" />
                            <span className="label-text">Accept Our Terms & Condition </span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-orange-600 hover:bg-orange-800 text-white text-lg">REGISTRATION</button>
                    </div>
                </form >

                {
                    errorMessage && <p className='text-red-600 font-bold'>{errorMessage}</p>
                }
                {
                    success && <p className='text-green-600 font-bold'>Registered Success fully</p>
                }


                <p className='py-4 font-bold text-center'>Already have an account? please <Link to="/login" className='text-orange-600 '>LOGIN</Link></p>
            </div>


            {/* Lottie Animation */}

            <div className="w-[520px]">
                <Lottie animationData={loginLottieData}></Lottie>
            </div>


        </div>
    );
};

export default SignUp;