import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useUserInfo from '../../hooks/useUserInfo';
import { imageUpload } from '../../api/utils';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UpdateProfile = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { user, setUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const [userInfo] = useUserInfo();
    console.log(userInfo._id)

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



    const handleUpdateProfile = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        //const photo = event.target.photo.value;
        const image = event.target.image.files[0]
        const photoURL = await imageUpload(image);
        const email = event.target.email.value;
        const bloodGroup = event.target.blood_group.value;
        const upazila = event.target.upazila.value;
        const district = event.target.district.value;
        console.log({ name, photoURL, email, bloodGroup, upazila, district });


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
                const userUpdateInfo = {
                    name: name,
                    photo: photoURL,
                    bloodGroup: bloodGroup,
                    upazila: upazila,
                    district: district,
                }

                //axiosSecure.patch(`/users/${userInfo._id}`, userUpdateInfo)
                //navigate("/dashboard/userProfile");

                axiosSecure.put(`/users/${userInfo._id}`, userUpdateInfo)

                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            console.log('User data added to Database');

                            Swal.fire({
                                title: 'Profile Updated',
                                text: `${user?.displayName} Profile Updated Successfully`,
                                icon: 'success',
                                confirmButtonText: 'Thank You'
                            });

                            navigate("/dashboard/userProfile");
                        }
                    })

            })
            .catch((error) => {
                console.log(error);
            });


    }

    return (
        <div className=' md:m-24 p-6 md:p-24 bg-red-200'>

            <h2 className='text-red-600 font-bold text-2xl md:text-4xl text-center pb-12'>  Update Profile Information</h2>

            <form onSubmit={handleUpdateProfile} className='space-y-4  '>


                {/* Name & Email field */}
                <div className='flex flex-col md:flex-row justify-between  gap-4'>
                    <div className='w-full'>
                        <div className="label">
                            <span className="label-text"> Profile Name:*</span>
                        </div>
                        <label className="input w-full input-bordered flex items-center gap-2">
                            <input type="text" name="name" defaultValue={user?.displayName} className="grow" placeholder="User Name" />
                        </label>
                    </div>

                    <div className='w-full'>
                        <div className="label">
                            <span className="label-text"> Email:*</span>
                        </div>
                        <label className="input w-full input-bordered flex items-center gap-2">

                            <input type="email" name="email" disabled={true} defaultValue={user?.email} className="grow" placeholder="Email" />
                        </label>
                    </div>
                </div>


                {/* Photo & Blood group field */}
                <div className='flex flex-col md:flex-row gap-4 justify-between'>

                    <div className='w-full pt-2'>
                        <label htmlFor='image' className='block mb-2 text-sm'>
                            Profile Image*
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
                            className="select select-bordered ">
                            <option value={userInfo.bloodGroup}>{userInfo.bloodGroup}</option>
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
                    <label className='w-full'>
                        <div className="label">
                            <span className="label-text"> Upazila:*</span>
                        </div>

                        <select
                            name="upazila"
                            className="select select-bordered w-full "
                        // value={formData.upazila}
                        // onChange={handleChange}
                        // required
                        >
                            <option value={userInfo.upazila} >{userInfo.upazila}</option>
                            {upazilas.map((upazila, idx) => (
                                <option key={idx} value={upazila}>
                                    {upazila}
                                </option>
                            ))}
                        </select>
                    </label>
                    {/* -----District---- */}
                    <label className='w-full'>
                        <div className="label">
                            <span className="label-text"> Distric:*</span>
                        </div>

                        <select
                            name="district"
                            className="select select-bordered w-full "
                        // value={formData.upazila}
                        // onChange={handleChange}
                        // required
                        >
                            <option value={userInfo.district} className=''>{userInfo.district}</option>
                            {districts.map((district, idx) => (
                                <option key={idx} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>








                <div className="form-control mt-6">
                    <button className="btn w-48 mx-auto mt-6  bg-red-600 hover:bg-red-800 text-white text-lg">Update</button>
                </div>
            </form >

        </div>
    );
};

export default UpdateProfile;