import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const Donation = () => {
    const location = useLocation();

    const donorName = location.state.name;
    const donationDate = location.state.start_Date;
    const donationAmount = location.state.amount;
    console.log(donorName, donationDate, donationAmount)

    return (
        <div className='container mx-auto py-24'>
            Donate by stripe method
           
            <CheckoutForm
                donorName={donorName}
                donationDate={donationDate}
                donationAmount={donationAmount}
            ></CheckoutForm>

        </div>
    );
};

export default Donation;