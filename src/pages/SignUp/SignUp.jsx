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
import { imageUpload } from '../../api/utils';

const SignUp = () => {

    //custom hooks--->
    const axiosPublic = useAxiosPublic();

    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();



    const upazilas = [
        'Ajmiriganj', 'Atpara', 'Austagram', 'Babuganj', 'Bagerhat Sadar', 'Bajitpur', 'Bakerganj', 'Banaripara', 'Keranigonj', ' Indurkani', 'Kolabagan', 'Shahabag', 'Banani',
        'Bandarban Sadar', 'Banglabandha', 'Barguna Sadar', 'Barhatta', 'Barisal Sadar', 'Basail', 'Belabo', 'Belkuchi',
        'Benapole', 'Bhandaria', 'Bheramara', 'Bhola Sadar', 'Bhuapur', 'Bijoynagar', 'Birampur', 'Birganj',
        'Bishwanath', 'Boalkhali', 'Bogra Sadar', 'Chakaria', 'Chandanaish', 'Chandpur Sadar', 'Chapai Nawabganj Sadar',
        'Chhatak', 'Chuadanga Sadar', 'Comilla Sadar', 'Cox’s Bazar Sadar', 'Daulatpur', 'Debhata', 'Debidwar',
        'Dinajpur Sadar', 'Dohar', 'Dumki', 'Dumuria', 'Faridganj', 'Faridpur Sadar', 'Fatikchhari', 'Feni Sadar',
        'Gaibandha Sadar', 'Gopalganj Sadar', 'Gosairhat', 'Habiganj Sadar', 'Haluaghat', 'Ishwardi', 'Jamalpur Sadar',
        'Jessore Sadar', 'Jhalokati Sadar', 'Jhenaidah Sadar', 'Kalia', 'Kamalganj', 'Kapasia', 'Karimganj',
        'Khagrachari Sadar', 'Kishoreganj Sadar', 'Kotalipara', 'Kurigram Sadar', 'Kushtia Sadar', 'Lakshmipur Sadar',
        'Lalmonirhat Sadar', 'Madaripur Sadar', 'Manikganj Sadar', 'Meherpur Sadar', 'Mirpur', 'Mithapukur', 'Moulvibazar Sadar',
        'Munshiganj Sadar', 'Mymensingh Sadar', 'Naogaon Sadar', 'Narsingdi Sadar', 'Natore Sadar', 'Netrokona Sadar',
        'Nilphamari Sadar', 'Noakhali Sadar', 'Pabna Sadar', 'Panchagarh Sadar', 'Patuakhali Sadar', 'Pirojpur Sadar',
        'Rajbari Sadar', 'Rajshahi Sadar', 'Rangamati Sadar', 'Rangpur Sadar', 'Satkhira Sadar', 'Shariatpur Sadar',
        'Sherpur Sadar', 'Sirajganj Sadar', 'Sunamganj Sadar', 'Sylhet Sadar', 'Tangail Sadar', 'Thakurgaon Sadar',
        'Ullahpara', 'Akhaura', 'Anwara', 'Baliadangi', 'Baliakandi', 'Bamna', 'Bancharampur', 'Banglabazar', 'Banshkhali',
        'Betagi', 'Bhanga', 'Bholahat', 'Chandraganj', 'Char Fasson', 'Chatkhil', 'Chaugachha', 'Chirirbandar', 'Dakop',
        'Damudya', 'Dashmina', 'Dhamrai', 'Dhanbari', 'Dhunat', 'Dighinala', 'Gangni', 'Ghoraghat', 'Gobindaganj',
        'Gomastapur', 'Hathazari', 'Homna', 'Hossainpur', 'Ishwarganj', 'Itna', 'Jaintiapur', 'Jaldhaka', 'Kalai',
        'Kalapara', 'Kamalapur', 'Kamarkhanda', 'Kanaighat', 'Kawnia', 'Kazipur', 'Kendua', 'Keraniganj', 'Khaliajuri',
        'Khetlal', 'Khoksa', 'Kotalipara', 'Kutubdia', 'Lalmohan', 'Langadu', 'Lohagara', 'Madan', 'Magura Sadar',
        'Maheshkhali', 'Maheshpur', 'Mathbaria', 'Matiranga', 'Mirsharai', 'Mohalchhari', 'Moheshkhali', 'Muksudpur',
        'Nabiganj', 'Nagarpur', 'Nalitabari', 'Nandail', 'Naniarchar', 'Nawabganj', 'Nesarabad', 'Niamatpur',
        'Nikhli', 'Parbatipur', 'Patharghata', 'Pekua', 'Porsha', 'Raninagar', 'Ruma', 'Rupganj', 'Rupsha', 'Sadullapur',
        'Saidpur', 'Shahjadpur', 'Shibganj', 'Shyamnagar', 'Sonatola', 'South Surma', 'Subarnachar', 'Sujanagar', 'Tahirpur',
        'Tarail', 'Tarash', 'Teknaf', 'Tentulia', 'Titas', 'Tongibari', 'Zajira'
    ];

    const districts = [
        "Bagerhat",
        "Bandarban",
        "Barguna",
        "Barishal",
        "Bhola",
        "Bogura",
        "Brahmanbaria",
        "Chandpur",
        "Chattogram",
        "Chuadanga",
        "Cox's Bazar",
        "Cumilla",
        "Dhaka",
        "Dinajpur",
        "Faridpur",
        "Feni",
        "Gaibandha",
        "Gazipur",
        "Gopalganj",
        "Habiganj",
        "Jamalpur",
        "Jashore",
        "Jhalokati",
        "Jhenaidah",
        "Joypurhat",
        "Khagrachari",
        "Khulna",
        "Kishoreganj",
        "Kurigram",
        "Kushtia",
        "Lakshmipur",
        "Lalmonirhat",
        "Madaripur",
        "Magura",
        "Manikganj",
        "Meherpur",
        "Moulvibazar",
        "Munshiganj",
        "Mymensingh",
        "Naogaon",
        "Narail",
        "Narayanganj",
        "Narsingdi",
        "Natore",
        "Netrokona",
        "Nilphamari",
        "Noakhali",
        "Pabna",
        "Panchagarh",
        "Patuakhali",
        "Pirojpur",
        "Rajbari",
        "Rajshahi",
        "Rangamati",
        "Rangpur",
        "Satkhira",
        "Shariatpur",
        "Sherpur",
        "Sirajganj",
        "Sunamganj",
        "Sylhet",
        "Tangail",
        "Thakurgaon"
    ];





    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        //const photo = event.target.photo.value;
        const image = event.target.image.files[0]
        const photoURL = await imageUpload(image);
        const email = event.target.email.value;
        const bloodGroup = event.target.blood_group.value;
        const upazila = event.target.upazila.value;
        const district = event.target.district.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;
        const terms = event.target.terms.checked;



        console.log(name, photoURL, bloodGroup, upazila, district, email, password, terms);


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

                // Swal.fire({
                //     title: 'Sign Up',
                //     text: 'Sign Up Successfully',
                //     icon: 'success',
                //     confirmButtonText: 'Thank You'
                // })

                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        setUser({
                            ...user, displayName: name,
                            photoURL: photoURL
                        });
                       // navigate("/");
                        const userInfo = {
                            name: name,
                            email: email,
                            photo: photoURL,
                            bloodGroup: bloodGroup,
                            upazila: upazila,
                            district: district,
                            status: 'Active',
                            role: 'Donor'
                        }

                        axiosPublic.post('/users', userInfo)

                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('User data added to Database');

                                    Swal.fire({
                                        title: 'Sign Up',
                                        text: 'SignUp Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Thank You'
                                    });

                                    navigate("/");
                                }
                            })

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


            <div className='w-1/2 py-12 space-y-4 px-12 my-24 bg-pink-100 shadow-lg '>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Register Page</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>

                <div>
                    <h2 className='text-5xl font-bold text-center pb-6'>

                        <span className="text-red-600">Registration Form</span>
                    </h2>
                </div>


                <form onSubmit={handleRegister} className='space-y-4  '>


                    {/* Name & Email field */}
                    <div className='flex flex-col md:flex-row justify-between  gap-4'>
                        <label className="input w-full input-bordered flex items-center gap-2">
                            <div className='text-xl text-slate-500'>

                                <IoPersonCircle />
                            </div>
                            <input type="text" name="name" className="grow" placeholder="User Name" />
                        </label>

                        <label className="input w-full input-bordered flex items-center gap-2">
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
                    </div>

                    {/* Passsword & Confirm Password field */}
                    <div className='flex flex-col md:flex-row justify-between gap-4'>

                        <label className="input input-bordered flex items-center gap-2 w-full">
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

                        <label className="input input-bordered flex items-center gap-2 w-full">
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
                    </div>

                    {/* Photo & Blood group field */}
                    <div className='flex flex-col md:flex-row gap-4 justify-between'>
                        {/* <label className="input w-full input-bordered flex items-center gap-2">

                            <div className=' text-slate-500'>

                                <FaImage />
                            </div>
                            <input type="text" name="photo" className="grow" placeholder="Photo Url" />

                        </label> */}
                        <div className='w-full pt-2'>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image*
                            </label>
                            <input
                                className='p-2 bg-white input input-bordered w-full '
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>



                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Blood Group*</span>
                            </div>
                            <select defaultValue={'BloodGroup'} name="blood_group"
                                className="select select-bordered w-[320px] ">
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>


                            </select>
                        </label>
                    </div>

                    {/* District & Upazila field */}
                    <div className='flex flex-col w-full md:flex-row justify-between gap-4'>
                        {/* -----Upazila---- */}
                        <label>
                            <div className="label">
                                <span className="label-text"> Upazila:*</span>
                            </div>

                            <select
                                name="upazila"
                                className="select select-bordered w-[320px] "
                            // value={formData.upazila}
                            // onChange={handleChange}
                            // required
                            >
                                <option value="" >Your Upazila</option>
                                {upazilas.map((upazila, idx) => (
                                    <option key={idx} value={upazila}>
                                        {upazila}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {/* -----District---- */}
                        <label>
                            <div className="label">
                                <span className="label-text"> Distric:*</span>
                            </div>

                            <select
                                name="district"
                                className="select select-bordered w-[320px] "
                            // value={formData.upazila}
                            // onChange={handleChange}
                            // required
                            >
                                <option value="" className='w-full'>Your District</option>
                                {districts.map((district, idx) => (
                                    <option key={idx} value={district}>
                                        {district}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>







                    <div className="form-control">
                        <label className="label justify-start gap-4 cursor-pointer">
                            <input type="checkbox" name='terms' className="checkbox" />
                            <span className="label-text">Accept Our Terms & Condition </span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-red-600 hover:bg-red-800 text-white text-lg">Submit</button>
                    </div>
                </form >

                {
                    errorMessage && <p className='text-red-600 font-bold'>{errorMessage}</p>
                }
                {
                    success && <p className='text-green-600 font-bold'>Registered Success fully</p>
                }


                <p className='py-4 font-bold text-center'>Already have an account? please <Link to="/login" className='text-red-600 '>LOGIN</Link></p>
            </div>


            {/* Lottie Animation */}

            <div className="w-1/2">
                <Lottie animationData={loginLottieData}></Lottie>
            </div>


        </div>
    );
};

export default SignUp;