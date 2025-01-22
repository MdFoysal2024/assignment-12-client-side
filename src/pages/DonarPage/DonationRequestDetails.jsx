import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DonationRequestDetails = () => {

    const editDonation = useLoaderData()
    console.log({ editDonation })
    // console.log( editDonation.blood_group)
    const { name, email } = editDonation || {}
    console.log(name)
    return (
        <div>
            <div className='p-24'>
            <p className='text-5xl font-bold text-red-600'>{name}</p>
            <p className='text-2xl font-bold text-red-600'>{email}</p>
            Edit and update DonationRequests 
        </div>
        </div>
    );
};

export default DonationRequestDetails;