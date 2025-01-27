import { format } from 'date-fns';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const DonationRequestDetails = () => {
    const { user } = useAuth()
    const donationDetails = useLoaderData()
    console.log({ donationDetails })

    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure();

    const { _id, name, email, recipient_name, address, start_Date, time, blood_group, hospital_name, upazila, district, request_message, status } = donationDetails || {};

    // console.log(_id);


    const handleDonation = (event) => {
        event.preventDefault();

        const donorName = event.target.name.value;
        const donorEmail = event.target.email.value;

        console.log(name, email);

        const donorInfo = {
            donorName,
            donorEmail
        }


        axiosSecure.patch(`/donationRequest/inprogress/${_id}`, donorInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    // refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Donation is Confirm Now!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/donationRequests')
                }
            })

        // navigate('/donation', { state: { name, amount, start_Date } })
        // // Resetting the form
        // event.target.reset();
    }















    return (
        <div className='bg-red-100 h-full' >
            <div className='p-24'>

                <div className='flex flex-col md:flex-row bg-white px-12 py-12 mb-6 justify-between'>
                    <div>
                        <p className='text-xl font-bold text-red-600'>Requester Name:</p>
                        <p className='text-gray-500'>{name}</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold text-red-600'>Requester Email:</p>
                        <p className='text-gray-500'>{email}</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row  px-12 py-2 justify-between'>
                    <div>
                        <p className='text-xl font-bold text-red-600'>Recipient Name:</p>
                        <p className='text-gray-500'>{recipient_name}</p>
                    </div>


                    <div>
                        <p className='text-xl font-bold text-red-600'>Recipient Address:</p>
                        <p className='text-gray-500'>{address}</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row  px-12 py-2 justify-between'>
                    <div>
                        <p className='text-xl font-bold text-red-600'>Donation Date: </p>
                        <p className='text-gray-500'>{format(new Date(start_Date), 'P')} </p>
                    </div>

                    <div>
                        <p className='text-xl font-bold text-red-600'>Donation Time:</p>
                        <p className='text-gray-500'>{(() => {
                            const [hours, minutes] = time.split(':'); // Split the time into hours and minutes
                            const date = new Date();
                            date.setHours(hours, minutes, 0, 0); // Set only time on the current date
                            return date.toLocaleTimeString([], {
                                hour: 'numeric',
                                minute: '2-digit',
                            });
                        })()}</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row  px-12 py-2 justify-between'>
                    <div>
                        <p className='text-xl font-bold text-red-600'>Blood Group:</p>
                        <p className='text-gray-500'>{blood_group}</p>
                    </div>


                    <div>
                        <p className='text-xl font-bold text-red-600'>Hospital Name:</p>
                        <p className='text-gray-500'>{hospital_name}</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row  px-12 py-2 justify-between'>
                    <div>
                        <p className='text-xl font-bold text-red-600'>Upazila:</p>
                        <p className='text-gray-500'>{upazila}</p>
                    </div>


                    <div>
                        <p className='text-xl font-bold text-red-600'>District:</p>
                        <p className='text-gray-500'>{district}</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row  px-12 py-2 justify-between'>
                    <div>
                        <p className='text-xl font-bold text-red-600'> Donation Status:</p>

                        {
                            status === 'pending' ?
                                <> <p className='text-red-600 font-semibold bg-red-300  text-center '>{status}</p></>
                                :
                                <><p className='text-green-600 font-semibold bg-green-300  text-center '>{status}</p></>
                        }

                    </div>


                    <div>
                        <p className='text-xl font-bold text-red-600'>Request Message:</p>
                        <p className='text-gray-500'>{request_message}</p>
                    </div>

                </div>


                {
                    status === 'pending' ?
                        <>
                           <div className="flex justify-center"><button
                                onClick={() => document.getElementById('my_modal_4').showModal()}
                                className="flex gap-2  items-center  rounded-full bg-red-600 hover:bg-red-800 text-white text-3xl font-bold px-8 py-2"> Donate </button>
                            </div>  
                        </>
                        :
                        <>
                           
                        </>
                }





                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Donate</button> */}
                <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                            <form
                                onSubmit={handleDonation}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Donor Name:</span>
                                    </label>
                                    <input type="text" name='name' disabled={true} defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Donor Email:</span>
                                    </label>
                                    <input type="email" name='email' disabled={true} defaultValue={user?.email} placeholder="Name" className="input input-bordered" required />
                                </div>










                                <div className="flex justify-center gap-4">

                                    <div className="form-control mt-6">



                                        <button type="submit" className="btn  px-8  border-none md:text-xl text-white  hover:bg-red-800 bg-red-600">Confirm</button>

                                    </div>




                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn  md:text-xl text-red-600 border-red-600 border-2  hover:text-white hover:bg-red-800 bg-white px-8">Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>





                    </div>
                </dialog>


            </div>
        </div>
    );
};

export default DonationRequestDetails;