import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Donation = () => {
    const location = useLocation();

    const donorName = location.state.name;
    const donationDate = location.state.start_Date;
    const donationAmount = location.state.amount;
    console.log(donorName, donationDate, donationAmount)

    return (
        <div className='container mx-auto py-24'>
          


            {/* -------Donation Section start------- */}

            <div className='p-24 mt-12 bg-red-100'>
                <Elements stripe={stripePromise}>

                    <CheckoutForm
                        donorName={donorName}
                        donationDate={donationDate}
                        donationAmount={donationAmount}
                    ></CheckoutForm>

                </Elements>
            </div>



        </div>
    );
};

export default Donation;