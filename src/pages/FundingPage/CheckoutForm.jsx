import { format } from 'date-fns';
import React from 'react';

const CheckoutForm = ({ donorName, donationDate, donationAmount }) => {


    const donorInfo = {
        donorName,
        donationDate,
        donationAmount
    }
    console.log(donorInfo);

    return (
        <div>


            <p>{donorName}, </p>
            <p>{format(new Date(donationDate), 'P')},</p>
            <p>${donationAmount}</p>



        </div>
    );
};

export default CheckoutForm;