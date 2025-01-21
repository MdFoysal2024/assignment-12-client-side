import { useState } from "react";
import useAuth from "../../hooks/useAuth";
 import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const CreateDonationRequest = () => {

    const { user } = useAuth();
    const [startDate, setStartDate] = useState(new Date());

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



    const handleCreateDonationRequest = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const recipient_name = form.recipient_name.value;
        const address = form.address.value;
        const start_Date = startDate;
        const time = form.time.value;
        const blood_group = form.blood_group.value;
        const hospital_name = form.hospital_name.value;
        const upazila = form.upazila.value;
        const district = form.district.value;
        const request_message = form.request_message.value;




        console.log(name, email, recipient_name, address,start_Date, time, blood_group, hospital_name, upazila, district, request_message)

        const formData= {
            name, 
            email, 
            recipient_name, 
            address,
            start_Date, 
            time, 
            blood_group, 
            hospital_name, 
            upazila, 
            district, 
            request_message,
            status:'pending'
        }
        console.log(formData);

    }





    return (
        <div className=' bg-red-100 w-full h-full'>
            <div className=" p-24">
                <h2 className=" text-center pb-12 text-red-600 font-bold text-3xl md:text-5xl"> Blood Donation Request </h2>
                <div className="card bg-base-100 w-full rounded-none  shrink-0 shadow-2xl">
                    <form
                        onSubmit={handleCreateDonationRequest}
                        className="card-body p-24">


                        <div className="flex flex-col md:flex-row justify-between gap-6">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    name="name"
                                    disabled={true} defaultValue={user?.displayName}
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    disabled={true} defaultValue={user?.email}
                                    className="input input-bordered" required />
                            </div>
                        </div>



                        <div className="flex flex-col md:flex-row justify-between gap-6">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Recipient Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Recipient Name"
                                    name="recipient_name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Full Address:</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Full Address Here"
                                    className="input input-bordered" required />
                            </div>
                        </div>




                        <div className="flex flex-col md:flex-row justify-between gap-6">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donation Date:</span>
                                </label>
                                <DatePicker
                                    className='border p-3 w-full rounded-md'
                                    selected={startDate} //--->name = {startDate} is dynamic value
                                    onChange={date => setStartDate(date)}

                                />



                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donation Time</span>
                                </label>
                                <input
                                    type="time"
                                    placeholder="Donation Here"
                                    name="time"
                                    className="input input-bordered" required />
                            </div>
                        </div>





                        <div className="flex flex-col md:flex-row justify-between gap-6">

                            <label className="form-control w-full mb-6">
                                <div className="label">
                                    <span className="label-text">Blood Group*</span>
                                </div>
                                <select defaultValue={'BloodGroup'} name="blood_group"
                                    className="select select-bordered w-full ">
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
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> Hospital Name:</span>
                                </label>
                                <input
                                    type="text"
                                    name="hospital_name"
                                    placeholder="Hospital Name Here"
                                    className="input input-bordered" required />
                            </div>
                        </div>



                        <div className="flex flex-col md:flex-row justify-between gap-6 ">

                            <label >
                                <div className="label">
                                    <span className="label-text"> Upazila:*</span>
                                </div>

                                <select
                                    name="upazila"
                                    className="select w-[435px] select-bordered  "
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
                                    className="select select-bordered w-[435px] "
                                // value={formData.upazila}
                                // onChange={handleChange}
                                // required
                                >
                                    <option value="" className=''>Your District</option>
                                    {districts.map((district, idx) => (
                                        <option key={idx} value={district}>
                                            {district}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>




                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Request Message</span>
                            </label>

                            <textarea name="request_message" id="" className="input input-bordered" required ></textarea>
                        </div>





































                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 text-white text-lg hover:bg-red-800 w-64 mx-auto">Donation Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateDonationRequest;



