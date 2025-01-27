import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DonationRequestDetails = () => {

    const donationDetails = useLoaderData()
    console.log({ donationDetails })
    // console.log( editDonation.blood_group)
    const { name, email,recipient_name } = donationDetails || {}
    console.log(name)
    return (
        <div >
            <div className='p-24'>
            <p className='text-5xl font-bold text-red-600'>{name}</p>
            <p className='text-5xl font-bold text-red-600'>{recipient_name}</p>
            <p className='text-2xl font-bold text-red-600'>{email}</p>
            Donation Requests Details
        </div>
        </div>
    );
};

export default DonationRequestDetails;