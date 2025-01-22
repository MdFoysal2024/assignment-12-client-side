import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditDonationRequest = () => {

    const editDonation = useLoaderData()
    console.log({ editDonation })
    // console.log( editDonation.blood_group)
    const { name, email } = editDonation || {}
    console.log(name)



    return (
        <div className='p-24'>
            <p></p>
            Edit and update DonationRequests {name}
        </div>
    );
};

export default EditDonationRequest;